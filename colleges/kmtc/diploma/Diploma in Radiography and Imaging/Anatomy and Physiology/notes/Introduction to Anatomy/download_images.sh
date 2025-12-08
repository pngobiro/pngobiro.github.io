#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p assets/images

# Download and name images appropriately
curl -o "assets/images/anatomical-diagram-1.jpg" "https://cdn.mathpix.com/cropped/2025_04_06_c94184a65ec50d637bd5g-07.jpg?height=1924&width=2011&top_left_y=104&top_left_x=254"

curl -o "assets/images/structural-organization.jpg" "https://cdn.mathpix.com/cropped/2025_04_06_c94184a65ec50d637bd5g-11.jpg?height=1741&width=2404&top_left_y=280&top_left_x=103"

curl -o "assets/images/anatomical-position.jpg" "https://cdn.mathpix.com/cropped/2025_04_06_c94184a65ec50d637bd5g-12.jpg?height=1700&width=1209&top_left_y=234&top_left_x=725"

curl -o "assets/images/body-planes.jpg" "https://cdn.mathpix.com/cropped/2025_04_06_c94184a65ec50d637bd5g-14.jpg?height=1836&width=2528&top_left_y=106&top_left_x=107"

curl -o "assets/images/body-directions.jpg" "https://cdn.mathpix.com/cropped/2025_04_06_c94184a65ec50d637bd5g-16.jpg?height=1825&width=1983&top_left_y=252&top_left_x=257"

curl -o "assets/images/body-regions.jpg" "https://cdn.mathpix.com/cropped/2025_04_06_c94184a65ec50d637bd5g-19.jpg?height=1646&width=1355&top_left_y=219&top_left_x=719"

curl -o "assets/images/specific-body-regions.jpg" "https://cdn.mathpix.com/cropped/2025_04_06_c94184a65ec50d637bd5g-20.jpg?height=1853&width=2193&top_left_y=231&top_left_x=201"

curl -o "assets/images/abdominal-regions-9.jpg" "https://cdn.mathpix.com/cropped/2025_04_06_c94184a65ec50d637bd5g-21.jpg?height=1747&width=1491&top_left_y=263&top_left_x=591"

curl -o "assets/images/abdominal-regions-4.jpg" "https://cdn.mathpix.com/cropped/2025_04_06_c94184a65ec50d637bd5g-22.jpg?height=1818&width=1766&top_left_y=252&top_left_x=520"

curl -o "assets/images/cell-structure.jpg" "https://cdn.mathpix.com/cropped/2025_04_06_c94184a65ec50d637bd5g-27.jpg?height=1513&width=1649&top_left_y=208&top_left_x=726"

echo "Image download complete"