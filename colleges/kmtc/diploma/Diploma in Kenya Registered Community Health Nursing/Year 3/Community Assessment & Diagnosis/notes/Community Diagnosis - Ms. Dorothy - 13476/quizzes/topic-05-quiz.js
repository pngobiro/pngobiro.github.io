registerQuiz("topic-05-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-05-quiz",
    "metadata": {
        "title": "Topic 05: Reporting and Action",
        "description": "Assess your understanding of feedback types, report writing, and community action.",
        "topicId": "topic-05",
        "difficulty": "intermediate",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2025-12-26T12:00:00Z",
        "tags": ["reporting", "feedback", "action", "smart-goals"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate",
        "allowRetry": true
    },
    "questions": [
        {
            "id": "q1",
            "type": "matching",
            "question": "Match the type of feedback/report to its description.",
            "points": 10,
            "pairs": [
                { "id": "p1", "left": "Preliminary Report", "right": "Given soon after fieldwork to thank the community" },
                { "id": "p2", "left": "Non-Medical Report", "right": "Less scientific, used as a social/political tool" },
                { "id": "p3", "left": "Medical Report", "right": "Detailed scientific report with full analysis" },
                { "id": "p4", "left": "Individual Results", "right": "Given to survey participants and those who gave specimens" }
            ],
            "explanation": "Preliminary is immediate; Non-medical is for laypeople; Medical is scientific; Individual is personal feedback."
        },
        {
            "id": "q2",
            "type": "fill-blank",
            "question": "In the SMART acronym for objectives, 'T' stands for __b1__.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["timely"], "caseSensitive": false }
            ],
            "explanation": "SMART: Specific, Measurable, Attainable, Realistic, Timely."
        },
        {
            "id": "q3",
            "type": "ordering",
            "question": "Order these sections of a Medical Report.",
            "points": 10,
            "items": [
                { "id": "i1", "text": "Title", "correctPosition": 1 },
                { "id": "i2", "text": "Introduction", "correctPosition": 2 },
                { "id": "i3", "text": "Materials and Methods", "correctPosition": 3 },
                { "id": "i4", "text": "Results/Findings", "correctPosition": 4 },
                { "id": "i5", "text": "Recommendations and Conclusions", "correctPosition": 5 }
            ],
            "explanation": "Standard report structure: Title -> Intro -> Methods -> Results -> Conclusions."
        },
        {
            "id": "q4",
            "type": "multiple-select",
            "question": "How can you mobilize the community for action? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Health Education", "isCorrect": true },
                { "id": "b", "text": "Immunization", "isCorrect": true },
                { "id": "c", "text": "Environmental Improvement", "isCorrect": true },
                { "id": "d", "text": "Promoting Primary Health Care", "isCorrect": true }
            ],
            "explanation": "All listed options are valid interventions for mobilizing community action."
        },
        {
            "id": "q5",
            "type": "true-false",
            "question": "The community must take the initiative to bring about necessary changes.",
            "points": 5,
            "correctAnswer": true,
            "explanation": "True. Sustainable change requires the community to take action and initiative."
        },
        {
            "id": "q6",
            "type": "multiple-choice",
            "question": "Who is entitled to feedback after a survey?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Only the doctors", "isCorrect": false },
                { "id": "b", "text": "Only the government officials", "isCorrect": false },
                { "id": "c", "text": "All individuals in the community concerned with health", "isCorrect": true },
                { "id": "d", "text": "No one", "isCorrect": false }
            ],
            "explanation": "Everyone concerned with the health of the people, especially those who cooperated, deserves feedback."
        },
        {
            "id": "q7",
            "type": "multiple-choice",
            "question": "What is the purpose of a Non-Medical Report?",
            "points": 10,
            "options": [
                { "id": "a", "text": "To confuse the community", "isCorrect": false },
                { "id": "b", "text": "To serve as a social or political tool for improvement", "isCorrect": true },
                { "id": "c", "text": "To publish in a scientific journal", "isCorrect": false },
                { "id": "d", "text": "To keep the results secret", "isCorrect": false }
            ],
            "explanation": "Non-medical reports are less scientific and used to shed light on improvements needed (political/social tool)."
        },
        {
            "id": "q8",
            "type": "fill-blank",
            "question": "Feedback means giving __b1__ about how well or badly a person is doing.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["comments"], "caseSensitive": false }
            ],
            "explanation": "Feedback is defined as giving comments to help someone do better."
        },
        {
            "id": "q9",
            "type": "multiple-select",
            "question": "Which of these are components of SMART objectives? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Specific", "isCorrect": true },
                { "id": "b", "text": "Measurable", "isCorrect": true },
                { "id": "c", "text": "Secret", "isCorrect": false },
                { "id": "d", "text": "Realistic", "isCorrect": true }
            ],
            "explanation": "SMART objectives must be Specific, Measurable, and Realistic (among others)."
        },
        {
            "id": "q10",
            "type": "true-false",
            "question": "A preliminary report is given long after the survey is completed and analyzed.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "False. It is given SOON after fieldwork to thank the community and share general impressions."
        }
    ]
});