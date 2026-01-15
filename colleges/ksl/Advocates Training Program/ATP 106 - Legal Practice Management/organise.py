
import os
import shutil
import hashlib

# ================= CONFIGURATION =================
# Update this path to the folder containing your ATP 106 Notes
SOURCE_DIR = r"/home/ngobiro/projects/pngobiro.github.io/colleges/ksl/Advocates Training Program/ATP 106 - Legal Practice Management/Notes"

# ================= SYSTEMATIC STUDY MAPPING =================
FILE_MAPPING = {
    # MODULE 1: INTRODUCTION, STRATEGY & FIRM STRUCTURE
    "1. INTRODUCTION AND COURSE OVERVIEW.pdf": "01_Introduction_and_Strategy",
    "ATP 106 LEGAL PRACTICE MANAGEMENT.pptx": "01_Introduction_and_Strategy",
    "ATP 106 LPM WEEK 2.pptx": "01_Introduction_and_Strategy",
    "Business Plan - Special Class.pptx": "01_Introduction_and_Strategy",
    "Business Plan Template_.doc": "01_Introduction_and_Strategy",
    "consulting.pdf": "01_Introduction_and_Strategy",
    "FIRM 22 LPM PRESENTATION PPT.pptx": "01_Introduction_and_Strategy", # Office location strategy
    "Law - Business or Profession (1).pdf": "01_Introduction_and_Strategy",
    "LPM (departments).docx": "01_Introduction_and_Strategy",
    "lesson 6  Case study - KSL entry requirements Petition_102_of_2018.pdf": "01_Introduction_and_Strategy",
    "Mumo Matemu case.pdf": "01_Introduction_and_Strategy",

    # MODULE 2: OFFICE ADMINISTRATION & FRONT OFFICE
    "2. INTRODUCTION TO OFFICE ADMINISTRATION AND MANAGEMENT.pdf": "02_Office_Administration_and_Front_Office",
    "3. ORGANIZATION.pdf": "02_Office_Administration_and_Front_Office",
    "4. FRONT OFFICE SERVICES.pdf": "02_Office_Administration_and_Front_Office",
    "5. FRONT OFFICE MANAGEMENT.pdf": "02_Office_Administration_and_Front_Office",
    "8. FILING AND RECORD MANAGEMENT.pdf": "02_Office_Administration_and_Front_Office",
    "Explain the relevance of front office to legal practice.docx": "02_Office_Administration_and_Front_Office",
    "INTRODUCTION_TO_OFFICE_PRACTICE.pdf": "02_Office_Administration_and_Front_Office",
    "KSL The Office Practice.pdf": "02_Office_Administration_and_Front_Office",
    "ksl om notes revised for 2016 STUDENTS COPY.ppt": "02_Office_Administration_and_Front_Office",
    "ksl op notes proper current revised for 2014 final copy-5.pptx": "02_Office_Administration_and_Front_Office",
    "Lesson Two 2018.docx": "02_Office_Administration_and_Front_Office",
    "LPM WEEK 4 & 5.pptx": "02_Office_Administration_and_Front_Office",
    "LPM WEEK 4 & 5-1.pptx": "02_Office_Administration_and_Front_Office",
    "MODERN TRENDS IN CUSTOMER SERVICE MANAGEMENT.pptx": "02_Office_Administration_and_Front_Office",
    "Modern Trends in Customer Service Management (Class G Firm 4).pdf": "02_Office_Administration_and_Front_Office",
    "Office Practice.pdf": "02_Office_Administration_and_Front_Office",
    "records mgt.pptx": "02_Office_Administration_and_Front_Office",
    "TERM 2 LESSON 7 COMMUNICATION AND ETIQUETTE_.pptx": "02_Office_Administration_and_Front_Office",

    # MODULE 3: HUMAN RESOURCE MANAGEMENT
    "1 Introduction and definitions.docx": "03_Human_Resource_Management",
    "2 Human Resource Management Planning.docx": "03_Human_Resource_Management",
    "3 JOB ANALYSIS AND DESIGN.docx": "03_Human_Resource_Management",
    "4 RECRUITMENT.doc": "03_Human_Resource_Management",
    "5 Selection.docx": "03_Human_Resource_Management",
    "6 PLACEMENT.doc": "03_Human_Resource_Management",
    "6 PLACEMENT, INDUCTION AND SOCIALISATION.pptx": "03_Human_Resource_Management",
    "7 Career Planning and Development.doc": "03_Human_Resource_Management",
    "7 CAREER DEVELOPMENT.pptx": "03_Human_Resource_Management",
    "8 Training and Development.doc": "03_Human_Resource_Management",
    "8 Training and Development.pptx": "03_Human_Resource_Management",
    "9 INTERNAL MOBILITY AND SEPARATIONS.doc": "03_Human_Resource_Management",
    "9  INTERNAL MOBILITY AND SEPARATIONS.docx": "03_Human_Resource_Management",
    "10 WAGE AND SALARY ADMINISTRATION.doc": "03_Human_Resource_Management",
    "ATP 106 - C.pdf": "03_Human_Resource_Management", # HR Planning
    "CAREER_20PLANNING_20AND_20DEVELOPMENT[1].doc": "03_Human_Resource_Management",
    "DEFINITION.pdf": "03_Human_Resource_Management", # HR Definitions
    "Disciplinary Hearing Letter.docx": "03_Human_Resource_Management",
    "FIRM 8.docx": "03_Human_Resource_Management", # Termination letter
    "FIRM 16 HUMAN RESOURCE PLAN Edited.pdf": "03_Human_Resource_Management",
    "HR Lesson 3 - Recruitment.pptx": "03_Human_Resource_Management",
    "HRM - Lesson 1_ Planning and Management.pdf": "03_Human_Resource_Management",
    "human resource.pdf": "03_Human_Resource_Management",
    "HUMAN RESOURCE TASK.doc": "03_Human_Resource_Management",
    "Legal Practice and Management FIRM 1.pptx": "03_Human_Resource_Management",
    "lesson 4 placement to induction.pdf": "03_Human_Resource_Management",
    "Lpm Employment Contract letter.docx": "03_Human_Resource_Management",
    "Lpm Employment Contract letter-1.docx": "03_Human_Resource_Management",
    "Term 2_ Lesson 5 - Training and Development.pptx": "03_Human_Resource_Management",
    "Term 2_ Lesson 6 - Career Development and Management with you.pptx": "03_Human_Resource_Management",
    "TERM 2 LESSON 7 INTERNAL MOBILITY.pptx": "03_Human_Resource_Management",
    "Topic 2 - HR Planning.doc": "03_Human_Resource_Management",
    "Topic 4 - Recruitment and Selection.doc": "03_Human_Resource_Management",

    # MODULE 4: FINANCIAL MANAGEMENT & ACCOUNTING
    "1 Financial Accounting - Harold.docx": "04_Financial_Management_and_Accounting",
    "3. Balancing of Accounts.pdf": "04_Financial_Management_and_Accounting",
    "ACCOUNTING BASICS.pdf": "04_Financial_Management_and_Accounting",
    "ACCOUNTING. (READ).doc": "04_Financial_Management_and_Accounting",
    "Accounting Equation.PDF": "04_Financial_Management_and_Accounting",
    "Accounting Exercise.pdf": "04_Financial_Management_and_Accounting",
    "Adjustment for Financial Statements.PDF": "04_Financial_Management_and_Accounting",
    "Advocates Accounts.doc": "04_Financial_Management_and_Accounting",
    "ATP 106 - D.pdf": "04_Financial_Management_and_Accounting", # Ledger Accounts
    "ATP 106 LPM (ACCOUNTING) - BANK RECONCILIATION.pdf": "04_Financial_Management_and_Accounting",
    "ATP 106 merged accounting notes.pdf": "04_Financial_Management_and_Accounting",
    "Balance Sheet.PDF": "04_Financial_Management_and_Accounting",
    "Bank Reconciliation.doc": "04_Financial_Management_and_Accounting",
    "Book Keeping.pdf": "04_Financial_Management_and_Accounting",
    "Cash Flow Statement.doc": "04_Financial_Management_and_Accounting",
    "Cash Flow Statements.PDF": "04_Financial_Management_and_Accounting",
    "Conceptual Framework of Accounting.doc": "04_Financial_Management_and_Accounting",
    "CONTROLL_ACCOUNTS.pdf": "04_Financial_Management_and_Accounting",
    "Double Entry - 2.pdf": "04_Financial_Management_and_Accounting",
    "Generally Accepted Accounting Principles (GAAP).PDF": "04_Financial_Management_and_Accounting",
    "Illustration One partnership.docx": "04_Financial_Management_and_Accounting",
    "Income Statements.PDF": "04_Financial_Management_and_Accounting",
    "INTRODUCTION_TO_BOOK_KEEPING_AND_ACCOUNTING.pdf": "04_Financial_Management_and_Accounting",
    "lesson 1 Accounting.pptx": "04_Financial_Management_and_Accounting",
    "lesson 2 Accounting.pptx": "04_Financial_Management_and_Accounting",
    "Lesson Two illustartion.docx": "04_Financial_Management_and_Accounting",
    "Lesson Two illustartion(1).docx": "04_Financial_Management_and_Accounting",
    "Partnership Accounts Class.doc": "04_Financial_Management_and_Accounting",
    "Questions 1.PDF": "04_Financial_Management_and_Accounting",
    "Recording Inventory.PDF": "04_Financial_Management_and_Accounting",
    "Theoritical Framework of Accounting.PDF": "04_Financial_Management_and_Accounting",
    "Trial Balance.PDF": "04_Financial_Management_and_Accounting",

    # MODULE 5: PROCUREMENT & SUPPLY CHAIN
    "9. BASIC SUPPLY CHAIN MANAGEMENT.pptx": "05_Procurement_and_Supply_Chain",
    "EXTRA CLASS NOTES - Procurement_.docx": "05_Procurement_and_Supply_Chain",
    "Lesson 7 - Procurement (Part 1).pptx": "05_Procurement_and_Supply_Chain",
    "Lesson 7 Part 2 - Procurement_ Inventory Management_.pptx": "05_Procurement_and_Supply_Chain",
    "Procurement.pptx": "05_Procurement_and_Supply_Chain",
    "Procurement1.docx": "05_Procurement_and_Supply_Chain",
    "Procurement Case_ R v Board and kenya power Judicial_Review_Application_181_of_2018.pdf": "05_Procurement_and_Supply_Chain",
    "Public Procurement and Asset DisposalAct33of2015_subsidiary.pdf": "05_Procurement_and_Supply_Chain",

    # MODULE 6: ICT, SECURITY & DISASTER MANAGEMENT
    "7. INFORMATION COMMUNICATION TECHNOLOGY.pdf": "06_ICT_Security_and_Disaster_Mgmt",
    "10. SAFETY, SECURITY AND DISASTER MANAGEMENT.pptx": "06_ICT_Security_and_Disaster_Mgmt",
    "DISASTER MANAGEMENT KSL 2020 Muneeni K.pdf": "06_ICT_Security_and_Disaster_Mgmt",
    "EFFECT OF CYBER CRIME ON LEGAL PRACTICE MANAGEMENT FIRM 7.pptx": "06_ICT_Security_and_Disaster_Mgmt",
    "ICT 2018.pptx": "06_ICT_Security_and_Disaster_Mgmt",
    "LESSON 8 SAFETY , SECURITY AND DISASTER MANAGEMENT.pptx": "06_ICT_Security_and_Disaster_Mgmt",
    "LPM  FIRM 6 AUTOMATION edited.pptx": "06_ICT_Security_and_Disaster_Mgmt",
    "SAFETY AND SECURITY KSL 2020.pdf": "06_ICT_Security_and_Disaster_Mgmt",

    # MODULE 7: WORKPLACE POLICIES & ETHICS
    "6. STANDARDS, POLICIES AND PROCEDURES.pdf": "07_Workplace_Policies_and_Ethics",
    "11. SEXUAL HARASSMENT AND DISCRIMINATION  AT THE WORKPLACE.pptx": "07_Workplace_Policies_and_Ethics",
    "ATP 106 - B.pdf": "07_Workplace_Policies_and_Ethics", # Standards and Policies
    "Firm 3 Work LPM.pptx": "07_Workplace_Policies_and_Ethics",
    "LPM Standards,policies,procs.pptx": "07_Workplace_Policies_and_Ethics",
    "LPM WEEK 6 FINAL.pptx": "07_Workplace_Policies_and_Ethics",
    "LPM-STANDARDS N POLICIES.docx": "07_Workplace_Policies_and_Ethics",
    "Risk-Based Approach Legal Professionals Guidance.pdf": "07_Workplace_Policies_and_Ethics",
    "SEXUAL HARASSMENT AND DISCRIMINATION .pptx": "07_Workplace_Policies_and_Ethics",
    "Term 1_ Lesson 9 - Discrimination and Sexual Harassment at the Workplace_.pptx": "07_Workplace_Policies_and_Ethics",

    # MODULE 8: REVISION & COMPREHENSIVE NOTES
    "ACOUNTING  REVISION QUESTIONS(2).doc": "08_Revision_and_Comprehensive_Notes",
    "Copy of Legal Practice Management_2.docx": "08_Revision_and_Comprehensive_Notes",
    "Copy of Legal Practice and Management.pdf": "08_Revision_and_Comprehensive_Notes",
    "Legal Practice Management - ATP Revision.pdf": "08_Revision_and_Comprehensive_Notes",
    "LEGAL_PRACTICE_MANAGEMENT.pdf": "08_Revision_and_Comprehensive_Notes",
    "LEGAL_PRACTICE_MANAGEMENT_1.pdf": "08_Revision_and_Comprehensive_Notes",
    "LPM Kimari full.docx": "08_Revision_and_Comprehensive_Notes",
    "LPM Kimari full_1.docx": "08_Revision_and_Comprehensive_Notes",
    "LPM Kimari full-2(2).docx": "08_Revision_and_Comprehensive_Notes",
    "LPM NOTES (KIMARI).docx": "08_Revision_and_Comprehensive_Notes"
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
    print("--- Starting Organization for ATP 106 ---")
    
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
    confirm = input("Type 'YES' to organize ATP 106 notes: ")
    if confirm == "YES":
        organize_files()
        print("\nOrganization Complete.")
    else:
        print("Operation cancelled.")