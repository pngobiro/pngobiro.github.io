#!/bin/bash

MMD_OUTPUT_DIR="mmd_files"
mkdir -p "$MMD_OUTPUT_DIR"

MATHPIX_SCRIPT="/home/ngobiro/.local/share/Roo-Code/MCP/mathpix-ocr-server/build/index.js"
PDF_DIR="/home/ngobiro/projects/pngobiro.github.io/colleges/kmtc/diploma/Diploma in Kenya Registered Community Health Nursing/Year 1/Family Planning and Reproductive Health/Family Planning and Contraception/converted_pdfs"

for pdf_file in "$PDF_DIR"/*.pdf; do
    if [[ -f "$pdf_file" ]]; then
        filename=$(basename "$pdf_file")
        base_name="${filename%.pdf}"
        output_mmd_file="$MMD_OUTPUT_DIR/${base_name}.mmd"

        echo "Converting $filename to MMD..."
        node "$MATHPIX_SCRIPT" "$pdf_file" > "$output_mmd_file"

        if [[ $? -ne 0 ]]; then
            echo "Error converting $filename. Check Mathpix script and PDF."
        else
            echo "Successfully converted $filename to $output_mmd_file"
        fi
        echo "----------------------------------------"
    fi
done

echo "All PDF files processed for MMD conversion."
echo "Please review the generated MMD files in the '$MMD_OUTPUT_DIR' directory for OCR errors and spurious characters as per the instructions in 'pdf-to-html-conversion-prompt-v7.md'."
