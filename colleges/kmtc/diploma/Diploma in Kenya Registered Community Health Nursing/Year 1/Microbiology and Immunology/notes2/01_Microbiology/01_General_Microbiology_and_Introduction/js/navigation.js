// js/navigation.js
// Basic JS for disabled links and potential future enhancements
document.addEventListener('DOMContentLoaded', function() {
    // Prevent default action for disabled navigation buttons
    const disabledButtons = document.querySelectorAll('.nav-button.disabled');
    disabledButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
        });
    });

    // Smooth scrolling for internal links (example, if you add a glossary or internal ToC)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Example: dynamically set progress for demonstration if these elements exist
    // This would typically be set server-side or based on a more complex JS logic
    // For this example, let's assume current page is 3 out of 7 for demonstration
    // if a page has these elements. This is more for the topic page template.
    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text');
    
    if (progressFill && progressText) {
        // This data would come from page-specific metadata or a global navigation object
        // For now, static example. In a real system, these values would be dynamic.
        // const currentPage = 3; 
        // const totalPages = 7;
        // const percentage = (currentPage / totalPages) * 100;
        // progressFill.style.width = percentage + '%';
        // progressText.textContent = `Lecture ${currentPage} of ${totalPages}`;

        // If the values are set in data attributes on the .document-progress element:
        const progressContainer = document.querySelector('.document-progress');
        if (progressContainer) {
            const currentPage = parseInt(progressContainer.dataset.currentPage, 10);
            const totalPages = parseInt(progressContainer.dataset.totalPages, 10);
            if (!isNaN(currentPage) && !isNaN(totalPages) && totalPages > 0) {
                const percentage = (currentPage / totalPages) * 100;
                progressFill.style.width = percentage + '%';
                progressText.textContent = `Lecture ${currentPage} of ${totalPages}`; // Or Section, Unit, etc.
            }
        }
    }

});