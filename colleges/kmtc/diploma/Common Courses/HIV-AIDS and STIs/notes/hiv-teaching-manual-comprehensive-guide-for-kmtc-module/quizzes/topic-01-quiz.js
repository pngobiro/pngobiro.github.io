window.registerQuiz('topic-01-quiz', {
    "schemaVersion": "1.0",
    "quizId": "topic-01-quiz",
    "metadata": {
        "title": "Fundamentals of HIV and AIDS",
        "description": "Test your knowledge on HIV definitions, history, epidemiology, virology, and testing services.",
        "topicId": "topic-01-fundamentals",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2024-01-20T12:00:00Z",
        "tags": ["hiv", "epidemiology", "virology"]
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
            "question": "What does the 'A' in AIDS stand for?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Autoimmune", "isCorrect": false },
                { "id": "b", "text": "Acquired", "isCorrect": true },
                { "id": "c", "text": "Acute", "isCorrect": false },
                { "id": "d", "text": "Advanced", "isCorrect": false }
            ],
            "explanation": "AIDS stands for Acquired Immune Deficiency Syndrome."
        },
        {
            "id": "q2",
            "type": "fill-blank",
            "question": "The first case of HIV in Kenya was reported in the year __year__.",
            "points": 10,
            "blanks": [
                { "id": "year", "acceptedAnswers": ["1984"], "caseSensitive": false }
            ],
            "explanation": "Kenya reported its first HIV cases in 1984, following Uganda in 1982."
        },
        {
            "id": "q3",
            "type": "multiple-select",
            "question": "Which of the following are major modes of HIV transmission? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Sexual intercourse", "isCorrect": true },
                { "id": "b", "text": "Mosquito bites", "isCorrect": false },
                { "id": "c", "text": "Contact with infected blood", "isCorrect": true },
                { "id": "d", "text": "Sharing utensils", "isCorrect": false },
                { "id": "e", "text": "Mother to child transmission", "isCorrect": true }
            ],
            "explanation": "HIV is transmitted via sexual contact, infected blood, and from mother to child. It is NOT transmitted by insects or casual contact."
        },
        {
            "id": "q4",
            "type": "matching",
            "question": "Match the WHO Clinical Stage to its defining symptom:",
            "points": 10,
            "pairs": [
                { "id": "p1", "left": "Stage 1", "right": "Asymptomatic / Persistent generalized lymphadenopathy" },
                { "id": "p2", "left": "Stage 2", "right": "Herpes zoster / Moderate weight loss (<10%)" },
                { "id": "p3", "left": "Stage 3", "right": "Pulmonary TB / Oral candidiasis" },
                { "id": "p4", "left": "Stage 4", "right": "HIV wasting syndrome / Severe OIs" }
            ]
        },
        {
            "id": "q5",
            "type": "image-based",
            "question": "Identify the HIV enzyme labeled 'Reverse Transcriptase' (Note: Conceptual check based on viral structure knowledge). Which step does it facilitate?",
            "points": 10,
            "imageUrl": "../assets/images/image-20260115-8dc47810.jpeg",
            "imageAlt": "Structure of HIV Virus",
            "options": [
                { "id": "a", "text": "Integration into host DNA", "isCorrect": false },
                { "id": "b", "text": "Conversion of viral RNA into DNA", "isCorrect": true },
                { "id": "c", "text": "Cleavage of protein chains", "isCorrect": false },
                { "id": "d", "text": "Binding to CD4 receptors", "isCorrect": false }
            ],
            "explanation": "Reverse Transcriptase is responsible for converting viral RNA into DNA during the replication cycle."
        },
        {
            "id": "q6",
            "type": "short-answer",
            "question": "What is the term for the 5th 'C' in HIV Counseling and Testing that ensures linkage to care?",
            "points": 10,
            "keywords": ["connection", "linkage"],
            "minKeywords": 1,
            "modelAnswer": "Connection",
            "explanation": "The 5 Cs are Consent, Confidentiality, Counselling, Correct results, and Connection."
        },
        {
            "id": "q7",
            "type": "true-false",
            "question": "Provider Initiated Counseling and Testing (PICT) is only offered to patients who show symptoms of HIV.",
            "points": 10,
            "correctAnswer": false,
            "explanation": "PICT is routinely offered to ALL persons attending healthcare facilities regardless of whether they show signs or symptoms."
        },
        {
            "id": "q8",
            "type": "ordering",
            "question": "Arrange the steps of the HIV viral replication cycle in the correct order:",
            "points": 10,
            "items": [
                { "id": "1", "text": "Binding", "correctPosition": 1 },
                { "id": "2", "text": "Fusion", "correctPosition": 2 },
                { "id": "3", "text": "Reverse Transcription", "correctPosition": 3 },
                { "id": "4", "text": "Integration", "correctPosition": 4 },
                { "id": "5", "text": "Replication", "correctPosition": 5 },
                { "id": "6", "text": "Assembly", "correctPosition": 6 },
                { "id": "7", "text": "Budding", "correctPosition": 7 }
            ]
        },
        {
            "id": "q9",
            "type": "multiple-choice",
            "question": "Which HIV type is most common globally, accounting for around 95% of infections?",
            "points": 10,
            "options": [
                { "id": "a", "text": "HIV-1", "isCorrect": true },
                { "id": "b", "text": "HIV-2", "isCorrect": false },
                { "id": "c", "text": "HIV-3", "isCorrect": false },
                { "id": "d", "text": "SIV", "isCorrect": false }
            ],
            "explanation": "HIV-1 is the most common type globally. HIV-2 is less infectious and found primarily in West Africa."
        },
        {
            "id": "q10",
            "type": "fill-blank",
            "question": "A test result that is reactive on the first test but non-reactive on the confirmatory test is termed __status__.",
            "points": 10,
            "blanks": [
                { "id": "status", "acceptedAnswers": ["inconclusive", "indeterminate"], "caseSensitive": false }
            ],
            "explanation": "Inconclusive results require a tie-breaker (ELISA) and follow-up testing."
        }
    ]
});