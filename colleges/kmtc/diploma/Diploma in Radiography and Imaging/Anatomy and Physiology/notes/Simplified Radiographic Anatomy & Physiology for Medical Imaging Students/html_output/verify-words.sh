#!/bin/bash

# Simple word-based content verification
# Extracts all words from MMD and all HTML files, then compares

MMD_FILE="Simplified Radiographic Anatomy & Physiology for Medical Imaging Students.mmd"
TOPICS_DIR="topics"
TEMP_DIR="temp_verify"

mkdir -p "$TEMP_DIR"

echo "=========================================="
echo "Word-Based Content Verification"
echo "=========================================="
echo ""

# Extract all words from MMD (remove LaTeX commands, URLs, keep text)
echo "Extracting words from MMD..."
cat "$MMD_FILE" | \
    sed 's/\\[a-zA-Z]*\*\?{//g' | \
    sed 's/}//g' | \
    sed 's/!\[\]([^)]*)//g' | \
    sed 's/https\?:\/\/[^ ]*//g' | \
    sed 's/\\begin{[^}]*}//g' | \
    sed 's/\\end{[^}]*}//g' | \
    sed 's/\\[a-zA-Z]*//g' | \
    sed 's/[^a-zA-Z ]/ /g' | \
    tr '[:upper:]' '[:lower:]' | \
    tr -s ' ' '\n' | \
    grep -v '^$' | \
    sort > "$TEMP_DIR/mmd_words.txt"

mmd_total=$(wc -l < "$TEMP_DIR/mmd_words.txt")
mmd_unique=$(sort -u "$TEMP_DIR/mmd_words.txt" | wc -l)
echo "MMD: $mmd_total total words, $mmd_unique unique words"
echo ""

# Extract all words from all HTML files combined
echo "Extracting words from HTML files..."
cat "$TOPICS_DIR"/*.html | \
    sed 's/<script[^>]*>.*<\/script>//g' | \
    sed 's/<style[^>]*>.*<\/style>//g' | \
    sed 's/<[^>]*>//g' | \
    sed 's/&[a-z]*;//g' | \
    sed 's/[^a-zA-Z ]/ /g' | \
    tr '[:upper:]' '[:lower:]' | \
    tr -s ' ' '\n' | \
    grep -v '^$' | \
    sort > "$TEMP_DIR/html_words.txt"

html_total=$(wc -l < "$TEMP_DIR/html_words.txt")
html_unique=$(sort -u "$TEMP_DIR/html_words.txt" | wc -l)
echo "HTML: $html_total total words, $html_unique unique words"
echo ""

# Get unique words from each
sort -u "$TEMP_DIR/mmd_words.txt" > "$TEMP_DIR/mmd_unique.txt"
sort -u "$TEMP_DIR/html_words.txt" > "$TEMP_DIR/html_unique.txt"

# Find words in MMD but not in HTML
comm -23 "$TEMP_DIR/mmd_unique.txt" "$TEMP_DIR/html_unique.txt" > "$TEMP_DIR/missing_in_html.txt"
missing_count=$(wc -l < "$TEMP_DIR/missing_in_html.txt")

# Find words in HTML but not in MMD (likely UI text)
comm -13 "$TEMP_DIR/mmd_unique.txt" "$TEMP_DIR/html_unique.txt" > "$TEMP_DIR/extra_in_html.txt"
extra_count=$(wc -l < "$TEMP_DIR/extra_in_html.txt")

# Find common words
comm -12 "$TEMP_DIR/mmd_unique.txt" "$TEMP_DIR/html_unique.txt" > "$TEMP_DIR/common_words.txt"
common_count=$(wc -l < "$TEMP_DIR/common_words.txt")

echo "=========================================="
echo "Word Comparison Results"
echo "=========================================="
echo ""
echo "Common words (in both): $common_count"
echo "Words only in MMD: $missing_count"
echo "Words only in HTML: $extra_count"
echo ""

# Calculate coverage percentage
coverage=$(echo "scale=1; $common_count * 100 / $mmd_unique" | bc)
echo "MMD coverage in HTML: ${coverage}%"
echo ""

# Show sample of missing words (filter out short/common words)
echo "Sample words from MMD not found in HTML (length > 5):"
grep -E '^.{6,}$' "$TEMP_DIR/missing_in_html.txt" | head -20 | tr '\n' ' '
echo ""
echo ""

# Show sample of extra words in HTML
echo "Sample words in HTML not in MMD (likely UI/navigation text):"
grep -E '^.{6,}$' "$TEMP_DIR/extra_in_html.txt" | head -20 | tr '\n' ' '
echo ""
echo ""

# Check for key terms (CUSTOMIZE THIS ARRAY FOR YOUR DOCUMENT)
# ============================================================
# Add domain-specific terms that MUST appear in your HTML output.
# These should be important keywords from your source document.
# ============================================================
echo "=========================================="
echo "Key Terms Check"
echo "=========================================="
echo ""

# CUSTOMIZE: Replace with terms relevant to your document
key_terms=(
    # Add your document's key terms here
    # Example for general academic documents:
    "introduction"
    "chapter"
    "section"
    "conclusion"
    "summary"
    "figure"
    "table"
    "reference"
)

# Alternative: Auto-extract top frequent long words from MMD as key terms
# Uncomment the following to use auto-detection instead of manual list:
# key_terms=($(grep -E '^.{8,}$' "$TEMP_DIR/mmd_unique.txt" | head -20))

found=0
missing_terms=""

for term in "${key_terms[@]}"; do
    if grep -qi "^${term}$" "$TEMP_DIR/html_unique.txt"; then
        found=$((found + 1))
    else
        missing_terms="$missing_terms $term"
    fi
done

echo "Key terms found: $found/${#key_terms[@]}"

if [ -n "$missing_terms" ]; then
    echo "Missing terms:$missing_terms"
fi
echo ""

# Final verdict
echo "=========================================="
echo "Verification Result"
echo "=========================================="
echo ""

if [ "$coverage" \> "90" ] 2>/dev/null || [ "${coverage%.*}" -ge 90 ] 2>/dev/null; then
    echo "✓ EXCELLENT: ${coverage}% of MMD content found in HTML"
elif [ "$coverage" \> "80" ] 2>/dev/null || [ "${coverage%.*}" -ge 80 ] 2>/dev/null; then
    echo "✓ GOOD: ${coverage}% of MMD content found in HTML"
elif [ "$coverage" \> "70" ] 2>/dev/null || [ "${coverage%.*}" -ge 70 ] 2>/dev/null; then
    echo "⚠️  FAIR: ${coverage}% of MMD content found in HTML - some content may be missing"
else
    echo "❌ LOW: ${coverage}% of MMD content found in HTML - significant content may be missing"
fi

echo ""
echo "Files saved in $TEMP_DIR/ for manual review:"
echo "  - mmd_unique.txt: All unique words from MMD"
echo "  - html_unique.txt: All unique words from HTML"
echo "  - missing_in_html.txt: Words in MMD but not in HTML"
echo "  - common_words.txt: Words found in both"
echo ""
