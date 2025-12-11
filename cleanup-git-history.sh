#!/bin/bash
# Script to remove large binary files from Git history
# This will significantly reduce repository size

set -e

echo "=== Git Repository Cleanup Script ==="
echo "This will remove binary files from Git history"
echo ""

# Create list of file patterns to remove
cat > /tmp/paths-to-remove.txt << 'EOF'
glob:colleges/**/*.pdf
glob:colleges/**/*.ppt
glob:colleges/**/*.pptx
glob:colleges/**/*.doc
glob:colleges/**/*.docx
glob:*.pdf
glob:*.ppt
glob:*.pptx
glob:*.doc
glob:*.docx
EOF

echo "Files to be removed from history:"
cat /tmp/paths-to-remove.txt
echo ""

# Run git filter-repo to remove files
echo "Running git filter-repo..."
git filter-repo --invert-paths --paths-from-file /tmp/paths-to-remove.txt --force

echo ""
echo "=== Cleanup Complete ==="
echo "Repository size before cleanup was stored in /tmp/backup-commit-before-cleanup.txt"
echo ""
echo "Next steps:"
echo "1. Check repository size: du -sh .git/"
echo "2. Verify files: git ls-files | wc -l"
echo "3. Force push to GitHub: git push origin --force --all"
