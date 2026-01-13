// quizzes/topic-02-quiz.js
registerQuiz("topic-02-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-02-quiz",
    "metadata": {
        "title": "Mentorship in Facilitative Supervision",
        "description": "Test your knowledge on the definitions, qualities, stages, and benefits of mentorship.",
        "topicId": "topic-02-mentorship",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 80,
        "createdAt": "2026-01-13T12:00:00Z",
        "tags": ["mentoring", "relationships", "career-development"]
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
            "question": "Which of the following is a key characteristic of mentorship?",
            "points": 10,
            "options": [
                {
                    "id": "a",
                    "text": "It always takes place within a direct line manager-employee relationship.",
                    "isCorrect": false
                },
                {
                    "id": "b",
                    "text": "It focuses solely on the specific tasks required for the current job.",
                    "isCorrect": false
                },
                {
                    "id": "c",
                    "text": "It is career-focused and crosses job boundaries.",
                    "isCorrect": true
                },
                {
                    "id": "d",
                    "text": "It is indefinite and never ends.",
                    "isCorrect": false
                }
            ],
            "explanation": "Mentorship typically takes place outside a line manager relationship, focuses on broader career development, and may last for a specific period."
        },
        {
            "id": "q2",
            "type": "ordering",
            "question": "Place the stages of mentoring in the correct chronological order:",
            "points": 15,
            "items": [
                {
                    "id": "i1",
                    "text": "Connection (Acquainted)",
                    "correctPosition": 1
                },
                {
                    "id": "i2",
                    "text": "Relationship-building & Implementation",
                    "correctPosition": 2
                },
                {
                    "id": "i3",
                    "text": "Assessment (Core Stage)",
                    "correctPosition": 3
                },
                {
                    "id": "i4",
                    "text": "Separation (Closure)",
                    "correctPosition": 4
                }
            ],
            "explanation": "The mentorship lifecycle moves from initial Connection -> Building the Relationship -> Core Assessment/Work -> Separation."
        },
        {
            "id": "q3",
            "type": "multiple-select",
            "question": "Which of the following are qualities of a good mentor? (Select all that apply)",
            "points": 10,
            "options": [
                {
                    "id": "a",
                    "text": "Non-judgmental",
                    "isCorrect": true
                },
                {
                    "id": "b",
                    "text": "Able to give constructive feedback",
                    "isCorrect": true
                },
                {
                    "id": "c",
                    "text": "Direct supervisor of the mentee",
                    "isCorrect": false
                },
                {
                    "id": "d",
                    "text": "Successful in career",
                    "isCorrect": true
                },
                {
                    "id": "e",
                    "text": "Unwilling to share secrets",
                    "isCorrect": false
                }
            ],
            "partialCredit": true,
            "explanation": "Good mentors are non-judgmental, give constructive feedback, are successful, and willing to share knowledge. They are often NOT the direct supervisor."
        },
        {
            "id": "q4",
            "type": "matching",
            "question": "Match the type of mentoring to its description:",
            "points": 15,
            "pairs": [
                {
                    "id": "p1",
                    "left": "One on one mentoring",
                    "right": "Matches one mentor with one mentee for personal relationship"
                },
                {
                    "id": "p2",
                    "left": "Group mentoring",
                    "right": "Mentor works with 4-6 mentees at one time"
                },
                {
                    "id": "p3",
                    "left": "Executive mentoring",
                    "right": "Top-down model effective for succession planning"
                }
            ],
            "explanation": "One-on-one is individual; Group involves 4-6 mentees; Executive is top-down for succession."
        },
        {
            "id": "q5",
            "type": "true-false",
            "question": "In the 'Separation' stage of mentoring, the mentee requires more directive guidance from the mentor.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "False. In the Separation stage, the mentee requires LESS guidance as their confidence and competence have increased."
        },
        {
            "id": "q6",
            "type": "fill-blank",
            "question": "Mentoring is a process for the informal transmission of __1__, social capital, and psychosocial support.",
            "points": 10,
            "blanks": [
                {
                    "id": "1",
                    "acceptedAnswers": ["knowledge"],
                    "caseSensitive": false
                }
            ],
            "explanation": "Mentoring involves the informal transmission of knowledge, social capital, and psychosocial support."
        }
    ]
});