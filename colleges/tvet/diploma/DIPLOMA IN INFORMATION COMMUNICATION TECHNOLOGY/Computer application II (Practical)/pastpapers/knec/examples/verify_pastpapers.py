from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import os
from bs4 import BeautifulSoup
import html5lib

class PastpaperVerifier:
    def __init__(self):
        # Set up Chrome options for headless browsing
        chrome_options = Options()
        chrome_options.add_argument("--headless")
        chrome_options.add_argument("--no-sandbox")
        chrome_options.add_argument("--disable-dev-shm-usage")
        
        self.driver = webdriver.Chrome(options=chrome_options)
        self.wait = WebDriverWait(self.driver, 10)
        
    def verify_html_file(self, html_path):
        print(f"\nVerifying {html_path}...")
        
        # First verify HTML structure and syntax
        structure_result = self.verify_html_syntax(html_path)
        if structure_result["status"] == "FAIL":
            print(f"\nResults for {html_path}:")
            print("-" * 50)
            print(f"STRUCTURE: {structure_result['status']} - {structure_result['message']}")
            return
        
        # If structure is valid, proceed with other checks
        file_url = f"file://{os.path.abspath(html_path)}"
        self.driver.get(file_url)
        
        results = {
            "structure": structure_result,
            "elements": self.verify_required_elements(),
            "navigation": self.verify_navigation(),
            "styling": self.verify_styling(),
            "images": self.verify_images(),
            "sidebar": self.verify_sidebar()
        }
        
        return results

    def verify_html_syntax(self, html_path):
        try:
            with open(html_path, 'r', encoding='utf-8') as file:
                content = file.read()
                
            # Parse with html5lib for strict HTML5 validation
            soup = BeautifulSoup(content, 'html5lib')
            
            # Check for required elements
            if not soup.find('main'):
                return {"status": "FAIL", "message": "Missing <main> tag"}
            
            # Check for mismatched tags
            main_tags = content.count('<main')
            main_closing_tags = content.count('</main>')
            if main_tags != main_closing_tags:
                return {"status": "FAIL", "message": f"Mismatched <main> tags: {main_tags} opening vs {main_closing_tags} closing tags"}
            
            # Check main structure
            main_tag = soup.find('main')
            if not main_tag.find(class_='main-content'):
                return {"status": "FAIL", "message": "Missing .main-content container inside <main>"}
            
            # Check content structure
            main_content = main_tag.find(class_='main-content')
            if not (main_content.find(class_='sidebar') and main_content.find(class_='content-wrapper')):
                return {"status": "FAIL", "message": "Incorrect structure: .main-content should contain .sidebar and .content-wrapper"}
            
            return {"status": "PASS", "message": "HTML structure is valid"}
        except Exception as e:
            return {"status": "FAIL", "message": f"HTML syntax error: {str(e)}"}
    
    def verify_required_elements(self):
        try:
            # Check for header and its contents
            header = self.wait.until(EC.presence_of_element_located((By.TAG_NAME, "header")))
            if not header.find_element(By.TAG_NAME, "h1"):
                return {"status": "FAIL", "message": "Missing h1 in header"}
                
            # Check for main content structure
            main = self.driver.find_element(By.TAG_NAME, "main")
            if not main.get_attribute("class") or "container" not in main.get_attribute("class"):
                return {"status": "FAIL", "message": "Main tag missing container class"}
            
            # Check content organization
            content_wrapper = self.driver.find_element(By.CLASS_NAME, "content-wrapper")
            if not content_wrapper:
                return {"status": "FAIL", "message": "Missing content-wrapper element"}
            
            return {"status": "PASS", "message": "All required elements present and properly structured"}
        except Exception as e:
            return {"status": "FAIL", "message": f"Required elements verification failed: {str(e)}"}
    
    def verify_navigation(self):
        try:
            nav_links = self.driver.find_elements(By.CSS_SELECTOR, ".paper-navigation a:not(.disabled)")
            working_links = []
            broken_links = []
            
            for link in nav_links:
                href = link.get_attribute("href")
                if href and href.endswith(".html"):
                    working_links.append(href)
                else:
                    broken_links.append(href)
            
            if broken_links:
                return {"status": "WARN", "message": f"Found {len(broken_links)} potentially broken links"}
            return {"status": "PASS", "message": f"Found {len(working_links)} valid navigation links"}
        except Exception as e:
            return {"status": "FAIL", "message": f"Navigation verification failed: {str(e)}"}
    
    def verify_styling(self):
        try:
            style_links = self.driver.find_elements(By.CSS_SELECTOR, 'link[rel="stylesheet"]')
            if not any("styles.css" in link.get_attribute("href") for link in style_links):
                return {"status": "FAIL", "message": "styles.css not found"}
            
            main_content = self.driver.find_element(By.CLASS_NAME, "main-content")
            style = self.driver.execute_script('''
                var style = window.getComputedStyle(arguments[0]);
                return {
                    margin: style.margin,
                    padding: style.padding,
                    display: style.display
                }
            ''', main_content)
            
            style_checks = {
                "margin": style['margin'] != '0px',
                "padding": style['padding'] != '0px',
                "display": style['display'] in ['block', 'flex']
            }
            
            failed_checks = [k for k, v in style_checks.items() if not v]
            if failed_checks:
                return {"status": "WARN", "message": f"Basic styling missing for: {', '.join(failed_checks)}"}
            
            return {"status": "PASS", "message": "CSS styling verified"}
        except Exception as e:
            return {"status": "FAIL", "message": f"Styling verification failed: {str(e)}"}
    
    def verify_images(self):
        try:
            images = self.driver.find_elements(By.TAG_NAME, "img")
            if not images:
                return {"status": "INFO", "message": "No images found in document"}
            
            broken_images = []
            for img in images:
                if not img.get_attribute("complete") or img.get_attribute("naturalWidth") == "0":
                    broken_images.append(img.get_attribute("src"))
            
            if broken_images:
                return {"status": "FAIL", "message": f"Found {len(broken_images)} broken images"}
            return {"status": "PASS", "message": f"All {len(images)} images loaded successfully"}
        except Exception as e:
            return {"status": "FAIL", "message": f"Image verification failed: {str(e)}"}
    
    def verify_sidebar(self):
        try:
            sidebar = self.driver.find_element(By.CLASS_NAME, "sidebar")
            if not sidebar.is_displayed():
                return {"status": "WARN", "message": "Sidebar exists but may not be visible"}
            
            # Check for sidebar content
            links = sidebar.find_elements(By.TAG_NAME, "a")
            if not links:
                return {"status": "WARN", "message": "Sidebar has no navigation links"}
            
            return {"status": "PASS", "message": f"Sidebar verified with {len(links)} links"}
        except Exception as e:
            return {"status": "FAIL", "message": f"Sidebar verification failed: {str(e)}"}
    
    def close(self):
        self.driver.quit()

