#!/usr/bin/env python3
"""
Git-Ignored Files Sync Client
Downloads git-ignored files from sync server via Cloudflare Tunnel
"""

import os
import sys
import json
import hashlib
import argparse
import requests
from pathlib import Path
from urllib.parse import urljoin, quote
from datetime import datetime


class SyncClient:
    """Client for syncing git-ignored files"""
    
    def __init__(self, server_url, repo_path, config=None):
        self.server_url = server_url.rstrip('/')
        self.repo_path = os.path.abspath(repo_path)
        self.config = config or {}
        self.stats = {
            'downloaded': 0,
            'skipped': 0,
            'failed': 0,
            'bytes_downloaded': 0
        }
    
    def get_file_list(self):
        """Fetch list of files from server"""
        try:
            url = f"{self.server_url}/api/files"
            print(f"Fetching file list from {url}...")
            
            response = requests.get(url, timeout=30)
            response.raise_for_status()
            
            data = response.json()
            return data['files']
            
        except requests.RequestException as e:
            print(f"Error fetching file list: {e}")
            sys.exit(1)
    
    def get_server_stats(self):
        """Fetch statistics from server"""
        try:
            url = f"{self.server_url}/api/stats"
            response = requests.get(url, timeout=30)
            response.raise_for_status()
            return response.json()
        except requests.RequestException as e:
            print(f"Error fetching stats: {e}")
            return None
    
    def download_file(self, file_info, dry_run=False):
        """Download a single file"""
        file_path = file_info['path']
        remote_size = file_info['size']
        remote_checksum = file_info.get('checksum')
        
        local_path = os.path.join(self.repo_path, file_path)
        
        # Check if file exists and is up to date
        if os.path.exists(local_path):
            local_size = os.path.getsize(local_path)
            
            # If sizes match, check checksum
            if local_size == remote_size:
                if remote_checksum:
                    local_checksum = self.get_file_checksum(local_path)
                    if local_checksum == remote_checksum:
                        print(f"  ✓ Skip (up to date): {file_path}")
                        self.stats['skipped'] += 1
                        return True
        
        # Download file
        try:
            if dry_run:
                print(f"  → Would download: {file_path} ({self.format_size(remote_size)})")
                self.stats['downloaded'] += 1
                self.stats['bytes_downloaded'] += remote_size
                return True
            
            # Create directory if needed
            os.makedirs(os.path.dirname(local_path), exist_ok=True)
            
            # Download
            url = f"{self.server_url}/api/download?path={quote(file_path)}"
            print(f"  ↓ Downloading: {file_path} ({self.format_size(remote_size)})")
            
            response = requests.get(url, stream=True, timeout=60)
            response.raise_for_status()
            
            # Write to file with progress
            downloaded = 0
            with open(local_path, 'wb') as f:
                for chunk in response.iter_content(chunk_size=1024*1024):  # 1MB chunks
                    if chunk:
                        f.write(chunk)
                        downloaded += len(chunk)
            
            # Verify size
            actual_size = os.path.getsize(local_path)
            if actual_size != remote_size:
                print(f"  ✗ Size mismatch: expected {remote_size}, got {actual_size}")
                self.stats['failed'] += 1
                return False
            
            print(f"  ✓ Downloaded: {file_path}")
            self.stats['downloaded'] += 1
            self.stats['bytes_downloaded'] += remote_size
            return True
            
        except Exception as e:
            print(f"  ✗ Error downloading {file_path}: {e}")
            self.stats['failed'] += 1
            return False
    
    def sync(self, dry_run=False, file_filter=None, limit=None):
        """Sync all files from server"""
        print(f"\n{'='*60}")
        print(f"Git-Ignored Files Sync Client")
        print(f"{'='*60}")
        print(f"Server: {self.server_url}")
        print(f"Local repo: {self.repo_path}")
        print(f"Mode: {'DRY RUN' if dry_run else 'SYNC'}")
        print(f"{'='*60}\n")
        
        # Get server stats
        server_stats = self.get_server_stats()
        if server_stats:
            print(f"Server has {server_stats['total_files']} files "
                  f"({server_stats['total_size_gb']:.2f} GB)\n")
        
        # Get file list
        files = self.get_file_list()
        print(f"Found {len(files)} files to sync\n")
        
        # Apply filter if specified
        if file_filter:
            original_count = len(files)
            files = [f for f in files if file_filter in f['path']]
            print(f"Filter '{file_filter}' matched {len(files)}/{original_count} files\n")
        
        # Apply limit if specified
        if limit and limit < len(files):
            print(f"Limiting to first {limit} files\n")
            files = files[:limit]
        
        if not files:
            print("No files to sync.")
            return
        
        # Sync files
        print("Starting sync...\n")
        for i, file_info in enumerate(files, 1):
            print(f"[{i}/{len(files)}]", end=" ")
            self.download_file(file_info, dry_run)
        
        # Print summary
        print(f"\n{'='*60}")
        print("Sync Summary")
        print(f"{'='*60}")
        print(f"Downloaded: {self.stats['downloaded']} files "
              f"({self.format_size(self.stats['bytes_downloaded'])})")
        print(f"Skipped:    {self.stats['skipped']} files (already up to date)")
        print(f"Failed:     {self.stats['failed']} files")
        print(f"{'='*60}\n")
        
        if dry_run:
            print("This was a DRY RUN. No files were actually downloaded.")
            print("Run without --dry-run to perform actual sync.\n")
    
    @staticmethod
    def get_file_checksum(file_path, algorithm='md5'):
        """Calculate checksum of a file"""
        hash_obj = hashlib.new(algorithm)
        
        with open(file_path, 'rb') as f:
            chunk_size = 1024 * 1024  # 1MB chunks
            while True:
                chunk = f.read(chunk_size)
                if not chunk:
                    break
                hash_obj.update(chunk)
        
        return hash_obj.hexdigest()
    
    @staticmethod
    def format_size(bytes_size):
        """Format bytes as human-readable size"""
        for unit in ['B', 'KB', 'MB', 'GB', 'TB']:
            if bytes_size < 1024.0:
                return f"{bytes_size:.2f} {unit}"
            bytes_size /= 1024.0
        return f"{bytes_size:.2f} PB"


