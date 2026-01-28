#!/usr/bin/env python3
"""
Studocu Selenium Scraper - Enhanced Version
Features:
- Improved error handling and logging
- Better wait strategies
- Rate limiting
- Retry mechanism
- Progress tracking
- CSV export option
"""

import json
import csv
import time
import re
import logging
from datetime import datetime
from pathlib import Path
from typing import List, Dict, Optional
import undetected_chromedriver as uc
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import (
    TimeoutException, 
    NoSuchElementException,
    StaleElementReferenceException,
    WebDriverException
)
from urllib.parse import urlparse, parse_qs


# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('studocu_scraper.log'),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)


class ScraperConfig:
    """Configuration class for scraper settings"""
    def __init__(self):
        self.base_url = "https://www.studocu.com"
        self.timeout = 30
        self.page_load_wait = 3
        self.between_page_delay = 3
        self.max_retries = 3
        self.retry_delay = 5
        self.headless = False
        self.max_pages = None
        
        # Selectors organized by priority
        self.card_selectors = [
            '[data-testid="document-card"]',
            '[data-testid="search-result-item"]',
            'a[href*="/document/"]',
            '.DocumentCard',
            'div[class*="DocumentCard"]',
            'div[class*="document-card"]'
        ]
        
        self.title_selectors = [
            '[data-testid="document-title"]',
            'h3', 'h2', 'h4',
            '.document-title',
            '[class*="title"]'
        ]


class StudocuScraperError(Exception):
    """Custom exception for scraper errors"""
    pass


