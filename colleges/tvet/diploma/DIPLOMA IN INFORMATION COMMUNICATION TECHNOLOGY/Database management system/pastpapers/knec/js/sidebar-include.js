document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('components/sidebar.html');
        const sidebarContent = await response.text();
        const mainContent = document.querySelector('.main-content');
        
        if (mainContent) {
            const sidebarDiv = document.createElement('div');
            sidebarDiv.className = 'sidebar';
            sidebarDiv.innerHTML = sidebarContent;
            mainContent.insertBefore(sidebarDiv, mainContent.firstChild);
        }
    } catch (error) {
        console.error('Error loading sidebar:', error);
    }
});
