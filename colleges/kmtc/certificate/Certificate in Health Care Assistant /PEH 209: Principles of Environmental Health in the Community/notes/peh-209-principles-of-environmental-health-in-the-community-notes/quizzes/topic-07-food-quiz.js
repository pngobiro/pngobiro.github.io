// quizzes/topic-07-food-quiz.js
window.registerQuiz('topic-07-food-quiz', {
    "schemaVersion": "1.0",
    "quizId": "topic-07-food-quiz",
    "metadata": {
        "title": "Food Safety Quiz",
        "description": "Test understanding of food hazards, spoilage, and prevention.",
        "topicId": "topic-07-food",
        "difficulty": "advanced",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2026-01-16T10:00:00Z"
    },
    "settings": {
        "shuffleQuestions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Which bacteria is commonly associated with poultry and eggs?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Staphylococcus", "isCorrect": false },
                { "id": "b", "text": "Salmonella", "isCorrect": true },
                { "id": "c", "text": "Clostridium botulinum", "isCorrect": false },
                { "id": "d", "text": "Vibrio cholerae", "isCorrect": false }
            ],
            "explanation": "Salmonella is often present in the waste of poultry and found in eggs/meat."
        },
        {
            "id": "q2",
            "type": "multiple-select",
            "question": "Select High-Risk Foods:",
            "points": 10,
            "options": [
                { "id": "a", "text": "Cooked rice", "isCorrect": true },
                { "id": "b", "text": "Dried flour", "isCorrect": false },
                { "id": "c", "text": "Milk and cream", "isCorrect": true },
                { "id": "d", "text": "Vinegar", "isCorrect": false },
                { "id": "e", "text": "Cooked poultry", "isCorrect": true }
            ],
            "explanation": "High-risk foods are moist and high in protein (or cooked starch like rice). Dried and acidic foods are low risk."
        },
        {
            "id": "q3",
            "type": "matching",
            "question": "Match the spoilage sign to its cause:",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Putrefaction (Off odour)", "right": "Breakdown of proteins" },
                { "id": "p2", "left": "Souring", "right": "Production of acids" },
                { "id": "p3", "left": "Enzymatic browning", "right": "Polyphenol oxidase action" },
                { "id": "p4", "left": "Non-enzymatic browning", "right": "Reaction of sugars and amino groups" }
            ]
        },
        {
            "id": "q4",
            "type": "ordering",
            "question": "Order the steps to break the food poisoning chain:",
            "points": 15,
            "items": [
                { "id": "i1", "text": "Protect from contamination", "correctPosition": 1 },
                { "id": "i2", "text": "Prevent bacteria multiplying (Storage)", "correctPosition": 2 },
                { "id": "i3", "text": "Destroy bacteria (Cooking)", "correctPosition": 3 }
            ]
        },
        {
            "id": "q5",
            "type": "multiple-choice",
            "question": "What is the temperature 'Danger Zone' where bacteria multiply rapidly?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Below 0°C", "isCorrect": false },
                { "id": "b", "text": "Between 4°C and 60°C", "isCorrect": true },
                { "id": "c", "text": "Above 100°C", "isCorrect": false },
                { "id": "d", "text": "Between -10°C and 4°C", "isCorrect": false }
            ],
            "explanation": "Food should be kept below 4°C or above 60°C (some guidelines say 63°C or 70°C, text implies danger is room temp/warm)."
        },
        {
            "id": "q6",
            "type": "fill-blank",
            "question": "The time required for one bacterium to divide and reproduce is approximately __b1__ minutes.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["30", "30 minutes"], "caseSensitive": false }
            ],
            "explanation": "Bacteria can divide every 30 minutes in ideal conditions."
        }
    ]
});