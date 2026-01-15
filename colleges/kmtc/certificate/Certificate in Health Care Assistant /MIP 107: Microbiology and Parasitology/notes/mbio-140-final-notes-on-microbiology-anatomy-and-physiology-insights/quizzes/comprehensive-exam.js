window.registerQuiz('comprehensive-exam', {
    "schemaVersion": "1.1",
    "quizId": "comprehensive-exam",
    "metadata": {
        "title": "MBIO 140 Comprehensive Final Exam",
        "description": "A comprehensive assessment covering all 11 topics.",
        "examType": "comprehensive",
        "topicsCovered": [
            "topic-01", "topic-02", "topic-03", "topic-04",
            "topic-05", "topic-06", "topic-07", "topic-08",
            "topic-09", "topic-10", "topic-11"
        ],
        "difficulty": "advanced",
        "estimatedTime": 45,
        "passingScore": 70
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "end",
        "allowRetry": true,
        "timeLimit": 2700
    },
    "questions": [
        // Topic 1
        {
            "id": "c-t1-q1",
            "type": "multiple-choice",
            "question": "Which scientist disproved spontaneous generation?",
            "points": 1,
            "topicId": "topic-01",
            "topicName": "Intro to Microbiology",
            "options": [
                { "id": "a", "text": "Hooke", "isCorrect": false },
                { "id": "b", "text": "Pasteur", "isCorrect": true },
                { "id": "c", "text": "Leeuwenhoek", "isCorrect": false },
                { "id": "d", "text": "Koch", "isCorrect": false }
            ],
            "explanation": "Pasteur used swan-necked flasks."
        },
        {
            "id": "c-t1-q2",
            "type": "fill-blank",
            "question": "Koch's __1__ link microorganisms to diseases.",
            "points": 1,
            "topicId": "topic-01",
            "topicName": "Intro to Microbiology",
            "blanks": [
                { "id": "1", "acceptedAnswers": ["postulates"], "caseSensitive": false }
            ]
        },
        // Topic 2
        {
            "id": "c-t2-q1",
            "type": "matching",
            "question": "Match shapes:",
            "points": 1,
            "topicId": "topic-02",
            "topicName": "Bacteriology",
            "pairs": [
                { "id": "p1", "left": "Cocci", "right": "Spherical" },
                { "id": "p2", "left": "Bacilli", "right": "Rod-shaped" },
                { "id": "p3", "left": "Vibrio", "right": "Curved" }
            ]
        },
        {
            "id": "c-t2-q2",
            "type": "multiple-choice",
            "question": "Structure for bacterial motility?",
            "points": 1,
            "topicId": "topic-02",
            "topicName": "Bacteriology",
            "options": [
                { "id": "a", "text": "Capsule", "isCorrect": false },
                { "id": "b", "text": "Flagella", "isCorrect": true },
                { "id": "c", "text": "Pili", "isCorrect": false },
                { "id": "d", "text": "Inclusions", "isCorrect": false }
            ]
        },
        // Topic 3
        {
            "id": "c-t3-q1",
            "type": "multiple-choice",
            "question": "Fungal cell walls are made of:",
            "points": 1,
            "topicId": "topic-03",
            "topicName": "Mycology",
            "options": [
                { "id": "a", "text": "Cellulose", "isCorrect": false },
                { "id": "b", "text": "Chitin", "isCorrect": true },
                { "id": "c", "text": "Peptidoglycan", "isCorrect": false },
                { "id": "d", "text": "Silica", "isCorrect": false }
            ]
        },
        {
            "id": "c-t3-q2",
            "type": "fill-blank",
            "question": "Mass of hyphae is a __1__.",
            "points": 1,
            "topicId": "topic-03",
            "topicName": "Mycology",
            "blanks": [
                { "id": "1", "acceptedAnswers": ["mycelium"], "caseSensitive": false }
            ]
        },
        // Topic 4
        {
            "id": "c-t4-q1",
            "type": "multiple-choice",
            "question": "Algae with silica cell walls?",
            "points": 1,
            "topicId": "topic-04",
            "topicName": "Phycology",
            "options": [
                { "id": "a", "text": "Green", "isCorrect": false },
                { "id": "b", "text": "Diatoms", "isCorrect": true },
                { "id": "c", "text": "Brown", "isCorrect": false },
                { "id": "d", "text": "Red", "isCorrect": false }
            ]
        },
        {
            "id": "c-t4-q2",
            "type": "multiple-choice",
            "question": "Source of alginate?",
            "points": 1,
            "topicId": "topic-04",
            "topicName": "Phycology",
            "options": [
                { "id": "a", "text": "Brown Algae", "isCorrect": true },
                { "id": "b", "text": "Red Algae", "isCorrect": false },
                { "id": "c", "text": "Green Algae", "isCorrect": false }
            ]
        },
        // Topic 5
        {
            "id": "c-t5-q1",
            "type": "multiple-choice",
            "question": "Protozoa using pseudopodia?",
            "points": 1,
            "topicId": "topic-05",
            "topicName": "Protozoology",
            "options": [
                { "id": "a", "text": "Mastigophora", "isCorrect": false },
                { "id": "b", "text": "Sarcodina", "isCorrect": true },
                { "id": "c", "text": "Ciliophora", "isCorrect": false },
                { "id": "d", "text": "Apicomplexa", "isCorrect": false }
            ]
        },
        {
            "id": "c-t5-q2",
            "type": "matching",
            "question": "Match symbiosis:",
            "points": 1,
            "topicId": "topic-05",
            "topicName": "Protozoology",
            "pairs": [
                { "id": "p1", "left": "Parasitism", "right": "One benefits, host harmed" },
                { "id": "p2", "left": "Mutualism", "right": "Both benefit" }
            ]
        },
        // Topic 6
        {
            "id": "c-t6-q1",
            "type": "true-false",
            "question": "Viruses contain both DNA and RNA.",
            "points": 1,
            "topicId": "topic-06",
            "topicName": "Virology",
            "correctAnswer": false,
            "explanation": "They contain one or the other, not both."
        },
        {
            "id": "c-t6-q2",
            "type": "ordering",
            "question": "Viral life cycle:",
            "points": 1,
            "topicId": "topic-06",
            "topicName": "Virology",
            "items": [
                { "id": "1", "text": "Adsorption", "correctPosition": 1 },
                { "id": "2", "text": "Penetration", "correctPosition": 2 },
                { "id": "3", "text": "Replication", "correctPosition": 3 },
                { "id": "4", "text": "Release", "correctPosition": 4 }
            ]
        },
        // Topic 7
        {
            "id": "c-t7-q1",
            "type": "multiple-choice",
            "question": "Process producing most ATP?",
            "points": 1,
            "topicId": "topic-07",
            "topicName": "Metabolism",
            "options": [
                { "id": "a", "text": "Glycolysis", "isCorrect": false },
                { "id": "b", "text": "ETC", "isCorrect": true },
                { "id": "c", "text": "Fermentation", "isCorrect": false },
                { "id": "d", "text": "Krebs", "isCorrect": false }
            ]
        },
        {
            "id": "c-t7-q2",
            "type": "fill-blank",
            "question": "__1__ is the sum of chemical reactions.",
            "points": 1,
            "topicId": "topic-07",
            "topicName": "Metabolism",
            "blanks": [
                { "id": "1", "acceptedAnswers": ["metabolism"], "caseSensitive": false }
            ]
        },
        // Topic 8
        {
            "id": "c-t8-q1",
            "type": "multiple-choice",
            "question": "Copying DNA to RNA is:",
            "points": 1,
            "topicId": "topic-08",
            "topicName": "Genetics",
            "options": [
                { "id": "a", "text": "Transcription", "isCorrect": true },
                { "id": "b", "text": "Translation", "isCorrect": false },
                { "id": "c", "text": "Replication", "isCorrect": false }
            ]
        },
        {
            "id": "c-t8-q2",
            "type": "matching",
            "question": "Match mutation:",
            "points": 1,
            "topicId": "topic-08",
            "topicName": "Genetics",
            "pairs": [
                { "id": "p1", "left": "Missense", "right": "Amino acid change" },
                { "id": "p2", "left": "Nonsense", "right": "Stop codon" }
            ]
        },
        // Topic 9
        {
            "id": "c-t9-q1",
            "type": "multiple-choice",
            "question": "Rhizosphere is:",
            "points": 1,
            "topicId": "topic-09",
            "topicName": "Environmental",
            "options": [
                { "id": "a", "text": "Atmosphere layer", "isCorrect": false },
                { "id": "b", "text": "Soil near roots", "isCorrect": true },
                { "id": "c", "text": "Deep ocean", "isCorrect": false }
            ]
        },
        {
            "id": "c-t9-q2",
            "type": "true-false",
            "question": "Food intoxication involves toxins, not live microbes.",
            "points": 1,
            "topicId": "topic-09",
            "topicName": "Environmental",
            "correctAnswer": true
        },
        // Topic 10
        {
            "id": "c-t10-q1",
            "type": "multiple-choice",
            "question": "Secondary metabolites produced during:",
            "points": 1,
            "topicId": "topic-10",
            "topicName": "Industrial",
            "options": [
                { "id": "a", "text": "Log phase", "isCorrect": false },
                { "id": "b", "text": "Stationary phase", "isCorrect": true },
                { "id": "c", "text": "Lag phase", "isCorrect": false }
            ]
        },
        {
            "id": "c-t10-q2",
            "type": "fill-blank",
            "question": "Wastewater treatment reduces __1__ oxygen demand.",
            "points": 1,
            "topicId": "topic-10",
            "topicName": "Industrial",
            "blanks": [
                { "id": "1", "acceptedAnswers": ["biochemical"], "caseSensitive": false }
            ]
        },
        // Topic 11
        {
            "id": "c-t11-q1",
            "type": "multiple-choice",
            "question": "Immunity present at birth?",
            "points": 1,
            "topicId": "topic-11",
            "topicName": "Medical",
            "options": [
                { "id": "a", "text": "Adaptive", "isCorrect": false },
                { "id": "b", "text": "Innate", "isCorrect": true },
                { "id": "c", "text": "Artificial", "isCorrect": false }
            ]
        },
        {
            "id": "c-t11-q2",
            "type": "matching",
            "question": "Match immunity:",
            "points": 1,
            "topicId": "topic-11",
            "topicName": "Medical",
            "pairs": [
                { "id": "p1", "left": "Natural Active", "right": "Infection recovery" },
                { "id": "p2", "left": "Artificial Active", "right": "Vaccination" }
            ]
        }
    ]
});