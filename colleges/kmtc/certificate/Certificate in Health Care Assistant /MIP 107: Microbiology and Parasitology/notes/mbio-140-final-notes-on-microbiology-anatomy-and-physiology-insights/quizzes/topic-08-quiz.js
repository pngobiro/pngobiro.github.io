window.registerQuiz('topic-08-quiz', {
    "schemaVersion": "1.1",
    "quizId": "topic-08-quiz",
    "metadata": {
        "title": "Microbial Genetics Quiz",
        "description": "Test your knowledge on DNA, replication, and mutations.",
        "difficulty": "intermediate",
        "estimatedTime": 10,
        "passingScore": 70
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate",
        "allowRetry": true
    },
    "questions": [
        {
            "id": "q1",
            "type": "matching",
            "question": "Match the term with definition:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "Genome", "right": "All genetic material" },
                { "id": "p2", "left": "Genotype", "right": "Genes of an organism" },
                { "id": "p3", "left": "Phenotype", "right": "Expression of genes" },
                { "id": "p4", "left": "Genomics", "right": "Study of genomes" }
            ]
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "Adenine pairs with:",
            "points": 10,
            "options": [
                { "id": "a", "text": "Cytosine", "isCorrect": false },
                { "id": "b", "text": "Guanine", "isCorrect": false },
                { "id": "c", "text": "Thymine", "isCorrect": true },
                { "id": "d", "text": "Uracil", "isCorrect": false }
            ],
            "explanation": "In DNA, A pairs with T."
        },
        {
            "id": "q3",
            "type": "true-false",
            "question": "DNA replication proceeds in the 3' to 5' direction.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "It proceeds 5' to 3'."
        },
        {
            "id": "q4",
            "type": "ordering",
            "question": "Central Dogma order:",
            "points": 10,
            "items": [
                { "id": "1", "text": "DNA", "correctPosition": 1 },
                { "id": "2", "text": "Transcription", "correctPosition": 2 },
                { "id": "3", "text": "mRNA", "correctPosition": 3 },
                { "id": "4", "text": "Translation", "correctPosition": 4 },
                { "id": "5", "text": "Protein", "correctPosition": 5 }
            ]
        },
        {
            "id": "q5",
            "type": "fill-blank",
            "question": "Translation starts at codon __1__ and ends at a __2__ codon.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["AUG"], "caseSensitive": false },
                { "id": "2", "acceptedAnswers": ["stop"], "caseSensitive": false }
            ],
            "explanation": "AUG is start; UAA, UAG, UGA are stop."
        },
        {
            "id": "q6",
            "type": "matching",
            "question": "Match mutation types:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "Missense", "right": "Different amino acid" },
                { "id": "p2", "left": "Nonsense", "right": "Stop codon" },
                { "id": "p3", "left": "Frameshift", "right": "Insertion/Deletion" }
            ]
        },
        {
            "id": "q7",
            "type": "multiple-choice",
            "question": "UV radiation causes:",
            "points": 10,
            "options": [
                { "id": "a", "text": "Backbone breaks", "isCorrect": false },
                { "id": "b", "text": "Thymine dimers", "isCorrect": true },
                { "id": "c", "text": "Base substitution", "isCorrect": false },
                { "id": "d", "text": "Insertions", "isCorrect": false }
            ],
            "explanation": "UV causes thymine dimers."
        }
    ]
});