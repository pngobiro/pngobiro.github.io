registerQuiz("topic-03-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-03-quiz",
    "metadata": {
        "title": "Antenatal Care (FANC) Quiz",
        "description": "Check your knowledge on Focused Antenatal Care objectives, schedules, and danger signs.",
        "topicId": "topic-03",
        "difficulty": "intermediate",
        "estimatedTime": 12,
        "passingScore": 80,
        "createdAt": "2025-01-28T12:00:00Z",
        "updatedAt": "2025-01-28T12:00:00Z",
        "tags": ["FANC", "antenatal", "danger-signs"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "q1",
            "type": "ordering",
            "question": "Order the standard 4-visit FANC schedule correctly:",
            "points": 2,
            "items": [
                { "id": "i1", "text": "First Visit (< 16 weeks)", "correctPosition": 1 },
                { "id": "i2", "text": "Second Visit (16 - 28 weeks)", "correctPosition": 2 },
                { "id": "i3", "text": "Third Visit (28 - 32 weeks)", "correctPosition": 3 },
                { "id": "i4", "text": "Fourth Visit (32 - 40 weeks)", "correctPosition": 4 }
            ],
            "explanation": "The schedule is designed to monitor critical milestones: early booking (<16w), mid-pregnancy (16-28w), early 3rd trimester (28-32w), and near term (32-40w)."
        },
        {
            "id": "q2",
            "type": "multiple-select",
            "question": "Which of the following are objectives of Focused Antenatal Care?",
            "points": 2,
            "options": [
                { "id": "opt1", "text": "Early detection and treatment of problems", "isCorrect": true },
                { "id": "opt2", "text": "Birth preparedness and complication readiness", "isCorrect": true },
                { "id": "opt3", "text": "Admission of the mother for the entire pregnancy", "isCorrect": false },
                { "id": "opt4", "text": "Prevention of complications (e.g., Tetanus Toxoid, IPT)", "isCorrect": true }
            ],
            "explanation": "FANC aims to detect problems early, prevent complications, and prepare for birth. Admission is not a standard objective unless medically indicated."
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "When should the second dose of Tetanus Toxoid (TT2) be given?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "At first contact", "isCorrect": false },
                { "id": "opt2", "text": "At least 4 weeks after TT1", "isCorrect": true },
                { "id": "opt3", "text": "6 months after TT1", "isCorrect": false },
                { "id": "opt4", "text": "1 year after TT1", "isCorrect": false }
            ],
            "explanation": "TT2 is given at least 4 weeks after the first dose to ensure immune response."
        },
        {
            "id": "q4",
            "type": "multiple-select",
            "question": "Identify the Danger Signs during pregnancy from the list below:",
            "points": 2,
            "options": [
                { "id": "opt1", "text": "Vaginal bleeding", "isCorrect": true },
                { "id": "opt2", "text": "Severe headache and blurred vision", "isCorrect": true },
                { "id": "opt3", "text": "Frequent urination in first trimester", "isCorrect": false },
                { "id": "opt4", "text": "Reduced fetal movements", "isCorrect": true },
                { "id": "opt5", "text": "Convulsions/fits", "isCorrect": true }
            ],
            "explanation": "Frequency of urination is a minor disorder. Bleeding, severe headache (preeclampsia), reduced movement, and convulsions are life-threatening danger signs."
        },
        {
            "id": "q5",
            "type": "fill-blank",
            "question": "During the first abdominal examination, the fundal height is measured to estimate the __b1__ age of the fetus.",
            "points": 1,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["gestational", "gestation"], "caseSensitive": false }
            ],
            "explanation": "Fundal height is a key clinical method for estimating gestational age and monitoring fetal growth."
        }
    ]
});
