registerQuiz("topic-06-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-06-quiz",
    "metadata": {
        "title": "Mood Disorders & Suicide Quiz",
        "description": "Assess knowledge of Bipolar disorders, Depression, and Suicide risk assessment.",
        "topicId": "topic-06",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2026-01-21T12:00:00Z",
        "updatedAt": "2026-01-21T12:00:00Z",
        "tags": ["bipolar", "depression", "suicide"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "t6-q1",
            "type": "multiple-choice",
            "question": "Which Bipolar disorder is characterized by episodes of hypomania and severe depression?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Bipolar I", "isCorrect": false },
                { "id": "opt2", "text": "Bipolar II", "isCorrect": true },
                { "id": "opt3", "text": "Cyclothymia", "isCorrect": false },
                { "id": "opt4", "text": "Dysthymia", "isCorrect": false }
            ],
            "explanation": "Bipolar II involves hypomania and severe depression. Bipolar I involves severe mania."
        },
        {
            "id": "t6-q2",
            "type": "fill-blank",
            "question": "In the SAD PERSONS scale, the letter 'R' stands for __b1__.",
            "points": 1,
            "blanks": [
                {
                    "id": "b1",
                    "acceptedAnswers": ["Rational thinking loss", "Rational thinking loss"],
                    "caseSensitive": false
                }
            ],
            "explanation": "R stands for Rational thinking loss (e.g., psychosis)."
        },
        {
            "id": "t6-q3",
            "type": "multiple-choice",
            "question": "Which of the following is NOT a symptom of a Manic episode?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Flight of ideas", "isCorrect": false },
                { "id": "opt2", "text": "Decreased need for sleep", "isCorrect": false },
                { "id": "opt3", "text": "Grandiosity", "isCorrect": false },
                { "id": "opt4", "text": "Hypersomnia", "isCorrect": true }
            ],
            "explanation": "Hypersomnia (excessive sleeping) is a symptom of depression, not mania. Mania involves decreased need for sleep."
        },
        {
            "id": "t6-q4",
            "type": "multiple-choice",
            "question": "Which medication is specifically noted to decrease suicide attempts in bipolar patients?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Haloperidol", "isCorrect": false },
                { "id": "opt2", "text": "Lithium", "isCorrect": true },
                { "id": "opt3", "text": "Diazepam", "isCorrect": false },
                { "id": "opt4", "text": "Amitriptyline", "isCorrect": false }
            ],
            "explanation": "Lithium helps relieve mania and depression and specifically prevents episodes from recurring and decreases suicide attempts."
        },
        {
            "id": "t6-q5",
            "type": "ordering",
            "question": "Order the stages of mania from mildest to most severe:",
            "points": 4,
            "items": [
                { "id": "s1", "text": "Euphoria", "correctPosition": 1 },
                { "id": "s2", "text": "Elation", "correctPosition": 2 },
                { "id": "s3", "text": "Exaltation", "correctPosition": 3 },
                { "id": "s4", "text": "Ecstasy", "correctPosition": 4 }
            ],
            "explanation": "The progression is Euphoria -> Elation -> Exaltation -> Ecstasy."
        }
    ]
});