# PDF to HTML Conversion Plan

**Instructions Reference:** examples/pdf_to_html_instructions.md

**Target PDFs (Prioritized Order):**
- [List PDFs to be converted here]
- example1.pdf
- example2.pdf
- example3.pdf

**Setup Tasks:**
- [ ] Ensure `styles.css` exists (Copy from examples/ if needed)
- [ ] Ensure `js/sidebar-navigation.js` exists (Copy from examples/js/ if needed)
- [ ] Create `images/` directory for figures and illustrations
- [ ] Ensure verification tools are available in examples/:
    - [ ] verify_pastpapers.py
    - [ ] setup_chromedriver.py
    - [ ] requirements.txt

**Standard Steps for Each PDF:**
1. [ ] PDF to MMD Conversion
2. [ ] Create Clean HTML Template
3. [ ] Update Header
4. [ ] Populate Main Content
    - [ ] Download Figures/Images (if applicable)
5. [ ] Add Answers
6. [ ] Embed Sidebar
7. [ ] Update Navigation Links
8. [ ] Format Special Content (if needed)
9. [ ] Run Automated Verification:
    - [ ] Check HTML structure
    - [ ] Verify navigation links
    - [ ] Test styling
    - [ ] Validate images
    - [ ] Check sidebar functionality
10. [ ] Final Review & Browser Test

**Conversion Status:**

---
**1. [filename].pdf -> [filename].html**
- [ ] Step 1: PDF to MMD Conversion ([filename].mmd)
- [ ] Step 2: Create Clean HTML Template ([filename].html)
- [ ] Step 3: Update Header
- [ ] Step 4: Populate Main Content (Instructions & Questions)
    - [ ] Step 4.1: Download Figures/Images (if applicable)
- [ ] Step 4b: Add Answers
- [ ] Step 5: Embed Sidebar
- [ ] Step 6: Update Navigation Links
- [ ] Step 7: Verify Links
- [ ] Step 8: Format Special Content (if needed)
- [ ] Step 9: Run Automated Verification
- [ ] Step 10: Final Review & Browser Test

**Status: [IN PROGRESS/COMPLETED/FAILED]** *(Additional notes)*
---

**2. [filename].pdf -> [filename].html**
- [ ] Step 1: PDF to MMD Conversion ([filename].mmd)
- [ ] Step 2: Create Clean HTML Template ([filename].html)
- [ ] Step 3: Update Header
- [ ] Step 4: Populate Main Content (Instructions & Questions)
    - [ ] Step 4.1: Download Figures/Images (if applicable)
- [ ] Step 4b: Add Answers
- [ ] Step 5: Embed Sidebar
- [ ] Step 6: Update Navigation Links
- [ ] Step 7: Verify Links
- [ ] Step 8: Format Special Content (if needed)
- [ ] Step 9: Run Automated Verification
- [ ] Step 10: Final Review & Browser Test

**Status: [IN PROGRESS/COMPLETED/FAILED]** *(Additional notes)*
---

**Verification Tools:**
- verify_pastpapers.py: Main verification script
- setup_chromedriver.py: ChromeDriver configuration
- requirements.txt: Dependencies (selenium, beautifulsoup4, html5lib)

**Common Issues and Solutions:**
- If PDF to MMD conversion fails with "Bad page count" error, try using alternative OCR method
- For math equations, ensure proper MathJax formatting ($...$ for inline, $$...$$ for display)
- For images, always download to local images/ directory and use relative paths
- When verification fails, compare against working examples in examples/ directory

**Last Updated:** [Date]