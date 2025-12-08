#!/bin/bash

# Script to verify actual text content matches between MMD and HTML files
# Strips HTML tags and compares meaningful text content

MMD_FILE="Simplified Radiographic Anatomy & Physiology for Medical Imaging Students.mmd"
TOPICS_DIR="topics"
TEMP_DIR="temp_verification"

# Create temp directory
mkdir -p "$TEMP_DIR"

echo "=========================================="
echo "Text Content Verification"
echo "=========================================="
echo ""

# Function to clean HTML and extract text
clean_html_text() {
    local html_file=$1
    local output_file=$2
    
    # Extract only content from main content area, strip HTML tags, normalize whitespace
    sed -n '/<div class="content-wrapper">/,/<\/div>/p' "$html_file" | \
        sed 's/<script[^>]*>.*<\/script>//g' | \
        sed 's/<style[^>]*>.*<\/style>//g' | \
        sed 's/<[^>]*>//g' | \
        sed 's/&nbsp;/ /g' | \
        sed 's/&amp;/\&/g' | \
        sed 's/&lt;/</g' | \
        sed 's/&gt;/>/g' | \
        sed 's/&quot;/"/g' | \
        sed "s/&apos;/'/g" | \
        sed 's/[[:space:]]\+/ /g' | \
        grep -v '^[[:space:]]*$' | \
        tr -d '\r' | \
        sed 's/^[[:space:]]*//' | \
        sed 's/[[:space:]]*$//' > "$output_file"
}

# Function to extract chapter content from MMD
extract_mmd_chapter() {
    local chapter_num=$1
    local output_file=$2
    
    # Find chapter start and end
    if [ "$chapter_num" -eq 14 ]; then
        # Last chapter - extract to end of file
        awk "/\\\\section\*{CHAPTER $chapter_num/,EOF" "$MMD_FILE"
    else
        # Extract between this chapter and next
        awk "/\\\\section\*{CHAPTER $chapter_num/,/\\\\section\*{CHAPTER $((chapter_num + 1))/" "$MMD_FILE" | head -n -1
    fi | \
        # Remove LaTeX commands but keep content
        sed 's/\\section\*{//g' | \
        sed 's/\\title{//g' | \
        sed 's/\\author{//g' | \
        sed 's/}//g' | \
        sed 's/\\begin{.*}//g' | \
        sed 's/\\end{.*}//g' | \
        sed 's/\\caption.*{//g' | \
        sed 's/\\includegraphics.*//g' | \
        sed 's/!\[\]([^)]*)//g' | \
        sed 's/\\//g' | \
        sed 's/[[:space:]]\+/ /g' | \
        grep -v '^[[:space:]]*$' | \
        tr -d '\r' | \
        sed 's/^[[:space:]]*//' | \
        sed 's/[[:space:]]*$//' > "$output_file"
}

# Function to calculate similarity percentage
calculate_similarity() {
    local file1=$1
    local file2=$2
    
    # Count total words in MMD
    local mmd_words=$(wc -w < "$file1")
    
    # Count matching words (simple approach)
    local matching=0
    
    # Read first 50 words from each file and compare
    local sample1=$(head -c 500 "$file1" | tr -d '\n')
    local sample2=$(head -c 500 "$file2" | tr -d '\n')
    
    # Simple similarity check - if samples contain similar text
    if echo "$sample2" | grep -qF "${sample1:0:100}"; then
        echo "HIGH"
    elif echo "$sample2" | grep -qF "${sample1:0:50}"; then
        echo "MEDIUM"
    else
        echo "LOW"
    fi
}

# Function to extract key phrases for comparison
extract_key_phrases() {
    local file=$1
    # Extract first significant sentence and a few key terms
    head -n 5 "$file" | grep -v '^$' | head -n 1
}

echo "Analyzing content for each chapter..."
echo ""

total_chapters=0
matching_chapters=0

