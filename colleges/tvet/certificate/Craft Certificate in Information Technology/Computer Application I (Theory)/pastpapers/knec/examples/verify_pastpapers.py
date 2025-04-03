from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import os
import sys  # Import sys module
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
            "styling": self.verify_styling(html_path), # Pass html_path
            "images": self.verify_images(),
            "sidebar": self.verify_sidebar(),
            "placeholders": self.verify_placeholder_links(),
            "answers": self.verify_answer_content() # New check for empty answers
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
    
    def verify_styling(self, html_path): # Accept html_path
        try:
            style_links = self.driver.find_elements(By.CSS_SELECTOR, 'link[rel="stylesheet"]')
            found_correct_link = False
            correct_filename = "styles.css" # Expecting this filename

            for link in style_links:
                href = link.get_attribute("href")
                if href:
                    # Check if the basename of the href matches the expected filename
                    href_filename = os.path.basename(href)
                    if href_filename == correct_filename:
                        found_correct_link = True
                        # Check if the file actually exists relative to the HTML file
                        html_dir = os.path.dirname(os.path.abspath(html_path))
                        expected_css_path = os.path.join(html_dir, correct_filename)
                        if not os.path.exists(expected_css_path):
                            return {"status": "FAIL", "message": f"Stylesheet link found ('{correct_filename}'), but file does not exist at '{expected_css_path}'"}
                        break # Found the correct link and file exists

            if not found_correct_link:
                 # If no link with the correct basename was found
                 return {"status": "FAIL", "message": f"Stylesheet link with filename '{correct_filename}' not found or path incorrect."}

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
    def verify_placeholder_links(self):
        try:
            all_links = self.driver.find_elements(By.TAG_NAME, "a")
            placeholder_links = []
            for link in all_links:
                href = link.get_attribute("href")
                # Check if href is None, empty string, or just "#"
                if href is None or href.strip() == "" or href.strip() == "#":
                    # Try to get some identifying text for the link
                    link_text = link.text.strip()
                    if not link_text:
                        # If no text, maybe check for an image inside?
                        try:
                            img = link.find_element(By.TAG_NAME, "img")
                            link_text = f"img src='{img.get_attribute('src')}'"
                        except:
                            link_text = "[link with no text]"
                    placeholder_links.append(f"'{link_text}' (href='{href}')")
            
            if placeholder_links:
                count = len(placeholder_links)
                # Optionally list the links found if needed for debugging
                # details = ", ".join(placeholder_links)
                # return {"status": "WARN", "message": f"Found {count} placeholder links: {details}"}
                return {"status": "WARN", "message": f"Found {count} placeholder links (href='' or href='#')"}
            return {"status": "PASS", "message": "No placeholder links found"}
        except Exception as e:
            return {"status": "FAIL", "message": f"Placeholder link verification failed: {str(e)}"}
    def verify_answer_content(self):
        try:
            questions = self.driver.find_elements(By.CSS_SELECTOR, "div.question")
            empty_answers = []
            
            if not questions:
                return {"status": "INFO", "message": "No question divs found to check answers"}

            for question in questions:
                question_id = question.get_attribute("id") or "[No ID]"
                try:
                    answer_content = question.find_element(By.CSS_SELECTOR, ".answer-section .answer-content")
                    # Check text content, ignoring potential disclaimer
                    all_elements = answer_content.find_elements(By.XPATH, "./*") # Get all direct children
                    
                    # Filter out the disclaimer paragraph if it exists
                    non_disclaimer_elements = [el for el in all_elements if not (el.tag_name == 'p' and 'Disclaimer:' in el.text)]
                    
                    # Check if there are any non-disclaimer elements or if the raw text (minus disclaimer) is empty
                    raw_text = answer_content.text
                    disclaimer_text = ""
                    try:
                        disclaimer_p = answer_content.find_element(By.XPATH, "./p[contains(text(), 'Disclaimer:')]")
                        disclaimer_text = disclaimer_p.text
                    except:
                        pass # No disclaimer found
                        
                    effective_text = raw_text.replace(disclaimer_text, "").strip()

                    if not non_disclaimer_elements and not effective_text:
                         empty_answers.append(question_id)

                except Exception as e:
                    # Could mean no answer-section or answer-content found for this question
                    # Log this as a potential structure issue, but maybe not a failure of *this* check
                    print(f"  - Warning: Could not find/process answer content for question '{question_id}': {e}")
                    # Optionally add to a different list if needed
                    # empty_answers.append(f"{question_id} (Structure Error)")
            
            if empty_answers:
                count = len(empty_answers)
                details = ", ".join(empty_answers)
                return {"status": "WARN", "message": f"Found {count} questions with potentially empty answer sections: {details}"}
            
            return {"status": "PASS", "message": f"All {len(questions)} questions appear to have answer content"}
            
        except Exception as e:
            return {"status": "FAIL", "message": f"Answer content verification failed: {str(e)}"}


    def close(self):
        self.driver.quit()

def main():
    verifier = PastpaperVerifier()
    
    # Check for command-line argument
    if len(sys.argv) > 1:
        html_file_to_verify = sys.argv[1]
        if os.path.exists(html_file_to_verify):
            print(f"\nVerifying {os.path.basename(html_file_to_verify)}...")
            results = verifier.verify_html_file(html_file_to_verify)
            if results:
                print(f"\nResults for {html_file_to_verify}:")
                print("-" * 50)
                for check, result in results.items():
                    status = result["status"]
                    message = result["message"]
                    # Ensure consistent key access
                    status = result.get("status", "UNKNOWN")
                    message = result.get("message", "No message provided")
                    print(f"{check.upper()}: {status} - {message}")
        else:
            print(f"Error: File not found - {html_file_to_verify}")
    else:
        print("Usage: python verify_pastpapers.py <path_to_html_file>")
        # Optionally, keep the old behavior here if needed
        # print("No file specified. Verifying default list...")
        # parent_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
        # html_files = [...] # Define the list as before
        # for html_file in html_files:
        #     # ... verification logic ...

    verifier.close()

if __name__ == "__main__":
    main()