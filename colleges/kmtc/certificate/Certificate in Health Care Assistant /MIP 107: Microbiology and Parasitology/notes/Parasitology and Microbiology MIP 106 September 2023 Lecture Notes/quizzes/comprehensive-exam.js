registerQuiz("comprehensive-exam", {
  "schemaVersion": "1.0",
  "quizId": "comprehensive-exam",
  "metadata": {
    "title": "Comprehensive Final Exam",
    "description": "Comprehensive assessment covering all Parasitology and Microbiology course modules.",
    "examType": "comprehensive",
    "topicsCovered": [
      "topic-01-introduction",
      "topic-02-cestodes-trichinella",
      "topic-03-nematodes-malaria",
      "topic-04-filarial-nematodes"
    ],
    "difficulty": "advanced",
    "estimatedTime": 45,
    "passingScore": 75,
    "createdAt": "2025-12-25T00:00:00Z",
    "tags": ["final", "comprehensive", "parasitology", "microbiology"]
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
    // TOPIC 01: Introduction & Definitions
    {
      "id": "t1-q1",
      "type": "multiple-choice",
      "question": "Which term describes a host in which a parasite reaches sexual maturity?",
      "points": 1,
      "topicId": "topic-01-introduction",
      "topicName": "Introduction to Parasitology",
      "options": [
        { "id": "a", "text": "Intermediate Host", "isCorrect": false },
        { "id": "b", "text": "Definitive Host", "isCorrect": true },
        { "id": "c", "text": "Reservoir", "isCorrect": false },
        { "id": "d", "text": "Vector", "isCorrect": false }
      ],
      "explanation": "A definitive host is the host in which the parasite reaches maturity and reproduces sexually."
    },
    {
      "id": "t1-q2",
      "type": "multiple-choice",
      "question": "Which relationship describes an association where one organism benefits without causing harm to the host?",
      "points": 1,
      "topicId": "topic-01-introduction",
      "topicName": "Introduction to Parasitology",
      "options": [
        { "id": "a", "text": "Parasitism", "isCorrect": false },
        { "id": "b", "text": "Symbiosis", "isCorrect": false },
        { "id": "c", "text": "Commensalism", "isCorrect": true },
        { "id": "d", "text": "Predation", "isCorrect": false }
      ],
      "explanation": "Commensalism is an association where the parasite benefits from the relationship without causing any harm to the host."
    },
    {
      "id": "t1-q3",
      "type": "matching",
      "question": "Match the Protozoa group with its method of movement:",
      "points": 4,
      "topicId": "topic-01-introduction",
      "topicName": "Introduction to Parasitology",
      "pairs": [
        { "id": "p1", "left": "Amoeba", "right": "Pseudopodia" },
        { "id": "p2", "left": "Flagellates", "right": "Flagella" },
        { "id": "p3", "left": "Ciliates", "right": "Cilia" },
        { "id": "p4", "left": "Sporozoa", "right": "Slight amoebic movement" }
      ],
      "explanation": "Amoebas move by pseudopodia, Flagellates by flagella, Ciliates by cilia, and Sporozoa exhibit slight amoebic movement."
    },
    {
      "id": "t1-q4",
      "type": "multiple-choice",
      "question": "Which class of helminths is characterized by a leaf-like unsegmented body?",
      "points": 1,
      "topicId": "topic-01-introduction",
      "topicName": "Introduction to Parasitology",
      "options": [
        { "id": "a", "text": "Cestodes", "isCorrect": false },
        { "id": "b", "text": "Nematodes", "isCorrect": false },
        { "id": "c", "text": "Trematodes", "isCorrect": true },
        { "id": "d", "text": "Protozoa", "isCorrect": false }
      ],
      "explanation": "Trematodes (flukes) have a leaf-like unsegmented body."
    },
    {
      "id": "t1-q5",
      "type": "true-false",
      "question": "A facultative parasite is capable of living either a parasitic or a free-living life.",
      "points": 1,
      "topicId": "topic-01-introduction",
      "topicName": "Introduction to Parasitology",
      "correctAnswer": true,
      "explanation": "Facultative parasites can live independently or as parasites, unlike obligate parasites which cannot live independently."
    },
    {
      "id": "t1-q6",
      "type": "multiple-choice",
      "question": "Which of the following is NOT a predisposing factor for parasitic infections?",
      "points": 1,
      "topicId": "topic-01-introduction",
      "topicName": "Introduction to Parasitology",
      "options": [
        { "id": "a", "text": "Poor waste disposal", "isCorrect": false },
        { "id": "b", "text": "Proper meat inspection", "isCorrect": true },
        { "id": "c", "text": "Age (toddlers/children)", "isCorrect": false },
        { "id": "d", "text": "Individual lifestyle (eating raw meat)", "isCorrect": false }
      ],
      "explanation": "Proper meat inspection is a prevention and control measure, not a predisposing factor."
    },
    {
      "id": "t1-q7",
      "type": "fill-blank",
      "question": "The larval stage of a parasite where no development goes on is called a __b1__.",
      "points": 1,
      "topicId": "topic-01-introduction",
      "topicName": "Introduction to Parasitology",
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["cyst"], "caseSensitive": false }
      ],
      "explanation": "A cyst is a larval stage of a parasite where no development takes place; encystment is the process of forming a cyst."
    },
    {
      "id": "t1-q8",
      "type": "multiple-select",
      "question": "Which of the following are requirements for parasites to survive? (Select all that apply)",
      "points": 2,
      "topicId": "topic-01-introduction",
      "topicName": "Introduction to Parasitology",
      "options": [
        { "id": "a", "text": "Nutrients", "isCorrect": true },
        { "id": "b", "text": "Warmth", "isCorrect": true },
        { "id": "c", "text": "Moisture", "isCorrect": true },
        { "id": "d", "text": "Light", "isCorrect": false }
      ],
      "partialCredit": true,
      "explanation": "Parasites require nutrients, warmth, comfort, protection, and moisture."
    },
    {
      "id": "t1-q9",
      "type": "multiple-choice",
      "question": "An Endoparasite lives:",
      "points": 1,
      "topicId": "topic-01-introduction",
      "topicName": "Introduction to Parasitology",
      "options": [
        { "id": "a", "text": "On the surface of the body", "isCorrect": false },
        { "id": "b", "text": "Inside the body", "isCorrect": true },
        { "id": "c", "text": "Only temporarily on the host", "isCorrect": false },
        { "id": "d", "text": "Free-living in soil", "isCorrect": false }
      ],
      "explanation": "Endoparasites live inside the body (e.g., Taenia saginata), while Ectoparasites live on the surface."
    },
    {
      "id": "t1-q10",
      "type": "multiple-choice",
      "question": "Which of the following is an example of a Cestode?",
      "points": 1,
      "topicId": "topic-01-introduction",
      "topicName": "Introduction to Parasitology",
      "options": [
        { "id": "a", "text": "Ascaris lumbricoides", "isCorrect": false },
        { "id": "b", "text": "Taenia saginata", "isCorrect": true },
        { "id": "c", "text": "Schistosoma mansoni", "isCorrect": false },
        { "id": "d", "text": "Entamoeba histolytica", "isCorrect": false }
      ],
      "explanation": "Taenia saginata is a Cestode (tapeworm). Ascaris is a Nematode, Schistosoma is a Trematode, and Entamoeba is a Protozoa."
    },

    // TOPIC 02: Cestodes & Trichinella
    {
      "id": "t2-q1",
      "type": "multiple-choice",
      "question": "What is the intermediate host for Taenia saginata?",
      "points": 1,
      "topicId": "topic-02-cestodes-trichinella",
      "topicName": "Cestodes & Trichinella",
      "options": [
        { "id": "a", "text": "Pig", "isCorrect": false },
        { "id": "b", "text": "Cow/Cattle", "isCorrect": true },
        { "id": "c", "text": "Fish", "isCorrect": false },
        { "id": "d", "text": "Snail", "isCorrect": false }
      ],
      "explanation": "Cattle are the intermediate hosts for Taenia saginata (Beef Tapeworm)."
    },
    {
      "id": "t2-q2",
      "type": "fill-blank",
      "question": "The larval stage of Taenia saginata found in beef muscles is called __b1__.",
      "points": 1,
      "topicId": "topic-02-cestodes-trichinella",
      "topicName": "Cestodes & Trichinella",
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["cysticercus bovis", "cystcercus bovis"], "caseSensitive": false }
      ],
      "explanation": "The larvae encyst in cattle muscles forming Cysticercus bovis."
    },
    {
      "id": "t2-q3",
      "type": "multiple-choice",
      "question": "Which parasite is known as the 'Fish Tapeworm'?",
      "points": 1,
      "topicId": "topic-02-cestodes-trichinella",
      "topicName": "Cestodes & Trichinella",
      "options": [
        { "id": "a", "text": "Taenia solium", "isCorrect": false },
        { "id": "b", "text": "Echinococcus granulosus", "isCorrect": false },
        { "id": "c", "text": "Diphyllobothrium latum", "isCorrect": true },
        { "id": "d", "text": "Trichuris trichiura", "isCorrect": false }
      ],
      "explanation": "Diphyllobothrium latum is the fish tapeworm, transmitted by ingesting infested fish."
    },
    {
      "id": "t2-q4",
      "type": "multiple-choice",
      "question": "What is a major clinical symptom associated with Diphyllobothrium latum infection?",
      "points": 1,
      "topicId": "topic-02-cestodes-trichinella",
      "topicName": "Cestodes & Trichinella",
      "options": [
        { "id": "a", "text": "Elephantiasis", "isCorrect": false },
        { "id": "b", "text": "Anemia", "isCorrect": true },
        { "id": "c", "text": "Liver cirrhosis", "isCorrect": false },
        { "id": "d", "text": "Blindness", "isCorrect": false }
      ],
      "explanation": "D. latum absorbs Vitamin B12, leading to anemia in the host."
    },
    {
      "id": "t2-q5",
      "type": "true-false",
      "question": "Man can serve as both the definitive and intermediate host for Trichinella spiralis.",
      "points": 1,
      "topicId": "topic-02-cestodes-trichinella",
      "topicName": "Cestodes & Trichinella",
      "correctAnswer": true,
      "explanation": "Trichinella has definitive and intermediate hosts together in the same animal (e.g., man, pigs, rats)."
    },
    {
      "id": "t2-q6",
      "type": "multiple-choice",
      "question": "How is Trichinella spiralis transmitted to humans?",
      "points": 1,
      "topicId": "topic-02-cestodes-trichinella",
      "topicName": "Cestodes & Trichinella",
      "options": [
        { "id": "a", "text": "Mosquito bite", "isCorrect": false },
        { "id": "b", "text": "Walking barefoot", "isCorrect": false },
        { "id": "c", "text": "Ingestion of raw/undercooked pork", "isCorrect": true },
        { "id": "d", "text": "Drinking contaminated water", "isCorrect": false }
      ],
      "explanation": "Man is infected by ingesting raw or undercooked pork containing encysted larvae."
    },
    {
      "id": "t2-q7",
      "type": "multiple-choice",
      "question": "Which of the following is NOT a morphological feature of Cestodes?",
      "points": 1,
      "topicId": "topic-02-cestodes-trichinella",
      "topicName": "Cestodes & Trichinella",
      "options": [
        { "id": "a", "text": "Segmented tape-like shape", "isCorrect": false },
        { "id": "b", "text": "Complete alimentary canal", "isCorrect": true },
        { "id": "c", "text": "Head end has suckers/hooks", "isCorrect": false },
        { "id": "d", "text": "Lack body cavity", "isCorrect": false }
      ],
      "explanation": "Cestodes (tapeworms) have NO alimentary canal; they absorb nutrients through their body wall."
    },
    {
      "id": "t2-q8",
      "type": "short-answer",
      "question": "Name two places of predilection for Cysticercus bovis in cattle.",
      "points": 3,
      "topicId": "topic-02-cestodes-trichinella",
      "topicName": "Cestodes & Trichinella",
      "keywords": ["heart", "tongue", "masseter", "muscles", "diaphragm"],
      "minKeywords": 2,
      "modelAnswer": "Heart, tongue, masseter muscles, or diaphragm."
    },
    {
      "id": "t2-q9",
      "type": "multiple-choice",
      "question": "Taenia solium is also known as:",
      "points": 1,
      "topicId": "topic-02-cestodes-trichinella",
      "topicName": "Cestodes & Trichinella",
      "options": [
        { "id": "a", "text": "Beef tapeworm", "isCorrect": false },
        { "id": "b", "text": "Pig tapeworm", "isCorrect": true },
        { "id": "c", "text": "Fish tapeworm", "isCorrect": false },
        { "id": "d", "text": "Dog tapeworm", "isCorrect": false }
      ],
      "explanation": "Taenia solium is the pig tapeworm."
    },
    {
      "id": "t2-q10",
      "type": "multiple-choice",
      "question": "What is the intermediate host for Diphyllobothrium latum before it infects fish?",
      "points": 1,
      "topicId": "topic-02-cestodes-trichinella",
      "topicName": "Cestodes & Trichinella",
      "options": [
        { "id": "a", "text": "Snail", "isCorrect": false },
        { "id": "b", "text": "Cyclops (water flea)", "isCorrect": true },
        { "id": "c", "text": "Mosquito", "isCorrect": false },
        { "id": "d", "text": "Crab", "isCorrect": false }
      ],
      "explanation": "The ciliated larvae (coracidium) are ingested by Cyclops (water fleas), which are then eaten by fish."
    },

    // TOPIC 03: Nematodes & Malaria
    {
      "id": "t3-q1",
      "type": "multiple-choice",
      "question": "Which nematode is commonly known as the 'Whip worm'?",
      "points": 1,
      "topicId": "topic-03-nematodes-malaria",
      "topicName": "Nematodes & Malaria",
      "options": [
        { "id": "a", "text": "Ascaris lumbricoides", "isCorrect": false },
        { "id": "b", "text": "Trichuris trichiura", "isCorrect": true },
        { "id": "c", "text": "Ancylostoma duodenale", "isCorrect": false },
        { "id": "d", "text": "Enterobius vermicularis", "isCorrect": false }
      ],
      "explanation": "Trichuris trichiura is known as the whip worm due to its shape."
    },
    {
      "id": "t3-q2",
      "type": "multiple-choice",
      "question": "How do Hookworm (Ancylostoma) larvae enter the human body?",
      "points": 1,
      "topicId": "topic-03-nematodes-malaria",
      "topicName": "Nematodes & Malaria",
      "options": [
        { "id": "a", "text": "Ingestion of eggs", "isCorrect": false },
        { "id": "b", "text": "Mosquito bite", "isCorrect": false },
        { "id": "c", "text": "Penetration of skin", "isCorrect": true },
        { "id": "d", "text": "Eating raw meat", "isCorrect": false }
      ],
      "explanation": "Filarial form larvae of Hookworm penetrate through the skin of man."
    },
    {
      "id": "t3-q3",
      "type": "true-false",
      "question": "Strongyloides stercolaris is a facultative parasite.",
      "points": 1,
      "topicId": "topic-03-nematodes-malaria",
      "topicName": "Nematodes & Malaria",
      "correctAnswer": true,
      "explanation": "Strongyloides can live as a parasite or free-living, making it facultative."
    },
    {
      "id": "t3-q4",
      "type": "multiple-select",
      "question": "Which of the following are symptoms of Hookworm infection (Ankylostosomias)? (Select all that apply)",
      "points": 2,
      "topicId": "topic-03-nematodes-malaria",
      "topicName": "Nematodes & Malaria",
      "options": [
        { "id": "a", "text": "Ground itch at entry point", "isCorrect": true },
        { "id": "b", "text": "Creeping eruption (Larva migrans)", "isCorrect": true },
        { "id": "c", "text": "Pneumonia during migration", "isCorrect": true },
        { "id": "d", "text": "Calabar swellings", "isCorrect": false }
      ],
      "partialCredit": true,
      "explanation": "Hookworms cause ground itch, creeping eruption, and pneumonia during lung migration. Calabar swellings are caused by Loa loa."
    },
    {
      "id": "t3-q5",
      "type": "fill-blank",
      "question": "The infective form of Plasmodium found in the salivary glands of mosquitoes is called __b1__.",
      "points": 1,
      "topicId": "topic-03-nematodes-malaria",
      "topicName": "Nematodes & Malaria",
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["sporozoite", "sporozoites"], "caseSensitive": false }
      ],
      "explanation": "Sporozoites are the infective stage injected into humans by the mosquito."
    },
    {
      "id": "t3-q6",
      "type": "multiple-choice",
      "question": "In the malaria life cycle, where does the sexual phase (sporogony) take place?",
      "points": 1,
      "topicId": "topic-03-nematodes-malaria",
      "topicName": "Nematodes & Malaria",
      "options": [
        { "id": "a", "text": "Human Liver", "isCorrect": false },
        { "id": "b", "text": "Human Erythrocytes", "isCorrect": false },
        { "id": "c", "text": "Mosquito Intestinal Tract", "isCorrect": true },
        { "id": "d", "text": "Human Lymph Nodes", "isCorrect": false }
      ],
      "explanation": "Sporogony (sexual phase) occurs in the mosquito; Schizogony (asexual phase) occurs in humans."
    },
    {
      "id": "t3-q7",
      "type": "matching",
      "question": "Match the Plasmodium species with its fever periodicity:",
      "points": 2,
      "topicId": "topic-03-nematodes-malaria",
      "topicName": "Nematodes & Malaria",
      "pairs": [
        { "id": "p1", "left": "Plasmodium vivax", "right": "Tertian (2 days)" },
        { "id": "p2", "left": "Plasmodium falciparum", "right": "Quartan (3 days)" }
      ],
      "explanation": "P. vivax typically causes fever every 2 days (tertian), while P. falciparum is associated with quartan fever."
    },
    {
      "id": "t3-q8",
      "type": "multiple-choice",
      "question": "Which Ankylostoma species primarily infects cats and dogs?",
      "points": 1,
      "topicId": "topic-03-nematodes-malaria",
      "topicName": "Nematodes & Malaria",
      "options": [
        { "id": "a", "text": "Ankylostoma duodenale", "isCorrect": false },
        { "id": "b", "text": "Ankylostoma caninum", "isCorrect": true },
        { "id": "c", "text": "Ankylostoma americanus", "isCorrect": false },
        { "id": "d", "text": "Trichuris trichiura", "isCorrect": false }
      ],
      "explanation": "Ankylostoma caninum and Ankylostoma brazilianze infect cats and dogs."
    },
    {
      "id": "t3-q9",
      "type": "ordering",
      "question": "Order the migration path of Hookworm larvae in the human body:",
      "points": 3,
      "topicId": "topic-03-nematodes-malaria",
      "topicName": "Nematodes & Malaria",
      "items": [
        { "id": "i1", "text": "Skin Penetration", "correctPosition": 1 },
        { "id": "i2", "text": "Circulatory System to Heart", "correctPosition": 2 },
        { "id": "i3", "text": "Lungs/Bronchi/Trachea", "correctPosition": 3 },
        { "id": "i4", "text": "Swallowed to Digestive System", "correctPosition": 4 },
        { "id": "i5", "text": "Small Intestines (Adults)", "correctPosition": 5 }
      ]
    },
    {
      "id": "t3-q10",
      "type": "short-answer",
      "question": "What medical condition can Trichuris trichiura cause if there is a heavy infestation?",
      "points": 2,
      "topicId": "topic-03-nematodes-malaria",
      "topicName": "Nematodes & Malaria",
      "keywords": ["appendicitis"],
      "minKeywords": 1,
      "modelAnswer": "Appendicitis."
    },

    // TOPIC 04: Filarial & Other Nematodes
    {
      "id": "t4-q1",
      "type": "multiple-choice",
      "question": "What is the common name for Enterobius vermicularis?",
      "points": 1,
      "topicId": "topic-04-filarial-nematodes",
      "topicName": "Filarial & Other Nematodes",
      "options": [
        { "id": "a", "text": "Roundworm", "isCorrect": false },
        { "id": "b", "text": "Pinworm", "isCorrect": true },
        { "id": "c", "text": "Hookworm", "isCorrect": false },
        { "id": "d", "text": "Tapeworm", "isCorrect": false }
      ],
      "explanation": "Enterobius vermicularis is commonly known as the pinworm or oxyuris."
    },
    {
      "id": "t4-q2",
      "type": "multiple-choice",
      "question": "Where does the gravid female Enterobius vermicularis migrate to lay eggs?",
      "points": 1,
      "topicId": "topic-04-filarial-nematodes",
      "topicName": "Filarial & Other Nematodes",
      "options": [
        { "id": "a", "text": "Lungs", "isCorrect": false },
        { "id": "b", "text": "Stomach", "isCorrect": false },
        { "id": "c", "text": "Perianal region", "isCorrect": true },
        { "id": "d", "text": "Liver", "isCorrect": false }
      ],
      "explanation": "Gravid females migrate nocturnally to the perianal region to lay eggs, causing intense irritation."
    },
    {
      "id": "t4-q3",
      "type": "multiple-choice",
      "question": "Which disease is caused by Wuchereria bancrofti?",
      "points": 1,
      "topicId": "topic-04-filarial-nematodes",
      "topicName": "Filarial & Other Nematodes",
      "options": [
        { "id": "a", "text": "River Blindness", "isCorrect": false },
        { "id": "b", "text": "Filariasis (Elephantiasis)", "isCorrect": true },
        { "id": "c", "text": "Loasis", "isCorrect": false },
        { "id": "d", "text": "Malaria", "isCorrect": false }
      ],
      "explanation": "Wuchereria bancrofti causes Filariasis, which can lead to Elephantiasis in chronic stages."
    },
    {
      "id": "t4-q4",
      "type": "multiple-choice",
      "question": "What is the vector for Onchocerca volvulus?",
      "points": 1,
      "topicId": "topic-04-filarial-nematodes",
      "topicName": "Filarial & Other Nematodes",
      "options": [
        { "id": "a", "text": "Mosquito", "isCorrect": false },
        { "id": "b", "text": "Simulium (Black fly)", "isCorrect": true },
        { "id": "c", "text": "Chrysops (Deer fly)", "isCorrect": false },
        { "id": "d", "text": "Cyclops", "isCorrect": false }
      ],
      "explanation": "The vector for Onchocerca volvulus is the Simulium fly species (Black fly)."
    },
    {
      "id": "t4-q5",
      "type": "multiple-choice",
      "question": "Which parasite causes 'River Blindness'?",
      "points": 1,
      "topicId": "topic-04-filarial-nematodes",
      "topicName": "Filarial & Other Nematodes",
      "options": [
        { "id": "a", "text": "Loa loa", "isCorrect": false },
        { "id": "b", "text": "Onchocerca volvulus", "isCorrect": true },
        { "id": "c", "text": "Wuchereria bancrofti", "isCorrect": false },
        { "id": "d", "text": "Dracunculus medinensis", "isCorrect": false }
      ],
      "explanation": "Onchocerca volvulus causes Onchocerciasis, also known as River Blindness."
    },
    {
      "id": "t4-q6",
      "type": "fill-blank",
      "question": "The swelling caused by Loa loa is known as __b1__ swelling.",
      "points": 1,
      "topicId": "topic-04-filarial-nematodes",
      "topicName": "Filarial & Other Nematodes",
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["calabar"], "caseSensitive": false }
      ],
      "explanation": "Loa loa causes fugitive swellings known as Calabar swellings."
    },
    {
      "id": "t4-q7",
      "type": "multiple-choice",
      "question": "How is Dracunculus medinensis (Guinea worm) transmitted?",
      "points": 1,
      "topicId": "topic-04-filarial-nematodes",
      "topicName": "Filarial & Other Nematodes",
      "options": [
        { "id": "a", "text": "Mosquito bite", "isCorrect": false },
        { "id": "b", "text": "Skin penetration by larvae", "isCorrect": false },
        { "id": "c", "text": "Drinking water containing Cyclops", "isCorrect": true },
        { "id": "d", "text": "Eating raw meat", "isCorrect": false }
      ],
      "explanation": "Man is infected by drinking water containing Cyclops (water fleas) infected with Dracunculus larvae."
    },
    {
      "id": "t4-q8",
      "type": "multiple-choice",
      "question": "What is the vector for Loa loa?",
      "points": 1,
      "topicId": "topic-04-filarial-nematodes",
      "topicName": "Filarial & Other Nematodes",
      "options": [
        { "id": "a", "text": "Horse fly / Chrysops", "isCorrect": true },
        { "id": "b", "text": "Black fly", "isCorrect": false },
        { "id": "c", "text": "Tsetse fly", "isCorrect": false },
        { "id": "d", "text": "House fly", "isCorrect": false }
      ],
      "explanation": "Loa loa is transmitted by the bite of the horse fly or mangrove fly (Chrysops)."
    },
    {
      "id": "t4-q9",
      "type": "true-false",
      "question": "Ascaris lumbricoides larvae migrate through the lungs before developing into adults in the intestines.",
      "points": 1,
      "topicId": "topic-04-filarial-nematodes",
      "topicName": "Filarial & Other Nematodes",
      "correctAnswer": true,
      "explanation": "Ascaris larvae penetrate the intestine, travel to the lungs via blood, ascend the trachea, are swallowed, and return to the intestine to mature."
    },
    {
      "id": "t4-q10",
      "type": "multiple-choice",
      "question": "Which is NOT a symptom of the acute stage of Wuchereria bancrofti infection?",
      "points": 1,
      "topicId": "topic-04-filarial-nematodes",
      "topicName": "Filarial & Other Nematodes",
      "options": [
        { "id": "a", "text": "Numbness", "isCorrect": false },
        { "id": "b", "text": "Aches in limbs", "isCorrect": false },
        { "id": "c", "text": "Elephantiasis", "isCorrect": true },
        { "id": "d", "text": "Headache", "isCorrect": false }
      ],
      "explanation": "Elephantiasis is a symptom of the CHRONIC stage, not the acute stage."
    }
  ]
});