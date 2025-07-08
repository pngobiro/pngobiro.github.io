#!/bin/bash

# --- Configuration ---
MMD_FILE="mechanical-science-thanks.mmd" # Input MMD file name
OUTPUT_DIR="assets/images" # Output directory for images
PROJECT_ROOT="/" # Project root relative to script location (if needed)

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

# Use grep to find all Mathpix image URLs
# Use awk to process each URL, generate the correct filename, and print curl command
grep -oP 'https://cdn\.mathpix\.com/cropped/[^)]+' "$MMD_FILE" | \
awk -v output_dir="$OUTPUT_DIR" '
BEGIN {
    # Define associative array to keep track of sequence numbers for each base image
    FS="/" # Use / as field separator for URL parsing
    OFS="-" # Use - as output field separator for filename parts
}
{
    full_url = $0; # Store the full URL

    # Extract the filename part (e.g., 2025_05_06_5efae30b5978304d80a5g-005.jpg?...)
    split(full_url, url_parts, "/");
    filename_with_query = url_parts[length(url_parts)];

    # Remove query string part (anything after ?)
    split(filename_with_query, filename_parts, "?");
    base_filename = filename_parts[1];

    # Extract the file extension (e.g., jpg, png)
    split(base_filename, ext_parts, ".");
    extension = ext_parts[length(ext_parts)];

    # Extract the core part used for sequencing (e.g., 2025_05_06_5efae30b5978304d80a5g-005)
    # This assumes format [ID]g-[PageNum]
    id_page = substr(base_filename, 1, length(base_filename) - length(extension) - 1);

    # Increment the count for this specific base image ID and PageNum
    count[id_page]++;
    seq_num = count[id_page];

    # Construct the final output filename according to the convention
    # [ID]g-[PageNum]-[SeqNum].ext
    output_filename = id_page OFS seq_num "." extension;

    # Print progress message and the curl command
    # Use -f to fail on server errors, -sS for silent progress but show errors, -L to follow redirects
    printf "echo \"---> Downloading image from page %s (Seq %d) -> %s\"\n", id_page, seq_num, output_filename;
    printf "curl -f -sS -L -o \"%s/%s\" \"%s\"\n", output_dir, output_filename, full_url;

}
' | bash # Pipe the generated commands to bash for execution

echo "Image download process finished."
echo "Please check the '$OUTPUT_DIR' directory."

exit 0
