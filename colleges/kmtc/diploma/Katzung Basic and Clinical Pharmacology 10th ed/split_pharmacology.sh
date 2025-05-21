#!/bin/bash

# Calculate number of lines per file
total_lines=$(wc -l < "Katzung Basic and Clinical Pharmacology 10th ed.txt")
lines_per_file=$((total_lines / 10))

# Split the file into 10 parts with number prefix 01-10
split -l $lines_per_file "Katzung Basic and Clinical Pharmacology 10th ed.txt" --numeric-suffixes=1 --suffix-length=2 --additional-suffix=.txt "o"
