
registerQuiz("comprehensive-exam", {
  "schemaVersion": "1.0",
  "quizId": "comprehensive-exam",
  "metadata": {
    "title": "Final Exam: Gerontological Nursing & Home Based Care",
    "description": "Comprehensive assessment covering aging theories, physiological changes, and home based care principles.",
    "examType": "comprehensive",
    "topicsCovered": ["topic-01", "topic-02"],
    "difficulty": "advanced",
    "estimatedTime": 45,
    "passingScore": 75,
    "createdAt": "2025-12-26T10:00:00Z",
    "tags": ["final", "gerontology", "hbc", "community-health"]
  },
  "settings": {
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "showFeedback": "end",
    "allowRetry": false,
    "showCorrectAnswers": true,
    "timeLimit": 2700
  },
  "questions": [
    // TOPIC 01: GERONTOLOGICAL NURSING QUESTIONS
    {
      "id": "comp-q01",
      "type": "multiple-choice",
      "topicId": "topic-01",
      "topicName": "Gerontological Nursing",
      "question": "What is the primary difference between Gerontology and Geriatrics?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Gerontology is the medical care of the aged, while Geriatrics is the study of aging processes.", "isCorrect": false },
        { "id": "b", "text": "Gerontology is the study of aging processes, while Geriatrics is the medical care of the aged.", "isCorrect": true },
        { "id": "c", "text": "Gerontology focuses only on social aspects, while Geriatrics focuses on biology.", "isCorrect": false },
        { "id": "d", "text": "There is no difference; the terms are synonymous.", "isCorrect": false }
      ],
      "explanation": "Gerontology (geron + logos) is the broad study of aging processes (physical, mental, social), whereas Geriatrics is the specific branch of medicine concerned with the care of the aged."
    },
    {
      "id": "comp-q02",
      "type": "matching",
      "topicId": "topic-01",
      "topicName": "Gerontological Nursing",
      "question": "Match the Aging Theory to its core description:",
      "points": 20,
      "pairs": [
        { "id": "p1", "left": "Disengagement Theory", "right": "Natural withdrawal from social roles" },
        { "id": "p2", "left": "Activity Theory", "right": "Satisfaction comes from staying active" },
        { "id": "p3", "left": "Neuroendocrine Theory", "right": "Decline in hormonal and neuronal output" },
        { "id": "p4", "left": "Wear and Tear Theory", "right": "Body tissues damage over time like a machine" }
      ],
      "explanation": "Disengagement suggests mutual withdrawal is natural; Activity suggests staying active improves satisfaction; Neuroendocrine focuses on hormones/nerves; Wear and Tear views the body as a machine that degrades."
    },
    {
      "id": "comp-q03",
      "type": "multiple-choice",
      "topicId": "topic-01",
      "topicName": "Gerontological Nursing",
      "question": "According to Sang et al (2018), which age range classifies an individual as 'Middle-old'?",
      "points": 10,
      "options": [
        { "id": "a", "text": "65 - 74 years", "isCorrect": false },
        { "id": "b", "text": "75 - 84 years", "isCorrect": true },
        { "id": "c", "text": "85 years and above", "isCorrect": false },
        { "id": "d", "text": "60 - 70 years", "isCorrect": false }
      ],
      "explanation": "Classification: Young-old (65-74), Middle-old (75-84), Old-old (≥85)."
    },
    {
      "id": "comp-q04",
      "type": "multiple-select",
      "topicId": "topic-01",
      "topicName": "Gerontological Nursing",
      "question": "Which of the following are common degenerative changes in the Integumentary (Skin) System? (Select all that apply)",
      "points": 15,
      "options": [
        { "id": "a", "text": "Increased activity of sweat glands", "isCorrect": false },
        { "id": "b", "text": "Loss of skin elasticity and moisture", "isCorrect": true },
        { "id": "c", "text": "Thickening and brittleness of nails", "isCorrect": true },
        { "id": "d", "text": "Decreased sensitivity to temperature", "isCorrect": false },
        { "id": "e", "text": "Reduced blood flow interfering with healing", "isCorrect": true }
      ],
      "explanation": "Integumentary changes include less active sweat/oil glands (dryness), loss of elasticity (wrinkles), brittle nails, and reduced blood flow. Sensitivity to temperature actually INCREASES due to thinning skin/fat loss."
    },
    {
      "id": "comp-q05",
      "type": "true-false",
      "topicId": "topic-01",
      "topicName": "Gerontological Nursing",
      "question": "In the respiratory system of an elderly person, the alveoli become thicker and more elastic to compensate for age.",
      "points": 10,
      "correctAnswer": false,
      "explanation": "False. Alveoli become thinner and LESS elastic, reducing gas exchange efficiency."
    },
    {
      "id": "comp-q06",
      "type": "multiple-choice",
      "topicId": "topic-01",
      "topicName": "Gerontological Nursing",
      "question": "Which principle suggests that reversible conditions in the elderly are often mistaken for normal aging?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Multidisciplinary team approach", "isCorrect": false },
        { "id": "b", "text": "Under-diagnosis of treatable conditions", "isCorrect": true },
        { "id": "c", "text": "Psychosocial approach", "isCorrect": false },
        { "id": "d", "text": "Continuity theory", "isCorrect": false }
      ],
      "explanation": "A key principle is that reversible/treatable conditions (like malnutrition or depression) are often under-diagnosed because symptoms are wrongly attributed to 'just getting old'."
    },
    {
      "id": "comp-q07",
      "type": "fill-blank",
      "topicId": "topic-01",
      "topicName": "Gerontological Nursing",
      "question": "The term __b1__ refers to the prejudgement or discrimination against persons based solely on their age.",
      "points": 10,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["ageism"], "caseSensitive": false }
      ],
      "explanation": "Ageism (coined by Robert Butler) involves stereotypes and discrimination against the elderly."
    },
    {
      "id": "comp-q08",
      "type": "multiple-choice",
      "topicId": "topic-01",
      "topicName": "Gerontological Nursing",
      "question": "When interviewing an elderly patient, which behavior is most appropriate?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Speak primarily to the caregiver to ensure accuracy.", "isCorrect": false },
        { "id": "b", "text": "Stand to the side to avoid intimidation.", "isCorrect": false },
        { "id": "c", "text": "Face the patient directly so they can see your face.", "isCorrect": true },
        { "id": "d", "text": "Speak quickly to minimize fatigue.", "isCorrect": false }
      ],
      "explanation": "You should speak to the patient (not just the caregiver) and face them directly to aid communication, especially if there are hearing/visual deficits."
    },
    {
      "id": "comp-q09",
      "type": "multiple-select",
      "topicId": "topic-01",
      "topicName": "Gerontological Nursing",
      "question": "Which of the following are changes associated with the aging Nervous System? (Select all that apply)",
      "points": 15,
      "options": [
        { "id": "a", "text": "Decreased blood flow to the brain", "isCorrect": true },
        { "id": "b", "text": "Increased sensitivity of nerve endings to pain", "isCorrect": false },
        { "id": "c", "text": "Diminished sensory perception (taste, vision)", "isCorrect": true },
        { "id": "d", "text": "Progressive loss of brain cells", "isCorrect": true }
      ],
      "explanation": "The nervous system experiences decreased blood flow, cell loss, and diminished senses. Nerve endings actually become LESS sensitive, reducing the pain response."
    },
    {
      "id": "comp-q10",
      "type": "multiple-choice",
      "topicId": "topic-01",
      "topicName": "Gerontological Nursing",
      "question": "Which term describes the loss of muscle mass and function associated with aging?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Osteoporosis", "isCorrect": false },
        { "id": "b", "text": "Sarcopenia", "isCorrect": true },
        { "id": "c", "text": "Arthritis", "isCorrect": false },
        { "id": "d", "text": "Kyphosis", "isCorrect": false }
      ],
      "explanation": "Sarcopenia is the specific medical term for the loss of muscle mass and function in the elderly."
    },

    // TOPIC 02: HOME BASED CARE QUESTIONS
    {
      "id": "comp-q11",
      "type": "multiple-choice",
      "topicId": "topic-02",
      "topicName": "Home Based Care",
      "question": "Which of the following is NOT a criterion for a chronic disease?",
      "points": 10,
      "options": [
        { "id": "a", "text": "It is permanent", "isCorrect": false },
        { "id": "b", "text": "It requires long-term supervision", "isCorrect": false },
        { "id": "c", "text": "It is caused by a reversible pathological condition", "isCorrect": true },
        { "id": "d", "text": "It leaves a residual disability", "isCorrect": false }
      ],
      "explanation": "Chronic diseases are caused by NON-reversible pathological conditions. They are permanent and require long-term care."
    },
    {
      "id": "comp-q12",
      "type": "multiple-select",
      "topicId": "topic-02",
      "topicName": "Home Based Care",
      "question": "What are the advantages of Home Based Care to the FAMILY? (Select all that apply)",
      "points": 15,
      "options": [
        { "id": "a", "text": "It is less expensive than hospital care", "isCorrect": true },
        { "id": "b", "text": "It improves family bonding", "isCorrect": true },
        { "id": "c", "text": "It eliminates the need for any medical supervision", "isCorrect": false },
        { "id": "d", "text": "Family members can spend last days with loved ones", "isCorrect": true }
      ],
      "explanation": "HBC is cost-effective, promotes bonding, and allows presence during end-of-life. It does NOT eliminate the need for medical supervision/consultation."
    },
    {
      "id": "comp-q13",
      "type": "matching",
      "topicId": "topic-02",
      "topicName": "Home Based Care",
      "question": "Match the '4 Ms' of Community Resources to their description:",
      "points": 20,
      "pairs": [
        { "id": "m1", "left": "Money", "right": "Financial security (savings, insurance)" },
        { "id": "m2", "left": "Materials", "right": "Food, water, supportive devices" },
        { "id": "m3", "left": "Minutes", "right": "Time spent by caregivers/relatives" },
        { "id": "m4", "left": "Manpower", "right": "Volunteers, health workers, family" }
      ],
      "explanation": "The 4 Ms are Money (finance), Materials (supplies), Minutes (time), and Manpower (people)."
    },
    {
      "id": "comp-q14",
      "type": "ordering",
      "topicId": "topic-02",
      "topicName": "Home Based Care",
      "question": "Arrange the steps of Community Mobilization in the correct logical order:",
      "points": 20,
      "items": [
        { "id": "s1", "text": "Planning and organizing self", "correctPosition": 1 },
        { "id": "s2", "text": "Enter the community and show respect", "correctPosition": 2 },
        { "id": "s3", "text": "Conduct mobilization session (greet, assess knowledge)", "correctPosition": 3 },
        { "id": "s4", "text": "Monitor community response and give feedback", "correctPosition": 4 }
      ],
      "explanation": "1. Plan/Organize -> 2. Enter Community -> 3. Conduct Session -> 4. Monitor Response."
    },
    {
      "id": "comp-q15",
      "type": "fill-blank",
      "topicId": "topic-02",
      "topicName": "Home Based Care",
      "question": "__b1__ is a two-way process of linking a client from one caring service to another.",
      "points": 10,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["referral", "Referral"], "caseSensitive": false }
      ],
      "explanation": "Referral is the process of linking clients between services (e.g., home to hospital or vice versa)."
    },
    {
      "id": "comp-q16",
      "type": "true-false",
      "topicId": "topic-02",
      "topicName": "Home Based Care",
      "question": "Home Based Care is only for patients who are terminally ill and cannot take care of themselves.",
      "points": 10,
      "correctAnswer": false,
      "explanation": "False. HBC concerns those with advanced disease AND those with chronic conditions who CAN take care of themselves (with support)."
    },
    {
      "id": "comp-q17",
      "type": "multiple-choice",
      "topicId": "topic-02",
      "topicName": "Home Based Care",
      "question": "Which provider's primary role includes making initial diagnoses and initiating referral linkages?",
      "points": 10,
      "options": [
        { "id": "a", "text": "The Patient", "isCorrect": false },
        { "id": "b", "text": "The Community Health Worker", "isCorrect": false },
        { "id": "c", "text": "The Health Care Worker", "isCorrect": true },
        { "id": "d", "text": "The Government", "isCorrect": false }
      ],
      "explanation": "Health Care Workers (doctors/nurses) are responsible for medical diagnosis, initial treatment plans, and initiating referrals."
    },
    {
      "id": "comp-q18",
      "type": "multiple-choice",
      "topicId": "topic-02",
      "topicName": "Home Based Care",
      "question": "Which component of HBC involves helping the patient forgive others and allowing religious support?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Clinical Care", "isCorrect": false },
        { "id": "b", "text": "Nursing Care", "isCorrect": false },
        { "id": "c", "text": "Psycho-spiritual Care", "isCorrect": true },
        { "id": "d", "text": "Social Support", "isCorrect": false }
      ],
      "explanation": "Psycho-spiritual care focuses on emotional well-being, forgiveness, and religious/spiritual support."
    },

    // MIXED / ADVANCED QUESTIONS
    {
      "id": "comp-q19",
      "type": "multiple-choice",
      "topicId": "topic-01",
      "topicName": "Gerontological Nursing",
      "question": "Which theory of aging suggests that genetic materials in cells deteriorate over time with no replacement?",
      "points": 15,
      "options": [
        { "id": "a", "text": "Wear and Tear Theory", "isCorrect": false },
        { "id": "b", "text": "Run-Up Programme Theory", "isCorrect": true },
        { "id": "c", "text": "Immune Theory", "isCorrect": false },
        { "id": "d", "text": "Neuroendocrine Theory", "isCorrect": false }
      ],
      "explanation": "The Run-Up Programme Theory posits that genetic material deteriorates and cannot be replaced."
    },
    {
      "id": "comp-q20",
      "type": "multiple-choice",
      "topicId": "topic-02",
      "topicName": "Home Based Care",
      "question": "What is 'Respite Care'?",
      "points": 15,
      "options": [
        { "id": "a", "text": "Permanent institutionalization of the elderly", "isCorrect": false },
        { "id": "b", "text": "Care provided only during the day", "isCorrect": false },
        { "id": "c", "text": "Short-term relief for the primary caregiver", "isCorrect": true },
        { "id": "d", "text": "Palliative care for the dying", "isCorrect": false }
      ],
      "explanation": "Respite care provides short-term relief (hours to weeks) for the primary caregiver to prevent burnout."
    },
    {
      "id": "comp-q21",
      "type": "multiple-select",
      "topicId": "topic-01",
      "topicName": "Gerontological Nursing",
      "question": "Which management strategies are appropriate for digestive system changes in the elderly? (Select all that apply)",
      "points": 15,
      "options": [
        { "id": "a", "text": "High fiber and protein rich diet", "isCorrect": true },
        { "id": "b", "text": "Repair of lost teeth", "isCorrect": true },
        { "id": "c", "text": "Reducing fluid intake to prevent bloating", "isCorrect": false },
        { "id": "d", "text": "Relaxed eating atmosphere", "isCorrect": true }
      ],
      "explanation": "Fluid intake should be ENCOURAGED (not reduced) to prevent constipation. Fiber, dental repair, and a relaxed atmosphere are correct strategies."
    },
    {
      "id": "comp-q22",
      "type": "true-false",
      "topicId": "topic-02",
      "topicName": "Home Based Care",
      "question": "Community mobilization ensures ownership and sustainability of the HBC program.",
      "points": 10,
      "correctAnswer": true,
      "explanation": "True. Involving the community in problem identification and solution finding creates ownership and ensures the program's longevity."
    },
    {
      "id": "comp-q23",
      "type": "fill-blank",
      "topicId": "topic-01",
      "topicName": "Gerontological Nursing",
      "question": "In the male reproductive system, a decrease in testosterone often leads to slow production of __b1__ and less firm __b2__.",
      "points": 15,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["sperms", "sperm"], "caseSensitive": false },
        { "id": "b2", "acceptedAnswers": ["testes", "testicles"], "caseSensitive": false }
      ],
      "explanation": "Lower testosterone results in slower sperm production and smaller/less firm testes."
    },
    {
      "id": "comp-q24",
      "type": "multiple-choice",
      "topicId": "topic-02",
      "topicName": "Home Based Care",
      "question": "Which of the following is an example of a hindrance to community mobilization?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Involvement of local chiefs", "isCorrect": false },
        { "id": "b", "text": "Use of local language", "isCorrect": false },
        { "id": "c", "text": "Lack of proper planning and monitoring", "isCorrect": true },
        { "id": "d", "text": "Identifying local resources", "isCorrect": false }
      ],
      "explanation": "Lack of planning, poor leadership, and lack of information hinder mobilization. The others facilitate it."
    },
    {
      "id": "comp-q25",
      "type": "multiple-choice",
      "topicId": "topic-01",
      "topicName": "Gerontological Nursing",
      "question": "Which vision condition involves the lens becoming opaque?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Presbyopia", "isCorrect": false },
        { "id": "b", "text": "Myopia", "isCorrect": false },
        { "id": "c", "text": "Cataracts", "isCorrect": true },
        { "id": "d", "text": "Glaucoma", "isCorrect": false }
      ],
      "explanation": "Cataracts involve the clouding/opacity of the lens, which can sometimes be treated with silicon prosthesis surgery."
    },
    {
      "id": "comp-q26",
      "type": "matching",
      "topicId": "topic-02",
      "topicName": "Home Based Care",
      "question": "Match the HBC Component to the specific activity:",
      "points": 20,
      "pairs": [
        { "id": "c1", "left": "Nursing Care", "right": "Infection prevention and pain management" },
        { "id": "c2", "left": "Clinical Care", "right": "Early detection and drug adherence" },
        { "id": "c3", "left": "Nutrition", "right": "Addressing mouth ulcers and chewing difficulties" },
        { "id": "c4", "left": "Rehabilitation", "right": "Regaining lost physical/mental abilities" }
      ],
      "explanation": "Nursing care handles hygiene/pain; Clinical care handles diagnosis/drugs; Nutrition handles diet/eating issues; Rehabilitation handles function recovery."
    },
    {
      "id": "comp-q27",
      "type": "true-false",
      "topicId": "topic-01",
      "topicName": "Gerontological Nursing",
      "question": "Sexual desire always decreases in both sexes as they age.",
      "points": 10,
      "correctAnswer": false,
      "explanation": "False. Sexual desire may or may not decrease. In fact, sex can improve muscle tone and circulation in the elderly."
    },
    {
      "id": "comp-q28",
      "type": "multiple-choice",
      "topicId": "topic-02",
      "topicName": "Home Based Care",
      "question": "What is the role of 'Networking' in HBC?",
      "points": 10,
      "options": [
        { "id": "a", "text": "To increase competition between NGOs", "isCorrect": false },
        { "id": "b", "text": "To reduce duplication of work and share information", "isCorrect": true },
        { "id": "c", "text": "To generate profit for health workers", "isCorrect": false },
        { "id": "d", "text": "To replace the role of the government", "isCorrect": false }
      ],
      "explanation": "Networking allows groups to work together, learn from each other, solve complex problems, and reduce duplication of effort."
    },
    {
      "id": "comp-q29",
      "type": "multiple-select",
      "topicId": "topic-01",
      "topicName": "Gerontological Nursing",
      "question": "Which of the following are positive factors that influence aging? (Select all that apply)",
      "points": 15,
      "options": [
        { "id": "a", "text": "Good nutrition", "isCorrect": true },
        { "id": "b", "text": "Social support", "isCorrect": true },
        { "id": "c", "text": "Obesity", "isCorrect": false },
        { "id": "d", "text": "Stress coping resources", "isCorrect": true }
      ],
      "explanation": "Good nutrition, social support, and coping skills are positive factors. Obesity is a negative factor."
    },
    {
      "id": "comp-q30",
      "type": "multiple-choice",
      "topicId": "topic-02",
      "topicName": "Home Based Care",
      "question": "From an HBC perspective, why is it advantageous for a patient to be at home?",
      "points": 10,
      "options": [
        { "id": "a", "text": "They have total freedom to ignore medical advice", "isCorrect": false },
        { "id": "b", "text": "They retain control over their life and enjoy a familiar environment", "isCorrect": true },
        { "id": "c", "text": "They are isolated from family disputes", "isCorrect": false },
        { "id": "d", "text": "They receive less attention than in a hospital", "isCorrect": false }
      ],
      "explanation": "Being at home allows the patient to retain autonomy, enjoy privacy, and stay in a familiar, less stressful environment with family support."
    }
  ]
});