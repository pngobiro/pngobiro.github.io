
import shutil
import hashlib
import re
import os

# ================= CONFIGURATION =================
# Update this path to the folder containing your Notes
SOURCE_DIR = r"/home/ngobiro/projects/pngobiro.github.io/colleges/ksl/Advocates Training Program/ATP 100 - Civil Litigation/Notes"

# ================= EXACT FILE MAPPING =================
# Maps specific filenames to their logical study module
FILE_MAPPING = {
    # 01_Intro_and_Principles
    "CIVIL LITIGATION COMPILED-1.pptx": "01_Intro_and_Principles",
    "Mac Dee.pdf": "01_Intro_and_Principles",
    "ppt 1.pptx": "01_Intro_and_Principles",
    "Overview-of-the-Civil-Litigation-Process.pdf": "01_Intro_and_Principles",
    "CIVIL LITIGATION 2018.docx": "01_Intro_and_Principles",
    "Civil Litigation Lecture 2012(1).docx": "01_Intro_and_Principles",
    "Civil Litigation Lecture 2012.docx": "01_Intro_and_Principles",
    "Impacts of the Overriding Objective Principle.docx": "01_Intro_and_Principles",
    "LECTURE 4 - OVERRIDING OBJECTIVE (1).pptx": "01_Intro_and_Principles",
    "LECTURE 4 - OVERRIDING OBJECTIVE.pptx": "01_Intro_and_Principles",
    "Overriding Objective Presentation.pdf": "01_Intro_and_Principles",
    "Civil Litigation- Outline .pdf": "01_Intro_and_Principles",

    # 02_Pre_Trial_Procedures
    "Pre-trial processes final (1).pdf": "02_Pre_Trial_Procedures",
    "Case Management Form.docx": "02_Pre_Trial_Procedures",
    "Notice of intentionn to sue.docx": "02_Pre_Trial_Procedures",
    "ATP 100 ASSIGNEMENT 1-REPLY TO DEMAND LETTER.docx": "02_Pre_Trial_Procedures",
    "Client Interview.pdf": "02_Pre_Trial_Procedures",
    "Client Interviewing.pdf": "02_Pre_Trial_Procedures",
    "DEMAND LETTER.docx": "02_Pre_Trial_Procedures",
    "Demand Letter - Civil Litigation..pdf": "02_Pre_Trial_Procedures",
    "Demand Letter - Sample.doc": "02_Pre_Trial_Procedures",
    "Demand Letter.PDF": "02_Pre_Trial_Procedures",
    "Firm 1 - Client Interview-PPT.pptx": "02_Pre_Trial_Procedures",
    "Firm 13 - Demand Letter.pptx": "02_Pre_Trial_Procedures",
    "LECTURE 1 - CLIENT INTERVIEW.pptx": "02_Pre_Trial_Procedures",
    "LECTURE 13 - PRE-TRIAL DIRECTIONS AND CONFERENCING.pptx": "02_Pre_Trial_Procedures",
    "LECTURE 16 - PRE-TRIAL DIRECTIONS AND CONFERENCING.pptx": "02_Pre_Trial_Procedures",
    "LECTURE 2 - PRE-TRIAL CONSIDERATIONS.ppt": "02_Pre_Trial_Procedures",
    "LECTURE 3 - THE DEMAND LETTER.ppt": "02_Pre_Trial_Procedures",
    "The Demand Letter.pdf": "02_Pre_Trial_Procedures",
    "Firm 8-Case Management Request.pdf": "02_Pre_Trial_Procedures",

    # 03_Jurisdiction_and_Parties
    "Third party Civil_Suit_219_of_2014-1.pdf": "03_Jurisdiction_and_Parties",
    "ATP 100 FIRM WORK - JURISDICTION -UPDATED.docx": "03_Jurisdiction_and_Parties",
    "Joinder Vs Enjoinder_In re Estate of Barasa_Musyoka J.pdf": "03_Jurisdiction_and_Parties",
    "Jurisdiction ATP 100.pdf": "03_Jurisdiction_and_Parties",
    "Jurisdiction presentation final.pdf": "03_Jurisdiction_and_Parties",
    "KENYA_SCHOOL_OF.pdf": "03_Jurisdiction_and_Parties",
    "PARTIES TO A SUIT.pdf": "03_Jurisdiction_and_Parties",
    "Third Party Notice.pdf": "03_Jurisdiction_and_Parties",
    "Sample description of Parties & Third Party Notice.pdf": "03_Jurisdiction_and_Parties",
    "LECTURE 11 - THIRD PARTY NOTICE.pptx": "03_Jurisdiction_and_Parties",

    # 04_Pleadings_and_Commencement
    "Topic 6 - Commencement of Suits.pdf": "04_Pleadings_and_Commencement",
    "AFFIDAVITS AND STATUTORY DECLARATIONS 4 E-1.doc": "04_Pleadings_and_Commencement",
    "Firm_4A-Statutory_Declarations.pptx": "04_Pleadings_and_Commencement",
    "LECTURE 5 - HOW TO APPROACH THE COURT.pptx": "04_Pleadings_and_Commencement",
    "Memo of Claim - Ngari Kihungu & Jokali - 15Feb2019.docx": "04_Pleadings_and_Commencement",
    "P&A87 De boni non administratis and affidavit.docx": "04_Pleadings_and_Commencement",
    "P&A90 Pendete Lite and Affidavit.docx": "04_Pleadings_and_Commencement",
    "ATP-100 Topic 6.pdf": "04_Pleadings_and_Commencement",
    "CHAMBER ....NOTICE....PLAINT......docx": "04_Pleadings_and_Commencement",
    "CIVIL PLAINT.docx": "04_Pleadings_and_Commencement",
    "Civil Ass. Stmt of Defence.docx": "04_Pleadings_and_Commencement",
    "LECTURE 6 - THE PLAINT IN GENERAL.ppt": "04_Pleadings_and_Commencement",
    "LECTURE 6 - THE PLAINT IN GENERAL.pptx": "04_Pleadings_and_Commencement",
    "LECTURE 9 - POWERS OF THE COURT TO STRIKE OUT PLEADINGS.pptx": "04_Pleadings_and_Commencement",
    "Originating Summons.pdf": "04_Pleadings_and_Commencement",
    "Plaint (1).docx": "04_Pleadings_and_Commencement",
    "RESPONDING TO PLEADINGS.pptx": "04_Pleadings_and_Commencement",
    "Sample Plaint and list of documents.docx": "04_Pleadings_and_Commencement",
    "Sample Plaint and list of documents.pdf": "04_Pleadings_and_Commencement",
    "LECTURE 7 - ISSUE AND SERVICE OF SUMMONS.pptx": "04_Pleadings_and_Commencement",
    "Originating summons precedent.docx": "04_Pleadings_and_Commencement",
    "Sample Originating Summons.docx": "04_Pleadings_and_Commencement",

    # 05_Applications_and_Injunctions
    "Application for Injunctions.docx": "05_Applications_and_Injunctions",
    "Applications under CPA.docx": "05_Applications_and_Injunctions",
    "Applications under CPA.pdf": "05_Applications_and_Injunctions",
    "Civil Suits - Summary.pdf": "05_Applications_and_Injunctions",
    "LECTURE 14 - INTERLOCUTORY ORDERS.pptx": "05_Applications_and_Injunctions",
    "LECTURE 15 - INJUNCTIONS.pptx": "05_Applications_and_Injunctions",
    "TYPES OF APPLICATIONS.docx": "05_Applications_and_Injunctions",
    "TYPES OF PROCEEDINGS N MODE FOR APPLICATION.docx": "05_Applications_and_Injunctions",
    "App file suit out of time - Ngari Kihungu vs Jokali.docx": "05_Applications_and_Injunctions",
    "LECTURE 15A - MAREVA AND ANTON PILLER ORDERS (1).pptx": "05_Applications_and_Injunctions",
    "LECTURE 18 - MAREVA AND ANTON PILLER ORDERS.pptx": "05_Applications_and_Injunctions",
    "Sam& Monica2 -final.docx": "05_Applications_and_Injunctions",
    "Application for leave to file out of time_.pdf": "05_Applications_and_Injunctions",
    "CHAMBER SUMMONS kn.docx": "05_Applications_and_Injunctions",
    "chamber summons.docx": "05_Applications_and_Injunctions",

    # 06_Trial_Process
    "Closing arguments.docx": "06_Trial_Process",
    "LECTURE 12 - CONSEQUENCES OF NON-ATTENDANCE.pptx": "06_Trial_Process",
    "LECTURE 17 - CONSEQUENCES OF NON-ATTENDANCE (1).pptx": "06_Trial_Process",
    "LECTURE 18 - PROCEDURE FOR TRIAL (1).pptx": "06_Trial_Process",
    "Trial process (1).pdf": "06_Trial_Process",

    # 07_Judgment_and_Costs
    "Costs reviewed.pdf": "07_Judgment_and_Costs",
    "Lecture 23_.pptx": "07_Judgment_and_Costs",
    "Judgement and Decree.pdf": "07_Judgment_and_Costs",
    "LECTURE 10 - DISPOSAL OF SUITS BY SUMMARY JUDGMENT.pptx": "07_Judgment_and_Costs",
    "LECTURE 16 - JUDGMENT AND DECREE.pptx": "07_Judgment_and_Costs",
    "LECTURE 19 - JUDGMENT AND DECREE (1).pptx": "07_Judgment_and_Costs",
    "LECTURE 19 - REMEDIES AGAINST JUDGMENT.pptx": "07_Judgment_and_Costs",
    "Sample Decree.pdf": "07_Judgment_and_Costs",

    # 08_Execution
    "Execution PPP.pdf": "08_Execution",
    "Garnishee Precedent.pdf": "08_Execution",
    "LECTURE 17 - EXECUTION OF DECREES AND ORDERS.pptx": "08_Execution",
    "LECTURE 20 - EXECUTION OF DECREES AND ORDERS.pptx": "08_Execution",
    "LECTURE 20A - GARNISHEE PROCEEDINGS.pptx": "08_Execution",
    "LECTURE 20B - EXECUTION AGAINST THE GOVERNMENT(1).pptx": "08_Execution",
    "Objection proceedings Cause_12_of_2017.pdf": "08_Execution",
    "Notice of Objection.docx": "08_Execution",
    "OBJECTION PROCEEDINGS.docx": "08_Execution",

    # 09_Appeals_Review_and_Constitutional
    "Constitutional Litigation.pdf": "09_Appeals_Review_and_Constitutional",
    "APPEALS & REVIEW pdf (1).pdf": "09_Appeals_Review_and_Constitutional",
    "APPEALS.ppt": "09_Appeals_Review_and_Constitutional",
    "AppellateJurisdictionAct15of1977_subsidiary (1).pdf": "09_Appeals_Review_and_Constitutional",
    "Appellate_Jurisdiction_Act__Cap9.pdf": "09_Appeals_Review_and_Constitutional",
    "DRAFTING OF PETITION OF APPEAL ON AND OUT OF TIME.doc": "09_Appeals_Review_and_Constitutional",
    "LECTURE 18 - APPEALS.ppt": "09_Appeals_Review_and_Constitutional",
    "LECTURE 21 - APPEALS.ppt": "09_Appeals_Review_and_Constitutional",
    "MEMORANDUM OF APPEAL.docx": "09_Appeals_Review_and_Constitutional",
    "JR APPLICATION.doc": "09_Appeals_Review_and_Constitutional",
    "JUDICIAL_REVIEW_APPLICATION_IN_KENYA_LEA (1).docx": "09_Appeals_Review_and_Constitutional",
    "Firm 3 - What constitutes a substantial question of law under article 165(4)[1] COK.docx": "09_Appeals_Review_and_Constitutional",
    "JR PROCESS.docx": "09_Appeals_Review_and_Constitutional",
    "JUDICIAL REVIEW pdf.pdf": "09_Appeals_Review_and_Constitutional",
    "LECTURE 19 - REVIEW.ppt": "09_Appeals_Review_and_Constitutional",
    "LECTURE 22 - REVIEW.ppt": "09_Appeals_Review_and_Constitutional",

    # 10_General_Revision
    "CIVIL REVISION CHART FINAL.docx.pdf": "10_General_Revision",
    "Civil Litigation - ATP Revision (1).pdf": "10_General_Revision",
    "Mayende Civil 2012.pdf": "10_General_Revision",
    "Civil Litigation.pdf": "10_General_Revision",
    "CiviProcedureAct3of1924.pdf": "10_General_Revision",
    "ALL CIVIL DRAFTING DOCUMENTS.docx.docx": "10_General_Revision",
    "ATIENO OGOLLA_S BAR LESSONS 2.pptx": "10_General_Revision",
    "BEST_PERFOMED-1.pdf": "10_General_Revision",
    "CIVIL 1 REVISION.docx": "10_General_Revision",
    "CIVIL LIT F33.docx": "10_General_Revision",
    "CIVIL LITIGATION NOTES.docx": "10_General_Revision",
    "CIVIL LITIGATION QN.2.docx": "10_General_Revision",
    "Civil Lit..docx": "10_General_Revision",
    "DRAFTING FORMATS.doc": "10_General_Revision",
    "KSL Civil Litigation All.pptx": "10_General_Revision",
    "PRE FINAL CIVIL .docx": "10_General_Revision",
    "SPECIMEN CHARGES DOCUMENTS CLASSES A C &E 2019.doc": "10_General_Revision",
    "Revision.pdf": "10_General_Revision",
    "ALL CIVIL DRAFTING DOCUMENTS.docx.pdf": "10_General_Revision",
    "Civil Litigation Notes.pdf": "10_General_Revision",
    "CIVIL LITIGATION -  Revision Notes.pdf": "10_General_Revision",
    "MKO Civil Quick Notes.pdf": "10_General_Revision",
    "I am sharing _Legal Writing and Drafting - ATP Revision_ with you.pdf": "10_General_Revision"
}

