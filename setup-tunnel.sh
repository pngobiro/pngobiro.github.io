#!/bin/bash
# Cloudflare Tunnel Setup Script
# This script helps you set up a Cloudflare Tunnel for syncing git-ignored files

set -e

echo "======================================"
echo "Cloudflare Tunnel Setup for File Sync"
echo "======================================"
echo ""

# Check if cloudflared is installed
if ! command -v cloudflared &> /dev/null; then
    echo "cloudflared is not installed. Installing..."
    echo ""
    
    # Detect OS
    if [[ "$OSTYPE" == "linux-gnu"* ]]; then
        echo "Detected Linux. Installing cloudflared..."
        
        # Download and install
        wget -q https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64.deb
        sudo dpkg -i cloudflared-linux-amd64.deb
        rm cloudflared-linux-amd64.deb
        
    elif [[ "$OSTYPE" == "darwin"* ]]; then
        echo "Detected macOS. Installing cloudflared via Homebrew..."
        
        if ! command -v brew &> /dev/null; then
            echo "Error: Homebrew is not installed. Please install Homebrew first:"
            echo "  /bin/bash -c \"\$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)\""
            exit 1
        fi
        
        brew install cloudflared
        
    else
        echo "Unsupported OS: $OSTYPE"
        echo "Please install cloudflared manually from:"
        echo "  https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/installation/"
        exit 1
    fi
    
    echo "✓ cloudflared installed successfully"
    echo ""
else
    echo "✓ cloudflared is already installed"
    echo ""
fi

# Check cloudflared version
echo "cloudflared version:"
cloudflared --version
echo ""

# Determine repository path
REPO_PATH="${1:-.}"
REPO_PATH=$(cd "$REPO_PATH" && pwd)

echo "Repository path: $REPO_PATH"
echo ""

# Check if it's a git repository
if [ ! -d "$REPO_PATH/.git" ]; then
    echo "Error: $REPO_PATH is not a git repository"
    exit 1
fi

# Ask for port
read -p "Enter port for sync server (default: 8765): " PORT
PORT=${PORT:-8765}

echo ""
echo "======================================"
echo "Setting up Cloudflare Tunnel"
echo "======================================"
echo ""
echo "You have two options:"
echo ""
echo "1. Quick Tunnel (Temporary, no login required)"
echo "   - Easy to set up"
echo "   - URL changes each time"
echo "   - Good for testing or one-time sync"
echo ""
echo "2. Named Tunnel (Persistent, requires Cloudflare account)"
echo "   - Requires Cloudflare login"
echo "   - Same URL every time"
echo "   - Good for regular syncing"
echo ""

read -p "Choose option (1 or 2): " TUNNEL_OPTION

if [ "$TUNNEL_OPTION" == "1" ]; then
    echo ""
    echo "======================================"
    echo "Quick Tunnel Setup"
    echo "======================================"
    echo ""
    echo "To start the tunnel and server:"
    echo ""
    echo "1. In one terminal, start the sync server:"
    echo "   cd $REPO_PATH"
    echo "   python3 sync-server.py --port $PORT"
    echo ""
    echo "2. In another terminal, start the Cloudflare tunnel:"
    echo "   cloudflared tunnel --url http://localhost:$PORT"
    echo ""
    echo "3. Copy the tunnel URL (e.g., https://xxx.trycloudflare.com)"
    echo "   and update it in sync-config.json"
    echo ""
    echo "4. On the client machine, run:"
    echo "   python3 sync-client.py --dry-run"
    echo ""
    
    # Create a helper script
    cat > "$REPO_PATH/start-sync-server.sh" << EOF
#!/bin/bash
# Start sync server and Cloudflare tunnel

echo "Starting sync server on port $PORT..."
python3 sync-server.py --port $PORT &
SERVER_PID=\$!

echo "Waiting for server to start..."
sleep 2

echo ""
echo "Starting Cloudflare tunnel..."
echo "Copy the tunnel URL and update sync-config.json"
echo ""

cloudflared tunnel --url http://localhost:$PORT

# Cleanup on exit
kill \$SERVER_PID 2>/dev/null
EOF
    
    chmod +x "$REPO_PATH/start-sync-server.sh"
    
    echo "✓ Created start-sync-server.sh helper script"
    echo ""
    echo "Run ./start-sync-server.sh to start both server and tunnel"
    
elif [ "$TUNNEL_OPTION" == "2" ]; then
    echo ""
    echo "======================================"
    echo "Named Tunnel Setup"
    echo "======================================"
    echo ""
    echo "Follow these steps:"
    echo ""
    echo "1. Login to Cloudflare:"
    echo "   cloudflared tunnel login"
    echo ""
    echo "2. Create a tunnel:"
    echo "   cloudflared tunnel create git-sync"
    echo ""
    echo "3. Create config file at ~/.cloudflared/config.yml:"
    echo "   tunnel: <TUNNEL-ID>"
    echo "   credentials-file: /home/\$USER/.cloudflared/<TUNNEL-ID>.json"
    echo "   ingress:"
    echo "     - hostname: your-subdomain.yourdomain.com"
    echo "       service: http://localhost:$PORT"
    echo "     - service: http_status:404"
    echo ""
    echo "4. Route the tunnel:"
    echo "   cloudflared tunnel route dns git-sync your-subdomain.yourdomain.com"
    echo ""
    echo "5. Run the tunnel:"
    echo "   cloudflared tunnel run git-sync"
    echo ""
    echo "See: https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/tunnel-guide/"
    
else
    echo "Invalid option. Exiting."
    exit 1
fi

echo ""
echo "======================================"
echo "Setup Complete!"
echo "======================================"
echo ""
