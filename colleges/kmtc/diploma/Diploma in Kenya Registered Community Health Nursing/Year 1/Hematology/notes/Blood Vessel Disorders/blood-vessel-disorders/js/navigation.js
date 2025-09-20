// Blood Vessel Disorders - Navigation JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Prevent default action for disabled navigation buttons
    const disabledButtons = document.querySelectorAll('.nav-button.disabled');
    disabledButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
        });
    });

    // Smooth scrolling for internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update URL without triggering a page reload
                history.pushState(null, null, '#' + targetId);
            }
        });
    });

    // Add keyboard navigation support
    document.addEventListener('keydown', function(event) {
        // Alt + Left Arrow: Previous page
        if (event.altKey && event.key === 'ArrowLeft') {
            const prevButton = document.querySelector('.nav-button[href*="previous"], .nav-button[href*="prev"]');
            if (prevButton && !prevButton.classList.contains('disabled')) {
                prevButton.click();
            }
        }
        
        // Alt + Right Arrow: Next page
        if (event.altKey && event.key === 'ArrowRight') {
            const nextButton = document.querySelector('.nav-button[href*="next"]');
            if (nextButton && !nextButton.classList.contains('disabled')) {
                nextButton.click();
            }
        }
        
        // Alt + H: Home/Table of Contents
        if (event.altKey && event.key === 'h') {
            const homeButton = document.querySelector('.nav-button[href*="index.html"]');
            if (homeButton) {
                homeButton.click();
            }
        }
    });

    // Add progress indication functionality
    function updateProgress() {
        const progressFill = document.querySelector('.progress-fill');
        const progressText = document.querySelector('.progress-text');
        
        if (progressFill && progressText) {
            // Extract current page info from the progress text
            const currentPageMatch = progressText.textContent.match(/(\d+) of (\d+)/);
            if (currentPageMatch) {
                const current = parseInt(currentPageMatch[1]);
                const total = parseInt(currentPageMatch[2]);
                const percentage = (current / total) * 100;
                progressFill.style.width = percentage + '%';
            }
        }
    }

    // Call progress update on page load
    updateProgress();

    // Add table responsiveness
    const tables = document.querySelectorAll('.content-table');
    tables.forEach(table => {
        if (!table.parentElement.classList.contains('table-container')) {
            const wrapper = document.createElement('div');
            wrapper.className = 'table-container';
            table.parentNode.insertBefore(wrapper, table);
            wrapper.appendChild(table);
        }
    });

    // Add loading states for images
    const images = document.querySelectorAll('.content-image');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.addEventListener('error', function() {
            this.alt = 'Image could not be loaded: ' + this.alt;
            this.style.border = '2px dashed #ccc';
            this.style.padding = '20px';
            this.style.textAlign = 'center';
            this.style.backgroundColor = '#f8f9fa';
        });
        
        // Set initial opacity for fade-in effect
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });

    // Add print functionality
    function addPrintButton() {
        const nav = document.querySelector('.nav-links');
        if (nav) {
            const printButton = document.createElement('button');
            printButton.className = 'nav-button';
            printButton.innerHTML = '<span class="nav-icon">🖨</span><span class="nav-text">Print</span>';
            printButton.addEventListener('click', function() {
                window.print();
            });
            nav.appendChild(printButton);
        }
    }

    // Add print button
    addPrintButton();

    // Add search functionality (basic)
    function addSearchFunctionality() {
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = 'Search in page...';
        searchInput.className = 'search-input';
        searchInput.style.cssText = `
            padding: 8px 12px;
            border: 1px solid var(--border-color);
            border-radius: var(--border-radius);
            margin: 0 10px;
            font-size: 14px;
        `;

        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const textNodes = getTextNodes(document.querySelector('.section-content'));
            
            // Clear previous highlights
            clearHighlights();
            
            if (searchTerm.length > 2) {
                highlightText(textNodes, searchTerm);
            }
        });

        const nav = document.querySelector('.nav-links');
        if (nav) {
            nav.appendChild(searchInput);
        }
    }

    function getTextNodes(element) {
        const textNodes = [];
        const walker = document.createTreeWalker(
            element,
            NodeFilter.SHOW_TEXT,
            null,
            false
        );

        let node;
        while (node = walker.nextNode()) {
            textNodes.push(node);
        }
        return textNodes;
    }

    function highlightText(textNodes, searchTerm) {
        textNodes.forEach(node => {
            const text = node.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                const parent = node.parentNode;
                const regex = new RegExp(`(${searchTerm})`, 'gi');
                const highlightedHTML = node.textContent.replace(regex, '<mark>$1</mark>');
                
                const span = document.createElement('span');
                span.innerHTML = highlightedHTML;
                parent.replaceChild(span, node);
            }
        });
    }

    function clearHighlights() {
        const highlights = document.querySelectorAll('mark');
        highlights.forEach(mark => {
            const parent = mark.parentNode;
            parent.replaceChild(document.createTextNode(mark.textContent), mark);
            parent.normalize();
        });
    }

    // Add search functionality
    addSearchFunctionality();

    // Console log for debugging
    console.log('Blood Vessel Disorders navigation system loaded successfully');
});
