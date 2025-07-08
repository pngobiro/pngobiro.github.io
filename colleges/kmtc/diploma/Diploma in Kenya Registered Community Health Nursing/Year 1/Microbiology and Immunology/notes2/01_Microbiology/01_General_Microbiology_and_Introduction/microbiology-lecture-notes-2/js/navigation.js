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

    // Dynamically update progress for demo purposes
    // In a real scenario, this would be based on actual page count and current page index
    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text');
    
    if (progressFill && progressText) {
        // Example: If the filename contains "lecture2" or similar
        // This is a placeholder logic. Real logic would involve knowing total chunks.
        const path = window.location.pathname;
        let currentLecture = 0;
        let totalLectures = 25; // Estimate based on ToC, adjust as needed

        // Crude way to determine current lecture for demo
        if (path.includes("lecture1")) currentLecture = 1;
        else if (path.includes("lecture2")) currentLecture = 2;
        else if (path.includes("lecture3")) currentLecture = 3;
        else if (path.includes("methods-of-study")) currentLecture = 4;
        else if (path.includes("sterilization-disinfection")) currentLecture = 5;
        // ... add more else if for other pages based on your naming convention
        // This is just for demonstration of the progress bar.
        // A more robust solution would pass totalChunks and currentChunkIndex to the template.

        if (currentLecture > 0) {
            const percentage = (currentLecture / totalLectures) * 100;
            progressFill.style.width = percentage + '%';
            progressText.textContent = `Topic ${currentLecture} of ${totalLectures}`; // Or Lecture X of Y
        } else {
            // Default for pages not matching specific lecture pattern
            // progressFill.style.width = '5%'; 
            // progressText.textContent = `Page X of Y`;
        }
    }
});