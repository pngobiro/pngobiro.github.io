import argparse
import yaml
import time
import os
import requests
import json # Using JSON for initial report structure
from datetime import datetime
from urllib.parse import urljoin, urlparse, urlunparse

from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.chrome.options import Options as ChromeOptions
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import NoSuchElementException, TimeoutException, WebDriverException, StaleElementReferenceException
from webdriver_manager.chrome import ChromeDriverManager

# --- Constants ---
DEFAULT_WAIT_TIME = 10
DEFAULT_CONFIG_FILE = 'validation_config.yaml'
DEFAULT_REPORT_FILE = 'validation_report.json'

# --- Helper Functions ---

def get_selector_strategy(check):
    """Determines the Selenium selector strategy (By.CSS_SELECTOR or By.XPATH)."""
    if 'selector' in check:
        return By.CSS_SELECTOR, check['selector']
    elif 'xpath' in check:
        return By.XPATH, check['xpath']
    else:
        raise ValueError("Check must contain either 'selector' or 'xpath'.")

def take_screenshot(driver, filename):
    """Takes a screenshot and saves it."""
    try:
        # Ensure the directory exists
        screenshot_dir = os.path.dirname(filename)
        if screenshot_dir and not os.path.exists(screenshot_dir):
            os.makedirs(screenshot_dir, exist_ok=True)
        driver.save_screenshot(filename)
        return f"Screenshot saved to {filename}"
    except WebDriverException as e:
        return f"Failed to take screenshot: {e}"
    except Exception as e:
        return f"An unexpected error occurred during screenshot: {e}"

def resolve_url(link_url, base_url):
    """Resolves a potentially relative URL against a base URL."""
    parsed_link = urlparse(link_url)
    # If scheme is missing, it's likely relative
    if not parsed_link.scheme:
        # Handle file paths correctly
        parsed_base = urlparse(base_url)
        if parsed_base.scheme == 'file':
             # For local files, join the directory of the base file with the link
             base_dir = os.path.dirname(parsed_base.path)
             # Need to handle absolute paths starting with / correctly for file URIs
             if link_url.startswith('/'):
                  # This assumes the root is the filesystem root, might need adjustment
                  # depending on how file:// URLs are structured/served.
                  # A safer approach might be needed if a local web server isn't used.
                  # For simplicity, we'll treat it relative to the base file's dir for now.
                  # This part might need refinement based on actual use case.
                  joined_path = os.path.join(base_dir, link_url.lstrip('/'))

             else:
                 joined_path = os.path.join(base_dir, link_url)

             # Normalize the path (e.g., handle ..) and convert back to file URI
             normalized_path = os.path.normpath(joined_path)
             # Ensure it starts with a slash for file URI standard
             if not normalized_path.startswith('/'):
                 normalized_path = '/' + normalized_path
             return urlunparse(('file', '', normalized_path, '', '', ''))
        else:
            # For http/https URLs, use urljoin
            return urljoin(base_url, link_url)
    return link_url # Already absolute

# --- WebDriver Setup ---

def setup_driver(config):
    """Sets up the Selenium WebDriver using WebDriverManager."""
    print("Setting up WebDriver...")
    options = ChromeOptions()
    if config.get('headless', True):
        print("Running in headless mode.")
        options.add_argument("--headless")
    options.add_argument("--window-size=1920,1080") # Standard window size
    options.add_argument("--log-level=3") # Suppress excessive logging
    options.add_experimental_option('excludeSwitches', ['enable-logging']) # Suppress DevTools listening message

    try:
        service = ChromeService(ChromeDriverManager().install())
        driver = webdriver.Chrome(service=service, options=options)
        print("WebDriver setup complete.")
        return driver
    except Exception as e:
        print(f"Error setting up WebDriver: {e}")
        return None

# --- Validation Functions (Placeholders - to be implemented) ---

def check_element_presence(driver, check, current_url):
    result = {"description": check['description'], "status": "FAIL", "details": ""}
    try:
        by, value = get_selector_strategy(check)
        WebDriverWait(driver, DEFAULT_WAIT_TIME).until(
            EC.presence_of_element_located((by, value))
        )
        result["status"] = "PASS"
        result["details"] = f"Element '{value}' found."
    except TimeoutException:
        result["details"] = f"Element '{value}' not found within {DEFAULT_WAIT_TIME} seconds."
    except Exception as e:
        result["details"] = f"Error checking presence for '{value}': {e}"
    return result

