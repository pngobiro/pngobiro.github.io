registerQuiz("comprehensive-exam", {
    "schemaVersion": "1.0",
    "quizId": "comprehensive-exam",
    "title": "Comprehensive Final Exam: Home-Based Care",
    "description": "A comprehensive assessment covering concepts, infection prevention, patient management, HBC components, community mobilisation, resources, and referral systems.",
    "metadata": {
        "title": "Comprehensive Final Exam",
        "description": "Test your mastery of Unit 7: Home-Based Care",
        "topicId": "comprehensive",
        "difficulty": "advanced",
        "estimatedTime": 60,
        "passingScore": 70,
        "createdAt": "2026-01-17T12:00:00Z",
        "updatedAt": "2026-01-17T12:00:00Z",
        "tags": ["hbc", "final-exam", "comprehensive", "community-health"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "end",
        "allowRetry": false,
        "showCorrectAnswers": false,
        "timeLimit": 3600
    },
    "questions": [
        /* --- TOPIC 1: CONCEPTS & PRINCIPLES --- */
        {
            "id": "ce-q01",
            "type": "multiple-choice",
            "question": "Which of the following best defines Home-Based Care (HBC)?",
            "points": 1,
            "options": [
                {
                    "id": "opt1",
                    "text": "Care provided exclusively by hospital staff within a health facility setting.",
                    "isCorrect": false
                },
                {
                    "id": "opt2",
                    "text": "The care of persons with chronic/terminal illnesses extended from the hospital to the home through family and community involvement.",
                    "isCorrect": true
                },
                {
                    "id": "opt3",
                    "text": "A program designed solely for the distribution of free medication to rural communities.",
                    "isCorrect": false
                },
                {
                    "id": "opt4",
                    "text": "Care provided entirely by untrained family members without any professional collaboration.",
                    "isCorrect": false
                }
            ],
            "explanation": "HBC is defined as care extended from the hospital/health facility to the patients' homes through family participation and community involvement in collaboration with health workers."
        },
        {
            "id": "ce-q02",
            "type": "multiple-select",
            "question": "Which of the following are recognized components of Home-Based Care? (Select all that apply)",
            "points": 2,
            "options": [
                { "id": "opt1", "text": "Clinical Care", "isCorrect": true },
                { "id": "opt2", "text": "Nursing Care", "isCorrect": true },
                { "id": "opt3", "text": "Counselling and Psychospiritual Care", "isCorrect": true },
                { "id": "opt4", "text": "Social Support", "isCorrect": true },
                { "id": "opt5", "text": "Surgical Intervention", "isCorrect": false }
            ],
            "explanation": "The four major components of comprehensive HBC are Clinical Care, Nursing Care, Counselling/Psychospiritual Care, and Social Support."
        },
        {
            "id": "ce-q03",
            "type": "matching",
            "question": "Match the key player in HBC with their primary role:",
            "points": 4,
            "pairs": [
                {
                    "id": "pair1",
                    "left": "The Patient",
                    "right": "Identify primary caregiver and participate in care decisions"
                },
                {
                    "id": "pair2",
                    "left": "Family Members",
                    "right": "Learn to accept the situation and collaborate with other providers"
                },
                {
                    "id": "pair3",
                    "left": "Home Care Team",
                    "right": "Provide nursing care, manage conditions, and train caregivers"
                },
                {
                    "id": "pair4",
                    "left": "Government",
                    "right": "Create supportive policy environment and develop guidelines"
                }
            ],
            "explanation": "Each player has a distinct role: Patients participate in decisions; Families provide daily care and acceptance; Teams provide professional/supportive services; Government provides policy and resources."
        },

        /* --- TOPIC 2: INFECTION PREVENTION --- */
        {
            "id": "ce-q04",
            "type": "true-false",
            "question": "Standard precautions should only be applied when a patient is known to be HIV positive.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "Standard precautions are 'standard' because they must be followed routinely ALL the time for ALL patients, regardless of their diagnosis, to minimize risk of infection."
        },
        {
            "id": "ce-q05",
            "type": "fill-blank",
            "question": "To decontaminate soiled items in a home setting, they should be soaked in __b1__ solution with a concentration of 1:6 for __b2__ minutes.",
            "points": 2,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["jik", "chlorine", "bleach"], "caseSensitive": false },
                { "id": "b2", "acceptedAnswers": ["10", "ten"], "caseSensitive": false }
            ],
            "explanation": "The recommended decontamination procedure for soiled items is soaking in Jik (chlorine) at a 1:6 concentration for 10 minutes."
        },
        {
            "id": "ce-q06",
            "type": "ordering",
            "question": "Arrange the steps for processing instruments in the correct order:",
            "points": 3,
            "items": [
                { "id": "step1", "text": "Decontamination (Soak in 0.5% chlorine)", "correctPosition": 1 },
                { "id": "step2", "text": "Cleaning (Wash with brush, detergent, and water)", "correctPosition": 2 },
                { "id": "step3", "text": "Sterilisation or High-Level Disinfection", "correctPosition": 3 },
                { "id": "step4", "text": "Storage / Use", "correctPosition": 4 }
            ],
            "explanation": "Instruments must be decontaminated first to make them safe to touch, then cleaned to remove organic matter, and finally sterilized or high-level disinfected."
        },
        {
            "id": "ce-q07",
            "type": "matching",
            "question": "Match the cleaning agent to its correct classification:",
            "points": 2,
            "pairs": [
                { "id": "p1", "left": "Chlorhexidine (Savlon)", "right": "Antiseptic (for skin)" },
                { "id": "p2", "left": "Glutaraldehyde (Cidex)", "right": "High-level Disinfectant" },
                { "id": "p3", "left": "Phenol (Carbolic acid)", "right": "Low-level Disinfectant" },
                { "id": "p4", "left": "Iodine", "right": "Antiseptic (for skin)" }
            ],
            "explanation": "Antiseptics are for living tissue (skin/mucous membranes); Disinfectants are for inanimate objects. Glutaraldehyde is high-level; Phenols are low-level."
        },

        /* --- TOPIC 3: PATIENT MANAGEMENT --- */
        {
            "id": "ce-q08",
            "type": "multiple-select",
            "question": "Which of the following are classified as MAJOR signs of AIDS in adults? (Select all that apply)",
            "points": 2,
            "options": [
                { "id": "opt1", "text": "Unexplained 10% weight loss in less than one month", "isCorrect": true },
                { "id": "opt2", "text": "Persistent diarrhoea for over one month", "isCorrect": true },
                { "id": "opt3", "text": "Fever for over one month", "isCorrect": true },
                { "id": "opt4", "text": "Oral thrush", "isCorrect": false },
                { "id": "opt5", "text": "Generalised enlarged lymph nodes", "isCorrect": false }
            ],
            "explanation": "The three major signs in adults are: Weight loss (>10%), Chronic diarrhoea (>1 month), and Fever (>1 month). Thrush and lymph nodes are minor signs."
        },
        {
            "id": "ce-q09",
            "type": "multiple-choice",
            "question": "In the phases of HIV/AIDS, 'Phase 1' corresponds to which of the following?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "The AIDS phase with full-blown symptoms", "isCorrect": false },
                { "id": "opt2", "text": "The detection stage where antibodies are visible", "isCorrect": false },
                { "id": "opt3", "text": "The entry phase where HIV is present but not detectable by standard lab tests", "isCorrect": true },
                { "id": "opt4", "text": "The terminal phase", "isCorrect": false }
            ],
            "explanation": "Phase 1 is the entry/window period (up to 6 months) where HIV is present but not detectable. Phase 2 is detection/asymptomatic. Phase 3 is AIDS."
        },
        {
            "id": "ce-q10",
            "type": "matching",
            "question": "Match the level of cancer prevention with its description:",
            "points": 3,
            "pairs": [
                { "id": "p1", "left": "Primary Prevention", "right": "Lifestyle changes (stop smoking, limit alcohol/fat)" },
                { "id": "p2", "left": "Secondary Prevention", "right": "Screening (Pap smear, breast exam) before symptoms appear" },
                { "id": "p3", "left": "Tertiary Prevention", "right": "Early and quick treatment before effects become widespread" }
            ],
            "explanation": "Primary prevents the disease occurring; Secondary identifies it early via screening; Tertiary treats it to prevent complications."
        },
        {
            "id": "ce-q11",
            "type": "short-answer",
            "question": "Name one common home remedy ingredient mentioned in the text for treating pressure sores.",
            "points": 1,
            "keywords": ["papaya", "pawpaw", "honey", "sugar", "molasses"],
            "modelAnswer": "Papaya (pawpaw) milk or a mixture of honey and sugar.",
            "explanation": "The text suggests packing sores with papaya milk (to remove old flesh) or a honey/sugar paste (to kill germs and speed healing)."
        },

        /* --- TOPIC 4: COMPONENTS OF HBC --- */
        {
            "id": "ce-q12",
            "type": "ordering",
            "question": "Place the steps for a bed bath in the correct logical sequence:",
            "points": 3,
            "items": [
                { "id": "s1", "text": "Assemble equipment and supplies", "correctPosition": 1 },
                { "id": "s2", "text": "Explain procedure to the patient", "correctPosition": 2 },
                { "id": "s3", "text": "Bathe the patient", "correctPosition": 3 },
                { "id": "s4", "text": "Clean materials and dispose of waste", "correctPosition": 4 },
                { "id": "s5", "text": "Wash and dry hands", "correctPosition": 5 }
            ],
            "explanation": "Standard nursing procedure: Preparation -> Explanation -> Execution -> Aftercare -> Hygiene."
        },
        {
            "id": "ce-q13",
            "type": "matching",
            "question": "Match the food group with its function:",
            "points": 3,
            "pairs": [
                { "id": "p1", "left": "Body Building Foods (Proteins)", "right": "Support function/formation of tissues, muscles, bones" },
                { "id": "p2", "left": "Energy Giving Foods (Carbohydrates/Fats)", "right": "Provide the body with fuel for activity" },
                { "id": "p3", "left": "Protective Foods (Vitamins/Minerals)", "right": "Strengthen the immune system" }
            ],
            "explanation": "Proteins build body; Carbs/Fats give energy; Vitamins/Minerals protect against infection."
        },
        {
            "id": "ce-q14",
            "type": "multiple-select",
            "question": "Which of the following are considered 'High Risk' nutritional signs that require immediate action? (Select all that apply)",
            "points": 2,
            "options": [
                { "id": "opt1", "text": "Weight loss of >10% in less than two weeks", "isCorrect": true },
                { "id": "opt2", "text": "Pain when swallowing (Odynophagia)", "isCorrect": true },
                { "id": "opt3", "text": "Feeling hungry at normal meal times", "isCorrect": false },
                { "id": "opt4", "text": "Diarrhoea", "isCorrect": true }
            ],
            "explanation": "Rapid weight loss, pain/difficulty swallowing, and diarrhoea are high-risk signs. Normal hunger is a healthy sign."
        },
        {
            "id": "ce-q15",
            "type": "multiple-choice",
            "question": "For a patient with a sore mouth/throat, which dietary advice is appropriate?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Eat hot, spicy foods to clear the throat", "isCorrect": false },
                { "id": "opt2", "text": "Eat soft mashed foods and cold foods/drinks", "isCorrect": true },
                { "id": "opt3", "text": "Eat citrus fruits like lemons and oranges", "isCorrect": false },
                { "id": "opt4", "text": "Avoid drinking liquids", "isCorrect": false }
            ],
            "explanation": "Soft, cold, non-acidic foods soothe the mouth. Spicy, hot, or citrus foods irritate sores."
        },

        /* --- TOPIC 5: COMMUNITY MOBILISATION --- */
        {
            "id": "ce-q16",
            "type": "multiple-choice",
            "question": "What is the primary definition of 'Community Mobilisation'?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Forcing the community to donate money.", "isCorrect": false },
                { "id": "opt2", "text": "The process of getting the community incorporated to fully participate in programmes for ownership and sustainability.", "isCorrect": true },
                { "id": "opt3", "text": "Moving people from one village to another.", "isCorrect": false },
                { "id": "opt4", "text": "A government program to census the population.", "isCorrect": false }
            ],
            "explanation": "Mobilisation is about incorporation, participation, ownership, and sustainability."
        },
        {
            "id": "ce-q17",
            "type": "ordering",
            "question": "Arrange the 4 steps of the community mobilisation process in order:",
            "points": 3,
            "items": [
                { "id": "s1", "text": "Planning and Organising Yourself", "correctPosition": 1 },
                { "id": "s2", "text": "Entering the Community", "correctPosition": 2 },
                { "id": "s3", "text": "Conducting Mobilisation Sessions", "correctPosition": 3 },
                { "id": "s4", "text": "Monitoring Response and Reinforcement", "correctPosition": 4 }
            ],
            "explanation": "Plan -> Enter -> Conduct -> Monitor."
        },
        {
            "id": "ce-q18",
            "type": "multiple-select",
            "question": "Which of the following are potential solutions to constraints hindering community mobilisation? (Select all that apply)",
            "points": 2,
            "options": [
                { "id": "opt1", "text": "Training and skills development", "isCorrect": true },
                { "id": "opt2", "text": "Ignoring traditional beliefs", "isCorrect": false },
                { "id": "opt3", "text": "Encouraging Income Generating Activities (IGA)", "isCorrect": true },
                { "id": "opt4", "text": "Community sensitisation and involvement from the beginning", "isCorrect": true }
            ],
            "explanation": "Solutions include training, IGAs, early involvement, and using appropriate communication. Ignoring beliefs hinders rather than helps."
        },

        /* --- TOPIC 6: COMMUNITY RESOURCES --- */
        {
            "id": "ce-q19",
            "type": "fill-blank",
            "question": "The resources needed for HBC are often classified into four categories known as the '4 Ms'. These are Money, Materials, __b1__, and Manpower.",
            "points": 1,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["minutes", "time"], "caseSensitive": false }
            ],
            "explanation": "The 4 Ms are Money, Materials, Minutes (Time), and Manpower."
        },
        {
            "id": "ce-q20",
            "type": "multiple-select",
            "question": "Which of the following are examples of 'Appropriate Technology' or low-cost technologies for HBC? (Select all that apply)",
            "points": 2,
            "options": [
                { "id": "opt1", "text": "Solar food dryer", "isCorrect": true },
                { "id": "opt2", "text": "Charcoal water filter", "isCorrect": true },
                { "id": "opt3", "text": "Electric dialysis machine", "isCorrect": false },
                { "id": "opt4", "text": "Tippy-tap or leaky tin for handwashing", "isCorrect": true }
            ],
            "explanation": "Appropriate technologies are low-cost, locally available solutions like solar dryers, charcoal filters, and leaky tins. High-tech medical equipment is not considered 'appropriate technology' in this context."
        },
        {
            "id": "ce-q21",
            "type": "matching",
            "question": "Match the resource source with what they primarily provide:",
            "points": 3,
            "pairs": [
                { "id": "p1", "left": "Family", "right": "Basic needs (food, shelter), physical care, love" },
                { "id": "p2", "left": "Community", "right": "Social support, spiritual support, volunteer manpower" },
                { "id": "p3", "left": "Individual (Patient)", "right": "Home environment, cooperation, will to live" }
            ],
            "explanation": "The Family provides daily care; Community provides broader support; The Patient provides the setting and cooperation."
        },

        /* --- TOPIC 7: REFERRAL & NETWORKING --- */
        {
            "id": "ce-q22",
            "type": "multiple-choice",
            "question": "What is a 'Network' in the context of HBC?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "A computer system connecting hospitals.", "isCorrect": false },
                { "id": "opt2", "text": "A group of individuals/organisations working together to strengthen individual capacities.", "isCorrect": true },
                { "id": "opt3", "text": "A list of patients waiting for care.", "isCorrect": false },
                { "id": "opt4", "text": "A government agency controlling NGOs.", "isCorrect": false }
            ],
            "explanation": "A network is defined as a group working together/exchanging information to strengthen capacities."
        },
        {
            "id": "ce-q23",
            "type": "multiple-select",
            "question": "Why might a patient be referred? (Select all that apply)",
            "points": 2,
            "options": [
                { "id": "opt1", "text": "When services within reach cannot meet immediate needs", "isCorrect": true },
                { "id": "opt2", "text": "To transfer care to the community after the acute phase is over", "isCorrect": true },
                { "id": "opt3", "text": "When the caregiver experiences burnout", "isCorrect": true },
                { "id": "opt4", "text": "To avoid treating the patient", "isCorrect": false }
            ],
            "explanation": "Referral is done for specialized care, continuity (discharge to home), or caregiver limitations/burnout. It is never to avoid treatment."
        },
        {
            "id": "ce-q24",
            "type": "true-false",
            "question": "Referral is a one-way process where the hospital sends a patient home.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "Referral is an effective and efficient TWO-WAY process of linking a patient from one caring service to another (e.g., Hospital to Home, Home to Hospital)."
        },
        {
            "id": "ce-q25",
            "type": "ordering",
            "question": "Order the steps of referring a patient:",
            "points": 3,
            "items": [
                { "id": "s1", "text": "Identify need for referral", "correctPosition": 1 },
                { "id": "s2", "text": "Decide destination and make arrangements", "correctPosition": 2 },
                { "id": "s3", "text": "Explain referral to the patient", "correctPosition": 3 },
                { "id": "s4", "text": "Fill referral form and obtain escort", "correctPosition": 4 },
                { "id": "s5", "text": "Follow up on the referral", "correctPosition": 5 }
            ],
            "explanation": "Identify -> Arrange -> Explain -> Execute (Form/Escort) -> Follow up."
        }
    ]
});