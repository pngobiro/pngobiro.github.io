registerQuiz("comprehensive-exam", {
  "schemaVersion": "1.0",
  "quizId": "comprehensive-exam",
  "metadata": {
    "title": "Comprehensive Final Exam: Principles & Practice of Health Promotion I",
    "description": "A comprehensive assessment covering all 6 units of the PHP 308 course, from concepts and principles to strategies and models.",
    "examType": "comprehensive",
    "topicsCovered": [
      "topic-01",
      "topic-02",
      "topic-03",
      "topic-04",
      "topic-05",
      "topic-06"
    ],
    "difficulty": "advanced",
    "estimatedTime": 45,
    "passingScore": 70,
    "createdAt": "2023-05-20T00:00:00Z",
    "tags": ["final", "comprehensive", "php308", "kmtc"]
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
    /* ========================================================================
       UNIT 1: CONCEPTS AND PRINCIPLES
       ======================================================================== */
    {
      "id": "u1-q1",
      "type": "multiple-choice",
      "question": "According to the Ottawa Charter (1986), how is 'Health Promotion' defined?",
      "points": 1,
      "topicId": "topic-01",
      "topicName": "Concepts & Principles",
      "options": [
        { "id": "a", "text": "The process of treating diseases to prolong life", "isCorrect": false },
        { "id": "b", "text": "The process of enabling people to increase control over, and to improve, their health", "isCorrect": true },
        { "id": "c", "text": "The provision of medical services to all community members", "isCorrect": false },
        { "id": "d", "text": "A campaign to reduce the cost of healthcare services", "isCorrect": false }
      ],
      "explanation": "The Ottawa Charter defines Health Promotion as 'the process of enabling people to increase control over, and to improve, their health'."
    },
    {
      "id": "u1-q2",
      "type": "fill-blank",
      "question": "The Health Promotion logo established in Ottawa contains a red outer circle representing __b1__.",
      "points": 1,
      "topicId": "topic-01",
      "topicName": "Concepts & Principles",
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["building healthy public policies", "healthy public policies", "public policies"], "caseSensitive": false }
      ],
      "explanation": "The outer circle of the logo symbolizes the goal of 'Building Healthy Public Policies' which holds the other elements together."
    },
    {
      "id": "u1-q3",
      "type": "matching",
      "question": "Match the Health Promotion Core Value with its correct description:",
      "points": 1,
      "topicId": "topic-01",
      "topicName": "Concepts & Principles",
      "pairs": [
        { "id": "p1", "left": "Empowerment", "right": "Enabling people to gain control over decisions affecting their health" },
        { "id": "p2", "left": "Equity", "right": "Ensuring fairness of outcomes for service users" },
        { "id": "p3", "left": "Intersectoral", "right": "Working in partnership with relevant agencies/organizations" },
        { "id": "p4", "left": "Holistic", "right": "Taking account of separate influences and their interactions" }
      ],
      "explanation": "Core values include Empowerment, Equity, Intersectoral collaboration, and a Holistic approach."
    },
    {
      "id": "u1-q4",
      "type": "multiple-choice",
      "question": "Which historical report is considered the first significant milestone in the 'New Public Health Era' (1974)?",
      "points": 1,
      "topicId": "topic-01",
      "topicName": "Concepts & Principles",
      "options": [
        { "id": "a", "text": "The Chadwick Report", "isCorrect": false },
        { "id": "b", "text": "The Lalonde Report", "isCorrect": true },
        { "id": "c", "text": "The Ottawa Charter", "isCorrect": false },
        { "id": "d", "text": "The Alma-Ata Declaration", "isCorrect": false }
      ],
      "explanation": "The Lalonde Report (1974) proposed focusing on environment and behavioral factors rather than just biophysical qualities."
    },
    {
      "id": "u1-q5",
      "type": "multiple-select",
      "question": "Select the five priority action areas outlined in the Ottawa Charter. (Select all that apply)",
      "points": 1,
      "topicId": "topic-01",
      "topicName": "Concepts & Principles",
      "options": [
        { "id": "a", "text": "Building healthy public policy", "isCorrect": true },
        { "id": "b", "text": "Creating supportive environments", "isCorrect": true },
        { "id": "c", "text": "Strengthening community action", "isCorrect": true },
        { "id": "d", "text": "Developing personal skills", "isCorrect": true },
        { "id": "e", "text": "Re-orienting health services", "isCorrect": true },
        { "id": "f", "text": "Increasing hospital funding", "isCorrect": false }
      ],
      "partialCredit": true,
      "explanation": "The 5 action areas are: Building healthy public policy, Creating supportive environments, Strengthening community action, Developing personal skills, and Re-orienting health services."
    },

    /* ========================================================================
       UNIT 2: PROCESSES OF HEALTH PROMOTION
       ======================================================================== */
    {
      "id": "u2-q1",
      "type": "ordering",
      "question": "Arrange the six steps for planning a health promotion program in the correct chronological order:",
      "points": 1,
      "topicId": "topic-02",
      "topicName": "Processes of HP",
      "items": [
        { "id": "i1", "text": "Manage the Planning Process", "correctPosition": 1 },
        { "id": "i2", "text": "Conduct a Situational Assessment", "correctPosition": 2 },
        { "id": "i3", "text": "Identify goals, populations, and outcomes", "correctPosition": 3 },
        { "id": "i4", "text": "Identify Strategies, activities, and resources", "correctPosition": 4 },
        { "id": "i5", "text": "Develop Indicators", "correctPosition": 5 },
        { "id": "i6", "text": "Review the program plan", "correctPosition": 6 }
      ],
      "explanation": "The planning process starts with managing the process itself, assessing the situation, identifying goals, selecting strategies, developing indicators, and finally reviewing the plan."
    },
    {
      "id": "u2-q2",
      "type": "multiple-choice",
      "question": "Which of the following is NOT a focus area of health promotion as described in Unit 2?",
      "points": 1,
      "topicId": "topic-02",
      "topicName": "Processes of HP",
      "options": [
        { "id": "a", "text": "Good Governance", "isCorrect": false },
        { "id": "b", "text": "Health Literacy", "isCorrect": false },
        { "id": "c", "text": "Healthy Settings", "isCorrect": false },
        { "id": "d", "text": "Clinical Surgery Techniques", "isCorrect": true }
      ],
      "explanation": "Health promotion focuses on Good Governance, Health Literacy, Healthy Settings, and Social Mobilization, not clinical surgical techniques."
    },
    {
      "id": "u2-q3",
      "type": "true-false",
      "question": "Health Education is exactly the same concept as Health Promotion.",
      "points": 1,
      "topicId": "topic-02",
      "topicName": "Processes of HP",
      "correctAnswer": false,
      "explanation": "False. Health Education is a STRATEGY used within Health Promotion. Health Promotion is a broader concept involving policy, environment, and community action."
    },
    {
      "id": "u2-q4",
      "type": "multiple-choice",
      "question": "Which strategy involves creating conditions that support health through policies, legislation, and organizational development?",
      "points": 1,
      "topicId": "topic-02",
      "topicName": "Processes of HP",
      "options": [
        { "id": "a", "text": "Screening", "isCorrect": false },
        { "id": "b", "text": "Settings and supportive environments", "isCorrect": true },
        { "id": "c", "text": "Health Education", "isCorrect": false },
        { "id": "d", "text": "Immunization", "isCorrect": false }
      ],
      "explanation": "Settings and supportive environments involve strategies like policies, legislation, regulation, and organizational development."
    },
    {
      "id": "u2-q5",
      "type": "multiple-choice",
      "question": "What is the primary purpose of 'Advocacy' in the context of health promotion processes?",
      "points": 1,
      "topicId": "topic-02",
      "topicName": "Processes of HP",
      "options": [
        { "id": "a", "text": "To administer vaccines to children", "isCorrect": false },
        { "id": "b", "text": "To actively support an idea or cause to influence a decision", "isCorrect": true },
        { "id": "c", "text": "To conduct blood sugar screenings", "isCorrect": false },
        { "id": "d", "text": "To develop audiovisual aids", "isCorrect": false }
      ],
      "explanation": "Advocacy means to actively support an idea or cause by arguing in favor of it, often to influence decision-making or policy."
    },

    /* ========================================================================
       UNIT 3: DETERMINANTS OF HEALTH
       ======================================================================== */
    {
      "id": "u3-q1",
      "type": "multiple-select",
      "question": "Select the 'prerequisites for health' listed in Unit 3. (Select all that apply)",
      "points": 1,
      "topicId": "topic-03",
      "topicName": "Determinants of Health",
      "options": [
        { "id": "a", "text": "Peace", "isCorrect": true },
        { "id": "b", "text": "Shelter", "isCorrect": true },
        { "id": "c", "text": "Food", "isCorrect": true },
        { "id": "d", "text": "Luxury vehicles", "isCorrect": false },
        { "id": "e", "text": "Social justice and equity", "isCorrect": true }
      ],
      "partialCredit": true,
      "explanation": "Prerequisites for health include peace, shelter, education, food, income, a stable ecosystem, sustainable resources, and social justice/equity."
    },
    {
      "id": "u3-q2",
      "type": "fill-blank",
      "question": "__b1__ is defined as limited availability of nutritionally adequate and safe foods, or limited ability to acquire them in socially acceptable ways.",
      "points": 1,
      "topicId": "topic-03",
      "topicName": "Determinants of Health",
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["food insecurity", "Food insecurity"], "caseSensitive": false }
      ],
      "explanation": "Food insecurity refers to the lack of consistent access to enough food for an active, healthy life."
    },
    {
      "id": "u3-q3",
      "type": "multiple-choice",
      "question": "Which of the following is considered a 'Political Determinant of Health'?",
      "points": 1,
      "topicId": "topic-03",
      "topicName": "Determinants of Health",
      "options": [
        { "id": "a", "text": "Voting and government policy", "isCorrect": true },
        { "id": "b", "text": "Genetic predisposition", "isCorrect": false },
        { "id": "c", "text": "Individual diet choices", "isCorrect": false },
        { "id": "d", "text": "Physical exercise routines", "isCorrect": false }
      ],
      "explanation": "Political determinants include voting, government structures, and policies (like the Affordable Care Act) that shape resource distribution."
    },
    {
      "id": "u3-q4",
      "type": "matching",
      "question": "Match the determinant type with its example:",
      "points": 1,
      "topicId": "topic-03",
      "topicName": "Determinants of Health",
      "pairs": [
        { "id": "p1", "left": "Physical Environment", "right": "Water and Sanitation" },
        { "id": "p2", "left": "Socio-Economic", "right": "Education and Income" },
        { "id": "p3", "left": "Biological Hazard", "right": "Bacteria and Viruses" },
        { "id": "p4", "left": "Psychosocial Factor", "right": "Stress and low pay" }
      ],
      "explanation": "Water/sanitation are physical environmental factors; Education/income are socio-economic; Bacteria are biological hazards; Stress is a psychosocial factor."
    },
    {
      "id": "u3-q5",
      "type": "true-false",
      "question": "According to the notes, individuals have complete direct control over all determinants of their health.",
      "points": 1,
      "topicId": "topic-03",
      "topicName": "Determinants of Health",
      "correctAnswer": false,
      "explanation": "False. The context of people's lives determines their health, and individuals are unlikely to be able to directly control many determinants (like air quality, economy, etc.)."
    },

    /* ========================================================================
       UNIT 4: THEORIES AND MODELS
       ======================================================================== */
    {
      "id": "u4-q1",
      "type": "multiple-choice",
      "question": "In the Health Belief Model (HBM), which concept refers to the belief that the benefits of taking action outweigh the disadvantages?",
      "points": 1,
      "topicId": "topic-04",
      "topicName": "Theories & Models",
      "options": [
        { "id": "a", "text": "Perceived susceptibility", "isCorrect": false },
        { "id": "b", "text": "Perceived severity", "isCorrect": false },
        { "id": "c", "text": "Perceived benefits", "isCorrect": true },
        { "id": "d", "text": "Cues to action", "isCorrect": false }
      ],
      "explanation": "Perceived benefits is the belief that the effectiveness of taking action to reduce risk outweighs the costs."
    },
    {
      "id": "u4-q2",
      "type": "ordering",
      "question": "Order the stages of the Trans-theoretical Model (Stages of Change) from first to last:",
      "points": 1,
      "topicId": "topic-04",
      "topicName": "Theories & Models",
      "items": [
        { "id": "i1", "text": "Precontemplation", "correctPosition": 1 },
        { "id": "i2", "text": "Contemplation", "correctPosition": 2 },
        { "id": "i3", "text": "Preparation", "correctPosition": 3 },
        { "id": "i4", "text": "Action", "correctPosition": 4 },
        { "id": "i5", "text": "Maintenance", "correctPosition": 5 },
        { "id": "i6", "text": "Termination", "correctPosition": 6 }
      ],
      "explanation": "The stages are: Precontemplation, Contemplation, Preparation, Action, Maintenance, and Termination."
    },
    {
      "id": "u4-q3",
      "type": "multiple-choice",
      "question": "Which theory posits that a person's decision to act is determined by the dynamic interaction of the person, behavior, and environment (Reciprocal Determinism)?",
      "points": 1,
      "topicId": "topic-04",
      "topicName": "Theories & Models",
      "options": [
        { "id": "a", "text": "Health Belief Model", "isCorrect": false },
        { "id": "b", "text": "Social Cognitive Theory", "isCorrect": true },
        { "id": "c", "text": "Theory of Planned Behavior", "isCorrect": false },
        { "id": "d", "text": "Diffusion of Innovations", "isCorrect": false }
      ],
      "explanation": "Social Cognitive Theory (Bandura) emphasizes Reciprocal Determinism—the interaction between person, behavior, and environment."
    },
    {
      "id": "u4-q4",
      "type": "multiple-choice",
      "question": "In the Diffusion of Innovations theory, which group adopts an innovation first?",
      "points": 1,
      "topicId": "topic-04",
      "topicName": "Theories & Models",
      "options": [
        { "id": "a", "text": "Early Adopters", "isCorrect": false },
        { "id": "b", "text": "Innovators", "isCorrect": true },
        { "id": "c", "text": "Early Majority", "isCorrect": false },
        { "id": "d", "text": "Laggards", "isCorrect": false }
      ],
      "explanation": "Innovators (approx 2.5% of population) are the first to adopt a new idea or practice."
    },
    {
      "id": "u4-q5",
      "type": "fill-blank",
      "question": "In the PRECEDE-PROCEED model, the acronym PRECEDE stands for: __b1__, Reinforcing, and Enabling Constructs in Educational/Environmental Diagnosis and Evaluation.",
      "points": 1,
      "topicId": "topic-04",
      "topicName": "Theories & Models",
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["Predisposing", "predisposing"], "caseSensitive": false }
      ],
      "explanation": "PRECEDE stands for Predisposing, Reinforcing, and Enabling Constructs..."
    },

    /* ========================================================================
       UNIT 5: HEALTH PROMOTION APPROACHES
       ======================================================================== */
    {
      "id": "u5-q1",
      "type": "multiple-choice",
      "question": "The 'Medical Approach' to health promotion primarily focuses on:",
      "points": 1,
      "topicId": "topic-05",
      "topicName": "HP Approaches",
      "options": [
        { "id": "a", "text": "Preventing disease and premature death in populations or risk groups", "isCorrect": true },
        { "id": "b", "text": "Empowering clients to make their own decisions", "isCorrect": false },
        { "id": "c", "text": "Changing social and economic structures", "isCorrect": false },
        { "id": "d", "text": "Peer-to-peer education", "isCorrect": false }
      ],
      "explanation": "The medical approach is preventive, aiming to reduce premature death and disease through primary, secondary, and tertiary prevention."
    },
    {
      "id": "u5-q2",
      "type": "multiple-choice",
      "question": "Which of the following is a criticism of the 'Behavior Change Approach'?",
      "points": 1,
      "topicId": "topic-05",
      "topicName": "HP Approaches",
      "options": [
        { "id": "a", "text": "It focuses too much on structural changes", "isCorrect": false },
        { "id": "b", "text": "It assumes a direct link between knowledge, attitudes, and behavior", "isCorrect": true },
        { "id": "c", "text": "It ignores the individual's responsibility", "isCorrect": false },
        { "id": "d", "text": "It is too expensive to implement", "isCorrect": false }
      ],
      "explanation": "Critics argue that the behavior change approach assumes a simple, direct link between knowledge/attitudes and behavior, ignoring complex socio-economic factors."
    },
    {
      "id": "u5-q3",
      "type": "true-false",
      "question": "The Child-to-Child (CtC) approach relies on two pillars: Popular Education and Child Participation.",
      "points": 1,
      "topicId": "topic-05",
      "topicName": "HP Approaches",
      "correctAnswer": true,
      "explanation": "True. CtC is built on the principles of Popular Education (learning from one another) and Child Participation (children as active agents)."
    },
    {
      "id": "u5-q4",
      "type": "multiple-choice",
      "question": "Which approach focuses on making the 'healthier choice the easier choice' through changes in the physical, social, and economic environment?",
      "points": 1,
      "topicId": "topic-05",
      "topicName": "HP Approaches",
      "options": [
        { "id": "a", "text": "Educational Approach", "isCorrect": false },
        { "id": "b", "text": "Behavior Change Approach", "isCorrect": false },
        { "id": "c", "text": "Societal/Social Change Approach", "isCorrect": true },
        { "id": "d", "text": "Medical Approach", "isCorrect": false }
      ],
      "explanation": "The Social Change approach targets the environment to make healthy choices easier, viewing health as a social and political process."
    },
    {
      "id": "u5-q5",
      "type": "matching",
      "question": "Match the prevention level in the Medical Approach with its example:",
      "points": 1,
      "topicId": "topic-05",
      "topicName": "HP Approaches",
      "pairs": [
        { "id": "p1", "left": "Primary Prevention", "right": "Immunization of children" },
        { "id": "p2", "left": "Secondary Prevention", "right": "Mammography screening" },
        { "id": "p3", "left": "Tertiary Prevention", "right": "Rehabilitation after stroke" }
      ],
      "explanation": "Primary prevents onset (vaccines); Secondary detects early (screening); Tertiary prevents complications in existing disease (rehab)."
    },

    /* ========================================================================
       UNIT 6: HEALTH PROMOTION STRATEGIES
       ======================================================================== */
    {
      "id": "u6-q1",
      "type": "multiple-choice",
      "question": "What is the primary goal of 'Advocacy' in health promotion?",
      "points": 1,
      "topicId": "topic-06",
      "topicName": "HP Strategies",
      "options": [
        { "id": "a", "text": "To sell health products", "isCorrect": false },
        { "id": "b", "text": "To make a health issue a political or national priority", "isCorrect": true },
        { "id": "c", "text": "To collect research data", "isCorrect": false },
        { "id": "d", "text": "To provide clinical treatment", "isCorrect": false }
      ],
      "explanation": "Advocacy aims to gain political commitment, policy support, and social acceptance for health goals."
    },
    {
      "id": "u6-q2",
      "type": "multiple-choice",
      "question": "In Social Marketing, the '4 Ps' stand for:",
      "points": 1,
      "topicId": "topic-06",
      "topicName": "HP Strategies",
      "options": [
        { "id": "a", "text": "People, Place, Policy, Politics", "isCorrect": false },
        { "id": "b", "text": "Product, Price, Place, Promotion", "isCorrect": true },
        { "id": "c", "text": "Planning, Preparation, Process, Performance", "isCorrect": false },
        { "id": "d", "text": "Public, Private, Partnership, Participation", "isCorrect": false }
      ],
      "explanation": "Social marketing adapts commercial marketing's 4 Ps: Product (idea/behavior), Price (cost/barrier), Place (access), and Promotion (communication)."
    },
    {
      "id": "u6-q3",
      "type": "fill-blank",
      "question": "__b1__ is the process of engaging communities to identify priorities, resources, and solutions to promote representative participation and good governance.",
      "points": 1,
      "topicId": "topic-06",
      "topicName": "HP Strategies",
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["Community mobilization", "Social mobilization"], "caseSensitive": false }
      ],
      "explanation": "Community/Social mobilization involves organizing people to collectively act upon their development."
    },
    {
      "id": "u6-q4",
      "type": "ordering",
      "question": "Order the first 4 steps of developing visual products (IEC materials):",
      "points": 1,
      "topicId": "topic-06",
      "topicName": "HP Strategies",
      "items": [
        { "id": "i1", "text": "Select appropriate visual products", "correctPosition": 1 },
        { "id": "i2", "text": "Develop a creative brief", "correctPosition": 2 },
        { "id": "i3", "text": "Prepare drafts/prototypes", "correctPosition": 3 },
        { "id": "i4", "text": "Pre-test drafts/prototypes", "correctPosition": 4 }
      ],
      "explanation": "The process starts with selection, then a creative brief, drafting, and pre-testing before final assessment and monitoring."
    },
    {
      "id": "u6-q5",
      "type": "multiple-choice",
      "question": "Which strategy involves working collaboratively across disciplines and sectors to avoid duplication and share information?",
      "points": 1,
      "topicId": "topic-06",
      "topicName": "HP Strategies",
      "options": [
        { "id": "a", "text": "Networking", "isCorrect": true },
        { "id": "b", "text": "Screening", "isCorrect": false },
        { "id": "c", "text": "Research", "isCorrect": false },
        { "id": "d", "text": "Evaluation", "isCorrect": false }
      ],
      "explanation": "Networking is the process of building relationships and collaborating across sectors to enhance impact and sustainability."
    }
  ]
});