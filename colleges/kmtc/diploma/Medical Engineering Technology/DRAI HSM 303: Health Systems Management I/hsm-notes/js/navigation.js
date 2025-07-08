document.addEventListener('DOMContentLoaded', () => {
    // --- Define the sequence of topic pages ---
    // This order MUST match the chunking plan and the desired reading flow.
    const pageSequence = [
        'unit1-part1-intro-mgt.html',
        'unit1-part2-leadership-change.html',
        'unit2-part1-org-health-services.html',
        'unit3-part1-communication.html',
        'unit4-part1-health-economics-financing.html',
        'unit4-part2a-budget-process.html',
        'unit4-part2b-programme-facility-budgeting.html',
        'unit5-part1-hrm-intro-perf-mgt.html',
        'unit5-part2-compensation-procurement-intro.html',
        'unit6-part1-procurement-committees-stores.html',
        'unit7-part1-pr-crm-disaster-intro.html',
        'unit7-part2-disaster-risk-mitigation.html',
        'unit8-part1-disaster-mgt-project-planning.html',
        'unit8-part2-project-budget-eval.html'
        // Add all topic HTML files here in the correct order
    ];

    // --- Get current page filename ---
    const pathParts = window.location.pathname.split('/');
    const currentPage = pathParts[pathParts.length - 1];

    // --- Find current page index ---
    const currentIndex = pageSequence.indexOf(currentPage);
    const totalPages = pageSequence.length;

    // --- Update Navigation Links ---
    const navContainers = document.querySelectorAll('.document-nav');

    navContainers.forEach(nav => {
        const prevLink = nav.querySelector('a[href*="previous-"]'); // More robust selector needed
        const nextLink = nav.querySelector('a[href*="next-"]');     // More robust selector needed
        const progressText = nav.querySelector('.progress-text');
        const progressFill = nav.querySelector('.progress-fill');

        // Find the actual previous/next links more reliably
        // Assuming structure: ToC, Prev, Progress, Next
        const allLinks = nav.querySelectorAll('.nav-button');
        let actualPrevLink = null;
        let actualNextLink = null;
        if (allLinks.length >= 3) { // Need at least ToC, Prev, Next
             // Find prev link (usually the second button, after ToC)
             if (allLinks[1] && !allLinks[1].href.includes('index.html')) {
                 actualPrevLink = allLinks[1];
             }
             // Find next link (usually the last button)
             if (allLinks[allLinks.length - 1] && !allLinks[allLinks.length - 1].href.includes('index.html')) {
                 actualNextLink = allLinks[allLinks.length - 1];
             }
        }


        // Update Previous Link
        if (actualPrevLink) {
            if (currentIndex > 0) {
                actualPrevLink.href = pageSequence[currentIndex - 1];
                actualPrevLink.classList.remove('disabled');
            } else {
                actualPrevLink.href = '#'; // No previous page
                actualPrevLink.classList.add('disabled');
                // Optionally hide or style differently
            }
        }

        // Update Next Link
         if (actualNextLink) {
            if (currentIndex >= 0 && currentIndex < totalPages - 1) {
                actualNextLink.href = pageSequence[currentIndex + 1];
                actualNextLink.classList.remove('disabled');
            } else {
                actualNextLink.href = '#'; // No next page
                actualNextLink.classList.add('disabled');
                 // Optionally hide or style differently
            }
        }

        // Update Progress Indicator (Example)
        if (progressText && progressFill && currentIndex !== -1) {
            const currentSectionNum = currentIndex + 1;
            progressText.textContent = `Section ${currentSectionNum} of ${totalPages}`;
            const percentage = (currentSectionNum / totalPages) * 100;
            progressFill.style.width = `${percentage}%`;
        } else if (progressText) {
             progressText.textContent = 'Section ? of ?'; // Handle case where page isn't in sequence
        }
    });

    console.log(`Navigation setup for: ${currentPage} (Index: ${currentIndex})`);
});