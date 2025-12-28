registerQuiz("comprehensive-exam", {
    "schemaVersion": "1.0",
    "quizId": "comprehensive-exam",
    "metadata": {
        "title": "Comprehensive Final Exam",
        "description": "Comprehensive assessment covering all 11 topics of Paediatric Nursing, from Growth & Development to HIV Management.",
        "examType": "comprehensive",
        "topicsCovered": [
            "topic-01", "topic-02", "topic-03", "topic-04", 
            "topic-05", "topic-06", "topic-07", "topic-08", 
            "topic-09", "topic-10", "topic-11"
        ],
        "difficulty": "advanced",
        "estimatedTime": 60,
        "passingScore": 75,
        "createdAt": "2025-12-28T10:00:00Z",
        "tags": ["final", "comprehensive", "paediatrics", "nursing"]
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
        /* --- Topic 01: Growth and Development --- */
        {
            "id": "t01-q1",
            "type": "fill-blank",
            "question": "The posterior fontanelle typically closes between __1__ to __2__ weeks of age.",
            "points": 1,
            "topicId": "topic-01",
            "topicName": "Growth & Development",
            "blanks": [
                { "id": "1", "acceptedAnswers": ["6"], "caseSensitive": false },
                { "id": "2", "acceptedAnswers": ["8"], "caseSensitive": false }
            ],
            "explanation": "Closure of cranial sutures occurs, with the posterior fontanelle fusing at 6 to 8 weeks."
        },
        {
            "id": "t01-q2",
            "type": "matching",
            "question": "Match the Erikson's Psychosocial Stage with the corresponding age group:",
            "points": 1,
            "topicId": "topic-01",
            "topicName": "Growth & Development",
            "pairs": [
                { "id": "p1", "left": "Infancy (0-1.5 yrs)", "right": "Trust vs. Mistrust" },
                { "id": "p2", "left": "Early Childhood (1.5-3 yrs)", "right": "Autonomy vs. Shame" },
                { "id": "p3", "left": "Play Age (3-5 yrs)", "right": "Initiative vs. Guilt" },
                { "id": "p4", "left": "School Age (5-12 yrs)", "right": "Industry vs. Inferiority" }
            ],
            "explanation": "Erikson's stages: Infancy (Trust), Early Childhood (Autonomy), Play Age (Initiative), School Age (Industry), Adolescence (Identity)."
        },
        {
            "id": "t01-q3",
            "type": "multiple-choice",
            "question": "Which term describes a child whose weight for age is below the 3rd percentile?",
            "points": 1,
            "topicId": "topic-01",
            "topicName": "Growth & Development",
            "options": [
                { "id": "a", "text": "Short Stature", "isCorrect": false },
                { "id": "b", "text": "Failure to Thrive", "isCorrect": true },
                { "id": "c", "text": "Microcephaly", "isCorrect": false },
                { "id": "d", "text": "Marasmus", "isCorrect": false }
            ],
            "explanation": "Failure to thrive is assigned to a child whose weight for age is below the 3rd percentile or crosses two major percentiles downward."
        },
        {
            "id": "t01-q4",
            "type": "multiple-choice",
            "question": "At what age does an infant typically develop a good pincer grasp?",
            "points": 1,
            "topicId": "topic-01",
            "topicName": "Growth & Development",
            "options": [
                { "id": "a", "text": "3 months", "isCorrect": false },
                { "id": "b", "text": "6 months", "isCorrect": false },
                { "id": "c", "text": "10 months", "isCorrect": true },
                { "id": "d", "text": "18 months", "isCorrect": false }
            ],
            "explanation": "An infant has a good pincer grip (thumb and first or second finger) of a small object at 10 months of age."
        },
        {
            "id": "t01-q5",
            "type": "true-false",
            "question": "By 1 year of age, an infant's birth weight has typically tripled.",
            "points": 1,
            "topicId": "topic-01",
            "topicName": "Growth & Development",
            "correctAnswer": true,
            "explanation": "The heart weight doubles by 1 year, whereas the body weight triples over the same period."
        },

        /* --- Topic 02: General Care --- */
        {
            "id": "t02-q1",
            "type": "multiple-choice",
            "question": "Which age group is most vulnerable to emotional distress from hospitalization?",
            "points": 1,
            "topicId": "topic-02",
            "topicName": "General Care",
            "options": [
                { "id": "a", "text": "Children below 5 years", "isCorrect": true },
                { "id": "b", "text": "School-age children (6-12 years)", "isCorrect": false },
                { "id": "c", "text": "Adolescents", "isCorrect": false },
                { "id": "d", "text": "Neonates only", "isCorrect": false }
            ],
            "explanation": "Children below the age of 5 years are more vulnerable to emotional distress from hospitalization."
        },
        {
            "id": "t02-q2",
            "type": "multiple-select",
            "question": "Which of the following are common parental reactions to a child's hospitalization? (Select all that apply)",
            "points": 1,
            "topicId": "topic-02",
            "topicName": "General Care",
            "options": [
                { "id": "a", "text": "Denial", "isCorrect": true },
                { "id": "b", "text": "Anger", "isCorrect": true },
                { "id": "c", "text": "Guilt", "isCorrect": true },
                { "id": "d", "text": "Complete acceptance immediately", "isCorrect": false }
            ],
            "explanation": "Parents may exhibit feelings such as denial, anger, depression, confusion, and guilt."
        },
        {
            "id": "t02-q3",
            "type": "short-answer",
            "question": "What hospital policy helps minimize separation anxiety by allowing parents to stay with the child?",
            "points": 1,
            "topicId": "topic-02",
            "topicName": "General Care",
            "keywords": ["rooming", "in", "rooming-in"],
            "minKeywords": 1,
            "modelAnswer": "Rooming-in",
            "explanation": "Rooming-in allows parents to stay with the child, minimizing separation anxiety."
        },
        {
            "id": "t02-q4",
            "type": "true-false",
            "question": "Siblings of a hospitalized child never experience jealousy or resentment.",
            "points": 1,
            "topicId": "topic-02",
            "topicName": "General Care",
            "correctAnswer": false,
            "explanation": "Siblings may experience jealousy, insecurity, resentment, confusion, and anxiety."
        },
        {
            "id": "t02-q5",
            "type": "multiple-choice",
            "question": "When a child's motor activity is restricted during hospitalization, what is a common behavioral response?",
            "points": 1,
            "topicId": "topic-02",
            "topicName": "General Care",
            "options": [
                { "id": "a", "text": "Deep sleep", "isCorrect": false },
                { "id": "b", "text": "Anger and hyperactivity", "isCorrect": true },
                { "id": "c", "text": "Excessive eating", "isCorrect": false },
                { "id": "d", "text": "Improved cooperation", "isCorrect": false }
            ],
            "explanation": "When a child's motor is restricted, anger and hyperactivity may result."
        },

        /* --- Topic 03: Respiratory --- */
        {
            "id": "t03-q1",
            "type": "multiple-choice",
            "question": "What is the classic description of the cough associated with Croup (Acute Laryngotracheobronchitis)?",
            "points": 1,
            "topicId": "topic-03",
            "topicName": "Respiratory",
            "options": [
                { "id": "a", "text": "Whooping", "isCorrect": false },
                { "id": "b", "text": "Barking or brassy", "isCorrect": true },
                { "id": "c", "text": "Productive with green sputum", "isCorrect": false },
                { "id": "d", "text": "Dry and hacking", "isCorrect": false }
            ],
            "explanation": "Croup is characterized by a resonant cough described as 'barking' or 'brassy'."
        },
        {
            "id": "t03-q2",
            "type": "multiple-select",
            "question": "Which of the following are Danger Signs in severe pneumonia? (Select all that apply)",
            "points": 1,
            "topicId": "topic-03",
            "topicName": "Respiratory",
            "options": [
                { "id": "a", "text": "Oxygen saturation < 90%", "isCorrect": true },
                { "id": "b", "text": "Central Cyanosis", "isCorrect": true },
                { "id": "c", "text": "Inability to drink/breastfeed", "isCorrect": true },
                { "id": "d", "text": "Fever of 37.5°C", "isCorrect": false }
            ],
            "explanation": "Danger signs include O2 sat <90%, cyanosis, inability to drink, AVPU changes, and grunting."
        },
        {
            "id": "t03-q3",
            "type": "true-false",
            "question": "Straws should be encouraged after a tonsillectomy to help the child drink fluids.",
            "points": 1,
            "topicId": "topic-03",
            "topicName": "Respiratory",
            "correctAnswer": false,
            "explanation": "Straws should be avoided as they can damage the surgical site and cause bleeding."
        },
        {
            "id": "t03-q4",
            "type": "fill-blank",
            "question": "The classic triad of asthma symptoms consists of cough, __1__, and __2__.",
            "points": 1,
            "topicId": "topic-03",
            "topicName": "Respiratory",
            "blanks": [
                { "id": "1", "acceptedAnswers": ["dyspnea", "breathlessness", "difficulty breathing"], "caseSensitive": false },
                { "id": "2", "acceptedAnswers": ["wheezing", "wheeze"], "caseSensitive": false }
            ],
            "explanation": "The classical triad of asthma is cough, dyspnea (breathlessness), and wheezing."
        },
        {
            "id": "t03-q5",
            "type": "multiple-choice",
            "question": "What is the primary management for a child with Otitis Media with Effusion lasting more than 3-4 months with hearing loss?",
            "points": 1,
            "topicId": "topic-03",
            "topicName": "Respiratory",
            "options": [
                { "id": "a", "text": "Immediate Tonsillectomy", "isCorrect": false },
                { "id": "b", "text": "Tympanoplasty (Myringotomy)", "isCorrect": true },
                { "id": "c", "text": "Long-term steroids", "isCorrect": false },
                { "id": "d", "text": "Hearing aids", "isCorrect": false }
            ],
            "explanation": "Tympanoplasty (myringotomy) is indicated if effusion lasts >3-4 months associated with hearing loss."
        },

        /* --- Topic 04: Cardiovascular --- */
        {
            "id": "t04-q1",
            "type": "fill-blank",
            "question": "Rheumatic fever occurs after an infection caused by Group __1__ Beta hemolytic __2__.",
            "points": 1,
            "topicId": "topic-04",
            "topicName": "Cardiovascular",
            "blanks": [
                { "id": "1", "acceptedAnswers": ["A"], "caseSensitive": false },
                { "id": "2", "acceptedAnswers": ["streptococci", "streptococcus", "strep"], "caseSensitive": false }
            ],
            "explanation": "Rheumatic fever occurs after pharyngitis caused by Group A beta hemolytic streptococci."
        },
        {
            "id": "t04-q2",
            "type": "matching",
            "question": "Match the Rheumatic Fever manifestation with its description:",
            "points": 1,
            "topicId": "topic-04",
            "topicName": "Cardiovascular",
            "pairs": [
                { "id": "p1", "left": "Chorea", "right": "Sudden aimless, irregular movements" },
                { "id": "p2", "left": "Erythema Marginatum", "right": "Reddish, macular, non-itching rash" },
                { "id": "p3", "left": "Polyarthritis", "right": "Migratory swelling of large joints" },
                { "id": "p4", "left": "Subcutaneous Nodules", "right": "Small, non-tender swellings on bony prominences" }
            ],
            "explanation": "These are the major manifestations of Rheumatic Fever."
        },
        {
            "id": "t04-q3",
            "type": "multiple-choice",
            "question": "What is the recommended duration for secondary prophylaxis with penicillin in Rheumatic Fever?",
            "points": 1,
            "topicId": "topic-04",
            "topicName": "Cardiovascular",
            "options": [
                { "id": "a", "text": "1 year", "isCorrect": false },
                { "id": "b", "text": "5 years", "isCorrect": false },
                { "id": "c", "text": "At least 10 years", "isCorrect": true },
                { "id": "d", "text": "Life long for everyone", "isCorrect": false }
            ],
            "explanation": "Secondary prophylaxis is done for at least 10 years or more."
        },
        {
            "id": "t04-q4",
            "type": "multiple-choice",
            "question": "Which term describes a red blood cell that is larger than normal?",
            "points": 1,
            "topicId": "topic-04",
            "topicName": "Cardiovascular",
            "options": [
                { "id": "a", "text": "Microcyte", "isCorrect": false },
                { "id": "b", "text": "Normocyte", "isCorrect": false },
                { "id": "c", "text": "Macrocyte", "isCorrect": true },
                { "id": "d", "text": "Spherocyte", "isCorrect": false }
            ],
            "explanation": "Macrocytes are larger than normal RBCs."
        },
        {
            "id": "t04-q5",
            "type": "multiple-select",
            "question": "Which of the following are clinical manifestations of anaemia? (Select all that apply)",
            "points": 1,
            "topicId": "topic-04",
            "topicName": "Cardiovascular",
            "options": [
                { "id": "a", "text": "Pallor", "isCorrect": true },
                { "id": "b", "text": "Tachycardia", "isCorrect": true },
                { "id": "c", "text": "Fatigue", "isCorrect": true },
                { "id": "d", "text": "Bradycardia", "isCorrect": false }
            ],
            "explanation": "Signs include pallor, tachycardia, fatigue, muscle weakness, and systolic murmurs."
        },

        /* --- Topic 05: GI & Renal --- */
        {
            "id": "t05-q1",
            "type": "multiple-choice",
            "question": "What is the recommended IV fluid for treating severe dehydration (Plan C) in children?",
            "points": 1,
            "topicId": "topic-05",
            "topicName": "GI & Renal",
            "options": [
                { "id": "a", "text": "Normal Saline", "isCorrect": false },
                { "id": "b", "text": "Ringer's Lactate", "isCorrect": true },
                { "id": "c", "text": "50% Dextrose", "isCorrect": false },
                { "id": "d", "text": "Plain Water", "isCorrect": false }
            ],
            "explanation": "Ringer's Lactate (20 mls/kg bolus) is the fluid of choice for shock/severe dehydration."
        },
        {
            "id": "t05-q2",
            "type": "multiple-select",
            "question": "Which features characterize Nephrotic Syndrome? (Select all that apply)",
            "points": 1,
            "topicId": "topic-05",
            "topicName": "GI & Renal",
            "options": [
                { "id": "a", "text": "Massive Proteinuria", "isCorrect": true },
                { "id": "b", "text": "Hypoalbuminemia", "isCorrect": true },
                { "id": "c", "text": "Gross Hematuria", "isCorrect": false },
                { "id": "d", "text": "Edema", "isCorrect": true }
            ],
            "explanation": "Nephrotic syndrome is defined as massive proteinuria, hypoalbuminemia, hyperlipidemia, and edema."
        },
        {
            "id": "t05-q3",
            "type": "true-false",
            "question": "Acute Glomerulonephritis is often characterized by 'smoky' or tea-colored urine.",
            "points": 1,
            "topicId": "topic-05",
            "topicName": "GI & Renal",
            "correctAnswer": true,
            "explanation": "Hematuria in AGN often presents as tea-colored, cola-colored, or smoky urine."
        },
        {
            "id": "t05-q4",
            "type": "short-answer",
            "question": "Which organism is the most common cause of Urinary Tract Infections (UTI)?",
            "points": 1,
            "topicId": "topic-05",
            "topicName": "GI & Renal",
            "keywords": ["e. coli", "escherichia coli", "ecoli"],
            "minKeywords": 1,
            "modelAnswer": "Escherichia coli (E. coli)",
            "explanation": "E. coli causes about 80% of UTIs."
        },
        {
            "id": "t05-q5",
            "type": "multiple-choice",
            "question": "Which signs indicate Meningococcal Meningitis in an infant?",
            "points": 1,
            "topicId": "topic-05",
            "topicName": "GI & Renal",
            "options": [
                { "id": "a", "text": "Depressed fontanelle", "isCorrect": false },
                { "id": "b", "text": "Bulging fontanelle and high-pitched cry", "isCorrect": true },
                { "id": "c", "text": "Polyuria", "isCorrect": false },
                { "id": "d", "text": "Voracious appetite", "isCorrect": false }
            ],
            "explanation": "Infants with meningitis often present with a bulging fontanelle, irritability, and a high-pitched cry."
        },

        /* --- Topic 06: Nutrition --- */
        {
            "id": "t06-q1",
            "type": "matching",
            "question": "Match the type of malnutrition with its primary characteristic:",
            "points": 1,
            "topicId": "topic-06",
            "topicName": "Nutrition",
            "pairs": [
                { "id": "p1", "left": "Kwashiorkor", "right": "Edema and fatty liver" },
                { "id": "p2", "left": "Marasmus", "right": "Severe wasting/emaciation" },
                { "id": "p3", "left": "Marasmic Kwashiorkor", "right": "Combined wasting and edema" }
            ],
            "explanation": "Kwashiorkor = Protein deficiency (Edema). Marasmus = Calorie+Protein deficiency (Wasting)."
        },
        {
            "id": "t06-q2",
            "type": "true-false",
            "question": "Iron supplementation should be started immediately during the stabilization phase (Step 1) of malnutrition treatment.",
            "points": 1,
            "topicId": "topic-06",
            "topicName": "Nutrition",
            "correctAnswer": false,
            "explanation": "Iron should ONLY be given when the child is gaining weight (Rehab phase) as it can worsen infection in the acute phase."
        },
        {
            "id": "t06-q3",
            "type": "multiple-choice",
            "question": "Which deficiency is associated with skin ulceration and diarrhea in malnutrition?",
            "points": 1,
            "topicId": "topic-06",
            "topicName": "Nutrition",
            "options": [
                { "id": "a", "text": "Vitamin C", "isCorrect": false },
                { "id": "b", "text": "Zinc", "isCorrect": true },
                { "id": "c", "text": "Calcium", "isCorrect": false },
                { "id": "d", "text": "Iodine", "isCorrect": false }
            ],
            "explanation": "Acute zinc deficiency results in skin rashes/ulceration, impaired immune response, and digestive problems."
        },
        {
            "id": "t06-q4",
            "type": "fill-blank",
            "question": "The therapeutic milk used for the initial stabilization phase of severe malnutrition is __1__.",
            "points": 1,
            "topicId": "topic-06",
            "topicName": "Nutrition",
            "blanks": [
                { "id": "1", "acceptedAnswers": ["F75", "F-75"], "caseSensitive": false }
            ],
            "explanation": "F75 is used in the acute/stabilization phase. F100 or RUTF is used for rehabilitation."
        },
        {
            "id": "t06-q5",
            "type": "multiple-choice",
            "question": "What is the cut-off for Severe Acute Malnutrition using MUAC?",
            "points": 1,
            "topicId": "topic-06",
            "topicName": "Nutrition",
            "options": [
                { "id": "a", "text": "< 13.5 cm", "isCorrect": false },
                { "id": "b", "text": "< 12.5 cm", "isCorrect": false },
                { "id": "c", "text": "< 11.5 cm", "isCorrect": true },
                { "id": "d", "text": "< 10.0 cm", "isCorrect": false }
            ],
            "explanation": "Severe malnutrition is defined as MUAC < 11.5 cm."
        },

        /* --- Topic 07: Malignancies --- */
        {
            "id": "t07-q1",
            "type": "multiple-choice",
            "question": "What is the most critical nursing precaution when caring for a child with Wilm's tumor?",
            "points": 1,
            "topicId": "topic-07",
            "topicName": "Malignancies",
            "options": [
                { "id": "a", "text": "Keep NPO", "isCorrect": false },
                { "id": "b", "text": "Do not palpate the abdomen", "isCorrect": true },
                { "id": "c", "text": "Encourage vigorous play", "isCorrect": false },
                { "id": "d", "text": "Isolate the child", "isCorrect": false }
            ],
            "explanation": "Do not palpate the tumor unless necessary as it may cause dissemination of cancer cells."
        },
        {
            "id": "t07-q2",
            "type": "short-answer",
            "question": "Which virus is strongly associated with Endemic Burkitt's Lymphoma in Africa?",
            "points": 1,
            "topicId": "topic-07",
            "topicName": "Malignancies",
            "keywords": ["epstein", "barr", "ebv"],
            "minKeywords": 1,
            "modelAnswer": "Epstein-Barr Virus (EBV)",
            "explanation": "About 98% of African cases are associated with Epstein Barr infection."
        },
        {
            "id": "t07-q3",
            "type": "multiple-choice",
            "question": "What is the characteristic symptom of Tetanus involving the jaw muscles?",
            "points": 1,
            "topicId": "topic-07",
            "topicName": "Malignancies",
            "options": [
                { "id": "a", "text": "Opisthotonus", "isCorrect": false },
                { "id": "b", "text": "Trismus (Lockjaw)", "isCorrect": true },
                { "id": "c", "text": "Risus sardonicus", "isCorrect": false },
                { "id": "d", "text": "Ataxia", "isCorrect": false }
            ],
            "explanation": "Difficulty in opening the mouth is called trismus or lockjaw."
        },
        {
            "id": "t07-q4",
            "type": "multiple-choice",
            "question": "Which drug is used to control seizures and muscle relaxation in Tetanus?",
            "points": 1,
            "topicId": "topic-07",
            "topicName": "Malignancies",
            "options": [
                { "id": "a", "text": "Paracetamol", "isCorrect": false },
                { "id": "b", "text": "Diazepam", "isCorrect": true },
                { "id": "c", "text": "Amoxicillin", "isCorrect": false },
                { "id": "d", "text": "Frusemide", "isCorrect": false }
            ],
            "explanation": "Diazepam is the drug of choice for seizure control and muscle relaxation in Tetanus."
        },
        {
            "id": "t07-q5",
            "type": "image-based",
            "question": "Identify the condition shown in this image (Rigid posture in neonate):",
            "points": 1,
            "topicId": "topic-07",
            "topicName": "Malignancies",
            "media": {
                "type": "image",
                "url": "assets/images/image-20251228-f30357b5.jpeg",
                "alt": "Neonate with rigid posture and clenched hands"
            },
            "options": [
                { "id": "a", "text": "Neonatal Tetanus", "isCorrect": true },
                { "id": "b", "text": "Meningitis", "isCorrect": false },
                { "id": "c", "text": "Cerebral Palsy", "isCorrect": false },
                { "id": "d", "text": "Hypoglycemia", "isCorrect": false }
            ],
            "explanation": "The image shows characteristic rigidity (opisthotonus, clenched hands) of neonatal tetanus."
        },

        /* --- Topic 08: Congenital Anomalies --- */
        {
            "id": "t08-q1",
            "type": "multiple-choice",
            "question": "What is the classic 'triad' of symptoms for Esophageal Atresia/TEF (The 3 C's)?",
            "points": 1,
            "topicId": "topic-08",
            "topicName": "Congenital Anomalies",
            "options": [
                { "id": "a", "text": "Crying, Colic, Constipation", "isCorrect": false },
                { "id": "b", "text": "Choking, Coughing, Cyanosis", "isCorrect": true },
                { "id": "c", "text": "Convulsions, Coma, Confusion", "isCorrect": false },
                { "id": "d", "text": "Cyanosis, Clubbing, Crackles", "isCorrect": false }
            ],
            "explanation": "The 3 C's are Choking, Coughing, and Cyanosis, especially during feeding."
        },
        {
            "id": "t08-q2",
            "type": "multiple-choice",
            "question": "A palpable 'olive-like' mass in the right upper quadrant is diagnostic of:",
            "points": 1,
            "topicId": "topic-08",
            "topicName": "Congenital Anomalies",
            "options": [
                { "id": "a", "text": "Intussusception", "isCorrect": false },
                { "id": "b", "text": "Wilm's Tumor", "isCorrect": false },
                { "id": "c", "text": "Hypertrophic Pyloric Stenosis", "isCorrect": true },
                { "id": "d", "text": "Appendicitis", "isCorrect": false }
            ],
            "explanation": "Palpation of the hard muscle mass or 'olive' is diagnostic for Pyloric Stenosis."
        },
        {
            "id": "t08-q3",
            "type": "fill-blank",
            "question": "Hirschsprung’s disease is characterized by the absence of __1__ cells in the distal bowel.",
            "points": 1,
            "topicId": "topic-08",
            "topicName": "Congenital Anomalies",
            "blanks": [
                { "id": "1", "acceptedAnswers": ["ganglion", "ganglionic"], "caseSensitive": false }
            ],
            "explanation": "It is an aganglionic megacolon caused by the absence of parasympathetic ganglion cells."
        },
        {
            "id": "t08-q4",
            "type": "matching",
            "question": "Distinguish between Omphalocele and Gastroschisis:",
            "points": 1,
            "topicId": "topic-08",
            "topicName": "Congenital Anomalies",
            "pairs": [
                { "id": "p1", "left": "Omphalocele", "right": "Covered by a sac/membrane" },
                { "id": "p2", "left": "Gastroschisis", "right": "No sac, exposed bowel" }
            ],
            "explanation": "Omphalocele has a sac (amnion/peritoneum); Gastroschisis involves exposed viscera usually to the right of the umbilicus."
        },
        {
            "id": "t08-q5",
            "type": "multiple-choice",
            "question": "Supplementation with which nutrient significantly reduces the risk of Neural Tube Defects?",
            "points": 1,
            "topicId": "topic-08",
            "topicName": "Congenital Anomalies",
            "options": [
                { "id": "a", "text": "Vitamin C", "isCorrect": false },
                { "id": "b", "text": "Iron", "isCorrect": false },
                { "id": "c", "text": "Folic Acid", "isCorrect": true },
                { "id": "d", "text": "Calcium", "isCorrect": false }
            ],
            "explanation": "Folic acid supplementation preconception and during early pregnancy prevents Spina Bifida."
        },

        /* --- Topic 09: Neurology --- */
        {
            "id": "t09-q1",
            "type": "multiple-choice",
            "question": "What is the definition of Status Epilepticus?",
            "points": 1,
            "topicId": "topic-09",
            "topicName": "Neurology",
            "options": [
                { "id": "a", "text": "Seizure lasting > 5 minutes", "isCorrect": false },
                { "id": "b", "text": "Seizure lasting > 30 minutes", "isCorrect": true },
                { "id": "c", "text": "Any febrile seizure", "isCorrect": false },
                { "id": "d", "text": "Two seizures in one day", "isCorrect": false }
            ],
            "explanation": "Status epilepticus is a continuous seizure lasting more than 30 minutes or a series without regaining consciousness."
        },
        {
            "id": "t09-q2",
            "type": "matching",
            "question": "Match the seizure phase with its description:",
            "points": 1,
            "topicId": "topic-09",
            "topicName": "Neurology",
            "pairs": [
                { "id": "p1", "left": "Tonic", "right": "Generalized stiffness, eyes roll up" },
                { "id": "p2", "left": "Clonic", "right": "Intense jerking movements" },
                { "id": "p3", "left": "Post-ictal", "right": "Semiconscious, difficult to arouse" }
            ],
            "explanation": "Tonic = stiffening; Clonic = jerking; Post-ictal = recovery/sleep."
        },
        {
            "id": "t09-q3",
            "type": "multiple-choice",
            "question": "Which of the following describes a 'Febrile Seizure'?",
            "points": 1,
            "topicId": "topic-09",
            "topicName": "Neurology",
            "options": [
                { "id": "a", "text": "Seizure with temp > 38°C in child < 6 years", "isCorrect": true },
                { "id": "b", "text": "Seizure with temp > 38°C in adult", "isCorrect": false },
                { "id": "c", "text": "Seizure caused by meningitis", "isCorrect": false },
                { "id": "d", "text": "Afebrile seizure in an infant", "isCorrect": false }
            ],
            "explanation": "Febrile seizures occur in children < 6 yr with temp > 38°C and no CNS infection."
        },
        {
            "id": "t09-q4",
            "type": "true-false",
            "question": "During a seizure, you should put a spoon or object in the child's mouth to prevent tongue biting.",
            "points": 1,
            "topicId": "topic-09",
            "topicName": "Neurology",
            "correctAnswer": false,
            "explanation": "Never put objects in the mouth during a seizure; it can cause injury or airway obstruction."
        },
        {
            "id": "t09-q5",
            "type": "multiple-choice",
            "question": "Which sign is characteristic of Hydrocephalus in an infant?",
            "points": 1,
            "topicId": "topic-09",
            "topicName": "Neurology",
            "options": [
                { "id": "a", "text": "Sunken fontanelle", "isCorrect": false },
                { "id": "b", "text": "Sunset eyes and bulging fontanelle", "isCorrect": true },
                { "id": "c", "text": "Microcephaly", "isCorrect": false },
                { "id": "d", "text": "Hypotension", "isCorrect": false }
            ],
            "explanation": "Signs include bulging fontanelle, sunset eyes (sclera visible above iris), and high-pitched cry."
        },

        /* --- Topic 10: Poisoning --- */
        {
            "id": "t10-q1",
            "type": "short-answer",
            "question": "What is the specific antidote for Acetaminophen (Paracetamol) poisoning?",
            "points": 1,
            "topicId": "topic-10",
            "topicName": "Poisoning",
            "keywords": ["n-acetylcysteine", "acetylcysteine", "nac"],
            "minKeywords": 1,
            "modelAnswer": "N-acetylcysteine",
            "explanation": "N-acetylcysteine prevents hepatotoxicity if given early."
        },
        {
            "id": "t10-q2",
            "type": "multiple-choice",
            "question": "Why is inducing vomiting contraindicated in hydrocarbon (e.g., kerosene) ingestion?",
            "points": 1,
            "topicId": "topic-10",
            "topicName": "Poisoning",
            "options": [
                { "id": "a", "text": "It causes diarrhea", "isCorrect": false },
                { "id": "b", "text": "It increases risk of aspiration pneumonia", "isCorrect": true },
                { "id": "c", "text": "It neutralizes the poison", "isCorrect": false },
                { "id": "d", "text": "It causes liver failure", "isCorrect": false }
            ],
            "explanation": "Aspiration of hydrocarbons causes severe chemical pneumonia."
        },
        {
            "id": "t10-q3",
            "type": "multiple-choice",
            "question": "The 'SLUDGE' mnemonic (Salivation, Lacrimation, Urination, Diarrhea) is associated with which poisoning?",
            "points": 1,
            "topicId": "topic-10",
            "topicName": "Poisoning",
            "options": [
                { "id": "a", "text": "Carbon Monoxide", "isCorrect": false },
                { "id": "b", "text": "Organophosphates", "isCorrect": true },
                { "id": "c", "text": "Lead", "isCorrect": false },
                { "id": "d", "text": "Aspirin", "isCorrect": false }
            ],
            "explanation": "Organophosphates inhibit cholinesterase causing a cholinergic toxidrome (SLUDGE)."
        },
        {
            "id": "t10-q4",
            "type": "multiple-choice",
            "question": "Which drug is used to treat the neuromuscular symptoms of organophosphate poisoning?",
            "points": 1,
            "topicId": "topic-10",
            "topicName": "Poisoning",
            "options": [
                { "id": "a", "text": "Atropine", "isCorrect": false },
                { "id": "b", "text": "Pralidoxime (2-PAM)", "isCorrect": true },
                { "id": "c", "text": "Naloxone", "isCorrect": false },
                { "id": "d", "text": "Vitamin K", "isCorrect": false }
            ],
            "explanation": "Atropine treats muscarinic effects; Pralidoxime treats neuromuscular effects."
        },
        {
            "id": "t10-q5",
            "type": "multiple-choice",
            "question": "Long-term complication of Lead poisoning in children primarily affects which system?",
            "points": 1,
            "topicId": "topic-10",
            "topicName": "Poisoning",
            "options": [
                { "id": "a", "text": "Respiratory", "isCorrect": false },
                { "id": "b", "text": "Cardiovascular", "isCorrect": false },
                { "id": "c", "text": "Neurological / Cognitive", "isCorrect": true },
                { "id": "d", "text": "Dermatological", "isCorrect": false }
            ],
            "explanation": "Lead poisoning commonly results in cognitive deficits and encephalopathy."
        },

        /* --- Topic 11: HIV --- */
        {
            "id": "t11-q1",
            "type": "multiple-choice",
            "question": "What is the recommended test for HIV diagnosis in infants < 18 months?",
            "points": 1,
            "topicId": "topic-11",
            "topicName": "Paediatric HIV",
            "options": [
                { "id": "a", "text": "Rapid Antibody Test", "isCorrect": false },
                { "id": "b", "text": "HIV DNA PCR", "isCorrect": true },
                { "id": "c", "text": "ELISA", "isCorrect": false },
                { "id": "d", "text": "Western Blot", "isCorrect": false }
            ],
            "explanation": "Antibody tests are not reliable due to maternal antibodies; DNA PCR is required."
        },
        {
            "id": "t11-q2",
            "type": "multiple-choice",
            "question": "At what age should Co-trimoxazole prophylaxis be started for HIV exposed infants?",
            "points": 1,
            "topicId": "topic-11",
            "topicName": "Paediatric HIV",
            "options": [
                { "id": "a", "text": "Birth", "isCorrect": false },
                { "id": "b", "text": "6 weeks", "isCorrect": true },
                { "id": "c", "text": "6 months", "isCorrect": false },
                { "id": "d", "text": "1 year", "isCorrect": false }
            ],
            "explanation": "All HIV exposed/infected infants should start CTX prophylaxis from age 6 weeks."
        },
        {
            "id": "t11-q3",
            "type": "multiple-choice",
            "question": "According to WHO staging, Pneumocystis Pneumonia (PCP) is classified as:",
            "points": 1,
            "topicId": "topic-11",
            "topicName": "Paediatric HIV",
            "options": [
                { "id": "a", "text": "Stage I", "isCorrect": false },
                { "id": "b", "text": "Stage II", "isCorrect": false },
                { "id": "c", "text": "Stage III", "isCorrect": false },
                { "id": "d", "text": "Stage IV", "isCorrect": true }
            ],
            "explanation": "PCP, Kaposi's sarcoma, and severe wasting are Stage IV (AIDS) defining conditions."
        },
        {
            "id": "t11-q4",
            "type": "fill-blank",
            "question": "Infant Nevirapine prophylaxis should be initiated immediately and continued for __1__ weeks.",
            "points": 1,
            "topicId": "topic-11",
            "topicName": "Paediatric HIV",
            "blanks": [
                { "id": "1", "acceptedAnswers": ["12"], "caseSensitive": false }
            ],
            "explanation": "Immediate initiate Nevirapine (NVP) prophylaxis for 12 weeks."
        },
        {
            "id": "t11-q5",
            "type": "true-false",
            "question": "If an infant's initial PCR test is positive, ART should be started immediately without waiting for confirmatory results.",
            "points": 1,
            "topicId": "topic-11",
            "topicName": "Paediatric HIV",
            "correctAnswer": true,
            "explanation": "A newborn with a positive HIV DNA PCR is presumed HIV positive and should be started on ART immediately while taking a confirmatory sample."
        }
    ]
});