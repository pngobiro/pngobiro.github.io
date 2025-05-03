const fs = require('fs');
const path = require('path');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

// Define expected structure
const expectedElements = {
    header: {
        tag: 'header',
        required: true,
        children: [{
            tag: 'h1',
            required: true
        }]
    },
    main: {
        tag: 'main',
        required: true,
        classes: ['container']
    },
    nav: {
        tag: 'nav',
        required: true,
        classes: ['document-nav'],
        children: [{
            tag: 'div',
            classes: ['nav-links'],
            required: true
        }]
    },
    footer: {
        tag: 'footer',
        required: true,
        children: [{
            tag: 'p',
            required: true
        }]
    }
};

// Define required CSS classes
const requiredClasses = [
    'container',
    'document-nav',
    'nav-links',
    'nav-button',
    'topic-content',
    'topic-title'
];

function checkElement(element, expected) {
    const issues = [];

    if (!element && expected.required) {
        issues.push(`Missing required element: ${expected.tag}`);
        return issues;
    }

    if (element && expected.classes) {
        expected.classes.forEach(className => {
            if (!element.classList.contains(className)) {
                issues.push(`Missing class "${className}" on ${expected.tag} element`);
            }
        });
    }

    if (element && expected.children) {
        expected.children.forEach(childSpec => {
            const children = element.getElementsByTagName(childSpec.tag);
            if (children.length === 0 && childSpec.required) {
                issues.push(`Missing required child element ${childSpec.tag} in ${expected.tag}`);
            }
            if (childSpec.classes) {
                Array.from(children).forEach(child => {
                    childSpec.classes.forEach(className => {
                        if (!child.classList.contains(className)) {
                            issues.push(`Missing class "${className}" on ${childSpec.tag} in ${expected.tag}`);
                        }
                    });
                });
            }
        });
    }

    return issues;
}

function analyzeHtmlFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const dom = new JSDOM(content);
    const document = dom.window.document;
    const issues = [];

    // Check basic structure
    Object.entries(expectedElements).forEach(([name, spec]) => {
        const element = document.getElementsByTagName(spec.tag)[0];
        const elementIssues = checkElement(element, spec);
        issues.push(...elementIssues);
    });

    // Check for inconsistent heading levels
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let lastLevel = 0;
    headings.forEach(heading => {
        const level = parseInt(heading.tagName[1]);
        if (level - lastLevel > 1) {
            issues.push(`Skipped heading level: from h${lastLevel} to h${level}`);
        }
        lastLevel = level;
    });

    // Check for tables without container
    const tables = document.getElementsByTagName('table');
    Array.from(tables).forEach(table => {
        const container = table.closest('.table-container');
        if (!container) {
            issues.push('Table without .table-container wrapper');
        }
    });

    // Check for math content without proper classes
    const mathElements = document.querySelectorAll('.math-inline, .equation');
    mathElements.forEach(element => {
        if (!element.closest('.math-block')) {
            issues.push('Math content without .math-block wrapper');
        }
    });

    return issues;
}

function checkAllPages() {
    const topicsDir = path.join(__dirname, 'topics');
    const results = {};
    let totalIssues = 0;

    // Check index.html
    const indexPath = path.join(__dirname, 'index.html');
    if (fs.existsSync(indexPath)) {
        const indexIssues = analyzeHtmlFile(indexPath);
        if (indexIssues.length > 0) {
            results['index.html'] = indexIssues;
            totalIssues += indexIssues.length;
        }
    }

    // Check all topic pages
    const files = fs.readdirSync(topicsDir);
    files.forEach(file => {
        if (path.extname(file) === '.html') {
            const filePath = path.join(topicsDir, file);
            const issues = analyzeHtmlFile(filePath);
            if (issues.length > 0) {
                results[file] = issues;
                totalIssues += issues.length;
            }
        }
    });

    // Print results
    console.log('\nLayout and Styling Consistency Check');
    console.log('===================================');
    console.log(`Total files checked: ${files.length + 1}`);
    console.log(`Total issues found: ${totalIssues}\n`);

    Object.entries(results).forEach(([file, issues]) => {
        if (issues.length > 0) {
            console.log(`\nFile: ${file}`);
            console.log('-'.repeat(file.length + 6));
            issues.forEach(issue => console.log(`- ${issue}`));
        }
    });
}

checkAllPages();