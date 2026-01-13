// quizzes/topic-04-quiz.js
registerQuiz("topic-04-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-04-quiz",
    "metadata": {
        "title": "Counseling in Facilitative Supervision",
        "description": "Assess understanding of counseling principles, skills, Egan's model, and the stages of change.",
        "topicId": "topic-04-counseling",
        "difficulty": "intermediate",
        "estimatedTime": 20,
        "passingScore": 80,
        "createdAt": "2026-01-13T12:00:00Z",
        "tags": ["counseling", "skills", "egan-model"]
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
            "type": "multiple-select",
            "question": "Counseling is NOT: (Select all that apply)",
            "points": 10,
            "options": [
                {
                    "id": "a",
                    "text": "Giving advice",
                    "isCorrect": true
                },
                {
                    "id": "b",
                    "text": "Judgmental",
                    "isCorrect": true
                },
                {
                    "id": "c",
                    "text": "Helping the client tell their story",
                    "isCorrect": false
                },
                {
                    "id": "d",
                    "text": "Attempting to sort out problems for the client",
                    "isCorrect": true
                },
                {
                    "id": "e",
                    "text": "Getting emotionally involved with the client",
                    "isCorrect": true
                }
            ],
            "partialCredit": true,
            "explanation": "Counseling is NOT giving advice, being judgmental, solving problems *for* the client, or getting emotionally involved."
        },
        {
            "id": "q2",
            "type": "fill-blank",
            "question": "The acronym SOLER stands for: Squarely face the client, __1__ posture, __2__ in on occasion, __3__ contact, and Relaxed behavior.",
            "points": 15,
            "blanks": [
                {
                    "id": "1",
                    "acceptedAnswers": ["Open"],
                    "caseSensitive": false
                },
                {
                    "id": "2",
                    "acceptedAnswers": ["Lean"],
                    "caseSensitive": false
                },
                {
                    "id": "3",
                    "acceptedAnswers": ["Eye"],
                    "caseSensitive": false
                }
            ],
            "explanation": "SOLER is a mnemonic for attending skills: Squarely, Open, Lean, Eye, Relaxed."
        },
        {
            "id": "q3",
            "type": "matching",
            "question": "Match the stage of Egan's Model to its primary question:",
            "points": 15,
            "pairs": [
                {
                    "id": "p1",
                    "left": "Stage I: Exploration",
                    "right": "What is going on?"
                },
                {
                    "id": "p2",
                    "left": "Stage II: Challenging",
                    "right": "What do I want instead?"
                },
                {
                    "id": "p3",
                    "left": "Stage III: Action Planning",
                    "right": "How might I achieve what I want?"
                }
            ],
            "explanation": "Egan's model moves from current reality (What is going on?), to preferred reality (What do I want?), to action strategies (How to achieve it?)."
        },
        {
            "id": "q4",
            "type": "ordering",
            "question": "Place the Stages of Change in the correct order:",
            "points": 15,
            "items": [
                {
                    "id": "i1",
                    "text": "Pre-contemplation",
                    "correctPosition": 1
                },
                {
                    "id": "i2",
                    "text": "Contemplation",
                    "correctPosition": 2
                },
                {
                    "id": "i3",
                    "text": "Preparation",
                    "correctPosition": 3
                },
                {
                    "id": "i4",
                    "text": "Action",
                    "correctPosition": 4
                },
                {
                    "id": "i5",
                    "text": "Maintenance",
                    "correctPosition": 5
                },
                {
                    "id": "i6",
                    "text": "Termination",
                    "correctPosition": 6
                }
            ],
            "explanation": "The stages are: Pre-contemplation -> Contemplation -> Preparation -> Action -> Maintenance -> Termination."
        },
        {
            "id": "q5",
            "type": "multiple-choice",
            "question": "What is the definition of 'Empathy' in counseling?",
            "points": 10,
            "options": [
                {
                    "id": "a",
                    "text": "Feeling sorry for the client",
                    "isCorrect": false
                },
                {
                    "id": "b",
                    "text": "Entering the private perceptual world of the other and becoming at home in it",
                    "isCorrect": true
                },
                {
                    "id": "c",
                    "text": "Giving the client good advice based on personal experience",
                    "isCorrect": false
                },
                {
                    "id": "d",
                    "text": "Diagnosing the client's problem accurately",
                    "isCorrect": false
                }
            ],
            "explanation": "Empathy involves entering the client's world and understanding their feelings without making judgments (Carl Rogers)."
        }
    ]
});