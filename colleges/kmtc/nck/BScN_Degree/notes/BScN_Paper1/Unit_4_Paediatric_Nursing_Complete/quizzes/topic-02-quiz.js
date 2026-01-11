registerQuiz("topic-02-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-02-quiz",
    "metadata": {
        "title": "General Principles & IMCI Quiz",
        "description": "Assess your knowledge on paediatric admission, examination techniques, and the IMCI strategy.",
        "topicId": "topic-02",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2026-01-11T00:00:00Z",
        "tags": ["IMCI", "paediatric assessment", "admission", "examination"]
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
            "type": "true-false",
            "question": "When admitting a sick child, parents should be separated from the child immediately to facilitate rapid nursing intervention.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "Separation can cause serious psychological effects. Parents should accompany the child, and the nurse should build rapport with both."
        },
        {
            "id": "q2",
            "type": "matching",
            "question": "Match the physical examination technique with its description.",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Inspection", "right": "Critical scrutiny to look for signs of disease" },
                { "id": "p2", "left": "Palpation", "right": "Examining with fingers/hand over chest or abdomen" },
                { "id": "p3", "left": "Percussion", "right": "Tapping with fingers to produce sound" },
                { "id": "p4", "left": "Auscultation", "right": "Listening for sounds using a stethoscope" }
            ],
            "explanation": "These are the four standard techniques of physical examination, typically performed in this order (except for abdominal exams)."
        },
        {
            "id": "q3",
            "type": "multiple-select",
            "question": "Which of the following are considered 'Core Interventions' of the IMCI strategy? (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Integrated case management of ARI (Pneumonia)", "isCorrect": true },
                { "id": "b", "text": "Management of Diarrhoea", "isCorrect": true },
                { "id": "c", "text": "Surgical repair of cleft lip", "isCorrect": false },
                { "id": "d", "text": "Management of Malaria and Measles", "isCorrect": true },
                { "id": "e", "text": "Management of Malnutrition", "isCorrect": true }
            ],
            "partialCredit": true,
            "explanation": "IMCI focuses on the top 5 causes of mortality: ARI, Diarrhoea, Measles, Malaria, and Malnutrition."
        },
        {
            "id": "q4",
            "type": "fill-blank",
            "question": "IMCI stands for __b1__ Management of __b2__ Illness.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["Integrated", "integrated"], "caseSensitive": false },
                { "id": "b2", "acceptedAnswers": ["Childhood", "childhood"], "caseSensitive": false }
            ],
            "explanation": "IMCI = Integrated Management of Childhood Illness."
        },
        {
            "id": "q5",
            "type": "short-answer",
            "question": "Explain why the IMCI strategy uses an 'integrated' approach rather than treating single conditions.",
            "points": 20,
            "keywords": ["overlap", "symptoms", "diagnosis", "multiple", "single", "combined"],
            "minKeywords": 2,
            "modelAnswer": "Most sick children present with symptoms (like fever or lethargy) that overlap across multiple conditions (e.g., malaria and pneumonia). A single diagnosis may be impossible or inappropriate, requiring combined management of all major possibilities.",
            "maxLength": 300
        },
        {
            "id": "q6",
            "type": "multiple-choice",
            "question": "According to IMCI guidelines, a child presenting with 'Lethargy or Unconsciousness' might be suffering from which combination of conditions?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Pneumonia and severe anaemia", "isCorrect": false },
                { "id": "b", "text": "Measles rash and ear infection", "isCorrect": false },
                { "id": "c", "text": "Cerebral malaria, meningitis, or severe dehydration", "isCorrect": true },
                { "id": "d", "text": "Tuberculosis and malnutrition", "isCorrect": false }
            ],
            "explanation": "Lethargy and unconsciousness are severe danger signs associated with cerebral malaria, meningitis, severe dehydration, or severe pneumonia."
        },
        {
            "id": "q7",
            "type": "ordering",
            "question": "Arrange the steps of the admission procedure in a logical sequence.",
            "points": 15,
            "items": [
                { "id": "i1", "text": "Reception in a clean, quiet environment", "correctPosition": 1 },
                { "id": "i2", "text": "Introduction to ward/unit facilities and other parents", "correctPosition": 2 },
                { "id": "i3", "text": "Finding out child's likes/dislikes and name", "correctPosition": 3 },
                { "id": "i4", "text": "History taking (Medical, Social, etc.)", "correctPosition": 4 },
                { "id": "i5", "text": "Obtaining informed consent", "correctPosition": 5 }
            ],
            "explanation": "The process generally flows from welcoming/reception, to orientation, building rapport (likes/dislikes), formal history taking, and finally legal consent."
        }
    ]
});