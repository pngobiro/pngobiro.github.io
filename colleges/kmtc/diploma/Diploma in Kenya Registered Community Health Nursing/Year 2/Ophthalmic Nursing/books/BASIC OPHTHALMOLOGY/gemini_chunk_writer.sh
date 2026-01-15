#!/bin/bash
# gemini_html_converter.sh
# Usage: ./gemini_html_converter.sh
# Fully automates conversion of BASIC_OPHTHALMOLOGY.mmd to HTML files following the instructions in pdf-to-html-conversion-prompt-v7.md.
# Creates chunked HTML files, index.html, and sets up the kmtc-histology directory structure without manual assembly.

# Use Node.js 20 with nvm (with error checking)
export NVM_DIR="$HOME/.nvm"
if [ -s "$NVM_DIR/nvm.sh" ]; then
    source "$NVM_DIR/nvm.sh"
    if nvm use 20 2>/dev/null; then
        echo "Using Node.js 20"
    else
        echo "Warning: Node.js 20 not available, using system default"
    fi
else
    echo "Warning: nvm not found, using system Node.js"
fi

MMD_FILE="BASIC_OPHTHALMOLOGY.mmd"
PROMPT_FILE="pdf-to-html-conversion-prompt-v7.md"
GEMINI_CMD="gemini"  # Your Gemini CLI command
OUTPUT_BASE_DIR="kmtc-histology"
TOPICS_DIR="$OUTPUT_BASE_DIR/topics"
ASSETS_DIR="$OUTPUT_BASE_DIR/assets/images"
STYLES_DIR="$OUTPUT_BASE_DIR/styles"
JS_DIR="$OUTPUT_BASE_DIR/js"
CHUNK_SIZE=5000  # Max chars per chunk sent to Gemini; adjust if needed

# Check for input files
if [ ! -f "$MMD_FILE" ]; then
    echo "Error: $MMD_FILE not found." >&2
    exit 1
fi
if [ ! -f "$PROMPT_FILE" ]; then
    echo "Error: $PROMPT_FILE not found." >&2
    exit 1
fi

# Check if Gemini CLI is available
if ! command -v "$GEMINI_CMD" &> /dev/null; then
    echo "Error: $GEMINI_CMD command not found. Please install Gemini CLI." >&2
    exit 1
fi

# Create directory structure
mkdir -p "$TOPICS_DIR" "$ASSETS_DIR" "$STYLES_DIR" "$JS_DIR"

# Save CSS file (keeping the original CSS as provided)
cat << 'EOF' > "$STYLES_DIR/main.css"
:root {
--primary-color: #2c3e50;
--secondary-color: #34495e;
--accent-color: #3498db;
--accent-hover-color: #2980b9;
--background-color: #f8f9fa;
--card-background-color: #ffffff;
--text-color: #212529;
--muted-text-color: #6c757d;
--border-color: #dee2e6;
--code-background-color: #2d3436;
--code-text-color: #dfe6e9;
--note-bg-color: #eaf7fb;
--note-border-color: #aed6f1;
--warning-bg-color: #fff9e6;
--warning-border-color: #ffe58f;
--font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
--font-family-monospace: 'Courier New', Courier, monospace;
--font-family-math: 'Times New Roman', serif;
}

*, *::before, *::after {
box-sizing: border-box;
}

body {
font-family: var(--font-family);
line-height: 1.7;
color: var(--text-color);
background-color: var(--background-color);
margin: 0;
padding: 0;
font-size: 16px;
}

.container {
max-width: 1140px;
margin: 0 auto;
padding: 1.5rem;
}

.document-section {
background-color: var(--card-background-color);
padding: 2rem;
border-radius: 8px;
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
margin-bottom: 2rem;
}

h1, h2, h3, h4, h5, h6 {
color: var(--primary-color);
margin-top: 1.5em;
margin-bottom: 0.8em;
line-height: 1.3;
font-weight: 600;
}

h1.section-title {
font-size: 2.2rem;
font-weight: 700;
margin-top: 0;
margin-bottom: 0.5rem;
text-align: center;
border-bottom: none;
padding-bottom: 0;
}

h2.section-heading {
font-size: 1.8rem;
border-bottom: 1px solid var(--border-color);
padding-bottom: 0.5rem;
display: flex;
align-items: center;
gap: 0.7rem;
}

h3.subsection-heading {
font-size: 1.4rem;
font-weight: 600;
border-bottom: 1px dashed var(--border-color);
padding-bottom: 0.3rem;
margin-top: 1.2em;
margin-bottom: 0.6em;
}

