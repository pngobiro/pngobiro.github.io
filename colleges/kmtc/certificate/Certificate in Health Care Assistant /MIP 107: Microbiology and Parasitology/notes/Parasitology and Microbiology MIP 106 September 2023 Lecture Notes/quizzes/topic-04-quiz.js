registerQuiz("topic-04-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-04-quiz",
  "metadata": {
    "title": "Filarial & Other Nematodes Quiz",
    "description": "Assess your knowledge on Enterobius, Ascaris, and tissue nematodes.",
    "topicId": "topic-04-filarial-nematodes",
    "difficulty": "intermediate",
    "estimatedTime": 15,
    "passingScore": 70,
    "createdAt": "2025-12-25T00:00:00Z",
    "tags": ["filarial", "nematodes", "ascaris", "guinea worm"]
  },
  "settings": {
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "showFeedback": "immediate",
    "allowRetry": true,
    "showCorrectAnswers": true
  },
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "question": "What is the common name for Enterobius vermicularis?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Roundworm", "isCorrect": false },
        { "id": "b", "text": "Pinworm", "isCorrect": true },
        { "id": "c", "text": "Hookworm", "isCorrect": false },
        { "id": "d", "text": "Tapeworm", "isCorrect": false }
      ],
      "explanation": "Enterobius vermicularis is commonly known as the pinworm or oxyuris."
    },
    {
      "id": "q2",
      "type": "multiple-choice",
      "question": "Where does the gravid female Enterobius vermicularis lay its eggs?",
      "points": 10,
      "options": [
        { "id": "a", "text": "In the stomach", "isCorrect": false },
        { "id": "b", "text": "In the lungs", "isCorrect": false },
        { "id": "c", "text": "In the anal/genital region", "isCorrect": true },
        { "id": "d", "text": "In the small intestine", "isCorrect": false }
      ],
      "explanation": "Gravid females shift to the caecum and lay eggs in the anal/genital region, causing intense irritation."
    },
    {
      "id": "q3",
      "type": "ordering",
      "question": "Order the life cycle of Ascaris lumbricoides:",
      "points": 20,
      "items": [
        { "id": "i1", "text": "Ingestion of eggs", "correctPosition": 1 },
        { "id": "i2", "text": "Larvae penetrate intestine wall", "correctPosition": 2 },
        { "id": "i3", "text": "Migration to Lungs/Bronchi", "correctPosition": 3 },
        { "id": "i4", "text": "Ascend trachea and swallowed", "correctPosition": 4 },
        { "id": "i5", "text": "Adults develop in Intestines", "correctPosition": 5 }
      ]
    },
    {
      "id": "q4",
      "type": "matching",
      "question": "Match the parasite with its vector/intermediate host:",
      "points": 20,
      "pairs": [
        { "id": "p1", "left": "Wuchereria bancrofti", "right": "Mosquito (Culex/Anopheles)" },
        { "id": "p2", "left": "Onchocerca volvulus", "right": "Simulium (Black fly)" },
        { "id": "p3", "left": "Loa loa", "right": "Chrysops (Horse/Deer fly)" },
        { "id": "p4", "left": "Dracunculus medinensis", "right": "Cyclops (Water flea)" }
      ],
      "explanation": "Wuchereria is transmitted by mosquitoes, Onchocerca by Simulium flies, Loa loa by Chrysops flies, and Guinea worm by drinking water with Cyclops."
    },
    {
      "id": "q5",
      "type": "multiple-choice",
      "question": "Which disease is caused by Onchocerca volvulus?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Elephantiasis", "isCorrect": false },
        { "id": "b", "text": "River Blindness", "isCorrect": true },
        { "id": "c", "text": "Loasis", "isCorrect": false },
        { "id": "d", "text": "Malaria", "isCorrect": false }
      ],
      "explanation": "Onchocerciasis is commonly known as River Blindness."
    },
    {
      "id": "q6",
      "type": "fill-blank",
      "question": "Chronic Wuchereria bancrofti infection causes genital enlargement and __b1__.",
      "points": 10,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["elephantiasis"], "caseSensitive": false }
      ],
      "explanation": "Obstruction of lymphatics leads to Elephantiasis."
    },
    {
      "id": "q7",
      "type": "multiple-choice",
      "question": "Calabar swellings are a symptom of which infection?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Ascariasis", "isCorrect": false },
        { "id": "b", "text": "Loasis (Loa loa)", "isCorrect": true },
        { "id": "c", "text": "Dracunculiasis", "isCorrect": false },
        { "id": "d", "text": "Enterobiasis", "isCorrect": false }
      ],
      "explanation": "Loa loa causes fugitive swellings known as Calabar swellings."
    },
    {
      "id": "q8",
      "type": "true-false",
      "question": "Man is infected with Dracunculus medinensis by the bite of a Cyclops.",
      "points": 10,
      "correctAnswer": false,
      "explanation": "Man is infected by **drinking water** containing Cyclops (water fleas) infected with the larvae."
    },
    {
      "id": "q9",
      "type": "image-based",
      "question": "Identify the vector for Loa loa shown in the diagram (Chrysops):",
      "points": 10,
      "imageUrl": "../assets/images/image-20260115-be6c240f.jpeg",
      "imageAlt": "Life cycle diagram showing a fly vector",
      "options": [
        { "id": "a", "text": "Mosquito", "isCorrect": false },
        { "id": "b", "text": "Simulium (Black fly)", "isCorrect": false },
        { "id": "c", "text": "Chrysops (Horse fly)", "isCorrect": true }
      ],
      "explanation": "The vector shown in the Loa loa life cycle is the Chrysops fly."
    },
    {
      "id": "q10",
      "type": "short-answer",
      "question": "What is the primary method of prevention for Dracunculus medinensis?",
      "points": 15,
      "keywords": ["boil", "water", "filter", "protection", "sources"],
      "minKeywords": 1,
      "modelAnswer": "Boiling water, protecting water sources, or filtering water to remove Cyclops."
    }
  ]
});