// quizzes/topic-03-quiz.js
registerQuiz("topic-03-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-03-quiz",
    "metadata": {
        "title": "Coaching in Facilitative Supervision",
        "description": "Evaluate your knowledge of coaching definitions, steps, and effective supervisor behaviors.",
        "topicId": "topic-03-coaching",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 80,
        "createdAt": "2026-01-13T12:00:00Z",
        "tags": ["coaching", "performance", "skills-transfer"]
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
            "question": "Which of the following is a defining characteristic of coaching?",
            "points": 10,
            "options": [
                {
                    "id": "a",
                    "text": "It takes place outside the formal working setup.",
                    "isCorrect": false
                },
                {
                    "id": "b",
                    "text": "It focuses on developing individuals within their current jobs.",
                    "isCorrect": true
                },
                {
                    "id": "c",
                    "text": "It focuses on personal life issues primarily.",
                    "isCorrect": false
                },
                {
                    "id": "d",
                    "text": "The relationship is infinite and never ends.",
                    "isCorrect": false
                }
            ],
            "explanation": "Coaching takes place within the formal work setup, focuses on current jobs, is functional, and the relationship is often finite."
        },
        {
            "id": "q2",
            "type": "ordering",
            "question": "Arrange the steps of effective coaching in the correct order:",
            "points": 15,
            "items": [
                {
                    "id": "i1",
                    "text": "Motivate (Gain commitment)",
                    "correctPosition": 1
                },
                {
                    "id": "i2",
                    "text": "Demonstrate (Explain new behavior)",
                    "correctPosition": 2
                },
                {
                    "id": "i3",
                    "text": "Practice (Application under supervision)",
                    "correctPosition": 3
                },
                {
                    "id": "i4",
                    "text": "Feedback (Constructive evaluation)",
                    "correctPosition": 4
                },
                {
                    "id": "i5",
                    "text": "Transfer Skills (Gradual independence)",
                    "correctPosition": 5
                }
            ],
            "explanation": "The coaching cycle is: Motivate -> Demonstrate -> Practice -> Feedback -> Transfer Skills."
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "What should an effective supervisor coach AVOID doing?",
            "points": 10,
            "options": [
                {
                    "id": "a",
                    "text": "Listening more than talking",
                    "isCorrect": false
                },
                {
                    "id": "b",
                    "text": "Offering chances to take risks",
                    "isCorrect": false
                },
                {
                    "id": "c",
                    "text": "Giving solutions",
                    "isCorrect": true
                },
                {
                    "id": "d",
                    "text": "Modeling accountability",
                    "isCorrect": false
                }
            ],
            "explanation": "Coaches should avoid giving solutions directly, as the goal is to help the employee improve their own judgment and problem-solving skills."
        },
        {
            "id": "q4",
            "type": "matching",
            "question": "Match the type of coaching to its focus:",
            "points": 10,
            "pairs": [
                {
                    "id": "p1",
                    "left": "Personal/Life Coaching",
                    "right": "Facilitates personal growth and life experience"
                },
                {
                    "id": "p2",
                    "left": "Executive Coaching",
                    "right": "Focuses on improved business performance"
                },
                {
                    "id": "p3",
                    "left": "Specialty/Niche Coaching",
                    "right": "Addresses one particular aspect (e.g., stress)"
                }
            ],
            "explanation": "Life coaching focuses on personal growth; Executive on business performance; Niche on specific areas."
        },
        {
            "id": "q5",
            "type": "true-false",
            "question": "Coaching is a training approach that seeks to achieve continuous improvement in performance.",
            "points": 5,
            "correctAnswer": true,
            "explanation": "True. Coaching is defined as a training approach for continuous improvement through motivation, modeling, practice, and feedback."
        },
        {
            "id": "q6",
            "type": "multiple-select",
            "question": "Which of the following are benefits of coaching? (Select all that apply)",
            "points": 10,
            "options": [
                {
                    "id": "a",
                    "text": "Allows staff to learn on the job",
                    "isCorrect": true
                },
                {
                    "id": "b",
                    "text": "Allows immediate application of learning",
                    "isCorrect": true
                },
                {
                    "id": "c",
                    "text": "Eliminates the need for supervision",
                    "isCorrect": false
                },
                {
                    "id": "d",
                    "text": "Fosters positive working relationships",
                    "isCorrect": true
                }
            ],
            "partialCredit": true,
            "explanation": "Coaching allows on-the-job learning, immediate application, and fosters relationships. It does not eliminate supervision but changes its nature."
        }
    ]
});