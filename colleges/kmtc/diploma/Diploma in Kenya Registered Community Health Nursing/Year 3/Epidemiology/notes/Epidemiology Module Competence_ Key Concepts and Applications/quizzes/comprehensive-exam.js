
registerQuiz("comprehensive-exam", {
  "schemaVersion": "1.0",
  "quizId": "comprehensive-exam",
  "metadata": {
    "title": "Epidemiology Comprehensive Final Exam",
    "description": "A comprehensive assessment covering concepts, prevention, measures, surveillance, outbreak investigation, and demography.",
    "examType": "comprehensive",
    "topicsCovered": ["topic-01", "topic-02", "topic-03", "topic-04", "topic-05", "topic-06"],
    "difficulty": "advanced",
    "estimatedTime": 60,
    "passingScore": 70,
    "createdAt": "2025-12-26T10:00:00Z",
    "tags": ["final", "comprehensive", "all-units"]
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
    // TOPIC 1: CONCEPTS & HISTORY
    {
      "id": "t1-q1",
      "type": "fill-blank",
      "question": "Epidemiology is defined as the study of the __1__ and __2__ of health-related states or events in specified populations.",
      "points": 10,
      "topicId": "topic-01",
      "topicName": "Concepts & History",
      "blanks": [
        { "id": "1", "acceptedAnswers": ["distribution"], "caseSensitive": false },
        { "id": "2", "acceptedAnswers": ["determinants"], "caseSensitive": false }
      ],
      "explanation": "Epidemiology studies the **distribution** (frequency/pattern) and **determinants** (causes/risk factors) of health events."
    },
    {
      "id": "t1-q2",
      "type": "multiple-select",
      "question": "Which of the following are components of the 'Epidemiologic Triad'? (Select all that apply)",
      "points": 10,
      "topicId": "topic-01",
      "topicName": "Concepts & History",
      "options": [
        { "id": "a", "text": "Host", "isCorrect": true },
        { "id": "b", "text": "Vector", "isCorrect": false },
        { "id": "c", "text": "Agent", "isCorrect": true },
        { "id": "d", "text": "Environment", "isCorrect": true },
        { "id": "e", "text": "Time", "isCorrect": false }
      ],
      "explanation": "The Epidemiologic Triad consists of the **Host**, **Agent**, and **Environment**. Vectors are often part of the transmission process but are not one of the three primary corners of the triad."
    },
    {
      "id": "t1-q3",
      "type": "matching",
      "question": "Match the core epidemiologic function with its description:",
      "points": 15,
      "topicId": "topic-01",
      "topicName": "Concepts & History",
      "pairs": [
        { "id": "p1", "left": "Surveillance", "right": "Ongoing collection and analysis of health data" },
        { "id": "p2", "left": "Field Investigation", "right": "Action taken in response to a case report to identify source/contacts" },
        { "id": "p3", "left": "Analytic Studies", "right": "Rigorous methods to test hypotheses using comparison groups" },
        { "id": "p4", "left": "Evaluation", "right": "Determining effectiveness and efficiency of programs" }
      ],
      "explanation": "Surveillance monitors health; Investigations respond to reports; Analytic studies test hypotheses; Evaluation assesses program success."
    },

    // TOPIC 2: PREVENTION
    {
      "id": "t2-q1",
      "type": "multiple-choice",
      "question": "Screening for cervical cancer using a Pap smear is an example of which level of prevention?",
      "points": 5,
      "topicId": "topic-02",
      "topicName": "Disease Prevention",
      "options": [
        { "id": "a", "text": "Primordial", "isCorrect": false },
        { "id": "b", "text": "Primary", "isCorrect": false },
        { "id": "c", "text": "Secondary", "isCorrect": true },
        { "id": "d", "text": "Tertiary", "isCorrect": false }
      ],
      "explanation": "Secondary prevention involves **early diagnosis and prompt treatment** before symptoms appear. Screening tests fall into this category."
    },
    {
      "id": "t2-q2",
      "type": "true-false",
      "question": "Primordial prevention targets risk factors by changing social and environmental conditions before they can lead to risk exposure.",
      "points": 5,
      "topicId": "topic-02",
      "topicName": "Disease Prevention",
      "correctAnswer": true,
      "explanation": "Primordial prevention aims to prevent the *emergence* of risk factors themselves (e.g., discouraging smoking habits in a population)."
    },
    {
      "id": "t2-q3",
      "type": "multiple-choice",
      "question": "Physical therapy for a stroke patient to restore function is considered:",
      "points": 5,
      "topicId": "topic-02",
      "topicName": "Disease Prevention",
      "options": [
        { "id": "a", "text": "Primary Prevention", "isCorrect": false },
        { "id": "b", "text": "Secondary Prevention", "isCorrect": false },
        { "id": "c", "text": "Tertiary Prevention", "isCorrect": true },
        { "id": "d", "text": "Quaternary Prevention", "isCorrect": false }
      ],
      "explanation": "Tertiary prevention focuses on **rehabilitation** and reducing the negative impact of an already established disease."
    },

    // TOPIC 3: MEASURES
    {
      "id": "t3-q1",
      "type": "multiple-choice",
      "question": "Which measure counts ONLY new cases of a disease during a specific period?",
      "points": 10,
      "topicId": "topic-03",
      "topicName": "Epidemiological Measures",
      "options": [
        { "id": "a", "text": "Prevalence", "isCorrect": false },
        { "id": "b", "text": "Incidence", "isCorrect": true },
        { "id": "c", "text": "Mortality Rate", "isCorrect": false },
        { "id": "d", "text": "Case Fatality", "isCorrect": false }
      ],
      "explanation": "**Incidence** measures the risk of developing a *new* condition. Prevalence includes existing cases."
    },
    {
      "id": "t3-q2",
      "type": "short-answer",
      "question": "If a new treatment extends the life of patients but does not cure the disease, what happens to the Prevalence of that disease?",
      "points": 10,
      "topicId": "topic-03",
      "topicName": "Epidemiological Measures",
      "keywords": ["increase", "up", "rise", "higher"],
      "minKeywords": 1,
      "modelAnswer": "The prevalence will increase because the duration of the disease is longer, even if incidence stays the same (Prevalence = Incidence × Duration).",
      "explanation": "Prevalence is approximately Incidence × Duration. If duration increases (patients live longer with the disease), prevalence increases."
    },
    {
      "id": "t3-q3",
      "type": "fill-blank",
      "question": "The __1__ attack rate is used to determine the spread of infection within a household or family after exposure to a primary case.",
      "points": 10,
      "topicId": "topic-03",
      "topicName": "Epidemiological Measures",
      "blanks": [
        { "id": "1", "acceptedAnswers": ["secondary"], "caseSensitive": false }
      ],
      "explanation": "The **secondary** attack rate measures transmission from a primary case to susceptible contacts (e.g., family members)."
    },

    // TOPIC 4: SURVEILLANCE
    {
      "id": "t4-q1",
      "type": "matching",
      "question": "Match the type of surveillance to its definition:",
      "points": 15,
      "topicId": "topic-04",
      "topicName": "Surveillance",
      "pairs": [
        { "id": "p1", "left": "Passive", "right": "Health authorities wait for reports from facilities" },
        { "id": "p2", "left": "Active", "right": "Health staff contact providers/population to find cases" },
        { "id": "p3", "left": "Sentinel", "right": "Selected sites report data to estimate trends" },
        { "id": "p4", "left": "Syndromic", "right": "Uses clinical features/symptoms without lab confirmation" }
      ],
      "explanation": "Passive is provider-initiated; Active is health-agency initiated; Sentinel uses specific sites; Syndromic tracks symptoms before diagnosis."
    },
    {
      "id": "t4-q2",
      "type": "ordering",
      "question": "Arrange the steps of the Surveillance Cycle in the correct logical order:",
      "points": 10,
      "topicId": "topic-04",
      "topicName": "Surveillance",
      "items": [
        { "id": "i1", "text": "Data Collection", "correctPosition": 1 },
        { "id": "i2", "text": "Data Analysis", "correctPosition": 2 },
        { "id": "i3", "text": "Interpretation", "correctPosition": 3 },
        { "id": "i4", "text": "Dissemination", "correctPosition": 4 },
        { "id": "i5", "text": "Public Health Action", "correctPosition": 5 }
      ],
      "explanation": "Data is collected, analyzed for trends, interpreted for significance, disseminated to decision-makers, and then used for action."
    },

    // TOPIC 5: OUTBREAK INVESTIGATION
    {
      "id": "t5-q1",
      "type": "multiple-choice",
      "question": "What is the primary difference between an 'epidemic' and a 'cluster'?",
      "points": 10,
      "topicId": "topic-05",
      "topicName": "Outbreak Investigation",
      "options": [
        { "id": "a", "text": "An epidemic is always larger than a cluster", "isCorrect": false },
        { "id": "b", "text": "A cluster does not necessarily mean the number of cases is more than expected", "isCorrect": true },
        { "id": "c", "text": "An epidemic occurs in a hospital, a cluster in the community", "isCorrect": false },
        { "id": "d", "text": "Clusters only refer to non-infectious diseases", "isCorrect": false }
      ],
      "explanation": "A **cluster** is an aggregation of cases without regard to whether the number is more than expected. An **epidemic** specifically means cases *exceed* expectancy."
    },
    {
      "id": "t5-q2",
      "type": "multiple-select",
      "question": "Which of the following are steps in an outbreak investigation? (Select all that apply)",
      "points": 10,
      "topicId": "topic-05",
      "topicName": "Outbreak Investigation",
      "options": [
        { "id": "a", "text": "Verify the diagnosis", "isCorrect": true },
        { "id": "b", "text": "Establish a case definition", "isCorrect": true },
        { "id": "c", "text": "Wait for 100% of lab results before acting", "isCorrect": false },
        { "id": "d", "text": "Develop hypotheses", "isCorrect": true }
      ],
      "explanation": "You should NOT wait for all results before acting; control measures should often be implemented as soon as possible. Verification, Case Definition, and Hypotheses are key steps."
    },
    {
      "id": "t5-q3",
      "type": "image-based",
      "question": "Identify the 'Peak' of the epidemic on this curve:",
      "points": 10,
      "topicId": "topic-05",
      "topicName": "Outbreak Investigation",
      "imageUrl": "assets/images/image-20251226-f9e45516.jpeg",
      "imageAlt": "Epidemic Curve Histogram",
      "hotspots": [
        { "id": "h1", "x": 65, "y": 25, "radius": 15, "label": "Peak Cases", "isCorrect": true },
        { "id": "h2", "x": 20, "y": 80, "radius": 15, "label": "Start", "isCorrect": false },
        { "id": "h3", "x": 90, "y": 80, "radius": 15, "label": "End", "isCorrect": false }
      ],
      "explanation": "The peak represents the time period with the highest number of cases."
    },

    // TOPIC 6: DEMOGRAPHY
    {
      "id": "t6-q1",
      "type": "multiple-choice",
      "question": "In the Demographic Cycle, Stage 1 (High Stationary) is characterized by:",
      "points": 5,
      "topicId": "topic-06",
      "topicName": "Demography",
      "options": [
        { "id": "a", "text": "High Birth Rate, Low Death Rate", "isCorrect": false },
        { "id": "b", "text": "High Birth Rate, High Death Rate", "isCorrect": true },
        { "id": "c", "text": "Low Birth Rate, Low Death Rate", "isCorrect": false },
        { "id": "d", "text": "Low Birth Rate, High Death Rate", "isCorrect": false }
      ],
      "explanation": "Stage 1 is the 'High Stationary' stage where both birth and death rates are high, resulting in a stable (stationary) population size."
    },
    {
      "id": "t6-q2",
      "type": "fill-blank",
      "question": "The balancing equation for population change is: P(t+1) = P(t) + (__1__ - Deaths) + (Immigration - __2__).",
      "points": 10,
      "topicId": "topic-06",
      "topicName": "Demography",
      "blanks": [
        { "id": "1", "acceptedAnswers": ["Births", "birth", "B"], "caseSensitive": false },
        { "id": "2", "acceptedAnswers": ["Emigration", "emigration", "E"], "caseSensitive": false }
      ],
      "explanation": "Population Change = (Births - Deaths) + (Immigration - Emigration). (Natural Increase + Net Migration)."
    },
    {
      "id": "t6-q3",
      "type": "multiple-choice",
      "question": "What is the 'Dependency Ratio'?",
      "points": 5,
      "topicId": "topic-06",
      "topicName": "Demography",
      "options": [
        { "id": "a", "text": "Ratio of males to females", "isCorrect": false },
        { "id": "b", "text": "Ratio of births to deaths", "isCorrect": false },
        { "id": "c", "text": "Ratio of economically inactive (children+elderly) to economically active population", "isCorrect": true },
        { "id": "d", "text": "Ratio of urban to rural population", "isCorrect": false }
      ],
      "explanation": "The Dependency Ratio measures the pressure on the productive population: (Children <15 + Elderly >65) / Working Age (15-64)."
    }
  ]
});