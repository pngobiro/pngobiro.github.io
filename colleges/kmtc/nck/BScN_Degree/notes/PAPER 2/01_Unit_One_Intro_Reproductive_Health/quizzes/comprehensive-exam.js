registerQuiz("comprehensive-exam", {
  "schemaVersion": "1.0",
  "quizId": "comprehensive-exam",
  "metadata": {
    "title": "Comprehensive Final Exam: Unit One",
    "description": "A comprehensive assessment covering Historical Background, Adolescent Health, Gender Issues, and Safe Motherhood.",
    "examType": "comprehensive",
    "topicsCovered": ["topic-01", "topic-02", "topic-03", "topic-04"],
    "difficulty": "advanced",
    "estimatedTime": 45,
    "passingScore": 75,
    "createdAt": "2026-01-11T12:00:00Z",
    "tags": ["final", "comprehensive", "reproductive-health", "kenya"]
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
    // --- TOPIC 01: Historical Background & Policies ---
    {
      "id": "t1-q1",
      "type": "multiple-choice",
      "question": "Which conference marked a major shift from vertical family planning programs to comprehensive integrated reproductive health services?",
      "points": 1,
      "topicId": "topic-01",
      "topicName": "History & Policies",
      "options": [
        { "id": "a", "text": "Beijing Conference 1995", "isCorrect": false },
        { "id": "b", "text": "ICPD Cairo 1994", "isCorrect": true },
        { "id": "c", "text": "Nairobi Conference 1987", "isCorrect": false },
        { "id": "d", "text": "Alma Ata 1978", "isCorrect": false }
      ],
      "explanation": "The 1994 International Conference on Population and Development (ICPD) in Cairo marked the turning point towards comprehensive, integrated RH services."
    },
    {
      "id": "t1-q2",
      "type": "multiple-choice",
      "question": "The 'Supermarket Approach' in reproductive health refers to:",
      "points": 1,
      "topicId": "topic-01",
      "topicName": "History & Policies",
      "options": [
        { "id": "a", "text": "Selling contraceptives in supermarkets", "isCorrect": false },
        { "id": "b", "text": "Providing all RH services under one roof during the same visit", "isCorrect": true },
        { "id": "c", "text": "Allowing patients to choose their own drugs", "isCorrect": false },
        { "id": "d", "text": "Privatizing health services", "isCorrect": false }
      ],
      "explanation": "Integrated RH services aim to provide a defined package of services on all days, during the same visit, under one roof—similar to a supermarket."
    },
    {
      "id": "t1-q3",
      "type": "multiple-select",
      "question": "Select the components that are part of the National Reproductive Health Strategy Implementation Plan. (Select all that apply)",
      "points": 2,
      "topicId": "topic-01",
      "topicName": "History & Policies",
      "options": [
        { "id": "a", "text": "Safe Motherhood and Child Survival", "isCorrect": true },
        { "id": "b", "text": "Management of STIs/HIV/AIDS", "isCorrect": true },
        { "id": "c", "text": "Gender and Reproductive Rights", "isCorrect": true },
        { "id": "d", "text": "Free housing for all mothers", "isCorrect": false }
      ],
      "partialCredit": true,
      "explanation": "The plan priorities include Safe Motherhood, Family Planning, STI/HIV management, Adolescent Health, Gender issues, Infertility, Cancer screening, and Care of the elderly."
    },
    {
      "id": "t1-q4",
      "type": "matching",
      "question": "Match the level of health care service with its primary provider/characteristic:",
      "points": 4,
      "topicId": "topic-01",
      "topicName": "History & Policies",
      "pairs": [
        { "id": "p1", "left": "Community Level", "right": "CORPs and CBDs" },
        { "id": "p2", "left": "Dispensary", "right": "Community Health Nurse (Manager)" },
        { "id": "p3", "left": "Health Centre", "right": "Clinical Officer In-charge" },
        { "id": "p4", "left": "Tertiary Level", "right": "Specialists (Referral Hospital)" }
      ]
    },
    {
      "id": "t1-q5",
      "type": "true-false",
      "question": "The Safe Motherhood Initiative (SMI) was launched in Nairobi in 1987.",
      "points": 1,
      "topicId": "topic-01",
      "topicName": "History & Policies",
      "correctAnswer": true,
      "explanation": "The SMI was launched at the Conference on Better Health for Women and Children in Nairobi, 1987."
    },
    {
      "id": "t1-q6",
      "type": "multiple-choice",
      "question": "According to the WHO definition, Reproductive Health implies:",
      "points": 1,
      "topicId": "topic-01",
      "topicName": "History & Policies",
      "options": [
        { "id": "a", "text": "Merely the absence of disease in the reproductive tract", "isCorrect": false },
        { "id": "b", "text": "Complete physical, mental and social well-being in matters relating to the reproductive system", "isCorrect": true },
        { "id": "c", "text": "The ability to have as many children as possible", "isCorrect": false },
        { "id": "d", "text": "Access to free medical care for women only", "isCorrect": false }
      ],
      "explanation": "RH is a state of complete physical, mental and social well-being in all matters relating to the reproductive system, not merely the absence of disease."
    },
    {
      "id": "t1-q7",
      "type": "ordering",
      "question": "Arrange these events in the evolution of RH in Kenya in chronological order:",
      "points": 3,
      "topicId": "topic-01",
      "topicName": "History & Policies",
      "items": [
        { "id": "i1", "text": "Establishment of Family Planning Programme", "correctPosition": 1 },
        { "id": "i2", "text": "Establishment of MCH/FP Programme (Integration)", "correctPosition": 2 },
        { "id": "i3", "text": "Launch of Safe Motherhood Initiative", "correctPosition": 3 },
        { "id": "i4", "text": "ICPD Cairo Conference", "correctPosition": 4 }
      ]
    },
    {
      "id": "t1-q8",
      "type": "fill-blank",
      "question": "At the district level, the __b1__ is in charge of both private and public health services.",
      "points": 2,
      "topicId": "topic-01",
      "topicName": "History & Policies",
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["Medical Officer of Health", "DMOH", "District Medical Officer of Health"], "caseSensitive": false }
      ],
      "explanation": "The District Medical Officer of Health (DMOH) oversees health services at the secondary/district level."
    },
    {
      "id": "t1-q9",
      "type": "multiple-choice",
      "question": "Which of the following is NOT a strategy supporting the implementation of RH services?",
      "points": 1,
      "topicId": "topic-01",
      "topicName": "History & Policies",
      "options": [
        { "id": "a", "text": "Human resource development", "isCorrect": false },
        { "id": "b", "text": "Integration of services", "isCorrect": false },
        { "id": "c", "text": "Promoting vertical parallel programs", "isCorrect": true },
        { "id": "d", "text": "Operational research", "isCorrect": false }
      ],
      "explanation": "The strategy explicitly shifted AWAY from vertical programs towards integrated comprehensive services."
    },
    {
      "id": "t1-q10",
      "type": "true-false",
      "question": "Infertility prevention is considered a component of the National Reproductive Health Strategy.",
      "points": 1,
      "topicId": "topic-01",
      "topicName": "History & Policies",
      "correctAnswer": true,
      "explanation": "Prevention and appropriate management of infertility is a priority component of the RH plan."
    },

    // --- TOPIC 02: Adolescent and Youth Health ---
    {
      "id": "t2-q1",
      "type": "multiple-choice",
      "question": "What is the approximate age range for 'Adolescence' as shared by both sexes?",
      "points": 1,
      "topicId": "topic-02",
      "topicName": "Adolescent Health",
      "options": [
        { "id": "a", "text": "9 - 14 years", "isCorrect": false },
        { "id": "b", "text": "13 - 18 years", "isCorrect": true },
        { "id": "c", "text": "18 - 24 years", "isCorrect": false },
        { "id": "d", "text": "15 - 21 years", "isCorrect": false }
      ],
      "explanation": "While onset varies, the two sexes share an approximate range marking adolescence from 13 - 18 years."
    },
    {
      "id": "t2-q2",
      "type": "matching",
      "question": "Match the hormone with the secondary sexual characteristics it influences:",
      "points": 2,
      "topicId": "topic-02",
      "topicName": "Adolescent Health",
      "pairs": [
        { "id": "p1", "left": "Oestrogen", "right": "Breast development, hip broadening (Girls)" },
        { "id": "p2", "left": "Androgens", "right": "Voice deepening, muscular strength (Boys)" }
      ]
    },
    {
      "id": "t2-q3",
      "type": "multiple-select",
      "question": "Which of the following are psychological/emotional characteristics of adolescence? (Select all that apply)",
      "points": 2,
      "topicId": "topic-02",
      "topicName": "Adolescent Health",
      "options": [
        { "id": "a", "text": "Pulling away from parents/independence", "isCorrect": true },
        { "id": "b", "text": "Reduced influence of peers", "isCorrect": false },
        { "id": "c", "text": "Increased mood swings", "isCorrect": true },
        { "id": "d", "text": "Decreased interest in the opposite sex", "isCorrect": false }
      ],
      "explanation": "Adolescents typically seek independence, value peer opinions highly, experience mood swings, and have increased interest in the opposite sex."
    },
    {
      "id": "t2-q4",
      "type": "multiple-choice",
      "question": "What is 'spermache'?",
      "points": 1,
      "topicId": "topic-02",
      "topicName": "Adolescent Health",
      "options": [
        { "id": "a", "text": "The onset of menstruation", "isCorrect": false },
        { "id": "b", "text": "The first ejaculation", "isCorrect": true },
        { "id": "c", "text": "The development of facial hair", "isCorrect": false },
        { "id": "d", "text": "The breaking of the voice", "isCorrect": false }
      ],
      "explanation": "Spermache refers to the first ejaculation in boys, often occurring as nocturnal emissions."
    },
    {
      "id": "t2-q5",
      "type": "fill-blank",
      "question": "Life planning skills are divided into two components: __b1__ verification and __b2__ making abilities.",
      "points": 2,
      "topicId": "topic-02",
      "topicName": "Adolescent Health",
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["Values", "Value"], "caseSensitive": false },
        { "id": "b2", "acceptedAnswers": ["Decision"], "caseSensitive": false }
      ],
      "explanation": "Life planning skills consist of Values/Values verification and Decision making abilities."
    },
    {
      "id": "t2-q6",
      "type": "multiple-choice",
      "question": "Which skill is defined as 'being confident and able to make a stand on one's words, actions or beliefs'?",
      "points": 1,
      "topicId": "topic-02",
      "topicName": "Adolescent Health",
      "options": [
        { "id": "a", "text": "Negotiation", "isCorrect": false },
        { "id": "b", "text": "Assertiveness", "isCorrect": true },
        { "id": "c", "text": "Communication", "isCorrect": false },
        { "id": "d", "text": "Aggression", "isCorrect": false }
      ],
      "explanation": "Assertiveness includes the ability to say NO to drugs or sexual advances based on one's beliefs."
    },
    {
      "id": "t2-q7",
      "type": "true-false",
      "question": "Research shows that sex education encourages earlier and increased sexual activity among youth.",
      "points": 1,
      "topicId": "topic-02",
      "topicName": "Adolescent Health",
      "correctAnswer": false,
      "explanation": "Studies have shown that sex education leads to safe behavior and does NOT encourage earlier or increased sexual activity."
    },
    {
      "id": "t2-q8",
      "type": "multiple-select",
      "question": "Which of the following are principles for working effectively with young people? (Select all that apply)",
      "points": 2,
      "topicId": "topic-02",
      "topicName": "Adolescent Health",
      "options": [
        { "id": "a", "text": "Ensure privacy and confidentiality", "isCorrect": true },
        { "id": "b", "text": "Be judgmental to correct their behavior", "isCorrect": false },
        { "id": "c", "text": "Identify and encourage peer leadership", "isCorrect": true },
        { "id": "d", "text": "Ignore cultural sensitivities", "isCorrect": false }
      ],
      "explanation": "Effective work requires privacy, confidentiality, peer leadership, and cultural sensitivity. Being judgmental creates barriers."
    },
    {
      "id": "t2-q9",
      "type": "multiple-choice",
      "question": "Approximately what percentage of Kenyan adolescents (15-19 years) are estimated to be HIV positive (females)?",
      "points": 1,
      "topicId": "topic-02",
      "topicName": "Adolescent Health",
      "options": [
        { "id": "a", "text": "4.2%", "isCorrect": false },
        { "id": "b", "text": "10%", "isCorrect": false },
        { "id": "c", "text": "22.3%", "isCorrect": true },
        { "id": "d", "text": "45%", "isCorrect": false }
      ],
      "explanation": "HIV prevalence among female adolescents (15-19) stands at 22.3%, compared to 4.2% for males."
    },
    {
      "id": "t2-q10",
      "type": "short-answer",
      "question": "Why is 'Abstinence' considered a positive value to reinforce in youth?",
      "points": 2,
      "topicId": "topic-02",
      "topicName": "Adolescent Health",
      "keywords": ["HIV", "AIDS", "pregnancy", "unwanted", "STIs", "health"],
      "minKeywords": 2,
      "modelAnswer": "Abstinence reduces the spread of HIV/AIDS/STIs and prevents unwanted pregnancies and their accompanying health consequences.",
      "maxLength": 200
    },

    // --- TOPIC 03: Gender Issues & Rights ---
    {
      "id": "t3-q1",
      "type": "multiple-choice",
      "question": "What distinguishes 'Gender' from 'Sex'?",
      "points": 1,
      "topicId": "topic-03",
      "topicName": "Gender & Rights",
      "options": [
        { "id": "a", "text": "Gender is biological; Sex is social", "isCorrect": false },
        { "id": "b", "text": "Gender refers to social/cultural roles; Sex refers to biological characteristics", "isCorrect": true },
        { "id": "c", "text": "They mean exactly the same thing", "isCorrect": false },
        { "id": "d", "text": "Gender is fixed at birth; Sex changes over time", "isCorrect": false }
      ],
      "explanation": "Sex is biological (male/female). Gender refers to the economic, social, or cultural attributes associated with being male or female."
    },
    {
      "id": "t3-q2",
      "type": "multiple-choice",
      "question": "Which type of FGM involves the removal of the clitoris, labia minora, and stitching/narrowing of the vaginal opening?",
      "points": 1,
      "topicId": "topic-03",
      "topicName": "Gender & Rights",
      "options": [
        { "id": "a", "text": "Circumcision", "isCorrect": false },
        { "id": "b", "text": "Excision", "isCorrect": false },
        { "id": "c", "text": "Infibulation", "isCorrect": true },
        { "id": "d", "text": "Intermediate", "isCorrect": false }
      ],
      "explanation": "Infibulation is the most severe form, involving cutting and pinning/stitching the vulva to leave only a small opening."
    },
    {
      "id": "t3-q3",
      "type": "true-false",
      "question": "Rape is primarily a crime of sexual desire rather than power.",
      "points": 1,
      "topicId": "topic-03",
      "topicName": "Gender & Rights",
      "correctAnswer": false,
      "explanation": "Rape rarely has anything to do with sexual seductiveness; it has everything to do with power, coercion, and violence."
    },
    {
      "id": "t3-q4",
      "type": "multiple-select",
      "question": "What are the potential health consequences of Female Genital Mutilation? (Select all that apply)",
      "points": 2,
      "topicId": "topic-03",
      "topicName": "Gender & Rights",
      "options": [
        { "id": "a", "text": "Obstructed labour", "isCorrect": true },
        { "id": "b", "text": "Haemorrhage and infection", "isCorrect": true },
        { "id": "c", "text": "Increased sexual pleasure", "isCorrect": false },
        { "id": "d", "text": "Loss of sexual pleasure", "isCorrect": true }
      ],
      "explanation": "FGM causes medical complications (pain, bleeding), obstetric complications (obstructed labour), and sexual issues (loss of pleasure)."
    },
    {
      "id": "t3-q5",
      "type": "multiple-choice",
      "question": "The practice where a widow is 'inherited' by a brother or relative of the late husband is known as:",
      "points": 1,
      "topicId": "topic-03",
      "topicName": "Gender & Rights",
      "options": [
        { "id": "a", "text": "Polygamy", "isCorrect": false },
        { "id": "b", "text": "Wife Inheritance", "isCorrect": true },
        { "id": "c", "text": "Dowry", "isCorrect": false },
        { "id": "d", "text": "Incest", "isCorrect": false }
      ],
      "explanation": "Wife inheritance is a cultural practice intended to maintain lineage but is now a major risk factor for HIV transmission."
    },
    {
      "id": "t3-q6",
      "type": "matching",
      "question": "Match the type of abuse with its description:",
      "points": 3,
      "topicId": "topic-03",
      "topicName": "Gender & Rights",
      "pairs": [
        { "id": "p1", "left": "Physical Abuse", "right": "Hitting, kicking, using weapons" },
        { "id": "p2", "left": "Economic Abuse", "right": "Denial of land ownership or income control" },
        { "id": "p3", "left": "Sexual Abuse", "right": "Rape, incest, forced prostitution" }
      ]
    },
    {
      "id": "t3-q7",
      "type": "multiple-choice",
      "question": "Which of the following is an example of 'Instrumental Aggression'?",
      "points": 1,
      "topicId": "topic-03",
      "topicName": "Gender & Rights",
      "options": [
        { "id": "a", "text": "A crime of passion committed in anger", "isCorrect": false },
        { "id": "b", "text": "A robber attacking a victim solely to get their wallet", "isCorrect": true },
        { "id": "c", "text": "A husband beating his wife due to annoyance", "isCorrect": false },
        { "id": "d", "text": "Fighting due to immediate provocation", "isCorrect": false }
      ],
      "explanation": "Instrumental aggression is used to achieve a goal (like robbery) without necessarily involving anger, unlike hostile aggression."
    },
    {
      "id": "t3-q8",
      "type": "fill-blank",
      "question": "Violence against women causes more death and disability in women aged 15-44 than __b1__, malaria, traffic accidents, and war combined.",
      "points": 2,
      "topicId": "topic-03",
      "topicName": "Gender & Rights",
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["cancer", "Cancer"], "caseSensitive": false }
      ],
      "explanation": "According to the World Bank, gender-based violence is a leading cause of death/disability, exceeding cancer in this age group."
    },
    {
      "id": "t3-q9",
      "type": "multiple-select",
      "question": "How does gender violence affect reproductive health? (Select all that apply)",
      "points": 2,
      "topicId": "topic-03",
      "topicName": "Gender & Rights",
      "options": [
        { "id": "a", "text": "Increases risk of unwanted pregnancy", "isCorrect": true },
        { "id": "b", "text": "Increases vulnerability to STIs/HIV", "isCorrect": true },
        { "id": "c", "text": "Causes chronic pelvic pain", "isCorrect": true },
        { "id": "d", "text": "Improves negotiation skills", "isCorrect": false }
      ],
      "explanation": "Violence limits negotiation power, increases biological vulnerability to HIV (trauma), and causes chronic health issues."
    },
    {
      "id": "t3-q10",
      "type": "multiple-choice",
      "question": "In the context of Reproductive Health Rights, what is the 'Cairo Program of Action' (1994) primarily concerned with?",
      "points": 1,
      "topicId": "topic-03",
      "topicName": "Gender & Rights",
      "options": [
        { "id": "a", "text": "Enforcing population control", "isCorrect": false },
        { "id": "b", "text": "The right of couples to decide freely the number and spacing of children", "isCorrect": true },
        { "id": "c", "text": "Promoting home births", "isCorrect": false },
        { "id": "d", "text": "Banning contraceptives", "isCorrect": false }
      ],
      "explanation": "It defined RH rights as the basic right to decide freely and responsibly the number, spacing, and timing of children."
    },

    // --- TOPIC 04: Safe Motherhood ---
    {
      "id": "t4-q1",
      "type": "multiple-choice",
      "question": "Which of the following is NOT one of the 8 Pillars of Safe Motherhood?",
      "points": 1,
      "topicId": "topic-04",
      "topicName": "Safe Motherhood",
      "options": [
        { "id": "a", "text": "Family Planning", "isCorrect": false },
        { "id": "b", "text": "Essential Obstetric Care", "isCorrect": false },
        { "id": "c", "text": "Free Primary Education", "isCorrect": true },
        { "id": "d", "text": "Post Abortion Care", "isCorrect": false }
      ],
      "explanation": "Free Primary Education is not one of the 8 pillars (though education is a foundation measure). The pillars are FP, ANC, Clean Delivery, EOC, Post Abortion Care, PMTCT, Postpartum Care, Neonatal Care."
    },
    {
      "id": "t4-q2",
      "type": "multiple-choice",
      "question": "What is the single leading cause of maternal death (accounting for ~25%)?",
      "points": 1,
      "topicId": "topic-04",
      "topicName": "Safe Motherhood",
      "options": [
        { "id": "a", "text": "Infection (Sepsis)", "isCorrect": false },
        { "id": "b", "text": "Postpartum Haemorrhage (Bleeding)", "isCorrect": true },
        { "id": "c", "text": "Hypertension", "isCorrect": false },
        { "id": "d", "text": "Unsafe Abortion", "isCorrect": false }
      ],
      "explanation": "Postpartum haemorrhage causes approximately 25% of maternal deaths."
    },
    {
      "id": "t4-q3",
      "type": "fill-blank",
      "question": "Approximately __b1__% of maternal deaths occur during labour, delivery, and the first 24 hours after delivery.",
      "points": 2,
      "topicId": "topic-04",
      "topicName": "Safe Motherhood",
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["50", "fifty"], "caseSensitive": false }
      ],
      "explanation": "The most critical time is labour, delivery, and immediately postpartum, accounting for 50% of deaths."
    },
    {
      "id": "t4-q4",
      "type": "multiple-select",
      "question": "Which of the following are components of Basic Essential Obstetric Care (EOC)? (Select all that apply)",
      "points": 2,
      "topicId": "topic-04",
      "topicName": "Safe Motherhood",
      "options": [
        { "id": "a", "text": "Parenteral antibiotics", "isCorrect": true },
        { "id": "b", "text": "Manual removal of placenta", "isCorrect": true },
        { "id": "c", "text": "Caesarean Section", "isCorrect": false },
        { "id": "d", "text": "Removal of retained products (MVA)", "isCorrect": true }
      ],
      "explanation": "Basic EOC includes antibiotics, oxytocics, anticonvulsants, manual removal of placenta, MVA, and assisted vaginal delivery. C-Section is part of Comprehensive EOC."
    },
    {
      "id": "t4-q5",
      "type": "true-false",
      "question": "Focused Antenatal Care (FANC) recommends a minimum of 4 visits for a normal pregnancy.",
      "points": 1,
      "topicId": "topic-04",
      "topicName": "Safe Motherhood",
      "correctAnswer": true,
      "explanation": "FANC emphasizes quality over quantity, recommending 4 focused visits for uncomplicated pregnancies."
    },
    {
      "id": "t4-q6",
      "type": "multiple-choice",
      "question": "What is the primary definition of Safe Motherhood?",
      "points": 1,
      "topicId": "topic-04",
      "topicName": "Safe Motherhood",
      "options": [
        { "id": "a", "text": "Giving birth in a hospital", "isCorrect": false },
        { "id": "b", "text": "A woman's ability to have a safe and healthy pregnancy and delivery", "isCorrect": true },
        { "id": "c", "text": "Using contraceptives to stop childbearing", "isCorrect": false },
        { "id": "d", "text": "Ensuring the child survives to age 5", "isCorrect": false }
      ],
      "explanation": "Safe motherhood is defined as a woman's ability to have a safe and healthy pregnancy and delivery."
    },
    {
      "id": "t4-q7",
      "type": "image-based",
      "question": "Based on the concept of 'Timing of Maternal Deaths', click the sector representing the period with the HIGHEST risk (50%):",
      "points": 3,
      "topicId": "topic-04",
      "topicName": "Safe Motherhood",
      "imageUrl": "assets/images/image-20260111-cb7f3147.jpeg",
      "imageAlt": "Pie chart showing timing of maternal deaths",
      "options": [
        { "id": "a", "text": "During Pregnancy (25%)", "isCorrect": false },
        { "id": "b", "text": "Labour/Delivery/First 24hrs (50%)", "isCorrect": true },
        { "id": "c", "text": "2-7 weeks after delivery (20%)", "isCorrect": false },
        { "id": "d", "text": "2-3 weeks after delivery (5%)", "isCorrect": false }
      ],
      "explanation": "50% of deaths occur during labour, delivery, and the first 24 hours postpartum."
    },
    {
      "id": "t4-q8",
      "type": "matching",
      "question": "Match the obstetric complication with its specific proven intervention:",
      "points": 3,
      "topicId": "topic-04",
      "topicName": "Safe Motherhood",
      "pairs": [
        { "id": "p1", "left": "Eclampsia (Hypertension)", "right": "Anti-convulsants" },
        { "id": "p2", "left": "Obstructed Labour", "right": "Partograph / C-Section" },
        { "id": "p3", "left": "Sepsis (Infection)", "right": "Antibiotics / Clean practices" }
      ]
    },
    {
      "id": "t4-q9",
      "type": "multiple-choice",
      "question": "What does PMTCT stand for?",
      "points": 1,
      "topicId": "topic-04",
      "topicName": "Safe Motherhood",
      "options": [
        { "id": "a", "text": "Prevention of Malaria Transmission to Children", "isCorrect": false },
        { "id": "b", "text": "Prevention of Mother to Child Transmission (of HIV)", "isCorrect": true },
        { "id": "c", "text": "Program for Maternal Treatment Care and Training", "isCorrect": false },
        { "id": "d", "text": "Post-Natal Maternal Care Treatment", "isCorrect": false }
      ],
      "explanation": "PMTCT stands for Prevention of Mother to Child Transmission of HIV."
    },
    {
      "id": "t4-q10",
      "type": "true-false",
      "question": "The Safe Motherhood Initiative focuses ONLY on reducing maternal mortality, not morbidity or newborn health.",
      "points": 1,
      "topicId": "topic-04",
      "topicName": "Safe Motherhood",
      "correctAnswer": false,
      "explanation": "SMI has evolved to include maternal morbidity, health of the newborn, and the positive health of the mother."
    }
  ]
});