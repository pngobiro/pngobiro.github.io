registerQuiz("topic-01-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-01-quiz",
    "metadata": {
        "title": "Concepts & Anatomy Quiz",
        "description": "Test your knowledge of reproductive health definitions and human reproductive anatomy.",
        "topicId": "topic-01-concepts-anatomy",
        "difficulty": "beginner",
        "estimatedTime": 10,
        "passingScore": 80,
        "createdAt": "2026-01-10T10:00:00Z"
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
            "question": "Which of the following best defines 'Reproductive Health'?",
            "points": 10,
            "options": [
                { "id": "a", "text": "The absence of disease or infirmity in the genital tract.", "isCorrect": false },
                { "id": "b", "text": "A state of complete physical, mental and social well-being in all matters relating to the reproductive system.", "isCorrect": true },
                { "id": "c", "text": "The ability to have children whenever desired.", "isCorrect": false },
                { "id": "d", "text": "Access to family planning services only.", "isCorrect": false }
            ],
            "explanation": "Reproductive health implies that people are able to have a satisfying and safe sex life and have the capability to reproduce and the freedom to decide if, when and how often to do so."
        },
        {
            "id": "q2",
            "type": "image-based",
            "question": "Identify the Ampulla of the uterine tube, which is the most common site of fertilization:",
            "points": 15,
            "imageUrl": "../assets/images/image-20260110-b1a6c69e.jpeg",
            "imageAlt": "Internal female reproductive organs",
            "hotspots": [
                { "id": "h1", "x": 75, "y": 25, "radius": 10, "label": "Ampulla", "isCorrect": true },
                { "id": "h2", "x": 60, "y": 30, "radius": 10, "label": "Isthmus", "isCorrect": false },
                { "id": "h3", "x": 88, "y": 38, "radius": 10, "label": "Fimbriae", "isCorrect": false },
                { "id": "h4", "x": 48, "y": 55, "radius": 15, "label": "Uterus Body", "isCorrect": false }
            ],
            "explanation": "The ampulla is the longest and widest part of the uterine tube and is where fertilization typically occurs."
        },
        {
            "id": "q3",
            "type": "matching",
            "question": "Match the male reproductive structure to its function:",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Epididymis", "right": "Stores and matures sperm" },
                { "id": "p2", "left": "Seminal Vesicles", "right": "Produces fructose-rich fluid" },
                { "id": "p3", "left": "Prostate Gland", "right": "Produces milky fluid to nourish sperm" },
                { "id": "p4", "left": "Testes", "right": "Produces sperm and testosterone" }
            ],
            "explanation": "Testes produce sperm; Epididymis stores them; Seminal vesicles provide energy; Prostate adds fluid."
        },
        {
            "id": "q4",
            "type": "fill-blank",
            "question": "The dark-colored circle of skin surrounding the nipple is called the __1__.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["areola"], "caseSensitive": false }
            ],
            "explanation": "The areola contains sebaceous glands to keep the skin conditioned."
        },
        {
            "id": "q5",
            "type": "multiple-choice",
            "question": "Which hormone stimulates the production of testosterone in males?",
            "points": 10,
            "options": [
                { "id": "a", "text": "FSH", "isCorrect": false },
                { "id": "b", "text": "LH (Luteinizing Hormone)", "isCorrect": true },
                { "id": "c", "text": "Oxytocin", "isCorrect": false },
                { "id": "d", "text": "Progesterone", "isCorrect": false }
            ],
            "explanation": "LH stimulates the interstitial cells of Leydig to produce testosterone. FSH is necessary for spermatogenesis."
        }
    ]
});