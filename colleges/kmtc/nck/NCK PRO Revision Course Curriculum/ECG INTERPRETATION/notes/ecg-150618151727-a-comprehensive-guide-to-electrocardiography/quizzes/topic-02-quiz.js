
registerQuiz("topic-02-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-02-quiz",
    "metadata": {
        "title": "Electrode Placement",
        "description": "Test your knowledge on 12-lead ECG placement, anatomical landmarks, and recording procedures.",
        "topicId": "topic-02",
        "difficulty": "intermediate",
        "estimatedTime": 10,
        "passingScore": 80,
        "createdAt": "2026-01-20T00:00:00Z"
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate",
        "allowRetry": true
    },
    "questions": [
        {
            "id": "q1-total-electrodes",
            "type": "multiple-choice",
            "question": "How many physical electrodes are placed on the patient to perform a standard 12-lead ECG?",
            "points": 1,
            "options": [
                { "id": "op1", "text": "10", "isCorrect": true },
                { "id": "op2", "text": "12", "isCorrect": false },
                { "id": "op3", "text": "6", "isCorrect": false },
                { "id": "op4", "text": "4", "isCorrect": false }
            ],
            "explanation": "Although it is a '12-lead' ECG, only 10 electrodes are attached to the patient (4 limb electrodes + 6 chest electrodes)."
        },
        {
            "id": "q2-limb-mnemonic",
            "type": "matching",
            "question": "Match the limb electrode position to the correct word in the mnemonic 'Ride Your Green Bike'.",
            "points": 4,
            "pairs": [
                { "id": "p1", "left": "Right Arm", "right": "Ride (Red)" },
                { "id": "p2", "left": "Left Arm", "right": "Your (Yellow)" },
                { "id": "p3", "left": "Left Leg", "right": "Green" },
                { "id": "p4", "left": "Right Leg", "right": "Bike (Black)" }
            ],
            "explanation": "Right Arm = Red (Ride), Left Arm = Yellow (Your), Left Leg = Green (Green), Right Leg = Black (Bike)."
        },
        {
            "id": "q3-neutral-lead",
            "type": "multiple-choice",
            "question": "Which limb electrode serves as the neutral or 'dummy' electrode?",
            "points": 1,
            "options": [
                { "id": "op1", "text": "Right leg", "isCorrect": true },
                { "id": "op2", "text": "Left leg", "isCorrect": false },
                { "id": "op3", "text": "Right arm", "isCorrect": false },
                { "id": "op4", "text": "Left arm", "isCorrect": false }
            ],
            "explanation": "The right leg electrode is the neutral or ground electrode."
        },
        {
            "id": "q4-v1-position",
            "type": "multiple-choice",
            "question": "What is the correct anatomical position for the V1 electrode?",
            "points": 1,
            "options": [
                { "id": "op1", "text": "4th intercostal space, right sternal edge", "isCorrect": true },
                { "id": "op2", "text": "4th intercostal space, left sternal edge", "isCorrect": false },
                { "id": "op3", "text": "5th intercostal space, mid-clavicular line", "isCorrect": false },
                { "id": "op4", "text": "5th intercostal space, mid-axillary line", "isCorrect": false }
            ],
            "explanation": "V1 is placed at the 4th intercostal space at the right sternal edge."
        },
        {
            "id": "q5-v4-position",
            "type": "multiple-choice",
            "question": "Which electrode is placed over the apex of the heart (5th ICS mid-clavicular line)?",
            "points": 1,
            "options": [
                { "id": "op1", "text": "V4", "isCorrect": true },
                { "id": "op2", "text": "V3", "isCorrect": false },
                { "id": "op3", "text": "V5", "isCorrect": false },
                { "id": "op4", "text": "V6", "isCorrect": false }
            ],
            "explanation": "V4 is located at the 5th intercostal space in the mid-clavicular line, which corresponds to the apex."
        },
        {
            "id": "q6-v3-position",
            "type": "fill-blank",
            "question": "Electrode V3 is placed halfway between __b1__ and __b2__.",
            "points": 2,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["V2", "v2"], "caseSensitive": false },
                { "id": "b2", "acceptedAnswers": ["V4", "v4"], "caseSensitive": false }
            ],
            "explanation": "V3 is placed halfway between V2 and V4."
        },
        {
            "id": "q7-interference",
            "type": "true-false",
            "question": "Skeletal muscle activity (e.g., patient moving or tense) can be picked up as interference on the ECG trace.",
            "points": 1,
            "correctAnswer": true,
            "explanation": "Yes, patients must relax completely because skeletal muscle activity causes electrical interference (artifacts) on the trace."
        }
    ]
});