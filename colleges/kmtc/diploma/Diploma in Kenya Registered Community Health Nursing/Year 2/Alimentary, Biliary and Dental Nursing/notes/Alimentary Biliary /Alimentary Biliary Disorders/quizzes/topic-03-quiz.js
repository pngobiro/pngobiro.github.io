registerQuiz("topic-03-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-03-quiz",
    "metadata": {
        "title": "Topic 03: Gastritis",
        "description": "Test knowledge on acute and chronic gastritis causes and management.",
        "topicId": "topic-03-gastritis",
        "difficulty": "intermediate",
        "estimatedTime": 12,
        "passingScore": 70,
        "createdAt": "2025-12-25T00:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-select",
            "question": "Which of the following are common causes of Acute Gastritis? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Overuse of Aspirin/NSAIDS", "isCorrect": true },
                { "id": "b", "text": "Excessive alcohol intake", "isCorrect": true },
                { "id": "c", "text": "Pernicious anaemia", "isCorrect": false },
                { "id": "d", "text": "Highly seasoned foods", "isCorrect": true }
            ],
            "explanation": "Acute gastritis is caused by dietary indiscretion, NSAIDs, alcohol, bile reflux, or radiation. Pernicious anaemia is associated with chronic gastritis."
        },
        {
            "id": "q2",
            "type": "fill-blank",
            "question": "Chronic gastritis caused by autoimmune disease (Pernicious anaemia) involves the malabsorption of Vitamin __1__.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["B12", "b12", "B-12"], "caseSensitive": false }
            ],
            "explanation": "Autoimmune gastritis affects parietal cells, reducing Intrinsic Factor needed for Vitamin B12 absorption."
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "What is a 'Bilroth 1' surgical procedure?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Anastomosis of stomach to jejunum", "isCorrect": false },
                { "id": "b", "text": "Anastomosis of stomach to duodenum", "isCorrect": true },
                { "id": "c", "text": "Total gastrectomy", "isCorrect": false },
                { "id": "d", "text": "Vagotomy only", "isCorrect": false }
            ],
            "explanation": "Bilroth 1 is a gastroduodenostomy (stomach to duodenum). Bilroth 2 is a gastrojejunostomy."
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "For gastritis caused by strong acids or alkalis, you should immediately induce vomiting (emetics).",
            "points": 10,
            "correctAnswer": false,
            "explanation": "In extreme corrosion, avoid emetics and lavage as they can cause perforation or damage to the oesophagus."
        }
    ]
});
