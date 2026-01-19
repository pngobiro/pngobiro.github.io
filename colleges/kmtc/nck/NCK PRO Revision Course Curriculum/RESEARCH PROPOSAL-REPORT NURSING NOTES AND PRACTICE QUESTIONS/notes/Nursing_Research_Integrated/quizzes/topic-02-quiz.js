registerQuiz("topic-02-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-02-quiz",
    "metadata": {
        "title": "Topic 02: Types of Research",
        "description": "Test your knowledge on Qualitative vs Quantitative methods, designs, and classifications.",
        "topicId": "topic-02",
        "difficulty": "intermediate",
        "estimatedTime": 20,
        "passingScore": 70,
        "createdAt": "2024-05-20T10:00:00Z",
        "updatedAt": "2024-05-20T10:00:00Z",
        "tags": ["qualitative", "quantitative", "research-design"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "t2-q1",
            "type": "multiple-choice",
            "question": "Which type of research is designed to produce findings that can be used to remediate or modify a given situation immediately?",
            "points": 1,
            "explanation": "Applied research is designed to produce findings for practical application to solve specific problems.",
            "options": [
                { "id": "opt1", "text": "Basic Research", "isCorrect": false },
                { "id": "opt2", "text": "Applied Research", "isCorrect": true },
                { "id": "opt3", "text": "Fundamental Research", "isCorrect": false },
                { "id": "opt4", "text": "Pure Research", "isCorrect": false }
            ]
        },
        {
            "id": "t2-q2",
            "type": "matching",
            "question": "Match the distinguishing feature to the correct research type.",
            "points": 2,
            "pairs": [
                { "id": "p1", "left": "Quantitative", "right": "Focuses on a relatively small number of concise concepts." },
                { "id": "p2", "left": "Qualitative", "right": "Attempts to understand the phenomenon in its entirety." },
                { "id": "p3", "left": "Quantitative", "right": "Analyses numeric information through statistical procedures." },
                { "id": "p4", "left": "Qualitative", "right": "Analyses narrative information in an organized, intuitive fashion." }
            ]
        },
        {
            "id": "t2-q3",
            "type": "true-false",
            "question": "A retrospective study design begins with a phenomenon in the present and examines its relationship to variables in the past.",
            "points": 1,
            "explanation": "Retrospective studies look backward in time (e.g., examining past exposures given a current disease).",
            "correctAnswer": true
        },
        {
            "id": "t2-q4",
            "type": "multiple-select",
            "question": "Which of the following are characteristics of a True Experimental Research Design? (Select all that apply)",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Manipulation", "isCorrect": true },
                { "id": "opt2", "text": "Control", "isCorrect": true },
                { "id": "opt3", "text": "Randomisation", "isCorrect": true },
                { "id": "opt4", "text": "Subjectivity", "isCorrect": false }
            ]
        },
        {
            "id": "t2-q5",
            "type": "short-answer",
            "question": "What is the specific name for a study that follows the same group of people over various periods of time?",
            "points": 2,
            "keywords": ["panel", "panel study"],
            "explanation": "A Panel Study investigates the same people, group, or organization over various periods of time.",
            "modelAnswer": "Panel study"
        }
    ]
});