def load_config(config_path):
    """Load configuration from JSON file"""
    if not os.path.exists(config_path):
        return None
    
    try:
        with open(config_path, 'r') as f:
            return json.load(f)
    except Exception as e:
        print(f"Error loading config: {e}")
        return None


def main():
    parser = argparse.ArgumentParser(
        description='Git-Ignored Files Sync Client',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  # Dry run to see what would be synced
  python sync-client.py --dry-run
  
  # Sync all files
  python sync-client.py
  
  # Sync only PDF files
  python sync-client.py --filter "*.pdf"
  
  # Sync first 10 files (for testing)
  python sync-client.py --limit 10
  
  # Use custom server URL
  python sync-client.py --server https://your-tunnel.trycloudflare.com
        """
    )
    
    parser.add_argument(
        '--server',
        help='Server URL (overrides config file)'
    )
    
    parser.add_argument(
        '--repo',
        default='.',
        help='Path to local git repository (default: current directory)'
    )
    
    parser.add_argument(
        '--config',
        default='sync-config.json',
        help='Path to config file (default: sync-config.json)'
    )
    
    parser.add_argument(
        '--dry-run',
        action='store_true',
        help='Show what would be synced without downloading'
    )
    
    parser.add_argument(
        '--filter',
        help='Only sync files matching this pattern'
    )
    
    parser.add_argument(
        '--limit',
        type=int,
        help='Limit number of files to sync (for testing)'
    )
    
    args = parser.parse_args()
    
    # Load config
    config = load_config(args.config)
    
    # Determine server URL
    server_url = args.server
    if not server_url and config:
        server_url = config.get('server_url')
    
    if not server_url:
        print("Error: No server URL specified.")
        print("Either:")
        print("  1. Create sync-config.json with 'server_url' field")
        print("  2. Use --server argument")
        sys.exit(1)
    
    # Create client and sync
    client = SyncClient(server_url, args.repo, config)
    client.sync(
        dry_run=args.dry_run,
        file_filter=args.filter,
        limit=args.limit
    )


if __name__ == '__main__':
    main()
