registerQuiz("lesson-07-quiz", {
    "schemaVersion": "1.0",
    "quizId": "lesson-07-quiz",
    "metadata": {
        "title": "Disease Screening",
        "description": "Assess your understanding of screening tests, validity, predictive values, and bias.",
        "topicId": "lesson-07",
        "difficulty": "advanced",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2025-12-26T10:00:00Z",
        "tags": ["screening", "validity", "bias"]
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "What is the definition of 'Sensitivity' in a screening test?",
            "points": 1,
            "options": [
                { "id": "a", "text": "The ability to correctly identify those who do NOT have the disease.", "isCorrect": false },
                { "id": "b", "text": "The ability to correctly identify those who HAVE the disease.", "isCorrect": true },
                { "id": "c", "text": "The probability that a positive test means the person has the disease.", "isCorrect": false },
                { "id": "d", "text": "The consistency of the test results.", "isCorrect": false }
            ],
            "explanation": "Sensitivity = True Positives / (True Positives + False Negatives). It finds the sick people."
        },
        {
            "id": "q2",
            "type": "fill-blank",
            "question": "The formula for Specificity is: True Negatives / (True Negatives + __1__).",
            "points": 2,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["False Positives", "false positives", "FP"], "caseSensitive": false }
            ],
            "explanation": "Specificity = TN / (TN + FP). It measures the ability to identify the well people."
        },
        {
            "id": "q3",
            "type": "matching",
            "question": "Match the screening bias with its description:",
            "points": 3,
            "pairs": [
                { "id": "p1", "left": "Lead Time Bias", "right": "Survival seems longer because disease is found earlier, not death delayed" },
                { "id": "p2", "left": "Length Bias", "right": "Screening picks up slower-progressing (better prognosis) cases" },
                { "id": "p3", "left": "Volunteer Bias", "right": "Healthy people are more likely to get screened" }
            ],
            "explanation": "Lead Time = earlier detection illusion; Length = slow progression selection; Volunteer = healthy screenee effect."
        },
        {
            "id": "q4",
            "type": "multiple-choice",
            "question": "Screening applied to the whole population (e.g., visual checks in schools) is called:",
            "points": 1,
            "options": [
                { "id": "a", "text": "Selective Screening", "isCorrect": false },
                { "id": "b", "text": "Mass Screening", "isCorrect": true },
                { "id": "c", "text": "Multiphasic Screening", "isCorrect": false },
                { "id": "d", "text": "Case Finding", "isCorrect": false }
            ],
            "explanation": "Mass screening targets the general population."
        },
        {
            "id": "q5",
            "type": "true-false",
            "question": "Screening establishes a definitive diagnosis.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "False. Screening identifies *potential* disease. A diagnostic test is required to confirm."
        },
        {
            "id": "q6",
            "type": "multiple-choice",
            "question": "Which value depends on the prevalence of the disease in the population?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Sensitivity", "isCorrect": false },
                { "id": "b", "text": "Specificity", "isCorrect": false },
                { "id": "c", "text": "Predictive Value", "isCorrect": true },
                { "id": "d", "text": "Reliability", "isCorrect": false }
            ],
            "explanation": "Predictive Values (PPV/NPV) change with prevalence. Sensitivity and Specificity are inherent to the test."
        },
        {
            "id": "q7",
            "type": "short-answer",
            "question": "What happens to Specificity if you increase the Sensitivity of a test (assuming the test isn't perfect)?",
            "points": 2,
            "keywords": ["decrease", "lower", "reduce", "down"],
            "minKeywords": 1,
            "modelAnswer": "Specificity usually decreases. There is a trade-off between sensitivity and specificity.",
            "maxLength": 100
        },
        {
            "id": "q8",
            "type": "multiple-choice",
            "question": "Case Finding (Opportunistic Screening) occurs when:",
            "points": 1,
            "options": [
                { "id": "a", "text": "A doctor tests a patient for a condition unrelated to their visit", "isCorrect": true },
                { "id": "b", "text": "A health team goes to a village to test everyone", "isCorrect": false },
                { "id": "c", "text": "A specific high-risk group is targeted", "isCorrect": false },
                { "id": "d", "text": "Multiple tests are run at once", "isCorrect": false }
            ],
            "explanation": "Case finding happens in a clinical setting during a consultation for another reason."
        },
        {
            "id": "q9",
            "type": "true-false",
            "question": "A good screening test should be expensive and invasive to ensure accuracy.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "False. Screening tests should be relatively inexpensive, safe, and acceptable to the population."
        },
        {
            "id": "q10",
            "type": "multiple-choice",
            "question": "The Positive Predictive Value (PPV) is:",
            "points": 1,
            "options": [
                { "id": "a", "text": "The proportion of people with the disease who test positive", "isCorrect": false },
                { "id": "b", "text": "The proportion of people who test positive who actually have the disease", "isCorrect": true },
                { "id": "c", "text": "The proportion of people without the disease who test negative", "isCorrect": false },
                { "id": "d", "text": "The consistency of the test", "isCorrect": false }
            ],
            "explanation": "PPV answers: 'If I test positive, how likely is it that I actually have the disease?'"
        }
    ]
});