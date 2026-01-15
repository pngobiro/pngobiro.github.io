registerQuiz("lesson-05-quiz", {
    "schemaVersion": "1.0",
    "quizId": "lesson-05-quiz",
    "metadata": {
        "title": "Epidemiological Study Designs",
        "description": "Assess your understanding of observational and experimental study designs.",
        "topicId": "lesson-05",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2025-12-26T10:00:00Z",
        "tags": ["study-designs", "cohort", "case-control", "rct"]
    },
    "questions": [
        {
            "id": "q1",
            "type": "matching",
            "question": "Match the study design with its description:",
            "points": 4,
            "pairs": [
                { "id": "p1", "left": "Cohort Study", "right": "Starts with exposure, follows forward to disease" },
                { "id": "p2", "left": "Case-Control Study", "right": "Starts with disease, looks backward for exposure" },
                { "id": "p3", "left": "Cross-Sectional Study", "right": "Snapshot of exposure and disease at one point in time" },
                { "id": "p4", "left": "RCT", "right": "Experimental design with randomization" }
            ],
            "explanation": "Cohort = Forward; Case-Control = Backward; Cross-Sectional = Snapshot; RCT = Experiment."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "Which study design is considered the 'gold standard' for inferring causality?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Case Series", "isCorrect": false },
                { "id": "b", "text": "Retrospective Cohort", "isCorrect": false },
                { "id": "c", "text": "Randomized Clinical Trial (RCT)", "isCorrect": true },
                { "id": "d", "text": "Correlational Study", "isCorrect": false }
            ],
            "explanation": "RCTs minimize bias and confounding through randomization, offering the strongest evidence for causality."
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "What is a major disadvantage of Case-Control studies?",
            "points": 1,
            "options": [
                { "id": "a", "text": "They are expensive and time-consuming.", "isCorrect": false },
                { "id": "b", "text": "They cannot study rare diseases.", "isCorrect": false },
                { "id": "c", "text": "They are subject to recall bias.", "isCorrect": true },
                { "id": "d", "text": "They require large sample sizes.", "isCorrect": false }
            ],
            "explanation": "Since participants must remember past exposures, recall bias is a significant issue in case-control studies."
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "Ecological fallacy occurs when associations observed at the aggregate level are assumed to hold true for individuals.",
            "points": 1,
            "correctAnswer": true,
            "explanation": "This is a key limitation of correlational (ecological) studies."
        },
        {
            "id": "q5",
            "type": "fill-blank",
            "question": "A __1__ study identifies a group of people based on exposure and follows them over time to see if they develop the outcome.",
            "points": 1,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["cohort", "Cohort"], "caseSensitive": false }
            ],
            "explanation": "Cohort studies proceed from exposure to outcome."
        },
        {
            "id": "q6",
            "type": "multiple-choice",
            "question": "Which design is best for rare diseases?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Cohort Study", "isCorrect": false },
                { "id": "b", "text": "Case-Control Study", "isCorrect": true },
                { "id": "c", "text": "Cross-Sectional Study", "isCorrect": false },
                { "id": "d", "text": "Clinical Trial", "isCorrect": false }
            ],
            "explanation": "Case-control studies select based on the outcome, so you can find enough cases of a rare disease without needing a massive cohort."
        },
        {
            "id": "q7",
            "type": "multiple-choice",
            "question": "A study that introduces an intervention to a whole community (e.g., water fluoridation) and compares it to a control community is called:",
            "points": 1,
            "options": [
                { "id": "a", "text": "Clinical Trial", "isCorrect": false },
                { "id": "b", "text": "Community Trial", "isCorrect": true },
                { "id": "c", "text": "Cross-Sectional Survey", "isCorrect": false },
                { "id": "d", "text": "Case Series", "isCorrect": false }
            ],
            "explanation": "Community trials apply interventions to groups/communities rather than individuals."
        },
        {
            "id": "q8",
            "type": "multiple-select",
            "question": "Which of the following are advantages of Cross-Sectional studies? (Select all that apply)",
            "points": 2,
            "options": [
                { "id": "a", "text": "Quick and inexpensive", "isCorrect": true },
                { "id": "b", "text": "Can estimate prevalence", "isCorrect": true },
                { "id": "c", "text": "Establishes temporal relationship (causality)", "isCorrect": false },
                { "id": "d", "text": "Good for rare conditions", "isCorrect": false }
            ],
            "explanation": "Cross-sectional studies are fast and give prevalence but cannot prove causality or study rare conditions effectively."
        },
        {
            "id": "q9",
            "type": "short-answer",
            "question": "What is the purpose of 'Randomization' in a clinical trial?",
            "points": 2,
            "keywords": ["bias", "chance", "equal", "confounding", "comparable"],
            "minKeywords": 1,
            "modelAnswer": "To remove bias and ensure groups are comparable (distribute confounders equally) by assigning subjects by chance.",
            "maxLength": 150
        },
        {
            "id": "q10",
            "type": "true-false",
            "question": "In a Retrospective Cohort study, the investigator goes back in time to identify exposure, but the study is initiated after the disease has already occurred.",
            "points": 1,
            "correctAnswer": true,
            "explanation": "The cohort is identified from past records, but the timeline of analysis moves forward from exposure to the outcome (which has already happened)."
        }
    ]
});