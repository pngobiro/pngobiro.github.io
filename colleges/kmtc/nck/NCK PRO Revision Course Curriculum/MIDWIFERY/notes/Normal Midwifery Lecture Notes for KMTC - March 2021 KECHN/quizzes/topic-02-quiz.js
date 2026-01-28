registerQuiz("topic-02-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-02-quiz",
    "metadata": {
        "title": "Physiological Changes & Disorders Quiz",
        "description": "Test your knowledge on systemic changes during pregnancy and management of minor disorders.",
        "topicId": "topic-02",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 80,
        "createdAt": "2025-01-28T12:00:00Z",
        "updatedAt": "2025-01-28T12:00:00Z",
        "tags": ["physiology", "disorders", "management"]
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
            "type": "multiple-choice",
            "question": "What is the primary cause of 'Supine Hypotension Syndrome' in pregnancy?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Decrease in blood volume", "isCorrect": false },
                { "id": "opt2", "text": "Compression of the inferior vena cava by the uterus", "isCorrect": true },
                { "id": "opt3", "text": "Increased cardiac output", "isCorrect": false },
                { "id": "opt4", "text": "Dilation of peripheral blood vessels", "isCorrect": false }
            ],
            "explanation": "Lying flat on the back causes the gravid uterus to compress the inferior vena cava, reducing venous return to the heart and causing hypotension."
        },
        {
            "id": "q2",
            "type": "multiple-select",
            "question": "Which of the following are appropriate management strategies for heartburn in pregnancy?",
            "points": 2,
            "options": [
                { "id": "opt1", "text": "Eat small, frequent meals", "isCorrect": true },
                { "id": "opt2", "text": "Lie down immediately after eating", "isCorrect": false },
                { "id": "opt3", "text": "Avoid spicy and fatty foods", "isCorrect": true },
                { "id": "opt4", "text": "Drink fluids between meals rather than with meals", "isCorrect": true }
            ],
            "explanation": "Lying down after eating exacerbates reflux. Small meals, avoiding triggers, and separating fluids from food helps reduce symptoms."
        },
        {
            "id": "q3",
            "type": "true-false",
            "question": "Physiological anemia in pregnancy occurs because plasma volume increases faster than red blood cell mass.",
            "points": 1,
            "correctAnswer": true,
            "explanation": "Plasma volume increases by ~50% while RBC mass increases by ~18-33%, causing hemodilution and a drop in Hb concentration."
        },
        {
            "id": "q4",
            "type": "matching",
            "question": "Match the skin change with its description:",
            "points": 2,
            "pairs": [
                { "id": "p1", "left": "Chloasma", "right": "Hyperpigmentation on the face (mask of pregnancy)" },
                { "id": "p2", "left": "Linea Nigra", "right": "Dark line from umbilicus to pubis" },
                { "id": "p3", "left": "Striae Gravidarum", "right": "Stretch marks on abdomen/breasts" }
            ],
            "explanation": "Chloasma affects the face, Linea Nigra is the abdominal line, and Striae Gravidarum are stretch marks."
        },
        {
            "id": "q5",
            "type": "multiple-choice",
            "question": "Why does frequency of micturition occur in the first trimester?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "The fetal head engages in the pelvis", "isCorrect": false },
                { "id": "opt2", "text": "The growing uterus in the pelvis exerts pressure on the bladder", "isCorrect": true },
                { "id": "opt3", "text": "Increased fluid intake by the mother", "isCorrect": false },
                { "id": "opt4", "text": "Kidney failure", "isCorrect": false }
            ],
            "explanation": "In early pregnancy, the growing uterus within the pelvic cavity competes for space with the bladder. This resolves in the 2nd trimester as the uterus rises out of the pelvis."
        }
    ]
});
