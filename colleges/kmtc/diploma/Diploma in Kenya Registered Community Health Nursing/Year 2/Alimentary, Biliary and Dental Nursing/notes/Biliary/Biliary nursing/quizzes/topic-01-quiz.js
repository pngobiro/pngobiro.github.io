registerQuiz("topic-01-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-01-quiz",
    "metadata": {
        "title": "Physiology & Assessment Quiz",
        "description": "Test your knowledge of liver functions, jaundice pathophysiology, and diagnostic procedures.",
        "topicId": "topic-01-physiology",
        "difficulty": "intermediate",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2025-12-25T10:00:00Z",
        "tags": ["physiology", "jaundice", "diagnostics"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate",
        "allowRetry": true,
        "showCorrectAnswers": true
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Which blood vessel carries nutrient-rich blood from the gastrointestinal tract to the liver?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Hepatic artery", "isCorrect": false },
                { "id": "b", "text": "Hepatic vein", "isCorrect": false },
                { "id": "c", "text": "Portal vein", "isCorrect": true },
                { "id": "d", "text": "Inferior vena cava", "isCorrect": false }
            ],
            "explanation": "The portal vein carries venous blood rich in nutrients absorbed from the stomach, intestines, pancreas, and spleen into the liver."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "The liver converts ammonia, a by-product of protein metabolism, into which substance?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Bilirubin", "isCorrect": false },
                { "id": "b", "text": "Urea", "isCorrect": true },
                { "id": "c", "text": "Creatinine", "isCorrect": false },
                { "id": "d", "text": "Albumin", "isCorrect": false }
            ],
            "explanation": "Ammonia is a toxic by-product of protein metabolism that the liver converts into urea, which is then excreted by the kidneys."
        },
        {
            "id": "q3",
            "type": "matching",
            "question": "Match the type of jaundice with its primary cause:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "Hemolytic Jaundice", "right": "Increased breakdown of RBCs" },
                { "id": "p2", "left": "Hepatocellular Jaundice", "right": "Inability of liver to clear bilirubin" },
                { "id": "p3", "left": "Obstructive Jaundice", "right": "Impediment to bile flow" }
            ],
            "explanation": "Hemolytic is caused by RBC destruction; Hepatocellular by liver cell damage (hepatitis/cirrhosis); Obstructive by blockages like stones or tumors."
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "After a liver biopsy, the client should be positioned on their left side to promote comfort.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "The client should be positioned on the RIGHT side for 2 hours post-procedure to apply pressure to the liver site and decrease the risk of hemorrhage."
        },
        {
            "id": "q5",
            "type": "multiple-select",
            "question": "Which of the following are functions of the liver? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Synthesis of plasma proteins", "isCorrect": true },
                { "id": "b", "text": "Production of insulin", "isCorrect": false },
                { "id": "c", "text": "Drug metabolism", "isCorrect": true },
                { "id": "d", "text": "Storage of Vitamin K", "isCorrect": false },
                { "id": "e", "text": "Production of bile", "isCorrect": true }
            ],
            "partialCredit": true,
            "explanation": "The liver synthesizes proteins, metabolizes drugs, and produces bile. Insulin is produced by the pancreas. The liver uses Vitamin K but primarily stores Vitamins A, D, B12, and Iron."
        }
    ]
});
