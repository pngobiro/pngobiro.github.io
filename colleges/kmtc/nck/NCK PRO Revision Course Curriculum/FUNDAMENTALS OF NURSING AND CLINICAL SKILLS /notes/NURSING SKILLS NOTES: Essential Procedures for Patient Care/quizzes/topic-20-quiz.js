registerQuiz("topic-20-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-20-quiz",
  "metadata": {
    "title": "Drug Administration Quiz",
    "description": "Test your knowledge of the essential principles and techniques for safe medication delivery.",
    "topicId": "topic-20",
    "difficulty": "intermediate",
    "estimatedTime": 8,
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
      "type": "multiple-select",
      "question": "Which of the following are included in the 'Five Rights' of medication administration? (Select all that apply)",
      "points": 15,
      "options": [
        { "id": "a", "text": "Right Patient", "isCorrect": true },
        { "id": "b", "text": "Right Drug", "isCorrect": true },
        { "id": "c", "text": "Right Dose", "isCorrect": true },
        { "id": "d", "text": "Right Route", "isCorrect": true },
        { "id": "e", "text": "Right Time", "isCorrect": true }
      ],
      "partialCredit": true,
      "explanation": "The Five Rights are the standard verification steps used to prevent medication errors."
    },
    {
      "id": "q2",
      "type": "multiple-choice",
      "question": "What is the correct angle for an intramuscular (IM) injection?",
      "points": 10,
      "options": [
        { "id": "a", "text": "15 degrees", "isCorrect": false },
        { "id": "b", "text": "45 degrees", "isCorrect": false },
        { "id": "c", "text": "90 degrees", "isCorrect": true },
        { "id": "d", "text": "Parallel to the skin", "isCorrect": false }
      ],
      "explanation": "IM injections must be delivered deep into the muscle tissue, requiring a 90-degree angle."
    },
    {
      "id": "q3",
      "type": "multiple-choice",
      "question": "Where is a sublingual medication placed for absorption?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Between the cheek and gum", "isCorrect": false },
        { "id": "b", "text": "Under the tongue", "isCorrect": true },
        { "id": "c", "text": "In the back of the throat", "isCorrect": false },
        { "id": "d", "text": "Swallowed immediately", "isCorrect": false }
      ],
      "explanation": "Sublingual means 'under the tongue', where the medication is absorbed through the mucous membranes into the bloodstream."
    },
    {
      "id": "q4",
      "type": "true-false",
      "question": "A successful intradermal (ID) injection should result in the formation of a small 'bleb' or wheal on the skin.",
      "points": 10,
      "correctAnswer": true,
      "explanation": "The appearance of a bleb indicates that the medication has been correctly deposited into the dermis."
    },
    {
      "id": "q5",
      "type": "multiple-choice",
      "question": "Digoxin should generally be withheld if the patient's apical pulse is below which rate?",
      "points": 10,
      "options": [
        { "id": "a", "text": "100 beats per minute", "isCorrect": false },
        { "id": "b", "text": "80 beats per minute", "isCorrect": false },
        { "id": "c", "text": "60 beats per minute", "isCorrect": true },
        { "id": "d", "text": "40 beats per minute", "isCorrect": false }
      ],
      "explanation": "Digoxin slows the heart rate; administering it to a patient who is already bradycardic (&lt;60 bpm) can be dangerous."
    }
  ]
});
