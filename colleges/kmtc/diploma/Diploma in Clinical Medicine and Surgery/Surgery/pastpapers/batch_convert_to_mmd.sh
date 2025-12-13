#!/bin/bash

OCR_SERVER="/home/ngobiro/.local/share/Roo-Code/MCP/mathpix-ocr-server/build/index.js"
INPUT_DIR="UNPROCESSED"

# Check if input directory exists
if [ ! -d "$INPUT_DIR" ]; then
    echo "Error: Directory $INPUT_DIR not found."
    exit 1
fi

# Loop through all PDF files in the directory
find "$INPUT_DIR" -name "*.pdf" -type f | while read pdf_file; do
    # Get the filename without extension
    filename=$(basename "$pdf_file" .pdf)
    output_file="$INPUT_DIR/${filename}_ocr.mmd"

    # Check if MMD file already exists to avoid re-processing
    if [ -f "$output_file" ]; then
        echo "Skipping: $pdf_file (MMD already exists)"
        continue
    fi

    echo "Processing: $pdf_file"
    
    # Run the OCR command
    if node "$OCR_SERVER" "$pdf_file" > "$output_file"; then
        echo "Created: $output_file"
    else
        echo "Error processing: $pdf_file"
        # Remove empty or failed output file
        rm -f "$output_file"
    fi
done

echo "Batch conversion complete!"
