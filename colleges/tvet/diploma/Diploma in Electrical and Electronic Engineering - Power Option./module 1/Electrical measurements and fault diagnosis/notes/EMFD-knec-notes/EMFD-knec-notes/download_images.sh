#!/bin/bash

# Set working directory to script location
cd "$(dirname "$0")"

# Create images directory if it doesn't exist
mkdir -p assets/images

# Extract image URLs from MMD file and download them
grep -o 'https://cdn.mathpix.com/cropped/[^)]*' EMFD-knec-notes.mmd | while read -r url; do
    # Get filename from url
    filename=$(basename "$url" | cut -d'?' -f1)
    
    # Download the image
    echo "Downloading $url to assets/images/$filename"
    curl -s "$url" -o "assets/images/$filename"
    
    if [ $? -eq 0 ]; then
        echo "Successfully downloaded $filename"
    else
        echo "Failed to download $url"
    fi
done

echo "Image download complete"