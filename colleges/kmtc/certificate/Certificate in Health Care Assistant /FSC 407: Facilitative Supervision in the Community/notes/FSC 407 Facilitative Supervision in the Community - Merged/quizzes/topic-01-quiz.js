// quizzes/topic-01-quiz.js
registerQuiz("topic-01-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-01-quiz",
    "metadata": {
        "title": "Concepts and Principles of Facilitative Supervision",
        "description": "Assess your understanding of supervision definitions, principles, and the shift from traditional methods.",
        "topicId": "topic-01-concepts",
        "difficulty": "beginner",
        "estimatedTime": 15,
        "passingScore": 80,
        "createdAt": "2026-01-13T12:00:00Z",
        "tags": ["supervision", "management", "principles"]
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
            "question": "Which statement best defines Facilitative Supervision?",
            "points": 10,
            "options": [
                {
                    "id": "a",
                    "text": "An act of inspecting work to find faults and punish offenders.",
                    "isCorrect": false
                },
                {
                    "id": "b",
                    "text": "A process of guiding, monitoring, and coaching to promote compliance with standards and quality care.",
                    "isCorrect": true
                },
                {
                    "id": "c",
                    "text": "A superficial process focusing on individuals rather than processes.",
                    "isCorrect": false
                },
                {
                    "id": "d",
                    "text": "Exercise of independent judgment in hiring and discharging employees.",
                    "isCorrect": false
                }
            ],
            "explanation": "Facilitative supervision is defined as a process of guiding, monitoring, and coaching workers to promote compliance with standards of practice and assure the delivery of quality care services."
        },
        {
            "id": "q2",
            "type": "matching",
            "question": "Match the function of supervision to its description:",
            "points": 15,
            "pairs": [
                {
                    "id": "p1",
                    "left": "Educative (Formative)",
                    "right": "Professional development of the supervisee"
                },
                {
                    "id": "p2",
                    "left": "Supportive (Restorative)",
                    "right": "Welfare of the supervisee"
                },
                {
                    "id": "p3",
                    "left": "Administrative (Normative)",
                    "right": "Quality assurance and managing supplies"
                }
            ],
            "explanation": "Supervision has three main functions: Educative (skills/development), Supportive (welfare/personal), and Administrative (logistics/quality assurance)."
        },
        {
            "id": "q3",
            "type": "multiple-select",
            "question": "Select all principles of Facilitative Supervision:",
            "points": 10,
            "options": [
                {
                    "id": "a",
                    "text": "Focus on the performance not the person",
                    "isCorrect": true
                },
                {
                    "id": "b",
                    "text": "Focus on the past rather than the future",
                    "isCorrect": false
                },
                {
                    "id": "c",
                    "text": "Objectivity and transparency",
                    "isCorrect": true
                },
                {
                    "id": "d",
                    "text": "Confidentiality",
                    "isCorrect": true
                },
                {
                    "id": "e",
                    "text": "Random and not time-bound",
                    "isCorrect": false
                }
            ],
            "partialCredit": true,
            "explanation": "Facilitative supervision focuses on performance, is objective, transparent, confidential, and future-oriented. Traditional supervision tends to focus on the past and is often random."
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "Traditional supervision typically focuses on processes rather than individuals.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "This is false. Traditional supervision focuses on individuals (often fault-finding), whereas Facilitative supervision focuses on processes and problem-solving."
        },
        {
            "id": "q5",
            "type": "fill-blank",
            "question": "Supervision is concerned with three main functions of management: __1__, Guiding, and __2__.",
            "points": 10,
            "blanks": [
                {
                    "id": "1",
                    "acceptedAnswers": ["Directing"],
                    "caseSensitive": false
                },
                {
                    "id": "2",
                    "acceptedAnswers": ["Controlling"],
                    "caseSensitive": false
                }
            ],
            "explanation": "The three main management functions in supervision are Directing, Guiding, and Controlling."
        },
        {
            "id": "q6",
            "type": "multiple-choice",
            "question": "How frequently should supervisory visits be conducted at health facilities and community levels?",
            "points": 5,
            "options": [
                {
                    "id": "a",
                    "text": "Quarterly",
                    "isCorrect": false
                },
                {
                    "id": "b",
                    "text": "Monthly",
                    "isCorrect": true
                },
                {
                    "id": "c",
                    "text": "Every six months",
                    "isCorrect": false
                },
                {
                    "id": "d",
                    "text": "Annually",
                    "isCorrect": false
                }
            ],
            "explanation": "Visits should occur monthly for health facilities and community levels, quarterly for sub-counties, and every six months for regional levels."
        },
        {
            "id": "q7",
            "type": "ordering",
            "question": "Arrange the steps of conducting a supervisory visit in the correct logical flow:",
            "points": 15,
            "items": [
                {
                    "id": "i1",
                    "text": "Private interview with the person in-charge",
                    "correctPosition": 1
                },
                {
                    "id": "i2",
                    "text": "Walk about (review of logistics/procedures)",
                    "correctPosition": 2
                },
                {
                    "id": "i3",
                    "text": "Technical assessment of performance",
                    "correctPosition": 3
                },
                {
                    "id": "i4",
                    "text": "Feedback of results",
                    "correctPosition": 4
                },
                {
                    "id": "i5",
                    "text": "Plan for next steps",
                    "correctPosition": 5
                }
            ],
            "explanation": "The visit generally flows from entry interview -> observation/assessment -> feedback -> planning."
        }
    ]
});