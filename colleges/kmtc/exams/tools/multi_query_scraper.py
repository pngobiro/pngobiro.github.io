#!/usr/bin/env python3
"""
Multi-Query Scraper Orchestrator
Generates multiple AI search variations for a topic and scrapes them all sequentially.
"""

import sys
import subprocess
import time
import argparse
from typing import List

# Import AI optimizer logic (assuming it's in the same directory)
try:
    from ai_query_optimizer import AIQueryOptimizer
except ImportError:
    print("Error: ai_query_optimizer.py not found.")
    sys.exit(1)

class Colors:
    HEADER = '\033[95m'
    BLUE = '\033[94m'
    GREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'

def run_scraper(query: str, max_pages: int = None, retries: int = 3):
    """Run the selenium scraper for a specific query with retries"""
    print(f"\n{Colors.BLUE}>>> Scraping topic: {query}{Colors.ENDC}")
    
    cmd = [
        "./venv/bin/python3", "selenium_studocu_scraper.py",
        "--search-query", query
    ]
    
    if max_pages:
        cmd.extend(["--pages", str(max_pages)])
        
    for attempt in range(1, retries + 1):
        try:
            if attempt > 1:
                print(f"{Colors.WARNING}Retry attempt {attempt}/{retries}...{Colors.ENDC}")
            
            # Capture output to avoid cluttering unless error, but user wants to see progress?
            # Let's keep it visible but maybe suppress if we want cleaner output.
            # For now, let it print so user sees what's happening.
            subprocess.run(cmd, check=True)
            print(f"{Colors.GREEN}✓ Finished: {query}{Colors.ENDC}")
            return True
            
        except subprocess.CalledProcessError:
            print(f"{Colors.FAIL}✗ Attempt {attempt} failed for: {query}{Colors.ENDC}")
            if attempt < retries:
                time.sleep(5)  # Wait before retry
            else:
                print(f"{Colors.FAIL}✗ Giving up on: {query}{Colors.ENDC}")
                return False
    return False

def main():
    parser = argparse.ArgumentParser(description='Multi-Query AI Scraper')
    parser.add_argument('topic', help='Broad topic to generate queries for (e.g. "Clinical Medicine")')
    parser.add_argument('--limit', type=int, default=5, help='Max number of variations to generate')
    parser.add_argument('--pages', type=int, help='Max pages per query (default: from config)')
    
    args = parser.parse_args()
    
    print(f"{Colors.HEADER}AI Multi-Query Scraper{Colors.ENDC}")
    print(f"Generating optimized queries for: '{args.topic}'...")
    
    # 1. Smarten and Generate Variations
    optimizer = AIQueryOptimizer()
    
    # First, optimize the base topic itself
    smart_topic = optimizer.optimize_base_topic(args.topic)
    
    print(f"Generating optimized variations for: '{smart_topic}'...")
    variations = optimizer.generate_search_variations(smart_topic)
    
    # Limit variations
    selected_queries = variations[:args.limit]
    
    print(f"\n{Colors.GREEN}Generated {len(selected_queries)} variations:{Colors.ENDC}")
    for i, q in enumerate(selected_queries, 1):
        print(f"  {i}. {q}")
        
    confirm = input(f"\nProceed with scraping these {len(selected_queries)} topics? (Y/n): ").lower().strip()
    if confirm == 'n':
        print("Aborted.")
        return

    # 2. Loop and Scrape
    success_count = 0
    for i, query in enumerate(selected_queries, 1):
        print(f"\n{Colors.HEADER}--- Batch {i}/{len(selected_queries)} ---")
        if run_scraper(query, args.pages):
            success_count += 1
        
        # Cool-down between queries to be polite/safe
        if i < len(selected_queries):
            print("Cooling down for 5 seconds...")
            time.sleep(5)

    print(f"\n{Colors.HEADER}Batch Complete{Colors.ENDC}")
    print(f"Successfully scraped {success_count}/{len(selected_queries)} topics.")

if __name__ == "__main__":
    main()
