registerQuiz("topic-03-health-information-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-03-health-information-quiz",
    "metadata": {
        "title": "Health Information Systems",
        "description": "Test your knowledge of data sources, vital statistics, and disease surveillance.",
        "topicId": "topic-03-health-information",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2026-01-12T00:00:00Z"
    },
    "settings": {
        "shuffleQuestions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Which data source involves the total process of collecting demographic data from ALL persons in a country at a specified time?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Sample Registration System", "isCorrect": false },
                { "id": "b", "text": "Census", "isCorrect": true },
                { "id": "c", "text": "Vital Registration", "isCorrect": false },
                { "id": "d", "text": "Disease Notification", "isCorrect": false }
            ],
            "explanation": "A Census is a massive undertaking to contact every member of the population."
        },
        {
            "id": "q2",
            "type": "multiple-select",
            "question": "Select the reasons why a disease might be declared 'Notifiable': (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "It has high potential for rapid mortality", "isCorrect": true },
                { "id": "b", "text": "It is a common cold", "isCorrect": false },
                { "id": "c", "text": "It has potential to cause outbreaks", "isCorrect": true },
                { "id": "d", "text": "It carries significant risk of international spread", "isCorrect": true }
            ],
            "explanation": "Notifiable diseases are usually serious menaces to public health (e.g., Cholera, Plague, Polio)."
        },
        {
            "id": "q3",
            "type": "matching",
            "question": "Match the data source to its description:",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "SRS", "right": "Dual-record system covering a representative sample" },
                { "id": "p2", "left": "Hospital Record", "right": "Data collected during patient care interactions" },
                { "id": "p3", "left": "Record Linkage", "right": "Bringing together info for the same individual from different sources" },
                { "id": "p4", "left": "Epidemiological Surveillance", "right": "Monitoring incidence and patterns of specific diseases" }
            ]
        },
        {
            "id": "q4",
            "type": "fill-blank",
            "question": "A __1__ registry tracks records for people diagnosed with a specific disease who reside within a defined geographic region.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["population-based", "Population-based", "population based"], "caseSensitive": false }
            ],
            "explanation": "Population-based registries are essential for calculating incidence rates."
        },
        {
            "id": "q5",
            "type": "true-false",
            "question": "The primary purpose of collecting health information is always for secondary uses like research and planning.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "The PRIMARY purpose is usually to give health care to the individual. Research and planning are SECONDARY purposes."
        }
    ]
});