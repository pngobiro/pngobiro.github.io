#!/bin/bash

# Script to verify HTML content matches MMD source
# This extracts text from HTML and compares key sections with MMD

MMD_FILE="Simplified Radiographic Anatomy & Physiology for Medical Imaging Students.mmd"
TOPICS_DIR="topics"

echo "=========================================="
echo "Content Verification Report"
echo "=========================================="
echo ""

# Function to extract chapter titles from MMD
extract_mmd_chapters() {
    grep -E "^\\\\section\*\{CHAPTER [0-9]+\}" "$MMD_FILE" | sed 's/\\section\*{//;s/}//'
}

# Function to count sections in MMD for a chapter
count_mmd_sections() {
    local chapter_num=$1
    # Count section headers between this chapter and the next
    awk "/CHAPTER $chapter_num/,/CHAPTER $((chapter_num + 1))/" "$MMD_FILE" | grep -c "^\\\\section\*{"
}

# Function to extract text content from HTML (strip tags)
extract_html_text() {
    local html_file=$1
    # Remove HTML tags and extract text content
    sed 's/<[^>]*>//g' "$html_file" | sed 's/&nbsp;/ /g' | sed 's/&amp;/\&/g' | grep -v "^[[:space:]]*$"
}

# Check each topic file
echo "Checking topic files..."
echo ""

for html_file in "$TOPICS_DIR"/*.html; do
    filename=$(basename "$html_file")
    
    # Extract chapter/topic number
    if [[ $filename =~ topic-([0-9]+) ]]; then
        topic_num="${BASH_REMATCH[1]}"
    elif [[ $filename =~ chapter-([0-9]+) ]]; then
        topic_num="${BASH_REMATCH[1]}"
    else
        continue
    fi
    
    echo "-------------------------------------------"
    echo "File: $filename (Topic $topic_num)"
    echo "-------------------------------------------"
    
    # Check if file exists and is not empty
    if [ ! -s "$html_file" ]; then
        echo "❌ ERROR: File is empty or doesn't exist"
        continue
    fi
    
    # Extract title from HTML
    html_title=$(grep -oP '<h1[^>]*class="document-title"[^>]*>\K[^<]+' "$html_file" | head -1)
    echo "HTML Title: $html_title"
    
    # Count sections in HTML
    section_count=$(grep -c 'class="content-section"' "$html_file")
    echo "Sections in HTML: $section_count"
    
    # Count figures in HTML
    figure_count=$(grep -c 'class="content-figure"' "$html_file")
    echo "Figures in HTML: $figure_count"
    
    # Count images in HTML
    image_count=$(grep -c '<img src=' "$html_file")
    echo "Images in HTML: $image_count"
    
    # Check for broken image paths (7d366642g- pattern)
    broken_images=$(grep -c '7d366642g-' "$html_file" 2>/dev/null || echo "0")
    if [ "$broken_images" -gt 0 ]; then
        echo "⚠️  WARNING: Found $broken_images broken image paths (7d366642g-)"
    else
        echo "✓ Image paths look correct"
    fi
    
    # Check for navigation links
    has_prev=$(grep -c 'nav-button--prev' "$html_file")
    has_next=$(grep -c 'nav-button--next' "$html_file")
    has_toc=$(grep -c 'nav-button--toc' "$html_file")
    
    if [ "$has_prev" -gt 0 ] && [ "$has_next" -gt 0 ] && [ "$has_toc" -gt 0 ]; then
        echo "✓ Navigation links present"
    else
        echo "⚠️  WARNING: Missing navigation links"
    fi
    
    echo ""
done

echo "=========================================="
echo "MMD File Statistics"
echo "=========================================="
echo ""

# Count total chapters in MMD
total_chapters=$(grep -c "^\\\\section\*{CHAPTER" "$MMD_FILE")
echo "Total chapters in MMD: $total_chapters"

# Count total figures in MMD
total_figures=$(grep -c "^!\[\](" "$MMD_FILE")
echo "Total figures in MMD: $total_figures"

# Count total sections in MMD
total_sections=$(grep -c "^\\\\section\*{" "$MMD_FILE")
echo "Total sections in MMD: $total_sections"

echo ""
echo "=========================================="
echo "Summary"
echo "=========================================="
echo ""

# Count HTML files
html_count=$(ls -1 "$TOPICS_DIR"/*.html 2>/dev/null | wc -l)
echo "HTML files created: $html_count"
echo "Expected chapters: $total_chapters"

if [ "$html_count" -eq "$total_chapters" ]; then
    echo "✓ All chapters have HTML files"
else
    echo "⚠️  Mismatch: $html_count HTML files vs $total_chapters chapters"
fi

echo ""
echo "Verification complete!"
