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

    // Update progress bar based on placeholder values in HTML
    // This is a conceptual example. Actual implementation would need total page count.
    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text');

    if (progressFill && progressText) {
        // Example: if the text is "[Lecture 1 of 2]"
        const textContent = progressText.textContent; // e.g., "Lecture 1 of 2" or "Cardiopulmonary Resuscitation (1 of 2)"
        
        // Try to extract numbers like "X of Y"
        const match = textContent.match(/(\d+)\s*of\s*(\d+)/);
        if (match) {
            const current = parseInt(match[1], 10);
            const total = parseInt(match[2], 10);
            if (!isNaN(current) && !isNaN(total) && total > 0) {
                const percentage = (current / total) * 100;
                progressFill.style.width = percentage + '%';
            }
        } else {
             // Fallback or specific logic if "X of Y" pattern is not found.
             // For example, if it's the first page of an unknown total, or a specific page.
             // You might hardcode percentages or determine them differently based on filenames.
             // For instance, if filename indicates it's the first of two main topics:
             if (window.location.pathname.includes('cardiopulmonary-resuscitation.html')) {
                 progressFill.style.width = '50%'; // Assuming it's the first of two topics
             } else if (window.location.pathname.includes('congenital-heart-disease.html')) {
                 progressFill.style.width = '100%'; // Assuming it's the second of two topics
             }
        }
    }


    // Enhanced list numbering for <ol class="enhanced-list">
    const enhancedOrderedLists = document.querySelectorAll('ol.enhanced-list');
    enhancedOrderedLists.forEach(list => {
        const listItems = list.querySelectorAll('.list-item'); // Assuming items have .list-item
        listItems.forEach((item, index) => {
            const iconElement = item.querySelector('.item-icon');
            if (iconElement) {
                iconElement.textContent = (index + 1) + '.'; // Set number like "1.", "2."
            }
        });
    });

});