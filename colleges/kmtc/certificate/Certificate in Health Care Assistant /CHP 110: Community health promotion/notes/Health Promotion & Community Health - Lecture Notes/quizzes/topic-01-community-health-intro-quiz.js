registerQuiz("topic-01-community-health-intro-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-01-community-health-intro-quiz",
    "metadata": {
        "title": "Community Health Fundamentals",
        "description": "Test your knowledge of community health definitions, history, and core concepts.",
        "topicId": "topic-01-community-health-intro",
        "difficulty": "beginner",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2026-01-12T00:00:00Z",
        "tags": ["community-health", "history", "definitions"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate",
        "allowRetry": true,
        "showCorrectAnswers": true
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Which level of healthcare refers to interventions that focus on the individual or family, such as hand-washing and immunization?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Primary healthcare", "isCorrect": true },
                { "id": "b", "text": "Secondary healthcare", "isCorrect": false },
                { "id": "c", "text": "Tertiary healthcare", "isCorrect": false },
                { "id": "d", "text": "Quaternary healthcare", "isCorrect": false }
            ],
            "explanation": "Primary healthcare focuses on individual/family interventions. Secondary focuses on the environment, and Tertiary focuses on hospital settings."
        },
        {
            "id": "q2",
            "type": "fill-blank",
            "question": "The __1__ era of public health (1875-1900) was marked by the work of Robert Koch and the identification of specific microbes causing diseases.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["bacteriological", "Bacteriological"], "caseSensitive": false }
            ],
            "explanation": "The Bacteriological Era (1875-1900) saw the establishment of the germ theory and identification of specific disease-causing microbes."
        },
        {
            "id": "q3",
            "type": "matching",
            "question": "Match the factor affecting community health with its example:",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Physical Factor", "right": "Geography and Climate" },
                { "id": "p2", "left": "Social/Cultural Factor", "right": "Beliefs and Traditions" },
                { "id": "p3", "left": "Community Organization", "right": "Available Health Agencies" },
                { "id": "p4", "left": "Individual Behavior", "right": "Personal Hygiene Habits" }
            ]
        },
        {
            "id": "q4",
            "type": "multiple-select",
            "question": "Which of the following are considered the three basic tools of community health practice? (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Epidemiology", "isCorrect": true },
                { "id": "b", "text": "Pharmacology", "isCorrect": false },
                { "id": "c", "text": "Community Organizing", "isCorrect": true },
                { "id": "d", "text": "Health Education", "isCorrect": true }
            ],
            "explanation": "The three tools are Epidemiology (distribution of disease), Community Organizing (mobilizing resources), and Health Education (promoting health)."
        },
        {
            "id": "q5",
            "type": "true-false",
            "question": "Community health focuses on geographical areas, whereas population health can focus on groups of people with shared characteristics who may not be organized.",
            "points": 5,
            "correctAnswer": true,
            "explanation": "Population health is a broader term that includes unorganized groups (e.g., 'men over 50') regardless of geography."
        },
        {
            "id": "q6",
            "type": "ordering",
            "question": "Arrange these historical public health events in chronological order:",
            "points": 20,
            "items": [
                { "id": "1", "text": "Dr. Edward Jenner demonstrates smallpox vaccination", "correctPosition": 1 },
                { "id": "2", "text": "Lemuel Shattuck's Health Report (Modern Era begins)", "correctPosition": 2 },
                { "id": "3", "text": "John Snow removes Broad Street pump handle", "correctPosition": 3 },
                { "id": "4", "text": "Establishment of Medicare and Medicaid", "correctPosition": 4 },
                { "id": "5", "text": "Publication of 'Healthy People 2000'", "correctPosition": 5 }
            ]
        }
    ]
});