#!/bin/bash

# Update indexes for ALL subjects defined in structure_config.sh
# Usage: ./exams-manager/update_all.sh

# Load configuration
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
if [ -f "exams-manager/structure_config.sh" ]; then
    source "exams-manager/structure_config.sh"
elif [ -f "$SCRIPT_DIR/structure_config.sh" ]; then
    source "$SCRIPT_DIR/structure_config.sh"
else
    echo "Error: structure_config.sh not found."
    exit 1
fi

echo "=== Updating Indexes for All Subjects ==="

for college in "${COLLEGES[@]}"; do
    for subject in "${SUBJECTS[@]}"; do
        echo "Updating: $college / $subject"
        "$SCRIPT_DIR/update_index.sh" "$college" "$subject"
    done
done

echo ""
echo "=== All Updates Complete ==="
