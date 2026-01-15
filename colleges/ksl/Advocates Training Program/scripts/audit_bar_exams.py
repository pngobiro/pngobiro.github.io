#!/usr/bin/env python3
"""
Audit Bar Exam Papers to identify missing years/sessions from 2010-2024.
This script analyzes your existing bar exam collection and shows what's missing.
"""

import os
import re
from pathlib import Path

def extract_exam_info(filename):
    """
    Extract year and session information from exam filenames.
    Returns: (year, session) or None if not an exam paper
    """
    filename_lower = filename.lower()
    
    # Common exam patterns
    patterns = [
        # Standard format: July_2019_, November_2018_, etc.
        (r'(july|november|march|october|april)_(\d{4})_', '\\2', '\\1'),
        # Year only: 2019 Jul.pdf, 2018 Nov.pdf
        (r'(\d{4})\s+(jul|nov|mar|oct|apr)', '\\1', '\\2'),
        # Reverse: Jul 2019, Nov 2018
        (r'(jul|nov|mar|oct|apr)\s+(\d{4})', '\\2', '\\1'),
        # Just year: 2019.pdf, 2018.pdf (assume November)
        (r'^(\d{4})\.pdf$', '\\1', 'nov'),
        # ATP format: ATP 100 Civil Litigation 2019
        (r'atp\s+\d+.*(\d{4})', '\\1', 'unknown'),
    ]
    
    for pattern, year_group, session_group in patterns:
        match = re.search(pattern, filename_lower)
        if match:
            try:
                year = int(match.group(1) if year_group == '\\1' else match.group(2))
                if 2010 <= year <= 2024:
                    if session_group.startswith('\\'):
                        session = match.group(int(session_group[1:]))
                    else:
                        session = session_group
                    
                    # Normalize session names
                    session_map = {
                        'jul': 'July', 'july': 'July',
                        'nov': 'November', 'november': 'November', 
                        'mar': 'March', 'march': 'March',
                        'oct': 'October', 'october': 'October',
                        'apr': 'April', 'april': 'April',
                        'unknown': 'Unknown'
                    }
                    
                    session = session_map.get(session.lower(), session.title())
                    return (year, session)
            except (ValueError, IndexError):
                continue
    
    return None

