#!/usr/bin/env python3
"""
Robust script to extract base64-encoded images from HTML content.
Saves images as files and replaces base64 data with file references.
"""

import re
import base64
import os
import sys
import argparse
import hashlib
from pathlib import Path
from typing import Tuple, Optional
from datetime import datetime


class ImageExtractor:
    """Extract and manage base64 images from HTML content."""
    
    def __init__(self, input_file: str, output_folder: str = "assets/images", 
                 output_file: Optional[str] = None, replace_original: bool = False,
                 naming_style: str = "mathpix"):
        """
        Initialize the image extractor.
        
        Args:
            input_file: Path to the HTML file containing base64 images
            output_folder: Folder where extracted images will be saved
            output_file: Path to save the modified HTML (None = auto-generate)
            replace_original: If True, replace the original file
            naming_style: Naming style - 'mathpix' (hash+date), 'hash', 'sequential'
        """
        self.input_file = input_file
        self.output_folder = output_folder
        self.output_file = output_file
        self.replace_original = replace_original
        self.naming_style = naming_style
        self.image_counter = 1
        self.extracted_count = 0
        self.failed_count = 0
        self.total_size = 0
        self.current_date = datetime.now().strftime("%Y%m%d")
        
        # Enhanced pattern to match various base64 image formats
        self.pattern = r'<img\s+([^>]*?)src="data:image/(jpeg|jpg|png|gif|webp|bmp|svg\+xml);base64,([^"]+)"([^>]*?)>'
        # Pattern to match regular image references
        self.img_ref_pattern = r'<img\s+[^>]*?src="([^"]+)"[^>]*?>'
        
    def validate_input(self) -> bool:
        """Validate input file exists and is readable."""
        if not os.path.exists(self.input_file):
            print(f"❌ Error: Input file '{self.input_file}' not found.")
            return False
        
        if not os.path.isfile(self.input_file):
            print(f"❌ Error: '{self.input_file}' is not a file.")
            return False
        
        try:
            with open(self.input_file, 'r', encoding='utf-8') as f:
                f.read(1)
            return True
        except Exception as e:
            print(f"❌ Error: Cannot read file '{self.input_file}': {e}")
            return False
    
    def create_output_folder(self) -> bool:
        """Create output folder if it doesn't exist."""
        try:
            Path(self.output_folder).mkdir(parents=True, exist_ok=True)
            return True
        except Exception as e:
            print(f"❌ Error: Cannot create folder '{self.output_folder}': {e}")
            return False
    
    def get_image_hash(self, image_data: bytes, length: int = 8) -> str:
        """Generate MD5 hash for image data."""
        return hashlib.md5(image_data).hexdigest()[:length]
    
    def generate_filename(self, image_data: bytes, image_type: str) -> str:
        """
        Generate filename based on naming style.
        
        Styles:
        - mathpix: image-YYYYMMDD-HASH.ext (e.g., image-20231209-a3f5b2c1.jpeg)
        - hash: img_HASH.ext (e.g., img_a3f5b2c1.jpeg)
        - sequential: image_001.ext (e.g., image_001.jpeg)
        """
        # Normalize image type
        if image_type == 'jpg':
            image_type = 'jpeg'
        elif image_type == 'svg+xml':
            image_type = 'svg'
        
        if self.naming_style == "mathpix":
            img_hash = self.get_image_hash(image_data, length=8)
            filename = f"image-{self.current_date}-{img_hash}.{image_type}"
        elif self.naming_style == "hash":
            img_hash = self.get_image_hash(image_data, length=12)
            filename = f"img_{img_hash}.{image_type}"
        else:  # sequential
            filename = f"image_{self.image_counter:03d}.{image_type}"
        
        return filename
    
    def save_image(self, image_data: bytes, image_type: str) -> Tuple[bool, str]:
        """
        Save image data to file.
        
        Returns:
            Tuple of (success: bool, filename: str)
        """
        try:
            # Generate filename
            filename = self.generate_filename(image_data, image_type)
            filepath = os.path.join(self.output_folder, filename)
            
            # Check if file already exists (for hash-based naming)
            if os.path.exists(filepath) and self.naming_style in ["mathpix", "hash"]:
                print(f"  ⚠ Skipped: {filename} (already exists)")
                return True, filename
            
            # Save image
            with open(filepath, 'wb') as img_file:
                img_file.write(image_data)
            
            size_kb = len(image_data) / 1024
            print(f"  ✓ Saved: {filename} ({size_kb:.1f} KB)")
            
            self.total_size += len(image_data)
            return True, filename
            
        except Exception as e:
            print(f"  ❌ Error saving image: {e}")
            return False, ""
    
    def replace_image_callback(self, match) -> str:
        """Callback function to replace each base64 image with file reference."""
        # Get match groups
        prefix_attrs = match.group(1)  # Attributes before src
        image_type = match.group(2)
        base64_data = match.group(3)
        suffix_attrs = match.group(4)  # Attributes after src
        
        try:
            # Decode base64 data
            image_data = base64.b64decode(base64_data, validate=True)
            
            # Validate image data (basic check)
            if len(image_data) < 100:
                raise ValueError("Image data too small, possibly corrupted")
            
            # Save image
            success, filename = self.save_image(image_data, image_type)
            
            if success:
                self.extracted_count += 1
                # Create the replacement string with file reference
                replacement = f'<img {prefix_attrs}src="{self.output_folder}/{filename}"{suffix_attrs}>'
            else:
                self.failed_count += 1
                # Return original if save failed
                replacement = match.group(0)
            
            self.image_counter += 1
            return replacement
            
        except Exception as e:
            print(f"  ❌ Error processing image {self.image_counter}: {e}")
            self.failed_count += 1
            self.image_counter += 1
            return match.group(0)  # Return original if error
    
    def extract(self) -> bool:
        """
        Main extraction process.
        
        Returns:
            True if successful, False otherwise
        """
        # Validate input
        if not self.validate_input():
            return False
        
        # Create output folder
        if not self.create_output_folder():
            return False
        
        # Read the HTML content
        print(f"\n📖 Reading {self.input_file}...")
        try:
            with open(self.input_file, 'r', encoding='utf-8') as f:
                content = f.read()
        except Exception as e:
            print(f"❌ Error reading file: {e}")
            return False
        
        original_size = len(content)
        
        # Find all matches
        matches = re.findall(self.pattern, content)
        
        if not matches:
            print("⚠ No base64-encoded images found in the file.")
            return False
        
        print(f"🔍 Found {len(matches)} images. Extracting...\n")
        
        # Replace all base64 images with file references
        modified_content = re.sub(self.pattern, self.replace_image_callback, content)
        
        # Determine output file name
        if self.replace_original:
            output_file = self.input_file
            # Create backup
            backup_file = f"{self.input_file}.backup"
            try:
                with open(backup_file, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"\n💾 Backup saved to: {backup_file}")
            except Exception as e:
                print(f"⚠ Warning: Could not create backup: {e}")
        else:
            if self.output_file is None:
                base_name = os.path.splitext(self.input_file)[0]
                output_file = f"{base_name}_cleaned.txt"
            else:
                output_file = self.output_file
        
        # Save the modified HTML
        print(f"\n💾 Saving modified HTML to {output_file}...")
        try:
            with open(output_file, 'w', encoding='utf-8') as f:
                f.write(modified_content)
        except Exception as e:
            print(f"❌ Error saving output file: {e}")
            return False
        
        # Print summary
        modified_size = len(modified_content)
        size_reduction = ((original_size - modified_size) / original_size) * 100
        
        print(f"\n{'='*60}")
        print(f"✅ Extraction Complete!")
        print(f"{'='*60}")
        print(f"  📊 Statistics:")
        print(f"     • Images extracted: {self.extracted_count}")
        print(f"     • Failed: {self.failed_count}")
        print(f"     • Total image size: {self.total_size / 1024:.1f} KB")
        print(f"     • Original file size: {original_size / 1024:.1f} KB")
        print(f"     • Modified file size: {modified_size / 1024:.1f} KB")
        print(f"     • Size reduction: {size_reduction:.1f}%")
        print(f"  📁 Output:")
        print(f"     • Images folder: {self.output_folder}/")
        print(f"     • Modified HTML: {output_file}")
        print(f"{'='*60}\n")
        
        return True
    
    def list_images(self) -> bool:
        """
        List all images referenced in the HTML file.
        
        Returns:
            True if successful, False otherwise
        """
        # Validate input
        if not self.validate_input():
            return False
        
        # Read the HTML content
        print(f"\n📖 Reading {self.input_file}...")
        try:
            with open(self.input_file, 'r', encoding='utf-8') as f:
                content = f.read()
        except Exception as e:
            print(f"❌ Error reading file: {e}")
            return False
        
        # Find all image references
        img_refs = re.findall(self.img_ref_pattern, content)
        
        # Find base64 images
        base64_matches = re.findall(self.pattern, content)
        
        if not img_refs and not base64_matches:
            print("⚠ No images found in the file.")
            return False
        
        print(f"\n{'='*60}")
        print(f"📷 Images in {self.input_file}")
        print(f"{'='*60}\n")
        
        # List regular image references
        if img_refs:
            print(f"🖼️  Regular Image References ({len(img_refs)}):")
            print(f"{'-'*60}")
            for idx, src in enumerate(img_refs, 1):
                # Check if file exists
                file_path = src if os.path.isabs(src) else os.path.join(os.path.dirname(self.input_file), src)
                exists = "✓" if os.path.exists(file_path) else "✗"
                
                # Get file size if exists
                size_info = ""
                if os.path.exists(file_path):
                    try:
                        size = os.path.getsize(file_path) / 1024
                        size_info = f" ({size:.1f} KB)"
                    except:
                        pass
                
                print(f"  {idx:2d}. [{exists}] {src}{size_info}")
        
        # List base64 images
        if base64_matches:
            print(f"\n📦 Base64-Encoded Images ({len(base64_matches)}):")
            print(f"{'-'*60}")
            for idx, (_, img_type, base64_data, _) in enumerate(base64_matches, 1):
                try:
                    image_data = base64.b64decode(base64_data, validate=True)
                    size_kb = len(image_data) / 1024
                    img_hash = self.get_image_hash(image_data, length=8)
                    print(f"  {idx:2d}. [base64] {img_type.upper()} - {size_kb:.1f} KB (hash: {img_hash})")
                except:
                    print(f"  {idx:2d}. [base64] {img_type.upper()} - Invalid data")
        
        # Summary
        total_images = len(img_refs) + len(base64_matches)
        print(f"\n{'='*60}")
        print(f"📊 Summary:")
        print(f"   • Total images: {total_images}")
        print(f"   • Regular references: {len(img_refs)}")
        print(f"   • Base64-encoded: {len(base64_matches)}")
        print(f"{'='*60}\n")
        
        return True


