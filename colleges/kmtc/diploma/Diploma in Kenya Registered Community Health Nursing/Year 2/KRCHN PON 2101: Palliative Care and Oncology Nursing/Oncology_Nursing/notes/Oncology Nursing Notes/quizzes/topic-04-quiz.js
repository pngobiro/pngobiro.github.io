registerQuiz("topic-04-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-04-quiz",
  "metadata": {
    "title": "Treatment Modalities Quiz",
    "description": "Evaluate your knowledge on cancer treatments including surgery, radiation safety, and bone marrow transplantation.",
    "topicId": "topic-04",
    "difficulty": "advanced",
    "estimatedTime": 15,
    "passingScore": 70,
    "createdAt": "2025-12-27T00:00:00Z",
    "tags": ["treatment", "radiation", "safety"]
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
      "question": "What are the three principles of radiation protection? (Select three)",
      "points": 15,
      "options": [
        { "id": "a", "text": "Time (Minimize exposure)", "isCorrect": true },
        { "id": "b", "text": "Distance (Maximize distance)", "isCorrect": true },
        { "id": "c", "text": "Shielding (Use lead)", "isCorrect": true },
        { "id": "d", "text": "Isolation (Sterile room)", "isCorrect": false },
        { "id": "e", "text": "Hygiene (Hand washing)", "isCorrect": false }
      ],
      "explanation": "Time, Distance, and Shielding are the cardinal rules for radiation safety."
    },
    {
      "id": "q2",
      "type": "multiple-choice",
      "question": "Which type of surgery is performed to relieve distress in signs and symptoms or retard metastasis?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Curative surgery", "isCorrect": false },
        { "id": "b", "text": "Preventive surgery", "isCorrect": false },
        { "id": "c", "text": "Palliative surgery", "isCorrect": true },
        { "id": "d", "text": "Reconstructive surgery", "isCorrect": false }
      ],
      "explanation": "Palliative surgery is aimed at symptom relief and improving quality of life, not cure."
    },
    {
      "id": "q3",
      "type": "true-false",
      "question": "A client receiving external radiation therapy (teletherapy) is radioactive and poses a risk to family members.",
      "points": 5,
      "correctAnswer": false,
      "explanation": "False. In external radiation, the source is outside the body. The patient does not become radioactive."
    },
    {
      "id": "q4",
      "type": "fill-blank",
      "question": "__b1__ bone marrow transplant involves infusing the client with their own bone marrow harvested during remission.",
      "points": 10,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["autologous"], "caseSensitive": false }
      ],
      "explanation": "Autologous means 'self'. Allogenic means 'other' (donor)."
    },
    {
      "id": "q5",
      "type": "multiple-choice",
      "question": "What is the correct action if a radiation implant becomes dislodged?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Pick it up with gloved hands and dispose of it in the trash.", "isCorrect": false },
        { "id": "b", "text": "Use long-handled forceps to place it in a lead container.", "isCorrect": true },
        { "id": "c", "text": "Kick it under the bed to shield it.", "isCorrect": false },
        { "id": "d", "text": "Leave the room and lock the door immediately.", "isCorrect": false }
      ],
      "explanation": "Never touch the source. Use long-handled forceps to maximize distance and place in a shielded lead container."
    },
    {
      "id": "q6",
      "type": "matching",
      "question": "Match the biological response modifier to its function:",
      "points": 15,
      "pairs": [
        { "id": "p1", "left": "Monoclonal Antibodies", "right": "Recovered from animals to destroy specific tumors" },
        { "id": "p2", "left": "Interferons", "right": "Protect cells from viral infection/replication" },
        { "id": "p3", "left": "Interleukin-2", "right": "Increases immune response to destroy abnormal cells" },
        { "id": "p4", "left": "Hematopoietic Growth Factors", "right": "Balance suppression of granulocytes/erythrocytes" }
      ],
      "explanation": "Monoclonal antibodies target tumors. Interferons are antiviral/antitumor. IL-2 boosts immune response. Growth factors (like Erythropoietin) help recovery of blood cells."
    },
    {
      "id": "q7",
      "type": "short-answer",
      "question": "Describe two important skin care instructions for a patient receiving external radiation therapy.",
      "points": 15,
      "keywords": ["wash", "water", "plain", "pat", "dry", "markings", "marks", "lotion", "powder", "sun"],
      "minKeywords": 2,
      "modelAnswer": "Wash with plain water and pat dry (no soap/scrubbing). Do not remove treatment markings. Avoid lotions/powders. Protect from sun.",
      "maxLength": 300
    },
    {
      "id": "q8",
      "type": "ordering",
      "question": "Order the steps of the Bone Marrow Transplant process:",
      "points": 20,
      "items": [
        { "id": "i1", "text": "Harvesting (bone marrow collection)", "correctPosition": 1 },
        { "id": "i2", "text": "Conditioning (immunosuppressive therapy)", "correctPosition": 2 },
        { "id": "i3", "text": "Transfusion (infusion of marrow)", "correctPosition": 3 },
        { "id": "i4", "text": "Engraftment (new marrow begins producing cells)", "correctPosition": 4 }
      ],
      "explanation": "Marrow is harvested, then the patient is conditioned (immune system wiped out), followed by transfusion, and finally engraftment occurs."
    }
  ]
});