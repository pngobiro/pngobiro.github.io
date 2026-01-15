#!/bin/bash

# Step 1: Convert DOCX to PDF
echo "Converting DOCX files to PDF..."
for docx in *.docx; do
    if [ -f "$docx" ]; then
        filename="${docx%.*}"
        if [ ! -f "${filename}.pdf" ]; then
            echo "Converting $docx to PDF..."
            libreoffice --headless --convert-to pdf "$docx"
        else
            echo "PDF for $docx already exists, skipping..."
        fi
    fi
done

# Step 2: Convert PDFs to MMD
echo -e "\nConverting PDFs to MMD..."
for pdf in *.pdf; do
    if [ -f "$pdf" ]; then
        filename="${pdf%.*}"
        echo "Converting $pdf to MMD..."
        node /home/ngobiro/.local/share/Roo-Code/MCP/mathpix-ocr-server/build/index.js "$pdf" > "${filename}.mmd"
    fi
done

# Step 3: Combine all MMD files
echo -e "\nCombining all MMD files..."
# First, create a list of all MMD files sorted alphabetically
find . -maxdepth 1 -name "*.mmd" -type f | sort > mmd_files_list.txt

# Create a combined MMD file
echo "# Combined MMD Content" > combined.mmd
echo "Generated on $(date)" >> combined.mmd
echo "" >> combined.mmd

# Append each MMD file's content to the combined file
while IFS= read -r file; do
    echo -e "\n## Content from: ${file##*/}\n" >> combined.mmd
    cat "$file" >> combined.mmd
    echo -e "\n---\n" >> combined.mmd
done < mmd_files_list.txt

echo "Conversion process complete!"
echo "- Combined MMD file created as: combined.mmd"