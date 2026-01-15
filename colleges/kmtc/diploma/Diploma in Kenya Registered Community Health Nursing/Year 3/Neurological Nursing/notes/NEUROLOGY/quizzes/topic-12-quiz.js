registerQuiz("topic-12-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-12-quiz",
    "metadata": {
        "title": "Seizure Disorders Quiz",
        "topicId": "topic-12",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2025-12-28T12:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "ordering",
            "question": "Order the stages of a Grand Mal seizure:",
            "points": 15,
            "items": [
                { "id": "i1", "text": "Aura", "correctPosition": 1 },
                { "id": "i2", "text": "Tonic Phase", "correctPosition": 2 },
                { "id": "i3", "text": "Clonic Phase", "correctPosition": 3 },
                { "id": "i4", "text": "Post-ictal Phase", "correctPosition": 4 }
            ]
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "What is the first-line medication administered IV to stop Status Epilepticus?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Phenytoin", "isCorrect": false },
                { "id": "b", "text": "Diazepam or Lorazepam", "isCorrect": true },
                { "id": "c", "text": "Carbamazepine", "isCorrect": false },
                { "id": "d", "text": "Valproic Acid", "isCorrect": false }
            ],
            "explanation": "Benzodiazepines are fast-acting and used to halt the seizure activity immediately."
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "What is the most appropriate nursing action during a patient's active seizure?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Restrain the patient's limbs", "isCorrect": false },
                { "id": "b", "text": "Insert a tongue depressor", "isCorrect": false },
                { "id": "c", "text": "Protect the head and turn to the side", "isCorrect": true },
                { "id": "d", "text": "Start CPR immediately", "isCorrect": false }
            ],
            "explanation": "Safety and airway protection are priority. Never restrain or put objects in the mouth."
        },
        {
            "id": "q4",
            "type": "fill-blank",
            "question": "A sensation that precedes a seizure, serving as a warning, is called an __1__.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["aura"], "caseSensitive": false }
            ],
            "explanation": "An aura can be visual, auditory, or olfactory and warns of an impending seizure."
        }
    ]
});