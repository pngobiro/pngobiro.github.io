#!/bin/bash

# Set the directory for HTML files
HTML_DIR="topics"

# Set the directory for image files
IMAGE_DIR="assets/images"

# Function to check if an image exists
check_image() {
  if [ -f "$IMAGE_DIR/$1" ]; then
    return 0
  else
    return 1
  fi
}

# Find all HTML files
find "$HTML_DIR" -name "*.html" -print0 | while IFS= read -r -d $'\0' html_file; do
  echo "Checking file: $html_file"

  # Find all image links in the HTML file
  grep -o '<img src="[^"]*"' "$html_file" | while IFS= read -r img_tag; do
    # Extract the image filename from the tag
    image_file=$(echo "$img_tag" | sed 's/<img src="\.\.\/\(.*\)"/\1/g' | sed 's/"//g')

    # Check if the image file exists
    if check_image "$image_file"; then
      continue
    fi

    # Check if the image exists with "-1" appended
    fixed_image_file="${image_file%-*}-1.${image_file##*.}"
    if [ -f "$IMAGE_DIR/$fixed_image_file" ]; then
      echo "BROKEN: $html_file - $image_file - Suggestion: $fixed_image_file"
    else
      echo "BROKEN: $html_file - $image_file - No suggestion"
    fi
  done
done

echo "Image link validation complete."