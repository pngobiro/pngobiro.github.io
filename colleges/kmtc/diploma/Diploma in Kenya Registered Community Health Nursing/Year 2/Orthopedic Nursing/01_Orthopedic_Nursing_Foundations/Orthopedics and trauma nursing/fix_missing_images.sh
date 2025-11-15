#!/bin/bash

# Script to automatically fix missing image references in HTML files
# This script will search for the correct image files and update HTML references

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}  Auto-Fix Missing Images${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

# Read the MMD file to find image mappings
MMD_FILE="orthopedics_and_trauma_nursing.mmd"

if [ ! -f "$MMD_FILE" ]; then
    echo -e "${RED}Error: MMD file not found: $MMD_FILE${NC}"
    exit 1
fi

# Function to find the actual image file for a figure number
find_image_for_figure() {
    local figure_num="$1"
    local chapter=$(echo "$figure_num" | cut -d. -f1)
    local fig=$(echo "$figure_num" | cut -d. -f2)
    
    # Search MMD for this figure
    local caption_line=$(grep -n "Figure ${figure_num}" "$MMD_FILE" | grep "caption" | head -1)
    
    if [ -z "$caption_line" ]; then
        echo ""
        return 1
    fi
    
    local line_num=$(echo "$caption_line" | cut -d: -f1)
    
    # Look backwards from caption to find includegraphics
    local start=$((line_num - 10))
    [ $start -lt 1 ] && start=1
    
    local image_url=$(sed -n "${start},${line_num}p" "$MMD_FILE" | grep "includegraphics" | tail -1 | grep -oP 'https://[^}]+' || echo "")
    
    if [ -z "$image_url" ]; then
        echo ""
        return 1
    fi
    
    # Extract page number from URL (e.g., 2025_11_15_e59ad744ad7bac926a7cg-155)
    local page_pattern=$(echo "$image_url" | grep -oP '2025_11_15_[a-f0-9]+g-\d+' || echo "")
    
    if [ -z "$page_pattern" ]; then
        echo ""
        return 1
    fi
    
    # Find matching image file
    local image_files=$(ls assets/images/${page_pattern}*.jpg 2>/dev/null)
    
    if [ -z "$image_files" ]; then
        echo ""
        return 1
    fi
    
    # If multiple images from same page, use coordinates to determine which one
    local count=$(echo "$image_files" | wc -l)
    if [ $count -eq 1 ]; then
        echo "$image_files"
        return 0
    else
        # Return the first one (could be improved with coordinate matching)
        echo "$image_files" | head -1
        return 0
    fi
}

# Fix Figure 12.3
echo -e "${YELLOW}Fixing Figure 12.3...${NC}"
fig_12_3_image=$(find_image_for_figure "12.3")
if [ -n "$fig_12_3_image" ]; then
    echo -e "${GREEN}Found: $fig_12_3_image${NC}"
    # Get just the filename
    fig_12_3_basename=$(basename "$fig_12_3_image")
    # Update HTML file
    sed -i "s|figure-12-3\.jpg|$fig_12_3_basename|g" topics/ortho-wound-management.html
    echo -e "${GREEN}✓ Updated HTML to use: $fig_12_3_basename${NC}"
else
    echo -e "${RED}✗ Could not find image for Figure 12.3${NC}"
fi
echo ""

# Check if Figure 12.4 actually has images or is just a table
echo -e "${YELLOW}Checking Figure 12.4...${NC}"
fig_12_4_caption=$(grep -A5 "Figure 12.4" "$MMD_FILE" | grep "caption" | head -1)
fig_12_4_context=$(grep -B20 "Figure 12.4" "$MMD_FILE" | tail -20)

if echo "$fig_12_4_context" | grep -q "\\\\begin{table}"; then
    echo -e "${YELLOW}Figure 12.4 appears to be a table, not an image.${NC}"
    echo -e "${YELLOW}Creating placeholder or removing image tags...${NC}"
    
    # Option 1: Comment out the figure tags
    # sed -i '/figure-12-4[a-d]\.jpg/s/^/<!-- PLACEHOLDER: /' topics/ortho-wound-management.html
    
    # Option 2: Replace with a note that these are diagrams/illustrations
    echo -e "${BLUE}Suggestion: Replace these with CSS-styled div blocks showing the steps.${NC}"
    echo -e "${BLUE}Or create placeholder images indicating 'Illustration not available'${NC}"
else
    echo -e "${YELLOW}Figure 12.4 may have images, searching...${NC}"
    for suffix in a b c d; do
        fig_image=$(find_image_for_figure "12.4${suffix}")
        if [ -n "$fig_image" ]; then
            echo -e "${GREEN}Found 12.4${suffix}: $fig_image${NC}"
            fig_basename=$(basename "$fig_image")
            sed -i "s|figure-12-4${suffix}\.jpg|$fig_basename|g" topics/ortho-wound-management.html
        else
            echo -e "${RED}✗ Could not find image for Figure 12.4${suffix}${NC}"
        fi
    done
fi

echo ""
echo -e "${BLUE}========================================${NC}"
echo -e "${GREEN}Auto-fix complete!${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""
echo "Run ./check_missing_images.sh to verify fixes."
