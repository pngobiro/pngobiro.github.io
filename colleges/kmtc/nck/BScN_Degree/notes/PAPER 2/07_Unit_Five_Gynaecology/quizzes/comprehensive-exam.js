registerQuiz("comprehensive-exam", {
    "schemaVersion": "1.0",
    "quizId": "comprehensive-exam",
    "metadata": {
        "title": "Comprehensive Final Exam: Gynaecology",
        "description": "A comprehensive assessment covering all 6 topics of Unit 5: Gynaecology, including investigations, disorders, bleeding in pregnancy, and neoplasms.",
        "examType": "comprehensive",
        "topicsCovered": [
            "topic-01-investigations",
            "topic-02-menstrual-disorders",
            "topic-03-bleeding-pregnancy",
            "topic-04-genital-disorders",
            "topic-05-infertility-menopause",
            "topic-06-neoplasms"
        ],
        "difficulty": "advanced",
        "estimatedTime": 60,
        "passingScore": 75,
        "createdAt": "2026-01-13T10:00:00Z",
        "tags": ["final", "comprehensive", "gynaecology", "exam"]
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
        // TOPIC 1: INVESTIGATIONS
        {
            "id": "comp-q1",
            "topicId": "topic-01-investigations",
            "topicName": "Gynaecological Investigations",
            "type": "multiple-choice",
            "question": "When recording menstrual history, what does the notation 'K 13 5/28 regular' indicate?",
            "points": 2,
            "options": [
                { "id": "a", "text": "Menarche at 13, bleeding for 5 days, cycle length 28 days", "isCorrect": true },
                { "id": "b", "text": "Menarche at 13, 5 cycles per year, age 28", "isCorrect": false },
                { "id": "c", "text": "13 pregnancies, 5 children, 28 years old", "isCorrect": false },
                { "id": "d", "text": "Cycle day 13, 5 days flow, 28 pads used", "isCorrect": false }
            ],
            "explanation": "'K' stands for menarche age (13), the numerator (5) is the duration of flow, and the denominator (28) is the cycle length."
        },
        {
            "id": "comp-q2",
            "topicId": "topic-01-investigations",
            "topicName": "Gynaecological Investigations",
            "type": "matching",
            "question": "Match the diagnostic procedure with its description:",
            "points": 4,
            "pairs": [
                { "id": "p1", "left": "Hysterosalpingogram", "right": "X-ray study of uterus and tubes using contrast medium" },
                { "id": "p2", "left": "Laparoscopy", "right": "Visualisation of pelvic structures via sub-umbilical incision" },
                { "id": "p3", "left": "Hysteroscopy", "right": "Visualisation of the uterine cavity using a scope" },
                { "id": "p4", "left": "Colposcopy", "right": "Binocular inspection of the cervix with magnification" }
            ],
            "explanation": "HSG uses x-rays/contrast; Laparoscopy views the peritoneal cavity; Hysteroscopy views inside the uterus; Colposcopy inspects the cervix."
        },
        {
            "id": "comp-q3",
            "topicId": "topic-01-investigations",
            "topicName": "Gynaecological Investigations",
            "type": "multiple-select",
            "question": "Which of the following are contraindicated for Hysteroscopy? (Select all that apply)",
            "points": 3,
            "options": [
                { "id": "a", "text": "Cervical carcinoma", "isCorrect": true },
                { "id": "b", "text": "Infertility", "isCorrect": false },
                { "id": "c", "text": "Endometrial carcinoma", "isCorrect": true },
                { "id": "d", "text": "Retained IUCD", "isCorrect": false }
            ],
            "explanation": "Hysteroscopy is contraindicated in cervical or endometrial carcinoma due to the risk of disseminating cancer cells. It is indicated for infertility and retained IUCD."
        },

        // TOPIC 2: MENSTRUAL DISORDERS
        {
            "id": "comp-q4",
            "topicId": "topic-02-menstrual-disorders",
            "topicName": "Menstrual Disorders",
            "type": "fill-blank",
            "question": "The absence of menstruation is known as __1__. If menstruation has never occurred in a woman over 17, it is called __2__.",
            "points": 4,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["amenorrhoea", "amenorrhea"], "caseSensitive": false },
                { "id": "2", "acceptedAnswers": ["primary amenorrhoea", "primary amenorrhea"], "caseSensitive": false }
            ],
            "explanation": "Amenorrhoea is the absence of flow. Primary amenorrhoea is when it has never occurred by age 17."
        },
        {
            "id": "comp-q5",
            "topicId": "topic-02-menstrual-disorders",
            "topicName": "Menstrual Disorders",
            "type": "multiple-choice",
            "question": "Which condition is the most common cause of secondary dysmenorrhoea?",
            "points": 2,
            "options": [
                { "id": "a", "text": "Uterine fibroids", "isCorrect": false },
                { "id": "b", "text": "Chronic Pelvic Inflammatory Disease (PID)", "isCorrect": true },
                { "id": "c", "text": "Endometrial polyps", "isCorrect": false },
                { "id": "d", "text": "Cervical stenosis", "isCorrect": false }
            ],
            "explanation": "In this country, the most common cause of secondary dysmenorrhoea is chronic PID."
        },
        {
            "id": "comp-q6",
            "topicId": "topic-02-menstrual-disorders",
            "topicName": "Menstrual Disorders",
            "type": "multiple-choice",
            "question": "What is the definition of Menorrhagia?",
            "points": 2,
            "options": [
                { "id": "a", "text": "Bleeding between periods", "isCorrect": false },
                { "id": "b", "text": "Normal cycle with excessive blood loss (>70ml)", "isCorrect": true },
                { "id": "c", "text": "Infrequent menstruation", "isCorrect": false },
                { "id": "d", "text": "Painful menstruation", "isCorrect": false }
            ],
            "explanation": "Menorrhagia is defined as cyclical bleeding that is excessive in amount (approx >70ml) or duration."
        },

        // TOPIC 3: BLEEDING IN PREGNANCY
        {
            "id": "comp-q7",
            "topicId": "topic-03-bleeding-pregnancy",
            "topicName": "Bleeding in Pregnancy",
            "type": "matching",
            "question": "Match the type of abortion with its clinical presentation:",
            "points": 4,
            "pairs": [
                { "id": "p1", "left": "Threatened Abortion", "right": "Slight bleeding, os closed, pregnancy may continue" },
                { "id": "p2", "left": "Inevitable Abortion", "right": "Strong contractions, dilated cervix, abortion will occur" },
                { "id": "p3", "left": "Incomplete Abortion", "right": "Profuse bleeding, some products retained" },
                { "id": "p4", "left": "Missed Abortion", "right": "Foetus dead, retained in uterus, brown discharge" }
            ],
            "explanation": "Threatened has a closed os; Inevitable has a dilated os; Incomplete has retained products; Missed involves a dead foetus retained for weeks."
        },
        {
            "id": "comp-q8",
            "topicId": "topic-03-bleeding-pregnancy",
            "topicName": "Bleeding in Pregnancy",
            "type": "image-based",
            "question": "Identify the most common site for an ectopic pregnancy (The Ampulla):",
            "points": 3,
            "imageUrl": "assets/images/image-20260113-dc519d58.jpeg",
            "imageAlt": "Diagram of ectopic pregnancy sites",
            "hotspots": [
                { "id": "h1", "x": 25, "y": 20, "radius": 10, "label": "Ampulla", "isCorrect": true },
                { "id": "h2", "x": 45, "y": 15, "radius": 10, "label": "Isthmus", "isCorrect": false },
                { "id": "h3", "x": 60, "y": 30, "radius": 10, "label": "Interstitial", "isCorrect": false }
            ],
            "explanation": "The Ampulla is the most common site for ectopic implantation."
        },
        {
            "id": "comp-q9",
            "topicId": "topic-03-bleeding-pregnancy",
            "topicName": "Bleeding in Pregnancy",
            "type": "multiple-choice",
            "question": "Which symptom distinguishes a ruptured ectopic pregnancy from a simple abortion?",
            "points": 2,
            "options": [
                { "id": "a", "text": "Bleeding precedes pain", "isCorrect": false },
                { "id": "b", "text": "Pain almost invariably precedes bleeding", "isCorrect": true },
                { "id": "c", "text": "The cervix is closed", "isCorrect": false },
                { "id": "d", "text": "Fever is always present", "isCorrect": false }
            ],
            "explanation": "In abortion, bleeding usually precedes pain, while in ruptured tubal pregnancy pain almost invariably precedes bleeding."
        },

        // TOPIC 4: GENITAL DISORDERS
        {
            "id": "comp-q10",
            "topicId": "topic-04-genital-disorders",
            "topicName": "Genital Disorders",
            "type": "fill-blank",
            "question": "Herniation of the bladder through the anterior vaginal wall is called __1__, while herniation of the rectum through the posterior vaginal wall is called __2__.",
            "points": 4,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["cystocele"], "caseSensitive": false },
                { "id": "2", "acceptedAnswers": ["rectocele"], "caseSensitive": false }
            ],
            "explanation": "Cystocele affects the bladder (anterior), Rectocele affects the rectum (posterior)."
        },
        {
            "id": "comp-q11",
            "topicId": "topic-04-genital-disorders",
            "topicName": "Genital Disorders",
            "type": "multiple-choice",
            "question": "What is the primary cause of Vesicovaginal Fistula (VVF) in developing countries?",
            "points": 2,
            "options": [
                { "id": "a", "text": "Radiation therapy", "isCorrect": false },
                { "id": "b", "text": "Obstructed labour", "isCorrect": true },
                { "id": "c", "text": "Surgical accident", "isCorrect": false },
                { "id": "d", "text": "Advanced cancer", "isCorrect": false }
            ],
            "explanation": "Obstructed labour accounts for 85% of VVF cases in developing countries due to pressure necrosis."
        },
        {
            "id": "comp-q12",
            "topicId": "topic-04-genital-disorders",
            "topicName": "Genital Disorders",
            "type": "true-false",
            "question": "A third-degree uterine prolapse (procidentia) means the entire uterus has prolapsed outside the vulva.",
            "points": 2,
            "correctAnswer": true,
            "explanation": "Third degree prolapse, or procidentia, involves the complete protrusion of the uterus outside the vulva."
        },

        // TOPIC 5: INFERTILITY & MENOPAUSE
        {
            "id": "comp-q13",
            "topicId": "topic-05-infertility-menopause",
            "topicName": "Infertility & Menopause",
            "type": "multiple-choice",
            "question": "Infertility is defined as the inability to achieve pregnancy after what period of unprotected intercourse?",
            "points": 2,
            "options": [
                { "id": "a", "text": "6 months", "isCorrect": false },
                { "id": "b", "text": "1 year", "isCorrect": true },
                { "id": "c", "text": "2 years", "isCorrect": false },
                { "id": "d", "text": "5 years", "isCorrect": false }
            ],
            "explanation": "Infertility is defined as failure to conceive after one year of regular unprotected intercourse."
        },
        {
            "id": "comp-q14",
            "topicId": "topic-05-infertility-menopause",
            "topicName": "Infertility & Menopause",
            "type": "multiple-select",
            "question": "Which of the following are common climacteric symptoms? (Select all that apply)",
            "points": 3,
            "options": [
                { "id": "a", "text": "Hot flushes", "isCorrect": true },
                { "id": "b", "text": "Weight loss", "isCorrect": false },
                { "id": "c", "text": "Osteoporosis", "isCorrect": true },
                { "id": "d", "text": "Atrophic vaginal changes", "isCorrect": true }
            ],
            "explanation": "Hot flushes, osteoporosis, and atrophic changes are common. Weight gain (not loss) is typically associated with menopause."
        },
        {
            "id": "comp-q15",
            "topicId": "topic-05-infertility-menopause",
            "topicName": "Infertility & Menopause",
            "type": "short-answer",
            "question": "What is the recommended temperature for the scrotal contents compared to the body temperature for spermatogenesis?",
            "points": 3,
            "keywords": ["below", "lower", "1 degree", "1°", "one degree"],
            "minKeywords": 1,
            "modelAnswer": "About 1 degree Centigrade below normal body temperature.",
            "maxLength": 100
        },

        // TOPIC 6: NEOPLASMS
        {
            "id": "comp-q16",
            "topicId": "topic-06-neoplasms",
            "topicName": "Neoplastic Disorders",
            "type": "matching",
            "question": "Match the uterine fibroid type with its location:",
            "points": 4,
            "pairs": [
                { "id": "p1", "left": "Interstitial", "right": "Within the myometrium" },
                { "id": "p2", "left": "Subserous", "right": "Outside the uterus, covered by peritoneum" },
                { "id": "p3", "left": "Submucous", "right": "Near the endometrium/uterine cavity" },
                { "id": "p4", "left": "Cervical", "right": "Arising in the cervix" }
            ],
            "explanation": "Interstitial=In wall; Subserous=Outside surface; Submucous=Inside cavity; Cervical=In cervix."
        },
        {
            "id": "comp-q17",
            "topicId": "topic-06-neoplasms",
            "topicName": "Neoplastic Disorders",
            "type": "multiple-choice",
            "question": "Which of the following is a key sign of Hydatidiform Mole?",
            "points": 2,
            "options": [
                { "id": "a", "text": "Uterus smaller than expected", "isCorrect": false },
                { "id": "b", "text": "High levels of HCG after 12 weeks", "isCorrect": true },
                { "id": "c", "text": "Presence of foetal heart tones", "isCorrect": false },
                { "id": "d", "text": "Low blood pressure", "isCorrect": false }
            ],
            "explanation": "Molar pregnancy is characterized by high HCG levels, a uterus larger than expected, and absence of foetal heart tones."
        },
        {
            "id": "comp-q18",
            "topicId": "topic-06-neoplasms",
            "topicName": "Neoplastic Disorders",
            "type": "multiple-choice",
            "question": "What is the recommended frequency for a Pap smear test for women of reproductive age?",
            "points": 2,
            "options": [
                { "id": "a", "text": "Every month", "isCorrect": false },
                { "id": "b", "text": "Once every year", "isCorrect": true },
                { "id": "c", "text": "Every 5 years", "isCorrect": false },
                { "id": "d", "text": "Only when symptoms appear", "isCorrect": false }
            ],
            "explanation": "Women of reproductive age should take the Papanicolaou (Pap smear) test once every year to detect cervical cancer early."
        }
    ]
});