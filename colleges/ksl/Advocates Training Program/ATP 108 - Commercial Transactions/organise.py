
import os
import shutil
import hashlib

# ================= CONFIGURATION =================
# Update this path to the folder containing your ATP 108 Notes
SOURCE_DIR = r"/home/ngobiro/projects/pngobiro.github.io/colleges/ksl/Advocates Training Program/ATP 108 - Commercial Transactions/Notes"

# ================= SYSTEMATIC STUDY MAPPING =================
FILE_MAPPING = {
    # MODULE 1: INTRODUCTION & PRINCIPLES
    "COMMERCIAL LAW BY LAIBUTA.pdf": "01_Introduction_and_Principles",
    "Principle of Commercial Law- LAIBUTA.pdf": "01_Introduction_and_Principles",
    "Principle of Commercial.pdf": "01_Introduction_and_Principles",
    "COMMERCIAL_TRANSACTIONS.docx": "01_Introduction_and_Principles",
    "COMMERCIAL TRANSACTION BY CRISPINE -JAMES.docx": "01_Introduction_and_Principles",
    "KSL Commercial Transactions.pdf": "01_Introduction_and_Principles",
    "DOC-20230608-WA0088_ (1).docx": "01_Introduction_and_Principles",

    # MODULE 2: COMPANY LAW & GOVERNANCE
    "COMPANY LAW OF KENYA-JAMES.pdf": "02_Company_Law_and_Governance",
    "Company_Law_Notes_Kenya.docx": "02_Company_Law_and_Governance",
    "Chapter 1 - Introduction to Companies and Company Law 230116.pdf": "02_Company_Law_and_Governance",
    "Chapter 1 - Introduction to Companies and Company Law 230116(1).pdf": "02_Company_Law_and_Governance",
    "Chapter 2 - Company Promotion 290116.pdf": "02_Company_Law_and_Governance",
    "Chapter 2 - Company Promotion 290116-1.pdf": "02_Company_Law_and_Governance",
    "Chapter 3 - Membership of a Company.docx": "02_Company_Law_and_Governance",
    "Chapter 7 - Company Meetings.pdf": "02_Company_Law_and_Governance",
    "Chapter 7 - Company Meetings-1.pdf": "02_Company_Law_and_Governance",
    "Chapter 7 - Meetings.docx": "02_Company_Law_and_Governance",
    "Chapter 8 - Company Directors.pdf": "02_Company_Law_and_Governance",
    "Chapter 8 - Company Directors-2.pdf": "02_Company_Law_and_Governance",
    "Chapter 8 (3) - The Company Secretary.pdf": "02_Company_Law_and_Governance",
    "Chapter 12- Companies Incorporated Outside Kenya.pdf": "02_Company_Law_and_Governance",
    "Company law- DEFINITION-2.pdf": "02_Company_Law_and_Governance",
    "Companies notes March 2023-1.pdf": "02_Company_Law_and_Governance",
    "Company-Law-Strathmore-university-notes-and-Revision-kit.pdf": "02_Company_Law_and_Governance",
    "company law (tuition class ).docx": "02_Company_Law_and_Governance",
    "SUMMARY OF THE COMPANIES ACT 2015_.docx": "02_Company_Law_and_Governance",
    "Company Revision Chart .pdf": "02_Company_Law_and_Governance",
    "PPT Companies final.pptx": "02_Company_Law_and_Governance",

    # MODULE 3: PARTNERSHIPS & JOINT VENTURES
    "6. Partnerships.pdf": "03_Partnerships_and_Joint_Ventures",
    "B10  Partnership agreement.docx": "03_Partnerships_and_Joint_Ventures",
    "Law of partnerships - general partnerships.docx": "03_Partnerships_and_Joint_Ventures",
    "Law of partnerships - general partnerships.pdf": "03_Partnerships_and_Joint_Ventures",
    "Partnership Deed.docx": "03_Partnerships_and_Joint_Ventures",
    "Partnerships Act_No 16 of 2012.pdf": "03_Partnerships_and_Joint_Ventures",
    "Partnerships LLP.pdf": "03_Partnerships_and_Joint_Ventures",
    "Partnerships-Chrispine.docx": "03_Partnerships_and_Joint_Ventures",
    "sample jv.pdf": "03_Partnerships_and_Joint_Ventures",
    "Guarantees, Pledges and Joint Ventures.pptx": "03_Partnerships_and_Joint_Ventures",
    "Fwd_ Partnership materials.zip": "03_Partnerships_and_Joint_Ventures",

    # MODULE 4: SECURITIES & CAPITAL MARKETS
    "200810_Share Allotment_Pre-emption Rights 1.pdf": "04_Securities_and_Capital_Markets",
    "Chapter 4 - Shares.docx": "04_Securities_and_Capital_Markets",
    "Chapter 4 - Shares.pdf": "04_Securities_and_Capital_Markets",
    "Chapter 4 - CDS.docx": "04_Securities_and_Capital_Markets",
    "Chapter 8 (2) - Insider Trading.pdf": "04_Securities_and_Capital_Markets",
    "Share Capital 2_Slides.pdf": "04_Securities_and_Capital_Markets",
    "Share Capital 2_Slides(1).pdf": "04_Securities_and_Capital_Markets",
    "Shares.pptx": "04_Securities_and_Capital_Markets",
    "The Capital Markets Authority and its Regulations CT.docx": "04_Securities_and_Capital_Markets",
    "Ways in which companies raise capital.pptx": "04_Securities_and_Capital_Markets",
    "Company Charges and Financial Assistance.pdf": "04_Securities_and_Capital_Markets",
    "preemption rights.pdf": "04_Securities_and_Capital_Markets",

    # MODULE 5: BANKING & FINANCIAL SERVICES
    "201019_Financial Service Regulation_Key Players etc.pdf": "05_Banking_and_Financial_Services",
    "201026_Financial Service Regulation.pdf": "05_Banking_and_Financial_Services",
    "210113_Financial_Services_and_Payments_Systems___13.1.2021_NDOLO.pdf": "05_Banking_and_Financial_Services",
    "830-930-Central-Bank-Kenya (1).pdf": "05_Banking_and_Financial_Services",
    "ATP 108 - Topic overview KeyaPJ - Copy.pdf": "05_Banking_and_Financial_Services",
    "BANKING NOTES.doc": "05_Banking_and_Financial_Services",
    "Consumer_Protection_in_the_Financial_Ser.pdf": "05_Banking_and_Financial_Services",
    "cryptocurrency.pdf": "05_Banking_and_Financial_Services",
    "FIRM 3 COMMERCIAL TRANSACTIONS.pptx": "05_Banking_and_Financial_Services",
    "FIRM 2_.pptx": "05_Banking_and_Financial_Services", # CBDC
    "FIRM 2B_.docx": "05_Banking_and_Financial_Services", # CBDC
    "FIRM 22.pptx": "05_Banking_and_Financial_Services", # Payment Systems
    "Financial Regulations Services NOTES 2.docx": "05_Banking_and_Financial_Services",
    "Financial Service Regulations.pdf": "05_Banking_and_Financial_Services",
    "Financial Services Law Payment Systems (1).pptx": "05_Banking_and_Financial_Services",
    "Financial_Services_and_Payments___course outline.pdf": "05_Banking_and_Financial_Services",
    "FINANCIAL SERVICES REGULATION IN KENYA notes.docx": "05_Banking_and_Financial_Services",
    "FINANCIAL_PAYMENT__1_.pdf.pdf": "05_Banking_and_Financial_Services",
    "FS T- TWO.pptx": "05_Banking_and_Financial_Services",
    "JULY 2015 national Payment system.docx": "05_Banking_and_Financial_Services",
    "JULY 2015 national Payment system(1).docx": "05_Banking_and_Financial_Services",
    "National Payment Systems commercial.docx": "05_Banking_and_Financial_Services",
    "Recent International Developments in the Law of Negotiable Instru.pdf": "05_Banking_and_Financial_Services",
    "139697899_Press Release - Enactment of the Law to Regulate Digital Lenders.pdf": "05_Banking_and_Financial_Services",
    "673866074_DRAFT DIGITAL CREDIT PROVIDERS REGULATIONS 2021 - December 2021.pdf": "05_Banking_and_Financial_Services",
    "Civil_Suit_517_of_2014.pdf": "05_Banking_and_Financial_Services",

    # MODULE 6: INSOLVENCY & RESTRUCTURING
    "Chapter 9 - Company Accounts  The Company Auditor and Audit.pdf": "06_Insolvency_and_Restructuring",
    "Chapter 9 - Company Accounts  The Company Auditor and Audit-1.pdf": "06_Insolvency_and_Restructuring",
    "Chapter 10 - Corporate Insolvency Under The Insolvency Act.docx": "06_Insolvency_and_Restructuring",
    "Chapter 10 - Corporate Insolvency Under The Insolvency Act.pdf": "06_Insolvency_and_Restructuring",
    "Chapter 10 - Corporate Insolvency Under The Insolvency Act(1).pdf": "06_Insolvency_and_Restructuring",
    "Chapter 11 (2) - Corporate Restructuring.pdf": "06_Insolvency_and_Restructuring",
    "Chapter 11 (2) - Corporate Restructuring(1).pdf": "06_Insolvency_and_Restructuring",
    "Chapter 11- Corporate Restructuring-1.docx": "06_Insolvency_and_Restructuring",
    "Class 3-Bankruptcy.pptx": "06_Insolvency_and_Restructuring",
    "INSOLVENCY PROCEDURES 2022 final.pptx": "06_Insolvency_and_Restructuring",
    "INSOLVENCY PROCEDURES 2022 final_1.pptx": "06_Insolvency_and_Restructuring",
    "INSOLVENCY PROCEDURES 2023.pptx": "06_Insolvency_and_Restructuring",
    "Insolvency.pptx": "06_Insolvency_and_Restructuring",
    "Insolvency_Petition_25_of_2018 Uchumi Supermarkets CVA.pdf": "06_Insolvency_and_Restructuring",
    "Winding_Up_Cause_7_of_2016.pdf": "06_Insolvency_and_Restructuring",
    "Civil_Appeal_266_of_2016.pdf": "06_Insolvency_and_Restructuring",
    "MPESA HEADACHE.pdf": "06_Insolvency_and_Restructuring",

    # MODULE 7: COMMERCIAL AGREEMENTS & AGENCY
    "Agency Agreement general.pdf": "07_Commercial_Agreements_and_Agency",
    "AGENCY - COMPILED.docx": "07_Commercial_Agreements_and_Agency",
    "AGENCY PPT ATP 2018.pptx": "07_Commercial_Agreements_and_Agency",
    "CASE BRIEFS ON AGENCY ppt 1 2018.pdf": "07_Commercial_Agreements_and_Agency",
    "Commercial Agreements Chart .pdf": "07_Commercial_Agreements_and_Agency",
    "Commercial Agreements Chart _1.pdf": "07_Commercial_Agreements_and_Agency",
    "International Commercial Agreements Notes.docx": "07_Commercial_Agreements_and_Agency",
    "International distribution agreements.pdf": "07_Commercial_Agreements_and_Agency",
    "Marketing Sales Agreement Template.pdf": "07_Commercial_Agreements_and_Agency",
    "Reseller Agreement 1 draft.pdf": "07_Commercial_Agreements_and_Agency",
    "SALE OF GOODS.doc": "07_Commercial_Agreements_and_Agency",
    "sample franchise.pdf": "07_Commercial_Agreements_and_Agency",
    "sample guarantee.pdf": "07_Commercial_Agreements_and_Agency",
    "TRUST DEED.pdf": "07_Commercial_Agreements_and_Agency",
    "FRANCHISE & DISTRIBUTORSHIP AGREEMENTS.pptx": "07_Commercial_Agreements_and_Agency",
    "franchising.docx": "07_Commercial_Agreements_and_Agency",
    "- Passing of Risk in C.I.F Contracts.pdf": "07_Commercial_Agreements_and_Agency",
    "HIRE PURCHASE AGREEMENT.docx": "07_Commercial_Agreements_and_Agency",
    "HIRE PURCHASE4.pptx": "07_Commercial_Agreements_and_Agency",
    "HIRE_PURCHASE_LAW_REVISED 30_03_2011(3).pdf": "07_Commercial_Agreements_and_Agency",
    "Hire Purchase (1).ppt": "07_Commercial_Agreements_and_Agency",
    "Problems with Hire-Purchase Transactions - Newsletters - International Law Office.pdf": "07_Commercial_Agreements_and_Agency",
    "Online shopping.pdf": "07_Commercial_Agreements_and_Agency",
    "Douglas-OConnor-v-Uber-Technologies.pdf": "07_Commercial_Agreements_and_Agency",
    "Uber leapfrog to supreme denied.pdf": "07_Commercial_Agreements_and_Agency",
    "Uber_B.V._and_Others_v_Mr_Y_Aslam_and_Others_UKEAT_ 2017 appeal.pdf": "07_Commercial_Agreements_and_Agency",
    "aslam-and-farrar-v-uber-reasons-20161028.pdf": "07_Commercial_Agreements_and_Agency",
    "kanuri ltd vs uber brief.pdf": "07_Commercial_Agreements_and_Agency",
    "Civil_Suit_356_of_2016 (1) kanuri kenya ltd vs uber.pdf": "07_Commercial_Agreements_and_Agency",
    "SPECIAL POWER OF ATTORNEY.pdf": "07_Commercial_Agreements_and_Agency",
    "Draft Licence.docx": "07_Commercial_Agreements_and_Agency",
    "INSURANCE BROKER AGRMT.pdf": "07_Commercial_Agreements_and_Agency",

    # MODULE 8: MERGERS & ACQUISITIONS
    "200824_31_Mergers Introduction.pdf": "08_Mergers_and_Acquisitions",
    "200907_Mergers and Acquisitions-COMESA EACCA Acquisition Process (1).pdf": "08_Mergers_and_Acquisitions",
    "200914_Mergers and Acquisitions-Acquisition Process and Legal Due Diligence.pdf": "08_Mergers_and_Acquisitions",
    "200921_Mergers and Acquisitions-Legal Due Diligence and DL.pdf": "08_Mergers_and_Acquisitions",
    "LEGAL CONSIDERATIONS ACCORDING TO THE COMPETITION ACT KENYA.docx": "08_Mergers_and_Acquisitions",
    "MERGERS AND ACQUISITIONS IN KENYA .pdf": "08_Mergers_and_Acquisitions",
    "Mergers Notes Best.pdf": "08_Mergers_and_Acquisitions",
    "Mergers and Acquisitions 2020 3.pdf": "08_Mergers_and_Acquisitions",
    "Mergers and Acquisitions.pdf": "08_Mergers_and_Acquisitions",
    "Mergers and Acquisitions.pptx": "08_Mergers_and_Acquisitions",
    "Disclosure Letter-Sample.pdf": "08_Mergers_and_Acquisitions",
    "Due Diligence Checklist- Sample.pdf": "08_Mergers_and_Acquisitions",
    "Non Disclosure Agreement-Sample.pdf": "08_Mergers_and_Acquisitions",
    "Share Purchase Agreement-Sample.pdf": "08_Mergers_and_Acquisitions",
    "Term Sheet-Sample.pdf": "08_Mergers_and_Acquisitions",
    "CONFIDENTIALITY_AND_NDA 2.pdf": "08_Mergers_and_Acquisitions",
    "CLASS C FIRM 6 Commercial Transactions Presentation.pptx": "08_Mergers_and_Acquisitions",
    "FIRM 8.docx": "08_Mergers_and_Acquisitions", # Telkom vs CAK

    # MODULE 9: SECURITY RIGHTS IN MOVABLE PROPERTY
    "Chattels Transfer KSL short.pptx": "09_Security_Rights_in_Movable_Property",
    "DEBENTURES AND CHATTELS MORTGAGES (1).pptx": "09_Security_Rights_in_Movable_Property",
    "MPSR 2022 1.pptx": "09_Security_Rights_in_Movable_Property",
    "MPSR AGREEMENT.docx": "09_Security_Rights_in_Movable_Property",
    "MPSR Act 2107.docx": "09_Security_Rights_in_Movable_Property",
    "MPSR OVERVIEW 1.pdf - Fredd Wakimani.docx": "09_Security_Rights_in_Movable_Property",
    "MPSR OVERVIEW 1.pdf - Fredd Wakimani.pdf": "09_Security_Rights_in_Movable_Property",
    "MovablePropertySecurityRightsAct2017.pdf": "09_Security_Rights_in_Movable_Property",
    "Registration-of-Security-Rights-in-Movable-Property.pdf": "09_Security_Rights_in_Movable_Property",
    "Intellectual Property Collateralisation in the Age of the Movable Property Security Rights Act.docx": "09_Security_Rights_in_Movable_Property",
    "fleisig power of collaterall.pdf": "09_Security_Rights_in_Movable_Property",
    "fleisig power of collaterall_1.pdf": "09_Security_Rights_in_Movable_Property",

    # MODULE 10: FORMS & PRECEDENTS
    "FORM-CR1-APPLICATION-TO-REGISTER-COMPANY-LIMITED-BY-SHARES-OR-GUARANTEE-OR-IS-UNLIMITED.pdf": "10_Forms_and_Precedents",
    "FORM-CR14-APPLICATION-FOR-RESERVATION-OF-A-COMPANY-NAME.pdf": "10_Forms_and_Precedents",
    "FORM-CR19-NOTICE-OF-SPECIAL-OR-ORDINARY-RESOLUTION-REQUIRED-BY-COMPANIES-ACT-TO-BE-LODGED-WITH-REGISTRAR.pdf": "10_Forms_and_Precedents",
    "FORM-CR2-MODEL-MEMORANDUM-FOR-A-COMPANY-WITH-SHARE-CAPITAL.pdf": "10_Forms_and_Precedents",
    "FORM-CR8-NOTICE-OF-RESIDENTIAL-ADDRESS-ORCHANGE-OF-ADDRESS-OF-DIRECTOR-OF-COMPANY.pdf": "10_Forms_and_Precedents",
    "Guidelines-to-completing-Form-CR-1.pdf": "10_Forms_and_Precedents",

    # MODULE 11: REVISION & COURSE MATERIALS
    "ATP 108  Commercial Transactions Course Outline 2021.pdf": "11_Revision_and_Course_Materials",
    "ATP 108 Commercial Transactions -Course Outline 2018.pdf": "11_Revision_and_Course_Materials",
    "ATP 108 Commercial Transactions 2013 (1).pdf": "11_Revision_and_Course_Materials",
    "ATP 108 Commercial Transactions Course Outline 2022 -2023 (2).pdf": "11_Revision_and_Course_Materials",
    "ATP 108 Commercial Transactions Course Outline 2022 -2023.pdf": "11_Revision_and_Course_Materials",
    "ATP 108 Commercial Transactions Course Outline 2023 -2024.pdf": "11_Revision_and_Course_Materials",
    "ATP 108 Commercial Transactions Nov_2014_1.PDF": "11_Revision_and_Course_Materials",
    "ATP 108 Course Outline 2022-2023 .docx": "11_Revision_and_Course_Materials",
    "ATP 108 Course Outline 2023 FINAL.docx": "11_Revision_and_Course_Materials",
    "ATP 108 COMMERCIAL TRANSACTIONS PROJECTWORK CLASSES B E AND F-2023- WAKIMANI.pdf": "11_Revision_and_Course_Materials",
    "Commercial Transactions - ATP Revision.pdf": "11_Revision_and_Course_Materials",
    "Commercial Transactions - ATP Revision-1.pdf": "11_Revision_and_Course_Materials",
    "MKO Commercial Quick Notes.pdf": "11_Revision_and_Course_Materials",
    "Marking Commercial transaction.docx": "11_Revision_and_Course_Materials",
    "Marking Commercial transaction(1).docx": "11_Revision_and_Course_Materials",
    "Marking Commercial transaction(2).docx": "11_Revision_and_Course_Materials",
    "KENYA_SCHOOL_OF.pdf": "11_Revision_and_Course_Materials",
    "commercial 2006.docx": "11_Revision_and_Course_Materials",
    "54420.pdf": "11_Revision_and_Course_Materials",
    "CT ASSIGNMENTS Class C 2018 pdf.pdf": "11_Revision_and_Course_Materials",
    "COMMERCIAL TRANSACTIONS ASSIGNMENT.docx": "11_Revision_and_Course_Materials",
    "Commercial Contracts.pdf": "11_Revision_and_Course_Materials"
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

def organize_files():
    print("--- Starting Organization for ATP 108 (Commercial Transactions) ---")
    
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
    confirm = input("Type 'YES' to organize ATP 108 notes: ")
    if confirm == "YES":
        organize_files()
        print("\nOrganization Complete.")
    else:
        print("Operation cancelled.")