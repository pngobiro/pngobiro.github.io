registerQuiz("topic-04-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-04-quiz",
    "metadata": {
        "title": "Topic 04: Peptic Ulcer Disease",
        "description": "Assessment of PUD etiology, symptoms, and medical management.",
        "topicId": "topic-04-peptic-ulcer",
        "difficulty": "advanced",
        "estimatedTime": 20,
        "passingScore": 75,
        "createdAt": "2025-12-25T00:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Which bacteria is the primary cause of peptic ulcers?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Escherichia coli", "isCorrect": false },
                { "id": "b", "text": "Helicobacter pylori", "isCorrect": true },
                { "id": "c", "text": "Staphylococcus aureus", "isCorrect": false },
                { "id": "d", "text": "Streptococcus pyogenes", "isCorrect": false }
            ],
            "explanation": "Research shows that peptic ulcers result from infection with the gram-negative bacteria H. pylori."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "Which blood type is more susceptible to peptic ulcers?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Type A", "isCorrect": false },
                { "id": "b", "text": "Type B", "isCorrect": false },
                { "id": "c", "text": "Type AB", "isCorrect": false },
                { "id": "d", "text": "Type O", "isCorrect": true }
            ],
            "explanation": "People with blood type O are more susceptible to peptic ulcers than those with other blood types."
        },
        {
            "id": "q3",
            "type": "true-false",
            "question": "Pain from a duodenal ulcer is typically relieved by eating.",
            "points": 10,
            "correctAnswer": true,
            "explanation": "Pain is usually relieved by eating because food neutralizes the acid. The pain returns once the stomach has emptied."
        },
        {
            "id": "q4",
            "type": "multiple-select",
            "question": "Which of the following are components of the First-Line Triple Therapy for H. pylori?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Proton Pump Inhibitor (PPI)", "isCorrect": true },
                { "id": "b", "text": "Clarithromycin", "isCorrect": true },
                { "id": "c", "text": "Amoxicillin (or Metronidazole)", "isCorrect": true },
                { "id": "d", "text": "Misoprostol", "isCorrect": false }
            ],
            "explanation": "First-line therapy includes a PPI + Clarithromycin + Amoxicillin (or Metronidazole)."
        },
        {
            "id": "q5",
            "type": "short-answer",
            "question": "What is Zollinger-Ellison Syndrome (ZES)?",
            "points": 15,
            "keywords": ["gastrin", "tumour", "tumor", "hyperacidity", "acid", "pancreas", "ulcers"],
            "minKeywords": 3,
            "modelAnswer": "ZES involves gastrin-secreting tumors (gastrinomas) usually in the pancreas, which cause extreme gastric hyperacidity and severe peptic ulcers.",
            "maxLength": 300
        }
    ]
});
