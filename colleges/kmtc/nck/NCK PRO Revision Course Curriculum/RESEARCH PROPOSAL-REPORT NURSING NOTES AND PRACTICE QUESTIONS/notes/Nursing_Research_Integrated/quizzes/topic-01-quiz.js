registerQuiz("topic-01-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-01-quiz",
    "metadata": {
        "title": "Topic 01: Introduction to Nursing Research",
        "description": "Assess your understanding of research definitions, characteristics, sources of knowledge, and the role of research in nursing.",
        "topicId": "topic-01",
        "difficulty": "beginner",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2024-05-20T10:00:00Z",
        "updatedAt": "2024-05-20T10:00:00Z",
        "tags": ["introduction", "definitions", "nursing-research"]
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
            "id": "t1-q1",
            "type": "multiple-choice",
            "question": "According to Burns and Grove (1999), what is the scientific definition of research?",
            "points": 1,
            "explanation": "Burns and Grove define research as 'a diligent, systematic inquiry or study to validate and refine existing knowledge and develop new knowledge'.",
            "options": [
                { "id": "opt1", "text": "A diligent, systematic inquiry to validate and refine existing knowledge and develop new knowledge.", "isCorrect": true },
                { "id": "opt2", "text": "An attempt to gain solutions to problems.", "isCorrect": false },
                { "id": "opt3", "text": "Research into aspects of professional activity concerning nurses.", "isCorrect": false },
                { "id": "opt4", "text": "A process of treating patients based on tradition.", "isCorrect": false }
            ]
        },
        {
            "id": "t1-q2",
            "type": "matching",
            "question": "Match the source of knowledge with its definition.",
            "points": 2,
            "pairs": [
                { "id": "p1", "left": "Tradition", "right": "Knowledge acquired through indoctrination, socialization, and custom." },
                { "id": "p2", "left": "Authority", "right": "Knowledge derived from experts in a specialized area." },
                { "id": "p3", "left": "Intuition", "right": "Insight into phenomena by instinct without conscious reasoning." },
                { "id": "p4", "left": "Experience", "right": "Learning through personal involvement in life events." }
            ]
        },
        {
            "id": "t1-q3",
            "type": "multiple-select",
            "question": "Which of the following are specific purposes of nursing research? (Select all that apply)",
            "points": 1,
            "explanation": "Nursing research aims to find cost-effective ways of care, provide a basis for standards/quality assurance, and defend the professional status of nursing.",
            "options": [
                { "id": "opt1", "text": "Finding ways of increasing the cost-effectiveness of nursing activities", "isCorrect": true },
                { "id": "opt2", "text": "Providing a basis for standards setting and quality assurance", "isCorrect": true },
                { "id": "opt3", "text": "Defending a professional status for nursing", "isCorrect": true },
                { "id": "opt4", "text": "Replacing medical doctors in clinical settings", "isCorrect": false }
            ]
        },
        {
            "id": "t1-q4",
            "type": "true-false",
            "question": "Cormack (1991) defines nursing research as research into those aspects of professional activity which are predominantly and appropriately the concern and responsibility of nurses.",
            "points": 1,
            "correctAnswer": true
        },
        {
            "id": "t1-q5",
            "type": "fill-blank",
            "question": "According to the notes, research is characterized by __b1__ observation and __b2__ description.",
            "points": 2,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["precise"], "caseSensitive": false },
                { "id": "b2", "acceptedAnswers": ["accurate"], "caseSensitive": false }
            ]
        }
    ]
});