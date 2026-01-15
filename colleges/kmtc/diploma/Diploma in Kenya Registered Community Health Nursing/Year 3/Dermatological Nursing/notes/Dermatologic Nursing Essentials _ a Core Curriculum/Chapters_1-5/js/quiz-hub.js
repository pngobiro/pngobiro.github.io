/**
 * Quiz Hub Manager v1.0
 * Manages quiz listing, filtering, and progress tracking
 */

(function() {
    'use strict';

    const STORAGE_KEY = 'quiz-progress';

    class QuizHubManager {
        constructor() {
            this.quizCards = document.querySelectorAll('.quiz-card');
            this.difficultyFilter = document.getElementById('difficulty-filter');
            this.statusFilter = document.getElementById('status-filter');
            this.progress = this.loadProgress();
            
            this.init();
        }

        init() {
            this.updateStats();
            this.bindFilters();
            this.updateCardStatuses();
        }

        loadProgress() {
            try {
                return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
            } catch {
                return {};
            }
        }

        saveProgress() {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.progress));
        }

        updateStats() {
            const totalQuizzes = this.quizCards.length;
            let completedCount = 0;
            let totalScore = 0;

            Object.values(this.progress).forEach(quiz => {
                if (quiz.completed) {
                    completedCount++;
                    totalScore += quiz.bestScore || 0;
                }
            });

            const avgScore = completedCount > 0 
                ? Math.round(totalScore / completedCount) 
                : 0;

            document.getElementById('total-quizzes').textContent = totalQuizzes;
            document.getElementById('completed-quizzes').textContent = completedCount;
            document.getElementById('average-score').textContent = 
                completedCount > 0 ? `${avgScore}%` : '--%';
        }

        updateCardStatuses() {
            this.quizCards.forEach(card => {
                const quizId = card.dataset.quizId;
                const quizProgress = this.progress[quizId];

                if (quizProgress?.completed) {
                    card.dataset.status = 'completed';
                    card.classList.add('quiz-card--completed');
                    
                    const scoreEl = card.querySelector('.score-value');
                    if (scoreEl) {
                        scoreEl.textContent = `${quizProgress.bestScore}%`;
                    }
                    
                    const progressLabel = card.querySelector('.progress-label');
                    if (progressLabel) {
                        progressLabel.textContent = `Best: ${quizProgress.bestScore}%`;
                    }
                } else if (quizProgress?.started) {
                    card.dataset.status = 'in-progress';
                }
            });
        }

        bindFilters() {
            if (this.difficultyFilter) {
                this.difficultyFilter.addEventListener('change', () => this.applyFilters());
            }
            if (this.statusFilter) {
                this.statusFilter.addEventListener('change', () => this.applyFilters());
            }
        }

        applyFilters() {
            const difficulty = this.difficultyFilter?.value || 'all';
            const status = this.statusFilter?.value || 'all';

            this.quizCards.forEach(card => {
                const cardDifficulty = card.dataset.difficulty;
                const cardStatus = card.dataset.status;

                const matchesDifficulty = difficulty === 'all' || cardDifficulty === difficulty;
                const matchesStatus = status === 'all' || cardStatus === status;

                card.style.display = (matchesDifficulty && matchesStatus) ? '' : 'none';
            });
        }

        // Called from quiz.js when a quiz is completed
        static recordQuizResult(quizId, score, passed) {
            const progress = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
            
            if (!progress[quizId]) {
                progress[quizId] = { started: true, attempts: 0 };
            }

            progress[quizId].attempts++;
            progress[quizId].lastScore = score;
            progress[quizId].lastAttempt = new Date().toISOString();

            if (passed) {
                progress[quizId].completed = true;
                progress[quizId].bestScore = Math.max(
                    progress[quizId].bestScore || 0, 
                    score
                );
            }

            localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
        }

        // Get progress for a specific quiz
        static getQuizProgress(quizId) {
            const progress = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
            return progress[quizId] || null;
        }

        // Clear all progress (for testing)
        static clearAllProgress() {
            localStorage.removeItem(STORAGE_KEY);
        }
    }

    // Initialize on page load
    document.addEventListener('DOMContentLoaded', () => {
        if (document.querySelector('.quiz-hub-grid')) {
            new QuizHubManager();
        }
    });

    // Export for use in quiz.js
    window.QuizHubManager = QuizHubManager;
})();
