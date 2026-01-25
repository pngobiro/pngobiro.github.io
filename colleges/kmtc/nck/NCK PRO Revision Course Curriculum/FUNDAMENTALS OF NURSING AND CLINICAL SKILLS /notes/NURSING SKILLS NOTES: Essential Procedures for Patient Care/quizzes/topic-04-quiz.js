registerQuiz("topic-04-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-04-quiz",
  "metadata": {
    "title": "Bed Bath Quiz",
    "description": "Test your knowledge on the procedures and rationales for giving a bed bath.",
    "topicId": "topic-04",
    "difficulty": "beginner",
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
      "question": "When cleaning the eyes during a bed bath, what is the correct technique?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Clean from outside to inside", "isCorrect": false },
        { "id": "b", "text": "Clean from inside to outside", "isCorrect": true },
        { "id": "c", "text": "Use the same part of the flannel for both eyes", "isCorrect": false },
        { "id": "d", "text": "Scrub vigorously", "isCorrect": false }
      ],
      "explanation": "Cleaning from inside (inner canthus) to outside prevents debris from entering the lacrimal duct and minimizes cross-contamination."
    },
    {
      "id": "q2",
      "type": "multiple-choice",
      "question": "Which of the following patients is a primary candidate for a bed bath?",
      "points": 10,
      "options": [
        { "id": "a", "text": "A patient who can walk to the shower", "isCorrect": false },
        { "id": "b", "text": "An unconscious patient", "isCorrect": true },
        { "id": "c", "text": "A patient with a minor finger injury", "isCorrect": false },
        { "id": "d", "text": "A patient scheduled for discharge", "isCorrect": false }
      ],
      "explanation": "Bed baths are indicated for patients who are unable to bathe themselves, such as those who are unconscious or critically ill."
    },
    {
      "id": "q3",
      "type": "true-false",
      "question": "Plain water should be used to clean the face during a bed bath.",
      "points": 10,
      "correctAnswer": true,
      "explanation": "Soap is generally avoided on the face unless requested or specifically indicated, as it can irritate the eyes."
    },
    {
      "id": "q4",
      "type": "multiple-select",
      "question": "What are the purposes of giving a bed bath? (Select all that apply)",
      "points": 15,
      "options": [
        { "id": "a", "text": "Stimulate circulation", "isCorrect": true },
        { "id": "b", "text": "Assess the skin", "isCorrect": true },
        { "id": "c", "text": "Promote range of motion", "isCorrect": true },
        { "id": "d", "text": "Prevent microorganism spread", "isCorrect": true }
      ],
      "partialCredit": true,
      "explanation": "A bed bath serves multiple clinical purposes beyond simple hygiene, including assessment and physiological stimulation."
    },
    {
      "id": "q5",
      "type": "multiple-choice",
      "question": "Why is it critical to change the water before cleaning the genitalia?",
      "points": 10,
      "options": [
        { "id": "a", "text": "To keep the water warm", "isCorrect": false },
        { "id": "b", "text": "To prevent cross-contamination from other body parts", "isCorrect": true },
        { "id": "c", "text": "Because the patient might be cold", "isCorrect": false },
        { "id": "d", "text": "To save soap", "isCorrect": false }
      ],
      "explanation": "Fresh water ensures that the most delicate and potentially contaminated areas are cleaned without introducing microorganisms from the rest of the body."
    }
  ]
});
