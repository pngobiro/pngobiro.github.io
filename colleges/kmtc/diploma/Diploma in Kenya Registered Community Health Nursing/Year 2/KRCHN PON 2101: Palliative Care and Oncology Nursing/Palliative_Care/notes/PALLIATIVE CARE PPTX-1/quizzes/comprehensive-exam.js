
registerQuiz("comprehensive-exam", {
    "schemaVersion": "1.0",
    "quizId": "comprehensive-exam",
    "metadata": {
        "title": "Comprehensive Final Exam",
        "description": "Cumulative assessment covering all modules of the Palliative Care course, from fundamentals to last offices.",
        "examType": "comprehensive",
        "topicsCovered": [
            "topic-01",
            "topic-02",
            "topic-03",
            "topic-04",
            "topic-05",
            "topic-06",
            "topic-07",
            "topic-08"
        ],
        "difficulty": "advanced",
        "estimatedTime": 60,
        "passingScore": 75,
        "createdAt": "2025-12-27T12:00:00Z",
        "tags": ["final", "exam", "certification"]
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
        // TOPIC 01: INTRODUCTION
        {
            "id": "comp-t01-q01",
            "type": "multiple-choice",
            "question": "According to the WHO (2002) definition, which of the following is a primary goal of palliative care?",
            "points": 4,
            "topicId": "topic-01",
            "topicName": "Introduction & Fundamentals",
            "options": [
                { "id": "a", "text": "To cure the underlying disease at all costs", "isCorrect": false },
                { "id": "b", "text": "To improve quality of life through prevention and relief of suffering", "isCorrect": true },
                { "id": "c", "text": "To hasten the dying process to relieve pain", "isCorrect": false },
                { "id": "d", "text": "To postpone death using all available life-support systems", "isCorrect": false }
            ],
            "explanation": "Palliative care improves quality of life through prevention and relief of suffering. It intends neither to hasten nor postpone death."
        },
        {
            "id": "comp-t01-q02",
            "type": "true-false",
            "question": "Palliative care affirms life and regards dying as a normal process.",
            "points": 2,
            "topicId": "topic-01",
            "topicName": "Introduction & Fundamentals",
            "correctAnswer": true,
            "explanation": "One of the core principles is affirming life and regarding dying as a normal process."
        },

        // TOPIC 02: ETHICS
        {
            "id": "comp-t02-q01",
            "type": "multiple-choice",
            "question": "Which ethical principle refers to the patient's right to self-rule and making their own decisions?",
            "points": 4,
            "topicId": "topic-02",
            "topicName": "Ethical & Legal Aspects",
            "options": [
                { "id": "a", "text": "Beneficence", "isCorrect": false },
                { "id": "b", "text": "Non-maleficence", "isCorrect": false },
                { "id": "c", "text": "Autonomy", "isCorrect": true },
                { "id": "d", "text": "Justice", "isCorrect": false }
            ],
            "explanation": "Autonomy means self-rule and promotes the individual's right to make his/her own decisions."
        },
        {
            "id": "comp-t02-q02",
            "type": "fill-blank",
            "question": "The ethical principle of __b1__ means 'to do no harm'.",
            "points": 4,
            "topicId": "topic-02",
            "topicName": "Ethical & Legal Aspects",
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["non-maleficence", "non maleficence", "nonmaleficence"], "caseSensitive": false }
            ],
            "explanation": "Non-maleficence is the obligation of a physician not to harm the patient."
        },

        // TOPIC 03: SYMPTOMS
        {
            "id": "comp-t03-q01",
            "type": "true-false",
            "question": "Cachexia can be reversed by forced feeding and hydration.",
            "points": 2,
            "topicId": "topic-03",
            "topicName": "Symptom Management",
            "correctAnswer": false,
            "explanation": "Cachexia is not associated with hunger or thirst, nor will it improve by forced feeding and hydration."
        },
        {
            "id": "comp-t03-q02",
            "type": "multiple-choice",
            "question": "Which drug is recommended for the management of confusion or delirium in palliative care?",
            "points": 4,
            "topicId": "topic-03",
            "topicName": "Symptom Management",
            "options": [
                { "id": "a", "text": "Furosemide", "isCorrect": false },
                { "id": "b", "text": "Haloperidol", "isCorrect": true },
                { "id": "c", "text": "Bisacodyl", "isCorrect": false },
                { "id": "d", "text": "Dexamethasone", "isCorrect": false }
            ],
            "explanation": "Haloperidol (0.5-5mg) is used for confusion/delirium management."
        },

        // TOPIC 04: PAIN
        {
            "id": "comp-t04-q01",
            "type": "multiple-select",
            "question": "Select the four components of 'Total Pain':",
            "points": 4,
            "topicId": "topic-04",
            "topicName": "Pain Management",
            "options": [
                { "id": "a", "text": "Physical", "isCorrect": true },
                { "id": "b", "text": "Environmental", "isCorrect": false },
                { "id": "c", "text": "Psychological", "isCorrect": true },
                { "id": "d", "text": "Social", "isCorrect": true },
                { "id": "e", "text": "Spiritual", "isCorrect": true },
                { "id": "f", "text": "Financial", "isCorrect": false }
            ],
            "explanation": "Total Pain includes Physical, Social, Psychological, and Spiritual components."
        },
        {
            "id": "comp-t04-q02",
            "type": "matching",
            "question": "Match the WHO Analgesic Ladder step to the appropriate medication class:",
            "points": 6,
            "topicId": "topic-04",
            "topicName": "Pain Management",
            "pairs": [
                { "id": "p1", "left": "Step 1 (Mild Pain)", "right": "Non-opioids (Aspirin, Paracetamol)" },
                { "id": "p2", "left": "Step 2 (Moderate Pain)", "right": "Weak Opioids (Codeine, Tramadol)" },
                { "id": "p3", "left": "Step 3 (Severe Pain)", "right": "Strong Opioids (Morphine, Fentanyl)" }
            ],
            "explanation": "Step 1: Non-opioids; Step 2: Weak opioids + adjuvants; Step 3: Strong opioids."
        },
        {
            "id": "comp-t04-q03",
            "type": "multiple-choice",
            "question": "How is neuropathic pain typically described by patients?",
            "points": 4,
            "topicId": "topic-04",
            "topicName": "Pain Management",
            "options": [
                { "id": "a", "text": "Aching and throbbing", "isCorrect": false },
                { "id": "b", "text": "Burning, shooting, or electric", "isCorrect": true },
                { "id": "c", "text": "Cramping and colicky", "isCorrect": false },
                { "id": "d", "text": "Dull and pressure-like", "isCorrect": false }
            ],
            "explanation": "Neuropathic pain is described as burning, tingling, numbness, shooting, stabbing, or electric."
        },

        // TOPIC 05: END OF LIFE
        {
            "id": "comp-t05-q01",
            "type": "multiple-choice",
            "question": "Which medication is indicated for the management of 'Death Rattle' (excessive secretions)?",
            "points": 4,
            "topicId": "topic-05",
            "topicName": "End of Life Care",
            "options": [
                { "id": "a", "text": "Morphine", "isCorrect": false },
                { "id": "b", "text": "Hyoscine Butylbromide", "isCorrect": true },
                { "id": "c", "text": "Diazepam", "isCorrect": false },
                { "id": "d", "text": "Haloperidol", "isCorrect": false }
            ],
            "explanation": "Hyoscine Butylbromide (20mg) is used to dry secretions causing the death rattle."
        },
        {
            "id": "comp-t05-q02",
            "type": "multiple-select",
            "question": "Which of the following are common physical signs of impending death? (Select all that apply)",
            "points": 4,
            "topicId": "topic-05",
            "topicName": "End of Life Care",
            "options": [
                { "id": "a", "text": "Cool extremities", "isCorrect": true },
                { "id": "b", "text": "Increased appetite", "isCorrect": false },
                { "id": "c", "text": "Changes in breathing patterns (Cheyne-Stokes)", "isCorrect": true },
                { "id": "d", "text": "Mottling of skin", "isCorrect": true },
                { "id": "e", "text": "Increased urine output", "isCorrect": false }
            ],
            "explanation": "Signs include cool skin, mottling, changing breathing patterns, decreased intake/output, and drowsiness."
        },

        // TOPIC 06: BEREAVEMENT
        {
            "id": "comp-t06-q01",
            "type": "ordering",
            "question": "Arrange the Stages of Grief (Kubler-Ross) in the correct order:",
            "points": 5,
            "topicId": "topic-06",
            "topicName": "Bereavement & Grief",
            "items": [
                { "id": "i1", "text": "Denial", "correctPosition": 1 },
                { "id": "i2", "text": "Anger", "correctPosition": 2 },
                { "id": "i3", "text": "Bargaining", "correctPosition": 3 },
                { "id": "i4", "text": "Depression", "correctPosition": 4 },
                { "id": "i5", "text": "Acceptance", "correctPosition": 5 }
            ],
            "explanation": "The stages are Denial, Anger, Bargaining, Depression, and Acceptance (DABDA)."
        },
        {
            "id": "comp-t06-q02",
            "type": "multiple-choice",
            "question": "What is 'Anticipatory Grief'?",
            "points": 4,
            "topicId": "topic-06",
            "topicName": "Bereavement & Grief",
            "options": [
                { "id": "a", "text": "Grief that is delayed for months or years", "isCorrect": false },
                { "id": "b", "text": "Grief experienced before the actual loss/death occurs", "isCorrect": true },
                { "id": "c", "text": "Grief that never resolves", "isCorrect": false },
                { "id": "d", "text": "Grief masked by somatic symptoms", "isCorrect": false }
            ],
            "explanation": "Anticipatory grief is grief before loss, associated with diagnosis and chronic illness."
        },

        // TOPIC 07: LAST OFFICES
        {
            "id": "comp-t07-q01",
            "type": "multiple-choice",
            "question": "What is the correct protocol for a wedding ring during Last Offices?",
            "points": 4,
            "topicId": "topic-07",
            "topicName": "Last Offices",
            "options": [
                { "id": "a", "text": "Remove it and place in the valuables container", "isCorrect": false },
                { "id": "b", "text": "Remove it and give immediately to the closest relative", "isCorrect": false },
                { "id": "c", "text": "Do not remove; strap it with tape and record in kardex", "isCorrect": true },
                { "id": "d", "text": "Leave it loose on the finger", "isCorrect": false }
            ],
            "explanation": "Wedding rings are generally not removed; they should be strapped and recorded."
        },
        {
            "id": "comp-t07-q02",
            "type": "fill-blank",
            "question": "After completing Last Offices, one should wait approximately __b1__ before taking the body to the mortuary.",
            "points": 4,
            "topicId": "topic-07",
            "topicName": "Last Offices",
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["1 hour", "one hour", "1 hr"], "caseSensitive": false }
            ],
            "explanation": "Standard procedure suggests waiting 1 hour before transfer to the mortuary."
        },

        // TOPIC 08: TREATMENT MODALITIES
        {
            "id": "comp-t08-q01",
            "type": "multiple-choice",
            "question": "Which of the following is an indication for palliative radiotherapy?",
            "points": 4,
            "topicId": "topic-08",
            "topicName": "Treatment Modalities",
            "options": [
                { "id": "a", "text": "To reverse cachexia", "isCorrect": false },
                { "id": "b", "text": "Pain relief from metastatic bone pain", "isCorrect": true },
                { "id": "c", "text": "To treat systemic infection", "isCorrect": false },
                { "id": "d", "text": "To cure end-stage organ failure", "isCorrect": false }
            ],
            "explanation": "Radiotherapy is excellent for pain relief in metastatic bone pain, spinal cord compression, and SVC obstruction."
        },
        {
            "id": "comp-t08-q02",
            "type": "multiple-choice",
            "question": "What is the primary goal of nutritional support in palliative care?",
            "points": 4,
            "topicId": "topic-08",
            "topicName": "Treatment Modalities",
            "options": [
                { "id": "a", "text": "To accelerate therapy", "isCorrect": false },
                { "id": "b", "text": "To ensure weight gain in all patients", "isCorrect": false },
                { "id": "c", "text": "To improve quality of life and help patient tolerate treatment", "isCorrect": true },
                { "id": "d", "text": "To reverse the disease process", "isCorrect": false }
            ],
            "explanation": "The goal is to improve quality of life, comfort, and treatment tolerance, not necessarily to reverse the disease or force weight gain."
        },

        // CROSS-TOPIC / GENERAL
        {
            "id": "comp-gen-q01",
            "type": "multiple-choice",
            "question": "Which model of care is described as the most common and affordable service in Africa, respecting cultural practices?",
            "points": 4,
            "topicId": "topic-01",
            "topicName": "Introduction & Fundamentals",
            "options": [
                { "id": "a", "text": "Inpatient Hospice", "isCorrect": false },
                { "id": "b", "text": "Home Based Care", "isCorrect": true },
                { "id": "c", "text": "Day Care Center", "isCorrect": false },
                { "id": "d", "text": "Tertiary Hospital Unit", "isCorrect": false }
            ],
            "explanation": "Home Based Care is the most common model in Africa due to affordability and cultural acceptability."
        },
        {
            "id": "comp-gen-q02",
            "type": "matching",
            "question": "Match the symptom to its typical management strategy:",
            "points": 6,
            "topicId": "topic-03",
            "topicName": "Symptom Management",
            "pairs": [
                { "id": "p1", "left": "Constipation", "right": "Laxatives (Bisacodyl)" },
                { "id": "p2", "left": "Anorexia", "right": "Small, appetizing meals" },
                { "id": "p3", "left": "Breathlessness", "right": "Fan the face / Opioids" }
            ],
            "explanation": "Constipation requires laxatives; Anorexia needs dietary adjustment; Breathlessness responds to airflow and opioids."
        },
        {
            "id": "comp-gen-q03",
            "type": "multiple-choice",
            "question": "Which of the following is considered a 'reversible cause' of anorexia in palliative care?",
            "points": 4,
            "topicId": "topic-03",
            "topicName": "Symptom Management",
            "options": [
                { "id": "a", "text": "Terminal phase", "isCorrect": false },
                { "id": "b", "text": "Sore mouth (Oral Thrush)", "isCorrect": true },
                { "id": "c", "text": "Advanced age", "isCorrect": false },
                { "id": "d", "text": "Disease progression", "isCorrect": false }
            ],
            "explanation": "Sore mouth, metabolic disturbances, and constipation are reversible causes of anorexia."
        }
    ]
});