def check_element_visibility(driver, check, current_url):
    result = {"description": check['description'], "status": "FAIL", "details": ""}
    try:
        by, value = get_selector_strategy(check)
        element = WebDriverWait(driver, DEFAULT_WAIT_TIME).until(
            EC.visibility_of_element_located((by, value))
        )
        if element.is_displayed():
             result["status"] = "PASS"
             result["details"] = f"Element '{value}' is visible."
        else:
             # This case might be rare if WebDriverWait worked, but good to have
             result["details"] = f"Element '{value}' found but not visible."
    except TimeoutException:
        result["details"] = f"Element '{value}' not found or not visible within {DEFAULT_WAIT_TIME} seconds."
    except Exception as e:
        result["details"] = f"Error checking visibility for '{value}': {e}"
    return result

def check_element_count(driver, check, current_url):
    result = {"description": check['description'], "status": "FAIL", "details": ""}
    expected_count = check['expected_count']
    try:
        by, value = get_selector_strategy(check)
        # Wait for at least one element to be present to avoid immediate failure
        WebDriverWait(driver, DEFAULT_WAIT_TIME).until(
            EC.presence_of_element_located((by, value))
        )
        elements = driver.find_elements(by, value)
        actual_count = len(elements)
        if actual_count == expected_count:
            result["status"] = "PASS"
            result["details"] = f"Found {actual_count} element(s) matching '{value}' (expected {expected_count})."
        else:
            result["details"] = f"Found {actual_count} element(s) matching '{value}', expected {expected_count}."
    except TimeoutException:
         # If no elements are found and expected count is 0, it's a pass
         if expected_count == 0:
             result["status"] = "PASS"
             result["details"] = f"Found 0 elements matching '{value}' (expected 0)."
         else:
             result["details"] = f"No elements matching '{value}' found within {DEFAULT_WAIT_TIME} seconds (expected {expected_count})."
    except Exception as e:
        result["details"] = f"Error checking count for '{value}': {e}"
    return result

def check_attribute_value(driver, check, current_url):
    result = {"description": check['description'], "status": "FAIL", "details": ""}
    attribute = check['attribute']
    expected_value = check['expected_value']
    try:
        by, value = get_selector_strategy(check)
        element = WebDriverWait(driver, DEFAULT_WAIT_TIME).until(
            EC.presence_of_element_located((by, value))
        )
        actual_value = element.get_attribute(attribute)
        if actual_value == expected_value:
            result["status"] = "PASS"
            result["details"] = f"Attribute '{attribute}' for element '{value}' matches expected value."
        else:
            result["details"] = f"Attribute '{attribute}' for element '{value}' is '{actual_value}', expected '{expected_value}'."
    except TimeoutException:
        result["details"] = f"Element '{value}' not found within {DEFAULT_WAIT_TIME} seconds."
    except Exception as e:
        result["details"] = f"Error checking attribute '{attribute}' for '{value}': {e}"
    return result

def check_text_content(driver, check, current_url):
    result = {"description": check['description'], "status": "FAIL", "details": ""}
    expected_text = check['expected_text']
    try:
        by, value = get_selector_strategy(check)
        element = WebDriverWait(driver, DEFAULT_WAIT_TIME).until(
            EC.presence_of_element_located((by, value))
        )
        actual_text = element.text
        if actual_text == expected_text:
            result["status"] = "PASS"
            result["details"] = f"Text content for element '{value}' matches expected value."
        else:
            result["details"] = f"Text content for element '{value}' is '{actual_text}', expected '{expected_text}'."
    except TimeoutException:
        result["details"] = f"Element '{value}' not found within {DEFAULT_WAIT_TIME} seconds."
    except Exception as e:
        result["details"] = f"Error checking text content for '{value}': {e}"
    return result

