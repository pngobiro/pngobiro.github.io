#!/usr/bin/env python3
"""
Split PDF by units based on bookmark information.
"""

import PyPDF2
import re

def split_pdf_by_units():
    # Define units with their start and end pages (1-indexed)
    units = [
        {
            "name": "Unit 1 - The Aging Experience",
            "start": 55,  # Page 55
            "end": 227    # Page before Unit 2 starts (228)
        },
        {
            "name": "Unit 2 - Foundations of Gerontological Nursing",
            "start": 228,  # Page 228
            "end": 392    # Page before Unit 3 starts (393)
        },
        {
            "name": "Unit 3 - Health Promotion",
            "start": 393,  # Page 393
            "end": 594    # Page before Unit 4 starts (595)
        },
        {
            "name": "Unit 4 - Geriatric Care",
            "start": 595,  # Page 595
            "end": 1760   # Last page
        }
    ]

    # Open the source PDF
    source_pdf = "Gerontological Nursing, 10e - Charlotte Eliopoulos.pdf"

    with open(source_pdf, 'rb') as file:
        reader = PyPDF2.PdfReader(file)
        total_pages = len(reader.pages)

        print(f"Total pages in PDF: {total_pages}")
        print(f"Splitting into {len(units)} units...\n")

        for i, unit in enumerate(units, 1):
            print(f"Processing {unit['name']}...")
            print(f"  Pages: {unit['start']} - {unit['end']}")

            # Adjust for 0-indexed pages
            start_page = unit['start'] - 1
            end_page = unit['end']  # PyPDF2 slice is exclusive at end

            # Create a new PDF writer for this unit
            writer = PyPDF2.PdfWriter()

            # Add pages to the new PDF
            for page_num in range(start_page, end_page):
                writer.add_page(reader.pages[page_num])

            # Save the unit PDF
            output_filename = f"{i}. {unit['name']}.pdf"
            with open(output_filename, 'wb') as output_file:
                writer.write(output_file)

            print(f"  Created: {output_filename}")
            print(f"  Pages: {end_page - start_page}\n")

    print("PDF splitting completed successfully!")

if __name__ == "__main__":
    split_pdf_by_units()