registerQuiz("comprehensive-exam", {
    "schemaVersion": "1.0",
    "quizId": "comprehensive-exam",
    "metadata": {
        "title": "Comprehensive Exam: Unit Two - Pregnancy",
        "description": "A final assessment covering reproductive anatomy, physiology, foetal development, and maternal changes.",
        "examType": "comprehensive",
        "topicsCovered": [
            "topic-01-genitalia",
            "topic-02-hormones-cycle",
            "topic-03-obstetric-anatomy",
            "topic-04-fertilisation-development",
            "topic-05-placenta-cord",
            "topic-06-maternal-changes"
        ],
        "difficulty": "advanced",
        "estimatedTime": 45,
        "passingScore": 70,
        "createdAt": "2026-01-11T12:00:00Z",
        "tags": ["pregnancy", "anatomy", "physiology", "midwifery", "final-exam"]
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
        // TOPIC 01: Anatomy of Reproductive System
        {
            "id": "comp-q01",
            "type": "matching",
            "question": "Match the layer of the uterus with its correct description:",
            "points": 10,
            "topicId": "topic-01-genitalia",
            "topicName": "Reproductive Anatomy",
            "pairs": [
                { "id": "p1", "left": "Endometrium", "right": "Inner lining that changes during the menstrual cycle" },
                { "id": "p2", "left": "Myometrium", "right": "Middle muscular layer, thickest part" },
                { "id": "p3", "left": "Perimetrium", "right": "Double serous membrane extension of the peritoneum" }
            ]
        },
        {
            "id": "comp-q02",
            "type": "ordering",
            "question": "Arrange the parts of the Fallopian tube from the uterus outwards to the ovary:",
            "points": 10,
            "topicId": "topic-01-genitalia",
            "topicName": "Reproductive Anatomy",
            "items": [
                { "id": "i1", "text": "Interstitial portion", "correctPosition": 1 },
                { "id": "i2", "text": "Isthmus", "correctPosition": 2 },
                { "id": "i3", "text": "Ampulla", "correctPosition": 3 },
                { "id": "i4", "text": "Infundibulum", "correctPosition": 4 }
            ]
        },
        {
            "id": "comp-q03",
            "type": "multiple-choice",
            "question": "Which structure holds the uterus in anteversion, especially when the bladder distends?",
            "points": 5,
            "topicId": "topic-01-genitalia",
            "topicName": "Reproductive Anatomy",
            "options": [
                { "id": "a", "text": "Transverse cervical ligaments", "isCorrect": false },
                { "id": "b", "text": "Round ligaments", "isCorrect": true },
                { "id": "c", "text": "Broad ligaments", "isCorrect": false },
                { "id": "d", "text": "Ovarian ligaments", "isCorrect": false }
            ],
            "explanation": "The round ligaments arise at the cornua and hold the fundus forward in anteversion."
        },
        {
            "id": "comp-q04",
            "type": "multiple-choice",
            "question": "Which glands secrete mucus to lubricate the vaginal orifice?",
            "points": 5,
            "topicId": "topic-01-genitalia",
            "topicName": "Reproductive Anatomy",
            "options": [
                { "id": "a", "text": "Skene's glands", "isCorrect": false },
                { "id": "b", "text": "Bartholin's glands", "isCorrect": true },
                { "id": "c", "text": "Montgomery's glands", "isCorrect": false },
                { "id": "d", "text": "Sebaceous glands", "isCorrect": false }
            ],
            "explanation": "Bartholin's glands are two small glands on either side of the vagina that secrete lubricating mucus."
        },

        // TOPIC 02: Hormones & Cycle
        {
            "id": "comp-q05",
            "type": "multiple-choice",
            "question": "Which hormone is primarily responsible for the rupture of the Graafian follicle (ovulation)?",
            "points": 5,
            "topicId": "topic-02-hormones-cycle",
            "topicName": "Hormones & Cycle",
            "options": [
                { "id": "a", "text": "Follicle-Stimulating Hormone (FSH)", "isCorrect": false },
                { "id": "b", "text": "Luteinizing Hormone (LH)", "isCorrect": true },
                { "id": "c", "text": "Progesterone", "isCorrect": false },
                { "id": "d", "text": "Oestrogen", "isCorrect": false }
            ],
            "explanation": "The LH surge influences the development of the corpus luteum and causes the rupture of the mature follicle."
        },
        {
            "id": "comp-q06",
            "type": "multiple-choice",
            "question": "During which phase of the menstrual cycle does the endometrium thicken and become spongy under the influence of progesterone?",
            "points": 5,
            "topicId": "topic-02-hormones-cycle",
            "topicName": "Hormones & Cycle",
            "options": [
                { "id": "a", "text": "Menstrual Phase", "isCorrect": false },
                { "id": "b", "text": "Proliferative Phase", "isCorrect": false },
                { "id": "c", "text": "Secretory/Luteal Phase", "isCorrect": true },
                { "id": "d", "text": "Follicular Phase", "isCorrect": false }
            ],
            "explanation": "The Secretory (or Luteal) phase follows ovulation and prepares the endometrium for potential implantation."
        },
        {
            "id": "comp-q07",
            "type": "multiple-select",
            "question": "Which of the following are effects of Oestrogen? (Select all that apply)",
            "points": 10,
            "topicId": "topic-02-hormones-cycle",
            "topicName": "Hormones & Cycle",
            "options": [
                { "id": "a", "text": "Stimulates growth of secondary sex characteristics", "isCorrect": true },
                { "id": "b", "text": "Suppresses ovulation", "isCorrect": true },
                { "id": "c", "text": "Inhibits lactation", "isCorrect": true },
                { "id": "d", "text": "Maintains the pregnancy after 12 weeks primarily", "isCorrect": false }
            ],
            "partialCredit": true,
            "explanation": "Oestrogen develops secondary sex characteristics, suppresses ovulation, and inhibits lactation. Progesterone is the primary hormone for maintaining pregnancy."
        },

        // TOPIC 03: Obstetric Anatomy
        {
            "id": "comp-q08",
            "type": "image-based",
            "question": "Identify the Gynaecoid pelvis shape based on the brim descriptions:",
            "points": 10,
            "topicId": "topic-03-obstetric-anatomy",
            "topicName": "Obstetric Anatomy",
            "media": {
                "type": "image",
                "url": "assets/images/image-20260111-33b575c8.jpeg",
                "alt": "Gynaecoid Pelvis diagram"
            },
            "options": [
                { "id": "a", "text": "Heart-shaped brim with narrow fore-pelvis", "isCorrect": false },
                { "id": "b", "text": "Rounded brim with generous fore-pelvis", "isCorrect": true },
                { "id": "c", "text": "Kidney-shaped brim with flat sacrum", "isCorrect": false },
                { "id": "d", "text": "Long oval brim with deep sacrum", "isCorrect": false }
            ],
            "explanation": "The Gynaecoid pelvis has a rounded brim and generous fore-pelvis, making it ideal for childbearing."
        },
        {
            "id": "comp-q09",
            "type": "fill-blank",
            "question": "The __b1__ fontanelle is diamond-shaped and typically closes by __b2__ months of age.",
            "points": 10,
            "topicId": "topic-03-obstetric-anatomy",
            "topicName": "Obstetric Anatomy",
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["anterior", "bregma"], "caseSensitive": false },
                { "id": "b2", "acceptedAnswers": ["18", "eighteen"], "caseSensitive": false }
            ],
            "explanation": "The anterior fontanelle (bregma) is diamond-shaped and closes around 18 months."
        },
        {
            "id": "comp-q10",
            "type": "short-answer",
            "question": "Define 'Moulding' in the context of the foetal skull.",
            "points": 10,
            "topicId": "topic-03-obstetric-anatomy",
            "topicName": "Obstetric Anatomy",
            "keywords": ["alteration", "shape", "head", "skull", "overlap", "bones", "birth", "canal", "passage"],
            "minKeywords": 3,
            "modelAnswer": "Moulding is the alteration in the shape of the foetal head (skull bones overlapping) to allow passage through the birth canal.",
            "maxLength": 200
        },
        {
            "id": "comp-q11",
            "type": "multiple-choice",
            "question": "What is the measurement of the sub-occipitobregmatic diameter?",
            "points": 5,
            "topicId": "topic-03-obstetric-anatomy",
            "topicName": "Obstetric Anatomy",
            "options": [
                { "id": "a", "text": "11.5 cm", "isCorrect": false },
                { "id": "b", "text": "13.5 cm", "isCorrect": false },
                { "id": "c", "text": "9.5 cm", "isCorrect": true },
                { "id": "d", "text": "10.0 cm", "isCorrect": false }
            ],
            "explanation": "The sub-occipitobregmatic diameter is 9.5 cm."
        },

        // TOPIC 04: Fertilisation & Development
        {
            "id": "comp-q12",
            "type": "multiple-choice",
            "question": "Where does fertilisation typically take place?",
            "points": 5,
            "topicId": "topic-04-fertilisation-development",
            "topicName": "Fertilisation & Development",
            "options": [
                { "id": "a", "text": "Interstitial portion of the fallopian tube", "isCorrect": false },
                { "id": "b", "text": "Uterine cavity", "isCorrect": false },
                { "id": "c", "text": "Ampulla of the fallopian tube", "isCorrect": true },
                { "id": "d", "text": "Ovary", "isCorrect": false }
            ],
            "explanation": "Fertilisation usually occurs in the ampulla, the widest part of the fallopian tube."
        },
        {
            "id": "comp-q13",
            "type": "matching",
            "question": "Match the temporary foetal circulation structure with its function:",
            "points": 10,
            "topicId": "topic-04-fertilisation-development",
            "topicName": "Fertilisation & Development",
            "pairs": [
                { "id": "p1", "left": "Ductus Venosus", "right": "Connects umbilical vein to inferior vena cava" },
                { "id": "p2", "left": "Foramen Ovale", "right": "Opening between the two atria" },
                { "id": "p3", "left": "Ductus Arteriosus", "right": "Connects pulmonary artery to aorta" },
                { "id": "p4", "left": "Umbilical Vein", "right": "Carries oxygenated blood from placenta to liver" }
            ]
        },
        {
            "id": "comp-q14",
            "type": "ordering",
            "question": "Order the stages of development from fertilisation:",
            "points": 10,
            "topicId": "topic-04-fertilisation-development",
            "topicName": "Fertilisation & Development",
            "items": [
                { "id": "i1", "text": "Zygote", "correctPosition": 1 },
                { "id": "i2", "text": "Morula", "correctPosition": 2 },
                { "id": "i3", "text": "Blastocyst", "correctPosition": 3 },
                { "id": "i4", "text": "Implantation", "correctPosition": 4 }
            ]
        },
        {
            "id": "comp-q15",
            "type": "multiple-choice",
            "question": "At what gestation does the foetal heart begin to beat?",
            "points": 5,
            "topicId": "topic-04-fertilisation-development",
            "topicName": "Fertilisation & Development",
            "options": [
                { "id": "a", "text": "0 - 4 weeks", "isCorrect": true },
                { "id": "b", "text": "8 - 12 weeks", "isCorrect": false },
                { "id": "c", "text": "16 - 20 weeks", "isCorrect": false },
                { "id": "d", "text": "24 - 28 weeks", "isCorrect": false }
            ],
            "explanation": "The heart develops and begins to beat within the first 0-4 weeks."
        },

        // TOPIC 05: Placenta & Cord
        {
            "id": "comp-q16",
            "type": "multiple-choice",
            "question": "How many vessels are normally found in the umbilical cord?",
            "points": 5,
            "topicId": "topic-05-placenta-cord",
            "topicName": "Placenta & Cord",
            "options": [
                { "id": "a", "text": "Two veins and one artery", "isCorrect": false },
                { "id": "b", "text": "Two arteries and one vein", "isCorrect": true },
                { "id": "c", "text": "One artery and one vein", "isCorrect": false },
                { "id": "d", "text": "Two arteries and two veins", "isCorrect": false }
            ],
            "explanation": "The umbilical cord contains two arteries (carrying deoxygenated blood) and one vein (carrying oxygenated blood)."
        },
        {
            "id": "comp-q17",
            "type": "multiple-select",
            "question": "Select the functions of the placenta:",
            "points": 10,
            "topicId": "topic-05-placenta-cord",
            "topicName": "Placenta & Cord",
            "options": [
                { "id": "a", "text": "Respiratory exchange", "isCorrect": true },
                { "id": "b", "text": "Excretion of waste", "isCorrect": true },
                { "id": "c", "text": "Endocrine (hormone production)", "isCorrect": true },
                { "id": "d", "text": "Production of blood cells", "isCorrect": false }
            ],
            "partialCredit": true,
            "explanation": "The placenta handles respiration, nutrition, excretion, protection, storage, and hormone production."
        },
        {
            "id": "comp-q18",
            "type": "multiple-choice",
            "question": "What is a Succenturiate Lobe?",
            "points": 5,
            "topicId": "topic-05-placenta-cord",
            "topicName": "Placenta & Cord",
            "options": [
                { "id": "a", "text": "A placenta with a double fold of amnion/chorion", "isCorrect": false },
                { "id": "b", "text": "A small extra lobe separated from the main placenta", "isCorrect": true },
                { "id": "c", "text": "Insertion of the cord into the membranes", "isCorrect": false },
                { "id": "d", "text": "A placenta divided into three lobes", "isCorrect": false }
            ],
            "explanation": "A succenturiate lobe is a small extra lobe separated from the main placenta, which can cause retention and haemorrhage if missed."
        },

        // TOPIC 06: Maternal Changes
        {
            "id": "comp-q19",
            "type": "multiple-choice",
            "question": "What is the primary cause of 'physiological anaemia' in pregnancy?",
            "points": 10,
            "topicId": "topic-06-maternal-changes",
            "topicName": "Maternal Changes",
            "options": [
                { "id": "a", "text": "Iron deficiency", "isCorrect": false },
                { "id": "b", "text": "Decrease in red blood cell mass", "isCorrect": false },
                { "id": "c", "text": "Plasma volume increasing more than red cell mass (haemodilution)", "isCorrect": true },
                { "id": "d", "text": "Blood loss", "isCorrect": false }
            ],
            "explanation": "Plasma volume increases by ~50% while red cell mass increases by ~18%, leading to haemodilution."
        },
        {
            "id": "comp-q20",
            "type": "true-false",
            "question": "Blood pressure typically increases significantly during the second trimester of a normal pregnancy.",
            "points": 5,
            "topicId": "topic-06-maternal-changes",
            "topicName": "Maternal Changes",
            "correctAnswer": false,
            "explanation": "Blood pressure usually remains normal or drops slightly by the mid-trimester due to vasodilation."
        },
        {
            "id": "comp-q21",
            "type": "fill-blank",
            "question": "The pigmented line running from the pubis to the umbilicus that may appear during pregnancy is called __b1__.",
            "points": 10,
            "topicId": "topic-06-maternal-changes",
            "topicName": "Maternal Changes",
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["linea nigra"], "caseSensitive": false }
            ],
            "explanation": "Linea nigra is the dark pigmented line on the abdomen."
        },
        {
            "id": "comp-q22",
            "type": "multiple-choice",
            "question": "What is the average expected weight gain in a normal pregnancy?",
            "points": 5,
            "topicId": "topic-06-maternal-changes",
            "topicName": "Maternal Changes",
            "options": [
                { "id": "a", "text": "8 kg", "isCorrect": false },
                { "id": "b", "text": "12 kg", "isCorrect": true },
                { "id": "c", "text": "15 kg", "isCorrect": false },
                { "id": "d", "text": "20 kg", "isCorrect": false }
            ],
            "explanation": "The average expected weight gain is approximately 12 kilograms."
        },
        {
            "id": "comp-q23",
            "type": "short-answer",
            "question": "Why does urinary stasis (and increased infection risk) occur in pregnancy?",
            "points": 10,
            "topicId": "topic-06-maternal-changes",
            "topicName": "Maternal Changes",
            "keywords": ["progesterone", "relax", "ureters", "dilation", "kinking", "stasis"],
            "minKeywords": 2,
            "modelAnswer": "Progesterone relaxes the walls of the ureters, causing dilation and kinking, which slows urine flow (stasis).",
            "maxLength": 200
        },
        {
            "id": "comp-q24",
            "type": "multiple-choice",
            "question": "What is the cervical mucous plug that protects from ascending infection called?",
            "points": 5,
            "topicId": "topic-06-maternal-changes",
            "topicName": "Maternal Changes",
            "options": [
                { "id": "a", "text": "Leucorrhoea", "isCorrect": false },
                { "id": "b", "text": "Operculum", "isCorrect": true },
                { "id": "c", "text": "Chloasma", "isCorrect": false },
                { "id": "d", "text": "Striae gravidarum", "isCorrect": false }
            ],
            "explanation": "The operculum is the cervical plug formed by mucus secretion under the influence of progesterone."
        },
        {
            "id": "comp-q25",
            "type": "multiple-choice",
            "question": "Which hormone is primarily responsible for the relaxation of ligaments and muscles in the musculoskeletal system?",
            "points": 5,
            "topicId": "topic-06-maternal-changes",
            "topicName": "Maternal Changes",
            "options": [
                { "id": "a", "text": "Oestrogen", "isCorrect": false },
                { "id": "b", "text": "Progesterone", "isCorrect": true },
                { "id": "c", "text": "HCG", "isCorrect": false },
                { "id": "d", "text": "Prolactin", "isCorrect": false }
            ],
            "explanation": "Progesterone encourages relaxation of ligaments and muscles, increasing pelvic capacity for labour."
        }
    ]
});