import json
import time
import os
import re
import logging
import argparse
from pathlib import Path
import undetected_chromedriver as uc
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException, NoSuchElementException, ElementClickInterceptedException

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('studocu_downloader.log'),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)

class StudocuDownloader:
    def __init__(self, json_file='studocu_documents.json', download_dir='downloads', headless=False, limit=None):
        self.json_file = json_file
        self.download_dir = os.path.abspath(download_dir)
        self.headless = headless
        self.limit = limit
        self.driver = None
        
        # Create download directory if it doesn't exist
        if not os.path.exists(self.download_dir):
            os.makedirs(self.download_dir)

    def _setup_driver(self):
        """Setup Chrome WebDriver with undetected-chromedriver and download preferences"""
        try:
            options = uc.ChromeOptions()
            if self.headless:
                options.add_argument('--headless=new')
            options.add_argument('--no-sandbox')
            options.add_argument('--disable-dev-shm-usage')
            
            # Configure download settings
            prefs = {
                "download.default_directory": self.download_dir,
                "download.prompt_for_download": False,
                "download.directory_upgrade": True,
                "safebrowsing.enabled": True,
                "plugins.always_open_pdf_externally": True # Download PDFs instead of opening them
            }
            options.add_experimental_option("prefs", prefs)

            self.driver = uc.Chrome(options=options, use_subprocess=True)
            logger.info(f"WebDriver initialized successfully (Headless: {self.headless})")
        except Exception as e:
            logger.error(f"Failed to initialize WebDriver: {e}")
            raise

    def load_documents(self):
        """Load documents from JSON file"""
        try:
            with open(self.json_file, 'r', encoding='utf-8') as f:
                data = json.load(f)
                return data.get('documents', [])
        except FileNotFoundError:
            logger.error(f"JSON file not found: {self.json_file}")
            return []
        except json.JSONDecodeError:
            logger.error(f"Invalid JSON in file: {self.json_file}")
            return []

    def sanitize_filename(self, title):
        """Sanitize title to be safe for filenames"""
        # Remove invalid characters
        s = re.sub(r'[\\/*?:\"<>|]', "", title)
        # Truncate to reasonable length
        return s[:100].strip()

    def wait_for_download(self, previous_files, timeout=60):
        """Wait for a new file to appear in the download directory"""
        end_time = time.time() + timeout
        while time.time() < end_time:
            current_files = set(os.listdir(self.download_dir))
            new_files = current_files - previous_files
            
            # Check if any new file is not a temporary/partial download
            valid_new_files = [f for f in new_files if not f.endswith('.crdownload') and not f.endswith('.tmp')]
            
            if valid_new_files:
                return valid_new_files[0]
            
            time.sleep(1)
        return None

    def download_document(self, doc):
        """Attempt to download a single document"""
        url = doc.get('url')
        title = doc.get('title', 'Unknown Document')
        doc_id = doc.get('document_id')
        
        if not url:
            logger.warning(f"Skipping document with no URL: {title}")
            return False

        logger.info(f"Processing: {title}")
        
        try:
            self.driver.get(url)
            
            # Wait for page load
            time.sleep(3) 

            # Possible Download Button Selectors
            # Note: Selectors on Studocu change. These are common patterns.
            download_selectors = [
                "button[data-testid='download-button']",
                "button[class*='DownloadButton']",
                "a[download]",
                "//button[contains(text(), 'Download')]",
                "//span[contains(text(), 'Download')]/.."
            ]
            
            download_btn = None
            for selector in download_selectors:
                try:
                    if selector.startswith("//"):
                        download_btn = self.driver.find_element(By.XPATH, selector)
                    else:
                        download_btn = self.driver.find_element(By.CSS_SELECTOR, selector)
                    
                    if download_btn and download_btn.is_displayed():
                        logger.info(f"Found download button using: {selector}")
                        break
                except NoSuchElementException:
                    continue
            
            if not download_btn:
                logger.warning(f"Download button not found for: {title}")
                return False

            # Track files before click
            existing_files = set(os.listdir(self.download_dir))
            
            # Click download
            try:
                self.driver.execute_script("arguments[0].click();", download_btn)
            except ElementClickInterceptedException:
                download_btn.click()
            
            logger.info("Clicked download button, waiting for file...")
            
            # Wait for download to complete
            downloaded_filename = self.wait_for_download(existing_files)
            
            if downloaded_filename:
                # Rename file
                sanitized_title = self.sanitize_filename(title)
                ext = os.path.splitext(downloaded_filename)[1]
                if not ext:
                    ext = ".pdf" # Default assumption if missing
                
                new_filename = f"{sanitized_title}_{doc_id}{ext}"
                
                old_path = os.path.join(self.download_dir, downloaded_filename)
                new_path = os.path.join(self.download_dir, new_filename)
                
                # Handle duplicate names
                counter = 1
                while os.path.exists(new_path):
                    new_filename = f"{sanitized_title}_{doc_id}_{counter}{ext}"
                    new_path = os.path.join(self.download_dir, new_filename)
                    counter += 1
                
                os.rename(old_path, new_path)
                logger.info(f"Successfully downloaded: {new_filename}")
                return True
            else:
                logger.error("Download timed out or failed to start.")
                return False

        except Exception as e:
            logger.error(f"Error processing {title}: {e}")
            return False

    def run(self):
        docs = self.load_documents()
        if not docs:
            logger.info("No documents to process.")
            return

        if self.limit:
            docs = docs[:self.limit]
            logger.info(f"Limiting to first {self.limit} documents.")

        self._setup_driver()
        
        logger.info(f"Found {len(docs)} documents. Starting download process...")
        
        if not self.headless:
            # Allow user to login manually if needed
            logger.info("Giving 20 seconds for manual login/verification if browser opens...")
            time.sleep(20)

        success_count = 0
        try:
            for i, doc in enumerate(docs, 1):
                logger.info(f"--- Document {i}/{len(docs)} ---")
                if self.download_document(doc):
                    success_count += 1
                # Small delay between requests
                time.sleep(2)
        except KeyboardInterrupt:
            logger.info("Process interrupted by user.")
        finally:
            if self.driver:
                self.driver.quit()
            logger.info(f"Finished. Successfully downloaded {success_count}/{len(docs)} documents.")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Studocu Downloader')
    parser.add_argument('--headless', action='store_true', help='Run in headless mode')
    parser.add_argument('--limit', type=int, help='Limit number of downloads')
    parser.add_argument('--input', default='studocu_documents.json', help='Input JSON file')
    args = parser.parse_args()

    downloader = StudocuDownloader(
        json_file=args.input, 
        headless=args.headless,
        limit=args.limit
    )
    downloader.run()
