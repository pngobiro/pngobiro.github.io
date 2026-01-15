window.registerQuiz('comprehensive-exam', {
    "schemaVersion": "1.0",
    "quizId": "comprehensive-exam",
    "metadata": {
        "title": "Comprehensive Final Exam: HIV/AIDS and STIs",
        "description": "A comprehensive assessment covering epidemiology, prevention, management, SBCC, HCBC, and STIs based on the KMTC Teaching Manual.",
        "examType": "comprehensive",
        "topicsCovered": [
            "topic-01-fundamentals",
            "topic-02-prevention",
            "topic-03-management",
            "topic-04-sbcc",
            "topic-05-hcbc",
            "topic-06-stis"
        ],
        "difficulty": "advanced",
        "estimatedTime": 60,
        "passingScore": 75,
        "createdAt": "2024-01-20T12:00:00Z",
        "tags": ["final", "comprehensive", "kmtc", "hiv"]
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
        // UNIT 1: FUNDAMENTALS (7 Questions)
        {
            "id": "comp-u1-q1",
            "type": "multiple-choice",
            "question": "In the acronym HIV, what does the letter 'I' stand for?",
            "points": 2,
            "topicId": "topic-01-fundamentals",
            "topicName": "Fundamentals of HIV",
            "options": [
                { "id": "a", "text": "Infectious", "isCorrect": false },
                { "id": "b", "text": "Immune", "isCorrect": false },
                { "id": "c", "text": "Immunodeficiency", "isCorrect": true },
                { "id": "d", "text": "Intravenous", "isCorrect": false }
            ],
            "explanation": "HIV stands for Human Immunodeficiency Virus. It attacks the body's immune system, specifically CD4 cells."
        },
        {
            "id": "comp-u1-q2",
            "type": "fill-blank",
            "question": "The first cases of HIV were reported in Kenya in the year __year__.",
            "points": 3,
            "topicId": "topic-01-fundamentals",
            "topicName": "Fundamentals of HIV",
            "blanks": [
                { "id": "year", "acceptedAnswers": ["1984"], "caseSensitive": false }
            ],
            "explanation": "In East Africa, Uganda declared cases in 1982, followed by Kenya in 1984 and Tanzania in 1985."
        },
        {
            "id": "comp-u1-q3",
            "type": "matching",
            "question": "Match the HIV viral life cycle stage to its description:",
            "points": 4,
            "topicId": "topic-01-fundamentals",
            "topicName": "Fundamentals of HIV",
            "pairs": [
                { "id": "p1", "left": "Reverse Transcription", "right": "Conversion of viral RNA into DNA" },
                { "id": "p2", "left": "Integration", "right": "Viral DNA penetrates nucleus and joins host chromosome" },
                { "id": "p3", "left": "Assembly", "right": "Viral components gather to form new virus particles" },
                { "id": "p4", "left": "Budding", "right": "New virus pushes out of the host cell" }
            ]
        },
        {
            "id": "comp-u1-q4",
            "type": "multiple-choice",
            "question": "Which of the following is a clinical sign of WHO Clinical Stage 3?",
            "points": 2,
            "topicId": "topic-01-fundamentals",
            "topicName": "Fundamentals of HIV",
            "options": [
                { "id": "a", "text": "Asymptomatic", "isCorrect": false },
                { "id": "b", "text": "Herpes zoster", "isCorrect": false },
                { "id": "c", "text": "Pulmonary tuberculosis", "isCorrect": true },
                { "id": "d", "text": "HIV wasting syndrome", "isCorrect": false }
            ],
            "explanation": "Pulmonary tuberculosis, oral candidiasis, and unexplained severe weight loss (>10%) are defining features of Stage 3. Herpes zoster is Stage 2; Wasting syndrome is Stage 4."
        },
        {
            "id": "comp-u1-q5",
            "type": "multiple-select",
            "question": "Select all the '5 Cs' of HIV Counseling and Testing:",
            "points": 3,
            "topicId": "topic-01-fundamentals",
            "topicName": "Fundamentals of HIV",
            "options": [
                { "id": "a", "text": "Consent", "isCorrect": true },
                { "id": "b", "text": "Confidentiality", "isCorrect": true },
                { "id": "c", "text": "Coercion", "isCorrect": false },
                { "id": "d", "text": "Connection", "isCorrect": true },
                { "id": "e", "text": "Calculation", "isCorrect": false }
            ],
            "explanation": "The 5 Cs are: Consent, Confidentiality, Counselling, Correct test results, and Connection."
        },
        {
            "id": "comp-u1-q6",
            "type": "true-false",
            "question": "HIV can be transmitted through mosquito bites.",
            "points": 2,
            "topicId": "topic-01-fundamentals",
            "topicName": "Fundamentals of HIV",
            "correctAnswer": false,
            "explanation": "HIV cannot be transmitted by insect bites, casual contact, sweat, tears, or sharing utensils."
        },
        {
            "id": "comp-u1-q7",
            "type": "short-answer",
            "question": "What is the term for the most at-risk populations including sex workers and people who inject drugs? (Use the acronym)",
            "points": 3,
            "topicId": "topic-01-fundamentals",
            "topicName": "Fundamentals of HIV",
            "keywords": ["MARPS", "MARP"],
            "minKeywords": 1,
            "modelAnswer": "MARPS (Most At Risk Populations)",
            "explanation": "MARPS stands for Most At Risk Populations."
        },

        // UNIT 2: PREVENTION (6 Questions)
        {
            "id": "comp-u2-q1",
            "type": "multiple-choice",
            "question": "According to evidence, consistent use of male latex condoms has a protective effect against HIV of approximately:",
            "points": 2,
            "topicId": "topic-02-prevention",
            "topicName": "Prevention of HIV",
            "options": [
                { "id": "a", "text": "50%", "isCorrect": false },
                { "id": "b", "text": "65%", "isCorrect": false },
                { "id": "c", "text": "85% or greater", "isCorrect": true },
                { "id": "d", "text": "100%", "isCorrect": false }
            ],
            "explanation": "Evidence shows that male latex condoms when used consistently have an 85% or greater protective effect against HIV."
        },
        {
            "id": "comp-u2-q2",
            "type": "multiple-choice",
            "question": "Post-exposure prophylaxis (PEP) is most effective if initiated within how many hours of exposure?",
            "points": 2,
            "topicId": "topic-02-prevention",
            "topicName": "Prevention of HIV",
            "options": [
                { "id": "a", "text": "24 hours", "isCorrect": false },
                { "id": "b", "text": "48 hours", "isCorrect": false },
                { "id": "c", "text": "72 hours", "isCorrect": true },
                { "id": "d", "text": "1 week", "isCorrect": false }
            ],
            "explanation": "PEP involves the use of ARVs within 72 hours of exposure to HIV to prevent infection."
        },
        {
            "id": "comp-u2-q3",
            "type": "true-false",
            "question": "Voluntary Medical Male Circumcision (VMMC) reduces the risk of heterosexually acquired HIV infection in men by approximately 50%.",
            "points": 2,
            "topicId": "topic-02-prevention",
            "topicName": "Prevention of HIV",
            "correctAnswer": true,
            "explanation": "Studies have shown VMMC reduces risk by approx 50% (often cited as 60% in other contexts, but text says 50%)."
        },
        {
            "id": "comp-u2-q4",
            "type": "fill-blank",
            "question": "The transmission of HIV from a mother to her child during pregnancy, labor, delivery, or breastfeeding is known as __mtct__ transmission.",
            "points": 3,
            "topicId": "topic-02-prevention",
            "topicName": "Prevention of HIV",
            "blanks": [
                { "id": "mtct", "acceptedAnswers": ["vertical", "mother to child", "mother-to-child"], "caseSensitive": false }
            ],
            "explanation": "This route of transmission is technically referred to as vertical transmission or MTCT."
        },
        {
            "id": "comp-u2-q5",
            "type": "multiple-select",
            "question": "Which of the following are target populations for Pre-Exposure Prophylaxis (PrEP)?",
            "points": 3,
            "topicId": "topic-02-prevention",
            "topicName": "Prevention of HIV",
            "options": [
                { "id": "a", "text": "Sero-discordant couples", "isCorrect": true },
                { "id": "b", "text": "Infants born to HIV+ mothers", "isCorrect": false },
                { "id": "c", "text": "Men who have sex with men", "isCorrect": true },
                { "id": "d", "text": "People who inject drugs", "isCorrect": true }
            ],
            "explanation": "PrEP is for HIV-negative people at substantial risk. Infants utilize eMTCT protocols (prophylaxis), not standard PrEP."
        },
        {
            "id": "comp-u2-q6",
            "type": "short-answer",
            "question": "What does the 'A' stand for in the ABC strategy for HIV prevention?",
            "points": 2,
            "topicId": "topic-02-prevention",
            "topicName": "Prevention of HIV",
            "keywords": ["abstinence", "abstain"],
            "minKeywords": 1,
            "modelAnswer": "Abstinence",
            "explanation": "A = Abstinence, B = Be faithful/Behavior change, C = Condom use."
        },

        // UNIT 3: MANAGEMENT (8 Questions)
        {
            "id": "comp-u3-q1",
            "type": "multiple-choice",
            "question": "What is the recommended first-line ARV regimen for adults (>15 years) according to the manual?",
            "points": 3,
            "topicId": "topic-03-management",
            "topicName": "Management of HIV",
            "options": [
                { "id": "a", "text": "AZT + 3TC + NVP", "isCorrect": false },
                { "id": "b", "text": "TDF + 3TC + EFV", "isCorrect": true },
                { "id": "c", "text": "ABC + 3TC + LPV/r", "isCorrect": false },
                { "id": "d", "text": "AZT + 3TC + LPV/r", "isCorrect": false }
            ],
            "explanation": "The manual states: >15 YRS TDF, 3TC, EFV which is also the first line ARVs for Adult PLHIV."
        },
        {
            "id": "comp-u3-q2",
            "type": "matching",
            "question": "Match the ARV drug to its class:",
            "points": 4,
            "topicId": "topic-03-management",
            "topicName": "Management of HIV",
            "pairs": [
                { "id": "p1", "left": "Tenofovir (TDF)", "right": "NRTI" },
                { "id": "p2", "left": "Efavirenz (EFV)", "right": "NNRTI" },
                { "id": "p3", "left": "Dolutegravir (DTG)", "right": "Integrase Inhibitor" },
                { "id": "p4", "left": "Lopinavir/ritonavir (LPV/r)", "right": "Protease Inhibitor" }
            ]
        },
        {
            "id": "comp-u3-q3",
            "type": "true-false",
            "question": "Patients with newly diagnosed TB should start ART immediately on the same day as TB treatment.",
            "points": 2,
            "topicId": "topic-03-management",
            "topicName": "Management of HIV",
            "correctAnswer": false,
            "explanation": "ART should be deferred until the patient is tolerating anti-TB medication, usually initiated within 2-8 weeks."
        },
        {
            "id": "comp-u3-q4",
            "type": "fill-blank",
            "question": "The screening questions for depression ask about feeling down/hopeless and having little __b1__ in doing things.",
            "points": 3,
            "topicId": "topic-03-management",
            "topicName": "Management of HIV",
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["pleasure", "interest"], "caseSensitive": false }
            ],
            "explanation": "The two screening questions cover depressed mood and anhedonia (little pleasure)."
        },
        {
            "id": "comp-u3-q5",
            "type": "multiple-select",
            "question": "Select the correct types of referrals described in the manual:",
            "points": 3,
            "topicId": "topic-03-management",
            "topicName": "Management of HIV",
            "options": [
                { "id": "a", "text": "Passive referral", "isCorrect": true },
                { "id": "b", "text": "Active referral", "isCorrect": true },
                { "id": "c", "text": "Circular referral", "isCorrect": false },
                { "id": "d", "text": "Static referral", "isCorrect": false }
            ],
            "explanation": "Passive referral involves giving the client a form; Active referral involves patient escorts."
        },
        {
            "id": "comp-u3-q6",
            "type": "multiple-choice",
            "question": "Which of the following is a common side effect associated with Efavirenz (EFV)?",
            "points": 2,
            "topicId": "topic-03-management",
            "topicName": "Management of HIV",
            "options": [
                { "id": "a", "text": "Severe anemia", "isCorrect": false },
                { "id": "b", "text": "CNS symptoms (dreams, confusion)", "isCorrect": true },
                { "id": "c", "text": "Pancreatitis", "isCorrect": false },
                { "id": "d", "text": "Skin rash (severe)", "isCorrect": false }
            ],
            "explanation": "EFV is famously associated with CNS symptoms like vivid dreams, insomnia, and confusion. Nevirapine is more associated with skin rash."
        },
        {
            "id": "comp-u3-q7",
            "type": "short-answer",
            "question": "What is the purpose of NACS in HIV care?",
            "points": 3,
            "topicId": "topic-03-management",
            "topicName": "Management of HIV",
            "keywords": ["nutritional", "assessment", "counselling", "support"],
            "minKeywords": 2,
            "modelAnswer": "Nutritional Assessment, Counselling and Support",
            "explanation": "NACS stands for Nutritional Assessment, Counselling and Support."
        },
        {
            "id": "comp-u3-q8",
            "type": "true-false",
            "question": "All HIV positive women between 18-65 years should be screened for cervical cancer.",
            "points": 2,
            "topicId": "topic-03-management",
            "topicName": "Management of HIV",
            "correctAnswer": true,
            "explanation": "This is part of the standard package of reproductive health services for PLHIV."
        },

        // UNIT 4: SBCC (6 Questions)
        {
            "id": "comp-u4-q1",
            "type": "multiple-choice",
            "question": "What does SBCC stand for?",
            "points": 2,
            "topicId": "topic-04-sbcc",
            "topicName": "SBCC",
            "options": [
                { "id": "a", "text": "Strategic Behavior Change Communication", "isCorrect": false },
                { "id": "b", "text": "Social Behavior Change Communication", "isCorrect": true },
                { "id": "c", "text": "Society Based Community Care", "isCorrect": false },
                { "id": "d", "text": "Standard Behavior Care Coordination", "isCorrect": false }
            ],
            "explanation": "SBCC stands for Social Behavior Change Communication."
        },
        {
            "id": "comp-u4-q2",
            "type": "ordering",
            "question": "Arrange the stages of the Behavior Change Continuum in the correct order:",
            "points": 4,
            "topicId": "topic-04-sbcc",
            "topicName": "SBCC",
            "items": [
                { "id": "1", "text": "Unaware", "correctPosition": 1 },
                { "id": "2", "text": "Aware", "correctPosition": 2 },
                { "id": "3", "text": "Concerned", "correctPosition": 3 },
                { "id": "4", "text": "Knowledgeable", "correctPosition": 4 },
                { "id": "5", "text": "Motivated to change", "correctPosition": 5 },
                { "id": "6", "text": "Practicing trial behavior change", "correctPosition": 6 }
            ]
        },
        {
            "id": "comp-u4-q3",
            "type": "multiple-select",
            "question": "Which of the following are examples of 'Edutainment' as a communication channel?",
            "points": 3,
            "topicId": "topic-04-sbcc",
            "topicName": "SBCC",
            "options": [
                { "id": "a", "text": "Songs and folk dances", "isCorrect": true },
                { "id": "b", "text": "Posters", "isCorrect": false },
                { "id": "c", "text": "Street shows and dramas", "isCorrect": true },
                { "id": "d", "text": "Counseling sessions", "isCorrect": false }
            ],
            "explanation": "Edutainment mixes education and entertainment, such as songs, dances, and dramas. Posters are mass media; counseling is IPC."
        },
        {
            "id": "comp-u4-q4",
            "type": "true-false",
            "question": "SBCC strategies should be designed without the involvement of the target population to ensure objectivity.",
            "points": 2,
            "topicId": "topic-04-sbcc",
            "topicName": "SBCC",
            "correctAnswer": false,
            "explanation": "A guiding principle is that the target population should participate in all phases of SBCC development."
        },
        {
            "id": "comp-u4-q5",
            "type": "fill-blank",
            "question": "One role of SBCC is to reduce __b1__, which is a mark of shame or discredit on a person.",
            "points": 3,
            "topicId": "topic-04-sbcc",
            "topicName": "SBCC",
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["stigma"], "caseSensitive": false }
            ],
            "explanation": "SBCC plays a key role in reducing stigma and discrimination."
        },
        {
            "id": "comp-u4-q6",
            "type": "multiple-choice",
            "question": "Which model was developed by Everett Rogers?",
            "points": 2,
            "topicId": "topic-04-sbcc",
            "topicName": "SBCC",
            "options": [
                { "id": "a", "text": "Stages of Change", "isCorrect": false },
                { "id": "b", "text": "Self-Efficacy Model", "isCorrect": false },
                { "id": "c", "text": "Diffusion of Innovations", "isCorrect": true },
                { "id": "d", "text": "Health Belief Model", "isCorrect": false }
            ],
            "explanation": "Everett Rogers is associated with the Diffusion of Innovations model."
        },

        // UNIT 5: HCBC (6 Questions)
        {
            "id": "comp-u5-q1",
            "type": "multiple-choice",
            "question": "What is Home Based Care?",
            "points": 2,
            "topicId": "topic-05-hcbc",
            "topicName": "HCBC",
            "options": [
                { "id": "a", "text": "Care provided exclusively by doctors in hospitals", "isCorrect": false },
                { "id": "b", "text": "Care extended from the hospital to the patient's home through family/community participation", "isCorrect": true },
                { "id": "c", "text": "Care provided only by traditional healers", "isCorrect": false },
                { "id": "d", "text": "Self-medication by the patient", "isCorrect": false }
            ],
            "explanation": "HCBC is collaborative care extending from the facility to the home involving family and community."
        },
        {
            "id": "comp-u5-q2",
            "type": "multiple-select",
            "question": "Select the key components of Home Based Care:",
            "points": 3,
            "topicId": "topic-05-hcbc",
            "topicName": "HCBC",
            "options": [
                { "id": "a", "text": "Clinical and Nursing Care", "isCorrect": true },
                { "id": "b", "text": "Psychosocial Support", "isCorrect": true },
                { "id": "c", "text": "Surgical Interventions", "isCorrect": false },
                { "id": "d", "text": "Social Support", "isCorrect": true }
            ],
            "explanation": "HCBC includes clinical/nursing care, counseling/psychological care, and social support. Surgery is a facility-based intervention."
        },
        {
            "id": "comp-u5-q3",
            "type": "fill-blank",
            "question": "__b1__ care refers to care for patients with terminal diseases, focusing on pain relief and comfort.",
            "points": 3,
            "topicId": "topic-05-hcbc",
            "topicName": "HCBC",
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["palliative"], "caseSensitive": false }
            ],
            "explanation": "Palliative care is a key component of HCBC for the terminally ill."
        },
        {
            "id": "comp-u5-q4",
            "type": "true-false",
            "question": "In Home Based Care, the family is responsible for prescribing medication.",
            "points": 2,
            "topicId": "topic-05-hcbc",
            "topicName": "HCBC",
            "correctAnswer": false,
            "explanation": "Prescribing medication is the responsibility of the health care worker. The family administers prescribed medication."
        },
        {
            "id": "comp-u5-q5",
            "type": "multiple-choice",
            "question": "Which stakeholder is responsible for creating a supportive policy environment for HCBC?",
            "points": 2,
            "topicId": "topic-05-hcbc",
            "topicName": "HCBC",
            "options": [
                { "id": "a", "text": "The Family", "isCorrect": false },
                { "id": "b", "text": "The Community", "isCorrect": false },
                { "id": "c", "text": "The Government", "isCorrect": true },
                { "id": "d", "text": "The Patient", "isCorrect": false }
            ],
            "explanation": "The government's role includes creating supportive policies, guidelines, and standards."
        },
        {
            "id": "comp-u5-q6",
            "type": "short-answer",
            "question": "State one challenge of community mobilization in HCBC.",
            "points": 3,
            "topicId": "topic-05-hcbc",
            "topicName": "HCBC",
            "keywords": ["time", "energy", "expectation", "rigid", "success", "lifespan"],
            "minKeywords": 1,
            "modelAnswer": "Time and energy expected from members, rigid expectations, or pre-determined lifespans.",
            "explanation": "Challenges include high time/energy demands, rigid expectations, incomplete participation, etc."
        },

        // UNIT 6: STIs (7 Questions)
        {
            "id": "comp-u6-q1",
            "type": "multiple-choice",
            "question": "Which organism causes Syphilis?",
            "points": 2,
            "topicId": "topic-06-stis",
            "topicName": "STIs",
            "options": [
                { "id": "a", "text": "Neisseria gonorrhoeae", "isCorrect": false },
                { "id": "b", "text": "Treponema pallidum", "isCorrect": true },
                { "id": "c", "text": "Haemophilus ducreyi", "isCorrect": false },
                { "id": "d", "text": "Chlamydia trachomatis", "isCorrect": false }
            ],
            "explanation": "Syphilis is caused by the bacterium Treponema pallidum."
        },
        {
            "id": "comp-u6-q2",
            "type": "matching",
            "question": "Match the STI to its causative classification:",
            "points": 4,
            "topicId": "topic-06-stis",
            "topicName": "STIs",
            "pairs": [
                { "id": "p1", "left": "Syphilis", "right": "Bacterial" },
                { "id": "p2", "left": "Candidiasis", "right": "Fungal" },
                { "id": "p3", "left": "Genital Herpes", "right": "Viral" },
                { "id": "p4", "left": "Trichomoniasis", "right": "Parasitic" }
            ]
        },
        {
            "id": "comp-u6-q3",
            "type": "multiple-choice",
            "question": "Which syndrome is characterized by a painless genital ulcer (chancre)?",
            "points": 2,
            "topicId": "topic-06-stis",
            "topicName": "STIs",
            "options": [
                { "id": "a", "text": "Primary Syphilis", "isCorrect": true },
                { "id": "b", "text": "Chancroid", "isCorrect": false },
                { "id": "c", "text": "Genital Herpes", "isCorrect": false },
                { "id": "d", "text": "Gonorrhea", "isCorrect": false }
            ],
            "explanation": "Primary syphilis presents with a painless, hard chancre. Chancroid ulcers are painful and soft. Herpes ulcers are painful blisters."
        },
        {
            "id": "comp-u6-q4",
            "type": "fill-blank",
            "question": "In syndromic management, the syndrome 'Urethral Discharge' usually targets two common causes: __b1__ and __b2__.",
            "points": 4,
            "topicId": "topic-06-stis",
            "topicName": "STIs",
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["gonorrhea", "neisseria gonorrhoeae"], "caseSensitive": false },
                { "id": "b2", "acceptedAnswers": ["chlamydia", "chlamydia trachomatis"], "caseSensitive": false }
            ],
            "explanation": "Urethral discharge treatment covers both Gonorrhea and Chlamydia."
        },
        {
            "id": "comp-u6-q5",
            "type": "multiple-choice",
            "question": "What is the incubation period for Gonorrhea?",
            "points": 2,
            "topicId": "topic-06-stis",
            "topicName": "STIs",
            "options": [
                { "id": "a", "text": "1-2 days", "isCorrect": false },
                { "id": "b", "text": "3-10 days", "isCorrect": true },
                { "id": "c", "text": "3 weeks", "isCorrect": false },
                { "id": "d", "text": "3 months", "isCorrect": false }
            ],
            "explanation": "The incubation period for Gonorrhea is typically 3-10 days."
        },
        {
            "id": "comp-u6-q6",
            "type": "true-false",
            "question": "Herpes Simplex Virus type 2 (HSV-2) is most commonly associated with oral herpes.",
            "points": 2,
            "topicId": "topic-06-stis",
            "topicName": "STIs",
            "correctAnswer": false,
            "explanation": "HSV-2 causes genital herpes. HSV-1 commonly causes oral herpes (cold sores)."
        },
        {
            "id": "comp-u6-q7",
            "type": "multiple-select",
            "question": "Select the behavioral risk factors for STIs:",
            "points": 3,
            "topicId": "topic-06-stis",
            "topicName": "STIs",
            "options": [
                { "id": "a", "text": "Multiple sexual partners", "isCorrect": true },
                { "id": "b", "text": "Unprotected sex", "isCorrect": true },
                { "id": "c", "text": "Age", "isCorrect": false },
                { "id": "d", "text": "Drug and substance abuse", "isCorrect": true }
            ],
            "explanation": "Multiple partners, unprotected sex, and substance abuse are behavioral risks. Age is a biological risk factor."
        }
    ]
});