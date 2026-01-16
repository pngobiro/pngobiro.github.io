registerQuiz("comprehensive-exam", {
    "schemaVersion": "1.0",
    "quizId": "comprehensive-exam",
    "metadata": {
        "title": "Comprehensive Exam: Environmental Health",
        "description": "Final assessment covering all topics in Unit 3.",
        "difficulty": "advanced",
        "estimatedTime": 25,
        "passingScore": 70
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "after_submission",
        "allowRetry": true
    },
    "questions": [
        // Topic 1
        {
            "id": "q1",
            "type": "multiple-choice",
            "topicId": "topic-01",
            "topicName": "Health & Environment",
            "question": "Which component of the environment includes customs, beliefs, and food habits?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Biological Environment", "isCorrect": false },
                { "id": "opt2", "text": "Physical Environment", "isCorrect": false },
                { "id": "opt3", "text": "Socio-cultural Environment", "isCorrect": true },
                { "id": "opt4", "text": "Economic Environment", "isCorrect": false }
            ],
            "explanation": "Socio-cultural environment encompasses customs, beliefs, and practices."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "topicId": "topic-01",
            "topicName": "Health & Environment",
            "question": "The Neem tree (Muarobaine) is traditionally used for the treatment of which disease?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Typhoid", "isCorrect": false },
                { "id": "opt2", "text": "Malaria", "isCorrect": true },
                { "id": "opt3", "text": "Cholera", "isCorrect": false },
                { "id": "opt4", "text": "Measles", "isCorrect": false }
            ],
            "explanation": "Neem tree extracts are used in traditional medicine for malaria treatment."
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "topicId": "topic-01",
            "topicName": "Health & Environment",
            "question": "What is a major environmental consequence of deforestation?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Improved air quality", "isCorrect": false },
                { "id": "opt2", "text": "Destruction of water sources", "isCorrect": true },
                { "id": "opt3", "text": "Increased soil fertility", "isCorrect": false },
                { "id": "opt4", "text": "Reduction in pests", "isCorrect": false }
            ],
            "explanation": "Trees protect water catchment areas; their removal destroys these sources."
        },
        {
            "id": "q4",
            "type": "multiple-choice",
            "topicId": "topic-01",
            "topicName": "Health & Environment",
            "question": "Dust from quarries is primarily associated with which health problem?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Respiratory and eye problems", "isCorrect": true },
                { "id": "opt2", "text": "Skin infections", "isCorrect": false },
                { "id": "opt3", "text": "Gastrointestinal diseases", "isCorrect": false },
                { "id": "opt4", "text": "Joint pain", "isCorrect": false }
            ],
            "explanation": "Inhalation of dust causes respiratory issues and irritation to eyes."
        },
        
        // Topic 2
        {
            "id": "q5",
            "type": "multiple-choice",
            "topicId": "topic-02",
            "topicName": "Water & Sanitation",
            "question": "Scabies is classified as which type of water-related disease?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Water-borne", "isCorrect": false },
                { "id": "opt2", "text": "Water-washed", "isCorrect": true },
                { "id": "opt3", "text": "Water-related", "isCorrect": false },
                { "id": "opt4", "text": "Water-based", "isCorrect": false }
            ],
            "explanation": "Water-washed diseases occur due to scarcity of water for personal hygiene."
        },
        {
            "id": "q6",
            "type": "multiple-choice",
            "topicId": "topic-02",
            "topicName": "Water & Sanitation",
            "question": "What is the minimum contact time for chlorine to effectively disinfect water?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "10 minutes", "isCorrect": false },
                { "id": "opt2", "text": "30 minutes", "isCorrect": true },
                { "id": "opt3", "text": "60 minutes", "isCorrect": false },
                { "id": "opt4", "text": "2 hours", "isCorrect": false }
            ],
            "explanation": "30 minutes is required for chlorine to kill pathogens."
        },
        {
            "id": "q7",
            "type": "multiple-choice",
            "topicId": "topic-02",
            "topicName": "Water & Sanitation",
            "question": "Which water source is naturally the cleanest if collected properly?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "River water", "isCorrect": false },
                { "id": "opt2", "text": "Rain water", "isCorrect": true },
                { "id": "opt3", "text": "Lake water", "isCorrect": false },
                { "id": "opt4", "text": "Pond water", "isCorrect": false }
            ],
            "explanation": "Rain water is pure before it hits the ground; proper collection keeps it clean."
        },
        {
            "id": "q8",
            "type": "multiple-choice",
            "topicId": "topic-02",
            "topicName": "Water & Sanitation",
            "question": "How is Schistosomiasis related to water?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "It is water-borne (drunk)", "isCorrect": false },
                { "id": "opt2", "text": "It is water-washed (lack of water)", "isCorrect": false },
                { "id": "opt3", "text": "It is water-related (vector life cycle)", "isCorrect": true },
                { "id": "opt4", "text": "It is chemically induced", "isCorrect": false }
            ],
            "explanation": "Snails, the intermediate host for Schistosomiasis, live in water."
        },

        // Topic 3
        {
            "id": "q9",
            "type": "multiple-choice",
            "topicId": "topic-03",
            "topicName": "Food Handling",
            "question": "Bagged foods should be stored at least how high off the floor?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "6 inches", "isCorrect": false },
                { "id": "opt2", "text": "18 inches", "isCorrect": true },
                { "id": "opt3", "text": "12 inches", "isCorrect": false },
                { "id": "opt4", "text": "24 inches", "isCorrect": false }
            ],
            "explanation": "18 inches allows for cleaning and pest inspection underneath."
        },
        {
            "id": "q10",
            "type": "multiple-choice",
            "topicId": "topic-03",
            "topicName": "Food Handling",
            "question": "What is the primary purpose of blanching vegetables?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "To cook them completely", "isCorrect": false },
                { "id": "opt2", "text": "To inactivate enzymes", "isCorrect": true },
                { "id": "opt3", "text": "To add flavor", "isCorrect": false },
                { "id": "opt4", "text": "To dry them out", "isCorrect": false }
            ],
            "explanation": "Blanching stops enzyme action which can cause loss of flavor, color and texture."
        },
        {
            "id": "q11",
            "type": "multiple-choice",
            "topicId": "topic-03",
            "topicName": "Food Handling",
            "question": "Which organism causes Typhoid fever?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Salmonella typhi", "isCorrect": true },
                { "id": "opt2", "text": "Vibrio cholerae", "isCorrect": false },
                { "id": "opt3", "text": "Shigella", "isCorrect": false },
                { "id": "opt4", "text": "E. coli", "isCorrect": false }
            ],
            "explanation": "Salmonella typhi is the causative agent of Typhoid."
        },
        {
            "id": "q12",
            "type": "multiple-choice",
            "topicId": "topic-03",
            "topicName": "Food Handling",
            "question": "Part X (10) of the Public Health Act Cap 242 deals with:",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Drainage and latrines", "isCorrect": false },
                { "id": "opt2", "text": "Protection of foodstuffs", "isCorrect": true },
                { "id": "opt3", "text": "Prevention of malaria", "isCorrect": false },
                { "id": "opt4", "text": "Water supply", "isCorrect": false }
            ],
            "explanation": "Part X specifically regulates food protection and storage buildings."
        },

        // Topic 4
        {
            "id": "q13",
            "type": "multiple-choice",
            "topicId": "topic-04",
            "topicName": "Housing",
            "question": "Which of the following characterizes a 'Permanent House'?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Mud walls", "isCorrect": false },
                { "id": "opt2", "text": "Grass thatch roof", "isCorrect": false },
                { "id": "opt3", "text": "Stone foundation and cemented floor", "isCorrect": true },
                { "id": "opt4", "text": "Earth floor", "isCorrect": false }
            ],
            "explanation": "Permanent houses use durable materials like stone and cement."
        },
        {
            "id": "q14",
            "type": "multiple-choice",
            "topicId": "topic-04",
            "topicName": "Housing",
            "question": "What is a common health risk associated with earthen floors?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Malaria", "isCorrect": false },
                { "id": "opt2", "text": "Breeding of fleas and bed bugs", "isCorrect": true },
                { "id": "opt3", "text": "Typhoid", "isCorrect": false },
                { "id": "opt4", "text": "Cholera", "isCorrect": false }
            ],
            "explanation": "Cracks and dust in earthen floors provide habitats for pests like fleas."
        },
        {
            "id": "q15",
            "type": "multiple-choice",
            "topicId": "topic-04",
            "topicName": "Housing",
            "question": "Providing separate rooms for parents and children addresses which housing criteria?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Biological", "isCorrect": false },
                { "id": "opt2", "text": "Physical", "isCorrect": false },
                { "id": "opt3", "text": "Social", "isCorrect": true },
                { "id": "opt4", "text": "Environmental", "isCorrect": false }
            ],
            "explanation": "Privacy and proper social functioning are part of the social criteria for housing."
        },
        {
            "id": "q16",
            "type": "multiple-choice",
            "topicId": "topic-04",
            "topicName": "Housing",
            "question": "Why should a building site be on high ground?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Better view", "isCorrect": false },
                { "id": "opt2", "text": "To prevent water stagnation", "isCorrect": true },
                { "id": "opt3", "text": "Closer to the road", "isCorrect": false },
                { "id": "opt4", "text": "More sunlight", "isCorrect": false }
            ],
            "explanation": "High ground aids drainage, preventing stagnant water and mosquitoes."
        },

        // Topic 5
        {
            "id": "q17",
            "type": "multiple-choice",
            "topicId": "topic-05",
            "topicName": "Vector Control",
            "question": "Which mosquito transmits Malaria?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Culex", "isCorrect": false },
                { "id": "opt2", "text": "Aedes", "isCorrect": false },
                { "id": "opt3", "text": "Anopheles", "isCorrect": true },
                { "id": "opt4", "text": "Mansonia", "isCorrect": false }
            ],
            "explanation": "Female Anopheles mosquitoes transmit malaria."
        },
        {
            "id": "q18",
            "type": "multiple-choice",
            "topicId": "topic-05",
            "topicName": "Vector Control",
            "question": "Transmission where the pathogen develops inside the vector is called:",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Mechanical", "isCorrect": false },
                { "id": "opt2", "text": "Biological", "isCorrect": true },
                { "id": "opt3", "text": "Direct", "isCorrect": false },
                { "id": "opt4", "text": "Fecal-oral", "isCorrect": false }
            ],
            "explanation": "Biological transmission involves the pathogen's lifecycle within the vector."
        },
        {
            "id": "q19",
            "type": "multiple-choice",
            "topicId": "topic-05",
            "topicName": "Vector Control",
            "question": "The Tsetse fly is the vector for which disease?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "River Blindness", "isCorrect": false },
                { "id": "opt2", "text": "Sleeping Sickness", "isCorrect": true },
                { "id": "opt3", "text": "Yellow Fever", "isCorrect": false },
                { "id": "opt4", "text": "Elephantiasis", "isCorrect": false }
            ],
            "explanation": "Tsetse flies transmit Trypanosomiasis (Sleeping Sickness)."
        },
        {
            "id": "q20",
            "type": "multiple-choice",
            "topicId": "topic-05",
            "topicName": "Vector Control",
            "question": "Which method controls mosquitoes by removing their breeding sites?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Bed nets", "isCorrect": false },
                { "id": "opt2", "text": "Draining stagnant water", "isCorrect": true },
                { "id": "opt3", "text": "Repellents", "isCorrect": false },
                { "id": "opt4", "text": "Screening windows", "isCorrect": false }
            ],
            "explanation": "Draining water removes the habitat for larvae, a form of environmental control."
        }
    ]
});