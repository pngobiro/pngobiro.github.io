registerQuiz("topic-07-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-07-quiz",
    "metadata": {
        "title": "Nervous & Endocrine Systems Quiz",
        "description": "Assess your understanding of neurological defects, epilepsy, diabetes, and hypothyroidism in children.",
        "topicId": "topic-07",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2026-01-11T00:00:00Z",
        "tags": ["neurology", "endocrine", "hydrocephalus", "diabetes"]
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
            "question": "Which type of hydrocephalus is caused by an obstruction within the ventricular system?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Communicating Hydrocephalus", "isCorrect": false },
                { "id": "b", "text": "Non-Communicating Hydrocephalus", "isCorrect": true },
                { "id": "c", "text": "Extra Ventricular Hydrocephalus", "isCorrect": false },
                { "id": "d", "text": "Microcephaly", "isCorrect": false }
            ],
            "explanation": "Non-communicating hydrocephalus involves blockage within the ventricles (e.g., aqueduct stenosis), preventing CSF flow to the subarachnoid space."
        },
        {
            "id": "q2",
            "type": "multiple-select",
            "question": "Which of the following are part of the 'ABC' rule for managing an epileptic seizure? (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Airway - Ensure clear airway", "isCorrect": true },
                { "id": "b", "text": "Breathing - Enable patient to breathe", "isCorrect": true },
                { "id": "c", "text": "Compression - Start chest compressions immediately", "isCorrect": false },
                { "id": "d", "text": "Circulation - Loosen clothing", "isCorrect": true },
                { "id": "e", "text": "Restraint - Hold the patient down", "isCorrect": false }
            ],
            "partialCredit": true,
            "explanation": "The ABC rule stands for Airway, Breathing, and Circulation (loosen clothing). Restraint is contraindicated as it causes injury."
        },
        {
            "id": "q3",
            "type": "fill-blank",
            "question": "The drug of choice for lifelong treatment of congenital hypothyroidism is __b1__.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["Thyroxine", "thyroxine"], "caseSensitive": false }
            ],
            "explanation": "Thyroxine is used to replace the deficient thyroid hormone and prevent mental retardation."
        },
        {
            "id": "q4",
            "type": "matching",
            "question": "Match the type of Epilepsy with its description.",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Petit Mal", "right": "Momentary loss of consciousness, blank expression" },
                { "id": "p2", "left": "Jacksonian", "right": "Unilateral movements spreading systematically" },
                { "id": "p3", "left": "Grand Mal", "right": "Major seizure with Tonic, Clonic, and Comatose stages" },
                { "id": "p4", "left": "Status Epilepticus", "right": "Repeated seizures without recovering consciousness" }
            ],
            "explanation": "Petit mal is 'small sickness'; Grand mal is 'major'; Status epilepticus is a medical emergency."
        },
        {
            "id": "q5",
            "type": "true-false",
            "question": "In Spina Bifida Cystica management, the sac should be left exposed to dry out before surgery.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "The sac must be kept moist and sterile. Aseptic dressing using warm normal saline changed 4-hourly is required to prevent drying, cracking, and infection."
        },
        {
            "id": "q6",
            "type": "short-answer",
            "question": "List two classic signs of Diabetes Mellitus in children.",
            "points": 15,
            "keywords": ["thirst", "polydipsia", "polyuria", "urine", "weight", "loss", "bed", "wetting"],
            "minKeywords": 2,
            "modelAnswer": "Classic signs include excessive thirst (polydipsia), excessive urination (polyuria), rapid weight loss, and new onset bed wetting.",
            "maxLength": 200
        },
        {
            "id": "q7",
            "type": "image-based",
            "question": "Identify the condition shown in the image where there is fluid accumulation in the brain.",
            "points": 10,
            "imageUrl": "../assets/images/image-20260111-2b55b018.jpeg",
            "imageAlt": "Diagram of enlarged ventricles in the brain",
            "hotspots": [],
            "options": [
                { "id": "a", "text": "Microcephaly", "isCorrect": false },
                { "id": "b", "text": "Hydrocephalus", "isCorrect": true },
                { "id": "c", "text": "Meningitis", "isCorrect": false }
            ],
            "explanation": "The image shows dilated ventricles characteristic of Hydrocephalus."
        }
    ]
});