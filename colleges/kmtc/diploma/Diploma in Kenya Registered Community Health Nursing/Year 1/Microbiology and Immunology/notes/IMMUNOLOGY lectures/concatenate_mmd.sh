#!/bin/bash

# Output file for the concatenated content
output_file="combined_lectures.mmd"

# Remove output file if it exists
rm -f "$output_file"

# Add header to the combined file
echo "# IMMUNOLOGY Lectures" > "$output_file"
echo "## Combined Course Material" >> "$output_file"
echo "" >> "$output_file"

# Find all MMD files and sort them numerically by their prefix
find mmd_files -name "*.mmd" | sort -V | while read -r file; do
    if [ -f "$file" ]; then
        echo "Adding $(basename "$file")..."
        echo "" >> "$output_file"
        echo "## $(basename "${file%.*}")" >> "$output_file"
        echo "" >> "$output_file"
        cat "$file" >> "$output_file"
        echo "" >> "$output_file"
        echo "---" >> "$output_file"
        echo "" >> "$output_file"
    else
        echo "Warning: $file not found"
    fi
done

echo "All MMD files have been combined into $output_file"