registerQuiz("topic-05-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-05-quiz",
    "metadata": {
        "title": "Reporting, Dissemination & Community Action",
        "description": "Test your knowledge on writing reports, giving feedback, and mobilizing community action.",
        "topicId": "topic-05",
        "difficulty": "beginner",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2026-01-17T10:00:00Z",
        "tags": ["reporting", "action", "feedback"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate",
        "allowRetry": true,
        "showCorrectAnswers": true,
        "timeLimit": 0
    },
    "questions": [
        {
            "id": "q1-feedback-targets",
            "type": "matching",
            "question": "Match the report type to its target audience/purpose.",
            "points": 3,
            "pairs": [
                { "id": "p1", "left": "Individual Results", "right": "Patients (immediate feedback on condition)" },
                { "id": "p2", "left": "Preliminary Report", "right": "Community/Leaders (thank you, general impressions)" },
                { "id": "p3", "left": "Non-medical Report", "right": "Social/Political Leaders (to influence policy)" },
                { "id": "p4", "left": "Medical Report", "right": "Health Professionals (scientific detail)" }
            ],
            "explanation": "Different reports target different audiences: Individual->Patient, Preliminary->Community, Non-medical->Politicians, Medical->Professionals."
        },
        {
            "id": "q2-smart",
            "type": "fill-blank",
            "question": "Objectives in a report should be SMART: Specific, __m__, Attainable, Realistic, and Timely.",
            "points": 1,
            "blanks": [
                { "id": "m", "acceptedAnswers": ["measurable"], "caseSensitive": false }
            ],
            "explanation": "SMART = Specific, Measurable, Attainable, Realistic, Timely."
        },
        {
            "id": "q3-limitations",
            "type": "true-false",
            "question": "In the 'Limitations of Study' section, you should hide any errors or difficulties to make the report look better.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "You must be honest about limitations (e.g., sampling errors) to help future researchers avoid the same mistakes."
        },
        {
            "id": "q4-action-interventions",
            "type": "multiple-select",
            "question": "Which interventions are used to mobilize community action?",
            "points": 2,
            "options": [
                { "id": "opt1", "text": "Health Education", "isCorrect": true },
                { "id": "opt2", "text": "Immunisation", "isCorrect": true },
                { "id": "opt3", "text": "Environmental Improvement", "isCorrect": true },
                { "id": "opt4", "text": "Ignoring the problem", "isCorrect": false }
            ],
            "explanation": "Action involves Education, Immunization, and Environmental improvement."
        },
        {
            "id": "q5-health-ed",
            "type": "multiple-choice",
            "question": "What is a key principle of Health Education mentioned in the text?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "It cannot be handed out; it must be shared with the community.", "isCorrect": true },
                { "id": "opt2", "text": "It should be prescribed in fixed doses like medicine.", "isCorrect": false },
                { "id": "opt3", "text": "It only involves putting up posters.", "isCorrect": false },
                { "id": "opt4", "text": "It is only for literate people.", "isCorrect": false }
            ],
            "explanation": "Health education requires sharing and dialogue, not just 'dosing' people with information."
        },
        {
            "id": "q6-report-sections",
            "type": "ordering",
            "question": "Order these sections of a Medical Report.",
            "points": 2,
            "items": [
                { "id": "s1", "text": "Title & Table of Contents", "correctPosition": 1 },
                { "id": "s2", "text": "Introduction & Objectives", "correctPosition": 2 },
                { "id": "s3", "text": "Materials and Methods", "correctPosition": 3 },
                { "id": "s4", "text": "Results / Findings", "correctPosition": 4 },
                { "id": "s5", "text": "Conclusions & Recommendations", "correctPosition": 5 }
            ],
            "explanation": "Standard report structure: Title -> Intro -> Methods -> Results -> Conclusions."
        },
        {
            "id": "q7-feedback-timing",
            "type": "multiple-choice",
            "question": "When should 'Individual Results' be given to a patient?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Immediately (at the time of examination)", "isCorrect": true },
                { "id": "opt2", "text": "After 6 months", "isCorrect": false },
                { "id": "opt3", "text": "Only after the full medical report is published", "isCorrect": false },
                { "id": "opt4", "text": "Never", "isCorrect": false }
            ],
            "explanation": "Individual results, especially if treatment is needed, should be given immediately."
        },
        {
            "id": "q8-appendices",
            "type": "multiple-select",
            "question": "What items are typically found in the Appendices of a report?",
            "points": 2,
            "options": [
                { "id": "opt1", "text": "Copy of the questionnaire used", "isCorrect": true },
                { "id": "opt2", "text": "Statistical tables", "isCorrect": true },
                { "id": "opt3", "text": "Maps", "isCorrect": true },
                { "id": "opt4", "text": "The author's biography", "isCorrect": false }
            ],
            "explanation": "Appendices contain supplementary info like questionnaires, detailed tables, and maps."
        },
        {
            "id": "q9-acronym",
            "type": "short-answer",
            "question": "What is the term for a contraction formed by taking the first letter of several words (e.g., HIV)?",
            "points": 1,
            "keywords": ["acronym"],
            "modelAnswer": "Acronym",
            "explanation": "An acronym (like HIV, WHO) is formed from the first letters of words."
        },
        {
            "id": "q10-community-structures",
            "type": "multiple-choice",
            "question": "Which community structures are established to help care for health?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Village Health Committees", "isCorrect": true },
                { "id": "opt2", "text": "Political Rallies", "isCorrect": false },
                { "id": "opt3", "text": "Police Stations", "isCorrect": false },
                { "id": "opt4", "text": "Tax Collection Offices", "isCorrect": false }
            ],
            "explanation": "Village Health Committees and Community Health Workers are specific structures for health care."
        }
    ]
});