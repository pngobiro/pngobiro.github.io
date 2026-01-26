import sys
from pathlib import Path

def main():
    root = Path("/home/ngobiro/projects/pngobiro.github.io/colleges/kmtc/diploma/Diploma in Health Records and Information Technology")
    manager_path = root / "exam_manager.py"
    css_path = root / "Medical Demography/exams/assets/css/styles.css"
    js_path = root / "Medical Demography/exams/assets/js/sidebar-navigation.js"
    
    if not (css_path.exists() and js_path.exists()):
        print("Required assets files not found!")
        sys.exit(1)
        
    full_css = css_path.read_text()
    full_js = js_path.read_text()
    manager_content = manager_path.read_text()
    
    # Locate css_content block start and end
    # We look for: css_content = """ and the closing """
    # This is tricky because there are multiple blocks.
    # We will target specifically the install_assets method content.
    
    import re
    # Match the entire install_assets method to be safe
    # Or just the css_content assignment
    
    new_manager_content = manager_content
    
    # Replace CSS content stub
    css_pattern = r'(# CSS CONTENT\s+css_content = r?\"\"\").*?(\"\"\")'
    new_manager_content = re.sub(css_pattern, r'\1' + full_css.replace('\\', '\\\\').replace('"', '\\"') + r'\2', new_manager_content, flags=re.DOTALL)
    
    # Replace JS content stub
    js_pattern = r'(# JS CONTENT\s+js_content = r?\"\"\").*?(\"\"\")'
    new_manager_content = re.sub(js_pattern, r'\1' + full_js.replace('\\', '\\\\').replace('"', '\\"') + r'\2', new_manager_content, flags=re.DOTALL)
    
    manager_path.write_text(new_manager_content)
    print("exam_manager.py assets synchronized successfully.")

if __name__ == "__main__":
    main()
