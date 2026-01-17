registerQuiz("topic-07-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-07-quiz",
    "metadata": {
        "title": "Social Institutions",
        "description": "Assess your knowledge of the family, education, religion, politics, and health care as social institutions.",
        "topicId": "topic-07",
        "difficulty": "intermediate",
        "estimatedTime": 6,
        "passingScore": 70,
        "createdAt": "2026-01-17T00:00:00Z",
        "updatedAt": "2026-01-17T00:00:00Z",
        "tags": ["institutions", "family", "religion", "politics"]
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
            "id": "q1-association-vs-institution",
            "type": "multiple-choice",
            "question": "A specific hospital with a name and location is an example of an ___, while 'Health Care' governing behavior is an ___.",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Institution; Association", "isCorrect": false },
                { "id": "opt2", "text": "Association; Institution", "isCorrect": true },
                { "id": "opt3", "text": "Organization; Group", "isCorrect": false },
                { "id": "opt4", "text": "Community; Society", "isCorrect": false }
            ],
            "explanation": "Associations are formal groups (specific hospital). Institutions are mechanisms of social order (Health Care system)."
        },
        {
            "id": "q2-family-functions",
            "type": "multiple-select",
            "question": "Which of the following are primary functions of the family according to Murdock? (Select all that apply)",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Sexual relationships", "isCorrect": true },
                { "id": "opt2", "text": "Economic cooperation", "isCorrect": true },
                { "id": "opt3", "text": "Reproduction", "isCorrect": true },
                { "id": "opt4", "text": "Socialisation (Education)", "isCorrect": true }
            ],
            "explanation": "Murdock identified sexual, economic, reproductive, and educational functions."
        },
        {
            "id": "q3-leadership-styles",
            "type": "matching",
            "question": "Match the political leadership style to its description.",
            "points": 3,
            "pairs": [
                { "id": "p1", "left": "Autocratic", "right": "Leader controls all power and assumes all responsibility" },
                { "id": "p2", "left": "Democratic", "right": "Leader involves employees in decision making" },
                { "id": "p3", "left": "Laissez-faire", "right": "Leader allows employees to make decisions (free-reign)" }
            ],
            "explanation": "Autocratic = Authoritarian. Democratic = Participative. Laissez-faire = Delegative."
        },
        {
            "id": "q4-religion-function",
            "type": "true-false",
            "question": "One function of religious institutions is to provide explanations for things inconceivable by the human mind (e.g., life after death), which helps reduce stress.",
            "points": 1,
            "correctAnswer": true,
            "explanation": "True. Religion provides meaning and reduces anxiety about the unknown."
        },
        {
            "id": "q5-health-facilities",
            "type": "multiple-choice",
            "question": "In Kenya, which facility serves as the national teaching and referral hospital?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Provincial General Hospital", "isCorrect": false },
                { "id": "opt2", "text": "District Hospital", "isCorrect": false },
                { "id": "opt3", "text": "Kenyatta National Hospital", "isCorrect": true },
                { "id": "opt4", "text": "Local Dispensary", "isCorrect": false }
            ],
            "explanation": "Kenyatta National Hospital is the largest national referral and teaching hospital."
        }
    ]
});