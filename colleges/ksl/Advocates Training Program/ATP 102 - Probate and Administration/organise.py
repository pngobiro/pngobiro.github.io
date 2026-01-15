
import os
import shutil
import hashlib

# ================= CONFIGURATION =================
# Update this path to the folder containing your ATP 102 Notes
SOURCE_DIR = r"/home/ngobiro/projects/pngobiro.github.io/colleges/ksl/Advocates Training Program/ATP 102 - Probate and Administration/Notes"

# ================= SYSTEMATIC STUDY MAPPING =================
FILE_MAPPING = {
    # MODULE 1: INTRODUCTION
    "P & A -Intro - Copy.pptx": "01_Intro_and_Overview",
    "Probate Outline.pdf": "01_Intro_and_Overview",

    # MODULE 2: STATUTES
    "LawofSuccessionAct14of1972.pdf": "02_Statutes_and_Bills",
    "LawofSuccessionAmendmentBill2019.PDF": "02_Statutes_and_Bills",

    # MODULE 3: TESTACY (WILLS)
    "P & A - Testate.pptx": "03_Testacy_and_Wills",
    "constructon of wll.pptx": "03_Testacy_and_Wills",
    "Wills docx.docx": "03_Testacy_and_Wills",

    # MODULE 4: GRANTS OF REPRESENTATION
    "Types of Grants.pdf": "04_Grants_of_Representation",
    "Different types of limited grants.pdf": "04_Grants_of_Representation",

    # MODULE 5: PROCEDURE & APPLICATIONS
    "Applications in Probate.pdf": "05_Procedure_and_Applications",
    "Simplified Resource Tool on Inheritance.pdf": "05_Procedure_and_Applications",

    # MODULE 6: ADMINISTRATION & INSTITUTIONS
    "public trustee.pptx": "06_Estate_Administration_and_Institutions",

    # MODULE 7: CASE LAW
    "Succession_Cause_593_of_2001.pdf": "07_Case_Law",

    # MODULE 8: REVISION NOTES (General & Authors)
    "P&A BY MAYENDE.docx": "08_Revision_Notes",
    "W Musyoka.docx": "08_Revision_Notes",
    "PROBATE AND ADMIN - MRS RUTO.pdf": "08_Revision_Notes",
    "Copy of Mrs Ruttos-Probate and Administration 2015 (2).pdf": "08_Revision_Notes",
    "Probate_20and_20Administration_202015-1.pdf": "08_Revision_Notes",
    "MKO Probate Quick Notes.pdf": "08_Revision_Notes",
    "Probate and Administration - ATP Revision.pdf": "08_Revision_Notes",
    "PROBATE REVISION CHART FINAL!_1.pdf": "08_Revision_Notes",
    "Probate and Administration 2018 Final.doc": "08_Revision_Notes",

    # MODULE 9: EXAMS
    "succession 2006 (to print).docx": "09_Past_Papers"
}

MISC_FOLDER = "99_Miscellaneous"

# ================= HELPER FUNCTIONS =================

def get_file_hash(filepath):
    """Calculates MD5 hash to check content identity."""
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

def organize_files():
    print("--- Starting Organization for ATP 102 ---")
    
    # 1. Create Directories
    folders = set(FILE_MAPPING.values())
    folders.add(MISC_FOLDER)
    
    for folder in folders:
        path = os.path.join(SOURCE_DIR, folder)
        if not os.path.exists(path):
            os.makedirs(path)

    # 2. Track processed hashes for deduplication
    processed_hashes = {}

    # 3. Process Files
    for root, dirs, files in os.walk(SOURCE_DIR, topdown=False):
        for filename in files:
            source_path = os.path.join(root, filename)
            
            # Skip the script itself
            if filename.endswith(".py"):
                continue

            # Calculate Hash
            file_hash = get_file_hash(source_path)
            
            # DEDUPLICATION
            if file_hash in processed_hashes:
                print(f"Deleting duplicate: {filename}")
                try:
                    os.remove(source_path)
                except Exception as e:
                    print(f"Error removing {filename}: {e}")
                continue
            
            processed_hashes[file_hash] = filename

            # Determine Destination
            if filename in FILE_MAPPING:
                dest_folder = FILE_MAPPING[filename]
            else:
                # If file is not in mapping, check if it's already in a structured folder
                if os.path.basename(root) in folders:
                    continue 
                dest_folder = MISC_FOLDER

            dest_path = os.path.join(SOURCE_DIR, dest_folder, filename)

            # Move File
            if source_path != dest_path:
                try:
                    shutil.move(source_path, dest_path)
                    print(f"Moved: {filename} -> {dest_folder}")
                except Exception as e:
                    print(f"Error moving {filename}: {e}")

    # 4. Clean Empty Folders
    for root, dirs, files in os.walk(SOURCE_DIR, topdown=False):
        if root == SOURCE_DIR:
            continue
        if not os.listdir(root):
            try:
                os.rmdir(root)
                print(f"Removed empty folder: {root}")
            except:
                pass

if __name__ == "__main__":
    print(f"Target Directory: {SOURCE_DIR}")
    confirm = input("Type 'YES' to organize ATP 102 notes: ")
    if confirm == "YES":
        organize_files()
        print("\nOrganization Complete.")
    else:
        print("Operation cancelled.")