#!/bin/bash

# Create directory for images if it doesn't exist
mkdir -p assets/images

# Associative array to keep track of sequence numbers for each page
declare -A seq_counters

while IFS= read -r url; do
    # Trim whitespace from the URL
    url=$(echo "$url" | xargs)

    if [[ -z "$url" ]]; then
        continue
    fi

    # Extract the base name from the URL
    base_name=$(echo "$url" | awk -F'/' '{print $5}' | cut -d'.' -f1)

    # Extract ID and page number
    id_part=$(echo "$base_name" | sed 's/g-.*//')
    page_num=$(echo "$base_name" | sed 's/.*g-//')

    # Construct the key for the sequence counter
    page_key="${id_part}g-${page_num}"

    # Increment sequence number for this page
    seq_num=${seq_counters[$page_key]:-0}
    seq_num=$((seq_num + 1))
    seq_counters[$page_key]=$seq_num

    # Construct the new filename
    new_filename="${id_part}g-${page_num}-${seq_num}.jpg"
    download_path="assets/images/$new_filename"

    # Download the image
    echo "Downloading $url to $download_path"
    wget -q "$url" -O "$download_path"
done < links.txt

echo "All images downloaded."
