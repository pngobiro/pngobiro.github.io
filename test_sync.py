import subprocess
import time
import sys
import os
import signal

def run_test():
    print("Starting sync server...")
    server_process = subprocess.Popen(
        [sys.executable, "sync-server.py", "--port", "8001"],
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE
    )
    
    # Wait for server to start
    time.sleep(2)
    
    print("Running sync client (dry run)...")
    try:
        result = subprocess.run(
            [
                sys.executable, "sync-client.py", 
                "--server", "http://localhost:8001",
                "--dry-run",
                "--limit", "5"
            ],
            capture_output=True,
            text=True,
            timeout=10
        )
        
        print("\nClient Output:")
        print(result.stdout)
        
        if result.returncode != 0:
            print("\nClient Error:")
            print(result.stderr)
            return False
            
        return True
        
    finally:
        print("\nStopping server...")
        server_process.terminate()
        server_process.wait()

if __name__ == "__main__":
    success = run_test()
    sys.exit(0 if success else 1)
