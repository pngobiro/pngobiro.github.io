registerQuiz("topic-03-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-03-quiz",
    "metadata": {
        "title": "Cirrhosis & Complications Quiz",
        "description": "Test your knowledge on the pathophysiology and management of hepatic cirrhosis complications.",
        "topicId": "topic-03-cirrhosis",
        "difficulty": "advanced",
        "estimatedTime": 20,
        "passingScore": 75,
        "createdAt": "2025-12-25T10:00:00Z",
        "tags": ["cirrhosis", "portal-hypertension", "encephalopathy"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "q1",
            "type": "short-answer",
            "question": "What is the specific term for the 'flapping tremor' seen in patients with hepatic encephalopathy?",
            "points": 10,
            "keywords": ["asterixis", "liver flap", "flapping tremor"],
            "minKeywords": 1,
            "modelAnswer": "Asterixis",
            "explanation": "Asterixis (or liver flap) is the inability to maintain a fixed posture of the hands, resulting in a flapping motion, caused by metabolic encephalopathy."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "Which medication is primarily used to decrease serum ammonia levels in hepatic encephalopathy?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Furosemide (Lasix)", "isCorrect": false },
                { "id": "b", "text": "Lactulose", "isCorrect": true },
                { "id": "c", "text": "Vasopressin", "isCorrect": false },
                { "id": "d", "text": "Vitamin K", "isCorrect": false }
            ],
            "explanation": "Lactulose traps ammonia in the gut and promotes its excretion through the stool."
        },
        {
            "id": "q3",
            "type": "fill-blank",
            "question": "The accumulation of serous fluid in the peritoneal cavity seen in cirrhosis is called __b1__.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["ascites"], "caseSensitive": false }
            ],
            "explanation": "Ascites is the accumulation of fluid in the peritoneal cavity due to portal hypertension and hypoalbuminemia."
        },
        {
            "id": "q4",
            "type": "multiple-select",
            "question": "Which findings are associated with Portal Hypertension? (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Esophageal varices", "isCorrect": true },
                { "id": "b", "text": "Splenomegaly", "isCorrect": true },
                { "id": "c", "text": "Caput medusae", "isCorrect": true },
                { "id": "d", "text": "Hemorrhoids", "isCorrect": true },
                { "id": "e", "text": "Decreased venous pressure", "isCorrect": false }
            ],
            "explanation": "Portal hypertension causes increased pressure leading to collateral circulation: varices, splenomegaly, caput medusae (dilated abdominal veins), and hemorrhoids."
        }
    ]
});
