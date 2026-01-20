
registerQuiz("topic-01-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-01-quiz",
    "metadata": {
        "title": "ECG Fundamentals & Preparation",
        "description": "Test your knowledge on the definition of ECG, study objectives, and the GRIP procedure.",
        "topicId": "topic-01",
        "difficulty": "beginner",
        "estimatedTime": 5,
        "passingScore": 80,
        "createdAt": "2026-01-20T00:00:00Z"
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate",
        "allowRetry": true
    },
    "questions": [
        {
            "id": "q1-def",
            "type": "multiple-choice",
            "question": "What is the primary definition of an Electrocardiogram (ECG)?",
            "points": 1,
            "options": [
                { "id": "op1", "text": "A tracing of the heart's electrical activity", "isCorrect": true },
                { "id": "op2", "text": "A measurement of the heart's mechanical pumping force", "isCorrect": false },
                { "id": "op3", "text": "An ultrasound image of the heart's chambers", "isCorrect": false },
                { "id": "op4", "text": "A recording of blood pressure variations", "isCorrect": false }
            ],
            "explanation": "An ECG is defined as a tracing of the heart's electrical activity."
        },
        {
            "id": "q2-grip",
            "type": "multiple-select",
            "question": "In the 'GRIP' acronym for patient preparation, which of the following are included? (Select all that apply)",
            "points": 2,
            "options": [
                { "id": "grip1", "text": "Greet", "isCorrect": true },
                { "id": "grip2", "text": "Rapport", "isCorrect": true },
                { "id": "grip3", "text": "Introduce", "isCorrect": true },
                { "id": "grip4", "text": "Resuscitate", "isCorrect": false },
                { "id": "grip5", "text": "Privacy", "isCorrect": true }
            ],
            "explanation": "GRIP stands for Greet, Rapport, Introduce, Identify, Privacy, Explain procedure, Permission."
        },
        {
            "id": "q3-settings",
            "type": "fill-blank",
            "question": "When setting up the ECG machine, you must calibrate it to __b1__ mm/mV and set the rate at __b2__ mm/s.",
            "points": 2,
            "blanks": [
                {
                    "id": "b1",
                    "acceptedAnswers": ["10"],
                    "caseSensitive": false
                },
                {
                    "id": "b2",
                    "acceptedAnswers": ["25"],
                    "caseSensitive": false
                }
            ],
            "explanation": "Standard calibration is 10mm/mV and the standard paper speed is 25mm/s."
        },
        {
            "id": "q4-label",
            "type": "multiple-select",
            "question": "Which of the following details must be labeled on the ECG tracing? (Select all that apply)",
            "points": 1,
            "options": [
                { "id": "lbl1", "text": "Patient Name", "isCorrect": true },
                { "id": "lbl2", "text": "Date of Birth (DoB)", "isCorrect": true },
                { "id": "lbl3", "text": "Hospital Number", "isCorrect": true },
                { "id": "lbl4", "text": "Date and Time", "isCorrect": true },
                { "id": "lbl5", "text": "Next of Kin", "isCorrect": false }
            ],
            "explanation": "You must label the tracing with: Name, DoB, hospital number, date and time, and reason for recording."
        },
        {
            "id": "q5-ordering",
            "type": "ordering",
            "question": "Arrange the steps of the ECG procedure in the correct logical order.",
            "points": 2,
            "items": [
                { "id": "s1", "text": "Clean electrode sites (shave if needed)", "correctPosition": 1 },
                { "id": "s2", "text": "Apply electrodes and attach wires", "correctPosition": 2 },
                { "id": "s3", "text": "Turn on machine and check calibration", "correctPosition": 3 },
                { "id": "s4", "text": "Record and print", "correctPosition": 4 },
                { "id": "s5", "text": "Disconnect if adequate and remove electrodes", "correctPosition": 5 }
            ],
            "explanation": "The site must be prepared before applying electrodes. The machine is set up after attachment, followed by recording, and finally disconnection."
        }
    ]
});