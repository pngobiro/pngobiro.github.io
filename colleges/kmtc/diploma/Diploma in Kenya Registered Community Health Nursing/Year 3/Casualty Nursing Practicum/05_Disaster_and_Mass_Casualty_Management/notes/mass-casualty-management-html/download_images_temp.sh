#!/bin/bash

set -e # Exit immediately if a command exits with a non-zero status.

# --- Configuration ---
MMD_FILE="masscasualtymanagement-final-170816151339.mmd" # Input MMD file name
OUTPUT_DIR="mass-casualty-management-html/assets/images" # Output directory for images

# --- Ensure Output Directory Exists ---
mkdir -p "$OUTPUT_DIR"
if [ ! -d "$OUTPUT_DIR" ]; then
    echo "Error: Could not create output directory '$OUTPUT_DIR'."
    exit 1
fi

echo "Starting image download process..."
echo "Input MMD: $MMD_FILE"
echo "Output Directory: $OUTPUT_DIR"

# --- Extract URLs and Generate Curl Commands ---

# Create a temporary file to store curl commands
CURL_COMMANDS_FILE="/tmp/curl_commands.sh"
> "$CURL_COMMANDS_FILE" # Clear the file if it exists

# Use grep to find all Mathpix image URLs
# Use awk to process each URL, generate the correct filename, and print curl command to the temp file
grep -oP 'https://cdn\.mathpix\.com/cropped/[^)]+' "$MMD_FILE" | \
awk -v output_dir="$OUTPUT_DIR" 'BEGIN { FS="/"; OFS="-" } { full_url = $0; split(full_url, url_parts, "/"); filename_with_query = url_parts[length(url_parts)]; split(filename_with_query, filename_parts, "?"); base_filename = filename_parts[1]; split(base_filename, ext_parts, "."); extension = ext_parts[length(ext_parts)]; id_page = substr(base_filename, 1, length(base_filename) - length(extension) - 1); count[id_page]++; seq_num = count[id_page]; output_filename = id_page OFS seq_num "." extension; printf "echo \"---> Downloading image from page %s (Seq %d) -> %s\\n\"\n", id_page, seq_num, output_filename; printf "curl -f -L -o \"%s/%s\" \"%s\"\n", output_dir, output_filename, full_url; }' >> "$CURL_COMMANDS_FILE"

# Execute the generated curl commands
echo "Executing generated curl commands..."
bash "$CURL_COMMANDS_FILE"

echo "Image download process finished."
echo "Please check the '$OUTPUT_DIR' directory."

exit 0