import re
import os
import requests

MMD_FILE = 'combined_pastpapers.mmd'
IMAGES_DIR = 'assets/images'

def process_images():
    if not os.path.exists(IMAGES_DIR):
        os.makedirs(IMAGES_DIR)

    with open(MMD_FILE, 'r') as f:
        content = f.read()

    # Regex to find image links: ![](url)
    # Handles potential query parameters in URL
    image_pattern = re.compile(r'!\[(.*?)\]\((https?://[^\)]+)\)')
    
    matches = image_pattern.findall(content)
    
    if not matches:
        print("No images found.")
        return

    new_content = content
    
    print(f"Found {len(matches)} images.")
    
    for i, (alt_text, url) in enumerate(matches):
        try:
            # Clean URL for downloading (remove query params if they cause issues, 
            # but usually Mathpix URLs need them or are fine with them. 
            # For saving, we want a clean extension.)
            
            # Generate a unique local filename
            # We can use a simple counter or hash. Counter is easier for now.
            ext = 'jpg' # Default to jpg, or try to guess from url
            if '.png' in url: ext = 'png'
            elif '.jpeg' in url: ext = 'jpeg'
            
            local_filename = f"image_{i+1}.{ext}"
            local_path = os.path.join(IMAGES_DIR, local_filename)
            
            print(f"Downloading {url} to {local_path}...")
            
            response = requests.get(url)
            if response.status_code == 200:
                with open(local_path, 'wb') as img_file:
                    img_file.write(response.content)
                
                # Replace in content
                # We need to be careful to replace only this specific instance if there are duplicates,
                # but usually URLs are unique.
                # Construct the new link
                new_link = f'![{alt_text}]({local_path})'
                
                # We use replace with count=1 to ensure we process sequentially if needed, 
                # but since we iterate over matches, we might replace all occurrences of the same URL.
                # That's actually fine if the same image is used multiple times.
                
                # Escape the URL for regex replacement just in case, or just use string replace
                original_link = f'![{alt_text}]({url})'
                new_content = new_content.replace(original_link, new_link)
                
                print(f"Updated link to {local_path}")
            else:
                print(f"Failed to download {url}: Status {response.status_code}")
        except Exception as e:
            print(f"Error processing {url}: {e}")

    # Save updated MMD
    with open(MMD_FILE, 'w') as f:
        f.write(new_content)
    
    print("Finished processing images.")

if __name__ == "__main__":
    process_images()
