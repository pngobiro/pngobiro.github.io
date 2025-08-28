#!/bin/bash

# Create directories for downloads and converted PDFs
mkdir -p downloads
mkdir -p converted_pdfs

# Read each URL from links.txt
while IFS= read -r url; do
    # Trim whitespace from the URL
    url=$(echo "$url" | xargs)

    if [[ -z "$url" ]]; then
        continue
    fi

    echo "Processing URL: $url"

    # Extract filename from URL
    filename=$(basename "$url")
    download_path="downloads/$filename"

    # Download the file
    echo "Downloading $filename..."
    wget -q --show-progress "$url" -O "$download_path"

    if [[ $? -ne 0 ]]; then
        echo "Failed to download $url. Skipping."
        continue
    fi

    # Get file extension
    extension="${filename##*.}"
    extension_lower=$(echo "$extension" | tr '[:upper:]' '[:lower:]')

    # Define output PDF filename
    pdf_filename="${filename%.*}.pdf"
    converted_pdf_path="converted_pdfs/$pdf_filename"

    # Check if already a PDF or convert
    if [[ "$extension_lower" == "pdf" ]]; then
        echo "$filename is already a PDF. Moving to converted_pdfs."
        mv "$download_path" "$converted_pdf_path"
    else
        echo "Converting $filename to PDF..."
        # LibreOffice headless conversion
        libreoffice --headless --convert-to pdf "$download_path" --outdir converted_pdfs

        if [[ $? -ne 0 ]]; then
            echo "Failed to convert $filename to PDF. Keeping original in downloads."
        else
            echo "Conversion successful. Removing original downloaded file."
            rm "$download_path"
        fi
    fi
    echo "----------------------------------------"
done < links.txt

echo "All files processed."
