document.addEventListener('DOMContentLoaded', () => {
    // Update progress indicator
    updateProgress();

    // Setup scroll progress
    setupScrollProgress();
});

function updateProgress() {
    const progressText = document.querySelector('.progress-text');
    const progressFill = document.querySelector('.progress-fill');
    
    if (progressText && progressFill) {
        // Get current page number from URL or data attribute
        const currentPage = getCurrentPageNumber();
        const totalPages = getTotalPages();
        
        // Update progress text
        progressText.textContent = `Section ${currentPage} of ${totalPages}`;
        
        // Update progress bar
        const progressPercentage = (currentPage / totalPages) * 100;
        progressFill.style.width = `${progressPercentage}%`;
    }
}

function setupScrollProgress() {
    const content = document.querySelector('.section-content');
    
    if (content) {
        window.addEventListener('scroll', () => {
            const scrollPercent = getScrollPercentage();
            updateReadingProgress(scrollPercent);
        });
    }
}

function getScrollPercentage() {
    const docElement = document.documentElement;
    const winScroll = docElement.scrollTop;
    const height = docElement.scrollHeight - docElement.clientHeight;
    return (winScroll / height) * 100;
}

function updateReadingProgress(percentage) {
    const progressBar = document.querySelector('.reading-progress');
    if (progressBar) {
        progressBar.style.width = `${percentage}%`;
    }
}

function getCurrentPageNumber() {
    // Get from data attribute or parse from URL
    const pageElement = document.querySelector('[data-page-number]');
    return pageElement ? parseInt(pageElement.dataset.pageNumber) : 1;
}

function getTotalPages() {
    // Get from data attribute or configuration
    const configElement = document.querySelector('[data-total-pages]');
    return configElement ? parseInt(configElement.dataset.totalPages) : 1;
}

// Handle keyboard navigation
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        const prevLink = document.querySelector('.nav-button[href*="previous"]');
        if (prevLink && !prevLink.classList.contains('disabled')) {
            prevLink.click();
        }
    } else if (event.key === 'ArrowRight') {
        const nextLink = document.querySelector('.nav-button[href*="next"]');
        if (nextLink && !nextLink.classList.contains('disabled')) {
            nextLink.click();
        }
    }
});