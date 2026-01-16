window.registerQuiz('comprehensive-exam', {
    "schemaVersion": "1.0",
    "quizId": "comprehensive-exam",
    "metadata": {
        "title": "Comprehensive Final Exam",
        "description": "Final assessment covering all modules of Principles of Environmental Health (PEH 209).",
        "examType": "comprehensive",
        "topicsCovered": [
            "topic-01-concepts",
            "topic-02-water",
            "topic-03-waste",
            "topic-04-housing",
            "topic-05-vectors",
            "topic-06-hygiene",
            "topic-07-food"
        ],
        "difficulty": "advanced",
        "estimatedTime": 60,
        "passingScore": 70,
        "createdAt": "2026-01-16T10:00:00Z",
        "tags": ["final", "comprehensive", "certification"]
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
        /* ========================================================================
           TOPIC 1: CONCEPTS OF ENVIRONMENTAL HEALTH
           ======================================================================== */
        {
            "id": "c-t1-q1",
            "type": "multiple-choice",
            "question": "Which intervention model focuses primarily on treating the sick person after they have become ill?",
            "points": 1,
            "topicId": "topic-01-concepts",
            "topicName": "Concepts of Env. Health",
            "options": [
                { "id": "a", "text": "Public health intervention model", "isCorrect": false },
                { "id": "b", "text": "Clinical intervention model", "isCorrect": true },
                { "id": "c", "text": "Environmental sanitation model", "isCorrect": false },
                { "id": "d", "text": "Ecological intervention model", "isCorrect": false }
            ],
            "explanation": "The clinical intervention model looks at treating the sick person, whereas the public health model looks at preventing illness by providing a healthy environment."
        },
        {
            "id": "c-t1-q2",
            "type": "matching",
            "question": "Match the environmental health component with its primary concern:",
            "points": 2,
            "topicId": "topic-01-concepts",
            "topicName": "Concepts of Env. Health",
            "pairs": [
                { "id": "p1", "left": "Vector control", "right": "Control of mammals and arthropods that transmit disease" },
                { "id": "p2", "left": "Healthful housing", "right": "Physiological needs and protection against accidents" },
                { "id": "p3", "left": "Food hygiene", "right": "Wholesomeness in production, storage, and preparation" },
                { "id": "p4", "left": "Occupational hygiene", "right": "Hygiene and safety in the workplace" }
            ]
        },
        {
            "id": "c-t1-q3",
            "type": "multiple-select",
            "question": "Which of the following are principles of pollution prevention? (Select all that apply)",
            "points": 1,
            "topicId": "topic-01-concepts",
            "topicName": "Concepts of Env. Health",
            "options": [
                { "id": "a", "text": "Polluter pays principle", "isCorrect": true },
                { "id": "b", "text": "Principle of 'Cradle to Grave'", "isCorrect": true },
                { "id": "c", "text": "Principle of waste maximization", "isCorrect": false },
                { "id": "d", "text": "Precautionary principle", "isCorrect": true }
            ],
            "explanation": "Pollution prevention relies on the 'Polluter pays', 'Cradle to Grave', and 'Precautionary' principles. Waste 'maximization' is incorrect; the goal is waste optimization or minimization."
        },
        {
            "id": "c-t1-q4",
            "type": "true-false",
            "question": "Hygiene generally refers to the set of practices associated with the preservation of health, while Sanitation specifically focuses on the prevention of human contact with wastes.",
            "points": 1,
            "topicId": "topic-01-concepts",
            "topicName": "Concepts of Env. Health",
            "correctAnswer": true,
            "explanation": "Hygiene focuses on personal cleanliness (body, hair, etc.), while Sanitation focuses on waste management and preventing contact with hazards."
        },

        /* ========================================================================
           TOPIC 2: WATER AND HEALTH
           ======================================================================== */
        {
            "id": "c-t2-q1",
            "type": "multiple-choice",
            "question": "Which type of disease is caused by the ingestion of water contaminated by human or animal excrement containing pathogenic microorganisms?",
            "points": 1,
            "topicId": "topic-02-water",
            "topicName": "Water and Health",
            "options": [
                { "id": "a", "text": "Water-washed diseases", "isCorrect": false },
                { "id": "b", "text": "Water-based diseases", "isCorrect": false },
                { "id": "c", "text": "Waterborne diseases", "isCorrect": true },
                { "id": "d", "text": "Water-related diseases", "isCorrect": false }
            ],
            "explanation": "Waterborne diseases (like cholera and typhoid) are transmitted by drinking contaminated water. Water-washed are due to lack of water for hygiene; Water-based involve parasites in water; Water-related involve vectors breeding near water."
        },
        {
            "id": "c-t2-q2",
            "type": "fill-blank",
            "question": "A latrine should be located at least __b1__ meters away from and on a lower level than a well to prevent contamination.",
            "points": 1,
            "topicId": "topic-02-water",
            "topicName": "Water and Health",
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["15", "15m", "15 meters"], "caseSensitive": false }
            ],
            "explanation": "In normal soils, the minimum distance between the well and a source of contaminants should never be less than 15 metres, though 30-50m is recommended."
        },
        {
            "id": "c-t2-q3",
            "type": "multiple-select",
            "question": "Which of the following are considered 'Point Sources' of water pollution? (Select all that apply)",
            "points": 1,
            "topicId": "topic-02-water",
            "topicName": "Water and Health",
            "options": [
                { "id": "a", "text": "Factories discharging waste", "isCorrect": true },
                { "id": "b", "text": "Agricultural runoff", "isCorrect": false },
                { "id": "c", "text": "Sewage treatment plants", "isCorrect": true },
                { "id": "d", "text": "Storm water drainage from streets", "isCorrect": false },
                { "id": "e", "text": "Underground coal mines", "isCorrect": true }
            ],
            "explanation": "Point sources have a definite source and place of entry (factories, sewage plants, mines). Non-point sources are diffuse (runoff, drainage)."
        },
        {
            "id": "c-t2-q4",
            "type": "matching",
            "question": "Match the water pollution source with its description:",
            "points": 2,
            "topicId": "topic-02-water",
            "topicName": "Water and Health",
            "pairs": [
                { "id": "p1", "left": "Pathogens", "right": "Bacteria and viruses from sewage" },
                { "id": "p2", "left": "Oxygen depleting wastes", "right": "Organic wastes decomposed by aerobic bacteria" },
                { "id": "p3", "left": "Inorganic plant nutrients", "right": "Nitrates causing eutrophication" },
                { "id": "p4", "left": "Sediment", "right": "Insoluble soil particles suspended in water" }
            ]
        },

        /* ========================================================================
           TOPIC 3: WASTE MANAGEMENT
           ======================================================================== */
        {
            "id": "c-t3-q1",
            "type": "multiple-choice",
            "question": "What is the correct definition of 'Sullage' (Greywater)?",
            "points": 1,
            "topicId": "topic-03-waste",
            "topicName": "Waste Management",
            "options": [
                { "id": "a", "text": "Water containing human faeces and urine", "isCorrect": false },
                { "id": "b", "text": "Runoff from industrial sites", "isCorrect": false },
                { "id": "c", "text": "Water used for washing in bathrooms and kitchens", "isCorrect": true },
                { "id": "d", "text": "Rainwater collected from roofs", "isCorrect": false }
            ],
            "explanation": "Sullage or greywater comes from washing and bathing and does NOT include human waste (which would make it sewage/blackwater)."
        },
        {
            "id": "c-t3-q2",
            "type": "ordering",
            "question": "Arrange the functional elements of the solid waste management system in the correct order:",
            "points": 2,
            "topicId": "topic-03-waste",
            "topicName": "Waste Management",
            "items": [
                { "id": "i1", "text": "Waste generation", "correctPosition": 1 },
                { "id": "i2", "text": "On-site handling (storage)", "correctPosition": 2 },
                { "id": "i3", "text": "Collection", "correctPosition": 3 },
                { "id": "i4", "text": "Transfer and transport", "correctPosition": 4 },
                { "id": "i5", "text": "Processing and recovery", "correctPosition": 5 },
                { "id": "i6", "text": "Disposal", "correctPosition": 6 }
            ]
        },
        {
            "id": "c-t3-q3",
            "type": "matching",
            "question": "Match the healthcare waste type to its correct colour bin:",
            "points": 2,
            "topicId": "topic-03-waste",
            "topicName": "Waste Management",
            "pairs": [
                { "id": "p1", "left": "General / Non-infectious", "right": "Black" },
                { "id": "p2", "left": "Clinical / Infectious", "right": "Yellow" },
                { "id": "p3", "left": "Highly infectious / Pathological", "right": "Red" },
                { "id": "p4", "left": "Chemical waste", "right": "Brown" }
            ]
        },
        {
            "id": "c-t3-q4",
            "type": "multiple-select",
            "question": "Which of the following properties define a hazardous waste? (Select all that apply)",
            "points": 1,
            "topicId": "topic-03-waste",
            "topicName": "Waste Management",
            "options": [
                { "id": "a", "text": "Corrosive", "isCorrect": true },
                { "id": "b", "text": "Ignitable", "isCorrect": true },
                { "id": "c", "text": "Biodegradable", "isCorrect": false },
                { "id": "d", "text": "Toxic", "isCorrect": true },
                { "id": "e", "text": "Reactive", "isCorrect": true }
            ],
            "explanation": "Hazardous wastes are Corrosive, Ignitable, Toxic, Reactive, or Infectious. Biodegradable is a characteristic of organic waste, not a hazard definition."
        },

        /* ========================================================================
           TOPIC 4: HEALTHFUL HOUSING
           ======================================================================== */
        {
            "id": "c-t4-q1",
            "type": "multiple-choice",
            "question": "Which physiological need of housing helps the body generate Vitamin D and has a bactericidal effect?",
            "points": 1,
            "topicId": "topic-04-housing",
            "topicName": "Healthful Housing",
            "options": [
                { "id": "a", "text": "Cross-ventilation", "isCorrect": false },
                { "id": "b", "text": "Thermal insulation", "isCorrect": false },
                { "id": "c", "text": "Adequate sunlight illumination", "isCorrect": true },
                { "id": "d", "text": "Artificial lighting", "isCorrect": false }
            ],
            "explanation": "Adequate sunlight illumination helps the body generate Vitamin D and kills bacteria (bactericidal effect)."
        },
        {
            "id": "c-t4-q2",
            "type": "multiple-select",
            "question": "What are the effects of human occupancy in unventilated rooms? (Select all that apply)",
            "points": 1,
            "topicId": "topic-04-housing",
            "topicName": "Healthful Housing",
            "options": [
                { "id": "a", "text": "Decrease in oxygen content", "isCorrect": true },
                { "id": "b", "text": "Decrease in humidity", "isCorrect": false },
                { "id": "c", "text": "Increase in carbon dioxide", "isCorrect": true },
                { "id": "d", "text": "Increase in organic matter (odor/bacteria)", "isCorrect": true },
                { "id": "e", "text": "Increase in temperature", "isCorrect": true }
            ],
            "explanation": "Occupancy decreases oxygen but increases CO2, organic matter, temperature, and humidity (not decreases humidity)."
        },
        {
            "id": "c-t4-q3",
            "type": "matching",
            "question": "Match the indoor air pollutant with its health effect:",
            "points": 2,
            "topicId": "topic-04-housing",
            "topicName": "Healthful Housing",
            "pairs": [
                { "id": "p1", "left": "Carbon Monoxide (CO)", "right": "Reduces oxygen carrying capacity of blood" },
                { "id": "p2", "left": "Nitrogen Dioxide (NO2)", "right": "Respiratory tract irritation and increased infection risk" },
                { "id": "p3", "left": "Sulfur Dioxide (SO2)", "right": "Broncho-constriction and wheezing" },
                { "id": "p4", "left": "Formaldehyde", "right": "Irritation of eyes and allergic contact dermatitis" }
            ]
        },

        /* ========================================================================
           TOPIC 5: VECTORS AND RODENTS
           ======================================================================== */
        {
            "id": "c-t5-q1",
            "type": "multiple-choice",
            "question": "Which type of mosquito is the primary vector for Malaria?",
            "points": 1,
            "topicId": "topic-05-vectors",
            "topicName": "Vector Control",
            "options": [
                { "id": "a", "text": "Aedes", "isCorrect": false },
                { "id": "b", "text": "Culex", "isCorrect": false },
                { "id": "c", "text": "Anopheles", "isCorrect": true },
                { "id": "d", "text": "Mansonia", "isCorrect": false }
            ],
            "explanation": "Anopheles mosquitoes transmit malaria. Aedes transmit Yellow fever/Dengue; Culex transmit Filariasis."
        },
        {
            "id": "c-t5-q2",
            "type": "true-false",
            "question": "A mechanical vector transmits pathogens by carrying them on its body parts without the pathogen undergoing any developmental change.",
            "points": 1,
            "topicId": "topic-05-vectors",
            "topicName": "Vector Control",
            "correctAnswer": true,
            "explanation": "This is the definition of mechanical transmission (e.g., house flies carrying bacteria on their feet). Biological transmission involves development within the vector."
        },
        {
            "id": "c-t5-q3",
            "type": "matching",
            "question": "Match the vector to the disease it transmits:",
            "points": 2,
            "topicId": "topic-05-vectors",
            "topicName": "Vector Control",
            "pairs": [
                { "id": "p1", "left": "Tsetse Fly", "right": "Trypanosomiasis (Sleeping Sickness)" },
                { "id": "p2", "left": "Black Fly", "right": "Onchocerciasis (River Blindness)" },
                { "id": "p3", "left": "Sand Fly", "right": "Leishmaniasis" },
                { "id": "p4", "left": "Flea", "right": "Plague" }
            ]
        },
        {
            "id": "c-t5-q4",
            "type": "multiple-choice",
            "question": "Which rodent is also known as the 'sewer rat' or 'brown rat'?",
            "points": 1,
            "topicId": "topic-05-vectors",
            "topicName": "Vector Control",
            "options": [
                { "id": "a", "text": "Rattus rattus", "isCorrect": false },
                { "id": "b", "text": "Rattus norvegicus", "isCorrect": true },
                { "id": "c", "text": "Mus musculus", "isCorrect": false },
                { "id": "d", "text": "Cricetomys gambianus", "isCorrect": false }
            ],
            "explanation": "Rattus norvegicus is the Norway rat, brown rat, or sewer rat. Rattus rattus is the roof/black rat."
        },

        /* ========================================================================
           TOPIC 6: HYGIENE AND CLTS
           ======================================================================== */
        {
            "id": "c-t6-q1",
            "type": "fill-blank",
            "question": "CLTS stands for Community-Led __b1__ Sanitation.",
            "points": 1,
            "topicId": "topic-06-hygiene",
            "topicName": "Hygiene & CLTS",
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["Total"], "caseSensitive": false }
            ],
            "explanation": "CLTS = Community-Led Total Sanitation."
        },
        {
            "id": "c-t6-q2",
            "type": "ordering",
            "question": "Order the steps of the CLTS triggering process:",
            "points": 2,
            "topicId": "topic-06-hygiene",
            "topicName": "Hygiene & CLTS",
            "items": [
                { "id": "i1", "text": "Introduction and rapport building", "correctPosition": 1 },
                { "id": "i2", "text": "Participatory analysis", "correctPosition": 2 },
                { "id": "i3", "text": "Ignition moment", "correctPosition": 3 },
                { "id": "i4", "text": "Action planning", "correctPosition": 4 }
            ]
        },
        {
            "id": "c-t6-q3",
            "type": "multiple-choice",
            "question": "What is the 'Ignition Moment' in CLTS?",
            "points": 1,
            "topicId": "topic-06-hygiene",
            "topicName": "Hygiene & CLTS",
            "options": [
                { "id": "a", "text": "When the community builds the first latrine", "isCorrect": false },
                { "id": "b", "text": "When the community realizes they are ingesting each other's faeces", "isCorrect": true },
                { "id": "c", "text": "When the facilitator gives a lecture on hygiene", "isCorrect": false },
                { "id": "d", "text": "When ODF status is verified", "isCorrect": false }
            ],
            "explanation": "The ignition moment occurs when there is collective realization that due to open defecation, people are ingesting each other's faeces."
        },

        /* ========================================================================
           TOPIC 7: FOOD HYGIENE AND SAFETY
           ======================================================================== */
        {
            "id": "c-t7-q1",
            "type": "multiple-choice",
            "question": "Which of the following is considered a 'High-risk food'?",
            "points": 1,
            "topicId": "topic-07-food",
            "topicName": "Food Safety",
            "options": [
                { "id": "a", "text": "Dried flour", "isCorrect": false },
                { "id": "b", "text": "Cooked poultry", "isCorrect": true },
                { "id": "c", "text": "Vinegar", "isCorrect": false },
                { "id": "d", "text": "Jam", "isCorrect": false }
            ],
            "explanation": "High-risk foods are high in protein and moisture (like cooked poultry, milk, eggs). Dried, acidic, or high-sugar foods are low risk."
        },
        {
            "id": "c-t7-q2",
            "type": "multiple-select",
            "question": "Select the correct 'Five Keys to Safe Food': (Select all that apply)",
            "points": 1,
            "topicId": "topic-07-food",
            "topicName": "Food Safety",
            "options": [
                { "id": "a", "text": "Keep clean", "isCorrect": true },
                { "id": "b", "text": "Separate raw and cooked", "isCorrect": true },
                { "id": "c", "text": "Cook thoroughly", "isCorrect": true },
                { "id": "d", "text": "Eat immediately while hot", "isCorrect": false },
                { "id": "e", "text": "Store food at safe temperatures", "isCorrect": true },
                { "id": "f", "text": "Use safe water and raw materials", "isCorrect": true }
            ],
            "explanation": "The 5 keys are: Keep clean, Separate raw/cooked, Cook thoroughly, Keep food at safe temperatures, and Use safe water/raw materials."
        },
        {
            "id": "c-t7-q3",
            "type": "matching",
            "question": "Match the food poisoning agent with its characteristics:",
            "points": 2,
            "topicId": "topic-07-food",
            "topicName": "Food Safety",
            "pairs": [
                { "id": "p1", "left": "Salmonella", "right": "Found in poultry/eggs; onset 12-36 hrs" },
                { "id": "p2", "left": "Staphylococcus", "right": "From skin/nose; toxin survives cooking; onset 2-4 hrs" },
                { "id": "p3", "left": "Clostridium perfringens", "right": "Thrives in airless conditions (stews/pies)" },
                { "id": "p4", "left": "Listeria", "right": "Danger to pregnant women; found in soft cheese/pâté" }
            ]
        },
        {
            "id": "c-t7-q4",
            "type": "ordering",
            "question": "Arrange the steps for breaking the food poisoning chain in the logical order of food handling:",
            "points": 1,
            "topicId": "topic-07-food",
            "topicName": "Food Safety",
            "items": [
                { "id": "i1", "text": "Protecting food from contamination", "correctPosition": 1 },
                { "id": "i2", "text": "Preventing bacteria from multiplying (Storage/Temp control)", "correctPosition": 2 },
                { "id": "i3", "text": "Destroying bacteria within food (Cooking)", "correctPosition": 3 }
            ]
        }
    ]
});