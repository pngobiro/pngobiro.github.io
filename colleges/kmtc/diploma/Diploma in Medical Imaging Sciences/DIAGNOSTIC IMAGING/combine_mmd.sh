#!/bin/bash

# Output file
output="diagnostic_imaging/combined_content.mmd"

# Start with a clean file
echo "# Diagnostic Imaging Course" > "$output"
echo "## Table of Contents" >> "$output"
echo "" >> "$output"

# First pass: Generate table of contents
for mmd in diagnostic_imaging/individual_mmds/[0-9]*.mmd; do
    # Extract the first header from the file
    title=$(grep -m 1 "^\\\\section\*{.*}" "$mmd" | sed 's/\\section\*{\(.*\)}/\1/')
    if [ ! -z "$title" ]; then
        # Get the file number
        num=$(basename "$mmd" | cut -d'_' -f1)
        echo "* [$title](#chapter-$num)" >> "$output"
    fi
done

echo "" >> "$output"
echo "---" >> "$output"
echo "" >> "$output"

# Second pass: Combine content
for mmd in diagnostic_imaging/individual_mmds/[0-9]*.mmd; do
    num=$(basename "$mmd" | cut -d'_' -f1)
    echo "" >> "$output"
    echo "<a id=\"chapter-$num\"></a>" >> "$output"
    echo "" >> "$output"
    
    # Skip Mathpix processing info
    sed -n '/--- Converted MMD Start ---/,/--- Converted MMD End ---/p' "$mmd" | \
    sed '1d;$d' >> "$output"
    
    echo "" >> "$output"
    echo "---" >> "$output"
done

echo "Combined MMD file created at $output"