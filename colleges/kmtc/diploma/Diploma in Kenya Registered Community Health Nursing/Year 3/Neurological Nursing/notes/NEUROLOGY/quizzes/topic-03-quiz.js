registerQuiz("topic-03-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-03-quiz",
    "metadata": {
        "title": "Acute Neurological Conditions Quiz",
        "topicId": "topic-03",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2025-12-28T12:00:00Z"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "What is the FIRST priority of treatment for a patient with an altered level of consciousness?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Establish IV access", "isCorrect": false },
                { "id": "b", "text": "Obtain and maintain a patent airway", "isCorrect": true },
                { "id": "c", "text": "Assess pupillary response", "isCorrect": false },
                { "id": "d", "text": "Administer naloxone", "isCorrect": false }
            ],
            "explanation": "Airway patency is always the first priority (ABC - Airway, Breathing, Circulation)."
        },
        {
            "id": "q2",
            "type": "fill-blank",
            "question": "The three components of Cushing's Triad are hypertension (widening pulse pressure), __1__, and irregular respirations.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["bradycardia", "decreased pulse", "slow pulse"], "caseSensitive": false }
            ],
            "explanation": "Cushing's Triad: Hypertension, Bradycardia, and Irregular Respirations. It indicates increased ICP."
        },
        {
            "id": "q3",
            "type": "multiple-select",
            "question": "Which interventions are appropriate for reducing increased Intracranial Pressure (ICP)? (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Administering Mannitol (osmotic diuretic)", "isCorrect": true },
                { "id": "b", "text": "Elevating the head of the bed (30-45 degrees)", "isCorrect": true },
                { "id": "c", "text": "Encouraging vigorous coughing", "isCorrect": false },
                { "id": "d", "text": "Administering Corticosteroids", "isCorrect": true },
                { "id": "e", "text": "Restricting fluids", "isCorrect": true }
            ],
            "partialCredit": true,
            "explanation": "Coughing increases intrathoracic and intracranial pressure and should be avoided."
        },
        {
            "id": "q4",
            "type": "multiple-choice",
            "question": "According to the Monro-Kellie hypothesis, the cranial vault contains which three components?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Brain tissue, Blood, CSF", "isCorrect": true },
                { "id": "b", "text": "Brain tissue, Meninges, Skull", "isCorrect": false },
                { "id": "c", "text": "Neurons, Glia, CSF", "isCorrect": false },
                { "id": "d", "text": "Blood, Water, Electrolytes", "isCorrect": false }
            ],
            "explanation": "The hypothesis states the skull contains brain tissue (80%), blood (10%), and CSF (10%)."
        },
        {
            "id": "q5",
            "type": "true-false",
            "question": "A patient with a ventriculostomy catheter for ICP monitoring should be positioned on the side where the catheter is inserted.",
            "points": 10,
            "correctAnswer": false,
            "explanation": "Pressure on the catheter insertion site should be avoided. The patient should usually be positioned to facilitate drainage and avoid kinking."
        }
    ]
});