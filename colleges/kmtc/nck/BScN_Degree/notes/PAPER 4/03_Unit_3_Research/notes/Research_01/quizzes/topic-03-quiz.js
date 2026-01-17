registerQuiz("topic-03-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-03-quiz",
    "metadata": {
        "title": "Topic 3: Research Planning Phase",
        "description": "Assess your skills in formulating research topics, objectives, questions, and hypotheses.",
        "topicId": "topic-03",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 75,
        "createdAt": "2026-01-17T00:00:00Z",
        "updatedAt": "2026-01-17T00:00:00Z",
        "tags": ["objectives", "variables", "hypothesis"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate",
        "allowRetry": true,
        "showCorrectAnswers": true,
        "timeLimit": 0
    },
    "questions": [
        {
            "id": "q3-smart-order",
            "type": "ordering",
            "question": "Arrange the letters of the SMART acronym for research objectives in the correct order.",
            "points": 1,
            "items": [
                { "id": "i1", "text": "Specific", "correctPosition": 1 },
                { "id": "i2", "text": "Measurable", "correctPosition": 2 },
                { "id": "i3", "text": "Achievable", "correctPosition": 3 },
                { "id": "i4", "text": "Realistic", "correctPosition": 4 },
                { "id": "i5", "text": "Time bound", "correctPosition": 5 }
            ],
            "explanation": "Objectives should be Specific, Measurable, Achievable, Realistic, and Time bound."
        },
        {
            "id": "q3-variables-match",
            "type": "matching",
            "question": "Match the type of variable to its definition.",
            "points": 1,
            "pairs": [
                { "id": "p1", "left": "Independent Variable", "right": "The intervention or treatment that influences the outcome" },
                { "id": "p2", "left": "Dependent Variable", "right": "The outcome variable that changes in response" },
                { "id": "p3", "left": "Extraneous Variable", "right": "Uncontrolled variable that can bias findings" },
                { "id": "p4", "left": "Demographic Variable", "right": "Attribute like age or sex that cannot be manipulated" }
            ],
            "explanation": "Independent variables cause change; dependent variables are the effect; extraneous variables are unwanted influences."
        },
        {
            "id": "q3-finer",
            "type": "multiple-select",
            "question": "Which of the following does the acronym FINER stand for regarding research questions? (Select all that apply)",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Feasible", "isCorrect": true },
                { "id": "opt2", "text": "Interesting", "isCorrect": true },
                { "id": "opt3", "text": "Novel", "isCorrect": true },
                { "id": "opt4", "text": "Ethical", "isCorrect": true },
                { "id": "opt5", "text": "Expensive", "isCorrect": false }
            ],
            "explanation": "FINER stands for Feasible, Interesting, Novel, Ethical, and Relevant."
        },
        {
            "id": "q3-hypothesis-null",
            "type": "multiple-choice",
            "question": "Which type of hypothesis states that 'no difference exists between groups' or 'no correlation exists between variables'?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Null Hypothesis (H0)", "isCorrect": true },
                { "id": "opt2", "text": "Alternative Hypothesis (H1)", "isCorrect": false },
                { "id": "opt3", "text": "Directional Hypothesis", "isCorrect": false },
                { "id": "opt4", "text": "Research Hypothesis", "isCorrect": false }
            ],
            "explanation": "The Null Hypothesis (H0) is the statistical hypothesis stating there is no difference or relationship."
        },
        {
            "id": "q3-justification",
            "type": "multiple-choice",
            "question": "Which section of a study outlines the reasons for carrying out the study and addresses gaps in knowledge?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Rationale or Justification", "isCorrect": true },
                { "id": "opt2", "text": "Methodology", "isCorrect": false },
                { "id": "opt3", "text": "Data Analysis", "isCorrect": false },
                { "id": "opt4", "text": "Abstract", "isCorrect": false }
            ],
            "explanation": "The Rationale or Justification explains why the study is important, the gaps it fills, and its contribution to society."
        },
        {
            "id": "q3-directional",
            "type": "true-false",
            "question": "A directional hypothesis predicts an outcome in a specific direction (e.g., 'Group A will score higher than Group B').",
            "points": 1,
            "correctAnswer": true,
            "explanation": "True. A directional hypothesis specifies the expected direction of the relationship or difference."
        },
        {
            "id": "q3-identification",
            "type": "multiple-choice",
            "question": "Which of the following is NOT a recommended source for identifying a research topic?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Gossip and rumors in the workplace", "isCorrect": true },
                { "id": "opt2", "text": "Existing professional knowledge and experience", "isCorrect": false },
                { "id": "opt3", "text": "Socially significant issues", "isCorrect": false },
                { "id": "opt4", "text": "Scientific relevance and gaps in knowledge", "isCorrect": false }
            ],
            "explanation": "Research topics should be drawn from professional experience, social issues, or scientific relevance, not unsubstantiated gossip."
        },
        {
            "id": "q3-phases",
            "type": "fill-blank",
            "question": "According to Brink (1996), the research process has four phases: Conceptual, Empirical, Interpretive, and __b1__.",
            "points": 1,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["communication"], "caseSensitive": false }
            ],
            "explanation": "The four phases are Conceptual (planning), Empirical (doing), Interpretive (meaning), and Communication (reporting)."
        }
    ]
});