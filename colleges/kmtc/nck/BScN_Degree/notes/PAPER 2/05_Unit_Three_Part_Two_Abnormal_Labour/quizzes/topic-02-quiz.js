registerQuiz("topic-02-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-02-quiz",
    "metadata": {
        "title": "Abnormal Uterine Action Quiz",
        "description": "Assess your understanding of hypotonic, hypertonic, and incoordinate uterine actions.",
        "topicId": "topic-02",
        "difficulty": "intermediate",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2026-01-12T00:00:00Z"
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "q1",
            "type": "fill-blank",
            "question": "A localized spasm of a ring of muscle fibres near the junction of the upper and lower uterine segment is called __b1__.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["constriction ring dystocia", "constriction ring"], "caseSensitive": false }
            ],
            "explanation": "Constriction ring dystocia is a localized spasm. If it occurs in the third stage, it is called an hourglass constriction."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "Which of the following defines 'Precipitate Labour'?",
            "points": 5,
            "options": [
                { "id": "a", "text": "Labour lasting more than 24 hours", "isCorrect": false },
                { "id": "b", "text": "Abnormally rapid labour (delivery within 1 hour)", "isCorrect": true },
                { "id": "c", "text": "Labour with weak, infrequent contractions", "isCorrect": false },
                { "id": "d", "text": "Labour that fails to start spontaneously", "isCorrect": false }
            ],
            "explanation": "Precipitate labour is characterized by strong, frequent contractions resulting in delivery often within an hour."
        },
        {
            "id": "q3",
            "type": "matching",
            "question": "Match the type of cervical dystocia to its description:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "Rigid Cervix", "right": "Fails to dilate despite normal contractions; feels thin/tight" },
                { "id": "p2", "left": "Annular Detachment", "right": "Ischaemia causes necrosed ring to detach" },
                { "id": "p3", "left": "Oedematous Anterior Lip", "right": "Nipped between head and pelvic brim; swollen" }
            ],
            "explanation": "These are the three specific types of cervical dystocia described in the text."
        },
        {
            "id": "q4",
            "type": "multiple-select",
            "question": "What are the appropriate management steps for Hypotonic Uterine Action? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Exclude Cephalopelvic Disproportion (CPD)", "isCorrect": true },
                { "id": "b", "text": "Administer enema to stimulate contractions", "isCorrect": true },
                { "id": "c", "text": "Perform immediate Caesarean section in all cases", "isCorrect": false },
                { "id": "d", "text": "Monitor vital signs and foetal heart rate", "isCorrect": true }
            ],
            "partialCredit": true,
            "explanation": "Management involves ruling out CPD, stimulation (enema/oxytocin), and monitoring. C-section is reserved for distress or failure to progress."
        },
        {
            "id": "q5",
            "type": "true-false",
            "question": "In 'Colicky Uterus', the mother typically experiences no backache and contractions are very effective.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "In Colicky Uterus, there is intense cramp-like pain, the uterus is tender, contractions are NOT effective, and the mother may not experience severe backache (but the effectiveness part is false)."
        }
    ]
});