#!/usr/bin/env python3
"""
Studocu Research Agent
Orchestrates the entire document discovery and organization workflow.
"""

import sys
import subprocess
import os
import time
import json
import re

# ANSI colors
class Colors:
    HEADER = '\033[95m'
    BLUE = '\033[94m'
    CYAN = '\033[96m'
    GREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'

def print_header(text):
    print(f"\n{Colors.HEADER}{Colors.BOLD}=== {text} ==={Colors.ENDC}")

def print_step(step, text):
    print(f"\n{Colors.BLUE}[Step {step}] {text}{Colors.ENDC}")

def print_success(text):
    print(f"{Colors.GREEN}✓ {text}{Colors.ENDC}")

def run_command(command, description=None):
    if description:
        print(f"Running: {description}...")
    
    try:
        # Use shell=False for security, split command string into list
        if isinstance(command, str):
            import shlex
            args = shlex.split(command)
        else:
            args = command
            
        result = subprocess.run(args, check=True, text=True, capture_output=False)
        return True
    except subprocess.CalledProcessError as e:
        print(f"{Colors.FAIL}Error executing command: {e}{Colors.ENDC}")
        return False

def get_config_query():
    try:
        from config import SEARCH_QUERY
        return SEARCH_QUERY
    except ImportError:
        return None

def main():
    print_header("STUDOCU SMART RESEARCH AGENT")
    print("Tell me what you are looking for, and I'll handle the configuration and searching.")
    
    # 1. Unified Input
    user_input = input(f"\n{Colors.CYAN}Describe your research goal (e.g. 'Nursing year 1 sem 2 exams at KMTC'): {Colors.ENDC}").strip()
    
    if not user_input:
        print("No input provided. Using existing configuration...")
        search_query = get_config_query()
        if not search_query:
            print("No existing configuration found. Exiting.")
            return
        # Default to single search if no input
        mode = "single"
    else:
        # 2. AI Analysis & Auto-Configuration
        print_step(1, "Analyzing Requirements")
        
        try:
            from build_config import ConfigBuilder
            builder = ConfigBuilder()
            params = builder.analyze_requirements(user_input)
            
            if params:
                # Update config.py automatically
                builder.build_config(params)
                search_query = params.get('search_query')
                
                # Intelligent Mode Suggestion
                print(f"\n{Colors.GREEN}✓ Configuration Updated{Colors.ENDC}")
                print(f"   Target: {params.get('course_name')} - {params.get('academic_level')}")
                print(f"   Institution ID: {params.get('institution_id')}")
                print(f"   Base Keyword: {search_query}")
                
                print(f"\n{Colors.WARNING}How detailed should this search be?{Colors.ENDC}")
                print("1. Deep Dive (Recommended): AI generates & scrapes ALL related subjects/topics.")
                print("2. Focused Search: Scrape ONLY the base keyword above.")
                
                choice = input("\nSelect Mode (1/2) [Default: 1]: ").strip()
                mode = "multi" if choice in ['1', ''] else "single"
            else:
                print("Could not analyze input. Falling back to simple search.")
                search_query = user_input
                mode = "single"
                
        except ImportError:
            print("Config builder module not found. Proceeding with manual input.")
            search_query = user_input
            mode = "single"

    # 3. Execution
    if mode == "multi":
        print_step(2, "Starting Deep Dive Search")
        # Pass the optimized base query to the multi-scraper
        run_command(["./venv/bin/python3", "multi_query_scraper.py", search_query], "Multi-Query Scraper")
        
        # Determine the likely output file pattern for prioritization
        # This is an approximation since multi-query creates multiple files
        print(f"\n{Colors.CYAN}To prioritize results, run this command for specific subject files:{Colors.ENDC}")
        print("./venv/bin/python3 ai_query_optimizer.py --action prioritize --json-file <filename>")
        
    else:
        print_step(2, "Starting Focused Search")
        
        # Generate expected filenames
        clean_name = re.sub(r'[^\w\s-]', '', search_query.lower())
        clean_name = re.sub(r'[-\s]+', '_', clean_name)[:100]
        json_file = f"studocu_{clean_name}_documents.json"
        csv_file = f"studocu_{clean_name}_documents.csv"
        
        cmd = [
            "./venv/bin/python3", "selenium_studocu_scraper.py",
            "--search-query", search_query,
            "--output-json", json_file,
            "--output-csv", csv_file
        ]
        
        success = run_command(cmd, "Scraper")
        
        if success and os.path.exists(json_file):
            # 4. Auto-Prioritization (Only for Single Search flow)
            print_step(3, "AI Analysis & Prioritization")
            cmd = [
                "./venv/bin/python3", "ai_query_optimizer.py",
                "--action", "prioritize",
                "--json-file", json_file,
                "--priority", "high"
            ]
            run_command(cmd)
            
            # 5. Metadata Enhancement
            print_step(4, "Metadata Enhancement")
            target_file = json_file.replace('.json', '_prioritized_high.json')
            if not os.path.exists(target_file): target_file = json_file
            
            cmd = [
                "./venv/bin/python3", "ai_query_optimizer.py",
                "--action", "enhance",
                "--json-file", target_file
            ]
            run_command(cmd)
            
            # 6. Organization Guide
            print_step(5, "Download & Organize")
            enhanced_file = target_file.replace('.json', '_enhanced.json')
            print(f"1. Download files to {Colors.BOLD}./downloads{Colors.ENDC} (keep IDs in filenames!)")
            print(f"2. Run: ./venv/bin/python3 organize_downloads.py --json-file {enhanced_file}")

if __name__ == "__main__":
    main()
