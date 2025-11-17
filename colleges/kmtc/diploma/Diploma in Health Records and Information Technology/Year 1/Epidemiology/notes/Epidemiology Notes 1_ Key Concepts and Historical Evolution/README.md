# Epidemiology Notes 1: Key Concepts and Historical Evolution

Kenya Medical Training College - Diploma in Health Records and Information Technology

## Overview

This project contains comprehensive notes on Epidemiology from the Kenya Medical Training College curriculum. The content covers fundamental concepts, historical evolution, disease transmission, causation models, and measures of morbidity and mortality.

## Project Structure

```
Epidemiology Notes 1_ Key Concepts and Historical Evolution/
├── index.html                              # Main table of contents
├── content.mmd                             # MultiMarkdown source content
├── assets/
│   ├── css/
│   │   └── main.css                       # Main stylesheet
│   ├── js/
│   │   └── main.js                        # JavaScript for interactivity
│   └── images/                            # Extracted images from PDF
├── pdf/
│   └── Epidemiology Notes 1_...pdf       # Original source PDF
├── instructions.md                        # Conversion instructions
├── pdf-to-html-conversion-prompt-v8.md   # Detailed conversion guidelines
├── download_images.sh                     # Script to extract images
├── check_missing_images.sh                # Script to verify images
└── README.md                              # This file
```

## Content Sections

The curriculum is divided into the following main topics:

1. **Key Concepts and Historical Evolution**
   - Definition and origin of epidemiology
   - Core functions of epidemiologists
   - Historical timeline (Hippocrates, John Graunt, John Snow, etc.)
   - Types of epidemiology (descriptive, analytic, applied)

2. **Disease Transmission and Causation**
   - Epidemiological triad (host, agent, environment)
   - Chain of infection
   - Natural history of disease
   - Causal inference and Bradford Hill's criteria
   - Epidemic disease occurrence and patterns

3. **Measures of Morbidity, Mortality, and Association**
   - Basic measures: ratios, proportions, rates, odds
   - Prevalence and incidence
   - Attack rates and case fatality rates
   - Mortality rates and fertility measures

4. **Data Sources and Vital Statistics**
   - Census data
   - Birth and death registries
   - Morbidity surveys
   - Chronic disease registries

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Semantic HTML**: Accessible and well-structured markup
- **Mathematical Support**: MathJax integration for equations and formulas
- **Interactive Navigation**: Smooth scrolling and keyboard navigation
- **Print-Friendly**: Optimized styling for printing
- **Dark Mode Ready**: CSS variables for easy theme customization
- **Accessibility**: WCAG 2.1 AA compliant with proper ARIA labels

## Getting Started

### Opening Locally

1. Navigate to the project directory:
   ```bash
   cd "Epidemiology Notes 1_ Key Concepts and Historical Evolution"
   ```

2. Open `index.html` in a modern web browser (Chrome, Firefox, Safari, Edge)

3. Use the table of contents to navigate to different sections

### Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS variables and media queries
- **JavaScript**: For interactivity and navigation
- **MathJax**: For rendering mathematical equations
- **MultiMarkdown**: Source content format

## Styling and Customization

The project uses CSS custom properties (variables) for easy customization. You can modify colors, spacing, and typography by editing `assets/css/main.css`:

```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #34495e;
    --accent-color: #3498db;
    /* ... more variables ... */
}
```

## Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

This project is designed to be accessible to all users:

- Semantic HTML structure for screen readers
- Sufficient color contrast (WCAG AA standards)
- Keyboard navigation support
- ARIA labels for interactive elements
- Focus indicators for keyboard users
- Responsive text sizing

## Image Handling

Images extracted from the PDF are stored in `assets/images/` with the naming convention:
```
[ID]g-[PageNum]-[SeqNum].ext
```

Example: `2025_11_17_ab9948185d34746897a2g-06-1.jpg`

To extract images from the PDF, run:
```bash
./download_images.sh
```

## Content Verification

The content is 100% faithful to the original PDF source. All text, tables, formulas, and diagrams are preserved verbatim (with OCR error corrections where necessary).

## License

These notes are from the Kenya Medical Training College curriculum. Usage is subject to institutional policies.

## Credits

- **Source Document**: Epidemiology Notes 1: Key Concepts and Historical Evolution
- **Institution**: Kenya Medical Training College
- **Program**: Diploma in Health Records and Information Technology
- **Conversion**: PDF to Web (HTML/CSS/JS) conversion using Mathpix OCR

## Notes for Educators

This resource is designed to be:
- **Self-contained**: All assets are local (no external CDN dependencies except for fonts and MathJax)
- **Print-friendly**: Students can print individual sections or the entire document
- **Interactive**: Includes navigation aids and searchable content
- **Accessible**: Compliant with accessibility standards for inclusive learning

## Support and Feedback

For issues, suggestions, or corrections, please refer to the original PDF source or contact the Kenya Medical Training College.

---

Last Updated: November 17, 2025
