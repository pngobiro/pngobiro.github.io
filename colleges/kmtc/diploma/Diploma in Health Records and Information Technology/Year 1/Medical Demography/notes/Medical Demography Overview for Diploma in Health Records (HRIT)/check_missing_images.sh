#!/bin/bash

# Script to detect missing image files referenced in HTML files
# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}  Missing Image Files Detector${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""

# Get the script directory
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

# Counters
total_images=0
missing_images=0
found_images=0

# Arrays to store results
declare -a missing_files
declare -a html_with_missing

# Function to check if file exists
check_image() {
    local html_file="$1"
    local img_src="$2"
    local img_path=""
    
    # Convert relative path to absolute path based on HTML file location
    html_dir=$(dirname "$html_file")
    
    # Remove leading ../ and resolve path
    if [[ "$img_src" == ../* ]]; then
        img_path="$html_dir/$img_src"
    elif [[ "$img_src" == /* ]]; then
        img_path="$img_src"
    else
        img_path="$html_dir/$img_src"
    fi
    
    # Normalize path (remove ../ and ./)
    img_path=$(realpath -m "$img_path" 2>/dev/null || echo "$img_path")
    
    if [ -f "$img_path" ]; then
        return 0
    else
        return 1
    fi
}

# Find all HTML files
echo -e "${YELLOW}Scanning HTML files...${NC}"
html_files=$(find . -name "*.html" -type f)

if [ -z "$html_files" ]; then
    echo -e "${RED}No HTML files found!${NC}"
    exit 1
fi

echo -e "${GREEN}Found $(echo "$html_files" | wc -l) HTML file(s)${NC}"
echo ""

# Process each HTML file
while IFS= read -r html_file; do
    echo -e "${BLUE}Checking: ${html_file}${NC}"
    
    # Extract image sources using grep and sed
    # Match patterns: src="../assets/images/..." or src="assets/images/..." or src="/path/to/image"
    img_sources=$(grep -oP 'src="\K[^"]*\.(?:jpg|jpeg|png|gif|svg|webp|JPG|JPEG|PNG|GIF|SVG|WEBP)' "$html_file" 2>/dev/null || true)
    
    if [ -z "$img_sources" ]; then
        echo -e "  ${YELLOW}No images found in this file${NC}"
        echo ""
        continue
    fi
    
    file_has_missing=false
    
    # Check each image
    while IFS= read -r img_src; do
        # Skip empty lines
        [ -z "$img_src" ] && continue
        
        # Skip external URLs
        if [[ "$img_src" =~ ^https?:// ]]; then
            continue
        fi
        
        ((total_images++))
        
        html_dir=$(dirname "$html_file")
        
        # Resolve path
        if [[ "$img_src" == ../* ]]; then
            img_path="$html_dir/$img_src"
        elif [[ "$img_src" == /* ]]; then
            img_path="$img_src"
        else
            img_path="$html_dir/$img_src"
        fi
        
        # Normalize path
        img_path=$(realpath -m "$img_path" 2>/dev/null || echo "$img_path")
        
        # Check if file exists
        if [ -f "$img_path" ]; then
            ((found_images++))
            echo -e "  ${GREEN}✓${NC} $img_src"
        else
            ((missing_images++))
            echo -e "  ${RED}✗ MISSING:${NC} $img_src"
            echo -e "    ${RED}Expected path: $img_path${NC}"
            missing_files+=("$img_src|$html_file|$img_path")
            file_has_missing=true
        fi
    done <<< "$img_sources"
    
    if [ "$file_has_missing" = true ]; then
        html_with_missing+=("$html_file")
    fi
    
    echo ""
done <<< "$html_files"

# Print summary
echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}  Summary${NC}"
echo -e "${BLUE}========================================${NC}"
echo -e "Total images referenced: ${YELLOW}$total_images${NC}"
echo -e "Images found: ${GREEN}$found_images${NC}"
echo -e "Images missing: ${RED}$missing_images${NC}"
echo ""

if [ $missing_images -gt 0 ]; then
    echo -e "${RED}========================================${NC}"
    echo -e "${RED}  Missing Images Details${NC}"
    echo -e "${RED}========================================${NC}"
    
    for entry in "${missing_files[@]}"; do
        IFS='|' read -r img_src html_file img_path <<< "$entry"
        echo -e "${YELLOW}Image:${NC} $img_src"
        echo -e "${YELLOW}HTML File:${NC} $html_file"
        echo -e "${YELLOW}Expected Path:${NC} $img_path"
        echo ""
    done
    
    echo -e "${RED}HTML files with missing images:${NC}"
    for html in "${html_with_missing[@]}"; do
        echo -e "  - $html"
    done
    echo ""
    
    # Suggest solutions
    echo -e "${BLUE}========================================${NC}"
    echo -e "${BLUE}  Suggestions${NC}"
    echo -e "${BLUE}========================================${NC}"
    echo "1. Check if images were properly extracted from PDF"
    echo "2. Run the download_images.sh script if not done already"
    echo "3. Verify image filenames match the naming convention"
    echo "4. Check if images are in the correct directory (assets/images/)"
    echo ""
    echo "To see available images, run:"
    echo "  ls -lh assets/images/"
    echo ""
    
    exit 1
else
    echo -e "${GREEN}========================================${NC}"
    echo -e "${GREEN}  All images found! ✓${NC}"
    echo -e "${GREEN}========================================${NC}"
    exit 0
fi
