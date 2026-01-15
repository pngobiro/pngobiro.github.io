/**
 * Interactive Elements Handler
 * Handles lightbox, collapsibles, and other interactions
 */
(function() {
    'use strict';
    
    // Lightbox functionality
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        const lightboxImg = lightbox.querySelector('.lightbox-image');
        const lightboxCaption = lightbox.querySelector('.lightbox-caption');
        const lightboxClose = lightbox.querySelector('.lightbox-close');
        const lightboxBackdrop = lightbox.querySelector('.lightbox-backdrop');
        
        // Open lightbox on image click
        document.querySelectorAll('[data-lightbox="true"] img').forEach(img => {
            img.style.cursor = 'pointer';
            img.addEventListener('click', () => {
                lightboxImg.src = img.src;
                lightboxImg.alt = img.alt;
                const caption = img.closest('.content-figure')?.querySelector('.figure-caption');
                if (caption) {
                    lightboxCaption.textContent = caption.textContent;
                }
                lightbox.hidden = false;
                lightbox.setAttribute('aria-hidden', 'false');
                document.body.style.overflow = 'hidden';
            });
        });
        
        // Close lightbox
        function closeLightbox() {
            lightbox.hidden = true;
            lightbox.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }
        
        if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
        if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);
        
        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !lightbox.hidden) {
                closeLightbox();
            }
        });
    }
    
    // Collapsible sections
    document.querySelectorAll('.collapsible-section details').forEach(details => {
        details.addEventListener('toggle', function() {
            const icon = this.querySelector('.trigger-icon');
            if (icon) {
                icon.textContent = this.open ? '▼' : '▶';
            }
        });
    });
    
})();
