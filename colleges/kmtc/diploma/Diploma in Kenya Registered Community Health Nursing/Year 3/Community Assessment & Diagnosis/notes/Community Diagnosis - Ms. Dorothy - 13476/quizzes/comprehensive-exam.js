registerQuiz("comprehensive-exam", {
    "schemaVersion": "1.0",
    "quizId": "comprehensive-exam",
    "metadata": {
        "title": "Community Diagnosis Final Exam",
        "description": "Comprehensive assessment covering concepts, planning, tools, execution, and reporting of community diagnosis.",
        "examType": "comprehensive",
        "topicsCovered": [
            "topic-01-concept",
            "topic-02-planning",
            "topic-03-tools",
            "topic-04-execution",
            "topic-05-reporting"
        ],
        "difficulty": "intermediate",
        "estimatedTime": 45,
        "passingScore": 70,
        "createdAt": "2025-12-26T12:00:00Z",
        "tags": ["final", "comprehensive", "community-health", "nursing"]
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
        /* =================================================================
           TOPIC 01: CONCEPT AND PURPOSE
           ================================================================= */
        {
            "id": "comp-q1",
            "type": "multiple-choice",
            "question": "Which of the following best describes 'Community Diagnosis'?",
            "points": 4,
            "topicId": "topic-01-concept",
            "topicName": "Concept & Purpose",
            "options": [
                { "id": "a", "text": "Treating individual patients within a specific village", "isCorrect": false },
                { "id": "b", "text": "A process where health workers and community members identify and prioritize health problems to plan action", "isCorrect": true },
                { "id": "c", "text": "A statistical census of the population carried out by the government", "isCorrect": false },
                { "id": "d", "text": "Diagnosing diseases in a hospital setting", "isCorrect": false }
            ],
            "explanation": "Community diagnosis is defined as a process through which health workers together with members of the community identify the community's priority health problems, and together make plans of action and implement them."
        },
        {
            "id": "comp-q2",
            "type": "multiple-select",
            "question": "Select the components that make up the '4 As' of Primary Health Care (PHC). (Select all that apply)",
            "points": 4,
            "topicId": "topic-01-concept",
            "topicName": "Concept & Purpose",
            "options": [
                { "id": "a", "text": "Acceptability", "isCorrect": true },
                { "id": "b", "text": "Accessibility", "isCorrect": true },
                { "id": "c", "text": "Affordability", "isCorrect": true },
                { "id": "d", "text": "Availability", "isCorrect": true },
                { "id": "e", "text": "Accountability", "isCorrect": false },
                { "id": "f", "text": "Authority", "isCorrect": false }
            ],
            "explanation": "The 4 As of PHC are Acceptability, Accessibility, Affordability, and Availability (using appropriate and local technologies)."
        },
        {
            "id": "comp-q3",
            "type": "matching",
            "question": "Match the diagnosis type with the appropriate tool.",
            "points": 4,
            "topicId": "topic-01-concept",
            "topicName": "Concept & Purpose",
            "pairs": [
                { "id": "p1", "left": "Patient Diagnosis", "right": "Stethoscope & BP Machine" },
                { "id": "p2", "left": "Community Diagnosis", "right": "Questionnaires & Maps" }
            ],
            "explanation": "Patient diagnosis uses clinical tools like stethoscopes, while community diagnosis uses survey tools like maps and questionnaires."
        },
        {
            "id": "comp-q4",
            "type": "true-false",
            "question": "In community diagnosis, the community should select ALL health problems to solve, regardless of resources.",
            "points": 4,
            "topicId": "topic-01-concept",
            "topicName": "Concept & Purpose",
            "correctAnswer": false,
            "explanation": "False. It is important to only select priority health problems because resources are limited. The community must choose problems they can practically address."
        },
        {
            "id": "comp-q5",
            "type": "fill-blank",
            "question": "While patient diagnosis leads to treatment, community diagnosis leads to a __b1__.",
            "points": 4,
            "topicId": "topic-01-concept",
            "topicName": "Concept & Purpose",
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["plan of action", "community health programme", "community health program", "action plan"], "caseSensitive": false }
            ],
            "explanation": "Just as a patient diagnosis leads to individual treatment, a community diagnosis leads to a community health programme or plan of action."
        },

        /* =================================================================
           TOPIC 02: PLANNING AND SAMPLING
           ================================================================= */
        {
            "id": "comp-q6",
            "type": "ordering",
            "question": "Arrange the steps of the Community Diagnosis process in the correct chronological order.",
            "points": 4,
            "topicId": "topic-02-planning",
            "topicName": "Planning & Sampling",
            "items": [
                { "id": "i1", "text": "Exploration (Community Inventory)", "correctPosition": 1 },
                { "id": "i2", "text": "Planning the Survey", "correctPosition": 2 },
                { "id": "i3", "text": "Developing and Pre-testing Tools", "correctPosition": 3 },
                { "id": "i4", "text": "Execution and Data Analysis", "correctPosition": 4 },
                { "id": "i5", "text": "Report Writing and Dissemination", "correctPosition": 5 }
            ],
            "explanation": "The process begins with Exploration, followed by Planning, Tool Development, Execution, and finally Reporting."
        },
        {
            "id": "comp-q7",
            "type": "multiple-choice",
            "question": "Which of the following activities is NOT part of the 'Exploration' phase?",
            "points": 4,
            "topicId": "topic-02-planning",
            "topicName": "Planning & Sampling",
            "options": [
                { "id": "a", "text": "Seeking permission from leaders", "isCorrect": false },
                { "id": "b", "text": "Seeking reactions from community members", "isCorrect": false },
                { "id": "c", "text": "Analyzing the final data", "isCorrect": true },
                { "id": "d", "text": "Gathering background data", "isCorrect": false }
            ],
            "explanation": "Analyzing final data occurs in the Execution phase (Section 4). Exploration involves seeking permission, seeking reactions, and gathering background data."
        },
        {
            "id": "comp-q8",
            "type": "fill-blank",
            "question": "A __b1__ is the process of selecting a number of individuals from a study population such that they represent the larger group.",
            "points": 4,
            "topicId": "topic-02-planning",
            "topicName": "Planning & Sampling",
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["sampling"], "caseSensitive": false }
            ],
            "explanation": "Sampling is the process of selecting representative individuals from the larger study population."
        },
        {
            "id": "comp-q9",
            "type": "matching",
            "question": "Classify the following sampling methods.",
            "points": 4,
            "topicId": "topic-02-planning",
            "topicName": "Planning & Sampling",
            "pairs": [
                { "id": "p1", "left": "Simple Random Sampling", "right": "Probability Sampling" },
                { "id": "p2", "left": "Convenience Sampling", "right": "Non-probability Sampling" },
                { "id": "p3", "left": "Stratified Sampling", "right": "Probability Sampling" },
                { "id": "p4", "left": "Purposive Sampling", "right": "Non-probability Sampling" }
            ],
            "explanation": "Random and Stratified are probability methods (representative). Convenience and Purposive are non-probability methods."
        },
        {
            "id": "comp-q10",
            "type": "true-false",
            "question": "Probability sampling is best used for qualitative studies where the focus is on in-depth information rather than generalization.",
            "points": 4,
            "topicId": "topic-02-planning",
            "topicName": "Planning & Sampling",
            "correctAnswer": false,
            "explanation": "False. Non-probability sampling is used for qualitative/in-depth studies. Probability sampling is used when accurate generalization to the population is required."
        },

        /* =================================================================
           TOPIC 03: DEVELOPING TOOLS
           ================================================================= */
        {
            "id": "comp-q11",
            "type": "multiple-select",
            "question": "Which of the following are valid tools for data collection in community diagnosis? (Select all that apply)",
            "points": 4,
            "topicId": "topic-03-tools",
            "topicName": "Developing Tools",
            "options": [
                { "id": "a", "text": "Questionnaires", "isCorrect": true },
                { "id": "b", "text": "Focus Group Discussions (FGDs)", "isCorrect": true },
                { "id": "c", "text": "Key Informant Interviews", "isCorrect": true },
                { "id": "d", "text": "Physical Examination", "isCorrect": true }
            ],
            "explanation": "All listed options are valid tools mentioned in Section 3."
        },
        {
            "id": "comp-q12",
            "type": "fill-blank",
            "question": "The acronym KISS in questionnaire design stands for 'Keep It __b1__ and __b2__'.",
            "points": 4,
            "topicId": "topic-03-tools",
            "topicName": "Developing Tools",
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["short"], "caseSensitive": false },
                { "id": "b2", "acceptedAnswers": ["simple"], "caseSensitive": false }
            ],
            "explanation": "KISS stands for Keep It Short and Simple."
        },
        {
            "id": "comp-q13",
            "type": "multiple-choice",
            "question": "Who guides the participants during a Focus Group Discussion?",
            "points": 4,
            "topicId": "topic-03-tools",
            "topicName": "Developing Tools",
            "options": [
                { "id": "a", "text": "The Chief", "isCorrect": false },
                { "id": "b", "text": "A Moderator (Facilitator)", "isCorrect": true },
                { "id": "c", "text": "A Medical Officer", "isCorrect": false },
                { "id": "d", "text": "The most elderly participant", "isCorrect": false }
            ],
            "explanation": "A moderator or group facilitator introduces topics and helps the group participate in a lively discussion."
        },
        {
            "id": "comp-q14",
            "type": "multiple-choice",
            "question": "What is the primary purpose of pre-testing survey instruments?",
            "points": 4,
            "topicId": "topic-03-tools",
            "topicName": "Developing Tools",
            "options": [
                { "id": "a", "text": "To start analyzing data early", "isCorrect": false },
                { "id": "b", "text": "To identify misinterpreted or sensitive questions", "isCorrect": true },
                { "id": "c", "text": "To save money on paper", "isCorrect": false },
                { "id": "d", "text": "To skip the planning phase", "isCorrect": false }
            ],
            "explanation": "Pre-testing enables the team to discern, alter, or delete questions that are misinterpreted or too sensitive."
        },
        {
            "id": "comp-q15",
            "type": "true-false",
            "question": "A questionnaire should be complex to ensure it covers all possible scientific details.",
            "points": 4,
            "topicId": "topic-03-tools",
            "topicName": "Developing Tools",
            "correctAnswer": false,
            "explanation": "False. Questionnaires should be kept short and simple (KISS principle)."
        },

        /* =================================================================
           TOPIC 04: EXECUTION AND ANALYSIS
           ================================================================= */
        {
            "id": "comp-q16",
            "type": "ordering",
            "question": "Order the steps of the data analysis process.",
            "points": 4,
            "topicId": "topic-04-execution",
            "topicName": "Execution & Analysis",
            "items": [
                { "id": "i1", "text": "Data Cleaning", "correctPosition": 1 },
                { "id": "i2", "text": "Sorting or Tallying", "correctPosition": 2 },
                { "id": "i3", "text": "Coding and Entering Data", "correctPosition": 3 },
                { "id": "i4", "text": "Analysis of Results", "correctPosition": 4 }
            ],
            "explanation": "The correct order is Cleaning, Sorting/Tallying, Coding/Entering, and then Analysis."
        },
        {
            "id": "comp-q17",
            "type": "matching",
            "question": "Match the analysis type to the data type.",
            "points": 4,
            "topicId": "topic-04-execution",
            "topicName": "Execution & Analysis",
            "pairs": [
                { "id": "p1", "left": "Quantitative Analysis", "right": "Numerical data (e.g., weight, age)" },
                { "id": "p2", "left": "Qualitative Analysis", "right": "Countable but non-measurable data (e.g., color, opinion)" }
            ],
            "explanation": "Quantitative applies to measurable numerical data; Qualitative applies to data that can be counted/categorized but not measured on a scale."
        },
        {
            "id": "comp-q18",
            "type": "multiple-choice",
            "question": "What is the first thing an interviewer should do when approaching a respondent?",
            "points": 4,
            "topicId": "topic-04-execution",
            "topicName": "Execution & Analysis",
            "options": [
                { "id": "a", "text": "Start asking questions immediately", "isCorrect": false },
                { "id": "b", "text": "Introduce themselves and show identity cards", "isCorrect": true },
                { "id": "c", "text": "Ask for money", "isCorrect": false },
                { "id": "d", "text": "Insist on an interview even if the respondent refuses", "isCorrect": false }
            ],
            "explanation": "Interviewers should first introduce themselves, show ID, and explain the purpose to establish rapport."
        },
        {
            "id": "comp-q19",
            "type": "fill-blank",
            "question": "Data obtained directly from the field before processing is known as __b1__ data.",
            "points": 4,
            "topicId": "topic-04-execution",
            "topicName": "Execution & Analysis",
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["raw"], "caseSensitive": false }
            ],
            "explanation": "Data obtained from the field is known as 'raw data' and needs analysis to interpret."
        },
        {
            "id": "comp-q20",
            "type": "multiple-select",
            "question": "Which of the following are methods of Graphical Presentation?",
            "points": 4,
            "topicId": "topic-04-execution",
            "topicName": "Execution & Analysis",
            "options": [
                { "id": "a", "text": "Histogram", "isCorrect": true },
                { "id": "b", "text": "Pie Chart", "isCorrect": true },
                { "id": "c", "text": "Frequency Distribution Table", "isCorrect": false },
                { "id": "d", "text": "Bar Graph", "isCorrect": true }
            ],
            "explanation": "Histograms, Pie Charts, and Bar Graphs are graphical. A Frequency Distribution Table is a tabular presentation."
        },

        /* =================================================================
           TOPIC 05: REPORTING AND ACTION
           ================================================================= */
        {
            "id": "comp-q21",
            "type": "matching",
            "question": "Match the report type to its description.",
            "points": 4,
            "topicId": "topic-05-reporting",
            "topicName": "Reporting & Action",
            "pairs": [
                { "id": "p1", "left": "Preliminary Report", "right": "Given soon after field work to thank the community" },
                { "id": "p2", "left": "Non-Medical Report", "right": "Less scientific, used as a social/political tool" },
                { "id": "p3", "left": "Medical/Community Diagnosis Report", "right": "Detailed scientific report with full analysis" }
            ],
            "explanation": "Preliminary is immediate/general. Non-medical is for laypeople/leaders. Medical is the detailed scientific record."
        },
        {
            "id": "comp-q22",
            "type": "multiple-choice",
            "question": "In the acronym SMART for objectives, what does 'M' stand for?",
            "points": 4,
            "topicId": "topic-05-reporting",
            "topicName": "Reporting & Action",
            "options": [
                { "id": "a", "text": "Medical", "isCorrect": false },
                { "id": "b", "text": "Measurable", "isCorrect": true },
                { "id": "c", "text": "Meaningful", "isCorrect": false },
                { "id": "d", "text": "Modest", "isCorrect": false }
            ],
            "explanation": "SMART stands for Specific, Measurable, Attainable, Realistic, Timely."
        },
        {
            "id": "comp-q23",
            "type": "true-false",
            "question": "Feedback should only be given to the medical staff, not the community members.",
            "points": 4,
            "topicId": "topic-05-reporting",
            "topicName": "Reporting & Action",
            "correctAnswer": false,
            "explanation": "False. All individuals in the community who concerned with the health of the people are entitled to feedback."
        },
        {
            "id": "comp-q24",
            "type": "multiple-select",
            "question": "Which of the following are examples of mobilizing community action?",
            "points": 4,
            "topicId": "topic-05-reporting",
            "topicName": "Reporting & Action",
            "options": [
                { "id": "a", "text": "Health Education", "isCorrect": true },
                { "id": "b", "text": "Immunization", "isCorrect": true },
                { "id": "c", "text": "Environmental Improvement", "isCorrect": true },
                { "id": "d", "text": "Ignoring the findings", "isCorrect": false }
            ],
            "explanation": "Action includes promoting PHC, health education, immunization, and environmental improvement."
        },
        {
            "id": "comp-q25",
            "type": "fill-blank",
            "question": "The __b1__ must take action and the initiative to bring about the necessary changes.",
            "points": 4,
            "topicId": "topic-05-reporting",
            "topicName": "Reporting & Action",
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["community"], "caseSensitive": false }
            ],
            "explanation": "The text emphasizes that the community itself must take the initiative for changes to happen."
        }
    ]
});