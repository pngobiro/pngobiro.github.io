registerQuiz("comprehensive-exam", {
    "schemaVersion": "1.0",
    "quizId": "comprehensive-exam",
    "metadata": {
        "title": "Child Health Promotion Comprehensive Exam",
        "description": "A comprehensive assessment covering Child Immunization, School Health Programs, and Integrated Community Case Management.",
        "examType": "comprehensive",
        "topicsCovered": ["topic-01", "topic-02", "topic-03"],
        "difficulty": "advanced",
        "estimatedTime": 45,
        "passingScore": 75,
        "createdAt": "2022-05-20T00:00:00Z",
        "tags": ["final", "comprehensive", "kepi", "iccm", "school-health"]
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
        // --- TOPIC 1: IMMUNIZATION ---
        {
            "id": "t1-q1",
            "type": "multiple-choice",
            "question": "According to the Kenya Expanded Programme on Immunization, which of the following is the correct definition of the 'Cold Chain'?",
            "points": 5,
            "topicId": "topic-01",
            "topicName": "Unit 1: Immunization",
            "options": [
                { "id": "a", "text": "A system of ensuring vaccines are kept at room temperature during transport.", "isCorrect": false },
                { "id": "b", "text": "A system of ensuring vaccines are maintained at required low temperatures from production to the consumer.", "isCorrect": true },
                { "id": "c", "text": "The process of manufacturing vaccines in a cold environment.", "isCorrect": false },
                { "id": "d", "text": "The administration of vaccines during the cold season.", "isCorrect": false }
            ],
            "explanation": "The cold chain is defined as a system of ensuring that vaccines are maintained at the required low temperatures from the point of production until it reaches the consumer."
        },
        {
            "id": "t1-q2",
            "type": "multiple-select",
            "question": "Which of the following diseases are prevented by the 'Pentavalent' (DPT-HepB-Hib) vaccine? (Select all that apply)",
            "points": 5,
            "topicId": "topic-01",
            "topicName": "Unit 1: Immunization",
            "options": [
                { "id": "a", "text": "Diphtheria", "isCorrect": true },
                { "id": "b", "text": "Pertussis", "isCorrect": true },
                { "id": "c", "text": "Polio", "isCorrect": false },
                { "id": "d", "text": "Hepatitis B", "isCorrect": true },
                { "id": "e", "text": "Measles", "isCorrect": false },
                { "id": "f", "text": "Tetanus", "isCorrect": true }
            ],
            "explanation": "The Pentavalent vaccine contains five antigens: Diphtheria, Pertussis, Tetanus, Hepatitis B, and Haemophilus influenzae type b."
        },
        {
            "id": "t1-q3",
            "type": "matching",
            "question": "Match the vaccine to its correct administration schedule:",
            "points": 10,
            "topicId": "topic-01",
            "topicName": "Unit 1: Immunization",
            "pairs": [
                { "id": "p1", "left": "BCG", "right": "At Birth" },
                { "id": "p2", "left": "Measles", "right": "9 Months" },
                { "id": "p3", "left": "Yellow Fever", "right": "9 Months" },
                { "id": "p4", "left": "Pentavalent (3rd dose)", "right": "14th Week" }
            ]
        },
        {
            "id": "t1-q4",
            "type": "fill-blank",
            "question": "A fully immunized child is one who has received all prescribed antigens and at least __b1__ dose(s) of Vitamin A before the first birthday.",
            "points": 5,
            "topicId": "topic-01",
            "topicName": "Unit 1: Immunization",
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["one", "1"], "caseSensitive": false }
            ],
            "explanation": "A fully immunized child is one who has received all the prescribed antigens and at least one Vitamin A dose under the national immunization schedule before the first birthday."
        },
        {
            "id": "t1-q5",
            "type": "multiple-choice",
            "question": "What is the recommended Vitamin A dosage for a child aged 12 months (1 year)?",
            "points": 5,
            "topicId": "topic-01",
            "topicName": "Unit 1: Immunization",
            "options": [
                { "id": "a", "text": "50,000 IU", "isCorrect": false },
                { "id": "b", "text": "100,000 IU", "isCorrect": false },
                { "id": "c", "text": "200,000 IU", "isCorrect": true },
                { "id": "d", "text": "250,000 IU", "isCorrect": false }
            ],
            "explanation": "According to the Vitamin A schedule, children from 12 months up to 60 months receive 200,000 IU. Only the 6-month dose is 100,000 IU."
        },

        // --- TOPIC 2: SCHOOL HEALTH ---
        {
            "id": "t2-q1",
            "type": "multiple-choice",
            "question": "Which of the following best describes a 'Health Promoting School'?",
            "points": 5,
            "topicId": "topic-02",
            "topicName": "Unit 2: School Health",
            "options": [
                { "id": "a", "text": "A school that has a dispensary attached to it.", "isCorrect": false },
                { "id": "b", "text": "A school that constantly strengthens its capacity to be a healthy setting for living, learning and working.", "isCorrect": true },
                { "id": "c", "text": "A school that only teaches biology and health sciences.", "isCorrect": false },
                { "id": "d", "text": "A school located near a Level 4 hospital.", "isCorrect": false }
            ],
            "explanation": "Definition: A Health promoting school is one that is constantly strengthening its capacity to be a healthy setting for living, learning and working."
        },
        {
            "id": "t2-q2",
            "type": "true-false",
            "question": "According to the Guiding Principles of the School Health Policy, a child's health status and medical condition may be disclosed publicly to ensure community awareness.",
            "points": 5,
            "topicId": "topic-02",
            "topicName": "Unit 2: School Health",
            "correctAnswer": false,
            "explanation": "False. The principle of 'Privacy and Confidentiality' states that a child's health status shall NOT be disclosed to others without the consent of the child or legal guardian."
        },
        {
            "id": "t2-q3",
            "type": "multiple-select",
            "question": "Why are schools considered ideal settings for implementing health programmes? (Select all that apply)",
            "points": 5,
            "topicId": "topic-02",
            "topicName": "Unit 2: School Health",
            "options": [
                { "id": "a", "text": "They are an efficient channel to reach many people for introducing health promotion practices.", "isCorrect": true },
                { "id": "b", "text": "Learners are admitted at early stages when lifelong behaviors are being formed.", "isCorrect": true },
                { "id": "c", "text": "Improved health enhances cognitive development and academic performance.", "isCorrect": true },
                { "id": "d", "text": "Schools have more medical equipment than hospitals.", "isCorrect": false }
            ],
            "explanation": "Schools are efficient channels for Behavior Change Communication, capture learners at formative stages, and improved health directly links to better education outcomes (retention, participation, performance)."
        },
        {
            "id": "t2-q4",
            "type": "fill-blank",
            "question": "Every person has the right to clean and safe water in adequate quantities and reasonable standards of __b1__.",
            "points": 5,
            "topicId": "topic-02",
            "topicName": "Unit 2: School Health",
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["sanitation"], "caseSensitive": false }
            ],
            "explanation": "This is guaranteed by the Constitution of Kenya 2010 and is a core component of the WASH strategy in schools."
        },

        // --- TOPIC 3: ICCM ---
        {
            "id": "t3-q1",
            "type": "ordering",
            "question": "Arrange the general steps of assessing a sick child in the correct order:",
            "points": 10,
            "topicId": "topic-03",
            "topicName": "Unit 3: ICCM",
            "items": [
                { "id": "i1", "text": "Greet the caregiver and child", "correctPosition": 1 },
                { "id": "i2", "text": "Ask the caregiver what the child's problems are", "correctPosition": 2 },
                { "id": "i3", "text": "Look at the child for signs of illness", "correctPosition": 3 },
                { "id": "i4", "text": "Record information in the sick child recording form", "correctPosition": 4 }
            ]
        },
        {
            "id": "t3-q2",
            "type": "multiple-choice",
            "question": "What is the cut-off for 'fast breathing' in a child aged 12 months up to 5 years?",
            "points": 5,
            "topicId": "topic-03",
            "topicName": "Unit 3: ICCM",
            "options": [
                { "id": "a", "text": "60 breaths or more per minute", "isCorrect": false },
                { "id": "b", "text": "50 breaths or more per minute", "isCorrect": false },
                { "id": "c", "text": "40 breaths or more per minute", "isCorrect": true },
                { "id": "d", "text": "30 breaths or more per minute", "isCorrect": false }
            ],
            "explanation": "For a child age 12 months up to 5 years, fast breathing is 40 breaths or more per minute. (50 breaths is for 2-12 months)."
        },
        {
            "id": "t3-q3",
            "type": "matching",
            "question": "Match the MUAC measurement (colour code) with its classification:",
            "points": 10,
            "topicId": "topic-03",
            "topicName": "Unit 3: ICCM",
            "pairs": [
                { "id": "p1", "left": "Less than 11.5cm (RED)", "right": "Severe Acute Malnutrition (SAM)" },
                { "id": "p2", "left": "11.5cm to 12.5cm (YELLOW)", "right": "Moderate Acute Malnutrition (MAM)" },
                { "id": "p3", "left": "Over 12.5cm (GREEN)", "right": "Well Nourished" }
            ]
        },
        {
            "id": "t3-q4",
            "type": "multiple-select",
            "question": "Which of the following are considered general danger signs in a sick child? (Select all that apply)",
            "points": 5,
            "topicId": "topic-03",
            "topicName": "Unit 3: ICCM",
            "options": [
                { "id": "a", "text": "Vomiting everything", "isCorrect": true },
                { "id": "b", "text": "Convulsions", "isCorrect": true },
                { "id": "c", "text": "Running nose", "isCorrect": false },
                { "id": "d", "text": "Chest in-drawing", "isCorrect": true },
                { "id": "e", "text": "Unusually sleepy or unconscious", "isCorrect": true }
            ],
            "explanation": "Danger signs include: not able to drink or feed, vomiting everything, convulsions, unusually sleepy or unconscious, and chest in-drawing (sign of severe pneumonia)."
        },
        {
            "id": "t3-q5",
            "type": "image-based",
            "question": "Identify the type of malnutrition shown in the image based on the visible signs (severe wasting/emaciation):",
            "points": 10,
            "topicId": "topic-03",
            "topicName": "Unit 3: ICCM",
            "media": {
                "type": "image",
                "url": "assets/images/image-20260111-a94cee04.jpeg",
                "alt": "Child showing signs of severe wasting with ribs visible"
            },
            "options": [
                { "id": "a", "text": "Kwashiorkor", "isCorrect": false },
                { "id": "b", "text": "Marasmus", "isCorrect": true },
                { "id": "c", "text": "Obesity", "isCorrect": false }
            ],
            "explanation": "The image shows Marasmus, characterized by extreme emaciation, visible ribs, and 'old man's appearance' due to loss of fat and muscle."
        },
        {
            "id": "t3-q6",
            "type": "short-answer",
            "question": "When checking for edema in a child, where should you apply thumb pressure and for how long?",
            "points": 10,
            "topicId": "topic-03",
            "topicName": "Unit 3: ICCM",
            "keywords": ["feet", "foot", "both", "seconds", "three", "3", "ankle", "tops"],
            "minKeywords": 3,
            "modelAnswer": "Apply moderate thumb pressure just above the ankle or the tops of the feet for about three seconds on both feet at the same time.",
            "explanation": "Pressure must be applied to BOTH feet simultaneously for 3 seconds to check for bilateral pitting edema."
        }
    ]
});