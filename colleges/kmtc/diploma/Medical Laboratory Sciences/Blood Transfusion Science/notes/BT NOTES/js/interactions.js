// UI Interactions - Copy, Lightbox, Tooltips
(function() {
    // Copy Code Button
    document.querySelectorAll('.copy-button').forEach(button => {
        button.addEventListener('click', async () => {
            const codeId = button.getAttribute('data-code');
            const codeBlock = document.getElementById(codeId);
            
            if (!codeBlock) return;
            
            try {
                await navigator.clipboard.writeText(codeBlock.textContent);
                
                button.classList.add('copied');
                const originalText = button.querySelector('.copy-text');
                if (originalText) {
                    const original = originalText.textContent;
                    originalText.textContent = 'Copied!';
                    
                    setTimeout(() => {
                        button.classList.remove('copied');
                        originalText.textContent = original;
                    }, 2000);
                }
            } catch (err) {
                console.error('Failed to copy:', err);
            }
        });
    });
    
    // Lightbox for Images
    const lightboxModal = document.getElementById('lightbox-modal');
    if (lightboxModal) {
        const lightboxImage = document.createElement('img');
        lightboxImage.className = 'lightbox-image';
        
        const lightboxCaption = document.createElement('p');
        lightboxCaption.className = 'lightbox-caption';
        
        const lightboxClose = document.createElement('button');
        lightboxClose.className = 'lightbox-close';
        lightboxClose.innerHTML = '×';
        lightboxClose.setAttribute('aria-label', 'Close image viewer');
        
        const lightboxBackdrop = document.createElement('div');
        lightboxBackdrop.className = 'lightbox-backdrop';
        
        const lightboxContent = document.createElement('div');
        lightboxContent.className = 'lightbox-content';
        
        lightboxContent.appendChild(lightboxClose);
        lightboxContent.appendChild(lightboxImage);
        lightboxContent.appendChild(lightboxCaption);
        
        // Clear existing content if any to rebuild correctly
        lightboxModal.innerHTML = '';
        lightboxModal.appendChild(lightboxBackdrop);
        lightboxModal.appendChild(lightboxContent);

        // Open lightbox
        document.querySelectorAll('.content-figure[data-lightbox="true"]').forEach(figure => {
            const img = figure.querySelector('.figure-image');
            const caption = figure.querySelector('.figure-caption');
            
            if (img) {
                figure.addEventListener('click', () => {
                    lightboxImage.src = img.src;
                    lightboxImage.alt = img.alt;
                    
                    if (caption) {
                        lightboxCaption.textContent = caption.textContent;
                        lightboxCaption.style.display = 'block';
                    } else {
                        lightboxCaption.style.display = 'none';
                    }
                    
                    lightboxModal.hidden = false;
                    document.body.style.overflow = 'hidden'; // Prevent scrolling
                });
            }
        });
        
        // Close lightbox
        function closeLightbox() {
            lightboxModal.hidden = true;
            document.body.style.overflow = '';
        }
        
        lightboxClose.addEventListener('click', closeLightbox);
        lightboxBackdrop.addEventListener('click', closeLightbox);
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !lightboxModal.hidden) {
                closeLightbox();
            }
        });
    }
    
    // Collapsible sections animation
    document.querySelectorAll('.collapsible-section').forEach(details => {
        // Find the content div
        const content = details.querySelector('.collapsible-content');
        
        if (content) {
            details.addEventListener('toggle', () => {
               // Optional: Add smooth height animation logic here if needed
               // Standard <details> implementation handles visibility
            });
        }
    });
    
    // Definition tooltips (enhanced for touch)
    document.querySelectorAll('.term-definition').forEach(term => {
        // Touch device support
        term.addEventListener('click', (e) => {
            if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
                e.preventDefault();
                // Close other tooltips
                document.querySelectorAll('.term-definition.tooltip-visible').forEach(t => {
                    if (t !== term) t.classList.remove('tooltip-visible');
                });
                // Toggle current
                term.classList.toggle('tooltip-visible');
            }
        });
    });
    
    // Close tooltips when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.term-definition')) {
            document.querySelectorAll('.term-definition.tooltip-visible').forEach(t => {
                t.classList.remove('tooltip-visible');
            });
        }
    });
})();