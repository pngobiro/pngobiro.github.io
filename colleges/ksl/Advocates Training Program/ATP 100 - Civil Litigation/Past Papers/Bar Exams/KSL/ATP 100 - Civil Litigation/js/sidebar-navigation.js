document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.querySelector('.mobile-nav-toggle');
    const sidebar = document.querySelector('.sidebar');
    const backdrop = document.querySelector('.sidebar-backdrop');
    
    if (toggle && sidebar && backdrop) {
        toggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            backdrop.classList.toggle('active');
            toggle.querySelector('i').className = sidebar.classList.contains('active') ? 
                'fas fa-times' : 'fas fa-bars';
        });
        
        backdrop.addEventListener('click', () => {
            sidebar.classList.remove('active');
            backdrop.classList.remove('active');
            toggle.querySelector('i').className = 'fas fa-bars';
        });
    }
    
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        const saved = localStorage.getItem('theme');
        if (saved) {
            document.documentElement.setAttribute('data-theme', saved);
            updateTheme(saved);
        }
        
        themeToggle.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            const newTheme = current === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateTheme(newTheme);
        });
    }
    
    function updateTheme(theme) {
        const icon = themeToggle.querySelector('i');
        const text = themeToggle.querySelector('span');
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        text.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
    }
});
