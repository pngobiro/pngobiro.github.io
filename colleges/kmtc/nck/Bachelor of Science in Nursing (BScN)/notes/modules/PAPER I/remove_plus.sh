#!/bin/bash

# Script to remove '+' characters from HTML files in the topics directory
# Usage: bash remove_plus.sh

TOPICS_DIR="nursing-paper-i/topics"

echo "Removing '+' characters from HTML files in $TOPICS_DIR..."

# Find all HTML files and remove '+' characters
find "$TOPICS_DIR" -name "*.html" -type f -exec sed -i 's/+//g' {} \;

echo "Done. All '+' characters have been removed from HTML files."
