/**
 * Quiz System v1.1
 * Interactive quiz engine for course content
 * Supports 8 question types with scoring, feedback, and accessibility
 * 
 * LOADING METHODS (in order of priority):
 * 1. Embedded JSON - <script type="application/json" id="quiz-data-[id]">
 * 2. JSONP/Script tag - loads [quiz-id].js which calls registerQuiz()
 * 3. Fetch API - requires web server (http/https)
 */

(function() {
    'use strict';

    // Global quiz registry for JSONP loading
    window.QuizRegistry = window.QuizRegistry || {};
    
    // JSONP callback - called by external quiz JS files
    window.registerQuiz = function(quizId, quizData) {
        window.QuizRegistry[quizId] = quizData;
        // Trigger any waiting quiz containers
        document.querySelectorAll(`.quiz-container[data-quiz-id="${quizId}"]`).forEach(container => {
            if (container._quizEngine && !container._quizEngine.quizData) {
                container._quizEngine.loadFromRegistry(quizId);
            }
        });
    };

    // Quiz State Management
    class QuizEngine {
        constructor(container) {
            this.container = container;
            this.quizData = null;
            this.currentQuestion = 0;
            this.answers = {};
            this.score = 0;
            this.isSubmitted = false;
            this.startTime = null;
            
            // Store reference for JSONP callback
            container._quizEngine = this;
            
            this.elements = {
                loading: container.querySelector('.quiz-loading'),
                content: container.querySelector('.quiz-content'),
                results: container.querySelector('.quiz-results')
            };
        }

        async init() {
            const quizId = this.container.dataset.quizId;
            
            try {
                // Method 1: Check embedded JSON
                const embeddedScript = document.getElementById(`quiz-data-${quizId}`);
                if (embeddedScript) {
                    this.quizData = JSON.parse(embeddedScript.textContent);
                    this.startQuiz();
                    return;
                }

                // Method 2: Check if already in registry (JSONP already loaded)
                if (window.QuizRegistry[quizId]) {
                    this.quizData = window.QuizRegistry[quizId];
                    this.startQuiz();
                    return;
                }

                // Method 3: Try JSONP - load quiz as JS file
                const quizJsSrc = this.container.dataset.quizJs;
                if (quizJsSrc) {
                    this.loadViaScript(quizJsSrc, quizId);
                    return;
                }

                // Method 4: Try fetch (requires web server)
                const quizSrc = this.container.dataset.quizSrc;
                if (quizSrc) {
                    await this.loadViaFetch(quizSrc);
                    return;
                }

                this.showError('No quiz data source specified.');
            } catch (error) {
                this.showError(`Error: ${error.message}`);
            }
        }

        loadViaScript(src, quizId) {
            const script = document.createElement('script');
            script.src = src;
            script.onerror = () => this.showError('Failed to load quiz file.');
            document.head.appendChild(script);
            
            // Set timeout for loading
            setTimeout(() => {
                if (!this.quizData) {
                    this.showError('Quiz loading timed out.');
                }
            }, 10000);
        }

        loadFromRegistry(quizId) {
            this.quizData = window.QuizRegistry[quizId];
            if (this.quizData) {
                this.startQuiz();
            }
        }

        async loadViaFetch(src) {
            const response = await fetch(src);
            if (!response.ok) throw new Error('Failed to fetch quiz');
            this.quizData = await response.json();
            this.startQuiz();
        }

        startQuiz() {
            this.validateSchema();
            this.startTime = Date.now();
            this.render();
        }

        validateSchema() {
            const { schemaVersion, quizId, metadata, questions } = this.quizData;
            if (!schemaVersion || !quizId || !metadata || !questions?.length) {
                throw new Error('Invalid quiz schema');
            }
        }

        showError(message) {
            this.elements.loading.innerHTML = `
                <div class="quiz-error">
                    <span class="error-icon">⚠️</span>
                    <p>${message}</p>
                </div>
            `;
        }

        render() {
            this.elements.loading.hidden = true;
            this.elements.content.hidden = false;
            
            const { metadata, settings, questions } = this.quizData;
            const shuffledQuestions = settings?.shuffleQuestions 
                ? this.shuffle([...questions]) 
                : questions;

            this.elements.content.innerHTML = `
                <div class="quiz-info">
                    <div class="quiz-meta">
                        ${metadata.difficulty ? `<span class="difficulty-badge difficulty-${metadata.difficulty}">${metadata.difficulty}</span>` : ''}
                        ${metadata.estimatedTime ? `<span class="time-estimate">⏱️ ~${metadata.estimatedTime} min</span>` : ''}
                        <span class="question-count">📝 ${questions.length} questions</span>
                    </div>
                </div>
                
                <div class="quiz-progress">
                    <div class="quiz-progress-bar">
                        <div class="quiz-progress-fill" style="width: 0%"></div>
                    </div>
                    <span class="quiz-progress-text">0 of ${questions.length} answered</span>
                </div>
                
                <form class="quiz-form" id="quiz-form-${this.quizData.quizId}">
                    <div class="quiz-questions">
                        ${shuffledQuestions.map((q, i) => this.renderQuestion(q, i, settings)).join('')}
                    </div>
                    
                    <div class="quiz-actions">
                        <div class="quiz-nav-buttons">
                            <button type="button" class="quiz-button quiz-button--secondary" id="quiz-reset">
                                🔄 Reset
                            </button>
                        </div>
                        <button type="submit" class="quiz-button quiz-button--primary" id="quiz-submit">
                            ✓ Submit Quiz
                        </button>
                    </div>
                </form>
            `;

            this.bindEvents();
        }

        renderQuestion(question, index, settings) {
            const questionNum = index + 1;
            const shuffleOptions = settings?.shuffleOptions ?? false;
            
            // Show topic badge for comprehensive exams
            const topicBadge = question.topicName 
                ? `<span class="question-topic-badge" data-topic="${question.topicId}">${question.topicName}</span>` 
                : '';

            return `
                <div class="quiz-question" data-question-id="${question.id}" data-question-type="${question.type}" ${question.topicId ? `data-topic-id="${question.topicId}"` : ''}>
                    <div class="question-header">
                        <span class="question-number">${questionNum}</span>
                        ${topicBadge}
                        <p class="question-text">${question.question}</p>
                        <span class="question-points">${question.points} pts</span>
                    </div>
                    
                    ${question.media ? this.renderMedia(question.media) : ''}
                    
                    <div class="question-body">
                        ${this.renderQuestionType(question, shuffleOptions)}
                    </div>
                    
                    ${question.hint ? `
                        <button type="button" class="hint-button" data-hint="${question.id}">
                            💡 Show Hint
                        </button>
                        <div class="hint-content" id="hint-${question.id}" hidden>
                            ${question.hint}
                        </div>
                    ` : ''}
                    
                    <div class="question-feedback" id="feedback-${question.id}" hidden></div>
                </div>
            `;
        }

        renderMedia(media) {
            if (!media) return '';
            
            switch (media.type) {
                case 'image':
                    return `
                        <div class="question-media question-media--image">
                            <img src="${media.url}" alt="${media.alt || ''}" loading="lazy" class="question-media-img">
                            ${media.caption ? `<p class="media-caption">${media.caption}</p>` : ''}
                        </div>
                    `;
                case 'video':
                    return `
                        <div class="question-media question-media--video">
                            <video controls ${media.autoplay ? 'autoplay' : ''} ${media.loop ? 'loop' : ''} ${media.muted ? 'muted' : ''} preload="metadata" class="question-media-video">
                                <source src="${media.url}" type="${media.mimeType || 'video/mp4'}">
                                ${media.fallbackUrl ? `<source src="${media.fallbackUrl}" type="${media.fallbackMimeType || 'video/webm'}">` : ''}
                                Your browser does not support the video tag.
                            </video>
                            ${media.caption ? `<p class="media-caption">${media.caption}</p>` : ''}
                        </div>
                    `;
                case 'audio':
                    return `
                        <div class="question-media question-media--audio">
                            <audio controls preload="metadata" class="question-media-audio">
                                <source src="${media.url}" type="${media.mimeType || 'audio/mpeg'}">
                                Your browser does not support the audio tag.
                            </audio>
                            ${media.caption ? `<p class="media-caption">${media.caption}</p>` : ''}
                        </div>
                    `;
                case 'youtube':
                    return `
                        <div class="question-media question-media--youtube">
                            <div class="video-wrapper">
                                <iframe src="https://www.youtube.com/embed/${media.videoId}${media.startTime ? `?start=${media.startTime}` : ''}" 
                                        frameborder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                        allowfullscreen
                                        title="${media.alt || 'Video content'}">
                                </iframe>
                            </div>
                            ${media.caption ? `<p class="media-caption">${media.caption}</p>` : ''}
                        </div>
                    `;
                default:
                    return '';
            }
        }

        renderOptionContent(opt) {
            // Check if option has image
            if (opt.image) {
                return `
                    <span class="option-content option-content--image">
                        <img src="${opt.image.url}" alt="${opt.image.alt || opt.text || ''}" class="option-image" loading="lazy">
                        ${opt.text ? `<span class="option-text">${opt.text}</span>` : ''}
                    </span>
                `;
            }
            return `<span class="option-text">${opt.text}</span>`;
        }

        renderQuestionType(question, shuffleOptions) {
            switch (question.type) {
                case 'multiple-choice':
                    return this.renderMultipleChoice(question, shuffleOptions);
                case 'multiple-select':
                    return this.renderMultipleSelect(question, shuffleOptions);
                case 'true-false':
                    return this.renderTrueFalse(question);
                case 'fill-blank':
                    return this.renderFillBlank(question);
                case 'matching':
                    return this.renderMatching(question);
                case 'ordering':
                    return this.renderOrdering(question);
                case 'short-answer':
                    return this.renderShortAnswer(question);
                case 'image-based':
                    return this.renderImageBased(question);
                default:
                    return '<p>Unknown question type</p>';
            }
        }

        renderMultipleChoice(question, shuffle) {
            const options = shuffle ? this.shuffle([...question.options]) : question.options;
            const hasImageOptions = options.some(opt => opt.image);
            const optionsClass = hasImageOptions ? 'quiz-options quiz-options--images' : 'quiz-options';
            
            return `
                <div class="${optionsClass}" role="radiogroup" aria-label="Answer options">
                    ${options.map(opt => `
                        <label class="quiz-option ${opt.image ? 'quiz-option--image' : ''}" for="opt-${question.id}-${opt.id}">
                            <input type="radio" 
                                   id="opt-${question.id}-${opt.id}" 
                                   name="q-${question.id}" 
                                   value="${opt.id}"
                                   aria-describedby="feedback-${question.id}">
                            ${this.renderOptionContent(opt)}
                            <span class="option-indicator"></span>
                        </label>
                    `).join('')}
                </div>
            `;
        }

        renderMultipleSelect(question, shuffle) {
            const options = shuffle ? this.shuffle([...question.options]) : question.options;
            const hasImageOptions = options.some(opt => opt.image);
            const optionsClass = hasImageOptions ? 'quiz-options quiz-options--images' : 'quiz-options';
            
            return `
                <p class="select-instruction">Select all that apply:</p>
                <div class="${optionsClass}" role="group" aria-label="Answer options">
                    ${options.map(opt => `
                        <label class="quiz-option ${opt.image ? 'quiz-option--image' : ''}" for="opt-${question.id}-${opt.id}">
                            <input type="checkbox" 
                                   id="opt-${question.id}-${opt.id}" 
                                   name="q-${question.id}" 
                                   value="${opt.id}">
                            ${this.renderOptionContent(opt)}
                            <span class="option-indicator"></span>
                        </label>
                    `).join('')}
                </div>
            `;
        }

        renderTrueFalse(question) {
            return `
                <div class="true-false-options" role="radiogroup" aria-label="True or False">
                    <button type="button" class="tf-button true" data-value="true" data-question="${question.id}">
                        ✓ True
                    </button>
                    <button type="button" class="tf-button false" data-value="false" data-question="${question.id}">
                        ✗ False
                    </button>
                    <input type="hidden" name="q-${question.id}" id="tf-input-${question.id}">
                </div>
            `;
        }

        renderFillBlank(question) {
            let text = question.question;
            question.blanks.forEach((blank, i) => {
                text = text.replace(`__${blank.id}__`, 
                    `<input type="text" 
                            class="blank-input" 
                            id="blank-${question.id}-${blank.id}"
                            name="blank-${question.id}-${blank.id}"
                            placeholder="Answer ${i + 1}"
                            autocomplete="off">`
                );
            });
            return `<div class="fill-blank-container">${text}</div>`;
        }

        renderMatching(question) {
            const shuffledRight = this.shuffle([...question.pairs.map(p => ({ id: p.id, text: p.right }))]);
            return `
                <div class="matching-container">
                    <div class="matching-column matching-left">
                        ${question.pairs.map(pair => `
                            <div class="matching-item" data-pair-id="${pair.id}">
                                ${pair.left}
                            </div>
                        `).join('')}
                    </div>
                    <div class="matching-connector">
                        ${question.pairs.map(() => '→').join('<br>')}
                    </div>
                    <div class="matching-column matching-right">
                        ${question.pairs.map(pair => `
                            <select class="matching-select" name="match-${question.id}-${pair.id}" data-pair="${pair.id}">
                                <option value="">Select match...</option>
                                ${shuffledRight.map(opt => `
                                    <option value="${opt.id}">${opt.text}</option>
                                `).join('')}
                            </select>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        renderOrdering(question) {
            const shuffledItems = this.shuffle([...question.items]);
            return `
                <div class="ordering-container" data-question="${question.id}">
                    ${shuffledItems.map((item, i) => `
                        <div class="ordering-item" draggable="true" data-item-id="${item.id}">
                            <span class="drag-handle">⋮⋮</span>
                            <span class="position-number">${i + 1}</span>
                            <span class="item-text">${item.text}</span>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        renderShortAnswer(question) {
            return `
                <div class="short-answer-container">
                    <textarea 
                        name="q-${question.id}" 
                        id="sa-${question.id}"
                        placeholder="Type your answer here..."
                        maxlength="${question.maxLength || 1000}"
                        rows="4"
                        aria-describedby="char-count-${question.id}"></textarea>
                    <div class="char-counter" id="char-count-${question.id}">
                        0 / ${question.maxLength || 1000} characters
                    </div>
                </div>
            `;
        }

        renderImageBased(question) {
            return `
                <div class="image-question-container">
                    <p class="image-instruction">Click on the correct location:</p>
                    <div class="image-question-wrapper" data-question="${question.id}">
                        <img src="${question.imageUrl}" alt="${question.imageAlt}" loading="lazy">
                        ${question.hotspots.map(hs => `
                            <button type="button" 
                                    class="hotspot" 
                                    style="left: ${hs.x}%; top: ${hs.y}%;"
                                    data-hotspot-id="${hs.id}"
                                    data-question="${question.id}"
                                    aria-label="${hs.label}">
                            </button>
                        `).join('')}
                        <input type="hidden" name="q-${question.id}" id="hs-input-${question.id}">
                    </div>
                </div>
            `;
        }

        bindEvents() {
            const form = this.elements.content.querySelector('.quiz-form');
            
            // Form submission
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.submitQuiz();
            });

            // Reset button
            form.querySelector('#quiz-reset')?.addEventListener('click', () => this.resetQuiz());

            // Option selection feedback
            form.querySelectorAll('.quiz-option').forEach(opt => {
                opt.addEventListener('change', () => this.updateProgress());
            });

            // True/False buttons
            form.querySelectorAll('.tf-button').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const qId = e.target.dataset.question;
                    const value = e.target.dataset.value;
                    document.getElementById(`tf-input-${qId}`).value = value;
                    
                    // Update visual state
                    e.target.parentElement.querySelectorAll('.tf-button').forEach(b => b.classList.remove('selected'));
                    e.target.classList.add('selected');
                    this.updateProgress();
                });
            });

            // Hotspot clicks
            form.querySelectorAll('.hotspot').forEach(hs => {
                hs.addEventListener('click', (e) => {
                    const qId = e.target.dataset.question;
                    const hsId = e.target.dataset.hotspotId;
                    document.getElementById(`hs-input-${qId}`).value = hsId;
                    
                    // Update visual state
                    e.target.closest('.image-question-wrapper').querySelectorAll('.hotspot').forEach(h => h.classList.remove('selected'));
                    e.target.classList.add('selected');
                    this.updateProgress();
                });
            });

            // Hint buttons
            form.querySelectorAll('.hint-button').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const hintId = e.target.dataset.hint;
                    const hintEl = document.getElementById(`hint-${hintId}`);
                    hintEl.hidden = !hintEl.hidden;
                    e.target.textContent = hintEl.hidden ? '💡 Show Hint' : '💡 Hide Hint';
                });
            });

            // Character counter for short answer
            form.querySelectorAll('.short-answer-container textarea').forEach(ta => {
                ta.addEventListener('input', (e) => {
                    const counter = e.target.nextElementSibling;
                    const max = e.target.maxLength;
                    counter.textContent = `${e.target.value.length} / ${max} characters`;
                    this.updateProgress();
                });
            });

            // Ordering drag and drop
            this.initDragAndDrop();
        }

        initDragAndDrop() {
            const containers = this.elements.content.querySelectorAll('.ordering-container');
            
            containers.forEach(container => {
                let draggedItem = null;

                container.querySelectorAll('.ordering-item').forEach(item => {
                    item.addEventListener('dragstart', (e) => {
                        draggedItem = item;
                        item.classList.add('dragging');
                        e.dataTransfer.effectAllowed = 'move';
                    });

                    item.addEventListener('dragend', () => {
                        item.classList.remove('dragging');
                        this.updateOrderingNumbers(container);
                        this.updateProgress();
                    });

                    item.addEventListener('dragover', (e) => {
                        e.preventDefault();
                        e.dataTransfer.dropEffect = 'move';
                    });

                    item.addEventListener('drop', (e) => {
                        e.preventDefault();
                        if (draggedItem && draggedItem !== item) {
                            const allItems = [...container.querySelectorAll('.ordering-item')];
                            const draggedIdx = allItems.indexOf(draggedItem);
                            const targetIdx = allItems.indexOf(item);
                            
                            if (draggedIdx < targetIdx) {
                                item.after(draggedItem);
                            } else {
                                item.before(draggedItem);
                            }
                        }
                    });
                });
            });
        }

        updateOrderingNumbers(container) {
            container.querySelectorAll('.ordering-item').forEach((item, i) => {
                item.querySelector('.position-number').textContent = i + 1;
            });
        }

        updateProgress() {
            const questions = this.quizData.questions;
            let answered = 0;

            questions.forEach(q => {
                if (this.isQuestionAnswered(q)) answered++;
            });

            const percentage = (answered / questions.length) * 100;
            const progressFill = this.elements.content.querySelector('.quiz-progress-fill');
            const progressText = this.elements.content.querySelector('.quiz-progress-text');
            
            if (progressFill) progressFill.style.width = `${percentage}%`;
            if (progressText) progressText.textContent = `${answered} of ${questions.length} answered`;
        }

        isQuestionAnswered(question) {
            const form = this.elements.content.querySelector('.quiz-form');
            
            switch (question.type) {
                case 'multiple-choice':
                case 'true-false':
                    return form.querySelector(`input[name="q-${question.id}"]:checked`) !== null ||
                           form.querySelector(`input[name="q-${question.id}"]`)?.value;
                case 'multiple-select':
                    return form.querySelectorAll(`input[name="q-${question.id}"]:checked`).length > 0;
                case 'fill-blank':
                    return [...form.querySelectorAll(`input[id^="blank-${question.id}"]`)].some(i => i.value.trim());
                case 'matching':
                    return [...form.querySelectorAll(`select[name^="match-${question.id}"]`)].some(s => s.value);
                case 'short-answer':
                    return form.querySelector(`textarea[name="q-${question.id}"]`)?.value.trim();
                case 'image-based':
                    return form.querySelector(`input[name="q-${question.id}"]`)?.value;
                case 'ordering':
                    return true; // Always considered answered since items are always in some order
                default:
                    return false;
            }
        }

        submitQuiz() {
            if (this.isSubmitted) return;
            this.isSubmitted = true;

            const form = this.elements.content.querySelector('.quiz-form');
            let totalScore = 0;
            let maxScore = 0;
            let correctCount = 0;
            
            // Track per-topic scores for comprehensive exams
            const topicScores = {};

            this.quizData.questions.forEach(question => {
                maxScore += question.points;
                const result = this.gradeQuestion(question, form);
                
                let earnedPoints = 0;
                if (result.correct) {
                    correctCount++;
                    earnedPoints = question.points;
                } else if (result.partialScore) {
                    earnedPoints = result.partialScore;
                }
                totalScore += earnedPoints;

                // Track topic-based scoring
                if (question.topicId) {
                    if (!topicScores[question.topicId]) {
                        topicScores[question.topicId] = {
                            topicName: question.topicName || question.topicId,
                            earned: 0,
                            max: 0,
                            correct: 0,
                            total: 0
                        };
                    }
                    topicScores[question.topicId].earned += earnedPoints;
                    topicScores[question.topicId].max += question.points;
                    topicScores[question.topicId].total++;
                    if (result.correct) topicScores[question.topicId].correct++;
                }

                this.showQuestionFeedback(question, result);
            });

            this.score = totalScore;
            this.topicScores = topicScores;
            this.showResults(totalScore, maxScore, correctCount);
        }

        gradeQuestion(question, form) {
            switch (question.type) {
                case 'multiple-choice':
                    return this.gradeMultipleChoice(question, form);
                case 'multiple-select':
                    return this.gradeMultipleSelect(question, form);
                case 'true-false':
                    return this.gradeTrueFalse(question, form);
                case 'fill-blank':
                    return this.gradeFillBlank(question, form);
                case 'matching':
                    return this.gradeMatching(question, form);
                case 'ordering':
                    return this.gradeOrdering(question, form);
                case 'short-answer':
                    return this.gradeShortAnswer(question, form);
                case 'image-based':
                    return this.gradeImageBased(question, form);
                default:
                    return { correct: false };
            }
        }

        gradeMultipleChoice(question, form) {
            const selected = form.querySelector(`input[name="q-${question.id}"]:checked`)?.value;
            const correctOption = question.options.find(o => o.isCorrect);
            return { 
                correct: selected === correctOption?.id,
                selectedId: selected,
                correctId: correctOption?.id
            };
        }

        gradeMultipleSelect(question, form) {
            const selected = [...form.querySelectorAll(`input[name="q-${question.id}"]:checked`)].map(i => i.value);
            const correctIds = question.options.filter(o => o.isCorrect).map(o => o.id);
            
            const correctSelected = selected.filter(s => correctIds.includes(s)).length;
            const incorrectSelected = selected.filter(s => !correctIds.includes(s)).length;
            
            const isFullyCorrect = correctSelected === correctIds.length && incorrectSelected === 0;
            
            let partialScore = 0;
            if (question.partialCredit && !isFullyCorrect) {
                partialScore = Math.max(0, (correctSelected - incorrectSelected) / correctIds.length * question.points);
            }

            return { 
                correct: isFullyCorrect, 
                partialScore,
                selected,
                correctIds
            };
        }

        gradeTrueFalse(question, form) {
            const selected = form.querySelector(`input[name="q-${question.id}"]`)?.value;
            return { 
                correct: selected === String(question.correctAnswer),
                selected,
                correctAnswer: question.correctAnswer
            };
        }

        gradeFillBlank(question, form) {
            let allCorrect = true;
            const results = [];

            question.blanks.forEach(blank => {
                const input = form.querySelector(`input[name="blank-${question.id}-${blank.id}"]`);
                const userAnswer = input?.value.trim() || '';
                
                const isCorrect = blank.acceptedAnswers.some(accepted => {
                    if (blank.caseSensitive) {
                        return userAnswer === accepted;
                    }
                    return userAnswer.toLowerCase() === accepted.toLowerCase();
                });

                results.push({ blankId: blank.id, userAnswer, isCorrect });
                if (!isCorrect) allCorrect = false;
            });

            return { correct: allCorrect, blanks: results };
        }

        gradeMatching(question, form) {
            let correctCount = 0;
            const results = [];

            question.pairs.forEach(pair => {
                const select = form.querySelector(`select[name="match-${question.id}-${pair.id}"]`);
                const selected = select?.value;
                const isCorrect = selected === pair.id;
                
                results.push({ pairId: pair.id, selected, isCorrect });
                if (isCorrect) correctCount++;
            });

            return { 
                correct: correctCount === question.pairs.length,
                partialScore: (correctCount / question.pairs.length) * question.points,
                matches: results
            };
        }

        gradeOrdering(question, form) {
            const container = form.querySelector(`.ordering-container[data-question="${question.id}"]`);
            const items = [...container.querySelectorAll('.ordering-item')];
            
            let correctCount = 0;
            items.forEach((item, index) => {
                const itemId = item.dataset.itemId;
                const correctItem = question.items.find(i => i.id === itemId);
                if (correctItem && correctItem.correctPosition === index + 1) {
                    correctCount++;
                }
            });

            return { 
                correct: correctCount === question.items.length,
                partialScore: (correctCount / question.items.length) * question.points,
                correctCount
            };
        }

        gradeShortAnswer(question, form) {
            const textarea = form.querySelector(`textarea[name="q-${question.id}"]`);
            const answer = textarea?.value.trim().toLowerCase() || '';
            
            const foundKeywords = question.keywords.filter(kw => 
                answer.includes(kw.toLowerCase())
            );

            const meetsMinimum = foundKeywords.length >= (question.minKeywords || 1);
            const score = (foundKeywords.length / question.keywords.length) * question.points;

            return { 
                correct: meetsMinimum,
                partialScore: score,
                foundKeywords,
                totalKeywords: question.keywords.length
            };
        }

        gradeImageBased(question, form) {
            const selected = form.querySelector(`input[name="q-${question.id}"]`)?.value;
            const correctHotspot = question.hotspots.find(h => h.isCorrect);
            
            return { 
                correct: selected === correctHotspot?.id,
                selectedId: selected,
                correctId: correctHotspot?.id
            };
        }

        showQuestionFeedback(question, result) {
            const questionEl = this.elements.content.querySelector(`[data-question-id="${question.id}"]`);
            const feedbackEl = document.getElementById(`feedback-${question.id}`);
            
            questionEl.classList.add(result.correct ? 'correct' : 'incorrect');
            
            // Show correct/incorrect indicators on options
            if (question.type === 'multiple-choice' || question.type === 'multiple-select') {
                question.options.forEach(opt => {
                    const optEl = questionEl.querySelector(`label[for="opt-${question.id}-${opt.id}"]`);
                    if (opt.isCorrect) {
                        optEl.classList.add('correct');
                        optEl.querySelector('.option-indicator').textContent = '✓';
                    } else if (result.selectedId === opt.id || result.selected?.includes(opt.id)) {
                        optEl.classList.add('incorrect');
                        optEl.querySelector('.option-indicator').textContent = '✗';
                    }
                });
            }

            // Show feedback for fill-in-blank
            if (question.type === 'fill-blank' && result.blanks) {
                result.blanks.forEach(b => {
                    const input = document.getElementById(`blank-${question.id}-${b.blankId}`);
                    input.classList.add(b.isCorrect ? 'correct' : 'incorrect');
                });
            }

            // Show feedback for hotspots
            if (question.type === 'image-based') {
                questionEl.querySelectorAll('.hotspot').forEach(hs => {
                    const hsId = hs.dataset.hotspotId;
                    const hotspotData = question.hotspots.find(h => h.id === hsId);
                    if (hotspotData?.isCorrect) {
                        hs.classList.add('correct');
                    } else if (result.selectedId === hsId) {
                        hs.classList.add('incorrect');
                    }
                });
            }

            // Display feedback message
            if (this.quizData.settings?.showFeedback !== 'never') {
                feedbackEl.hidden = false;
                feedbackEl.className = `question-feedback ${result.correct ? 'correct' : 'incorrect'}`;
                feedbackEl.innerHTML = `
                    <span class="feedback-icon">${result.correct ? '✓' : '✗'}</span>
                    <div class="feedback-text">
                        <strong>${result.correct ? 'Correct!' : 'Incorrect'}</strong>
                        ${question.explanation ? `<p>${question.explanation}</p>` : ''}
                    </div>
                `;
            }

            // Disable inputs
            questionEl.querySelectorAll('input, select, textarea, button:not(.hint-button)').forEach(el => {
                el.disabled = true;
            });
        }

        showResults(score, maxScore, correctCount) {
            const percentage = Math.round((score / maxScore) * 100);
            const passed = percentage >= (this.quizData.metadata.passingScore || 70);
            const timeTaken = Math.round((Date.now() - this.startTime) / 1000);
            const minutes = Math.floor(timeTaken / 60);
            const seconds = timeTaken % 60;
            
            // Check if this is a comprehensive exam with topic scores
            const hasTopicScores = Object.keys(this.topicScores || {}).length > 0;

            this.elements.results.hidden = false;
            this.elements.results.innerHTML = `
                <div class="results-header">
                    <span class="results-icon">${passed ? '🎉' : '📚'}</span>
                    <h3 class="results-title">${passed ? 'Congratulations!' : 'Keep Learning!'}</h3>
                </div>
                
                <div class="results-score">${percentage}%</div>
                
                <p class="results-message">
                    ${passed 
                        ? `You passed! You scored ${score} out of ${maxScore} points.`
                        : `You scored ${score} out of ${maxScore} points. ${this.quizData.metadata.passingScore || 70}% required to pass.`
                    }
                </p>
                
                <div class="results-breakdown">
                    <div class="breakdown-item">
                        <div class="breakdown-value">${correctCount}/${this.quizData.questions.length}</div>
                        <div class="breakdown-label">Questions Correct</div>
                    </div>
                    <div class="breakdown-item">
                        <div class="breakdown-value">${score}/${maxScore}</div>
                        <div class="breakdown-label">Points Earned</div>
                    </div>
                    <div class="breakdown-item">
                        <div class="breakdown-value">${minutes}:${seconds.toString().padStart(2, '0')}</div>
                        <div class="breakdown-label">Time Taken</div>
                    </div>
                </div>
                
                ${hasTopicScores ? this.renderTopicBreakdown() : ''}
                
                <div class="results-actions">
                    ${this.quizData.settings?.allowRetry !== false ? `
                        <button type="button" class="quiz-button quiz-button--primary" id="quiz-retry">
                            🔄 Try Again
                        </button>
                    ` : ''}
                    <button type="button" class="quiz-button quiz-button--secondary" id="quiz-review">
                        📋 Review Answers
                    </button>
                </div>
            `;

            // Bind retry button
            this.elements.results.querySelector('#quiz-retry')?.addEventListener('click', () => this.resetQuiz());
            
            // Record progress to Quiz Hub
            if (window.QuizHubManager) {
                window.QuizHubManager.recordQuizResult(this.quizData.quizId, percentage, passed);
            }
            
            // Scroll to results
            this.elements.results.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        renderTopicBreakdown() {
            const topics = Object.entries(this.topicScores);
            if (topics.length === 0) return '';
            
            return `
                <div class="topic-breakdown">
                    <h4 class="topic-breakdown-title">📊 Performance by Topic</h4>
                    <div class="topic-breakdown-list">
                        ${topics.map(([topicId, data]) => {
                            const topicPercent = Math.round((data.earned / data.max) * 100);
                            const statusClass = topicPercent >= 70 ? 'good' : topicPercent >= 50 ? 'fair' : 'needs-work';
                            return `
                                <div class="topic-breakdown-item ${statusClass}">
                                    <div class="topic-breakdown-header">
                                        <span class="topic-name">${data.topicName}</span>
                                        <span class="topic-score">${topicPercent}%</span>
                                    </div>
                                    <div class="topic-progress-bar">
                                        <div class="topic-progress-fill" style="width: ${topicPercent}%"></div>
                                    </div>
                                    <div class="topic-details">
                                        ${data.correct}/${data.total} correct · ${data.earned}/${data.max} pts
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            `;
        }

        resetQuiz() {
            this.isSubmitted = false;
            this.score = 0;
            this.answers = {};
            this.startTime = Date.now();
            this.elements.results.hidden = true;
            this.render();
        }

        shuffle(array) {
            const shuffled = [...array];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            return shuffled;
        }
    }

    // Initialize all quiz containers on page load
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.quiz-container').forEach(container => {
            const quiz = new QuizEngine(container);
            quiz.init();
        });
    });

    // Export for external use
    window.QuizEngine = QuizEngine;
})();