h4.subsubsection-heading {
font-size: 1.15rem;
font-weight: 600;
color: var(--secondary-color);
margin-top: 1em;
margin-bottom: 0.5em;
}

p {
margin-top: 0;
margin-bottom: 1.2rem;
}

a {
color: var(--accent-color);
text-decoration: none;
transition: color 0.2s ease;
}

a:hover {
color: var(--accent-hover-color);
text-decoration: underline;
}

strong { font-weight: 600; }
em { font-style: italic; }

dfn {
font-style: italic;
font-weight: 600;
border-bottom: 1px dashed var(--secondary-color);
cursor: help;
}

.section-header {
text-align: center;
margin-bottom: 2.5rem;
padding-bottom: 1rem;
}

.title-underline {
width: 80px;
height: 4px;
background-color: var(--accent-color);
margin: 0.5rem auto 0 auto;
border-radius: 2px;
}

.content-card {
padding: 1rem 0;
}

.document-nav {
margin: 2.5rem 0;
padding: 1rem 0;
border-top: 1px solid var(--border-color);
border-bottom: 1px solid var(--border-color);
}

.nav-links {
display: flex;
justify-content: space-between;
align-items: center;
gap: 1rem;
flex-wrap: wrap;
}

.nav-button {
display: flex;
align-items: center;
gap: 0.5rem;
padding: 0.6rem 1.2rem;
text-decoration: none;
background: var(--card-background-color);
border: 1px solid var(--border-color);
border-radius: 5px;
transition: all 0.2s ease;
white-space: nowrap;
font-size: 0.9em;
font-weight: 500;
}

.nav-button .nav-icon { font-size: 1.1em; }

.nav-button[href*="index.html"] {
color: #2980b9;
border-color: #2980b9;
}

.nav-button[href*="index.html"]:hover {
background-color: #eaf4fb;
}

.nav-links > .nav-button:nth-child(2):not([href*="index.html"]):not(:last-child):not(.disabled) {
color: #e67e22;
border-color: #e67e22;
}

.nav-links > .nav-button:nth-child(2):not([href*="index.html"]):not(:last-child):not(.disabled):hover {
background-color: #fdf3e8;
}

.nav-links > .nav-button:last-child:not([href*="index.html"]):not(.disabled) {
color: #27ae60;
border-color: #27ae60;
}

.nav-button:last-child:not([href*="index.html"]):not(.disabled):hover {
background-color: #eaf7f1;
}

.nav-button.disabled {
color: var(--muted-text-color);
border-color: var(--border-color);
cursor: not-allowed;
opacity: 0.6;
}

.nav-button.disabled:hover {
background-color: var(--card-background-color);
}

.document-progress {
display: flex;
flex-direction: column;
align-items: center;
flex-grow: 1;
min-width: 120px;
text-align: center;
}

.progress-bar {
width: 100%;
max-width: 200px;
height: 6px;
background-color: #e9ecef;
border-radius: 3px;
overflow: hidden;
margin-bottom: 0.3rem;
}

.progress-fill {
height: 100%;
background-color: var(--accent-color);
width: 0%;
transition: width 0.3s ease;
border-radius: 3px;
}

.progress-text {
font-size: 0.8em;
color: var(--secondary-color);
}

