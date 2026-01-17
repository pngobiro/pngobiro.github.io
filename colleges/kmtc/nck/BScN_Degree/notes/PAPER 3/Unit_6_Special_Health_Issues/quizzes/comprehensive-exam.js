registerQuiz("comprehensive-exam", {
    "schemaVersion": "1.0",
    "quizId": "comprehensive-exam",
    "metadata": {
        "title": "Comprehensive Final Exam: Special Health Issues",
        "description": "A comprehensive assessment covering Special Health Needs, Disaster Management, School Health Programmes, and Occupational Health Services.",
        "topicId": "comprehensive",
        "difficulty": "intermediate",
        "estimatedTime": 60,
        "passingScore": 80,
        "createdAt": "2026-01-17T12:00:00Z",
        "updatedAt": "2026-01-17T12:00:00Z",
        "tags": ["comprehensive", "exam", "special-needs", "disaster", "school-health", "occupational-health"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "end",
        "allowRetry": true,
        "showCorrectAnswers": true,
        "timeLimit": 3600
    },
    "questions": [
        // --- TOPIC 1: SPECIAL HEALTH NEEDS ---
        {
            "id": "comp-q1",
            "type": "multiple-choice",
            "question": "According to the text, how is 'disability' defined?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "A physical, emotional or mental injury or illness that is severe or permanent, interfering with normal growth, development or ability to learn or work.", "isCorrect": true },
                { "id": "opt2", "text": "Any condition that stops a part of the body from functioning fully.", "isCorrect": false },
                { "id": "opt3", "text": "A temporary loss of function due to accidental injury.", "isCorrect": false },
                { "id": "opt4", "text": "A condition solely related to motor defects found at birth.", "isCorrect": false }
            ],
            "explanation": "A disability is defined as a physical, emotional or mental injury or illness that is severe or permanent, that interferes with an individual's normal growth, development or ability to learn or work. 'Impairment' is defined as anything that stops a part of the body from functioning fully."
        },
        {
            "id": "comp-q2",
            "type": "matching",
            "question": "Match the type of ear pathology to the part of the ear it primarily affects.",
            "points": 3,
            "pairs": [
                { "id": "p1", "left": "Tubal Catarrh", "right": "Middle Ear" },
                { "id": "p2", "left": "Meniere's Disease", "right": "Inner Ear" },
                { "id": "p3", "left": "Acoustic Neuroma", "right": "Inner Ear (Auditory Nerve)" },
                { "id": "p4", "left": "Chronic Otitis Media", "right": "Middle Ear" }
            ],
            "explanation": "Tubal catarrh and Chronic Otitis Media affect the Middle Ear. Meniere's disease and Acoustic Neuroma (tumour of the auditory nerve) affect the Inner Ear structures."
        },
        {
            "id": "comp-q3",
            "type": "multiple-select",
            "question": "Which of the following are listed as causes of visual impairment?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Trachoma", "isCorrect": true },
                { "id": "opt2", "text": "Vitamin A deficiency", "isCorrect": true },
                { "id": "opt3", "text": "Diabetes Mellitus", "isCorrect": false },
                { "id": "opt4", "text": "Diabetic Retinopathy", "isCorrect": true },
                { "id": "opt5", "text": "Otitis Media", "isCorrect": false }
            ],
            "explanation": "Trachoma, Vitamin A deficiency, and Diabetic Retinopathy are specific causes of visual impairment listed. Diabetes Mellitus is a systemic disease, but 'Diabetic Retinopathy' is the specific ocular cause."
        },
        {
            "id": "comp-q4",
            "type": "true-false",
            "question": "In Kenya, the elderly are formally defined as persons aged 55 years and above.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "In Kenya, the elderly are defined as persons aged 64 years and above, although the retirement age is 55 years."
        },
        {
            "id": "comp-q5",
            "type": "multiple-select",
            "question": "Which of the following criteria classify an illness as 'chronic'?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "It is permanent", "isCorrect": true },
                { "id": "opt2", "text": "It leaves a residual disability", "isCorrect": true },
                { "id": "opt3", "text": "It is caused by reversible pathological conditions", "isCorrect": false },
                { "id": "opt4", "text": "It requires special rehabilitative training", "isCorrect": true }
            ],
            "explanation": "Chronic illnesses are permanent, leave residual disability, are caused by NON-reversible pathological conditions, and require special rehabilitative training or long-term supervision."
        },
        {
            "id": "comp-q6",
            "type": "fill-blank",
            "question": "People who have run away from their country as a result of civil war or political persecution are known as __id1__.",
            "points": 1,
            "blanks": [
                {
                    "id": "id1",
                    "acceptedAnswers": ["refugees", "externally displaced persons"],
                    "caseSensitive": false
                }
            ],
            "explanation": "Externally displaced persons are also known as refugees."
        },
        {
            "id": "comp-q7",
            "type": "multiple-choice",
            "question": "What is the traditional support system found in many communities that assists widows and widowers?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "The Extended Family", "isCorrect": true },
                { "id": "opt2", "text": "The Pension Scheme", "isCorrect": false },
                { "id": "opt3", "text": "The National Hospital Insurance Fund", "isCorrect": false },
                { "id": "opt4", "text": "Non-Governmental Organizations", "isCorrect": false }
            ],
            "explanation": "In many communities, the traditional support system for a widow or widower is the extended family."
        },

        // --- TOPIC 2: DISASTER MANAGEMENT ---
        {
            "id": "comp-q8",
            "type": "multiple-choice",
            "question": "Which of the following is defined as 'a catastrophic phenomenon that threatens or causes widespread severe injury or loss of life sufficient to warrant extraordinary response from outside the community'?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "A Disaster", "isCorrect": true },
                { "id": "opt2", "text": "A Hazard", "isCorrect": false },
                { "id": "opt3", "text": "An Accident", "isCorrect": false },
                { "id": "opt4", "text": "A Vulnerability", "isCorrect": false }
            ],
            "explanation": "This is the definition of a disaster provided in the text."
        },
        {
            "id": "comp-q9",
            "type": "multiple-select",
            "question": "Select the four policy elements that underpin Kenya's disaster management policy.",
            "points": 2,
            "options": [
                { "id": "opt1", "text": "Prevention", "isCorrect": true },
                { "id": "opt2", "text": "Mitigation", "isCorrect": true },
                { "id": "opt3", "text": "Preparedness", "isCorrect": true },
                { "id": "opt4", "text": "Elimination", "isCorrect": false },
                { "id": "opt5", "text": "Response and Recovery", "isCorrect": true },
                { "id": "opt6", "text": "Compensation", "isCorrect": false }
            ],
            "explanation": "The four policy elements are Prevention, Mitigation, Preparedness, and Response and Recovery."
        },
        {
            "id": "comp-q10",
            "type": "matching",
            "question": "Match the Triage Priority Level to the correct Color Code.",
            "points": 2,
            "pairs": [
                { "id": "p1", "left": "Priority 1 (Immediate)", "right": "Red" },
                { "id": "p2", "left": "Priority 2 (Urgent)", "right": "Yellow" },
                { "id": "p3", "left": "Priority 3 (Delayed)", "right": "Green" },
                { "id": "p4", "left": "Priority 4 (Deceased)", "right": "Black" }
            ],
            "explanation": "Red is Immediate/Life-threatening. Yellow is Urgent (can delay 1hr). Green is Delayed/Walking Wounded (up to 3hrs). Black is Deceased."
        },
        {
            "id": "comp-q11",
            "type": "multiple-choice",
            "question": "In the context of triage, what does the acronym SOAP stand for?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Subjective assessment, Objective assessment, Assessment of diagnosis, Plan of care", "isCorrect": true },
                { "id": "opt2", "text": "Symptoms, Observation, Analysis, Prescription", "isCorrect": false },
                { "id": "opt3", "text": "Safety, Organization, Assessment, Priority", "isCorrect": false },
                { "id": "opt4", "text": "Subjective, Observation, Action, Protocol", "isCorrect": false }
            ],
            "explanation": "SOAP stands for S-Subjective assessment, O-Objective assessment, A-Assessment of clinical impressions/diagnosis, P-Plan of care."
        },
        {
            "id": "comp-q12",
            "type": "true-false",
            "question": "According to rapid triage notes, all unconscious patients are classified as Priority 1 (Immediate).",
            "points": 1,
            "correctAnswer": true,
            "explanation": "The notes state: 'All unconscious patients are Priority 1 - Immediate'."
        },
        {
            "id": "comp-q13",
            "type": "fill-blank",
            "question": "The measure that increases a population's ability to cope with disaster most likely to affect them is known as __id1__.",
            "points": 1,
            "blanks": [
                {
                    "id": "id1",
                    "acceptedAnswers": ["mitigation"],
                    "caseSensitive": false
                }
            ],
            "explanation": "Mitigation is defined as increasing the population's ability to cope with disaster most likely to affect them."
        },
        {
            "id": "comp-q14",
            "type": "ordering",
            "question": "Arrange the phases of disaster management in the logical sequence presented in the policy elements.",
            "points": 2,
            "items": [
                { "id": "i1", "text": "Prevention", "correctPosition": 1 },
                { "id": "i2", "text": "Mitigation", "correctPosition": 2 },
                { "id": "i3", "text": "Preparedness", "correctPosition": 3 },
                { "id": "i4", "text": "Response and Recovery", "correctPosition": 4 }
            ],
            "explanation": "The policy elements are presented in this order: Prevention, Mitigation, Preparedness, and Response and Recovery."
        },

        // --- TOPIC 3: SCHOOL HEALTH ---
        {
            "id": "comp-q15",
            "type": "multiple-select",
            "question": "Who are considered members of the school health team?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Teachers", "isCorrect": true },
                { "id": "opt2", "text": "Pupils and students", "isCorrect": true },
                { "id": "opt3", "text": "Parents", "isCorrect": true },
                { "id": "opt4", "text": "Community health nurse", "isCorrect": true },
                { "id": "opt5", "text": "Local police officer", "isCorrect": false }
            ],
            "explanation": "The team includes Teachers, Pupils/students, Parents, Community leaders, and the Community health nurse."
        },
        {
            "id": "comp-q16",
            "type": "multiple-choice",
            "question": "Which of the following is NOT listed as a basic need for a school child?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Employment", "isCorrect": true },
                { "id": "opt2", "text": "A stable home", "isCorrect": false },
                { "id": "opt3", "text": "Proper nutrition", "isCorrect": false },
                { "id": "opt4", "text": "Freedom from fatigue", "isCorrect": false }
            ],
            "explanation": "Employment is not a need of the school child. Needs include stable home, nutrition, freedom from fatigue, clothing, good sight/hearing, freedom from infection, pure water, and clean buildings."
        },
        {
            "id": "comp-q17",
            "type": "matching",
            "question": "Match the physical examination finding to the body part being assessed.",
            "points": 3,
            "pairs": [
                { "id": "p1", "left": "Bitot's spots (Keratomalacia)", "right": "Eyes" },
                { "id": "p2", "left": "Tinea capitis", "right": "Head/Hair" },
                { "id": "p3", "left": "Spoon shaped nails", "right": "Fingers (Iron deficiency)" },
                { "id": "p4", "left": "Fluorosis (Mottled appearance)", "right": "Teeth" }
            ],
            "explanation": "Bitot's spots/Keratomalacia affect the eyes (Vitamin A deficiency). Tinea capitis affects the head/hair. Spoon shaped nails indicate iron deficiency anaemia. Fluorosis affects teeth."
        },
        {
            "id": "comp-q18",
            "type": "fill-blank",
            "question": "When inspecting school furniture, the children's __id1__ should be able to touch the floor when they are seated.",
            "points": 1,
            "blanks": [
                {
                    "id": "id1",
                    "acceptedAnswers": ["feet"],
                    "caseSensitive": false
                }
            ],
            "explanation": "Proper furniture ergonomics requires that children's feet should be able to touch the floor."
        },
        {
            "id": "comp-q19",
            "type": "true-false",
            "question": "The health sector retains the responsibility for the health of children, while the education sector is responsible for implementing school-based programmes.",
            "points": 1,
            "correctAnswer": true,
            "explanation": "This statement accurately reflects the partnership described: Health sector is responsible for health, Education sector for implementation/funding."
        },

        // --- TOPIC 4: OCCUPATIONAL HEALTH ---
        {
            "id": "comp-q20",
            "type": "multiple-choice",
            "question": "Which of the following best defines 'Occupational Health'?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "The physical, mental and social well being of a person in relation to their work and working environment.", "isCorrect": true },
                { "id": "opt2", "text": "The treatment of injuries sustained only within factory settings.", "isCorrect": false },
                { "id": "opt3", "text": "The management of communicable diseases within the office.", "isCorrect": false },
                { "id": "opt4", "text": "The provision of health insurance to employees.", "isCorrect": false }
            ],
            "explanation": "Occupational health is defined as the physical, mental and social well being of a person in relation to their work and working environment, as well as adjustment to work."
        },
        {
            "id": "comp-q21",
            "type": "matching",
            "question": "Match the specific hazard to its category.",
            "points": 2,
            "pairs": [
                { "id": "p1", "left": "Noise and Vibration", "right": "Physical Hazard" },
                { "id": "p2", "left": "Toxic Dust/Gases", "right": "Chemical Hazard" },
                { "id": "p3", "left": "Anthrax/Tetanus", "right": "Biological Hazard" },
                { "id": "p4", "left": "Occupational Stress", "right": "Psychosocial Hazard" }
            ],
            "explanation": "Noise/Vibration are physical. Dusts/Gases are chemical. Anthrax is biological (infective). Stress is psychosocial."
        },
        {
            "id": "comp-q22",
            "type": "multiple-choice",
            "question": "What is the MOST effective preventive measure for dealing with a hazard?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Removing the hazard or toxic substance from the workplace.", "isCorrect": true },
                { "id": "opt2", "text": "Wearing protective clothing.", "isCorrect": false },
                { "id": "opt3", "text": "Increasing ventilation.", "isCorrect": false },
                { "id": "opt4", "text": "Providing good washing facilities.", "isCorrect": false }
            ],
            "explanation": "The text states: 'The best preventive measure is to get rid of the substance, chemical or machine altogether and find a less dangerous alternative.'"
        },
        {
            "id": "comp-q23",
            "type": "multiple-select",
            "question": "What are the objectives of a Preplacement Examination?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Determine suitability for a particular job", "isCorrect": true },
                { "id": "opt2", "text": "Detect untreated pathological conditions", "isCorrect": true },
                { "id": "opt3", "text": "Provide a baseline record for future comparison", "isCorrect": true },
                { "id": "opt4", "text": "Determine the retirement benefits of the employee", "isCorrect": false }
            ],
            "explanation": "Preplacement exams aim to determine job suitability, detect conditions/disease, and provide a baseline record."
        },
        {
            "id": "comp-q24",
            "type": "fill-blank",
            "question": "In the context of occupational health, __id1__ prevention anticipates problems and tries to avoid them before they occur, for example through good construction of machines.",
            "points": 1,
            "blanks": [
                {
                    "id": "id1",
                    "acceptedAnswers": ["primary"],
                    "caseSensitive": false
                }
            ],
            "explanation": "Primary prevention anticipates problems and tries to avoid them before they occur."
        },
        {
            "id": "comp-q25",
            "type": "multiple-choice",
            "question": "Which role involves the Occupational Health Nurse assessing the environment for hazards like lighting, ventilation, and humidity?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Environmental Role", "isCorrect": true },
                { "id": "opt2", "text": "Managerial Role", "isCorrect": false },
                { "id": "opt3", "text": "Educational Role", "isCorrect": false },
                { "id": "opt4", "text": "Professional Role", "isCorrect": false }
            ],
            "explanation": "The Environmental Role involves periodically assessing the environment and facilities to detect and appraise health hazards."
        },

        // --- GENERAL / SYNTHESIS QUESTIONS ---
        {
            "id": "comp-q26",
            "type": "short-answer",
            "question": "Briefly explain why 'Secondary Prevention' in occupational health involves screening.",
            "points": 3,
            "keywords": ["detect", "early", "surveillance", "check", "monitor"],
            "minKeywords": 1,
            "modelAnswer": "Secondary prevention focuses on early detection. Screening helps identify employees at risk, detect non-occupational illnesses early, and check the working environment to ensure preventive measures are working.",
            "maxLength": 200
        },
        {
            "id": "comp-q27",
            "type": "matching",
            "question": "Match the specific prevention strategy to the correct level of prevention.",
            "points": 3,
            "pairs": [
                { "id": "p1", "left": "Immunization", "right": "Primary Prevention" },
                { "id": "p2", "left": "Early Diagnosis and Treatment", "right": "Secondary Prevention" },
                { "id": "p3", "left": "Rehabilitation", "right": "Tertiary Prevention" }
            ],
            "explanation": "Immunization prevents disease (Primary). Diagnosis/Treatment addresses existing disease early (Secondary). Rehabilitation addresses long-term effects (Tertiary)."
        },
        {
            "id": "comp-q28",
            "type": "true-false",
            "question": "Accidents are defined as unexpected occurrences that cannot be foreseen or prevented.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "While accidents are unexpected and unplanned, the text states that 'situations in which accidents occur generally can be foreseen... thus by identifying these situations, many accidents can be prevented'."
        },
        {
            "id": "comp-q29",
            "type": "multiple-choice",
            "question": "What is the 'Rule of Nines' used for?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Estimating body surface area in burns", "isCorrect": true },
                { "id": "opt2", "text": "Calculating dosage for children", "isCorrect": false },
                { "id": "opt3", "text": "Prioritizing patients in triage", "isCorrect": false },
                { "id": "opt4", "text": "Measuring visual acuity", "isCorrect": false }
            ],
            "explanation": "The 'Rule of Nines' is used to estimate the body percentage of surface area affected by burns."
        },
        {
            "id": "comp-q30",
            "type": "multiple-choice",
            "question": "Which organization protects the rights of internally displaced people?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "International Committee of the Red Cross (ICRC)", "isCorrect": true },
                { "id": "opt2", "text": "UNHCR", "isCorrect": false },
                { "id": "opt3", "text": "UNESCO", "isCorrect": false },
                { "id": "opt4", "text": "WHO", "isCorrect": false }
            ],
            "explanation": "UNHCR protects refugees (external). The text states: 'The International Committee of the Red Cross (ICRC) protects the rights of internally displaced people.'"
        }
    ]
});