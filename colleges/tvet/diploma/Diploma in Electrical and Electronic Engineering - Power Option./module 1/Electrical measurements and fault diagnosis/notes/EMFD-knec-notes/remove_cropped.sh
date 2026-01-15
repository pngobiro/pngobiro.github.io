#!/bin/bash

# Set the target directory
target_dir="EMFD-knec-notes/topics"

# Find all HTML files in the target directory
find "$target_dir" -name "*.html" -print0 | while IFS= read -r -d $'\0' file; do
  # Use sed to remove "cropped_ " from the image source URLs
  sed -i 's/src="..\/assets\/images\/cropped_/\src="..\/assets\/images\//g' "$file"
  echo "Processed file: $file"
done

echo "Finished processing all HTML files."