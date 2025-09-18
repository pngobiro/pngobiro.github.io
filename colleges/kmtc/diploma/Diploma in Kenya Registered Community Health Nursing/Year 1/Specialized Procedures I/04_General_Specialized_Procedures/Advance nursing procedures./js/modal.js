document.addEventListener('DOMContentLoaded', () => {
    // Create the modal structure
    const modal = document.createElement('div');
    modal.id = 'imageModal';
    modal.className = 'image-modal';
    
    const closeBtn = document.createElement('span');
    closeBtn.className = 'modal-close';
    closeBtn.innerHTML = '&times;';
    
    const modalImage = document.createElement('img');
    modalImage.id = 'modalImage';
    modalImage.className = 'image-modal-content';

    const caption = document.createElement('div');
    caption.id = 'modalCaption';
    caption.className = 'modal-caption';

    modal.appendChild(closeBtn);
    modal.appendChild(modalImage);
    modal.appendChild(caption);
    document.body.appendChild(modal);

    // Get all images that should be opened in a modal
    const images = document.querySelectorAll('.content-image');
    images.forEach(image => {
        image.onclick = function() {
            modal.style.display = 'flex';
            modalImage.src = this.src;
            caption.innerHTML = this.alt;
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        };
    });

    // Function to close the modal
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore background scrolling
        // Reset zoom and position on close
        modalImage.style.transform = 'scale(1)';
        modalImage.style.top = '0px';
        modalImage.style.left = '0px';
        modalImage.classList.remove('zoomed');
    }

    // Close the modal when the close button or the background is clicked
    closeBtn.onclick = closeModal;
    modal.onclick = function(e) {
        if (e.target === modal) {
            closeModal();
        }
    };

    // Zoom and Pan functionality
    let scale = 1,
        panning = false,
        pointX = 0,
        pointY = 0,
        start = { x: 0, y: 0 };

    function setTransform() {
        modalImage.style.transform = `translate(${pointX}px, ${pointY}px) scale(${scale})`;
    }

    modalImage.addEventListener('mousedown', function (e) {
        e.preventDefault();
        if (scale > 1) {
            start = { x: e.clientX - pointX, y: e.clientY - pointY };
            panning = true;
            modalImage.classList.add('zoomed');
        }
    });

    modalImage.addEventListener('mouseup', function () {
        panning = false;
        modalImage.classList.remove('zoomed');
    });

    modalImage.addEventListener('mousemove', function (e) {
        e.preventDefault();
        if (panning) {
            pointX = (e.clientX - start.x);
            pointY = (e.clientY - start.y);
            setTransform();
        }
    });

    modalImage.addEventListener('wheel', function (e) {
        e.preventDefault();
        const xs = (e.clientX - pointX) / scale,
              ys = (e.clientY - pointY) / scale,
              delta = (e.wheelDelta ? e.wheelDelta : -e.deltaY);

        (delta > 0) ? (scale *= 1.2) : (scale /= 1.2);
        
        // Clamp scale to a reasonable range
        scale = Math.min(Math.max(1, scale), 5);

        if (scale === 1) {
            pointX = 0;
            pointY = 0;
        } else {
            pointX = e.clientX - xs * scale;
            pointY = e.clientY - ys * scale;
        }

        setTransform();
    });
});