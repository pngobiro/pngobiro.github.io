registerQuiz("topic-04-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-04-quiz",
    "metadata": {
        "title": "Infectious Diseases Quiz",
        "description": "Assess your understanding of common childhood infections, their features, and management.",
        "topicId": "topic-04",
        "difficulty": "intermediate",
        "estimatedTime": 20,
        "passingScore": 70,
        "createdAt": "2026-01-11T00:00:00Z",
        "tags": ["infection", "meningitis", "measles", "malaria", "emergency"]
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
            "question": "Which of the following is a classic sign of Meningitis involving pain when extending the knee with the hip flexed?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Brudzinski's sign", "isCorrect": false },
                { "id": "b", "text": "Kernig's sign", "isCorrect": true },
                { "id": "c", "text": "Koplik's sign", "isCorrect": false },
                { "id": "d", "text": "Babinski's sign", "isCorrect": false }
            ],
            "explanation": "Kernig's sign is positive when there is pain and inability to fully extend the knee when the patient is supine with the hip flexed to 90 degrees."
        },
        {
            "id": "q2",
            "type": "fill-blank",
            "question": "The causative agent of Whooping Cough is __b1__.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["Bordetella pertussis", "bordetella pertussis"], "caseSensitive": false }
            ],
            "explanation": "Bordetella pertussis is the bacterium responsible for Whooping Cough (Pertussis)."
        },
        {
            "id": "q3",
            "type": "matching",
            "question": "Match the disease with its key diagnostic feature.",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Measles", "right": "Koplik spots" },
                { "id": "p2", "left": "Meningitis", "right": "Bulging fontanelle" },
                { "id": "p3", "left": "Chickenpox", "right": "Vesicular rash" },
                { "id": "p4", "left": "Mumps", "right": "Parotid swelling" }
            ],
            "explanation": "Koplik spots are pathognomonic for Measles; Bulging fontanelle indicates increased ICP in Meningitis; Vesicles are typical of Chickenpox."
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "Chickenpox vesicles usually leave deep, permanent scars after healing.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "Chickenpox vesicles usually collapse and dry up after 3-4 days, leaving no scars unless secondarily infected or scratched deeply."
        },
        {
            "id": "q5",
            "type": "multiple-select",
            "question": "Which of the following are possible complications of Malaria? (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Severe Anaemia", "isCorrect": true },
                { "id": "b", "text": "Cerebral Malaria", "isCorrect": true },
                { "id": "c", "text": "Hypoglycaemia", "isCorrect": true },
                { "id": "d", "text": "Orchitis", "isCorrect": false }
            ],
            "partialCredit": true,
            "explanation": "Malaria destroys RBCs (anaemia) and can affect the brain (cerebral) and metabolism (hypoglycaemia). Orchitis is a complication of Mumps."
        },
        {
            "id": "q6",
            "type": "ordering",
            "question": "Order the steps of CPR according to the 'ABC' approach described in the text.",
            "points": 15,
            "items": [
                { "id": "i1", "text": "Airway (Clear mucus/vomit)", "correctPosition": 1 },
                { "id": "i2", "text": "Breathing (Look, listen, feel)", "correctPosition": 2 },
                { "id": "i3", "text": "Circulation (Cardiac massage)", "correctPosition": 3 }
            ],
            "explanation": "The text describes the A-B-C sequence: Airway, Breathing, then Circulation."
        },
        {
            "id": "q7",
            "type": "image-based",
            "question": "Which infectious disease pathology is depicted in this image?",
            "points": 10,
            "imageUrl": "../assets/images/image-20260111-b6881015.jpeg",
            "imageAlt": "Diagram showing inflammation of brain membranes",
            "hotspots": [
                { "id": "h1", "x": 50, "y": 50, "radius": 100, "label": "Brain/Meninges", "isCorrect": true }
            ],
            "options": [
                { "id": "a", "text": "Tuberculosis", "isCorrect": false },
                { "id": "b", "text": "Meningococcal Meningitis", "isCorrect": true },
                { "id": "c", "text": "Hydrocephalus", "isCorrect": false }
            ],
            "explanation": "The image illustrates the inflammation of the meninges surrounding the brain, characteristic of Meningitis."
        }
    ]
});