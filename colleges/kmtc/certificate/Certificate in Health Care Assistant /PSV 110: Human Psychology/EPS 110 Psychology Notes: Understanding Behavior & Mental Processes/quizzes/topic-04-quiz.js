registerQuiz("topic-04-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-04-quiz",
    "metadata": {
        "title": "Sensation & Perception Quiz",
        "description": "Test understanding of sensory thresholds, Gestalt principles, constancies, and illusions.",
        "topicId": "topic-04",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2026-01-10T12:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "What is the process of converting physical energy into neural impulses called?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Perception", "isCorrect": false },
                { "id": "b", "text": "Transduction", "isCorrect": true },
                { "id": "c", "text": "Adaptation", "isCorrect": false },
                { "id": "d", "text": "Threshold", "isCorrect": false }
            ],
            "explanation": "Transduction occurs in the receptor cells where stimuli are converted to electro-chemical signals."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "The 'Absolute Threshold' refers to:",
            "points": 10,
            "options": [
                { "id": "a", "text": "The maximum amount of stimulation one can handle", "isCorrect": false },
                { "id": "b", "text": "The smallest amount of stimulus needed to notice its presence", "isCorrect": true },
                { "id": "c", "text": "The smallest change in stimulation detectable", "isCorrect": false },
                { "id": "d", "text": "Stimuli below the level of awareness", "isCorrect": false }
            ]
        },
        {
            "id": "q3",
            "type": "matching",
            "question": "Match the Gestalt grouping principle to its example:",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Proximity", "right": "Seeing 'XXX XXX' as two groups" },
                { "id": "p2", "left": "Closure", "right": "Seeing a circle with a missing piece as a full circle" },
                { "id": "p3", "left": "Similarity", "right": "Grouping items that look alike" },
                { "id": "p4", "left": "Continuity", "right": "Perceiving smooth continuous patterns over discontinuous ones" }
            ]
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "Perceptual Constancy is the tendency to perceive objects as changing when the sensory information changes.",
            "points": 10,
            "correctAnswer": false,
            "explanation": "Constancy is perceiving objects as *stable* and *unchanging* (e.g., same size, shape) despite changing sensory input."
        },
        {
            "id": "q5",
            "type": "image-based",
            "question": "This image demonstrates which perceptual illusion where lines of equal length appear different?",
            "points": 10,
            "imageUrl": "../assets/images/image-20260110-a88f0796.jpeg",
            "imageAlt": "Muller-Lyer Illusion",
            "options": [
                { "id": "a", "text": "Ponzo Illusion", "isCorrect": false },
                { "id": "b", "text": "Muller-Lyer Illusion", "isCorrect": true },
                { "id": "c", "text": "Moon Illusion", "isCorrect": false }
            ]
        },
        {
            "id": "q6",
            "type": "multiple-choice",
            "question": "Sensory adaptation is:",
            "points": 10,
            "options": [
                { "id": "a", "text": "Increased sensitivity to new stimuli", "isCorrect": false },
                { "id": "b", "text": "Diminishing sensitivity to unchanging stimuli", "isCorrect": true },
                { "id": "c", "text": "The ability to see in the dark immediately", "isCorrect": false },
                { "id": "d", "text": "Hearing sounds that aren't there", "isCorrect": false }
            ],
            "explanation": "Example: Getting used to a bad smell in a room after a few minutes."
        },
        {
            "id": "q7",
            "type": "fill-blank",
            "question": "The perception of future events before they happen is called __1__.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["precognition", "Precognition"], "caseSensitive": false }
            ]
        },
        {
            "id": "q8",
            "type": "multiple-choice",
            "question": "Which factor suggests that people see what they *want* to see based on needs?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Motivation", "isCorrect": true },
                { "id": "b", "text": "Transduction", "isCorrect": false },
                { "id": "c", "text": "Closure", "isCorrect": false },
                { "id": "d", "text": "Proximity", "isCorrect": false }
            ],
            "explanation": "Motivation shapes perception (e.g., a hungry person perceiving vague shapes as food)."
        }
    ]
});