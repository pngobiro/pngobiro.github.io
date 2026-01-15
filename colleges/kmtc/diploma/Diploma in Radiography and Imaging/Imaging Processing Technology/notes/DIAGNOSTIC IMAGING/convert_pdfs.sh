#!/bin/bash

# Create output directory if it doesn't exist
mkdir -p diagnostic_imaging/individual_mmds

# Function to generate a clean output filename
get_output_name() {
    local input=$1
    local num=$(printf "%02d" $2)
    # Remove extension, replace spaces with underscores
    local base=$(basename "$input" .pdf | tr ' ' '_')
    echo "diagnostic_imaging/individual_mmds/${num}_${base}.mmd"
}

# Convert all PDF files
count=1
for pdf in *.pdf; do
    if [ -f "$pdf" ]; then
        output=$(get_output_name "$pdf" $count)
        echo "Converting $pdf to $output..."
        node /home/ngobiro/.local/share/Roo-Code/MCP/mathpix-ocr-server/build/index.js "$pdf" > "$output"
        echo "Completed conversion of $pdf"
        ((count++))
    fi
done

echo "All PDF conversions completed"