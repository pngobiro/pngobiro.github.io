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

    // Dynamic progress bar and text update (Example - needs actual totalPages and currentPageIndex)
    // This is a placeholder and should be adapted if these values are available dynamically
    // For static generation, these values are set in the HTML template directly.
    /*
    const progressBarFill = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text');
    const totalPages = 13; // Example: Set this to the total number of content pages/chunks
    
    // Function to extract current page index from filename or a data attribute
    function getCurrentPageIndex() {
        const path = window.location.pathname;
        const filename = path.substring(path.lastIndexOf('/') + 1);
        // Example: medical-bacteriology-chapter-01.html -> 1
        // Example: medical-bacteriology-front-matter.html -> 0 (adjust as needed)
        // This logic needs to be robust based on your naming convention
        if (filename.includes("front-matter")) return 1;
        if (filename.includes("toc-lists")) return 2;
        if (filename.includes("chapter-01")) return 3;
        if (filename.includes("chapter-02")) return 4;
        if (filename.includes("chapter-03-part1")) return 5;
        if (filename.includes("chapter-03-part2")) return 6;
        if (filename.includes("chapter-03-part3")) return 7;
        if (filename.includes("chapter-03-part4")) return 8;
        if (filename.includes("chapter-04")) return 9;
        if (filename.includes("chapter-05")) return 10;
        if (filename.includes("chapter-06")) return 11;
        if (filename.includes("annexes")) return 12;
        if (filename.includes("glossary-references")) return 13;
        return 0; // Fallback for index.html or unknown
    }

    const currentPageIndex = getCurrentPageIndex(); // 1-based index for display

    if (progressBarFill && progressText && currentPageIndex > 0 && currentPageIndex <= totalPages) {
        const percentage = (currentPageIndex / totalPages) * 100;
        progressBarFill.style.width = percentage + '%';
        // Adjust querySelectorAll if you have two progress bars (top and bottom)
        document.querySelectorAll('.progress-fill').forEach(el => el.style.width = percentage + '%');
        document.querySelectorAll('.progress-text').forEach(el => el.textContent = `Section ${currentPageIndex} of ${totalPages}`);
    } else if (progressText) {
         // Handle index page or pages outside the main sequence if necessary
        // document.querySelectorAll('.progress-text').forEach(el => el.textContent = ''); 
        // document.querySelectorAll('.progress-bar').forEach(el => el.style.display = 'none');
    }
    */

    // Smooth scrolling for anchor links (if any are added later, e.g. for footnotes or internal refs)
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

});