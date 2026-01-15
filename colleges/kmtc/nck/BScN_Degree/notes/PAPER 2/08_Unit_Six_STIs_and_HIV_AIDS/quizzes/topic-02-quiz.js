registerQuiz("topic-02-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-02-quiz",
    "metadata": {
        "title": "HIV/AIDS Pathology and Management",
        "description": "Test your understanding of HIV transmission, disease progression stages, diagnosis, and antiretroviral therapy.",
        "topicId": "topic-02-hiv-aids",
        "difficulty": "advanced",
        "estimatedTime": 20,
        "passingScore": 75,
        "createdAt": "2026-01-13T10:00:00Z",
        "tags": ["hiv", "aids", "arvs", "pathology"]
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
            "type": "fill-blank",
            "question": "HIV binds to specific defence cells known as __1__ lymphocytes.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["CD4", "cd4"], "caseSensitive": false }
            ],
            "explanation": "HIV targets CD4 lymphocytes (T-helper cells), entering them to replicate and eventually destroying them."
        },
        {
            "id": "q2",
            "type": "ordering",
            "question": "Order the stages of HIV Infection from earliest to latest:",
            "points": 15,
            "items": [
                { "id": "i1", "text": "Acute Infection (Seroconversion)", "correctPosition": 1 },
                { "id": "i2", "text": "Latent / Asymptomatic Period", "correctPosition": 2 },
                { "id": "i3", "text": "Symptomatic HIV Disease", "correctPosition": 3 },
                { "id": "i4", "text": "AIDS (Late HIV Infection)", "correctPosition": 4 }
            ],
            "explanation": "The disease progresses from Acute infection -> Asymptomatic latency -> Symptomatic phase -> Full blown AIDS."
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "What is the 'Window Period'?",
            "points": 10,
            "options": [
                { "id": "a", "text": "The time when a patient has full blown AIDS", "isCorrect": false },
                { "id": "b", "text": "The period between infection and the production of detectable antibodies", "isCorrect": true },
                { "id": "c", "text": "The period when the virus is dormant and cannot be transmitted", "isCorrect": false },
                { "id": "d", "text": "The first 24 hours after exposure", "isCorrect": false }
            ],
            "explanation": "During the window period (3-6 months), the person is infected and infectious but tests negative for antibodies."
        },
        {
            "id": "q4",
            "type": "multiple-select",
            "question": "Which of the following are confirmed modes of HIV transmission? (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Unprotected sexual contact", "isCorrect": true },
                { "id": "b", "text": "Mother to child (breast milk, birth)", "isCorrect": true },
                { "id": "c", "text": "Direct blood contact (transfusion, sharing needles)", "isCorrect": true },
                { "id": "d", "text": "Mosquito bites", "isCorrect": false },
                { "id": "e", "text": "Sharing eating utensils", "isCorrect": false }
            ],
            "explanation": "HIV is transmitted via blood, semen, vaginal fluids, and breast milk. It is NOT transmitted by insects or casual contact."
        },
        {
            "id": "q5",
            "type": "matching",
            "question": "Match the ARV drug class with its mechanism:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "Nucleoside Analogues", "right": "Incorporates into DNA stopping building process" },
                { "id": "p2", "left": "NNRTIs", "right": "Binds directly to reverse transcriptase enzyme" },
                { "id": "p3", "left": "Protease Inhibitors", "right": "Prevents successful assembly/release of virus" }
            ],
            "explanation": "Nucleoside analogues mimic DNA blocks; NNRTIs block the enzyme; Protease inhibitors stop the virus from maturing."
        },
        {
            "id": "q6",
            "type": "true-false",
            "question": "A positive HIV antibody test in a child below 18 months confirms HIV infection.",
            "points": 10,
            "correctAnswer": false,
            "explanation": "False. Babies retain maternal antibodies. A positive test may reflect the mother's status. PCR is needed for diagnosis under 18 months."
        },
        {
            "id": "q7",
            "type": "multiple-choice",
            "question": "Which opportunistic infection is a leading cause of death and involves the lungs?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Kaposi's Sarcoma", "isCorrect": false },
                { "id": "b", "text": "Tuberculosis (TB)", "isCorrect": true },
                { "id": "c", "text": "Herpes Zoster", "isCorrect": false },
                { "id": "d", "text": "Oral Thrush", "isCorrect": false }
            ],
            "explanation": "TB is a major cause of death and has seen a resurgence due to the HIV epidemic."
        },
        {
            "id": "q8",
            "type": "image-based",
            "question": "Look at the diagram. What process is shown occurring inside the CD4 cell?",
            "points": 10,
            "media": {
                "type": "image",
                "url": "../assets/images/image-20260113-4d8a8e47.jpeg",
                "alt": "HIV Replication Cycle",
                "caption": "Fig: Viral Replication"
            },
            "options": [
                { "id": "a", "text": "Bacterial division", "isCorrect": false },
                { "id": "b", "text": "Viral replication using reverse transcriptase", "isCorrect": true },
                { "id": "c", "text": "Antibody production", "isCorrect": false },
                { "id": "d", "text": "Cell repair", "isCorrect": false }
            ],
            "explanation": "The image illustrates the HIV retrovirus entering the cell and using reverse transcriptase to replicate itself."
        }
    ]
});