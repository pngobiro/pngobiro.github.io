#!/bin/bash

# Remove all PPT and PPTX files from the pdfs directory
echo "Removing PPT and PPTX files..."
rm -f pdfs/*.ppt pdfs/*.pptx

echo "Cleanup complete! Only PDF files remain."