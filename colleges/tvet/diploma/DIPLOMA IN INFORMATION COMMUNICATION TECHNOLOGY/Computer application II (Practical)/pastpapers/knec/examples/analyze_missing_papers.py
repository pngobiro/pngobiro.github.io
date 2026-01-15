#!/usr/bin/env python3
"""
Analyze missing past papers by comparing existing papers against expected patterns.
"""

from datetime import datetime
import os
import re
from typing import List, Tuple

def get_current_period() -> Tuple[int, str]:
    """Get current year and exam period (march/july/november) based on current date."""
    now = datetime.now()
    year = now.year
    
    if now.month <= 3:
        period = 'march'
    elif now.month <= 7:
        period = 'july'
    else:
        period = 'november'
        
    return year, period

def list_existing_papers(directory: str) -> List[Tuple[int, str]]:
    """Get list of existing papers from HTML files."""
    papers = []
    pattern = re.compile(r'(\d{4})([mjn])\.html')
    
    for filename in os.listdir(directory):
        match = pattern.match(filename)
        if match:
            year = int(match.group(1))
            period_code = match.group(2)
            period = {
                'm': 'march',
                'j': 'july',
                'n': 'november'
            }.get(period_code)
            if period:
                papers.append((year, period))
    
    return sorted(papers)

def get_expected_periods(year: int) -> List[str]:
    """Get expected exam periods for a given year."""
    return ['march', 'july', 'november']

def analyze_missing_papers(directory: str = '.') -> List[Tuple[int, str]]:
    """
    Analyze which papers are missing based on patterns:
    - Two papers per year normally (July and November)
    - March papers sometimes available
    - Range: From oldest existing to current/latest possible
    """
    existing = list_existing_papers(directory)
    if not existing:
        return []
    
    # Get range
    oldest_year = min(year for year, _ in existing)
    current_year, current_period = get_current_period()
    
    # Build list of missing papers
    missing = []
    
    for year in range(oldest_year, current_year + 1):
        expected_periods = get_expected_periods(year)
        existing_periods = [period for y, period in existing if y == year]
        
        # For current year, only include up to current period
        if year == current_year:
            expected_periods = [p for p in expected_periods 
                              if expected_periods.index(p) <= expected_periods.index(current_period)]
        
        # Add missing periods
        for period in expected_periods:
            if period not in existing_periods:
                missing.append((year, period))
    
    return sorted(missing)

def generate_report() -> str:
    """Generate a report of missing papers."""
    missing = analyze_missing_papers()
    
    report = ["# Missing Past Papers Report", ""]
    report.append(f"Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    report.append(f"Current Period: {get_current_period()[1].title()} {get_current_period()[0]}")
    report.append("")
    
    if not missing:
        report.append("No missing papers detected.")
        return "\n".join(report)
    
    report.append("## Missing Papers")
    report.append("")
    
    current_year = None
    for year, period in missing:
        if year != current_year:
            report.append(f"\n### {year}")
            current_year = year
        report.append(f"- {period.title()}")
    
    return "\n".join(report)

if __name__ == '__main__':
    print(generate_report())
