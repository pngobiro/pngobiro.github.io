#!/bin/bash

# Script to convert non-PDF files (ppt, pptx, docx) to PDF format
# After successful conversion, original files are removed

cd pdfs && for file in *.ppt *.pptx *.docx; do
  if [ -f "$file" ]; then
    echo "Converting $file to PDF..."
    libreoffice --headless --convert-to pdf "$file"
    if [ -f "${file%.*}.pdf" ]; then
      echo "Successfully converted $file - removing original"
      rm "$file"
    else
      echo "Conversion failed for $file"
    fi
  fi
done