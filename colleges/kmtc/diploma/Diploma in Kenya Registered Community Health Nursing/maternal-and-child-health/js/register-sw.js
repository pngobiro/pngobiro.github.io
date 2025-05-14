// Register Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Determine base path based on current location
        const isInTopicsDir = window.location.pathname.includes('/topics/');
        const swPath = isInTopicsDir ? '../js/sw.js' : '/js/sw.js';

        navigator.serviceWorker.register(swPath)
            .then(registration => {
                console.log('ServiceWorker registration successful:', registration.scope);
            })
            .catch(error => {
                console.log('ServiceWorker registration failed:', error);
            });
    });
}

// Add to home screen prompt
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later
    deferredPrompt = e;
    
    // Show install button or notification if you want
    // For now, we'll just keep it ready for manual triggering
});

// Optional: Track installation
window.addEventListener('appinstalled', (evt) => {
    console.log('Application installed');
});