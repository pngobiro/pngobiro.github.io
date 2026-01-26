#!/usr/bin/env python3
import os
import shutil
import zipfile
from pathlib import Path

def create_starter_kit(output_filename="course_starter_kit.zip"):
    """
    Collects reusable components and creates a zip file for starting a new course project.
    """
    
    # Define what to include
    files_to_include = [
        "exams-manager/create_structure.sh",
        "exams-manager/update_index.sh",
        "exams-manager/update_all.sh",
        "exams-manager/structure_config.sh", # Include as template
        "exams-manager/styles.css", # Source of truth for CSS
        "assets/js/sidebar-navigation.js",
        "exam_manager.py", # Python tool
        "README_EXAM_MANAGER.md",
        "analyze_pdf.py", # Helper tool
        "fix_content_paths.py" # Helper tool
    ]
    
    # Create a temporary directory for organization
    temp_dir = Path("starter_kit_temp")
    if temp_dir.exists():
        shutil.rmtree(temp_dir)
    temp_dir.mkdir()
    
    print(f"Collecting files for {output_filename}...")
    
    try:
        # 1. Scripts & Config
        scripts_dir = temp_dir / "scripts"
        scripts_dir.mkdir()
        
        # Copy bash scripts
        for f in ["create_structure.sh", "update_index.sh", "update_all.sh", "structure_config.sh"]:
            src = Path("exams-manager") / f
            if src.exists():
                shutil.copy2(src, scripts_dir / f)
                print(f"  Added: {f}")
            else:
                print(f"  Warning: {f} not found")

        # 2. Assets (CSS/JS)
        assets_dir = temp_dir / "assets"
        (assets_dir / "css").mkdir(parents=True)
        (assets_dir / "js").mkdir(parents=True)
        (assets_dir / "images").mkdir(parents=True)
        
        # Copy CSS (Use the backup one as it's the source)
        css_src = Path("exams-manager/styles.css")
        if css_src.exists():
            shutil.copy2(css_src, assets_dir / "css/styles.css")
            print("  Added: styles.css")
            
        # Copy JS
        js_src = Path("assets/js/sidebar-navigation.js")
        if js_src.exists():
            shutil.copy2(js_src, assets_dir / "js/sidebar-navigation.js")
            print("  Added: sidebar-navigation.js")
            
        # 3. Python Tools
        tools_dir = temp_dir / "tools"
        tools_dir.mkdir()
        
        for f in ["exam_manager.py", "analyze_pdf.py", "fix_content_paths.py"]:
            if Path(f).exists():
                shutil.copy2(f, tools_dir / f)
                print(f"  Added: {f}")

        # 4. Documentation
        if Path("README_EXAM_MANAGER.md").exists():
            shutil.copy2("README_EXAM_MANAGER.md", temp_dir / "README.md")
            print("  Added: README.md")
            
        # 5. Instructions (Create a guide)
        with open(temp_dir / "INSTRUCTIONS.md", "w") as f:
            f.write("# Course Starter Kit\n\nUse this kit to initialize a new educational content repository.\n\n## Setup Steps\n\n1. **Initialize Directory**:\n   Copy all files from this kit into your new project root.\n\n2. **Configure Structure**:\n   Edit `scripts/structure_config.sh`.\n   - Update `COLLEGES` (e.g., \"Engineering Dept\").\n   - Update `SUBJECTS` (e.g., \"Thermodynamics\", \"Fluid Mechanics\").\n   - Update `CATEGORIES` if needed (default: CATs, FQE, etc.).\n\n3. **Generate Structure**:\n   Run the structure generator:\n   ```bash\n   ./scripts/create_structure.sh\n   ```\n   This creates the folders and `index.html` files.\n\n4. **Install Assets**:\n   Move the `assets` folder to your project root if not already there.\n   Ensure `assets/css/styles.css` is present.\n\n5. **Manage Content**:\n   - Use `tools/exam_manager.py` to track PDF files.\n   - Use `scripts/update_all.sh` to refresh HTML indexes after adding content.\n\n## Tools Included\n- **exam_manager.py**: Dashboard for tracking PDF processing status.\n- **analyze_pdf.py**: Helper to inspect PDF content for splitting.\n- **fix_content_paths.py**: Fixes CSS/JS links if you move HTML files.\n")
            print("  Added: INSTRUCTIONS.md")

        # Zip it up
        shutil.make_archive(output_filename.replace(".zip", ""), 'zip', temp_dir)
        print(f"\nSuccess! Created {output_filename}")
        
    finally:
        # Cleanup
        if temp_dir.exists():
            shutil.rmtree(temp_dir)

if __name__ == "__main__":
    create_starter_kit()
