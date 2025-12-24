#!/bin/bash
# Script to clean up similar/duplicate images in assets/images
# Keeps only the image referenced in HTMLs, deletes others with similar names

IMG_DIR="assets/images"
HTML_DIR="topics"

# Get all image filenames referenced in HTMLs
html_imgs=$(grep -rhoP 'assets/images/\K[0-9_\-]+\.jpg' "$HTML_DIR" | sort | uniq)

# For each image in the folder, check if it is referenced in HTMLs
for img in $(ls "$IMG_DIR"); do
    if ! echo "$html_imgs" | grep -q "^$img$"; then
        echo "Deleting unused image: $img"
        rm "$IMG_DIR/$img"
    fi
done
