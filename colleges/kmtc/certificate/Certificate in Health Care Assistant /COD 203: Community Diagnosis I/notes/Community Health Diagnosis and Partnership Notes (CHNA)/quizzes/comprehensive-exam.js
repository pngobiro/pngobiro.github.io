if (typeof registerQuiz === 'function') {
    registerQuiz("comprehensive-exam", {
        "schemaVersion": "1.0",
        "quizId": "comprehensive-exam",
        "metadata": {
            "title": "Community Health Diagnosis Final Exam",
            "description": "Comprehensive assessment covering all 12 modules of the course.",
            "examType": "comprehensive",
            "topicsCovered": [
                "topic-01", "topic-02", "topic-03", "topic-04",
                "topic-05", "topic-06", "topic-07", "topic-08",
                "topic-09", "topic-10", "topic-11", "topic-12"
            ],
            "difficulty": "advanced",
            "estimatedTime": 45,
            "passingScore": 75,
            "createdAt": "2026-01-09T00:00:00Z"
        },
        "settings": {
            "shuffleQuestions": true,
            "shuffleOptions": true,
            "showFeedback": "end", // Feedback only at the end for exams
            "allowRetry": true,
            "timeLimit": 2700 // 45 minutes
        },
        "questions": [
            // TOPIC 01
            {
                "id": "ex-q1",
                "type": "multiple-choice",
                "question": "Which of the following best defines 'Incidence' in epidemiology?",
                "points": 10,
                "topicId": "topic-01",
                "topicName": "Terms & Definitions",
                "options": [
                    { "id": "a", "text": "Total number of existing cases at a specific time", "isCorrect": false },
                    { "id": "b", "text": "Number of new cases occurring over a specific period", "isCorrect": true },
                    { "id": "c", "text": "Number of deaths per unit of population", "isCorrect": false }
                ],
                "explanation": "Incidence refers specifically to new cases, whereas prevalence refers to existing cases."
            },
            {
                "id": "ex-q2",
                "type": "true-false",
                "question": "According to the WHO definition, health is merely the absence of disease or infirmity.",
                "points": 10,
                "topicId": "topic-01",
                "topicName": "Terms & Definitions",
                "correctAnswer": false,
                "explanation": "Health is a state of complete physical, mental, and social well-being, not merely the absence of disease."
            },

            // TOPIC 02
            {
                "id": "ex-q3",
                "type": "multiple-select",
                "question": "Which of the following are essential components of preliminary health needs identification tools? (Select all that apply)",
                "points": 10,
                "topicId": "topic-02",
                "topicName": "Methodology",
                "options": [
                    { "id": "a", "text": "Cultural Sensitivity", "isCorrect": true },
                    { "id": "b", "text": "Clear and concise questions", "isCorrect": true },
                    { "id": "c", "text": "Ethical considerations", "isCorrect": true },
                    { "id": "d", "text": "Complex academic jargon", "isCorrect": false }
                ],
                "explanation": "Tools must be clear, relevant, culturally sensitive, and ethical. Jargon should be avoided."
            },
            {
                "id": "ex-q4",
                "type": "fill-blank",
                "question": "A Community Health __b1__ provides a snapshot of key demographic, socioeconomic, and health indicators.",
                "points": 10,
                "topicId": "topic-02",
                "topicName": "Methodology",
                "blanks": [
                    { "id": "b1", "acceptedAnswers": ["profile", "Profile"], "caseSensitive": false }
                ],
                "explanation": "The Community Health Profile serves as the foundational snapshot of the community's status."
            },

            // TOPIC 03
            {
                "id": "ex-q5",
                "type": "matching",
                "question": "Match the data analysis technique to its function:",
                "points": 10,
                "topicId": "topic-03",
                "topicName": "Data Analysis",
                "pairs": [
                    { "id": "p1", "left": "Descriptive Statistics", "right": "Summarize data (mean, mode)" },
                    { "id": "p2", "left": "Inferential Statistics", "right": "Draw conclusions from samples" },
                    { "id": "p3", "left": "Spatial Analysis", "right": "Analyze geographic patterns" }
                ],
                "explanation": "Descriptive summarizes, Inferential predicts, and Spatial looks at geography."
            },
            {
                "id": "ex-q6",
                "type": "multiple-choice",
                "question": "Which visualization is best suited for showing trends over time?",
                "points": 10,
                "topicId": "topic-03",
                "topicName": "Data Analysis",
                "options": [
                    { "id": "a", "text": "Pie Chart", "isCorrect": false },
                    { "id": "b", "text": "Line Graph", "isCorrect": true },
                    { "id": "c", "text": "Scatter Plot", "isCorrect": false }
                ],
                "explanation": "Line graphs are the standard for time-series data."
            },

            // TOPIC 04
            {
                "id": "ex-q7",
                "type": "multiple-choice",
                "question": "In prioritization, what does 'Magnitude' refer to?",
                "points": 10,
                "topicId": "topic-04",
                "topicName": "Prioritization",
                "options": [
                    { "id": "a", "text": "The severity of the impact on individuals", "isCorrect": false },
                    { "id": "b", "text": "How many people are affected (prevalence)", "isCorrect": true },
                    { "id": "c", "text": "The feasibility of the solution", "isCorrect": false }
                ],
                "explanation": "Magnitude refers to the size of the problem (numbers affected)."
            },
            {
                "id": "ex-q8",
                "type": "multiple-select",
                "question": "Select methods used for prioritizing health needs:",
                "points": 10,
                "topicId": "topic-04",
                "topicName": "Prioritization",
                "options": [
                    { "id": "a", "text": "Weighted criteria matrix", "isCorrect": true },
                    { "id": "b", "text": "Dot voting", "isCorrect": true },
                    { "id": "c", "text": "Coin tossing", "isCorrect": false }
                ],
                "explanation": "Matrices and dot voting are structured prioritization methods."
            },

            // TOPIC 05
            {
                "id": "ex-q9",
                "type": "fill-blank",
                "question": "Objectives in an implementation plan must be __b1__ (Specific, Measurable, Achievable, Relevant, Time-bound).",
                "points": 10,
                "topicId": "topic-05",
                "topicName": "Implementation",
                "blanks": [
                    { "id": "b1", "acceptedAnswers": ["smart", "SMART"], "caseSensitive": false }
                ],
                "explanation": "SMART is the standard acronym for effective objectives."
            },
            {
                "id": "ex-q10",
                "type": "multiple-choice",
                "question": "What type of metric measures changes in health behaviors or health status?",
                "points": 10,
                "topicId": "topic-05",
                "topicName": "Implementation",
                "options": [
                    { "id": "a", "text": "Process metric", "isCorrect": false },
                    { "id": "b", "text": "Outcome metric", "isCorrect": true },
                    { "id": "c", "text": "Input metric", "isCorrect": false }
                ],
                "explanation": "Outcome metrics measure the actual results or changes achieved."
            },

            // TOPIC 06
            {
                "id": "ex-q11",
                "type": "true-false",
                "question": "Policy Advocacy involves lobbying policymakers to change or implement specific legislation.",
                "points": 10,
                "topicId": "topic-06",
                "topicName": "Advocacy",
                "correctAnswer": true,
                "explanation": "Policy advocacy specifically targets legislative or regulatory changes."
            },
            {
                "id": "ex-q12",
                "type": "multiple-choice",
                "question": "Who are the primary 'Human Resources' in a health advocacy campaign?",
                "points": 10,
                "topicId": "topic-06",
                "topicName": "Advocacy",
                "options": [
                    { "id": "a", "text": "Computers and software", "isCorrect": false },
                    { "id": "b", "text": "Grants and funds", "isCorrect": false },
                    { "id": "c", "text": "Community members and leaders", "isCorrect": true }
                ],
                "explanation": "People (community, experts, leaders) constitute human resources."
            },

            // TOPIC 07
            {
                "id": "ex-q13",
                "type": "multiple-choice",
                "question": "Which of the following represents a 'Vision Statement'?",
                "points": 10,
                "topicId": "topic-07",
                "topicName": "Action Planning",
                "options": [
                    { "id": "a", "text": "Train 50 workers by June", "isCorrect": false },
                    { "id": "b", "text": "A community where all residents enjoy optimal health", "isCorrect": true },
                    { "id": "c", "text": "Purchase 100 vaccines", "isCorrect": false }
                ],
                "explanation": "A vision is a long-term, inspiring picture of the future state."
            },
            {
                "id": "ex-q14",
                "type": "matching",
                "question": "Match the resource category to the example:",
                "points": 10,
                "topicId": "topic-07",
                "topicName": "Action Planning",
                "pairs": [
                    { "id": "p1", "left": "Financial", "right": "Grants" },
                    { "id": "p2", "left": "Material", "right": "Equipment" },
                    { "id": "p3", "left": "Information", "right": "Research Data" }
                ],
                "explanation": "Grants are money (financial), equipment is physical (material), data is knowledge (information)."
            },

            // TOPIC 08
            {
                "id": "ex-q15",
                "type": "multiple-choice",
                "question": "In SWOT analysis, 'Threats' refer to:",
                "points": 10,
                "topicId": "topic-08",
                "topicName": "Action Planning",
                "options": [
                    { "id": "a", "text": "Internal limitations", "isCorrect": false },
                    { "id": "b", "text": "External factors posing risks", "isCorrect": true },
                    { "id": "c", "text": "Internal attributes helpful to goals", "isCorrect": false }
                ],
                "explanation": "Threats are external negative factors (e.g., economic downturns, climate change)."
            },
            {
                "id": "ex-q16",
                "type": "ordering",
                "question": "Order the steps of the M&E cycle:",
                "points": 10,
                "topicId": "topic-08",
                "topicName": "Action Planning",
                "items": [
                    { "id": "i1", "text": "Define Goals/Objectives", "correctPosition": 1 },
                    { "id": "i2", "text": "Identify KPIs", "correctPosition": 2 },
                    { "id": "i3", "text": "Collect Data", "correctPosition": 3 },
                    { "id": "i4", "text": "Evaluate and Learn", "correctPosition": 4 }
                ],
                "explanation": "Goals -> Indicators -> Collection -> Evaluation."
            },

            // TOPIC 09
            {
                "id": "ex-q17",
                "type": "multiple-choice",
                "question": "What document provides the framework for collaboration, outlining roles and responsibilities?",
                "points": 10,
                "topicId": "topic-09",
                "topicName": "Collaboration",
                "options": [
                    { "id": "a", "text": "Invoice", "isCorrect": false },
                    { "id": "b", "text": "Terms of Reference (ToR)", "isCorrect": true },
                    { "id": "c", "text": "Press Release", "isCorrect": false }
                ],
                "explanation": "ToR defines the structure, scope, and roles within a partnership."
            },
            {
                "id": "ex-q18",
                "type": "fill-blank",
                "question": "Inter-sectoral collaboration involves working across different __b1__ (e.g., health, education, agriculture) to achieve common goals.",
                "points": 10,
                "topicId": "topic-09",
                "topicName": "Collaboration",
                "blanks": [
                    { "id": "b1", "acceptedAnswers": ["sectors", "sector"], "caseSensitive": false }
                ],
                "explanation": "Sectors are the distinct areas of society/economy involved."
            },

            // TOPIC 10
            {
                "id": "ex-q19",
                "type": "true-false",
                "question": "Addressing health inequities requires focusing solely on the healthcare sector.",
                "points": 10,
                "topicId": "topic-10",
                "topicName": "Collaboration",
                "correctAnswer": false,
                "explanation": "Inequities are rooted in social determinants, requiring inter-sectoral action (housing, education, etc.)."
            },
            {
                "id": "ex-q20",
                "type": "multiple-choice",
                "question": "Which strategy helps sustain a partnership network?",
                "points": 10,
                "topicId": "topic-10",
                "topicName": "Collaboration",
                "options": [
                    { "id": "a", "text": "Ignoring conflicts", "isCorrect": false },
                    { "id": "b", "text": "Celebrating successes", "isCorrect": true },
                    { "id": "c", "text": "Hoarding information", "isCorrect": false }
                ],
                "explanation": "Celebrating achievements maintains momentum and morale."
            },

            // TOPIC 11
            {
                "id": "ex-q21",
                "type": "multiple-choice",
                "question": "Which SPSS procedure is used to compare means between two groups?",
                "points": 10,
                "topicId": "topic-11",
                "topicName": "Reporting Tools",
                "options": [
                    { "id": "a", "text": "Chi-square", "isCorrect": false },
                    { "id": "b", "text": "T-test", "isCorrect": true },
                    { "id": "c", "text": "Correlation", "isCorrect": false }
                ],
                "explanation": "T-tests compare means; Chi-square compares categorical variables."
            },
            {
                "id": "ex-q22",
                "type": "fill-blank",
                "question": "The __b1__ summary is a concise overview of the report's key findings and recommendations, usually placed at the beginning.",
                "points": 10,
                "topicId": "topic-11",
                "topicName": "Reporting Tools",
                "blanks": [
                    { "id": "b1", "acceptedAnswers": ["executive", "Executive"], "caseSensitive": false }
                ],
                "explanation": "The Executive Summary provides the high-level overview."
            },

            // TOPIC 12
            {
                "id": "ex-q23",
                "type": "multiple-choice",
                "question": "Which entity is the primary government agency responsible for healthcare policies in Kenya?",
                "points": 10,
                "topicId": "topic-12",
                "topicName": "Kenya Context",
                "options": [
                    { "id": "a", "text": "Ministry of Health (MoH)", "isCorrect": true },
                    { "id": "b", "text": "United Nations", "isCorrect": false },
                    { "id": "c", "text": "Private Hospital Association", "isCorrect": false }
                ],
                "explanation": "MoH is the lead government body."
            },
            {
                "id": "ex-q24",
                "type": "multiple-choice",
                "question": "What is 'eCHIS' in the context of Kenyan health information?",
                "points": 10,
                "topicId": "topic-12",
                "topicName": "Kenya Context",
                "options": [
                    { "id": "a", "text": "Electronic Community Health Information System", "isCorrect": true },
                    { "id": "b", "text": "Emergency Care Health Insurance", "isCorrect": false },
                    { "id": "c", "text": "Early Child Health Initiative", "isCorrect": false }
                ],
                "explanation": "eCHIS is the digital platform for community data collection."
            }
        ]
    });
}