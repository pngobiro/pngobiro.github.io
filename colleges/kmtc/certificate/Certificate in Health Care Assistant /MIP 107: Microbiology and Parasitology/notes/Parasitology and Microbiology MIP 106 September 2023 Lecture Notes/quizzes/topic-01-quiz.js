registerQuiz("topic-01-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-01-quiz",
  "metadata": {
    "title": "Introduction to Parasitology",
    "description": "Test your knowledge on basic definitions, host-parasite associations, and classification.",
    "topicId": "topic-01-introduction",
    "difficulty": "beginner",
    "estimatedTime": 10,
    "passingScore": 70,
    "createdAt": "2025-12-25T00:00:00Z",
    "tags": ["introduction", "definitions", "classification"]
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
      "question": "Which term describes an organism that lives in another organism, derives food from it, and gives nothing in return?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Commensal", "isCorrect": false },
        { "id": "b", "text": "Parasite", "isCorrect": true },
        { "id": "c", "text": "Symbiont", "isCorrect": false },
        { "id": "d", "text": "Host", "isCorrect": false }
      ],
      "explanation": "A parasite is defined as an organism which lives in another organism and derives its food from another host and gives nothing in turn."
    },
    {
      "id": "q2",
      "type": "matching",
      "question": "Match the host type with its definition:",
      "points": 20,
      "pairs": [
        { "id": "p1", "left": "Definitive Host", "right": "Host in which parasite reaches maturity" },
        { "id": "p2", "left": "Intermediate Host", "right": "Host where parasite undergoes preliminary development" },
        { "id": "p3", "left": "Reservoir", "right": "Source of Infestation" }
      ],
      "explanation": "Definitive hosts harbor the mature parasite (e.g., man for Taenia saginata), while intermediate hosts harbor developing stages."
    },
    {
      "id": "q3",
      "type": "multiple-choice",
      "question": "Which association describes a relationship where one organism is harmed while the other benefits?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Mutualism", "isCorrect": false },
        { "id": "b", "text": "Commensalism", "isCorrect": false },
        { "id": "c", "text": "Parasitism", "isCorrect": true },
        { "id": "d", "text": "Symbiosis", "isCorrect": false }
      ],
      "explanation": "Parasitism is an association where one organism is harmed while the other benefits (e.g., Ascaris feeding in the intestine)."
    },
    {
      "id": "q4",
      "type": "fill-blank",
      "question": "A __b1__ parasite is incapable of living independently.",
      "points": 10,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["obligate"], "caseSensitive": false }
      ],
      "explanation": "Obligate parasites are incapable of living independently, whereas facultative parasites can live parasitic or free lives."
    },
    {
      "id": "q5",
      "type": "multiple-select",
      "question": "Which of the following are classes of Protozoa? (Select all that apply)",
      "points": 10,
      "options": [
        { "id": "a", "text": "Amoeba", "isCorrect": true },
        { "id": "b", "text": "Nematodes", "isCorrect": false },
        { "id": "c", "text": "Flagellates", "isCorrect": true },
        { "id": "d", "text": "Ciliates", "isCorrect": true },
        { "id": "e", "text": "Trematodes", "isCorrect": false }
      ],
      "partialCredit": true,
      "explanation": "Protozoa are divided into Amoeba, Flagellates, Ciliates, and Sporozoa. Nematodes and Trematodes are Helminths."
    },
    {
      "id": "q6",
      "type": "image-based",
      "question": "Identify the type of helminth shown in the image (Ascaris lumbricoides):",
      "points": 10,
      "imageUrl": "../assets/images/image-20260115-4c5c2705.jpeg",
      "imageAlt": "Image of a cylindrical worm",
      "options": [
        { "id": "a", "text": "Cestode (Tapeworm)", "isCorrect": false },
        { "id": "b", "text": "Nematode (Roundworm)", "isCorrect": true },
        { "id": "c", "text": "Trematode (Fluke)", "isCorrect": false }
      ],
      "explanation": "Nematodes (like Ascaris) have an elongated cylindrical shape."
    },
    {
      "id": "q7",
      "type": "true-false",
      "question": "Trematodes generally have a leaf-like unsegmented body.",
      "points": 10,
      "correctAnswer": true,
      "explanation": "Trematodes (flukes) are characterized by a leaf-like unsegmented body and suckers without hooks."
    },
    {
      "id": "q8",
      "type": "multiple-choice",
      "question": "Which of the following is NOT a predisposing factor for parasitic infections?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Poor disposal of wastes", "isCorrect": false },
        { "id": "b", "text": "Proper cooking of beef", "isCorrect": true },
        { "id": "c", "text": "Individual lifestyle (eating raw vegetables)", "isCorrect": false },
        { "id": "d", "text": "Age (toddlers)", "isCorrect": false }
      ],
      "explanation": "Proper cooking of beef is a prevention measure, not a predisposing factor."
    },
    {
      "id": "q9",
      "type": "fill-blank",
      "question": "The larval stage of a parasite where no development goes on is called a __b1__.",
      "points": 10,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["cyst"], "caseSensitive": false }
      ],
      "explanation": "A cyst is the larval stage where no development occurs; encystment is the process of forming it."
    },
    {
      "id": "q10",
      "type": "multiple-choice",
      "question": "Which of the following move by pseudopodia?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Giardia lamblia", "isCorrect": false },
        { "id": "b", "text": "Balantidium coli", "isCorrect": false },
        { "id": "c", "text": "Entamoeba histolytica", "isCorrect": true },
        { "id": "d", "text": "Plasmodium vivax", "isCorrect": false }
      ],
      "explanation": "Amoeba (like Entamoeba histolytica) move by pseudopodia."
    }
  ]
});