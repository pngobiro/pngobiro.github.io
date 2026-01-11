registerQuiz("topic-05-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-05-quiz",
    "metadata": {
        "title": "Blood & Homeostatic Disorders Quiz",
        "description": "Assess your knowledge on anaemias, malignancies, HIV, and fluid balance in children.",
        "topicId": "topic-05",
        "difficulty": "intermediate",
        "estimatedTime": 20,
        "passingScore": 70,
        "createdAt": "2026-01-11T00:00:00Z",
        "tags": ["anaemia", "HIV", "dehydration", "leukaemia"]
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
            "question": "Which type of anaemia is caused by bone marrow failure depressing red cells, white cells, and platelets simultaneously?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Iron Deficiency Anaemia", "isCorrect": false },
                { "id": "b", "text": "Haemolytic Anaemia", "isCorrect": false },
                { "id": "c", "text": "Aplastic Anaemia", "isCorrect": true },
                { "id": "d", "text": "Haemorrhagic Anaemia", "isCorrect": false }
            ],
            "explanation": "Aplastic anaemia involves the failure of bone marrow to produce formed elements of blood (pancytopenia), often due to toxins or radiation."
        },
        {
            "id": "q2",
            "type": "multiple-select",
            "question": "Select the factors that can trigger a Sickle Cell Crisis. (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Severe hypoxia", "isCorrect": true },
                { "id": "b", "text": "Strenuous physical exercise", "isCorrect": true },
                { "id": "c", "text": "High fluid intake", "isCorrect": false },
                { "id": "d", "text": "Infection/Fever", "isCorrect": true }
            ],
            "partialCredit": true,
            "explanation": "Hypoxia, strenuous exercise, and infection can trigger sickling. High fluid intake is actually a management strategy to prevent crisis."
        },
        {
            "id": "q3",
            "type": "matching",
            "question": "Match the ARV drug class with its mechanism of action.",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "NRTIs (e.g., AZT)", "right": "Prevent RNA to DNA conversion (Transcription)" },
                { "id": "p2", "left": "NNRTIs (e.g., Nevirapine)", "right": "Act directly against the conversion enzyme" },
                { "id": "p3", "left": "Protease Inhibitors", "right": "Interfere with viral assembly" }
            ],
            "explanation": "NRTIs and NNRTIs target reverse transcriptase differently, while PIs target the assembly of new viral particles."
        },
        {
            "id": "q4",
            "type": "image-based",
            "question": "Identify the clinical sign of dehydration shown in the image.",
            "points": 10,
            "imageUrl": "../assets/images/image-20260111-13d8e891.jpeg",
            "imageAlt": "Infant head showing depression on top",
            "hotspots": [
                { "id": "h1", "x": 50, "y": 40, "radius": 15, "label": "Anterior Fontanelle", "isCorrect": true }
            ],
            "options": [
                { "id": "a", "text": "Bulging Fontanelle", "isCorrect": false },
                { "id": "b", "text": "Sunken Fontanelle", "isCorrect": true },
                { "id": "c", "text": "Hydrocephalus", "isCorrect": false }
            ],
            "explanation": "A sunken anterior fontanelle is a classic sign of moderate to severe dehydration in infants."
        },
        {
            "id": "q5",
            "type": "fill-blank",
            "question": "In severe dehydration, the estimated fluid deficit is __b1__ ml/kg.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["100-110", "100", "110"], "caseSensitive": false }
            ],
            "explanation": "According to the assessment table, severe dehydration involves a fluid deficit of 100-110 ml/kg."
        },
        {
            "id": "q6",
            "type": "true-false",
            "question": "Burkitt's Lymphoma is a highly malignant tumour often affecting the jaw, commonly found in tropical Africa.",
            "points": 5,
            "correctAnswer": true,
            "explanation": "Burkitt's Lymphoma is common in tropical Africa, affects children aged 4-8, and often presents with jaw tumours."
        },
        {
            "id": "q7",
            "type": "short-answer",
            "question": "Why is hydration critical in the management of Sickle Cell Crisis?",
            "points": 15,
            "keywords": ["dilute", "blood", "viscosity", "flow", "clotting", "circulation"],
            "minKeywords": 2,
            "modelAnswer": "Hydration is critical to dilute the blood, reduce viscosity, and facilitate circulation to prevent further sickling and blockage of vessels.",
            "maxLength": 200
        }
    ]
});