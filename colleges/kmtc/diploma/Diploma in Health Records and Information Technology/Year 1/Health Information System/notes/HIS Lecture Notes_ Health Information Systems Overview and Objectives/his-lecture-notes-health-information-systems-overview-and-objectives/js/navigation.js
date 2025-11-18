// Navigation JavaScript for Health Information System

document.addEventListener('DOMContentLoaded', function() {
    // Handle disabled navigation links
    const disabledButtons = document.querySelectorAll('.nav-button.disabled');

    disabledButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            // Optional: could add a tooltip or visual feedback here
        });
    });

    // Update document history or progress tracking
    function updateProgress() {
        // Extract current lecture number from title or URL
        const currentPage = window.location.pathname;
        const lectureMatch = currentPage.match(/his-(\d+)/);

        if (lectureMatch) {
            const currentLecture = parseInt(lectureMatch[1]);
            const totalLectures = 5; // Update based on total units

            // Update progress bar
            const progressBar = document.querySelector('.progress-fill');
            const progressText = document.querySelector('.progress-text');

            if (progressBar && progressText) {
                const percentage = (currentLecture / totalLectures) * 100;
                progressBar.style.width = `${percentage}%`;
                progressText.textContent = `Lecture ${currentLecture} of ${totalLectures}`;
            }
        }
    }

    // Initialize progress on page load
    updateProgress();

    // Smooth scrolling for internal anchors
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // Alt + Left Arrow = Previous page
        if (e.altKey && e.key === 'ArrowLeft') {
            const prevLink = document.querySelector('.nav-button:not(.disabled):first-child');
            if (prevLink && prevLink.href && !prevLink.classList.contains('disabled')) {
                window.location.href = prevLink.href;
            }
        }

        // Alt + Right Arrow = Next page
        if (e.altKey && e.key === 'ArrowRight') {
            const nextLink = document.querySelector('.nav-button:not(.disabled):last-child');
            if (nextLink && nextLink.href && !nextLink.classList.contains('disabled')) {
                window.location.href = nextLink.href;
            }
        }

        // Alt + H = Home (Table of Contents)
        if (e.altKey && e.key === 'h') {
            const homeLink = document.querySelector('a[href*="index.html"]');
            if (homeLink) {
                window.location.href = homeLink.href;
            }
        }
    });

    // Add visibility to current page in navigation
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.toc-link, .nav-button');

    navLinks.forEach(link => {
        const linkPath = new URL(link.href, window.location.origin).pathname;
        if (linkPath === currentPath || currentPath.includes(linkPath.replace('.html', ''))) {
            link.classList.add('current-page');
        }
    });

    // Add loading indicator for slow navigation
    const navButtons = document.querySelectorAll('.nav-button');

    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (!this.classList.contains('disabled')) {
                // Add loading state
                this.innerHTML += ' <span class="loading-dots">...</span>';
                this.style.pointerEvents = 'none';

                // Remove loading after 1 second (fallback in case page doesn't load)
                setTimeout(() => {
                    this.innerHTML = this.innerHTML.replace(' <span class="loading-dots">...</span>', '');
                    this.style.pointerEvents = 'auto';
                }, 1000);
            }
        });
    });

    // Accessibility improvements for math content
    const mathElements = document.querySelectorAll('.equation, .math-inline');

    mathElements.forEach(elem => {
        elem.setAttribute('role', 'img');
        elem.setAttribute('aria-label', 'Mathematical equation');
    });

    // Add table of contents toggle for long pages
    const sectionHeadings = document.querySelectorAll('.section-heading');

    if (sectionHeadings.length > 5) {
        // Create a mini ToC that appears on scroll
        const miniToc = document.createElement('div');
        miniToc.className = 'mini-toc';
        miniToc.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(255, 255, 255, 0.9);
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            max-height: 70vh;
            overflow-y: auto;
            display: none;
            z-index: 1000;
            font-size: 14px;
        `;

        const tocTitle = document.createElement('h4');
        tocTitle.textContent = 'Quick Navigation';
        tocTitle.style.cssText = 'margin: 0 0 10px 0; font-size: 16px; color: #2c3e50;';
        miniToc.appendChild(tocTitle);

        sectionHeadings.forEach((heading, index) => {
            const link = document.createElement('a');
            link.href = '#' + (heading.id || 'section-' + index);
            link.textContent = heading.querySelector('.heading-text')?.textContent || heading.textContent;
            link.style.cssText = `
                display: block;
                padding: 5px 0;
                text-decoration: none;
                color: #3498db;
                border-bottom: 1px solid #ecf0f1;
            `;
            link.onmouseover = () => link.style.color = '#2c3e50';
            link.onmouseout = () => link.style.color = '#3498db';

            miniToc.appendChild(link);
        });

        const toggleButton = document.createElement('button');
        toggleButton.textContent = '☰';
        toggleButton.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #3498db;
            color: white;
            border: none;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            cursor: pointer;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
            z-index: 1001;
        `;

        toggleButton.onclick = function() {
            miniToc.style.display = miniToc.style.display === 'block' ? 'none' : 'block';
        };

        document.body.appendChild(toggleButton);
        document.body.appendChild(miniToc);

        // Show/hide based on scroll position
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                toggleButton.style.display = 'block';
            } else {
                toggleButton.style.display = 'none';
                miniToc.style.display = 'none';
            }
        });
    }

    // Print-friendly adjustments
    window.addEventListener('beforeprint', function() {
        document.body.classList.add('printing');
    });

    window.addEventListener('afterprint', function() {
        document.body.classList.remove('printing');
    });
});