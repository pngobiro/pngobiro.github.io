registerQuiz("topic-03-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-03-quiz",
    "metadata": {
        "title": "Biological Basis Quiz",
        "description": "Test your knowledge on genetics, chromosomal abnormalities, and the nature-nurture interaction.",
        "topicId": "topic-03",
        "difficulty": "intermediate",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2026-01-10T12:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "fill-blank",
            "question": "A normal human cell contains __1__ chromosomes arranged in __2__ pairs.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["46"], "caseSensitive": false },
                { "id": "2", "acceptedAnswers": ["23"], "caseSensitive": false }
            ]
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "Which combination of sex chromosomes results in a male?",
            "points": 10,
            "options": [
                { "id": "a", "text": "XX", "isCorrect": false },
                { "id": "b", "text": "XY", "isCorrect": true },
                { "id": "c", "text": "XO", "isCorrect": false },
                { "id": "d", "text": "XXY", "isCorrect": false }
            ],
            "explanation": "The presence of the Y chromosome (from the father) determines maleness."
        },
        {
            "id": "q3",
            "type": "matching",
            "question": "Match the chromosomal abnormality with its description:",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Turner's Syndrome", "right": "Females with missing X (XO)" },
                { "id": "p2", "left": "Klinefelter's Syndrome", "right": "Males with extra X (XXY)" },
                { "id": "p3", "left": "Down Syndrome", "right": "Trisomy 21 (Autosomal)" },
                { "id": "p4", "left": "Supermale Syndrome", "right": "Males with extra Y (XYY)" }
            ]
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "Identical twins (monozygotic) share 100% of their genetic makeup.",
            "points": 10,
            "correctAnswer": true,
            "explanation": "They develop from a single fertilized egg that splits, creating identical genetic copies."
        },
        {
            "id": "q5",
            "type": "multiple-choice",
            "question": "What is the difference between Genotype and Phenotype?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Genotype is observable; Phenotype is genetic", "isCorrect": false },
                { "id": "b", "text": "They are the same thing", "isCorrect": false },
                { "id": "c", "text": "Genotype is the genetic heritage; Phenotype is the observable expression", "isCorrect": true },
                { "id": "d", "text": "Phenotype depends only on environment", "isCorrect": false }
            ],
            "explanation": "Genotype = genes (DNA). Phenotype = physical/psychological traits (e.g., blue eyes, IQ score)."
        },
        {
            "id": "q6",
            "type": "multiple-choice",
            "question": "Which of these is a characteristic of Down Syndrome?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Unusual tallness", "isCorrect": false },
                { "id": "b", "text": "Violent antisocial behavior", "isCorrect": false },
                { "id": "c", "text": "Webbed neck", "isCorrect": false },
                { "id": "d", "text": "Thick tongue and flattened facial features", "isCorrect": true }
            ]
        },
        {
            "id": "q7",
            "type": "multiple-select",
            "question": "Select all that are considered environmental influences (Nurture):",
            "points": 10,
            "options": [
                { "id": "a", "text": "Nutrition/Diet", "isCorrect": true },
                { "id": "b", "text": "Parenting style", "isCorrect": true },
                { "id": "c", "text": "DNA sequence", "isCorrect": false },
                { "id": "d", "text": "Schooling", "isCorrect": true }
            ],
            "partialCredit": true
        },
        {
            "id": "q8",
            "type": "multiple-choice",
            "question": "According to the Dominant-Recessive gene principle:",
            "points": 10,
            "options": [
                { "id": "a", "text": "Recessive genes always win", "isCorrect": false },
                { "id": "b", "text": "Traits are a blend of both genes", "isCorrect": false },
                { "id": "c", "text": "A dominant gene overrides the recessive gene", "isCorrect": true },
                { "id": "d", "text": "Genes do not affect traits", "isCorrect": false }
            ]
        }
    ]
});