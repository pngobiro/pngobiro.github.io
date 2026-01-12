registerQuiz("comprehensive-exam", {
  "schemaVersion": "1.0",
  "quizId": "comprehensive-exam",
  "metadata": {
    "title": "Comprehensive Final Exam: Contraceptive Technology",
    "description": "A comprehensive assessment covering principles of family planning, natural methods, hormonal contraceptives, and surgical/barrier methods.",
    "examType": "comprehensive",
    "topicsCovered": [
      "topic-01",
      "topic-02",
      "topic-03",
      "topic-04"
    ],
    "difficulty": "advanced",
    "estimatedTime": 60,
    "passingScore": 75,
    "createdAt": "2026-01-13T00:00:00Z",
    "tags": ["final", "certification", "all-units"]
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
    // TOPIC 1: Principles & Assessment
    {
      "id": "comp-t1-q1",
      "type": "ordering",
      "question": "Arrange the steps of the GATHER counseling approach in the correct order:",
      "points": 10,
      "topicId": "topic-01",
      "topicName": "Principles & Assessment",
      "items": [
        { "id": "g", "text": "Greet the client", "correctPosition": 1 },
        { "id": "a", "text": "Ask about self and FP experience", "correctPosition": 2 },
        { "id": "t", "text": "Tell about available methods", "correctPosition": 3 },
        { "id": "h", "text": "Help make informed choices", "correctPosition": 4 },
        { "id": "e", "text": "Explain the method of choice", "correctPosition": 5 },
        { "id": "r", "text": "Return visits explained", "correctPosition": 6 }
      ],
      "explanation": "GATHER stands for Greet, Ask, Tell, Help, Explain, and Return."
    },
    {
      "id": "comp-t1-q2",
      "type": "multiple-choice",
      "question": "Which classification of a Pap smear indicates 'suspicious of malignancy' requiring a repeat smear in three months?",
      "points": 5,
      "topicId": "topic-01",
      "topicName": "Principles & Assessment",
      "options": [
        { "id": "opt1", "text": "Class I", "isCorrect": false },
        { "id": "opt2", "text": "Class II", "isCorrect": false },
        { "id": "opt3", "text": "Class III", "isCorrect": true },
        { "id": "opt4", "text": "Class V", "isCorrect": false }
      ],
      "explanation": "Class III indicates cells suspicious of malignancy. Class II is minor infection, while Class IV and V indicate cancer cells."
    },
    {
      "id": "comp-t1-q3",
      "type": "multiple-select",
      "question": "Select ALL conditions that allow a provider to be reasonably sure a woman is NOT pregnant without a test:",
      "points": 10,
      "topicId": "topic-01",
      "topicName": "Principles & Assessment",
      "options": [
        { "id": "opt1", "text": "She has had no intercourse since her last menses", "isCorrect": true },
        { "id": "opt2", "text": "She is within 7 days after the start of her menses", "isCorrect": true },
        { "id": "opt3", "text": "She is breastfeeding a 9-month old baby and is amenorrhoeic", "isCorrect": false },
        { "id": "opt4", "text": "She is within 4 weeks postpartum (non-breastfeeding)", "isCorrect": true },
        { "id": "opt5", "text": "She reports nausea in the mornings", "isCorrect": false }
      ],
      "explanation": "A provider can be reasonably sure if the woman has not had sex since LMP, is within days 1-7 of cycle, is within 4 weeks postpartum (non-lactating), or is within 7 days post-abortion. Breastfeeding is only reliable if < 6 months."
    },
    {
      "id": "comp-t1-q4",
      "type": "image-based",
      "question": "Identify the correct technique being demonstrated in this breast examination image:",
      "points": 5,
      "topicId": "topic-01",
      "topicName": "Principles & Assessment",
      "media": {
        "type": "image",
        "url": "assets/images/image-20260112-524bae0d.jpeg",
        "alt": "Woman lying down examining breast",
        "caption": "Breast Examination Technique"
      },
      "options": [
        { "id": "opt1", "text": "Inspection in front of a mirror", "isCorrect": false },
        { "id": "opt2", "text": "Palpation in the dorsal position", "isCorrect": true },
        { "id": "opt3", "text": "Expression of the nipple", "isCorrect": false },
        { "id": "opt4", "text": "Checking for axillary nodes while standing", "isCorrect": false }
      ],
      "explanation": "The image shows the woman lying in a dorsal position with one hand behind her head, using the flat of her fingers to palpate the breast tissue against the chest wall."
    },

    // TOPIC 2: Natural Family Planning
    {
      "id": "comp-t2-q1",
      "type": "fill-blank",
      "question": "In the Basal Body Temperature method, ovulation is indicated by a temperature rise of __b1__ to __b2__ degrees Celsius.",
      "points": 10,
      "topicId": "topic-02",
      "topicName": "Natural Family Planning",
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["0.2"], "caseSensitive": false },
        { "id": "b2", "acceptedAnswers": ["0.5"], "caseSensitive": false }
      ],
      "explanation": "Progesterone released after ovulation causes a slight rise in body temperature (0.2°C to 0.5°C)."
    },
    {
      "id": "comp-t2-q2",
      "type": "multiple-choice",
      "question": "Which quality of cervical mucus indicates the fertile phase?",
      "points": 5,
      "topicId": "topic-02",
      "topicName": "Natural Family Planning",
      "options": [
        { "id": "opt1", "text": "Thick, sticky, and opaque", "isCorrect": false },
        { "id": "opt2", "text": "Scanty and milky", "isCorrect": false },
        { "id": "opt3", "text": "Slippery, stretchy, and like raw egg white", "isCorrect": true },
        { "id": "opt4", "text": "Dry or absent", "isCorrect": false }
      ],
      "explanation": "During the fertile phase, high estrogen levels cause mucus to become profuse, slippery, stretchy (spinnbarkeit), and clear to facilitate sperm transport."
    },
    {
      "id": "comp-t2-q3",
      "type": "true-false",
      "question": "For Lactational Amenorrhoea Method (LAM) to be effective, the baby must be less than 6 months old.",
      "points": 5,
      "topicId": "topic-02",
      "topicName": "Natural Family Planning",
      "correctAnswer": true,
      "explanation": "LAM criteria include: amenorrhea, full breastfeeding, and the infant being less than 6 months old."
    },
    {
      "id": "comp-t2-q4",
      "type": "matching",
      "question": "Match the menstrual cycle phase with its description:",
      "points": 10,
      "topicId": "topic-02",
      "topicName": "Natural Family Planning",
      "pairs": [
        { "id": "p1", "left": "Proliferative Phase", "right": "Endometrium thickens under estrogen influence" },
        { "id": "p2", "left": "Secretory Phase", "right": "Endometrium becomes spongy under progesterone" },
        { "id": "p3", "left": "Menstrual Phase", "right": "Shedding of functional layer of endometrium" }
      ]
    },

    // TOPIC 3: Hormonal Contraceptives
    {
      "id": "comp-t3-q1",
      "type": "multiple-select",
      "question": "Which of the following are mechanisms of action for Combined Oral Contraceptives (COCs)? (Select all that apply)",
      "points": 10,
      "topicId": "topic-03",
      "topicName": "Hormonal Contraceptives",
      "options": [
        { "id": "opt1", "text": "Inhibits ovulation by suppressing FSH", "isCorrect": true },
        { "id": "opt2", "text": "Thickens cervical mucus", "isCorrect": true },
        { "id": "opt3", "text": "Creates a hostile endometrium for implantation", "isCorrect": true },
        { "id": "opt4", "text": "Physically blocks sperm entry", "isCorrect": false }
      ],
      "explanation": "COCs work by inhibiting ovulation, thickening cervical mucus to prevent sperm penetration, and making the endometrium unsuitable for implantation."
    },
    {
      "id": "comp-t3-q2",
      "type": "multiple-choice",
      "question": "Which client is absolutely contra-indicated for Combined Oral Contraceptives?",
      "points": 5,
      "topicId": "topic-03",
      "topicName": "Hormonal Contraceptives",
      "options": [
        { "id": "opt1", "text": "A 25-year-old woman with acne", "isCorrect": false },
        { "id": "opt2", "text": "A breastfeeding mother 3 weeks postpartum", "isCorrect": true },
        { "id": "opt3", "text": "A woman with a history of dysmenorrhea", "isCorrect": false },
        { "id": "opt4", "text": "A nulliparous woman", "isCorrect": false }
      ],
      "explanation": "Breastfeeding mothers less than 6 months postpartum (and especially < 6 weeks) should not use COCs as estrogen can diminish milk supply."
    },
    {
      "id": "comp-t3-q3",
      "type": "multiple-choice",
      "question": "What is the correct timing for taking the 75mcg emergency contraceptive pill (e.g., Postinor)?",
      "points": 5,
      "topicId": "topic-03",
      "topicName": "Hormonal Contraceptives",
      "options": [
        { "id": "opt1", "text": "Within 24 hours only", "isCorrect": false },
        { "id": "opt2", "text": "One tablet within 72 hours, repeat in 12 hours", "isCorrect": true },
        { "id": "opt3", "text": "Four tablets immediately", "isCorrect": false },
        { "id": "opt4", "text": "Daily for 5 days", "isCorrect": false }
      ],
      "explanation": "The standard regimen for 75mcg pills is one tablet within 72 hours of unprotected sex, followed by a second tablet 12 hours later."
    },
    {
      "id": "comp-t3-q4",
      "type": "fill-blank",
      "question": "Depo Provera is an injectable contraceptive given every __b1__ months.",
      "points": 5,
      "topicId": "topic-03",
      "topicName": "Hormonal Contraceptives",
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["3", "three"], "caseSensitive": false }
      ],
      "explanation": "Depo Provera (DMPA) is administered every 3 months (12 weeks)."
    },

    // TOPIC 4: Other Methods (IUCD, VSC, Barrier)
    {
      "id": "comp-t4-q1",
      "type": "ordering",
      "question": "Order the steps for IUCD insertion:",
      "points": 10,
      "topicId": "topic-04",
      "topicName": "Other Methods",
      "items": [
        { "id": "step1", "text": "Perform bimanual examination", "correctPosition": 1 },
        { "id": "step2", "text": "Insert speculum and visualize cervix", "correctPosition": 2 },
        { "id": "step3", "text": "Apply tenaculum to align uterus", "correctPosition": 3 },
        { "id": "step4", "text": "Sound the uterus to measure size", "correctPosition": 4 },
        { "id": "step5", "text": "Load and insert the IUCD", "correctPosition": 5 },
        { "id": "step6", "text": "Trim threads and remove instruments", "correctPosition": 6 }
      ],
      "explanation": "Correct order ensures safety: exam first, then visualization, stabilization, measurement, insertion, and completion."
    },
    {
      "id": "comp-t4-q2",
      "type": "multiple-choice",
      "question": "What instructions must be given to a man after a vasectomy?",
      "points": 5,
      "topicId": "topic-04",
      "topicName": "Other Methods",
      "options": [
        { "id": "opt1", "text": "He is sterile immediately.", "isCorrect": false },
        { "id": "opt2", "text": "He must use backup contraception for 10-15 ejaculations.", "isCorrect": true },
        { "id": "opt3", "text": "The procedure is easily reversible.", "isCorrect": false },
        { "id": "opt4", "text": "It will affect his sexual performance/libido.", "isCorrect": false }
      ],
      "explanation": "Vasectomy is not effective immediately. Semen remains in the ducts and requires 10-15 ejaculations (or about 3 months) to clear."
    },
    {
      "id": "comp-t4-q3",
      "type": "true-false",
      "question": "The diaphragm can be removed immediately after sexual intercourse.",
      "points": 5,
      "topicId": "topic-04",
      "topicName": "Other Methods",
      "correctAnswer": false,
      "explanation": "The diaphragm must remain in place for at least 6 hours after intercourse to ensure spermicidal action is effective."
    },
    {
      "id": "comp-t4-q4",
      "type": "matching",
      "question": "Match the IUCD mechanism of action (SOPIE) letter to its meaning:",
      "points": 10,
      "topicId": "topic-04",
      "topicName": "Other Methods",
      "pairs": [
        { "id": "p1", "left": "S", "right": "Spermatozoa immobility" },
        { "id": "p2", "left": "O", "right": "Ovum motility increased" },
        { "id": "p3", "left": "P", "right": "Prostaglandin production" },
        { "id": "p4", "left": "I", "right": "Implantation interfered with" }
      ]
    },
    {
      "id": "comp-t4-q5",
      "type": "image-based",
      "question": "Identify the contraceptive method shown in the diagram:",
      "points": 5,
      "topicId": "topic-04",
      "topicName": "Other Methods",
      "media": {
        "type": "image",
        "url": "assets/images/image-20260112-53ef62a3.jpeg",
        "alt": "Diagram of uterus with T-shaped device",
        "caption": "Contraceptive Device in Situ"
      },
      "options": [
        { "id": "opt1", "text": "Diaphragm", "isCorrect": false },
        { "id": "opt2", "text": "Intrauterine Contraceptive Device (IUCD)", "isCorrect": true },
        { "id": "opt3", "text": "Tubal Ligation", "isCorrect": false },
        { "id": "opt4", "text": "Implant", "isCorrect": false }
      ],
      "explanation": "The image shows a T-shaped device (likely a Copper T) positioned inside the uterine cavity."
    }
  ]
});