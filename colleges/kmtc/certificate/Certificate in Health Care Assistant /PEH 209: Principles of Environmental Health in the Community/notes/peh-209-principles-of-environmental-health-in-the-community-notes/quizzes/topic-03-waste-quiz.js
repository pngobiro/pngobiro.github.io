// quizzes/topic-03-waste-quiz.js
window.registerQuiz('topic-03-waste-quiz', {
    "schemaVersion": "1.0",
    "quizId": "topic-03-waste-quiz",
    "metadata": {
        "title": "Waste Management Quiz",
        "description": "Assess understanding of solid and liquid waste, hazardous materials, and disposal methods.",
        "topicId": "topic-03-waste",
        "difficulty": "intermediate",
        "estimatedTime": 10,
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
            "question": "What is 'Sullage' (or Greywater)?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Water containing human excreta", "isCorrect": false },
                { "id": "b", "text": "Water used for washing in bathrooms and kitchens", "isCorrect": true },
                { "id": "c", "text": "Runoff from industrial factories", "isCorrect": false },
                { "id": "d", "text": "Solid waste sludge", "isCorrect": false }
            ],
            "explanation": "Sullage excludes human waste (which makes it sewage/blackwater)."
        },
        {
            "id": "q2",
            "type": "ordering",
            "question": "Order the functional elements of solid waste management:",
            "points": 20,
            "items": [
                { "id": "i1", "text": "Waste generation", "correctPosition": 1 },
                { "id": "i2", "text": "On-site handling", "correctPosition": 2 },
                { "id": "i3", "text": "Collection", "correctPosition": 3 },
                { "id": "i4", "text": "Transfer and transport", "correctPosition": 4 },
                { "id": "i5", "text": "Processing and recovery", "correctPosition": 5 },
                { "id": "i6", "text": "Disposal", "correctPosition": 6 }
            ]
        },
        {
            "id": "q3",
            "type": "multiple-select",
            "question": "Select the properties of Hazardous Waste:",
            "points": 10,
            "options": [
                { "id": "a", "text": "Corrosive", "isCorrect": true },
                { "id": "b", "text": "Ignitable", "isCorrect": true },
                { "id": "c", "text": "Biodegradable", "isCorrect": false },
                { "id": "d", "text": "Toxic", "isCorrect": true },
                { "id": "e", "text": "Reactive", "isCorrect": true }
            ],
            "explanation": "Hazardous wastes are Corrosive, Ignitable, Toxic, Reactive, or Infectious."
        },
        {
            "id": "q4",
            "type": "matching",
            "question": "Match the healthcare waste to its color code:",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "General / Non-infectious", "right": "Black" },
                { "id": "p2", "left": "Infectious / Clinical", "right": "Yellow" },
                { "id": "p3", "left": "Highly Infectious / Pathological", "right": "Red" },
                { "id": "p4", "left": "Chemical waste", "right": "Brown" }
            ]
        },
        {
            "id": "q5",
            "type": "fill-blank",
            "question": "The digested waste matter found in pit latrines and septic tanks is called __b1__.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["sludge"], "caseSensitive": false }
            ],
            "explanation": "Sludge is the solid matter that settles at the bottom of septic tanks."
        },
        {
            "id": "q6",
            "type": "true-false",
            "question": "Integrated Solid Waste Management (ISWM) only focuses on the final disposal of waste.",
            "points": 10,
            "correctAnswer": false,
            "explanation": "False. ISWM considers all options including minimization, recycling, composting, AND disposal."
        }
    ]
});