import os
import re
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
from googleapiclient.http import MediaFileUpload

# --- CONFIGURATION ---
DRIVE_ROOT_FOLDER_NAME = "GitHub PDF Archive"
FOLDERS_TO_SCAN = ["cbc", "colleges"]
CREDENTIALS_FILENAME = "client_secret_640314321701-1r57ln38jedob9djou9di54e9oquao94.apps.googleusercontent.com.json" # Your credentials file
SCOPES = ["https://www.googleapis.com/auth/drive"]
# --- END CONFIGURATION ---

LOCAL_REPO_PATH = os.getcwd()

def authenticate_google_drive():
    """Performs authentication and returns a Google Drive service object."""
    creds = None
    if os.path.exists("token.json"):
        creds = Credentials.from_authorized_user_file("token.json", SCOPES)
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(CREDENTIALS_FILENAME, SCOPES)
            creds = flow.run_local_server(port=0)
        with open("token.json", "w") as token:
            token.write(creds.to_json())
    try:
        return build("drive", "v3", credentials=creds)
    except HttpError as error:
        print(f"An error occurred: {error}")
        return None

def find_or_create_folder(service, parent_id, folder_name):
    """Finds a folder by name under a parent, creates it if not found."""
    query = f"name = '{folder_name}' and mimeType = 'application/vnd.google-apps.folder' and '{parent_id}' in parents and trashed = false"
    response = service.files().list(q=query, spaces='drive', fields='files(id, name)').execute()
    files = response.get('files', [])
    if files:
        return files[0].get('id')
    else:
        print(f"Creating Drive folder: {folder_name}")
        file_metadata = {'name': folder_name, 'mimeType': 'application/vnd.google-apps.folder', 'parents': [parent_id]}
        folder = service.files().create(body=file_metadata, fields='id').execute()
        return folder.get('id')

def archive_pdf_and_create_link(service, local_file_path, drive_parent_id):
    """
    Uploads a PDF, creates a local .link file with the shareable URL, 
    and deletes the original PDF on success.
    """
    file_name = os.path.basename(local_file_path)
    print(f"\nProcessing '{file_name}'...")
    
    # Define the new .link filename
    # This handles both .pdf and .PDF extensions gracefully
    link_filename = re.sub(r'\.pdf$', '.pdf.link', local_file_path, flags=re.IGNORECASE)

    try:
        # --- Step 1: Upload the file ---
        print(f"  Uploading...")
        file_metadata = {'name': file_name, 'parents': [drive_parent_id]}
        media = MediaFileUpload(local_file_path, mimetype='application/pdf', resumable=True)
        uploaded_file = service.files().create(body=file_metadata, media_body=media, fields='id').execute()
        file_id = uploaded_file.get('id')
        if not file_id:
            raise Exception("Upload failed, did not receive a file ID.")
        print(f"  -> Upload successful (File ID: {file_id})")

        # --- Step 2: Set public read permission ---
        print(f"  Setting public permissions...")
        permission = {'type': 'anyone', 'role': 'reader'}
        service.permissions().create(fileId=file_id, body=permission).execute()
        print(f"  -> Permissions set")

        # --- Step 3: Get the public web link ---
        print(f"  Fetching shareable link...")
        file_with_link = service.files().get(fileId=file_id, fields='webViewLink').execute()
        share_link = file_with_link.get('webViewLink')
        if not share_link:
            raise Exception("Could not retrieve a shareable link for the file.")
        print(f"  -> Link found: {share_link}")

        # --- Step 4: Write the .link file locally ---
        print(f"  Creating local link file: {os.path.basename(link_filename)}")
        with open(link_filename, 'w') as f:
            f.write(share_link)

        # --- Step 5: Delete the original PDF file ---
        print(f"  Deleting original local PDF...")
        os.remove(local_file_path)
        print(f"  -> Move complete for '{file_name}'")

    except Exception as e:
        print(f"!!! AN ERROR OCCURRED for '{file_name}': {e}")
        print("!!! The original file was NOT deleted. No .link file was created.")


def main():
    service = authenticate_google_drive()
    if not service:
        print("Could not authenticate with Google Drive. Exiting.")
        return

    drive_root_id = find_or_create_folder(service, 'root', DRIVE_ROOT_FOLDER_NAME)

    for folder_to_scan in FOLDERS_TO_SCAN:
        local_start_path = os.path.join(LOCAL_REPO_PATH, folder_to_scan)
        if not os.path.isdir(local_start_path):
            print(f"Warning: Local folder '{folder_to_scan}' not found. Skipping.")
            continue
        
        for dirpath, _, filenames in os.walk(local_start_path):
            for filename in filenames:
                if filename.lower().endswith('.pdf'):
                    full_local_path = os.path.join(dirpath, filename)
                    relative_dir = os.path.relpath(dirpath, LOCAL_REPO_PATH)
                    path_parts = relative_dir.split(os.sep)
                    
                    current_drive_parent_id = drive_root_id
                    for part in path_parts:
                        current_drive_parent_id = find_or_create_folder(service, current_drive_parent_id, part)
                    
                    archive_pdf_and_create_link(service, full_local_path, current_drive_parent_id)
    
    print("\nAll PDF archiving complete.")

if __name__ == "__main__":
    main()