def check_link_status(driver, check, current_url):
    result = {"description": check['description'], "status": "PASS", "details": "Checked 0 links."} # Default to PASS if no links found/checked
    links_checked = 0
    failed_links = []
    include_patterns = check.get('include_patterns')
    exclude_patterns = check.get('exclude_patterns', ["mailto:", "javascript:", "#"]) # Default excludes

    try:
        # Find all anchor tags
        elements = driver.find_elements(By.TAG_NAME, "a")
        hrefs = set() # Use a set to avoid checking the same URL multiple times
        for elem in elements:
             try:
                 href = elem.get_attribute('href')
                 if href:
                     hrefs.add(href.strip())
             except StaleElementReferenceException:
                 print(f"Warning: Stale element reference encountered while getting href for a link on {current_url}. Skipping.")
                 continue # Skip this element

        if not hrefs:
             result["details"] = "No links found on the page."
             return result

        session = requests.Session()
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'} # Basic user agent

        links_to_check = []

        # Filter links based on include/exclude patterns
        for href in hrefs:
            # 1. Check excludes first
            if any(pattern in href for pattern in exclude_patterns):
                continue

            # 2. Check includes if specified
            if include_patterns:
                if not any(href.startswith(pattern) for pattern in include_patterns):
                     # If include_patterns are defined, only check links matching them
                     # This logic might need refinement based on exact needs (regex?)
                     # For now, simple startswith check
                     continue

            # 3. Resolve URL
            absolute_url = resolve_url(href, current_url)
            links_to_check.append((href, absolute_url)) # Store original and absolute

        links_checked = len(links_to_check)
        if links_checked == 0:
             result["details"] = f"No links matched the check criteria (includes/excludes)."
             return result

        print(f"Checking {links_checked} links for {current_url}...")

        for original_href, url_to_check in links_to_check:
            try:
                # Skip file protocol links for requests check
                if urlparse(url_to_check).scheme == 'file':
                    # Could add os.path.exists check here if needed
                    # print(f"Skipping file link check: {url_to_check}")
                    continue

                response = session.head(url_to_check, headers=headers, timeout=10, allow_redirects=True) # Use HEAD request, allow redirects
                status_code = response.status_code
                if not (200 <= status_code < 400): # Check for non-success (including redirects for HEAD) and non-client/server error
                    failed_links.append({"link": original_href, "url": url_to_check, "status": status_code})
                    result["status"] = "FAIL" # Mark as fail if any link fails
                # Optional: Add delay between requests if needed
                # time.sleep(0.1)
            except requests.exceptions.RequestException as e:
                failed_links.append({"link": original_href, "url": url_to_check, "status": f"Error: {e}"})
                result["status"] = "FAIL"
            except Exception as e:
                 failed_links.append({"link": original_href, "url": url_to_check, "status": f"Unexpected Error: {e}"})
                 result["status"] = "FAIL"


        if failed_links:
            result["details"] = f"Checked {links_checked} links. Failures: {json.dumps(failed_links)}"
        else:
            result["details"] = f"Checked {links_checked} links. All returned success status."

    except Exception as e:
        result["status"] = "FAIL"
        result["details"] = f"An error occurred during link checking: {e}"

    return result


def check_js_console_errors(driver, check, current_url):
    result = {"description": check['description'], "status": "PASS", "details": "No severe JavaScript errors found."}
    try:
        # Retrieve browser logs for 'browser' type which usually contains console errors
        logs = driver.get_log('browser')
        severe_errors = [log for log in logs if log['level'] == 'SEVERE']

        if severe_errors:
            result["status"] = "FAIL"
            error_messages = [f"{log['timestamp']}: {log['message']}" for log in severe_errors]
            result["details"] = f"Found {len(severe_errors)} severe JavaScript error(s):\n" + "\n".join(error_messages)

    except WebDriverException as e:
         # Some drivers might not support log retrieval or specific log types
         result["status"] = "WARN" # Use WARN status if log retrieval fails
         result["details"] = f"Could not retrieve browser console logs: {e}. Check driver capabilities."
    except Exception as e:
        result["status"] = "FAIL"
        result["details"] = f"An error occurred checking console logs: {e}"
    return result

# --- Report Generation (Simple JSON for now) ---

def save_json_report(results, filename):
    """Saves the validation results to a JSON file."""
    try:
        with open(filename, 'w') as f:
            json.dump(results, f, indent=4)
        print(f"Report saved to {filename}")
    except Exception as e:
        print(f"Error saving JSON report: {e}")

# --- Main Logic ---

