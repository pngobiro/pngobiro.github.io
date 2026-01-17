registerQuiz("topic-05-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-05-quiz",
    "metadata": {
        "title": "Topic 5: Sampling and Ethics",
        "description": "Assess your understanding of sampling strategies and ethical considerations in research.",
        "topicId": "topic-05",
        "difficulty": "advanced",
        "estimatedTime": 20,
        "passingScore": 70,
        "createdAt": "2026-01-17T00:00:00Z",
        "updatedAt": "2026-01-17T00:00:00Z",
        "tags": ["sampling", "ethics", "consent"]
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
            "id": "q5-sampling-types",
            "type": "matching",
            "question": "Match the sampling technique to its description.",
            "points": 1,
            "pairs": [
                { "id": "p1", "left": "Simple Random Sampling", "right": "Every unit has an equal chance of selection (e.g., lottery)" },
                { "id": "p2", "left": "Stratified Random Sampling", "right": "Population is divided into subgroups before random selection" },
                { "id": "p3", "left": "Cluster Sampling", "right": "Population is divided into natural groups/clusters which are then selected" },
                { "id": "p4", "left": "Snowball Sampling", "right": "Subjects recruit future subjects from their acquaintances" }
            ],
            "explanation": "Simple random is pure chance. Stratified ensures subgroup representation. Cluster uses natural groups. Snowball uses referrals."
        },
        {
            "id": "q5-prob-vs-nonprob",
            "type": "multiple-choice",
            "question": "Which of the following is a Non-Probability sampling method?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Purposive Sampling", "isCorrect": true },
                { "id": "opt2", "text": "Simple Random Sampling", "isCorrect": false },
                { "id": "opt3", "text": "Systematic Sampling", "isCorrect": false },
                { "id": "opt4", "text": "Cluster Sampling", "isCorrect": false }
            ],
            "explanation": "Purposive (Judgmental) sampling is a non-probability method where the researcher selects subjects based on judgment."
        },
        {
            "id": "q5-systematic-calc",
            "type": "short-answer",
            "question": "If you have a population of 2000 and need a sample of 200, what is the sampling interval (n)? (Enter the number only)",
            "points": 1,
            "keywords": ["10"],
            "minKeywords": 1,
            "modelAnswer": "10",
            "explanation": "Sampling interval = Population (2000) / Sample Size (200) = 10."
        },
        {
            "id": "q5-ethics-principles",
            "type": "multiple-choice",
            "question": "Which ethical principle relates to the right to self-determination and the protection of vulnerable groups?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Principle of Respect for Persons", "isCorrect": true },
                { "id": "opt2", "text": "Principle of Justice", "isCorrect": false },
                { "id": "opt3", "text": "Principle of Beneficence", "isCorrect": false },
                { "id": "opt4", "text": "Principle of Maleficence", "isCorrect": false }
            ],
            "explanation": "Respect for Persons involves autonomy (self-determination) and protection of those with diminished autonomy."
        },
        {
            "id": "q5-beneficence",
            "type": "fill-blank",
            "question": "The ethical principle of __b1__ states that one should do good and, above all, do no harm.",
            "points": 1,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["beneficence"], "caseSensitive": false }
            ],
            "explanation": "Beneficence is the obligation to secure the well-being of persons (do good, do no harm)."
        },
        {
            "id": "q5-sampling-bias",
            "type": "true-false",
            "question": "Sampling bias occurs when the researcher selects a sample that does not accurately represent the target population.",
            "points": 1,
            "correctAnswer": true,
            "explanation": "True. Sampling bias results in a sample that is not representative, potentially skewing findings."
        },
        {
            "id": "q5-justice",
            "type": "multiple-select",
            "question": "The Principle of Justice includes which of the following rights? (Select all that apply)",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Right to fair selection and treatment", "isCorrect": true },
                { "id": "opt2", "text": "Right to privacy", "isCorrect": true },
                { "id": "opt3", "text": "Right to anonymity and confidentiality", "isCorrect": true },
                { "id": "opt4", "text": "Right to be paid for participation", "isCorrect": false }
            ],
            "explanation": "Justice covers fairness, privacy, anonymity, and confidentiality. Payment is not an inherent right of justice."
        },
        {
            "id": "q5-informed-consent",
            "type": "multiple-choice",
            "question": "What is 'Informed Consent'?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Providing subjects with information about the study so they can make a voluntary choice to participate.", "isCorrect": true },
                { "id": "opt2", "text": "Forcing subjects to sign a legal document.", "isCorrect": false },
                { "id": "opt3", "text": "Getting permission from the government only.", "isCorrect": false },
                { "id": "opt4", "text": "Ensuring subjects memorize the research protocol.", "isCorrect": false }
            ],
            "explanation": "Informed consent involves understanding the info, free choice, and voluntary participation."
        },
        {
            "id": "q5-sampling-frame",
            "type": "multiple-choice",
            "question": "What is a 'Sampling Frame'?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "A comprehensive list of all sampling elements in the target population.", "isCorrect": true },
                { "id": "opt2", "text": "The physical boundary of the research area.", "isCorrect": false },
                { "id": "opt3", "text": "The calculated sample size.", "isCorrect": false },
                { "id": "opt4", "text": "A wooden frame used in field work.", "isCorrect": false }
            ],
            "explanation": "A sampling frame is the list (e.g., register, directory) from which the sample is drawn."
        },
        {
            "id": "q5-convenience",
            "type": "true-false",
            "question": "Convenience sampling allows the researcher to exercise strict control over bias.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "False. Convenience sampling is selecting whoever happens to be available, making it impossible to control bias."
        }
    ]
});