#!/bin/bash
# OCR Conversion Script for Clinical Chemistry Past Papers
# This script converts all PDF files in UNPROCESSED to MMD format

OCR_SERVER="/home/ngobiro/.local/share/Roo-Code/MCP/mathpix-ocr-server/build/index.js"
UNPROCESSED_DIR="/home/ngobiro/projects/pngobiro.github.io/colleges/kmtc/diploma/Medical Laboratory Sciences/Clinical Chemistry/pastpapers/UNPROCESSED"

cd "$UNPROCESSED_DIR" || exit 1

echo "Starting OCR conversion for Clinical Chemistry past papers..."
echo "Found $(ls -1 *.pdf 2>/dev/null | wc -l) PDF files"
echo ""

for pdf in *.pdf; do
    if [ -f "$pdf" ]; then
        basename="${pdf%.pdf}"
        mmd_file="${basename}_ocr.mmd"
        
        # Skip if MMD already exists
        if [ -f "$mmd_file" ]; then
            echo "SKIP: $mmd_file already exists"
            continue
        fi
        
        echo "Processing: $pdf"
        echo "  → Generating: $mmd_file"
        
        # Run OCR
        node "$OCR_SERVER" "$pdf" > "$mmd_file" 2>&1
        
        # Check if MMD was created successfully
        if [ -f "$mmd_file" ] && [ -s "$mmd_file" ]; then
            echo "  ✓ Success ($(wc -l < "$mmd_file") lines)"
        else
            echo "  ✗ Failed or empty output"
        fi
        echo ""
    fi
done

echo "OCR conversion complete!"
echo "Generated MMD files: $(ls -1 *_ocr.mmd 2>/dev/null | wc -l)"
