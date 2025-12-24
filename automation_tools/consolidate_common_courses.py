#!/usr/bin/env python3
"""
KMTC Common Courses Consolidation Tool
Identifies and consolidates duplicate course content across diploma programs
"""

import os
import shutil
import json
from pathlib import Path
from datetime import datetime
from collections import defaultdict

# KMTC Common Courses based on curriculum analysis
COMMON_COURSES = {
    "Communication Skills": {
        "code": "COM",
        "variants": ["Communication Skills", "Communication"],
        "description": "Communication skills for healthcare professionals"
    },
    "Community Health": {
        "code": "CHE",
        "variants": ["Community Health", "Community Health System"],
        "description": "Community health principles and practice"
    },
    "Health Systems Management": {
        "code": "HSM",
        "variants": ["Health Systems Management", "Health System Management", "Health Services Management", "Healthcare Management"],
        "description": "Health systems organization and management"
    },
    "First Aid": {
        "code": "FAD",
        "variants": ["First Aid", "First Aid and Emergency Care"],
        "description": "Basic first aid and emergency response"
    },
    "Research Methodology": {
        "code": "RES",
        "variants": ["Research", "Research Methodology", "Research Methods"],
        "description": "Research methods and methodology"
    },
    "HIV-AIDS and STIs": {
        "code": "HAI",
        "variants": ["HIV and AIDS", "HIV AIDS", "HIV-AIDS", "HIV AIDS & STI", "HIV-AIDS & STI", "STI HIV AIDS", "HIV and STDs"],
        "description": "HIV/AIDS and sexually transmitted infections"
    },
    "Human Psychology": {
        "code": "PSY",
        "variants": ["Human Psychology", "Psychology", "Behavioural Sciences"],
        "description": "Human psychology and behavioral sciences"
    },
    "Pharmacology": {
        "code": "PHA",
        "variants": ["Pharmacology", "Pharmacology & Therapeutics", "Pharmacology I", "Pharmacology II"],
        "description": "Pharmacology principles"
    },
    "Human Anatomy": {
        "code": "ANA",
        "variants": ["Human Anatomy", "Anatomy", "Human Anatomy And Physiology", "Anatomy and Physiology"],
        "description": "Human anatomy and physiology"
    },
    "Epidemiology": {
        "code": "EPI",
        "variants": ["Epidemiology", "Epidemiology and Disease Control"],
        "description": "Epidemiology and disease surveillance"
    },
    "Health Statistics": {
        "code": "HST",
        "variants": ["Health Statistics", "Biostatistics", "Statistics"],
        "description": "Health statistics and biostatistics"
    },
    "Medical Microbiology": {
        "code": "MIC",
        "variants": ["Medical Microbiology", "Microbiology", "Microbiology and Immunology"],
        "description": "Medical microbiology"
    },
    "Biochemistry": {
        "code": "BCH",
        "variants": ["Biochemistry", "Medical Biochemistry"],
        "description": "Biochemistry fundamentals"
    }
}

