#!/bin/bash

# Set working directory to script location
cd "$(dirname "$0")"

# Create images directory if it doesn't exist
mkdir -p assets/images

# Function to sanitize image names
sanitize_filename() {
    local desc="$1"
    echo "$desc" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]/-/g' | sed 's/-\+/-/g' | sed 's/^-\|-$//'
}

# Extract image URLs and descriptions from MMD file
while IFS= read -r line; do
    if [[ $line =~ \!\[\]\((https://cdn.mathpix.com/cropped/[^)]*)\) ]]; then
        url="${BASH_REMATCH[1]}"
        
        # Get next line for description
        read -r next_line
        desc=$(sanitize_filename "$next_line")
        
        # Determine chapter from context
        chapter=$(echo "$line" | grep -o 'chapter-[0-9]\+' | head -1)
        if [ -z "$chapter" ]; then
            chapter="chapter-1"  # Default to chapter 1 if not found
        fi
        
        # Create descriptive filename
        outfile="${chapter}-${desc}.jpg"
        
        # Download the image
        echo "Downloading $url to assets/images/$outfile"
        curl -s "$url" -o "assets/images/$outfile"
        
        if [ $? -eq 0 ]; then
            echo "Successfully downloaded $outfile"
        else
            echo "Failed to download $url"
        fi
    fi
done < EMFD-knec-notes.mmd

echo "Image processing complete"