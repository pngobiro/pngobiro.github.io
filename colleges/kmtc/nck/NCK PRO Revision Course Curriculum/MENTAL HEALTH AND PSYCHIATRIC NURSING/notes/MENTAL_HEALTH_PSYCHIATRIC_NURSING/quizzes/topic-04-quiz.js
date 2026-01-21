registerQuiz("topic-04-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-04-quiz",
    "metadata": {
        "title": "Treatment Modalities Quiz",
        "description": "Test your knowledge on psychiatric pharmacology, ECT, and nursing roles.",
        "topicId": "topic-04",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2026-01-21T12:00:00Z",
        "updatedAt": "2026-01-21T12:00:00Z",
        "tags": ["pharmacology", "ect", "nursing-roles"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "t4-q1",
            "type": "multiple-choice",
            "question": "Which of the following is an absolute contraindication for Electroconvulsive Therapy (ECT)?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Pregnancy", "isCorrect": false },
                { "id": "opt2", "text": "Raised Intracranial Pressure", "isCorrect": true },
                { "id": "opt3", "text": "Myocardial Infarction", "isCorrect": false },
                { "id": "opt4", "text": "Severe Osteoporosis", "isCorrect": false }
            ],
            "explanation": "Raised ICP is the only absolute contraindication due to risk of brain stem herniation. The others are relative contraindications."
        },
        {
            "id": "t4-q2",
            "type": "fill-blank",
            "question": "The therapeutic serum level for Lithium should be approximately __b1__ mEq/L.",
            "points": 1,
            "blanks": [
                {
                    "id": "b1",
                    "acceptedAnswers": ["1.0", "1", "1.0 mEq/L"],
                    "caseSensitive": false
                }
            ],
            "explanation": "The therapeutic level is about 1.0 mEq/L. Levels < 0.5 are ineffective, and > 1.5 are toxic."
        },
        {
            "id": "t4-q3",
            "type": "multiple-select",
            "question": "Which of the following are Extra-Pyramidal Side Effects (EPS) of antipsychotic drugs? (Select all that apply)",
            "points": 2,
            "options": [
                { "id": "opt1", "text": "Oculogyric crisis", "isCorrect": true },
                { "id": "opt2", "text": "Hypertension", "isCorrect": false },
                { "id": "opt3", "text": "Torticollis", "isCorrect": true },
                { "id": "opt4", "text": "Akathisia", "isCorrect": true }
            ],
            "explanation": "Oculogyric crisis, Torticollis, and Akathisia are EPS. Hypertension is not a typical EPS (though hypotension is a side effect)."
        },
        {
            "id": "t4-q4",
            "type": "multiple-choice",
            "question": "What is the primary dietary restriction for a patient taking MAOIs (Monoamine Oxidase Inhibitors)?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Avoid green leafy vegetables", "isCorrect": false },
                { "id": "opt2", "text": "Avoid foods containing Tyramine", "isCorrect": true },
                { "id": "opt3", "text": "Avoid high sodium intake", "isCorrect": false },
                { "id": "opt4", "text": "Avoid high sugar intake", "isCorrect": false }
            ],
            "explanation": "MAOIs prevent breakdown of tyramine. Eating tyramine-rich foods (cheese, wine) causes a hypertensive crisis."
        },
        {
            "id": "t4-q5",
            "type": "multiple-choice",
            "question": "Which role of the psychiatric nurse involves creating a therapeutic environment?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Ward Manager", "isCorrect": true },
                { "id": "opt2", "text": "Counselor", "isCorrect": false },
                { "id": "opt3", "text": "Technician", "isCorrect": false },
                { "id": "opt4", "text": "Parent Surrogate", "isCorrect": false }
            ],
            "explanation": "The Ward Manager role involves creating a therapeutic environment."
        }
    ]
});