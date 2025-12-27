#!/bin/bash

# Split PDF by units using pdftk

PDF_FILE="Gerontological Nursing, 10e - Charlotte Eliopoulos.pdf"

echo "Splitting PDF by units..."
echo "Total pages: 1760"
echo ""

# Unit 1: The Aging Experience (pages 55-227)
echo "Creating Unit 1 - The Aging Experience (pages 55-227)..."
pdftk "$PDF_FILE" cat 55-227 output "1. Unit 1 - The Aging Experience.pdf"
echo "✓ Created: 1. Unit 1 - The Aging Experience.pdf"
echo ""

# Unit 2: Foundations of Gerontological Nursing (pages 228-392)
echo "Creating Unit 2 - Foundations of Gerontological Nursing (pages 228-392)..."
pdftk "$PDF_FILE" cat 228-392 output "2. Unit 2 - Foundations of Gerontological Nursing.pdf"
echo "✓ Created: 2. Unit 2 - Foundations of Gerontological Nursing.pdf"
echo ""

# Unit 3: Health Promotion (pages 393-594)
echo "Creating Unit 3 - Health Promotion (pages 393-594)..."
pdftk "$PDF_FILE" cat 393-594 output "3. Unit 3 - Health Promotion.pdf"
echo "✓ Created: 3. Unit 3 - Health Promotion.pdf"
echo ""

# Unit 4: Geriatric Care (pages 595-1760)
echo "Creating Unit 4 - Geriatric Care (pages 595-1760)..."
pdftk "$PDF_FILE" cat 595-1760 output "4. Unit 4 - Geriatric Care.pdf"
echo "✓ Created: 4. Unit 4 - Geriatric Care.pdf"
echo ""

echo "PDF splitting completed successfully!"
echo ""
echo "Created files:"
ls -lh *.pdf | grep -E "^[0-9]\." | awk '{print $9, "-", $5}'