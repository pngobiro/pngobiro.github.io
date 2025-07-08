# Instructions for Generating .mmd and .txt Files from PDFs

This document outlines the steps to generate .mmd files from PDF files using Mathpix OCR and then create copies of those .mmd files with the .txt extension.

## Prerequisites

*   **Mathpix OCR Server:** You need to have the Mathpix OCR server installed and running. Instructions for setting up the server can be found [here](link to Mathpix OCR server setup).
*   **Node.js:** Ensure Node.js is installed on your system.

## Steps

1.  **Generate .mmd Files:**

    Use the following command to process all PDF files in a directory and generate corresponding .mmd files:

    ```bash
    for pdf in *.pdf; do
      outname="${pdf%.*}_ocr.mmd"
      echo "Processing $pdf -> $outname"
      node /home/ngobiro/projects/mathpix-ocr-server/build/index.js "$pdf" > "$outname"
    done
    ```

    *   This command loops through all files with the `.pdf` extension in the current directory.
    *   For each PDF file, it generates an output filename with the `_ocr.mmd` suffix.
    *   It then executes the Mathpix OCR server script to convert the PDF to MMD format and saves the output to the generated filename.

2.  **Create .txt Copies:**

    After generating the .mmd files, use the following command to create a copy of each .mmd file with the `.txt` extension:

    ```bash
    for mmd in *_ocr.mmd; do
      cp "$mmd" "${mmd%.mmd}.txt"
    done
    ```

    *   This command loops through all files with the `_ocr.mmd` suffix in the current directory.
    *   For each .mmd file, it creates a copy with the same name but with the `.txt` extension.

## Notes

*   Ensure that you are in the correct directory containing the PDF files before running these commands.
*   The Mathpix OCR server path (`/home/ngobiro/projects/mathpix-ocr-server/build/index.js`) should be adjusted based on your actual installation location.