registerQuiz("comprehensive-exam", {
    "schemaVersion": "1.0",
    "quizId": "comprehensive-exam",
    "metadata": {
        "title": "Renal & GUD Diseases Final Exam",
        "description": "A comprehensive assessment covering anatomy, pathology, diagnostics, and nursing management of renal and genitourinary disorders.",
        "examType": "comprehensive",
        "topicsCovered": [
            "topic-01", "topic-02", "topic-03", "topic-04", 
            "topic-05", "topic-06", "topic-07", "topic-08", 
            "topic-09", "topic-10", "topic-11"
        ],
        "difficulty": "advanced",
        "estimatedTime": 60,
        "passingScore": 75,
        "createdAt": "2025-12-26T12:00:00Z",
        "tags": ["final", "comprehensive", "nursing", "renal"]
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
        /* --- Topic 01: Anatomy --- */
        {
            "id": "anat-q1",
            "type": "multiple-choice",
            "question": "Which hormone is produced by the macula densa cells of the distal tubule to regulate blood pressure?",
            "topicId": "topic-01",
            "topicName": "Anatomy & Physiology",
            "points": 1,
            "options": [
                { "id": "a", "text": "Aldosterone", "isCorrect": false },
                { "id": "b", "text": "Renin", "isCorrect": true },
                { "id": "c", "text": "Erythropoietin", "isCorrect": false },
                { "id": "d", "text": "Antidiuretic Hormone (ADH)", "isCorrect": false }
            ],
            "explanation": "Renin is an enzyme produced by the macula densa cells in the juxtaglomerular apparatus that initiates the RAAS pathway."
        },
        {
            "id": "anat-q2",
            "type": "ordering",
            "question": "Arrange the steps of the Renin-Angiotensin-Aldosterone System (RAAS) in the correct order:",
            "topicId": "topic-01",
            "topicName": "Anatomy & Physiology",
            "points": 1,
            "items": [
                { "id": "i1", "text": "Renin release from kidney", "correctPosition": 1 },
                { "id": "i2", "text": "Angiotensinogen converts to Angiotensin I", "correctPosition": 2 },
                { "id": "i3", "text": "ACE converts Angiotensin I to Angiotensin II", "correctPosition": 3 },
                { "id": "i4", "text": "Release of Aldosterone", "correctPosition": 4 },
                { "id": "i5", "text": "Sodium and Water retention", "correctPosition": 5 }
            ],
            "explanation": "Renin converts Angiotensinogen to Ang I; ACE (from lungs) converts Ang I to Ang II; Ang II triggers Aldosterone release, leading to retention."
        },
        {
            "id": "anat-q3",
            "type": "multiple-choice",
            "question": "Which part of the kidney contains the loops of Henle and collecting ducts?",
            "topicId": "topic-01",
            "topicName": "Anatomy & Physiology",
            "points": 1,
            "options": [
                { "id": "a", "text": "Cortex", "isCorrect": false },
                { "id": "b", "text": "Medulla", "isCorrect": true },
                { "id": "c", "text": "Capsule", "isCorrect": false },
                { "id": "d", "text": "Pelvis", "isCorrect": false }
            ],
            "explanation": "The renal medulla is the inner portion containing the pyramids, loops of Henle, and collecting ducts."
        },

        /* --- Topic 02: Assessment --- */
        {
            "id": "diag-q1",
            "type": "matching",
            "question": "Match the urinary symptom with its definition:",
            "topicId": "topic-02",
            "topicName": "Diagnostics",
            "points": 1,
            "pairs": [
                { "id": "p1", "left": "Dysuria", "right": "Painful or difficult voiding" },
                { "id": "p2", "left": "Nocturia", "right": "Excessive urination at night" },
                { "id": "p3", "left": "Hematuria", "right": "Blood in the urine" },
                { "id": "p4", "left": "Oliguria", "right": "Urine output < 500ml/day" }
            ],
            "explanation": "Accurate terminology is essential for assessment. Dysuria indicates pain, Nocturia is night voiding, Hematuria is blood, and Oliguria is low output."
        },
        {
            "id": "diag-q2",
            "type": "multiple-choice",
            "question": "Which diagnostic test is used specifically to evaluate vesico-urethral reflux?",
            "topicId": "topic-02",
            "topicName": "Diagnostics",
            "points": 1,
            "options": [
                { "id": "a", "text": "Intravenous Pyelogram (IVP)", "isCorrect": false },
                { "id": "b", "text": "Cystography (Voiding Cystourethrogram)", "isCorrect": true },
                { "id": "c", "text": "Renal Biopsy", "isCorrect": false },
                { "id": "d", "text": "KUB X-ray", "isCorrect": false }
            ],
            "explanation": "A Cystogram involves instilling contrast into the bladder to check for backflow (reflux) of urine into the ureters."
        },

        /* --- Topic 03: Pyelonephritis --- */
        {
            "id": "pyelo-q1",
            "type": "multiple-select",
            "question": "Which of the following are common signs of Acute Pyelonephritis? (Select all that apply)",
            "topicId": "topic-03",
            "topicName": "Pyelonephritis",
            "points": 1,
            "options": [
                { "id": "a", "text": "High Fever (>38.9°C)", "isCorrect": true },
                { "id": "b", "text": "Flank Pain", "isCorrect": true },
                { "id": "c", "text": "Painless Hematuria", "isCorrect": false },
                { "id": "d", "text": "Pyuria (Pus in urine)", "isCorrect": true },
                { "id": "e", "text": "Severe Edema", "isCorrect": false }
            ],
            "explanation": "Pyelonephritis presents with systemic signs of infection (fever), local pain (flank), and pyuria. Painless hematuria suggests bladder cancer; severe edema suggests nephrotic syndrome."
        },
        {
            "id": "pyelo-q2",
            "type": "fill-blank",
            "question": "The most common causative organism for acute pyelonephritis is __b1__, which often ascends from the lower urinary tract.",
            "topicId": "topic-03",
            "topicName": "Pyelonephritis",
            "points": 1,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["E. coli", "Escherichia coli", "e coli"], "caseSensitive": false }
            ],
            "explanation": "E. coli accounts for the vast majority of ascending urinary tract infections leading to pyelonephritis."
        },

        /* --- Topic 04: Renal Failure --- */
        {
            "id": "rf-q1",
            "type": "multiple-choice",
            "question": "A patient presents with hemorrhage and hypotension leading to Acute Renal Failure. How would this cause be classified?",
            "topicId": "topic-04",
            "topicName": "Renal Failure",
            "points": 1,
            "options": [
                { "id": "a", "text": "Pre-renal", "isCorrect": true },
                { "id": "b", "text": "Intra-renal", "isCorrect": false },
                { "id": "c", "text": "Post-renal", "isCorrect": false },
                { "id": "d", "text": "Chronic", "isCorrect": false }
            ],
            "explanation": "Pre-renal causes involve reduced blood flow to the kidney (e.g., hemorrhage, shock) before it reaches the renal parenchyma."
        },
        {
            "id": "rf-q2",
            "type": "multiple-select",
            "question": "Which of the following interventions are appropriate for managing Hyperkalemia in renal failure? (Select all that apply)",
            "topicId": "topic-04",
            "topicName": "Renal Failure",
            "points": 1,
            "options": [
                { "id": "a", "text": "IV Glucose and Insulin", "isCorrect": true },
                { "id": "b", "text": "Spironolactone (Potassium-sparing diuretic)", "isCorrect": false },
                { "id": "c", "text": "Kayexalate Enema", "isCorrect": true },
                { "id": "d", "text": "Calcium Gluconate", "isCorrect": true },
                { "id": "e", "text": "High Banana Diet", "isCorrect": false }
            ],
            "explanation": "Glucose/Insulin shifts K+ into cells; Kayexalate removes it via gut; Calcium Gluconate protects the heart. K+ sparing diuretics and K+ rich foods (bananas) are contraindicated."
        },
        {
            "id": "rf-q3",
            "type": "true-false",
            "question": "In the Oliguric phase of Acute Renal Failure, the nurse should encourage a high protein diet to promote healing.",
            "topicId": "topic-04",
            "topicName": "Renal Failure",
            "points": 1,
            "correctAnswer": false,
            "explanation": "False. Protein is restricted (low protein) to prevent the accumulation of nitrogenous wastes (urea) which the damaged kidneys cannot excrete."
        },

        /* --- Topic 05: Dialysis --- */
        {
            "id": "dialysis-q1",
            "type": "multiple-choice",
            "question": "What is the preferred vascular access for long-term hemodialysis?",
            "topicId": "topic-05",
            "topicName": "Dialysis",
            "points": 1,
            "options": [
                { "id": "a", "text": "Central Venous Catheter", "isCorrect": false },
                { "id": "b", "text": "Arteriovenous (AV) Fistula", "isCorrect": true },
                { "id": "c", "text": "Arteriovenous Graft", "isCorrect": false },
                { "id": "d", "text": "Peripheral IV Line", "isCorrect": false }
            ],
            "explanation": "An AV Fistula uses the patient's native vessels, has the lowest infection rate, and lasts the longest."
        },
        {
            "id": "dialysis-q2",
            "type": "multiple-choice",
            "question": "During Peritoneal Dialysis, the dialysate should be warmed to body temperature to:",
            "topicId": "topic-05",
            "topicName": "Dialysis",
            "points": 1,
            "options": [
                { "id": "a", "text": "Kill bacteria", "isCorrect": false },
                { "id": "b", "text": "Improve visualization", "isCorrect": false },
                { "id": "c", "text": "Dilate vessels and facilitate exchange", "isCorrect": true },
                { "id": "d", "text": "Slow down diffusion", "isCorrect": false }
            ],
            "explanation": "Warming the fluid prevents chilling and dilates peritoneal vessels, enhancing the exchange of toxins and fluid."
        },

        /* --- Topic 06: Renal Calculi --- */
        {
            "id": "stone-q1",
            "type": "multiple-choice",
            "question": "A patient with uric acid stones should be advised to restrict which food group?",
            "topicId": "topic-06",
            "topicName": "Renal Calculi",
            "points": 1,
            "options": [
                { "id": "a", "text": "Dairy products", "isCorrect": false },
                { "id": "b", "text": "Purine-rich foods (organ meats, shellfish)", "isCorrect": true },
                { "id": "c", "text": "Oxalate-rich foods (spinach, nuts)", "isCorrect": false },
                { "id": "d", "text": "Carbohydrates", "isCorrect": false }
            ],
            "explanation": "Uric acid is a breakdown product of purines. Restricting purines (meats, fish) reduces uric acid formation."
        },
        {
            "id": "stone-q2",
            "type": "short-answer",
            "question": "Describe the pain typically associated with renal calculi (Renal Colic).",
            "topicId": "topic-06",
            "topicName": "Renal Calculi",
            "points": 1,
            "keywords": ["flank", "severe", "excruciating", "radiate", "groin", "genitalia", "intermittent", "colic"],
            "minKeywords": 2,
            "modelAnswer": "It is an excruciating, intermittent pain in the flank that often radiates to the groin or genitalia.",
            "maxLength": 200
        },

        /* --- Topic 07: Renal Trauma --- */
        {
            "id": "trauma-q1",
            "type": "multiple-choice",
            "question": "What is the most common clinical sign of renal trauma?",
            "topicId": "topic-07",
            "topicName": "Renal Trauma",
            "points": 1,
            "options": [
                { "id": "a", "text": "Hypertension", "isCorrect": false },
                { "id": "b", "text": "Hematuria", "isCorrect": true },
                { "id": "c", "text": "Fever", "isCorrect": false },
                { "id": "d", "text": "Polyuria", "isCorrect": false }
            ],
            "explanation": "Hematuria (blood in urine) is the cardinal sign of renal injury, though the degree of hematuria does not always correlate with injury severity."
        },

        /* --- Topic 08: Tumors --- */
        {
            "id": "tumor-q1",
            "type": "multiple-choice",
            "question": "Which symptom is considered the hallmark of bladder cancer?",
            "topicId": "topic-08",
            "topicName": "Renal Tumors",
            "points": 1,
            "options": [
                { "id": "a", "text": "Painful urination", "isCorrect": false },
                { "id": "b", "text": "Painless hematuria", "isCorrect": true },
                { "id": "c", "text": "Urinary retention", "isCorrect": false },
                { "id": "d", "text": "Flank mass", "isCorrect": false }
            ],
            "explanation": "Painless hematuria is the most common presenting symptom of bladder cancer."
        },
        {
            "id": "tumor-q2",
            "type": "true-false",
            "question": "Prostate cancer is typically an androgen-dependent tumor.",
            "topicId": "topic-08",
            "topicName": "Renal Tumors",
            "points": 1,
            "correctAnswer": true,
            "explanation": "Prostate cancer growth is stimulated by testosterone (androgen), which is why anti-androgen therapy is a treatment modality."
        },

        /* --- Topic 09: Hydronephrosis --- */
        {
            "id": "hydro-q1",
            "type": "fill-blank",
            "question": "__b1__ is the distension of the kidney with urine caused by obstruction of urine flow.",
            "topicId": "topic-09",
            "topicName": "Hydronephrosis",
            "points": 1,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["Hydronephrosis"], "caseSensitive": false }
            ],
            "explanation": "Hydronephrosis literally means 'water inside the kidney', referring to dilation of the renal pelvis due to backup."
        },

        /* --- Topic 10: Structural Disorders --- */
        {
            "id": "struct-q1",
            "type": "multiple-choice",
            "question": "What is the primary cause of Vesico-Vaginal Fistula (VVF) in developing countries?",
            "topicId": "topic-10",
            "topicName": "Structural Disorders",
            "points": 1,
            "options": [
                { "id": "a", "text": "Radiation therapy", "isCorrect": false },
                { "id": "b", "text": "Obstructed labor", "isCorrect": true },
                { "id": "c", "text": "Surgical trauma", "isCorrect": false },
                { "id": "d", "text": "Infection", "isCorrect": false }
            ],
            "explanation": "Prolonged obstructed labor causes pressure necrosis of the tissue between the bladder and vagina, leading to VVF."
        },
        {
            "id": "struct-q2",
            "type": "matching",
            "question": "Match the medication class for BPH with its mechanism:",
            "topicId": "topic-10",
            "topicName": "Structural Disorders",
            "points": 1,
            "pairs": [
                { "id": "p1", "left": "Alpha-blockers (e.g., Alfuzosin)", "right": "Relax smooth muscle" },
                { "id": "p2", "left": "5-alpha reductase inhibitors (e.g., Finasteride)", "right": "Shrink prostate size" }
            ],
            "explanation": "Alpha-blockers relax muscles for symptom relief; 5-alpha reductase inhibitors block hormones to shrink the gland."
        },

        /* --- Topic 11: Nephrotic Syndrome --- */
        {
            "id": "nephro-q1",
            "type": "multiple-select",
            "question": "Select the four hallmark signs of Nephrotic Syndrome:",
            "topicId": "topic-11",
            "topicName": "Nephrotic Syndrome",
            "points": 1,
            "options": [
                { "id": "a", "text": "Massive Proteinuria", "isCorrect": true },
                { "id": "b", "text": "Hypoalbuminemia", "isCorrect": true },
                { "id": "c", "text": "Edema", "isCorrect": true },
                { "id": "d", "text": "Hyperlipidemia", "isCorrect": true },
                { "id": "e", "text": "Hematuria", "isCorrect": false },
                { "id": "f", "text": "Hypertension", "isCorrect": false }
            ],
            "explanation": "Nephrotic syndrome is defined by Proteinuria, Hypoalbuminemia, Edema, and Hyperlipidemia. Hematuria and hypertension are more typical of Nephritic syndrome."
        },
        {
            "id": "nephro-q2",
            "type": "multiple-choice",
            "question": "What is the first-line pharmacological treatment for Nephrotic Syndrome to induce remission?",
            "topicId": "topic-11",
            "topicName": "Nephrotic Syndrome",
            "points": 1,
            "options": [
                { "id": "a", "text": "Antibiotics", "isCorrect": false },
                { "id": "b", "text": "Corticosteroids (Prednisone)", "isCorrect": true },
                { "id": "c", "text": "Diuretics alone", "isCorrect": false },
                { "id": "d", "text": "Antihypertensives", "isCorrect": false }
            ],
            "explanation": "Corticosteroids reduce the glomerular inflammation and permeability, stopping protein loss."
        }
    ]
});