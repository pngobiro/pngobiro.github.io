#!/bin/bash

# Usage: ./update_image_refs.sh paper_id.html

if [ -z "$1" ]; then
    echo "Usage: ./update_image_refs.sh paper_id.html"
    exit 1
fi

HTML_FILE=$1
PAPER_ID=$(basename $HTML_FILE .html)
IMAGE_MAP="${PAPER_ID}_image_map.txt"

if [ ! -f "$IMAGE_MAP" ]; then
    echo "Error: Image map file $IMAGE_MAP not found"
    exit 1
fi

# Create a backup of the HTML file
cp "$HTML_FILE" "${HTML_FILE}.bak"

# Process each image reference in the image map
while IFS='|' read -r Q_NUM FIG_NUM; do
    # Find CDN URL pattern and replace with local path
    CDN_PATTERN="src=\"https://cdn\.mathpix\.com/[^\"]*\""
    LOCAL_PATH="src=\"images/${PAPER_ID}_q${Q_NUM}-fig${FIG_NUM}.png\""
    
    # Use sed to replace only the first occurrence per question
    sed -i "0,/${CDN_PATTERN}/s//${LOCAL_PATH}/" "$HTML_FILE"
    
    echo "Updated image reference for Question $Q_NUM, Figure $FIG_NUM"
done < "$IMAGE_MAP"

# Update processed.txt
CURRENT_STATUS=$(grep "^$PAPER_ID" processed.txt | cut -d'|' -f3)
if [ "$CURRENT_STATUS" == "partial" ]; then
    sed -i "s/^$PAPER_ID.*$/$PAPER_ID|$(date +%Y-%m-%d)|partial|Image references updated/" processed.txt
fi

echo "Updated all image references in $HTML_FILE"