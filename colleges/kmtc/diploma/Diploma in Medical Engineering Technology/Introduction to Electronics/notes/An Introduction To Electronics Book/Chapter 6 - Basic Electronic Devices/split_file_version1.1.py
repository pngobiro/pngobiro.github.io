#!/usr/bin/env python3
"""
Split a text file into N equal parts.
"""

import os
import math

def split_file(input_file, num_parts, output_prefix='part'):
    """
    Split a text file into multiple parts based on line count.
    
    Args:
        input_file: Path to the input file
        num_parts: Number of files to create (integer)
        output_prefix: Prefix for output files (default: part)
                       Result: part_1.txt, part_2.txt, etc.
    """
    try:
        if num_parts < 1:
            raise ValueError("Number of parts must be at least 1")

        # Read all lines from the input file
        with open(input_file, 'r', encoding='utf-8') as f:
            lines = f.readlines()
        
        total_lines = len(lines)
        
        if total_lines == 0:
            print("Warning: Input file is empty.")
            return

        # Calculate base size and remainder
        # divmod returns the quotient (lines per file) and remainder (extras)
        chunk_size, remainder = divmod(total_lines, num_parts)
        
        start_index = 0
        
        print(f"Splitting '{input_file}' ({total_lines} lines) into {num_parts} parts:")
        
        for i in range(num_parts):
            # Distribute the remainder lines among the first few files
            # to keep sizes as even as possible
            current_size = chunk_size + 1 if i < remainder else chunk_size
            
            end_index = start_index + current_size
            current_batch = lines[start_index:end_index]
            
            # Generate filename (e.g., part_1.txt)
            # We preserve the extension of the prefix if the user provided one, 
            # otherwise assume .txt
            if '.' in output_prefix:
                base, ext = os.path.splitext(output_prefix)
                output_filename = f"{base}_{i+1}{ext}"
            else:
                output_filename = f"{output_prefix}_{i+1}.txt"
            
            # Write the file
            with open(output_filename, 'w', encoding='utf-8') as f:
                f.writelines(current_batch)
            
            print(f"  - {output_filename} ({len(current_batch)} lines)")
            
            start_index = end_index

        print("Done.")
        
    except FileNotFoundError:
        print(f"Error: File '{input_file}' not found.")
    except ValueError as ve:
        print(f"Error: {ve}")
    except Exception as e:
        print(f"Error: {e}")


if __name__ == "__main__":
    import sys
    
    # Check arguments
    if len(sys.argv) < 3:
        print("Usage: python script.py <input_file> <num_parts> [output_prefix]")
        print("Example: python script.py data.txt 3")
        print("Example: python script.py big_data.csv 10 split_data")
        sys.exit(1)
    
    input_file = sys.argv[1]
    
    # Parse number of parts
    try:
        num_parts = int(sys.argv[2])
    except ValueError:
        print("Error: <num_parts> must be an integer.")
        sys.exit(1)
        
    # Optional prefix argument
    output_prefix = sys.argv[3] if len(sys.argv) > 3 else 'part'
    
    split_file(input_file, num_parts, output_prefix)