# Past Paper PDF to HTML Converter Documentation

## Overview
This system converts KNEC past papers from PDF to HTML format with a consistent structure, styling, and navigation. It includes OCR capabilities for scanned documents and a component-based architecture for maintainability.

## Project Structure
```
.
├── pdf-converter-server/   # PDF processing server
│   ├── src/
│   │   ├── index.ts       # Main converter script
│   │   └── types/        
│   │       └── pdf-parse.d.ts
│   ├── package.json
│   └── tsconfig.json
├── styles.css             # Shared styles
├── components/           
│   └── sidebar.html      # Reusable sidebar component
├── js/
│   ├── sidebar-navigation.js  # Navigation functionality
│   └── sidebar-include.js     # Sidebar injection script
└── past-papers/          # Converted HTML papers
```

## Setup Instructions

### 1. Install System Dependencies
```bash
# Install Tesseract OCR and Poppler utils
sudo apt-get update
sudo apt-get install -y tesseract-ocr poppler-utils
```

### 2. Set up PDF Converter Server
```bash
# Create and enter project directory
mkdir pdf-converter-server && cd pdf-converter-server

# Initialize Node.js project
npm init -y

# Install dependencies
npm install pdf-lib tesseract.js sharp typescript @types/node
```

### 3. Configure TypeScript
Create `tsconfig.json`:
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ES2020",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "outDir": "build",
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "typeRoots": ["./node_modules/@types", "./src/types"]
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "build"]
}
```

## Converting PDFs

### 1. Extract Text from PDF
```bash
# Convert PDF to text using OCR
cd pdf-converter-server
npx tsc && node build/index.js "path/to/pdf" "output.txt"
```

### 2. Create HTML Template
Use the following structure for each past paper:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Month Year] - Computer Application II Past Paper</title>
    <link rel="stylesheet" href="styles.css">
    <script src="js/sidebar-navigation.js" defer></script>
    <script src="js/sidebar-include.js" defer></script>
</head>
<body>
    <!-- Header Section -->
    <header>...</header>
    
    <!-- Main Content -->
    <div class="container main-content">
        <!-- Sidebar will be injected here -->
        <main>
            <!-- Questions and Answers -->
        </main>
    </div>
    
    <!-- Footer -->
    <footer>...</footer>
</body>
</html>
```

### 3. Format Questions and Answers
Structure each question as follows:
```html
<div class="question">
    <h3>Question X (Y marks)</h3>
    <div class="question-content">
        <!-- Question text -->
    </div>
    <div class="answer-section">
        <h4>Answer</h4>
        <div class="answer-content">
            <!-- Answer content -->
        </div>
    </div>
</div>
```

## Components

### 1. Sidebar (sidebar.html)
The sidebar component is a reusable navigation element that's dynamically injected into each page. Update `components/sidebar.html` to add new papers.

### 2. Styles (styles.css)
The stylesheet provides consistent styling across all pages, including:
- Responsive layout
- Question formatting
- Code block styling
- Print-friendly styles
- Mobile adaptations

### 3. Navigation Scripts
Two JavaScript files handle navigation:

1. `sidebar-navigation.js`: Handles keyboard shortcuts and scroll-to-top functionality
2. `sidebar-include.js`: Injects and updates the sidebar component

## Usage Instructions

1. Convert PDF:
```bash
cd pdf-converter-server
npx tsc && node build/index.js "input.pdf" "output.txt"
```

2. Create new HTML file:
```bash
cp template.html paper-yyyy-month.html
```

3. Format content:
- Copy questions from OCR output
- Add detailed answers
- Format using standard HTML structure
- Include code samples and tables as needed

4. Update navigation:
- Add new paper to sidebar.html
- Update navigation links in adjacent papers

## Maintenance

### Adding New Papers
1. Convert PDF using converter
2. Create HTML file from template
3. Format content and answers
4. Update sidebar navigation
5. Update adjacent paper links

### Updating Components
1. Modify component files:
   - `components/sidebar.html`
   - `styles.css`
   - JavaScript files
2. Test changes across all pages

### Troubleshooting
1. OCR Quality Issues:
   - Increase image resolution
   - Adjust preprocessing parameters
   - Manual correction if needed

2. Navigation Problems:
   - Check sidebar links
   - Verify JavaScript includes
   - Test keyboard shortcuts

## Best Practices
1. Maintain consistent formatting
2. Add detailed answers
3. Include code samples where relevant
4. Ensure mobile responsiveness
5. Keep navigation updated
6. Regular testing across browsers
