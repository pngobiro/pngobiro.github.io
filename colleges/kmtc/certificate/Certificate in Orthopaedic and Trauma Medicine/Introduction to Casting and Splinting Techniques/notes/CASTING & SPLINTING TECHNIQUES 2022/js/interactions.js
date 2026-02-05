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
    const lightboxModal = document.getElementById('lightbox');
    const lightboxImage = lightboxModal?.querySelector('.lightbox-image');
    const lightboxCaption = lightboxModal?.querySelector('.lightbox-caption');
    const lightboxClose = lightboxModal?.querySelector('.lightbox-close');
    const lightboxBackdrop = lightboxModal?.querySelector('.lightbox-backdrop');
    
    if (lightboxModal) {
        // Open lightbox
        document.querySelectorAll('.figure-image-wrapper').forEach(wrapper => {
            const img = wrapper.querySelector('.figure-image');
            const figure = wrapper.closest('.content-figure');
            const caption = figure ? figure.querySelector('.figure-caption') : null;
            
            wrapper.addEventListener('click', () => {
                if (img) {
                    lightboxImage.src = img.src;
                    lightboxImage.alt = img.alt;
                }
                if (caption && lightboxCaption) {
                    lightboxCaption.textContent = caption.textContent;
                } else if (lightboxCaption) {
                    lightboxCaption.textContent = '';
                }
                lightboxModal.hidden = false;
                document.body.style.overflow = 'hidden';
            });
        });
        
        // Close lightbox
        function closeLightbox() {
            lightboxModal.hidden = true;
            document.body.style.overflow = '';
        }
        
        lightboxClose?.addEventListener('click', closeLightbox);
        lightboxBackdrop?.addEventListener('click', closeLightbox);
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !lightboxModal.hidden) {
                closeLightbox();
            }
        });
    }
    
    // Collapsible sections animation
    document.querySelectorAll('.collapsible-section').forEach(details => {
        const content = details.querySelector('.collapsible-content');
        
        details.addEventListener('toggle', () => {
            if (details.open && content) {
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
    
    // Definition tooltips (enhanced)
    document.querySelectorAll('.term-definition').forEach(term => {
        // Touch device support
        term.addEventListener('click', (e) => {
            if ('ontouchstart' in window) {
                e.preventDefault();
                // Toggle tooltip visibility on touch
                term.classList.toggle('tooltip-visible');
            }
        });
    });
})();