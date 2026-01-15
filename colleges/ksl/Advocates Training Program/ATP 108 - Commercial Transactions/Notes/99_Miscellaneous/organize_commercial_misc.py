import os
import shutil
import hashlib

# ================= CONFIGURATION =================
# Update this to the exact path of your 99_Miscellaneous folder
SOURCE_DIR = r"/home/ngobiro/projects/pngobiro.github.io/colleges/ksl/Advocates Training Program/ATP 108 - Commercial Transactions/Notes/99_Miscellaneous"

# We map files to the main course structure defined previously.
# This ensures consistency if you move these folders back to the root 'Notes' later.
FILE_MAPPING = {
    # MODULE 1: INTRODUCTION
    "1_ INTRODUCTION TO CT-20240607T203151Z-001.zip": "01_Introduction_and_Principles",

    # MODULE 2: COMPANY LAW
    "1. Incorporation of Companies.pptx": "02_Company_Law_and_Governance",

    # MODULE 5: BANKING & FINANCIAL SERVICES
    "(Kenex v Central Bank of Kenya Constitutional Petition E181 of 2021.pdf": "05_Banking_and_Financial_Services",
    
    # MODULE 8: MERGERS & ACQUISITIONS
    "1688441932405_FIRM 31- COMMERCIAL TRANSACTIONS Q.7.pptx": "08_Mergers_and_Acquisitions",

    # MODULE 9: SECURITY RIGHTS IN MOVABLE PROPERTY
    "13—Movable-Property-Security-Rights-Act-2017-Full.pdf": "09_Security_Rights_in_Movable_Property"
}

# The destination folders will be created INSIDE 99_Miscellaneous for now,
# or you can change BASE_OUTPUT_DIR to move them to the main Notes folder.
BASE_OUTPUT_DIR = SOURCE_DIR # Keeps organization local to 99_Miscellaneous
# BASE_OUTPUT_DIR = os.path.dirname(SOURCE_DIR) # Moves them up to main Notes folder

MISC_FOLDER = "Uncategorized_Misc"

# ================= HELPER FUNCTIONS =================

def get_file_hash(filepath):
    """Calculates MD5 hash to detect exact duplicate content."""
    hasher = hashlib.md5()
    try:
        with open(filepath, 'rb') as f:
            buf = f.read(65536)
            while len(buf) > 0:
                hasher.update(buf)
                buf = f.read(65536)
        return hasher.hexdigest()
    except Exception:
        return None

def organize_misc_files():
    print(f"--- Organizing 99_Miscellaneous for ATP 108 ---")
    
    # 1. Create Directories
    folders = set(FILE_MAPPING.values())
    folders.add(MISC_FOLDER)
    
    for folder in folders:
        path = os.path.join(BASE_OUTPUT_DIR, folder)
        if not os.path.exists(path):
            os.makedirs(path)

    # 2. Process Files
    for filename in os.listdir(SOURCE_DIR):
        source_path = os.path.join(SOURCE_DIR, filename)
        
        # Skip directories and the script itself
        if os.path.isdir(source_path) or filename.endswith(".py"):
            continue

        # Determine Destination
        if filename in FILE_MAPPING:
            dest_folder = FILE_MAPPING[filename]
        else:
            dest_folder = MISC_FOLDER

        dest_path = os.path.join(BASE_OUTPUT_DIR, dest_folder, filename)

        # Move File
        try:
            # Handle potential collisions if moving to same name
            if source_path != dest_path:
                shutil.move(source_path, dest_path)
                print(f"Moved: {filename} -> {dest_folder}")
        except Exception as e:
            print(f"Error moving {filename}: {e}")

    # 3. Cleanup Empty Folders (Optional, be careful in Misc)
    # for root, dirs, files in os.walk(SOURCE_DIR, topdown=False):
    #     if not os.listdir(root):
    #         try:
    #             os.rmdir(root)
    #         except:
    #             pass

if __name__ == "__main__":
    print(f"Source Directory: {SOURCE_DIR}")
    print(f"Target Directory: {BASE_OUTPUT_DIR}")
    confirm = input("Type 'YES' to organize these miscellaneous files: ")
    if confirm == "YES":
        organize_misc_files()
        print("Organization Complete.")
    else:
        print("Cancelled.")