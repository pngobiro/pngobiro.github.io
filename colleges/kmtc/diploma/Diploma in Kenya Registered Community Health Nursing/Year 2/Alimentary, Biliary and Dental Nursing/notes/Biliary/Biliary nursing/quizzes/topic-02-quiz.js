registerQuiz("topic-02-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-02-quiz",
    "metadata": {
        "title": "Hepatitis Management Quiz",
        "description": "Assess your understanding of viral hepatitis transmission, symptoms, and nursing care.",
        "topicId": "topic-02-hepatitis",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2025-12-25T10:00:00Z",
        "tags": ["hepatitis", "infection-control", "nursing-care"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "q1",
            "type": "matching",
            "question": "Match the Hepatitis type with its primary mode of transmission:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "Hepatitis A", "right": "Fecal-oral route" },
                { "id": "p2", "left": "Hepatitis B", "right": "Blood/Body fluids (sexual/percutaneous)" },
                { "id": "p3", "left": "Hepatitis C", "right": "Blood (IV drug use/transfusions)" }
            ],
            "explanation": "HAV is fecal-oral (food/water). HBV is blood/body fluids (needles/sex). HCV is primarily blood-to-blood."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "During which phase of hepatitis would you expect to see clay-colored stools and dark urine?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Anicteric phase", "isCorrect": false },
                { "id": "b", "text": "Icteric phase", "isCorrect": true },
                { "id": "c", "text": "Posticteric phase", "isCorrect": false },
                { "id": "d", "text": "Incubation phase", "isCorrect": false }
            ],
            "explanation": "The Icteric (jaundiced) phase is characterized by dark urine (bilirubin excretion) and clay-colored stools (blocked bile flow)."
        },
        {
            "id": "q3",
            "type": "true-false",
            "question": "Hepatitis A is generally self-limiting and does not lead to chronic liver disease.",
            "points": 5,
            "correctAnswer": true,
            "explanation": "Hepatitis A is an acute illness that is self-limiting with liver regeneration and complete recovery. It does not become chronic."
        },
        {
            "id": "q4",
            "type": "multiple-select",
            "question": "Which instructions should be included in the home care plan for a client with Hepatitis? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Strict abstinence from alcohol", "isCorrect": true },
                { "id": "b", "text": "Use acetaminophen (Tylenol) for fever", "isCorrect": false },
                { "id": "c", "text": "Do not share razors or toothbrushes", "isCorrect": true },
                { "id": "d", "text": "Donate blood after recovery", "isCorrect": false },
                { "id": "e", "text": "Eat small, frequent meals", "isCorrect": true }
            ],
            "explanation": "Alcohol and hepatotoxic drugs like acetaminophen must be avoided. Personal hygiene items shouldn't be shared. Blood donation is permanently prohibited. Small meals help with anorexia."
        }
    ]
});
