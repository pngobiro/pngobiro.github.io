from selenium import webdriver
from selenium.webdriver.chrome.service import Service
import os

def setup_chromedriver():
    """Setup ChromeDriver for Selenium tests"""
    try:
        # Create a new Chrome Options instance
        options = webdriver.ChromeOptions()
        options.add_argument('--headless')  # Run in headless mode
        options.add_argument('--no-sandbox')
        options.add_argument('--disable-dev-shm-usage')
        
        # Create a new Chrome driver instance
        driver = webdriver.Chrome(options=options)
        
        # Quit the driver to ensure setup was successful
        driver.quit()
        print("ChromeDriver setup successful!")
        return True
    except Exception as e:
        print(f"Error setting up ChromeDriver: {e}")
        return False

if __name__ == "__main__":
    setup_chromedriver()