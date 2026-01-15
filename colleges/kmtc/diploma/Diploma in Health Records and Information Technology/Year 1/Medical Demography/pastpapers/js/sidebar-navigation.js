// ============================================================================
// MEDICAL EDUCATION PAST PAPERS - ENHANCED NAVIGATION & INTERACTIVITY
// Version: 2.0
// Last Updated: 2025-11-26
// ============================================================================

document.addEventListener('DOMContentLoaded', function() {
    // --- Navigation Active State ---
    const currentPage = window.location.pathname.split('/').pop();
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href === currentPage || href === `./${currentPage}`) {
            item.classList.add('active');
        }
    });

    // --- Smooth Scroll for Section Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offset = 80; // Header offset
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Add highlight effect
                    target.style.boxShadow = '0 0 0 4px rgba(102, 126, 234, 0.3)';
                    setTimeout(() => {
                        target.style.boxShadow = '';
                    }, 2000);
                }
            }
        });
    });

    // --- Mobile Navigation ---
    const mobileToggle = document.querySelector('.mobile-nav-toggle');
    const sidebar = document.querySelector('.sidebar');
    const backdrop = document.querySelector('.sidebar-backdrop');

    if (mobileToggle && sidebar) {
        mobileToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
            backdrop?.classList.toggle('active');
            
            // Update icon
            const icon = this.querySelector('i');
            if (icon) {
                icon.className = sidebar.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
            }
        });

        // Close sidebar when clicking backdrop
        backdrop?.addEventListener('click', function() {
            sidebar.classList.remove('active');
            this.classList.remove('active');
            const icon = mobileToggle.querySelector('i');
            if (icon) {
                icon.className = 'fas fa-bars';
            }
        });

        // Close sidebar when clicking a link
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                if (window.innerWidth <= 1024) {
                    sidebar.classList.remove('active');
                    backdrop?.classList.remove('active');
                    const icon = mobileToggle.querySelector('i');
                    if (icon) {
                        icon.className = 'fas fa-bars';
                    }
                }
            });
        });
    }

    // --- Dark Mode Toggle ---
    const themeToggle = document.querySelector('.theme-toggle');
    const htmlElement = document.documentElement;
    
    // Check for saved preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        htmlElement.classList.add('dark-mode');
        updateThemeIcon(true);
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const isDark = htmlElement.classList.toggle('dark-mode');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            updateThemeIcon(isDark);
            
            // Add transition effect
            document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
            setTimeout(() => {
                document.body.style.transition = '';
            }, 300);
        });
    }

    function updateThemeIcon(isDark) {
        const icon = themeToggle?.querySelector('i');
        const text = themeToggle?.querySelector('span');
        if (icon && text) {
            icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
            text.textContent = isDark ? 'Light Mode' : 'Dark Mode';
        }
    }

    // --- Answer Reveal Tracking ---
    const detailsElements = document.querySelectorAll('.answer-box details');
    detailsElements.forEach(details => {
        details.addEventListener('toggle', function() {
            if (this.open) {
                // Track opened answers (optional analytics)
                console.log('Answer revealed');
            }
        });
    });

    // --- Keyboard Navigation ---
    document.addEventListener('keydown', function(e) {
        // Press 'd' to toggle dark mode
        if (e.key === 'd' && !e.ctrlKey && !e.metaKey && !isInputFocused()) {
            themeToggle?.click();
        }
        
        // Press 'm' to toggle mobile menu
        if (e.key === 'm' && !e.ctrlKey && !e.metaKey && !isInputFocused()) {
            mobileToggle?.click();
        }
        
        // ESC to close mobile menu
        if (e.key === 'Escape' && sidebar?.classList.contains('active')) {
            sidebar.classList.remove('active');
            backdrop.classList.remove('active');
        }
    });

    function isInputFocused() {
        const activeElement = document.activeElement;
        return activeElement && (
            activeElement.tagName === 'INPUT' ||
            activeElement.tagName === 'TEXTAREA' ||
            activeElement.isContentEditable
        );
    }

    // --- Scroll Progress Indicator ---
    createScrollProgress();
    window.addEventListener('scroll', updateScrollProgress);

    function createScrollProgress() {
        const progress = document.createElement('div');
        progress.id = 'scroll-progress';
        progress.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
            z-index: 100;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progress);
    }

    function updateScrollProgress() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        const progress = document.getElementById('scroll-progress');
        if (progress) {
            progress.style.width = scrolled + '%';
        }
    }

    // --- Print Question IDs for Easy Reference ---
    const questionCards = document.querySelectorAll('.question-card');
    questionCards.forEach((card, index) => {
        if (!card.id) {
            card.id = `question-${index + 1}`;
        }
    });

    // --- Lazy Load Images (if any) ---
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // ---  Answer Toggle All Feature ---
    createAnswerControlPanel();

    function createAnswerControlPanel() {
        const sections = document.querySelectorAll('.exam-section');
        sections.forEach(section => {
            const header = section.querySelector('.section-header');
            if (header && section.querySelectorAll('.answer-box details').length > 0) {
                const toggleAll = document.createElement('button');
                toggleAll.className = 'btn-toggle-all';
                toggleAll.innerHTML = '<i class="fas fa-eye"></i> Show All Answers';
                toggleAll.style.cssText = `
                    margin-left: auto;
                    padding: 0.5rem 1rem;
                    background: linear-gradient(135deg, #48bb78 0%, #38a169 100%);
                    color: white;
                    border: none;
                    border-radius: 0.5rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    font-size: 0.875rem;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                `;
                
                let allOpen = false;
                toggleAll.addEventListener('click', function() {
                    const details = section.querySelectorAll('.answer-box details');
                    details.forEach(detail => {
                        detail.open = !allOpen;
                    });
                    allOpen = !allOpen;
                    toggleAll.innerHTML = allOpen 
                        ? '<i class="fas fa-eye-slash"></i> Hide All Answers'
                        : '<i class="fas fa-eye"></i> Show All Answers';
                });
                
                header.appendChild(toggleAll);
            }
        });
    }
});
