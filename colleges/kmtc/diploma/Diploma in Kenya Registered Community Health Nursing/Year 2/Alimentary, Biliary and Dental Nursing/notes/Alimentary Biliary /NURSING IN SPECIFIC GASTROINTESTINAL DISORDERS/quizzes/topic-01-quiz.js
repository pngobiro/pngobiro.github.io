registerQuiz("topic-01-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-01-quiz",
  "metadata": {
    "title": "Mouth & Oesophageal Disorders Quiz",
    "description": "Test your knowledge on stomatitis, glossitis, achalasia, and esophageal structural disorders.",
    "topicId": "topic-01",
    "difficulty": "beginner",
    "estimatedTime": 10,
    "passingScore": 70,
    "createdAt": "2025-12-25T00:00:00Z",
    "tags": ["stomatitis", "esophagus", "hernia", "nursing"]
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
      "type": "matching",
      "question": "Match the oral disorder with its correct definition:",
      "points": 15,
      "pairs": [
        { "id": "p1", "left": "Stomatitis", "right": "Inflammation of the buccal mucosa" },
        { "id": "p2", "left": "Glossitis", "right": "Inflammation of the tongue" },
        { "id": "p3", "left": "Leukoplakia", "right": "White, firm, smooth patches on tongue/mucosa" },
        { "id": "p4", "left": "Parotitis", "right": "Infection of the salivary gland" }
      ],
      "explanation": "Stomatitis affects the buccal mucosa, Glossitis affects the tongue, Leukoplakia presents as white patches (often precancerous), and Parotitis is the inflammation of the parotid salivary gland."
    },
    {
      "id": "q2",
      "type": "multiple-choice",
      "question": "Which organism is responsible for causing Candidiasis (Thrush)?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Herpes simplex virus", "isCorrect": false },
        { "id": "b", "text": "Candida albicans", "isCorrect": true },
        { "id": "c", "text": "Fusiform bacillus", "isCorrect": false },
        { "id": "d", "text": "Spirochaetes", "isCorrect": false }
      ],
      "explanation": "Candidiasis (moniliasis/thrush) is caused by the fungus Candida albicans. It often appears as white patches on the tongue."
    },
    {
      "id": "q3",
      "type": "image-based",
      "question": "Identify the type of esophageal disorder shown in diagram (a):",
      "points": 10,
      "media": {
        "type": "image",
        "url": "../assets/images/image-20251225-ec9770f0.jpeg",
        "alt": "Diagram showing stomach protruding through diaphragm",
        "caption": "Figure 4.2"
      },
      "options": [
        { "id": "a", "text": "Achalasia", "isCorrect": false },
        { "id": "b", "text": "Sliding Esophageal Hernia", "isCorrect": true },
        { "id": "c", "text": "Paraesophageal Hernia", "isCorrect": false },
        { "id": "d", "text": "Esophageal Diverticulum", "isCorrect": false }
      ],
      "explanation": "Figure 4.2(a) depicts a Sliding Esophageal Hernia (Hiatus Hernia), where a portion of the stomach protrudes upward through the esophageal hiatus of the diaphragm."
    },
    {
      "id": "q4",
      "type": "multiple-select",
      "question": "Which of the following are appropriate nursing interventions for a patient with Gastroesophageal Reflux? (Select all that apply)",
      "points": 15,
      "options": [
        { "id": "a", "text": "Eat small, frequent meals", "isCorrect": true },
        { "id": "b", "text": "Lie down immediately after eating", "isCorrect": false },
        { "id": "c", "text": "Avoid caffeine and alcohol", "isCorrect": true },
        { "id": "d", "text": "Sleep with head elevated", "isCorrect": true },
        { "id": "e", "text": "Wear tight belts to support the abdomen", "isCorrect": false }
      ],
      "partialCredit": true,
      "explanation": "Patients should eat small frequent meals, avoid caffeine/alcohol, and sleep with head elevated. They should NOT lie down after eating or wear tight belts, as these increase abdominal pressure and reflux."
    },
    {
      "id": "q5",
      "type": "fill-blank",
      "question": "The specific drug used to treat fungal infections of the mouth like Thrush is Tab. ______.",
      "points": 10,
      "blanks": [
        { "id": "1", "acceptedAnswers": ["Nystatin", "nystatin"], "caseSensitive": false }
      ],
      "explanation": "Nystatin is the antifungal agent of choice for treating oral candidiasis (thrush)."
    },
    {
      "id": "q6",
      "type": "true-false",
      "question": "Achalasia is characterized by the failure of the lower esophageal sphincter to relax, leading to difficulty swallowing.",
      "points": 5,
      "correctAnswer": true,
      "explanation": "Achalasia involves impaired esophageal motility and lack of peristalsis/relaxation of the sphincter, causing dysphagia."
    },
    {
      "id": "q7",
      "type": "multiple-choice",
      "question": "What is a primary symptom of an Esophageal Diverticulum?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Profuse bleeding", "isCorrect": false },
        { "id": "b", "text": "Foul odour of regurgitated material", "isCorrect": true },
        { "id": "c", "text": "Severe diarrhea", "isCorrect": false },
        { "id": "d", "text": "Formation of white patches", "isCorrect": false }
      ],
      "explanation": "Food collects in the diverticulum pouch, decomposes, and when regurgitated, has a foul odour."
    },
    {
      "id": "q8",
      "type": "short-answer",
      "question": "Why is oral hygiene critical in patients with parotitis?",
      "points": 10,
      "keywords": ["infection", "bacteria", "salivary", "gland", "mouth", "clean"],
      "minKeywords": 2,
      "modelAnswer": "Good oral hygiene prevents the spread of bacterial infection to the salivary glands and keeps the mouth clean to reduce inflammation.",
      "maxLength": 200
    },
    {
      "id": "q9",
      "type": "multiple-choice",
      "question": "Which position is recommended for a patient during gastrostomy feeding to prevent regurgitation?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Supine", "isCorrect": false },
        { "id": "b", "text": "High Fowler's", "isCorrect": true },
        { "id": "c", "text": "Trendelenburg", "isCorrect": false },
        { "id": "d", "text": "Left Lateral", "isCorrect": false }
      ],
      "explanation": "Feeding in a High Fowler's position uses gravity to keep food in the stomach and prevents esophageal regurgitation and aspiration."
    },
    {
      "id": "q10",
      "type": "multiple-select",
      "question": "Select the correct instructions for a patient with a gastrostomy tube:",
      "points": 15,
      "options": [
        { "id": "a", "text": "Warm feeds to room temperature", "isCorrect": true },
        { "id": "b", "text": "Flush with 50ml water before and after feeds", "isCorrect": true },
        { "id": "c", "text": "Clean skin around catheter with soap and water", "isCorrect": true },
        { "id": "d", "text": "Keep the tube clamped at all times", "isCorrect": false }
      ],
      "explanation": "Feeds should be room temperature to prevent cramping, flushed to maintain patency, and skin must be kept clean to prevent irritation."
    }
  ]
});
