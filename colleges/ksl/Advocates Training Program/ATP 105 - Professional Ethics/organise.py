
import os
import shutil
import hashlib

# ================= CONFIGURATION =================
# Update this path to your actual folder location
SOURCE_DIR = r"/home/ngobiro/projects/pngobiro.github.io/colleges/ksl/Advocates Training Program/ATP 105 - Professional Ethics/Notes"

# ================= SYSTEMATIC STUDY MAPPING =================
FILE_MAPPING = {
    # MODULE 1: INTRODUCTION & HISTORY
    "A Brief History of Professional Ethics.docx": "01_Introduction_and_History",
    "A Socio-political History of LSK.docx": "01_Introduction_and_History",
    "Brief Outline History of the Legal Profession in Kenya (1).pdf": "01_Introduction_and_History",
    "Extract from Susskind, Richard E. Tomorrow_s Lawyers.pdf": "01_Introduction_and_History",
    "Legal Profession and Constitutionalism in Kenya.pdf": "01_Introduction_and_History",
    "Lecture 3 - The Law Society of Kenya.pdf": "01_Introduction_and_History",
    "ATP 105 Professional Ethics - 2021 Lecture 3 and 4 - The Legal Profession.pptx": "01_Introduction_and_History",
    "ATP 105 Professional Ethics - 2022 Lecture 2 -Ethics, A Philosophical Enquiry Presentation.pptx": "01_Introduction_and_History",
    "ATP 105 Professional Ethics - 2023 Lecture 1 Presentation.pdf": "01_Introduction_and_History",
    "Ch1-2 Inside Lawyers_ Ethics by Christine Parker.pdf": "01_Introduction_and_History",
    "Ethics, The Heart and Soul of the Legal Profession - Justice Ogoola.pdf": "01_Introduction_and_History",

    # MODULE 2: DUTIES TO THE COURT
    "A Lawyers Duty to Court - Robert Bell and Caroline Abela.pdf": "02_Duties_to_the_Court",
    "THE ADVOCATE’S DUTY TO THE COURT IN ADVERSARIAL PROCEEDINGS  - Pagone.pdf": "02_Duties_to_the_Court",
    "IN_KENYA.pdf": "02_Duties_to_the_Court", # Title: ETHICAL DUTIES OF A TRIAL ADVOCATE

    # MODULE 3: DUTIES TO THE CLIENT
    "ATP 105 Professional Ethics - 2020 Lecture 7 - Advocates Duties to Clients.pptx": "03_Duties_to_the_Client",
    "ATP 105 Professional Ethics - 2022 Lecture 7 - Advocates Duties to Clients.pdf": "03_Duties_to_the_Client",
    "ATP 105 Professional Ethics - 2023 Lecture 5 - Advocates Duties to Clients.pdf": "03_Duties_to_the_Client",
    "Breach of fiduciary duties - What is an appropriate Remedy Analysis of Maguire v Makaronis.pdf": "03_Duties_to_the_Client",
    "Hangley - Fees Disgorgement.pdf": "03_Duties_to_the_Client",
    "Lawyers as Caregivers.pdf": "03_Duties_to_the_Client",
    "Moral Aspects of a Lawyers Fiduciary Duties.pdf": "03_Duties_to_the_Client",
    "WHEN A LAWYER KNOWS HIS CLIENT IS GUILTY_ THE COURVOISIER AND WESTERFIELD CASES _ Legal Articles and Random Thoughts.pdf": "03_Duties_to_the_Client",
    "When the Lawyer Knows the Client is Guilty - Asimow Michael.pdf": "03_Duties_to_the_Client",

    # MODULE 4: CONFLICT OF INTEREST
    "ABA Model Rules Conflict of Interest.pdf": "04_Conflict_of_Interest",
    "ATP 105 Professional Ethics - 2023 Lecture 6 - Conflict of Interest.pdf": "04_Conflict_of_Interest",
    "Carperton vs A.T  Massey Coal Co LTD.pdf": "04_Conflict_of_Interest",
    "Lawyers Conflicts of Interest. Ramon Mullerat.pdf": "04_Conflict_of_Interest",

    # MODULE 5: CONFIDENTIALITY
    "DUTIES_TO_CLIENTS_THE_DUTY_OF_LOYALTY_CONFIDENTIALITY.pdf": "05_Confidentiality_and_Privilege",

    # MODULE 6: REMUNERATION & LIENS
    "Advocates Lien part 1.pptx": "06_Advocate_Remuneration_and_Liens",

    # MODULE 7: MISCONDUCT & DISCIPLINE
    "LSK CODE OF STANDARDS OF PROFESSIONAL PRACTICE AND ETHICAL CONDUCT FINAL VERSION.pdf": "07_Professional_Misconduct_and_Discipline",

    # MODULE 8: REVISION & OUTLINES
    "ALL MALLOWAH SLIDE COMPLETE.pptx": "08_Revision_and_Course_Materials",
    "ATP 105 Professional Ethics - 2023 Lecture 4 - Rights Duties and Obigations of Advocates.pdf": "08_Revision_and_Course_Materials",
    "Professional Ethics - ATP Revision .pdf": "08_Revision_and_Course_Materials",
    "Professional Ethics Revision Chart (1).docx": "08_Revision_and_Course_Materials",
    "Professional ethics outline .pdf": "08_Revision_and_Course_Materials"
}

MISC_FOLDER = "99_Miscellaneous"

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

def organize_and_deduplicate():
    print(f"--- Starting Organization for ATP 105 (Professional Ethics) ---")
    
    # 1. Create Directories
    folders = set(FILE_MAPPING.values())
    folders.add(MISC_FOLDER)
    for folder in folders:
        path = os.path.join(SOURCE_DIR, folder)
        if not os.path.exists(path):
            os.makedirs(path)

    # 2. Track hashes to remove duplicates
    seen_hashes = {}

    # 3. Walk through files
    for root, dirs, files in os.walk(SOURCE_DIR, topdown=False):
        for filename in files:
            source_path = os.path.join(root, filename)
            
            # Skip the script itself
            if filename.endswith(".py"):
                continue

            # Calculate Hash
            file_hash = get_file_hash(source_path)
            
            # Deduplication Logic
            if file_hash in seen_hashes:
                print(f"Duplicate found and removed: {filename}")
                try:
                    os.remove(source_path)
                except Exception as e:
                    print(f"Error removing {filename}: {e}")
                continue
            else:
                seen_hashes[file_hash] = source_path

            # Determine Destination
            if filename in FILE_MAPPING:
                dest_folder = FILE_MAPPING[filename]
            else:
                # If file not in mapping, move to Misc (unless it's already in a structured folder)
                if os.path.basename(root) in folders:
                    continue # Already sorted
                dest_folder = MISC_FOLDER

            dest_path = os.path.join(SOURCE_DIR, dest_folder, filename)

            # Move File
            if source_path != dest_path:
                try:
                    shutil.move(source_path, dest_path)
                    print(f"Moved: {filename} -> {dest_folder}")
                except Exception as e:
                    print(f"Error moving {filename}: {e}")

    # 4. Cleanup Empty Folders
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
    confirm = input("Type 'YES' to organize ATP 105 notes: ")
    if confirm == "YES":
        organize_and_deduplicate()
        print("Organization Complete.")
    else:
        print("Cancelled.")
