registerQuiz("comprehensive-exam", {
    "schemaVersion": "1.0",
    "quizId": "comprehensive-exam",
    "metadata": {
        "title": "Comprehensive Final Exam",
        "description": "A final assessment covering all topics in the Non-Communicable Diseases course.",
        "examType": "comprehensive",
        "topicsCovered": [
            "topic-01-introduction",
            "topic-02-cvd",
            "topic-03-diabetes",
            "topic-04-cancers",
            "topic-05-other-disorders",
            "topic-06-respiratory"
        ],
        "difficulty": "advanced",
        "estimatedTime": 45,
        "passingScore": 75,
        "createdAt": "2026-01-10T12:00:00Z",
        "tags": ["final", "exam", "all-topics"]
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
        // --- Topic 1: Introduction ---
        {
            "id": "comp-q1",
            "type": "multiple-choice",
            "question": "Which of the following best defines Non-Communicable Diseases (NCDs)?",
            "points": 5,
            "topicId": "topic-01-introduction",
            "topicName": "Introduction to NCDs",
            "options": [
                { "id": "a", "text": "Acute infectious diseases spread from person to person", "isCorrect": false },
                { "id": "b", "text": "Chronic conditions that are not transmissible and develop gradually", "isCorrect": true },
                { "id": "c", "text": "Diseases caused solely by genetic mutations present at birth", "isCorrect": false },
                { "id": "d", "text": "Short-term illnesses caused by nutritional deficiencies", "isCorrect": false }
            ],
            "explanation": "NCDs are chronic conditions that do not result from acute infectious processes and are generally not transmissible."
        },
        {
            "id": "comp-q2",
            "type": "multiple-select",
            "question": "Identify the four major groups of NCDs responsible for the majority of deaths. (Select all that apply)",
            "points": 5,
            "topicId": "topic-01-introduction",
            "topicName": "Introduction to NCDs",
            "options": [
                { "id": "a", "text": "Cardiovascular diseases", "isCorrect": true },
                { "id": "b", "text": "Infectious diseases", "isCorrect": false },
                { "id": "c", "text": "Cancers", "isCorrect": true },
                { "id": "d", "text": "Diabetes", "isCorrect": true },
                { "id": "e", "text": "Chronic respiratory diseases", "isCorrect": true },
                { "id": "f", "text": "Malaria", "isCorrect": false }
            ],
            "explanation": "The four major NCDs are cardiovascular diseases, cancers, diabetes, and chronic respiratory diseases."
        },
        {
            "id": "comp-q3",
            "type": "true-false",
            "question": "Approximately 85% of premature NCD deaths occur in high-income countries.",
            "points": 5,
            "topicId": "topic-01-introduction",
            "topicName": "Introduction to NCDs",
            "correctAnswer": false,
            "explanation": "85% of premature NCD deaths occur in low- and middle-income countries."
        },

        // --- Topic 2: CVD ---
        {
            "id": "comp-q4",
            "type": "matching",
            "question": "Match the cardiovascular condition with its description:",
            "points": 10,
            "topicId": "topic-02-cvd",
            "topicName": "Cardiovascular Diseases",
            "pairs": [
                { "id": "p1", "left": "Coronary heart disease", "right": "Affects blood vessels supplying the heart muscle" },
                { "id": "p2", "left": "Cerebrovascular disease", "right": "Affects blood vessels supplying the brain" },
                { "id": "p3", "left": "Peripheral arterial disease", "right": "Affects vessels supplying the limbs" },
                { "id": "p4", "left": "Rheumatic heart disease", "right": "Damage to heart valves from rheumatic fever" }
            ]
        },
        {
            "id": "comp-q5",
            "type": "multiple-select",
            "question": "Which of the following are considered modifiable behavioral risk factors for CVD? (Select all that apply)",
            "points": 5,
            "topicId": "topic-02-cvd",
            "topicName": "Cardiovascular Diseases",
            "options": [
                { "id": "a", "text": "Tobacco use", "isCorrect": true },
                { "id": "b", "text": "Family history", "isCorrect": false },
                { "id": "c", "text": "Physical inactivity", "isCorrect": true },
                { "id": "d", "text": "Unhealthy diet", "isCorrect": true },
                { "id": "e", "text": "Age", "isCorrect": false }
            ],
            "explanation": "Modifiable factors include tobacco use, physical inactivity, unhealthy diet, and alcohol use. Age and family history are non-modifiable."
        },
        {
            "id": "comp-q6",
            "type": "short-answer",
            "question": "What is the term for the condition where blood clots form in the leg veins and can dislodge to the lungs?",
            "points": 10,
            "topicId": "topic-02-cvd",
            "topicName": "Cardiovascular Diseases",
            "keywords": ["deep vein thrombosis", "dvt", "pulmonary embolism", "thrombosis"],
            "minKeywords": 1,
            "modelAnswer": "Deep vein thrombosis (DVT) and pulmonary embolism.",
            "explanation": "Deep vein thrombosis (DVT) is the formation of clots in leg veins, which can lead to pulmonary embolism if they travel to the lungs."
        },

        // --- Topic 3: Diabetes ---
        {
            "id": "comp-q7",
            "type": "multiple-choice",
            "question": "Which type of diabetes is characterized by an autoimmune destruction of insulin-producing cells?",
            "points": 5,
            "topicId": "topic-03-diabetes",
            "topicName": "Diabetes Mellitus",
            "options": [
                { "id": "a", "text": "Type 1 Diabetes", "isCorrect": true },
                { "id": "b", "text": "Type 2 Diabetes", "isCorrect": false },
                { "id": "c", "text": "Gestational Diabetes", "isCorrect": false },
                { "id": "d", "text": "Insipidus Diabetes", "isCorrect": false }
            ],
            "explanation": "Type 1 diabetes is an autoimmune condition where the body attacks insulin-producing cells."
        },
        {
            "id": "comp-q8",
            "type": "fill-blank",
            "question": "Gestational diabetes occurs during __b1__ and may resolve after __b2__.",
            "points": 10,
            "topicId": "topic-03-diabetes",
            "topicName": "Diabetes Mellitus",
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["pregnancy"], "caseSensitive": false },
                { "id": "b2", "acceptedAnswers": ["birth", "delivery", "pregnancy"], "caseSensitive": false }
            ],
            "explanation": "Gestational diabetes occurs during pregnancy and often resolves after birth, though it increases future risk."
        },
        {
            "id": "comp-q9",
            "type": "multiple-select",
            "question": "Select the common symptoms of diabetes mellitus:",
            "points": 5,
            "topicId": "topic-03-diabetes",
            "topicName": "Diabetes Mellitus",
            "options": [
                { "id": "a", "text": "Increased thirst (polydipsia)", "isCorrect": true },
                { "id": "b", "text": "Frequent urination (polyuria)", "isCorrect": true },
                { "id": "c", "text": "Rapid weight gain", "isCorrect": false },
                { "id": "d", "text": "Slow-healing wounds", "isCorrect": true },
                { "id": "e", "text": "Hyperactivity", "isCorrect": false }
            ],
            "explanation": "Common symptoms include increased thirst, frequent urination, unexplained weight loss (not gain), and slow-healing wounds."
        },

        // --- Topic 4: Cancers ---
        {
            "id": "comp-q10",
            "type": "multiple-choice",
            "question": "Which infection is a major cause of cervical cancer and can be prevented via vaccination?",
            "points": 5,
            "topicId": "topic-04-cancers",
            "topicName": "Common Cancers",
            "options": [
                { "id": "a", "text": "Hepatitis B", "isCorrect": false },
                { "id": "b", "text": "Human Papillomavirus (HPV)", "isCorrect": true },
                { "id": "c", "text": "Helicobacter pylori", "isCorrect": false },
                { "id": "d", "text": "HIV", "isCorrect": false }
            ],
            "explanation": "HPV is a primary cause of cervical cancer; vaccines are available to prevent infection."
        },
        {
            "id": "comp-q11",
            "type": "multiple-select",
            "question": "Identify valid prevention strategies for cancer:",
            "points": 5,
            "topicId": "topic-04-cancers",
            "topicName": "Common Cancers",
            "options": [
                { "id": "a", "text": "Avoiding tobacco", "isCorrect": true },
                { "id": "b", "text": "Limiting alcohol consumption", "isCorrect": true },
                { "id": "c", "text": "Using sunscreen/avoiding excessive sun", "isCorrect": true },
                { "id": "d", "text": "Eliminating all carbohydrates", "isCorrect": false },
                { "id": "e", "text": "Vaccination against Hepatitis B", "isCorrect": true }
            ],
            "explanation": "Key strategies include avoiding tobacco/alcohol, sun protection, and vaccination. Eliminating all carbohydrates is not a standard prevention strategy."
        },

        // --- Topic 5: Other Disorders ---
        {
            "id": "comp-q12",
            "type": "true-false",
            "question": "You should restrain a person having an epileptic seizure to prevent them from hurting themselves.",
            "points": 5,
            "topicId": "topic-05-other-disorders",
            "topicName": "Epilepsy & Sickle Cell",
            "correctAnswer": false,
            "explanation": "Myth: Restraining a person during a seizure is dangerous and can cause injury. You should cushion their head and keep them safe from hazards."
        },
        {
            "id": "comp-q13",
            "type": "multiple-choice",
            "question": "Which of the following is true about Sickle Cell Anemia?",
            "points": 5,
            "topicId": "topic-05-other-disorders",
            "topicName": "Epilepsy & Sickle Cell",
            "options": [
                { "id": "a", "text": "It is a contagious blood disease", "isCorrect": false },
                { "id": "b", "text": "It is caused by an iron deficiency", "isCorrect": false },
                { "id": "c", "text": "It is an inherited genetic disorder affecting hemoglobin", "isCorrect": true },
                { "id": "d", "text": "It only affects adults over 50", "isCorrect": false }
            ],
            "explanation": "Sickle cell anemia is an inherited genetic disorder where abnormal hemoglobin causes red blood cells to change shape."
        },

        // --- Topic 6: Respiratory ---
        {
            "id": "comp-q14",
            "type": "matching",
            "question": "Match the respiratory condition with its description:",
            "points": 10,
            "topicId": "topic-06-respiratory",
            "topicName": "Respiratory Diseases",
            "pairs": [
                { "id": "p1", "left": "COPD", "right": "Progressive airflow limitation, includes emphysema" },
                { "id": "p2", "left": "Asthma", "right": "Chronic inflammation causing recurrent wheezing" }
            ]
        },
        {
            "id": "comp-q15",
            "type": "fill-blank",
            "question": "The primary risk factor for developing Chronic Obstructive Pulmonary Disease (COPD) is __b1__.",
            "points": 5,
            "topicId": "topic-06-respiratory",
            "topicName": "Respiratory Diseases",
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["smoking", "tobacco", "tobacco use", "cigarette smoking"], "caseSensitive": false }
            ],
            "explanation": "Smoking is the primary risk factor for COPD."
        },
        
        // --- General/Cross-cutting ---
        {
            "id": "comp-q16",
            "type": "ordering",
            "question": "Rank the following NCD risk factors from 'Behavioral' (cause) to 'Metabolic' (effect) to 'Disease Outcome':",
            "points": 10,
            "topicId": "topic-01-introduction",
            "topicName": "Introduction to NCDs",
            "items": [
                { "id": "i1", "text": "Unhealthy Diet (Behavioral)", "correctPosition": 1 },
                { "id": "i2", "text": "Obesity (Metabolic)", "correctPosition": 2 },
                { "id": "i3", "text": "Diabetes (Disease)", "correctPosition": 3 }
            ],
            "explanation": "The progression often flows from behavioral risks (diet) -> metabolic changes (obesity) -> disease outcome (diabetes)."
        }
    ]
});