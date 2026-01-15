registerQuiz("lesson-01-quiz", {
    "schemaVersion": "1.0",
    "quizId": "lesson-01-quiz",
    "metadata": {
        "title": "Introduction to Epidemiology",
        "description": "Test your knowledge on the definitions, history, scope, and basic concepts of epidemiology.",
        "topicId": "lesson-01",
        "difficulty": "beginner",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2025-12-26T10:00:00Z",
        "tags": ["intro", "definitions", "history"]
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
            "type": "fill-blank",
            "question": "Epidemiology is the study of the __1__ and __2__ of health-related states or events in specified populations.",
            "points": 2,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["distribution"], "caseSensitive": false },
                { "id": "2", "acceptedAnswers": ["determinants"], "caseSensitive": false }
            ],
            "explanation": "The core definition of epidemiology focuses on 'Distribution' (frequency/pattern) and 'Determinants' (causes/risk factors)."
        },
        {
            "id": "q2",
            "type": "matching",
            "question": "Match the disease frequency term with its definition:",
            "points": 4,
            "pairs": [
                { "id": "p1", "left": "Endemic", "right": "Constant presence within a geographic area" },
                { "id": "p2", "left": "Epidemic", "right": "Occurrence clearly in excess of normal expectancy" },
                { "id": "p3", "left": "Pandemic", "right": "Spread over multiple continents or worldwide" },
                { "id": "p4", "left": "Sporadic", "right": "Occurs rarely and without regularity" }
            ],
            "explanation": "Endemic = constant; Epidemic = outbreak/excess; Pandemic = global; Sporadic = irregular."
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "Which of the following best distinguishes a Clinician from an Epidemiologist?",
            "points": 1,
            "options": [
                { "id": "a", "text": "The Clinician uses expensive equipment while the Epidemiologist uses cheap methods.", "isCorrect": false },
                { "id": "b", "text": "The Clinician focuses on the individual patient, while the Epidemiologist focuses on the population.", "isCorrect": true },
                { "id": "c", "text": "The Clinician is concerned with prevention, while the Epidemiologist is concerned with treatment.", "isCorrect": false },
                { "id": "d", "text": "There is no difference.", "isCorrect": false }
            ],
            "explanation": "Clinical medicine focuses on the individual's health, diagnosis, and treatment. Epidemiology focuses on the collective health of the community/population."
        },
        {
            "id": "q4",
            "type": "multiple-choice",
            "question": "What is a 'Carrier' in epidemiological terms?",
            "points": 1,
            "options": [
                { "id": "a", "text": "A person who has recovered completely and cannot transmit the disease.", "isCorrect": false },
                { "id": "b", "text": "A person who is immune to the disease.", "isCorrect": false },
                { "id": "c", "text": "An apparently healthy person who harbors an agent and can transmit it.", "isCorrect": true },
                { "id": "d", "text": "A vector like a mosquito.", "isCorrect": false }
            ],
            "explanation": "A carrier harbors the infectious agent without showing clinical signs but is capable of transmitting it to others."
        },
        {
            "id": "q5",
            "type": "true-false",
            "question": "A 'fixed population' is one in which membership is permanent and defined by a life event (e.g., people born in 1990).",
            "points": 1,
            "correctAnswer": true,
            "explanation": "Fixed/closed populations have permanent membership defined by an event, unlike dynamic populations where members move in and out."
        },
        {
            "id": "q6",
            "type": "multiple-select",
            "question": "Epidemiology is concerned with efforts to: (Select all that apply)",
            "points": 2,
            "options": [
                { "id": "a", "text": "Describe (enumerate/count)", "isCorrect": true },
                { "id": "b", "text": "Explain (etiology)", "isCorrect": true },
                { "id": "c", "text": "Predict (risks)", "isCorrect": true },
                { "id": "d", "text": "Control (prevent/eradicate)", "isCorrect": true }
            ],
            "explanation": "Epidemiology covers all four aspects: describing health status, explaining causes, predicting occurrences, and controlling health problems."
        },
        {
            "id": "q7",
            "type": "short-answer",
            "question": "What does the term 'Aetiology' refer to?",
            "points": 2,
            "keywords": ["cause", "causes", "origin", "source"],
            "minKeywords": 1,
            "modelAnswer": "Aetiology refers to the cause or causes of a disease.",
            "maxLength": 100
        },
        {
            "id": "q8",
            "type": "multiple-choice",
            "question": "Which term describes the time interval between exposure to an infectious agent and the appearance of the first signs or symptoms?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Latent period", "isCorrect": false },
                { "id": "b", "text": "Communicable period", "isCorrect": false },
                { "id": "c", "text": "Incubation period", "isCorrect": true },
                { "id": "d", "text": "Generation time", "isCorrect": false }
            ],
            "explanation": "The incubation period is the time from infection to clinical onset of the disease."
        },
        {
            "id": "q9",
            "type": "multiple-choice",
            "question": "Which of the following is NOT a source of epidemiological data?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Census", "isCorrect": false },
                { "id": "b", "text": "Personal Diaries", "isCorrect": true },
                { "id": "c", "text": "Vital Statistics Registration", "isCorrect": false },
                { "id": "d", "text": "Hospital Records", "isCorrect": false }
            ],
            "explanation": "Census, Vital Statistics, and Hospital Records are standard sources. Personal diaries are generally qualitative and not a standard source for population epidemiology."
        },
        {
            "id": "q10",
            "type": "true-false",
            "question": "Hyper-endemic refers to a disease that affects a small proportion of the population at risk.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "False. Hyper-endemic refers to a disease constantly present at a HIGH incidence/prevalence. Hypo-endemic affects a small proportion."
        }
    ]
});