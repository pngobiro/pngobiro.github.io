registerQuiz("topic-02-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-02-quiz",
    "metadata": {
        "title": "Topic 02: Psychosocial Assessment",
        "description": "Test your understanding of the mind-skin connection, assessment tools, and psychological interventions.",
        "topicId": "topic-02-psychosocial",
        "difficulty": "beginner",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2025-12-25T12:00:00Z",
        "tags": ["psychosocial", "assessment", "nursing"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Which of the following is described as one of the most important 'psychosomatic organs'?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Heart", "isCorrect": false },
                { "id": "b", "text": "Skin", "isCorrect": true },
                { "id": "c", "text": "Stomach", "isCorrect": false },
                { "id": "d", "text": "Lungs", "isCorrect": false }
            ],
            "explanation": "The skin acts as an interface between the internal self and the external world, making it a primary psychosomatic organ."
        },
        {
            "id": "q2",
            "type": "matching",
            "question": "Match the condition with its primary characteristic:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "Delusional Parasitosis", "right": "False belief of infestation" },
                { "id": "p2", "left": "Body Dysmorphic Disorder", "right": "Imagined/exaggerated physical defect" },
                { "id": "p3", "left": "Trichotillomania", "right": "Compulsive hair pulling" },
                { "id": "p4", "left": "Dermatitis Artefacta", "right": "Patient-created skin lesions" }
            ],
            "explanation": "Correct diagnosis of the specific psychodermatological condition is essential for appropriate referral and treatment."
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "A teenager presents with an obvious skin problem. He is rebellious, has difficulty in school, and struggles to make friends. This behavior is most likely:",
            "points": 10,
            "options": [
                { "id": "a", "text": "Typical teenage behavior", "isCorrect": false },
                { "id": "b", "text": "A neurotic reaction to the skin condition", "isCorrect": true },
                { "id": "c", "text": "Schizophrenia", "isCorrect": false },
                { "id": "d", "text": "Unrelated to the skin condition", "isCorrect": false }
            ],
            "explanation": "Skin conditions often cause significant psychosocial distress, which can manifest as behavioral issues, social isolation, and rebellion in adolescents."
        },
        {
            "id": "q4",
            "type": "fill-blank",
            "question": "The __1__ is a validated tool used to measure a patient's self-efficacy and ability to manage their treatment regimen.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["PeDeSI", "Person-Centered Dermatology Self-Care Index"], "caseSensitive": false }
            ],
            "explanation": "PeDeSI stands for Person-Centered Dermatology Self-Care Index."
        },
        {
            "id": "q5",
            "type": "multiple-choice",
            "question": "Therapeutic consultations are characterized by which three core conditions?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Sympathy, Agreement, Advice", "isCorrect": false },
                { "id": "b", "text": "Congruence, Empathy, Unconditional Positive Regard", "isCorrect": true },
                { "id": "c", "text": "Diagnosis, Prescription, Education", "isCorrect": false },
                { "id": "d", "text": "Authority, Direction, compliance", "isCorrect": false }
            ],
            "explanation": "These three conditions (Rogers) are essential for establishing a therapeutic relationship that fosters patient openness."
        },
        {
            "id": "q6",
            "type": "ordering",
            "question": "Order the stages of the Habit Reversal (HR) clinical intervention model:",
            "points": 10,
            "items": [
                { "id": "1", "text": "Habit concept education", "correctPosition": 1 },
                { "id": "2", "text": "Situation awareness training", "correctPosition": 2 },
                { "id": "3", "text": "Designing a competing response", "correctPosition": 3 },
                { "id": "4", "text": "Competing response practice", "correctPosition": 4 },
                { "id": "5", "text": "Symbolic rehearsal", "correctPosition": 5 }
            ]
        },
        {
            "id": "q7",
            "type": "true-false",
            "question": "Cognitive Behavioral Therapy (CBT) focuses primarily on analyzing a patient's past childhood trauma.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "CBT focuses on the present—changing current unhelpful thinking patterns and behaviors—rather than analyzing the past."
        },
        {
            "id": "q8",
            "type": "multiple-select",
            "question": "Which of the following are indicators that specialist psychological/psychiatric referral is required? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Delusional beliefs (e.g., parasites)", "isCorrect": true },
                { "id": "b", "text": "Mild anxiety about a new diagnosis", "isCorrect": false },
                { "id": "c", "text": "Suspected self-inflicted lesions (Dermatitis Artefacta)", "isCorrect": true },
                { "id": "d", "text": "Suicidal ideation", "isCorrect": true },
                { "id": "e", "text": "Asking questions about treatment side effects", "isCorrect": false }
            ],
            "partialCredit": true,
            "explanation": "Delusions, self-harm, and suicidal ideation are red flags requiring specialist intervention. Mild anxiety and information seeking are normal."
        }
    ]
});
