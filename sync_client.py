import os
import sys
import argparse
import requests
import hashlib
from pathlib import Path
from gitignore_parser import parse_gitignore

# Configuration Defaults
DEFAULT_SERVER_URL = "https://sync.dspop.info"
DEFAULT_SECRET_TOKEN = "your-secret-token-here"

def get_file_hash(filepath):
    """Calculate MD5 hash of a file."""
    return hashlib.md5(open(filepath, 'rb').read()).hexdigest()

def get_ignored_files(root_dir):
    """Find all git-ignored files in the directory."""
    ignored_files = []
    gitignore_path = os.path.join(root_dir, ".gitignore")
    
    if not os.path.exists(gitignore_path):
        print(f"Warning: No .gitignore found in {root_dir}")
        return []

    matches = parse_gitignore(gitignore_path)
    
    for root, dirs, files in os.walk(root_dir):
        # Skip .git directory
        if '.git' in dirs:
            dirs.remove('.git')
            
        for file in files:
            full_path = os.path.join(root, file)
            rel_path = os.path.relpath(full_path, root_dir)
            
            # Check if file is ignored
            if matches(full_path):
                ignored_files.append(rel_path)
                
    return ignored_files

def push(args):
    """Upload ignored files to server."""
    print(f"Pushing ignored files from {args.target_dir}...")
    
    # Get server state
    try:
        response = requests.get(
            f"{args.url}/list",
            headers={"Authorization": f"Bearer {args.token}"}
        )
        response.raise_for_status()
        server_files = response.json()
    except Exception as e:
        print(f"Error connecting to server: {e}")
        return

    ignored_files = get_ignored_files(args.target_dir)
    
    for rel_path in ignored_files:
        full_path = os.path.join(args.target_dir, rel_path)
        local_hash = get_file_hash(full_path)
        
        # Check if upload is needed
        if rel_path in server_files:
            if server_files[rel_path]['hash'] == local_hash:
                print(f"Skipping {rel_path} (unchanged)")
                continue
                
        print(f"Uploading {rel_path}...")
        try:
            with open(full_path, 'rb') as f:
                files = {'file': f}
                data = {'path': rel_path}
                resp = requests.post(
                    f"{args.url}/upload",
                    headers={"Authorization": f"Bearer {args.token}"},
                    files=files,
                    data=data
                )
                resp.raise_for_status()
        except Exception as e:
            print(f"Failed to upload {rel_path}: {e}")

def pull(args):
    """Download files from server."""
    print(f"Pulling files to {args.target_dir}...")
    
    try:
        response = requests.get(
            f"{args.url}/list",
            headers={"Authorization": f"Bearer {args.token}"}
        )
        response.raise_for_status()
        server_files = response.json()
    except Exception as e:
        print(f"Error connecting to server: {e}")
        return

    # Sort by modified time (most recent first) if available, otherwise by path
    def get_sort_key(item):
        rel_path, metadata = item
        # Try to get modified time from metadata, default to 0 if not available
        return -metadata.get('modified', metadata.get('mtime', 0))
    
    sorted_files = sorted(server_files.items(), key=get_sort_key)
    
    skipped = 0
    downloaded = 0
    
    for rel_path, metadata in sorted_files:
        full_path = os.path.join(args.target_dir, rel_path)
        
        # Skip if file already exists (regardless of hash)
        if os.path.exists(full_path):
            skipped += 1
            if args.verbose:
                print(f"Skipping {rel_path} (exists)")
            continue
        
        print(f"Downloading {rel_path}...")
        try:
            resp = requests.get(
                f"{args.url}/download/{rel_path}",
                headers={"Authorization": f"Bearer {args.token}"}
            )
            resp.raise_for_status()
            
            os.makedirs(os.path.dirname(full_path), exist_ok=True)
            with open(full_path, 'wb') as f:
                f.write(resp.content)
            downloaded += 1
        except Exception as e:
            print(f"Failed to download {rel_path}: {e}")
    
    print(f"\nDone: {downloaded} downloaded, {skipped} skipped (already exist)")

def main():
    parser = argparse.ArgumentParser(description="Sync git-ignored files")
    parser.add_argument('action', nargs='?', default='sync', choices=['push', 'pull', 'sync'], help="Action to perform (default: sync)")
    parser.add_argument('--target-dir', default=None, help="Directory to sync (default: script location)")
    parser.add_argument('--url', default=DEFAULT_SERVER_URL, help="Server URL")
    parser.add_argument('--token', default=DEFAULT_SECRET_TOKEN, help="Secret token")
    parser.add_argument('-v', '--verbose', action='store_true', help="Show skipped files")
    
    args = parser.parse_args()
    
    # Expand target dir
    if args.target_dir is None:
        args.target_dir = os.path.dirname(os.path.abspath(__file__))
    else:
        args.target_dir = os.path.abspath(os.path.expanduser(args.target_dir))
    
    if not os.path.exists(args.target_dir):
        print(f"Error: Target directory {args.target_dir} does not exist")
        sys.exit(1)

    if args.action == 'push':
        push(args)
    elif args.action == 'pull':
        pull(args)
    elif args.action == 'sync':
        push(args)
        pull(args)

if __name__ == "__main__":
    main()
