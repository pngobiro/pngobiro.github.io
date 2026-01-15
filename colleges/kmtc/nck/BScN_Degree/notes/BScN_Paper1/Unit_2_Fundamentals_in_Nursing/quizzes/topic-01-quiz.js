registerQuiz("topic-01-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-01-quiz",
    "metadata": {
        "title": "Infection Prevention and Control Quiz",
        "description": "Assess your knowledge on disease transmission, standard precautions, instrument processing, and waste disposal.",
        "topicId": "topic-01",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 80,
        "createdAt": "2026-01-10T10:00:00Z"
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
            "id": "t1-q1",
            "type": "multiple-choice",
            "question": "What is the single most effective method of preventing or decreasing the transfer of micro-organisms in a health facility?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Wearing sterile gloves", "isCorrect": false },
                { "id": "b", "text": "Hand washing", "isCorrect": true },
                { "id": "c", "text": "Fumigation of wards", "isCorrect": false },
                { "id": "d", "text": "Using prophylactic antibiotics", "isCorrect": false }
            ],
            "explanation": "Washing hands before and after contact with each patient is the single most effective method of preventing the transfer of micro-organisms."
        },
        {
            "id": "t1-q2",
            "type": "fill-blank",
            "question": "Decontamination involves soaking instruments immediately after use in a __b1__% chlorine solution for __b2__ minutes.",
            "points": 20,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["0.5", "0.5%"], "caseSensitive": false },
                { "id": "b2", "acceptedAnswers": ["10", "ten"], "caseSensitive": false }
            ],
            "explanation": "Standard decontamination requires a 0.5% chlorine solution soak for 10 minutes to kill viruses like HIV and Hepatitis B."
        },
        {
            "id": "t1-q3",
            "type": "matching",
            "question": "Match the waste disposal container with the type of waste:",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Puncture-resistant container", "right": "Sharps (Needles, Scalpels)" },
                { "id": "p2", "left": "Red/Color-coded container", "right": "Medical Waste (Blood, Tissue)" },
                { "id": "p3", "left": "Standard/Black container", "right": "General Waste (Paper, Boxes)" }
            ],
            "explanation": "Sharps must go in puncture-resistant containers. Infectious medical waste goes in color-coded (usually red) bins. General waste goes in standard bins."
        },
        {
            "id": "t1-q4",
            "type": "true-false",
            "question": "High Level Disinfection (HLD) by boiling kills all micro-organisms including all bacterial endospores.",
            "points": 10,
            "correctAnswer": false,
            "explanation": "HLD kills all micro-organisms (bacteria, viruses, fungi) but does NOT reliably kill all bacterial endospores (like tetanus). Only sterilization does that."
        },
        {
            "id": "t1-q5",
            "type": "multiple-select",
            "question": "Which of the following are appropriate times to wash your hands? (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Immediately after arriving at work", "isCorrect": true },
                { "id": "b", "text": "Before and after examining a patient", "isCorrect": true },
                { "id": "c", "text": "After removing gloves", "isCorrect": true },
                { "id": "d", "text": "Only when hands are visibly soiled", "isCorrect": false }
            ],
            "explanation": "Hands should be washed on arrival, before/after patient contact, after glove removal, after touching fluids, etc. Alcohol rub can be used if not visibly soiled, but washing is still required at specific times."
        },
        {
            "id": "t1-q6",
            "type": "ordering",
            "question": "Arrange the steps for processing instruments in the correct order:",
            "points": 15,
            "items": [
                { "id": "i1", "text": "Decontamination (Soak in Chlorine)", "correctPosition": 1 },
                { "id": "i2", "text": "Cleaning (Scrub with water/detergent)", "correctPosition": 2 },
                { "id": "i3", "text": "Sterilization or High Level Disinfection", "correctPosition": 3 },
                { "id": "i4", "text": "Storage", "correctPosition": 4 }
            ],
            "explanation": "Items must be decontaminated first to make them safe to handle, then cleaned to remove organic matter, and finally sterilized/disinfected."
        },
        {
            "id": "t1-q7",
            "type": "multiple-choice",
            "question": "Why should you NOT recap needles by hand?",
            "points": 10,
            "options": [
                { "id": "a", "text": "It dulls the needle point", "isCorrect": false },
                { "id": "b", "text": "It increases the risk of needle stick injuries", "isCorrect": true },
                { "id": "c", "text": "It contaminates the medication", "isCorrect": false },
                { "id": "d", "text": "It takes too much time", "isCorrect": false }
            ],
            "explanation": "Recapping by hand is a primary cause of needle stick injuries. If necessary, use the single-hand 'scoop' method."
        }
    ]
});