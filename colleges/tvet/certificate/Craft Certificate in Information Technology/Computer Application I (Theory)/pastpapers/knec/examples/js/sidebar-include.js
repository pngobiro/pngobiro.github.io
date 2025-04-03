document.addEventListener('DOMContentLoaded', function() {
    // Find the comment indicating where to inject the sidebar
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
        fetch('components/sidebar.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(html => {
                // Insert the sidebar before the main element
                const main = mainContent.querySelector('main');
                if (main) {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(html, 'text/html');
                    const sidebar = doc.querySelector('.sidebar');
                    if (sidebar) {
                        console.log('Sidebar element found:', sidebar);
                        console.log('Main content element:', mainContent);
                        console.log('Main element:', main);
                        mainContent.insertBefore(sidebar, main);
                        console.log('Sidebar inserted');
                    } else {
                        console.error('Sidebar element not found in template');
                    }
                }
            })
            .catch(error => {
                console.error('Error loading sidebar:', error);
            });
    }
});
