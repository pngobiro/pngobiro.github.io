registerQuiz("topic-08-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-08-quiz",
    "metadata": {
        "title": "Topic 08: Hepatic Cirrhosis",
        "description": "Assessment of cirrhosis types, portal hypertension, and management.",
        "topicId": "topic-08-hepatic",
        "difficulty": "advanced",
        "estimatedTime": 20,
        "passingScore": 75,
        "createdAt": "2025-12-25T00:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Which type of cirrhosis is most common and characterized by scar tissue surrounding portal areas?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Biliary Cirrhosis", "isCorrect": false },
                { "id": "b", "text": "Post-necrotic Cirrhosis", "isCorrect": false },
                { "id": "c", "text": "Alcoholic Cirrhosis", "isCorrect": true },
                { "id": "d", "text": "Cardiac Cirrhosis", "isCorrect": false }
            ],
            "explanation": "Alcoholic cirrhosis is the most common type, frequently caused by chronic alcoholism."
        },
        {
            "id": "q2",
            "type": "multiple-select",
            "question": "Which of the following are signs of Decompensated Cirrhosis? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Ascites", "isCorrect": true },
                { "id": "b", "text": "Jaundice", "isCorrect": true },
                { "id": "c", "text": "Vague morning indigestion", "isCorrect": false },
                { "id": "d", "text": "Muscle wasting", "isCorrect": true }
            ],
            "explanation": "Ascites, jaundice, and muscle wasting are signs of decompensation. Vague indigestion is a sign of compensated cirrhosis."
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "What is the primary cause of Portal Hypertension?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Kidney failure", "isCorrect": false },
                { "id": "b", "text": "Blockage of blood flow through the liver", "isCorrect": true },
                { "id": "c", "text": "Low blood pressure", "isCorrect": false },
                { "id": "d", "text": "Gallstones", "isCorrect": false }
            ],
            "explanation": "Portal hypertension is caused by obstruction of blood flow through the liver, most commonly due to cirrhosis."
        },
        {
            "id": "q4",
            "type": "fill-blank",
            "question": "Reduced protein intake is required in cirrhosis patients only if __1__ is a symptom.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["confusion", "encephalopathy"], "caseSensitive": false }
            ],
            "explanation": "Protein is restricted only if confusion (encephalopathy) is present, to reduce ammonia production."
        },
        {
            "id": "q5",
            "type": "multiple-choice",
            "question": "What is the TIPS procedure?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Surgical removal of the spleen", "isCorrect": false },
                { "id": "b", "text": "Radiological placement of a stent in the liver to reroute blood flow", "isCorrect": true },
                { "id": "c", "text": "Injection of sclerosis agents into varices", "isCorrect": false },
                { "id": "d", "text": "Liver transplant", "isCorrect": false }
            ],
            "explanation": "TIPS (Transjugular Intrahepatic Portosystemic Shunt) is a radiological procedure where a stent connects the portal vein to the hepatic vein."
        }
    ]
});
