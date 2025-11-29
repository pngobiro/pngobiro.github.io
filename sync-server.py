#!/usr/bin/env python3
"""
Git-Ignored Files Sync Server
Serves git-ignored files via HTTP for syncing across computers
"""

import os
import sys
import json
import hashlib
import mimetypes
from pathlib import Path
from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.parse import urlparse, parse_qs
import subprocess
import argparse


class SyncServerHandler(BaseHTTPRequestHandler):
    """HTTP request handler for serving git-ignored files"""
    
    def log_message(self, format, *args):
        """Custom logging"""
        print(f"[{self.log_date_time_string()}] {format % args}")
    
    def do_GET(self):
        """Handle GET requests"""
        parsed_path = urlparse(self.path)
        path = parsed_path.path
        
        if path == '/':
            self.send_response(200)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            self.wfile.write(b"""
            <html>
            <head><title>Git-Ignored Files Sync Server</title></head>
            <body>
                <h1>Git-Ignored Files Sync Server</h1>
                <p>Available endpoints:</p>
                <ul>
                    <li><a href="/api/files">/api/files</a> - List all git-ignored files</li>
                    <li>/api/download?path=... - Download a specific file</li>
                    <li>/api/stats - Get sync statistics</li>
                </ul>
            </body>
            </html>
            """)
            
        elif path == '/api/files':
            self.serve_file_list()
            
        elif path == '/api/download':
            query = parse_qs(parsed_path.query)
            if 'path' in query:
                file_path = query['path'][0]
                self.serve_file(file_path)
            else:
                self.send_error(400, "Missing 'path' parameter")
                
        elif path == '/api/stats':
            self.serve_stats()
            
        else:
            self.send_error(404, "Endpoint not found")
    
    def serve_file_list(self):
        """Serve list of all git-ignored files"""
        try:
            repo_path = self.server.repo_path
            files = get_gitignored_files(repo_path)
            
            # Build file list with metadata
            file_list = []
            for file_path in files:
                full_path = os.path.join(repo_path, file_path)
                if os.path.exists(full_path):
                    stat = os.stat(full_path)
                    file_list.append({
                        'path': file_path,
                        'size': stat.st_size,
                        'mtime': stat.st_mtime,
                        'checksum': get_file_checksum(full_path)
                    })
            
            response = {
                'total_files': len(file_list),
                'files': file_list
            }
            
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps(response, indent=2).encode())
            
        except Exception as e:
            self.send_error(500, f"Error listing files: {str(e)}")
    
    def serve_file(self, file_path):
        """Serve a specific file for download"""
        try:
            repo_path = self.server.repo_path
            full_path = os.path.join(repo_path, file_path)
            
            # Security check: ensure path is within repo
            full_path = os.path.abspath(full_path)
            repo_path = os.path.abspath(repo_path)
            if not full_path.startswith(repo_path):
                self.send_error(403, "Access denied")
                return
            
            if not os.path.exists(full_path):
                self.send_error(404, "File not found")
                return
            
            # Determine content type
            content_type, _ = mimetypes.guess_type(full_path)
            if content_type is None:
                content_type = 'application/octet-stream'
            
            # Send file
            file_size = os.path.getsize(full_path)
            self.send_response(200)
            self.send_header('Content-type', content_type)
            self.send_header('Content-Length', str(file_size))
            self.send_header('Content-Disposition', f'attachment; filename="{os.path.basename(file_path)}"')
            self.end_headers()
            
            with open(full_path, 'rb') as f:
                chunk_size = 1024 * 1024  # 1MB chunks
                while True:
                    chunk = f.read(chunk_size)
                    if not chunk:
                        break
                    self.wfile.write(chunk)
                    
        except Exception as e:
            self.send_error(500, f"Error serving file: {str(e)}")
    
    def serve_stats(self):
        """Serve statistics about git-ignored files"""
        try:
            repo_path = self.server.repo_path
            files = get_gitignored_files(repo_path)
            
            total_size = 0
            file_types = {}
            
            for file_path in files:
                full_path = os.path.join(repo_path, file_path)
                if os.path.exists(full_path):
                    size = os.path.getsize(full_path)
                    total_size += size
                    
                    ext = os.path.splitext(file_path)[1].lower()
                    if ext:
                        file_types[ext] = file_types.get(ext, 0) + 1
            
            stats = {
                'total_files': len(files),
                'total_size_bytes': total_size,
                'total_size_mb': round(total_size / (1024 * 1024), 2),
                'total_size_gb': round(total_size / (1024 * 1024 * 1024), 2),
                'file_types': file_types
            }
            
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps(stats, indent=2).encode())
            
        except Exception as e:
            self.send_error(500, f"Error getting stats: {str(e)}")


