#!/usr/bin/env python3
"""
Direct PDF to image extraction script using pdf2image
This converts PDF pages to images directly without relying on external services.
"""

import os
import sys
import argparse
from pathlib import Path
from datetime import datetime
try:
    from pdf2image import convert_from_path
    from PIL import Image
except ImportError as e:
    print(f"Missing required libraries: {e}")
    print("Please install them with: pip install pdf2image pillow")
    print("You may also need to install poppler: sudo apt-get install poppler-utils")
    sys.exit(1)


class PDFImageExtractor:
    """Extract pages from PDF as images."""
    
    def __init__(self, pdf_path, output_folder="assets/images", dpi=200, format="JPEG"):
        """
        Initialize the PDF image extractor.
        
        Args:
            pdf_path: Path to the PDF file
            output_folder: Folder where images will be saved
            dpi: Resolution for the extracted images (higher = better quality but larger files)
            format: Image format (JPEG, PNG, etc.)
        """
        self.pdf_path = pdf_path
        self.output_folder = output_folder
        self.dpi = dpi
        self.format = format
        self.current_date = datetime.now().strftime("%Y%m%d")
        
    def validate_pdf(self) -> bool:
        """Validate that the PDF file exists and is readable."""
        if not os.path.exists(self.pdf_path):
            print(f"❌ Error: PDF file '{self.pdf_path}' not found.")
            return False
        
        if not os.path.isfile(self.pdf_path):
            print(f"❌ Error: '{self.pdf_path}' is not a file.")
            return False
        
        if not self.pdf_path.lower().endswith('.pdf'):
            print(f"❌ Error: '{self.pdf_path}' is not a PDF file.")
            return False
        
        return True
    
    def create_output_folder(self) -> bool:
        """Create output folder if it doesn't exist."""
        try:
            Path(self.output_folder).mkdir(parents=True, exist_ok=True)
            return True
        except Exception as e:
            print(f"❌ Error: Cannot create folder '{self.output_folder}': {e}")
            return False
    
    def extract_images(self) -> bool:
        """
        Extract PDF pages as images.
        
        Returns:
            True if successful, False otherwise
        """
        # Validate inputs
        if not self.validate_pdf():
            return False
        
        if not self.create_output_folder():
            return False
        
        print(f"\n📖 Processing PDF: {self.pdf_path}")
        print(f"📁 Output folder: {self.output_folder}")
        print(f"🔍 DPI: {self.dpi}")
        print(f"🖼️  Format: {self.format}")
        print(f"\n⏳ Extracting pages as images...")
        
        try:
            # Convert PDF to list of images
            images = convert_from_path(
                self.pdf_path,
                dpi=self.dpi,
                fmt=self.format,
                thread_count=4,
                use_pdftocairo=True,
                transparent=False
            )
            
            if not images:
                print("❌ No images extracted from PDF")
                return False
            
            # Save each image
            saved_files = []
            total_size = 0
            
            for i, image in enumerate(images, 1):
                # Generate filename
                pdf_name = Path(self.pdf_path).stem
                filename = f"{pdf_name}_page_{i:03d}_{self.current_date}.{self.format.lower()}"
                filepath = os.path.join(self.output_folder, filename)
                
                # Save image
                image.save(filepath, self.format)
                
                # Get file size
                file_size = os.path.getsize(filepath)
                total_size += file_size
                
                saved_files.append({
                    'filename': filename,
                    'filepath': filepath,
                    'size_kb': file_size / 1024,
                    'size_mb': file_size / (1024 * 1024),
                    'width': image.width,
                    'height': image.height
                })
                
                print(f"  ✓ Page {i:3d}: {filename} ({image.width}x{image.height}, {file_size/1024:.1f} KB)")
            
            # Generate HTML file with images
            html_content = self.generate_html(saved_files)
            html_file = os.path.join(
                os.path.dirname(self.pdf_path),
                f"{Path(self.pdf_path).stem}_extracted.html"
            )
            
            with open(html_file, 'w', encoding='utf-8') as f:
                f.write(html_content)
            
            # Print summary
            print(f"\n{'='*60}")
            print(f"✅ Extraction Complete!")
            print(f"{'='*60}")
            print(f"  📊 Statistics:")
            print(f"     • Pages extracted: {len(images)}")
            print(f"     • Total size: {total_size / (1024*1024):.1f} MB")
            print(f"     • Average size per page: {(total_size/len(images)) / 1024:.1f} KB")
            print(f"  📁 Output:")
            print(f"     • Images folder: {self.output_folder}/")
            print(f"     • HTML file: {html_file}")
            print(f"{'='*60}\n")
            
            return True
            
        except Exception as e:
            print(f"❌ Error extracting images: {e}")
            return False
    
    def generate_html(self, saved_files) -> str:
        """Generate HTML file with all extracted images."""
        pdf_name = Path(self.pdf_path).stem
        
        html = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{pdf_name} - Extracted Pages</title>
    <style>
        body {{
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f5f5f5;
        }}
        .container {{
            max-width: 1200px;
            margin: 0 auto;
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }}
        h1 {{
            color: #333;
            text-align: center;
            margin-bottom: 30px;
        }}
        .page {{
            margin-bottom: 30px;
            border: 1px solid #ddd;
            border-radius: 4px;
            overflow: hidden;
        }}
        .page-header {{
            background-color: #f8f9fa;
            padding: 10px 15px;
            border-bottom: 1px solid #ddd;
            font-weight: bold;
            color: #495057;
        }}
        .page-image {{
            display: block;
            max-width: 100%;
            height: auto;
            margin: 0 auto;
        }}
        .stats {{
            margin-top: 30px;
            padding: 15px;
            background-color: #e9ecef;
            border-radius: 4px;
        }}
        .navigation {{
            text-align: center;
            margin-bottom: 20px;
        }}
        .nav-button {{
            display: inline-block;
            padding: 8px 16px;
            margin: 0 5px;
            background-color: #007bff;
            color: white;
            text-decoration: none;
            border-radius: 4px;
            cursor: pointer;
        }}
        .nav-button:hover {{
            background-color: #0056b3;
        }}
    </style>
