document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration ---
    // This assumes a naming convention like 'biostatistics-chunk-1.html', 'biostatistics-chunk-2.html', etc.
    // Adjust the baseName and totalChunks if your naming or number of chunks differs.
    const baseName = 'biostatistics-chunk-';
    const totalChunks = 3; // Update this with the actual total number of chunks

    // --- Get Current Chunk Number ---
    const currentPagePath = window.location.pathname;
    const currentPageFilename = currentPagePath.substring(currentPagePath.lastIndexOf('/') + 1);
    let currentChunk = 0;

    if (currentPageFilename.startsWith(baseName)) {
        try {
            currentChunk = parseInt(currentPageFilename.replace(baseName, '').replace('.html', ''), 10);
        } catch (e) {
            console.error("Could not parse chunk number from filename:", currentPageFilename);
            // Handle error or default behavior if parsing fails
        }
    } else if (currentPageFilename === 'index.html') {
        // Handle index page case if necessary (e.g., disable nav buttons)
        currentChunk = 0; // Or another indicator for the index page
    }

    // --- Elements ---
    const prevButtons = document.querySelectorAll('.nav-button:nth-child(2)'); // Selects the second nav button in each nav section
    const nextButtons = document.querySelectorAll('.nav-button:last-child'); // Selects the last nav button in each nav section
    const progressTextElements = document.querySelectorAll('.progress-text');
    const progressFillElements = document.querySelectorAll('.progress-fill');
    const tocButtons = document.querySelectorAll('.nav-button[href*="index.html"]');

    // --- Update Navigation Links and States ---
    if (currentChunk > 0) { // Only update links if we are on a chunk page
        // Previous Button
        const prevChunk = currentChunk - 1;
        if (prevChunk >= 1) {
            const prevHref = `${baseName}${prevChunk}.html`;
            prevButtons.forEach(button => button.href = prevHref);
        } else {
            // First chunk, disable "Previous"
            prevButtons.forEach(button => {
                button.href = '#'; // Or remove href
                button.classList.add('disabled');
                // Optionally hide or change text
            });
        }

        // Next Button
        const nextChunk = currentChunk + 1;
        if (nextChunk <= totalChunks) {
            const nextHref = `${baseName}${nextChunk}.html`;
            nextButtons.forEach(button => button.href = nextHref);
        } else {
            // Last chunk, disable "Next"
            nextButtons.forEach(button => {
                button.href = '#'; // Or remove href
                button.classList.add('disabled');
                // Optionally hide or change text
            });
        }

        // Update Progress
        const progressPercent = totalChunks > 0 ? (currentChunk / totalChunks) * 100 : 0;
        progressTextElements.forEach(el => el.textContent = `Section ${currentChunk} of ${totalChunks}`);
        progressFillElements.forEach(el => el.style.width = `${progressPercent}%`);

    } else {
        // Handle navigation state for non-chunk pages (like index.html) if needed
        // For example, disable both prev/next on index.html
        prevButtons.forEach(button => button.classList.add('disabled'));
        nextButtons.forEach(button => button.classList.add('disabled'));
        progressTextElements.forEach(el => el.textContent = ''); // Clear progress text
        progressFillElements.forEach(el => el.style.width = '0%'); // Reset progress bar
    }

    // --- Add any other navigation-related logic here ---
    // e.g., smooth scrolling, active link highlighting in TOC, etc.

});