def get_gitignored_files(repo_path):
    """Get list of all git-ignored files in the repository"""
    try:
        # Use git ls-files to find ignored files that exist
        result = subprocess.run(
            ['git', 'ls-files', '--ignored', '--exclude-standard', '--others'],
            cwd=repo_path,
            capture_output=True,
            text=True,
            check=True
        )
        
        files = [f.strip() for f in result.stdout.split('\n') if f.strip()]
        return files
        
    except subprocess.CalledProcessError as e:
        print(f"Error running git command: {e}")
        return []


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


def run_server(repo_path, port=8000, host='0.0.0.0'):
    """Start the sync server"""
    # Verify it's a git repository
    if not os.path.exists(os.path.join(repo_path, '.git')):
        print(f"Error: {repo_path} is not a git repository")
        sys.exit(1)
    
    # Create custom server class to pass repo_path
    class CustomHTTPServer(HTTPServer):
        def __init__(self, *args, **kwargs):
            self.repo_path = repo_path
            super().__init__(*args, **kwargs)
    
    server = CustomHTTPServer((host, port), SyncServerHandler)
    
    print(f"Starting Git-Ignored Files Sync Server")
    print(f"Repository: {repo_path}")
    print(f"Server running at http://{host}:{port}")
    print(f"Press Ctrl+C to stop")
    print()
    
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down server...")
        server.shutdown()


def main():
    parser = argparse.ArgumentParser(
        description='Git-Ignored Files Sync Server',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  # Start server in current directory
  python sync-server.py
  
  # Start server on specific port
  python sync-server.py --port 9000
  
  # Start server for specific repository
  python sync-server.py --repo /path/to/repo
  
  # Test mode - just list files
  python sync-server.py --test
        """
    )
    
    parser.add_argument(
        '--repo',
        default='.',
        help='Path to git repository (default: current directory)'
    )
    
    parser.add_argument(
        '--port',
        type=int,
        default=8765,
        help='Port to run server on (default: 8765)'
    )
    
    parser.add_argument(
        '--host',
        default='0.0.0.0',
        help='Host to bind to (default: 0.0.0.0)'
    )
    
    parser.add_argument(
        '--test',
        action='store_true',
        help='Test mode - list git-ignored files and exit'
    )
    
    args = parser.parse_args()
    
    repo_path = os.path.abspath(args.repo)
    
    if args.test:
        print(f"Testing git-ignored files detection in: {repo_path}\n")
        files = get_gitignored_files(repo_path)
        
        if not files:
            print("No git-ignored files found.")
        else:
            print(f"Found {len(files)} git-ignored files:\n")
            for i, file_path in enumerate(files[:20], 1):  # Show first 20
                full_path = os.path.join(repo_path, file_path)
                if os.path.exists(full_path):
                    size = os.path.getsize(full_path)
                    size_mb = size / (1024 * 1024)
                    print(f"{i:3d}. {file_path} ({size_mb:.2f} MB)")
            
            if len(files) > 20:
                print(f"\n... and {len(files) - 20} more files")
            
            # Show total size
            total_size = sum(
                os.path.getsize(os.path.join(repo_path, f))
                for f in files
                if os.path.exists(os.path.join(repo_path, f))
            )
            total_gb = total_size / (1024 * 1024 * 1024)
            print(f"\nTotal size: {total_gb:.2f} GB")
    else:
        run_server(repo_path, args.port, args.host)


if __name__ == '__main__':
    main()
