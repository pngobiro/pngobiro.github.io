registerQuiz("topic-03-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-03-quiz",
    "metadata": {
        "title": "Vital Statistics & Epidemiology Quiz",
        "description": "Assess calculations of vital rates and understanding of epidemiological concepts.",
        "topicId": "topic-03-statistics-epidemiology",
        "difficulty": "advanced",
        "estimatedTime": 20,
        "passingScore": 70,
        "createdAt": "2025-01-13T12:00:00Z",
        "tags": ["statistics", "epidemiology", "calculations"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "q1",
            "type": "image-based",
            "question": "Identify the component of the Epidemiological Triad labeled 'A' (the harmful factor that causes health problems):",
            "points": 15,
            "imageUrl": "../assets/images/image-20260113-df266c9c.jpeg",
            "imageAlt": "Diagram of the Epidemiological Triad showing Agent, Host, and Environment",
            "hotspots": [
                { "id": "h1", "x": 50, "y": 20, "radius": 15, "label": "Agent", "isCorrect": true },
                { "id": "h2", "x": 20, "y": 80, "radius": 15, "label": "Host", "isCorrect": false },
                { "id": "h3", "x": 80, "y": 80, "radius": 15, "label": "Environment", "isCorrect": false }
            ],
            "hint": "It is the 'what' of the triangle - the cause.",
            "explanation": "The Agent is the harmful aetiological factor (physical, biological, chemical, etc.) that causes the disease."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "If a population of 10,000 people had 200 live births in one year, what is the Crude Birth Rate (CBR)?",
            "points": 15,
            "options": [
                { "id": "a", "text": "2 per 1000", "isCorrect": false },
                { "id": "b", "text": "20 per 1000", "isCorrect": true },
                { "id": "c", "text": "200 per 1000", "isCorrect": false },
                { "id": "d", "text": "0.2 per 1000", "isCorrect": false }
            ],
            "explanation": "CBR = (Total births / Total population) * 1000. (200 / 10,000) * 1000 = 20."
        },
        {
            "id": "q3",
            "type": "matching",
            "question": "Match the level of prevention to its activity:",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Primary Prevention", "right": "Immunisation and Health Education" },
                { "id": "p2", "left": "Secondary Prevention", "right": "Screening and Early Diagnosis" },
                { "id": "p3", "left": "Tertiary Prevention", "right": "Rehabilitation and Disability Limitation" }
            ],
            "explanation": "Primary = Prevention before occurrence. Secondary = Early detection. Tertiary = Treatment/Rehab after occurrence."
        },
        {
            "id": "q4",
            "type": "fill-blank",
            "question": "__b1__ measures new cases during a period of time, while __b2__ measures all existing cases (new and old) at a particular time.",
            "points": 15,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["incidence", "Incidence"], "caseSensitive": false },
                { "id": "b2", "acceptedAnswers": ["prevalence", "Prevalence"], "caseSensitive": false }
            ],
            "explanation": "Incidence refers to NEW cases (risk). Prevalence refers to ALL existing cases (burden)."
        },
        {
            "id": "q5",
            "type": "multiple-choice",
            "question": "Which term describes a disease that occurs at a constant rate over a long duration in a given population (e.g., Malaria in parts of Kenya)?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Epidemic", "isCorrect": false },
                { "id": "b", "text": "Pandemic", "isCorrect": false },
                { "id": "c", "text": "Endemic", "isCorrect": true },
                { "id": "d", "text": "Sporadic", "isCorrect": false }
            ],
            "explanation": "Endemic diseases are present all the time or at a constant rate. Epidemic is an outbreak. Sporadic is occasional."
        }
    ]
});