// Navigation and Progress Tracking
(function() {
    // Reading Progress Bar
    const progressBar = document.getElementById('reading-progress');
    
    function updateReadingProgress() {
        if (!progressBar) return;
        
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;
        
        progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    }
    
    window.addEventListener('scroll', updateReadingProgress, { passive: true });
    updateReadingProgress();
    
    // Floating TOC
    const floatingToc = document.getElementById('floating-toc');
    const tocList = floatingToc?.querySelector('.floating-toc-list');
    
    if (floatingToc && tocList) {
        // Build TOC from headings
        const headings = document.querySelectorAll('.content-section h2, .content-section h3');
        
        if (headings.length > 0) {
             headings.forEach((heading, index) => {
                if (!heading.id) {
                    heading.id = `heading-${index}`;
                }
                
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = `#${heading.id}`;
                // Remove icons from text content for TOC
                const cleanText = heading.textContent.replace(/^[\s\S]*?(?=[A-Za-z])/, ''); 
                a.textContent = cleanText || heading.textContent;
                a.classList.add(heading.tagName === 'H3' ? 'toc-h3' : 'toc-h2');
                li.appendChild(a);
                tocList.appendChild(li);
            });
            
            // Show/hide TOC based on scroll
            let lastScrollY = 0;
            
            function updateTocVisibility() {
                const scrollY = window.scrollY;
                const showThreshold = 300;
                
                if (scrollY > showThreshold) {
                    floatingToc.classList.add('visible');
                } else {
                    floatingToc.classList.remove('visible');
                }
                
                lastScrollY = scrollY;
            }
            
            window.addEventListener('scroll', updateTocVisibility, { passive: true });
            
            // Highlight active section
            const tocLinks = tocList.querySelectorAll('a');
            
            function updateActiveSection() {
                let currentSection = null;
                
                headings.forEach((heading) => {
                    const rect = heading.getBoundingClientRect();
                    // 150px offset for header
                    if (rect.top <= 150) {
                        currentSection = heading.id;
                    }
                });
                
                tocLinks.forEach((link) => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${currentSection}`);
                });
            }
            
            window.addEventListener('scroll', updateActiveSection, { passive: true });
            updateActiveSection(); // Initial check
        } else {
            // Hide floating TOC if no headings found
            floatingToc.style.display = 'none';
        }
    }
    
    // Disabled navigation buttons
    const disabledButtons = document.querySelectorAll('.nav-button.disabled, .nav-button[aria-disabled="true"]');
    disabledButtons.forEach(button => {
        button.addEventListener('click', (e) => e.preventDefault());
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            try {
                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // Update URL hash without jumping
                    history.pushState(null, null, targetId);
                }
            } catch (err) {
                console.warn("Invalid selector:", targetId);
            }
        });
    });
})();