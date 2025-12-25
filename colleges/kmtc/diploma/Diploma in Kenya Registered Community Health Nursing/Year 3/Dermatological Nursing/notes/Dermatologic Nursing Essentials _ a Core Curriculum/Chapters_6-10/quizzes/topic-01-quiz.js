registerQuiz("topic-01-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-01-quiz",
    "metadata": {
        "title": "Topic 01: Phototherapy Assessment",
        "description": "Evaluate your knowledge of UVL spectrums, dosing protocols, safety measures, and patient education.",
        "topicId": "topic-01-phototherapy",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 80,
        "createdAt": "2025-12-25T12:00:00Z",
        "tags": ["phototherapy", "uvb", "puva", "safety"]
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
            "question": "Which of the following light spectra is also referred to as the 'burning ray'?",
            "points": 10,
            "options": [
                { "id": "a", "text": "UVC", "isCorrect": false },
                { "id": "b", "text": "UVA", "isCorrect": false },
                { "id": "c", "text": "UVB", "isCorrect": true },
                { "id": "d", "text": "Infrared", "isCorrect": false }
            ],
            "explanation": "UVB is referred to as the sunburn ray. It is 1,000 times more capable of producing erythema than UVA."
        },
        {
            "id": "q2",
            "type": "fill-blank",
            "question": "The dosing unit for Ultraviolet B (UVB) is __1__, whereas Ultraviolet A (UVA) is dosed in __2__.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["millijoules", "mJ"], "caseSensitive": false },
                { "id": "2", "acceptedAnswers": ["joules", "J"], "caseSensitive": false }
            ],
            "explanation": "UVB is dosed in millijoules (mJ), and UVA is dosed in Joules (J). One Joule equals 1,000 millijoules."
        },
        {
            "id": "q3",
            "type": "true-false",
            "question": "Sunscreens can be used for shielding of unaffected areas during phototherapy.",
            "points": 5,
            "correctAnswer": true,
            "explanation": "Sunscreens, along with clothing and physical shields, are effective methods for protecting unaffected skin from UV exposure."
        },
        {
            "id": "q4",
            "type": "multiple-select",
            "question": "Which of the following are considered absolute contraindications for UVB phototherapy? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Pregnancy", "isCorrect": false },
                { "id": "b", "text": "Xeroderma pigmentosum", "isCorrect": true },
                { "id": "c", "text": "Albinism", "isCorrect": true },
                { "id": "d", "text": "Porphyria", "isCorrect": true },
                { "id": "e", "text": "Psoriasis", "isCorrect": false }
            ],
            "partialCredit": true,
            "explanation": "Xeroderma pigmentosum, Albinism, and Porphyria are absolute contraindications. Pregnancy is actually an indication for UVB (as opposed to PUVA) because no drugs are required."
        },
        {
            "id": "q5",
            "type": "matching",
            "question": "Match the phototherapy type with its specific wavelength range:",
            "points": 10,
            "pairs": [
                { "id": "p1", "left": "Broadband UVB", "right": "290 to 320 nm" },
                { "id": "p2", "left": "Narrowband UVB", "right": "311 to 313 nm" },
                { "id": "p3", "left": "UVA", "right": "320 to 400 nm" },
                { "id": "p4", "left": "UVA-1", "right": "340 to 400 nm" }
            ],
            "explanation": "Specific wavelengths determine the therapeutic effect and penetration depth of the light."
        },
        {
            "id": "q6",
            "type": "multiple-choice",
            "question": "When assessing a patient prior to administering PUVA, which of the following is NOT a necessary question?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Have you started any new medications?", "isCorrect": false },
                { "id": "b", "text": "Have you used artificial hair dye since the last treatment?", "isCorrect": true },
                { "id": "c", "text": "Is there any possibility you could be pregnant?", "isCorrect": false },
                { "id": "d", "text": "Did you develop erythema with the last dose?", "isCorrect": false }
            ],
            "explanation": "Artificial hair dye usage is not a contraindication or safety concern for PUVA therapy. Medication changes, pregnancy status, and erythema history are critical safety checks."
        },
        {
            "id": "q7",
            "type": "image-based",
            "question": "Based on the image below, identify the type of lamp typically indicated by RED lettering:",
            "points": 10,
            "imageUrl": "../assets/images/image-20251225-2713cf7f.jpeg",
            "imageAlt": "Phototherapy lamps with color codes",
            "options": [
                { "id": "a", "text": "UVA", "isCorrect": false },
                { "id": "b", "text": "Narrowband UVB", "isCorrect": false },
                { "id": "c", "text": "Broadband UVB", "isCorrect": true },
                { "id": "d", "text": "UVA-1", "isCorrect": false }
            ],
            "explanation": "Red lettering indicates Broadband UVB. Gold is Narrowband UVB, and Black is UVA."
        },
        {
            "id": "q8",
            "type": "true-false",
            "question": "Erythema lasting more than 24 hours after a narrowband UVB treatment is considered a normal, desirable response.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "Erythema lasting more than 24 hours is a concern. Ideal erythema (if any) should be mild (pale pink), painless, and resolve within 24 hours."
        },
        {
            "id": "q9",
            "type": "multiple-choice",
            "question": "Which statement regarding metering is FALSE?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Metering determines the power/energy output of the equipment.", "isCorrect": false },
                { "id": "b", "text": "There are strict FDA standards for metering devices.", "isCorrect": true },
                { "id": "c", "text": "Metering should be done consistently.", "isCorrect": false },
                { "id": "d", "text": "Cold lamps emit less energy than warm lamps.", "isCorrect": false }
            ],
            "explanation": "There are NO FDA standards for metering, which is why consistency in device usage and technique is critical."
        },
        {
            "id": "q10",
            "type": "ordering",
            "question": "Order the steps for a safe phototherapy session:",
            "points": 10,
            "items": [
                { "id": "1", "text": "Verify patient identity and prescription", "correctPosition": 1 },
                { "id": "2", "text": "Assess skin for erythema from previous treatment", "correctPosition": 2 },
                { "id": "3", "text": "Ensure proper shielding (goggles/genital shield) is in place", "correctPosition": 3 },
                { "id": "4", "text": "Set machine dose/time", "correctPosition": 4 },
                { "id": "5", "text": "Instruct patient to exit if problems arise", "correctPosition": 5 }
            ]
        }
    ]
});
