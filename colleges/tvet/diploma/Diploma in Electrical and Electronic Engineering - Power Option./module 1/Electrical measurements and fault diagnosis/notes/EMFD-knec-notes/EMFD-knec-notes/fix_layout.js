const fs = require('fs');
const path = require('path');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

function createNavigation(prevLink, nextLink) {
    // Ensure links are valid, default to '#' if not
    const validPrevLink = prevLink || '#';
    const validNextLink = nextLink || '#';
    return `
    <nav class="document-nav">
        <div class="nav-links">
            <a href="../index.html" class="nav-button">Table of Contents</a>
            <a href="${validPrevLink}" class="nav-button" id="prev-link">Previous</a>
            <a href="${validNextLink}" class="nav-button" id="next-link">Next</a>
        </div>
    </nav>`;
}

function fixHtmlLayout(filePath, prevLink, nextLink) {
    const content = fs.readFileSync(filePath, 'utf8');
    const dom = new JSDOM(content);
    const document = dom.window.document;
    let modified = false;

    // Remove old navigation elements first to avoid duplicate IDs if script runs multiple times
    const oldNavs = document.querySelectorAll('.document-nav');
    oldNavs.forEach(nav => nav.remove());
    modified = oldNavs.length > 0; // Mark as modified if old navs were removed

    // Add new navigation structure
    const mainElement = document.querySelector('main');
    if (mainElement) {
        // Insert navigation at the beginning and end of main
        mainElement.insertAdjacentHTML('afterbegin', createNavigation(prevLink, nextLink));
        mainElement.insertAdjacentHTML('beforeend', createNavigation(prevLink, nextLink)); // Add nav at the end too
        modified = true; // Mark as modified because we added new navs
    } else {
        console.warn(`No <main> element found in ${path.basename(filePath)}. Skipping navigation update.`);
    }


    if (modified) {
        // Re-serialize the DOM to include the changes
        const output = dom.serialize();
        fs.writeFileSync(filePath, output);
        console.log(`Fixed navigation links in ${path.basename(filePath)}`);
    }
}

function fixAllFiles() {
    const indexPath = path.join(__dirname, 'index.html');
    if (!fs.existsSync(indexPath)) {
        console.error("index.html not found!");
        return;
    }
    const indexContent = fs.readFileSync(indexPath, 'utf8');
    const indexDom = new JSDOM(indexContent);
    const indexDocument = indexDom.window.document;

    // Correct selector to find topic links within chapter divs
    const topicLinksRaw = Array.from(indexDocument.querySelectorAll('.chapter ul li a'));
    if (topicLinksRaw.length === 0) {
        console.error("No topic links found in index.html using selector '.chapter ul li a'. Check index.html structure.");
        return;
    }

    // Map to store { filename: { prev: relativePath, next: relativePath } }
    const fileLinks = {};
    // Array to store the ordered list of relative topic paths (e.g., 'chapter-1-standards.html')
    const orderedTopicPaths = [];

    topicLinksRaw.forEach(a => {
        const href = a.getAttribute('href');
        if (href && href.startsWith('topics/')) {
            orderedTopicPaths.push(href.replace('topics/', '')); // Store relative path like 'chapter-1-topic.html'
        }
    });

    if (orderedTopicPaths.length === 0) {
        console.error("Extracted topic paths list is empty. Check link href attributes in index.html.");
        return;
    }

    // Build the prev/next map using the ordered list
    for (let i = 0; i < orderedTopicPaths.length; i++) {
        const currentFile = orderedTopicPaths[i];
        // Previous link: relative path to previous file, or ../index.html for the first file
        const prev = i > 0 ? orderedTopicPaths[i - 1] : '../index.html';
        // Next link: relative path to next file, or '#' for the last file
        const next = i < orderedTopicPaths.length - 1 ? orderedTopicPaths[i + 1] : '#';
        fileLinks[currentFile] = { prev, next };
    }

    // Fix index.html navigation (Prev is '#', Next is the first topic)
    const firstTopicRelativePath = orderedTopicPaths.length > 0 ? orderedTopicPaths[0] : '#';
    fixHtmlLayout(indexPath, '#', firstTopicRelativePath ? `topics/${firstTopicRelativePath}` : '#');

    // Fix all topic files using the generated map
    const topicsDir = path.join(__dirname, 'topics');
    orderedTopicPaths.forEach(file => { // Iterate using the ordered list from index.html
        const filePath = path.join(topicsDir, file);
        if (fs.existsSync(filePath)) {
            const links = fileLinks[file];
            if (links) {
                fixHtmlLayout(filePath, links.prev, links.next);
            } else {
                console.warn(`Could not find link mapping for file: ${file}. Using defaults.`);
                fixHtmlLayout(filePath, '../index.html', '#'); // Default links if mapping fails
            }
        } else {
            console.warn(`File listed in index.html not found in topics directory: ${file}`);
        }
    });
}

console.log('Starting navigation link fixes...');
try {
    fixAllFiles();
    console.log('Navigation link fixes completed.');
} catch (error) {
    console.error("An error occurred during the fix process:", error);
}