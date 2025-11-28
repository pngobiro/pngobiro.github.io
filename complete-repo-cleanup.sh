#!/bin/bash

# Complete Repository Cleanup Script
# This script automates the process of cleaning large files from git history
# and pushing the cleaned repository to GitHub

set -e  # Exit on error

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
REPO_URL="https://github.com/pngobiro/pngobiro.github.io.git"
MIRROR_DIR="$HOME/bfg-clean.git"
TEMP_REPO="$HOME/temp-cleanup-repo"
WORKING_DIR="$HOME/projects/pngobiro.github.io"
SIZE_LIMIT="5M"  # Files larger than this will be removed from history
BFG_JAR="$HOME/bfg.jar"

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}Git Repository Cleanup Script${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""

# Step 1: Clean up previous attempts
echo -e "${YELLOW}Step 1: Cleaning up previous cleanup attempts...${NC}"
cd "$HOME"
rm -rf "$MIRROR_DIR" "$TEMP_REPO"
echo -e "${GREEN}✓ Cleanup complete${NC}"
echo ""

# Step 2: Clone fresh mirror
echo -e "${YELLOW}Step 2: Cloning fresh mirror repository...${NC}"
git clone --mirror "$REPO_URL" "$MIRROR_DIR"
echo -e "${GREEN}✓ Mirror cloned${NC}"
echo ""

# Step 3: Check initial size
echo -e "${YELLOW}Step 3: Checking initial repository size...${NC}"
INITIAL_SIZE=$(du -sh "$MIRROR_DIR" | cut -f1)
echo -e "Initial size: ${BLUE}$INITIAL_SIZE${NC}"
echo ""

# Step 4: Run BFG to remove large files from history
echo -e "${YELLOW}Step 4: Running BFG to remove files larger than $SIZE_LIMIT from history...${NC}"
java -jar "$BFG_JAR" --strip-blobs-bigger-than "$SIZE_LIMIT" "$MIRROR_DIR"
echo -e "${GREEN}✓ BFG processing complete${NC}"
echo ""

# Step 5: Clean up refs and run aggressive GC
echo -e "${YELLOW}Step 5: Cleaning refs and running aggressive garbage collection...${NC}"
cd "$MIRROR_DIR"
git reflog expire --expire=now --all
git gc --prune=now --aggressive
echo -e "${GREEN}✓ Garbage collection complete${NC}"
echo ""

# Step 6: Check size after BFG
echo -e "${YELLOW}Step 6: Checking repository size after BFG cleanup...${NC}"
AFTER_BFG_SIZE=$(du -sh "$MIRROR_DIR" | cut -f1)
echo -e "Size after BFG: ${BLUE}$AFTER_BFG_SIZE${NC}"
echo ""

# Step 7: Clone to temporary normal repository
echo -e "${YELLOW}Step 7: Creating temporary working repository...${NC}"
cd "$HOME"
git clone "$MIRROR_DIR" "$TEMP_REPO"
cd "$TEMP_REPO"
echo -e "${GREEN}✓ Temporary repository created${NC}"
echo ""

# Step 8: Identify and remove large files from current HEAD
echo -e "${YELLOW}Step 8: Identifying large files in current HEAD...${NC}"
echo -e "${BLUE}Files larger than 5MB in current commit:${NC}"
find . -type f -size +5M -not -path "./.git/*" -exec ls -lh {} \; | awk '{print $9, "(" $5 ")"}'

LARGE_FILES=$(find . -type f -size +5M -not -path "./.git/*")
if [ -n "$LARGE_FILES" ]; then
    echo ""
    echo -e "${YELLOW}Removing large files from current commit...${NC}"
    
    # Remove large files
    find . -type f -size +5M -not -path "./.git/*" -delete
    
    # Commit the removal
    git add -A
    git commit -m "Remove files larger than 5MB from repository

This commit removes all files larger than 5MB to reduce repository size.
Large files should be stored using Git LFS or external storage.

Automated cleanup on $(date)"
    
    echo -e "${GREEN}✓ Large files removed and committed${NC}"
else
    echo -e "${GREEN}✓ No large files found in current HEAD${NC}"
fi
echo ""

# Step 9: Push back to mirror
echo -e "${YELLOW}Step 9: Pushing changes back to mirror repository...${NC}"
git push origin main
cd "$MIRROR_DIR"
echo -e "${GREEN}✓ Changes pushed to mirror${NC}"
echo ""

# Step 10: Final garbage collection
echo -e "${YELLOW}Step 10: Final garbage collection on mirror...${NC}"
git reflog expire --expire=now --all
git gc --prune=now --aggressive
FINAL_SIZE=$(du -sh "$MIRROR_DIR" | cut -f1)
echo -e "${GREEN}✓ Final cleanup complete${NC}"
echo -e "Final size: ${BLUE}$FINAL_SIZE${NC}"
echo ""

# Step 11: Confirm before force push
echo -e "${RED}========================================${NC}"
echo -e "${RED}WARNING: About to force push!${NC}"
echo -e "${RED}========================================${NC}"
echo -e "This will ${RED}permanently rewrite${NC} the repository history on GitHub."
echo -e "Initial size:  $INITIAL_SIZE"
echo -e "Final size:    $FINAL_SIZE"
echo ""
read -p "Do you want to proceed with force push? (yes/no): " CONFIRM

if [ "$CONFIRM" != "yes" ]; then
    echo -e "${YELLOW}Force push cancelled. Mirror repository preserved at:${NC}"
    echo -e "${BLUE}$MIRROR_DIR${NC}"
    echo ""
    echo -e "${YELLOW}To manually force push later, run:${NC}"
    echo -e "cd $MIRROR_DIR"
    echo -e "git push --force"
    exit 0
fi

# Step 12: Force push to GitHub
echo -e "${YELLOW}Step 12: Force pushing to GitHub...${NC}"
cd "$MIRROR_DIR"
git push --force
echo -e "${GREEN}✓ Force push complete${NC}"
echo ""

# Step 13: Update local working repository
echo -e "${YELLOW}Step 13: Updating local working repository...${NC}"
if [ -d "$WORKING_DIR" ]; then
    cd "$WORKING_DIR"
    
    # Backup current branch name
    CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
    
    echo -e "Fetching updates from origin..."
    git fetch origin
    
    echo -e "Resetting to origin/main..."
    git checkout main
    git reset --hard origin/main
    
    # Return to original branch if it wasn't main
    if [ "$CURRENT_BRANCH" != "main" ]; then
        git checkout "$CURRENT_BRANCH" 2>/dev/null || git checkout -b "$CURRENT_BRANCH"
    fi
    
    echo -e "${GREEN}✓ Local repository updated${NC}"
else
    echo -e "${YELLOW}Working directory not found. Cloning fresh copy...${NC}"
    cd "$HOME/projects"
    git clone "$REPO_URL"
    echo -e "${GREEN}✓ Fresh clone created${NC}"
fi
echo ""

# Step 14: Cleanup temporary files
echo -e "${YELLOW}Step 14: Cleaning up temporary files...${NC}"
rm -rf "$TEMP_REPO" "$MIRROR_DIR"
echo -e "${GREEN}✓ Temporary files removed${NC}"
echo ""

# Final summary
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}Cleanup Complete!${NC}"
echo -e "${GREEN}========================================${NC}"
echo -e "Repository size reduced from ${BLUE}$INITIAL_SIZE${NC} to ${BLUE}$FINAL_SIZE${NC}"
echo ""
echo -e "${YELLOW}Important notes:${NC}"
echo -e "1. All collaborators must re-clone or reset their local repositories"
echo -e "2. They should run: ${BLUE}git fetch origin && git reset --hard origin/main${NC}"
echo -e "3. Consider using Git LFS for large files in the future"
echo -e "4. Update .gitignore to prevent large files from being committed"
echo ""
echo -e "${GREEN}Done!${NC}"