.toc-container {
max-width: 800px;
margin: 40px auto;
padding: 30px 40px;
background-color: var(--card-background-color);
border-radius: 8px;
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.toc-header {
text-align: center;
margin-bottom: 30px;
border-bottom: 2px solid var(--border-color);
padding-bottom: 20px;
}

.toc-title {
font-size: 2.5em;
color: var(--primary-color);
font-weight: 700;
margin-bottom: 10px;
}

.toc-subtitle {
font-size: 1.2em;
color: var(--muted-text-color);
}

.toc-list {
list-style: none;
padding: 0;
}

.toc-chapter {
margin-bottom: 25px;
border-left: 3px solid var(--accent-color);
padding-left: 20px;
}

.toc-chapter-title {
font-size: 1.6em;
font-weight: 600;
color: var(--primary-color);
margin-bottom: 15px;
}

.toc-section-list {
list-style: none;
padding-left: 10px;
}

.toc-section-item {
margin-bottom: 8px;
}

.toc-link {
text-decoration: none;
color: var(--accent-color);
font-size: 1.1em;
transition: color 0.3s ease, padding-left 0.3s ease;
display: block;
padding: 5px 0;
}

.toc-link:hover {
color: var(--accent-hover-color);
padding-left: 5px;
}

.toc-link::before {
content: '→ ';
color: #bdc3c7;
margin-right: 8px;
font-size: 0.9em;
display: inline-block;
}

.content-section {
padding: 1rem 0;
margin-bottom: 1.5rem;
}

.heading-icon {
font-size: 1.1em;
color: var(--accent-color);
}

.table-container {
margin: 1.5rem 0;
overflow-x: auto;
border: 1px solid var(--border-color);
border-radius: 8px;
}

.content-table {
width: 100%;
border-collapse: collapse;
background: var(--card-background-color);
}

.content-table th,
.content-table td {
padding: 0.8rem 1rem;
border: 1px solid var(--border-color);
text-align: left;
vertical-align: top;
}

.content-table th {
background-color: #f1f3f5;
font-weight: 600;
}

.content-table caption {
caption-side: top;
font-weight: 600;
margin-bottom: 0.5rem;
color: var(--primary-color);
text-align: left;
padding: 0.5rem 0;
font-size: 1.1em;
}

.math-inline {
padding: 0.1em 0.3em;
background-color: #f1f3f5;
border-radius: 3px;
font-size: 0.95em;
font-family: var(--font-family-math);
}

.equation {
margin: 1.8rem 0;
text-align: center;
overflow-x: auto;
padding: 1rem 1.5rem;
background-color: #f8f9fa;
border: 1px solid var(--border-color);
border-radius: 4px;
font-size: 1.1em;
font-family: var(--font-family-math);
}

ul.enhanced-list, ol.enhanced-list {
list-style: none;
padding-left: 0;
margin-bottom: 1rem;
}

ul.enhanced-list .list-item, ol.enhanced-list .list-item {
display: flex;
align-items: flex-start;
gap: 0.8rem;
margin-bottom: 0.8rem;
}

ul.enhanced-list .item-icon, ol.enhanced-list .item-icon {
color: var(--accent-color);
font-weight: bold;
flex-shrink: 0;
margin-top: 0.15em;
min-width: 1.2em;
text-align: right;
}

ul.enhanced-list .item-text, ol.enhanced-list .item-text {
flex-grow: 1;
}

ul, ol {
    margin-bottom: 1.2rem;
    padding-left: 2rem;
}

.content-image {
max-width: 100%;
height: auto;
border-radius: 4px;
margin: 1.5rem auto;
display: block;
border: 1px solid var(--border-color);
box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.key-points-section {
margin-top: 2.5rem;
margin-bottom: 2rem;
}

.key-points-container {
background-color: var(--note-bg-color);
border: 1px solid var(--note-border-color);
border-radius: 8px;
padding: 1.5rem;
}

.key-points-header {
display: flex;
align-items: center;
gap: 0.8rem;
margin-bottom: 1rem;
padding-bottom: 0.5rem;
border-bottom: 1px solid var(--note-border-color);
}

.key-points-icon { font-size: 1.5em; }
.key-points-title { font-size: 1.3em; color: var(--primary-color); font-weight: 600; margin: 0; }
.key-points-content { margin-top: 1rem; }
.key-points-list { list-style: none; padding: 0; }
.key-points-list .key-point-item { display: flex; align-items: flex-start; gap: 0.6rem; margin-bottom: 0.8rem; }
.key-points-list .point-marker { color: var(--accent-color); font-weight: bold; margin-top: 0.1em; }
.key-points-list .key-point-item p { margin: 0; flex-grow: 1; }

.callout {
padding: 1.5rem;
margin: 1.5rem 0;
border-left-width: 5px;
border-left-style: solid;
border-radius: 5px;
}

.callout.note {
background-color: var(--note-bg-color);
border-color: var(--note-border-color);
}

.callout.warning {
background-color: var(--warning-bg-color);
border-color: var(--warning-border-color);
}

.callout-title {
margin-top: 0;
margin-bottom: 0.5rem;
font-size: 1.1em;
font-weight: 600;
display: flex;
align-items: center;
gap: 0.5rem;
}

.callout-icon { font-size: 1.2em; }
.callout p:last-child { margin-bottom: 0; }

pre.code-block {
background-color: var(--code-background-color);
color: var(--code-text-color);
padding: 1rem 1.5rem;
border-radius: 5px;
overflow-x: auto;
margin: 1.5rem 0;
font-family: var(--font-family-monospace);
font-size: 0.95em;
line-height: 1.5;
}

pre.code-block code {
white-space: pre;
font-family: var(--font-family-monospace);
}

@media (max-width: 768px) {
.container { padding: 1rem; }
.document-section { padding: 1.5rem; }
h1.section-title { font-size: 1.8em; }
h2.section-heading { font-size: 1.5em; }
h3.subsection-heading { font-size: 1.2em; }

.toc-container { margin: 20px; padding: 20px; }
.toc-title { font-size: 2em; }

.nav-links { flex-direction: column; align-items: stretch; }
.nav-button { justify-content: center; }
.document-progress { order: -1; margin-bottom: 1rem; width: 100%; }
.progress-bar { max-width: none; }

.content-table { font-size: 0.9em; }
.content-table th, .content-table td { padding: 0.5rem; }
}

@media (max-width: 480px) {
body { font-size: 15px; }
.container { padding: 0.5rem; }
.document-section { padding: 1rem; }

h1.section-title { font-size: 1.6em; }
h2.section-heading { font-size: 1.3em; }
h3.subsection-heading { font-size: 1.1em; }
h4.subsubsection-heading { font-size: 1.05em; }

.toc-title { font-size: 1.8em; }
.toc-chapter-title { font-size: 1.3em; }
.toc-link { font-size: 1em; }

.nav-button { padding: 0.5rem 0.8rem; font-size: 0.85em; }
.equation { padding: 0.8rem; font-size: 1em;}
pre.code-block { padding: 0.8rem 1rem; font-size: 0.9em;}
}
EOF

cat << 'EOF' > "$JS_DIR/navigation.js"
// Basic JS for disabled links and potential future enhancements
document.addEventListener('DOMContentLoaded', function() {
    // Prevent default action for disabled navigation buttons
    const disabledButtons = document.querySelectorAll('.nav-button.disabled');
    disabledButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
        });
    });
});
EOF

