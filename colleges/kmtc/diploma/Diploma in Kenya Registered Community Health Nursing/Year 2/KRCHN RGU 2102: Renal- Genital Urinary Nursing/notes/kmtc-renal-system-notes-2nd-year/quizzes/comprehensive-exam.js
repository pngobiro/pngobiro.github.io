registerQuiz("comprehensive-exam", {
    "schemaVersion": "1.0",
    "quizId": "comprehensive-exam",
    "metadata": {
        "title": "Renal System Comprehensive Final Exam",
        "description": "A comprehensive assessment covering renal physiology, failure syndromes, infections, obstructions, and systemic disorders.",
        "examType": "comprehensive",
        "topicsCovered": [
            "topic-01-physiology",
            "topic-02-acute-failure",
            "topic-03-chronic-failure",
            "topic-04-glomerulonephritis",
            "topic-05-nephrotic-syndrome",
            "topic-06-infections",
            "topic-07-obstruction",
            "topic-08-systemic-disorders"
        ],
        "difficulty": "advanced",
        "estimatedTime": 60,
        "passingScore": 70,
        "createdAt": "2025-12-26T12:00:00Z",
        "tags": ["final", "exam", "renal-system", "kmtc"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "end",
        "allowRetry": false,
        "showCorrectAnswers": true,
        "timeLimit": 3600
    },
    "questions": [
        // TOPIC 01: PHYSIOLOGY
        {
            "id": "t1-q1",
            "topicId": "topic-01-physiology",
            "topicName": "Physiology & Assessment",
            "type": "multiple-choice",
            "question": "Which of the following factors would cause a reduction in Glomerular Filtration Rate (GFR)?",
            "points": 2,
            "options": [
                { "id": "a", "text": "Increased glomerular hydrostatic pressure", "isCorrect": false },
                { "id": "b", "text": "Decreased plasma oncotic pressure", "isCorrect": false },
                { "id": "c", "text": "Hypotension (Reduced glomerular hydrostatic pressure)", "isCorrect": true },
                { "id": "d", "text": "Increased renal blood flow", "isCorrect": false }
            ],
            "explanation": "GFR is reduced when glomerular hydrostatic pressure drops (as in hypotension/shock) or when Bowman's space pressure increases (obstruction)."
        },
        {
            "id": "t1-q2",
            "topicId": "topic-01-physiology",
            "topicName": "Physiology & Assessment",
            "type": "fill-blank",
            "question": "The normal specific gravity of urine is approximately __b1__, and it decreases in conditions like dehydration.",
            "points": 2,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["1.010", "1.01", "1.005-1.030"], "caseSensitive": false }
            ],
            "explanation": "Normal urine specific gravity is around 1.010. It reflects the kidney's ability to concentrate urine."
        },
        {
            "id": "t1-q3",
            "topicId": "topic-01-physiology",
            "topicName": "Physiology & Assessment",
            "type": "matching",
            "question": "Match the urinary cast type with its clinical significance:",
            "points": 4,
            "pairs": [
                { "id": "p1", "left": "Red Blood Cell Casts", "right": "Glomerulonephritis" },
                { "id": "p2", "left": "White Blood Cell Casts", "right": "Pyelonephritis" },
                { "id": "p3", "left": "Waxy Casts", "right": "Advanced Renal Failure" },
                { "id": "p4", "left": "Hyaline Casts", "right": "Slow urine flow" }
            ]
        },

        // TOPIC 02: ACUTE RENAL FAILURE
        {
            "id": "t2-q1",
            "topicId": "topic-02-acute-failure",
            "topicName": "Acute Renal Failure",
            "type": "multiple-choice",
            "question": "Oliguria is defined as a urine output of less than how many milliliters per 24 hours?",
            "points": 2,
            "options": [
                { "id": "a", "text": "100 mls", "isCorrect": false },
                { "id": "b", "text": "300 mls", "isCorrect": false },
                { "id": "c", "text": "500 mls", "isCorrect": true },
                { "id": "d", "text": "800 mls", "isCorrect": false }
            ],
            "explanation": "Acute renal failure is characterized by urine output less than 500mls/24hrs or complete anuria."
        },
        {
            "id": "t2-q2",
            "topicId": "topic-02-acute-failure",
            "topicName": "Acute Renal Failure",
            "type": "multiple-select",
            "question": "Which of the following are classified as PRE-RENAL causes of acute renal failure? (Select all that apply)",
            "points": 3,
            "options": [
                { "id": "a", "text": "Severe Hemorrhage", "isCorrect": true },
                { "id": "b", "text": "Acute Glomerulonephritis", "isCorrect": false },
                { "id": "c", "text": "Severe Burns", "isCorrect": true },
                { "id": "d", "text": "Prostatic Hypertrophy", "isCorrect": false },
                { "id": "e", "text": "Cardiac Tamponade", "isCorrect": true }
            ],
            "explanation": "Pre-renal causes involve perfusion issues (shock, fluid loss, cardiac failure). Glomerulonephritis is Renal; Prostatic Hypertrophy is Post-Renal."
        },
        {
            "id": "t2-q3",
            "topicId": "topic-02-acute-failure",
            "topicName": "Acute Renal Failure",
            "type": "ordering",
            "question": "Order the steps for managing life-threatening hyperkalemia in ARF:",
            "points": 4,
            "items": [
                { "id": "i1", "text": "Restrict dietary potassium intake", "correctPosition": 1 },
                { "id": "i2", "text": "Use potassium binding agents (exchange resins)", "correctPosition": 2 },
                { "id": "i3", "text": "Administer Insulin + Dextrose to shift K+ intracellularly", "correctPosition": 3 },
                { "id": "i4", "text": "Institute Dialysis", "correctPosition": 4 }
            ]
        },

        // TOPIC 03: CHRONIC RENAL FAILURE
        {
            "id": "t3-q1",
            "topicId": "topic-03-chronic-failure",
            "topicName": "Chronic Renal Failure",
            "type": "multiple-choice",
            "question": "A patient with a GFR of 20 ml/min/1.73m² would be classified in which stage of Chronic Kidney Disease?",
            "points": 2,
            "options": [
                { "id": "a", "text": "Stage 2", "isCorrect": false },
                { "id": "b", "text": "Stage 3", "isCorrect": false },
                { "id": "c", "text": "Stage 4", "isCorrect": true },
                { "id": "d", "text": "Stage 5", "isCorrect": false }
            ],
            "explanation": "Stage 4 is defined as severe GFR reduction (15-29 ml/min). Stage 5 is < 15 ml/min."
        },
        {
            "id": "t3-q2",
            "topicId": "topic-03-chronic-failure",
            "topicName": "Chronic Renal Failure",
            "type": "true-false",
            "question": "In chronic renal failure, urine output is a reliable indicator of renal function.",
            "points": 2,
            "correctAnswer": false,
            "explanation": "Urine output is NOT a useful guide. Even with profound GFR depression, failure of tubular reabsorption can lead to high urine volumes."
        },
        {
            "id": "t3-q3",
            "topicId": "topic-03-chronic-failure",
            "topicName": "Chronic Renal Failure",
            "type": "fill-blank",
            "question": "The primary cause of anemia in chronic kidney disease is the reduced production of __b1__ by the renal parenchyma.",
            "points": 2,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["erythropoietin", "epo"], "caseSensitive": false }
            ],
            "explanation": "The kidneys produce erythropoietin, which stimulates bone marrow to produce red blood cells. In CKD, this production fails."
        },

        // TOPIC 04: GLOMERULONEPHRITIS
        {
            "id": "t4-q1",
            "topicId": "topic-04-glomerulonephritis",
            "topicName": "Glomerulonephritis",
            "type": "multiple-choice",
            "question": "Which bacteria is most commonly associated with Acute Glomerulonephritis in children?",
            "points": 2,
            "options": [
                { "id": "a", "text": "Staphylococcus aureus", "isCorrect": false },
                { "id": "b", "text": "Group A Beta-hemolytic Streptococcus", "isCorrect": true },
                { "id": "c", "text": "Escherichia coli", "isCorrect": false },
                { "id": "d", "text": "Pseudomonas aeruginosa", "isCorrect": false }
            ],
            "explanation": "Post-streptococcal glomerulonephritis often follows a pharyngeal or cutaneous infection with Group A Beta-hemolytic strep."
        },
        {
            "id": "t4-q2",
            "topicId": "topic-04-glomerulonephritis",
            "topicName": "Glomerulonephritis",
            "type": "multiple-select",
            "question": "Select the clinical features typical of Acute Glomerulonephritis:",
            "points": 3,
            "options": [
                { "id": "a", "text": "Puffy face (facial edema)", "isCorrect": true },
                { "id": "b", "text": "Coca-cola colored urine", "isCorrect": true },
                { "id": "c", "text": "Massive proteinuria (>3.5g/day)", "isCorrect": false },
                { "id": "d", "text": "Hypertension", "isCorrect": true },
                { "id": "e", "text": "Hypotension", "isCorrect": false }
            ],
            "explanation": "AGN presents with edema (puffy face), hematuria (cola urine), and hypertension. Massive proteinuria is more typical of Nephrotic Syndrome."
        },

        // TOPIC 05: NEPHROTIC SYNDROME
        {
            "id": "t5-q1",
            "topicId": "topic-05-nephrotic-syndrome",
            "topicName": "Nephrotic Syndrome",
            "type": "multiple-choice",
            "question": "Which of the following is NOT one of the four cardinal features of Nephrotic Syndrome?",
            "points": 2,
            "options": [
                { "id": "a", "text": "Massive Proteinuria", "isCorrect": false },
                { "id": "b", "text": "Hypercholesterolemia", "isCorrect": false },
                { "id": "c", "text": "Hypertension", "isCorrect": true },
                { "id": "d", "text": "Massive Edema", "isCorrect": false },
                { "id": "e", "text": "Hyponatremia", "isCorrect": false }
            ],
            "explanation": "The tetrad is Proteinuria, Hyponatremia, Edema, and Hypercholesterolemia. Hypertension is variable but not a defining cardinal feature like the others."
        },
        {
            "id": "t5-q2",
            "topicId": "topic-05-nephrotic-syndrome",
            "topicName": "Nephrotic Syndrome",
            "type": "short-answer",
            "question": "Explain why patients with Nephrotic Syndrome are at risk for thromboembolism.",
            "points": 5,
            "keywords": ["antithrombin", "loss", "urine", "coagulation", "clotting", "factors", "iii"],
            "minKeywords": 2,
            "modelAnswer": "Patients lose Antithrombin III (Heparin cofactor) in the urine due to proteinuria. This loss of anticoagulant factors leads to a hypercoagulable state.",
            "maxLength": 200
        },

        // TOPIC 06: INFECTIONS
        {
            "id": "t6-q1",
            "topicId": "topic-06-infections",
            "topicName": "Renal Infections",
            "type": "fill-blank",
            "question": "A urine culture showing sterile pyuria (pus cells with no growth on standard media) is a hallmark sign of __b1__.",
            "points": 2,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["renal tb", "renal tuberculosis", "tuberculosis"], "caseSensitive": false }
            ],
            "explanation": "Renal Tuberculosis typically presents with sterile pyuria because Mycobacterium tuberculosis does not grow on standard culture media."
        },
        {
            "id": "t6-q2",
            "topicId": "topic-06-infections",
            "topicName": "Renal Infections",
            "type": "true-false",
            "question": "Acute pyelonephritis typically presents with tenderness at the renal angle.",
            "points": 2,
            "correctAnswer": true,
            "explanation": "Renal angle tenderness and fever are classic signs of acute pyelonephritis, distinguishing it from lower UTIs."
        },

        // TOPIC 07: OBSTRUCTION & STONES
        {
            "id": "t7-q1",
            "topicId": "topic-07-obstruction",
            "topicName": "Obstruction & Stones",
            "type": "matching",
            "question": "Match the cause of urinary obstruction with its classification:",
            "points": 3,
            "pairs": [
                { "id": "p1", "left": "Renal Calculus", "right": "Within the Lumen" },
                { "id": "p2", "left": "Urethral Stricture", "right": "Within the Wall" },
                { "id": "p3", "left": "Benign Prostatic Hypertrophy", "right": "Pressure from Outside" }
            ]
        },
        {
            "id": "t7-q2",
            "topicId": "topic-07-obstruction",
            "topicName": "Obstruction & Stones",
            "type": "multiple-choice",
            "question": "Which imaging modality is most sensitive for detecting small radiolucent uric acid stones?",
            "points": 2,
            "options": [
                { "id": "a", "text": "Plain Abdominal X-ray", "isCorrect": false },
                { "id": "b", "text": "Ultrasonography", "isCorrect": false },
                { "id": "c", "text": "Helical (Spiral) CT Scan", "isCorrect": true },
                { "id": "d", "text": "Intravenous Urography", "isCorrect": false }
            ],
            "explanation": "Helical CT scanning has high sensitivity and can visualize radiolucent stones as small as 1 mm which X-rays miss."
        },

        // TOPIC 08: SYSTEMIC DISORDERS
        {
            "id": "t8-q1",
            "topicId": "topic-08-systemic-disorders",
            "topicName": "Systemic Disorders",
            "type": "multiple-choice",
            "question": "Goodpasture syndrome is characterized by hemorrhage in which two organ systems?",
            "points": 2,
            "options": [
                { "id": "a", "text": "Liver and Kidneys", "isCorrect": false },
                { "id": "b", "text": "Lungs and Kidneys", "isCorrect": true },
                { "id": "c", "text": "Heart and Lungs", "isCorrect": false },
                { "id": "d", "text": "Skin and Kidneys", "isCorrect": false }
            ],
            "explanation": "Goodpasture syndrome involves alveolar (lung) hemorrhage and glomerular (kidney) hemorrhage due to anti-basement membrane antibodies."
        },
        {
            "id": "t8-q2",
            "topicId": "topic-08-systemic-disorders",
            "topicName": "Systemic Disorders",
            "type": "multiple-choice",
            "question": "Which statement regarding Polycystic Kidney Disease is true?",
            "points": 2,
            "options": [
                { "id": "a", "text": "The infantile type is autosomal dominant", "isCorrect": false },
                { "id": "b", "text": "The adult type is autosomal dominant", "isCorrect": true },
                { "id": "c", "text": "The adult type is usually fatal within the first year", "isCorrect": false },
                { "id": "d", "text": "It only affects one kidney", "isCorrect": false }
            ],
            "explanation": "Adult PKD is Autosomal Dominant and symptoms usually develop later in life. Infantile PKD is Recessive and fatal early. Both kidneys are affected."
        },

        // MIXED/INTEGRATED QUESTIONS
        {
            "id": "mix-q1",
            "topicId": "topic-02-acute-failure",
            "topicName": "Acute Renal Failure",
            "type": "multiple-choice",
            "question": "In the management of Acute Renal Failure, what is the primary indication for restricting fluid intake?",
            "points": 2,
            "options": [
                { "id": "a", "text": "When urine output is > 1000mls", "isCorrect": false },
                { "id": "b", "text": "In the presence of Oliguria or Anuria", "isCorrect": true },
                { "id": "c", "text": "During the diuretic phase", "isCorrect": false },
                { "id": "d", "text": "When the patient is dehydrated", "isCorrect": false }
            ],
            "explanation": "Fluid restriction is crucial in the oliguric phase to prevent fluid overload and pulmonary edema."
        },
        {
            "id": "mix-q2",
            "topicId": "topic-04-glomerulonephritis",
            "topicName": "Glomerulonephritis",
            "type": "true-false",
            "question": "A low protein diet (20-40 g/day) is recommended for patients with Chronic Glomerulonephritis with elevated urea.",
            "points": 2,
            "correctAnswer": true,
            "explanation": "Protein restriction helps reduce the accumulation of nitrogenous waste products (urea) in the blood."
        }
    ]
});