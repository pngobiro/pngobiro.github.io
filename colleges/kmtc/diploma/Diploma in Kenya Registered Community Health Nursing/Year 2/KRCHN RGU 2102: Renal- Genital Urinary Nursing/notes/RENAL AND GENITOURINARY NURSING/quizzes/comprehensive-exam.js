registerQuiz("comprehensive-exam", {
    "schemaVersion": "1.0",
    "quizId": "comprehensive-exam",
    "metadata": {
        "title": "Comprehensive Final Exam: Renal & Genitourinary Nursing",
        "description": "A comprehensive assessment covering assessment, disorders, renal failure, congenital anomalies, and management strategies.",
        "examType": "comprehensive",
        "topicsCovered": [
            "topic-01-assessment",
            "topic-02-kidney-disorders",
            "topic-03-renal-failure",
            "topic-04-structural-disorders",
            "topic-05-incontinence-cystitis",
            "topic-06-congenital-anomalies",
            "topic-07-urolithiasis"
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
        // TOPIC 1: ASSESSMENT & DIAGNOSTICS
        {
            "id": "comp-t1-q1",
            "type": "multiple-choice",
            "question": "Which laboratory value is the most specific indicator of renal function?",
            "points": 1,
            "topicId": "topic-01-assessment",
            "topicName": "Assessment & Diagnostics",
            "options": [
                { "id": "a", "text": "Blood Urea Nitrogen (BUN)", "isCorrect": false },
                { "id": "b", "text": "Serum Creatinine", "isCorrect": true },
                { "id": "c", "text": "Specific Gravity", "isCorrect": false },
                { "id": "d", "text": "White Blood Cell Count", "isCorrect": false }
            ],
            "explanation": "Serum creatinine is the most specific indicator of renal function because it is a waste product of muscle metabolism produced at a constant rate and excreted solely by the kidneys."
        },
        {
            "id": "comp-t1-q2",
            "type": "fill-blank",
            "question": "The normal range for serum potassium is __1__ to __2__ mEq/L.",
            "points": 1,
            "topicId": "topic-01-assessment",
            "topicName": "Assessment & Diagnostics",
            "blanks": [
                { "id": "1", "acceptedAnswers": ["3.5"], "caseSensitive": false },
                { "id": "2", "acceptedAnswers": ["4.5", "5.0", "5"], "caseSensitive": false }
            ],
            "explanation": "The normal serum potassium range is generally considered 3.5 to 4.5 (or up to 5.0) mEq/L."
        },
        {
            "id": "comp-t1-q3",
            "type": "true-false",
            "question": "A creatinine level of 2.5 mg/dL is considered within the normal range for an adult male.",
            "points": 1,
            "topicId": "topic-01-assessment",
            "topicName": "Assessment & Diagnostics",
            "correctAnswer": false,
            "explanation": "Normal creatinine for men is approximately 0.74 – 1.35 mg/dL. A level of 2.5 mg/dL indicates impaired renal function."
        },

        // TOPIC 2: KIDNEY DISORDERS (PYELONEPHRITIS)
        {
            "id": "comp-t2-q1",
            "type": "multiple-select",
            "question": "Which of the following are clinical manifestations of acute pyelonephritis? (Select all that apply)",
            "points": 1,
            "topicId": "topic-02-kidney-disorders",
            "topicName": "Pyelonephritis",
            "options": [
                { "id": "a", "text": "Costovertebral angle tenderness", "isCorrect": true },
                { "id": "b", "text": "Chills and fever", "isCorrect": true },
                { "id": "c", "text": "Profuse painless hematuria", "isCorrect": false },
                { "id": "d", "text": "Leukocytosis", "isCorrect": true }
            ],
            "explanation": "Acute pyelonephritis presents with fever, chills, leukocytosis, and flank pain/CVA tenderness. Painless hematuria is more often associated with bladder cancer."
        },
        {
            "id": "comp-t2-q2",
            "type": "multiple-choice",
            "question": "Chronic pyelonephritis can eventually lead to which serious complication?",
            "points": 1,
            "topicId": "topic-02-kidney-disorders",
            "topicName": "Pyelonephritis",
            "options": [
                { "id": "a", "text": "End-stage renal disease (ESRD)", "isCorrect": true },
                { "id": "b", "text": "Bladder cancer", "isCorrect": false },
                { "id": "c", "text": "Urethral strictures", "isCorrect": false },
                { "id": "d", "text": "Diabetes Insipidus", "isCorrect": false }
            ],
            "explanation": "Repeated bouts of inflammation and scarring in chronic pyelonephritis can lead to end-stage renal disease (ESRD)."
        },

        // TOPIC 3: RENAL FAILURE
        {
            "id": "comp-t3-q1",
            "type": "matching",
            "question": "Match the category of Acute Renal Failure with its potential cause:",
            "points": 3,
            "topicId": "topic-03-renal-failure",
            "topicName": "Renal Failure",
            "pairs": [
                { "id": "p1", "left": "Pre-renal", "right": "Severe dehydration / Hypovolemia" },
                { "id": "p2", "left": "Intra-renal", "right": "Aminoglycoside toxicity (Gentamicin)" },
                { "id": "p3", "left": "Post-renal", "right": "Benign Prostatic Hyperplasia (BPH)" }
            ]
        },
        {
            "id": "comp-t3-q2",
            "type": "ordering",
            "question": "Arrange the phases of Acute Renal Failure in the correct chronological order:",
            "points": 2,
            "topicId": "topic-03-renal-failure",
            "topicName": "Renal Failure",
            "items": [
                { "id": "i1", "text": "Initiation Phase", "correctPosition": 1 },
                { "id": "i2", "text": "Oliguria Phase", "correctPosition": 2 },
                { "id": "i3", "text": "Diuresis Phase", "correctPosition": 3 },
                { "id": "i4", "text": "Recovery Phase", "correctPosition": 4 }
            ]
        },
        {
            "id": "comp-t3-q3",
            "type": "multiple-choice",
            "question": "Which medication is administered orally or rectally to treat severe hyperkalemia by exchanging sodium for potassium ions?",
            "points": 1,
            "topicId": "topic-03-renal-failure",
            "topicName": "Renal Failure",
            "options": [
                { "id": "a", "text": "Furosemide (Lasix)", "isCorrect": false },
                { "id": "b", "text": "Sodium polystyrene sulfonate (Kayexalate)", "isCorrect": true },
                { "id": "c", "text": "Calcium Gluconate", "isCorrect": false },
                { "id": "d", "text": "Erythropoietin", "isCorrect": false }
            ],
            "explanation": "Kayexalate is a cation-exchange resin used to lower serum potassium levels by exchanging sodium for potassium in the gut."
        },
        {
            "id": "comp-t3-q4",
            "type": "fill-blank",
            "question": "Urine output less than 50 mL per day is defined as __1__.",
            "points": 1,
            "topicId": "topic-03-renal-failure",
            "topicName": "Renal Failure",
            "blanks": [
                { "id": "1", "acceptedAnswers": ["anuria"], "caseSensitive": false }
            ],
            "explanation": "Anuria is defined as urine output less than 50 mL/day. Oliguria is less than 500 mL/day."
        },

        // TOPIC 4: STRUCTURAL DISORDERS
        {
            "id": "comp-t4-q1",
            "type": "multiple-choice",
            "question": "Which medication is specifically used to repair the bladder lining defects in Interstitial Cystitis?",
            "points": 1,
            "topicId": "topic-04-structural-disorders",
            "topicName": "Structural Disorders",
            "options": [
                { "id": "a", "text": "Amitriptyline", "isCorrect": false },
                { "id": "b", "text": "Pentosan polysulfate sodium (Elmiron)", "isCorrect": true },
                { "id": "c", "text": "Ciprofloxacin", "isCorrect": false },
                { "id": "d", "text": "Nitrofurantoin", "isCorrect": false }
            ],
            "explanation": "Pentosan polysulfate sodium (Elmiron) is the only oral medication approved to treat IC by repairing the bladder mucosal layer."
        },
        {
            "id": "comp-t4-q2",
            "type": "true-false",
            "question": "Hydronephrosis caused by an obstruction in the urethra will affect only one kidney.",
            "points": 1,
            "topicId": "topic-04-structural-disorders",
            "topicName": "Structural Disorders",
            "correctAnswer": false,
            "explanation": "If the obstruction is in the urethra or bladder, back pressure affects BOTH kidneys. Obstruction in a ureter affects only one."
        },

        // TOPIC 5: INCONTINENCE & CYSTITIS
        {
            "id": "comp-t5-q1",
            "type": "multiple-choice",
            "question": "Which type of incontinence is characterized by involuntary loss of urine during coughing, sneezing, or heavy lifting?",
            "points": 1,
            "topicId": "topic-05-incontinence-cystitis",
            "topicName": "Incontinence & Cystitis",
            "options": [
                { "id": "a", "text": "Urge Incontinence", "isCorrect": false },
                { "id": "b", "text": "Functional Incontinence", "isCorrect": false },
                { "id": "c", "text": "Stress Incontinence", "isCorrect": true },
                { "id": "d", "text": "Overflow Incontinence", "isCorrect": false }
            ],
            "explanation": "Stress incontinence occurs when abdominal pressure increases (sneezing, coughing) and the pelvic floor muscles cannot retain urine."
        },
        {
            "id": "comp-t5-q2",
            "type": "multiple-choice",
            "question": "What is the most common causative pathogen for Acute Cystitis?",
            "points": 1,
            "topicId": "topic-05-incontinence-cystitis",
            "topicName": "Incontinence & Cystitis",
            "options": [
                { "id": "a", "text": "Klebsiella", "isCorrect": false },
                { "id": "b", "text": "Escherichia Coli", "isCorrect": true },
                { "id": "c", "text": "Proteus mirabilis", "isCorrect": false },
                { "id": "d", "text": "Pseudomonas", "isCorrect": false }
            ],
            "explanation": "E. Coli is the pathogen responsible for 70-95% of cystitis cases."
        },

        // TOPIC 6: CONGENITAL ANOMALIES
        {
            "id": "comp-t6-q1",
            "type": "image-based",
            "question": "Identify the condition where the urethral opening is on the ventral (under) side of the penis:",
            "points": 1,
            "topicId": "topic-06-congenital-anomalies",
            "topicName": "Congenital Anomalies",
            "imageUrl": "assets/images/image-20251226-193772dc.jpeg",
            "imageAlt": "Diagram showing hypospadias locations",
            "options": [
                { "id": "a", "text": "Epispadias", "isCorrect": false },
                { "id": "b", "text": "Hypospadias", "isCorrect": true },
                { "id": "c", "text": "Phimosis", "isCorrect": false }
            ],
            "explanation": "Hypospadias is defined by a meatal opening on the ventral side. Epispadias is on the dorsal (upper) side."
        },
        {
            "id": "comp-t6-q2",
            "type": "true-false",
            "question": "Circumcision is recommended immediately after birth for infants diagnosed with hypospadias.",
            "points": 1,
            "topicId": "topic-06-congenital-anomalies",
            "topicName": "Congenital Anomalies",
            "correctAnswer": false,
            "explanation": "Circumcision should be avoided because the foreskin is often used for surgical repair (urethroplasty) later."
        },

        // TOPIC 7: UROLITHIASIS
        {
            "id": "comp-t7-q1",
            "type": "matching",
            "question": "Match the stone type with the appropriate dietary restriction:",
            "points": 3,
            "topicId": "topic-07-urolithiasis",
            "topicName": "Urolithiasis",
            "pairs": [
                { "id": "p1", "left": "Uric Acid Stones", "right": "Low-purine diet (avoid organ meats, shellfish)" },
                { "id": "p2", "left": "Calcium Oxalate Stones", "right": "Limit spinach, strawberries, chocolate, tea" },
                { "id": "p3", "left": "Calcium Phosphate Stones", "right": "Low sodium and protein restriction" }
            ]
        },
        {
            "id": "comp-t7-q2",
            "type": "multiple-choice",
            "question": "What is the priority nursing intervention for a patient presenting with renal colic?",
            "points": 1,
            "topicId": "topic-07-urolithiasis",
            "topicName": "Urolithiasis",
            "options": [
                { "id": "a", "text": "Immediate surgery", "isCorrect": false },
                { "id": "b", "text": "Relief of pain", "isCorrect": true },
                { "id": "c", "text": "Dietary teaching", "isCorrect": false },
                { "id": "d", "text": "Straining all urine", "isCorrect": false }
            ],
            "explanation": "While straining urine is important, the immediate priority for renal colic is pain relief due to its excruciating nature, which can cause shock."
        },
        {
            "id": "comp-t7-q3",
            "type": "fill-blank",
            "question": "The procedure using high-energy shock waves to break up kidney stones non-invasively is called __1__.",
            "points": 1,
            "topicId": "topic-07-urolithiasis",
            "topicName": "Urolithiasis",
            "blanks": [
                { "id": "1", "acceptedAnswers": ["ESWL", "Lithotripsy", "Extracorporeal shock wave lithotripsy"], "caseSensitive": false }
            ],
            "explanation": "Extracorporeal Shock Wave Lithotripsy (ESWL) uses shock waves to fragment stones."
        },

        // ADDITIONAL COMPREHENSIVE QUESTIONS
        {
            "id": "comp-general-q1",
            "type": "multiple-choice",
            "question": "In a patient with chronic kidney disease, which electrolyte imbalance is most likely to cause fatal dysrhythmias?",
            "points": 1,
            "topicId": "topic-03-renal-failure",
            "topicName": "Renal Failure",
            "options": [
                { "id": "a", "text": "Hypocalcemia", "isCorrect": false },
                { "id": "b", "text": "Hypernatremia", "isCorrect": false },
                { "id": "c", "text": "Hyperkalemia", "isCorrect": true },
                { "id": "d", "text": "Hypomagnesemia", "isCorrect": false }
            ],
            "explanation": "Hyperkalemia affects the electrical conduction of the heart and can lead to ventricular tachycardia and cardiac arrest."
        },
        {
            "id": "comp-general-q2",
            "type": "image-based",
            "question": "Which of the following images represents a condition requiring immediate pain management and hydration?",
            "points": 1,
            "topicId": "topic-07-urolithiasis",
            "topicName": "Urolithiasis",
            "imageUrl": "assets/images/image-20251226-c66a17a3.jpeg",
            "imageAlt": "Image of kidney stones",
            "options": [
                { "id": "a", "text": "Image A (Polycystic Kidney)", "isCorrect": false },
                { "id": "b", "text": "Image B (Kidney Stones)", "isCorrect": true },
                { "id": "c", "text": "Image C (Tumor)", "isCorrect": false }
            ],
            "explanation": "The image shows kidney stones (renal calculi), which cause severe colic and require analgesia and fluids."
        }
    ]
});