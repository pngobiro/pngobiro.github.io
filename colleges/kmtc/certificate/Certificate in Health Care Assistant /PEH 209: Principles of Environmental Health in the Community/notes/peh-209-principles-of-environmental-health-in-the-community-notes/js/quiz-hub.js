
/* ========================================================================
   FILE: js/quiz-hub.js
   DESCRIPTION: Logic for the Quiz Hub dashboard
   ======================================================================== */

(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', () => {
        // Load history
        const history = JSON.parse(localStorage.getItem('quiz_history') || '{}');
        const cards = document.querySelectorAll('.quiz-card');
        
        let completedCount = 0;
        let totalScore = 0;
        let scoreCount = 0;

        cards.forEach(card => {
            const id = card.dataset.quizId;
            const record = history[id];

            if (record) {
                // Update Status
                card.dataset.status = 'completed';
                card.classList.add('quiz-card--completed');
                
                // Update Badge
                const header = card.querySelector('.quiz-card-header');
                const badge = document.createElement('span');
                badge.className = 'quiz-card-badge';
                badge.textContent = '✓ Completed';
                header.appendChild(badge);

                // Update Progress Bar
                const fill = card.querySelector('.progress-fill');
                const label = card.querySelector('.progress-label');
                if(fill) fill.style.width = '100%';
                if(label) label.textContent = 'Completed';

                // Add Score Display
                const meta = card.querySelector('.quiz-card-meta');
                const scoreDiv = document.createElement('div');
                scoreDiv.className = 'quiz-card-score';
                scoreDiv.innerHTML = `<span class="score-value">${record.score}%</span><span class="score-label">Last Score</span>`;
                meta.after(scoreDiv);

                // Update Actions
                const btn = card.querySelector('.quiz-card-btn--primary');
                if(btn) btn.textContent = 'Retake Quiz';

                // Stats calc
                completedCount++;
                totalScore += record.score;
                scoreCount++;
            }
        });

        // Update Dashboard Stats
        document.getElementById('total-quizzes').textContent = cards.length;
        document.getElementById('completed-quizzes').textContent = completedCount;
        
        if (scoreCount > 0) {
            const avg = Math.round(totalScore / scoreCount);
            document.getElementById('average-score').textContent = avg + '%';
        }

        // Filter Logic
        const diffFilter = document.getElementById('difficulty-filter');
        const statusFilter = document.getElementById('status-filter');

        function filterCards() {
            const diff = diffFilter.value;
            const status = statusFilter.value;

            cards.forEach(card => {
                const matchDiff = diff === 'all' || card.dataset.difficulty === diff;
                const matchStatus = status === 'all' || card.dataset.status === status;
                
                if (matchDiff && matchStatus) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        if(diffFilter) diffFilter.addEventListener('change', filterCards);
        if(statusFilter) statusFilter.addEventListener('change', filterCards);
    });
})()