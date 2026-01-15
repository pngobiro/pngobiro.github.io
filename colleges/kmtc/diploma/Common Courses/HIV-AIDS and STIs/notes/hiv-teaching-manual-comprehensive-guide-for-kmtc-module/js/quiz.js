/**
 * PDF to HTML Quiz Engine v1.0
 * Handles rendering, interaction, and scoring for JSON-based quizzes.
 */

(function () {
    'use strict';

    // State management
    const state = {
        quizData: null,
        currentQuestionIndex: 0,
        userAnswers: {}, // { questionId: answer(s) }
        score: 0,
        timer: null,
        timeRemaining: 0,
        isReviewMode: false
    };

    // Registry for JSONP loading
    window.quizRegistry = {};
    window.registerQuiz = function (id, data) {
        window.quizRegistry[id] = data;
    };

    /**
     * Initialize Quiz
     */
    function init() {
        const container = document.querySelector('.quiz-container');
        if (!container) return;

        const quizId = container.dataset.quizId;
        const quizJsPath = container.dataset.quizJs;
        const quizJsonPath = container.dataset.quizSrc;

        if (window.quizRegistry[quizId]) {
            loadQuiz(window.quizRegistry[quizId]);
        } else if (quizJsPath) {
            // Load via JSONP (works with file://)
            const script = document.createElement('script');
            script.src = quizJsPath;
            script.onload = () => {
                if (window.quizRegistry[quizId]) {
                    loadQuiz(window.quizRegistry[quizId]);
                } else {
                    showError('Quiz data not found in registry.');
                }
            };
            script.onerror = () => showError('Failed to load quiz script.');
            document.body.appendChild(script);
        } else if (quizJsonPath) {
            // Load via Fetch (requires server)
            fetch(quizJsonPath)
                .then(res => res.json())
                .then(data => loadQuiz(data))
                .catch(err => showError(err.message));
        }
    }

    function loadQuiz(data) {
        state.quizData = data;
        state.timeRemaining = data.settings?.timeLimit || 0;
        
        // Shuffle if enabled
        if (data.settings?.shuffleQuestions) {
            state.quizData.questions = shuffleArray([...data.questions]);
        }

        renderStartScreen();
    }

    /**
     * Rendering Functions
     */
    function renderStartScreen() {
        const content = document.querySelector('.quiz-content');
        const loading = document.querySelector('.quiz-loading');
        
        loading.hidden = true;
        content.hidden = false;
        
        const { metadata, questions } = state.quizData;
        const timeText = metadata.estimatedTime ? `${metadata.estimatedTime} mins` : 'Unlimited';

        content.innerHTML = `
            <div class="quiz-start-card">
                <div class="quiz-info-grid">
                    <div class="info-item"><span>❓</span> ${questions.length} Questions</div>
                    <div class="info-item"><span>⏱️</span> ${timeText}</div>
                    <div class="info-item"><span>🎯</span> ${metadata.passingScore}% to Pass</div>
                </div>
                <button class="quiz-button quiz-button--primary" id="start-btn" style="width:100%; margin-top:1.5rem">
                    Start Quiz
                </button>
            </div>
        `;

        document.getElementById('start-btn').addEventListener('click', startQuiz);
    }

    function startQuiz() {
        state.currentQuestionIndex = 0;
        state.userAnswers = {};
        state.isReviewMode = false;
        renderQuestion();
        
        if (state.timeRemaining > 0) {
            startTimer();
        }
    }

    function renderQuestion() {
        const question = state.quizData.questions[state.currentQuestionIndex];
        const content = document.querySelector('.quiz-content');
        const total = state.quizData.questions.length;

        let html = `
            <div class="quiz-progress">
                <div class="quiz-progress-bar">
                    <div class="quiz-progress-fill" style="width: ${((state.currentQuestionIndex) / total) * 100}%"></div>
                </div>
                <span class="quiz-progress-text">Question ${state.currentQuestionIndex + 1} of ${total}</span>
            </div>
            
            <div class="quiz-question" id="question-card">
                <div class="question-header">
                    <span class="question-number">${state.currentQuestionIndex + 1}</span>
                    <div class="question-meta-wrapper" style="flex:1">
                        ${question.topicName ? `<span class="question-topic-badge">${question.topicName}</span>` : ''}
                        <h3 class="question-text">${question.question}</h3>
                    </div>
                    <span class="question-points">${question.points} pts</span>
                </div>
                
                ${renderMedia(question.media)}
                
                <div class="quiz-options">
                    ${renderInput(question)}
                </div>

                ${state.isReviewMode ? renderFeedback(question) : ''}
            </div>

            <div class="quiz-actions">
                ${!state.isReviewMode && question.hint ? `
                    <button class="hint-button" onclick="this.nextElementSibling.hidden = !this.nextElementSibling.hidden">
                        💡 Show Hint
                    </button>
                    <div class="hint-content" hidden>${question.hint}</div>
                ` : '<div></div>'}
                
                <div class="quiz-nav-buttons">
                    ${state.currentQuestionIndex > 0 ? `
                        <button class="quiz-button quiz-button--secondary" id="prev-btn">Previous</button>
                    ` : ''}
                    
                    ${state.isReviewMode 
                        ? (state.currentQuestionIndex < total - 1 
                            ? `<button class="quiz-button quiz-button--primary" id="next-btn">Next</button>`
                            : `<button class="quiz-button quiz-button--primary" id="results-btn">Back to Results</button>`)
                        : (state.currentQuestionIndex < total - 1
                            ? `<button class="quiz-button quiz-button--primary" id="next-btn">Next</button>`
                            : `<button class="quiz-button quiz-button--primary" id="submit-btn">Submit Exam</button>`)
                    }
                </div>
            </div>
        `;

        content.innerHTML = html;
        bindEvents(question);
    }

    function renderInput(q) {
        // Safe check for options shuffle
        let options = q.options ? [...q.options] : [];
        if (state.quizData.settings?.shuffleOptions && !state.isReviewMode) {
            options = shuffleArray(options);
        }

        const saved = state.userAnswers[q.id];

        switch (q.type) {
            case 'multiple-choice':
            case 'true-false':
                return options.map(opt => `
                    <label class="quiz-option ${saved === opt.id ? 'selected' : ''} ${state.isReviewMode ? getOptionClass(q, opt.id) : ''}">
                        <input type="radio" name="q-${q.id}" value="${opt.id}" ${saved === opt.id ? 'checked' : ''} ${state.isReviewMode ? 'disabled' : ''}>
                        <span class="option-text">${opt.text || (opt.id === 'true' ? 'True' : 'False')}</span>
                    </label>
                `).join('');

            case 'multiple-select':
                return options.map(opt => `
                    <label class="quiz-option ${(saved || []).includes(opt.id) ? 'selected' : ''} ${state.isReviewMode ? getOptionClass(q, opt.id) : ''}">
                        <input type="checkbox" name="q-${q.id}" value="${opt.id}" ${(saved || []).includes(opt.id) ? 'checked' : ''} ${state.isReviewMode ? 'disabled' : ''}>
                        <span class="option-text">${opt.text}</span>
                    </label>
                `).join('');

            case 'fill-blank':
                return `<div class="fill-blank-container">
                    ${q.blanks.map(b => {
                        const val = saved?.[b.id] || '';
                        const statusClass = state.isReviewMode ? (checkBlank(b, val) ? 'correct' : 'incorrect') : '';
                        return `<div style="margin-bottom:10px">
                            <label>Blank ${b.id}: </label>
                            <input type="text" class="blank-input ${statusClass}" 
                                   data-blank-id="${b.id}" 
                                   value="${val}" 
                                   ${state.isReviewMode ? 'readonly' : ''}
                                   placeholder="Type answer...">
                            ${state.isReviewMode && statusClass === 'incorrect' ? `<span style="color:var(--color-success); font-size:0.8em; margin-left:10px">Correct: ${b.acceptedAnswers[0]}</span>` : ''}
                        </div>`;
                    }).join('')}
                </div>`;

            case 'matching':
                if (state.isReviewMode) {
                    return `<div class="matching-review">
                        ${q.pairs.map(p => {
                            const userMatchId = saved?.[p.id];
                            const userMatchText = q.pairs.find(x => x.right === userMatchId || x.id === userMatchId)?.right || 'No Answer';
                            return `<div class="matching-item" style="display:flex; justify-content:space-between; margin-bottom:0.5rem">
                                <span>${p.left}</span>
                                <span>➝</span>
                                <span style="font-weight:bold">${p.right}</span>
                            </div>`;
                        }).join('')}
                    </div>`;
                }
                // Simplified matching for standard view (Dropdowns)
                return `<div class="matching-container-simple">
                    ${q.pairs.map(p => `
                        <div class="matching-row" style="margin-bottom:1rem">
                            <span class="matching-left"><strong>${p.left}</strong></span>
                            <select class="matching-select" data-pair-id="${p.id}">
                                <option value="">Select match...</option>
                                ${q.pairs.map(opt => `<option value="${opt.id}" ${saved?.[p.id] === opt.id ? 'selected' : ''}>${opt.right}</option>`).join('')}
                            </select>
                        </div>
                    `).join('')}
                </div>`;

            default:
                return '<p>Unsupported question type</p>';
        }
    }

    function renderMedia(media) {
        if (!media) return '';
        const pathPrefix = document.location.pathname.includes('/topics/') ? '../' : '';
        const url = media.url?.startsWith('http') ? media.url : pathPrefix + (media.url || '');
        
        if (media.type === 'image') return `<img src="${url}" alt="${media.alt}" class="quiz-media-img" style="max-width:100%; border-radius:8px; margin-bottom:1rem">`;
        return '';
    }

    function renderFeedback(q) {
        const isCorrect = checkAnswer(q, state.userAnswers[q.id]);
        return `
            <div class="question-feedback ${isCorrect ? 'correct' : 'incorrect'}">
                <span class="feedback-icon">${isCorrect ? '✅' : '❌'}</span>
                <div class="feedback-text">
                    <strong>${isCorrect ? 'Correct!' : 'Incorrect'}</strong>
                    <p>${q.explanation || ''}</p>
                </div>
            </div>
        `;
    }

    /**
     * Logic & Events
     */
    function bindEvents(q) {
        // Navigation
        document.getElementById('prev-btn')?.addEventListener('click', () => {
            saveCurrentAnswer(q);
            state.currentQuestionIndex--;
            renderQuestion();
        });

        document.getElementById('next-btn')?.addEventListener('click', () => {
            saveCurrentAnswer(q);
            state.currentQuestionIndex++;
            renderQuestion();
        });

        document.getElementById('submit-btn')?.addEventListener('click', () => {
            saveCurrentAnswer(q);
            calculateScore();
        });

        document.getElementById('results-btn')?.addEventListener('click', () => {
            renderResults();
        });

        // Input Listeners
        if (q.type === 'multiple-choice' || q.type === 'true-false') {
            document.querySelectorAll('input[type="radio"]').forEach(el => {
                el.addEventListener('change', (e) => {
                    document.querySelectorAll('.quiz-option').forEach(l => l.classList.remove('selected'));
                    e.target.closest('label').classList.add('selected');
                });
            });
        }
        
        if (q.type === 'multiple-select') {
            document.querySelectorAll('input[type="checkbox"]').forEach(el => {
                el.addEventListener('change', (e) => {
                    e.target.closest('label').classList.toggle('selected', e.target.checked);
                });
            });
        }
    }

    function saveCurrentAnswer(q) {
        if (state.isReviewMode) return;

        if (q.type === 'multiple-choice' || q.type === 'true-false') {
            const selected = document.querySelector(`input[name="q-${q.id}"]:checked`);
            if (selected) state.userAnswers[q.id] = selected.value;
        } 
        else if (q.type === 'multiple-select') {
            const selected = Array.from(document.querySelectorAll(`input[name="q-${q.id}"]:checked`)).map(el => el.value);
            state.userAnswers[q.id] = selected;
        }
        else if (q.type === 'fill-blank') {
            state.userAnswers[q.id] = {};
            document.querySelectorAll('.blank-input').forEach(input => {
                state.userAnswers[q.id][input.dataset.blankId] = input.value.trim();
            });
        }
        else if (q.type === 'matching') {
            state.userAnswers[q.id] = {};
            document.querySelectorAll('.matching-select').forEach(sel => {
                state.userAnswers[q.id][sel.dataset.pairId] = sel.value;
            });
        }
    }

    /**
     * Scoring Logic
     */
    function calculateScore() {
        let totalPoints = 0;
        let earnedPoints = 0;
        let topicScores = {};

        state.quizData.questions.forEach(q => {
            totalPoints += q.points;
            const isCorrect = checkAnswer(q, state.userAnswers[q.id]);
            
            let qPoints = 0;
            if (isCorrect === true) qPoints = q.points;
            else if (typeof isCorrect === 'number') qPoints = isCorrect; // Partial credit

            earnedPoints += qPoints;

            // Topic Breakdown for Comprehensive Exams
            if (q.topicId) {
                if (!topicScores[q.topicId]) {
                    topicScores[q.topicId] = { name: q.topicName, total: 0, earned: 0 };
                }
                topicScores[q.topicId].total += q.points;
                topicScores[q.topicId].earned += qPoints;
            }
        });

        const percentage = Math.round((earnedPoints / totalPoints) * 100);
        state.score = percentage;
        
        // Save to LocalStorage
        saveResultToStorage(state.quizData.quizId, percentage);

        renderResults(earnedPoints, totalPoints, percentage, topicScores);
    }

    function checkAnswer(q, userAns) {
        if (!userAns) return false;

        if (q.type === 'multiple-choice') {
            const correctOpt = q.options.find(o => o.isCorrect);
            return userAns === correctOpt.id;
        }
        
        if (q.type === 'true-false') {
            const val = userAns === 'true';
            return val === q.correctAnswer;
        }

        if (q.type === 'multiple-select') {
            const correctIds = q.options.filter(o => o.isCorrect).map(o => o.id);
            const userIds = userAns || [];
            
            // Exact match
            const isExact = correctIds.length === userIds.length && correctIds.every(id => userIds.includes(id));
            if (isExact) return true;

            // Partial credit (if enabled and no wrong answers selected)
            if (q.partialCredit) {
                const wrongSelections = userIds.filter(id => !correctIds.includes(id));
                if (wrongSelections.length > 0) return 0;
                
                const correctSelections = userIds.filter(id => correctIds.includes(id));
                return (correctSelections.length / correctIds.length) * q.points;
            }
            return false;
        }

        if (q.type === 'fill-blank') {
            let correctCount = 0;
            q.blanks.forEach(b => {
                if (checkBlank(b, userAns[b.id])) correctCount++;
            });
            if (correctCount === q.blanks.length) return true;
            return (correctCount / q.blanks.length) * q.points;
        }

        if (q.type === 'matching') {
            let correctCount = 0;
            q.pairs.forEach(p => {
                if (userAns[p.id] === p.id) correctCount++;
            });
            if (correctCount === q.pairs.length) return true;
            return (correctCount / q.pairs.length) * q.points;
        }

        return false;
    }

    function checkBlank(blank, val) {
        if (!val) return false;
        const input = blank.caseSensitive ? val : val.toLowerCase();
        return blank.acceptedAnswers.some(ans => {
            const target = blank.caseSensitive ? ans : ans.toLowerCase();
            return input === target;
        });
    }

    function getOptionClass(q, optId) {
        if (q.type === 'multiple-choice') {
            const isCorrect = q.options.find(o => o.id === optId).isCorrect;
            const isSelected = state.userAnswers[q.id] === optId;
            if (isCorrect) return 'correct';
            if (isSelected && !isCorrect) return 'incorrect';
        }
        if (q.type === 'multiple-select') {
            const isCorrect = q.options.find(o => o.id === optId).isCorrect;
            const isSelected = (state.userAnswers[q.id] || []).includes(optId);
            if (isCorrect) return 'correct-outline';
            if (isSelected && !isCorrect) return 'incorrect';
        }
        return '';
    }

    /**
     * Results Display
     */
    function renderResults(earned, total, percentage, topicScores) {
        state.isReviewMode = true;
        const passed = percentage >= state.quizData.metadata.passingScore;
        const content = document.querySelector('.quiz-content');
        const results = document.querySelector('.quiz-results');

        content.hidden = true;
        results.hidden = false;

        let topicHtml = '';
        if (Object.keys(topicScores).length > 0) {
            topicHtml = `
                <div class="topic-breakdown">
                    <h3 class="topic-breakdown-title">Topic Performance</h3>
                    <div class="topic-breakdown-list">
                        ${Object.values(topicScores).map(t => {
                            const tPct = Math.round((t.earned / t.total) * 100);
                            let statusClass = tPct >= 70 ? 'good' : (tPct >= 50 ? 'fair' : 'needs-work');
                            return `
                                <div class="topic-breakdown-item ${statusClass}">
                                    <div class="topic-breakdown-header">
                                        <span class="topic-name">${t.name}</span>
                                        <span class="topic-score">${tPct}%</span>
                                    </div>
                                    <div class="topic-progress-bar">
                                        <div class="topic-progress-fill" style="width: ${tPct}%"></div>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            `;
        }

        results.innerHTML = `
            <div class="results-icon">${passed ? '🏆' : '📚'}</div>
            <h2 class="results-title">${passed ? 'Congratulations!' : 'Keep Studying!'}</h2>
            <div class="results-score">${percentage}%</div>
            <p class="results-message">You scored ${Math.round(earned)} out of ${total} points.</p>
            
            <div class="quiz-actions" style="justify-content:center; gap:1rem; flex-wrap:wrap">
                <button class="quiz-button quiz-button--secondary" onclick="window.location.reload()">Retake Quiz</button>
                <button class="quiz-button quiz-button--primary" id="review-btn">Review Answers</button>
            </div>

            ${topicHtml}
        `;

        document.getElementById('review-btn').addEventListener('click', () => {
            results.hidden = true;
            content.hidden = false;
            state.currentQuestionIndex = 0;
            renderQuestion();
        });
    }

    // Utilities
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function saveResultToStorage(quizId, score) {
        const history = JSON.parse(localStorage.getItem('quiz_history') || '{}');
        history[quizId] = Math.max(history[quizId] || 0, score);
        localStorage.setItem('quiz_history', JSON.stringify(history));
    }

    function showError(msg) {
        document.querySelector('.quiz-loading').innerHTML = `<p style="color:red">Error: ${msg}</p>`;
    }

    function startTimer() {
        // Timer implementation (optional)
    }

    // Start
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
