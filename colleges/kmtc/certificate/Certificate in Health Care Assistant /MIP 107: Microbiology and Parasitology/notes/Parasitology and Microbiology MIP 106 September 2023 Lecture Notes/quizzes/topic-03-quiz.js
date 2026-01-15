registerQuiz("topic-03-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-03-quiz",
  "metadata": {
    "title": "Nematodes & Malaria Quiz",
    "description": "Test your knowledge on intestinal nematodes and Plasmodium.",
    "topicId": "topic-03-nematodes-malaria",
    "difficulty": "intermediate",
    "estimatedTime": 15,
    "passingScore": 70,
    "createdAt": "2025-12-25T00:00:00Z",
    "tags": ["nematodes", "malaria", "hookworm", "plasmodium"]
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
      "question": "Which parasite is commonly known as the 'Whip worm'?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Ascaris lumbricoides", "isCorrect": false },
        { "id": "b", "text": "Trichuris trichiura", "isCorrect": true },
        { "id": "c", "text": "Strongyloides stercolaris", "isCorrect": false },
        { "id": "d", "text": "Ankylostoma duodenale", "isCorrect": false }
      ],
      "explanation": "Trichuris trichiura is called the whip worm because the adult buries its head in the intestine wall like a whip."
    },
    {
      "id": "q2",
      "type": "fill-blank",
      "question": "Strongyloides stercolaris infects man through penetration of skin by __b1__ larvae.",
      "points": 10,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["filarial", "fillarial", "rhabditiform"], "caseSensitive": false }
      ],
      "explanation": "Infection occurs via penetration of the skin by filarial form larvae."
    },
    {
      "id": "q3",
      "type": "multiple-select",
      "question": "Which of the following are symptoms of Hookworm (Ankylostoma) infection? (Select all that apply)",
      "points": 15,
      "options": [
        { "id": "a", "text": "Ground itch", "isCorrect": true },
        { "id": "b", "text": "Creeping eruption (Larva migrans)", "isCorrect": true },
        { "id": "c", "text": "Calabar swellings", "isCorrect": false },
        { "id": "d", "text": "Pneumonia/Cough", "isCorrect": true }
      ],
      "partialCredit": true,
      "explanation": "Hookworms cause ground itch, larva migrans, and respiratory symptoms during migration. Calabar swellings are from Loa loa."
    },
    {
      "id": "q4",
      "type": "multiple-choice",
      "question": "In the Malaria life cycle, the sexual phase is known as:",
      "points": 10,
      "options": [
        { "id": "a", "text": "Schizogony", "isCorrect": false },
        { "id": "b", "text": "Sporogony", "isCorrect": true },
        { "id": "c", "text": "Encystment", "isCorrect": false },
        { "id": "d", "text": "Gametogony", "isCorrect": false }
      ],
      "explanation": "Sporogony is the sexual phase occurring in the mosquito; Schizogony is the asexual phase in humans."
    },
    {
      "id": "q5",
      "type": "true-false",
      "question": "The infective stage of Plasmodium injected into man by a mosquito is the Merozoite.",
      "points": 10,
      "correctAnswer": false,
      "explanation": "The infective form is the **Sporozoite**. Merozoites are released from the liver."
    },
    {
      "id": "q6",
      "type": "ordering",
      "question": "Arrange the life cycle stages of Hookworm infection in man:",
      "points": 20,
      "items": [
        { "id": "i1", "text": "Penetration of skin", "correctPosition": 1 },
        { "id": "i2", "text": "Circulatory system to Heart", "correctPosition": 2 },
        { "id": "i3", "text": "Lungs/Trachea", "correctPosition": 3 },
        { "id": "i4", "text": "Swallowed to Digestive System", "correctPosition": 4 },
        { "id": "i5", "text": "Adults in Small Intestines", "correctPosition": 5 }
      ]
    },
    {
      "id": "q7",
      "type": "matching",
      "question": "Match the Plasmodium species with its fever periodicity:",
      "points": 15,
      "pairs": [
        { "id": "p1", "left": "Plasmodium vivax", "right": "Tertian (2 days)" },
        { "id": "p2", "left": "Plasmodium falciparum", "right": "Quartan (3 days)" }
      ],
      "explanation": "P. vivax causes fever every 2 days; P. falciparum generally every 3 days (though irregular)."
    },
    {
      "id": "q8",
      "type": "multiple-choice",
      "question": "Which medical condition can be caused by Trichuris trichiura depending on the dose?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Appendicitis", "isCorrect": true },
        { "id": "b", "text": "Liver cirrhosis", "isCorrect": false },
        { "id": "c", "text": "Blindness", "isCorrect": false },
        { "id": "d", "text": "Elephantiasis", "isCorrect": false }
      ],
      "explanation": "Heavy infestation of whipworms can cause inflammation leading to Appendicitis."
    },
    {
      "id": "q9",
      "type": "short-answer",
      "question": "What is the diagnosis method for Ankylostoma (Hookworm)?",
      "points": 10,
      "keywords": ["ova", "eggs", "feaces", "feces", "stool"],
      "minKeywords": 2,
      "modelAnswer": "Ova in feaces."
    },
    {
      "id": "q10",
      "type": "multiple-choice",
      "question": "Which Ankylostoma species primarily infects dogs and cats?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Ankylostoma duodenale", "isCorrect": false },
        { "id": "b", "text": "Ankylostoma americanus", "isCorrect": false },
        { "id": "c", "text": "Ankylostoma caninum", "isCorrect": true },
        { "id": "d", "text": "Trichuris trichiura", "isCorrect": false }
      ],
      "explanation": "Ankylostoma caninum and Ankylostoma brazilianze infect cats and dogs."
    }
  ]
});