# Git-Ignored Files Sync Setup Guide

Complete guide for syncing git-ignored files across computers using Cloudflare Tunnel.

## Overview

This system allows you to sync files that are in `.gitignore` (like PDFs, videos, large files) across multiple computers without using Git. It uses:

- **Sync Server**: HTTP server that serves your git-ignored files
- **Sync Client**: Downloads files from the server
- **Cloudflare Tunnel**: Secure connection without port forwarding

## Quick Start

### On the Source Computer (Server)

1. **Run the setup script:**
   ```bash
   ./setup-tunnel.sh
   ```
   Choose option 1 (Quick Tunnel) for easy setup.

2. **Start the server and tunnel:**
   ```bash
   ./start-sync-server.sh
   ```
   
3. **Copy the tunnel URL** that appears (e.g., `https://abc-def-123.trycloudflare.com`)

### On the Destination Computer (Client)

1. **Copy the sync files** to your repository:
   - `sync-client.py`
   - `sync-config.json`

2. **Update `sync-config.json`** with the tunnel URL:
   ```json
   {
     "server_url": "https://abc-def-123.trycloudflare.com"
   }
   ```

3. **Test the connection** (dry run):
   ```bash
   python3 sync-client.py --dry-run
   ```

4. **Sync the files:**
   ```bash
   python3 sync-client.py
   ```

## Detailed Setup

### Prerequisites

- Python 3.6 or higher
- Git repository with `.gitignore` file
- Internet connection

### Installing Cloudflare Tunnel

The `setup-tunnel.sh` script will install `cloudflared` automatically on Linux and macOS.

**Manual installation:**

- **Linux:**
  ```bash
  wget https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64.deb
  sudo dpkg -i cloudflared-linux-amd64.deb
  ```

- **macOS:**
  ```bash
  brew install cloudflared
  ```

- **Windows:**
  Download from: https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/installation/

### Server Setup Options

#### Option 1: Quick Tunnel (Recommended for Testing)

**Pros:**
- No Cloudflare account needed
- Very easy to set up
- Works immediately

**Cons:**
- URL changes each time you restart
- Temporary connection

**Setup:**
```bash
# Terminal 1: Start the sync server
python3 sync-server.py --port 8765

# Terminal 2: Start the tunnel
cloudflared tunnel --url http://localhost:8765
```

The tunnel URL will be displayed in Terminal 2. Copy it and share with client machines.

#### Option 2: Named Tunnel (Recommended for Regular Use)

**Pros:**
- Same URL every time
- Can use custom domain
- Persistent configuration

**Cons:**
- Requires Cloudflare account
- More setup steps

**Setup:**

1. **Login to Cloudflare:**
   ```bash
   cloudflared tunnel login
   ```

2. **Create a tunnel:**
   ```bash
   cloudflared tunnel create git-sync
   ```
   Note the tunnel ID that's displayed.

3. **Create config file** at `~/.cloudflared/config.yml`:
   ```yaml
   tunnel: YOUR-TUNNEL-ID
   credentials-file: /home/YOUR-USERNAME/.cloudflared/YOUR-TUNNEL-ID.json
   
   ingress:
     - hostname: sync.yourdomain.com
       service: http://localhost:8000
     - service: http_status:404
   ```

4. **Route DNS:**
   ```bash
   cloudflared tunnel route dns git-sync sync.yourdomain.com
   ```

5. **Run the tunnel:**
   ```bash
   cloudflared tunnel run git-sync
   ```

6. **Start the sync server** (in another terminal):
   ```bash
   python3 sync-server.py --port 8000
   ```

#### Option 3: Using Your Existing `fileserver-tunnel`

You already have a `fileserver-tunnel` service in your Docker setup. Since it uses `network_mode: "host"`, it can directly access the sync server running on your machine.

1. **Go to Cloudflare Zero Trust Dashboard:**
   - Navigate to **Access** > **Tunnels**
   - Find the tunnel with ID starting with `9de92064...` (from your token)
   - Click **Configure**

2. **Add a Public Hostname:**
   - **Subdomain:** `sync`
   - **Domain:** `yourdomain.com`
   - **Path:** (leave empty)
   - **Service:** `http://localhost:8765` (or whatever port you choose for the sync server)

3. **Start the Sync Server:**
   ```bash
   # In your project directory
   python3 sync-server.py --port 8765
   ```

4. **Update Client Config:**
   - In `sync-config.json` on the client machine, set:
     ```json
     "server_url": "https://sync.dspop.info"
     ```

#### Option 4: Dedicated Docker Tunnel (Recommended)

Add this service to your `docker-compose.yml`:

```yaml
  sync-files-tunnel:
    image: cloudflare/cloudflared:latest
    container_name: cf-sync-files-tunnel
    network_mode: "host"
    restart: unless-stopped
    command: tunnel --no-autoupdate run --token eyJhIjoiOGJkODAyNGIyNzc2MzJlZjMyYTgzN2MzNTJkYTQyMjkiLCJ0IjoiZDZjNmQ3ZGQtM2I1NS00YjJkLWFhODYtYmMzZDE0OGYyOWEzIiwicyI6IlkyUm1aV0V3WmpjdFpqZ3laaTAwT0RJNExUZ3lZV0l0WVRBeE1qZ3daRGcyTW1RMyJ9
```

1. **Start the Tunnel:**
   ```bash
   docker-compose up -d sync-files-tunnel
   ```

2. **Start the Sync Server:**
   ```bash
   python3 sync-server.py
   ```

