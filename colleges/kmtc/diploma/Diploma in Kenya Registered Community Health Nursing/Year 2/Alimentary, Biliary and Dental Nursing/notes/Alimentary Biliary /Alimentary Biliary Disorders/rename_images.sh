#!/bin/bash

# Image renaming script based on content_cleaned.txt mapping
# This maps the timestamp-based filenames to numbered img-N.jpeg format

cd "/home/ngobiro/projects/pngobiro.github.io/colleges/kmtc/diploma/Diploma in Kenya Registered Community Health Nursing/Year 2/Alimentary, Biliary and Dental Nursing/notes/Alimentary Biliary /Alimentary Biliary Disorders/assets/images"

# Create mapping array (timestamp_name -> numbered_name)
declare -A rename_map=(
    ["image-20251225-9d805e34.jpeg"]="img-1.jpeg"
    ["image-20251225-f38697c2.jpeg"]="img-2.jpeg"
    ["image-20251225-c54cfd60.jpeg"]="img-3.jpeg"
    ["image-20251225-3f11633f.jpeg"]="img-4.jpeg"
    ["image-20251225-32fc3ce9.jpeg"]="img-5.jpeg"
    ["image-20251225-76aa462d.jpeg"]="img-6.jpeg"
    ["image-20251225-d489bea0.jpeg"]="img-7.jpeg"
    ["image-20251225-d5d0f7d3.jpeg"]="img-8.jpeg"
    ["image-20251225-e89129b2.jpeg"]="img-9.jpeg"
    ["image-20251225-1f98b945.jpeg"]="img-10.jpeg"
    ["image-20251225-64d1b79d.jpeg"]="img-11.jpeg"
    ["image-20251225-b2c235cf.jpeg"]="img-12.jpeg"
    ["image-20251225-f543ee76.jpeg"]="img-13.jpeg"
    ["image-20251225-6fe8e386.jpeg"]="img-14.jpeg"
    ["image-20251225-80573efa.jpeg"]="img-15.jpeg"
    ["image-20251225-dd1841c1.jpeg"]="img-16.jpeg"
    ["image-20251225-43212b81.jpeg"]="img-17.jpeg"
    ["image-20251225-e94b079d.jpeg"]="img-18.jpeg"
    ["image-20251225-e36533dd.jpeg"]="img-19.jpeg"
    ["image-20251225-43273374.jpeg"]="img-20.jpeg"
    ["image-20251225-e5640eeb.jpeg"]="img-21.jpeg"
    ["image-20251225-ddfeb2e5.jpeg"]="img-22.jpeg"
    ["image-20251225-05497bac.jpeg"]="img-23.jpeg"
    # Note: img-24.jpeg is a duplicate of img-22.jpeg (ddfeb2e5)
    # We'll create a copy for img-24
    ["image-20251225-81442d8d.jpeg"]="img-25.jpeg"
    ["image-20251225-d1c66345.jpeg"]="img-26.jpeg"
)

# Perform renames
echo "Starting image renaming..."
for old_name in "${!rename_map[@]}"; do
    new_name="${rename_map[$old_name]}"
    if [ -f "$old_name" ]; then
        mv "$old_name" "$new_name"
        echo "Renamed: $old_name -> $new_name"
    else
        echo "Warning: $old_name not found"
    fi
done

# Handle img-24.jpeg (duplicate of img-22.jpeg)
if [ -f "img-22.jpeg" ]; then
    cp "img-22.jpeg" "img-24.jpeg"
    echo "Created: img-24.jpeg (copy of img-22.jpeg)"
fi

echo "Renaming complete!"
echo ""
echo "Listing renamed files:"
ls -lh img-*.jpeg | head -30
