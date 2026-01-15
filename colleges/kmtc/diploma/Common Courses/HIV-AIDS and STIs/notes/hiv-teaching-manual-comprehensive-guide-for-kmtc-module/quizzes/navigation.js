/**
 * Reading Progress Bar
 */
(function() {
    'use strict';
    
    const progressBar = document.getElementById('reading-progress');
    if (!progressBar) return;
    
    function updateProgress() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = window.scrollY;
        const progress = (scrolled / documentHeight) * 100;
        
        progressBar.style.width = Math.min(progress, 100) + '%';
    }
    
    window.addEventListener('scroll', updateProgress);
    window.addEventListener('resize', updateProgress);
    updateProgress();
})();
