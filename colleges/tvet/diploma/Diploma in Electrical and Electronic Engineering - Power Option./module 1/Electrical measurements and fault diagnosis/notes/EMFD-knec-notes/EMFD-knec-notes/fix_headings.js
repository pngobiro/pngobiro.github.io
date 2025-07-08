const fs = require('fs');
const path = require('path');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

function fixHeadingLevels(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const dom = new JSDOM(content);
    const document = dom.window.document;
    let modified = false;

    // Get all headings
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const headingsArray = Array.from(headings);

    // Fix heading levels
    for (let i = 1; i < headingsArray.length; i++) {
        const currentLevel = parseInt(headingsArray[i].tagName[1]);
        const previousLevel = parseInt(headingsArray[i-1].tagName[1]);
        
        // Check for skipped levels
        if (currentLevel - previousLevel > 1) {
            // Create new heading element with correct level
            const newLevel = previousLevel + 1;
            const newHeading = document.createElement(`h${newLevel}`);
            newHeading.innerHTML = headingsArray[i].innerHTML;
            newHeading.className = headingsArray[i].className;
            
            // Replace old heading with new one
            headingsArray[i].parentNode.replaceChild(newHeading, headingsArray[i]);
            modified = true;
            
            console.log(`Fixed heading level in ${path.basename(filePath)}: ${currentLevel} -> ${newLevel}`);
        }
    }

    if (modified) {
        const output = dom.serialize();
        fs.writeFileSync(filePath, output);
        console.log(`Updated ${path.basename(filePath)}`);
    }
}

// Fix specific file with known heading issue
const filePath = path.join(__dirname, 'topics', 'chapter-13-failure-types.html');
if (fs.existsSync(filePath)) {
    console.log('Fixing heading levels...');
    fixHeadingLevels(filePath);
    console.log('Heading fixes completed.');
} else {
    console.log('File not found:', filePath);
}