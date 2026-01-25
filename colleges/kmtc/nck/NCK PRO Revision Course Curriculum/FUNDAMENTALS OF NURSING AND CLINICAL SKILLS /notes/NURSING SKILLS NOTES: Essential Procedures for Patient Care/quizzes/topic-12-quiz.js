registerQuiz("topic-12-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-12-quiz",
  "metadata": {
    "title": "NGT Removal Quiz",
    "description": "Evaluate your understanding of the safe procedures for withdrawing a Nasal Gastric Tube.",
    "topicId": "topic-12",
    "difficulty": "intermediate",
    "estimatedTime": 5,
    "passingScore": 80,
    "createdAt": "2026-01-25T00:00:00Z"
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
      "question": "What is the primary rationale for injecting 30-50cc of air into the NGT before withdrawing it?",
      "points": 10,
      "options": [
        { "id": "a", "text": "To inflate the stomach", "isCorrect": false },
        { "id": "b", "text": "To clear the tube of gastric drainage and prevent irritation/aspiration", "isCorrect": true },
        { "id": "c", "text": "To check if the tube is still patent", "isCorrect": false },
        { "id": "d", "text": "To make the patient burp", "isCorrect": false }
      ],
      "explanation": "Air clears the tube of any remaining gastric contents which might otherwise drip onto the esophageal or nasal mucosa during withdrawal, causing irritation or aspiration."
    },
    {
      "id": "q2",
      "type": "multiple-choice",
      "question": "What instruction should the nurse give the patient right before pulling the tube out?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Cough vigorously", "isCorrect": false },
        { "id": "b", "text": "Exhale as fast as possible", "isCorrect": false },
        { "id": "c", "text": "Take a deep breath and hold it", "isCorrect": true },
        { "id": "d", "text": "Pant like a dog", "isCorrect": false }
      ],
      "explanation": "Holding a deep breath closes the glottis, which helps prevent the accidental aspiration of any gastric secretions during the removal process."
    },
    {
      "id": "q3",
      "type": "true-false",
      "question": "The NGT should be removed as quickly as possible (in less than 1 second) to minimize pain.",
      "points": 10,
      "correctAnswer": false,
      "explanation": "The tube should be removed slowly but evenly over the course of 3-6 seconds to minimize patient discomfort and trauma to the mucosa."
    },
    {
      "id": "q4",
      "type": "multiple-select",
      "question": "Which of the following are signs of functional bowel activity following NGT removal? (Select all that apply)",
      "points": 15,
      "options": [
        { "id": "a", "text": "Bowel sounds", "isCorrect": true },
        { "id": "b", "text": "Flatulence", "isCorrect": true },
        { "id": "c", "text": "Absence of nausea", "isCorrect": true },
        { "id": "d", "text": "Nasal irritation", "isCorrect": false }
      ],
      "partialCredit": true,
      "explanation": "Bowel sounds and flatulence are direct indicators that the gastrointestinal tract is functioning normally again."
    },
    {
      "id": "q5",
      "type": "multiple-choice",
      "question": "Why is Fowler's position preferred for NGT removal?",
      "points": 10,
      "options": [
        { "id": "a", "text": "It helps the nurse see better", "isCorrect": false },
        { "id": "b", "text": "It eases removal and prevents aspiration if the patient vomits", "isCorrect": true },
        { "id": "c", "text": "It prevents the patient from seeing the tube", "isCorrect": false },
        { "id": "d", "text": "It is the only position the patient can tolerate", "isCorrect": false }
      ],
      "explanation": "The elevated head position uses gravity to assist the procedure and protects the airway in case the gag reflex is stimulated."
    }
  ]
});