def main():
    """Main entry point with argument parsing."""
    parser = argparse.ArgumentParser(
        description='Extract base64-encoded images from HTML and replace with file references.',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  %(prog)s content.txt
  %(prog)s content.txt -o images -f output.html
  %(prog)s content.txt --replace
  %(prog)s content.txt --naming mathpix
  %(prog)s content.txt --naming hash
  %(prog)s content.txt --naming sequential
        """
    )
    
    parser.add_argument('input_file', help='Input HTML file with base64 images')
    parser.add_argument('-l', '--list', action='store_true',
                        help='List all images in the file (no extraction)')
    parser.add_argument('-o', '--output-folder', default='assets/images',
                        help='Output folder for extracted images (default: assets/images)')
    parser.add_argument('-f', '--output-file', default=None,
                        help='Output HTML file (default: input_file_cleaned.txt)')
    parser.add_argument('-r', '--replace', action='store_true',
                        help='Replace original file (creates backup)')
    parser.add_argument('-n', '--naming', choices=['mathpix', 'hash', 'sequential'],
                        default='mathpix',
                        help='Naming style: mathpix (image-DATE-HASH), hash (img_HASH), sequential (image_001) [default: mathpix]')
    
    args = parser.parse_args()
    
    # Create extractor
    extractor = ImageExtractor(
        input_file=args.input_file,
        output_folder=args.output_folder,
        output_file=args.output_file,
        replace_original=args.replace,
        naming_style=args.naming
    )
    
    # Run list or extract
    if args.list:
        success = extractor.list_images()
    else:
        success = extractor.extract()
    
    sys.exit(0 if success else 1)


if __name__ == "__main__":
    main()