def audit_subject_exams(subject_path):
    """
    Audit bar exams for a single subject.
    """
    bar_exams_path = os.path.join(subject_path, 'Past Papers', 'Bar Exams')
    
    if not os.path.exists(bar_exams_path):
        return None
    
    # Get all exam files
    exam_files = [f for f in os.listdir(bar_exams_path) 
                  if os.path.isfile(os.path.join(bar_exams_path, f))]
    
    # Extract exam information
    found_exams = {}
    unrecognized_files = []
    
    for filename in exam_files:
        exam_info = extract_exam_info(filename)
        if exam_info:
            year, session = exam_info
            if year not in found_exams:
                found_exams[year] = set()
            found_exams[year].add(session)
        else:
            # Check if it might be an exam file we didn't recognize
            if any(term in filename.lower() for term in ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024']):
                unrecognized_files.append(filename)
    
    return {
        'found_exams': found_exams,
        'unrecognized_files': unrecognized_files,
        'total_files': len(exam_files)
    }

def generate_missing_report():
    """
    Generate a comprehensive report of missing bar exams.
    """
    print("ATP BAR EXAM AUDIT REPORT")
    print("=" * 60)
    print("Analyzing bar exam collection from 2010-2024")
    print("Common exam sessions: July, November, March, October")
    print("=" * 60)
    
    # Get all ATP subjects
    atp_folders = [d for d in os.listdir('.') if d.startswith('ATP ') and os.path.isdir(d)]
    atp_folders.sort()
    
    if not atp_folders:
        print("No ATP folders found.")
        return
    
    all_years = list(range(2010, 2025))  # 2010-2024
    common_sessions = ['July', 'November', 'March', 'October']
    
    overall_missing = {}
    
    for folder in atp_folders:
        print(f"\n{'='*60}")
        print(f"📚 {folder}")
        print(f"{'='*60}")
        
        audit_result = audit_subject_exams(folder)
        
        if not audit_result:
            print("❌ No Bar Exams folder found")
            continue
        
        found_exams = audit_result['found_exams']
        unrecognized = audit_result['unrecognized_files']
        total_files = audit_result['total_files']
        
        print(f"📊 Total exam files: {total_files}")
        
        # Show what we found
        print(f"\n✅ FOUND EXAMS:")
        if found_exams:
            for year in sorted(found_exams.keys()):
                sessions = sorted(found_exams[year])
                print(f"  {year}: {', '.join(sessions)}")
        else:
            print("  None recognized")
        
        # Identify missing exams
        missing_exams = []
        for year in all_years:
            if year not in found_exams:
                # Entire year missing
                for session in common_sessions:
                    missing_exams.append(f"{year} {session}")
            else:
                # Check for missing sessions in existing years
                found_sessions = found_exams[year]
                for session in common_sessions:
                    if session not in found_sessions and 'Unknown' not in found_sessions:
                        missing_exams.append(f"{year} {session}")
        
        # Show missing exams
        print(f"\n❌ POTENTIALLY MISSING EXAMS:")
        if missing_exams:
            # Group by year for better readability
            missing_by_year = {}
            for exam in missing_exams:
                year, session = exam.split(' ', 1)
                if year not in missing_by_year:
                    missing_by_year[year] = []
                missing_by_year[year].append(session)
            
            for year in sorted(missing_by_year.keys()):
                sessions = ', '.join(missing_by_year[year])
                print(f"  {year}: {sessions}")
            
            print(f"\n📈 SUMMARY: {len(missing_exams)} potentially missing exam sessions")
        else:
            print("  None identified (you may have complete collection!)")
        
        # Show unrecognized files that might be exams
        if unrecognized:
            print(f"\n❓ UNRECOGNIZED FILES (might be exams):")
            for filename in sorted(unrecognized)[:10]:  # Show first 10
                print(f"  • {filename}")
            if len(unrecognized) > 10:
                print(f"  ... and {len(unrecognized) - 10} more")
        
        # Track overall missing for summary
        subject_code = folder.split(' ')[1]  # Extract ATP number
        overall_missing[subject_code] = len(missing_exams)
    
    # Overall summary
    print(f"\n{'='*60}")
    print(f"📋 OVERALL SUMMARY")
    print(f"{'='*60}")
    
    total_missing = sum(overall_missing.values())
    print(f"Total potentially missing exam sessions across all subjects: {total_missing}")
    
    if overall_missing:
        print(f"\nMissing exams by subject:")
        for subject_code in sorted(overall_missing.keys()):
            count = overall_missing[subject_code]
            print(f"  ATP {subject_code}: {count} missing sessions")
    
    print(f"\n📝 NOTES:")
    print(f"• This analysis is based on filename patterns")
    print(f"• Some exams might be named differently and not recognized")
    print(f"• Not all subjects may have exams in all sessions (March, October less common)")
    print(f"• Some years might not have had exams due to schedule changes")
    print(f"• Check 'Unrecognized files' - they might be exams with different naming")
    
    print(f"\n🔍 RECOMMENDATIONS:")
    print(f"• Focus on July and November sessions (most common)")
    print(f"• Check recent years (2020-2024) first as they're most relevant")
    print(f"• Verify unrecognized files manually")
    print(f"• Consider that some subjects might have different exam schedules")

def main():
    """
    Main function to run the bar exam audit.
    """
    print("Starting ATP Bar Exam Audit...")
    print("This will analyze your existing bar exam collection")
    print("and identify potentially missing exam sessions from 2010-2024.\n")
    
    response = input("Proceed with audit? (y/n): ").strip().lower()
    
    if response in ['y', 'yes']:
        generate_missing_report()
    else:
        print("Audit cancelled.")

if __name__ == "__main__":
    main()