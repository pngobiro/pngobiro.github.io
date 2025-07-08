#!/bin/bash

# Create images directory if it doesn't exist
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
    
    # First pass: count occurrences of each page number
    while read -r url; do
        page=$(echo $url | grep -o 'g-[0-9]\+' | head -1)
        if [ ! -z "$page" ]; then
            page_counts["$page"]=$((${page_counts["$page"]:-0} + 1))
        fi
    done < <(grep -o 'https://cdn.mathpix.com/cropped/[^)]*' "$mmd_file")
    
    # Second pass: download images with proper sequence numbers
    local current_counts=()
    while read -r url; do
        page=$(echo $url | grep -o 'g-[0-9]\+' | head -1)
        if [ ! -z "$page" ]; then
            current_counts["$page"]=$((${current_counts["$page"]:-0} + 1))
            seq=${current_counts["$page"]}
            
            # Generate filename
            filename=$(get_filename "$url" "$id" "$seq")
            
            # Download image
            echo "Downloading $url to diagnostic_imaging/assets/images/$filename"
            curl -s "$url" -o "diagnostic_imaging/assets/images/$filename"
            sleep 0.5  # Add small delay to avoid overwhelming the server
        fi
    done < <(grep -o 'https://cdn.mathpix.com/cropped/[^)]*' "$mmd_file")
}

# Process all MMD files in individual_mmds directory
for mmd in diagnostic_imaging/individual_mmds/*.mmd; do
    echo "Processing $mmd..."
    process_mmd "$mmd"
    echo "Completed processing $mmd"
done
