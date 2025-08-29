#!/bin/bash
# Script to download images referenced in ACLS-Handbook.mmd but missing in HTMLs

MMD_FILE="ACLS-Handbook.mmd"
IMG_DIR="assets/images"

# Extract all image URLs from the .mmd file
urls=$(grep -oP 'https://cdn\.mathpix\.com/cropped/2025_08_29_27ec582e48e246cda702g-[0-9]+\.jpg\?[^)]*' "$MMD_FILE" | sort | uniq)

# Get all image filenames referenced in HTMLs
html_imgs=$(grep -rhoP 'assets/images/\K[0-9_\-]+\.jpg' topics/*.html | sort | uniq)

# Get all image filenames present in assets/images
folder_imgs=$(ls "$IMG_DIR" | sort | uniq)

# For each URL, get the filename and check if it's missing in HTMLs
for url in $urls; do
    fname=$(echo "$url" | grep -oP '2025_08_29_27ec582e48e246cda702g-[0-9]+\.jpg')
    # If not referenced in HTMLs and not present in folder, download
    if ! echo "$html_imgs" | grep -q "$fname" && ! echo "$folder_imgs" | grep -q "$fname"; then
        echo "Downloading $fname from $url"
        wget -O "$IMG_DIR/$fname" "$url"
    fi
done
