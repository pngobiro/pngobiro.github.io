registerQuiz("topic-04-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-04-quiz",
    "metadata": {
        "title": "Safe Drug Use Quiz",
        "description": "Assess your knowledge of pharmacology, legal frameworks, and safe administration principles.",
        "topicId": "topic-04",
        "difficulty": "advanced",
        "estimatedTime": 20,
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
            "id": "t4-q1",
            "type": "multiple-choice",
            "question": "According to the Narcotic Drugs Act, how must Schedule 1 (Controlled) drugs be stored in a ward?",
            "points": 15,
            "options": [
                { "id": "a", "text": "On an open shelf for easy access", "isCorrect": false },
                { "id": "b", "text": "In a locked container within a locked cupboard (Double Lock)", "isCorrect": true },
                { "id": "c", "text": "In a single locked cupboard", "isCorrect": false },
                { "id": "d", "text": "In the nurse's personal locker", "isCorrect": false }
            ],
            "explanation": "Controlled drugs (DDA) require a double-lock system: a locked container/box inside a locked cupboard."
        },
        {
            "id": "t4-q2",
            "type": "matching",
            "question": "Match the pharmacokinetic process with its primary location/definition:",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Absorption", "right": "Passage from site into blood stream" },
                { "id": "p2", "left": "Distribution", "right": "Transport to tissues" },
                { "id": "p3", "left": "Metabolism", "right": "Breakdown (primarily in Liver)" },
                { "id": "p4", "left": "Excretion", "right": "Elimination (primarily by Kidneys)" }
            ],
            "explanation": "Absorption = entry; Distribution = transport; Metabolism = liver breakdown; Excretion = kidney elimination."
        },
        {
            "id": "t4-q3",
            "type": "fill-blank",
            "question": "A reaction that is genetically determined and unexpected (e.g., extreme sensitivity to a low dose) is called an __b1__ reaction.",
            "points": 15,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["idiosyncratic", "idiosyncrasy"], "caseSensitive": false }
            ],
            "explanation": "Idiosyncratic reactions are unusual, genetic responses different from standard side effects or allergies."
        },
        {
            "id": "t4-q4",
            "type": "true-false",
            "question": "The 'Generic Name' of a drug is the proprietary brand name owned by a specific manufacturer.",
            "points": 10,
            "correctAnswer": false,
            "explanation": "The Generic Name (e.g., Paracetamol) is the official chemical/approved name. The Trade/Brand Name (e.g., Panadol) is proprietary."
        },
        {
            "id": "t4-q5",
            "type": "multiple-select",
            "question": "Which of the following are principles of the Essential Drugs Kit management? (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Drugs should not stay on the shelf until they expire", "isCorrect": true },
                { "id": "b", "text": "First in, First out (Use drugs that arrived first)", "isCorrect": true },
                { "id": "c", "text": "Use drugs that are about to expire first", "isCorrect": true },
                { "id": "d", "text": "Keep expired drugs on the shelf just in case", "isCorrect": false }
            ],
            "explanation": "Good stock management requires FIFO (First In First Out), using near-expiry drugs first, and removing expired drugs."
        },
        {
            "id": "t4-q6",
            "type": "short-answer",
            "question": "Explain what a 'Teratogenic' effect is (briefly).",
            "points": 15,
            "keywords": ["fetus", "foetus", "birth", "defect", "malformation", "pregnancy", "unborn"],
            "minKeywords": 2,
            "modelAnswer": "A teratogenic effect is capable of causing birth defects or malformations in a developing fetus.",
            "maxLength": 100
        }
    ]
});