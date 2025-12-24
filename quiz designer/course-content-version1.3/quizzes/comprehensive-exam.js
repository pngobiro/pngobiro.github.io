/**
 * Comprehensive Exam - Questions from All Topics
 * This exam pulls questions across the entire course
 * 
 * EXAM TYPES:
 * - "comprehensive" : All topics, full coverage
 * - "midterm"       : First half of topics
 * - "final"         : Second half or cumulative
 * - "practice"      : Random selection for practice
 */

registerQuiz("comprehensive-exam", {
  "schemaVersion": "1.0",
  "quizId": "comprehensive-exam",
  "metadata": {
    "title": "Comprehensive Final Exam",
    "description": "Test your knowledge across all course topics",
    "examType": "comprehensive",
    "topicsCovered": ["topic-01", "topic-02", "topic-03"],
    "difficulty": "advanced",
    "estimatedTime": 45,
    "passingScore": 75,
    "createdAt": "2025-12-25T00:00:00Z",
    "tags": ["final", "comprehensive", "all-topics"]
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
    {
      "id": "comp-q1",
      "type": "multiple-choice",
      "question": "From Topic 1: What is the capital of France?",
      "points": 10,
      "topicId": "topic-01",
      "topicName": "Geography Basics",
      "options": [
        { "id": "a", "text": "London", "isCorrect": false },
        { "id": "b", "text": "Paris", "isCorrect": true },
        { "id": "c", "text": "Berlin", "isCorrect": false }
      ],
      "explanation": "Paris is the capital of France."
    },
    {
      "id": "comp-q2",
      "type": "true-false",
      "question": "From Topic 2: Water boils at 100°C at sea level.",
      "points": 10,
      "topicId": "topic-02",
      "topicName": "Basic Chemistry",
      "correctAnswer": true,
      "explanation": "At standard atmospheric pressure (sea level), water boils at 100°C."
    },
    {
      "id": "comp-q3",
      "type": "multiple-select",
      "question": "From Topic 3: Which are mammals? (Select all)",
      "points": 15,
      "topicId": "topic-03",
      "topicName": "Biology",
      "options": [
        { "id": "a", "text": "Whale", "isCorrect": true },
        { "id": "b", "text": "Shark", "isCorrect": false },
        { "id": "c", "text": "Dolphin", "isCorrect": true },
        { "id": "d", "text": "Bat", "isCorrect": true }
      ],
      "partialCredit": true,
      "explanation": "Whales, dolphins, and bats are mammals. Sharks are fish."
    }
  ]
});
