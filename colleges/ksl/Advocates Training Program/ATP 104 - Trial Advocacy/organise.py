
import os
import shutil
import hashlib

# ================= CONFIGURATION =================
# Update this path to your actual folder location
SOURCE_DIR = r"/home/ngobiro/projects/pngobiro.github.io/colleges/ksl/Advocates Training Program/ATP 104 - Trial Advocacy/Notes"

# ================= SYSTEMATIC STUDY MAPPING =================
FILE_MAPPING = {
    # MODULE 1: HISTORY & FOUNDATIONS
    "FIRM ONE,HISTORY OF TRIAL ADVOCACY.FINAL DRAFT.docx": "01_History_and_Foundations",
    "HISTORY OF TRIAL ADVOCACY IN GREECE ROME ENGLAND AND KENYA.pptx": "01_History_and_Foundations",
    "HISTORY OF TRIAL ADVOCACY.pdf": "01_History_and_Foundations",
    "HISTORY_OF_TRIAL_ADVOCACY_IN_GREECE_ROME (1).docx": "01_History_and_Foundations",
    "ATP 104 FIRM 1 copy (1).pptx": "01_History_and_Foundations",
    "ATP 104 FIRM 1 copy-1 (1).pptx": "01_History_and_Foundations",
    "Overriding Objectives - Firm 1.pptx": "01_History_and_Foundations",
    "Expeditious- Trial Advocacy.docx": "01_History_and_Foundations",

    # MODULE 2: ETHICS, DUTIES & ETIQUETTE
    "(FIRM 5). QUALITIES OF A GOOD TRIAL LAWYER. (POWERPOINT) (1).pptx": "02_Ethics_Duties_and_Etiquette",
    "ATP 104 FIRM 6.pptx": "02_Ethics_Duties_and_Etiquette",
    "Cab Rank Rule & Conflict of Interest.pptx": "02_Ethics_Duties_and_Etiquette",
    "Common Sense Rules of Advocacy for Lawyers by Keith-Evans.pdf": "02_Ethics_Duties_and_Etiquette",
    "DUTIES OF A TRIAL LAWYER firm 7.pptx": "02_Ethics_Duties_and_Etiquette",
    "FIRM 10 TRIAL ADVOCACY -courtroom etiquette.pptx": "02_Ethics_Duties_and_Etiquette",
    "FIRM C6 Duties.pptx": "02_Ethics_Duties_and_Etiquette",
    "FIRM8-TRIAL ADVOCACYPPTS.pptx": "02_Ethics_Duties_and_Etiquette",
    "Firm 6-1- QUALITIES OF A GOOD TRIAL LAWYER.pptx": "02_Ethics_Duties_and_Etiquette",
    "Firm 9-Conflict of Interest & Judicial Officers f.pptx": "02_Ethics_Duties_and_Etiquette",
    "JUDICIAL_20OFFICERS_20AND_20CONFLICT_20OF_20INTEREST-_20TRIAL_20ADVOCACY_202.pptx": "02_Ethics_Duties_and_Etiquette",
    "Qualities of Good Trial Lawyers.pptx": "02_Ethics_Duties_and_Etiquette",
    "TRIAL ADV - CAB RANK RULE PPTS.pptx": "02_Ethics_Duties_and_Etiquette",
    "TRIAL ADVOCACY CLASS B FIRM 7 DUTIES OF AN ADVOCATE-2.pptx": "02_Ethics_Duties_and_Etiquette",
    "The Cab Rank Rule - John Flood.pdf": "02_Ethics_Duties_and_Etiquette",
    "ATP 1O4 -CAB RANK RULEFIN (1).docx": "02_Ethics_Duties_and_Etiquette",
    "COURT ETTIQUETTE.docx": "02_Ethics_Duties_and_Etiquette",
    "Court Etiquette- Firm 8.docx": "02_Ethics_Duties_and_Etiquette",
    "Duty of Confidentiality - US and China.Christensen.pdf": "02_Ethics_Duties_and_Etiquette",
    "FIRM 10 GROUP WORK TRIAL ADVOCACY REVISED-1 (2).docx": "02_Ethics_Duties_and_Etiquette",
    "FIRM 7 CHINESE WALLS.edited.docx": "02_Ethics_Duties_and_Etiquette",
    "Role of Advocates.docx": "02_Ethics_Duties_and_Etiquette",
    "Role of Advocates.docx(1).docx": "02_Ethics_Duties_and_Etiquette",
    "KSL Trial advocacy-2.pdf": "02_Ethics_Duties_and_Etiquette", # Specifically covers duties
    "JUDICIAL OFFICERS AND CONFLICT OF INTEREST - FIRM 10.pdf": "02_Ethics_Duties_and_Etiquette",

    # MODULE 3: PRE-TRIAL SKILLS (Interviewing & Analysis)
    "CLIENT INTERVIEW .pptx": "03_PreTrial_Skills",
    "Firm 14-Case Analysis.pptx": "03_PreTrial_Skills",
    "Client and Witness Interviews (1) (2) (1).pptx": "03_PreTrial_Skills",
    "Client and witness interviews - Firm 11.docx": "03_PreTrial_Skills",
    "TRIAL ADVOCACY - FIRM 14.pptx": "03_PreTrial_Skills", # Covers demand letters/pre-trial

    # MODULE 4: TRIAL STAGES - OPENING & CLOSING
    "CLOSING STATEMENT FOR ALPHONCE MUOKI 2013.doc": "04_Trial_Stages_Opening_and_Closing",
    "Closing arguments.docx": "04_Trial_Stages_Opening_and_Closing",
    "TRIAL ADVOCACY final-CA.pdf": "04_Trial_Stages_Opening_and_Closing",
    "Opening Statement Sample-Children of God Case.docx": "04_Trial_Stages_Opening_and_Closing",
    "Firm Work 1.docx": "04_Trial_Stages_Opening_and_Closing", # Skeleton arguments

    # MODULE 5: TRIAL STAGES - EVIDENCE & OBJECTIONS
    "Firm 11_Trial advocacy presentation slides.pdf": "05_Trial_Stages_Evidence_and_Objections",
    "OBJECTIONS - FIRM 9.pptx": "05_Trial_Stages_Evidence_and_Objections",

    # MODULE 6: SPECIALIZED ADVOCACY
    "ATP 104_F4.pptx": "06_Specialized_Advocacy",
    "Class C Firm 3 Trial Advocacy Asssignment.pptx": "06_Specialized_Advocacy",
    "Firm 5-TRIAL LAWYER IN QUAIS JUDICIAL TRIBUNALS.pptx": "06_Specialized_Advocacy",
    "Trial Advocacy Presentation.pptx": "06_Specialized_Advocacy",
    "THE PLACE OF INTERNATIONAL LAW IN TRIAL ADVOCACY - Firm 3.docx": "06_Specialized_Advocacy",
    "THE PLACE OF QUASI JUDICIAL TRIBUNALS IN KENYA - Firm 5.docx": "06_Specialized_Advocacy",

    # MODULE 7: MOCK TRIAL CASE FILES (Practice Material)
    "Firm_4H-_City_Of_Hippo_Desmond_Peters.pptx": "07_Mock_Trial_Case_Files",
    "2020- KAJTAP Hippo v Peters (for case analysis).doc": "07_Mock_Trial_Case_Files",
    "DESMOND PETERS CASE.docx": "07_Mock_Trial_Case_Files",
    "In the Matter of Faith Mueni 2020 (for case analysis).doc": "07_Mock_Trial_Case_Files",

    # MODULE 8: REVISION & GENERAL
    "JUDICATURE ACT AMENDMENT BILL 2023.docx": "08_Revision_and_Course_Materials",
    "October_2022_Trial Advocacy_.pdf": "08_Revision_and_Course_Materials",
    "TRIAL ADVOCACY 2018.docx": "08_Revision_and_Course_Materials",
    "TRIAL ADVOCACY CLASS B WORK ALLOCATION.docx": "08_Revision_and_Course_Materials",
    "TRIAL_ADVOCACY.pdf": "08_Revision_and_Course_Materials",
    "Trial Advocacy March 2023 Paper.pdf": "08_Revision_and_Course_Materials",
    "MKO Trial Quick Notes.pdf": "08_Revision_and_Course_Materials",
    "TRIAL ADVOCACY NOTES_1.pdf": "08_Revision_and_Course_Materials",
    "TRIAL ADVOCACY- Revision Notes.pdf": "08_Revision_and_Course_Materials"
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
    print(f"--- Starting Organization for ATP 104 (Trial Advocacy) ---")
    
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
    confirm = input("Type 'YES' to organize ATP 104 notes: ")
    if confirm == "YES":
        organize_and_deduplicate()
        print("Organization Complete.")
    else:
        print("Cancelled.")