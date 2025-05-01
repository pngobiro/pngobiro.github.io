document.addEventListener('DOMContentLoaded', function() {
    // Update progress bar width based on current section
    function updateProgress() {
        const progress = document.querySelector('.progress-fill');
        const progressText = document.querySelector('.progress-text');
        
        if (progress && progressText) {
            // Get current page number from meta tag
            const currentPage = document.querySelector('meta[name="page-number"]')?.content;
            const totalPages = document.querySelector('meta[name="total-pages"]')?.content;
            
            if (currentPage && totalPages) {
                const percentage = (currentPage / totalPages) * 100;
                progress.style.width = percentage + '%';
                progressText.textContent = `Section ${currentPage} of ${totalPages}`;
            }
        }
    }

    // Handle disabled navigation links
    function handleDisabledLinks() {
        const nav = document.querySelector('.document-nav');
        if (nav) {
            const links = nav.querySelectorAll('.nav-button');
            links.forEach(link => {
                if (link.getAttribute('href') === '#') {
                    link.classList.add('disabled');
                    link.setAttribute('aria-disabled', 'true');
                }
            });
        }
    }

    // Initialize navigation features
    updateProgress();
    handleDisabledLinks();
});