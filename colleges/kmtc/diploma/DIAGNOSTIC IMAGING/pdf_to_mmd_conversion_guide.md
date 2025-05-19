# PDF to MMD Conversion Guide

This guide documents the process and code used to convert multiple PDF files into a combined Markdown (MMD) document using Mathpix OCR.

## Project Structure
```
project_root/
├── diagnostic_imaging/
│   ├── assets/
│   │   └── images/          # Stores downloaded images
│   ├── individual_mmds/     # Individual MMD files
│   └── combined_content.mmd # Final combined document
├── convert_pdfs.sh          # PDF to MMD conversion script
├── download_images.sh       # Image downloading script
└── combine_mmd.sh          # MMD combination script
```

## Step 1: Convert PowerPoint to PDF
If you have PowerPoint files, convert them to PDF first:
```bash
#!/bin/bash
for ppt in *.ppt *.pptx; do
    if [ -f "$ppt" ]; then
        libreoffice --headless --convert-to pdf "$ppt" && rm "$ppt"
    fi
done
```

## Step 2: Convert PDFs to MMD
Script: convert_pdfs.sh
```bash
#!/bin/bash

# Create output directory if it doesn't exist
mkdir -p diagnostic_imaging/individual_mmds

# Function to generate a clean output filename
get_output_name() {
    local input=$1
    local num=$(printf "%02d" $2)
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
```

## Step 3: Download Images
Script: download_images.sh
```bash
#!/bin/bash

# Create images directory
mkdir -p diagnostic_imaging/assets/images

# Function to extract ID from image URL and create proper filename
get_filename() {
    local url=$1
    local id=$2
    local page=$(echo $url | grep -o 'g-[0-9]\+' | head -1)
    local seq=$3
    echo "${id}${page}-${seq}.jpg"
}

# Process each MMD file
process_mmd() {
    local mmd_file=$1
    local id=$(basename "$mmd_file" .mmd | cut -d'_' -f1)
    local page_counts=()
    
    # Count occurrences of each page number
    while read -r url; do
        page=$(echo $url | grep -o 'g-[0-9]\+' | head -1)
        if [ ! -z "$page" ]; then
            page_counts["$page"]=$((${page_counts["$page"]:-0} + 1))
        fi
    done < <(grep -o 'https://cdn.mathpix.com/cropped/[^)]*' "$mmd_file")
    
    # Download images with proper sequence numbers
    local current_counts=()
    while read -r url; do
        page=$(echo $url | grep -o 'g-[0-9]\+' | head -1)
        if [ ! -z "$page" ]; then
            current_counts["$page"]=$((${current_counts["$page"]:-0} + 1))
            seq=${current_counts["$page"]}
            filename=$(get_filename "$url" "$id" "$seq")
            echo "Downloading $url to diagnostic_imaging/assets/images/$filename"
            curl -s "$url" -o "diagnostic_imaging/assets/images/$filename"
            sleep 0.5
        fi
    done < <(grep -o 'https://cdn.mathpix.com/cropped/[^)]*' "$mmd_file")
}

# Process all MMD files
for mmd in diagnostic_imaging/individual_mmds/*.mmd; do
    process_mmd "$mmd"
done
```

## Step 4: Combine MMD Files
Script: combine_mmd.sh
```bash
#!/bin/bash

output="diagnostic_imaging/combined_content.mmd"

# Start with a clean file
echo "# Diagnostic Imaging Course" > "$output"
echo "## Table of Contents" >> "$output"
echo "" >> "$output"

# Generate table of contents
for mmd in diagnostic_imaging/individual_mmds/[0-9]*.mmd; do
    title=$(grep -m 1 "^\\\\section\*{.*}" "$mmd" | sed 's/\\section\*{\(.*\)}/\1/')
    if [ ! -z "$title" ]; then
        num=$(basename "$mmd" | cut -d'_' -f1)
        echo "* [$title](#chapter-$num)" >> "$output"
    fi
done

echo "" >> "$output"
echo "---" >> "$output"
echo "" >> "$output"

# Combine content
for mmd in diagnostic_imaging/individual_mmds/[0-9]*.mmd; do
    num=$(basename "$mmd" | cut -d'_' -f1)
    echo "" >> "$output"
    echo "<a id=\"chapter-$num\"></a>" >> "$output"
    echo "" >> "$output"
    sed -n '/--- Converted MMD Start ---/,/--- Converted MMD End ---/p' "$mmd" | \
    sed '1d;$d' >> "$output"
    echo "" >> "$output"
    echo "---" >> "$output"
done
```

## Usage Instructions

1. Place all PDF files in the project root directory
2. Create the directory structure:
   ```bash
   mkdir -p diagnostic_imaging/assets/images diagnostic_imaging/individual_mmds
   ```

3. Convert PPT to PDF (if needed):
   ```bash
   chmod +x convert_ppt.sh && ./convert_ppt.sh
   ```

4. Convert PDFs to MMD:
   ```bash
   chmod +x convert_pdfs.sh && ./convert_pdfs.sh
   ```

5. Download images from MMD files:
   ```bash
   chmod +x download_images.sh && ./download_images.sh
   ```

6. Combine MMD files:
   ```bash
   chmod +x combine_mmd.sh && ./combine_mmd.sh
   ```

## Important Notes

1. Make sure Mathpix OCR server is installed and accessible
2. Check image paths in the combined MMD file
3. Review the generated content for OCR errors
4. The scripts handle image sequencing based on page numbers
5. Progress is logged for each step of the process

This workflow can be adapted for other similar projects by modifying the directory structure and file naming conventions as needed.