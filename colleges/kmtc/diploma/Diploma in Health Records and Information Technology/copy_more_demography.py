import os
import shutil

# --- Configuration ---

# Base path for the project
BASE_PROJECT_PATH = "/home/ngobiro/projects/pngobiro.github.io/colleges/kmtc/diploma/Diploma in Health Records and Information Technology/"

# Destination folders for notes and past papers
DEST_NOTES_FOLDER = os.path.join(BASE_PROJECT_PATH, "Year 1/Medical Demography/notes/")
DEST_PASTPAPERS_FOLDER = os.path.join(BASE_PROJECT_PATH, "Year 1/Medical Demography/pastpapers/")

# --- Files to Copy (Identified from folder_structure.json) ---

# Dictionary mapping source file paths to their destination subfolder
FILES_TO_COPY = {
    # Notes
    "/home/ngobiro/Documents/kmtc/CLINICAL MEDICINE AND SURGERY \ud83d\udc8a\ud83d\udc89/downloads/DEMOGRAPHY 1.docx": DEST_NOTES_FOLDER,
    "/home/ngobiro/Documents/kmtc/Nursing pastpapers/downloads/VITAL STATISTICS.docx": DEST_NOTES_FOLDER,
    "/home/ngobiro/Documents/kmtc/Nursing pastpapers/downloads/EPIDEMIOLOGY.docx": DEST_NOTES_FOLDER,
    "/home/ngobiro/Documents/kmtc/Nursing pastpapers/downloads/vital statistics.docx": DEST_NOTES_FOLDER,
    "/home/ngobiro/Documents/kmtc/Nursing pastpapers/downloads/EPIDERMIOLOGY.docx": DEST_NOTES_FOLDER, # Likely a typo for Epidemiology

    # Past Papers
    "/home/ngobiro/Documents/kmtc/Nursing pastpapers/downloads/VITAL STATISTICS  SUPP JUNE 17.doc": DEST_PASTPAPERS_FOLDER,
    "/home/ngobiro/Documents/kmtc/Nursing pastpapers/downloads/END OF SECOND BLOCK - VITAL STATISTICS.docx": DEST_PASTPAPERS_FOLDER,
    "/home/ngobiro/Documents/kmtc/Nursing pastpapers/downloads/END OF YEAR 3 SEMESTER 1 -epidemiology.docx": DEST_PASTPAPERS_FOLDER
}

# --- Main Script Logic ---

def copy_additional_files():
    """
    Copies a predefined list of files to their respective subfolders.
    """
    print("Starting the file copy process for Medical Demography...")

    # Create destination directories if they don't exist
    for folder in [DEST_NOTES_FOLDER, DEST_PASTPAPERS_FOLDER]:
        try:
            os.makedirs(folder, exist_ok=True)
            print(f"Directory ensured: {folder}")
        except OSError as e:
            print(f"[!] ERROR: Could not create directory {folder}. Reason: {e}")
            return

    # --- Copying Files ---
    copied_count = 0
    skipped_count = 0
    not_found_count = 0

    print("\nAttempting to copy identified files...")
    for src_path, dest_folder in FILES_TO_COPY.items():
        if not os.path.exists(src_path):
            print(f"  [!] WARNING: Source file not found, skipping: {os.path.basename(src_path)}")
            not_found_count += 1
            continue

        file_name = os.path.basename(src_path)
        dest_path = os.path.join(dest_folder, file_name)

        if os.path.exists(dest_path):
            print(f"  [*] SKIPPED: File already exists in destination: {file_name}")
            skipped_count += 1
            continue

        try:
            shutil.copy(src_path, dest_path)
            print(f"  [+] SUCCESS: Copied '{file_name}' to {os.path.basename(dest_folder)}/")
            copied_count += 1
        except Exception as e:
            print(f"  [!] ERROR: Failed to copy {file_name}. Reason: {e}")

    print("\n-------------------------------------")
    print("File copy process completed.")
    print(f"Successfully copied: {copied_count} new file(s).")
    print(f"Skipped (already exist): {skipped_count} file(s).")
    print(f"Not found: {not_found_count} file(s).")
    print("-------------------------------------")


if __name__ == "__main__":
    copy_additional_files()