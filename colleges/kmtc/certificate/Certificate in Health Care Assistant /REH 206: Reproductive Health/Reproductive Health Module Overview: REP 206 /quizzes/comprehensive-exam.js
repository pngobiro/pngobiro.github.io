registerQuiz("comprehensive-exam", {
    "schemaVersion": "1.0",
    "quizId": "comprehensive-exam",
    "metadata": {
        "title": "Comprehensive Final Exam: Reproductive Health",
        "description": "A comprehensive assessment covering all 8 topics of the Reproductive Health Module (REP 206).",
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
        "createdAt": "2026-01-10T10:00:00Z",
        "tags": ["final", "exam", "reproductive-health", "comprehensive"]
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
        // TOPIC 1: CONCEPTS & ANATOMY
        {
            "id": "t1-q1",
            "type": "multiple-choice",
            "question": "According to the WHO definition provided in the module, reproductive health implies that people have the capability to reproduce and the freedom to decide:",
            "points": 2,
            "topicId": "topic-01",
            "topicName": "Concepts & Anatomy",
            "options": [
                { "id": "a", "text": "If, when, and how often to do so", "isCorrect": true },
                { "id": "b", "text": "Which gender of child to conceive", "isCorrect": false },
                { "id": "c", "text": "Where to give birth", "isCorrect": false },
                { "id": "d", "text": "Which medical procedures to undergo", "isCorrect": false }
            ],
            "explanation": "Reproductive health implies that people are able to have a satisfying and safe sex life and that they have the capability to reproduce and the freedom to decide if, when and how often to do so."
        },
        {
            "id": "t1-q2",
            "type": "image-based",
            "question": "Identify the structure labeled as the Ampulla, which is the most common site of fertilization:",
            "points": 2,
            "topicId": "topic-01",
            "topicName": "Concepts & Anatomy",
            "imageUrl": "assets/images/image-20260110-b1a6c69e.jpeg",
            "imageAlt": "Diagram of internal female reproductive organs",
            "hotspots": [
                { "id": "h1", "x": 75, "y": 25, "radius": 10, "label": "Ampulla", "isCorrect": true },
                { "id": "h2", "x": 60, "y": 30, "radius": 10, "label": "Isthmus", "isCorrect": false },
                { "id": "h3", "x": 85, "y": 35, "radius": 10, "label": "Fimbriae", "isCorrect": false }
            ],
            "explanation": "The ampulla is the longest and widest part of the uterine tube and is the most common site of fertilization."
        },
        {
            "id": "t1-q3",
            "type": "matching",
            "question": "Match the male reproductive structure with its primary function:",
            "points": 4,
            "topicId": "topic-01",
            "topicName": "Concepts & Anatomy",
            "pairs": [
                { "id": "p1", "left": "Epididymis", "right": "Stores and matures sperm" },
                { "id": "p2", "left": "Seminiferous tubules", "right": "Produces sperm cells" },
                { "id": "p3", "left": "Seminal vesicles", "right": "Produces fructose-rich fluid for energy" },
                { "id": "p4", "left": "Prostate gland", "right": "Produces fluid to nourish sperm" }
            ],
            "explanation": "The testes produce sperm in seminiferous tubules; the epididymis stores them. Seminal vesicles provide energy (fructose), and the prostate adds nourishing fluid."
        },
        {
            "id": "t1-q4",
            "type": "fill-blank",
            "question": "The dark-colored circle at the tip of the breast is called the __1__.",
            "points": 2,
            "topicId": "topic-01",
            "topicName": "Concepts & Anatomy",
            "blanks": [
                { "id": "1", "acceptedAnswers": ["areola"], "caseSensitive": false }
            ],
            "explanation": "The dark-colored circle at the tip of the breast is called the areola. It contains sebaceous glands."
        },
        {
            "id": "t1-q5",
            "type": "multiple-choice",
            "question": "Which hormone is responsible for stimulating the production of testosterone in males?",
            "points": 2,
            "topicId": "topic-01",
            "topicName": "Concepts & Anatomy",
            "options": [
                { "id": "a", "text": "FSH", "isCorrect": false },
                { "id": "b", "text": "LH", "isCorrect": true },
                { "id": "c", "text": "Prolactin", "isCorrect": false },
                { "id": "d", "text": "Oxytocin", "isCorrect": false }
            ],
            "explanation": "Luteinizing hormone (LH) stimulates the production of testosterone. FSH is necessary for sperm production."
        },

        // TOPIC 2: PHYSIOLOGY OF REPRODUCTION
        {
            "id": "t2-q1",
            "type": "multiple-choice",
            "question": "On which day of a standard 28-day menstrual cycle does ovulation typically occur?",
            "points": 2,
            "topicId": "topic-02",
            "topicName": "Physiology of Reproduction",
            "options": [
                { "id": "a", "text": "Day 1", "isCorrect": false },
                { "id": "b", "text": "Day 5", "isCorrect": false },
                { "id": "c", "text": "Day 14", "isCorrect": true },
                { "id": "d", "text": "Day 28", "isCorrect": false }
            ],
            "explanation": "On the 14th day of the cycle, the pituitary gland secretes a hormone that causes the ovary to release the matured egg cell (ovulation)."
        },
        {
            "id": "t2-q2",
            "type": "true-false",
            "question": "Menopause is clinically diagnosed after a woman has gone 6 months without a menstrual period.",
            "points": 2,
            "topicId": "topic-02",
            "topicName": "Physiology of Reproduction",
            "correctAnswer": false,
            "explanation": "Menopause is diagnosed after a woman has gone 12 months without a menstrual period."
        },
        {
            "id": "t2-q3",
            "type": "ordering",
            "question": "Arrange the phases of the menstrual cycle in the correct chronological order starting from Day 1:",
            "points": 3,
            "topicId": "topic-02",
            "topicName": "Physiology of Reproduction",
            "items": [
                { "id": "i1", "text": "Menstrual Phase", "correctPosition": 1 },
                { "id": "i2", "text": "Follicular Phase", "correctPosition": 2 },
                { "id": "i3", "text": "Ovulation Phase", "correctPosition": 3 },
                { "id": "i4", "text": "Luteal Phase", "correctPosition": 4 }
            ],
            "explanation": "The cycle starts with menstruation (1-5), followed by the follicular phase (1-13), ovulation (14), and the luteal phase (15-28)."
        },
        {
            "id": "t2-q4",
            "type": "multiple-select",
            "question": "Which of the following are potential long-term complications of menopause? (Select all that apply)",
            "points": 3,
            "topicId": "topic-02",
            "topicName": "Physiology of Reproduction",
            "options": [
                { "id": "a", "text": "Osteoporosis (Bone loss)", "isCorrect": true },
                { "id": "b", "text": "Heart disease", "isCorrect": true },
                { "id": "c", "text": "Increased fertility", "isCorrect": false },
                { "id": "d", "text": "Alzheimer's disease risk", "isCorrect": true }
            ],
            "partialCredit": true,
            "explanation": "The loss of estrogen is linked to bone loss (osteoporosis), heart disease, and higher risk of Alzheimer's. Fertility ceases."
        },

        // TOPIC 3: MATERNAL & INFANT HEALTH
        {
            "id": "t3-q1",
            "type": "multiple-select",
            "question": "What are the top direct causes of maternal mortality? (Select all that apply)",
            "points": 3,
            "topicId": "topic-03",
            "topicName": "Maternal & Infant Health",
            "options": [
                { "id": "a", "text": "Hemorrhage", "isCorrect": true },
                { "id": "b", "text": "Malaria", "isCorrect": false },
                { "id": "c", "text": "Hypertension (Eclampsia)", "isCorrect": true },
                { "id": "d", "text": "Sepsis (Infection)", "isCorrect": true },
                { "id": "e", "text": "Anemia", "isCorrect": false }
            ],
            "explanation": "The top five direct causes are hemorrhage, hypertension, infections/sepsis, obstructed labour, and unsafe abortion. Malaria and anemia are indirect causes."
        },
        {
            "id": "t3-q2",
            "type": "fill-blank",
            "question": "A fully immunized woman has received __1__ doses of Tetanus Toxoid, which protects her for life.",
            "points": 2,
            "topicId": "topic-03",
            "topicName": "Maternal & Infant Health",
            "blanks": [
                { "id": "1", "acceptedAnswers": ["5", "five"], "caseSensitive": false }
            ],
            "explanation": "5 doses of Tetanus Toxoid provide protection for life."
        },
        {
            "id": "t3-q3",
            "type": "multiple-choice",
            "question": "Which of the following is considered a 'danger signal' regarding weight gain during pregnancy?",
            "points": 2,
            "topicId": "topic-03",
            "topicName": "Maternal & Infant Health",
            "options": [
                { "id": "a", "text": "Gaining 2 kg per month", "isCorrect": false },
                { "id": "b", "text": "Gaining less than 1 kg per month", "isCorrect": true },
                { "id": "c", "text": "Gaining 1.5 kg per month", "isCorrect": false },
                { "id": "d", "text": "Gaining weight in the third trimester", "isCorrect": false }
            ],
            "explanation": "A gain of less than one kg per month is the danger signal, with no weight gain or weight loss being even more severe."
        },
        {
            "id": "t3-q4",
            "type": "true-false",
            "question": "Herd immunity requires approximately 75% of the population to be vaccinated to be effective.",
            "points": 2,
            "topicId": "topic-03",
            "topicName": "Maternal & Infant Health",
            "correctAnswer": true,
            "explanation": "For immunization to be effective in controlling communicable disease (herd immunity), roughly 75% of the population must be vaccinated."
        },
        {
            "id": "t3-q5",
            "type": "multiple-choice",
            "question": "Which laboratory test is routinely done in ANC specifically to prevent congenital anomalies and stillbirth?",
            "points": 2,
            "topicId": "topic-03",
            "topicName": "Maternal & Infant Health",
            "options": [
                { "id": "a", "text": "Urinalysis", "isCorrect": false },
                { "id": "b", "text": "VDRL (Syphilis screening)", "isCorrect": true },
                { "id": "c", "text": "Stool microscopy", "isCorrect": false },
                { "id": "d", "text": "Liver function test", "isCorrect": false }
            ],
            "explanation": "VDRL test for syphilis is one of the important tests to be done irrespective of any condition because syphilis has a grave impact on the fetus."
        },

        // TOPIC 4: SAFE MOTHERHOOD
        {
            "id": "t4-q1",
            "type": "multiple-choice",
            "question": "What distinguishes Comprehensive Emergency Obstetric and Newborn Care (CEmONC) from Basic (BEmONC)?",
            "points": 2,
            "topicId": "topic-04",
            "topicName": "Safe Motherhood",
            "options": [
                { "id": "a", "text": "Administration of antibiotics", "isCorrect": false },
                { "id": "b", "text": "Manual removal of placenta", "isCorrect": false },
                { "id": "c", "text": "Cesarean section and blood transfusion", "isCorrect": true },
                { "id": "d", "text": "Newborn resuscitation", "isCorrect": false }
            ],
            "explanation": "CEmONC includes all BEmONC functions plus Cesarean section (surgery) and Blood transfusion."
        },
        {
            "id": "t4-q2",
            "type": "multiple-choice",
            "question": "Which medication should NEVER be given to a woman with elevated blood pressure to manage PPH?",
            "points": 2,
            "topicId": "topic-04",
            "topicName": "Safe Motherhood",
            "options": [
                { "id": "a", "text": "Oxytocin", "isCorrect": false },
                { "id": "b", "text": "Misoprostol", "isCorrect": false },
                { "id": "c", "text": "Ergometrine", "isCorrect": true },
                { "id": "d", "text": "Magnesium Sulfate", "isCorrect": false }
            ],
            "explanation": "Ergometrine should NEVER be given to a woman with elevated blood pressure because it can precipitate an eclamptic seizure/convulsion."
        },
        {
            "id": "t4-q3",
            "type": "multiple-choice",
            "question": "Manual Vacuum Aspiration (MVA) is the method of choice for incomplete abortion for gestation of:",
            "points": 2,
            "topicId": "topic-04",
            "topicName": "Safe Motherhood",
            "options": [
                { "id": "a", "text": "20 weeks or less", "isCorrect": false },
                { "id": "b", "text": "14 weeks or less", "isCorrect": true },
                { "id": "c", "text": "28 weeks or less", "isCorrect": false },
                { "id": "d", "text": "Any gestation", "isCorrect": false }
            ],
            "explanation": "MVA is the method of choice for the management of incomplete or inevitable abortion for gestation of 14 weeks or less."
        },
        {
            "id": "t4-q4",
            "type": "fill-blank",
            "question": "Postnatal care is defined as care given to the mother and newborn from birth up to __1__ weeks.",
            "points": 2,
            "topicId": "topic-04",
            "topicName": "Safe Motherhood",
            "blanks": [
                { "id": "1", "acceptedAnswers": ["6", "six"], "caseSensitive": false }
            ],
            "explanation": "Postnatal care covers the period from one hour after delivery up to 6 weeks post-delivery."
        },
        {
            "id": "t4-q5",
            "type": "multiple-select",
            "question": "Which of the following are considered pillars of safe motherhood? (Select all that apply)",
            "points": 3,
            "topicId": "topic-04",
            "topicName": "Safe Motherhood",
            "options": [
                { "id": "a", "text": "Family Planning", "isCorrect": true },
                { "id": "b", "text": "Antenatal Care", "isCorrect": true },
                { "id": "c", "text": "Postnatal Care", "isCorrect": true },
                { "id": "d", "text": "Clean Water Supply", "isCorrect": false },
                { "id": "e", "text": "Post-abortion Care", "isCorrect": true }
            ],
            "partialCredit": true,
            "explanation": "The pillars are Family Planning, ANC, Obstetric/Newborn Care, PNC, Post-abortion Care, and STD/HIV Control."
        },

        // TOPIC 5: FAMILY PLANNING (HORMONAL)
        {
            "id": "t5-q1",
            "type": "multiple-choice",
            "question": "What is the correct action if a woman taking Combined Oral Contraceptives (COCs) misses 3 or more pills in a row?",
            "points": 2,
            "topicId": "topic-05",
            "topicName": "FP: Hormonal",
            "options": [
                { "id": "a", "text": "Take all missed pills at once and continue", "isCorrect": false },
                { "id": "b", "text": "Discard pack and wait for next period", "isCorrect": false },
                { "id": "c", "text": "Use condoms/abstain for 7 days and keep taking pills", "isCorrect": true },
                { "id": "d", "text": "Take 2 pills a day until caught up", "isCorrect": false }
            ],
            "explanation": "If 3 or more pills are missed, she should use condoms or abstain for 7 days and keep taking the pills."
        },
        {
            "id": "t5-q2",
            "type": "true-false",
            "question": "Progestin-Only Pills (POPs) are safe for breastfeeding mothers with babies less than 6 months old.",
            "points": 2,
            "topicId": "topic-05",
            "topicName": "FP: Hormonal",
            "correctAnswer": true,
            "explanation": "POPs contain no estrogen and do not affect breast milk production, making them safe for breastfeeding mothers."
        },
        {
            "id": "t5-q3",
            "type": "multiple-choice",
            "question": "Emergency Contraceptive Pills (ECPs) are effective if taken within how many hours after unprotected sex?",
            "points": 2,
            "topicId": "topic-05",
            "topicName": "FP: Hormonal",
            "options": [
                { "id": "a", "text": "24 hours", "isCorrect": false },
                { "id": "b", "text": "72 hours", "isCorrect": false },
                { "id": "c", "text": "120 hours (5 days)", "isCorrect": true },
                { "id": "d", "text": "7 days", "isCorrect": false }
            ],
            "explanation": "ECPs can help prevent pregnancy when taken any time up to 120 hours (5 days) after unprotected sex, though sooner is better."
        },
        {
            "id": "t5-q4",
            "type": "multiple-choice",
            "question": "How often is the injectable contraceptive DMPA (Depo Provera) given?",
            "points": 2,
            "topicId": "topic-05",
            "topicName": "FP: Hormonal",
            "options": [
                { "id": "a", "text": "Every month", "isCorrect": false },
                { "id": "b", "text": "Every 2 months", "isCorrect": false },
                { "id": "c", "text": "Every 3 months (13 weeks)", "isCorrect": true },
                { "id": "d", "text": "Every 6 months", "isCorrect": false }
            ],
            "explanation": "DMPA is given every 3 months (13 weeks). NET-EN is given every 2 months."
        },
        {
            "id": "t5-q5",
            "type": "multiple-choice",
            "question": "Which of the following is a common side effect of injectable contraceptives (DMPA) after one year of use?",
            "points": 2,
            "topicId": "topic-05",
            "topicName": "FP: Hormonal",
            "options": [
                { "id": "a", "text": "Heavy bleeding", "isCorrect": false },
                { "id": "b", "text": "No monthly bleeding (Amenorrhea)", "isCorrect": true },
                { "id": "c", "text": "Weight loss", "isCorrect": false },
                { "id": "d", "text": "Severe cramping", "isCorrect": false }
            ],
            "explanation": "After one year of DMPA use, amenorrhea (no monthly bleeding) is a very common side effect."
        },

        // TOPIC 6: FAMILY PLANNING (NON-HORMONAL)
        {
            "id": "t6-q1",
            "type": "matching",
            "question": "Match the contraceptive method with its effective duration:",
            "points": 4,
            "topicId": "topic-06",
            "topicName": "FP: Non-Hormonal",
            "pairs": [
                { "id": "p1", "left": "Copper IUD (TCu-380A)", "right": "10-12 Years" },
                { "id": "p2", "left": "Jadelle Implant", "right": "5 Years" },
                { "id": "p3", "left": "Implanon Implant", "right": "3 Years" },
                { "id": "p4", "left": "Mirena (LNG-IUD)", "right": "5 Years" }
            ],
            "explanation": "Copper IUDs last up to 12 years. Jadelle is 5 years, Implanon is 3 years, and Mirena is 5 years."
        },
        {
            "id": "t6-q2",
            "type": "multiple-select",
            "question": "Which of the following are criteria for the Lactational Amenorrhea Method (LAM)? (Select all 3)",
            "points": 3,
            "topicId": "topic-06",
            "topicName": "FP: Non-Hormonal",
            "options": [
                { "id": "a", "text": "Baby is less than 6 months old", "isCorrect": true },
                { "id": "b", "text": "Mother's monthly bleeding has not returned", "isCorrect": true },
                { "id": "c", "text": "Baby is fully/exclusively breastfed", "isCorrect": true },
                { "id": "d", "text": "Mother is taking progestin pills", "isCorrect": false },
                { "id": "e", "text": "Baby sleeps through the night", "isCorrect": false }
            ],
            "explanation": "LAM requires: amenorrhea (no period), full breastfeeding, and baby < 6 months old."
        },
        {
            "id": "t6-q3",
            "type": "true-false",
            "question": "A vasectomy is immediately effective as a contraceptive method after the procedure.",
            "points": 2,
            "topicId": "topic-06",
            "topicName": "FP: Non-Hormonal",
            "correctAnswer": false,
            "explanation": "Vasectomy is NOT immediately effective. It takes about 3 months (or 20 ejaculations) to clear remaining sperm from the tubes."
        },
        {
            "id": "t6-q4",
            "type": "multiple-choice",
            "question": "Which barrier method provides dual protection against both pregnancy and STIs/HIV?",
            "points": 2,
            "topicId": "topic-06",
            "topicName": "FP: Non-Hormonal",
            "options": [
                { "id": "a", "text": "Diaphragm", "isCorrect": false },
                { "id": "b", "text": "Condom (Male/Female)", "isCorrect": true },
                { "id": "c", "text": "Spermicides", "isCorrect": false },
                { "id": "d", "text": "IUD", "isCorrect": false }
            ],
            "explanation": "Condoms are the only method that provides dual protection against both pregnancy and STIs/HIV."
        },
        {
            "id": "t6-q5",
            "type": "multiple-choice",
            "question": "In the Calendar Rhythm Method, how do you calculate the start of the fertile phase?",
            "points": 2,
            "topicId": "topic-06",
            "topicName": "FP: Non-Hormonal",
            "options": [
                { "id": "a", "text": "Subtract 11 from shortest cycle", "isCorrect": false },
                { "id": "b", "text": "Subtract 18 from shortest cycle", "isCorrect": true },
                { "id": "c", "text": "Subtract 14 from longest cycle", "isCorrect": false },
                { "id": "d", "text": "Subtract 10 from longest cycle", "isCorrect": false }
            ],
            "explanation": "To find the first fertile day, subtract 18 from the length of the shortest cycle. To find the last, subtract 11 from the longest."
        },

        // TOPIC 7: STIs
        {
            "id": "t7-q1",
            "type": "multiple-choice",
            "question": "Which of the following STIs is characterized by a painless genital ulcer (chancre) in its primary stage?",
            "points": 2,
            "topicId": "topic-07",
            "topicName": "STIs",
            "options": [
                { "id": "a", "text": "Gonorrhea", "isCorrect": false },
                { "id": "b", "text": "Syphilis", "isCorrect": true },
                { "id": "c", "text": "Chancroid", "isCorrect": false },
                { "id": "d", "text": "Genital Herpes", "isCorrect": false }
            ],
            "explanation": "Syphilis, caused by Treponema pallidum, presents with a painless chancre in the primary stage."
        },
        {
            "id": "t7-q2",
            "type": "multiple-select",
            "question": "Which of the following STIs are considered curable? (Select all that apply)",
            "points": 3,
            "topicId": "topic-07",
            "topicName": "STIs",
            "options": [
                { "id": "a", "text": "Gonorrhea", "isCorrect": true },
                { "id": "b", "text": "Syphilis", "isCorrect": true },
                { "id": "c", "text": "HIV", "isCorrect": false },
                { "id": "d", "text": "Chlamydia", "isCorrect": true },
                { "id": "e", "text": "Genital Herpes", "isCorrect": false }
            ],
            "partialCredit": true,
            "explanation": "Bacterial STIs like Gonorrhea, Syphilis, and Chlamydia are curable. Viral STIs like HIV and Herpes are incurable."
        },
        {
            "id": "t7-q3",
            "type": "multiple-choice",
            "question": "Pelvic Inflammatory Disease (PID) is a major complication of untreated STIs and can lead to:",
            "points": 2,
            "topicId": "topic-07",
            "topicName": "STIs",
            "options": [
                { "id": "a", "text": "Infertility and Ectopic Pregnancy", "isCorrect": true },
                { "id": "b", "text": "Uterine fibroids", "isCorrect": false },
                { "id": "c", "text": "Endometriosis", "isCorrect": false },
                { "id": "d", "text": "Cervical cancer", "isCorrect": false }
            ],
            "explanation": "PID causes scarring of the fallopian tubes, which can lead to obstruction (infertility) or ectopic pregnancy."
        },
        {
            "id": "t7-q4",
            "type": "true-false",
            "question": "The syndromic approach to STI management relies primarily on laboratory tests to diagnose infections.",
            "points": 2,
            "topicId": "topic-07",
            "topicName": "STIs",
            "correctAnswer": false,
            "explanation": "The syndromic approach is based on identifying syndromes (signs/symptoms) using flowcharts, without relying on lab tests."
        },
        {
            "id": "t7-q5",
            "type": "multiple-choice",
            "question": "Which organism is the causative agent of Gonorrhea?",
            "points": 2,
            "topicId": "topic-07",
            "topicName": "STIs",
            "options": [
                { "id": "a", "text": "Treponema pallidum", "isCorrect": false },
                { "id": "b", "text": "Neisseria gonorrhoeae", "isCorrect": true },
                { "id": "c", "text": "Chlamydia trachomatis", "isCorrect": false },
                { "id": "d", "text": "Trichomonas vaginalis", "isCorrect": false }
            ],
            "explanation": "Gonorrhea is caused by the bacterium Neisseria gonorrhoeae."
        },

        // TOPIC 8: SEXUAL HEALTH & PRACTICES
        {
            "id": "t8-q1",
            "type": "fill-blank",
            "question": "__1__ infertility is defined as when a woman has never been pregnant and cannot conceive after one year of unprotected intercourse.",
            "points": 2,
            "topicId": "topic-08",
            "topicName": "Sexual Health",
            "blanks": [
                { "id": "1", "acceptedAnswers": ["Primary"], "caseSensitive": false }
            ],
            "explanation": "Primary infertility refers to couples who have never conceived."
        },
        {
            "id": "t8-q2",
            "type": "matching",
            "question": "Match the sexual dysfunction with its definition:",
            "points": 4,
            "topicId": "topic-08",
            "topicName": "Sexual Health",
            "pairs": [
                { "id": "p1", "left": "Dyspareunia", "right": "Painful sexual intercourse" },
                { "id": "p2", "left": "Vaginismus", "right": "Inability to relax vaginal muscles" },
                { "id": "p3", "left": "Erectile dysfunction", "right": "Inability to maintain erection" },
                { "id": "p4", "left": "Premature ejaculation", "right": "Inability to control timing of erection/release" }
            ],
            "explanation": "Dyspareunia is pain; Vaginismus is muscle spasm; ED is erection failure; Premature ejaculation is timing control issue."
        },
        {
            "id": "t8-q3",
            "type": "multiple-select",
            "question": "Which of the following are considered harmful traditional practices? (Select all that apply)",
            "points": 3,
            "topicId": "topic-08",
            "topicName": "Sexual Health",
            "options": [
                { "id": "a", "text": "Female Genital Mutilation (FGM)", "isCorrect": true },
                { "id": "b", "text": "Nutritional taboos in pregnancy", "isCorrect": true },
                { "id": "c", "text": "Exclusive breastfeeding", "isCorrect": false },
                { "id": "d", "text": "Dry sex practices", "isCorrect": true },
                { "id": "e", "text": "Early marriage", "isCorrect": true }
            ],
            "partialCredit": true,
            "explanation": "FGM, food taboos, dry sex, and early marriage are harmful. Exclusive breastfeeding is a recommended healthy practice."
        },
        {
            "id": "t8-q4",
            "type": "multiple-choice",
            "question": "What is the most common cause of acute suppurative mastitis in breastfeeding women?",
            "points": 2,
            "topicId": "topic-08",
            "topicName": "Sexual Health",
            "options": [
                { "id": "a", "text": "Candida albicans", "isCorrect": false },
                { "id": "b", "text": "Staphylococcus aureus", "isCorrect": true },
                { "id": "c", "text": "Escherichia coli", "isCorrect": false },
                { "id": "d", "text": "Neisseria gonorrhoeae", "isCorrect": false }
            ],
            "explanation": "Acute suppurative mastitis is usually caused by Staphylococcus aureus entering through a nipple abrasion."
        },
        {
            "id": "t8-q5",
            "type": "multiple-choice",
            "question": "Which condition involves the growth of endometrial tissue outside the uterus?",
            "points": 2,
            "topicId": "topic-08",
            "topicName": "Sexual Health",
            "options": [
                { "id": "a", "text": "Endometritis", "isCorrect": false },
                { "id": "b", "text": "Adenomyosis", "isCorrect": false },
                { "id": "c", "text": "Endometriosis", "isCorrect": true },
                { "id": "d", "text": "Leiomyoma", "isCorrect": false }
            ],
            "explanation": "Endometriosis is the growth of endometrial tissue outside the uterus, usually in the ovaries or tubes."
        },
        
        // Additional Questions to reach ~50
        {
            "id": "mix-q1",
            "type": "multiple-choice",
            "question": "What is the definition of a 'stillbirth'?",
            "points": 2,
            "topicId": "topic-03",
            "topicName": "Maternal & Infant Health",
            "options": [
                { "id": "a", "text": "Death of a fetus before 20 weeks", "isCorrect": false },
                { "id": "b", "text": "Death of a fetus after 28 weeks of gestation", "isCorrect": true },
                { "id": "c", "text": "Death of a newborn within 7 days", "isCorrect": false },
                { "id": "d", "text": "Spontaneous abortion", "isCorrect": false }
            ],
            "explanation": "Stillbirth typically refers to fetal death after the age of viability (often defined as >28 weeks in this context)."
        },
        {
            "id": "mix-q2",
            "type": "true-false",
            "question": "Vasectomy involves removing the testicles to prevent sperm production.",
            "points": 2,
            "topicId": "topic-06",
            "topicName": "FP: Non-Hormonal",
            "correctAnswer": false,
            "explanation": "Vasectomy involves blocking/cutting the vas deferens tubes. It does NOT remove testicles (castration)."
        },
        {
            "id": "mix-q3",
            "type": "multiple-choice",
            "question": "Which of the following is an example of an 'Iatrogenic' reproductive tract infection?",
            "points": 2,
            "topicId": "topic-07",
            "topicName": "STIs",
            "options": [
                { "id": "a", "text": "Infection from sexual contact", "isCorrect": false },
                { "id": "b", "text": "Yeast infection from antibiotic use", "isCorrect": false },
                { "id": "c", "text": "Infection introduced during a medical procedure like abortion", "isCorrect": true },
                { "id": "d", "text": "Infection from poor hygiene", "isCorrect": false }
            ],
            "explanation": "Iatrogenic infections are introduced by medical procedures like abortion, IUD insertion, or childbirth."
        },
        {
            "id": "mix-q4",
            "type": "multiple-choice",
            "question": "Cryptorchidism refers to which condition?",
            "points": 2,
            "topicId": "topic-08",
            "topicName": "Sexual Health",
            "options": [
                { "id": "a", "text": "Inflammation of the testis", "isCorrect": false },
                { "id": "b", "text": "Undescended testis", "isCorrect": true },
                { "id": "c", "text": "Fluid in the scrotum", "isCorrect": false },
                { "id": "d", "text": "Twisting of the spermatic cord", "isCorrect": false }
            ],
            "explanation": "Cryptorchidism is the medical term for undescended testis."
        },
        {
            "id": "mix-q5",
            "type": "fill-blank",
            "question": "The hormone __1__ is responsible for the development of male secondary sexual characteristics.",
            "points": 2,
            "topicId": "topic-01",
            "topicName": "Concepts & Anatomy",
            "blanks": [
                { "id": "1", "acceptedAnswers": ["testosterone"], "caseSensitive": false }
            ],
            "explanation": "Testosterone is the primary male sex hormone responsible for male characteristics."
        }
    ]
});