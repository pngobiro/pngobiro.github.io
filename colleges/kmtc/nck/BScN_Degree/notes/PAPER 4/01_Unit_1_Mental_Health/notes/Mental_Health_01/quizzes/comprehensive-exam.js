registerQuiz("comprehensive-exam", {
  "schemaVersion": "1.0",
  "quizId": "comprehensive-exam",
  "metadata": {
    "title": "Comprehensive Exam: Unit 1",
    "description": "Final assessment covering Mental Health Concepts, Law, Treatments, Conditions, and Community Health.",
    "topicId": "comprehensive",
    "difficulty": "advanced",
    "estimatedTime": 45,
    "passingScore": 70,
    "createdAt": "2026-01-17T00:00:00Z",
    "tags": ["exam", "final", "mental health", "nursing"]
  },
  "settings": {
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "timeLimit": 2700
  },
  "questions": [
    // TOPIC 1: CONCEPTS
    {
      "id": "q1",
      "type": "multiple-choice",
      "question": "Which phase of psychosexual development occurs between 3 to 6 years, where interest in genitalia is developed?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "Anal Phase", "isCorrect": false },
        { "id": "opt2", "text": "Phallic Phase", "isCorrect": true },
        { "id": "opt3", "text": "Latent Phase", "isCorrect": false },
        { "id": "opt4", "text": "Genital Phase", "isCorrect": false }
      ],
      "explanation": "The Phallic phase (3-6 years) is focused on genital stimulation and gender differentiation."
    },
    {
      "id": "q2",
      "type": "matching",
      "question": "Match the personality structure (Freud) with its characteristic.",
      "points": 3,
      "pairs": [
        { "id": "p1", "left": "Id", "right": "Primitive, driven by impulses" },
        { "id": "p2", "left": "Ego", "right": "In contact with reality, mediates" },
        { "id": "p3", "left": "Super Ego", "right": "Contains values and moral regulations" }
      ]
    },

    // TOPIC 2: ADMISSION/LEGAL
    {
      "id": "q3",
      "type": "fill-blank",
      "question": "Under the Mental Health Act, an emergency admission by a police officer requires the patient to be reviewed after __72__ hours. If admitted as an involuntary patient, the initial period is not more than __six__ months.",
      "points": 2,
      "blanks": [
        { "id": "72", "acceptedAnswers": ["72", "seventy two"], "caseSensitive": false },
        { "id": "six", "acceptedAnswers": ["six", "6"], "caseSensitive": false }
      ],
      "explanation": "Emergency admissions are reviewed after 72 hours. Involuntary admissions are initially for up to 6 months."
    },
    {
      "id": "q4",
      "type": "multiple-choice",
      "question": "Which MOH form is used for the admission of an involuntary patient upon application by a relative?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "MOH 613", "isCorrect": false },
        { "id": "opt2", "text": "MOH 638", "isCorrect": false },
        { "id": "opt3", "text": "MOH 614", "isCorrect": true },
        { "id": "opt4", "text": "MOH 637", "isCorrect": false }
      ],
      "explanation": "MOH 614 is for involuntary admission application by a relative. MOH 613 is voluntary."
    },

    // TOPIC 3: TREATMENT
    {
      "id": "q5",
      "type": "multiple-select",
      "question": "Which of the following are specific side effects associated with Tricyclic Antidepressants?",
      "points": 3,
      "options": [
        { "id": "opt1", "text": "Hypertension crisis from tyramine", "isCorrect": false },
        { "id": "opt2", "text": "Tachycardia", "isCorrect": true },
        { "id": "opt3", "text": "Tremors", "isCorrect": true },
        { "id": "opt4", "text": "Allergic reactions (skin rash)", "isCorrect": true }
      ],
      "explanation": "Tachycardia, tremors, and allergic reactions are associated with Tricyclics. Hypertension crisis is associated with MAOIs."
    },
    {
      "id": "q6",
      "type": "short-answer",
      "question": "What is the therapeutic range for Lithium levels in the blood (in mmol/litre)?",
      "points": 2,
      "keywords": ["0.4", "0.8"],
      "minKeywords": 2,
      "modelAnswer": "0.4-0.8mmol/litre",
      "explanation": "The desired level 10-14 hours post-dose is 0.4-0.8mmol/litre."
    },

    // TOPIC 4: CONDITIONS
    {
      "id": "q7",
      "type": "matching",
      "question": "Match the type of Schizophrenia with its defining symptom.",
      "points": 4,
      "pairs": [
        { "id": "p1", "left": "Catatonic", "right": "Stupor, waxy flexibility, or excitement" },
        { "id": "p2", "left": "Paranoid", "right": "Delusions of persecution or grandeur" },
        { "id": "p3", "left": "Disorganised", "right": "Incoherence, foolishness, regressive behaviour" },
        { "id": "p4", "left": "Undifferentiated", "right": "Mixed symptoms, simple type" }
      ]
    },
    {
      "id": "q8",
      "type": "true-false",
      "question": "In the management of Alcohol Withdrawal, benzodiazepines like diazepam should generally be avoided unless specifically indicated for severe cases or seizures.",
      "points": 1,
      "correctAnswer": false,
      "explanation": "Benzodiazepines (like Chlordiazepoxide or Diazepam) ARE the standard treatment for moderate to severe alcohol withdrawal."
    },
    {
      "id": "q9",
      "type": "multiple-choice",
      "question": "Which condition is characterized by significant limitations in adaptive functioning and must start before the age of 17?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "Dementia", "isCorrect": false },
        { "id": "opt2", "text": "Mental Retardation", "isCorrect": true },
        { "id": "opt3", "text": "Schizophrenia", "isCorrect": false },
        { "id": "opt4", "text": "ADHD", "isCorrect": false }
      ],
      "explanation": "Mental Retardation is sub-average intellectual functioning starting before age 17."
    },

    // TOPIC 5: COMMUNITY
    {
      "id": "q10",
      "type": "ordering",
      "question": "Order the levels of prevention in the Public Health Model from earliest intervention to latest.",
      "points": 3,
      "items": [
        { "id": "i1", "text": "Primary Prevention (e.g., Health Education)", "correctPosition": 1 },
        { "id": "i2", "text": "Secondary Prevention (e.g., Early Diagnosis)", "correctPosition": 2 },
        { "id": "i3", "text": "Tertiary Prevention (e.g., Rehabilitation)", "correctPosition": 3 }
      ]
    },
    {
      "id": "q11",
      "type": "multiple-select",
      "question": "Which of the following were part of the 'Directions and Developments' characterizing modern community mental health?",
      "points": 3,
      "options": [
        { "id": "opt1", "text": "Focus on preventative approach", "isCorrect": true },
        { "id": "opt2", "text": "Exclusive use of in-patient custodial care", "isCorrect": false },
        { "id": "opt3", "text": "Use of multi-disciplinary teams", "isCorrect": true },
        { "id": "opt4", "text": "Growing openness of the hospital to the community", "isCorrect": true }
      ],
      "explanation": "Community mental health focuses on prevention, multi-disciplinary teams, and openness, moving AWAY from exclusive custodial care."
    },

    // GENERAL/MIXED
    {
      "id": "q12",
      "type": "fill-blank",
      "question": "The three phases of psychiatric history are the Demonological Period, the __political__ Period, the Humanitarian Period, and the __scientific__ Period.",
      "points": 2,
      "blanks": [
        { "id": "political", "acceptedAnswers": ["political"], "caseSensitive": false },
        { "id": "scientific", "acceptedAnswers": ["scientific"], "caseSensitive": false }
      ],
      "explanation": "The timeline flows: Demonological -> Political -> Humanitarian -> Scientific."
    },
    {
      "id": "q13",
      "type": "short-answer",
      "question": "What is the term for the inability to sit still or continuous motor restlessness often caused by antipsychotic medication?",
      "points": 1,
      "keywords": ["akathisia"],
      "minKeywords": 1,
      "modelAnswer": "Akathisia",
      "explanation": "Akathisia is a common extrapyramidal side effect characterized by motor restlessness."
    },
    {
      "id": "q14",
      "type": "multiple-choice",
      "question": "Which scientist is associated with the 'Humanitarian Period' reforms in France (1793)?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "Sigmund Freud", "isCorrect": false },
        { "id": "opt2", "text": "William Tuke", "isCorrect": false },
        { "id": "opt3", "text": "Philippe Pinel", "isCorrect": true },
        { "id": "opt4", "text": "Dorothea Lynda Dix", "isCorrect": false }
      ],
      "explanation": "Philippe Pinel unchained patients at Bicetre Hospital in France in 1793."
    },
    {
      "id": "q15",
      "type": "true-false",
      "question": "In Autistic disorders, the child typically displays excessive verbal communication and high social engagement.",
      "points": 1,
      "correctAnswer": false,
      "explanation": "Autism is characterized by withdrawal, severe impairment in communication, and lack of social engagement."
    },
    {
      "id": "q16",
      "type": "matching",
      "question": "Match the defense mechanism or anxiety type with its description.",
      "points": 3,
      "pairs": [
        { "id": "p1", "left": "Superego anxiety", "right": "Fear of being found guilty" },
        { "id": "p2", "left": "Castration anxiety", "right": "Fear of bodily mutilation" },
        { "id": "p3", "left": "Separation anxiety", "right": "Fear of loss of significant relationship" }
      ]
    },
    {
      "id": "q17",
      "type": "multiple-select",
      "question": "Which of the following are considered 'Universal Interventions' in the Modified Public Health Model?",
      "points": 3,
      "options": [
        { "id": "opt1", "text": "Biological measures (diet, exercise)", "isCorrect": true },
        { "id": "opt2", "text": "Psychosocial measures (problem solving skills)", "isCorrect": true },
        { "id": "opt3", "text": "Detoxification programs", "isCorrect": false },
        { "id": "opt4", "text": "Socio-cultural measures (legislation, education)", "isCorrect": true }
      ],
      "explanation": "Universal interventions target the general population through biological, psychosocial, and socio-cultural measures. Detox is indicated/tertiary."
    },
    {
      "id": "q18",
      "type": "short-answer",
      "question": "What is the term for a disorder characterized by the repeated exposure of genitals to unprepared strangers?",
      "points": 1,
      "keywords": ["exhibitionism"],
      "minKeywords": 1,
      "modelAnswer": "Exhibitionism",
      "explanation": "Exhibitionism is a paraphilia involving exposing genitals to strangers."
    },
    {
      "id": "q19",
      "type": "fill-blank",
      "question": "For a diagnosis of Panic Disorder, a person must experience unexpected attacks and persistent worry for at least __one__ month.",
      "points": 1,
      "blanks": [
        { "id": "one", "acceptedAnswers": ["one", "1"], "caseSensitive": false }
      ],
      "explanation": "Diagnostic criteria require persistent worry about attacks for at least one month."
    },
    {
      "id": "q20",
      "type": "multiple-choice",
      "question": "Which drug is an antiparkinsonian agent used to counteract side effects of antipsychotics?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "Haloperidol", "isCorrect": false },
        { "id": "opt2", "text": "Benztropine (Cogentin)", "isCorrect": true },
        { "id": "opt3", "text": "Diazepam", "isCorrect": false },
        { "id": "opt4", "text": "Amitriptyline", "isCorrect": false }
      ],
      "explanation": "Benztropine is an antiparkinsonian drug used to treat EPS."
    }
  ]
});