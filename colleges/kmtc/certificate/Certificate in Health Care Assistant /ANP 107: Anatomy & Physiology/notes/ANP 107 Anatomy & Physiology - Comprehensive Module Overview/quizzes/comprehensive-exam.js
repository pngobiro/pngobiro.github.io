registerQuiz("comprehensive-exam", {
  "schemaVersion": "1.0",
  "quizId": "comprehensive-exam",
  "metadata": {
    "title": "Comprehensive Final Exam",
    "description": "Final assessment covering Anatomy & Physiology Units 1-6.",
    "examType": "comprehensive",
    "topicsCovered": [
      "topic-01-levels-organization",
      "topic-02-support-movement",
      "topic-03-integration-coordination",
      "topic-04-transportation",
      "topic-05-absorption-excretion",
      "topic-06-reproduction"
    ],
    "difficulty": "advanced",
    "estimatedTime": 90,
    "passingScore": 70,
    "createdAt": "2022-05-20T00:00:00Z",
    "tags": ["final", "comprehensive", "anatomy", "physiology"]
  },
  "settings": {
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "showFeedback": "end",
    "allowRetry": true,
    "showCorrectAnswers": true,
    "timeLimit": 5400
  },
  "questions": [
    /* ================= UNIT 1: LEVELS OF ORGANIZATION ================= */
    {
      "id": "u1-q1",
      "topicId": "topic-01-levels-organization",
      "topicName": "Unit 1: Organization",
      "type": "multiple-choice",
      "question": "Which body plane divides the body into equal right and left halves?",
      "points": 1,
      "options": [
        { "id": "a", "text": "Transverse plane", "isCorrect": false },
        { "id": "b", "text": "Frontal plane", "isCorrect": false },
        { "id": "c", "text": "Mid-sagittal plane", "isCorrect": true },
        { "id": "d", "text": "Oblique plane", "isCorrect": false }
      ],
      "explanation": "The mid-sagittal plane divides the body vertically into equal left and right halves."
    },
    {
      "id": "u1-q2",
      "topicId": "topic-01-levels-organization",
      "topicName": "Unit 1: Organization",
      "type": "fill-blank",
      "question": "The relative stability of the body's internal environment despite external changes is called __b1__.",
      "points": 1,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["homeostasis"], "caseSensitive": false }
      ],
      "explanation": "Homeostasis is the body's ability to maintain stable internal conditions."
    },
    {
      "id": "u1-q3",
      "topicId": "topic-01-levels-organization",
      "topicName": "Unit 1: Organization",
      "type": "matching",
      "question": "Match the body cavity with the organs it contains:",
      "points": 2,
      "pairs": [
        { "id": "p1", "left": "Thoracic Cavity", "right": "Heart and Lungs" },
        { "id": "p2", "left": "Abdominal Cavity", "right": "Stomach and Liver" },
        { "id": "p3", "left": "Pelvic Cavity", "right": "Urinary Bladder and Rectum" },
        { "id": "p4", "left": "Cephalic Cavity", "right": "Brain" }
      ]
    },

    /* ================= UNIT 3: INTEGRATION & COORDINATION ================= */
    {
      "id": "u3-q1",
      "topicId": "topic-03-integration-coordination",
      "topicName": "Unit 3: Integration",
      "type": "multiple-choice",
      "question": "Which part of the neuron is specialized to receive information?",
      "points": 1,
      "media": {
        "type": "image",
        "url": "assets/images/image-20260110-bc2ec243.jpeg",
        "alt": "Diagram of a neuron",
        "caption": "Structure of a Neuron"
      },
      "options": [
        { "id": "a", "text": "Axon", "isCorrect": false },
        { "id": "b", "text": "Dendrite", "isCorrect": true },
        { "id": "c", "text": "Soma", "isCorrect": false },
        { "id": "d", "text": "Myelin Sheath", "isCorrect": false }
      ],
      "explanation": "Dendrites are the feeler-like structures extending from the soma that receive signals from other neurons."
    },
    {
      "id": "u3-q2",
      "topicId": "topic-03-integration-coordination",
      "topicName": "Unit 3: Integration",
      "type": "multiple-choice",
      "question": "Which part of the brain is primarily responsible for coordination, posture, and balance?",
      "points": 1,
      "options": [
        { "id": "a", "text": "Cerebrum", "isCorrect": false },
        { "id": "b", "text": "Cerebellum", "isCorrect": true },
        { "id": "c", "text": "Hypothalamus", "isCorrect": false },
        { "id": "d", "text": "Medulla Oblongata", "isCorrect": false }
      ],
      "explanation": "The Cerebellum, located behind the pons, controls fine motor movement, balance, and posture."
    },
    {
      "id": "u3-q3",
      "topicId": "topic-03-integration-coordination",
      "topicName": "Unit 3: Integration",
      "type": "ordering",
      "question": "Arrange the layers of the meninges from outermost to innermost:",
      "points": 2,
      "items": [
        { "id": "i1", "text": "Dura Mater", "correctPosition": 1 },
        { "id": "i2", "text": "Arachnoid Mater", "correctPosition": 2 },
        { "id": "i3", "text": "Pia Mater", "correctPosition": 3 }
      ]
    },
    {
      "id": "u3-q4",
      "topicId": "topic-03-integration-coordination",
      "topicName": "Unit 3: Integration",
      "type": "matching",
      "question": "Match the hormone with the gland that secretes it:",
      "points": 2,
      "pairs": [
        { "id": "p1", "left": "Growth Hormone", "right": "Anterior Pituitary" },
        { "id": "p2", "left": "Oxytocin", "right": "Posterior Pituitary" },
        { "id": "p3", "left": "Insulin", "right": "Pancreas" },
        { "id": "p4", "left": "Thyroxine (T4)", "right": "Thyroid Gland" }
      ]
    },

    /* ================= UNIT 4: TRANSPORTATION ================= */
    {
      "id": "u4-q1",
      "topicId": "topic-04-transportation",
      "topicName": "Unit 4: Transportation",
      "type": "multiple-choice",
      "question": "Which component of blood is primarily responsible for transporting oxygen?",
      "points": 1,
      "options": [
        { "id": "a", "text": "Leukocytes", "isCorrect": false },
        { "id": "b", "text": "Thrombocytes", "isCorrect": false },
        { "id": "c", "text": "Erythrocytes", "isCorrect": true },
        { "id": "d", "text": "Plasma proteins", "isCorrect": false }
      ],
      "explanation": "Erythrocytes (Red Blood Cells) contain hemoglobin which binds to and transports oxygen."
    },
    {
      "id": "u4-q2",
      "topicId": "topic-04-transportation",
      "topicName": "Unit 4: Transportation",
      "type": "image-based",
      "question": "Identify the Left Ventricle in the diagram below:",
      "points": 2,
      "imageUrl": "assets/images/image-20260110-53de0c80.jpeg",
      "imageAlt": "Diagram of the heart chambers",
      "hotspots": [
        { "id": "h1", "x": 65, "y": 65, "radius": 15, "label": "Left Ventricle", "isCorrect": true },
        { "id": "h2", "x": 35, "y": 65, "radius": 15, "label": "Right Ventricle", "isCorrect": false },
        { "id": "h3", "x": 65, "y": 35, "radius": 12, "label": "Left Atrium", "isCorrect": false },
        { "id": "h4", "x": 35, "y": 35, "radius": 12, "label": "Right Atrium", "isCorrect": false }
      ]
    },
    {
      "id": "u4-q3",
      "topicId": "topic-04-transportation",
      "topicName": "Unit 4: Transportation",
      "type": "fill-blank",
      "question": "The natural pacemaker of the heart is the __b1__ node.",
      "points": 1,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["sinoatrial", "SA", "S.A."], "caseSensitive": false }
      ],
      "explanation": "The Sinoatrial (SA) node initiates the electrical impulse that begins the heartbeat."
    },
    {
      "id": "u4-q4",
      "topicId": "topic-04-transportation",
      "topicName": "Unit 4: Transportation",
      "type": "true-false",
      "question": "Arteries always carry oxygenated blood away from the heart.",
      "points": 1,
      "correctAnswer": false,
      "explanation": "False. While arteries carry blood away from the heart, the Pulmonary Artery carries deoxygenated blood from the right ventricle to the lungs."
    },

    /* ================= UNIT 5: ABSORPTION & EXCRETION ================= */
    {
      "id": "u5-q1",
      "topicId": "topic-05-absorption-excretion",
      "topicName": "Unit 5: Absorption/Excretion",
      "type": "ordering",
      "question": "Order the segments of the small intestine from proximal (stomach) to distal (large intestine):",
      "points": 2,
      "items": [
        { "id": "i1", "text": "Duodenum", "correctPosition": 1 },
        { "id": "i2", "text": "Jejunum", "correctPosition": 2 },
        { "id": "i3", "text": "Ileum", "correctPosition": 3 }
      ]
    },
    {
      "id": "u5-q2",
      "topicId": "topic-05-absorption-excretion",
      "topicName": "Unit 5: Absorption/Excretion",
      "type": "multiple-select",
      "question": "Which of the following are accessory organs of the digestive system? (Select all that apply)",
      "points": 2,
      "options": [
        { "id": "a", "text": "Liver", "isCorrect": true },
        { "id": "b", "text": "Stomach", "isCorrect": false },
        { "id": "c", "text": "Pancreas", "isCorrect": true },
        { "id": "d", "text": "Gall Bladder", "isCorrect": true },
        { "id": "e", "text": "Esophagus", "isCorrect": false }
      ],
      "partialCredit": true
    },
    {
      "id": "u5-q3",
      "topicId": "topic-05-absorption-excretion",
      "topicName": "Unit 5: Absorption/Excretion",
      "type": "multiple-choice",
      "question": "What is the functional unit of the kidney?",
      "points": 1,
      "options": [
        { "id": "a", "text": "Neuron", "isCorrect": false },
        { "id": "b", "text": "Alveolus", "isCorrect": false },
        { "id": "c", "text": "Nephron", "isCorrect": true },
        { "id": "d", "text": "Glomerulus", "isCorrect": false }
      ],
      "explanation": "The nephron is the microscopic structural and functional unit of the kidney."
    },
    {
      "id": "u5-q4",
      "topicId": "topic-05-absorption-excretion",
      "topicName": "Unit 5: Absorption/Excretion",
      "type": "fill-blank",
      "question": "The movement of air into the lungs is called __b1__.",
      "points": 1,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["inhalation", "inspiration"], "caseSensitive": false }
      ]
    },

    /* ================= UNIT 6: REPRODUCTION ================= */
    {
      "id": "u6-q1",
      "topicId": "topic-06-reproduction",
      "topicName": "Unit 6: Reproduction",
      "type": "multiple-choice",
      "question": "Where does fertilization of the ovum typically occur?",
      "points": 1,
      "options": [
        { "id": "a", "text": "Ovary", "isCorrect": false },
        { "id": "b", "text": "Uterus", "isCorrect": false },
        { "id": "c", "text": "Fallopian Tube (Ampulla)", "isCorrect": true },
        { "id": "d", "text": "Vagina", "isCorrect": false }
      ],
      "explanation": "Fertilization typically occurs in the ampulla of the uterine (Fallopian) tubes."
    },
    {
      "id": "u6-q2",
      "topicId": "topic-06-reproduction",
      "topicName": "Unit 6: Reproduction",
      "type": "matching",
      "question": "Match the male reproductive structure with its function:",
      "points": 2,
      "pairs": [
        { "id": "p1", "left": "Testes", "right": "Production of sperm and testosterone" },
        { "id": "p2", "left": "Epididymis", "right": "Maturation and storage of sperm" },
        { "id": "p3", "left": "Vas Deferens", "right": "Transport of sperm to urethra" },
        { "id": "p4", "left": "Prostate Gland", "right": "Secretion of fluid to nourish sperm" }
      ]
    },
    {
      "id": "u6-q3",
      "topicId": "topic-06-reproduction",
      "topicName": "Unit 6: Reproduction",
      "type": "true-false",
      "question": "The genotype 'Tt' is an example of a homozygous condition.",
      "points": 1,
      "correctAnswer": false,
      "explanation": "False. 'Tt' represents a heterozygous condition (different alleles). 'TT' or 'tt' would be homozygous."
    },
    {
      "id": "u6-q4",
      "topicId": "topic-06-reproduction",
      "topicName": "Unit 6: Reproduction",
      "type": "ordering",
      "question": "Order the phases of the menstrual cycle:",
      "points": 2,
      "items": [
        { "id": "i1", "text": "Menstrual Phase", "correctPosition": 1 },
        { "id": "i2", "text": "Follicular/Proliferative Phase", "correctPosition": 2 },
        { "id": "i3", "text": "Ovulation", "correctPosition": 3 },
        { "id": "i4", "text": "Luteal/Secretory Phase", "correctPosition": 4 }
      ]
    }
  ]
});