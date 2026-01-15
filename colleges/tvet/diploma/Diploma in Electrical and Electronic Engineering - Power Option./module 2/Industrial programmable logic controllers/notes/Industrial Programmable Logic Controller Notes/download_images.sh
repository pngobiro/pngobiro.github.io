#!/bin/bash

# --- Configuration ---
MMD_FILE=""
OUTPUT_DIR="assets/images"
# Base URL pattern for Mathpix images
MATHPIX_URL_PATTERN='https://cdn\.mathpix\.com/cropped/' # Escaped dots for regex

# --- Helper Functions ---
usage() {
  echo "Usage: $0 <path_to_corrected_mmd_file>"
  echo "Downloads images referenced in the MMD file to the '$OUTPUT_DIR' directory."
  echo "Filenames are generated according to the '[ID]g-[PageNum]-[SeqNum].ext' format."
  exit 1
}

# --- Argument Parsing ---
if [ "$#" -ne 1 ]; then
  usage
fi

MMD_FILE="$1"

if [ ! -f "$MMD_FILE" ]; then
  echo "Error: MMD file not found: $MMD_FILE"
  exit 1
fi

# --- Directory Setup ---
echo "Ensuring output directory exists: $OUTPUT_DIR"
mkdir -p "$OUTPUT_DIR"
if [ $? -ne 0 ]; then
    echo "Error: Could not create directory $OUTPUT_DIR"
    exit 1
fi

# --- Image Extraction and Download ---
echo "Processing MMD file: $MMD_FILE"
echo "Downloading images to: $OUTPUT_DIR"

# Use awk to process the MMD file line by line
# - Uses standard awk functions (index, substr) for portability.
# - Revised URL extraction focusing on parentheses.
awk -v outputDir="$OUTPUT_DIR" -v urlPattern="$MATHPIX_URL_PATTERN" '
/!\[\]\(/ && $0 ~ urlPattern {
    # Find the position of the opening parenthesis directly
    open_paren_pos = index($0, "(");
    # Find the position of the closing parenthesis starting search *after* the opening one
    close_paren_pos_rel = index(substr($0, open_paren_pos + 1), ")");

    if (open_paren_pos > 0 && close_paren_pos_rel > 0) {
        # Calculate the length of the URL
        url_length = close_paren_pos_rel - 1;
        # Extract the URL
        imageUrl = substr($0, open_paren_pos + 1, url_length);

        # --- Rest of the processing logic ---

        # Remove query parameters to get base URL for filename extraction
        baseUrl = imageUrl
        query_pos = index(baseUrl, "?");
        if (query_pos > 0) {
            baseUrl = substr(baseUrl, 1, query_pos - 1);
        }

        # Extract the filename part (e.g., 2025_05_05_xxx_IDg-PageNum.ext)
        last_slash = 0;
        temp_pos = 0;
        # Find the position of the last slash iteratively
        current_offset = 1;
        while ((temp_pos = index(substr(baseUrl, current_offset), "/")) > 0) {
             last_slash = current_offset + temp_pos -1;
             current_offset = last_slash + 1;
        }
        if (last_slash > 0) {
             filenamePart = substr(baseUrl, last_slash + 1);
        } else {
             # Handle case where URL might not have slashes
             filenamePart = baseUrl;
        }

        # Determine the base filename and extension
        # Find the *last* dot for the extension
        last_dot = 0;
        temp_pos = 0;
        current_offset = 1;
        while ((temp_pos = index(substr(filenamePart, current_offset), ".")) > 0) {
            last_dot = current_offset + temp_pos - 1;
            current_offset = last_dot + 1;
        }

        extension = "";
        baseFilenameWithoutExt = filenamePart;
        if(last_dot > 0){
           extension = substr(filenamePart, last_dot + 1);
           baseFilenameWithoutExt = substr(filenamePart, 1, last_dot);
        }

        # Increment sequence counter for this specific base filename part
        sequenceNum = ++counts[filenamePart]; # Use full filenamepart as key

        # Construct the final output filename
        finalFilename = baseFilenameWithoutExt "-" sequenceNum "." extension;
        outputPath = outputDir "/" finalFilename;

        # Print the curl command to download the image
        printf "echo \"Downloading %s -> %s\"\n", imageUrl, finalFilename;
        printf "curl -fLs -o \"%s\" \"%s\"\n", outputPath, imageUrl;

    } else {
         print "Warning: Could not find parentheses surrounding URL on line: " $0 > "/dev/stderr";
    }
}
' "$MMD_FILE" | bash # Pipe the generated commands directly to bash for execution


echo "---"
# Check if any commands were generated/executed
command_count=$(awk '/!\[\]\(/ && $0 ~ /https:\/\/cdn\.mathpix\.com\/cropped\// {count++} END {print count+0}' "$MMD_FILE")

if [ "$command_count" -eq 0 ]; then
  echo "No Mathpix image URLs found matching the pattern in the MMD file."
else
  echo "Image download process finished. Attempted to download $command_count images."
  echo "Please check the '$OUTPUT_DIR' directory."
  echo "Note: If curl reported errors, some images may not have downloaded."
fi

exit 0