registerQuiz("topic-04-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-04-quiz",
    "metadata": {
        "title": "Crisis Intervention & Care Navigation",
        "description": "Test your ability to identify crises and apply intervention skills.",
        "topicId": "topic-04",
        "difficulty": "advanced",
        "estimatedTime": 5,
        "passingScore": 80,
        "createdAt": "2026-01-09T12:00:00Z"
    },
    "settings": {
        "shuffleQuestions": true,
        "showFeedback": "immediate",
        "allowRetry": true
    },
    "questions": [
        {
            "id": "q1",
            "type": "ordering",
            "question": "Order the steps for responding to suicidal ideation:",
            "points": 10,
            "items": [
                { "id": "1", "text": "Take the threat seriously", "correctPosition": 1 },
                { "id": "2", "text": "Ask direct questions (e.g., Do you have a plan?)", "correctPosition": 2 },
                { "id": "3", "text": "Ensure safety (remove harmful objects)", "correctPosition": 3 },
                { "id": "4", "text": "Seek professional help immediately", "correctPosition": 4 }
            ],
            "explanation": "Safety and assessment must come before seeking long-term help, but immediate professional help is the goal."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "What is the priority action in a suspected drug overdose?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Give the person coffee.", "isCorrect": false },
                { "id": "b", "text": "Call emergency services immediately.", "isCorrect": true },
                { "id": "c", "text": "Let them 'sleep it off'.", "isCorrect": false },
                { "id": "d", "text": "Ask them why they took the drugs.", "isCorrect": false }
            ],
            "explanation": "Overdose is a medical emergency requiring immediate professional intervention."
        },
        {
            "id": "q3",
            "type": "multiple-select",
            "question": "Select the key techniques of 'Active Listening':",
            "points": 10,
            "options": [
                { "id": "a", "text": "Maintaining eye contact", "isCorrect": true },
                { "id": "b", "text": "Interrupting to correct the speaker", "isCorrect": false },
                { "id": "c", "text": "Reflecting feelings back", "isCorrect": true },
                { "id": "d", "text": "Using open-ended questions", "isCorrect": true }
            ],
            "explanation": "Active listening focuses on understanding the speaker without judgment or interruption."
        },
        {
            "id": "q4",
            "type": "fill-blank",
            "question": "__b1__ refers to strategies aimed at calming an agitated individual and preventing a situation from becoming violent.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["De-escalation", "de-escalation", "Deescalation"], "caseSensitive": false }
            ],
            "explanation": "De-escalation involves calm tones, setting boundaries, and validating feelings to lower intensity."
        },
        {
            "id": "q5",
            "type": "true-false",
            "question": "When navigating care, 'Inpatient Services' refers to care where the patient is NOT admitted to the hospital.",
            "points": 10,
            "correctAnswer": false,
            "explanation": "Inpatient means admitted (residential); Outpatient means care without admission."
        }
    ]
});