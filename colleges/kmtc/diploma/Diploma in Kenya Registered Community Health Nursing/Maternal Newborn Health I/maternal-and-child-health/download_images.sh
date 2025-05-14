#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p assets/images

# Download images
# ID: 2025_05_14_284301eb8b23900f3b1dg
# Page 1, Image 1
curl "https://cdn.mathpix.com/cropped/2025_05_14_284301eb8b23900f3b1dg-01.jpg?height=306&width=312&top_left_y=1132&top_left_x=872" -o "assets/images/2025_05_14_284301eb8b23900f3b1dg-01-1.jpg"

# Make the script executable
chmod +x download_images.sh