def main():
    parser = argparse.ArgumentParser(description="Automated Web Page Validation Tool")
    parser.add_argument(
        "-c", "--config",
        default=DEFAULT_CONFIG_FILE,
        help=f"Path to the configuration YAML file (default: {DEFAULT_CONFIG_FILE})"
    )
    parser.add_argument(
        "-r", "--report",
        default=DEFAULT_REPORT_FILE,
        help=f"Path to save the output report JSON file (default: {DEFAULT_REPORT_FILE})"
    )
    args = parser.parse_args()

    # Load configuration
    try:
        with open(args.config, 'r') as f:
            config = yaml.safe_load(f)
        print(f"Configuration loaded from {args.config}")
    except FileNotFoundError:
        print(f"Error: Configuration file not found at {args.config}")
        return
    except yaml.YAMLError as e:
        print(f"Error parsing configuration file {args.config}: {e}")
        return
    except Exception as e:
        print(f"An unexpected error occurred loading config: {e}")
        return

    if not config or 'pages' not in config:
        print("Error: Configuration file is empty or missing 'pages' section.")
        return

    # Setup WebDriver
    driver = setup_driver(config)
    if not driver:
        return # Exit if driver setup failed

    # Prepare screenshot directory
    screenshot_dir = config.get("screenshot_dir", "validation_screenshots")
    if config.get("screenshot_on_fail", True) and not os.path.exists(screenshot_dir):
        try:
            os.makedirs(screenshot_dir, exist_ok=True)
        except OSError as e:
            print(f"Warning: Could not create screenshot directory '{screenshot_dir}': {e}. Screenshots may fail.")
            screenshot_dir = None # Disable screenshots if dir creation fails

    validation_results = {
        "run_timestamp": datetime.now().isoformat(),
        "config_file": args.config,
        "pages": []
    }

    # Validation Loop
    for i, page_config in enumerate(config['pages']):
        url = page_config.get('url')
        checks = page_config.get('checks', [])
        page_result = {
            "url": url,
            "status": "PASS", # Overall status for the page
            "checks": []
        }
        validation_results["pages"].append(page_result)

        if not url:
            print(f"Skipping page {i+1} due to missing URL.")
            page_result["status"] = "SKIPPED"
            page_result["details"] = "URL missing in configuration."
            continue

        print(f"\nValidating page: {url}")

        # Handle local file paths
        if not urlparse(url).scheme and os.path.exists(url):
             current_url = 'file://' + os.path.abspath(url)
             print(f"Resolved local path to: {current_url}")
        else:
             current_url = url


        try:
            driver.get(current_url)
            time.sleep(1) # Small delay for initial render, might need adjustment
        except WebDriverException as e:
            print(f"Error navigating to {current_url}: {e}")
            page_result["status"] = "FAIL"
            page_result["details"] = f"Failed to load page: {e}"
            continue # Skip checks for this page

        for j, check in enumerate(checks):
            check_type = check.get('type')
            check_result = None
            screenshot_path = None
            start_time = time.time()

            print(f"  Running check {j+1}: {check.get('description', check_type)}...")

            try:
                if check_type == "element_presence":
                    check_result = check_element_presence(driver, check, current_url)
                elif check_type == "element_visibility":
                    check_result = check_element_visibility(driver, check, current_url)
                elif check_type == "element_count":
                    check_result = check_element_count(driver, check, current_url)
                elif check_type == "attribute_value":
                    check_result = check_attribute_value(driver, check, current_url)
                elif check_type == "text_content":
                    check_result = check_text_content(driver, check, current_url)
                elif check_type == "link_status":
                    check_result = check_link_status(driver, check, current_url)
                elif check_type == "js_console_errors":
                    check_result = check_js_console_errors(driver, check, current_url)
                else:
                    check_result = {"description": check.get('description', 'Unknown check'), "status": "FAIL", "details": f"Unknown check type: {check_type}"}

            except Exception as e:
                 # Catch unexpected errors during check execution
                 print(f"    ERROR during check execution: {e}")
                 check_result = {"description": check.get('description', check_type), "status": "FAIL", "details": f"Unexpected error during check: {e}"}

            end_time = time.time()
            check_result["duration_seconds"] = round(end_time - start_time, 3)

            if check_result["status"] != "PASS":
                page_result["status"] = "FAIL" # Mark page as failed if any check fails
                print(f"    Check FAILED: {check_result['details']}")
                if config.get("screenshot_on_fail", True) and screenshot_dir:
                    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
                    safe_url_part = "".join(c if c.isalnum() else "_" for c in urlparse(url).netloc + urlparse(url).path)[:50]
                    filename = os.path.join(screenshot_dir, f"fail_{safe_url_part}_{timestamp}_check{j+1}.png")
                    screenshot_msg = take_screenshot(driver, filename)
                    check_result["screenshot"] = filename # Add screenshot path to result
                    print(f"    {screenshot_msg}")
            else:
                 print(f"    Check PASSED.")


            page_result["checks"].append(check_result)

    # Generate Report
    save_json_report(validation_results, args.report)

    # Quit WebDriver
    if driver:
        print("\nQuitting WebDriver...")
        driver.quit()
        print("WebDriver quit.")

if __name__ == "__main__":
    main()