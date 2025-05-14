#!/bin/bash

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo "MCH Notes Setup Script"
echo "====================="

# Function to check if a command exists
check_command() {
    if command -v $1 &> /dev/null; then
        echo -e "${GREEN}✓${NC} $1 is installed"
        return 0
    else
        echo -e "${RED}✗${NC} $1 is not installed"
        return 1
    fi
}

# Function to create directory if it doesn't exist
create_directory() {
    if [ ! -d "$1" ]; then
        mkdir -p "$1"
        echo -e "${GREEN}✓${NC} Created directory: $1"
    else
        echo -e "${YELLOW}!${NC} Directory already exists: $1"
    fi
}

# Check for required commands
echo -e "\nChecking required software..."
echo "-------------------------"
check_command "python3"
check_command "convert" # ImageMagick
check_command "gzip"
check_command "xmllint"

# Create required directories
echo -e "\nCreating directory structure..."
echo "-------------------------"
create_directory "assets/images"
create_directory "assets/icons"
create_directory "js"
create_directory "styles"
create_directory "topics"

# Set file permissions
echo -e "\nSetting file permissions..."
echo "-------------------------"
chmod +x deploy.sh test.sh
echo -e "${GREEN}✓${NC} Made deploy.sh executable"
echo -e "${GREEN}✓${NC} Made test.sh executable"

# Create assets directory
if [ ! -d "assets" ]; then
    mkdir -p assets/icons
    # Create a simple placeholder icon
    echo -e "\nGenerating placeholder icon..."
    if command -v convert &> /dev/null; then
        convert -size 512x512 xc:white -font Arial -pointsize 40 -gravity center \
        -draw "text 0,0 'MCH Notes'" \
        -fill "#2c3e50" assets/icon.png
        echo -e "${GREEN}✓${NC} Created placeholder icon"
    else
        echo -e "${YELLOW}!${NC} ImageMagick not found - skipping icon generation"
    fi
fi

# Check if running on a web server
if command -v apache2 &> /dev/null || command -v nginx &> /dev/null; then
    echo -e "\n${YELLOW}!${NC} Web server detected - you may need to configure it manually"
    echo "Recommended configuration for Apache:"
    echo "- Enable mod_rewrite"
    echo "- Enable mod_headers"
    echo "- Enable mod_deflate"
    echo "- Configure CORS headers if needed"
fi

# Setup local development server
echo -e "\nSetting up local development server..."
echo "-------------------------"
if command -v python3 &> /dev/null; then
    echo "To start local server, run:"
    echo -e "${GREEN}python3 -m http.server 8000${NC}"
    echo "Then visit http://localhost:8000"
else
    echo -e "${YELLOW}!${NC} Python3 not found - please install it for local development"
fi

# Final instructions
echo -e "\nSetup complete!"
echo "=================="
echo -e "\nNext steps:"
echo "1. Run ${GREEN}./test.sh${NC} to validate the setup"
echo "2. Start local development server with Python"
echo "3. Make any necessary changes to the content"
echo "4. Run ${GREEN}./deploy.sh${NC} to create production build"

echo -e "\nFor more information, see the README.md file"