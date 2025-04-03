# HTML Implementation Status

This document tracks the status of HTML implementations for past papers and provides optimization guidelines for sidebar/navigation updates.

## Implementation Status

### Completed HTML Implementations
1. 2011j.html - July 2011
2. 2013n.html - November 2013
3. 2014july.html - July 2014
4. 2014julya.html - July 2014 (Alternative)
5. 2016nov.html - November 2016
6. 2017july.html - July 2017
7. 2017nov.html - November 2017

### Pending HTML Implementations
1. 2014nov.pdf (Has MMD file)
2. 2015nov.pdf (Has MMD file)
3. 2018j.pdf
4. 2018n.pdf
5. 2019july.pdf
6. 2021j.pdf
7. 2021n.pdf
8. 2022j.pdf

## Optimization Guidelines

### Sidebar Updates
1. Each new paper should be added to the appropriate year section in the sidebar
2. If year section doesn't exist, create new year section following existing structure
3. Keep papers organized in reverse chronological order by year
4. Within each year, list papers in chronological order (July before November)

### Navigation Links
1. Add paper card in main content area under appropriate year section
2. Include standard metadata (Tasks count, Duration)
3. Use consistent file naming convention: 
   - July papers: YYYY + "july" (e.g., 2017july.html)
   - November papers: YYYY + "nov" (e.g., 2016nov.html)

### Implementation Steps
1. Convert PDF to HTML following example templates in /examples/
2. Add images to /images/ directory following naming convention: YYYYx_figN.jpg
3. Update index.html:
   - Add sidebar entry
   - Add paper card
4. Test all navigation links
5. Update this status document

### Best Practices
1. Always check this document first to avoid duplicate work
2. Follow existing HTML structure and styling
3. Keep consistent indentation and formatting
4. Use comments to mark sections
5. Test navigation links after any updates