</head>
<body>
    <div class="container">
        <h1>{pdf_name} - Extracted Pages</h1>
        
        <div class="navigation">
            <a href="#page-1" class="nav-button">First Page</a>
            <a href="#page-{len(saved_files)}" class="nav-button">Last Page</a>
        </div>
        
        <div class="stats">
            <strong>Total Pages:</strong> {len(saved_files)} | 
            <strong>Total Size:</strong> {sum(f['size_mb'] for f in saved_files):.1f} MB |
            <strong>Extraction Date:</strong> {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
        </div>
"""
        
        for i, file_info in enumerate(saved_files, 1):
            html += f"""
        <div class="page" id="page-{i}">
            <div class="page-header">
                Page {i} - {file_info['filename']} ({file_info['width']}x{file_info['height']}, {file_info['size_kb']:.1f} KB)
            </div>
            <img src="{file_info['filepath']}" alt="Page {i}" class="page-image">
        </div>
"""
        
        html += """
    </div>
    
    <script>
        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            const pages = document.querySelectorAll('.page');
            let current = 0;
            
            // Find current page in view
            for (let i = 0; i < pages.length; i++) {
                const rect = pages[i].getBoundingClientRect();
                if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
                    current = i;
                    break;
                }
            }
            
            if (e.key === 'ArrowDown' && current < pages.length - 1) {
                e.preventDefault();
                pages[current + 1].scrollIntoView({ behavior: 'smooth' });
            } else if (e.key === 'ArrowUp' && current > 0) {
                e.preventDefault();
                pages[current - 1].scrollIntoView({ behavior: 'smooth' });
            }
        });
    </script>
</body>
</html>
"""
        return html


def main():
    """Main entry point."""
    parser = argparse.ArgumentParser(
        description='Extract PDF pages as images using pdf2image.',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  %(prog)s document.pdf
  %(prog)s document.pdf -o images -d 300
  %(prog)s document.pdf --format PNG
        """
    )
    
    parser.add_argument('pdf_path', help='Path to the PDF file')
    parser.add_argument('-o', '--output-folder', default='assets/images',
                        help='Output folder for extracted images (default: assets/images)')
    parser.add_argument('-d', '--dpi', type=int, default=200,
                        help='Resolution in DPI (default: 200)')
    parser.add_argument('-f', '--format', choices=['JPEG', 'PNG'], default='JPEG',
                        help='Image format (default: JPEG)')
    
    args = parser.parse_args()
    
    # Create extractor and run
    extractor = PDFImageExtractor(
        pdf_path=args.pdf_path,
        output_folder=args.output_folder,
        dpi=args.dpi,
        format=args.format
    )
    
    success = extractor.extract_images()
    sys.exit(0 if success else 1)


if __name__ == "__main__":
    main()