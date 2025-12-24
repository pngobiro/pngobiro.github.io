#!/bin/bash

# Quick Content Check - Main Project Wrapper
# Runs the content checker from the automation_tools folder

cd "$(dirname "$0")"

echo "🔍 E-Learning Content Checker"
echo "=============================="

# Check if automation tools exist
if [ ! -d "automation_tools" ]; then
    echo "❌ Error: automation_tools directory not found"
    echo "💡 Run setup first or check your directory structure"
    exit 1
fi

# Run the content checker
echo "🚀 Starting content check..."
echo ""

cd automation_tools
./quick_check.sh --base-path .. "$@"

echo ""
echo "💡 For more automation tools, see: automation_tools/README.md"