/**
 * Quiz Data File (JSONP format)
 * This format works when opening HTML files directly in browser (file:// protocol)
 * 
 * Usage in HTML:
 *   <div class="quiz-container" 
 *        data-quiz-id="sample-quiz"
 *        data-quiz-js="../quizzes/sample-quiz.js">
 */

registerQuiz("sample-quiz", {
  "schemaVersion": "1.0",
  "quizId": "sample-quiz",
  "metadata": {
    "title": "Sample Quiz",
    "description": "A sample quiz demonstrating the JSONP loading method",
    "topicId": "topic-sample",
    "difficulty": "beginner",
    "estimatedTime": 5,
    "passingScore": 70,
    "createdAt": "2025-12-25T00:00:00Z"
  },
  "settings": {
    "shuffleQuestions": false,
    "shuffleOptions": true,
    "showFeedback": "immediate",
    "allowRetry": true,
    "showCorrectAnswers": true
  },
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "question": "What is the capital of France?",
      "points": 10,
      "options": [
        { "id": "a", "text": "London", "isCorrect": false },
        { "id": "b", "text": "Paris", "isCorrect": true },
        { "id": "c", "text": "Berlin", "isCorrect": false },
        { "id": "d", "text": "Madrid", "isCorrect": false }
      ],
      "explanation": "Paris is the capital and largest city of France.",
      "hint": "It's known as the City of Light."
    },
    {
      "id": "q2",
      "type": "true-false",
      "question": "The Earth is flat.",
      "points": 10,
      "correctAnswer": false,
      "explanation": "The Earth is an oblate spheroid - roughly spherical but slightly flattened at the poles."
    },
    {
      "id": "q3",
      "type": "multiple-select",
      "question": "Which are primary colors? (Select all that apply)",
      "points": 15,
      "options": [
        { "id": "a", "text": "Red", "isCorrect": true },
        { "id": "b", "text": "Green", "isCorrect": false },
        { "id": "c", "text": "Blue", "isCorrect": true },
        { "id": "d", "text": "Yellow", "isCorrect": true }
      ],
      "partialCredit": true,
      "explanation": "In traditional color theory (painting), the primary colors are red, yellow, and blue."
    }
  ]
});
