registerQuiz("comprehensive-exam", {
    "schemaVersion": "1.0",
    "quizId": "comprehensive-exam",
    "metadata": {
        "title": "Paediatric Nursing Final Exam",
        "description": "Comprehensive assessment covering all 8 units of the Paediatric Nursing course.",
        "examType": "comprehensive",
        "topicsCovered": [
            "topic-01", "topic-02", "topic-03", "topic-04",
            "topic-05", "topic-06", "topic-07", "topic-08"
        ],
        "difficulty": "advanced",
        "estimatedTime": 45,
        "passingScore": 75,
        "createdAt": "2026-01-11T00:00:00Z",
        "tags": ["final", "comprehensive", "exam"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "end",
        "allowRetry": true,
        "showCorrectAnswers": true,
        "timeLimit": 2700
    },
    "questions": [
        // Topic 1: Health Promotion
        {
            "id": "comp-q1",
            "type": "multiple-choice",
            "question": "Which vaccine in the KEPI schedule is most sensitive to heat?",
            "points": 1,
            "topicId": "topic-01",
            "topicName": "Health Promotion",
            "options": [
                { "id": "a", "text": "BCG", "isCorrect": false },
                { "id": "b", "text": "Polio", "isCorrect": true },
                { "id": "c", "text": "Tetanus", "isCorrect": false },
                { "id": "d", "text": "Measles", "isCorrect": false }
            ],
            "explanation": "Polio vaccine is the most sensitive to heat, followed by Measles, DPT, BCG, and Tetanus."
        },
        {
            "id": "comp-q2",
            "type": "fill-blank",
            "question": "A child not smiling at their mother by __b1__ weeks is considered a developmental warning sign.",
            "points": 1,
            "topicId": "topic-01",
            "topicName": "Health Promotion",
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["8", "eight"], "caseSensitive": false }
            ],
            "explanation": "Not smiling at the mother by 8 weeks is a specific developmental warning sign."
        },
        {
            "id": "comp-q3",
            "type": "true-false",
            "question": "The Pentavalent vaccine is administered into the gluteal muscle (buttock).",
            "points": 1,
            "topicId": "topic-01",
            "topicName": "Health Promotion",
            "correctAnswer": false,
            "explanation": "Pentavalent should be injected into the outer aspect of the left thigh, NOT the buttock."
        },

        // Topic 2: General Principles
        {
            "id": "comp-q4",
            "type": "multiple-select",
            "question": "Which of the following are the five major causes of childhood mortality targeted by IMCI? (Select 5)",
            "points": 1,
            "topicId": "topic-02",
            "topicName": "General Principles",
            "options": [
                { "id": "a", "text": "Acute Respiratory Infection (Pneumonia)", "isCorrect": true },
                { "id": "b", "text": "Diabetes", "isCorrect": false },
                { "id": "c", "text": "Diarrhoea", "isCorrect": true },
                { "id": "d", "text": "Measles", "isCorrect": true },
                { "id": "e", "text": "Malaria", "isCorrect": true },
                { "id": "f", "text": "Malnutrition", "isCorrect": true },
                { "id": "g", "text": "Leukaemia", "isCorrect": false }
            ],
            "partialCredit": true,
            "explanation": "IMCI targets ARI, Diarrhoea, Measles, Malaria, and Malnutrition."
        },
        {
            "id": "comp-q5",
            "type": "matching",
            "question": "Match the physical examination technique with its definition.",
            "points": 1,
            "topicId": "topic-02",
            "topicName": "General Principles",
            "pairs": [
                { "id": "p1", "left": "Percussion", "right": "Tapping with fingers" },
                { "id": "p2", "left": "Auscultation", "right": "Listening with stethoscope" },
                { "id": "p3", "left": "Palpation", "right": "Examining with hand/fingers" }
            ],
            "explanation": "Standard physical exam techniques."
        },
        {
            "id": "comp-q6",
            "type": "multiple-choice",
            "question": "What is the primary goal of the IMCI strategy?",
            "points": 1,
            "topicId": "topic-02",
            "topicName": "General Principles",
            "options": [
                { "id": "a", "text": "To replace specialised paediatric care", "isCorrect": false },
                { "id": "b", "text": "To reduce infant mortality and severity of illness via integrated treatment", "isCorrect": true },
                { "id": "c", "text": "To focus solely on vaccination", "isCorrect": false }
            ],
            "explanation": "IMCI aims to reduce mortality and disability by integrating prevention and treatment of major childhood illnesses."
        },

        // Topic 3: Nutrition
        {
            "id": "comp-q7",
            "type": "multiple-choice",
            "question": "A child presents with oedema, 'moon face', and flaky paint dermatosis. What is the most likely diagnosis?",
            "points": 1,
            "topicId": "topic-03",
            "topicName": "Nutrition",
            "options": [
                { "id": "a", "text": "Marasmus", "isCorrect": false },
                { "id": "b", "text": "Kwashiorkor", "isCorrect": true },
                { "id": "c", "text": "Scurvy", "isCorrect": false },
                { "id": "d", "text": "Rickets", "isCorrect": false }
            ],
            "explanation": "These are classic signs of Kwashiorkor (protein deficiency)."
        },
        {
            "id": "comp-q8",
            "type": "image-based",
            "question": "Identify the condition characterized by the bowing of legs shown in the image.",
            "points": 1,
            "topicId": "topic-03",
            "topicName": "Nutrition",
            "imageUrl": "assets/images/image-20260111-309a4394.jpeg",
            "imageAlt": "Bow legs",
            "hotspots": [],
            "options": [
                { "id": "a", "text": "Rickets", "isCorrect": true },
                { "id": "b", "text": "Scurvy", "isCorrect": false },
                { "id": "c", "text": "Polio", "isCorrect": false }
            ],
            "explanation": "Bow legs (genu varum) are a clinical feature of Rickets caused by Vitamin D deficiency."
        },
        {
            "id": "comp-q9",
            "type": "short-answer",
            "question": "What is the specific deficiency that causes Scurvy?",
            "points": 1,
            "topicId": "topic-03",
            "topicName": "Nutrition",
            "keywords": ["vitamin c", "ascorbic acid"],
            "minKeywords": 1,
            "modelAnswer": "Vitamin C (Ascorbic Acid)",
            "maxLength": 50
        },

        // Topic 4: Infectious Diseases
        {
            "id": "comp-q10",
            "type": "multiple-choice",
            "question": "Which sign is characteristic of the prodromal phase of Measles?",
            "points": 1,
            "topicId": "topic-04",
            "topicName": "Infectious Diseases",
            "options": [
                { "id": "a", "text": "Vesicular rash", "isCorrect": false },
                { "id": "b", "text": "Koplik spots", "isCorrect": true },
                { "id": "c", "text": "Parotid swelling", "isCorrect": false },
                { "id": "d", "text": "Whooping cough", "isCorrect": false }
            ],
            "explanation": "Koplik spots appear in the mouth 24-48 hours before the main measles rash."
        },
        {
            "id": "comp-q11",
            "type": "fill-blank",
            "question": "The vector responsible for transmitting Malaria is the female __b1__ mosquito.",
            "points": 1,
            "topicId": "topic-04",
            "topicName": "Infectious Diseases",
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["Anopheles", "anopheles"], "caseSensitive": false }
            ],
            "explanation": "The female Anopheles mosquito transmits the Plasmodium parasite."
        },
        {
            "id": "comp-q12",
            "type": "true-false",
            "question": "Kernig's sign is used to diagnose Whooping Cough.",
            "points": 1,
            "topicId": "topic-04",
            "topicName": "Infectious Diseases",
            "correctAnswer": false,
            "explanation": "Kernig's sign is a diagnostic sign for Meningitis."
        },

        // Topic 5: Blood/Lymphatic
        {
            "id": "comp-q13",
            "type": "multiple-choice",
            "question": "Which of the following is a trigger for a Sickle Cell Crisis?",
            "points": 1,
            "topicId": "topic-05",
            "topicName": "Blood & Lymphatic",
            "options": [
                { "id": "a", "text": "High oxygen levels", "isCorrect": false },
                { "id": "b", "text": "Hypoxia and dehydration", "isCorrect": true },
                { "id": "c", "text": "Rest", "isCorrect": false },
                { "id": "d", "text": "Iron supplements", "isCorrect": false }
            ],
            "explanation": "Severe hypoxia, dehydration, stress, and infection are primary triggers for sickling."
        },
        {
            "id": "comp-q14",
            "type": "matching",
            "question": "Match the dehydration sign with its severity level.",
            "points": 1,
            "topicId": "topic-05",
            "topicName": "Blood & Lymphatic",
            "pairs": [
                { "id": "p1", "left": "Mild Dehydration", "right": "Skin pinch retracts immediately" },
                { "id": "p2", "left": "Moderate Dehydration", "right": "Skin pinch retracts slowly" },
                { "id": "p3", "left": "Severe Dehydration", "right": "Skin pinch retracts very slowly (>2 sec)" }
            ],
            "explanation": "Skin turgor is a key indicator of dehydration severity."
        },
        {
            "id": "comp-q15",
            "type": "multiple-choice",
            "question": "Burkitt's Lymphoma typically presents with tumours in which area?",
            "points": 1,
            "topicId": "topic-05",
            "topicName": "Blood & Lymphatic",
            "options": [
                { "id": "a", "text": "Lungs", "isCorrect": false },
                { "id": "b", "text": "Jaw/Mandible", "isCorrect": true },
                { "id": "c", "text": "Liver", "isCorrect": false },
                { "id": "d", "text": "Skin", "isCorrect": false }
            ],
            "explanation": "Burkitt's Lymphoma commonly presents with swelling of the jaw/mandible and loose teeth."
        },

        // Topic 6: Support/Locomotion
        {
            "id": "comp-q16",
            "type": "image-based",
            "question": "Identify the type of Talipes shown where the foot is plantar flexed and inverted.",
            "points": 1,
            "topicId": "topic-06",
            "topicName": "Support & Locomotion",
            "imageUrl": "assets/images/image-20260111-540b14d9.jpeg",
            "imageAlt": "Clubfoot image",
            "hotspots": [],
            "options": [
                { "id": "a", "text": "Talipes Equinovarus", "isCorrect": true },
                { "id": "b", "text": "Talipes Calcaneovalgus", "isCorrect": false }
            ],
            "explanation": "Talipes Equinovarus is the most common form (95%) featuring plantar flexion and inversion."
        },
        {
            "id": "comp-q17",
            "type": "ordering",
            "question": "Order the management steps for a fracture.",
            "points": 1,
            "topicId": "topic-06",
            "topicName": "Support & Locomotion",
            "items": [
                { "id": "i1", "text": "Reduction (Closed or Open)", "correctPosition": 1 },
                { "id": "i2", "text": "Immobilisation (Splint/POP)", "correctPosition": 2 },
                { "id": "i3", "text": "Rehabilitation (Physiotherapy)", "correctPosition": 3 }
            ],
            "explanation": "Fracture management follows the sequence: Reduce, Immobilise, Rehabilitate."
        },
        {
            "id": "comp-q18",
            "type": "multiple-choice",
            "question": "Which form of Juvenile Rheumatoid Arthritis affects many joints (polyarticular)?",
            "points": 1,
            "topicId": "topic-06",
            "topicName": "Support & Locomotion",
            "options": [
                { "id": "a", "text": "Pauciarticular", "isCorrect": false },
                { "id": "b", "text": "Polyarticular", "isCorrect": true },
                { "id": "c", "text": "Systemic", "isCorrect": false }
            ],
            "explanation": "Polyarticular disease involves many joints, typically the small joints of the hands."
        },

        // Topic 7: Nervous/Endocrine
        {
            "id": "comp-q19",
            "type": "multiple-choice",
            "question": "Which type of Hydrocephalus is caused by an obstruction OUTSIDE the ventricular system?",
            "points": 1,
            "topicId": "topic-07",
            "topicName": "Nervous & Endocrine",
            "options": [
                { "id": "a", "text": "Non-communicating", "isCorrect": false },
                { "id": "b", "text": "Communicating (Extra Ventricular)", "isCorrect": true }
            ],
            "explanation": "Communicating hydrocephalus involves blockage in the subarachnoid space (outside the ventricles)."
        },
        {
            "id": "comp-q20",
            "type": "fill-blank",
            "question": "Congenital Hypothyroidism is also known as __b1__.",
            "points": 1,
            "topicId": "topic-07",
            "topicName": "Nervous & Endocrine",
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["cretinism", "Cretinism"], "caseSensitive": false }
            ],
            "explanation": "Congenital hypothyroidism is clinically termed Cretinism."
        },
        {
            "id": "comp-q21",
            "type": "multiple-select",
            "question": "Which of the following are clinical features of Diabetes Mellitus in children? (Select all that apply)",
            "points": 1,
            "topicId": "topic-07",
            "topicName": "Nervous & Endocrine",
            "options": [
                { "id": "a", "text": "Polydipsia (Excessive thirst)", "isCorrect": true },
                { "id": "b", "text": "Weight gain", "isCorrect": false },
                { "id": "c", "text": "Polyuria (Excessive urination)", "isCorrect": true },
                { "id": "d", "text": "Bed wetting (secondary enuresis)", "isCorrect": true }
            ],
            "partialCredit": true,
            "explanation": "Diabetes presents with Polydipsia, Polyuria, Weight LOSS (not gain), and secondary bed wetting."
        },

        // Topic 8: Skin/Special Senses
        {
            "id": "comp-q22",
            "type": "multiple-choice",
            "question": "Why are young children more prone to Otitis Media?",
            "points": 1,
            "topicId": "topic-08",
            "topicName": "Skin & Special Senses",
            "options": [
                { "id": "a", "text": "Eustachian tubes are longer and vertical", "isCorrect": false },
                { "id": "b", "text": "Eustachian tubes are shorter, wider, and horizontal", "isCorrect": true },
                { "id": "c", "text": "They have more ear wax", "isCorrect": false }
            ],
            "explanation": "The anatomical position (short, wide, horizontal) of the eustachian tube in children facilitates the ascent of infection."
        },
        {
            "id": "comp-q23",
            "type": "matching",
            "question": "Match the skin condition with its treatment.",
            "points": 1,
            "topicId": "topic-08",
            "topicName": "Skin & Special Senses",
            "pairs": [
                { "id": "p1", "left": "Scabies", "right": "Benzyl Benzoate" },
                { "id": "p2", "left": "Ringworm", "right": "Whitfield's Cream" },
                { "id": "p3", "left": "Impetigo", "right": "Antibiotics (Cloxacillin)" }
            ],
            "explanation": "Benzyl Benzoate for Scabies mites; Whitfield's for fungal Ringworm; Antibiotics for bacterial Impetigo."
        },
        {
            "id": "comp-q24",
            "type": "short-answer",
            "question": "What is the immediate management for chemical conjunctivitis?",
            "points": 1,
            "topicId": "topic-08",
            "topicName": "Skin & Special Senses",
            "keywords": ["irrigate", "wash", "water", "saline", "30 minutes"],
            "minKeywords": 2,
            "modelAnswer": "Immediate irrigation of the eye with water or normal saline for at least 30 minutes.",
            "maxLength": 100
        }
    ]
});