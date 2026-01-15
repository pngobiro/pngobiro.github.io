registerQuiz("comprehensive-exam", {
    "schemaVersion": "1.0",
    "quizId": "comprehensive-exam",
    "metadata": {
        "title": "Comprehensive Final Exam",
        "description": "A cumulative assessment covering Environmental Health, Food Safety, Water Quality, Housing, Pollution, Vector Control, Community Health, and Occupational Safety.",
        "examType": "comprehensive",
        "topicsCovered": [
            "topic-01", "topic-02", "topic-03", "topic-04", 
            "topic-05", "topic-06", "topic-07", "topic-08"
        ],
        "difficulty": "advanced",
        "estimatedTime": 45,
        "passingScore": 75,
        "createdAt": "2025-12-25T12:00:00Z",
        "tags": ["final", "certification", "all-modules"]
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
        // --- TOPIC 1: INTRODUCTION ---
        {
            "id": "comp-t1-q1",
            "type": "multiple-choice",
            "topicId": "topic-01",
            "topicName": "Env. Health Basics",
            "question": "According to the WHO definition, Environmental Health comprises aspects of human health determined by which factors?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Physical, chemical, biological, social, and psychosocial factors", "isCorrect": true },
                { "id": "b", "text": "Only biological and chemical factors in the workplace", "isCorrect": false },
                { "id": "c", "text": "Geographical and climatic conditions only", "isCorrect": false },
                { "id": "d", "text": "Genetic and hereditary factors", "isCorrect": false }
            ],
            "explanation": "WHO (1993) defines Environmental Health as comprising aspects determined by physical, chemical, biological, social, and psychosocial factors in the environment."
        },
        {
            "id": "comp-t1-q2",
            "type": "matching",
            "topicId": "topic-01",
            "topicName": "Env. Health Basics",
            "question": "Match the type of environment with its correct description:",
            "points": 10,
            "pairs": [
                { "id": "p1", "left": "Physical Environment", "right": "Abiotic components like soil, water, air, and climate" },
                { "id": "p2", "left": "Biological Environment", "right": "Biotic components including plants, animals, and microorganisms" },
                { "id": "p3", "left": "Social-Cultural Environment", "right": "Non-material culture, customs, and social institutions" },
                { "id": "p4", "left": "Man-Made Environment", "right": "Infrastructure, artificial modifications, and technology" }
            ],
            "explanation": "The environment is classified into Geographical (Physical/Biological) and Man-Made (Social-Cultural/Outer) categories."
        },

        // --- TOPIC 2: FOOD SAFETY ---
        {
            "id": "comp-t2-q1",
            "type": "multiple-select",
            "topicId": "topic-02",
            "topicName": "Food Safety",
            "question": "Which of the following are considered modern methods of food preservation? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Pasteurization", "isCorrect": true },
                { "id": "b", "text": "Irradiation", "isCorrect": true },
                { "id": "c", "text": "Sun Drying", "isCorrect": false },
                { "id": "d", "text": "Canning", "isCorrect": true }
            ],
            "explanation": "Modern methods include canning, pasteurization, freezing, irradiation, and chemical additives. Drying and fermentation are considered older/traditional methods."
        },
        {
            "id": "comp-t2-q2",
            "type": "matching",
            "topicId": "topic-02",
            "topicName": "Food Safety",
            "question": "Match the Pasteurization method with its temperature/time profile:",
            "points": 10,
            "pairs": [
                { "id": "p1", "left": "Low-Temperature Long Time (LTLT)", "right": "63°C for 30 minutes" },
                { "id": "p2", "left": "High-Temperature Short Time (HTST)", "right": "72°C to 74°C for 15-20 seconds" },
                { "id": "p3", "left": "Ultra-High Temperature (UHT)", "right": "135°C to 140°C for 2-4 seconds" },
                { "id": "p4", "left": "Thermization", "right": "57°C to 68°C for 15 minutes" }
            ],
            "explanation": "Different pasteurization methods use specific time-temperature combinations to target pathogens while preserving quality."
        },
        {
            "id": "comp-t2-q3",
            "type": "true-false",
            "topicId": "topic-02",
            "topicName": "Food Safety",
            "question": "Staphylococcus aureus food poisoning is typically caused by ingesting live bacteria that multiply in the gut.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "False. Staphylococcal food poisoning is caused by ingesting pre-formed toxins produced by the bacteria in the food, not by the infection of the gut itself."
        },

        // --- TOPIC 3: WATER QUALITY ---
        {
            "id": "comp-t3-q1",
            "type": "ordering",
            "topicId": "topic-03",
            "topicName": "Water Quality",
            "question": "Arrange the steps of the conventional water purification process in the correct order:",
            "points": 10,
            "items": [
                { "id": "i1", "text": "Coagulation (Chemical addition)", "correctPosition": 1 },
                { "id": "i2", "text": "Flocculation (Particle formation)", "correctPosition": 2 },
                { "id": "i3", "text": "Sedimentation (Settling)", "correctPosition": 3 },
                { "id": "i4", "text": "Filtration (Passing through media)", "correctPosition": 4 },
                { "id": "i5", "text": "Disinfection (Chlorination/Ozone)", "correctPosition": 5 }
            ],
            "explanation": "The standard sequence is Coagulation -> Flocculation -> Sedimentation -> Filtration -> Disinfection."
        },
        {
            "id": "comp-t3-q2",
            "type": "matching",
            "topicId": "topic-03",
            "topicName": "Water Quality",
            "question": "Classify the following diseases based on their transmission relationship with water:",
            "points": 10,
            "pairs": [
                { "id": "p1", "left": "Cholera", "right": "Water-borne (ingested)" },
                { "id": "p2", "left": "Trachoma", "right": "Water-washed (lack of hygiene)" },
                { "id": "p3", "left": "Malaria", "right": "Water-related (insect vector breeding)" },
                { "id": "p4", "left": "Scabies", "right": "Water-washed (lack of hygiene)" }
            ],
            "explanation": "Water-borne diseases are ingested; Water-washed are due to scarcity/lack of washing; Water-related involves vectors breeding in water."
        },

        // --- TOPIC 4: HOUSING & SANITATION ---
        {
            "id": "comp-t4-q1",
            "type": "multiple-choice",
            "topicId": "topic-04",
            "topicName": "Housing & Sanitation",
            "question": "What is the primary function of the vent pipe in a Ventilated Improved Pit (VIP) Latrine?",
            "points": 10,
            "options": [
                { "id": "a", "text": "To support the roof structure", "isCorrect": false },
                { "id": "b", "text": "To allow sunlight to dry the pit contents", "isCorrect": false },
                { "id": "c", "text": "To control odour and trap flies", "isCorrect": true },
                { "id": "d", "text": "To allow rainwater to enter the pit for digestion", "isCorrect": false }
            ],
            "explanation": "The vent pipe allows warm, foul gases to escape (odour control) and acts as a light trap for flies, which fly up towards the light and are trapped by the screen."
        },
        {
            "id": "comp-t4-q2",
            "type": "image-based",
            "topicId": "topic-04",
            "topicName": "Housing & Sanitation",
            "question": "Identify the key components of the pit latrine shown in the diagram:",
            "points": 10,
            "imageUrl": "assets/images/image-20251225-0591e8c4.jpeg",
            "imageAlt": "Diagram of a Pit Latrine",
            "hotspots": [
                { "id": "h1", "x": 50, "y": 80, "radius": 15, "label": "The Pit", "isCorrect": true },
                { "id": "h2", "x": 50, "y": 55, "radius": 10, "label": "The Slab/Floor", "isCorrect": true },
                { "id": "h3", "x": 50, "y": 30, "radius": 20, "label": "Superstructure", "isCorrect": true }
            ],
            "explanation": "A pit latrine consists of three main parts: The Pit (underground), the Slab (floor), and the Superstructure (walls/roof)."
        },

        // --- TOPIC 5: AIR & POLLUTION ---
        {
            "id": "comp-t5-q1",
            "type": "multiple-choice",
            "topicId": "topic-05",
            "topicName": "Air & Pollution",
            "question": "Which type of ventilation system is characterized by pulling air out of a building, creating negative pressure that draws fresh air in through leaks?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Supply-Only Ventilation", "isCorrect": false },
                { "id": "b", "text": "Exhaust-Only Ventilation", "isCorrect": true },
                { "id": "c", "text": "Balanced Ventilation", "isCorrect": false },
                { "id": "d", "text": "Natural Buoyancy Ventilation", "isCorrect": false }
            ],
            "explanation": "Exhaust-Only ventilation uses a fan to depressurize the house, forcing inside air out and drawing outside air in through cracks and vents."
        },
        {
            "id": "comp-t5-q2",
            "type": "fill-blank",
            "topicId": "topic-05",
            "topicName": "Air & Pollution",
            "question": "The artificial warming of water bodies by industrial discharge, which reduces dissolved oxygen levels, is known as __b1__ pollution.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["thermal", "Thermal"], "caseSensitive": false }
            ],
            "explanation": "Thermal pollution occurs when hot water (e.g., coolants) is discharged into water bodies, reducing the water's ability to hold oxygen."
        },

        // --- TOPIC 6: VECTOR CONTROL ---
        {
            "id": "comp-t6-q1",
            "type": "multiple-select",
            "topicId": "topic-06",
            "topicName": "Vector Control",
            "question": "Which of the following are examples of Environmental Management for vector control? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Installing reliable piped water to reduce storage needs", "isCorrect": true },
                { "id": "b", "text": "Space spraying with thermal fogging", "isCorrect": false },
                { "id": "c", "text": "Proper disposal and recycling of used tires", "isCorrect": true },
                { "id": "d", "text": "Cleaning gutters and covering water tanks", "isCorrect": true }
            ],
            "explanation": "Environmental management involves physical modification (piped water) and manipulation (cleaning, waste disposal). Fogging is Chemical control."
        },
        {
            "id": "comp-t6-q2",
            "type": "matching",
            "topicId": "topic-06",
            "topicName": "Vector Control",
            "question": "Match the vector with the disease it transmits:",
            "points": 10,
            "pairs": [
                { "id": "p1", "left": "Aedes aegypti", "right": "Dengue Fever" },
                { "id": "p2", "left": "Anopheles mosquito", "right": "Malaria" },
                { "id": "p3", "left": "Ticks", "right": "Lyme Disease" },
                { "id": "p4", "left": "Body Lice", "right": "Epidemic Typhus" }
            ],
            "explanation": "Vectors are specific to diseases: Aedes (Dengue/Yellow Fever), Anopheles (Malaria), Ticks (Lyme), Lice (Typhus)."
        },

        // --- TOPIC 7: COMMUNITY HEALTH ---
        {
            "id": "comp-t7-q1",
            "type": "multiple-choice",
            "topicId": "topic-07",
            "topicName": "Community Health",
            "question": "Which leadership style is described as 'Laissez-faire'?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Leader makes all decisions without input", "isCorrect": false },
                { "id": "b", "text": "Leader facilitates group decision making", "isCorrect": false },
                { "id": "c", "text": "Leader allows employees complete freedom and authority", "isCorrect": true },
                { "id": "d", "text": "Leader focuses on transaction and rewards", "isCorrect": false }
            ],
            "explanation": "Laissez-faire means 'let them do', where the leader is least intrusive and gives authority to the employees."
        },
        {
            "id": "comp-t7-q2",
            "type": "matching",
            "topicId": "topic-07",
            "topicName": "Community Health",
            "question": "Match the power source to its definition:",
            "points": 10,
            "pairs": [
                { "id": "p1", "left": "Legitimate Power", "right": "Formal right/title to make demands" },
                { "id": "p2", "left": "Coercive Power", "right": "Ability to punish for non-compliance" },
                { "id": "p3", "left": "Expert Power", "right": "Based on high levels of skill and knowledge" },
                { "id": "p4", "left": "Referent Power", "right": "Based on perceived attractiveness/respect" }
            ],
            "explanation": "French and Raven's bases of power classify sources into position-based (Legitimate, Coercive) and personal-based (Expert, Referent)."
        },

        // --- TOPIC 8: OCCUPATIONAL HEALTH ---
        {
            "id": "comp-t8-q1",
            "type": "ordering",
            "topicId": "topic-08",
            "topicName": "Occupational Health",
            "question": "Place the first 5 principles of HACCP in the correct order:",
            "points": 10,
            "items": [
                { "id": "i1", "text": "Conduct a Hazard Analysis", "correctPosition": 1 },
                { "id": "i2", "text": "Determine Critical Control Points (CCPs)", "correctPosition": 2 },
                { "id": "i3", "text": "Establish Critical Limits", "correctPosition": 3 },
                { "id": "i4", "text": "Establish Monitoring Procedures", "correctPosition": 4 },
                { "id": "i5", "text": "Establish Corrective Actions", "correctPosition": 5 }
            ],
            "explanation": "HACCP Principles: 1. Analysis, 2. CCPs, 3. Limits, 4. Monitoring, 5. Corrective Actions, 6. Verification, 7. Record Keeping."
        },
        {
            "id": "comp-t8-q2",
            "type": "matching",
            "topicId": "topic-08",
            "topicName": "Occupational Health",
            "question": "Categorize the following workplace hazards:",
            "points": 10,
            "pairs": [
                { "id": "p1", "left": "Unguarded machinery", "right": "Safety Hazard" },
                { "id": "p2", "left": "Blood and body fluids", "right": "Biological Hazard" },
                { "id": "p3", "left": "Constant loud noise", "right": "Physical Hazard" },
                { "id": "p4", "left": "Repetitive awkward movements", "right": "Ergonomic Hazard" },
                { "id": "p5", "left": "Workplace violence/stress", "right": "Work Organization Hazard" }
            ],
            "explanation": "Hazards are categorized by their nature: Safety (mechanical), Biological (organic), Physical (environmental factors), Ergonomic (body strain), and Work Org (psychosocial)."
        }
    ]
});
