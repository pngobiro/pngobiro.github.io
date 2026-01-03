
import os
import shutil
import hashlib

# ================= CONFIGURATION =================
# Update this path to your actual folder location
SOURCE_DIR = r"/home/ngobiro/projects/pngobiro.github.io/colleges/ksl/Advocates Training Program/ATP 103 - Legal Writing and Drafting/Notes"

# ================= SYSTEMATIC STUDY MAPPING =================
FILE_MAPPING = {
    # MODULE 1: FOUNDATIONS (Grammar, Style, Psychology)
    "Discussion 1-Introduction to legal writing.pdf": "01_Foundations_of_Writing",
    "Discussion 2-Effective writing.pdf": "01_Foundations_of_Writing",
    "KSL Legal Writing.pdf": "01_Foundations_of_Writing",
    "Language of Law.pptx": "01_Foundations_of_Writing",
    "Legal Writing in Plain English- Bryan Garner.pdf": "01_Foundations_of_Writing",
    "Contemporary Problems of the Language of Law.doc": "01_Foundations_of_Writing",
    "Effective paragraphs.pdf": "01_Foundations_of_Writing",
    "Topic Sentence-Potentially Brilliant Moments of Synthesis.pdf": "01_Foundations_of_Writing",
    "Topic sentences and Transitional words.pptx": "01_Foundations_of_Writing",
    "Students Handout 23 March 2009.doc": "01_Foundations_of_Writing",
    "final Legal Writing and Drafting-1.docx": "01_Foundations_of_Writing", # Psychology of writing

    # MODULE 2: ANALYSIS & RESEARCH (IRAC, Precedents)
    "Discussion 4-Legal analysis.pdf": "02_Legal_Analysis_and_Research",
    "Legal Analysis.pdf": "02_Legal_Analysis_and_Research",
    "Discussion11-Research & opinion writing.pdf": "02_Legal_Analysis_and_Research",
    "CASE BRIEF 2.docx": "02_Legal_Analysis_and_Research",
    "oscola_4th_edn_hart_2012quickreferenceguide.pdf": "02_Legal_Analysis_and_Research",
    "Copy of FIRM 29-LWD PROJECT.docx": "02_Legal_Analysis_and_Research", # Case brief analysis task
    "Legal Writing and Drafting Final copy-amended.docx": "02_Legal_Analysis_and_Research", # Case brief task

    # MODULE 3: CORRESPONDENCE (Letters)
    "Letter Writing skills .pptx": "03_Correspondence_and_Letters",
    "COB Letter 3.8.20 - Letter Writing.pdf": "03_Correspondence_and_Letters",
    "THE LETTER.docx": "03_Correspondence_and_Letters",
    "THE LETTER-MEMO.docx": "03_Correspondence_and_Letters",
    "VARIOUS LEGAL LETTERS.docx": "03_Correspondence_and_Letters",

    # MODULE 4: INTERNAL DOCUMENTS (Memos & Opinions)
    "OPINION_WRITTING.pdf": "04_Opinions_and_Memoranda",
    "Office Memoranda.docx": "04_Opinions_and_Memoranda",
    "Sample Memo.doc": "04_Opinions_and_Memoranda",
    "THE MEMO.docx": "04_Opinions_and_Memoranda",
    "Cabinet Memorandum on the Police Oversight Bill, 2008.docx": "04_Opinions_and_Memoranda",

    # MODULE 5: PLEADINGS & AFFIDAVITS (Court Documents)
    "Sample plaint.pdf": "05_Pleadings_and_Affidavits",
    "Sample defence.pdf": "05_Pleadings_and_Affidavits",
    "Sample application.pdf": "05_Pleadings_and_Affidavits",
    "Sample application2.pdf": "05_Pleadings_and_Affidavits",
    "Originating_Summons_1_of_2010.pdf": "05_Pleadings_and_Affidavits",
    "statutory declaration.docx": "05_Pleadings_and_Affidavits",
    "statutory declaration(1).docx": "05_Pleadings_and_Affidavits",
    "THE PROSECUTOR V. PAUL GICHERU AND PHILIP.PDF": "05_Pleadings_and_Affidavits", # Example of court decision/format

    # MODULE 6: TRANSACTIONAL DRAFTING (Contracts, Wills)
    "Commercial Contracts.pdf": "06_Transactional_Drafting",
    "Sample contract2.pdf": "06_Transactional_Drafting",
    "Sample will.pdf": "06_Transactional_Drafting",
    "public private contracts.docx": "06_Transactional_Drafting",
    "scp-force majeure&covid19-final-250720.pdf": "06_Transactional_Drafting",

    # MODULE 7: LEGISLATIVE DRAFTING (Bills, Regulations)
    "Introduction to Legislative Drafting (Term 3 discussion 1).pdf": "07_Legislative_Drafting",
    "Legislative process.pptx": "07_Legislative_Drafting",
    "KSL LEGISLATIVE DRAFTING NOTES klrc-a-guide-to-the-legislative-process-in-kenya (1).pdf": "07_Legislative_Drafting",
    "Change of Name Regulations .pdf": "07_Legislative_Drafting",

    # MODULE 8: REVISION & GENERAL (Past Papers, Outlines)
    "ATP 103 Legal writing and drafting 2015.pdf": "08_Revision_and_Past_Papers",
    "Copy of LEGAL WRITING AND DRAFTING  Q and A.pdf": "08_Revision_and_Past_Papers",
    "Legal Writing Outline.pdf": "08_Revision_and_Past_Papers",
    "Legal Writing Outline-2018.doc": "08_Revision_and_Past_Papers",
    "Legal Writing and Drafting - ATP Revision.pdf": "08_Revision_and_Past_Papers",
    "Legal Writing and Drafting Resources.pdf": "08_Revision_and_Past_Papers",
    "LEGAL_WRITING_AND_DRAFTING_2008_-_2011.pdf": "08_Revision_and_Past_Papers"
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
    print(f"--- Starting Organization for ATP 103 ---")
    
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
    confirm = input("Type 'YES' to organize ATP 103 notes: ")
    if confirm == "YES":
        organize_and_deduplicate()
        print("Organization Complete.")
    else:
        print("Cancelled.")
