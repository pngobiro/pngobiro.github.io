registerQuiz("topic-14-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-14-quiz",
    "metadata": {
        "title": "Seizure Disorders",
        "topicId": "topic-14",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2025-12-25T00:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "ordering",
            "question": "Place the stages of a Grand Mal seizure in order:",
            "points": 20,
            "items": [
                { "id": "i1", "text": "Prodrome", "correctPosition": 1 },
                { "id": "i2", "text": "Aura", "correctPosition": 2 },
                { "id": "i3", "text": "Tonic Phase", "correctPosition": 3 },
                { "id": "i4", "text": "Clonic Phase", "correctPosition": 4 },
                { "id": "i5", "text": "Post-ictal Phase", "correctPosition": 5 }
            ]
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "Which medication is the first-line treatment to stop seizures in Status Epilepticus?",
            "points": 15,
            "options": [
                { "id": "a", "text": "Phenytoin", "isCorrect": false },
                { "id": "b", "text": "IV Diazepam or Lorazepam", "isCorrect": true },
                { "id": "c", "text": "Carbamazepine", "isCorrect": false },
                { "id": "d", "text": "Oral Valium", "isCorrect": false }
            ],
            "explanation": "IV benzodiazepines (Diazepam/Lorazepam) are fast-acting and used to halt status epilepticus."
        },
        {
            "id": "q3",
            "type": "true-false",
            "question": "You should place a padded tongue blade in the patient's mouth during a seizure to prevent tongue biting.",
            "points": 10,
            "correctAnswer": false,
            "explanation": "NEVER pry open jaws or insert objects during a seizure; it can cause injury and obstruction."
        }
    ]
});