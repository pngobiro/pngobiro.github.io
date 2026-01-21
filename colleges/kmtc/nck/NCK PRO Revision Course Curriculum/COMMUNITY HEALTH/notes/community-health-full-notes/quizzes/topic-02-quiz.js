// topic-02-quiz.js
registerQuiz("topic-02-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-02-quiz",
  "metadata": {
    "title": "Communicable Diseases Quiz",
    "description": "Assess your understanding of disease transmission, epidemiology, and outbreak control.",
    "topicId": "topic-02",
    "difficulty": "intermediate",
    "estimatedTime": 15,
    "passingScore": 70,
    "createdAt": "2026-01-21T00:00:00Z",
    "updatedAt": "2026-01-21T00:00:00Z",
    "tags": ["epidemiology", "diseases", "transmission"]
  },
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "question": "Which of the following is NOT a component of the Epidemiologic Triangle?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "Agent", "isCorrect": false },
        { "id": "opt2", "text": "Host", "isCorrect": false },
        { "id": "opt3", "text": "Environment", "isCorrect": false },
        { "id": "opt4", "text": "Treatment", "isCorrect": true }
      ],
      "explanation": "The Epidemiologic Triangle consists of Agent, Host, and Environment. Treatment is an intervention, not a component of the causation model."
    },
    {
      "id": "q2",
      "type": "matching",
      "question": "Match the mode of transmission with the correct description.",
      "points": 1,
      "pairs": [
        { "id": "p1", "left": "Direct Contact", "right": "Skin-to-skin contact, kissing" },
        { "id": "p2", "left": "Airborne", "right": "Suspended air particles" },
        { "id": "p3", "left": "Vector-borne", "right": "Arthropods like mosquitoes or fleas" },
        { "id": "p4", "left": "Vehicle-borne", "right": "Contaminated food, water, or bedding" }
      ],
      "explanation": "Direct is immediate; Airborne/Vector/Vehicle are types of indirect transmission."
    },
    {
      "id": "q3",
      "type": "ordering",
      "question": "Place the steps of Outbreak Investigation in the correct order.",
      "points": 1,
      "items": [
        { "id": "s1", "text": "Prepare for fieldwork", "correctPosition": 1 },
        { "id": "s2", "text": "Establish existence of outbreak", "correctPosition": 2 },
        { "id": "s3", "text": "Verify diagnosis", "correctPosition": 3 },
        { "id": "s4", "text": "Define and identify cases", "correctPosition": 4 },
        { "id": "s5", "text": "Perform descriptive epidemiology", "correctPosition": 5 },
        { "id": "s6", "text": "Implement control measures", "correctPosition": 6 }
      ],
      "explanation": "Preparation -> Confirmation -> Verification -> Case Definition -> Epidemiology -> Control."
    },
    {
      "id": "q4",
      "type": "fill-blank",
      "question": "A __b1__ is a person without apparent disease who is capable of transmitting the agent to others.",
      "points": 1,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["carrier"], "caseSensitive": false }
      ],
      "explanation": "A carrier harbors the infectious agent without showing clinical symptoms."
    },
    {
      "id": "q5",
      "type": "multiple-choice",
      "question": "What is the difference between 'Control' and 'Eradication'?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "Control reduces incidence to an acceptable level; Eradication reduces worldwide incidence to zero.", "isCorrect": true },
        { "id": "opt2", "text": "Control is permanent; Eradication requires continued measures.", "isCorrect": false },
        { "id": "opt3", "text": "Control eliminates the agent; Eradication manages symptoms.", "isCorrect": false },
        { "id": "opt4", "text": "There is no difference.", "isCorrect": false }
      ],
      "explanation": "Control manages disease levels locally; Eradication removes it globally (zero incidence)."
    },
    {
      "id": "q6",
      "type": "true-false",
      "question": "All microbes are harmful germs that cause disease.",
      "correctAnswer": false,
      "points": 1,
      "explanation": "Most microbes are harmless or helpful (e.g., for digestion, decomposition); only germs/pathogens cause disease."
    },
    {
      "id": "q7",
      "type": "matching",
      "question": "Match the germ type with its characteristic.",
      "points": 1,
      "pairs": [
        { "id": "p1", "left": "Virus", "right": "Depends on a host to survive and reproduce" },
        { "id": "p2", "left": "Bacteria", "right": "Can live in extreme environments; most are harmless" },
        { "id": "p3", "left": "Fungi", "right": "Plant-like organisms; thrive in damp environments" },
        { "id": "p4", "left": "Protozoa", "right": "One-celled organisms; often spread through water" }
      ],
      "explanation": "Viruses need hosts; Bacteria are ubiquitous; Fungi are plant-like; Protozoa are single-celled."
    }
  ]
});