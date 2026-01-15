registerQuiz("topic-08-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-08-quiz",
    "metadata": {
        "title": "Emergencies & Therapies Quiz",
        "description": "Assess understanding of suicide risk, violence management, ECT, and pharmacotherapy.",
        "topicId": "topic-08",
        "difficulty": "advanced",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2025-12-28T12:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "ordering",
            "question": "Arrange the steps of managing a violent patient (Rapid Tranquilization Strategy) in progressive order:",
            "points": 20,
            "items": [
                { "id": "i1", "text": "De-escalation (talking down)", "correctPosition": 1 },
                { "id": "i2", "text": "Environmental manipulation", "correctPosition": 2 },
                { "id": "i3", "text": "Rapid tranquilization (chemical)", "correctPosition": 3 },
                { "id": "i4", "text": "Restraints and seclusion", "correctPosition": 4 }
            ],
            "explanation": "Interventions should proceed from least restrictive (verbal) to most restrictive (physical)."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "Which of the following foods must be avoided by a patient taking MAOIs (e.g., Phenelzine)?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Green leafy vegetables", "isCorrect": false },
                { "id": "b", "text": "Aged cheese and red wine", "isCorrect": true },
                { "id": "c", "text": "Milk and eggs", "isCorrect": false },
                { "id": "d", "text": "Fresh fish", "isCorrect": false }
            ],
            "explanation": "MAOIs interact with Tyramine-rich foods (aged cheese, wine, smoked meats) to cause hypertensive crisis."
        },
        {
            "id": "q3",
            "type": "multiple-select",
            "question": "Which factors are high-risk indicators on the SAD PERSONS suicide scale? (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Male Sex", "isCorrect": true },
                { "id": "b", "text": "Depression", "isCorrect": true },
                { "id": "c", "text": "Organized Plan", "isCorrect": true },
                { "id": "d", "text": "Married with children", "isCorrect": false },
                { "id": "e", "text": "Ethanol (Alcohol) abuse", "isCorrect": true }
            ],
            "partialCredit": true,
            "explanation": "SAD PERSONS: Sex, Age, Depression, Previous attempt, Ethanol, Rational loss, Social support loss, Organized plan, No spouse, Sickness."
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "The therapeutic serum level range for Lithium is 0.6 – 1.2 mmol/L.",
            "points": 10,
            "correctAnswer": true,
            "explanation": "This is the standard therapeutic window. Levels above 1.5 mmol/L are toxic."
        },
        {
            "id": "q5",
            "type": "matching",
            "question": "Match the drug to its class:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "Chlorpromazine", "right": "Antipsychotic" },
                { "id": "p2", "left": "Fluoxetine", "right": "SSRI (Antidepressant)" },
                { "id": "p3", "left": "Diazepam", "right": "Benzodiazepine (Anxiolytic)" },
                { "id": "p4", "left": "Amitriptyline", "right": "TCA (Antidepressant)" }
            ],
            "explanation": "Identifying drug classes is crucial for safe administration."
        }
    ]
});