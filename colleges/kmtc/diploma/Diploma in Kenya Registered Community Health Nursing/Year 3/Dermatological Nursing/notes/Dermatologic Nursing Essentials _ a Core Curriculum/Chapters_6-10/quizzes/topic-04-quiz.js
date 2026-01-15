registerQuiz("topic-04-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-04-quiz",
    "metadata": {
        "title": "Topic 04: Dermatitis & Eczemas",
        "description": "Test your knowledge of Atopic, Contact, Seborrheic, and other forms of dermatitis.",
        "topicId": "topic-04-dermatitis",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 75,
        "createdAt": "2025-12-25T12:00:00Z",
        "tags": ["dermatitis", "eczema", "treatment"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate"
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-select",
            "question": "Which conditions make up the 'Atopic Triad'? (Select 3)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Atopic Dermatitis", "isCorrect": true },
                { "id": "b", "text": "Asthma", "isCorrect": true },
                { "id": "c", "text": "Food Allergies", "isCorrect": false },
                { "id": "d", "text": "Allergic Rhinitis (Hay fever)", "isCorrect": true },
                { "id": "e", "text": "Contact Dermatitis", "isCorrect": false }
            ],
            "partialCredit": true,
            "explanation": "The Atopic Triad consists of Atopic Dermatitis, Asthma, and Allergic Rhinitis."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "In infants, Atopic Dermatitis typically affects which areas?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Flexor surfaces (antecubital/popliteal)", "isCorrect": false },
                { "id": "b", "text": "Diaper area", "isCorrect": false },
                { "id": "c", "text": "Face, scalp, and extensor surfaces", "isCorrect": true },
                { "id": "d", "text": "Palms and soles only", "isCorrect": false }
            ],
            "explanation": "Infant AD typically involves the face, scalp, and extensors. Flexural involvement is more common in older children and adults. The diaper area is usually spared."
        },
        {
            "id": "q3",
            "type": "ordering",
            "question": "Place the steps of the 'Soak and Seal' method in the correct order:",
            "points": 10,
            "items": [
                { "id": "1", "text": "Bathe in warm water for 15-20 minutes", "correctPosition": 1 },
                { "id": "2", "text": "Pat skin gently dry (leave damp)", "correctPosition": 2 },
                { "id": "3", "text": "Apply prescription medications to affected areas", "correctPosition": 3 },
                { "id": "4", "text": "Apply moisturizer to unaffected areas", "correctPosition": 4 }
            ],
            "explanation": "Medications and moisturizers must be applied immediately (within 3 minutes) to damp skin to seal in hydration."
        },
        {
            "id": "q4",
            "type": "multiple-choice",
            "question": "Which type of Contact Dermatitis accounts for approximately 80% of cases?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Allergic Contact Dermatitis (ACD)", "isCorrect": false },
                { "id": "b", "text": "Irritant Contact Dermatitis (ICD)", "isCorrect": true }
            ],
            "explanation": "ICD is much more common than ACD. It is caused by direct damage to the skin barrier (e.g., from water, soap, chemicals)."
        },
        {
            "id": "q5",
            "type": "fill-blank",
            "question": "The gold standard diagnostic test for Allergic Contact Dermatitis is __1__.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["patch testing", "patch test"], "caseSensitive": false }
            ],
            "explanation": "Patch testing reproduces the allergic reaction in a controlled manner to identify specific allergens."
        },
        {
            "id": "q6",
            "type": "image-based",
            "question": "Identify the type of dermatitis shown in the image below, characterized by coin-shaped lesions:",
            "points": 10,
            "imageUrl": "../assets/images/image-20251225-100e12ca.jpeg",
            "imageAlt": "Coin shaped scaly lesions",
            "options": [
                { "id": "a", "text": "Seborrheic Dermatitis", "isCorrect": false },
                { "id": "b", "text": "Nummular Dermatitis", "isCorrect": true },
                { "id": "c", "text": "Contact Dermatitis", "isCorrect": false },
                { "id": "d", "text": "Dyshidrotic Eczema", "isCorrect": false }
            ],
            "explanation": "Nummular (meaning 'coin-like') dermatitis presents with distinct, round, scaly plaques."
        },
        {
            "id": "q7",
            "type": "multiple-choice",
            "question": "Which organism is linked to the pathogenesis of Seborrheic Dermatitis?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Staphylococcus aureus", "isCorrect": false },
                { "id": "b", "text": "Streptococcus pyogenes", "isCorrect": false },
                { "id": "c", "text": "Malassezia furfur (Yeast)", "isCorrect": true },
                { "id": "d", "text": "Herpes Simplex", "isCorrect": false }
            ],
            "explanation": "Seborrheic dermatitis is associated with an abnormal immune response to Malassezia yeast."
        },
        {
            "id": "q8",
            "type": "true-false",
            "question": "Wet Wrap Therapy should be used as a long-term daily maintenance treatment for Atopic Dermatitis.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "Wet Wrap Therapy is for acute flares to rapidly reduce inflammation and should NOT be used for maintenance due to risk of maceration and folliculitis."
        },
        {
            "id": "q9",
            "type": "matching",
            "question": "Match the ABCDE of Diaper Dermatitis management:",
            "points": 10,
            "pairs": [
                { "id": "p1", "left": "A", "right": "Air (diaper free time)" },
                { "id": "p2", "left": "B", "right": "Barrier (paste/ointment)" },
                { "id": "p3", "left": "C", "right": "Clean (gentle)" },
                { "id": "p4", "left": "D", "right": "Disposable diapers" }
            ],
            "explanation": "ABCDE: Air, Barrier, Clean, Disposable, Educate."
        },
        {
            "id": "q10",
            "type": "multiple-choice",
            "question": "Thickening of the skin with exaggerated skin markings caused by chronic scratching is called:",
            "points": 10,
            "options": [
                { "id": "a", "text": "Excoriation", "isCorrect": false },
                { "id": "b", "text": "Lichenification", "isCorrect": true },
                { "id": "c", "text": "Maceration", "isCorrect": false },
                { "id": "d", "text": "Erosion", "isCorrect": false }
            ],
            "explanation": "Lichenification is the leathery thickening of the skin that results from the chronic itch-scratch cycle."
        }
    ]
});
