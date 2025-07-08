import argparse
import os
import time
from urllib.parse import urlparse

from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.chrome.options import Options as ChromeOptions
from selenium.common.exceptions import WebDriverException
from webdriver_manager.chrome import ChromeDriverManager

# --- Configuration ---
DEFAULT_OUTPUT_DIR = "responsive_screenshots"
VIEWPORTS = {
    "mobile_sm": (360, 640),
    "mobile_md": (375, 667),
    "mobile_lg": (414, 896),
    "tablet_sm": (601, 962),
    "tablet_md": (768, 1024),
    "desktop_sm": (1024, 768),
    "desktop_md": (1280, 800),
    "desktop_lg": (1440, 900),
    "desktop_xl": (1920, 1080),
}
# Delay in seconds after resize to allow rendering
RENDER_DELAY = 1

# --- Helper Functions ---
def create_safe_filename(url, viewport_name, width, height):
    """Creates a safe filename from URL and viewport info."""
    parsed_url = urlparse(url)
    domain = parsed_url.netloc.replace("www.", "")
    path = parsed_url.path.replace("/", "_").strip("_")
    if not path:
        path = "index"
    safe_domain = "".join(c if c.isalnum() else "_" for c in domain)
    safe_path = "".join(c if c.isalnum() else "_" for c in path)[:50] # Limit path length
    return f"{safe_domain}_{safe_path}_{viewport_name}_{width}x{height}.png"

# --- Main Logic ---
def main():
    parser = argparse.ArgumentParser(description="Responsive Design Screenshot Tool")
    parser.add_argument("url", help="The URL (http/https or local file path) to test.")
    parser.add_argument(
        "-o", "--output",
        default=DEFAULT_OUTPUT_DIR,
        help=f"Directory to save screenshots (default: {DEFAULT_OUTPUT_DIR})"
    )
    parser.add_argument(
        "--headless",
        action="store_true",
        help="Run the browser in headless mode (no GUI)."
    )
    args = parser.parse_args()

    # Ensure output directory exists
    if not os.path.exists(args.output):
        try:
            os.makedirs(args.output, exist_ok=True)
            print(f"Created output directory: {args.output}")
        except OSError as e:
            print(f"Error: Could not create output directory '{args.output}': {e}")
            return

    # Setup WebDriver
    print("Setting up WebDriver...")
    options = ChromeOptions()
    if args.headless:
        print("Running in headless mode.")
        options.add_argument("--headless")
        # Headless often needs a defined window size initially
        options.add_argument("--window-size=1920,1080")
    options.add_argument("--log-level=3")
    options.add_experimental_option('excludeSwitches', ['enable-logging'])

    driver = None
    try:
        service = ChromeService(ChromeDriverManager().install())
        driver = webdriver.Chrome(service=service, options=options)
        print("WebDriver setup complete.")

        # Handle local file paths
        target_url = args.url
        if not urlparse(target_url).scheme and os.path.exists(target_url):
             target_url = 'file://' + os.path.abspath(target_url)
             print(f"Resolved local path to: {target_url}")

        # Load the page
        print(f"Loading URL: {target_url}")
        driver.get(target_url)
        time.sleep(2) # Initial load wait

        # Loop through viewports and take screenshots
        for name, (width, height) in VIEWPORTS.items():
            print(f"  Resizing to {name} ({width}x{height})...")
            try:
                driver.set_window_size(width, height)
                time.sleep(RENDER_DELAY) # Wait for potential re-rendering

                filename = create_safe_filename(args.url, name, width, height)
                filepath = os.path.join(args.output, filename)

                driver.save_screenshot(filepath)
                print(f"    Screenshot saved: {filepath}")

            except WebDriverException as e:
                print(f"    Error resizing or taking screenshot for {name}: {e}")
            except Exception as e:
                 print(f"    An unexpected error occurred for {name}: {e}")


    except WebDriverException as e:
        print(f"WebDriver error: {e}")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")
    finally:
        # Quit WebDriver
        if driver:
            print("\nQuitting WebDriver...")
            driver.quit()
            print("WebDriver quit.")

if __name__ == "__main__":
    main()