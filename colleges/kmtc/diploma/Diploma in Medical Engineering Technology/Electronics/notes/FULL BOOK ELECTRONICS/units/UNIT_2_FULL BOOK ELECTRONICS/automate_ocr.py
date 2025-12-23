#!/usr/bin/env python3
import argparse
import os
import subprocess
import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager

def automate_upload_and_extract(pdf_path, output_html='content.txt', extraction_script='extract_images.py'):
    # Setup headless Chrome
    options = Options()
    options.add_argument('--headless')
    options.add_argument('--disable-gpu')
    service = Service(ChromeDriverManager().install())
    driver = webdriver.Chrome(service=service, options=options)

    try:
        # Step 1: Open the page
        driver.get('https://pieree369-olmocr.hf.space/')
        
        # Wait longer for the page to load completely
        print("Waiting for page to load...")
        time.sleep(10)  # Increased wait time
        
        # Debug: Print page title and current URL
        print(f"Page title: {driver.title}")
        print(f"Current URL: {driver.current_url}")
        
        # Step 2: Try multiple selectors to find the file upload element
        upload_input = None
        selectors_to_try = [
            'input[data-testid="stFileUploaderDropzoneInput"]',
            'input[type="file"]',
            '[data-testid="stFileUploaderDropzone"] input',
            '.stFileUploader input[type="file"]',
            'input[accept*="pdf"]',
            'input[accept*=".pdf"]'
        ]
        
        for selector in selectors_to_try:
            try:
                print(f"Trying selector: {selector}")
                upload_input = driver.find_element(By.CSS_SELECTOR, selector)
                print(f"Found element with selector: {selector}")
                break
            except Exception as e:
                print(f"Selector {selector} failed: {e}")
                continue
        
        if upload_input is None:
            # Debug: Print page source to understand structure
            print("Could not find upload element. Saving page source for debugging...")
            with open("debug_page_source.html", "w", encoding="utf-8") as f:
                f.write(driver.page_source)
            raise Exception("Could not find file upload element with any known selector")
        
        upload_input.send_keys(os.path.abspath(pdf_path))
        print("File uploaded successfully")
        
        # Take screenshot after upload
        driver.save_screenshot("screenshot_after_upload.png")
        print("Screenshot saved: screenshot_after_upload.png")
        
        # Wait a moment for the file to be registered
        time.sleep(3)
        
        # Step 3.5: Click the submit button to start processing
        try:
            submit_button = driver.find_element(By.CSS_SELECTOR, 'button[data-testid="stBaseButton-secondary"]')
            submit_button.click()
            print("Submit button clicked, processing started...")
            
            # Take screenshot after clicking submit
            time.sleep(2)
            driver.save_screenshot("screenshot_after_submit.png")
            print("Screenshot saved: screenshot_after_submit.png")
        except Exception as e:
            print(f"Could not find or click submit button: {e}")
            # Try alternative selectors
            try:
                submit_button = driver.find_element(By.XPATH, "//button[contains(., 'Submit')]")
                submit_button.click()
                print("Submit button clicked (using XPath), processing started...")
                
                # Take screenshot after clicking submit
                time.sleep(2)
                driver.save_screenshot("screenshot_after_submit.png")
                print("Screenshot saved: screenshot_after_submit.png")
            except:
                print("Could not find submit button with any method, proceeding anyway...")

        # Step 3: Wait for processing to complete
        # First wait for the skeleton loader to disappear (indicating processing is done)
        print("Waiting for processing to complete...")
        wait = WebDriverWait(driver, 180)  # Longer timeout for processing
        
        try:
            # Wait for skeleton to disappear
            wait.until_not(EC.presence_of_element_located((By.CSS_SELECTOR, '[data-testid="stSkeleton"]')))
            print("Skeleton loader disappeared, processing may be complete")
        except:
            print("Skeleton loader still present after timeout, proceeding anyway...")
        
        # Additional wait to ensure content is fully loaded
        time.sleep(10)
        
        # Take screenshot before checking for output
        driver.save_screenshot("screenshot_before_extraction.png")
        print("Screenshot saved: screenshot_before_extraction.png")
        
        # Now check for actual output
        output_detected = False
        output_selectors = [
            'img[src^="data:image"]',  # Base64 images
            '.stImage > img',  # Streamlit images
            'div[data-testid="stVerticalBlock"] > div:not(:first-child) img',  # Images in output blocks
            'div[data-testid="stMarkdownContainer"]:not(:first-child)',  # Text output beyond initial UI
            '.stDataFrame',  # Data tables
            '.stCode'  # Code blocks
        ]
        
        for selector in output_selectors:
            try:
                elements = driver.find_elements(By.CSS_SELECTOR, selector)
                if elements:
                    print(f"Found {len(elements)} elements with selector: {selector}")
                    output_detected = True
                    break
            except:
                continue
        
        if not output_detected:
            print("No specific output detected, waiting additional time...")
            time.sleep(30)  # Extra wait

        # Step 4: Extract the relevant HTML content
        # Try different methods to get the processed content
        html_content = ""
        
        # Method 1: Try to find all image elements
        try:
            images = driver.find_elements(By.CSS_SELECTOR, 'img')
            print(f"Found {len(images)} img elements")
            for img in images:
                src = img.get_attribute('src')
                if src and src.startswith('data:image'):
                    print(f"Found base64 image: {src[:50]}...")
        except Exception as e:
            print(f"Error finding images: {e}")
        
        # Method 2: Get the entire page source
        print("Getting full page source...")
        page_source = driver.page_source
        
        # Method 3: Try to find specific output containers
        containers_to_try = [
            'div[data-testid="stVerticalBlock"]',
            'div[data-testid="stMainBlockContainer"]',
            '.stVerticalBlock',
            'main',
            'body'
        ]
        
        for container_selector in containers_to_try:
            try:
                container = driver.find_element(By.CSS_SELECTOR, container_selector)
                content = container.get_attribute('outerHTML')
                if content and len(content) > len(html_content):
                    html_content = content
                    print(f"Using container: {container_selector} ({len(content)} chars)")
            except Exception as e:
                print(f"Could not find container {container_selector}: {e}")
        
        # If we still don't have good content, use the full page source
        if not html_content or len(html_content) < 1000:
            html_content = page_source
            print("Using full page source")
        
        # Debug: Save the raw content for inspection
        with open("debug_raw_content.html", "w", encoding="utf-8") as f:
            f.write(html_content)
        print(f"Raw content saved to debug_raw_content.html ({len(html_content)} chars)")

        # Step 5: Save to content.txt
        with open(output_html, 'w', encoding='utf-8') as f:
            f.write(html_content)
        print(f"Saved HTML to {output_html} ({len(html_content)} chars)")

        # Step 6: Run the extraction script
        subprocess.run(['python3', extraction_script, output_html])
        print("Extraction complete.")

    finally:
        driver.quit()

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Automate PDF upload to OLMOCR service and image extraction.")
    parser.add_argument('pdf_path', help='Path to the PDF file to upload')
    args = parser.parse_args()
    automate_upload_and_extract(args.pdf_path)