3. **Configure Cloudflare:**
   - Go to Cloudflare Dashboard > Access > Tunnels
   - Find tunnel ID `d6c6d7dd-3b55-4b2d-aa86-bc3d148f29a3`
   - Add public hostname `sync.dspop.info` pointing to `http://localhost:8765`

### Client Setup

1. **Copy files to your repository:**
   ```bash
   # Copy these files to the same repository on the client machine
   sync-client.py
   sync-config.json
   ```

2. **Edit `sync-config.json`:**
   ```json
   {
     "server_url": "https://your-tunnel-url.trycloudflare.com",
     "repo_path": ".",
     "sync_options": {
       "verify_checksums": true,
       "skip_existing": true
     }
   }
   ```

3. **Install Python dependencies:**
   ```bash
   pip3 install requests
   ```

## Usage

### Server Commands

```bash
# Start server on default port (8000)
python3 sync-server.py

# Start server on custom port
python3 sync-server.py --port 9000

# Test mode - list git-ignored files without starting server
python3 sync-server.py --test

# Start server for specific repository
python3 sync-server.py --repo /path/to/repo
```

### Client Commands

```bash
# Dry run - see what would be synced
python3 sync-client.py --dry-run

# Sync all files
python3 sync-client.py

# Sync only PDF files
python3 sync-client.py --filter ".pdf"

# Sync first 10 files (for testing)
python3 sync-client.py --limit 10

# Use custom server URL
python3 sync-client.py --server https://custom-url.com

# Sync to different directory
python3 sync-client.py --repo /path/to/repo
```

## How It Works

1. **Server Detection:**
   - Server uses `git ls-files --ignored --exclude-standard --others` to find all git-ignored files
   - Creates a list with file paths, sizes, and checksums

2. **Client Connection:**
   - Client connects to server via Cloudflare Tunnel URL
   - Fetches the file list

3. **Smart Sync:**
   - Client checks if each file exists locally
   - Compares sizes and checksums
   - Only downloads files that are missing or different

4. **File Transfer:**
   - Files are downloaded via HTTP
   - Original folder structure is maintained
   - Progress is shown for each file

## Troubleshooting

### Server Issues

**Problem:** "Not a git repository"
```bash
# Solution: Make sure you're in a git repository
cd /path/to/your/repo
git status  # Should show git info
```

**Problem:** "Port already in use"
```bash
# Solution: Use a different port
python3 sync-server.py --port 9000
```

**Problem:** "No git-ignored files found"
```bash
# Solution: Check your .gitignore file
cat .gitignore

# Test git command directly
git ls-files --ignored --exclude-standard --others
```

### Client Issues

**Problem:** "No server URL specified"
```bash
# Solution: Update sync-config.json or use --server
python3 sync-client.py --server https://your-url.trycloudflare.com
```

**Problem:** "Connection refused"
```bash
# Solution: Make sure server is running and tunnel is active
# Check server terminal for errors
# Verify tunnel URL is correct
```

**Problem:** "Permission denied" when creating directories
```bash
# Solution: Make sure you have write permissions
ls -la  # Check permissions
# Or run from a directory where you have write access
```

### Tunnel Issues

**Problem:** Tunnel URL keeps changing
```bash
# Solution: Use a named tunnel instead of quick tunnel
# See "Option 2: Named Tunnel" above
```

**Problem:** "cloudflared: command not found"
```bash
# Solution: Install cloudflared
./setup-tunnel.sh
```

## Security Considerations

1. **Tunnel URL:** Anyone with the tunnel URL can access your files
   - Quick tunnels generate random URLs (harder to guess)
   - Keep the URL private
   - Use named tunnels with authentication for production

2. **File Access:** The server serves all git-ignored files
   - Review what's in your `.gitignore`
   - Don't expose sensitive files

3. **Network:** Cloudflare Tunnel provides encrypted connection
   - Traffic is encrypted end-to-end
   - No need to open firewall ports

## Advanced Usage

### Running Server as Background Service

**Using systemd (Linux):**

Create `/etc/systemd/system/git-sync-server.service`:
```ini
[Unit]
Description=Git Sync Server
After=network.target

[Service]
Type=simple
User=YOUR-USERNAME
WorkingDirectory=/path/to/repo
ExecStart=/usr/bin/python3 /path/to/repo/sync-server.py --port 8000
Restart=always

[Install]
WantedBy=multi-user.target
```

Enable and start:
```bash
sudo systemctl enable git-sync-server
sudo systemctl start git-sync-server
```

### Automating Sync

**Cron job to sync daily:**
```bash
# Edit crontab
crontab -e

# Add line to sync at 2 AM daily
0 2 * * * cd /path/to/repo && python3 sync-client.py >> sync.log 2>&1
```

### Filtering Files

You can modify `.gitignore` patterns to control what gets synced, or use client filters:

```bash
# Sync only PDFs
python3 sync-client.py --filter ".pdf"

# Sync only files in specific directory
python3 sync-client.py --filter "colleges/"
```

## Files Reference

- **`sync-server.py`** - HTTP server that serves git-ignored files
- **`sync-client.py`** - Client that downloads files
- **`sync-config.json`** - Configuration file
- **`setup-tunnel.sh`** - Setup script for Cloudflare Tunnel
- **`start-sync-server.sh`** - Helper script to start server and tunnel (auto-generated)

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Run in test mode: `python3 sync-server.py --test`
3. Use dry-run mode: `python3 sync-client.py --dry-run`
4. Check Cloudflare Tunnel docs: https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/
