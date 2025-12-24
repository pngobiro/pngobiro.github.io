#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p assets/images

# Download QR code image
curl "https://cdn.mathpix.com/cropped/2025_05_23_72e769d593bc78892fc7g-01.jpg?height=306&width=307&top_left_y=1132&top_left_x=880" -o "assets/images/2025_05_23_72e769d593bc78892fc7g-01-1.jpg"

echo "Images downloaded successfully"
