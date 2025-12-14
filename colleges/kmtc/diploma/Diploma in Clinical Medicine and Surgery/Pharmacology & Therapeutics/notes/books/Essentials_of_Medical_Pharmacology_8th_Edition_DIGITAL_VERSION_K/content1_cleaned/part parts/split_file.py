#!/usr/bin/env python3
"""
Split a text file into two equal parts.
"""

def split_file(input_file, output_file1='part1.txt', output_file2='part2.txt'):
    """
    Split a text file into two equal parts based on line count.
    
    Args:
        input_file: Path to the input file
        output_file1: Path to the first output file (default: part1.txt)
        output_file2: Path to the second output file (default: part2.txt)
    """
    try:
        # Read all lines from the input file
        with open(input_file, 'r', encoding='utf-8') as f:
            lines = f.readlines()
        
        # Calculate the midpoint
        total_lines = len(lines)
        midpoint = total_lines // 2
        
        # Split the lines
        first_half = lines[:midpoint]
        second_half = lines[midpoint:]
        
        # Write first half
        with open(output_file1, 'w', encoding='utf-8') as f:
            f.writelines(first_half)
        
        # Write second half
        with open(output_file2, 'w', encoding='utf-8') as f:
            f.writelines(second_half)
        
        print(f"Successfully split '{input_file}' into two files:")
        print(f"  - {output_file1} ({len(first_half)} lines)")
        print(f"  - {output_file2} ({len(second_half)} lines)")
        
    except FileNotFoundError:
        print(f"Error: File '{input_file}' not found.")
    except Exception as e:
        print(f"Error: {e}")


if __name__ == "__main__":
    import sys
    
    if len(sys.argv) < 2:
        print("Usage: python script.py <input_file> [output_file1] [output_file2]")
        print("Example: python script.py data.txt part1.txt part2.txt")
        sys.exit(1)
    
    input_file = sys.argv[1]
    output_file1 = sys.argv[2] if len(sys.argv) > 2 else 'part1.txt'
    output_file2 = sys.argv[3] if len(sys.argv) > 3 else 'part2.txt'
    
    split_file(input_file, output_file1, output_file2)