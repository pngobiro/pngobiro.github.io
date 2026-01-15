/**
 * Quiz Hub Manager
 * Handles progress display and filtering on the Quiz Hub page.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // Load history
    const history = JSON.parse(localStorage.getItem('quiz_history') || '{}');
    const cards = document.querySelectorAll('.quiz-card');
    
    let totalScore = 0;
    let attempted = 0;

    cards.forEach(card => {
        const quizId = card.dataset.quizId;
        if (!quizId) return;

        const score = history[quizId];
        
        if (score !== undefined) {
            // Update Card UI
            card.dataset.status = 'completed';
            card.classList.add('quiz-card--completed');
            
            // Add Badge
            const header = card.querySelector('.quiz-card-header');
            if (!header.querySelector('.quiz-card-badge')) {
                const badge = document.createElement('span');
                badge.className = 'quiz-card-badge';
                badge.textContent = '✓ Completed';
                header.appendChild(badge);
            }

            // Update Progress Bar
            const fill = card.querySelector('.progress-fill');
            const label = card.querySelector('.progress-label');
            if (fill) fill.style.width = '100%';
            if (label) label.textContent = 'Completed';

            // Add Score Display if not present
            if (!card.querySelector('.quiz-card-score')) {
                const scoreDiv = document.createElement('div');
                scoreDiv.className = 'quiz-card-score';
                scoreDiv.innerHTML = `
                    <span class="score-value">${score}%</span>
                    <span class="score-label">Best Score</span>
                `;
                // Insert before actions
                const actions = card.querySelector('.quiz-card-actions');
                card.insertBefore(scoreDiv, actions);
            }

            // Update button text
            const btn = card.querySelector('.quiz-card-btn--primary');
            if (btn) btn.textContent = 'Retake Quiz';

            totalScore += score;
            attempted++;
        }
    });

    // Update Header Stats
    document.getElementById('total-quizzes').textContent = cards.length;
    document.getElementById('completed-quizzes').textContent = attempted;
    const avg = attempted > 0 ? Math.round(totalScore / attempted) : 0;
    document.getElementById('average-score').textContent = `${avg}%`;

    // Filter Logic
    const diffFilter = document.getElementById('difficulty-filter');
    const statFilter = document.getElementById('status-filter');

    function filterGrid() {
        const dVal = diffFilter.value;
        const sVal = statFilter.value;

        cards.forEach(card => {
            const cDiff = card.dataset.difficulty;
            const cStat = card.dataset.status;

            const diffMatch = dVal === 'all' || cDiff === dVal;
            const statMatch = sVal === 'all' || cStat === sVal;

            card.style.display = (diffMatch && statMatch) ? 'block' : 'none';
        });
    }

    if (diffFilter) diffFilter.addEventListener('change', filterGrid);
    if (statFilter) statFilter.addEventListener('change', filterGrid);

});
