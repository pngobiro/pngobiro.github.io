registerQuiz("topic-05-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-05-quiz",
    "metadata": {
        "title": "Topic 5: Instructional Media",
        "description": "Test your knowledge on projected vs non-projected aids, their selection, and effective use.",
        "topicId": "topic-05",
        "difficulty": "beginner",
        "estimatedTime": 10,
        "passingScore": 80,
        "createdAt": "2026-01-17T00:00:00Z",
        "updatedAt": "2026-01-17T00:00:00Z",
        "tags": ["media", "aids", "ohp", "chalkboard"]
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Which of the following is considered the 'best' teaching aid?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "The Real Thing (Real Object)", "isCorrect": true },
                { "id": "opt2", "text": "A photograph", "isCorrect": false },
                { "id": "opt3", "text": "A chalkboard drawing", "isCorrect": false },
                { "id": "opt4", "text": "A handout", "isCorrect": false }
            ],
            "explanation": "The 'real thing' (e.g., a real patient or equipment) provides the most complete sensory experience."
        },
        {
            "id": "q2",
            "type": "matching",
            "question": "Classify the following as Projected or Non-Projected aids.",
            "points": 3,
            "pairs": [
                { "id": "p1", "left": "Overhead Projector (OHP)", "right": "Projected Aid" },
                { "id": "p2", "left": "Chalkboard", "right": "Non-Projected Aid" },
                { "id": "p3", "left": "Flipchart", "right": "Non-Projected Aid" },
                { "id": "p4", "left": "Slides", "right": "Projected Aid" }
            ],
            "explanation": "OHP and Slides require projection; Chalkboards and Flipcharts do not."
        },
        {
            "id": "q3",
            "type": "multiple-select",
            "question": "Which guidelines apply to using the Chalkboard? (Select all that apply)",
            "points": 2,
            "options": [
                { "id": "opt1", "text": "Write only essential points", "isCorrect": true },
                { "id": "opt2", "text": "Ensure writing is legible from the back", "isCorrect": true },
                { "id": "opt3", "text": "Talk to the board while writing", "isCorrect": false },
                { "id": "opt4", "text": "Stand to the side so students can see", "isCorrect": true }
            ],
            "explanation": "You should write clearly and concisely, maintain eye contact (don't talk to the board), and not block the view."
        },
        {
            "id": "q4",
            "type": "fill-blank",
            "question": "A __b1__ board works by having materials with rough surfaces (like sandpaper) adhere to a felt surface.",
            "points": 1,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["flannel"], "caseSensitive": false }
            ],
            "explanation": "The flannel board uses friction between rough surfaces and felt to hold items in place."
        }
    ]
});