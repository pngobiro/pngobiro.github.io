#!/bin/bash

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to display the menu
show_menu() {
    clear
    echo -e "${BLUE}MCH Notes Development Tool${NC}"
    echo "=========================="
    echo
    echo "1) Start development server"
    echo "2) Run tests"
    echo "3) Create production build"
    echo "4) Check PWA requirements"
    echo "5) Clean build directories"
    echo "6) Generate placeholder icons"
    echo "7) Validate HTML files"
    echo "8) Watch for changes"
    echo "9) Open in browser"
    echo "q) Quit"
    echo
    echo -n "Please select an option: "
}

# Function to start development server
start_server() {
    echo -e "\n${BLUE}Starting development server...${NC}"
    if command -v python3 &> /dev/null; then
        echo -e "Server running at ${GREEN}http://localhost:8000${NC}"
        echo "Press Ctrl+C to stop"
        python3 -m http.server 8000
    else
        echo -e "${RED}Error: Python3 is not installed${NC}"
    fi
}

# Function to check PWA requirements
check_pwa() {
    echo -e "\n${BLUE}Checking PWA requirements...${NC}"
    
    # Check manifest.json
    if [ -f "manifest.json" ]; then
        echo -e "${GREEN}✓${NC} manifest.json exists"
        if cat manifest.json | python3 -m json.tool >/dev/null 2>&1; then
            echo -e "${GREEN}✓${NC} manifest.json is valid JSON"
        else
            echo -e "${RED}✗${NC} manifest.json contains invalid JSON"
        fi
    else
        echo -e "${RED}✗${NC} manifest.json not found"
    fi

    # Check service worker
    if [ -f "js/sw.js" ]; then
        echo -e "${GREEN}✓${NC} Service Worker exists"
    else
        echo -e "${RED}✗${NC} Service Worker not found"
    fi

    # Check icons
    if [ -d "assets/icons" ]; then
        echo -e "${GREEN}✓${NC} Icons directory exists"
        icon_count=$(ls assets/icons/*.png 2>/dev/null | wc -l)
        if [ $icon_count -gt 0 ]; then
            echo -e "${GREEN}✓${NC} Found $icon_count icon(s)"
        else
            echo -e "${RED}✗${NC} No icons found"
        fi
    else
        echo -e "${RED}✗${NC} Icons directory not found"
    fi
}

# Function to clean build directories
clean_build() {
    echo -e "\n${BLUE}Cleaning build directories...${NC}"
    if [ -d "dist" ]; then
        rm -rf dist
        echo -e "${GREEN}✓${NC} Removed dist directory"
    fi
    find . -name "*.gz" -type f -delete
    echo -e "${GREEN}✓${NC} Removed gzipped files"
    find . -name "*.bak" -type f -delete
    echo -e "${GREEN}✓${NC} Removed backup files"
}

# Function to generate icons
generate_icons() {
    echo -e "\n${BLUE}Generating icons...${NC}"
    if ! command -v convert &> /dev/null; then
        echo -e "${RED}Error: ImageMagick is not installed${NC}"
        return
    fi

    mkdir -p assets/icons
    if [ ! -f "assets/icon.png" ]; then
        echo -e "${YELLOW}Creating placeholder base icon...${NC}"
        convert -size 512x512 xc:white -font Arial -pointsize 40 -gravity center \
        -draw "text 0,0 'MCH Notes'" \
        -fill "#2c3e50" assets/icon.png
    fi

    sizes=(72 96 128 144 152 192 384 512)
    for size in "${sizes[@]}"; do
        convert assets/icon.png -resize ${size}x${size} assets/icons/icon-${size}x${size}.png
        echo -e "${GREEN}✓${NC} Generated ${size}x${size} icon"
    done
}

# Function to validate HTML files
validate_html() {
    echo -e "\n${BLUE}Validating HTML files...${NC}"
    for file in $(find . -name "*.html"); do
        echo -n "Checking $file... "
        if grep -q "<!DOCTYPE html>" "$file"; then
            if grep -q "<html.*lang=" "$file"; then
                echo -e "${GREEN}OK${NC}"
            else
                echo -e "${RED}Missing lang attribute${NC}"
            fi
        else
            echo -e "${RED}Missing DOCTYPE${NC}"
        fi
    done
}

# Function to watch for changes
watch_files() {
    echo -e "\n${BLUE}Watching for changes...${NC}"
    echo "Press Ctrl+C to stop"
    
    while true; do
        inotifywait -qr -e modify,create,delete --exclude '\.git/' . >/dev/null 2>&1
        
        if [ $? -eq 0 ]; then
            echo -e "${YELLOW}Changes detected - running tests...${NC}"
            ./test.sh
        fi
    done
}

# Function to open in browser
open_browser() {
    echo -e "\n${BLUE}Opening in browser...${NC}"
    if command -v xdg-open &> /dev/null; then
        xdg-open http://localhost:8000
    elif command -v open &> /dev/null; then
        open http://localhost:8000
    else
        echo -e "${YELLOW}Could not detect browser - please open manually:${NC}"
        echo "http://localhost:8000"
    fi
}

# Main loop
while true; do
    show_menu
    read -r choice
    case $choice in
        1) start_server ;;
        2) ./test.sh ;;
        3) ./deploy.sh ;;
        4) check_pwa ;;
        5) clean_build ;;
        6) generate_icons ;;
        7) validate_html ;;
        8) watch_files ;;
        9) open_browser ;;
        q) exit 0 ;;
        *) echo -e "\n${RED}Invalid option${NC}" ;;
    esac
    echo -e "\nPress Enter to continue..."
    read -r
done