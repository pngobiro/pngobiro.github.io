registerQuiz("comprehensive-exam", {
    "schemaVersion": "1.0",
    "quizId": "comprehensive-exam",
    "metadata": {
        "title": "Comprehensive Final Exam: Unit 3 Research in Nursing",
        "description": "A comprehensive assessment covering all aspects of nursing research from basic concepts to proposal writing.",
        "topicId": "unit-3-comprehensive",
        "difficulty": "advanced",
        "estimatedTime": 60,
        "passingScore": 70,
        "createdAt": "2026-01-17T00:00:00Z",
        "updatedAt": "2026-01-17T00:00:00Z",
        "tags": ["nursing-research", "methodology", "ethics", "data-analysis", "proposal-writing"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "end",
        "allowRetry": true,
        "showCorrectAnswers": false,
        "timeLimit": 3600
    },
    "questions": [
        // Topic 1: Concepts and Contribution
        {
            "id": "q1-definition",
            "type": "multiple-choice",
            "question": "According to Cormack (1991), how is 'nursing research' specifically defined?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Research into those aspects of professional activity which are predominantly and appropriately the concern and responsibility of nurses.", "isCorrect": true },
                { "id": "opt2", "text": "A systematic, subjective approach used to describe life experiences and give them meaning.", "isCorrect": false },
                { "id": "opt3", "text": "A formal, objective, rigorous, systematic process for generating information about the world.", "isCorrect": false },
                { "id": "opt4", "text": "Any research conducted by a registered nurse in a clinical setting.", "isCorrect": false }
            ],
            "explanation": "Cormack (1991) defines nursing research as research into aspects of professional activity that are predominantly the concern and responsibility of nurses."
        },
        {
            "id": "q1-purpose",
            "type": "multiple-select",
            "question": "Which of the following are recognized purposes of nursing research? (Select all that apply)",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Developing scientific, evidence-based reasons for nursing activities", "isCorrect": true },
                { "id": "opt2", "text": "Finding ways of increasing the cost-effectiveness of nursing activities", "isCorrect": true },
                { "id": "opt3", "text": "Providing a basis for standards setting and quality assurance", "isCorrect": true },
                { "id": "opt4", "text": "Generating profit for hospital administration", "isCorrect": false }
            ],
            "explanation": "Nursing research aims to develop evidence-based practice, increase cost-effectiveness, and provide a basis for standards and quality assurance."
        },
        {
            "id": "q1-scientific",
            "type": "fill-blank",
            "question": "According to Burns and Grove (1999), the word 'research' implies a diligent, __b1__ inquiry or study to validate and refine existing knowledge.",
            "points": 1,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["systematic"], "caseSensitive": false }
            ],
            "explanation": "Research is defined as a diligent, systematic inquiry or study."
        },

        // Topic 2: Types of Research
        {
            "id": "q2-qual-quant",
            "type": "matching",
            "question": "Match the characteristic to the correct research type (Quantitative vs Qualitative).",
            "points": 1,
            "pairs": [
                { "id": "p1", "left": "Focuses on a relatively small number of concepts (concise and narrow)", "right": "Quantitative" },
                { "id": "p2", "left": "Attempts to understand the phenomenon in its entirety", "right": "Qualitative" },
                { "id": "p3", "left": "Analyses numeric information through statistical procedures", "right": "Quantitative" },
                { "id": "p4", "left": "Analyses narrative information in an organised, but intuitive fashion", "right": "Qualitative" }
            ],
            "explanation": "Quantitative research focuses on narrow concepts and numbers, while qualitative research looks at phenomena in their entirety and uses narrative analysis."
        },
        {
            "id": "q2-rra",
            "type": "multiple-choice",
            "question": "Which Rapid Rural Appraisal (RRA) tool involves drawing circles to indicate relationships and the importance of institutions?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Venn Diagrams", "isCorrect": true },
                { "id": "opt2", "text": "Mapping", "isCorrect": false },
                { "id": "opt3", "text": "Seasonal Calendars", "isCorrect": false },
                { "id": "opt4", "text": "Daily Schedules", "isCorrect": false }
            ],
            "explanation": "Venn Diagrams use circles of varying sizes to indicate relationships and importance of institutions."
        },
        {
            "id": "q2-experimental",
            "type": "multiple-choice",
            "question": "What is the primary difference between experimental and descriptive research?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Experimental research tests a hypothesis and controls variables, whereas descriptive research merely describes a situation.", "isCorrect": true },
                { "id": "opt2", "text": "Descriptive research uses random sampling, while experimental research does not.", "isCorrect": false },
                { "id": "opt3", "text": "Experimental research is qualitative, while descriptive research is quantitative.", "isCorrect": false },
                { "id": "opt4", "text": "There is no significant difference; the terms are interchangeable.", "isCorrect": false }
            ],
            "explanation": "Experimental research is characterized by hypothesis testing and control over variables, unlike descriptive research."
        },

        // Topic 3: The Research Process - Planning
        {
            "id": "q3-smart",
            "type": "ordering",
            "question": "Arrange the components of the SMART acronym for research objectives in the correct order.",
            "points": 1,
            "items": [
                { "id": "item1", "text": "Specific", "correctPosition": 1 },
                { "id": "item2", "text": "Measurable", "correctPosition": 2 },
                { "id": "item3", "text": "Achievable", "correctPosition": 3 },
                { "id": "item4", "text": "Realistic", "correctPosition": 4 },
                { "id": "item5", "text": "Time bound", "correctPosition": 5 }
            ],
            "explanation": "SMART stands for Specific, Measurable, Achievable, Realistic, and Time bound."
        },
        {
            "id": "q3-variables",
            "type": "matching",
            "question": "Match the type of variable to its definition.",
            "points": 1,
            "pairs": [
                { "id": "p1", "left": "Independent Variable", "right": "The intervention or treatment that influences others" },
                { "id": "p2", "left": "Dependent Variable", "right": "The outcome variable that reflects the effects" },
                { "id": "p3", "left": "Extraneous Variable", "right": "Uncontrolled variables that may bias the study" },
                { "id": "p4", "left": "Demographic Variable", "right": "Attributes like age or sex that cannot be manipulated" }
            ],
            "explanation": "Independent variables cause change, dependent variables show the effect, extraneous variables confuse results, and demographic variables describe attributes."
        },
        {
            "id": "q3-hypothesis",
            "type": "true-false",
            "question": "A Null Hypothesis (H0) states that there is a significant difference or correlation between groups.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "False. The Null Hypothesis (H0) states that NO difference exists between groups or NO correlation exists between variables."
        },

        // Topic 4: Literature Review & Design
        {
            "id": "q4-sources",
            "type": "multiple-choice",
            "question": "Which of the following is considered a PRIMARY source of literature?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "A thesis or dissertation written by the original researcher", "isCorrect": true },
                { "id": "opt2", "text": "A textbook summary of various studies", "isCorrect": false },
                { "id": "opt3", "text": "A newspaper article about a scientific discovery", "isCorrect": false },
                { "id": "opt4", "text": "An encyclopedia entry", "isCorrect": false }
            ],
            "explanation": "Primary sources are original works by the person responsible for the idea or research, such as theses or empirical research articles."
        },
        {
            "id": "q4-exp-characteristics",
            "type": "multiple-select",
            "question": "Select the three major characteristics of a true experimental research design.",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Manipulation", "isCorrect": true },
                { "id": "opt2", "text": "Control", "isCorrect": true },
                { "id": "opt3", "text": "Randomisation", "isCorrect": true },
                { "id": "opt4", "text": "Description", "isCorrect": false },
                { "id": "opt5", "text": "Observation", "isCorrect": false }
            ],
            "explanation": "True experimental designs are characterized by Manipulation (of the independent variable), Control (of the situation), and Randomisation (of subjects)."
        },
        {
            "id": "q4-design",
            "type": "multiple-choice",
            "question": "Which study design looks back in time to link present outcomes with past exposures?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Retrospective Study Design", "isCorrect": true },
                { "id": "opt2", "text": "Prospective Study Design", "isCorrect": false },
                { "id": "opt3", "text": "Cross-sectional Study Design", "isCorrect": false },
                { "id": "opt4", "text": "Experimental Design", "isCorrect": false }
            ],
            "explanation": "Retrospective studies look back to link the present with the past (e.g., asking patients about past exposures)."
        },

        // Topic 5: Sampling, Measurement & Ethics
        {
            "id": "q5-sampling",
            "type": "matching",
            "question": "Match the sampling technique to its description.",
            "points": 1,
            "pairs": [
                { "id": "p1", "left": "Simple Random Sampling", "right": "Every unit has an equal chance of selection (e.g., lottery)" },
                { "id": "p2", "left": "Stratified Random Sampling", "right": "Population divided into subgroups before random selection" },
                { "id": "p3", "left": "Snowball Sampling", "right": "Subjects recruit future subjects from acquaintances" },
                { "id": "p4", "left": "Quota Sampling", "right": "Subjects selected based on specified proportions using judgement" }
            ],
            "explanation": "Simple random is pure chance; Stratified uses subgroups; Snowball relies on referrals; Quota uses non-probability proportions."
        },
        {
            "id": "q5-ethics",
            "type": "multiple-choice",
            "question": "Which ethical principle involves the right to self-determination and protection of individuals with diminished autonomy?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Principle of Respect for Persons", "isCorrect": true },
                { "id": "opt2", "text": "Principle of Justice", "isCorrect": false },
                { "id": "opt3", "text": "Principle of Beneficence", "isCorrect": false },
                { "id": "opt4", "text": "Principle of Maleficence", "isCorrect": false }
            ],
            "explanation": "Respect for persons covers autonomy (self-determination) and protection of those with diminished autonomy."
        },
        {
            "id": "q5-data-collection",
            "type": "true-false",
            "question": "Focus group discussions are most effective when the group members have very different (heterogeneous) characteristics to spark debate.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "False. Focus groups are usually limited to those with similar characteristics so members feel free to contribute."
        },

        // Topic 6: Data Execution & Reporting
        {
            "id": "q6-pilot",
            "type": "multiple-select",
            "question": "What are the purposes of conducting a pilot study (pre-test)? (Select all that apply)",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "To determine feasibility of the study", "isCorrect": true },
                { "id": "opt2", "text": "To identify problems with the research design", "isCorrect": true },
                { "id": "opt3", "text": "To ensure data collection instruments are clear", "isCorrect": true },
                { "id": "opt4", "text": "To collect the final data for the main analysis", "isCorrect": false }
            ],
            "explanation": "Pilot studies refine methodology, check feasibility, and test instruments, but their data is usually not part of the final main analysis."
        },
        {
            "id": "q6-analysis",
            "type": "fill-blank",
            "question": "In qualitative data analysis, the researcher must order, reduce, and __b1__ the data to create categories, themes, and patterns.",
            "points": 1,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["code"], "caseSensitive": false }
            ],
            "explanation": "Coding is the process of turning responses into standard categories or themes in qualitative analysis."
        },
        {
            "id": "q6-graphs",
            "type": "multiple-choice",
            "question": "Which graphic method is used to represent continuous variables and has no spaces between the bars?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Histogram", "isCorrect": true },
                { "id": "opt2", "text": "Bar Chart", "isCorrect": false },
                { "id": "opt3", "text": "Pie Chart", "isCorrect": false },
                { "id": "opt4", "text": "Scatter Plot", "isCorrect": false }
            ],
            "explanation": "Histograms represent continuous data and have adjacent bars, unlike bar charts which have spaces."
        },

        // Topic 7: Proposal Writing
        {
            "id": "q7-proposal",
            "type": "true-false",
            "question": "A research proposal is a retrospective document written after the research is completed to explain what was done.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "False. A research proposal is a plan written BEFORE the research begins, outlining what the researcher INTENDS to do."
        },
        {
            "id": "q7-budget",
            "type": "multiple-select",
            "question": "Which of the following items should be included in a study budget? (Select all that apply)",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Stationery and printing costs", "isCorrect": true },
                { "id": "opt2", "text": "Personnel costs (e.g., research assistants)", "isCorrect": true },
                { "id": "opt3", "text": "Travel allowances", "isCorrect": true },
                { "id": "opt4", "text": "Personal entertainment expenses", "isCorrect": false }
            ],
            "explanation": "Study budgets should include direct research costs like stationery, personnel, and travel."
        },
        {
            "id": "q7-timeline",
            "type": "multiple-choice",
            "question": "What is the chart used to summarize the activities and duration of the study in the proposal often called?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Ghent chart (Gantt chart)", "isCorrect": true },
                { "id": "opt2", "text": "Pie chart", "isCorrect": false },
                { "id": "opt3", "text": "Flow chart", "isCorrect": false },
                { "id": "opt4", "text": "Histogram", "isCorrect": false }
            ],
            "explanation": "A Gantt chart (referred to as Ghent chart in the text) helps visualize the timeline and schedule of activities."
        },

        // Additional Mixed Questions
        {
            "id": "q-mixed-1",
            "type": "short-answer",
            "question": "What does the 'I' in the FINER acronym for research questions stand for?",
            "points": 1,
            "keywords": ["Interesting"],
            "minKeywords": 1,
            "modelAnswer": "Interesting",
            "explanation": "In FINER, I stands for Interesting."
        },
        {
            "id": "q-mixed-2",
            "type": "multiple-choice",
            "question": "Which variable is also known as the 'outcome' variable?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Dependent Variable", "isCorrect": true },
                { "id": "opt2", "text": "Independent Variable", "isCorrect": false },
                { "id": "opt3", "text": "Extraneous Variable", "isCorrect": false },
                { "id": "opt4", "text": "Demographic Variable", "isCorrect": false }
            ],
            "explanation": "The dependent variable is the outcome that changes in response to the independent variable."
        }
    ]
});