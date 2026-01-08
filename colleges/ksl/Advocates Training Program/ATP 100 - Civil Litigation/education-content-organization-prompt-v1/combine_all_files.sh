#!/bin/bash

# Script to combine multiple files into a single text file

OUTPUT_FILE="combined_content.txt"

# Clear the output file if it exists
> "$OUTPUT_FILE"

# Function to add a file with a separator
add_file() {
    local file="$1"
    if [ -f "$file" ]; then
        echo "========================================" >> "$OUTPUT_FILE"
        echo "File: $file" >> "$OUTPUT_FILE"
        echo "========================================" >> "$OUTPUT_FILE"
        cat "$file" >> "$OUTPUT_FILE"
        echo "" >> "$OUTPUT_FILE"
        echo "" >> "$OUTPUT_FILE"
        echo "Adding $file..."
    else
        echo "Warning: $file not found"
    fi
}

# Add each file
add_file "content_cleaned.txt"
add_file "create_structure.sh"
add_file "helper_functions.sh"
add_file "medical-education-content-organization-prompt-v1.2.md"
add_file "structure_config.sh"
add_file "update_index.sh"
add_file "styles.css"

echo "All files combined into $OUTPUT_FILE"
