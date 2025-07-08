#!/bin/bash

# Usage: ./download_images.sh filename_ocr.mmd

if [ -z "$1" ]; then
    echo "Usage: ./download_images.sh filename_ocr.mmd"
    exit 1
fi

MMD_FILE=$1
PAPER_ID=$(basename $MMD_FILE _ocr.mmd)

# Create images directory
mkdir -p images

# Extract image URLs
grep -o "https://cdn\.mathpix\.com/[^)]*" $MMD_FILE > ${PAPER_ID}_images.txt

echo "Found $(wc -l < ${PAPER_ID}_images.txt) images in $MMD_FILE"

# Extract question numbers for each image
echo "Processing images..."
Q_NUM=1
PREV_LINE=""
IMAGE_INDEX=1
IMAGES_MAP=""

# Read MMD file line by line to map images to questions
while IFS= read -r line; do
    # If line starts with "# Question", update question number
    if [[ $line =~ ^#\ Question\ ([0-9]+) ]]; then
        Q_NUM=${BASH_REMATCH[1]}
        IMAGE_INDEX=1
    fi
    
    # If line contains image reference, record question number
    if [[ $line =~ !\[\]\( ]]; then
        IMAGES_MAP="$IMAGES_MAP\n$Q_NUM|$IMAGE_INDEX"
        IMAGE_INDEX=$((IMAGE_INDEX+1))
    fi
    
    PREV_LINE="$line"
done < "$MMD_FILE"

# Download images with proper naming
echo -e "$IMAGES_MAP" | tail -n +2 > ${PAPER_ID}_image_map.txt

IMAGE_NUM=1
while read -r URL; do
    if [ -n "$IMAGES_MAP" ] && [ $IMAGE_NUM -le $(echo -e "$IMAGES_MAP" | wc -l) ]; then
        # Get question and figure number from map
        MAP_LINE=$(echo -e "$IMAGES_MAP" | sed -n "${IMAGE_NUM}p")
        Q_NUM=$(echo "$MAP_LINE" | cut -d'|' -f1)
        FIG_NUM=$(echo "$MAP_LINE" | cut -d'|' -f2)
        OUTPUT_FILE="images/${PAPER_ID}_q${Q_NUM}-fig${FIG_NUM}.png"
    else
        # Fallback naming if mapping fails
        OUTPUT_FILE="images/${PAPER_ID}_image${IMAGE_NUM}.png"
    fi
    
    echo "Downloading image $IMAGE_NUM to $OUTPUT_FILE"
    curl -o "$OUTPUT_FILE" -s -S -f -L "$URL"
    
    # Update processed.txt
    CURRENT_STATUS=$(grep "^$PAPER_ID" processed.txt | cut -d'|' -f3)
    if [ "$CURRENT_STATUS" == "pending" ]; then
        sed -i "s/^$PAPER_ID.*$/$PAPER_ID|$(date +%Y-%m-%d)|partial|Images downloaded/" processed.txt
    fi
    
    IMAGE_NUM=$((IMAGE_NUM+1))
done < "${PAPER_ID}_images.txt"

echo "Downloaded $((IMAGE_NUM-1)) images for $PAPER_ID"