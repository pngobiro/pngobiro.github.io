registerQuiz("comprehensive-exam", {
    "schemaVersion": "1.0",
    "quizId": "comprehensive-exam",
    "metadata": {
        "title": "Comprehensive Final Exam: Community Diagnosis",
        "description": "Final assessment covering concepts, planning, tools, execution, analysis, and reporting of community diagnosis.",
        "topicId": "comprehensive",
        "difficulty": "advanced",
        "estimatedTime": 45,
        "passingScore": 70,
        "createdAt": "2026-01-17T10:00:00Z",
        "tags": ["community-health", "diagnosis", "statistics", "research-methods"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "end",
        "allowRetry": false,
        "showCorrectAnswers": false,
        "timeLimit": 2700
    },
    "questions": [
        {
            "id": "q1-concept",
            "type": "multiple-choice",
            "question": "What is the primary definition of 'Community Diagnosis'?",
            "points": 2,
            "options": [
                {
                    "id": "opt1",
                    "text": "A process where health workers and community members identify priority health problems and plan actions together.",
                    "isCorrect": true
                },
                {
                    "id": "opt2",
                    "text": "The clinical treatment of individual patients within a specific village setting.",
                    "isCorrect": false
                },
                {
                    "id": "opt3",
                    "text": "A government census to determine the total population of a district.",
                    "isCorrect": false
                },
                {
                    "id": "opt4",
                    "text": "The distribution of medicines to households based on income levels.",
                    "isCorrect": false
                }
            ],
            "explanation": "Community diagnosis is defined as a process through which health workers together with members of the community identify the community's priority health problems, and together make plans of action and implement them."
        },
        {
            "id": "q2-patient-vs-community",
            "type": "matching",
            "question": "Match the tool or action to whether it applies to Patient Diagnosis or Community Diagnosis.",
            "points": 4,
            "pairs": [
                {
                    "id": "p1",
                    "left": "Sphygmomanometer (BP Machine)",
                    "right": "Patient Diagnosis"
                },
                {
                    "id": "p2",
                    "left": "Questionnaires & Maps",
                    "right": "Community Diagnosis"
                },
                {
                    "id": "p3",
                    "left": "Clinical History Taking",
                    "right": "Patient Diagnosis"
                },
                {
                    "id": "p4",
                    "left": "Survey Execution",
                    "right": "Community Diagnosis"
                }
            ],
            "explanation": "Patient diagnosis uses clinical tools like BP machines and history taking, whereas community diagnosis uses survey tools like maps and questionnaires."
        },
        {
            "id": "q3-indicators",
            "type": "multiple-choice",
            "question": "Which indicator is defined as 'the probability of dying between birth and exactly one year of age expressed per 1,000 live births'?",
            "points": 2,
            "options": [
                {
                    "id": "opt1",
                    "text": "Infant Mortality Rate (IMR)",
                    "isCorrect": true
                },
                {
                    "id": "opt2",
                    "text": "Crude Birth Rate (CBR)",
                    "isCorrect": false
                },
                {
                    "id": "opt3",
                    "text": "Rate of Natural Increase (RNI)",
                    "isCorrect": false
                },
                {
                    "id": "opt4",
                    "text": "Crude Death Rate (CDR)",
                    "isCorrect": false
                }
            ],
            "explanation": "Infant Mortality Rate is the probability of dying between birth and exactly one year of age expressed per 1,000 live births."
        },
        {
            "id": "q4-process-ordering",
            "type": "ordering",
            "question": "Arrange the steps of the Community Diagnosis process in the correct chronological order.",
            "points": 5,
            "items": [
                {
                    "id": "step1",
                    "text": "Exploration (Community Inventory)",
                    "correctPosition": 1
                },
                {
                    "id": "step2",
                    "text": "Planning of the survey",
                    "correctPosition": 2
                },
                {
                    "id": "step3",
                    "text": "Developing and pre-testing survey tools",
                    "correctPosition": 3
                },
                {
                    "id": "step4",
                    "text": "Execution of the survey and data analysis",
                    "correctPosition": 4
                },
                {
                    "id": "step5",
                    "text": "Report writing, dissemination and community action",
                    "correctPosition": 5
                }
            ],
            "explanation": "The process begins with exploration, followed by planning, tool development, execution/analysis, and finally reporting/action."
        },
        {
            "id": "q5-sampling-types",
            "type": "multiple-choice",
            "question": "Which of the following is a 'Probability Sampling' method?",
            "points": 2,
            "options": [
                {
                    "id": "opt1",
                    "text": "Stratified Sampling",
                    "isCorrect": true
                },
                {
                    "id": "opt2",
                    "text": "Quota Sampling",
                    "isCorrect": false
                },
                {
                    "id": "opt3",
                    "text": "Convenience Sampling",
                    "isCorrect": false
                },
                {
                    "id": "opt4",
                    "text": "Purposive Sampling",
                    "isCorrect": false
                }
            ],
            "explanation": "Stratified sampling is a probability method. Quota, Convenience, and Purposive are non-probability (biased) methods."
        },
        {
            "id": "q6-cluster-sampling",
            "type": "true-false",
            "question": "Cluster sampling involves randomly selecting groups (like health facilities) rather than individuals when a population is scattered or too large.",
            "points": 1,
            "correctAnswer": true,
            "explanation": "In cluster sampling, you randomly select intact groups (clusters) and include all members of that group, which is useful when a sampling frame of individuals is difficult to obtain."
        },
        {
            "id": "q7-questionnaire-qualities",
            "type": "multiple-select",
            "question": "Select all the qualities of a good questionnaire according to the text.",
            "points": 3,
            "options": [
                {
                    "id": "opt1",
                    "text": "Has simple and specific questions",
                    "isCorrect": true
                },
                {
                    "id": "opt2",
                    "text": "Avoids bias and double questions",
                    "isCorrect": true
                },
                {
                    "id": "opt3",
                    "text": "Contains many complex medical terms to ensure accuracy",
                    "isCorrect": false
                },
                {
                    "id": "opt4",
                    "text": "Ranges from known to unknown and simple to complex",
                    "isCorrect": true
                },
                {
                    "id": "opt5",
                    "text": "Includes questions about rare conditions that cannot be treated",
                    "isCorrect": false
                }
            ],
            "explanation": "Good questionnaires should be simple, specific, unbiased, flow logically (simple to complex), and avoid technical jargon or useless questions about untreatable rare conditions."
        },
        {
            "id": "q8-fgd-facilitator",
            "type": "short-answer",
            "question": "In a Focus Group Discussion, one person acts as the recorder. What is the title of the person who stimulates and supports the discussion?",
            "points": 2,
            "keywords": ["facilitator", "moderator", "group facilitator"],
            "modelAnswer": "Facilitator (or Moderator)",
            "explanation": "The team consists of a facilitator (who guides the discussion) and a recorder (who takes notes)."
        },
        {
            "id": "q9-pretesting",
            "type": "fill-blank",
            "question": "Pre-testing instruments should be done on a community that is very __adj__ to the target group, but not the group itself.",
            "points": 2,
            "blanks": [
                {
                    "id": "adj",
                    "acceptedAnswers": ["similar", "alike", "comparable"],
                    "caseSensitive": false
                }
            ],
            "explanation": "Instruments should be pre-tested on a group very similar to the study population to ensure validity without contaminating the actual sample."
        },
        {
            "id": "q10-data-cleaning",
            "type": "multiple-choice",
            "question": "What is the main purpose of 'Data Cleaning'?",
            "points": 2,
            "options": [
                {
                    "id": "opt1",
                    "text": "To find missing data, correct mistakes, and exclude inconsistent information.",
                    "isCorrect": true
                },
                {
                    "id": "opt2",
                    "text": "To wipe the computer hard drive before analysis.",
                    "isCorrect": false
                },
                {
                    "id": "opt3",
                    "text": "To convert data into numerical codes.",
                    "isCorrect": false
                },
                {
                    "id": "opt4",
                    "text": "To arrange raw data into an array.",
                    "isCorrect": false
                }
            ],
            "explanation": "Data cleaning involves identifying missing data, correcting interviewer mistakes, and removing inconsistent/unverifiable information."
        },
        {
            "id": "q11-graph-types",
            "type": "matching",
            "question": "Match the graph type to its description.",
            "points": 4,
            "pairs": [
                {
                    "id": "p1",
                    "left": "Histogram",
                    "right": "Uses vertical blocks where vertical axis starts at zero; used for continuous variables."
                },
                {
                    "id": "p2",
                    "left": "Frequency Polygon",
                    "right": "Derived by joining the midpoints of the tops of histogram rectangles."
                },
                {
                    "id": "p3",
                    "left": "Pie Chart",
                    "right": "A circle divided into sectors representing percentages of a whole."
                },
                {
                    "id": "p4",
                    "left": "Bar Chart",
                    "right": "Spaced rectangles whose length varies with magnitude; can be vertical or horizontal."
                }
            ],
            "explanation": "Histograms are for continuous data (blocks touch), bar charts have spaced rectangles, pie charts show parts of a whole, and frequency polygons are line graphs derived from histograms."
        },
        {
            "id": "q12-feedback-table",
            "type": "multiple-choice",
            "question": "According to the feedback table, who receives the 'Medical Report'?",
            "points": 2,
            "options": [
                {
                    "id": "opt1",
                    "text": "Medical Leadership and Medical Professionals",
                    "isCorrect": true
                },
                {
                    "id": "opt2",
                    "text": "Patients Population and Non-medical Leadership",
                    "isCorrect": false
                },
                {
                    "id": "opt3",
                    "text": "Only the Ministry of Health",
                    "isCorrect": false
                },
                {
                    "id": "opt4",
                    "text": "The Community Chiefs and Elders",
                    "isCorrect": false
                }
            ],
            "explanation": "The Medical Report is a detailed scientific report targeted at Medical Leadership (local/national) and Medical Professionals."
        },
        {
            "id": "q13-smart-objectives",
            "type": "fill-blank",
            "question": "Good survey objectives should be SMART: Specific, __m__, Attainable, Realistic, and Timely.",
            "points": 2,
            "blanks": [
                {
                    "id": "m",
                    "acceptedAnswers": ["measurable"],
                    "caseSensitive": false
                }
            ],
            "explanation": "SMART stands for Specific, Measurable, Attainable, Realistic, and Timely."
        },
        {
            "id": "q14-community-action",
            "type": "multiple-select",
            "question": "Which of the following are interventions used to mobilize community action after a survey?",
            "points": 3,
            "options": [
                {
                    "id": "opt1",
                    "text": "Health Education",
                    "isCorrect": true
                },
                {
                    "id": "opt2",
                    "text": "Immunisation",
                    "isCorrect": true
                },
                {
                    "id": "opt3",
                    "text": "Environmental Improvement",
                    "isCorrect": true
                },
                {
                    "id": "opt4",
                    "text": "Withholding results until the next election",
                    "isCorrect": false
                }
            ],
            "explanation": "Community action mobilization involves creating awareness, health education, immunization campaigns, and environmental improvement."
        },
        {
            "id": "q15-report-limitations",
            "type": "true-false",
            "question": "In the 'Limitations of Study' section of a report, you should hide difficulties encountered to make the survey look perfect.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "This section calls for honesty and openness in admitting difficulties (e.g., sampling errors, incomplete records) to guide future researchers."
        },
        {
            "id": "q16-sampling-systematic",
            "type": "short-answer",
            "question": "If you have a population of 1000 and want a sample of 10, you pick every 100th person. This is an example of what sampling method?",
            "points": 2,
            "keywords": ["systematic", "systematic sampling"],
            "modelAnswer": "Systematic Sampling",
            "explanation": "Systematic sampling involves selecting every 'nth' individual from a list after a random start."
        },
        {
            "id": "q17-rate-natural-increase",
            "type": "multiple-choice",
            "question": "How is the Rate of Natural Increase (RNI) calculated?",
            "points": 2,
            "options": [
                {
                    "id": "opt1",
                    "text": "The difference between birth rate and death rate per 1,000, expressed as a percentage.",
                    "isCorrect": true
                },
                {
                    "id": "opt2",
                    "text": "Total births divided by total deaths.",
                    "isCorrect": false
                },
                {
                    "id": "opt3",
                    "text": "The number of people moving into the community minus those moving out.",
                    "isCorrect": false
                },
                {
                    "id": "opt4",
                    "text": "The ratio of under-18s to over-64s.",
                    "isCorrect": false
                }
            ],
            "explanation": "RNI is calculated by finding the difference between birth rate and death rate per 1,000, then expressing it as a percentage."
        },
        {
            "id": "q18-non-medical-report",
            "type": "multiple-choice",
            "question": "What is the primary purpose of the 'Non-medical Report'?",
            "points": 2,
            "options": [
                {
                    "id": "opt1",
                    "text": "To influence social and political leaders to improve health services.",
                    "isCorrect": true
                },
                {
                    "id": "opt2",
                    "text": "To provide a detailed scientific account for academic journals.",
                    "isCorrect": false
                },
                {
                    "id": "opt3",
                    "text": "To give immediate feedback to individual patients about their lab results.",
                    "isCorrect": false
                },
                {
                    "id": "opt4",
                    "text": "To request funding from international donors.",
                    "isCorrect": false
                }
            ],
            "explanation": "The non-medical report is less scientific and produced for non-medical people (social/political leaders) to influence action on health service improvements."
        },
        {
            "id": "q19-closed-questions",
            "type": "true-false",
            "question": "Closed-ended questions allow the respondent to answer in their own words without a list of options.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "Closed-ended questions offer respondents a list of possible answers to choose from. Open-ended questions allow own-word answers."
        },
        {
            "id": "q20-rights",
            "type": "multiple-choice",
            "question": "If a respondent refuses to participate in the survey, what should the interviewer do?",
            "points": 2,
            "options": [
                {
                    "id": "opt1",
                    "text": "Politely thank the person and proceed to the next interview.",
                    "isCorrect": true
                },
                {
                    "id": "opt2",
                    "text": "Insist that the survey is mandatory by government order.",
                    "isCorrect": false
                },
                {
                    "id": "opt3",
                    "text": "Call the village chief to force them to participate.",
                    "isCorrect": false
                },
                {
                    "id": "opt4",
                    "text": "Fill out the form based on what they think the person would say.",
                    "isCorrect": false
                }
            ],
            "explanation": "The respondent has the right to refuse. The interviewer should try to persuade politely, but if adamant, thank them and leave."
        },
        {
            "id": "q21-graph-axes",
            "type": "fill-blank",
            "question": "In a histogram, the __h__ axis shows the classes, while the __v__ axis shows the frequencies.",
            "points": 2,
            "blanks": [
                {
                    "id": "h",
                    "acceptedAnswers": ["horizontal"],
                    "caseSensitive": false
                },
                {
                    "id": "v",
                    "acceptedAnswers": ["vertical"],
                    "caseSensitive": false
                }
            ],
            "explanation": "Classes are on the horizontal axis, frequencies on the vertical axis."
        },
        {
            "id": "q22-array",
            "type": "multiple-choice",
            "question": "What is an 'Array' in data handling?",
            "points": 2,
            "options": [
                {
                    "id": "opt1",
                    "text": "Data which has been sorted or arranged into some order according to magnitude.",
                    "isCorrect": true
                },
                {
                    "id": "opt2",
                    "text": "Raw data exactly as it was collected on the forms.",
                    "isCorrect": false
                },
                {
                    "id": "opt3",
                    "text": "A type of graph used for percentages.",
                    "isCorrect": false
                },
                {
                    "id": "opt4",
                    "text": "The list of all households in a village.",
                    "isCorrect": false
                }
            ],
            "explanation": "Data which has been sorted or arranged into some order (e.g., ascending) according to magnitude is called an array."
        },
        {
            "id": "q23-4as",
            "type": "multiple-select",
            "question": "Identify the '4 As' of Primary Health Care mentioned in the context of community participation.",
            "points": 4,
            "options": [
                {
                    "id": "opt1",
                    "text": "Acceptability",
                    "isCorrect": true
                },
                {
                    "id": "opt2",
                    "text": "Accessibility",
                    "isCorrect": true
                },
                {
                    "id": "opt3",
                    "text": "Affordability",
                    "isCorrect": true
                },
                {
                    "id": "opt4",
                    "text": "Availability",
                    "isCorrect": true
                },
                {
                    "id": "opt5",
                    "text": "Accountability",
                    "isCorrect": false
                },
                {
                    "id": "opt6",
                    "text": "Adaptability",
                    "isCorrect": false
                }
            ],
            "explanation": "The 4 As are Acceptability, Accessibility, Affordability, and Availability."
        },
        {
            "id": "q24-variable-definition",
            "type": "multiple-choice",
            "question": "A characteristic within a study sample whose value changes among study subjects (e.g., age, weight) is called a:",
            "points": 2,
            "options": [
                {
                    "id": "opt1",
                    "text": "Variable",
                    "isCorrect": true
                },
                {
                    "id": "opt2",
                    "text": "Constant",
                    "isCorrect": false
                },
                {
                    "id": "opt3",
                    "text": "Indicator",
                    "isCorrect": false
                },
                {
                    "id": "opt4",
                    "text": "Sample Frame",
                    "isCorrect": false
                }
            ],
            "explanation": "A variable is a characteristic whose value changes (varies) among the study subjects."
        },
        {
            "id": "q25-data-collection-tools",
            "type": "multiple-choice",
            "question": "Which of the following is NOT typically a tool for *Community* Diagnosis, but rather for Patient Diagnosis?",
            "points": 2,
            "options": [
                {
                    "id": "opt1",
                    "text": "Stethoscope",
                    "isCorrect": true
                },
                {
                    "id": "opt2",
                    "text": "Maps",
                    "isCorrect": false
                },
                {
                    "id": "opt3",
                    "text": "Questionnaires",
                    "isCorrect": false
                },
                {
                    "id": "opt4",
                    "text": "Focus Group Discussions",
                    "isCorrect": false
                }
            ],
            "explanation": "Stethoscopes are clinical tools for individual patient diagnosis. Maps, questionnaires, and FGDs are used for community surveys."
        }
    ]
});