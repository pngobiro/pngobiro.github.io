registerQuiz("topic-02-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-02-quiz",
    "metadata": {
        "title": "Assessment & Diagnostics Quiz",
        "topicId": "topic-02",
        "difficulty": "intermediate",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2025-12-28T12:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "A patient has a Glasgow Coma Scale (GCS) score of 3. How should the nurse interpret this?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Mild neurological impairment", "isCorrect": false },
                { "id": "b", "text": "Fully responsive", "isCorrect": false },
                { "id": "c", "text": "Severe impairment (deep coma)", "isCorrect": true },
                { "id": "d", "text": "Moderate disability", "isCorrect": false }
            ],
            "explanation": "The lowest possible GCS score is 3, indicating deep coma/severe impairment. The highest is 15."
        },
        {
            "id": "q2",
            "type": "fill-blank",
            "question": "The inability to interpret or recognize objects seen through the special senses is known as __1__.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["agnosia"], "caseSensitive": false }
            ],
            "explanation": "Agnosia is the loss of ability to recognize objects, persons, sounds, shapes, or smells."
        },
        {
            "id": "q3",
            "type": "multiple-select",
            "question": "Which of the following are components of the Glasgow Coma Scale? (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Eye Opening", "isCorrect": true },
                { "id": "b", "text": "Pupillary Reaction", "isCorrect": false },
                { "id": "c", "text": "Best Motor Response", "isCorrect": true },
                { "id": "d", "text": "Best Verbal Response", "isCorrect": true },
                { "id": "e", "text": "Vital Signs", "isCorrect": false }
            ],
            "partialCredit": true
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "A lumbar puncture is safe to perform on a patient showing signs of increased intracranial pressure (ICP).",
            "points": 10,
            "correctAnswer": false,
            "explanation": "Lumbar puncture is CONTRAINDICATED in increased ICP due to the risk of brain herniation."
        },
        {
            "id": "q5",
            "type": "matching",
            "question": "Match the diagnostic test with its description:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "EEG", "right": "Records electrical activity of the brain" },
                { "id": "p2", "left": "Cerebral Angiography", "right": "X-ray of circulation using contrast dye" },
                { "id": "p3", "left": "MRI", "right": "Uses magnetic fields to image tissue" },
                { "id": "p4", "left": "Myelography", "right": "X-ray of spinal subarachnoid space" }
            ]
        },
        {
            "id": "q6",
            "type": "multiple-choice",
            "question": "When testing the Babinski reflex in an adult, what is considered an abnormal (positive) finding?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Curling of the toes", "isCorrect": false },
                { "id": "b", "text": "No movement of the toes", "isCorrect": false },
                { "id": "c", "text": "Extension (fanning) of the toes", "isCorrect": true },
                { "id": "d", "text": "Withdrawal of the foot", "isCorrect": false }
            ],
            "explanation": "In adults, the toes should curl (plantar flexion). Fanning/extension (dorsiflexion) is pathological (Babinski sign) indicating CNS damage."
        }
    ]
});