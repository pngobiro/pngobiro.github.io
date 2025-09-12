#!/bin/bash

# =============================================================================
# Image Download Script for MMD Files
# =============================================================================
# This script extracts image URLs from MMD files and downloads them with 
# sequential naming convention: [ID]g-[PageNum]-[SeqNum].ext
# 
# Usage: bash download_images.sh
# =============================================================================

# --- Configuration ---
MMD_FILE="ophthalmic-nursing.mmd" # Input MMD file name
OUTPUT_DIR="assets/images" # Output directory for images
PROJECT_ROOT="/" # Project root relative to script location (if needed)

# --- Color codes for better output ---
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# --- Function to print colored output ---
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_progress() {
    echo -e "${BLUE}[PROGRESS]${NC} $1"
}

# --- Check if MMD file exists ---
if [ ! -f "$MMD_FILE" ]; then
    print_error "MMD file '$MMD_FILE' not found!"
    exit 1
fi

# --- Ensure Output Directory Exists ---
mkdir -p "$OUTPUT_DIR"
if [ ! -d "$OUTPUT_DIR" ]; then
    print_error "Could not create output directory '$OUTPUT_DIR'."
    exit 1
fi

print_status "Starting image download process..."
print_status "Input MMD: $MMD_FILE"
print_status "Output Directory: $OUTPUT_DIR"

# --- Count total URLs for progress tracking ---
TOTAL_URLS=$(grep -c 'https://cdn\.mathpix\.com/cropped/' "$MMD_FILE")
print_status "Found $TOTAL_URLS image URLs to process"

# --- Initialize counters ---
SUCCESS_COUNT=0
ERROR_COUNT=0
CURRENT_COUNT=0

# --- Extract URLs and Generate Curl Commands ---
# Use grep to find all Mathpix image URLs
# Use awk to process each URL, generate the correct filename, and execute curl
grep -oP 'https://cdn\.mathpix\.com/cropped/[^)]+' "$MMD_FILE" | \
awk -v output_dir="$OUTPUT_DIR" -v total_urls="$TOTAL_URLS" '
BEGIN {
    # Define associative array to keep track of sequence numbers for each base image
    FS="/" # Use / as field separator for URL parsing
    OFS="-" # Use - as output field separator for filename parts
    current_count = 0;
    success_count = 0;
    error_count = 0;
}
{
    current_count++;
    full_url = $0; # Store the full URL
    
    # Clean up the URL by removing trailing braces, brackets, or other problematic characters
    gsub(/[}\]]+$/, "", full_url);
    gsub(/[[:space:]]+$/, "", full_url); # Remove trailing whitespace
    
    # Extract the filename part (e.g., 2025_08_29_b97cd1d1768641963375g-031.jpg?...)
    split(full_url, url_parts, "/");
    filename_with_query = url_parts[length(url_parts)];
    
    # Remove query string part (anything after ?)
    split(filename_with_query, filename_parts, "?");
    base_filename = filename_parts[1];
    
    # Extract the file extension (e.g., jpg, png)
    split(base_filename, ext_parts, ".");
    extension = ext_parts[length(ext_parts)];
    
    # Extract the core part used for sequencing (e.g., 2025_08_29_b97cd1d1768641963375g-031)
    # This assumes format [ID]g-[PageNum]
    id_page = substr(base_filename, 1, length(base_filename) - length(extension) - 1);
    
    # Increment the count for this specific base image ID and PageNum
    count[id_page]++;
    seq_num = count[id_page];
    
    # Construct the final output filename according to the convention
    # [ID]g-[PageNum]-[SeqNum].ext
    output_filename = id_page OFS seq_num "." extension;
    output_path = output_dir "/" output_filename;
    
    # Print progress message
    printf "\033[0;34m[PROGRESS]\033[0m (%d/%d) Downloading: %s (Seq %d) -> %s\n", current_count, total_urls, id_page, seq_num, output_filename;
    
    # Check if file already exists
    if (system("test -f \"" output_path "\"") == 0) {
        printf "\033[1;33m[WARNING]\033[0m File already exists, skipping: %s\n", output_filename;
        next;
    }
    
    # Execute curl command and capture return code
    curl_cmd = sprintf("curl -f -sS -L --connect-timeout 30 --max-time 120 -o \"%s\" \"%s\"", output_path, full_url);
    return_code = system(curl_cmd);
    
    if (return_code == 0) {
        # Verify the file was actually created and has content
        if (system("test -s \"" output_path "\"") == 0) {
            printf "\033[0;32m[SUCCESS]\033[0m Downloaded: %s\n", output_filename;
            success_count++;
        } else {
            printf "\033[0;31m[ERROR]\033[0m Downloaded file is empty: %s\n", output_filename;
            system("rm -f \"" output_path "\""); # Remove empty file
            error_count++;
        }
    } else {
        printf "\033[0;31m[ERROR]\033[0m Failed to download: %s (curl exit code: %d)\n", output_filename, return_code;
        printf "\033[0;31m[ERROR]\033[0m URL was: %s\n", full_url;
        error_count++;
    }
    
    # Small delay to be respectful to the server
    system("sleep 0.1");
}
END {
    printf "\n\033[0;32m[INFO]\033[0m Download process completed!\n";
    printf "\033[0;32m[INFO]\033[0m Processed: %d URLs\n", current_count;
    printf "\033[0;32m[INFO]\033[0m Successful: %d\n", success_count;
    if (error_count > 0) {
        printf "\033[0;31m[INFO]\033[0m Failed: %d\n", error_count;
    }
    printf "\033[0;32m[INFO]\033[0m Check the '"'"'%s'"'"' directory for downloaded images.\n", output_dir;
}'

# --- Final status report ---
echo ""
print_status "Image download process finished."
print_status "Please check the '$OUTPUT_DIR' directory."

# --- Optional: List downloaded files ---
if [ "$(ls -A "$OUTPUT_DIR" 2>/dev/null)" ]; then
    echo ""
    print_status "Downloaded files:"
    ls -la "$OUTPUT_DIR" | grep "^-" | wc -l | xargs printf "Total files: %s\n"
    echo ""
    print_status "Sample of downloaded files:"
    ls "$OUTPUT_DIR" | head -10
    if [ $(ls "$OUTPUT_DIR" | wc -l) -gt 10 ]; then
        echo "... and $(($(ls "$OUTPUT_DIR" | wc -l) - 10)) more files"
    fi
else
    print_warning "No files were downloaded to '$OUTPUT_DIR'"
fi

echo ""
print_status "Script execution completed."
exit 0