# Read instructions prompt
if ! INSTRUCTIONS=$(cat "$PROMPT_FILE"); then
    echo "Error: Failed to read $PROMPT_FILE" >&2
    exit 1
fi

# Function to clean and slugify titles for filenames
slugify() {
    echo "$1" | tr '[:upper:]' '[:lower:]' | sed -e 's/[^a-z0-9]/-/g' -e 's/--*/-/g' -e 's/^-//' -e 's/-$//'
}

# Extract section headings and content for chunking
SECTIONS=()
CURRENT_SECTION=""
CURRENT_TITLE=""
IN_SECTION=false
SECTION_NUM=0

echo "Parsing MMD file for sections..." >&2

while IFS= read -r LINE || [[ -n "$LINE" ]]; do
    # Detect headings (## or \section*{}) - fixed regex patterns
    if [[ $LINE =~ ^##[[:space:]]+(.*)$ ]]; then
        # Found markdown heading
        if [ -n "$CURRENT_TITLE" ]; then # Save previous section if it exists
            SECTIONS+=("$CURRENT_TITLE|$CURRENT_SECTION")
        fi
        CURRENT_TITLE="${BASH_REMATCH[1]}"
        CURRENT_SECTION=""
        IN_SECTION=true
        ((SECTION_NUM++))
        echo "Found markdown section: $CURRENT_TITLE" >&2
    elif [[ $LINE =~ ^\\section\*\{([^}]+)\}$ ]]; then
        # Found LaTeX section
        if [ -n "$CURRENT_TITLE" ]; then # Save previous section if it exists
            SECTIONS+=("$CURRENT_TITLE|$CURRENT_SECTION")
        fi
        CURRENT_TITLE="${BASH_REMATCH[1]}"
        CURRENT_SECTION=""
        IN_SECTION=true
        ((SECTION_NUM++))
        echo "Found LaTeX section: $CURRENT_TITLE" >&2
    elif [ "$IN_SECTION" = true ]; then
        # Append line to current section content, with a newline
        CURRENT_SECTION+="$LINE"$'\n'
    fi
done < "$MMD_FILE"

# Append the last section
if [ -n "$CURRENT_TITLE" ]; then
    SECTIONS+=("$CURRENT_TITLE|$CURRENT_SECTION")
fi

echo "Found ${#SECTIONS[@]} sections total" >&2

# Process images (if any) - improved URL handling
echo "Processing images..." >&2
IMAGE_FILES=()
IMAGE_COUNT=0
while IFS= read -r LINE; do
    # *** FIXED LINE: Quoted the regex pattern ***
    if [[ $LINE =~ "!\[([^]]*)\]\((https://cdn\.mathpix\.com/[^)]+)\)" ]]; then
        URL="${BASH_REMATCH[2]}"
        ALT_TEXT="${BASH_REMATCH[1]}"
        
        # Extract filename from URL more robustly
        FILENAME=$(basename "$URL" | cut -d'?' -f1)
        if [ -z "$FILENAME" ]; then
            FILENAME="image-$((++IMAGE_COUNT)).png"
        fi
        
        # Download image with error checking
        if curl -s -f "$URL" -o "$ASSETS_DIR/$FILENAME"; then
            IMAGE_FILES+=("$FILENAME|$ALT_TEXT")
            echo "Downloaded image: $FILENAME" >&2
        else
            echo "Warning: Failed to download image from $URL" >&2
        fi
    fi
done < "$MMD_FILE"

# Validate we have sections to process
if [ ${#SECTIONS[@]} -eq 0 ]; then
    echo "Error: No sections found in $MMD_FILE. Check the file format." >&2
    exit 1
fi

# Process each section
TOTAL_SECTIONS=${#SECTIONS[@]}
echo "Processing $TOTAL_SECTIONS sections..." >&2

for i in "${!SECTIONS[@]}"; do
    SECTION="${SECTIONS[$i]}"
    TITLE=$(echo "$SECTION" | cut -d'|' -f1)
    CONTENT=$(echo "$SECTION" | cut -d'|' -f2-)
    
    # Generate filename
    SLUG=$(slugify "$TITLE")
    OUTPUT_FILE="$TOPICS_DIR/histology-$SLUG.html"
    
    # Navigation links
    PREV_FILE=""
    NEXT_FILE=""
    if [ $i -gt 0 ]; then
        PREV_TITLE=$(echo "${SECTIONS[$((i-1))]}" | cut -d'|' -f1)
        PREV_SLUG=$(slugify "$PREV_TITLE")
        PREV_FILE="histology-$PREV_SLUG.html"
    fi
    if [ $i -lt $((TOTAL_SECTIONS-1)) ]; then
        NEXT_TITLE=$(echo "${SECTIONS[$((i+1))]}" | cut -d'|' -f1)
        NEXT_SLUG=$(slugify "$NEXT_TITLE")
        NEXT_FILE="histology-$NEXT_SLUG.html"
    fi
    
    # Calculate progress
    PROGRESS=$(( (i + 1) * 100 / TOTAL_SECTIONS ))
    
    # Construct prompt for Gemini
    FULL_PROMPT="$INSTRUCTIONS

Apply the conversion workflow to this MMD chunk. Correct OCR errors, identify list patterns (e.g., '-', '*', '•', numbered prefixes), convert to semantic HTML while preserving verbatim content, apply linear flow, and include navigation (Previous: $PREV_FILE, Next: $NEXT_FILE, Progress: Lecture $((i+1)) of $TOTAL_SECTIONS, $PROGRESS%). Replace image URLs with relative paths (e.g., '../assets/images/[filename]'). Output only the complete HTML code for this chunk:

## $TITLE
$CONTENT"
    
    # Check if chunk is too large
    CHUNK_LENGTH=${#FULL_PROMPT}
    if [ $CHUNK_LENGTH -gt $CHUNK_SIZE ]; then
        echo "Warning: Chunk $((i+1)) exceeds $CHUNK_SIZE chars ($CHUNK_LENGTH). Consider splitting at subsections." >&2
    fi
    
    echo "Processing section $((i+1)) of $TOTAL_SECTIONS: $TITLE" >&2
    
    # Call Gemini and save HTML with error checking
    if HTML_OUTPUT=$($GEMINI_CMD "$FULL_PROMPT" 2>/dev/null); then
        if [ -n "$HTML_OUTPUT" ]; then
            echo "$HTML_OUTPUT" > "$OUTPUT_FILE"
            echo "Saved HTML to $OUTPUT_FILE" >&2
            
            # Basic content verification (word count)
            MMD_WORDS=$(echo "$CONTENT" | sed 's/\\[^}]*{[^}]*}//g;s/\$//g' | wc -w)
            HTML_WORDS=$(echo "$HTML_OUTPUT" | sed 's/<[^>]*>//g' | wc -w)
            WORD_DIFF=$((MMD_WORDS > HTML_WORDS ? MMD_WORDS - HTML_WORDS : HTML_WORDS - MMD_WORDS))
            
            if [ $WORD_DIFF -gt 50 ]; then
                echo "Warning: Significant word count difference for $OUTPUT_FILE (MMD: $MMD_WORDS, HTML: $HTML_WORDS)" >&2
            fi
        else
            echo "Error: Empty response from Gemini for section: $TITLE" >&2
        fi
    else
        echo "Error: Failed to get response from Gemini for section: $TITLE" >&2
        # Create a basic HTML file as fallback
        cat << HTML_EOF > "$OUTPUT_FILE"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>$TITLE - Basic Ophthalmology</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../styles/main.css">
</head>
<body>
    <div class="container">
        <div class="document-section">
            <h1 class="section-title">$TITLE</h1>
            <div class="content-card">
                <p><strong>Error:</strong> Failed to process this section with Gemini. Original content:</p>
                <pre>$(echo "$CONTENT" | sed 's/&/\&amp;/g; s/</\&lt;/g; s/>/\&gt;/g')</pre>
            </div>
        </div>
    </div>
</body>
</html>
HTML_EOF
        echo "Created fallback HTML for $OUTPUT_FILE" >&2
    fi
    
    # Rate limiting
    sleep 2
done

# Generate index.html
echo "Generating index.html..." >&2

cat << EOF > "$OUTPUT_BASE_DIR/index.html"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basic Ophthalmology - Table of Contents</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles/main.css">
</head>
<body>
    <div class="container">
        <div class="toc-container">
            <header class="toc-header">
                <h1 class="toc-title">Basic Ophthalmology</h1>
                <p class="toc-subtitle">Table of Contents</p>
            </header>
            <ul class="toc-list">
EOF

for SECTION in "${SECTIONS[@]}"; do
    TITLE=$(echo "$SECTION" | cut -d'|' -f1)
    # HTML escape the title
    ESCAPED_TITLE=$(echo "$TITLE" | sed 's/&/\&amp;/g; s/</\&lt;/g; s/>/\&gt;/g; s/"/\&quot;/g')
    SLUG=$(slugify "$TITLE")
    cat << EOF >> "$OUTPUT_BASE_DIR/index.html"
                <li class="toc-chapter">
                    <h2 class="toc-chapter-title">$ESCAPED_TITLE</h2>
                    <ul class="toc-section-list">
                        <li class="toc-section-item"><a href="topics/histology-$SLUG.html" class="toc-link">$ESCAPED_TITLE</a></li>
                    </ul>
                </li>
EOF
done

cat << EOF >> "$OUTPUT_BASE_DIR/index.html"
            </ul>
        </div>
    </div>
</body>
</html>
EOF

echo "Conversion complete. Files saved in $OUTPUT_BASE_DIR." >&2
echo "Generated $TOTAL_SECTIONS topic pages and index.html." >&2
echo "Downloaded ${#IMAGE_FILES[@]} images to $ASSETS_DIR." >&2

# Final validation
GENERATED_FILES=$(find "$OUTPUT_BASE_DIR" -name "*.html" | wc -l)
if [ "$GENERATED_FILES" -eq 0 ]; then
    echo "Error: No HTML files were generated!" >&2
    exit 1
elif [ "$GENERATED_FILES" -lt "$TOTAL_SECTIONS" ]; then
    echo "Warning: Only $GENERATED_FILES HTML files generated out of $TOTAL_SECTIONS expected sections" >&2
else
    echo "Success: All $TOTAL_SECTIONS sections processed successfully!" >&2
fi

# Create a simple verification report
echo "Creating verification report..." >&2
cat << EOF > "$OUTPUT_BASE_DIR/conversion-report.txt"
Gemini HTML Conversion Report
Generated on: $(date)
Source file: $MMD_FILE
Total sections found: $TOTAL_SECTIONS
HTML files generated: $GENERATED_FILES
Images downloaded: ${#IMAGE_FILES[@]}

Generated files:
$(find "$OUTPUT_BASE_DIR" -name "*.html" -exec basename {} \; | sort)

Directory structure:
$OUTPUT_BASE_DIR/
├── index.html
├── topics/
$(find "$TOPICS_DIR" -name "*.html" -exec echo "│   ├── {}" \; | sed "s|$TOPICS_DIR/||")
├── styles/
│   └── main.css
├── js/
│   └── navigation.js
└── assets/
    └── images/
$(find "$ASSETS_DIR" -type f -exec echo "        └── {}" \; | sed "s|$ASSETS_DIR/||")
EOF

echo "Conversion report saved to $OUTPUT_BASE_DIR/conversion-report.txt" >&2