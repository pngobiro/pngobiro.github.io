registerQuiz("topic-04-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-04-quiz",
    "metadata": {
        "title": "Mood & Psychotic Disorders Quiz",
        "description": "Assess knowledge of Depression, Bipolar, and Schizophrenia.",
        "topicId": "topic-04",
        "difficulty": "advanced",
        "estimatedTime": 15,
        "passingScore": 75,
        "createdAt": "2025-12-28T12:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-select",
            "question": "Which of the following are considered 'Negative Symptoms' of Schizophrenia? (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Hallucinations", "isCorrect": false },
                { "id": "b", "text": "Avolition (Apathy)", "isCorrect": true },
                { "id": "c", "text": "Anhedonia", "isCorrect": true },
                { "id": "d", "text": "Delusions", "isCorrect": false },
                { "id": "e", "text": "Alogia (Poverty of speech)", "isCorrect": true }
            ],
            "partialCredit": true,
            "explanation": "Negative symptoms represent a 'loss' of normal function (Avolition, Anhedonia, Alogia). Hallucinations and Delusions are Positive symptoms."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "The biochemical etiology of Schizophrenia is primarily associated with hyperactivity of which neurotransmitter?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Serotonin", "isCorrect": false },
                { "id": "b", "text": "Dopamine", "isCorrect": true },
                { "id": "c", "text": "GABA", "isCorrect": false },
                { "id": "d", "text": "Acetylcholine", "isCorrect": false }
            ],
            "explanation": "The dopamine hypothesis posits that schizophrenia is associated with excess dopamine activity in the mesolimbic pathways."
        },
        {
            "id": "q3",
            "type": "fill-blank",
            "question": "To diagnose Major Depressive Disorder, symptoms must be present for at least __b1__ weeks.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["2", "two"], "caseSensitive": false }
            ],
            "explanation": "DSM criteria require symptoms to persist for at least a 2-week period."
        },
        {
            "id": "q4",
            "type": "matching",
            "question": "Match the Schizophrenia type to its key feature:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "Paranoid", "right": "Delusions of persecution/grandeur" },
                { "id": "p2", "left": "Hebephrenic", "right": "Silly, childish behavior" },
                { "id": "p3", "left": "Catatonic", "right": "Marked motor disturbance (stupor/excitement)" },
                { "id": "p4", "left": "Residual", "right": "Absence of prominent positive symptoms" }
            ],
            "explanation": "These are the classic subtypes of schizophrenia (though DSM-5 has moved away from subtypes, they are relevant in this context)."
        },
        {
            "id": "q5",
            "type": "multiple-choice",
            "question": "Which drug is a mood stabilizer specifically indicated for acute mania and maintenance in Bipolar Disorder?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Fluoxetine", "isCorrect": false },
                { "id": "b", "text": "Lithium Carbonate", "isCorrect": true },
                { "id": "c", "text": "Haloperidol", "isCorrect": false },
                { "id": "d", "text": "Diazepam", "isCorrect": false }
            ],
            "explanation": "Lithium is the classic mood stabilizer. Fluoxetine is an antidepressant; Haloperidol is an antipsychotic; Diazepam is an anxiolytic."
        }
    ]
});