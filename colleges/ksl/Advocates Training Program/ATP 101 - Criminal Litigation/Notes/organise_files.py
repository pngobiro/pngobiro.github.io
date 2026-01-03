
import os
import shutil
import hashlib
import re

# ================= CONFIGURATION =================
# Update this path to the folder containing your ATP 101 Notes
SOURCE_DIR = r"/home/ngobiro/projects/pngobiro.github.io/colleges/ksl/Advocates Training Program/ATP 101 - Criminal Litigation/Notes"

# ================= SYSTEMATIC STUDY MAPPING =================
# Maps specific files to logical study modules (Chronological Order of Litigation)

FILE_MAPPING = {
    # MODULE 1: INTRODUCTION, JURISDICTION & PRINCIPLES
    # Focus: General principles, hierarchy of courts, criminal responsibility
    "CRIMINAL LITIGATION -COMPLETE NOTES 2014.pdf": "01_Intro_Jurisdiction_and_Principles",
    "CRIMINAL LITIGATION SIMIYU 2014-1.pdf": "01_Intro_Jurisdiction_and_Principles",
    "Criminal Litigation 2012 kubo notes.pdf": "01_Intro_Jurisdiction_and_Principles",
    "Criminal Litigation 2015.pdf": "01_Intro_Jurisdiction_and_Principles",
    "Criminal Litigation 2008 Lesson 3.ppt": "01_Intro_Jurisdiction_and_Principles",
    "Criminal Litigation 2008 Lesson 5revised.ppt": "01_Intro_Jurisdiction_and_Principles",
    "Jurisdiction.docx": "01_Intro_Jurisdiction_and_Principles",
    "OVERVIEW_OF_CRIMINAL_LAW.pdf": "01_Intro_Jurisdiction_and_Principles",
    "Criminal Litigation Presentation.pptx": "01_Intro_Jurisdiction_and_Principles",
    "LEGAL NOTICE - THE PROCEEDS OF CRIME AND ANTI-MONEY LAUNDERING_ACT_ (Cap. 59B)": "01_Intro_Jurisdiction_and_Principles",
    "supplement-no-95.pdf": "01_Intro_Jurisdiction_and_Principles",

    # MODULE 2: ARREST, SEARCH & INVESTIGATION
    # Focus: Police powers, warrants, rights of arrested persons
    "ARREST WTH WARRANT-SEARCH-CHARGES.docx": "02_Arrest_Search_and_Investigation",
    "ARRESTS- 2010.docx": "02_Arrest_Search_and_Investigation",
    "ARRESTS.pdf": "02_Arrest_Search_and_Investigation",
    "ARREST[1].doc": "02_Arrest_Search_and_Investigation",
    "CRIMINAL LITIGATION (ARRESTS).pdf": "02_Arrest_Search_and_Investigation",
    "Criminal Litigation- Arrests   .docx": "02_Arrest_Search_and_Investigation",
    "PREPARATION OF CASE INVESTIGATION FILE.pdf": "02_Arrest_Search_and_Investigation",
    "PREPARATION OF CASE FILES-n.docx": "02_Arrest_Search_and_Investigation",
    "Sample of applications for search and arrest warrant_.docx": "02_Arrest_Search_and_Investigation",
    "Sample of applications for search and warranty of arrest_.docx": "02_Arrest_Search_and_Investigation",
    "Warrant in first instance.pdf": "02_Arrest_Search_and_Investigation",
    "ORDER TO MAGISRTATE-Christian Schmidt.doc": "02_Arrest_Search_and_Investigation",

    # MODULE 3: IDENTIFICATION PARADES
    # Focus: Visual identification procedures
    "IDENTIFICATION PARADE - D.pdf": "03_Identification_Parades",
    "IDENTIFICATION_PARADES.pdf": "03_Identification_Parades",
    "Identification  Rules 2018 ATP 2020.docx": "03_Identification_Parades",
    "Identification Rules 2018.docx": "03_Identification_Parades",
    "Identification Parade-C.pdf": "03_Identification_Parades",

    # MODULE 4: CHARGES & INDICTMENTS
    # Focus: Drafting charge sheets, duplicity, joinder of counts
    "CHARGE AND INFORMATION 2020-SEPTEMBER(1).pptx": "04_Charges_and_Drafting",
    "CHARGE AND INFORMATION 2020-SEPTEMBER.pptx": "04_Charges_and_Drafting",
    "CHARGE SHEET SAMPLE ME.pdf": "04_Charges_and_Drafting",
    "CHARGE SHEET with amendments 2(1).doc": "04_Charges_and_Drafting",
    "CHARGE SHEET(1).docx": "04_Charges_and_Drafting",
    "CHARGES AND COMPLAINT 2.pdf": "04_Charges_and_Drafting",
    "COMPLAINT AND CHARGE_1.ppt": "04_Charges_and_Drafting",
    "Criminal Litigation- Complaint and Charge   (Alternative Charges) .docx": "04_Charges_and_Drafting",
    "FRAMING A CHARGE.doc": "04_Charges_and_Drafting",
    "SAMPLE OB FOR CHARGE SHEET DRAFTING ATP 101 SEPTEMBER 2020(2).docx": "04_Charges_and_Drafting",
    "SAMPLES OF CHARGE SHEETS SEPTEMBER 2020 ATP 101-A.pdf": "04_Charges_and_Drafting",
    "SAMPLES OF CHARGE SHEETS SEPTEMBER 2020 ATP 101.pdf": "04_Charges_and_Drafting",
    "Sample of an information.jpg": "04_Charges_and_Drafting",
    "SPECIMEN CHARGES DOCUMENTS CLASSES A C &E 2019 - Copy(1).doc": "04_Charges_and_Drafting",
    "SPECIMEN CHARGES DOCUMENTS CLASSES A C &E 2019 - Copy.doc": "04_Charges_and_Drafting",
    "SPECIMEN CHARGES DOCUMENt ksl class A AND C-2018.doc": "04_Charges_and_Drafting",
    "SPECIMEN CHARGES DOCUMENTS CLASSES A C &E 2019.doc": "04_Charges_and_Drafting",
    "complaint and charge.docx": "04_Charges_and_Drafting",

    # MODULE 5: BAIL AND BOND
    # Focus: Constitutional right to bail, terms
    "BAIL AND BOND.docx": "05_Bail_and_Bond",
    "Bail and Bond !.docx": "05_Bail_and_Bond",
    "Sudi Application.pdf": "05_Bail_and_Bond", # Likely a bail application context

    # MODULE 6: PLEAS & PLEA BARGAINING
    # Focus: Taking plea, plea agreements, consequences
    "47-CriminalProcedure_PleaBargaining_Rules_2018.pdf": "06_Pleas_and_Plea_Bargaining",
    "ATP 101 plea of guilty SEPTEMBER 2020(1).docx": "06_Pleas_and_Plea_Bargaining",
    "ATP 101 plea of guilty SEPTEMBER 2020.docx": "06_Pleas_and_Plea_Bargaining",
    "Firm 13 - Plea Taking.docx": "06_Pleas_and_Plea_Bargaining",
    "JOINDER OF CHARGES PERSONS-PLEA TAKING.doc": "06_Pleas_and_Plea_Bargaining",
    "PLEA OF GUILTY PROCEDURE 2020  CLASS A C E SEPTEMBER(1).doc": "06_Pleas_and_Plea_Bargaining",
    "PLEA OF GUILTY PROCEDURE 2020  CLASS A C E SEPTEMBER.doc": "06_Pleas_and_Plea_Bargaining",
    "PLEAS.pdf": "06_Pleas_and_Plea_Bargaining",
    "Pleas.docx": "06_Pleas_and_Plea_Bargaining",
    "Pre - Trial Negotiations.pptx": "06_Pleas_and_Plea_Bargaining",

    # MODULE 7: THE TRIAL PROCESS
    # Focus: Hearing, Prosecution case, Defense, No case to answer, Private Prosecution
    "THE TRIAL PROCESS PP PRESENTATION (2).pptx": "07_The_Trial_Process",
    "THE TRIAL PROCESS.pptx": "07_The_Trial_Process",
    "TRIAL_PROCESS.pdf": "07_The_Trial_Process",
    "Criminal-litigation-.pdf": "07_The_Trial_Process", # Contains extensive trial procedure
    "PRE trial preparation,l project final draft.doc": "07_The_Trial_Process",
    "PROSECUTION_FILE.pdf": "07_The_Trial_Process",
    "Inquests.PDF": "07_The_Trial_Process",
    "6. PRIVATE PROSECUTION IN KENYA..PDF": "07_The_Trial_Process",
    "PRIVATE PROSECUTION- APPLICATION amended by simiyu.docx": "07_The_Trial_Process",
    "PRIVATE PROSECUTION-Q-exercise.docx": "07_The_Trial_Process",
    "private prosecution.docx": "07_The_Trial_Process",

    # MODULE 8: SENTENCING & APPEALS
    # Focus: Mitigation, Sentencing policies, Appeals
    "SENTENCING_IN_KENYA.pdf": "08_Sentencing_and_Appeals",
    "Prison Article by Abuya Mburu JCL March 2017 mp2bh - Academic.pdf": "08_Sentencing_and_Appeals",
    "PETITION OF APPEAL.docx": "08_Sentencing_and_Appeals",
    "MEMO AND NOTICE OF APPEAL.docx": "08_Sentencing_and_Appeals",
    "DRAFTING OF PETITION OF APPEAL ON AND OUT OF TIME.doc": "08_Sentencing_and_Appeals",
    "Copy of CRIMINAL APPLICATIONS-1.pdf": "08_Sentencing_and_Appeals", # Likely appeals/revisions
    "Criminal_Appeal_102_of_2005.pdf": "08_Sentencing_and_Appeals",

    # MODULE 9: CONSTITUTIONAL & SPECIAL APPLICATIONS
    # Focus: Habeas Corpus, Judicial Review, Extradition
    "8. EXTRADITION.(1).PDF": "09_Constitutional_and_Special_Applications",
    "EXTRADITION LETTERS OR FORMS FINAL.docx": "09_Constitutional_and_Special_Applications",
    "Extradition-Notes.pdf": "09_Constitutional_and_Special_Applications",
    "Albanus Kyalo Mwalimu Request.doc": "09_Constitutional_and_Special_Applications", # Extradition context
    "2024 April Q4 Habeas Corpus.docx": "09_Constitutional_and_Special_Applications",
    "HABEAS CORPUS PLEADINGS-FINAL.doc": "09_Constitutional_and_Special_Applications",
    "HABEAS_CORPUS.pdf": "09_Constitutional_and_Special_Applications",
    "Habeas_Corpus.docx": "09_Constitutional_and_Special_Applications",
    "JR APPLICATION BY WAY OF NOTICE OF MOTION.docx": "09_Constitutional_and_Special_Applications",

    # MODULE 10: GENERAL REVISION & DRAFTING
    # Focus: Revision charts, past papers, general notes
    "CRIMINAL LITIGATION MARKING SCHEME.pdf": "10_General_Revision_and_Drafting",
    "CRIMINAL LITIGATION REVISION CHART FINAL!.docx.pdf": "10_General_Revision_and_Drafting",
    "Criminal Litigation - ATP Revision (1).pdf": "10_General_Revision_and_Drafting",
    "CRIMINAL LITIGATION Drafting  Edited 2020 during COVID-19 Lockdown.docx": "10_General_Revision_and_Drafting",
    "CRIMINAL LITIGATION Lesson 3B.doc": "10_General_Revision_and_Drafting",
    "CRIMINAL LITIGATION NOTES.doc": "10_General_Revision_and_Drafting",
    "CRIMINAL- N0V 2014 MARKING_SCHEME.docx": "10_General_Revision_and_Drafting",
    "Criminal law-Revision.doc": "10_General_Revision_and_Drafting",
    "Criminal law-Revision(1).doc": "10_General_Revision_and_Drafting",
    "General Criminal Litigation Notes - See files.pdf": "10_General_Revision_and_Drafting",
    "MKO Criminal Quick Notes.pdf": "10_General_Revision_and_Drafting",
    "MARKING_SCHEME-_CRIMINAL[1].pdf": "10_General_Revision_and_Drafting",
    "ppt 1.pptx": "10_General_Revision_and_Drafting"
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

def deduplicate_files():
    """Finds and deletes files with identical content."""
    print("\n--- Scanning for Duplicates ---")
    hashes = {}
    duplicates_found = 0
    bytes_saved = 0

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
                original_path = hashes[file_hash]
                
                # Logic: Keep the file that matches the MAPPING list exactly.
                # If neither or both match, keep the one with the shorter name (cleaner).
                
                is_current_exact = filename in FILE_MAPPING
                is_original_exact = os.path.basename(original_path) in FILE_MAPPING
                
                to_delete = None
                
                if is_current_exact and not is_original_exact:
                    to_delete = original_path
                    hashes[file_hash] = filepath # Update hash to point to kept file
                elif is_original_exact and not is_current_exact:
                    to_delete = filepath
                else:
                    # Tie-breaker: delete the one with "copy" or "(1)" or longer name
                    if len(filename) > len(os.path.basename(original_path)):
                        to_delete = filepath
                    else:
                        to_delete = original_path
                        hashes[file_hash] = filepath

                print(f"Deleting Duplicate: {os.path.basename(to_delete)}")
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
    print("\n--- Moving Files to Systematic Study Folders ---")
    
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
        for filename in files:
            source_file_path = os.path.join(root, filename)
            
            # Skip script itself
            if filename == os.path.basename(__file__):
                continue
                
            # Determine destination
            if filename in FILE_MAPPING:
                dest_folder = FILE_MAPPING[filename]
            else:
                dest_folder = MISC_FOLDER
            
            target_dir = os.path.join(SOURCE_DIR, dest_folder)
            
            # Check if already in correct folder
            if os.path.abspath(root) == os.path.abspath(target_dir):
                continue

            target_file_path = os.path.join(target_dir, filename)
            
            # Handle collision
            if os.path.exists(target_file_path):
                # If content identical, delete source
                if get_file_hash(source_file_path) == get_file_hash(target_file_path):
                    try:
                        os.remove(source_file_path)
                    except:
                        pass
                    continue
                else:
                    # Rename if content different
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
            
        # Don't delete our new target folders
        if os.path.basename(root) in set(FILE_MAPPING.values()) or os.path.basename(root) == MISC_FOLDER:
            if not os.listdir(root): # Unless they are empty (rare)
                pass 
            else:
                continue
        
        if not os.listdir(root):
            try:
                os.rmdir(root)
                print(f"Deleted empty folder: {os.path.basename(root)}")
                deleted_count += 1
            except OSError as e:
                print(f"Could not delete {root}: {e}")

# ================= EXECUTION =================

if __name__ == "__main__":
    print(f"Target Directory: {SOURCE_DIR}")
    confirm = input("Type 'YES' to Deduplicate, Organize (Systematic Study), and Clean: ")
    
    if confirm == "YES":
        deduplicate_files()
        organize_files()
        delete_empty_folders()
        print("\nOperation Successful.")
    else:
        print("Cancelled.")