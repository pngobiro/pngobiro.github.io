#!/bin/bash

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Counter for passed and failed tests
PASSED=0
FAILED=0

echo "Starting MCH Notes validation tests..."
echo "=====================================\n"

# Function to check file existence
check_file() {
    if [ -f "$1" ]; then
        echo -e "${GREEN}✓${NC} Found $1"
        ((PASSED++))
    else
        echo -e "${RED}✗${NC} Missing $1"
        ((FAILED++))
    fi
}

# Function to validate JSON
validate_json() {
    if [ -f "$1" ]; then
        if cat "$1" | python -m json.tool >/dev/null 2>&1; then
            echo -e "${GREEN}✓${NC} Valid JSON in $1"
            ((PASSED++))
        else
            echo -e "${RED}✗${NC} Invalid JSON in $1"
            ((FAILED++))
        fi
    fi
}

# Function to validate XML
validate_xml() {
    if [ -f "$1" ]; then
        if xmllint --noout "$1" >/dev/null 2>&1; then
            echo -e "${GREEN}✓${NC} Valid XML in $1"
            ((PASSED++))
        else
            echo -e "${RED}✗${NC} Invalid XML in $1"
            ((FAILED++))
        fi
    fi
}

# Function to check HTML validity
check_html() {
    if [ -f "$1" ]; then
        ERRORS=$(grep -l "<!DOCTYPE html>" "$1" >/dev/null && echo "0" || echo "1")
        if [ "$ERRORS" == "0" ]; then
            echo -e "${GREEN}✓${NC} HTML structure OK in $1"
            ((PASSED++))
        else
            echo -e "${RED}✗${NC} Missing DOCTYPE in $1"
            ((FAILED++))
        fi
    fi
}

echo "Checking required files..."
echo "------------------------"
check_file "index.html"
check_file "manifest.json"
check_file "robots.txt"
check_file "sitemap.xml"
check_file "offline.html"
check_file "pwa-check.html"

echo -e "\nChecking JavaScript files..."
echo "------------------------"
check_file "js/app.js"
check_file "js/help.js"
check_file "js/navigation.js"
check_file "js/register-sw.js"
check_file "js/sw.js"

echo -e "\nChecking topic files..."
echo "------------------------"
check_file "topics/unit-1.html"
check_file "topics/unit-2.html"
check_file "topics/unit-3.html"

echo -e "\nValidating JSON files..."
echo "------------------------"
validate_json "manifest.json"

echo -e "\nValidating XML files..."
echo "------------------------"
validate_xml "sitemap.xml"

echo -e "\nChecking HTML structure..."
echo "------------------------"
check_html "index.html"
check_html "offline.html"
check_html "pwa-check.html"
check_html "topics/unit-1.html"
check_html "topics/unit-2.html"
check_html "topics/unit-3.html"

echo -e "\nChecking CSS validity..."
echo "------------------------"
check_file "styles/main.css"

# Print summary
echo -e "\nTest Summary"
echo "============"
echo -e "${GREEN}Passed: $PASSED${NC}"
echo -e "${RED}Failed: $FAILED${NC}"
echo -e "Total: $((PASSED + FAILED))\n"

# Exit with appropriate status code
if [ $FAILED -eq 0 ]; then
    echo -e "${GREEN}All tests passed!${NC}"
    exit 0
else
    echo -e "${RED}Some tests failed. Please check the output above.${NC}"
    exit 1
fi