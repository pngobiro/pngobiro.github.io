// Validation script for past paper HTML files
const validatePaper = () => {
    const validation = {
        errors: [],
        warnings: []
    };

    // Check required elements
    const requiredElements = {
        'header': 'Main header',
        '.exam-details': 'Exam details section',
        '.paper-intro': 'Paper introduction',
        '.paper-content': 'Paper content section',
        '.paper-navigation': 'Navigation links',
        '.sidebar': 'Sidebar',
        'footer': 'Footer'
    };

    Object.entries(requiredElements).forEach(([selector, name]) => {
        if (!document.querySelector(selector)) {
            validation.errors.push(`Missing ${name} (${selector})`);
        }
    });

    // Validate questions structure
    const questions = document.querySelectorAll('.question');
    if (questions.length === 0) {
        validation.errors.push('No questions found');
    } else {
        questions.forEach((question, index) => {
            // Check question components
            const components = {
                'h3': 'Question heading',
                '.question-content': 'Question content',
                '.answer-section': 'Answer section'
            };

            Object.entries(components).forEach(([selector, name]) => {
                if (!question.querySelector(selector)) {
                    validation.errors.push(`Question ${index + 1}: Missing ${name}`);
                }
            });

            // Check marks format
            const heading = question.querySelector('h3')?.textContent;
            if (!heading?.match(/Question \d+ \(\d+ marks\)/)) {
                validation.warnings.push(`Question ${index + 1}: Incorrect heading format`);
            }
        });
    }

    // Validate navigation links
    const nav = document.querySelectorAll('.paper-navigation');
    nav.forEach(navSection => {
        const links = navSection.querySelectorAll('a');
        if (links.length < 2) {
            validation.errors.push('Insufficient navigation links');
        }
        links.forEach(link => {
            if (!link.href) {
                validation.errors.push(`Invalid navigation link: ${link.textContent}`);
            }
        });
    });

    // Check for broken links
    document.querySelectorAll('a').forEach(link => {
        if (!link.href.startsWith('javascript:') && !link.href.startsWith('#')) {
            const linkPath = link.getAttribute('href');
            validation.warnings.push(`Link to verify: ${linkPath}`);
        }
    });

    // Validate sidebar
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        const currentPage = window.location.pathname.split('/').pop();
        const activeLinks = sidebar.querySelectorAll(`a[href="${currentPage}"]`);
        if (activeLinks.length === 0) {
            validation.warnings.push('Current page not marked active in sidebar');
        }
    }

    // Check code formatting
    document.querySelectorAll('pre, code').forEach((element, index) => {
        if (!element.textContent.trim()) {
            validation.warnings.push(`Empty code block at position ${index + 1}`);
        }
    });

    // Check tables
    document.querySelectorAll('table').forEach((table, index) => {
        if (!table.classList.contains('data-table')) {
            validation.warnings.push(`Table ${index + 1} missing data-table class`);
        }
    });

    // Print validation results
    console.group('Past Paper Validation Results');
    
    if (validation.errors.length > 0) {
        console.group('Errors');
        validation.errors.forEach(error => console.error('❌', error));
        console.groupEnd();
    }
    
    if (validation.warnings.length > 0) {
        console.group('Warnings');
        validation.warnings.forEach(warning => console.warn('⚠️', warning));
        console.groupEnd();
    }
    
    if (validation.errors.length === 0 && validation.warnings.length === 0) {
        console.log('✅ All validations passed!');
    }
    
    console.groupEnd();

    return validation;
};

// Run validation when page loads
document.addEventListener('DOMContentLoaded', validatePaper);

// Add validation button to page
const addValidationButton = () => {
    const button = document.createElement('button');
    button.textContent = 'Validate Paper';
    button.className = 'validate-button';
    button.style.cssText = `
        position: fixed;
        bottom: 4rem;
        right: 2rem;
        padding: 0.5rem 1rem;
        background: var(--primary-color);
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        z-index: 1000;
    `;
    button.addEventListener('click', validatePaper);
    document.body.appendChild(button);
};

// Add button only in development mode
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    addValidationButton();
}
