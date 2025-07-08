This directory contains images extracted from the PDF for Chapter 1.

Image naming convention:
- fig-[chapter]-[number].png (for figures)
- dia-[chapter]-[number].png (for diagrams)
- Example: fig-1-1.png, dia-1-2.png

Original images are extracted from the PDF document using pdfimages or similar tools:
```bash
pdfimages -png networking-notes-data-communication-and-networking.pdf topics/chapter-1/images/
```

Then images can be:
1. Renamed according to convention
2. Optimized for web use
3. Referenced in HTML files using relative paths
4. Added proper alt text for accessibility