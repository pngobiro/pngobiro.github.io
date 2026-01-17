registerQuiz("topic-06-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-06-quiz",
    "metadata": {
        "title": "Topic 6: Data Execution & Reporting",
        "description": "Assess your understanding of data collection, analysis methods, and report writing.",
        "topicId": "topic-06",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 75,
        "createdAt": "2026-01-17T00:00:00Z",
        "updatedAt": "2026-01-17T00:00:00Z",
        "tags": ["data-collection", "analysis", "reporting"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate",
        "allowRetry": true,
        "showCorrectAnswers": true,
        "timeLimit": 0
    },
    "questions": [
        {
            "id": "q6-data-methods",
            "type": "matching",
            "question": "Match the data collection method to its description.",
            "points": 1,
            "pairs": [
                { "id": "p1", "left": "Structured Interview Schedule", "right": "Formal written document asked orally by interviewer" },
                { "id": "p2", "left": "Focus Group Discussion", "right": "Interview with a group of 5-15 people simultaneously" },
                { "id": "p3", "left": "Key Informant Interview", "right": "Interview with people in special positions representing a group" },
                { "id": "p4", "left": "Non-participatory Observation", "right": "Observing a situation from outside without interfering" }
            ],
            "explanation": "Structured interviews use schedules; Focus groups involve group interaction; Key informants are experts/leaders; Observation captures behavior."
        },
        {
            "id": "q6-pilot-purpose",
            "type": "multiple-select",
            "question": "Why is a pilot study (pre-test) conducted? (Select all that apply)",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "To identify problems with the research design", "isCorrect": true },
                { "id": "opt2", "text": "To ensure data collection instruments are clear", "isCorrect": true },
                { "id": "opt3", "text": "To determine feasibility of the study", "isCorrect": true },
                { "id": "opt4", "text": "To collect the main data for final analysis", "isCorrect": false }
            ],
            "explanation": "Pilot studies are for testing feasibility, instruments, and design, NOT for collecting the final data."
        },
        {
            "id": "q6-existing-data",
            "type": "multiple-choice",
            "question": "What is a major advantage of reviewing existing records for data collection?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "It saves time and money.", "isCorrect": true },
                { "id": "opt2", "text": "The data is always 100% accurate.", "isCorrect": false },
                { "id": "opt3", "text": "It allows the researcher to control how data was collected.", "isCorrect": false },
                { "id": "opt4", "text": "It requires obtaining new informed consent from every patient.", "isCorrect": false }
            ],
            "explanation": "Existing records save resources (time/money) but researcher cannot control how they were originally collected."
        },
        {
            "id": "q6-qual-analysis",
            "type": "ordering",
            "question": "Order the steps for analyzing qualitative data.",
            "points": 1,
            "items": [
                { "id": "i1", "text": "Organising the data (cleaning)", "correctPosition": 1 },
                { "id": "i2", "text": "Creating categories, themes, and patterns", "correctPosition": 2 },
                { "id": "i3", "text": "Evaluating usefulness and accuracy", "correctPosition": 3 },
                { "id": "i4", "text": "Drawing conclusions", "correctPosition": 4 }
            ],
            "explanation": "Qualitative analysis involves organizing, categorizing/theming, evaluating, and concluding."
        },
        {
            "id": "q6-histogram-vs-bar",
            "type": "multiple-choice",
            "question": "Which graphic method has NO spaces between the bars and is used for continuous variables?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Histogram", "isCorrect": true },
                { "id": "opt2", "text": "Bar Chart", "isCorrect": false },
                { "id": "opt3", "text": "Pie Chart", "isCorrect": false },
                { "id": "opt4", "text": "Frequency Polygon", "isCorrect": false }
            ],
            "explanation": "Histograms display continuous data with adjacent bars. Bar charts have spaces between bars."
        },
        {
            "id": "q6-dummy-tables",
            "type": "true-false",
            "question": "Dummy tables are constructed AFTER data collection is complete to organize the final results.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "False. Dummy tables are constructed during the PLANNING stage to visualize how data will be organized."
        },
        {
            "id": "q6-coding",
            "type": "fill-blank",
            "question": "The process of turning survey responses into standard categories or values for computer processing is called __b1__.",
            "points": 1,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["coding", "code"], "caseSensitive": false }
            ],
            "explanation": "Coding involves assigning values or categories to responses for analysis."
        },
        {
            "id": "q6-report-discussion",
            "type": "multiple-choice",
            "question": "In the 'Discussion' section of a research report, what should the researcher do?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Interpret findings, discuss limitations, and make recommendations", "isCorrect": true },
                { "id": "opt2", "text": "Present raw data tables only", "isCorrect": false },
                { "id": "opt3", "text": "Describe the data collection procedure in detail", "isCorrect": false },
                { "id": "opt4", "text": "List references", "isCorrect": false }
            ],
            "explanation": "The discussion section interprets results, addresses limitations, generalises findings, and makes recommendations."
        }
    ]
});