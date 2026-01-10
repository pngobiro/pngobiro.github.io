registerQuiz("topic-02-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-02-quiz",
    "metadata": {
        "title": "Basic Nursing Procedures Quiz",
        "description": "Test your understanding of patient care procedures including lifting, specimen collection, and IV therapy.",
        "topicId": "topic-02",
        "difficulty": "intermediate",
        "estimatedTime": 20,
        "passingScore": 80,
        "createdAt": "2026-01-10T10:00:00Z"
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "t2-q1",
            "type": "multiple-select",
            "question": "Which of the following are included in the 'Five Rights' of drug administration? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Right Patient", "isCorrect": true },
                { "id": "b", "text": "Right Drug", "isCorrect": true },
                { "id": "c", "text": "Right Doctor", "isCorrect": false },
                { "id": "d", "text": "Right Dose", "isCorrect": true },
                { "id": "e", "text": "Right Route", "isCorrect": true },
                { "id": "f", "text": "Right Time", "isCorrect": true }
            ],
            "explanation": "The Five Rights are: Right Patient, Right Drug, Right Dose, Right Route, and Right Time."
        },
        {
            "id": "t2-q2",
            "type": "ordering",
            "question": "Place the stages of dying (Kubler Ross) in the correct chronological order:",
            "points": 15,
            "items": [
                { "id": "i1", "text": "Denial ('No, not me')", "correctPosition": 1 },
                { "id": "i2", "text": "Anger ('Why me?')", "correctPosition": 2 },
                { "id": "i3", "text": "Bargaining ('Yes me, but...')", "correctPosition": 3 },
                { "id": "i4", "text": "Depression ('Yes me' - sadness)", "correctPosition": 4 },
                { "id": "i5", "text": "Acceptance ('I am ready')", "correctPosition": 5 }
            ],
            "explanation": "The stages are Denial, Anger, Bargaining, Depression, and Acceptance."
        },
        {
            "id": "t2-q3",
            "type": "fill-blank",
            "question": "To calculate the drops per minute for an IV, use the formula: (__b1__ x Drop Factor) / __b2__.",
            "points": 20,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["total volume", "volume", "ml"], "caseSensitive": false },
                { "id": "b2", "acceptedAnswers": ["time in minutes", "time", "minutes"], "caseSensitive": false }
            ],
            "explanation": "Drops/min = (Total Volume in ml x Drop Factor) / Time in Minutes."
        },
        {
            "id": "t2-q4",
            "type": "multiple-choice",
            "question": "When collecting a 24-hour urine specimen, what should be done with the FIRST voided urine at the start time?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Save it in the container", "isCorrect": false },
                { "id": "b", "text": "Discard it", "isCorrect": true },
                { "id": "c", "text": "Send it immediately to the lab", "isCorrect": false },
                { "id": "d", "text": "Mix it with preservative", "isCorrect": false }
            ],
            "explanation": "At the start time (e.g., 6 am), the patient must void and DISCARD that urine. All subsequent urine is collected for the next 24 hours."
        },
        {
            "id": "t2-q5",
            "type": "matching",
            "question": "Match the injection type with the correct needle angle:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "Intramuscular (IM)", "right": "90 degrees" },
                { "id": "p2", "left": "Subcutaneous (SC)", "right": "45 degrees" },
                { "id": "p3", "left": "Intradermal (ID)", "right": "10-15 degrees" }
            ],
            "explanation": "IM is 90° (deep muscle), SC is 45° (fatty tissue), ID is 10-15° (just under skin)."
        },
        {
            "id": "t2-q6",
            "type": "multiple-choice",
            "question": "Which sign would indicate infiltration of an IV infusion?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Redness and heat along the vein", "isCorrect": false },
                { "id": "b", "text": "Swelling, coldness, and pallor at the site", "isCorrect": true },
                { "id": "c", "text": "Bounding pulse", "isCorrect": false },
                { "id": "d", "text": "Purulent discharge", "isCorrect": false }
            ],
            "explanation": "Infiltration (fluid in tissue) causes swelling, coldness, and pallor. Redness and heat indicate phlebitis."
        },
        {
            "id": "t2-q7",
            "type": "true-false",
            "question": "When lifting a patient, you should bend at the waist and keep your legs straight.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "You should keep your back straight and bend your KNEES to use the strong leg muscles, preventing back injury."
        }
    ]
});