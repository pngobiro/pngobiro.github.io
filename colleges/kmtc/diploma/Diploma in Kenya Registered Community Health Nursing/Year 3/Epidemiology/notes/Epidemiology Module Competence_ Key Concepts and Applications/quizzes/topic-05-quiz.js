registerQuiz("topic-05-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-05-quiz",
  "metadata": {
    "title": "Outbreak Investigation",
    "description": "Steps to investigating epidemics and interpreting epi curves.",
    "topicId": "topic-05",
    "difficulty": "advanced",
    "estimatedTime": 20,
    "passingScore": 70,
    "createdAt": "2025-12-26T10:00:00Z"
  },
  "questions": [
    {
      "id": "q1",
      "type": "ordering",
      "question": "Place the first 5 steps of an outbreak investigation in order:",
      "points": 15,
      "items": [
        { "id": "i1", "text": "Prepare for field work", "correctPosition": 1 },
        { "id": "i2", "text": "Establish existence of outbreak", "correctPosition": 2 },
        { "id": "i3", "text": "Verify diagnosis", "correctPosition": 3 },
        { "id": "i4", "text": "Define and identify cases", "correctPosition": 4 },
        { "id": "i5", "text": "Perform descriptive epidemiology", "correctPosition": 5 }
      ],
      "explanation": "Preparation -> Confirmation -> Verification -> Case Definition -> Description (Time/Place/Person)."
    },
    {
      "id": "q2",
      "type": "multiple-choice",
      "question": "In the image below, what type of epidemic pattern does the curve likely represent?",
      "points": 10,
      "media": {
        "type": "image",
        "url": "../assets/images/image-20251226-f9e45516.jpeg",
        "alt": "Epidemic Curve Histogram"
      },
      "options": [
        { "id": "a", "text": "Propagated (Person-to-Person)", "isCorrect": false },
        { "id": "b", "text": "Common Source (Point Source)", "isCorrect": true },
        { "id": "c", "text": "Endemic Baseline", "isCorrect": false }
      ],
      "explanation": "A curve that rises rapidly to a peak and falls gradually typically indicates a Common Source (Point Source) outbreak."
    },
    {
      "id": "q3",
      "type": "multiple-select",
      "question": "A Case Definition should include criteria for: (Select all that apply)",
      "points": 10,
      "options": [
        { "id": "a", "text": "Clinical signs/symptoms", "isCorrect": true },
        { "id": "b", "text": "Time", "isCorrect": true },
        { "id": "c", "text": "Place", "isCorrect": true },
        { "id": "d", "text": "Person", "isCorrect": true }
      ],
      "explanation": "A standard case definition includes criteria for Person, Place, Time, and Clinical features."
    },
    {
      "id": "q4",
      "type": "fill-blank",
      "question": "A __1__ is an aggregation of cases in a given area over a period without regard to whether the number is more than expected.",
      "points": 10,
      "blanks": [
        { "id": "1", "acceptedAnswers": ["cluster"], "caseSensitive": false }
      ],
      "explanation": "A **cluster** is just a grouping; an **epidemic** implies the number exceeds expectation."
    }
  ]
});