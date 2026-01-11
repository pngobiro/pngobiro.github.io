registerQuiz("topic-01-genitalia-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-01-genitalia-quiz",
    "metadata": {
        "title": "Reproductive Anatomy Quiz",
        "description": "Assess your knowledge of the external and internal female reproductive organs.",
        "topicId": "topic-01-genitalia",
        "difficulty": "beginner",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2026-01-11T12:00:00Z"
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
            "question": "Which ligaments are considered the most important support for the uterus, giving lateral stability to the cervix?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Round ligaments", "isCorrect": false },
                { "id": "b", "text": "Transverse cervical (cardinal) ligaments", "isCorrect": true },
                { "id": "c", "text": "Broad ligaments", "isCorrect": false },
                { "id": "d", "text": "Ovarian ligaments", "isCorrect": false }
            ],
            "explanation": "The transverse cervical (cardinal) ligaments fan out from the cervix to the pelvic sidewalls and are the most important support."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "Where does fertilisation typically occur within the Fallopian tube?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Interstitial portion", "isCorrect": false },
                { "id": "b", "text": "Isthmus", "isCorrect": false },
                { "id": "c", "text": "Ampulla", "isCorrect": true },
                { "id": "d", "text": "Infundibulum", "isCorrect": false }
            ],
            "explanation": "The ampulla is the widest and longest part of the tube, and it is here that fertilisation occurs."
        },
        {
            "id": "q3",
            "type": "matching",
            "question": "Match the part of the external genitalia with its description:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "Mons Veneris", "right": "Pad of fat lying over the pubic bone" },
                { "id": "p2", "left": "Clitoris", "right": "Highly sensitive erectile structure" },
                { "id": "p3", "left": "Bartholin's Glands", "right": "Secrete mucus to lubricate the vaginal orifice" },
                { "id": "p4", "left": "Labia Minora", "right": "Thin folds of skin fusing posteriorly to form the fourchette" }
            ]
        },
        {
            "id": "q4",
            "type": "fill-blank",
            "question": "The uterus normally leans forward over the bladder (anteversion) and bends forward at the internal os, a position known as __b1__.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["anteflexion"], "caseSensitive": false }
            ],
            "explanation": "Anteflexion is the bending forward of the uterus at the level of the internal os."
        },
        {
            "id": "q5",
            "type": "multiple-choice",
            "question": "Which layer of the uterus is shed during menstruation?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Perimetrium", "isCorrect": false },
                { "id": "b", "text": "Myometrium", "isCorrect": false },
                { "id": "c", "text": "Endometrium (Basal layer)", "isCorrect": false },
                { "id": "d", "text": "Endometrium (Functional layer)", "isCorrect": true }
            ],
            "explanation": "The functional layer of the endometrium changes thickness and is shed; the basal layer remains to regenerate the lining."
        },
        {
            "id": "q6",
            "type": "image-based",
            "question": "Identify the structure labeled 'Ovary' in the diagram relations:",
            "points": 10,
            "imageUrl": "../assets/images/image-20260111-b1ffcf95.jpeg",
            "imageAlt": "Diagram of Uterus, tubes and ovaries",
            "options": [
                { "id": "a", "text": "The almond-shaped gland at the end of the tube", "isCorrect": true },
                { "id": "b", "text": "The triangular cavity", "isCorrect": false },
                { "id": "c", "text": "The cervical canal", "isCorrect": false }
            ],
            "explanation": "The ovaries are the glandular structures supported by the ovarian and infundibulopelvic ligaments."
        }
    ]
});