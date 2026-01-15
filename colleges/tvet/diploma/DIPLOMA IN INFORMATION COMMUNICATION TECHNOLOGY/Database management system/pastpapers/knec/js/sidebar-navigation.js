document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const papers = document.querySelectorAll('.paper-link');
    
    // Highlight current page in sidebar
    const currentPath = window.location.pathname;
    const currentFile = currentPath.split('/').pop();
    
    papers.forEach(paper => {
        if (paper.getAttribute('href') === currentFile) {
            paper.classList.add('active');
        }
    });
});
