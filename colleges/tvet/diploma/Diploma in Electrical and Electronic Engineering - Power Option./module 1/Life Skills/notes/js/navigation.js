// navigation.js
document.addEventListener('DOMContentLoaded', function() {
    const navButtons = document.querySelectorAll('.nav-button');

    navButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            const href = this.getAttribute('href');

            if (href === '#') {
                // Handle disabled links or actions
                alert('This section is not available yet.');
            } else {
                // Navigate to the link
                window.location.href = href;
            }
        });
    });
});