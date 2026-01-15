// File: quizzes/topic-01-quiz.js
registerQuiz("topic-01-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-01-quiz",
    "metadata": {
        "title": "Gynaecological Investigations",
        "description": "Test your knowledge on history taking, physical examinations, and diagnostic procedures.",
        "topicId": "topic-01-investigations",
        "difficulty": "beginner",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2026-01-13T10:00:00Z"
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
            "question": "In the menstrual history notation 'K 13 5/28 regular', what does the number '5' represent?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Age at menarche", "isCorrect": false },
                { "id": "b", "text": "Duration of menstrual flow in days", "isCorrect": true },
                { "id": "c", "text": "Length of the menstrual cycle", "isCorrect": false },
                { "id": "d", "text": "Number of pads used per day", "isCorrect": false }
            ],
            "explanation": "In this notation, K=Menarche age (13), 5=Duration of flow, 28=Cycle length."
        },
        {
            "id": "q2",
            "type": "multiple-select",
            "question": "Which of the following are contraindicated for Hysteroscopy? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Cervical carcinoma", "isCorrect": true },
                { "id": "b", "text": "Infertility", "isCorrect": false },
                { "id": "c", "text": "Endometrial carcinoma", "isCorrect": true },
                { "id": "d", "text": "Retained IUCD", "isCorrect": false }
            ],
            "explanation": "Hysteroscopy is contraindicated in cervical or endometrial carcinoma due to the risk of disseminating cancer cells."
        },
        {
            "id": "q3",
            "type": "matching",
            "question": "Match the diagnostic procedure with its primary purpose:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "Hysterosalpingogram", "right": "Check tubal patency using x-ray and contrast" },
                { "id": "p2", "left": "Laparoscopy", "right": "Visualise pelvic structures via sub-umbilical incision" },
                { "id": "p3", "left": "Pap Smear", "right": "Screen for cervical cancer/precancerous cells" },
                { "id": "p4", "left": "Colposcopy", "right": "Binocular inspection of the cervix with magnification" }
            ]
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "Antiseptic should be used to clean the vulva before taking a swab for culture and sensitivity.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "Antiseptic should NOT be used as it may destroy the organisms, leading to a false negative result."
        },
        {
            "id": "q5",
            "type": "fill-blank",
            "question": "A __1__ is a procedure involving the visualization of the uterine cavity using a scope, usually performed 5 days after menstruation.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["hysteroscopy"], "caseSensitive": false }
            ]
        }
    ]
});