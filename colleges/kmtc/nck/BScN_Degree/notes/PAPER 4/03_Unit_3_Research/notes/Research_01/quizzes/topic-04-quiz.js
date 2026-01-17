registerQuiz("topic-04-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-04-quiz",
    "metadata": {
        "title": "Topic 4: Literature Review & Design",
        "description": "Test your knowledge on sources of literature and selecting appropriate research designs.",
        "topicId": "topic-04",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 75,
        "createdAt": "2026-01-17T00:00:00Z",
        "updatedAt": "2026-01-17T00:00:00Z",
        "tags": ["literature-review", "research-design", "sources"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate",
        "allowRetry": true,
        "showCorrectAnswers": true,
        "timeLimit": 0
    },
    "questions": [
        {
            "id": "q4-primary-source",
            "type": "multiple-choice",
            "question": "Which of the following is considered a PRIMARY source of literature?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "A thesis written by the original researcher", "isCorrect": true },
                { "id": "opt2", "text": "A textbook summarizing multiple studies", "isCorrect": false },
                { "id": "opt3", "text": "An encyclopedia article", "isCorrect": false },
                { "id": "opt4", "text": "A newspaper report on a scientific finding", "isCorrect": false }
            ],
            "explanation": "Primary sources are original works by the person who generated the idea or conducted the research (e.g., theses, empirical journal articles)."
        },
        {
            "id": "q4-secondary-source",
            "type": "fill-blank",
            "question": "A __b1__ source involves summaries or quoted content from a primary source and is usually a paraphrase.",
            "points": 1,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["secondary"], "caseSensitive": false }
            ],
            "explanation": "Secondary sources summarize or quote primary sources and are written by someone who was not the direct observer or participant."
        },
        {
            "id": "q4-experimental-features",
            "type": "multiple-select",
            "question": "Select the three main characteristics of Experimental Research Design.",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Manipulation", "isCorrect": true },
                { "id": "opt2", "text": "Control", "isCorrect": true },
                { "id": "opt3", "text": "Randomisation", "isCorrect": true },
                { "id": "opt4", "text": "Observation only", "isCorrect": false },
                { "id": "opt5", "text": "Subjectivity", "isCorrect": false }
            ],
            "explanation": "Experimental designs are characterized by Manipulation (of IV), Control (of extraneous variables), and Randomisation (of subjects)."
        },
        {
            "id": "q4-design-retrospective",
            "type": "multiple-choice",
            "question": "Which study design looks back in time to link present outcomes to past exposures?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Retrospective Study Design", "isCorrect": true },
                { "id": "opt2", "text": "Prospective Study Design", "isCorrect": false },
                { "id": "opt3", "text": "Experimental Study Design", "isCorrect": false },
                { "id": "opt4", "text": "Cross-sectional Study Design", "isCorrect": false }
            ],
            "explanation": "Retrospective studies look back to the past (e.g., asking about history) to link with the present outcome."
        },
        {
            "id": "q4-survey",
            "type": "true-false",
            "question": "Survey research designs typically manipulate independent variables to determine cause-and-effect relationships.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "False. Surveys are systematic gathering of information (descriptive) and do NOT typically manipulate variables."
        },
        {
            "id": "q4-lit-review-purpose",
            "type": "multiple-select",
            "question": "What are the main purposes of a literature review? (Select all that apply)",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "To determine what has already been done on the problem", "isCorrect": true },
                { "id": "opt2", "text": "To identify gaps in knowledge", "isCorrect": true },
                { "id": "opt3", "text": "To identify useful strategies and measuring instruments", "isCorrect": true },
                { "id": "opt4", "text": "To copy exact paragraphs for the new report", "isCorrect": false }
            ],
            "explanation": "Literature review identifies existing knowledge, gaps, and methodologies, but copying without citation is plagiarism."
        },
        {
            "id": "q4-correlation",
            "type": "multiple-choice",
            "question": "In a correlation survey, if 'more exposure leads to less outcome' (e.g., more vaccination leads to less disease), this is a:",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Negative Correlation", "isCorrect": true },
                { "id": "opt2", "text": "Positive Correlation", "isCorrect": false },
                { "id": "opt3", "text": "No Correlation", "isCorrect": false },
                { "id": "opt4", "text": "Neutral Correlation", "isCorrect": false }
            ],
            "explanation": "A negative correlation means variables move in opposite directions (one increases, the other decreases)."
        },
        {
            "id": "q4-prospective",
            "type": "multiple-choice",
            "question": "A study that starts in the present and follows subjects into the future to observe outcomes is called:",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Prospective Study Design", "isCorrect": true },
                { "id": "opt2", "text": "Retrospective Study Design", "isCorrect": false },
                { "id": "opt3", "text": "Historical Research", "isCorrect": false },
                { "id": "opt4", "text": "Case Study", "isCorrect": false }
            ],
            "explanation": "Prospective studies follow subjects forward in time."
        }
    ]
});