document.addEventListener('DOMContentLoaded', function() {
    console.log("Navigation script loaded.");

    // Basic functionality to prevent clicking disabled navigation buttons
    const disabledButtons = document.querySelectorAll('.nav-button.disabled');
    disabledButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent navigation
            console.log("Clicked on a disabled navigation button.");
        });
    });

    // Placeholder for potential future enhancements:
    // - Dynamically update progress bar/text based on current page
    // - Add keyboard navigation support
    // - Handle smooth scrolling if ToC links point to sections within a page

});