#!/bin/bash

# --- Configuration ---
MMD_FILE=""
OUTPUT_DIR="assets/images"
MAPPING_FILE="image_mapping.csv" # File to store the URL-to-Filename mapping
# Base URL pattern for Mathpix images
MATHPIX_URL_PATTERN='^!\[\]\(https://cdn\.mathpix\.com/cropped/[^)]+\)' # More specific regex

# --- Helper Functions ---
usage() {
  echo "Usage: $0 <path_to_corrected_mmd_file>"
  echo "Downloads images referenced in the MMD file to the '$OUTPUT_DIR' directory"
  echo "and creates a mapping file '$MAPPING_FILE'."
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

# --- Directory & Mapping File Setup ---
echo "Ensuring output directory exists: $OUTPUT_DIR"
mkdir -p "$OUTPUT_DIR"
if [ $? -ne 0 ]; then
    echo "Error: Could not create directory $OUTPUT_DIR"
    exit 1
fi

echo "Preparing mapping file: $MAPPING_FILE"
echo "OriginalURL,TargetFilename" > "$MAPPING_FILE"
if [ $? -ne 0 ]; then
    echo "Error: Could not write to mapping file $MAPPING_FILE"
    exit 1
fi

# --- Image Extraction, Download, and Mapping ---
echo "Processing MMD file: $MMD_FILE"
echo "Downloading images to: $OUTPUT_DIR"
echo "Creating mapping in: $MAPPING_FILE"

# Use awk to process the MMD file line by line
# - Uses more specific regex and robust extraction/filename logic.
awk -v outputDir="$OUTPUT_DIR" -v mappingFile="$MAPPING_FILE" -v urlPattern="$MATHPIX_URL_PATTERN" '
# Match lines starting with the specific Markdown image pattern for Mathpix URLs
$0 ~ urlPattern {
    # Extract URL using gsub - remove prefix ![] ( and suffix )
    imageUrl = $0;
    gsub(/^!\[\]\(/, "", imageUrl); # Remove prefix
    gsub(/\).*/, "", imageUrl);    # Remove suffix starting from )

    # --- Filename Calculation Logic ---
    baseUrl = imageUrl;
    query_pos = index(baseUrl, "?");
    if (query_pos > 0) {
        baseUrl = substr(baseUrl, 1, query_pos - 1);
    }

    # Extract the filename part (e.g., 2025_05_05_xxx_IDg-PageNum.ext)
    # Find the last slash
    last_slash = -1; # Use -1 to indicate not found initially
    for (i = length(baseUrl); i >= 1; i--) {
        if (substr(baseUrl, i, 1) == "/") {
            last_slash = i;
            break;
        }
    }

    if (last_slash != -1) {
         filenamePart = substr(baseUrl, last_slash + 1);
    } else {
         filenamePart = baseUrl; # Should not happen for these URLs
    }

    # Determine the base filename and extension robustly
    # Find the last dot
    last_dot = -1; # Use -1 to indicate not found initially
    for (i = length(filenamePart); i >= 1; i--) {
        if (substr(filenamePart, i, 1) == ".") {
            last_dot = i;
            break;
        }
    }

    extension = "";
    baseFilenameWithoutExt = filenamePart;
    if(last_dot != -1 && last_dot > 1){ # Ensure dot is not the first character
       extension = substr(filenamePart, last_dot + 1);
       baseFilenameWithoutExt = substr(filenamePart, 1, last_dot - 1); # Corrected substr length
    } else {
       # Handle cases with no extension (unlikely for images)
       extension = "unknown";
    }

    # Increment sequence counter *only for the base part without extension*
    # This groups page numbers correctly regardless of potential minor URL variations
    # Use baseFilenameWithoutExt as the key
    sequenceNum = ++counts[baseFilenameWithoutExt];

    # Construct the final output filename - CORRECTED
    finalFilename = baseFilenameWithoutExt "-" sequenceNum "." extension;
    outputPath = outputDir "/" finalFilename;

    # --- Generate Output ---
    # 1. Append to Mapping File
    printf "%s,%s\n", imageUrl, finalFilename >> mappingFile;

    # 2. Generate curl command for execution
    printf "echo \"Mapping %s -> %s\"\n", imageUrl, finalFilename;
    printf "curl -fLs -o \"%s\" \"%s\"\n", outputPath, imageUrl;

}
' "$MMD_FILE" | bash # Pipe the generated curl commands directly to bash for execution


echo "---"
# Check count based on the corrected, more specific pattern
command_count=$(awk '$0 ~ /^!\[\]\(https:\/\/cdn\.mathpix\.com\/cropped\/[^)]+\)/ {count++} END {print count+0}' "$MMD_FILE")


if [ "$command_count" -eq 0 ]; then
  echo "No Mathpix image URLs found matching the specific pattern in the MMD file."
else
  echo "Image download/mapping process finished. Processed $command_count image lines."
  echo "Downloads attempted to '$OUTPUT_DIR'."
  echo "URL-to-Filename mapping saved to '$MAPPING_FILE'."
  echo "Please check the mapping file and the images directory."
  echo "Note: If curl reported errors, some images may not have downloaded automatically."
fi

exit 0