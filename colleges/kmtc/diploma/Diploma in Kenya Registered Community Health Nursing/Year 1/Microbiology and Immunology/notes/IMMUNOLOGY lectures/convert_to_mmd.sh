#!/bin/bash

# Directory containing PDF files
PDF_DIR="pdfs"

# Create output directory for MMD files if it doesn't exist
mkdir -p mmd_files

# Convert each PDF file to MMD
for pdf in "$PDF_DIR"/*.pdf; do
    if [ -f "$pdf" ]; then
        # Get the filename without extension
        filename=$(basename -- "$pdf")
        basename="${filename%.*}"
        
        echo "Converting $filename to MMD..."
        node /home/ngobiro/.local/share/Roo-Code/MCP/mathpix-ocr-server/build/index.js "$pdf" > "mmd_files/${basename}.mmd"
    fi
done

echo "All PDF files have been converted to MMD format."