class StudocuSeleniumScraper:
    def __init__(self, config: Optional[ScraperConfig] = None, enable_incremental_save: bool = True):
        """Initialize the Selenium scraper with configuration"""
        self.config = config or ScraperConfig()
        self.driver = None
        self.enable_incremental_save = enable_incremental_save
        self.stats = {
            'pages_scraped': 0,
            'documents_found': 0,
            'errors': 0,
            'retries': 0
        }
        self._setup_driver()
        
    def _setup_driver(self):
        """Setup Chrome WebDriver with undetected-chromedriver"""
        try:
            options = uc.ChromeOptions()
            
            if self.config.headless:
                options.add_argument('--headless=new')
            
            # Anti-detection options
            options.add_argument('--no-sandbox')
            options.add_argument('--disable-dev-shm-usage')
            options.add_argument('--disable-blink-features=AutomationControlled')
            options.add_argument('--disable-gpu')
            options.add_argument('--window-size=1920,1080')
            
            # Realistic user agent
            options.add_argument(
                'user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) '
                'AppleWebKit/537.36 (KHTML, like Gecko) '
                'Chrome/120.0.0.0 Safari/537.36'
            )
            
            # Try to initialize with auto version detection
            try:
                self.driver = uc.Chrome(options=options, version_main=None, use_subprocess=True)
                logger.info("WebDriver initialized successfully")
            except Exception as e1:
                logger.warning(f"First attempt failed: {e1}")
                logger.info("Trying with driver_executable_path...")
                # Try with explicit version matching
                self.driver = uc.Chrome(options=options, driver_executable_path=None, use_subprocess=True)
                logger.info("WebDriver initialized successfully on retry")
            
        except Exception as e:
            logger.error(f"Failed to initialize WebDriver: {e}")
            logger.info("\nTroubleshooting steps:")
            logger.info("1. Update Chrome: sudo apt update && sudo apt upgrade google-chrome-stable")
            logger.info("2. Clear cache: rm -rf ~/.local/share/undetected_chromedriver/")
            logger.info("3. Reinstall: pip3 install --upgrade --force-reinstall undetected-chromedriver")
            raise StudocuScraperError(f"WebDriver setup failed: {e}")
    
    def _extract_document_id(self, url: str) -> Optional[int]:
        """Extract document ID from URL - looks for the numeric ID before queryID"""
        try:
            # Example URL: https://www.studocu.com/en-us/document/kenya-medical-training-college/.../140069803?queryID=...
            # The document ID is the last numeric part before the ? (queryID)
            match = re.search(r'/(\d+)\?', url)
            if match:
                return int(match.group(1))
            # Fallback: try to get any numeric ID at the end of the path
            match = re.search(r'/(\d+)/?$', url)
            return int(match.group(1)) if match else None
        except (AttributeError, ValueError) as e:
            logger.warning(f"Failed to extract document ID from {url}: {e}")
            return None
    
    def _extract_rating(self, rating_text: str) -> Optional[str]:
        """Parse rating text like '100% (43)' or '94% (49)'"""
        if not rating_text or rating_text.strip().lower() == 'none':
            return None
        return rating_text.strip()
    
    def _extract_pages(self, pages_text: str) -> Optional[int]:
        """Extract page count from text - looks for 'X pages' or 'X p.' pattern"""
        if not pages_text:
            return None
        try:
            # Look for pattern like "X pages" or "X p." or "X p" (case insensitive)
            match = re.search(r'(\d+)\s*(?:pages?|p\.?)\b', pages_text, re.IGNORECASE)
            if match:
                return int(match.group(1))
            # If no explicit page indicator found, return None rather than guessing
            return None
        except (AttributeError, ValueError):
            return None
    
    def _wait_for_page_load(self) -> bool:
        """Wait for page to fully load with improved detection"""
        logger.info("Waiting for page to load...")
        
        for selector in self.config.card_selectors:
            try:
                WebDriverWait(self.driver, self.config.timeout).until(
                    EC.presence_of_element_located((By.CSS_SELECTOR, selector))
                )
                logger.info(f"Page loaded successfully using selector: {selector}")
                time.sleep(self.config.page_load_wait)
                return True
            except TimeoutException:
                continue
        
        # If no selectors matched, log diagnostic info
        logger.warning("Timeout waiting for page to load")
        logger.debug(f"Current URL: {self.driver.current_url}")
        logger.debug(f"Page title: {self.driver.title}")
        
        return False
    
    def _find_element_safe(self, parent, selectors: List[str], 
                          element_name: str = "element") -> Optional[str]:
        """Safely find element text using multiple selectors"""
        for selector in selectors:
            try:
                element = parent.find_element(By.CSS_SELECTOR, selector)
                text = element.text.strip()
                if text:
                    return text
            except (NoSuchElementException, StaleElementReferenceException):
                continue
        return None
    
    def _extract_document_data(self, card_element, rank: int) -> Optional[Dict]:
        """Extract data from a single document card with enhanced error handling"""
        try:
            # Get link element
            if card_element.tag_name == 'a':
                link_element = card_element
            else:
                try:
                    link_element = card_element.find_element(
                        By.CSS_SELECTOR, 'a[href*="/document/"]'
                    )
                except NoSuchElementException:
                    link_element = card_element.find_element(
                        By.XPATH, './/a[contains(@href, "/document/")]'
                    )
            
            url = link_element.get_attribute('href')
            if not url:
                logger.warning(f"No URL found for card at rank {rank}")
                return None
            
            doc_id = self._extract_document_id(url)
            
            # Extract title
            title = self._find_element_safe(
                card_element, 
                self.config.title_selectors, 
                "title"
            )
            
            if not title:
                title = link_element.text.strip()
            
            if not title:
                title = url.split('/')[-1] or "Unknown Title"
            
            # Extract other fields
            pages = self._extract_pages(card_element.text)
            
            doc_type = self._find_element_safe(
                card_element,
                ['[data-testid="document-type"]', '.document-type', '[class*="type"]'],
                "document type"
            )
            
            course = self._find_element_safe(
                card_element,
                ['[data-testid="document-course"]', '.document-course', '[class*="course"]'],
                "course"
            )
            
            academic_year = self._find_element_safe(
                card_element,
                ['[data-testid="document-academic-year"]', '.document-academic-year', '[class*="academic-year"]'],
                "academic year"
            )
            
            rating_text = self._find_element_safe(
                card_element,
                ['[data-testid="document-rating"]', '.document-rating', '[class*="rating"]'],
                "rating"
            )
            rating = self._extract_rating(rating_text) if rating_text else None
            
            return {
                "rank": rank,
                "title": title,
                "pages": pages,
                "type": doc_type,
                "course": course,
                "academic_year": academic_year,
                "rating": rating,
                "url": url,
                "document_id": doc_id
            }
            
        except StaleElementReferenceException:
            logger.warning(f"Stale element reference for card at rank {rank}")
            return None
        except Exception as e:
            logger.error(f"Error extracting data from card at rank {rank}: {e}")
            self.stats['errors'] += 1
            return None
    
    def _find_document_cards(self) -> List:
        """Find document cards using multiple strategies"""
        cards = []
        
        # Try standard selectors
        for selector in self.config.card_selectors:
            try:
                elements = self.driver.find_elements(By.CSS_SELECTOR, selector)
                if elements:
                    logger.info(f"Found {len(elements)} elements using selector: {selector}")
                    return elements
            except Exception as e:
                logger.debug(f"Selector {selector} failed: {e}")
                continue
        
        # Fallback to XPath
        if not cards:
            try:
                cards = self.driver.find_elements(
                    By.XPATH, 
                    '//a[contains(@href, "/document/")]'
                )
                logger.info(f"Found {len(cards)} document links via XPath")
            except Exception as e:
                logger.error(f"XPath fallback failed: {e}")
        
        return cards
    
    def scrape_page(self, url: str, page_num: int) -> List[Dict]:
        """Scrape a single page with retry logic"""
        for attempt in range(self.config.max_retries):
            try:
                logger.info(f"Scraping page {page_num} (attempt {attempt + 1}/{self.config.max_retries})")
                
                self.driver.get(url)
                
                if not self._wait_for_page_load():
                    raise StudocuScraperError("Page failed to load properly")
                
                cards = self._find_document_cards()
                
                if not cards:
                    logger.warning(f"No document cards found on page {page_num}")
                    return []
                
                logger.info(f"Processing {len(cards)} document cards on page {page_num}")
                
                documents = []
                for idx, card in enumerate(cards, start=1):
                    doc_data = self._extract_document_data(card, idx)
                    if doc_data:
                        documents.append(doc_data)
                        logger.info(f"  [{idx}] {doc_data['title'][:60]}...")
                
                self.stats['pages_scraped'] += 1
                self.stats['documents_found'] += len(documents)
                
                return documents
                
            except (WebDriverException, StudocuScraperError) as e:
                logger.warning(f"Attempt {attempt + 1} failed for page {page_num}: {e}")
                self.stats['retries'] += 1
                
                if attempt < self.config.max_retries - 1:
                    logger.info(f"Retrying in {self.config.retry_delay} seconds...")
                    time.sleep(self.config.retry_delay)
                else:
                    logger.error(f"Failed to scrape page {page_num} after {self.config.max_retries} attempts")
                    self.stats['errors'] += 1
                    return []
    
    def scrape_all_pages(self, base_url: str, 
                        json_file: str = 'studocu_documents.json',
                        csv_file: str = 'studocu_documents.csv',
                        resume: bool = False) -> List[Dict]:
        """Scrape all paginated pages with progress tracking and incremental saving"""
        all_documents = []
        
        # Check if we should resume
        start_page = 1
        if resume and self.enable_incremental_save:
            start_page = self.load_existing_progress(json_file) + 1
            if start_page > 1:
                logger.info(f"🔄 Resuming from page {start_page}")
        
        current_page = start_page
        
        # Parse URL parameters
        parsed = urlparse(base_url)
        query_params = parse_qs(parsed.query)
        institution_id = query_params.get('institutionId', [None])[0]
        
        # Get base URL without pagination (remove both ?p= and &p= and &page= variants)
        base_without_page = base_url.split('&p=')[0].split('?p=')[0].split('&page=')[0].split('?page=')[0]
        separator = '&' if '?' in base_without_page else '?'
        
        logger.info(f"Starting pagination scrape (max pages: {self.config.max_pages or 'unlimited'})")
        
        while True:
            # Construct URL for current page using 'page' parameter
            page_url = f"{base_without_page}{separator}page={current_page}"
            if institution_id:
                page_url += f"&institutionId={institution_id}"
            
            # Scrape current page
            documents = self.scrape_page(page_url, current_page)
            
            if not documents:
                logger.info(f"No documents found on page {current_page}. Stopping pagination.")
                break
            
            all_documents.extend(documents)
            
            # Incremental save after each page
            if self.enable_incremental_save:
                self.save_page_incremental(documents, current_page, json_file, csv_file)
                # Add to all_documents when incremental save is enabled
                all_documents.extend(documents)
            
            # Check max pages limit
            if self.config.max_pages and current_page >= self.config.max_pages:
                logger.info(f"Reached maximum pages limit ({self.config.max_pages}). Stopping.")
                break
            
            # Check for next page
            try:
                next_button = self.driver.find_element(By.CSS_SELECTOR, '[aria-label="Next"]')
                if 'disabled' in next_button.get_attribute('class') or not next_button.is_enabled():
                    logger.info(f"No more pages available. Total pages: {current_page}")
                    break
                
                current_page += 1
                logger.info(f"Moving to page {current_page} after {self.config.between_page_delay}s delay")
                time.sleep(self.config.between_page_delay)
                
            except NoSuchElementException:
                logger.info(f"No next button found. Total pages: {current_page}")
                break
        
        return all_documents
    
    def save_page_incremental(self, documents: List[Dict], page_num: int, 
                             json_file: str = 'studocu_documents.json',
                             csv_file: str = 'studocu_documents.csv'):
        """Save documents incrementally after each page with deduplication"""
        if not documents:
            return
        
        try:
            # Save to JSON (append to array with deduplication)
            filepath_json = Path(json_file)
            
            # Read existing data if file exists
            existing_docs = []
            existing_ids = set()
            
            if filepath_json.exists():
                try:
                    with filepath_json.open('r', encoding='utf-8') as f:
                        data = json.load(f)
                        existing_docs = data.get('documents', [])
                        # Track existing document IDs
                        for doc in existing_docs:
                            if doc.get('document_id'):
                                existing_ids.add(doc['document_id'])
                except json.JSONDecodeError:
                    logger.warning(f"Could not read existing JSON, starting fresh")
            
            # Filter new documents to avoid duplicates
            new_unique_docs = []
            duplicates_skipped = 0
            
            for doc in documents:
                doc_id = doc.get('document_id')
                # Only skip if we have an existing file AND this ID is in it
                if filepath_json.exists() and doc_id and doc_id in existing_ids:
                    duplicates_skipped += 1
                else:
                    new_unique_docs.append(doc)
                    if doc_id:
                        existing_ids.add(doc_id)
            
            # Append new unique documents
            existing_docs.extend(new_unique_docs)
            
            # Write updated JSON data
            output = {
                "metadata": {
                    "last_updated": datetime.now().isoformat(),
                    "total_documents": len(existing_docs),
                    "pages_scraped": self.stats['pages_scraped'],
                    "errors": self.stats['errors'],
                    "retries": self.stats['retries']
                },
                "documents": existing_docs
            }
            
            with filepath_json.open('w', encoding='utf-8') as f:
                json.dump(output, f, indent=2, ensure_ascii=False)
            
            # Save to CSV (append mode with deduplication)
            filepath_csv = Path(csv_file)
            file_exists = filepath_csv.exists()
            
            if new_unique_docs:
                with filepath_csv.open('a', newline='', encoding='utf-8') as f:
                    fieldnames = new_unique_docs[0].keys()
                    writer = csv.DictWriter(f, fieldnames=fieldnames)
                    
                    # Write header only if file doesn't exist
                    if not file_exists:
                        writer.writeheader()
                    
                    writer.writerows(new_unique_docs)
            
            logger.info(f"💾 Page {page_num}: {len(new_unique_docs)} new documents saved (skipped {duplicates_skipped} duplicates) | Total: {len(existing_docs)}")
            
        except Exception as e:
            logger.error(f"Error saving incremental data: {e}")
    
    def load_existing_progress(self, json_file: str = 'studocu_documents.json') -> int:
        """Load existing progress and return the last scraped page number"""
        filepath = Path(json_file)
        
        if not filepath.exists():
            return 0
        
        try:
            with filepath.open('r', encoding='utf-8') as f:
                data = json.load(f)
                pages_scraped = data.get('metadata', {}).get('pages_scraped', 0)
                total_docs = data.get('metadata', {}).get('total_documents', 0)
                
                logger.info(f"📂 Found existing progress: {pages_scraped} pages, {total_docs} documents")
                return pages_scraped
        except Exception as e:
            logger.warning(f"Could not load existing progress: {e}")
            return 0
    
    def _deduplicate_documents(self, documents: List[Dict]) -> List[Dict]:
        """Remove duplicate documents based on document_id, keeping first occurrence"""
        seen_ids = set()
        unique_documents = []
        duplicates_removed = 0
        
        for doc in documents:
            doc_id = doc.get('document_id')
            if doc_id and doc_id not in seen_ids:
                seen_ids.add(doc_id)
                unique_documents.append(doc)
            elif doc_id:
                duplicates_removed += 1
        
        if duplicates_removed > 0:
            logger.info(f"🔄 Removed {duplicates_removed} duplicate documents (based on document_id)")
        
        return unique_documents
    
    def save_to_json(self, documents: List[Dict], filename: str = 'studocu_documents.json') -> str:
        """Save documents to JSON file"""
        # Deduplicate before saving
        documents = self._deduplicate_documents(documents)
        
        output = {
            "metadata": {
                "scraped_at": datetime.now().isoformat(),
                "total_documents": len(documents),
                "pages_scraped": self.stats['pages_scraped'],
                "errors": self.stats['errors'],
                "retries": self.stats['retries']
            },
            "documents": documents
        }
        
        filepath = Path(filename)
        with filepath.open('w', encoding='utf-8') as f:
            json.dump(output, f, indent=2, ensure_ascii=False)
        
        logger.info(f"Saved {len(documents)} documents to {filename}")
        return str(filepath)
    
    def save_to_csv(self, documents: List[Dict], filename: str = 'studocu_documents.csv') -> str:
        """Save documents to CSV file"""
        if not documents:
            logger.warning("No documents to save to CSV")
            return None
        
        # Deduplicate before saving
        documents = self._deduplicate_documents(documents)
        
        filepath = Path(filename)
        with filepath.open('w', newline='', encoding='utf-8') as f:
            fieldnames = documents[0].keys()
            writer = csv.DictWriter(f, fieldnames=fieldnames)
            writer.writeheader()
            writer.writerows(documents)
        
        logger.info(f"Saved {len(documents)} documents to {filename}")
        return str(filepath)
    
    def print_stats(self):
        """Print scraping statistics"""
        logger.info("\n" + "=" * 80)
        logger.info("SCRAPING STATISTICS")
        logger.info("=" * 80)
        logger.info(f"Pages scraped: {self.stats['pages_scraped']}")
        logger.info(f"Documents found: {self.stats['documents_found']}")
        logger.info(f"Errors encountered: {self.stats['errors']}")
        logger.info(f"Retries performed: {self.stats['retries']}")
        logger.info("=" * 80)
    
    def close(self):
        """Close the browser and cleanup"""
        if self.driver:
            try:
                self.driver.quit()
                logger.info("Browser closed successfully")
            except Exception as e:
                logger.error(f"Error closing browser: {e}")