def main():
    verifier = PastpaperVerifier()
    
    # List of HTML files to verify from parent directory
    parent_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    html_files = [
        os.path.join(parent_dir, "2023m.html"),
        os.path.join(parent_dir, "2022j.html"),
        os.path.join(parent_dir, "2017nov.html"),
        os.path.join(parent_dir, "2017july.html"),
        os.path.join(parent_dir, "2016nov.html"),
        os.path.join(parent_dir, "2016july.html"),
        os.path.join(parent_dir, "2015n.html"),
        os.path.join(parent_dir, "2015july.html"),
        os.path.join(parent_dir, "2014nov.html"),
        os.path.join(parent_dir, "2014july.html"),
        os.path.join(parent_dir, "2013n.html"),
        os.path.join(parent_dir, "2012n.html")
    ]
    
    # Verify each HTML file
    for html_file in html_files:
        if os.path.exists(html_file):
            print(f"\nVerifying {os.path.basename(html_file)}...")
            results = verifier.verify_html_file(html_file)
            if results:  # Only print if we got results (no early failure)
                print(f"\nResults for {html_file}:")
                print("-" * 50)
                for check, result in results.items():
                    status = result["status"]
                    message = result["message"]
                    print(f"{check.upper()}: {status} - {message}")
    
    verifier.close()

if __name__ == "__main__":
    main()