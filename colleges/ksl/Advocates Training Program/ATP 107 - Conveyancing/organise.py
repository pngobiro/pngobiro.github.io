
import os
import shutil
import hashlib

# ================= CONFIGURATION =================
# Update this path to your actual folder location
SOURCE_DIR = r"/home/ngobiro/projects/pngobiro.github.io/colleges/ksl/Advocates Training Program/ATP 107 - Conveyancing/Notes"

# ================= SYSTEMATIC STUDY MAPPING =================
FILE_MAPPING = {
    # MODULE 1: INTRODUCTION & PROPERTY LAW
    "1. Introduction to Conveyancing- Part 1.pdf": "01_Intro_and_Property_Law",
    "2. Introduction to Conveyancing - Part 2.pdf": "01_Intro_and_Property_Law",
    "2.CONVEYANCING_LAW-intro_2012.docx": "01_Intro_and_Property_Law",
    "ATP 107 - Land and Related Aspects 18-02-2023.pptx": "01_Intro_and_Property_Law",
    "Buying Land or Property in Kenya.docx": "01_Intro_and_Property_Law",
    "Chapter 1(1) - The Concept of Property.pdf": "01_Intro_and_Property_Law",
    "CONVEYANCING  by ONGUTO.docx": "01_Intro_and_Property_Law",
    "Conveyancing 2018.docx": "01_Intro_and_Property_Law",
    "Immovable Property final.pdf": "01_Intro_and_Property_Law",
    "KSL Conveyancing.docx": "01_Intro_and_Property_Law",
    "Land Law and Conveyancing.pdf": "01_Intro_and_Property_Law",
    "Rights in Alieno Solo.pdf": "01_Intro_and_Property_Law",
    "RIGHTS IN ANOTHERS LAND - JACKLINE OMOLO.pptx": "01_Intro_and_Property_Law",
    "3. Dispositions in Land.pdf": "01_Intro_and_Property_Law",
    "OTHER FORMS OF DISPOSITION OF PROPERTY -14.10.2020.ppt": "01_Intro_and_Property_Law",

    # MODULE 2: DUE DILIGENCE & INVESTIGATION
    "4. PRE-CONTRACT PERIOD- 1.pptx": "02_Due_Diligence_and_Investigation",
    "DUE DILIGENCE.pdf": "02_Due_Diligence_and_Investigation",
    "DUE DILIGENCE.ppt": "02_Due_Diligence_and_Investigation",
    "DUE DILIGENCE-1.ppt": "02_Due_Diligence_and_Investigation",
    "Mandatory Due Diligence.pdf": "02_Due_Diligence_and_Investigation",
    "PRE CONTRACT PERIOD & INVESTIGATION OF TITLE- Element II.doc": "02_Due_Diligence_and_Investigation",
    "appsearch.pdf": "02_Due_Diligence_and_Investigation", # Official Search Application
    "Form-LRA-84.pdf": "02_Due_Diligence_and_Investigation", # Application for Official Search
    "Form-LRA-85.pdf": "02_Due_Diligence_and_Investigation", # Certificate of Official Search

    # MODULE 3: AGREEMENTS & CONTRACTS
    "5. The Contractual Stage. 1.pptx": "03_Agreements_and_Contracts",
    "6. The Contractual Stage -2..pdf": "03_Agreements_and_Contracts",
    "1599812269853_CONTRACT STAGE.ppt": "03_Agreements_and_Contracts",
    "A word on Agreements.pdf": "03_Agreements_and_Contracts",
    "AGREEMENT FOR SALE OF LAND- PAULINE DANSTAN.doc": "03_Agreements_and_Contracts",
    "ATP 107 - Contract of Sale of Land 04-03-2023.pptx": "03_Agreements_and_Contracts",
    "CONTRACT FOR SALE OF LAND.pptx": "03_Agreements_and_Contracts",
    "Contract for Sale of Land 3.pptx": "03_Agreements_and_Contracts",
    "CONTRACT STAGE.pptx": "03_Agreements_and_Contracts",
    "Contracts for the Sale of Land.pdf": "03_Agreements_and_Contracts",
    "Contract Stage.ppt": "03_Agreements_and_Contracts",
    "Fisrt sale agreement .doc": "03_Agreements_and_Contracts",
    "LAND SALE AGREEMENT amended.docx": "03_Agreements_and_Contracts",
    "land_sale_agreement Draft.docx": "03_Agreements_and_Contracts",
    "LSK Conditions  of sale -presentation.pptx": "03_Agreements_and_Contracts",
    "THE LAW SOCIETY CONDITIONS OF SALE (1989 Ed).doc": "03_Agreements_and_Contracts",
    "THE LAW SOCIETY CONDITIONS OF SALE 2015_1.pdf": "03_Agreements_and_Contracts",
    "E26-LSK CONDITIONS 11.pptx": "03_Agreements_and_Contracts",
    "OFF PLAN ARTICLE.pdf": "03_Agreements_and_Contracts",
    "PURCHASE OF TIME SHARE AGREEMENT.doc": "03_Agreements_and_Contracts",
    "TENANT PURCHASE AGREEMENT.pdf": "03_Agreements_and_Contracts",
    "Various purchasing situations.pdf": "03_Agreements_and_Contracts",

    # MODULE 4: TRANSFERS & COMPLETION
    "7. Post Contract Stage - Completion.pdf": "04_Transfers_and_Completion",
    "1601487800741_COMPLETION.ppt": "04_Transfers_and_Completion",
    "3. Transfer form sample.pdf": "04_Transfers_and_Completion",
    "Completion documents for 1, 2, 3.docx": "04_Transfers_and_Completion",
    "completion notice.pdf": "04_Transfers_and_Completion",
    "SPECIMEN DEED OF CONVEYANCE.doc": "04_Transfers_and_Completion",
    "STEPS BY BUYER_S OR SELLER_S ADVOCATE.doc": "04_Transfers_and_Completion",
    "STEPS COMMONLY USED.pdf": "04_Transfers_and_Completion",
    "Transfers.pdf": "04_Transfers_and_Completion",
    "TRANSFERS CONTINUED.pptx": "04_Transfers_and_Completion",
    "Firm 3 Process and Procedure of Converting Private Land to Public Land.docx.pdf": "04_Transfers_and_Completion",
    "Form-LRA-27.pdf": "04_Transfers_and_Completion", # Mutation Form

    # MODULE 5: LEASES & SECTIONAL PROPERTIES
    "10. Sectional Properties.pdf": "05_Leases_and_Sectional_Properties",
    "FRACTIONAL OWNERSHIP ARTICLE.pdf": "05_Leases_and_Sectional_Properties",
    "LEASE AGREEMENT.pdf": "05_Leases_and_Sectional_Properties",
    "Lease Example.pdf": "05_Leases_and_Sectional_Properties",
    "LEASES - Part 2.pdf": "05_Leases_and_Sectional_Properties",
    "LEASES  Part 1.pdf": "05_Leases_and_Sectional_Properties",
    "LEASES .pdf": "05_Leases_and_Sectional_Properties",
    "LEASES Final.pptx": "05_Leases_and_Sectional_Properties",
    "Leases-Key cases.docx": "05_Leases_and_Sectional_Properties",
    "Lecture 1 - CONVENYANCING.pdf": "05_Leases_and_Sectional_Properties",
    "SUBLEASE.pdf": "05_Leases_and_Sectional_Properties",
    "SectionalPropertiesAct21of1987.pdf": "05_Leases_and_Sectional_Properties",
    "sectional property question final.docx": "05_Leases_and_Sectional_Properties",
    "Agmts - License Deed (2).doc": "05_Leases_and_Sectional_Properties",

    # MODULE 6: CHARGES & MORTGAGES
    "AUctioneers Notification of sale and 45 days redemption notice.pdf": "06_Charges_and_Mortgages",
    "CHARGE.doc": "06_Charges_and_Mortgages",
    "CHARGE INSTRUMENT (2).doc": "06_Charges_and_Mortgages",
    "CHARGES - .pdf": "06_Charges_and_Mortgages",
    "CHARGES - JACKLINE OMOLO 2.pptx": "06_Charges_and_Mortgages",
    "CHARGES.pptx": "06_Charges_and_Mortgages",
    "CHATTEL_MORTGAGE.doc": "06_Charges_and_Mortgages",
    "DISCHARGE OF CHARGE (2).doc": "06_Charges_and_Mortgages",
    "Discharge of Charge.docx": "06_Charges_and_Mortgages",
    "discharge of Charge.doc": "06_Charges_and_Mortgages",
    "Discharge of a charge-For illustration purposes.docx": "06_Charges_and_Mortgages",
    "Discharge or Charge.pdf": "06_Charges_and_Mortgages",
    "MORTGAGES AND CHARGES.pdf": "06_Charges_and_Mortgages",
    "SECURITIES- CHARGES.doc": "06_Charges_and_Mortgages",
    "NOTICE TO SELL UNDER S.90 OF LAND ACT_.doc": "06_Charges_and_Mortgages",
    "STATUTORY NOTICE UNDER S.90 OF LAND ACT_.doc": "06_Charges_and_Mortgages",

    # MODULE 7: PROFESSIONAL UNDERTAKINGS & ETHICS
    "1601486879807_PROFESSIONAL UNDERTAKINGS.ppt": "07_Professional_Undertakings_and_Ethics",
    "DUTIES OF ADVOCATES.ppt": "07_Professional_Undertakings_and_Ethics",
    "DUTIES OF ADVOCATES(1).ppt": "07_Professional_Undertakings_and_Ethics",
    "Guide on Professional Undertaking.pdf": "07_Professional_Undertakings_and_Ethics",
    "Judgement SA Conveyancing.pdf": "07_Professional_Undertakings_and_Ethics", # Professional Negligence Case
    "PROFEESIONAL UNDERTAKING.docx": "07_Professional_Undertakings_and_Ethics",
    "PROFESSIONAL UNDERTAKINGS.ppt": "07_Professional_Undertakings_and_Ethics",
    "Professional Undertaking.docx": "07_Professional_Undertakings_and_Ethics",
    "Professional Undertaking.pdf": "07_Professional_Undertakings_and_Ethics",
    "Professional Undertaking Questions.doc": "07_Professional_Undertakings_and_Ethics",
    "completion and role of advocates questions.doc": "07_Professional_Undertakings_and_Ethics",

    # MODULE 8: REGISTRATION & STATUTORY FORMS
    "3. Form-LRA-5 General Power of Attorney.pdf": "08_Registration_and_Statutory_Forms",
    "3. General Power of Attorney.pdf": "08_Registration_and_Statutory_Forms",
    "GENERAL POWER OF ATTORNEY NEW FORMS.docx": "08_Registration_and_Statutory_Forms",
    "GENERAL POWER OF ATTORNEY.pdf": "08_Registration_and_Statutory_Forms",
    "General Power of Attorney -sample.docx": "08_Registration_and_Statutory_Forms",
    "irrevocable power of attorney.pdf": "08_Registration_and_Statutory_Forms",
    "Sample Irrevocable Power of Attorney .pdf": "08_Registration_and_Statutory_Forms",
    "sample Revocation of Power of Attorney.pdf": "08_Registration_and_Statutory_Forms",
    "4.EXECUTION , ATTESTATION, CONSENTS ,ET AL -con ELEMENT III.docx": "08_Registration_and_Statutory_Forms",
    "Notes on consents.doc": "08_Registration_and_Statutory_Forms",
    "spousal affidavit.docx": "08_Registration_and_Statutory_Forms",
    "GRANT OF EASEMENT (2).pdf": "08_Registration_and_Statutory_Forms",
    "Community Land Act overview.pdf": "08_Registration_and_Statutory_Forms",
    "FIRM C3 CGT PRESENTATION CONVEYANCING.pptx": "08_Registration_and_Statutory_Forms",
    "KRA LTD-THE CAPITAL GAINS TAX IMPLEMENTATION GUIDELINES.pdf": "08_Registration_and_Statutory_Forms",
    "Land tax proposal (p1).pdf": "08_Registration_and_Statutory_Forms",
    "LN 151 - 152.pdf": "08_Registration_and_Statutory_Forms", # Stamp Duty Valuation
    "Stamp Duty.pdf": "08_Registration_and_Statutory_Forms",
    "Valuation Requisition for Stamp Duty Form.pdf": "08_Registration_and_Statutory_Forms",

    # MODULE 9: REVISION & GENERAL
    "1.CONVEYANCING TERMS & TABLE -2013.docx": "09_Revision_and_Course_Materials",
    "2. GUIDEBOOK_ON_PROCEDURES_AND_PROCESSES_OF.pdf": "09_Revision_and_Course_Materials",
    "GUIDEBOOK_ON_PROCEDURES_AND_PROCESSES_OF (2)(1).pdf": "09_Revision_and_Course_Materials",
    "4. Conveyancing-Outline of a simple conveyancing transaction.doc": "09_Revision_and_Course_Materials",
    "ATP107.pdf": "09_Revision_and_Course_Materials",
    "CASE SUMMARIES (2).pptx": "09_Revision_and_Course_Materials",
    "CLE QUESTIONS-CONTENTS OF A CONTRACT FOR SALE OF LAND.doc": "09_Revision_and_Course_Materials",
    "CONVEYANCING - COMPLETE MATERIALS.pdf": "09_Revision_and_Course_Materials",
    "CONVEYANCING- Revision  Notes.pdf": "09_Revision_and_Course_Materials",
    "CONVEYANCING-2.pdf": "09_Revision_and_Course_Materials",
    "CONVEYANCING.docx": "09_Revision_and_Course_Materials",
    "CONVEYANCING_2008_-_2011.pdf": "09_Revision_and_Course_Materials",
    "CONVEYANCYING ASSINGMENT.docx": "09_Revision_and_Course_Materials",
    "CONVEYANCING BRIEF-1.docx": "09_Revision_and_Course_Materials",
    "CONVEYANCING MANUAL.PDF": "09_Revision_and_Course_Materials",
    "CONVEYANCYING PRESENTATION.pptx": "09_Revision_and_Course_Materials",
    "conveyancing  -  onguto.doc": "09_Revision_and_Course_Materials",
    "FREQUENTLY-ASKED-QUESTIONS-ON-LAND-REGISTRATION.pdf": "09_Revision_and_Course_Materials",
    "Hardin_-_Tragedy_of_the_Commons.pdf": "09_Revision_and_Course_Materials",
    "koki real full notes.pdf": "09_Revision_and_Course_Materials",
    "MKO Conveyancing Quick Notes.pdf": "09_Revision_and_Course_Materials",
    "Onguto .pdf": "09_Revision_and_Course_Materials",
    "stay of orders pending appeal.doc": "09_Revision_and_Course_Materials"
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
    print("--- Starting Organization for ATP 107 (Conveyancing) ---")
    
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
    confirm = input("Type 'YES' to organize ATP 107 notes: ")
    if confirm == "YES":
        organize_files()
        print("\nOrganization Complete.")
    else:
        print("Operation cancelled.")
