#!/bin/bash

# Navigate to project directory
cd "/home/ngobiro/projects/pngobiro.github.io/colleges/kmtc/diploma/Diploma in Kenya Registered Community Health Nursing/Year 1/Fundamentals of Nursing I/books/Essentials_of_pharmacology_for_nurses_by_Barber,_Paul_Robertson"

# Fix HTML files - change filenames from without leading zero to with leading zero format
echo "Fixing HTML image references..."

# First, let's create a backup
echo "Creating backup..."
cp -r topics/ topics_backup/

# Fix the naming pattern: change -XX- to -0XX- for page numbers < 100
find topics/ -name "*.html" -exec sed -i 's/g-25-/g-025-/g' {} \;
find topics/ -name "*.html" -exec sed -i 's/g-26-/g-026-/g' {} \;  
find topics/ -name "*.html" -exec sed -i 's/g-27-/g-027-/g' {} \;
find topics/ -name "*.html" -exec sed -i 's/g-28-/g-028-/g' {} \;
find topics/ -name "*.html" -exec sed -i 's/g-29-/g-029-/g' {} \;
find topics/ -name "*.html" -exec sed -i 's/g-35-/g-035-/g' {} \;
find topics/ -name "*.html" -exec sed -i 's/g-36-/g-036-/g' {} \;
find topics/ -name "*.html" -exec sed -i 's/g-38-/g-038-/g' {} \;
find topics/ -name "*.html" -exec sed -i 's/g-41-/g-041-/g' {} \;
find topics/ -name "*.html" -exec sed -i 's/g-49-/g-049-/g' {} \;
find topics/ -name "*.html" -exec sed -i 's/g-50-/g-050-/g' {} \;
find topics/ -name "*.html" -exec sed -i 's/g-53-/g-053-/g' {} \;
find topics/ -name "*.html" -exec sed -i 's/g-58-/g-058-/g' {} \;
find topics/ -name "*.html" -exec sed -i 's/g-62-/g-062-/g' {} \;
find topics/ -name "*.html" -exec sed -i 's/g-63-/g-063-/g' {} \;
find topics/ -name "*.html" -exec sed -i 's/g-64-/g-064-/g' {} \;
find topics/ -name "*.html" -exec sed -i 's/g-65-/g-065-/g' {} \;
find topics/ -name "*.html" -exec sed -i 's/g-68-/g-068-/g' {} \;
find topics/ -name "*.html" -exec sed -i 's/g-69-/g-069-/g' {} \;
find topics/ -name "*.html" -exec sed -i 's/g-70-/g-070-/g' {} \;
find topics/ -name "*.html" -exec sed -i 's/g-71-/g-071-/g' {} \;
find topics/ -name "*.html" -exec sed -i 's/g-72-/g-072-/g' {} \;
find topics/ -name "*.html" -exec sed -i 's/g-73-/g-073-/g' {} \;
find topics/ -name "*.html" -exec sed -i 's/g-74-/g-074-/g' {} \;
find topics/ -name "*.html" -exec sed -i 's/g-76-/g-076-/g' {} \;
find topics/ -name "*.html" -exec sed -i 's/g-77-/g-077-/g' {} \;
find topics/ -name "*.html" -exec sed -i 's/g-86-/g-086-/g' {} \;
find topics/ -name "*.html" -exec sed -i 's/g-87-/g-087-/g' {} \;
find topics/ -name "*.html" -exec sed -i 's/g-89-/g-089-/g' {} \;
find topics/ -name "*.html" -exec sed -i 's/g-90-/g-090-/g' {} \;
find topics/ -name "*.html" -exec sed -i 's/g-91-/g-091-/g' {} \;
find topics/ -name "*.html" -exec sed -i 's/g-93-/g-093-/g' {} \;
find topics/ -name "*.html" -exec sed -i 's/g-94-/g-094-/g' {} \;
find topics/ -name "*.html" -exec sed -i 's/g-97-/g-097-/g' {} \;
find topics/ -name "*.html" -exec sed -i 's/g-98-/g-098-/g' {} \;
find topics/ -name "*.html" -exec sed -i 's/g-99-/g-099-/g' {} \;

echo "HTML files updated successfully!"

# Check missing images that still need to be created or found
echo "Images that need to be addressed:"
echo "- 2025_09_27_3dc7bd3278906e468293g-069-2.jpg (exists but not used in HTML)"
echo "- 2025_09_27_3dc7bd3278906e468293g-124-2.jpg (referenced in HTML but missing)"
echo "- 2025_09_27_3dc7bd3278906e468293g-188-1.jpg (referenced in HTML but missing)"
echo "- 2025_09_27_3dc7bd3278906e468293g-189-1.jpg (referenced in HTML but missing)"
echo "- 2025_09_27_3dc7bd3278906e468293g-207-3.jpg (exists but not used in HTML)"

