document.addEventListener('DOMContentLoaded', function() {
    // Helper function to determine if we're in the topics directory
    const isInTopicsDir = window.location.pathname.includes('/topics/');
    const baseUrl = isInTopicsDir ? '../' : './';

    // Create help button
    const helpButton = document.createElement('button');
    helpButton.className = 'help-button';
    helpButton.innerHTML = '?';
    helpButton.setAttribute('title', 'Keyboard Shortcuts (Press H)');
    document.body.appendChild(helpButton);

    // Create help modal
    const helpModal = document.createElement('div');
    helpModal.className = 'help-modal';
    helpModal.innerHTML = `
        <div class="help-modal-content">
            <h2>Keyboard Shortcuts</h2>
            <div class="shortcuts-list">
                <div class="shortcut-item">
                    <kbd>Alt</kbd> + <kbd>←</kbd>
                    <span>Previous Unit</span>
                </div>
                <div class="shortcut-item">
                    <kbd>Alt</kbd> + <kbd>→</kbd>
                    <span>Next Unit</span>
                </div>
                <div class="shortcut-item">
                    <kbd>Alt</kbd> + <kbd>H</kbd>
                    <span>Home/Table of Contents</span>
                </div>
                <div class="shortcut-item">
                    <kbd>Alt</kbd> + <kbd>T</kbd>
                    <span>Toggle Dark/Light Theme</span>
                </div>
                <div class="shortcut-item">
                    <kbd>Alt</kbd> + <kbd>↑</kbd>
                    <span>Scroll to Top</span>
                </div>
                <div class="shortcut-item">
                    <kbd>H</kbd>
                    <span>Toggle Help</span>
                </div>
                <div class="shortcut-item">
                    <kbd>Esc</kbd>
                    <span>Close Help</span>
                </div>
            </div>
            <button class="help-close">Close</button>
        </div>
    `;
    document.body.appendChild(helpModal);

    // Toggle help modal
    function toggleHelp() {
        helpModal.classList.toggle('visible');
    }

    // Event listeners
    helpButton.addEventListener('click', toggleHelp);
    helpModal.querySelector('.help-close').addEventListener('click', toggleHelp);

    // Close modal when clicking outside
    helpModal.addEventListener('click', function(e) {
        if (e.target === helpModal) {
            toggleHelp();
        }
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Toggle help with 'H' key
        if (e.key.toLowerCase() === 'h' && !e.altKey) {
            toggleHelp();
        }

        // Close help with Escape
        if (e.key === 'Escape' && helpModal.classList.contains('visible')) {
            toggleHelp();
        }

        // Alt + H for home
        if (e.altKey && e.key.toLowerCase() === 'h') {
            window.location.href = baseUrl + 'index.html';
        }

        // Navigation between units
        if (e.altKey && isInTopicsDir) {
            const currentUnit = parseInt(window.location.pathname.match(/unit-(\d+)/)?.[1]);
            if (currentUnit) {
                if (e.key === 'ArrowLeft' && currentUnit > 1) {
                    window.location.href = `unit-${currentUnit - 1}.html`;
                } else if (e.key === 'ArrowRight' && currentUnit < 3) {
                    window.location.href = `unit-${currentUnit + 1}.html`;
                }
            }
        }
    });
});