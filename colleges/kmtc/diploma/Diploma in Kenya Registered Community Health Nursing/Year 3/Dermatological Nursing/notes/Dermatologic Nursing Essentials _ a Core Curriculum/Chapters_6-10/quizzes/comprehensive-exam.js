registerQuiz("comprehensive-exam", {
    "schemaVersion": "1.0",
    "quizId": "comprehensive-exam",
    "metadata": {
        "title": "Dermatology Nursing Comprehensive Exam",
        "description": "Final assessment covering Phototherapy, Psychosocial Interventions, Papulosquamous Diseases, and Dermatitis.",
        "examType": "comprehensive",
        "topicsCovered": [
            "topic-01-phototherapy",
            "topic-02-psychosocial",
            "topic-03-papulosquamous",
            "topic-04-dermatitis"
        ],
        "difficulty": "advanced",
        "estimatedTime": 60,
        "passingScore": 75,
        "createdAt": "2025-12-25T12:00:00Z",
        "tags": ["final", "comprehensive", "certification"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "end",
        "allowRetry": true,
        "showCorrectAnswers": true,
        "timeLimit": 3600
    },
    "questions": [
        // TOPIC 01: PHOTOTHERAPY
        {
            "id": "t1-q1",
            "type": "multiple-choice",
            "question": "Which ultraviolet spectrum is primarily responsible for sunburns and is dosed in millijoules (mJ)?",
            "points": 1,
            "topicId": "topic-01-phototherapy",
            "topicName": "Phototherapy",
            "options": [
                { "id": "a", "text": "UVA", "isCorrect": false },
                { "id": "b", "text": "UVB", "isCorrect": true },
                { "id": "c", "text": "UVC", "isCorrect": false },
                { "id": "d", "text": "UVA-1", "isCorrect": false }
            ],
            "explanation": "UVB is referred to as the 'sunburn ray', is 1,000 times more capable of producing erythema than UVA, and is dosed in millijoules."
        },
        {
            "id": "t1-q2",
            "type": "multiple-choice",
            "question": "What is the specific wavelength range for Narrowband UVB (NB-UVB)?",
            "points": 1,
            "topicId": "topic-01-phototherapy",
            "topicName": "Phototherapy",
            "options": [
                { "id": "a", "text": "290 to 320 nm", "isCorrect": false },
                { "id": "b", "text": "320 to 400 nm", "isCorrect": false },
                { "id": "c", "text": "311 to 313 nm", "isCorrect": true },
                { "id": "d", "text": "340 to 400 nm", "isCorrect": false }
            ],
            "explanation": "Narrowband UVB utilizes a specific wavelength of 311 to 313 nm, which clears lesions faster than broadband UVB."
        },
        {
            "id": "t1-q3",
            "type": "multiple-select",
            "question": "Which of the following are absolute contraindications for PUVA therapy? (Select all that apply)",
            "points": 2,
            "topicId": "topic-01-phototherapy",
            "topicName": "Phototherapy",
            "options": [
                { "id": "a", "text": "Pregnancy/Lactation", "isCorrect": true },
                { "id": "b", "text": "History of Melanoma", "isCorrect": false },
                { "id": "c", "text": "Lupus Erythematosus", "isCorrect": true },
                { "id": "d", "text": "Xeroderma Pigmentosum", "isCorrect": true },
                { "id": "e", "text": "Atopic Dermatitis", "isCorrect": false }
            ],
            "partialCredit": true,
            "explanation": "Absolute contraindications for PUVA include pregnancy/lactation, Lupus, Xeroderma pigmentosum, Porphyria, and Albinism. History of melanoma is a relative contraindication."
        },
        {
            "id": "t1-q4",
            "type": "true-false",
            "question": "There is crossover protection when switching a patient from UVA to UVB therapy.",
            "points": 1,
            "topicId": "topic-01-phototherapy",
            "topicName": "Phototherapy",
            "correctAnswer": false,
            "explanation": "There is NO crossover protection when switching from UVA to UVB. The skin's adaptation to one type of light does not protect against the other."
        },
        {
            "id": "t1-q5",
            "type": "multiple-choice",
            "question": "When administering systemic Methoxsalen for PUVA, when should the patient ingest the medication?",
            "points": 1,
            "topicId": "topic-01-phototherapy",
            "topicName": "Phototherapy",
            "options": [
                { "id": "a", "text": "Immediately before treatment", "isCorrect": false },
                { "id": "b", "text": "30 minutes before treatment", "isCorrect": false },
                { "id": "c", "text": "1.5 to 2 hours before treatment", "isCorrect": true },
                { "id": "d", "text": "4 hours before treatment", "isCorrect": false }
            ],
            "explanation": "Patients ingest a prescribed dose of methoxsalen approximately 1.5 to 2 hours before being treated with UVA."
        },
        {
            "id": "t1-q6",
            "type": "multiple-choice",
            "question": "What is the primary long-term risk associated with PUVA therapy?",
            "points": 1,
            "topicId": "topic-01-phototherapy",
            "topicName": "Phototherapy",
            "options": [
                { "id": "a", "text": "Hypothyroidism", "isCorrect": false },
                { "id": "b", "text": "Skin cancer (SCC/Melanoma)", "isCorrect": true },
                { "id": "c", "text": "Liver failure", "isCorrect": false },
                { "id": "d", "text": "Renal toxicity", "isCorrect": false }
            ],
            "explanation": "PUVA carries a higher risk than UVB for malignant melanoma, squamous cell carcinoma, skin aging, and actinic keratosis."
        },
        {
            "id": "t1-q7",
            "type": "fill-blank",
            "question": "The smallest amount of UVL needed to produce mild erythema is called the __1__ Dose.",
            "points": 1,
            "topicId": "topic-01-phototherapy",
            "topicName": "Phototherapy",
            "blanks": [
                { "id": "1", "acceptedAnswers": ["minimal erythema", "minimum erythema", "minimal erythemal", "MED"], "caseSensitive": false }
            ],
            "explanation": "MED stands for Minimal Erythema Dose."
        },
        {
            "id": "t1-q8",
            "type": "multiple-choice",
            "question": "Which of the following requires specific shielding during phototherapy treatment for males?",
            "points": 1,
            "topicId": "topic-01-phototherapy",
            "topicName": "Phototherapy",
            "options": [
                { "id": "a", "text": "Palms", "isCorrect": false },
                { "id": "b", "text": "Genitalia", "isCorrect": true },
                { "id": "c", "text": "Soles of feet", "isCorrect": false },
                { "id": "d", "text": "Elbows", "isCorrect": false }
            ],
            "explanation": "Genital shields (jockstraps or socks) are required for males during treatment to prevent burns and long-term damage to sensitive tissue."
        },

        // TOPIC 02: PSYCHOSOCIAL
        {
            "id": "t2-q1",
            "type": "multiple-choice",
            "question": "Which psychodermatological condition is characterized by a patient creating their own skin lesions to satisfy a psychological need?",
            "points": 1,
            "topicId": "topic-02-psychosocial",
            "topicName": "Psychosocial Interventions",
            "options": [
                { "id": "a", "text": "Delusional Parasitosis", "isCorrect": false },
                { "id": "b", "text": "Dermatitis Artefacta", "isCorrect": true },
                { "id": "c", "text": "Trichotillomania", "isCorrect": false },
                { "id": "d", "text": "Body Dysmorphic Disorder", "isCorrect": false }
            ],
            "explanation": "Dermatitis artefacta involves patient-created skin lesions, often to satisfy a personal psychological need, and may include linear tears or bruising."
        },
        {
            "id": "t2-q2",
            "type": "matching",
            "question": "Match the Quality of Life assessment tool with its target population:",
            "points": 2,
            "topicId": "topic-02-psychosocial",
            "topicName": "Psychosocial Interventions",
            "pairs": [
                { "id": "p1", "left": "DLQI", "right": "Adults" },
                { "id": "p2", "left": "CDLQI", "right": "Children (5-16 yrs)" },
                { "id": "p3", "left": "IDQOL", "right": "Infants (0-4 yrs)" },
                { "id": "p4", "left": "FDLQI", "right": "Family Members" }
            ]
        },
        {
            "id": "t2-q3",
            "type": "multiple-choice",
            "question": "What is the primary goal of Habit Reversal (HR) therapy in dermatology?",
            "points": 1,
            "topicId": "topic-02-psychosocial",
            "topicName": "Psychosocial Interventions",
            "options": [
                { "id": "a", "text": "To cure the underlying disease", "isCorrect": false },
                { "id": "b", "text": "To break the itch-scratch cycle", "isCorrect": true },
                { "id": "c", "text": "To improve sleep quality", "isCorrect": false },
                { "id": "d", "text": "To reduce medication costs", "isCorrect": false }
            ],
            "explanation": "HR is a behavioral intervention primarily used to break the itch-scratch cycle by replacing the scratching habit with a nondestructive competing response."
        },
        {
            "id": "t2-q4",
            "type": "multiple-choice",
            "question": "Which of the following is NOT one of the three core conditions for a therapeutic consultation?",
            "points": 1,
            "topicId": "topic-02-psychosocial",
            "topicName": "Psychosocial Interventions",
            "options": [
                { "id": "a", "text": "Congruence (Genuineness)", "isCorrect": false },
                { "id": "b", "text": "Empathy", "isCorrect": false },
                { "id": "c", "text": "Sympathy", "isCorrect": true },
                { "id": "d", "text": "Unconditional Positive Regard", "isCorrect": false }
            ],
            "explanation": "The three core conditions are Congruence, Empathy, and Unconditional Positive Regard. Sympathy is not considered one of the therapeutic core conditions in this context."
        },
        {
            "id": "t2-q5",
            "type": "multiple-choice",
            "question": "Which tool assesses a patient's self-efficacy and ability to manage their treatment?",
            "points": 1,
            "topicId": "topic-02-psychosocial",
            "topicName": "Psychosocial Interventions",
            "options": [
                { "id": "a", "text": "DLQI", "isCorrect": false },
                { "id": "b", "text": "PeDeSI", "isCorrect": true },
                { "id": "c", "text": "CADI", "isCorrect": false },
                { "id": "d", "text": "PASI", "isCorrect": false }
            ],
            "explanation": "The Person-Centered Dermatology Self-Care Index (PeDeSI) measures education and support needs to enhance self-management and self-efficacy."
        },
        {
            "id": "t2-q6",
            "type": "true-false",
            "question": "Patients presenting with dermatological symptoms should always be assessed for organic/systemic disease before a psychological cause is diagnosed.",
            "points": 1,
            "topicId": "topic-02-psychosocial",
            "topicName": "Psychosocial Interventions",
            "correctAnswer": true,
            "explanation": "Exclusion of organic/dermatological causes is essential before diagnosing primary psychiatric conditions like Delusional Parasitosis."
        },
        {
            "id": "t2-q7",
            "type": "multiple-choice",
            "question": "In Cognitive-Behavioral Therapy (CBT), what is 'Reconceptualization'?",
            "points": 1,
            "topicId": "topic-02-psychosocial",
            "topicName": "Psychosocial Interventions",
            "options": [
                { "id": "a", "text": "Learning deep breathing exercises", "isCorrect": false },
                { "id": "b", "text": "Keeping a scratch diary", "isCorrect": false },
                { "id": "c", "text": "Helping the patient reframe experiences and challenge negative thoughts", "isCorrect": true },
                { "id": "d", "text": "Planning daily activities", "isCorrect": false }
            ],
            "explanation": "Reconceptualization involves assisting the patient to reframe their experiences, such as challenging the thought 'I am a failure because I have bad skin'."
        },

        // TOPIC 03: PAPULOSQUAMOUS
        {
            "id": "t3-q1",
            "type": "multiple-choice",
            "question": "The 'Koebner phenomenon' refers to:",
            "points": 1,
            "topicId": "topic-03-papulosquamous",
            "topicName": "Papulosquamous Diseases",
            "options": [
                { "id": "a", "text": "Bleeding points when scale is removed", "isCorrect": false },
                { "id": "b", "text": "Formation of lesions at sites of trauma/injury", "isCorrect": true },
                { "id": "c", "text": "White lacy patterns on mucosa", "isCorrect": false },
                { "id": "d", "text": "Thickening of skin due to scratching", "isCorrect": false }
            ],
            "explanation": "The Koebner phenomenon is the formation of psoriatic (or other) lesions in uninvolved skin following cutaneous trauma."
        },
        {
            "id": "t3-q2",
            "type": "multiple-choice",
            "question": "Which infection is a known trigger for Guttate Psoriasis?",
            "points": 1,
            "topicId": "topic-03-papulosquamous",
            "topicName": "Papulosquamous Diseases",
            "options": [
                { "id": "a", "text": "Staphylococcus aureus", "isCorrect": false },
                { "id": "b", "text": "Streptococcal infection", "isCorrect": true },
                { "id": "c", "text": "Herpes Simplex", "isCorrect": false },
                { "id": "d", "text": "Candida albicans", "isCorrect": false }
            ],
            "explanation": "Acute streptococcal infections (often pharyngitis) are specifically associated with the guttate form of psoriasis."
        },
        {
            "id": "t3-q3",
            "type": "multiple-select",
            "question": "Select the '5 Ps' used to describe Lichen Planus:",
            "points": 2,
            "topicId": "topic-03-papulosquamous",
            "topicName": "Papulosquamous Diseases",
            "options": [
                { "id": "a", "text": "Purple", "isCorrect": true },
                { "id": "b", "text": "Polygonal", "isCorrect": true },
                { "id": "c", "text": "Pruritic", "isCorrect": true },
                { "id": "d", "text": "Planar", "isCorrect": true },
                { "id": "e", "text": "Papules", "isCorrect": true },
                { "id": "f", "text": "Pustular", "isCorrect": false },
                { "id": "g", "text": "Painful", "isCorrect": false }
            ],
            "explanation": "Classic Lichen Planus is described as Purple, Polygonal, Pruritic, Planar, Papules."
        },
        {
            "id": "t3-q4",
            "type": "multiple-choice",
            "question": "A 'Herald Patch' followed by a 'Christmas Tree' distribution of lesions is characteristic of:",
            "points": 1,
            "topicId": "topic-03-papulosquamous",
            "topicName": "Papulosquamous Diseases",
            "options": [
                { "id": "a", "text": "Guttate Psoriasis", "isCorrect": false },
                { "id": "b", "text": "Pityriasis Rosea", "isCorrect": true },
                { "id": "c", "text": "Secondary Syphilis", "isCorrect": false },
                { "id": "d", "text": "Tinea Corporis", "isCorrect": false }
            ],
            "explanation": "Pityriasis Rosea begins with a solitary Herald Patch and is followed by a secondary widespread eruption in a Christmas Tree pattern."
        },
        {
            "id": "t3-q5",
            "type": "multiple-choice",
            "question": "Which of the following is the single most important intervention for Lichen Simplex Chronicus?",
            "points": 1,
            "topicId": "topic-03-papulosquamous",
            "topicName": "Papulosquamous Diseases",
            "options": [
                { "id": "a", "text": "Systemic antibiotics", "isCorrect": false },
                { "id": "b", "text": "Breaking the itch-scratch cycle", "isCorrect": true },
                { "id": "c", "text": "Phototherapy", "isCorrect": false },
                { "id": "d", "text": "Antifungal creams", "isCorrect": false }
            ],
            "explanation": "LSC is caused by chronic scratching/rubbing. If the itch-scratch cycle is not broken, the condition will not improve regardless of other treatments."
        },
        {
            "id": "t3-q6",
            "type": "true-false",
            "question": "Keratosis Pilaris is an infectious disease caused by bacteria.",
            "points": 1,
            "topicId": "topic-03-papulosquamous",
            "topicName": "Papulosquamous Diseases",
            "correctAnswer": false,
            "explanation": "Keratosis Pilaris is a genetic disorder of keratinization where hair follicles form horny plugs; it is not infectious."
        },
        {
            "id": "t3-q7",
            "type": "multiple-choice",
            "question": "What is the 'Gold Standard' systemic treatment for Psoriatic Arthritis?",
            "points": 1,
            "topicId": "topic-03-papulosquamous",
            "topicName": "Papulosquamous Diseases",
            "options": [
                { "id": "a", "text": "Cyclosporine", "isCorrect": false },
                { "id": "b", "text": "Methotrexate", "isCorrect": true },
                { "id": "c", "text": "Acitretin", "isCorrect": false },
                { "id": "d", "text": "Prednisone", "isCorrect": false }
            ],
            "explanation": "Methotrexate is commonly used as a first-line systemic therapy for moderately severe plaque psoriasis and psoriatic arthritis."
        },
        {
            "id": "t3-q8",
            "type": "image-based",
            "question": "Identify the type of psoriasis shown in this image (Click the correct area if applicable, or select from options below):",
            "points": 1,
            "topicId": "topic-03-papulosquamous",
            "topicName": "Papulosquamous Diseases",
            "imageUrl": "assets/images/image-20251225-c0ab4b0e.jpeg",
            "imageAlt": "Red, smooth lesions in the axilla",
            "options": [
                { "id": "a", "text": "Plaque Psoriasis", "isCorrect": false },
                { "id": "b", "text": "Inverse Psoriasis", "isCorrect": true },
                { "id": "c", "text": "Guttate Psoriasis", "isCorrect": false },
                { "id": "d", "text": "Pustular Psoriasis", "isCorrect": false }
            ],
            "explanation": "Inverse psoriasis presents as red, thinner plaques without scale in intertriginous areas like the axilla."
        },

        // TOPIC 04: DERMATITIS
        {
            "id": "t4-q1",
            "type": "multiple-select",
            "question": "Which of the following constitute the 'Atopic Triad'?",
            "points": 2,
            "topicId": "topic-04-dermatitis",
            "topicName": "Dermatitis & Eczemas",
            "options": [
                { "id": "a", "text": "Atopic Dermatitis", "isCorrect": true },
                { "id": "b", "text": "Asthma", "isCorrect": true },
                { "id": "c", "text": "Allergic Rhinitis", "isCorrect": true },
                { "id": "d", "text": "Food Allergies", "isCorrect": false },
                { "id": "e", "text": "Contact Dermatitis", "isCorrect": false }
            ],
            "partialCredit": true,
            "explanation": "The Atopic Triad consists of Atopic Dermatitis, Asthma, and Allergic Rhinitis."
        },
        {
            "id": "t4-q2",
            "type": "multiple-choice",
            "question": "Which type of Contact Dermatitis is more common?",
            "points": 1,
            "topicId": "topic-04-dermatitis",
            "topicName": "Dermatitis & Eczemas",
            "options": [
                { "id": "a", "text": "Allergic Contact Dermatitis (ACD)", "isCorrect": false },
                { "id": "b", "text": "Irritant Contact Dermatitis (ICD)", "isCorrect": true }
            ],
            "explanation": "Irritant Contact Dermatitis accounts for approximately 80% of cases, while Allergic Contact Dermatitis accounts for 20%."
        },
        {
            "id": "t4-q3",
            "type": "multiple-choice",
            "question": "What is the typical distribution of Atopic Dermatitis in infants?",
            "points": 1,
            "topicId": "topic-04-dermatitis",
            "topicName": "Dermatitis & Eczemas",
            "options": [
                { "id": "a", "text": "Flexor surfaces (antecubital/popliteal fossae)", "isCorrect": false },
                { "id": "b", "text": "Face, scalp, and extensor surfaces", "isCorrect": true },
                { "id": "c", "text": "Diaper area only", "isCorrect": false },
                { "id": "d", "text": "Palms and soles", "isCorrect": false }
            ],
            "explanation": "In infants, AD commonly affects the scalp, face (cheeks), and extensor surfaces. The diaper area is usually spared. Flexor involvement is typical of older children/adults."
        },
        {
            "id": "t4-q4",
            "type": "ordering",
            "question": "Order the steps for the 'Soak and Seal' method:",
            "points": 2,
            "topicId": "topic-04-dermatitis",
            "topicName": "Dermatitis & Eczemas",
            "items": [
                { "id": "1", "text": "Bathe in warm water for 10-15 mins", "correctPosition": 1 },
                { "id": "2", "text": "Pat skin gently dry (leave damp)", "correctPosition": 2 },
                { "id": "3", "text": "Apply prescription medication to affected areas", "correctPosition": 3 },
                { "id": "4", "text": "Apply moisturizer to unaffected areas/over medication", "correctPosition": 4 }
            ],
            "explanation": "1. Soak, 2. Pat dry, 3. Medication (within 3 mins), 4. Moisturizer."
        },
        {
            "id": "t4-q5",
            "type": "multiple-choice",
            "question": "What is the 'Gold Standard' diagnostic test for Allergic Contact Dermatitis?",
            "points": 1,
            "topicId": "topic-04-dermatitis",
            "topicName": "Dermatitis & Eczemas",
            "options": [
                { "id": "a", "text": "RAST testing", "isCorrect": false },
                { "id": "b", "text": "Prick testing", "isCorrect": false },
                { "id": "c", "text": "Patch testing", "isCorrect": true },
                { "id": "d", "text": "Skin biopsy", "isCorrect": false }
            ],
            "explanation": "Patch testing is considered the gold standard for determining the responsible allergen in ACD."
        },
        {
            "id": "t4-q6",
            "type": "multiple-choice",
            "question": "Seborrheic Dermatitis is linked to which organism?",
            "points": 1,
            "topicId": "topic-04-dermatitis",
            "topicName": "Dermatitis & Eczemas",
            "options": [
                { "id": "a", "text": "Staphylococcus aureus", "isCorrect": false },
                { "id": "b", "text": "Streptococcus pyogenes", "isCorrect": false },
                { "id": "c", "text": "Malassezia furfur (Yeast)", "isCorrect": true },
                { "id": "d", "text": "Human Papilloma Virus", "isCorrect": false }
            ],
            "explanation": "Seborrheic dermatitis occurrence is linked to Malassezia furfur yeast and abnormal immune response to it."
        },
        {
            "id": "t4-q7",
            "type": "multiple-choice",
            "question": "What distinguishes Nummular Eczema from other forms?",
            "points": 1,
            "topicId": "topic-04-dermatitis",
            "topicName": "Dermatitis & Eczemas",
            "options": [
                { "id": "a", "text": "Coin-shaped lesions", "isCorrect": true },
                { "id": "b", "text": "Target lesions", "isCorrect": false },
                { "id": "c", "text": "Herald patch", "isCorrect": false },
                { "id": "d", "text": "Burrows", "isCorrect": false }
            ],
            "explanation": "Nummular (meaning 'coin-like') eczema is characterized by distinct, coin-shaped or oval lesions."
        },
        {
            "id": "t4-q8",
            "type": "multiple-choice",
            "question": "In Diaper Dermatitis management, what does the 'A' in the ABCDE acronym stand for?",
            "points": 1,
            "topicId": "topic-04-dermatitis",
            "topicName": "Dermatitis & Eczemas",
            "options": [
                { "id": "a", "text": "Antibiotics", "isCorrect": false },
                { "id": "b", "text": "Air", "isCorrect": true },
                { "id": "c", "text": "Avoidance", "isCorrect": false },
                { "id": "d", "text": "Antihistamines", "isCorrect": false }
            ],
            "explanation": "A = Air out the skin (go diaper-free). B=Barrier, C=Clean, D=Disposable, E=Educate."
        }
    ]
});