#!/usr/bin/env python3
"""
Migration Helper Script
Helps existing DHRIT users migrate to the new configurable system
"""

import json
import sys
from pathlib import Path

def create_dhrit_config():
    """Create a DHRIT-specific configuration file"""
    config = {
        "program_name": "DHRIT",
        "program_short_name": "DHRIT",
        "program_full_name": "Diploma in Health Records and Information Technology",
        "excluded_dirs": [
            "assets",
            "exams-manager",
            "KMTC",
            "DHRIT Diploma in Health Records & Information Technology Curriculum",
            "quizzes",
            "starter_kit_temp"
        ]
    }
    
    config_path = Path.cwd() / "exam-manager-config.json"
    
    if config_path.exists():
        print("⚠️  Configuration file already exists!")
        print(f"Location: {config_path}")
        
        response = input("\nOverwrite existing configuration? (y/N): ")
        if response.lower() != 'y':
            print("❌ Migration cancelled.")
            return False
    
    # Save configuration
    try:
        with open(config_path, 'w') as f:
            json.dump(config, f, indent=2)
        
        print("\n✅ DHRIT configuration created successfully!")
        print(f"📁 Location: {config_path}")
        print("\n📋 Configuration contents:")
        print("-" * 60)
        print(json.dumps(config, indent=2))
        print("-" * 60)
        
        print("\n📝 Next steps:")
        print("1. Review the configuration above")
        print("2. Edit exam-manager-config.json if needed")
        print("3. Run: python exam_manager.py dashboard")
        print("4. Regenerate HTML: python exam_manager.py index --force")
        
        return True
        
    except Exception as e:
        print(f"❌ Error creating configuration: {e}")
        return False

def main():
    print("=" * 60)
    print("DHRIT Migration Helper")
    print("Exam Manager v1.0.0 → v1.1.0")
    print("=" * 60)
    print()
    print("This script will create a configuration file for DHRIT")
    print("to maintain your existing branding and settings.")
    print()
    
    response = input("Continue? (Y/n): ")
    if response.lower() == 'n':
        print("Migration cancelled.")
        sys.exit(0)
    
    print()
    success = create_dhrit_config()
    
    if success:
        print("\n✨ Migration complete!")
        print("\nYour exam manager is now configured for DHRIT.")
        print("All future operations will use this configuration.")
    else:
        print("\n⚠️  Migration incomplete.")
        print("Please check the errors above and try again.")
        sys.exit(1)

if __name__ == "__main__":
    main()
