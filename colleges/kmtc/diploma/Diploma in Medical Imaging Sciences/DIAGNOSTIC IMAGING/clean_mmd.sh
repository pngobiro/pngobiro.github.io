#!/bin/bash

input="diagnostic_imaging/combined_content.mmd"
output="diagnostic_imaging/cleaned_content.mmd"

# Create a temporary file for processing
temp_file=$(mktemp)

# Start with clean header
cat > "$temp_file" << EOL
# Diagnostic Imaging Course

## Table of Contents

EOL

# Process the content
sed -n '/--- Converted MMD Start ---/,/--- Converted MMD End ---/p' "$input" | \
sed '1d;$d' | \
# Fix common OCR errors
sed 's/\\section\*{[0-9]-".*}/\\section*{Introduction to Medical Imaging}/g' | \
sed 's/\\section\*{.*\([0-9]\)}/\\section*{\1}/g' | \
# Fix image paths
sed 's|https://cdn.mathpix.com/cropped/[^)]*|../assets/images/\$(basename & .jpg).jpg|g' | \
# Fix math formatting
sed 's/\$\$/\n$$\n/g' | \
sed 's/\([^$]\)\$/\1\n$/g' | \
# Clean up extra whitespace
sed 's/[ \t]*$//' | \
sed '/^$/N;/^\n$/D' > "$output"

echo "Content cleaned and saved to $output"

# Now update all image references to use local paths
echo "Updating image references..."
sed -i 's|https://cdn.mathpix.com/cropped/\([^)?]*\)[^)]*|../assets/images/\1|g' "$output"

echo "MMD content cleanup completed"