document.addEventListener('DOMContentLoaded', function() {
    // Update progress bar
    function updateProgress() {
        const progressBar = document.querySelector('.progress-fill');
        const progressText = document.querySelector('.progress-text');
        
        if (progressBar && progressText) {
            // Get current section number from URL or data attribute
            const currentSection = parseInt(document.body.dataset.currentSection || 1);
            const totalSections = parseInt(document.body.dataset.totalSections || 1);
            
            // Calculate progress percentage
            const progress = (currentSection / totalSections) * 100;
            
            // Update progress bar and text
            progressBar.style.width = `${progress}%`;
            progressText.textContent = `Section ${currentSection} of ${totalSections}`;
        }
    }

    // Handle disabled navigation states
    function handleNavigationStates() {
        const navButtons = document.querySelectorAll('.nav-button');
        
        navButtons.forEach(button => {
            if (button.getAttribute('href') === '#') {
                button.classList.add('disabled');
                button.style.opacity = '0.5';
                button.style.cursor = 'not-allowed';
            }
        });
    }

    // Initialize navigation features
    updateProgress();
    handleNavigationStates();
});