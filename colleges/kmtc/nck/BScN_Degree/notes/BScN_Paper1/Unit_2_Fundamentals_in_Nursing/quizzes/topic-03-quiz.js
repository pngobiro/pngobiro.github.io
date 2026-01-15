registerQuiz("topic-03-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-03-quiz",
    "metadata": {
        "title": "Clinical Diagnosis Quiz",
        "description": "Evaluate your skills in health history taking, physical examination, and diagnosis.",
        "topicId": "topic-03",
        "difficulty": "advanced",
        "estimatedTime": 15,
        "passingScore": 75,
        "createdAt": "2026-01-10T10:00:00Z"
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "t3-q1",
            "type": "fill-blank",
            "question": "The __b1__ complaint is the specific issue that brings the patient to seek medical help.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["chief", "main", "presenting"], "caseSensitive": false }
            ],
            "explanation": "The Chief Complaint is the primary reason for the visit (e.g., 'What brings you to the clinic today?')."
        },
        {
            "id": "t3-q2",
            "type": "ordering",
            "question": "What is the correct order of examination for the ABDOMEN to avoid altering bowel sounds?",
            "points": 15,
            "items": [
                { "id": "i1", "text": "Inspection", "correctPosition": 1 },
                { "id": "i2", "text": "Auscultation", "correctPosition": 2 },
                { "id": "i3", "text": "Palpation", "correctPosition": 3 },
                { "id": "i4", "text": "Percussion", "correctPosition": 4 }
            ],
            "explanation": "For the abdomen, Auscultation follows Inspection immediately. Palpation and Percussion can stimulate the bowel, creating false sounds."
        },
        {
            "id": "t3-q3",
            "type": "matching",
            "question": "Match the percussion sound with its underlying cause:",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Resonance", "right": "Normal lung tissue" },
                { "id": "p2", "left": "Dullness", "right": "Solid organ (Liver) or fluid" },
                { "id": "p3", "left": "Tympany", "right": "Air-filled stomach" },
                { "id": "p4", "left": "Hyper-resonance", "right": "Emphysema (over-inflated lung)" }
            ],
            "explanation": "Different densities produce different sounds: Resonance (air/tissue mix), Dullness (solid/fluid), Tympany (hollow drum), Hyper-resonance (excess air)."
        },
        {
            "id": "t3-q4",
            "type": "multiple-choice",
            "question": "Which position is best for a female pelvic/genital examination?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Sims position", "isCorrect": false },
                { "id": "b", "text": "Lithotomy position", "isCorrect": true },
                { "id": "c", "text": "Fowler's position", "isCorrect": false },
                { "id": "d", "text": "Trendelenburg position", "isCorrect": false }
            ],
            "explanation": "The Lithotomy position (heels together, knees flexed and apart) provides the best access for female genital exams."
        },
        {
            "id": "t3-q5",
            "type": "multiple-choice",
            "question": "What is 'Tactile Fremitus'?",
            "points": 10,
            "options": [
                { "id": "a", "text": "A heart murmur felt on the chest", "isCorrect": false },
                { "id": "b", "text": "Vibration on the chest wall when the patient speaks", "isCorrect": true },
                { "id": "c", "text": "Fluid moving in the abdomen", "isCorrect": false },
                { "id": "d", "text": "Crepitus in a joint", "isCorrect": false }
            ],
            "explanation": "Tactile fremitus is the palpable vibration of the chest wall that results from speech."
        },
        {
            "id": "t3-q6",
            "type": "true-false",
            "question": "When examining the breast, you should only palpate the breast tissue itself and ignore the axilla (armpit).",
            "points": 10,
            "correctAnswer": false,
            "explanation": "You must examine the breast tissue extending into the axilla (Tail of Spence) and feel for lymph nodes there."
        }
    ]
});