class CommonCoursesConsolidator:
    def __init__(self, base_path: str):
        self.base_path = Path(base_path)
        self.diploma_path = self.base_path / "colleges/kmtc/diploma"
        self.common_path = self.diploma_path / "Common Courses"
        self.duplicates = defaultdict(list)
        self.report = {
            "timestamp": datetime.now().isoformat(),
            "common_courses": {},
            "duplicates_found": {},
            "consolidation_plan": []
        }
    
    def scan_for_duplicates(self):
        """Scan diploma programs for common course duplicates"""
        print("🔍 Scanning for common course duplicates...")
        
        for common_name, info in COMMON_COURSES.items():
            variants = info["variants"]
            found_locations = []
            
            for variant in variants:
                # Search for directories matching this variant
                for diploma_dir in self.diploma_path.iterdir():
                    if not diploma_dir.is_dir() or diploma_dir.name == "Common Courses":
                        continue
                    
                    # Search at multiple depths
                    for depth in range(1, 4):
                        pattern = "/".join(["*"] * depth) + f"/{variant}"
                        matches = list(diploma_dir.glob(pattern))
                        for match in matches:
                            if match.is_dir():
                                # Count content
                                content_count = self._count_content(match)
                                found_locations.append({
                                    "path": str(match.relative_to(self.base_path)),
                                    "variant_name": variant,
                                    "program": diploma_dir.name,
                                    "content_count": content_count
                                })
            
            if found_locations:
                self.duplicates[common_name] = found_locations
                self.report["duplicates_found"][common_name] = {
                    "count": len(found_locations),
                    "locations": found_locations
                }
        
        return self.duplicates
    
    def _count_content(self, path: Path) -> dict:
        """Count content in a directory"""
        counts = {"html": 0, "pdf": 0, "other": 0, "dirs": 0}
        try:
            for item in path.rglob("*"):
                if item.is_file():
                    ext = item.suffix.lower()
                    if ext in [".html", ".htm"]:
                        counts["html"] += 1
                    elif ext == ".pdf":
                        counts["pdf"] += 1
                    else:
                        counts["other"] += 1
                elif item.is_dir():
                    counts["dirs"] += 1
        except Exception:
            pass
        return counts
    
    def generate_consolidation_plan(self):
        """Generate a plan for consolidating common courses"""
        print("📋 Generating consolidation plan...")
        
        plan = []
        for common_name, locations in self.duplicates.items():
            if len(locations) < 2:
                continue
            
            # Find the location with most content
            best_source = max(locations, key=lambda x: sum(x["content_count"].values()))
            
            action = {
                "common_course": common_name,
                "code": COMMON_COURSES[common_name]["code"],
                "description": COMMON_COURSES[common_name]["description"],
                "duplicate_count": len(locations),
                "recommended_source": best_source["path"],
                "target_path": f"colleges/kmtc/diploma/Common Courses/{common_name}",
                "all_locations": [loc["path"] for loc in locations],
                "action": "consolidate"
            }
            plan.append(action)
        
        self.report["consolidation_plan"] = plan
        return plan
    
    def print_report(self):
        """Print a summary report"""
        print("\n" + "="*70)
        print("📊 KMTC COMMON COURSES DUPLICATION REPORT")
        print("="*70)
        
        total_duplicates = sum(len(locs) for locs in self.duplicates.values())
        courses_with_dups = len([k for k, v in self.duplicates.items() if len(v) > 1])
        
        print(f"\n📈 Summary:")
        print(f"   Common courses identified: {len(COMMON_COURSES)}")
        print(f"   Courses with duplicates: {courses_with_dups}")
        print(f"   Total duplicate instances: {total_duplicates}")
        
        print(f"\n📁 Duplicates by Course:")
        for common_name, locations in sorted(self.duplicates.items(), key=lambda x: -len(x[1])):
            if len(locations) > 1:
                print(f"\n   🔸 {common_name} ({len(locations)} copies)")
                for loc in locations[:5]:
                    content = loc["content_count"]
                    print(f"      • {loc['program']}")
                    print(f"        HTML: {content['html']}, PDF: {content['pdf']}, Other: {content['other']}")
                if len(locations) > 5:
                    print(f"      ... and {len(locations) - 5} more")
        
        print("\n" + "="*70)
        print("📋 CONSOLIDATION PLAN")
        print("="*70)
        
        for item in self.report["consolidation_plan"]:
            print(f"\n🎯 {item['common_course']} ({item['code']})")
            print(f"   Duplicates: {item['duplicate_count']}")
            print(f"   Best source: {item['recommended_source']}")
            print(f"   Target: {item['target_path']}")
        
        print("\n" + "="*70)
    
    def save_report(self, output_file: str):
        """Save detailed report to JSON"""
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(self.report, f, indent=2, ensure_ascii=False)
        print(f"📄 Report saved to: {output_file}")
    
    def consolidate(self, dry_run: bool = True):
        """Execute consolidation - merge all duplicates to Common Courses and delete originals"""
        if dry_run:
            print("\n🔄 DRY RUN - No files will be moved")
        else:
            print("\n🔄 EXECUTING CONSOLIDATION...")
        
        # Create Common Courses directory
        self.common_path.mkdir(parents=True, exist_ok=True)
        
        consolidation_log = []
        
        for item in self.report["consolidation_plan"]:
            common_name = item["common_course"]
            target = self.base_path / item["target_path"]
            all_sources = [self.base_path / loc for loc in item["all_locations"]]
            
            print(f"\n📦 {common_name}")
            print(f"   Target: {target}")
            
            log_entry = {
                "course": common_name,
                "target": str(target),
                "sources_merged": [],
                "sources_deleted": []
            }
            
            if not dry_run:
                # Create target directory
                target.mkdir(parents=True, exist_ok=True)
                
                # Merge all sources into target
                for source in all_sources:
                    if source.exists():
                        print(f"   📥 Merging: {source.name} from {source.parent.name}")
                        self._merge_directories(source, target)
                        log_entry["sources_merged"].append(str(source))
                
                # Delete original directories after merging
                for source in all_sources:
                    if source.exists():
                        print(f"   🗑️  Deleting original: {source}")
                        shutil.rmtree(source)
                        log_entry["sources_deleted"].append(str(source))
                
                print(f"   ✅ Consolidated {len(all_sources)} sources")
            else:
                for source in all_sources:
                    print(f"   Would merge: {source}")
                    log_entry["sources_merged"].append(str(source))
            
            consolidation_log.append(log_entry)
        
        self.report["consolidation_log"] = consolidation_log
        return consolidation_log
    
    def _merge_directories(self, source: Path, target: Path):
        """Merge source directory into target, preserving both contents"""
        for item in source.iterdir():
            target_item = target / item.name
            
            if item.is_dir():
                if target_item.exists():
                    # Recursively merge subdirectories
                    self._merge_directories(item, target_item)
                else:
                    # Copy entire directory
                    shutil.copytree(item, target_item)
            else:
                if not target_item.exists():
                    # Copy file if doesn't exist in target
                    shutil.copy2(item, target_item)
                # If file exists, skip (keep existing)
    
    def generate_db_update_sql(self, output_file: str = "update_common_courses_urls.sql"):
        """Generate SQL to update database URLs after consolidation"""
        from urllib.parse import quote
        
        print("\n📝 Generating database update SQL...")
        
        sql_statements = []
        sql_statements.append("-- KMTC Common Courses URL Update Script")
        sql_statements.append(f"-- Generated: {datetime.now().isoformat()}")
        sql_statements.append("-- Run this after consolidating common courses\n")
        
        for item in self.report["consolidation_plan"]:
            common_name = item["common_course"]
            target_path = item["target_path"]
            old_locations = item["all_locations"]
            
            sql_statements.append(f"\n-- {common_name}")
            sql_statements.append(f"-- Consolidating {len(old_locations)} locations to: {target_path}")
            
            for old_path in old_locations:
                # URL encode paths for matching
                old_url_pattern = f"https://pngobiro.github.io/{quote(old_path, safe='/')}%"
                new_url_base = f"https://pngobiro.github.io/{quote(target_path, safe='/')}"
                
                # Generate UPDATE for Topics
                sql_statements.append(f"""
UPDATE Topics 
SET topicUrl = REPLACE(topicUrl, 
    '{quote(old_path, safe='/')}', 
    '{quote(target_path, safe='/')}')
WHERE topicUrl LIKE '%{quote(old_path, safe='/')}%';""")
                
                # Generate UPDATE for PastPapers
                sql_statements.append(f"""
UPDATE PastPapers 
SET url = REPLACE(url, 
    '{quote(old_path, safe='/')}', 
    '{quote(target_path, safe='/')}')
WHERE url LIKE '%{quote(old_path, safe='/')}%';""")
        
        # Write SQL file
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write('\n'.join(sql_statements))
        
        print(f"📄 SQL file saved to: {output_file}")
        self.report["sql_file"] = output_file
        return sql_statements

def main():
    import argparse
    parser = argparse.ArgumentParser(description='Consolidate KMTC common courses')
    parser.add_argument('--base-path', default='..', help='Base path to pngobiro.github.io')
    parser.add_argument('--output', default='common_courses_report.json', help='Output report file')
    parser.add_argument('--execute', action='store_true', help='Execute consolidation (default is dry run)')
    parser.add_argument('--generate-sql', action='store_true', help='Generate SQL for database URL updates')
    
    args = parser.parse_args()
    
    consolidator = CommonCoursesConsolidator(args.base_path)
    consolidator.scan_for_duplicates()
    consolidator.generate_consolidation_plan()
    consolidator.print_report()
    consolidator.save_report(args.output)
    
    if args.generate_sql:
        consolidator.generate_db_update_sql()
    
    if args.execute:
        consolidator.consolidate(dry_run=False)
    else:
        print("\n💡 Run with --execute to perform consolidation")
        print("💡 Run with --generate-sql to create database update script")

if __name__ == '__main__':
    main()
