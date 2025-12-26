registerQuiz("comprehensive-exam", {
    "schemaVersion": "1.0",
    "quizId": "comprehensive-exam",
    "metadata": {
        "title": "Community Diagnosis Final Exam",
        "description": "Comprehensive assessment covering concepts, planning, data collection, and execution of community diagnosis.",
        "examType": "comprehensive",
        "topicsCovered": [
            "topic-01-introduction",
            "topic-02-types-elements",
            "topic-03-process-planning",
            "topic-04-data-collection",
            "topic-05-execution-action"
        ],
        "difficulty": "advanced",
        "estimatedTime": 60,
        "passingScore": 75,
        "createdAt": "2025-12-26T10:00:00Z",
        "tags": ["final", "comprehensive", "community-health", "epidemiology"]
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
        /* TOPIC 1: INTRODUCTION & CONCEPTS */
        {
            "id": "comp-q01",
            "type": "multiple-choice",
            "question": "Which of the following best defines 'Community Diagnosis'?",
            "points": 4,
            "topicId": "topic-01-introduction",
            "topicName": "1. Introduction & Concepts",
            "options": [
                { "id": "a", "text": "The treatment of individual patients within a specific geographical area.", "isCorrect": false },
                { "id": "b", "text": "The process where health workers and community members identify and prioritize health problems.", "isCorrect": true },
                { "id": "c", "text": "A government census to determine population density for taxation.", "isCorrect": false },
                { "id": "d", "text": "The exclusive study of mortality rates in a hospital setting.", "isCorrect": false }
            ],
            "explanation": "Community diagnosis is the process through which health workers together with members of the community identify the community’s priority health problems and plan interventions."
        },
        {
            "id": "comp-q02",
            "type": "multiple-select",
            "question": "Community participation relies on four key concepts of Primary Health Care. Select all that apply.",
            "points": 4,
            "topicId": "topic-01-introduction",
            "topicName": "1. Introduction & Concepts",
            "options": [
                { "id": "a", "text": "Acceptability", "isCorrect": true },
                { "id": "b", "text": "Accessibility", "isCorrect": true },
                { "id": "c", "text": "Profitability", "isCorrect": false },
                { "id": "d", "text": "Affordability", "isCorrect": true },
                { "id": "e", "text": "Availability", "isCorrect": true }
            ],
            "explanation": "The four concepts are Acceptability, Accessibility, Affordability, and Availability."
        },
        {
            "id": "comp-q03",
            "type": "ordering",
            "question": "Arrange the steps to ensure ethical considerations are met during community diagnosis in the logical order of engagement:",
            "points": 5,
            "topicId": "topic-01-introduction",
            "topicName": "1. Introduction & Concepts",
            "items": [
                { "id": "i1", "text": "Obtaining permission to enter community boundaries", "correctPosition": 1 },
                { "id": "i2", "text": "Obtaining informed consent before interviewing", "correctPosition": 2 },
                { "id": "i3", "text": "Establishing rapport before exploring sensitive areas", "correctPosition": 3 },
                { "id": "i4", "text": "Ensuring confidentiality of data collected", "correctPosition": 4 }
            ]
        },

        /* TOPIC 2: TYPES & ELEMENTS */
        {
            "id": "comp-q04",
            "type": "matching",
            "question": "Match the variable to its correct category in a comprehensive diagnosis.",
            "points": 5,
            "topicId": "topic-02-types-elements",
            "topicName": "2. Types & Elements",
            "pairs": [
                { "id": "p1", "left": "Population Density", "right": "Demographic Variable" },
                { "id": "p2", "left": "Poverty Level Income", "right": "Economic Indicator" },
                { "id": "p3", "left": "Waste Disposal", "right": "Environmental Indicator" },
                { "id": "p4", "left": "Maternal Mortality", "right": "Health & Illness Pattern" }
            ]
        },
        {
            "id": "comp-q05",
            "type": "true-false",
            "question": "A 'Problem-Oriented Community Diagnosis' aims to obtain general information about the community to create a broad profile.",
            "points": 3,
            "topicId": "topic-02-types-elements",
            "topicName": "2. Types & Elements",
            "correctAnswer": false,
            "explanation": "This describes a 'Comprehensive Community Diagnosis'. A Problem-Oriented diagnosis responds to a specific need or issue."
        },
        {
            "id": "comp-q06",
            "type": "multiple-choice",
            "question": "Which element reflects the action potential of the state and mirrors the government's sensitivity to people's struggles?",
            "points": 4,
            "topicId": "topic-02-types-elements",
            "topicName": "2. Types & Elements",
            "options": [
                { "id": "a", "text": "Health Resources", "isCorrect": false },
                { "id": "b", "text": "Political/Leadership Patterns", "isCorrect": true },
                { "id": "c", "text": "Socio-economic Stratification", "isCorrect": false },
                { "id": "d", "text": "Demographic Trends", "isCorrect": false }
            ],
            "explanation": "Political/Leadership patterns reflect the action potential of the state and its sensitivity to the people's needs."
        },

        /* TOPIC 3: PROCESS & PLANNING */
        {
            "id": "comp-q07",
            "type": "ordering",
            "question": "Place the 7 steps of the Community Diagnosis process in the correct order.",
            "points": 5,
            "topicId": "topic-03-process-planning",
            "topicName": "3. Process & Planning",
            "items": [
                { "id": "i1", "text": "Exploration", "correctPosition": 1 },
                { "id": "i2", "text": "Planning the survey", "correctPosition": 2 },
                { "id": "i3", "text": "Developing and Pre-testing tools", "correctPosition": 3 },
                { "id": "i4", "text": "Execution of the survey", "correctPosition": 4 },
                { "id": "i5", "text": "Data analysis", "correctPosition": 5 },
                { "id": "i6", "text": "Report writing", "correctPosition": 6 },
                { "id": "i7", "text": "Community action", "correctPosition": 7 }
            ]
        },
        {
            "id": "comp-q08",
            "type": "fill-blank",
            "question": "In systematic sampling, if you have a population of 200 and need a sample of 50, the sampling interval (k) is __1__.",
            "points": 4,
            "topicId": "topic-03-process-planning",
            "topicName": "3. Process & Planning",
            "blanks": [
                { "id": "1", "acceptedAnswers": ["4", "four"], "caseSensitive": false }
            ],
            "explanation": "k = N / n. Therefore, 200 / 50 = 4."
        },
        {
            "id": "comp-q09",
            "type": "matching",
            "question": "Match the sampling method to its definition.",
            "points": 5,
            "topicId": "topic-03-process-planning",
            "topicName": "3. Process & Planning",
            "pairs": [
                { "id": "p1", "left": "Stratified Sampling", "right": "Dividing population into subgroups then sampling each" },
                { "id": "p2", "left": "Cluster Sampling", "right": "Randomly selecting intact groups, not individuals" },
                { "id": "p3", "left": "Snowballing", "right": "Subjects identify others with similar characteristics" },
                { "id": "p4", "left": "Quota Sampling", "right": "Selecting subjects to fit specific pre-defined categories" }
            ]
        },
        {
            "id": "comp-q10",
            "type": "multiple-choice",
            "question": "Which of the following is considered a 'Probability Sampling' method?",
            "points": 4,
            "topicId": "topic-03-process-planning",
            "topicName": "3. Process & Planning",
            "options": [
                { "id": "a", "text": "Purposive Sampling", "isCorrect": false },
                { "id": "b", "text": "Convenience Sampling", "isCorrect": false },
                { "id": "c", "text": "Simple Random Sampling", "isCorrect": true },
                { "id": "d", "text": "Quota Sampling", "isCorrect": false }
            ],
            "explanation": "Simple Random Sampling is a probability method where every unit has an equal chance of selection. The others are non-probability methods."
        },

        /* TOPIC 4: DATA COLLECTION TOOLS */
        {
            "id": "comp-q11",
            "type": "multiple-select",
            "question": "Which of the following are characteristics of a good questionnaire? (Select all that apply)",
            "points": 4,
            "topicId": "topic-04-data-collection",
            "topicName": "4. Data Collection Tools",
            "options": [
                { "id": "a", "text": "Uses simple and specific questions", "isCorrect": true },
                { "id": "b", "text": "Includes many leading questions to guide the respondent", "isCorrect": false },
                { "id": "c", "text": "Moves from known to unknown / simple to complex", "isCorrect": true },
                { "id": "d", "text": "Avoids double-barreled questions", "isCorrect": true }
            ],
            "explanation": "Good questionnaires avoid leading questions, are simple/specific, follow a logical flow, and avoid double questions."
        },
        {
            "id": "comp-q12",
            "type": "true-false",
            "question": "A 'Matrix Question' format is useful because it allows for efficient use of space and easy comparison of responses.",
            "points": 3,
            "topicId": "topic-04-data-collection",
            "topicName": "4. Data Collection Tools",
            "correctAnswer": true,
            "explanation": "Matrix questions share the same response categories (e.g., Likert scale), saving space and facilitating comparison."
        },
        {
            "id": "comp-q13",
            "type": "multiple-choice",
            "question": "What is the primary role of the 'Recorder' in a Focus Group Discussion (FGD)?",
            "points": 4,
            "topicId": "topic-04-data-collection",
            "topicName": "4. Data Collection Tools",
            "options": [
                { "id": "a", "text": "To dominate the discussion and guide opinions", "isCorrect": false },
                { "id": "b", "text": "To introduce the topic and participants", "isCorrect": false },
                { "id": "c", "text": "To document key issues, responses, and non-verbal messages", "isCorrect": true },
                { "id": "d", "text": "To ensure the venue is well lit", "isCorrect": false }
            ],
            "explanation": "The Recorder documents responses, key issues, and non-verbal cues, while the Facilitator guides the discussion."
        },
        {
            "id": "comp-q14",
            "type": "fill-blank",
            "question": "A __1__ question allows the respondent to answer in their own words, while a __2__ question provides a list of possible answers.",
            "points": 4,
            "topicId": "topic-04-data-collection",
            "topicName": "4. Data Collection Tools",
            "blanks": [
                { "id": "1", "acceptedAnswers": ["open-ended", "open ended", "unstructured"], "caseSensitive": false },
                { "id": "2", "acceptedAnswers": ["closed-ended", "closed ended", "structured"], "caseSensitive": false }
            ],
            "explanation": "Open-ended/unstructured questions allow free response; Closed-ended/structured questions provide options."
        },

        /* TOPIC 5: EXECUTION & ACTION */
        {
            "id": "comp-q15",
            "type": "multiple-choice",
            "question": "When cleaning data, what should be done with inconsistent information that cannot be verified?",
            "points": 4,
            "topicId": "topic-05-execution-action",
            "topicName": "5. Execution & Action",
            "options": [
                { "id": "a", "text": "Guess the correct answer based on trends", "isCorrect": false },
                { "id": "b", "text": "Exclude it from the analysis", "isCorrect": true },
                { "id": "c", "text": "Leave it as is", "isCorrect": false },
                { "id": "d", "text": "Ask a colleague to fill it in", "isCorrect": false }
            ],
            "explanation": "Data cleaning involves excluding inconsistent information if its correctness cannot be verified to ensure accuracy."
        },
        {
            "id": "comp-q16",
            "type": "matching",
            "question": "Match the type of report to its primary audience or purpose.",
            "points": 5,
            "topicId": "topic-05-execution-action",
            "topicName": "5. Execution & Action",
            "pairs": [
                { "id": "p1", "left": "Individual Report", "right": "Given to survey participants (e.g., abnormal findings)" },
                { "id": "p2", "left": "Preliminary Report", "right": "Given to community leaders soon after fieldwork" },
                { "id": "p3", "left": "Non-Medical Report", "right": "For politicians/leaders to influence policy" },
                { "id": "p4", "left": "Scientific Report", "right": "Detailed account of methodology and analysis" }
            ]
        },
        {
            "id": "comp-q17",
            "type": "multiple-choice",
            "question": "Which of the following is NOT a recommended Community Health Action intervention?",
            "points": 4,
            "topicId": "topic-05-execution-action",
            "topicName": "5. Execution & Action",
            "options": [
                { "id": "a", "text": "Health Education", "isCorrect": false },
                { "id": "b", "text": "Immunization", "isCorrect": false },
                { "id": "c", "text": "Withholding results to prevent panic", "isCorrect": true },
                { "id": "d", "text": "Environmental Improvement", "isCorrect": false }
            ],
            "explanation": "Withholding results is not an intervention. Action involves education, immunization, environmental improvement, and promoting PHC."
        },
        {
            "id": "comp-q18",
            "type": "true-false",
            "question": "Qualitative analysis is usually applied to data that has a numerical basis and can be measured (e.g., weight, age).",
            "points": 3,
            "topicId": "topic-05-execution-action",
            "topicName": "5. Execution & Action",
            "correctAnswer": false,
            "explanation": "Quantitative analysis applies to numerical data. Qualitative analysis applies to data that can be counted but not measured (e.g., opinions)."
        },

        /* CROSS-TOPIC SYNTHESIS */
        {
            "id": "comp-q19",
            "type": "multiple-choice",
            "question": "Which sampling method would be most appropriate if you cannot obtain a sampling frame because the population is scattered over a large area?",
            "points": 5,
            "topicId": "topic-03-process-planning",
            "topicName": "3. Process & Planning",
            "options": [
                { "id": "a", "text": "Simple Random Sampling", "isCorrect": false },
                { "id": "b", "text": "Cluster Sampling", "isCorrect": true },
                { "id": "c", "text": "Systematic Sampling", "isCorrect": false },
                { "id": "d", "text": "Stratified Sampling", "isCorrect": false }
            ],
            "explanation": "Cluster sampling is used when it is impossible to list all elements (no sampling frame) or the population is geographically scattered."
        },
        {
            "id": "comp-q20",
            "type": "fill-blank",
            "question": "The process of arranging raw data into groups or a particular order is called __1__, while assigning numerical codes to attributes is called __2__.",
            "points": 4,
            "topicId": "topic-05-execution-action",
            "topicName": "5. Execution & Action",
            "blanks": [
                { "id": "1", "acceptedAnswers": ["sorting"], "caseSensitive": false },
                { "id": "2", "acceptedAnswers": ["coding"], "caseSensitive": false }
            ],
            "explanation": "Sorting organizes raw data; Coding converts data into numerical codes for analysis."
        }
    ]
});