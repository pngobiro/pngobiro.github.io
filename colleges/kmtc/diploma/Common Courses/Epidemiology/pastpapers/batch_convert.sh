#!/bin/bash
# batch_convert.sh

OCR_SERVER="/home/ngobiro/.local/share/Roo-Code/MCP/mathpix-ocr-server/build/index.js"
INPUT_DIR="UNPROCESSED"
OUTPUT_DIR="UNPROCESSED"

# Check if OCR server exists
if [ ! -f "$OCR_SERVER" ]; then
    echo "Error: OCR server not found at $OCR_SERVER"
    exit 1
fi

# Process all PDFs
find "$INPUT_DIR" -name "*.pdf" -type f | while read pdf_file; do
    filename=$(basename "$pdf_file" .pdf)
    output_file="$OUTPUT_DIR/${filename}_ocr.mmd"
    
    if [ -f "$output_file" ]; then
        echo "Skipping $pdf_file (MMD already exists)"
        continue
    fi

    echo "Processing: $pdf_file"
    node "$OCR_SERVER" "$pdf_file" > "$output_file"
    
    if [ $? -eq 0 ]; then
        echo "Created: $output_file"
    else
        echo "Error converting $pdf_file"
    fi
done

echo "Batch conversion complete!"
