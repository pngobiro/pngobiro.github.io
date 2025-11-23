document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const tocLink = document.querySelector('.nav-button[href*="index.html"]');
    const prevLink = document.querySelector('.nav-button:nth-child(2)');
    const nextLink = document.querySelector('.nav-button:last-child');

    // Disable navigation buttons if no href is set
    [tocLink, prevLink, nextLink].forEach(link => {
        if (link && (!link.getAttribute('href') || link.getAttribute('href') === '#')) {
            link.classList.add('disabled');
            link.setAttribute('tabindex', '-1');
        }
    });

    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey || e.metaKey) {
            switch(e.key) {
                case 'ArrowLeft':
                    if (prevLink && !prevLink.classList.contains('disabled')) {
                        window.location.href = prevLink.href;
                    }
                    break;
                case 'ArrowRight':
                    if (nextLink && !nextLink.classList.contains('disabled')) {
                        window.location.href = nextLink.href;
                    }
                    break;
                case 'ArrowUp':
                    if (tocLink && !tocLink.classList.contains('disabled')) {
                        window.location.href = tocLink.href;
                    }
                    break;
            }
        }
    });

    // Add progress indicator
    const progressContainer = document.querySelector('.document-progress');
    if (progressContainer) {
        // Get current page number from URL or data attribute
        // This should be set when generating the HTML
        const currentPage = parseInt(document.body.dataset.currentPage) || 1;
        const totalPages = parseInt(document.body.dataset.totalPages) || 1;
        
        const progressBar = document.createElement('div');
        progressBar.className = 'progress-bar';
        
        const progressFill = document.createElement('div');
        progressFill.className = 'progress-fill';
        progressFill.style.width = `${(currentPage / totalPages) * 100}%`;
        
        const progressText = document.createElement('span');
        progressText.className = 'progress-text';
        progressText.textContent = `Section ${currentPage} of ${totalPages}`;
        
        progressBar.appendChild(progressFill);
        progressContainer.appendChild(progressBar);
        progressContainer.appendChild(progressText);
    }
});