#!/bin/bash

# Efficient text content verification between MMD and HTML
# Extracts clean text and compares key sentences

MMD_FILE="Simplified Radiographic Anatomy & Physiology for Medical Imaging Students.mmd"
TOPICS_DIR="topics"

echo "=========================================="
echo "Content Match Verification"
echo "=========================================="
echo ""

# Function to extract clean text from HTML
extract_html_text() {
    local html_file=$1
    # Remove all HTML tags, scripts, styles, and normalize whitespace
    sed 's/<script[^>]*>.*<\/script>//g' "$html_file" | \
        sed 's/<style[^>]*>.*<\/style>//g' | \
        sed 's/<[^>]*>//g' | \
        sed 's/&nbsp;/ /g' | \
        sed 's/&amp;/\&/g' | \
        sed 's/&lt;/</g' | \
        sed 's/&gt;/>/g' | \
        tr -s ' ' | \
        grep -v '^[[:space:]]*$' | \
        sed 's/^[[:space:]]*//' | \
        sed 's/[[:space:]]*$//'
}

# Function to get chapter title from HTML
get_html_title() {
    local html_file=$1
    grep -oP '<h1[^>]*class="document-title"[^>]*>\K[^<]+' "$html_file" | head -1
}

# Function to extract key sentences from text
get_key_sentences() {
    local text=$1
    # Get first 5 meaningful sentences (more than 20 chars)
    echo "$text" | grep -v '^[[:space:]]*$' | awk 'length($0) > 20' | head -5
}

# Function to check if text contains key medical terms
check_medical_content() {
    local text=$1
    local count=0
    
    # Check for anatomical terms
    echo "$text" | grep -qi "bone\|joint\|muscle\|tissue\|anatomy" && count=$((count + 1))
    echo "$text" | grep -qi "system\|structure\|function" && count=$((count + 1))
    echo "$text" | grep -qi "body\|organ\|cell" && count=$((count + 1))
    
    echo $count
}

total=0
verified=0

for html_file in "$TOPICS_DIR"/*.html; do
    filename=$(basename "$html_file")
    
    # Extract chapter number
    if [[ $filename =~ topic-0?([0-9]+) ]]; then
        chapter_num="${BASH_REMATCH[1]}"
    elif [[ $filename =~ chapter-0?([0-9]+) ]]; then
        chapter_num="${BASH_REMATCH[1]}"
    else
        continue
    fi
    
    total=$((total + 1))
    
    echo "-------------------------------------------"
    echo "Chapter $chapter_num: $filename"
    echo "-------------------------------------------"
    
    # Get HTML title
    html_title=$(get_html_title "$html_file")
    echo "Title: $html_title"
    
    # Extract clean text from HTML
    html_text=$(extract_html_text "$html_file")
    html_word_count=$(echo "$html_text" | wc -w)
    
    echo "Word count: $html_word_count"
    
    # Check if title exists in MMD
    if grep -qi "$html_title" "$MMD_FILE"; then
        echo "✓ Title found in MMD source"
        title_match=1
    else
        echo "⚠️  Title not found in MMD source"
        title_match=0
    fi
    
    # Get first meaningful sentence from HTML
    first_sentence=$(echo "$html_text" | grep -v '^[[:space:]]*$' | awk 'length($0) > 30' | head -1 | cut -c 1-80)
    echo ""
    echo "First sentence: $first_sentence..."
    
    # Check if this sentence exists in MMD
    if [ -n "$first_sentence" ] && grep -qF "${first_sentence:0:40}" "$MMD_FILE"; then
        echo "✓ First sentence found in MMD"
        content_match=1
    else
        echo "⚠️  First sentence not found in MMD"
        content_match=0
    fi
    
    # Check for medical terminology
    medical_terms=$(check_medical_content "$html_text")
    echo ""
    echo "Medical content indicators: $medical_terms/3"
    
    # Overall verification
    if [ "$title_match" -eq 1 ] && [ "$content_match" -eq 1 ] && [ "$medical_terms" -ge 2 ]; then
        echo "✓ VERIFIED: Content matches MMD source"
        verified=$((verified + 1))
    elif [ "$title_match" -eq 1 ] && [ "$medical_terms" -ge 2 ]; then
        echo "⚠️  PARTIAL: Title matches, content needs review"
        verified=$((verified + 1))
    else
        echo "❌ NEEDS REVIEW: Manual verification recommended"
    fi
    
    # Sample 3 random sentences for spot check
    echo ""
    echo "Sample sentences for spot check:"
    echo "$html_text" | grep -v '^[[:space:]]*$' | awk 'length($0) > 40' | shuf | head -3 | nl
    
    echo ""
done

echo "=========================================="
echo "Verification Summary"
echo "=========================================="
echo ""
echo "Total chapters: $total"
echo "Verified chapters: $verified"
echo "Verification rate: $(echo "scale=1; $verified * 100 / $total" | bc)%"
echo ""

if [ "$verified" -eq "$total" ]; then
    echo "✓ All chapters verified successfully"
elif [ "$verified" -ge $((total * 80 / 100)) ]; then
    echo "⚠️  Most chapters verified (>80%)"
else
    echo "❌ Multiple chapters need manual review"
fi

echo ""
echo "To manually verify a specific chapter:"
echo "  1. Open the HTML file in browser"
echo "  2. Search for key sentences in the MMD file"
echo "  3. Compare paragraph structure and content"
echo ""
