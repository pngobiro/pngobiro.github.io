registerQuiz("topic-04-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-04-quiz",
    "metadata": {
        "title": "Topic 04: The Research Process",
        "description": "Test your understanding of the steps in research, formulating objectives, hypotheses, and variables.",
        "topicId": "topic-04",
        "difficulty": "intermediate",
        "estimatedTime": 20,
        "passingScore": 70,
        "createdAt": "2024-05-20T10:00:00Z",
        "updatedAt": "2024-05-20T10:00:00Z",
        "tags": ["methodology", "objectives", "variables"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "t4-q1",
            "type": "ordering",
            "question": "Arrange the first 5 steps of the research process in the correct order.",
            "points": 2,
            "items": [
                { "id": "s1", "text": "Identification of the research problem", "correctPosition": 1 },
                { "id": "s2", "text": "Formulation of research objectives, hypotheses and questions", "correctPosition": 2 },
                { "id": "s3", "text": "Rationale/Justification", "correctPosition": 3 },
                { "id": "s4", "text": "Literature Review", "correctPosition": 4 },
                { "id": "s5", "text": "Research Methodology", "correctPosition": 5 }
            ]
        },
        {
            "id": "t4-q2",
            "type": "fill-blank",
            "question": "In the acronym SMART for objectives, 'R' stands for __b1__.",
            "points": 1,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["Realistic"], "caseSensitive": false }
            ]
        },
        {
            "id": "t4-q3",
            "type": "multiple-choice",
            "question": "In the study 'The influence of alcohol on reaction time', what type of variable is 'Reaction Time'?",
            "points": 1,
            "explanation": "Reaction time is the outcome being measured, making it the Dependent Variable.",
            "options": [
                { "id": "opt1", "text": "Independent Variable", "isCorrect": false },
                { "id": "opt2", "text": "Dependent Variable", "isCorrect": true },
                { "id": "opt3", "text": "Extraneous Variable", "isCorrect": false },
                { "id": "opt4", "text": "Demographic Variable", "isCorrect": false }
            ]
        },
        {
            "id": "t4-q4",
            "type": "matching",
            "question": "Match the hypothesis type with its example.",
            "points": 2,
            "pairs": [
                { "id": "p1", "left": "Directional", "right": "Patients with more knowledge will have higher adherence." },
                { "id": "p2", "left": "Non-directional", "right": "There is a difference in adherence between Group A and Group B." },
                { "id": "p3", "left": "Null", "right": "There is no relationship between knowledge and adherence." }
            ]
        },
        {
            "id": "t4-q5",
            "type": "multiple-select",
            "question": "Which of the following verbs are considered BIASED and should be avoided in purpose statements? (Select all that apply)",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Prove", "isCorrect": true },
                { "id": "opt2", "text": "Show", "isCorrect": true },
                { "id": "opt3", "text": "Determine", "isCorrect": false },
                { "id": "opt4", "text": "Compare", "isCorrect": false }
            ]
        }
    ]
});