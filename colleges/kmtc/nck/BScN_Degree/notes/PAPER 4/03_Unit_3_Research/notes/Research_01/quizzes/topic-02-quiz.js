registerQuiz("topic-02-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-02-quiz",
    "metadata": {
        "title": "Topic 2: Types of Research",
        "description": "Test your knowledge on qualitative, quantitative, and specific research designs.",
        "topicId": "topic-02",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 75,
        "createdAt": "2026-01-17T00:00:00Z",
        "updatedAt": "2026-01-17T00:00:00Z",
        "tags": ["qualitative", "quantitative", "methodology"]
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
            "id": "q2-qual-vs-quant",
            "type": "matching",
            "question": "Classify the following characteristics as belonging to Qualitative or Quantitative research.",
            "points": 1,
            "pairs": [
                { "id": "p1", "left": "Uses structured procedures and formal instruments", "right": "Quantitative" },
                { "id": "p2", "left": "Assumes subjectivity is essential for understanding", "right": "Qualitative" },
                { "id": "p3", "left": "Analyses numeric information through statistics", "right": "Quantitative" },
                { "id": "p4", "left": "Focuses on understanding the phenomenon in its entirety", "right": "Qualitative" }
            ],
            "explanation": "Quantitative research is structured, objective, and numeric. Qualitative research is holistic, subjective, and narrative."
        },
        {
            "id": "q2-rra-tools",
            "type": "multiple-choice",
            "question": "Which Rapid Rural Appraisal (RRA) tool uses circles to indicate relationships and the importance of institutions to the respondent?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Venn Diagrams", "isCorrect": true },
                { "id": "opt2", "text": "Mapping", "isCorrect": false },
                { "id": "opt3", "text": "Seasonal Calendars", "isCorrect": false },
                { "id": "opt4", "text": "Daily Schedules", "isCorrect": false }
            ],
            "explanation": "Venn Diagrams involve drawing circles of varying sizes to show the importance and relationship of institutions."
        },
        {
            "id": "q2-experimental",
            "type": "multiple-select",
            "question": "What are the three major characteristics of a true experimental research design?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Control", "isCorrect": true },
                { "id": "opt2", "text": "Manipulation", "isCorrect": true },
                { "id": "opt3", "text": "Randomisation", "isCorrect": true },
                { "id": "opt4", "text": "Subjectivity", "isCorrect": false },
                { "id": "opt5", "text": "Narration", "isCorrect": false }
            ],
            "explanation": "True experimental research is defined by Control, Manipulation (of variables), and Randomisation."
        },
        {
            "id": "q2-time-dimension",
            "type": "multiple-choice",
            "question": "A study that follows a group of individuals (cohort) over a long duration of time is known as a:",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Longitudinal Study", "isCorrect": true },
                { "id": "opt2", "text": "Cross-sectional Study", "isCorrect": false },
                { "id": "opt3", "text": "Retrospective Study", "isCorrect": false },
                { "id": "opt4", "text": "Historical Study", "isCorrect": false }
            ],
            "explanation": "Longitudinal studies are conducted over a long duration, following subjects to observe outcomes."
        },
        {
            "id": "q2-case-study",
            "type": "true-false",
            "question": "A major advantage of case studies is that the results can be statistically validated and generalized to the whole population.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "False. Results from case studies cannot be statistically validated because no sampling strategy is involved, and they focus on specific depth rather than breadth."
        },
        {
            "id": "q2-descriptive",
            "type": "fill-blank",
            "question": "Descriptive research is the exploration and __b1__ of a phenomenon in real-life situations.",
            "points": 1,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["description"], "caseSensitive": false }
            ],
            "explanation": "Descriptive research involves exploration and description of phenomena as they naturally occur."
        },
        {
            "id": "q2-quasi",
            "type": "multiple-choice",
            "question": "Which design aims to examine causality but may lack complete control or randomisation?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Quasi-experimental Research", "isCorrect": true },
                { "id": "opt2", "text": "True Experimental Research", "isCorrect": false },
                { "id": "opt3", "text": "Descriptive Research", "isCorrect": false },
                { "id": "opt4", "text": "Historical Research", "isCorrect": false }
            ],
            "explanation": "Quasi-experimental designs examine causality in situations where complete control or randomization is not possible."
        },
        {
            "id": "q2-rra-mapping",
            "type": "multiple-choice",
            "question": "Which RRA tool involves respondents sketching the location of resources like health facilities and roads?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Mapping", "isCorrect": true },
                { "id": "opt2", "text": "Venn Diagrams", "isCorrect": false },
                { "id": "opt3", "text": "Daily Schedules", "isCorrect": false },
                { "id": "opt4", "text": "Seasonal Calendars", "isCorrect": false }
            ],
            "explanation": "Mapping involves drawing sketch maps to identify location and infrastructure."
        }
    ]
});