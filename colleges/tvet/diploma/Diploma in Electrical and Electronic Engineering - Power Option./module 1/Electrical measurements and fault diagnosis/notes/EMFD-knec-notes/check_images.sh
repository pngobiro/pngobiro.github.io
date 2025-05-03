#!/bin/bash

TOPICS_DIR="EMFD-knec-notes/topics"
IMAGES_BASE_DIR="EMFD-knec-notes/assets/images"

# Find all HTML files in the topics directory
find "$TOPICS_DIR" -name "*.html" | while read -r html_file; do
  echo "Processing file: $html_file"

  # Extract image URLs using grep and sed
  # This grep finds the src attribute, and sed extracts the URL value
  image_urls=$(grep -o '<img[^>]*src="[^"]*"' "$html_file" | sed 's/.*src="\([^"]*\)".*/\1/')

  if [ -z "$image_urls" ]; then
    echo "No images found in $html_file"
  else
    # Iterate through each extracted URL
    echo "$image_urls" | while read -r url; do
      echo "  Checking image path: $url"

      # Remove query parameters from the URL
      cleaned_url="${url%%\?*}"

      # Construct the full path relative to the workspace
      # Assuming URLs are relative like ../assets/images/...
      if [[ "$cleaned_url" == ../assets/images/* ]]; then
        image_path="$IMAGES_BASE_DIR/${cleaned_url#../assets/images/}"
        # Check if the file exists
        if [ -f "$image_path" ]; then
          echo "    Status: Exists"
        else
          echo "    Status: Does NOT exist at $image_path"
        fi
      else
        echo "    Status: Unexpected URL format - $cleaned_url"
      fi
    done
  fi
  echo "" # Add a newline for readability between files
done