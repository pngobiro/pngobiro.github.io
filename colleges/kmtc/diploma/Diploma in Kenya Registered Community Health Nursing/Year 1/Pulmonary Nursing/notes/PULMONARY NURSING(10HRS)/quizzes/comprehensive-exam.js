registerQuiz("comprehensive-exam", {
    "schemaVersion": "1.0",
    "quizId": "comprehensive-exam",
    "metadata": {
        "title": "Pulmonary Nursing Comprehensive Exam",
        "description": "A final assessment covering anatomy, pathophysiology, clinical manifestations, and nursing management of respiratory disorders.",
        "examType": "comprehensive",
        "topicsCovered": [
            "Anatomy & Physiology",
            "Pneumonia",
            "Pneumothorax",
            "Carcinoma",
            "Pleurisy",
            "COPD",
            "Asthma",
            "Bronchiectasis"
        ],
        "difficulty": "advanced",
        "estimatedTime": 60,
        "passingScore": 75,
        "createdAt": "2025-12-28T10:00:00Z",
        "tags": ["final", "nursing", "respiratory", "exam"]
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
        /* ========================================================================
           TOPIC 1: ANATOMY & PHYSIOLOGY
           ======================================================================== */
        {
            "id": "anat-q1",
            "type": "multiple-select",
            "question": "Which of the following structures are considered part of the Lower Respiratory Tract? (Select all that apply)",
            "points": 5,
            "topicId": "topic-01",
            "topicName": "Anatomy & Physiology",
            "options": [
                { "id": "a", "text": "Trachea", "isCorrect": true },
                { "id": "b", "text": "Pharynx", "isCorrect": false },
                { "id": "c", "text": "Larynx", "isCorrect": false },
                { "id": "d", "text": "Bronchi", "isCorrect": true },
                { "id": "e", "text": "Alveoli", "isCorrect": true }
            ],
            "explanation": "The lower respiratory tract consists of the trachea, bronchi, bronchioles, and alveoli (lungs). The pharynx and larynx are upper respiratory structures."
        },
        {
            "id": "anat-q2",
            "type": "true-false",
            "question": "The parietal pleura lines the surface of the lungs, while the visceral pleura lines the chest wall.",
            "points": 5,
            "topicId": "topic-01",
            "topicName": "Anatomy & Physiology",
            "correctAnswer": false,
            "explanation": "This statement is reversed. The visceral pleura covers the lungs, while the parietal pleura lines the chest wall and mediastinum."
        },
        {
            "id": "anat-q3",
            "type": "fill-blank",
            "question": "The primary muscle of respiration that separates the thoracic cavity from the abdominal cavity is the __b1__.",
            "points": 5,
            "topicId": "topic-01",
            "topicName": "Anatomy & Physiology",
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["diaphragm", "Diaphragm"], "caseSensitive": false }
            ],
            "explanation": "The diaphragm is the major muscle of respiration."
        },

        /* ========================================================================
           TOPIC 2: PNEUMONIA
           ======================================================================== */
        {
            "id": "pneu-q1",
            "type": "multiple-choice",
            "question": "A patient with pneumonia presents with a fever of 39.5°C, pleuritic chest pain, and rust-colored sputum. Which type of organism is most likely responsible?",
            "points": 10,
            "topicId": "topic-02",
            "topicName": "Pneumonia",
            "options": [
                { "id": "a", "text": "Virus", "isCorrect": false },
                { "id": "b", "text": "Staphylococcus aureus", "isCorrect": false },
                { "id": "c", "text": "Streptococcus pneumoniae", "isCorrect": true },
                { "id": "d", "text": "Mycoplasma", "isCorrect": false }
            ],
            "explanation": "Rust-colored sputum is a classic sign of pneumococcal pneumonia (Streptococcus pneumoniae)."
        },
        {
            "id": "pneu-q2",
            "type": "matching",
            "question": "Match the type of pneumonia with its description:",
            "points": 10,
            "topicId": "topic-02",
            "topicName": "Pneumonia",
            "pairs": [
                { "id": "p1", "left": "Community Acquired (CAP)", "right": "Occurs in community or within 48 hours of hospitalization" },
                { "id": "p2", "left": "Hospital Acquired (HAP)", "right": "Onset >48 hours after admission with no incubation at admission" },
                { "id": "p3", "left": "Aspiration Pneumonia", "right": "Caused by entry of endogenous or exogenous substances into lower airway" },
                { "id": "p4", "left": "Bronchopneumonia", "right": "Distributed in a patchy fashion extending from bronchi" }
            ]
        },
        {
            "id": "pneu-q3",
            "type": "multiple-select",
            "question": "Which of the following are appropriate nursing interventions for a patient with pneumonia to improve airway patency? (Select all that apply)",
            "points": 5,
            "topicId": "topic-02",
            "topicName": "Pneumonia",
            "options": [
                { "id": "a", "text": "Encourage fluid intake (2-3 L/day)", "isCorrect": true },
                { "id": "b", "text": "Keep the patient strictly flat in bed", "isCorrect": false },
                { "id": "c", "text": "Provide humidified air", "isCorrect": true },
                { "id": "d", "text": "Encourage effective coughing and deep breathing", "isCorrect": true },
                { "id": "e", "text": "Administer cough suppressants around the clock", "isCorrect": false }
            ],
            "explanation": "Fluids, humidity, and coughing help clear secretions. Semi-Fowler's position (not flat) aids breathing. Cough suppressants may hinder the clearance of secretions."
        },

        /* ========================================================================
           TOPIC 3: PNEUMOTHORAX
           ======================================================================== */
        {
            "id": "ptx-q1",
            "type": "multiple-choice",
            "question": "A patient arrives in the ER with severe respiratory distress, tracheal deviation to the left, and absent breath sounds on the right. What is the priority intervention?",
            "points": 10,
            "topicId": "topic-03",
            "topicName": "Pneumothorax",
            "options": [
                { "id": "a", "text": "Prepare for immediate chest x-ray", "isCorrect": false },
                { "id": "b", "text": "Needle decompression (thoracostomy)", "isCorrect": true },
                { "id": "c", "text": "Administer IV antibiotics", "isCorrect": false },
                { "id": "d", "text": "Intubate the patient", "isCorrect": false }
            ],
            "explanation": "These signs indicate a Tension Pneumothorax on the right side, a life-threatening emergency requiring immediate decompression before imaging."
        },
        {
            "id": "ptx-q2",
            "type": "fill-blank",
            "question": "A __b1__ pneumothorax occurs when air enters the pleural space through a ruptured bleb or blister on the lung surface in the absence of trauma.",
            "points": 5,
            "topicId": "topic-03",
            "topicName": "Pneumothorax",
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["spontaneous", "simple"], "caseSensitive": false }
            ],
            "explanation": "Spontaneous (or simple) pneumothorax occurs without external trauma, often due to ruptured blebs."
        },
        {
            "id": "ptx-q3",
            "type": "ordering",
            "question": "Arrange the management steps for a traumatic open pneumothorax (sucking chest wound) in the correct order:",
            "points": 10,
            "topicId": "topic-03",
            "topicName": "Pneumothorax",
            "items": [
                { "id": "i1", "text": "Instruct patient to inhale and strain against closed glottis", "correctPosition": 1 },
                { "id": "i2", "text": "Cover wound with sterile occlusive dressing (petroleum gauze)", "correctPosition": 2 },
                { "id": "i3", "text": "Tape dressing on three sides", "correctPosition": 3 },
                { "id": "i4", "text": "Prepare for chest tube insertion", "correctPosition": 4 }
            ]
        },

        /* ========================================================================
           TOPIC 4: CARCINOMA
           ======================================================================== */
        {
            "id": "ca-q1",
            "type": "multiple-choice",
            "question": "Which of the following is the most common symptom of lung cancer?",
            "points": 5,
            "topicId": "topic-04",
            "topicName": "Carcinoma",
            "options": [
                { "id": "a", "text": "Hemoptysis", "isCorrect": false },
                { "id": "b", "text": "Cough or change in chronic cough", "isCorrect": true },
                { "id": "c", "text": "Chest pain", "isCorrect": false },
                { "id": "d", "text": "Recurring fever", "isCorrect": false }
            ],
            "explanation": "A cough or a change in the character of a chronic cough is the most common early symptom of lung cancer."
        },
        {
            "id": "ca-q2",
            "type": "multiple-select",
            "question": "Which of the following are common sites for lung cancer metastasis? (Select all that apply)",
            "points": 5,
            "topicId": "topic-04",
            "topicName": "Carcinoma",
            "options": [
                { "id": "a", "text": "Brain", "isCorrect": true },
                { "id": "b", "text": "Liver", "isCorrect": true },
                { "id": "c", "text": "Adrenal glands", "isCorrect": true },
                { "id": "d", "text": "Bone", "isCorrect": true },
                { "id": "e", "text": "Spleen", "isCorrect": false }
            ],
            "explanation": "Lung cancer frequently metastasizes to the lymph nodes, bone, brain, contralateral lung, adrenal glands, and liver."
        },

        /* ========================================================================
           TOPIC 5: PLEURISY
           ======================================================================== */
        {
            "id": "plu-q1",
            "type": "multiple-choice",
            "question": "Which characteristic best describes the pain associated with pleurisy?",
            "points": 5,
            "topicId": "topic-05",
            "topicName": "Pleurisy",
            "options": [
                { "id": "a", "text": "Dull, aching pressure in the center of the chest", "isCorrect": false },
                { "id": "b", "text": "Sharp, knifelike pain intensified on inspiration", "isCorrect": true },
                { "id": "c", "text": "Burning sensation radiating to the back", "isCorrect": false },
                { "id": "d", "text": "Constant pain relieved by deep breathing", "isCorrect": false }
            ],
            "explanation": "Pleuritic pain is sharp and severe, worsening with inspiration, coughing, or sneezing due to friction between inflamed pleural layers."
        },
        {
            "id": "plu-q2",
            "type": "true-false",
            "question": "As pleural fluid accumulates (pleural effusion), the pleuritic pain often worsens due to increased pressure.",
            "points": 5,
            "topicId": "topic-05",
            "topicName": "Pleurisy",
            "correctAnswer": false,
            "explanation": "As fluid accumulates, it separates the inflamed pleural surfaces, which actually lessens the friction and pain, though shortness of breath may increase."
        },

        /* ========================================================================
           TOPIC 6: COPD & EMPHYSEMA
           ======================================================================== */
        {
            "id": "copd-q1",
            "type": "matching",
            "question": "Differentiate between the two main types of COPD:",
            "points": 10,
            "topicId": "topic-06",
            "topicName": "COPD",
            "pairs": [
                { "id": "p1", "left": "Chronic Bronchitis", "right": "Cough/sputum for 3 months in 2 consecutive years" },
                { "id": "p2", "left": "Emphysema", "right": "Abnormal distention of air spaces and alveolar destruction" },
                { "id": "p3", "left": "Panlobular Emphysema", "right": "Destruction of respiratory bronchiole, alveolar duct, and alveolus" },
                { "id": "p4", "left": "Centrilobular Emphysema", "right": "Pathologic changes mainly in the center of the secondary lobule" }
            ]
        },
        {
            "id": "copd-q2",
            "type": "fill-blank",
            "question": "Right-sided heart failure resulting from pulmonary hypertension in COPD patients is known as __b1__.",
            "points": 5,
            "topicId": "topic-06",
            "topicName": "COPD",
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["cor pulmonale"], "caseSensitive": false }
            ],
            "explanation": "Cor pulmonale is the hypertrophy of the right ventricle resulting from diseases affecting the function and/or structure of the lungs."
        },
        {
            "id": "copd-q3",
            "type": "multiple-choice",
            "question": "What is the primary goal of pursed-lip breathing for a patient with COPD?",
            "points": 5,
            "topicId": "topic-06",
            "topicName": "COPD",
            "options": [
                { "id": "a", "text": "To increase the respiratory rate", "isCorrect": false },
                { "id": "b", "text": "To strengthen the diaphragm", "isCorrect": false },
                { "id": "c", "text": "To prevent collapse of small airways and slow expiration", "isCorrect": true },
                { "id": "d", "text": "To clear secretions from the upper airway", "isCorrect": false }
            ],
            "explanation": "Pursed-lip breathing creates positive pressure that keeps airways open longer during expiration, preventing collapse and trapping of air."
        },

        /* ========================================================================
           TOPIC 7: ASTHMA
           ======================================================================== */
        {
            "id": "asth-q1",
            "type": "multiple-select",
            "question": "Which of the following are classic clinical manifestations of an asthma exacerbation? (Select all that apply)",
            "points": 5,
            "topicId": "topic-07",
            "topicName": "Asthma",
            "options": [
                { "id": "a", "text": "Wheezing on expiration", "isCorrect": true },
                { "id": "b", "text": "Pink, frothy sputum", "isCorrect": false },
                { "id": "c", "text": "Dyspnea", "isCorrect": true },
                { "id": "d", "text": "Chest tightness", "isCorrect": true },
                { "id": "e", "text": "Cough", "isCorrect": true }
            ],
            "explanation": "Cough, dyspnea, wheezing (expiratory first), and chest tightness are the hallmark symptoms of asthma."
        },
        {
            "id": "asth-q2",
            "type": "ordering",
            "question": "Prioritize the nursing interventions for a patient in Status Asthmaticus:",
            "points": 10,
            "topicId": "topic-07",
            "topicName": "Asthma",
            "items": [
                { "id": "i1", "text": "Administer high-flow supplemental oxygen", "correctPosition": 1 },
                { "id": "i2", "text": "Administer short-acting beta2-agonists (bronchodilators)", "correctPosition": 2 },
                { "id": "i3", "text": "Administer systemic corticosteroids", "correctPosition": 3 },
                { "id": "i4", "text": "Administer IV fluids for hydration", "correctPosition": 4 }
            ]
        },
        {
            "id": "asth-q3",
            "type": "true-false",
            "question": "During a severe asthma attack, the disappearance of wheezing always indicates that the patient is improving.",
            "points": 5,
            "topicId": "topic-07",
            "topicName": "Asthma",
            "correctAnswer": false,
            "explanation": "False. The disappearance of wheezing during a severe attack may indicate a 'silent chest' due to complete airway obstruction and impending respiratory failure."
        },

        /* ========================================================================
           TOPIC 8: OTHER CONDITIONS
           ======================================================================== */
        {
            "id": "other-q1",
            "type": "multiple-choice",
            "question": "Which diagnostic finding is most specific for Bronchiectasis?",
            "points": 5,
            "topicId": "topic-08",
            "topicName": "Bronchiectasis",
            "options": [
                { "id": "a", "text": "Positive sweat chloride test", "isCorrect": false },
                { "id": "b", "text": "Prolonged history of productive cough with negative TB sputum", "isCorrect": true },
                { "id": "c", "text": "Elevated white blood cell count", "isCorrect": false },
                { "id": "d", "text": "Hyperinflation on chest x-ray", "isCorrect": false }
            ],
            "explanation": "A prolonged history of productive cough with copious purulent sputum, consistently negative for TB, is a definite diagnostic clue."
        },
        {
            "id": "other-q2",
            "type": "fill-blank",
            "question": "Most cases of bronchiolitis in infants are caused by the __b1__ virus.",
            "points": 5,
            "topicId": "topic-08",
            "topicName": "Bronchiolitis",
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["Respiratory Syncytial", "RSV"], "caseSensitive": false }
            ],
            "explanation": "Respiratory Syncytial Virus (RSV) is the most common cause of bronchiolitis."
        },
        {
            "id": "other-q3",
            "type": "true-false",
            "question": "Antibiotics are the primary treatment for bronchiolitis.",
            "points": 5,
            "topicId": "topic-08",
            "topicName": "Bronchiolitis",
            "correctAnswer": false,
            "explanation": "Bronchiolitis is viral (mostly RSV), so antibiotics are ineffective and not recommended unless there is a secondary bacterial infection."
        },

        /* ========================================================================
           MIXED / INTEGRATED QUESTIONS
           ======================================================================== */
        {
            "id": "mixed-q1",
            "type": "multiple-choice",
            "question": "Which respiratory condition is characterized by destruction of alveolar walls and enlargement of air spaces?",
            "points": 5,
            "topicId": "topic-06",
            "topicName": "COPD",
            "options": [
                { "id": "a", "text": "Chronic Bronchitis", "isCorrect": false },
                { "id": "b", "text": "Asthma", "isCorrect": false },
                { "id": "c", "text": "Emphysema", "isCorrect": true },
                { "id": "d", "text": "Bronchiectasis", "isCorrect": false }
            ],
            "explanation": "Emphysema is defined by the destruction of alveolar walls and distention of air spaces."
        },
        {
            "id": "mixed-q2",
            "type": "matching",
            "question": "Match the sputum characteristic to the likely condition:",
            "points": 10,
            "topicId": "topic-02",
            "topicName": "Pneumonia",
            "pairs": [
                { "id": "p1", "left": "Rust-colored", "right": "Pneumococcal Pneumonia" },
                { "id": "p2", "left": "Copious, purulent (layered)", "right": "Bronchiectasis" },
                { "id": "p3", "left": "Green/viscous", "right": "Pseudomonas/Infection" },
                { "id": "p4", "left": "Blood-tinged/Frothy", "right": "Pulmonary Edema / Severe Inflammation" }
            ]
        },
        {
            "id": "mixed-q3",
            "type": "multiple-select",
            "question": "Select the conditions that are considered Chronic Obstructive Pulmonary Disorders (COPD) or related obstructive disorders. (Select all that apply)",
            "points": 5,
            "topicId": "topic-06",
            "topicName": "COPD",
            "options": [
                { "id": "a", "text": "Emphysema", "isCorrect": true },
                { "id": "b", "text": "Chronic Bronchitis", "isCorrect": true },
                { "id": "c", "text": "Asthma", "isCorrect": true },
                { "id": "d", "text": "Pneumonia", "isCorrect": false },
                { "id": "e", "text": "Cystic Fibrosis", "isCorrect": true }
            ],
            "explanation": "Emphysema and Chronic Bronchitis are the main COPDs. Asthma, Cystic Fibrosis, and Bronchiectasis are also classified as chronic obstructive disorders, though distinct from classic COPD."
        }
    ]
});