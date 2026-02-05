/**
 * Comprehensive Exam Data File (JSONP format)
 * 
 * Usage in HTML:
 *   <div class="quiz-container" 
 *        data-quiz-id="comprehensive-exam"
 *        data-quiz-js="quizzes/comprehensive-exam.js">
 */

registerQuiz("comprehensive-exam", {
  "schemaVersion": "1.0",
  "quizId": "comprehensive-exam",
  "metadata": {
    "title": "Comprehensive Exam: Casting & Splinting Techniques",
    "description": "A comprehensive examination covering the principles, materials, application, and care of casts and splints.",
    "topicId": "comprehensive",
    "difficulty": "intermediate",
    "estimatedTime": 20,
    "passingScore": 80,
    "createdAt": "2026-02-04T00:00:00Z"
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
      "question": "What is the primary function of a cast?",
      "points": 5,
      "options": [
        { "id": "a", "text": "To massage the injured area", "isCorrect": false },
        { "id": "b", "text": "To rigidly protect an injured bone or joint and hold it in alignment", "isCorrect": true },
        { "id": "c", "text": "To increase blood flow to the extremities", "isCorrect": false },
        { "id": "d", "text": "To provide a waterproof covering for swimming", "isCorrect": false }
      ],
      "explanation": "The function of a cast is to rigidly protect an injured bone or joint, holding the fracture in proper alignment to prevent movement while it heals."
    },
    {
      "id": "q2",
      "type": "multiple-choice",
      "question": "Which naturally occurring mineral is Plaster of Paris derived from?",
      "points": 5,
      "options": [
        { "id": "a", "text": "Limestone", "isCorrect": false },
        { "id": "b", "text": "Gypsum", "isCorrect": true },
        { "id": "c", "text": "Quartz", "isCorrect": false },
        { "id": "d", "text": "Granite", "isCorrect": false }
      ],
      "explanation": "Plaster of Paris is derived from the naturally occurring mineral gypsum (calcium sulfate dihydrate)."
    },
    {
      "id": "q3",
      "type": "true-false",
      "question": "The reaction when water is added to Plaster of Paris is endothermic (absorbs heat).",
      "points": 5,
      "correctAnswer": false,
      "explanation": "The reaction is exothermic, meaning it releases heat. This explains the warmth associated with the cast setting."
    },
    {
      "id": "q4",
      "type": "multiple-select",
      "question": "Which of the following factors decrease the setting time of Plaster of Paris? (Select all that apply)",
      "points": 10,
      "options": [
        { "id": "a", "text": "Cold water", "isCorrect": false },
        { "id": "b", "text": "Hot water", "isCorrect": true },
        { "id": "c", "text": "Salt", "isCorrect": true },
        { "id": "d", "text": "Sugar", "isCorrect": false }
      ],
      "explanation": "Hot water, salt, borax, and resin are factors that decrease the setting time (make it set faster). Cold water and sugar increase the setting time (slow it down)."
    },
    {
      "id": "q5",
      "type": "multiple-choice",
      "question": "What is a 'Spica' cast?",
      "points": 5,
      "options": [
        { "id": "a", "text": "A cast that covers only the forearm", "isCorrect": false },
        { "id": "b", "text": "A cast that incorporates only the foot", "isCorrect": false },
        { "id": "c", "text": "A cast that incorporates part or the entire trunk of the body and part or all of one or more extremities", "isCorrect": true },
        { "id": "d", "text": "A cast used only for cervical injuries", "isCorrect": false }
      ],
      "explanation": "A spica cast refers to a cast that incorporates part or the entire trunk of the body and a part or all of one or more extremities."
    },
    {
      "id": "q6",
      "type": "multiple-choice",
      "question": "Which of the following is a disadvantage of Plaster of Paris casts?",
      "points": 5,
      "options": [
        { "id": "a", "text": "They are expensive", "isCorrect": false },
        { "id": "b", "text": "They are not waterproof", "isCorrect": true },
        { "id": "c", "text": "They are difficult to mold", "isCorrect": false },
        { "id": "d", "text": "They have a high allergic response", "isCorrect": false }
      ],
      "explanation": "Disadvantages of Plaster of Paris include not being waterproof, being heavy, long drying times, and potential for disintegration."
    },
    {
      "id": "q7",
      "type": "multiple-choice",
      "question": "What is the general rule for immobilization regarding joints?",
      "points": 5,
      "options": [
        { "id": "a", "text": "Immobilize only the fracture site", "isCorrect": false },
        { "id": "b", "text": "Immobilize one joint above and one joint below the fracture", "isCorrect": true },
        { "id": "c", "text": "Immobilize only the joint above the fracture", "isCorrect": false },
        { "id": "d", "text": "Immobilize the entire limb regardless of fracture location", "isCorrect": false }
      ],
      "explanation": "The rule is to immobilize one joint above and one joint below the fractured bone to ensure stability."
    },
    {
      "id": "q8",
      "type": "true-false",
      "question": "When applying a cast, you should mold it with your fingers to ensure a tight fit.",
      "points": 5,
      "correctAnswer": false,
      "explanation": "You should mold the cast with your palms, not your fingers, to avoid causing indentations that could lead to pressure sores."
    },
    {
      "id": "q9",
      "type": "multiple-choice",
      "question": "How long does it typically take for a plaster cast to completely harden and dry?",
      "points": 5,
      "options": [
        { "id": "a", "text": "10 to 15 minutes", "isCorrect": false },
        { "id": "b", "text": "1 to 2 hours", "isCorrect": false },
        { "id": "c", "text": "24 to 72 hours", "isCorrect": true },
        { "id": "d", "text": "1 week", "isCorrect": false }
      ],
      "explanation": "While it feels hard in 10-15 minutes, the drying time (change from crystalline to anhydrous form) takes 24-72 hours."
    },
    {
      "id": "q10",
      "type": "multiple-choice",
      "question": "What is the purpose of 'stockinette' in cast application?",
      "points": 5,
      "options": [
        { "id": "a", "text": "To make the cast waterproof", "isCorrect": false },
        { "id": "b", "text": "To protect the skin from the casting material", "isCorrect": true },
        { "id": "c", "text": "To harden the plaster faster", "isCorrect": false },
        { "id": "d", "text": "To add color to the cast", "isCorrect": false }
      ],
      "explanation": "A stockinette is placed on the skin to protect it from the rough casting material."
    },
    {
      "id": "q11",
      "type": "multiple-select",
      "question": "What are indications for the use of Plaster of Paris? (Select all that apply)",
      "points": 10,
      "options": [
        { "id": "a", "text": "Immobilization of fractures", "isCorrect": true },
        { "id": "b", "text": "Correction of deformities (e.g., club foot)", "isCorrect": true },
        { "id": "c", "text": "Immobilization of diseased bones/joints", "isCorrect": true },
        { "id": "d", "text": "Primary treatment for deep vein thrombosis", "isCorrect": false }
      ],
      "explanation": "Indications include immobilization of fractures and diseased bones, correction of deformities, and emergency splintage."
    },
    {
      "id": "q12",
      "type": "multiple-choice",
      "question": "Which material slows down the setting time of Plaster of Paris?",
      "points": 5,
      "options": [
        { "id": "a", "text": "Salt", "isCorrect": false },
        { "id": "b", "text": "Borax", "isCorrect": false },
        { "id": "c", "text": "Sugar", "isCorrect": true },
        { "id": "d", "text": "Resin", "isCorrect": false }
      ],
      "explanation": "Sugar and cold water are factors that increase (slow down) the setting time."
    },
    {
      "id": "q13",
      "type": "true-false",
      "question": "Synthetic casts are generally lighter and more water-resistant than Plaster of Paris casts.",
      "points": 5,
      "correctAnswer": true,
      "explanation": "Synthetic materials (like fiberglass) are lighter, stronger, and more water-resistant than traditional plaster."
    },
    {
      "id": "q14",
      "type": "multiple-choice",
      "question": "What happens if the water used for dipping plaster is too hot?",
      "points": 5,
      "options": [
        { "id": "a", "text": "The cast will never set", "isCorrect": false },
        { "id": "b", "text": "It decreases the setting time significantly and risks burning the patient", "isCorrect": true },
        { "id": "c", "text": "It makes the cast stronger", "isCorrect": false },
        { "id": "d", "text": "It turns the plaster blue", "isCorrect": false }
      ],
      "explanation": "Hot water accelerates the reaction and can cause the cast to become dangerously hot, potentially burning the patient."
    },
    {
      "id": "q15",
      "type": "multiple-choice",
      "question": "What is 'wedging' used for?",
      "points": 5,
      "options": [
        { "id": "a", "text": "Removing the cast", "isCorrect": false },
        { "id": "b", "text": "Adjustment of alignment of a fracture or correction of deformities", "isCorrect": true },
        { "id": "c", "text": "Padding the cast", "isCorrect": false },
        { "id": "d", "text": "Polishing the cast surface", "isCorrect": false }
      ],
      "explanation": "Wedging is used to adjust the alignment of a fracture or in the correction of deformities like club foot."
    }
  ]
});
