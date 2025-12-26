registerQuiz("lesson-03-quiz", {
    "schemaVersion": "1.0",
    "quizId": "lesson-03-quiz",
    "metadata": {
        "title": "Measurement of Disease Occurrence",
        "description": "Test your ability to calculate and interpret incidence, prevalence, mortality rates, and risk.",
        "topicId": "lesson-03",
        "difficulty": "advanced",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2025-12-26T10:00:00Z",
        "tags": ["measurement", "statistics", "rates"]
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Which of the following measures the number of NEW cases of a disease in a population over a period of time?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Prevalence", "isCorrect": false },
                { "id": "b", "text": "Incidence", "isCorrect": true },
                { "id": "c", "text": "Case Fatality Rate", "isCorrect": false },
                { "id": "d", "text": "Proportion", "isCorrect": false }
            ],
            "explanation": "Incidence counts NEW cases. Prevalence counts EXISTING (old + new) cases."
        },
        {
            "id": "q2",
            "type": "fill-blank",
            "question": "The formula for Incidence is: (Number of __1__ cases / Population at __2__) x 1000.",
            "points": 2,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["new", "New"], "caseSensitive": false },
                { "id": "2", "acceptedAnswers": ["risk", "Risk"], "caseSensitive": false }
            ],
            "explanation": "Incidence = New cases / Population at risk."
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "If the Relative Risk (RR) is less than 1, what does this imply?",
            "points": 1,
            "options": [
                { "id": "a", "text": "The exposure is a risk factor for the disease.", "isCorrect": false },
                { "id": "b", "text": "The exposure has no effect.", "isCorrect": false },
                { "id": "c", "text": "The exposure is protective (negative association).", "isCorrect": true },
                { "id": "d", "text": "The calculation is incorrect.", "isCorrect": false }
            ],
            "explanation": "RR < 1 means the risk in the exposed group is lower than in the non-exposed group, suggesting protection."
        },
        {
            "id": "q4",
            "type": "matching",
            "question": "Match the rate with its definition:",
            "points": 4,
            "pairs": [
                { "id": "p1", "left": "Infant Mortality Rate", "right": "Deaths of infants <1 year per 1000 live births" },
                { "id": "p2", "left": "Maternal Mortality Rate", "right": "Deaths due to childbearing per 1000 (or 100,000) live births" },
                { "id": "p3", "left": "Case Fatality Rate", "right": "Proportion of episodes of illness that result in death" },
                { "id": "p4", "left": "Crude Death Rate", "right": "Total deaths per total mid-year population" }
            ],
            "explanation": "IMR = infants; MMR = maternal/pregnancy; CFR = lethality of disease; CDR = general mortality."
        },
        {
            "id": "q5",
            "type": "short-answer",
            "question": "What is the difference between a Ratio and a Proportion?",
            "points": 3,
            "keywords": ["numerator", "denominator", "included", "unrelated", "related"],
            "minKeywords": 2,
            "modelAnswer": "In a proportion, the numerator is included in the denominator. In a ratio, the numerator and denominator are unrelated.",
            "maxLength": 200
        },
        {
            "id": "q6",
            "type": "multiple-choice",
            "question": "Chronic diseases typically have:",
            "points": 1,
            "options": [
                { "id": "a", "text": "Low prevalence and High incidence", "isCorrect": false },
                { "id": "b", "text": "High prevalence and Low incidence", "isCorrect": true },
                { "id": "c", "text": "Low prevalence and Low incidence", "isCorrect": false },
                { "id": "d", "text": "High prevalence and High incidence", "isCorrect": false }
            ],
            "explanation": "Chronic diseases last a long time, so cases accumulate (High Prevalence), even if new cases appear slowly (Low Incidence)."
        },
        {
            "id": "q7",
            "type": "fill-blank",
            "question": "Attributable __1__ is the amount of disease incidence that can be attributed to a specific exposure.",
            "points": 1,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["risk", "Risk"], "caseSensitive": false }
            ],
            "explanation": "Attributable Risk (AR) measures the excess risk due to the exposure."
        },
        {
            "id": "q8",
            "type": "true-false",
            "question": "The denominator for Maternal Mortality Rate includes the total population of women.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "False. The denominator is the number of LIVE BIRTHS in the same period."
        },
        {
            "id": "q9",
            "type": "multiple-choice",
            "question": "Which measure would be most useful for planning the number of hospital beds needed?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Incidence", "isCorrect": false },
                { "id": "b", "text": "Prevalence", "isCorrect": true },
                { "id": "c", "text": "Risk Ratio", "isCorrect": false },
                { "id": "d", "text": "Case Fatality", "isCorrect": false }
            ],
            "explanation": "Prevalence tells you the total burden of disease (how many people are currently sick) which dictates resource needs."
        },
        {
            "id": "q10",
            "type": "fill-blank",
            "question": "If Incidence in exposed = 10% and Incidence in non-exposed = 2%, the Relative Risk is __1__.",
            "points": 2,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["5", "5.0"], "caseSensitive": false }
            ],
            "explanation": "RR = 10 / 2 = 5."
        }
    ]
});