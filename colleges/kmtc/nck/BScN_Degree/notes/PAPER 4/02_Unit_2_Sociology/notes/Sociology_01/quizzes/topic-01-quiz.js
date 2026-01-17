registerQuiz("topic-01-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-01-quiz",
    "metadata": {
        "title": "Introduction to Sociology & Anthropology",
        "description": "Test your knowledge on the definitions, differences, and core concepts of sociology and anthropology.",
        "topicId": "topic-01",
        "difficulty": "beginner",
        "estimatedTime": 5,
        "passingScore": 70,
        "createdAt": "2026-01-17T00:00:00Z",
        "updatedAt": "2026-01-17T00:00:00Z",
        "tags": ["sociology", "anthropology", "definitions"]
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
            "id": "q1-definition-soc",
            "type": "multiple-choice",
            "question": "Which discipline is defined as the study of social life, social change, and the social causes and consequences of human behaviour?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Anthropology", "isCorrect": false },
                { "id": "opt2", "text": "Sociology", "isCorrect": true },
                { "id": "opt3", "text": "Psychology", "isCorrect": false },
                { "id": "opt4", "text": "Archaeology", "isCorrect": false }
            ],
            "explanation": "Sociology is the study of social life, change, and causes/consequences of human behaviour. Anthropology focuses on the classification and analysis of humans and their society."
        },
        {
            "id": "q2-anthropology-branches",
            "type": "matching",
            "question": "Match the branch of anthropology to its description.",
            "points": 3,
            "pairs": [
                { "id": "p1", "left": "Physical Anthropology", "right": "Focuses on human evolution and biology" },
                { "id": "p2", "left": "Ethnography", "right": "Descriptive study of living cultures" },
                { "id": "p3", "left": "Archaeology", "right": "Studies material remains of prehistoric cultures" }
            ],
            "explanation": "Physical anthropology deals with biology/evolution. Ethnography describes living cultures. Archaeology studies material remains."
        },
        {
            "id": "q3-culture-civilisation",
            "type": "true-false",
            "question": "Civilisation was originally identified with the city because the growth of cities raised humans from a 'primitive' subsistence state.",
            "points": 1,
            "correctAnswer": true,
            "explanation": "True. The word comes from 'civis' (citizen), contrasting with 'pagani' (country residents)."
        },
        {
            "id": "q4-concepts",
            "type": "fill-blank",
            "question": "A __b1__ is defined as an expected behaviour attached to a social status, while __b2__ refers to one's position in a society or social group.",
            "points": 2,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["role"], "caseSensitive": false },
                { "id": "b2", "acceptedAnswers": ["status"], "caseSensitive": false }
            ],
            "explanation": "Role is the expected behaviour; Status is the position held."
        },
        {
            "id": "q5-subculture",
            "type": "multiple-choice",
            "question": "What term describes a group within a society that has distinct beliefs, norms, and customs (e.g., different religious groups within a nation)?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Civilisation", "isCorrect": false },
                { "id": "opt2", "text": "Subculture", "isCorrect": true },
                { "id": "opt3", "text": "Institution", "isCorrect": false },
                { "id": "opt4", "text": "Role-set", "isCorrect": false }
            ],
            "explanation": "A subculture is a group with distinct beliefs/norms within a larger society."
        }
    ]
});