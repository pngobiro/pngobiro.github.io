
/* ========================================================================
   FILE: js/quiz.js
   DESCRIPTION: Core engine for rendering and managing quizzes
   ======================================================================== */

(function() {
    'use strict';

    // State management
    const state = {
        quizId: null,
        data: null,
        currentQuestionIndex: 0,
        userAnswers: {}, // { questionId: answer }
        score: 0,
        timer: null,
        timeRemaining: 0,
        isReviewMode: false
    };

    // DOM Elements cache
    const dom = {};

    /**
     * Initialize the quiz engine
     */
    function init() {
        // Global registry for JSONP callbacks
        window.registerQuiz = function(id, data) {
            console.log(`Quiz registered: ${id}`);
            if (state.quizId === id) {
                loadQuizData(data);
            } else {
                // Store in a global cache if ID doesn't match current container
                window._quizCache = window._quizCache || {};
                window._quizCache[id] = data;
            }
        };

        // Find quiz container
        const container = document.querySelector('.quiz-container');
        if (!container) return;

        state.quizId = container.dataset.quizId;
        dom.container = container;
        dom.loading = container.querySelector('.quiz-loading');
        dom.content = container.querySelector('.quiz-content');
        dom.results = container.querySelector('.quiz-results');

        // Check if data is already cached
        if (window._quizCache && window._quizCache[state.quizId]) {
            loadQuizData(window._quizCache[state.quizId]);
            return;
        }

        // Load strategy
        const jsonpSrc = container.dataset.quizJs;
        if (jsonpSrc) {
            loadScript(jsonpSrc);
        } else {
            console.error('No quiz source specified (data-quiz-js)');
            dom.loading.innerHTML = '<p class="error">Error: Quiz source not found.</p>';
        }
    }

    /**
     * Load JSONP script
     */
    function loadScript(src) {
        const script = document.createElement('script');
        script.src = src;
        script.onerror = () => {
            dom.loading.innerHTML = '<p class="error">Error loading quiz data. Check file path.</p>';
        };
        document.body.appendChild(script);
    }

    /**
     * Process loaded quiz data
     */
    function loadQuizData(data) {
        state.data = data;
        state.timeRemaining = data.settings.timeLimit || 0;
        
        // Shuffle if enabled
        if (data.settings.shuffleQuestions) {
            shuffleArray(state.data.questions);
        }

        renderStartScreen();
    }

    /**
     * Render Start Screen
     */
    function renderStartScreen() {
        dom.loading.hidden = true;
        dom.content.hidden = false;
        
        const { metadata, questions } = state.data;
        
        dom.content.innerHTML = `
            <div class="quiz-start-card">
                <h3>${metadata.title}</h3>
                <p>${metadata.description}</p>
                <div class="quiz-meta-info" style="margin: 1.5rem 0; display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                    <span class="badge">📊 ${metadata.difficulty}</span>
                    <span class="badge">❓ ${questions.length} Questions</span>
                    <span class="badge">⏱️ ${metadata.estimatedTime} Mins</span>
                    <span class="badge">🎯 ${metadata.passingScore}% to Pass</span>
                </div>
                <button id="btn-start" class="quiz-button quiz-button--primary">Start Quiz</button>
            </div>
        `;

        document.getElementById('btn-start').addEventListener('click', startQuiz);
    }

    /**
     * Start the quiz
     */
    function startQuiz() {
        state.currentQuestionIndex = 0;
        state.userAnswers = {};
        state.isReviewMode = false;
        
        // Start timer if set
        if (state.timeRemaining > 0) {
            startTimer();
        }

        renderQuestion();
    }

    /**
     * Render current question
     */
    function renderQuestion() {
        const question = state.data.questions[state.currentQuestionIndex];
        const isLast = state.currentQuestionIndex === state.data.questions.length - 1;
        
        // Progress Bar
        const progressPercent = ((state.currentQuestionIndex) / state.data.questions.length) * 100;
        
        let html = `
            <div class="quiz-progress">
                <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width: ${progressPercent}%"></div></div>
                <div class="quiz-progress-text">Question ${state.currentQuestionIndex + 1} of ${state.data.questions.length}</div>
            </div>
            
            <div class="quiz-question fade-in">
                <div class="question-header">
                    <div class="question-number">${state.currentQuestionIndex + 1}</div>
                    <div class="question-text">${formatText(question.question)}</div>
                    <div class="question-points">${question.points} pts</div>
                </div>
                
                <div class="question-body">
                    ${renderQuestionInput(question)}
                </div>

                ${question.hint ? `
                    <button class="hint-button" onclick="this.nextElementSibling.hidden = !this.nextElementSibling.hidden">
                        💡 Show Hint
                    </button>
                    <div class="hint-content" hidden>${question.hint}</div>
                ` : ''}
            </div>

            <div class="quiz-actions">
                <button id="btn-prev" class="quiz-button quiz-button--secondary" ${state.currentQuestionIndex === 0 ? 'disabled' : ''}>Previous</button>
                <button id="btn-next" class="quiz-button quiz-button--primary">${isLast ? 'Submit Quiz' : 'Next'}</button>
            </div>
        `;

        dom.content.innerHTML = html;

        // Event Listeners
        document.getElementById('btn-prev').addEventListener('click', () => {
            saveAnswer();
            state.currentQuestionIndex--;
            renderQuestion();
        });

        document.getElementById('btn-next').addEventListener('click', () => {
            if (validateAnswer()) {
                saveAnswer();
                if (isLast) {
                    finishQuiz();
                } else {
                    state.currentQuestionIndex++;
                    renderQuestion();
                }
            }
        });

        // Initialize specific handlers (Drag and Drop, etc.)
        initQuestionInteractions(question);
    }

    /**
     * Render specific input types based on question.type
     */
    function renderQuestionInput(q) {
        const saved = state.userAnswers[q.id];

        switch (q.type) {
            case 'multiple-choice':
            case 'true-false':
                const options = q.type === 'true-false' 
                    ? [{id: 'true', text: 'True'}, {id: 'false', text: 'False'}]
                    : q.options;
                
                if (state.data.settings.shuffleOptions && q.type !== 'true-false') shuffleArray(options);

                return `
                    <div class="quiz-options">
                        ${options.map(opt => `
                            <label class="quiz-option ${saved === opt.id ? 'selected' : ''}">
                                <input type="radio" name="${q.id}" value="${opt.id}" ${saved === opt.id ? 'checked' : ''}>
                                <span class="option-text">${opt.text}</span>
                            </label>
                        `).join('')}
                    </div>
                `;

            case 'multiple-select':
                return `
                    <div class="quiz-options">
                        <p class="select-instruction">Select all that apply:</p>
                        ${q.options.map(opt => `
                            <label class="quiz-option ${saved && saved.includes(opt.id) ? 'selected' : ''}">
                                <input type="checkbox" name="${q.id}" value="${opt.id}" ${saved && saved.includes(opt.id) ? 'checked' : ''}>
                                <span class="option-text">${opt.text}</span>
                            </label>
                        `).join('')}
                    </div>
                `;

            case 'fill-blank':
                // Replace __id__ with input fields
                let text = q.question;
                q.blanks.forEach(blank => {
                    const val = saved ? saved[blank.id] || '' : '';
                    const input = `<input type="text" class="blank-input" data-blank-id="${blank.id}" value="${val}" placeholder="...">`;
                    // Replace double underscores __id__ pattern
                    text = text.replace(new RegExp(`__${blank.id}__`, 'g'), input);
                });
                // If question text wasn't replaced (legacy format), append inputs
                if (!text.includes('<input')) {
                    text += '<div class="fill-blank-container">';
                    q.blanks.forEach(blank => {
                        const val = saved ? saved[blank.id] || '' : '';
                        text += `<div style="margin:10px 0"><label>Answer ${blank.id}: <input type="text" class="blank-input" data-blank-id="${blank.id}" value="${val}"></label></div>`;
                    });
                    text += '</div>';
                }
                // Hide original question text in header if we are rendering it here
                setTimeout(() => {
                    const headerText = dom.content.querySelector('.question-text');
                    if(headerText) headerText.innerHTML = text; // Move processed text to header
                    dom.content.querySelector('.question-body').innerHTML = ''; // Clear body
                }, 0);
                return ''; 

            case 'matching':
                const pairs = q.pairs;
                const lefts = pairs.map(p => ({id: p.id, text: p.left}));
                const rights = pairs.map(p => ({id: p.id, text: p.right}));
                shuffleArray(rights);
                
                return `
                    <div class="matching-container">
                        <div class="matching-column" id="source-col">
                            ${lefts.map(l => `<div class="matching-item source" data-id="${l.id}">${l.text}</div>`).join('')}
                        </div>
                        <div class="matching-connector">↔️</div>
                        <div class="matching-column" id="target-col">
                            ${rights.map((r, i) => `
                                <div class="matching-dropzone" data-slot="${i}">
                                    <select class="matching-select" data-pair-id="${lefts[i].id}">
                                        <option value="">Select match...</option>
                                        ${rights.map(opt => `
                                            <option value="${opt.text}" ${saved && saved[lefts[i].id] === opt.text ? 'selected' : ''}>${opt.text}</option>
                                        `).join('')}
                                    </select>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;

            case 'ordering':
                let items = [...q.items];
                // If saved state exists, order by that, otherwise shuffle
                if (saved) {
                    items.sort((a,b) => saved.indexOf(a.id) - saved.indexOf(b.id));
                } else {
                    shuffleArray(items);
                }

                return `
                    <div class="ordering-container" id="sortable-list">
                        ${items.map((item, index) => `
                            <div class="ordering-item" draggable="true" data-id="${item.id}">
                                <span class="position-number">${index + 1}</span>
                                <span class="item-text">${item.text}</span>
                                <span class="drag-handle">☰</span>
                            </div>
                        `).join('')}
                    </div>
                    <p class="select-instruction" style="text-align:center; margin-top:10px">Drag and drop to reorder</p>
                `;

            default:
                return '<p>Unsupported question type</p>';
        }
    }

    /**
     * Initialize interactions (Drag & Drop, etc)
     */
    function initQuestionInteractions(q) {
        // Click handling for options
        const options = dom.content.querySelectorAll('.quiz-option');
        options.forEach(opt => {
            opt.addEventListener('click', (e) => {
                if (e.target.type !== 'radio' && e.target.type !== 'checkbox') {
                    const input = opt.querySelector('input');
                    if (input.type === 'radio') {
                        input.checked = true;
                        // visual update
                        options.forEach(o => o.classList.remove('selected'));
                        opt.classList.add('selected');
                    } else {
                        input.checked = !input.checked;
                        opt.classList.toggle('selected');
                    }
                }
            });
        });

        // Ordering Drag & Drop
        if (q.type === 'ordering') {
            const list = document.getElementById('sortable-list');
            let draggedItem = null;

            list.addEventListener('dragstart', (e) => {
                draggedItem = e.target;
                e.target.classList.add('dragging');
            });

            list.addEventListener('dragend', (e) => {
                e.target.classList.remove('dragging');
                // Update numbers
                const items = list.querySelectorAll('.ordering-item');
                items.forEach((item, idx) => {
                    item.querySelector('.position-number').textContent = idx + 1;
                });
            });

            list.addEventListener('dragover', (e) => {
                e.preventDefault();
                const afterElement = getDragAfterElement(list, e.clientY);
                const currentDraggable = document.querySelector('.dragging');
                if (afterElement == null) {
                    list.appendChild(currentDraggable);
                } else {
                    list.insertBefore(currentDraggable, afterElement);
                }
            });
        }
    }

    // Helper for Drag & Drop
    function getDragAfterElement(container, y) {
        const draggableElements = [...container.querySelectorAll('.ordering-item:not(.dragging)')];
        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child };
            } else {
                return closest;
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element;
    }

    /**
     * Save current answer to state
     */
    function saveAnswer() {
        const q = state.data.questions[state.currentQuestionIndex];
        let answer = null;

        switch (q.type) {
            case 'multiple-choice':
            case 'true-false':
                const selected = document.querySelector(`input[name="${q.id}"]:checked`);
                if (selected) answer = selected.value;
                break;
            case 'multiple-select':
                const checked = document.querySelectorAll(`input[name="${q.id}"]:checked`);
                answer = Array.from(checked).map(c => c.value);
                break;
            case 'fill-blank':
                answer = {};
                document.querySelectorAll('.blank-input').forEach(input => {
                    answer[input.dataset.blankId] = input.value.trim();
                });
                break;
            case 'matching':
                answer = {};
                document.querySelectorAll('.matching-select').forEach(sel => {
                    answer[sel.dataset.pairId] = sel.value;
                });
                break;
            case 'ordering':
                answer = [];
                document.querySelectorAll('.ordering-item').forEach(item => {
                    answer.push(item.dataset.id);
                });
                break;
        }
        state.userAnswers[q.id] = answer;
    }

    /**
     * Validate if answer provided
     */
    function validateAnswer() {
        const q = state.data.questions[state.currentQuestionIndex];
        const ans = state.userAnswers[q.id]; // Logic relies on saveAnswer called before check but inputs might change. 
        // Better: check inputs directly
        
        // Simple check for now based on DOM
        if (q.type === 'multiple-choice' || q.type === 'true-false') {
            if (!document.querySelector(`input[name="${q.id}"]:checked`)) {
                alert('Please select an answer.');
                return false;
            }
        }
        // Add other validation as needed
        return true;
    }

    /**
     * Calculate Score and Finish
     */
    function finishQuiz() {
        let earnedPoints = 0;
        let totalPoints = 0;
        let correctCount = 0;
        
        // Topic breakdown for comprehensive exams
        const topicBreakdown = {};

        state.data.questions.forEach(q => {
            totalPoints += q.points;
            const ua = state.userAnswers[q.id];
            let isCorrect = false;
            let points = 0;

            // Scoring Logic
            switch (q.type) {
                case 'multiple-choice':
                    const correctOpt = q.options.find(o => o.isCorrect);
                    if (ua === correctOpt.id) { isCorrect = true; points = q.points; }
                    break;
                case 'true-false':
                    if (JSON.parse(ua) === q.correctAnswer) { isCorrect = true; points = q.points; }
                    break;
                case 'multiple-select':
                    const correctIds = q.options.filter(o => o.isCorrect).map(o => o.id);
                    if (ua && ua.length === correctIds.length && ua.every(v => correctIds.includes(v))) {
                        isCorrect = true; points = q.points;
                    }
                    break;
                case 'fill-blank':
                    let blankCorrect = 0;
                    q.blanks.forEach(b => {
                        const userVal = (ua[b.id] || '').toLowerCase();
                        const accepted = b.acceptedAnswers.map(a => a.toLowerCase());
                        if (accepted.includes(userVal)) blankCorrect++;
                    });
                    if (blankCorrect === q.blanks.length) { isCorrect = true; points = q.points; }
                    else points = (blankCorrect / q.blanks.length) * q.points;
                    break;
                case 'ordering':
                    // Check if array matches correct positions (assuming saved ua is array of IDs in order)
                    // We need to know correct order. In schema items have correctPosition
                    const correctOrder = [...q.items].sort((a,b) => a.correctPosition - b.correctPosition).map(i => i.id);
                    if (JSON.stringify(ua) === JSON.stringify(correctOrder)) {
                        isCorrect = true; points = q.points;
                    }
                    break;
                case 'matching':
                    // Simplify: all matches must be right
                    let matchCorrect = 0;
                    q.pairs.forEach(p => {
                        if (ua[p.id] === p.right) matchCorrect++;
                    });
                    if (matchCorrect === q.pairs.length) { isCorrect = true; points = q.points; }
                    else points = (matchCorrect / q.pairs.length) * q.points;
                    break;
            }

            if (isCorrect) correctCount++;
            earnedPoints += points;

            // Track topic performance
            if (state.data.metadata.examType === 'comprehensive') {
                const tid = q.topicId || 'unknown';
                if (!topicBreakdown[tid]) topicBreakdown[tid] = { name: q.topicName, total: 0, earned: 0 };
                topicBreakdown[tid].total += q.points;
                topicBreakdown[tid].earned += points;
            }
        });

        const percentage = Math.round((earnedPoints / totalPoints) * 100);
        const passed = percentage >= state.data.metadata.passingScore;

        // Save to local storage
        const history = JSON.parse(localStorage.getItem('quiz_history') || '{}');
        history[state.quizId] = {
            score: percentage,
            passed: passed,
            date: new Date().toISOString()
        };
        localStorage.setItem('quiz_history', JSON.stringify(history));

        renderResults(percentage, passed, earnedPoints, totalPoints, correctCount, topicBreakdown);
    }

    /**
     * Render Results Screen
     */
    function renderResults(percentage, passed, earned, total, correctCount, breakdown) {
        dom.content.hidden = true;
        dom.results.hidden = false;

        const isComprehensive = state.data.metadata.examType === 'comprehensive';

        let html = `
            <div class="results-header">
                <div class="results-icon">${passed ? '🏆' : '📚'}</div>
                <h2 class="results-title">${passed ? 'Congratulations!' : 'Keep Studying'}</h2>
                <div class="results-score" style="color: ${passed ? 'var(--color-success)' : 'var(--color-danger)'}">${percentage}%</div>
                <p class="results-message">
                    ${passed ? 'You passed this quiz!' : 'You did not meet the passing score. Review the material and try again.'}
                </p>
            </div>

            <div class="results-breakdown">
                <div class="breakdown-item">
                    <span class="breakdown-value">${correctCount}/${state.data.questions.length}</span>
                    <span class="breakdown-label">Questions Correct</span>
                </div>
                <div class="breakdown-item">
                    <span class="breakdown-value">${Math.round(earned)}/${total}</span>
                    <span class="breakdown-label">Points Earned</span>
                </div>
            </div>
        `;

        if (isComprehensive) {
            html += `<div class="topic-breakdown" style="margin-top:2rem">
                <h3 style="margin-bottom:1rem">Topic Breakdown</h3>`;
            
            for (const [tid, data] of Object.entries(breakdown)) {
                const topicPct = Math.round((data.earned / data.total) * 100);
                const color = topicPct >= 70 ? 'var(--color-success)' : (topicPct >= 50 ? 'var(--color-warning)' : 'var(--color-danger)');
                html += `
                    <div style="margin-bottom:1rem">
                        <div style="display:flex; justify-content:space-between; margin-bottom:0.25rem">
                            <strong>${data.name || tid}</strong>
                            <span>${topicPct}%</span>
                        </div>
                        <div style="height:8px; background:var(--color-bg-tertiary); border-radius:4px; overflow:hidden">
                            <div style="width:${topicPct}%; height:100%; background:${color}"></div>
                        </div>
                    </div>
                `;
            }
            html += `</div>`;
        }

        html += `
            <div class="results-actions" style="margin-top:2rem">
                <button class="quiz-button quiz-button--primary" onclick="location.reload()">Retake Quiz</button>
                <a href="../quiz-hub.html" class="quiz-button quiz-button--secondary">Back to Quiz Hub</a>
            </div>
        `;

        dom.results.innerHTML = html;
    }

    // Utilities
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function formatText(text) {
        // Simple markdown formatter if needed (bold, italic)
        return text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>').replace(/\*(.*?)\*/g, '<i>$1</i>');
    }

    // Helper for Timer (Placeholder for now)
    function startTimer() {
        // Simple timer logic can go here
    }

    // Boot
    document.addEventListener('DOMContentLoaded', init);

})();

