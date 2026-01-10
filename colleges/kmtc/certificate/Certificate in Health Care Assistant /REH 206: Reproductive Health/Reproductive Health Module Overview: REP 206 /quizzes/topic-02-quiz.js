registerQuiz("topic-02-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-02-quiz",
    "metadata": {
        "title": "Physiology of Reproduction Quiz",
        "description": "Assess your understanding of the menstrual cycle and menopause.",
        "topicId": "topic-02-physiology-reproduction",
        "difficulty": "intermediate",
        "estimatedTime": 10,
        "passingScore": 80,
        "createdAt": "2026-01-10T10:00:00Z"
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
            "question": "Arrange the phases of the menstrual cycle in chronological order:",
            "points": 20,
            "items": [
                { "id": "i1", "text": "Menstrual Phase", "correctPosition": 1 },
                { "id": "i2", "text": "Follicular Phase", "correctPosition": 2 },
                { "id": "i3", "text": "Ovulation Phase", "correctPosition": 3 },
                { "id": "i4", "text": "Luteal Phase", "correctPosition": 4 }
            ],
            "explanation": "The cycle begins with bleeding (Menstrual), followed by egg maturation (Follicular), release of the egg (Ovulation), and preparation of the uterus (Luteal)."
        },
        {
            "id": "q2",
            "type": "fill-blank",
            "question": "Ovulation typically occurs on day __1__ of a 28-day cycle.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["14", "fourteen"], "caseSensitive": false }
            ],
            "explanation": "On the 14th day, the pituitary gland secretes a hormone (LH surge) causing the release of the egg."
        },
        {
            "id": "q3",
            "type": "true-false",
            "question": "Menopause is clinically diagnosed after a woman has gone 6 months without a menstrual period.",
            "points": 10,
            "correctAnswer": false,
            "explanation": "Menopause is diagnosed after a woman has gone 12 months without a menstrual period."
        },
        {
            "id": "q4",
            "type": "multiple-select",
            "question": "Which of the following are common symptoms of menopause? (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Hot flashes", "isCorrect": true },
                { "id": "b", "text": "Vaginal dryness", "isCorrect": true },
                { "id": "c", "text": "Increased bone density", "isCorrect": false },
                { "id": "d", "text": "Night sweats/Sleep trouble", "isCorrect": true }
            ],
            "partialCredit": true,
            "explanation": "Estrogen loss leads to hot flashes, dryness, and sleep trouble. It causes DECREASED bone density (osteoporosis), not increased."
        },
        {
            "id": "q5",
            "type": "multiple-choice",
            "question": "Which phase involves the shedding of the uterine lining?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Follicular Phase", "isCorrect": false },
                { "id": "b", "text": "Luteal Phase", "isCorrect": false },
                { "id": "c", "text": "Menstrual Phase", "isCorrect": true },
                { "id": "d", "text": "Ovulatory Phase", "isCorrect": false }
            ],
            "explanation": "The Menstrual phase (Days 1-5) is defined by the shedding of the endometrium (menstruation)."
        }
    ]
});