registerQuiz("comprehensive-exam", {
  "schemaVersion": "1.0",
  "quizId": "comprehensive-exam",
  "metadata": {
    "title": "Comprehensive Final Exam",
    "description": "A comprehensive assessment covering all 10 topics of the Community Health course, including concepts, epidemiology, disease control, diagnosis, surveys, strategy, environment, MCH, nutrition, and planning.",
    "topicId": "comprehensive",
    "difficulty": "advanced",
    "estimatedTime": 60,
    "passingScore": 70,
    "createdAt": "2026-01-21T00:00:00Z",
    "updatedAt": "2026-01-21T00:00:00Z",
    "tags": ["final", "exam", "comprehensive", "community-health"]
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
    {
      "id": "q1",
      "type": "multiple-choice",
      "question": "What is the primary definition of 'Community Health'?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "Meeting the needs of a community by identifying problems and managing interactions within the community.", "isCorrect": true },
        { "id": "opt2", "text": "The absence of disease or infirmity in a specific geographical area.", "isCorrect": false },
        { "id": "opt3", "text": "Medical treatment provided exclusively in a hospital setting.", "isCorrect": false },
        { "id": "opt4", "text": "The statistical analysis of population demographics.", "isCorrect": false }
      ],
      "explanation": "Community health is defined by meeting the needs of a community by identifying problems and managing interactions within the community."
    },
    {
      "id": "q2",
      "type": "multiple-select",
      "question": "Which of the following are considered major determinants of health? (Select all that apply)",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "Social environment (support, safety, education)", "isCorrect": true },
        { "id": "opt2", "text": "Physical environment (housing, transport, water)", "isCorrect": true },
        { "id": "opt3", "text": "Economic factors (income, employment)", "isCorrect": true },
        { "id": "opt4", "text": "Personal health practices and biology", "isCorrect": true },
        { "id": "opt5", "text": "The color of one's clothing", "isCorrect": false }
      ],
      "explanation": "Determinants of health include economic, social, and physical environmental factors, as well as personal health practices and biology."
    },
    {
      "id": "q3",
      "type": "ordering",
      "question": "Arrange the steps of the Community Entry process in the correct chronological order.",
      "points": 1,
      "items": [
        { "id": "step1", "text": "Knock and enter upon response.", "correctPosition": 1 },
        { "id": "step2", "text": "Greet chief and elders and introduce yourself.", "correctPosition": 2 },
        { "id": "step3", "text": "Inform them of your work.", "correctPosition": 3 },
        { "id": "step4", "text": "Ask for permission/advice and state mission.", "correctPosition": 4 },
        { "id": "step5", "text": "Thank them for their co-operation.", "correctPosition": 5 },
        { "id": "step6", "text": "Identify contact persons.", "correctPosition": 6 }
      ],
      "explanation": "The process involves respectful entry, introduction to leadership, stating the mission, seeking permission, expressing gratitude, and identifying contacts."
    },
    {
      "id": "q4",
      "type": "fill-blank",
      "question": "Health is defined as a balanced state of well-being resulting from harmonious interactions of __b1__, __b2__, and __b3__.",
      "points": 1,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["body"], "caseSensitive": false },
        { "id": "b2", "acceptedAnswers": ["mind"], "caseSensitive": false },
        { "id": "b3", "acceptedAnswers": ["spirit"], "caseSensitive": false }
      ],
      "explanation": "Health is a balanced state of well-being resulting from harmonious interactions of body, mind, and spirit."
    },
    {
      "id": "q5",
      "type": "multiple-choice",
      "question": "Which of the following best describes the 'Epidemiologic Triangle'?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "A model consisting of an external Agent, a susceptible Host, and an Environment that brings them together.", "isCorrect": true },
        { "id": "opt2", "text": "The relationship between doctors, nurses, and patients.", "isCorrect": false },
        { "id": "opt3", "text": "A hierarchy of needs including food, shelter, and water.", "isCorrect": false },
        { "id": "opt4", "text": "The three levels of government involved in healthcare.", "isCorrect": false }
      ],
      "explanation": "The epidemiologic triangle consists of the Agent, Host, and Environment."
    },
    {
      "id": "q6",
      "type": "matching",
      "question": "Match the component of the Epidemiologic Triangle with its description.",
      "points": 1,
      "pairs": [
        { "id": "p1", "left": "Agent", "right": "Infectious microorganism (virus, bacterium, parasite)" },
        { "id": "p2", "left": "Host", "right": "Intrinsic factors influencing susceptibility (age, genetics, immunity)" },
        { "id": "p3", "left": "Environment", "right": "Extrinsic factors affecting opportunity for exposure (climate, sanitation)" }
      ],
      "explanation": "The Agent is the cause (germ), the Host is the organism harboring the disease, and the Environment includes external factors facilitating transmission."
    },
    {
      "id": "q7",
      "type": "ordering",
      "question": "Place the links in the Chain of Infection in the correct order of transmission.",
      "points": 1,
      "items": [
        { "id": "i1", "text": "Infectious Agent", "correctPosition": 1 },
        { "id": "i2", "text": "Reservoir", "correctPosition": 2 },
        { "id": "i3", "text": "Portal of Exit", "correctPosition": 3 },
        { "id": "i4", "text": "Mode of Transmission", "correctPosition": 4 },
        { "id": "i5", "text": "Portal of Entry", "correctPosition": 5 },
        { "id": "i6", "text": "Susceptible Host", "correctPosition": 6 }
      ],
      "explanation": "Transmission flows from Agent -> Reservoir -> Exit -> Transmission -> Entry -> Host."
    },
    {
      "id": "q8",
      "type": "multiple-choice",
      "question": "What distinguishes 'Elimination' from 'Eradication' of a disease?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "Elimination reduces incidence to zero in a specific area requiring continued measures; Eradication is permanent global reduction to zero requiring no further measures.", "isCorrect": true },
        { "id": "opt2", "text": "Elimination removes the agent from nature; Eradication reduces cases to a low level.", "isCorrect": false },
        { "id": "opt3", "text": "Elimination applies to viral diseases; Eradication applies to bacterial diseases.", "isCorrect": false },
        { "id": "opt4", "text": "There is no difference; the terms are synonymous.", "isCorrect": false }
      ],
      "explanation": "Elimination is regional and requires ongoing control (e.g., Polio in some areas), while Eradication is global and permanent (e.g., Smallpox)."
    },
    {
      "id": "q9",
      "type": "multiple-select",
      "question": "Which of the following are the four main types of Non-Communicable Diseases (NCDs)?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "Cardiovascular diseases", "isCorrect": true },
        { "id": "opt2", "text": "Cancers", "isCorrect": true },
        { "id": "opt3", "text": "Chronic respiratory diseases", "isCorrect": true },
        { "id": "opt4", "text": "Diabetes", "isCorrect": true },
        { "id": "opt5", "text": "Malaria", "isCorrect": false },
        { "id": "opt6", "text": "Tuberculosis", "isCorrect": false }
      ],
      "explanation": "The 4 main NCDs are cardiovascular diseases, cancers, chronic respiratory diseases, and diabetes."
    },
    {
      "id": "q10",
      "type": "matching",
      "question": "Match the level of prevention with its description.",
      "points": 1,
      "pairs": [
        { "id": "p1", "left": "Primary Prevention", "right": "Aimed at healthy population to prevent disease occurrence (e.g., immunization)" },
        { "id": "p2", "left": "Secondary Prevention", "right": "Minimizes damage after disease has occurred (e.g., screening, early diagnosis)" },
        { "id": "p3", "left": "Tertiary Prevention", "right": "Rehabilitation and management of chronic problems to prevent deterioration" }
      ],
      "explanation": "Primary prevents onset, Secondary treats early/reduces impact, Tertiary manages chronic conditions/rehab."
    },
    {
      "id": "q11",
      "type": "true-false",
      "question": "Non-communicable diseases (NCDs) only affect wealthy, high-income populations.",
      "correctAnswer": false,
      "points": 1,
      "explanation": "NCDs affect all age groups and regions. 82% of premature deaths from NCDs occur in low- and middle-income countries, and poverty is closely linked with NCDs."
    },
    {
      "id": "q12",
      "type": "multiple-choice",
      "question": "What is 'Community Diagnosis'?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "A comprehensive assessment of the health status of a community in relation to its social, physical, and biological environment.", "isCorrect": true },
        { "id": "opt2", "text": "Diagnosing a specific patient within a community clinic.", "isCorrect": false },
        { "id": "opt3", "text": "A fundraising event for community hospitals.", "isCorrect": false },
        { "id": "opt4", "text": "The treatment of common diseases in a village.", "isCorrect": false }
      ],
      "explanation": "Community diagnosis involves identifying and quantifying health problems in a community as a whole to define those at risk and needs."
    },
    {
      "id": "q13",
      "type": "multiple-select",
      "question": "Which of the following are principles of Participatory Rural Appraisal (PRA)?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "Learning with and from rural people (Reversal of learning)", "isCorrect": true },
        { "id": "opt2", "text": "Triangulation (using combined approaches)", "isCorrect": true },
        { "id": "opt3", "text": "Learning rapidly and progressively", "isCorrect": true },
        { "id": "opt4", "text": "Facilitation by local people", "isCorrect": true },
        { "id": "opt5", "text": "Rushed site visits by external experts only", "isCorrect": false }
      ],
      "explanation": "PRA principles include reversal of learning, rapid progressive learning, seeking diversity, triangulation, and facilitation by locals."
    },
    {
      "id": "q14",
      "type": "matching",
      "question": "Match the type of health indicator with its example.",
      "points": 1,
      "pairs": [
        { "id": "p1", "left": "Mortality Indicator", "right": "Infant Mortality Rate" },
        { "id": "p2", "left": "Morbidity Indicator", "right": "Incidence and Prevalence rates" },
        { "id": "p3", "left": "Nutritional Indicator", "right": "Prevalence of low birth weight" },
        { "id": "p4", "left": "Health Care Delivery Indicator", "right": "Doctor/Population ratio" }
      ],
      "explanation": "Mortality relates to death, Morbidity to illness, Nutritional to diet/growth status, and Delivery to service availability."
    },
    {
      "id": "q15",
      "type": "ordering",
      "question": "Order the stages of the Community Diagnosis implementation process.",
      "points": 1,
      "items": [
        { "id": "s1", "text": "Initiation stage", "correctPosition": 1 },
        { "id": "s2", "text": "Data collection and analysis stage", "correctPosition": 2 },
        { "id": "s3", "text": "Diagnosis stage", "correctPosition": 3 },
        { "id": "s4", "text": "Dissemination stage", "correctPosition": 4 }
      ],
      "explanation": "The process starts with Initiation, followed by Data Collection/Analysis, then making the Diagnosis, and finally Dissemination of findings."
    },
    {
      "id": "q16",
      "type": "fill-blank",
      "question": "A __b1__ survey allows the administrator to record user identifiable data, whereas an __b2__ survey does not record identification particulars.",
      "points": 1,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["non-anonymous", "non anonymous"], "caseSensitive": false },
        { "id": "b2", "acceptedAnswers": ["anonymous"], "caseSensitive": false }
      ],
      "explanation": "Non-anonymous surveys track identity; anonymous surveys do not."
    },
    {
      "id": "q17",
      "type": "matching",
      "question": "Match the type of bias with its description.",
      "points": 1,
      "pairs": [
        { "id": "p1", "left": "Nonresponse bias", "right": "Individuals chosen are unwilling or unable to participate" },
        { "id": "p2", "left": "Voluntary response bias", "right": "Sample members are self-selected volunteers" },
        { "id": "p3", "left": "Social desirability bias", "right": "Respondents answer in a favorable light rather than truthfully" },
        { "id": "p4", "left": "Under coverage", "right": "Some members of the population are inadequately represented" }
      ],
      "explanation": "These are common sources of error in survey sampling and data collection."
    },
    {
      "id": "q18",
      "type": "multiple-choice",
      "question": "What is the 'Response Rate' in a survey?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "The number of people who answered the survey divided by the number of people in the sample.", "isCorrect": true },
        { "id": "opt2", "text": "The speed at which participants answer questions.", "isCorrect": false },
        { "id": "opt3", "text": "The percentage of correct answers in a questionnaire.", "isCorrect": false },
        { "id": "opt4", "text": "The number of surveys distributed.", "isCorrect": false }
      ],
      "explanation": "Response rate = (Number of completed surveys / Total sample size) * 100."
    },
    {
      "id": "q19",
      "type": "multiple-choice",
      "question": "What is the 'Community Strategy' in the context of the Kenyan health system?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "An approach ensuring communities have the capacity and motivation to take up their essential role in health care delivery (Level 1 services).", "isCorrect": true },
        { "id": "opt2", "text": "A strategy to build more hospitals in urban centers.", "isCorrect": false },
        { "id": "opt3", "text": "A plan to privatize all health services.", "isCorrect": false },
        { "id": "opt4", "text": "A fundraising initiative for medical equipment.", "isCorrect": false }
      ],
      "explanation": "Community Strategy focuses on taking the Kenya Essential Package for Health (KEPH) to the community (Level 1) to improve access and health status."
    },
    {
      "id": "q20",
      "type": "multiple-select",
      "question": "Which of the following are roles of households and the community in the Community Strategy?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "Health promotion (diet, hygiene, exercise)", "isCorrect": true },
        { "id": "opt2", "text": "Disease prevention (sanitation, vectors)", "isCorrect": true },
        { "id": "opt3", "text": "Care seeking and compliance", "isCorrect": true },
        { "id": "opt4", "text": "Governance and management of health services", "isCorrect": true },
        { "id": "opt5", "text": "Performing complex surgeries", "isCorrect": false }
      ],
      "explanation": "Households play key roles in promotion, prevention, seeking care, governance, and claiming rights, but not in professional medical procedures like surgery."
    },
    {
      "id": "q21",
      "type": "ordering",
      "question": "Arrange the steps of Community Mobilization.",
      "points": 1,
      "items": [
        { "id": "s1", "text": "Getting to know the community & creating interest", "correctPosition": 1 },
        { "id": "s2", "text": "Analysis and Problem Identification", "correctPosition": 2 },
        { "id": "s3", "text": "Decision making & selection of leaders", "correctPosition": 3 },
        { "id": "s4", "text": "Planning & selection of implementing leader", "correctPosition": 4 },
        { "id": "s5", "text": "Project implementation", "correctPosition": 5 },
        { "id": "s6", "text": "Follow-up, monitoring & evaluation", "correctPosition": 6 }
      ],
      "explanation": "Mobilization moves from engagement and analysis to decision making, planning, action, and review."
    },
    {
      "id": "q22",
      "type": "matching",
      "question": "Match the environmental component with its examples.",
      "points": 1,
      "pairs": [
        { "id": "p1", "left": "Physical Component", "right": "Air, water, soil, housing, climate, noise" },
        { "id": "p2", "left": "Biological Component", "right": "Viruses, insects, rodents, animals, plants" },
        { "id": "p3", "left": "Psychosocial Component", "right": "Cultural values, customs, habits, social organization" }
      ],
      "explanation": "Environment consists of Physical (non-living), Biological (living), and Psychosocial (cultural/social) components."
    },
    {
      "id": "q23",
      "type": "multiple-choice",
      "question": "What is the goal of Environmental Health?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "To promote health for all through a healthy environment by preventing disease and injury related to environmental interactions.", "isCorrect": true },
        { "id": "opt2", "text": "To stop all industrial development to save nature.", "isCorrect": false },
        { "id": "opt3", "text": "To treat diseases caused by genetic disorders.", "isCorrect": false },
        { "id": "opt4", "text": "To focus solely on wildlife conservation.", "isCorrect": false }
      ],
      "explanation": "Environmental health focuses on the human health aspects of the environment, preventing disease and injury caused by environmental factors."
    },
    {
      "id": "q24",
      "type": "true-false",
      "question": "Poor environmental quality has its greatest health impact on people whose health status is already at risk.",
      "correctAnswer": true,
      "points": 1,
      "explanation": "Vulnerable populations are most susceptible to environmental hazards."
    },
    {
      "id": "q25",
      "type": "matching",
      "question": "Match the vaccine to the disease it prevents.",
      "points": 1,
      "pairs": [
        { "id": "p1", "left": "BCG", "right": "Tuberculosis" },
        { "id": "p2", "left": "OPV", "right": "Poliomyelitis" },
        { "id": "p3", "left": "Pentavalent (DPT-HeB-Hib)", "right": "Diphtheria, Pertussis, Tetanus, Hep B, Haemophilus influenzae" },
        { "id": "p4", "left": "Measles vaccine", "right": "Measles (Rubeola)" }
      ],
      "explanation": "BCG -> TB, OPV -> Polio, Pentavalent -> 5 diseases, Measles -> Measles."
    },
    {
      "id": "q26",
      "type": "fill-blank",
      "question": "The Vitamin A dosage for a child aged 6-12 months is __b1__ IU.",
      "points": 1,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["100,000", "100000"], "caseSensitive": false }
      ],
      "explanation": "<6 months: 50,000 IU; 6-12 months: 100,000 IU; >12 months: 200,000 IU."
    },
    {
      "id": "q27",
      "type": "multiple-select",
      "question": "Which of the following are examples of Barrier Methods of contraception?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "Male Condoms", "isCorrect": true },
        { "id": "opt2", "text": "Female Condoms", "isCorrect": true },
        { "id": "opt3", "text": "Diaphragms", "isCorrect": true },
        { "id": "opt4", "text": "Oral Contraceptive Pills", "isCorrect": false },
        { "id": "opt5", "text": "Implants", "isCorrect": false }
      ],
      "explanation": "Pills and implants are hormonal methods. Condoms and diaphragms are barriers."
    },
    {
      "id": "q28",
      "type": "multiple-choice",
      "question": "What is the 'Safe period' or 'Rhythm method' in natural family planning?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "Avoiding sex during the time the woman's egg (ovum) is ready for fertilization (ovulation).", "isCorrect": true },
        { "id": "opt2", "text": "Using condoms only during menstruation.", "isCorrect": false },
        { "id": "opt3", "text": "Taking temperature after waking up.", "isCorrect": false },
        { "id": "opt4", "text": "Withdrawal before ejaculation.", "isCorrect": false }
      ],
      "explanation": "The rhythm method involves abstaining from intercourse during the fertile window of the menstrual cycle."
    },
    {
      "id": "q29",
      "type": "multiple-choice",
      "question": "What is malnutrition?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "A condition where the body does not get the right amount of nutrients (undernutrition or overnutrition).", "isCorrect": true },
        { "id": "opt2", "text": "A condition caused only by eating too much sugar.", "isCorrect": false },
        { "id": "opt3", "text": "A disease caused by bacteria in food.", "isCorrect": false },
        { "id": "opt4", "text": "The process of digesting food.", "isCorrect": false }
      ],
      "explanation": "Malnutrition includes both undernutrition (lack of nutrients) and overnutrition."
    },
    {
      "id": "q30",
      "type": "matching",
      "question": "Match the type of malnutrition with its description.",
      "points": 1,
      "pairs": [
        { "id": "p1", "left": "Marasmus", "right": "Severe wasting of fat and muscle due to lack of calories/nutrients" },
        { "id": "p2", "left": "Kwashiorkor", "right": "Characterized by bilateral pitting oedema (fluid retention) due to protein deficiency" },
        { "id": "p3", "left": "Stunting", "right": "Chronic malnutrition leading to low height-for-age" },
        { "id": "p4", "left": "Micronutrient Malnutrition", "right": "Deficiency in vitamins and minerals (Hidden Hunger)" }
      ],
      "explanation": "Marasmus = wasting; Kwashiorkor = edema; Stunting = height; Micronutrient = vitamins/minerals."
    },
    {
      "id": "q31",
      "type": "multiple-select",
      "question": "Which of the following are components of Community Nutrition?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "Surveillance of food chain", "isCorrect": true },
        { "id": "opt2", "text": "Nutritional epidemiology", "isCorrect": true },
        { "id": "opt3", "text": "Nutrition education", "isCorrect": true },
        { "id": "opt4", "text": "Food and nutrition policy", "isCorrect": true },
        { "id": "opt5", "text": "Surgical procedures", "isCorrect": false }
      ],
      "explanation": "Community nutrition involves surveillance, epidemiology, education, policy, and food industry standards."
    },
    {
      "id": "q32",
      "type": "short-answer",
      "question": "Define 'Nutrition'.",
      "points": 1,
      "keywords": ["intake", "food", "dietary", "needs", "body"],
      "minKeywords": 2,
      "modelAnswer": "Nutrition is the intake of food, considered in relation to the body's dietary needs.",
      "maxLength": 200
    },
    {
      "id": "q33",
      "type": "fill-blank",
      "question": "S.M.A.R.T. goals stand for Specific, __b1__, Attainable, Relevant, and __b2__.",
      "points": 1,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["Measurable"], "caseSensitive": false },
        { "id": "b2", "acceptedAnswers": ["Time-related", "Time related", "Time-bound", "Time bound"], "caseSensitive": false }
      ],
      "explanation": "SMART = Specific, Measurable, Attainable, Relevant, Time-related (or Time-bound)."
    },
    {
      "id": "q34",
      "type": "ordering",
      "question": "Order the steps of the Community Health Planning Process.",
      "points": 1,
      "items": [
        { "id": "step1", "text": "Mobilizing the community", "correctPosition": 1 },
        { "id": "step2", "text": "Collecting and organizing data", "correctPosition": 2 },
        { "id": "step3", "text": "Choosing health priorities", "correctPosition": 3 },
        { "id": "step4", "text": "Developing a comprehensive intervention plan", "correctPosition": 4 },
        { "id": "step5", "text": "Evaluating plans", "correctPosition": 5 }
      ],
      "explanation": "Planning involves mobilization -> data -> priorities -> plan development -> evaluation."
    },
    {
      "id": "q35",
      "type": "multiple-choice",
      "question": "What is the difference between 'Goals' and 'Objectives'?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "Goals are broad statements of intent; Objectives are specific, measurable statements leading to the goal.", "isCorrect": true },
        { "id": "opt2", "text": "Goals are specific and timed; Objectives are broad and abstract.", "isCorrect": false },
        { "id": "opt3", "text": "There is no difference.", "isCorrect": false },
        { "id": "opt4", "text": "Objectives are for the community, Goals are for the government.", "isCorrect": false }
      ],
      "explanation": "Goals are broad/abstract (the vision); Objectives are specific/measurable steps to achieve the goal."
    },
    {
      "id": "q36",
      "type": "matching",
      "question": "Match the type of evaluation with its description.",
      "points": 1,
      "pairs": [
        { "id": "p1", "left": "Process Evaluation", "right": "Assesses whether program activities are implemented as designed" },
        { "id": "p2", "left": "Outcome Evaluation", "right": "Examines results/effects to see if stated goals were achieved" },
        { "id": "p3", "left": "Impact Evaluation", "right": "Assesses causal links and what happened because of the program" },
        { "id": "p4", "left": "Cost-effectiveness", "right": "Compares program benefits/outputs with costs" }
      ],
      "explanation": "Process = implementation; Outcome = results; Impact = causal effect; Cost-effectiveness = value."
    },
    {
      "id": "q37",
      "type": "multiple-select",
      "question": "Which of the following are essential measures of success for an organization?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "Financial viability", "isCorrect": true },
        { "id": "opt2", "text": "Customer satisfaction", "isCorrect": true },
        { "id": "opt3", "text": "Employee satisfaction", "isCorrect": true },
        { "id": "opt4", "text": "Contribution to society", "isCorrect": true },
        { "id": "opt5", "text": "Number of meetings held", "isCorrect": false }
      ],
      "explanation": "The 4 essential measures are financial viability, customer satisfaction, employee satisfaction, and societal contribution."
    },
    {
      "id": "q38",
      "type": "true-false",
      "question": "Primary Health Care (PHC) focuses only on curing diseases in hospitals.",
      "correctAnswer": false,
      "points": 1,
      "explanation": "PHC is essential health care made universally accessible, focusing on prevention, promotion, and community participation, not just curative hospital care."
    },
    {
      "id": "q39",
      "type": "fill-blank",
      "question": "The __b1__ Declaration of 1978 was the first international declaration underlining the importance of Primary Health Care.",
      "points": 1,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["Alma-Ata", "Alma Ata"], "caseSensitive": false }
      ],
      "explanation": "The Alma-Ata Declaration established PHC as the key to 'Health for All'."
    },
    {
      "id": "q40",
      "type": "multiple-select",
      "question": "Which of the following are Pillars of Primary Health Care?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "Community Participation", "isCorrect": true },
        { "id": "opt2", "text": "Equity", "isCorrect": true },
        { "id": "opt3", "text": "Multi-sectoral approach", "isCorrect": true },
        { "id": "opt4", "text": "Appropriate Technology", "isCorrect": true },
        { "id": "opt5", "text": "Exclusive private funding", "isCorrect": false }
      ],
      "explanation": "PHC pillars/principles include Equity, Community Participation, Multi-sectoral approach, and Appropriate Technology."
    },
    {
      "id": "q41",
      "type": "ordering",
      "question": "Order the hierarchy of health care levels in Kenya from lowest to highest.",
      "points": 1,
      "items": [
        { "id": "l1", "text": "Community (Level 1)", "correctPosition": 1 },
        { "id": "l2", "text": "Dispensary (Level 2)", "correctPosition": 2 },
        { "id": "l3", "text": "Health Centre (Level 3)", "correctPosition": 3 },
        { "id": "l4", "text": "District/Sub-County Hospital (Level 4)", "correctPosition": 4 },
        { "id": "l5", "text": "Provincial/Referral Hospital", "correctPosition": 5 }
      ],
      "explanation": "The system moves from Community -> Dispensary -> Health Centre -> District Hospital -> Referral Hospital."
    },
    {
      "id": "q42",
      "type": "multiple-choice",
      "question": "What is 'Behavior Change Communication' (BCC)?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "An interactive process to develop communication strategies to promote positive behaviors.", "isCorrect": true },
        { "id": "opt2", "text": "Lecturing people on what they are doing wrong.", "isCorrect": false },
        { "id": "opt3", "text": "Sending mass emails about health.", "isCorrect": false },
        { "id": "opt4", "text": "A type of psychological therapy.", "isCorrect": false }
      ],
      "explanation": "BCC is a strategic, interactive process to promote positive health behaviors."
    },
    {
      "id": "q43",
      "type": "multiple-select",
      "question": "Select the correct stages of change in behavior.",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "Awareness", "isCorrect": true },
        { "id": "opt2", "text": "Accept responsibility", "isCorrect": true },
        { "id": "opt3", "text": "Making choices", "isCorrect": true },
        { "id": "opt4", "text": "Habitual behavior", "isCorrect": true },
        { "id": "opt5", "text": "Immediate perfection", "isCorrect": false }
      ],
      "explanation": "Change involves awareness, responsibility, options, evaluation, choices, experimenting, and habit formation."
    },
    {
      "id": "q44",
      "type": "matching",
      "question": "Match the drug category with an example.",
      "points": 1,
      "pairs": [
        { "id": "p1", "left": "CNS Depressant", "right": "Alcohol" },
        { "id": "p2", "left": "CNS Stimulant", "right": "Cocaine" },
        { "id": "p3", "left": "Hallucinogen", "right": "LSD" },
        { "id": "p4", "left": "Narcotic Analgesic", "right": "Heroin" }
      ],
      "explanation": "Alcohol depresses, Cocaine stimulates, LSD causes hallucinations, Heroin relieves pain/induces euphoria."
    },
    {
      "id": "q45",
      "type": "true-false",
      "question": "All microbes are harmful germs.",
      "correctAnswer": false,
      "points": 1,
      "explanation": "Most microbes are harmless or helpful (e.g., digestion, decomposition); only some (pathogens/germs) cause disease."
    },
    {
      "id": "q46",
      "type": "multiple-choice",
      "question": "What does a 'carrier' of a disease mean?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "A person without apparent disease who is capable of transmitting the agent to others.", "isCorrect": true },
        { "id": "opt2", "text": "A person who is currently showing severe symptoms in a hospital.", "isCorrect": false },
        { "id": "opt3", "text": "A vector like a mosquito.", "isCorrect": false },
        { "id": "opt4", "text": "Someone who has recovered and is no longer infectious.", "isCorrect": false }
      ],
      "explanation": "Carriers harbor the agent and can transmit it without showing clinical symptoms."
    },
    {
      "id": "q47",
      "type": "fill-blank",
      "question": "Diseases transmitted from animals to humans are called __b1__.",
      "points": 1,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["zoonoses", "zoonosis"], "caseSensitive": false }
      ],
      "explanation": "Zoonoses are infectious diseases transmissible from animals to humans."
    },
    {
      "id": "q48",
      "type": "multiple-select",
      "question": "Which of the following are examples of indirect transmission?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "Airborne (suspended particles)", "isCorrect": true },
        { "id": "opt2", "text": "Vector-borne (mosquitoes, ticks)", "isCorrect": true },
        { "id": "opt3", "text": "Vehicle-borne (contaminated water, food)", "isCorrect": true },
        { "id": "opt4", "text": "Direct skin-to-skin contact", "isCorrect": false },
        { "id": "opt5", "text": "Kissing", "isCorrect": false }
      ],
      "explanation": "Indirect transmission uses an intermediary (air, vehicle, vector), unlike direct contact."
    },
    {
      "id": "q49",
      "type": "ordering",
      "question": "Order the steps of Problem Solving.",
      "points": 1,
      "items": [
        { "id": "s1", "text": "Problem Definition", "correctPosition": 1 },
        { "id": "s2", "text": "Problem Analysis", "correctPosition": 2 },
        { "id": "s3", "text": "Establish Goals", "correctPosition": 3 },
        { "id": "s4", "text": "Generate Possible Solutions", "correctPosition": 4 },
        { "id": "s5", "text": "Analyze Solutions", "correctPosition": 5 },
        { "id": "s6", "text": "Implementation", "correctPosition": 6 }
      ],
      "explanation": "The cycle moves from defining the problem -> analysis -> goals -> solutions -> analysis of solutions -> implementation."
    },
    {
      "id": "q50",
      "type": "multiple-choice",
      "question": "What is the primary purpose of a 'Logical Framework' (Log-frame) in M&E?",
      "points": 1,
      "options": [
        { "id": "opt1", "text": "To show the link between objectives, activities, indicators, and means of verification.", "isCorrect": true },
        { "id": "opt2", "text": "To list the names of all employees.", "isCorrect": false },
        { "id": "opt3", "text": "To calculate the profit margin of a clinic.", "isCorrect": false },
        { "id": "opt4", "text": "To design the architectural plan of a hospital.", "isCorrect": false }
      ],
      "explanation": "A log-frame is a matrix used for planning and managing projects, linking goals/objectives to activities and indicators."
    }
  ]
});