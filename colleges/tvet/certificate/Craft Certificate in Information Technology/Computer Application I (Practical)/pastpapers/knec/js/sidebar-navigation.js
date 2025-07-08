document.addEventListener('DOMContentLoaded', function() {
    // Sidebar toggle functionality
    const toggleBtn = document.querySelector('.toggle-btn');
    const sidebar = document.querySelector('.sidebar');
    
    if (toggleBtn && sidebar) {
        toggleBtn.addEventListener('click', function() {
            sidebar.classList.toggle('collapsed');
        });
    }

    // Auto-collapse sidebar on mobile when clicking outside
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 768) {
            const isClickInside = sidebar.contains(event.target) || toggleBtn.contains(event.target);
            if (!isClickInside && !sidebar.classList.contains('collapsed')) {
                sidebar.classList.add('collapsed');
            }
        }
    });

    // Keep sidebar visible on desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('collapsed');
        }
    });
});
