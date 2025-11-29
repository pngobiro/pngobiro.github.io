import socket
import requests
import sys
import time
import subprocess
import json

def log(msg):
    with open("diagnose.log", "a") as f:
        f.write(msg + "\n")

def check_dns(hostname):
    try:
        ip = socket.gethostbyname(hostname)
        log(f"DNS: {hostname} -> {ip}")
        return True
    except socket.gaierror:
        log(f"DNS: {hostname} resolution failed")
        return False

def check_local_server(port):
    try:
        response = requests.get(f"http://localhost:{port}/api/stats", timeout=2)
        log(f"Local Server: Running on port {port}")
        log(f"Response: {json.dumps(response.json())}")
        return True
    except Exception as e:
        log(f"Local Server: Failed to connect to port {port}: {e}")
        return False

def check_public_url(url):
    try:
        response = requests.get(f"{url}/api/stats", timeout=5)
        log(f"Public URL: {url} is reachable")
        log(f"Response: {json.dumps(response.json())}")
        return True
    except Exception as e:
        log(f"Public URL: Failed to connect to {url}: {e}")
        return False

if __name__ == "__main__":
    with open("diagnose.log", "w") as f:
        f.write("--- DIAGNOSTICS ---\n")
    
    # Start server in background
    log("Starting server...")
    server = subprocess.Popen([sys.executable, "sync-server.py", "--port", "8765"], 
                            stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    time.sleep(2)
    
    check_local_server(8765)
    
    dns_ok = check_dns("sync.dspop.info")
    
    if dns_ok:
        check_public_url("https://sync.dspop.info")
    
    log("Stopping server...")
    server.terminate()
