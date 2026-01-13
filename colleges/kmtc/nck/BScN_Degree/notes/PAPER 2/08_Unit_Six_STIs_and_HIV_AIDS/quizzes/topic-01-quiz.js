registerQuiz("topic-01-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-01-quiz",
    "metadata": {
        "title": "Key Characteristics of Common STIs",
        "description": "Assess your knowledge of STI syndromes, diagnosis, and the syndromic management approach.",
        "topicId": "topic-01-characteristics-stis",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2026-01-13T10:00:00Z",
        "tags": ["stis", "syndromic-management", "diagnosis"]
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
            "question": "Which of the following defines a 'Syndrome' in the context of STI management?",
            "points": 10,
            "options": [
                { "id": "a", "text": "A specific causative organism isolated in the laboratory", "isCorrect": false },
                { "id": "b", "text": "A group of signs and symptoms", "isCorrect": true },
                { "id": "c", "text": "A method of contact tracing", "isCorrect": false },
                { "id": "d", "text": "A type of antibiotic resistance", "isCorrect": false }
            ],
            "explanation": "A syndrome simply means a group of signs and symptoms. The syndromic approach diagnoses STIs based on these rather than specific organisms."
        },
        {
            "id": "q2",
            "type": "multiple-select",
            "question": "Select the 'Four C's' of syndromic management that must be emphasised to patients: (Select 4)",
            "points": 20,
            "options": [
                { "id": "a", "text": "Counselling", "isCorrect": true },
                { "id": "b", "text": "Compliance", "isCorrect": true },
                { "id": "c", "text": "Condoms", "isCorrect": true },
                { "id": "d", "text": "Contact Tracing", "isCorrect": true },
                { "id": "e", "text": "Confidentiality", "isCorrect": false },
                { "id": "f", "text": "Clinical Care", "isCorrect": false }
            ],
            "explanation": "The four C's are Counselling, Compliance (taking meds), Condoms (prevention), and Contact Tracing (treating partners)."
        },
        {
            "id": "q3",
            "type": "matching",
            "question": "Match the clinical condition with its characteristics or causative agents:",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Vaginitis", "right": "Inflammation of vaginal wall (e.g., Candida, Trichomonas)" },
                { "id": "p2", "left": "Cervicitis", "right": "Infection of the cervix (e.g., Gonorrhea, Chlamydia)" },
                { "id": "p3", "left": "Chancroid", "right": "Painful dirty looking ulcer, Haemophilus Ducreyi" },
                { "id": "p4", "left": "Syphilis", "right": "Painless indurated chancre, Treponema pallidum" }
            ],
            "explanation": "Vaginitis affects the wall (fungal/protozoal), Cervicitis affects the cervix (bacterial). Chancroid is painful; Syphilis is typically painless in the primary stage."
        },
        {
            "id": "q4",
            "type": "fill-blank",
            "question": "The causative organism for Syphilis is a spirochete called __1__.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["Treponema pallidum", "treponema pallidum"], "caseSensitive": false }
            ],
            "explanation": "Syphilis is caused by the spirochete Treponema pallidum."
        },
        {
            "id": "q5",
            "type": "image-based",
            "question": "Based on the NASCOP flowchart logic, if a patient has vaginal discharge but NO lower abdominal pain/tenderness, what is the immediate treatment action?",
            "points": 10,
            "media": {
                "type": "image",
                "url": "../assets/images/image-20260113-4cd2c826.jpeg",
                "alt": "NASCOP Vaginal Discharge Flowchart",
                "caption": "Refer to the standard management protocol"
            },
            "options": [
                { "id": "a", "text": "Refer immediately for surgery", "isCorrect": false },
                { "id": "b", "text": "Treat for Vaginitis and Cervicitis", "isCorrect": true },
                { "id": "c", "text": "Treat for PID immediately", "isCorrect": false },
                { "id": "d", "text": "Wait for laboratory results", "isCorrect": false }
            ],
            "explanation": "According to the syndromic approach, if there is discharge but no abdominal pain, you treat for both vaginitis and cervicitis locally."
        },
        {
            "id": "q6",
            "type": "true-false",
            "question": "In the management of Ophthalmia Neonatorum, if there is no improvement after 24 hours of tetracycline, the treatment should be changed to erythromycin.",
            "points": 10,
            "correctAnswer": true,
            "explanation": "If no improvement after 24 hours, change to erythromycin 100mg twice a day for 14 days, while continuing tetracycline eye ointment."
        },
        {
            "id": "q7",
            "type": "multiple-choice",
            "question": "Which of the following symptoms is characteristic of Urethral Discharge in men?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Lower abdominal pain only", "isCorrect": false },
                { "id": "b", "text": "Painless ulcer on the shaft", "isCorrect": false },
                { "id": "c", "text": "Abundant purulent or watery whitish discharge", "isCorrect": true },
                { "id": "d", "text": "General body rash", "isCorrect": false }
            ],
            "explanation": "Urethral discharge presents with abundant purulent (pus-like) or watery whitish discharge, often with dysuria."
        },
        {
            "id": "q8",
            "type": "multiple-choice",
            "question": "Pelvic Inflammatory Disease (PID) involves infection of which organs?",
            "points": 10,
            "options": [
                { "id": "a", "text": "External genitalia only", "isCorrect": false },
                { "id": "b", "text": "Ovaries, fallopian tubes, and uterus", "isCorrect": true },
                { "id": "c", "text": "Urinary bladder and kidneys", "isCorrect": false },
                { "id": "d", "text": "Stomach and intestines", "isCorrect": false }
            ],
            "explanation": "PID occurs when bacteria spread from the cervix to the internal reproductive organs: ovaries, fallopian tubes, and uterus."
        }
    ]
});