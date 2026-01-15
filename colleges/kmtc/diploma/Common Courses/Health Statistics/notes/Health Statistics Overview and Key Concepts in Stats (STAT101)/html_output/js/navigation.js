// Navigation and Image Zoom Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Prevent default action for disabled navigation buttons
    const disabledButtons = document.querySelectorAll('.nav-button.disabled');
    disabledButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
        });
    });

    // Image Zoom Modal Functionality
    initImageZoom();
});

function initImageZoom() {
    // Create modal element if it doesn't exist
    let modal = document.getElementById('imageModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'imageModal';
        modal.className = 'image-modal';
        modal.innerHTML = `
            <span class="modal-close" id="modalClose">&times;</span>
            <div class="modal-content">
                <img class="modal-image" id="modalImage" src="" alt="">
            </div>
            <div class="zoom-controls">
                <button class="zoom-btn" id="zoomIn">Zoom In (+)</button>
                <button class="zoom-btn" id="zoomOut">Zoom Out (-)</button>
                <button class="zoom-btn" id="resetZoom">Reset</button>
            </div>
        `;
        document.body.appendChild(modal);
    }

    const modalImage = document.getElementById('modalImage');
    const closeBtn = document.getElementById('modalClose');
    const zoomInBtn = document.getElementById('zoomIn');
    const zoomOutBtn = document.getElementById('zoomOut');
    const resetZoomBtn = document.getElementById('resetZoom');

    let currentScale = 1;
    const scaleStep = 0.2;
    const minScale = 0.5;
    const maxScale = 3;

    // Add click event to all images in content
    function setupImageClickHandlers() {
        const images = document.querySelectorAll('main img, .content-card img, article img');
        images.forEach(img => {
            img.style.cursor = 'pointer';
            img.addEventListener('click', function() {
                modal.classList.add('active');
                modalImage.src = this.src;
                modalImage.alt = this.alt || 'Zoomed image';
                currentScale = 1;
                updateImageScale();
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            });
        });
    }

    // Close modal
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
        currentScale = 1;
        updateImageScale();
    }

    closeBtn.addEventListener('click', closeModal);

    // Close modal when clicking outside the image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Zoom In
    zoomInBtn.addEventListener('click', function() {
        if (currentScale < maxScale) {
            currentScale += scaleStep;
            updateImageScale();
        }
    });

    // Zoom Out
    zoomOutBtn.addEventListener('click', function() {
        if (currentScale > minScale) {
            currentScale -= scaleStep;
            updateImageScale();
        }
    });

    // Reset Zoom
    resetZoomBtn.addEventListener('click', function() {
        currentScale = 1;
        updateImageScale();
    });

    // Update image scale
    function updateImageScale() {
        modalImage.style.transform = `scale(${currentScale})`;
        modalImage.style.transition = 'transform 0.3s ease';
    }

    // Keyboard shortcuts for zoom
    document.addEventListener('keydown', function(e) {
        if (modal.classList.contains('active')) {
            if (e.key === '+' || e.key === '=') {
                e.preventDefault();
                if (currentScale < maxScale) {
                    currentScale += scaleStep;
                    updateImageScale();
                }
            } else if (e.key === '-' || e.key === '_') {
                e.preventDefault();
                if (currentScale > minScale) {
                    currentScale -= scaleStep;
                    updateImageScale();
                }
            } else if (e.key === '0') {
                e.preventDefault();
                currentScale = 1;
                updateImageScale();
            }
        }
    });

    // Mouse wheel zoom
    modalImage.addEventListener('wheel', function(e) {
        e.preventDefault();
        if (e.deltaY < 0) {
            // Scroll up - zoom in
            if (currentScale < maxScale) {
                currentScale += scaleStep;
                updateImageScale();
            }
        } else {
            // Scroll down - zoom out
            if (currentScale > minScale) {
                currentScale -= scaleStep;
                updateImageScale();
            }
        }
    });

    // Initialize image click handlers
    setupImageClickHandlers();

    // Re-initialize when new content is loaded dynamically
    window.refreshImageHandlers = setupImageClickHandlers;
}
