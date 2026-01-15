registerQuiz("topic-02-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-02-quiz",
    "metadata": {
        "title": "Research Methods Quiz",
        "description": "Assess your understanding of the scientific method, variables, and research designs.",
        "topicId": "topic-02",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2026-01-10T12:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "true-false",
            "question": "A hypothesis is a proven fact stating the relationship between variables.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "A hypothesis is a tentative prediction or assumption that must be *tested* to determine its accuracy."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "Which variable does the experimenter manipulate?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Dependent Variable", "isCorrect": false },
                { "id": "b", "text": "Independent Variable", "isCorrect": true },
                { "id": "c", "text": "Confounding Variable", "isCorrect": false },
                { "id": "d", "text": "Control Variable", "isCorrect": false }
            ],
            "explanation": "The Independent Variable (IV) is manipulated to see if it causes a change in the Dependent Variable."
        },
        {
            "id": "q3",
            "type": "matching",
            "question": "Match the research method to its description:",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Experimental Research", "right": "Establishes cause and effect relationships" },
                { "id": "p2", "left": "Naturalistic Observation", "right": "Recording behavior in real-life settings without interference" },
                { "id": "p3", "left": "Case Study", "right": "In-depth study of a single individual or group" },
                { "id": "p4", "left": "Correlational Study", "right": "Determines relationships between variables but not causation" }
            ]
        },
        {
            "id": "q4",
            "type": "multiple-choice",
            "question": "What is the primary disadvantage of the Survey method?",
            "points": 10,
            "options": [
                { "id": "a", "text": "It is expensive", "isCorrect": false },
                { "id": "b", "text": "It takes too long", "isCorrect": false },
                { "id": "c", "text": "Self-report data can be inaccurate or deceptive", "isCorrect": true },
                { "id": "d", "text": "It cannot collect data on attitudes", "isCorrect": false }
            ],
            "explanation": "Surveys rely on people telling the truth, which they may not always do (intentional deception or poor memory)."
        },
        {
            "id": "q5",
            "type": "fill-blank",
            "question": "A __1__ hypothesis states that there is no difference or relationship between variables, while an __2__ hypothesis states that there is a significant difference.",
            "points": 15,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["null", "Null"], "caseSensitive": false },
                { "id": "2", "acceptedAnswers": ["alternative", "Alternative"], "caseSensitive": false }
            ]
        },
        {
            "id": "q6",
            "type": "multiple-choice",
            "question": "In an experiment studying the effect of TV violence on aggression, 'TV violence' is the:",
            "points": 10,
            "options": [
                { "id": "a", "text": "Dependent Variable", "isCorrect": false },
                { "id": "b", "text": "Independent Variable", "isCorrect": true },
                { "id": "c", "text": "Control Group", "isCorrect": false },
                { "id": "d", "text": "Placebo", "isCorrect": false }
            ],
            "explanation": "TV violence is the condition being manipulated/introduced by the researcher, making it the IV."
        },
        {
            "id": "q7",
            "type": "multiple-choice",
            "question": "What is 'Observer Bias'?",
            "points": 10,
            "options": [
                { "id": "a", "text": "When subjects change behavior because they are watched", "isCorrect": false },
                { "id": "b", "text": "The researcher's tendency to interpret data to fit expectations", "isCorrect": true },
                { "id": "c", "text": "Random assignment failure", "isCorrect": false },
                { "id": "d", "text": "Using a non-representative sample", "isCorrect": false }
            ]
        },
        {
            "id": "q8",
            "type": "ordering",
            "question": "Order the steps of scientific investigation:",
            "points": 10,
            "items": [
                { "id": "i1", "text": "Formulate Hypothesis", "correctPosition": 2 },
                { "id": "i2", "text": "Collect Data", "correctPosition": 4 },
                { "id": "i3", "text": "Analyze Data", "correctPosition": 5 },
                { "id": "i4", "text": "Select Research Method", "correctPosition": 3 },
                { "id": "i5", "text": "Conceptualize Problem", "correctPosition": 1 }
            ]
        }
    ]
});