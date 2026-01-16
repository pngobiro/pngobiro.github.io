registerQuiz("comprehensive-exam", {
  "schemaVersion": "1.0",
  "quizId": "comprehensive-exam",
  "metadata": {
    "title": "Unit Two: Primary Health Care - Comprehensive Exam",
    "description": "Final assessment covering all topics: Concept, Implementation, Responsibilities, and Achievements/Challenges.",
    "topicId": "unit-2-exam",
    "difficulty": "hard",
    "estimatedTime": 30,
    "passingScore": 80,
    "createdAt": "2026-01-16T00:00:00Z"
  },
  "settings": {
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "showFeedback": "on-submit",
    "allowRetry": true,
    "showCorrectAnswers": true
  },
  "questions": [
    // Topic 1: Concept & Principles
    {
      "id": "q1",
      "type": "multiple-choice",
      "question": "In which year and at which conference was Primary Health Care (PHC) formally defined?",
      "points": 5,
      "options": [
        { "id": "a", "text": "1977 World Health Assembly", "isCorrect": false },
        { "id": "b", "text": "1978 Alma Ata Conference", "isCorrect": true },
        { "id": "c", "text": "1980 Nairobi Summit", "isCorrect": false },
        { "id": "d", "text": "1994 Cairo Conference", "isCorrect": false }
      ],
      "explanation": "PHC was defined at the Alma Ata International Conference in 1978."
    },
    {
      "id": "q2",
      "type": "multiple-select",
      "question": "Which of the following are among the 'Five As' of the PHC concept? (Select all that apply)",
      "points": 5,
      "options": [
        { "id": "a", "text": "Accessible", "isCorrect": true },
        { "id": "b", "text": "Acceptable", "isCorrect": true },
        { "id": "c", "text": "Affordable", "isCorrect": true },
        { "id": "d", "text": "Automated", "isCorrect": false }
      ],
      "explanation": "The 5 As are Accessible, Acceptable, Affordable, Available, and Appropriate Technology."
    },
    {
      "id": "q3",
      "type": "multiple-choice",
      "question": "Which pillar of PHC ensures that health care is based on practical and scientifically sound methods?",
      "points": 5,
      "options": [
        { "id": "a", "text": "Equity", "isCorrect": false },
        { "id": "b", "text": "Science", "isCorrect": true },
        { "id": "c", "text": "Culture", "isCorrect": false },
        { "id": "d", "text": "Sustainability", "isCorrect": false }
      ],
      "explanation": "The 'Science' pillar ensures care is based on practical, scientifically sound, and socially acceptable methods."
    },
    {
      "id": "q4",
      "type": "true-false",
      "question": "PHC is limited solely to health facilities and does not involve the home or family.",
      "points": 5,
      "correctAnswer": false,
      "explanation": "PHC is intended to reach the home and family level and is not limited to health facilities."
    },
    {
      "id": "q5",
      "type": "multiple-choice",
      "question": "What does 'Equity' in PHC refer to?",
      "points": 5,
      "options": [
        { "id": "a", "text": "Using advanced technology", "isCorrect": false },
        { "id": "b", "text": "Universal accessibility and fair distribution of resources", "isCorrect": true },
        { "id": "c", "text": "Community fundraising", "isCorrect": false },
        { "id": "d", "text": "Centralized decision making", "isCorrect": false }
      ],
      "explanation": "Equity means services are universally accessible to individuals and families, addressing inequalities."
    },

    // Topic 2: Implementation
    {
      "id": "q6",
      "type": "multiple-choice",
      "question": "How many levels of health care provision exist in the Kenyan system as described?",
      "points": 5,
      "options": [
        { "id": "a", "text": "Three", "isCorrect": false },
        { "id": "b", "text": "Five", "isCorrect": false },
        { "id": "c", "text": "Seven", "isCorrect": true },
        { "id": "d", "text": "Ten", "isCorrect": false }
      ],
      "explanation": "There are seven levels: Family, Community, Locational, Divisional, District, Provincial, and National."
    },
    {
      "id": "q7",
      "type": "multiple-choice",
      "question": "Which level is considered the 'nucleus' and main focus of each essential element of PHC?",
      "points": 5,
      "options": [
        { "id": "a", "text": "The Family Level", "isCorrect": true },
        { "id": "b", "text": "The District Level", "isCorrect": false },
        { "id": "c", "text": "The National Level", "isCorrect": false },
        { "id": "d", "text": "The Provincial Level", "isCorrect": false }
      ],
      "explanation": "The family is the basic unit of social organization and the nucleus of PHC implementation."
    },
    {
      "id": "q8",
      "type": "multiple-choice",
      "question": "Which level of the health system is the focal point for the implementation of PHC?",
      "points": 5,
      "options": [
        { "id": "a", "text": "Divisional Level", "isCorrect": false },
        { "id": "b", "text": "District Level", "isCorrect": true },
        { "id": "c", "text": "Community Level", "isCorrect": false },
        { "id": "d", "text": "Provincial Level", "isCorrect": false }
      ],
      "explanation": "The District Level is the focal point where management is decentralised."
    },
    {
      "id": "q9",
      "type": "multiple-select",
      "question": "Which of the following are responsibilities of the District Health Management Team (DHMT)? (Select all that apply)",
      "points": 5,
      "options": [
        { "id": "a", "text": "Coordinating PHC activities", "isCorrect": true },
        { "id": "b", "text": "Distributing drug kits to health units", "isCorrect": true },
        { "id": "c", "text": "Formulating National Policy", "isCorrect": false },
        { "id": "d", "text": "Supervising community health workers directly", "isCorrect": false }
      ],
      "explanation": "The DHMT coordinates activities and distributes supplies at the district level; National Policy is a national responsibility."
    },
    {
      "id": "q10",
      "type": "multiple-choice",
      "question": "At the family level, the 'three pots' system is related to which PHC element?",
      "points": 5,
      "options": [
        { "id": "a", "text": "Nutrition", "isCorrect": false },
        { "id": "b", "text": "Water and Sanitation", "isCorrect": true },
        { "id": "c", "text": "Immunisation", "isCorrect": false },
        { "id": "d", "text": "Dental Care", "isCorrect": false }
      ],
      "explanation": "The 'three pots' system is a method for water storage and purification."
    },

    // Topic 3: Responsibilities
    {
      "id": "q11",
      "type": "multiple-choice",
      "question": "What is the primary role of the Government at the National Level regarding PHC?",
      "points": 5,
      "options": [
        { "id": "a", "text": "Direct supervision of CHWs", "isCorrect": false },
        { "id": "b", "text": "Ensuring consistent policy and strategy", "isCorrect": true },
        { "id": "c", "text": "Managing village committees", "isCorrect": false },
        { "id": "d", "text": "Providing home-based care", "isCorrect": false }
      ],
      "explanation": "The National level is responsible for policy, strategy, and overall coordination."
    },
    {
      "id": "q12",
      "type": "multiple-choice",
      "question": "Which committee is responsible for planning and coordination of all development work in a district?",
      "points": 5,
      "options": [
        { "id": "a", "text": "District Health Management Team (DHMT)", "isCorrect": false },
        { "id": "b", "text": "District Development Committee (DDC)", "isCorrect": true },
        { "id": "c", "text": "Village Health Committee", "isCorrect": false },
        { "id": "d", "text": "Provincial Health Team", "isCorrect": false }
      ],
      "explanation": "The DDC, chaired by the District Commissioner, coordinates all development work."
    },
    {
      "id": "q13",
      "type": "multiple-select",
      "question": "What are responsibilities of the Village Health Development Committee? (Select all that apply)",
      "points": 5,
      "options": [
        { "id": "a", "text": "Identifying health problems", "isCorrect": true },
        { "id": "b", "text": "Selecting Community Health Workers (CHWs)", "isCorrect": true },
        { "id": "c", "text": "Performing surgeries", "isCorrect": false },
        { "id": "d", "text": "Initiating income generating projects", "isCorrect": true }
      ],
      "explanation": "Village committees identify problems, select CHWs, and initiate projects."
    },
    {
      "id": "q14",
      "type": "true-false",
      "question": "NGOs like AMREF and World Vision have no role in Community Based Health Care (CBHC) projects.",
      "points": 5,
      "correctAnswer": false,
      "explanation": "NGOs have been actively involved in CBHC projects since the mid-1970s."
    },
    {
      "id": "q15",
      "type": "multiple-choice",
      "question": "What is a key responsibility of households in PHC?",
      "points": 5,
      "options": [
        { "id": "a", "text": "Formulating drug policies", "isCorrect": false },
        { "id": "b", "text": "Recognizing ill health early", "isCorrect": true },
        { "id": "c", "text": "Training doctors", "isCorrect": false },
        { "id": "d", "text": "Managing district hospitals", "isCorrect": false }
      ],
      "explanation": "Households are responsible for recognizing ill health and taking appropriate initial actions."
    },

    // Topic 4: Achievements & Challenges
    {
      "id": "q16",
      "type": "multiple-choice",
      "question": "Which major shift in health care emphasis is considered a PHC achievement?",
      "points": 5,
      "options": [
        { "id": "a", "text": "From preventive to curative", "isCorrect": false },
        { "id": "b", "text": "From curative to preventive/promotive", "isCorrect": true },
        { "id": "c", "text": "From rural to urban", "isCorrect": false },
        { "id": "d", "text": "From community to hospital-based", "isCorrect": false }
      ],
      "explanation": "PHC emphasized a shift from curative to preventive/promotive care, reducing mortality."
    },
    {
      "id": "q17",
      "type": "multiple-choice",
      "question": "Which programme contributed to the decrease in childhood diseases like polio and measles?",
      "points": 5,
      "options": [
        { "id": "a", "text": "KEPI (Kenya Expanded Programme of Immunisation)", "isCorrect": true },
        { "id": "b", "text": "National Hospital Insurance Fund", "isCorrect": false },
        { "id": "c", "text": "School Feeding Programme", "isCorrect": false },
        { "id": "d", "text": "Road Safety Campaign", "isCorrect": false }
      ],
      "explanation": "KEPI was instrumental in expanding immunisation coverage."
    },
    {
      "id": "q18",
      "type": "multiple-choice",
      "question": "Approximately what percentage of the health budget is consumed by curative services, posing a challenge to PHC?",
      "points": 5,
      "options": [
        { "id": "a", "text": "30%", "isCorrect": false },
        { "id": "b", "text": "50%", "isCorrect": false },
        { "id": "c", "text": "70%", "isCorrect": true },
        { "id": "d", "text": "90%", "isCorrect": false }
      ],
      "explanation": "Curative services consume about 70% of the budget, mostly in urban tertiary facilities."
    },
    {
      "id": "q19",
      "type": "multiple-select",
      "question": "Which diseases combined account for almost 50% of reported diagnoses in public health facilities? (Select two)",
      "points": 5,
      "options": [
        { "id": "a", "text": "Malaria", "isCorrect": true },
        { "id": "b", "text": "Respiratory Diseases", "isCorrect": true },
        { "id": "c", "text": "Cancer", "isCorrect": false },
        { "id": "d", "text": "Diabetes", "isCorrect": false }
      ],
      "explanation": "Malaria and respiratory diseases are the major causes of morbidity."
    },
    {
      "id": "q20",
      "type": "multiple-choice",
      "question": "What is the 'Way Forward' strategy mentioned in the NHSSP?",
      "points": 5,
      "options": [
        { "id": "a", "text": "Centralisation of all services", "isCorrect": false },
        { "id": "b", "text": "Decentralisation and sector-wide approach", "isCorrect": true },
        { "id": "c", "text": "Privatisation of all hospitals", "isCorrect": false },
        { "id": "d", "text": "Abolishing community health workers", "isCorrect": false }
      ],
      "explanation": "The NHSSP commits to decentralisation and a sector-wide approach to resolve health sector constraints."
    }
  ]
});