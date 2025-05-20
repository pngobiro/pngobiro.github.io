#!/bin/bash

# PDF processing ID
PDF_ID="2025_05_20_899ee7aff8358faca132g"

# OCR Server path
OCR_SERVER="/home/ngobiro/projects/mathpix-ocr-server"

# Output file
OUTPUT_FILE="Katzung Basic and Clinical Pharmacology 10th ed.mmd"

# Maximum retry attempts
MAX_RETRIES=10
RETRY_DELAY=30  # seconds

attempt=1
while [ $attempt -le $MAX_RETRIES ]; do
    echo "Attempt $attempt of $MAX_RETRIES to fetch results..."
    
    # Try to fetch results using --id parameter
    cd "$OCR_SERVER" && \
    node build/index.js --id "$PDF_ID" > "$OUTPUT_FILE"
    
    # Check if the fetch was successful
    if [ $? -eq 0 ]; then
        echo "Successfully fetched PDF processing results!"
        exit 0
    fi
    
    echo "Fetch attempt failed. Waiting $RETRY_DELAY seconds before retry..."
    sleep $RETRY_DELAY
    
    ((attempt++))
done

echo "Failed to fetch results after $MAX_RETRIES attempts."
exit 1