def main():
    """Main execution function"""
    logger.info("=" * 80)
    logger.info("STUDOCU SELENIUM SCRAPER - ENHANCED VERSION")
    logger.info("=" * 80)
    
    # Configuration
    config = ScraperConfig()
    config.headless = False  # Set to True for production
    config.max_pages = None  # Set to None to scrape all pages
    config.timeout = 30
    config.between_page_delay = 3
    
    BASE_URL = "https://www.studocu.com/en-us/search/Kenya%20Medical%20Training%20College%20Year%201%20Semester%202?p=1&institutionId=6230"
    OUTPUT_JSON = "studocu_year1_sem2_documents.json"
    OUTPUT_CSV = "studocu_year1_sem2_documents.csv"
    
    logger.info(f"Configuration: Max pages={config.max_pages}, Headless={config.headless}")
    logger.info(f"Target URL: {BASE_URL}")
    
    scraper = None
    
    try:
        scraper = StudocuSeleniumScraper(config)
        
        # Scrape all pages
        documents = scraper.scrape_all_pages(BASE_URL, OUTPUT_JSON, OUTPUT_CSV)
        
        if documents:
            # Documents already saved incrementally, skip final save to avoid overwriting
            logger.info("Documents saved incrementally during scraping")
            
            # Print statistics
            scraper.print_stats()
            
            # Show sample
            logger.info("\nSample document:")
            logger.info(json.dumps(documents[0], indent=2))
        else:
            logger.warning("No documents were scraped")
            logger.info("\nTroubleshooting tips:")
            logger.info("1. Check if Cloudflare protection is active")
            logger.info("2. Verify the URL is correct and accessible")
            logger.info("3. Check the log file for detailed error messages")
    
    except KeyboardInterrupt:
        logger.info("\nScraping interrupted by user")
    
    except Exception as e:
        logger.error(f"Fatal error during scraping: {e}", exc_info=True)
    
    finally:
        if scraper:
            scraper.close()


if __name__ == "__main__":
    main()