for html_file in "$TOPICS_DIR"/*.html; do
    filename=$(basename "$html_file")
    
    # Extract chapter/topic number
    if [[ $filename =~ topic-([0-9]+) ]]; then
        chapter_num="${BASH_REMATCH[1]}"
    elif [[ $filename =~ chapter-([0-9]+) ]]; then
        chapter_num="${BASH_REMATCH[1]}"
    else
        continue
    fi
    
    total_chapters=$((total_chapters + 1))
    
    echo "-------------------------------------------"
    echo "Chapter $chapter_num: $filename"
    echo "-------------------------------------------"
    
    # Extract and clean content
    html_clean="$TEMP_DIR/html_${chapter_num}.txt"
    mmd_clean="$TEMP_DIR/mmd_${chapter_num}.txt"
    
    clean_html_text "$html_file" "$html_clean"
    extract_mmd_chapter "$chapter_num" "$mmd_clean"
    
    # Get word counts
    html_words=$(wc -w < "$html_clean")
    mmd_words=$(wc -w < "$mmd_clean")
    
    echo "HTML word count: $html_words"
    echo "MMD word count: $mmd_words"
    
    # Calculate percentage difference
    if [ "$mmd_words" -gt 0 ]; then
        diff_percent=$(echo "scale=1; ($html_words - $mmd_words) * 100 / $mmd_words" | bc 2>/dev/null || echo "0")
        echo "Difference: ${diff_percent}%"
    fi
    
    # Extract and compare key phrases
    echo ""
    echo "First line from HTML:"
    head -n 1 "$html_clean" | cut -c 1-100
    echo ""
    echo "First line from MMD:"
    head -n 1 "$mmd_clean" | cut -c 1-100
    echo ""
    
    # Check similarity
    similarity=$(calculate_similarity "$mmd_clean" "$html_clean")
    
    case $similarity in
        HIGH)
            echo "✓ Content similarity: HIGH"
            matching_chapters=$((matching_chapters + 1))
            ;;
        MEDIUM)
            echo "⚠️  Content similarity: MEDIUM"
            ;;
        LOW)
            echo "❌ Content similarity: LOW - Manual review needed"
            ;;
    esac
    
    # Sample check - look for specific terms
    echo ""
    echo "Sample term checks:"
    
    # Extract title from HTML
    html_title=$(grep -oP '<h1[^>]*class="document-title"[^>]*>\K[^<]+' "$html_file" | head -1)
    
    # Check if title appears in MMD content
    if grep -qi "$html_title" "$mmd_clean"; then
        echo "  ✓ Title found in MMD"
    else
        echo "  ⚠️  Title not found in MMD"
    fi
    
    # Check for common anatomical terms
    common_terms=("bone" "joint" "muscle" "tissue" "anatomy" "system")
    found_terms=0
    for term in "${common_terms[@]}"; do
        if grep -qi "$term" "$html_clean" && grep -qi "$term" "$mmd_clean"; then
            found_terms=$((found_terms + 1))
        fi
    done
    echo "  Common terms found: $found_terms/${#common_terms[@]}"
    
    echo ""
done

echo "=========================================="
echo "Summary"
echo "=========================================="
echo ""
echo "Total chapters analyzed: $total_chapters"
echo "High similarity matches: $matching_chapters"
echo "Match rate: $(echo "scale=1; $matching_chapters * 100 / $total_chapters" | bc)%"
echo ""

if [ "$matching_chapters" -eq "$total_chapters" ]; then
    echo "✓ All chapters show high content similarity"
else
    echo "⚠️  Some chapters may need manual review"
    echo ""
    echo "Chapters with lower similarity should be checked manually."
fi

echo ""
echo "Cleaned text files saved in: $TEMP_DIR/"
echo "You can manually compare files using: diff $TEMP_DIR/mmd_X.txt $TEMP_DIR/html_X.txt"
echo ""
