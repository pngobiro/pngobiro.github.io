registerQuiz("comprehensive-exam", {
    "schemaVersion": "1.0",
    "quizId": "comprehensive-exam",
    "metadata": {
        "title": "Comprehensive Final Exam: Facilitative Supervision",
        "description": "A comprehensive assessment covering all units of FSC 407: Concepts, Mentorship, Coaching, Counseling, and Conflict Resolution.",
        "examType": "comprehensive",
        "topicsCovered": [
            "topic-01-concepts",
            "topic-02-mentorship",
            "topic-03-coaching",
            "topic-04-counseling",
            "topic-05-conflict-resolution"
        ],
        "difficulty": "advanced",
        "estimatedTime": 45,
        "passingScore": 75,
        "createdAt": "2026-01-13T12:00:00Z",
        "tags": ["final", "exam", "supervision", "management"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "end",
        "allowRetry": true,
        "showCorrectAnswers": true,
        "timeLimit": 2700
    },
    "questions": [
        {
            "id": "comp-q1",
            "type": "multiple-choice",
            "topicId": "topic-01-concepts",
            "topicName": "Concepts & Principles",
            "question": "Which of the following best differentiates Facilitative Supervision from Traditional Supervision?",
            "points": 5,
            "options": [
                {
                    "id": "a",
                    "text": "It focuses on the individual rather than the process.",
                    "isCorrect": false
                },
                {
                    "id": "b",
                    "text": "It is often punitive and critical.",
                    "isCorrect": false
                },
                {
                    "id": "c",
                    "text": "It emphasizes the past rather than the future.",
                    "isCorrect": false
                },
                {
                    "id": "d",
                    "text": "It focuses on identification and resolution of problems to optimize resources.",
                    "isCorrect": true
                }
            ],
            "explanation": "Facilitative supervision promotes quality by strengthening relationships and focusing on problem resolution and processes, whereas traditional supervision is often punitive, fault-finding, and focuses on the individual."
        },
        {
            "id": "comp-q2",
            "type": "matching",
            "topicId": "topic-01-concepts",
            "topicName": "Concepts & Principles",
            "question": "Match the function of supervision with its description:",
            "points": 10,
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
            "explanation": "Supervision has three main functions: Educative (Formative) focuses on skills, Supportive (Restorative) focuses on welfare, and Administrative (Normative) focuses on quality assurance and logistics."
        },
        {
            "id": "comp-q3",
            "type": "ordering",
            "topicId": "topic-03-coaching",
            "topicName": "Coaching",
            "question": "Arrange the steps of effective coaching in the correct order:",
            "points": 10,
            "items": [
                {
                    "id": "i1",
                    "text": "Motivate the staff to gain commitment",
                    "correctPosition": 1
                },
                {
                    "id": "i2",
                    "text": "Demonstrate competently and explain the new behavior",
                    "correctPosition": 2
                },
                {
                    "id": "i3",
                    "text": "Give opportunity to practice under supervision",
                    "correctPosition": 3
                },
                {
                    "id": "i4",
                    "text": "Provide constructive feedback",
                    "correctPosition": 4
                },
                {
                    "id": "i5",
                    "text": "Allow gradual transfer of skills",
                    "correctPosition": 5
                }
            ],
            "explanation": "The coaching process moves from motivation -> demonstration -> practice -> feedback -> transfer of skills."
        },
        {
            "id": "comp-q4",
            "type": "multiple-select",
            "topicId": "topic-04-counseling",
            "topicName": "Counseling",
            "question": "Select all statements that accurately describe what counseling is NOT:",
            "points": 5,
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
                    "text": "Attempting to sort out the problems of the client",
                    "isCorrect": true
                },
                {
                    "id": "d",
                    "text": "Facilitating choice",
                    "isCorrect": false
                },
                {
                    "id": "e",
                    "text": "Getting emotionally involved with the client",
                    "isCorrect": true
                }
            ],
            "partialCredit": true,
            "explanation": "Counseling facilitates choice but does NOT involve giving advice, being judgmental, sorting out problems for the client, or getting emotionally involved."
        },
        {
            "id": "comp-q5",
            "type": "fill-blank",
            "topicId": "topic-04-counseling",
            "topicName": "Counseling",
            "question": "In the context of basic counseling skills, the acronym SOLER stands for: Squarely face the client, __1__ posture, __2__ in on occasion, __3__ contact, and Relaxed behavior.",
            "points": 10,
            "blanks": [
                {
                    "id": "1",
                    "acceptedAnswers": [
                        "Open"
                    ],
                    "caseSensitive": false
                },
                {
                    "id": "2",
                    "acceptedAnswers": [
                        "Lean"
                    ],
                    "caseSensitive": false
                },
                {
                    "id": "3",
                    "acceptedAnswers": [
                        "Eye"
                    ],
                    "caseSensitive": false
                }
            ],
            "explanation": "SOLER: Squarely face client, Open posture, Lean in, Eye contact, Relaxed behavior."
        },
        {
            "id": "comp-q6",
            "type": "ordering",
            "topicId": "topic-02-mentorship",
            "topicName": "Mentorship",
            "question": "Place the stages of mentoring in the correct chronological order:",
            "points": 10,
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
            "explanation": "Mentorship evolves through: Connection -> Relationship Building -> Assessment/Core work -> Separation/Redefining."
        },
        {
            "id": "comp-q7",
            "type": "multiple-choice",
            "topicId": "topic-05-conflict-resolution",
            "topicName": "Conflict Resolution",
            "question": "Which of the following is NOT a principle of conflict resolution?",
            "points": 5,
            "options": [
                {
                    "id": "a",
                    "text": "Define interests—separate issues and emotions",
                    "isCorrect": false
                },
                {
                    "id": "b",
                    "text": "Focus on the person, not the exchange",
                    "isCorrect": true
                },
                {
                    "id": "c",
                    "text": "Emphasize legitimacy",
                    "isCorrect": false
                },
                {
                    "id": "d",
                    "text": "Resist aggression",
                    "isCorrect": false
                }
            ],
            "explanation": "A key principle is to 'Focus on an exchange' and 'Focus on the performance not the person'. Separating issues from emotions is correct."
        },
        {
            "id": "comp-q8",
            "type": "multiple-choice",
            "topicId": "topic-03-coaching",
            "topicName": "Coaching",
            "question": "What is a characteristic of coaching that distinguishes it from general supervision?",
            "points": 5,
            "options": [
                {
                    "id": "a",
                    "text": "It takes place outside the formal working setup",
                    "isCorrect": false
                },
                {
                    "id": "b",
                    "text": "The relationship is infinite and lasts forever",
                    "isCorrect": false
                },
                {
                    "id": "c",
                    "text": "It focuses on developing individuals within their current jobs",
                    "isCorrect": true
                },
                {
                    "id": "d",
                    "text": "It focuses on past failures only",
                    "isCorrect": false
                }
            ],
            "explanation": "Coaching focuses on developing individuals within their current jobs and ensuring they can perform tasks to the best of their abilities."
        },
        {
            "id": "comp-q9",
            "type": "matching",
            "topicId": "topic-04-counseling",
            "topicName": "Counseling",
            "question": "Match the stage of Egan's Model to its core question:",
            "points": 10,
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
            "explanation": "Egan's model moves from the Present (What is going on?), to the Preferred (What do I want?), to Action (How do I get there?)."
        },
        {
            "id": "comp-q10",
            "type": "multiple-select",
            "topicId": "topic-01-concepts",
            "topicName": "Concepts & Principles",
            "question": "Which of the following are listed as qualities of a good facilitative supervisor?",
            "points": 5,
            "options": [
                {
                    "id": "a",
                    "text": "Ability to inspire and establish trust",
                    "isCorrect": true
                },
                {
                    "id": "b",
                    "text": "Focuses on finding faults to correct behavior",
                    "isCorrect": false
                },
                {
                    "id": "c",
                    "text": "Flexibility and openness to new ideas",
                    "isCorrect": true
                },
                {
                    "id": "d",
                    "text": "Empathy",
                    "isCorrect": true
                }
            ],
            "partialCredit": true,
            "explanation": "Good supervisors are inspiring, flexible, open, and empathetic. Fault-finding is a trait of traditional supervision."
        },
        {
            "id": "comp-q11",
            "type": "true-false",
            "topicId": "topic-02-mentorship",
            "topicName": "Mentorship",
            "question": "Mentoring relationships always take place within a direct line manager—employee relationship.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "A characteristic of mentorship is that it takes place OUTSIDE a line manager—employee relationship."
        },
        {
            "id": "comp-q12",
            "type": "fill-blank",
            "topicId": "topic-01-concepts",
            "topicName": "Concepts & Principles",
            "question": "Supervision is concerned with three main functions of management: __1__, Guiding, and __2__.",
            "points": 10,
            "blanks": [
                {
                    "id": "1",
                    "acceptedAnswers": [
                        "Directing"
                    ],
                    "caseSensitive": false
                },
                {
                    "id": "2",
                    "acceptedAnswers": [
                        "Controlling"
                    ],
                    "caseSensitive": false
                }
            ],
            "explanation": "Supervision functions include Directing, Guiding, and Controlling."
        },
        {
            "id": "comp-q13",
            "type": "multiple-choice",
            "topicId": "topic-05-conflict-resolution",
            "topicName": "Conflict Resolution",
            "question": "When assessing options for conflict resolution, which of the following is NOT typically listed as a method?",
            "points": 5,
            "options": [
                {
                    "id": "a",
                    "text": "Negotiation",
                    "isCorrect": false
                },
                {
                    "id": "b",
                    "text": "Mediation",
                    "isCorrect": false
                },
                {
                    "id": "c",
                    "text": "Suppression",
                    "isCorrect": true
                },
                {
                    "id": "d",
                    "text": "Arbitration",
                    "isCorrect": false
                }
            ],
            "explanation": "Options include negotiation, conflict coaching, facilitated discussions, mediation, arbitration and litigation. Suppression is not an effective resolution method."
        },
        {
            "id": "comp-q14",
            "type": "multiple-choice",
            "topicId": "topic-02-mentorship",
            "topicName": "Mentorship",
            "question": "In which type of mentoring does the mentor work with 4-6 mentees at one time?",
            "points": 5,
            "options": [
                {
                    "id": "a",
                    "text": "One on one mentoring",
                    "isCorrect": false
                },
                {
                    "id": "b",
                    "text": "Group mentoring",
                    "isCorrect": true
                },
                {
                    "id": "c",
                    "text": "Resource based mentoring",
                    "isCorrect": false
                },
                {
                    "id": "d",
                    "text": "Executive mentoring",
                    "isCorrect": false
                }
            ],
            "explanation": "Group mentoring involves a mentor working with 4-6 mentees, usually meeting once or twice a month."
        },
        {
            "id": "comp-q15",
            "type": "multiple-choice",
            "topicId": "topic-03-coaching",
            "topicName": "Coaching",
            "question": "Which of the following is something an effective supervisor coach should avoid?",
            "points": 5,
            "options": [
                {
                    "id": "a",
                    "text": "Listening more than talking",
                    "isCorrect": false
                },
                {
                    "id": "b",
                    "text": "Giving solutions",
                    "isCorrect": true
                },
                {
                    "id": "c",
                    "text": "Remaining curious rather than defensive",
                    "isCorrect": false
                },
                {
                    "id": "d",
                    "text": "Establish a trusting relationship",
                    "isCorrect": false
                }
            ],
            "explanation": "Coaches should avoid giving solutions because the goal is to help the employee improve their own judgment and skill to succeed on their own."
        }
    ]
});