#!/bin/bash

# Convert all PPT/PPTX files to PDF using LibreOffice
for file in pdfs/*.ppt pdfs/*.pptx; do
    if [ -f "$file" ]; then
        filename=$(basename -- "$file")
        dirname=$(dirname -- "$file")
        basename="${filename%.*}"
        
        echo "Converting $filename to PDF..."
        soffice --headless --convert-to pdf "$file" --outdir "$dirname"
    fi
done

echo "Conversion complete!"