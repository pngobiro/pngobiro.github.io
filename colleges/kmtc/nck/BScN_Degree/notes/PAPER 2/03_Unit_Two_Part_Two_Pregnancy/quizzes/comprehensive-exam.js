
registerQuiz("comprehensive-exam", {
    "schemaVersion": "1.0",
    "quizId": "comprehensive-exam",
    "metadata": {
        "title": "Comprehensive Exam: Unit Two Part Two",
        "description": "Final assessment covering Management of Normal Pregnancy and Risk Factors in Pregnancy.",
        "examType": "comprehensive",
        "topicsCovered": ["topic-01-normal-pregnancy", "topic-02-risk-factors"],
        "difficulty": "advanced",
        "estimatedTime": 45,
        "passingScore": 70,
        "createdAt": "2026-01-11T20:00:00Z",
        "tags": ["midwifery", "pregnancy", "comprehensive", "final"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "end",
        "allowRetry": true,
        "showCorrectAnswers": true,
        "timeLimit": 2700
    },
    "questions": [
        // TOPIC 01: NORMAL PREGNANCY
        {
            "id": "comp-q01",
            "type": "multiple-choice",
            "question": "Which of the following is considered a Positive Sign of pregnancy?",
            "points": 1,
            "topicId": "topic-01-normal-pregnancy",
            "topicName": "Normal Pregnancy",
            "options": [
                { "id": "a", "text": "Amenorrhoea", "isCorrect": false },
                { "id": "b", "text": "Positive pregnancy test (hCG)", "isCorrect": false },
                { "id": "c", "text": "Visualisation of foetus by Ultrasound", "isCorrect": true },
                { "id": "d", "text": "Jacquemier's sign", "isCorrect": false }
            ],
            "explanation": "Visualisation of the foetus by ultrasound, X-ray (after 16 weeks), and detection of foetal heart sounds are positive signs. Amenorrhoea is a presumptive sign, and hCG is a probable sign."
        },
        {
            "id": "comp-q02",
            "type": "fill-blank",
            "question": "The bluish discolouration of the cervix due to increased vascularity is known as __b1__ sign, while the softening of the isthmus is known as __b2__ sign.",
            "points": 2,
            "topicId": "topic-01-normal-pregnancy",
            "topicName": "Normal Pregnancy",
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["Jacquemier's", "Jacquemier"], "caseSensitive": false },
                { "id": "b2", "acceptedAnswers": ["Hegar's", "Hegar"], "caseSensitive": false }
            ],
            "explanation": "Jacquemier's sign is the bluish colour of the vagina/cervix (8 weeks). Hegar's sign is the softness of the isthmus (6-12 weeks)."
        },
        {
            "id": "comp-q03",
            "type": "short-answer",
            "question": "Using Nagele's rule, calculate the Expected Date of Delivery (EDD) if the Last Normal Menstrual Period (LNMP) was 18th June.",
            "points": 2,
            "topicId": "topic-01-normal-pregnancy",
            "topicName": "Normal Pregnancy",
            "keywords": ["March", "25", "25th"],
            "minKeywords": 2,
            "modelAnswer": "March 25th",
            "explanation": "Add 7 days to the first day of LNMP (18 + 7 = 25) and subtract 3 months (June - 3 = March). The EDD is March 25th."
        },
        {
            "id": "comp-q04",
            "type": "matching",
            "question": "Match the obstetric term with its correct definition:",
            "points": 4,
            "topicId": "topic-01-normal-pregnancy",
            "topicName": "Normal Pregnancy",
            "pairs": [
                { "id": "p1", "left": "Gravidity", "right": "Number of times a woman has been pregnant" },
                { "id": "p2", "left": "Parity", "right": "Delivery of a child that grew beyond 28 weeks" },
                { "id": "p3", "left": "Nullipara", "right": "A woman who has never delivered" },
                { "id": "p4", "left": "Primigravida", "right": "A woman pregnant for the first time" }
            ]
        },
        {
            "id": "comp-q05",
            "type": "multiple-choice",
            "question": "Which drug causes a sustained tonic contraction of the uterus and is used to treat postpartum haemorrhage but is contraindicated in hypertension?",
            "points": 1,
            "topicId": "topic-01-normal-pregnancy",
            "topicName": "Normal Pregnancy",
            "options": [
                { "id": "a", "text": "Oxytocin", "isCorrect": false },
                { "id": "b", "text": "Ergometrine", "isCorrect": true },
                { "id": "c", "text": "Prostaglandins", "isCorrect": false },
                { "id": "d", "text": "Salbutamol", "isCorrect": false }
            ],
            "explanation": "Ergometrine produces a sustained tonic contraction and causes peripheral vasoconstriction, making it dangerous for patients with hypertension."
        },
        {
            "id": "comp-q06",
            "type": "true-false",
            "question": "Drugs should be strictly avoided if possible during the first 12 weeks of pregnancy due to the risk of teratogenic effects during organogenesis.",
            "points": 1,
            "topicId": "topic-01-normal-pregnancy",
            "topicName": "Normal Pregnancy",
            "correctAnswer": true,
            "explanation": "The high risk period is the first 12 weeks, especially 3-8 weeks, when organ formation occurs."
        },
        {
            "id": "comp-q07",
            "type": "multiple-select",
            "question": "Select the correct advice for managing heartburn in pregnancy:",
            "points": 2,
            "topicId": "topic-01-normal-pregnancy",
            "topicName": "Normal Pregnancy",
            "options": [
                { "id": "a", "text": "Avoid bending over", "isCorrect": true },
                { "id": "b", "text": "Take small meals", "isCorrect": true },
                { "id": "c", "text": "Lie flat on the back without pillows", "isCorrect": false },
                { "id": "d", "text": "Sleep with several pillows", "isCorrect": true },
                { "id": "e", "text": "Take anti-emetics", "isCorrect": false }
            ],
            "partialCredit": true,
            "explanation": "Mothers should avoid bending over, take small meals, and sleep with several pillows or in a semi-reclining position."
        },
        
        // TOPIC 02: RISK FACTORS
        {
            "id": "comp-q08",
            "type": "multiple-choice",
            "question": "What is the primary definition of Hyperemesis Gravidarum?",
            "points": 1,
            "topicId": "topic-02-risk-factors",
            "topicName": "Risk Factors",
            "options": [
                { "id": "a", "text": "Morning sickness occurring only in the first trimester", "isCorrect": false },
                { "id": "b", "text": "Severe and continuous vomiting leading to dehydration and ketoacidosis", "isCorrect": true },
                { "id": "c", "text": "Vomiting associated with malaria", "isCorrect": false },
                { "id": "d", "text": "Nausea caused by iron supplements", "isCorrect": false }
            ],
            "explanation": "Hyperemesis Gravidarum is severe, continuous vomiting where the woman vomits everything, leading to dehydration, ketoacidosis, and malnutrition."
        },
        {
            "id": "comp-q09",
            "type": "matching",
            "question": "Match the type of Placenta Praevia with its description:",
            "points": 4,
            "topicId": "topic-02-risk-factors",
            "topicName": "Risk Factors",
            "pairs": [
                { "id": "p1", "left": "Type I", "right": "Lower margin dips into lower uterine segment" },
                { "id": "p2", "left": "Type II", "right": "Marginal; reaches edge of internal os" },
                { "id": "p3", "left": "Type III", "right": "Partial; covers os when closed" },
                { "id": "p4", "left": "Type IV", "right": "Central; covers os even when fully dilated" }
            ]
        },
        {
            "id": "comp-q10",
            "type": "image-based",
            "question": "Identify the condition shown in this image representing bleeding in late pregnancy:",
            "points": 2,
            "topicId": "topic-02-risk-factors",
            "topicName": "Risk Factors",
            "imageUrl": "assets/images/image-20260111-dd63c224.jpeg",
            "imageAlt": "Diagram showing placenta covering the cervical opening",
            "options": [
                { "id": "a", "text": "Abruptio Placentae", "isCorrect": false },
                { "id": "b", "text": "Type IV Placenta Praevia", "isCorrect": true },
                { "id": "c", "text": "Type I Placenta Praevia", "isCorrect": false },
                { "id": "d", "text": "Vasa Praevia", "isCorrect": false }
            ],
            "explanation": "The image shows the placenta lying centrally over the internal os, covering it completely, which is Type IV Placenta Praevia."
        },
        {
            "id": "comp-q11",
            "type": "multiple-choice",
            "question": "Which of the following is a cardinal sign of Pre-eclampsia?",
            "points": 1,
            "topicId": "topic-02-risk-factors",
            "topicName": "Risk Factors",
            "options": [
                { "id": "a", "text": "Hypotension", "isCorrect": false },
                { "id": "b", "text": "Glycosuria", "isCorrect": false },
                { "id": "c", "text": "Proteinuria", "isCorrect": true },
                { "id": "d", "text": "Polyuria", "isCorrect": false }
            ],
            "explanation": "The three cardinal signs of Pre-eclampsia are Hypertension, Oedema, and Proteinuria."
        },
        {
            "id": "comp-q12",
            "type": "fill-blank",
            "question": "Severe anaemia in pregnancy is defined as a haemoglobin level below __b1__ gm/dl.",
            "points": 2,
            "topicId": "topic-02-risk-factors",
            "topicName": "Risk Factors",
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["5", "5.0"], "caseSensitive": false }
            ],
            "explanation": "Severe anaemia is characterised by haemoglobin below 5gm per decilitre."
        },
        {
            "id": "comp-q13",
            "type": "multiple-select",
            "question": "Select the correct management steps for an Eclamptic fit at a health centre:",
            "points": 3,
            "topicId": "topic-02-risk-factors",
            "topicName": "Risk Factors",
            "options": [
                { "id": "a", "text": "Give intravenous diazepam or phenobarbitone", "isCorrect": true },
                { "id": "b", "text": "Insert a mouth gag to prevent biting the tongue", "isCorrect": true },
                { "id": "c", "text": "Place mother in supine position (flat on back)", "isCorrect": false },
                { "id": "d", "text": "Place mother in semi-prone position for drainage", "isCorrect": true },
                { "id": "e", "text": "Force fluids orally", "isCorrect": false }
            ],
            "partialCredit": true,
            "explanation": "The mother should be placed in semi-prone position to drain secretions, given anticonvulsants, and protected from injury. Oral fluids are contraindicated."
        },
        {
            "id": "comp-q14",
            "type": "ordering",
            "question": "Arrange the stages of an Eclamptic fit in the correct order:",
            "points": 3,
            "topicId": "topic-02-risk-factors",
            "topicName": "Risk Factors",
            "items": [
                { "id": "i1", "text": "Premonitory stage (restless, rapid eye movements)", "correctPosition": 1 },
                { "id": "i2", "text": "Tonic stage (spasms, rigid muscles)", "correctPosition": 2 },
                { "id": "i3", "text": "Clonic stage (violent contraction/relaxation)", "correctPosition": 3 },
                { "id": "i4", "text": "Coma (stertorous breathing)", "correctPosition": 4 }
            ]
        },
        {
            "id": "comp-q15",
            "type": "multiple-choice",
            "question": "Why is 'macrosoma' (large baby) a complication of diabetes in pregnancy?",
            "points": 2,
            "topicId": "topic-02-risk-factors",
            "topicName": "Risk Factors",
            "options": [
                { "id": "a", "text": "High maternal insulin crosses the placenta stimulating growth", "isCorrect": false },
                { "id": "b", "text": "Maternal hyperglycaemia causes foetal hyperglycaemia and excess foetal insulin production", "isCorrect": true },
                { "id": "c", "text": "The mother eats too much protein", "isCorrect": false },
                { "id": "d", "text": "The placenta becomes enlarged and transfers more nutrients", "isCorrect": false }
            ],
            "explanation": "Maternal glucose crosses the placenta, causing foetal hyperglycaemia. The foetus produces excess insulin (which acts as a growth hormone), converting glucose to fat."
        },
        {
            "id": "comp-q16",
            "type": "true-false",
            "question": "A vaginal examination should be performed immediately on any woman presenting with Antepartum Haemorrhage to determine the cause.",
            "points": 2,
            "topicId": "topic-02-risk-factors",
            "topicName": "Risk Factors",
            "correctAnswer": false,
            "explanation": "Never perform a vaginal examination on a woman with antepartum haemorrhage as it may provoke severe bleeding."
        },
        {
            "id": "comp-q17",
            "type": "multiple-choice",
            "question": "Which of the following differentiates Abruptio Placentae from Placenta Praevia?",
            "points": 2,
            "topicId": "topic-02-risk-factors",
            "topicName": "Risk Factors",
            "options": [
                { "id": "a", "text": "Abruptio causes painless bleeding; Praevia causes painful bleeding", "isCorrect": false },
                { "id": "b", "text": "Abruptio blood is bright red; Praevia blood is dark", "isCorrect": false },
                { "id": "c", "text": "Abruptio uterus is tender/board-like; Praevia uterus is soft", "isCorrect": true },
                { "id": "d", "text": "Abruptio foetus is usually alive; Praevia foetus is usually dead", "isCorrect": false }
            ],
            "explanation": "Abruptio Placentae presents with a tender, rigid (board-like) uterus and painful dark bleeding. Placenta Praevia presents with a soft, non-tender uterus and painless bright red bleeding."
        },
        {
            "id": "comp-q18",
            "type": "fill-blank",
            "question": "Cardiac disease in pregnancy is classified into __b1__ grades based on the severity of symptoms.",
            "points": 1,
            "topicId": "topic-02-risk-factors",
            "topicName": "Risk Factors",
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["4", "four"], "caseSensitive": false }
            ],
            "explanation": "Cardiac disease is classified into four grades (I to IV)."
        },
        {
            "id": "comp-q19",
            "type": "multiple-choice",
            "question": "What is the recommended treatment for malaria in pregnancy to reduce pyrexia and clear parasites?",
            "points": 1,
            "topicId": "topic-02-risk-factors",
            "topicName": "Risk Factors",
            "options": [
                { "id": "a", "text": "Tetracycline", "isCorrect": false },
                { "id": "b", "text": "Fansidar (Sulfadoxine-Pyrimethamine)", "isCorrect": true },
                { "id": "c", "text": "Primaquine", "isCorrect": false },
                { "id": "d", "text": "Aspirin", "isCorrect": false }
            ],
            "explanation": "The text recommends a full course of Fansidar (3 tablets stat) and a mild analgesic like paracetamol."
        },
        {
            "id": "comp-q20",
            "type": "short-answer",
            "question": "Why is the supine position (lying flat on back) discouraged for pregnant women, especially those with cardiac disease or anaemia?",
            "points": 2,
            "topicId": "topic-02-risk-factors",
            "topicName": "Risk Factors",
            "keywords": ["vena", "cava", "compression", "pressure", "return", "output", "hypotension"],
            "minKeywords": 2,
            "modelAnswer": "It causes compression of the vena cava by the gravid uterus, reducing venous return and cardiac output.",
            "explanation": "The gravid uterus compresses the vena cava, reducing venous return to the heart, which can cause supine hypotension and reduce blood flow to the foetus."
        }
    ]
});