MISC_FOLDER = "11_Miscellaneous"

# ================= HELPER FUNCTIONS =================

def get_file_hash(filepath):
    """Calculates MD5 hash of a file to check content identity."""
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

def deduplicate_and_clean():
    """Finds and deletes files with identical content."""
    print("\n--- Scanning for Duplicates ---")
    hashes = {}
    duplicates_found = 0
    bytes_saved = 0

    # We walk the entire tree to find all files
    for root, dirs, files in os.walk(SOURCE_DIR):
        for filename in files:
            filepath = os.path.join(root, filename)
            
            # Skip hidden files
            if filename.startswith('.'):
                continue

            file_hash = get_file_hash(filepath)
            if not file_hash:
                continue

            if file_hash in hashes:
                # Duplicate found: compare filepath to decide which to keep
                original_path = hashes[file_hash]
                
                # Logic: Keep the file that matches a key in FILE_MAPPING exactly.
                # If neither or both match, keep the shortest filename.
                
                is_current_exact = filename in FILE_MAPPING
                is_original_exact = os.path.basename(original_path) in FILE_MAPPING
                
                to_delete = None
                
                if is_current_exact and not is_original_exact:
                    to_delete = original_path
                    hashes[file_hash] = filepath # update hash to point to the one we kept
                elif is_original_exact and not is_current_exact:
                    to_delete = filepath
                else:
                    # Tie-breaker: delete the one with "copy" or "(1)" in it, or longer name
                    if len(filename) > len(os.path.basename(original_path)):
                        to_delete = filepath
                    else:
                        to_delete = original_path
                        hashes[file_hash] = filepath

                print(f"Deleting Duplicate: {to_delete}")
                try:
                    bytes_saved += os.path.getsize(to_delete)
                    os.remove(to_delete)
                    duplicates_found += 1
                except OSError as e:
                    print(f"Error deleting {to_delete}: {e}")
            else:
                hashes[file_hash] = filepath

    print(f"Cleanup Complete. Removed {duplicates_found} files. Saved {bytes_saved / (1024*1024):.2f} MB.")

def organize_files():
    print("\n--- Moving Files to Specific Folders ---")
    
    # 1. Create Destination Folders
    unique_folders = set(FILE_MAPPING.values())
    for folder in unique_folders:
        path = os.path.join(SOURCE_DIR, folder)
        if not os.path.exists(path):
            os.makedirs(path)
            
    misc_path = os.path.join(SOURCE_DIR, MISC_FOLDER)
    if not os.path.exists(misc_path):
        os.makedirs(misc_path)

    # 2. Move Files
    for root, dirs, files in os.walk(SOURCE_DIR, topdown=False):
        # Skip moving files if they are already in the correct destination root (optimization)
        # But we must check specific subfolders
        
        for filename in files:
            source_file_path = os.path.join(root, filename)
            
            # Determine destination
            if filename in FILE_MAPPING:
                dest_folder = FILE_MAPPING[filename]
            else:
                # If file isn't in our exact list, put in Misc or leave it? 
                # To clean folders properly, we move unmapped files to Misc.
                dest_folder = MISC_FOLDER
            
            # Don't move if already in the right place
            target_dir = os.path.join(SOURCE_DIR, dest_folder)
            
            # Check if the file is already in the correct folder
            if os.path.abspath(root) == os.path.abspath(target_dir):
                continue

            target_file_path = os.path.join(target_dir, filename)
            
            # Handle collision in target
            if os.path.exists(target_file_path):
                # If content is identical, delete source (it's a dupe that survived previous pass)
                if get_file_hash(source_file_path) == get_file_hash(target_file_path):
                    try:
                        os.remove(source_file_path)
                        print(f"Removed duplicate during move: {filename}")
                    except:
                        pass
                    continue
                else:
                    # Content different, rename
                    name, ext = os.path.splitext(filename)
                    target_file_path = os.path.join(target_dir, f"{name}_v2{ext}")

            try:
                shutil.move(source_file_path, target_file_path)
                print(f"Moved: {filename} -> {dest_folder}")
            except Exception as e:
                print(f"Error moving {filename}: {e}")

def delete_empty_folders():
    print("\n--- Removing Empty Folders ---")
    deleted_count = 0
    for root, dirs, files in os.walk(SOURCE_DIR, topdown=False):
        if root == SOURCE_DIR:
            continue
            
        # Check if the folder is one of our new organized folders
        is_protected = os.path.basename(root) in set(FILE_MAPPING.values()) or os.path.basename(root) == MISC_FOLDER
        
        if not os.listdir(root):
            try:
                os.rmdir(root)
                print(f"Deleted empty folder: {os.path.basename(root)}")
                deleted_count += 1
            except OSError as e:
                print(f"Could not delete {root}: {e}")
    
    print(f"Removed {deleted_count} empty directories.")

# ================= EXECUTION =================

if __name__ == "__main__":
    print(f"Target Directory: {SOURCE_DIR}")
    confirm = input("Type 'YES' to Deduplicate, Clean, and Organize based on exact file list: ")
    
    if confirm == "YES":
        deduplicate_and_clean()
        organize_files()
        delete_empty_folders()
        print("\nOrganization Successful.")
    else:
        print("Cancelled.")