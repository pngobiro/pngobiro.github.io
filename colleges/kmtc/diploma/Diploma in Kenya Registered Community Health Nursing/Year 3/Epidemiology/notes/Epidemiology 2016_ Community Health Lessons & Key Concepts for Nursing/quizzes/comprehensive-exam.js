registerQuiz("comprehensive-exam", {
    "schemaVersion": "1.0",
    "quizId": "comprehensive-exam",
    "metadata": {
        "title": "Final Epidemiology Exam",
        "description": "Comprehensive assessment covering all 8 topics of the Epidemiology 2016 course.",
        "examType": "comprehensive",
        "topicsCovered": [
            "topic-01",
            "topic-02",
            "topic-03",
            "topic-04",
            "topic-05",
            "topic-06",
            "topic-07",
            "topic-08"
        ],
        "difficulty": "advanced",
        "estimatedTime": 45,
        "passingScore": 70,
        "createdAt": "2025-12-26T10:00:00Z",
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
        // TOPIC 1: INTRODUCTION
        {
            "id": "comp-q01",
            "type": "multiple-choice",
            "topicId": "topic-01",
            "topicName": "Introduction to Epidemiology",
            "question": "Which of the following best describes 'Epidemiology'?",
            "points": 1,
            "options": [
                { "id": "a", "text": "The study of skin diseases in a population.", "isCorrect": false },
                { "id": "b", "text": "The study of distribution and determinants of health-related states in populations and application to control health problems.", "isCorrect": true },
                { "id": "c", "text": "The treatment of individual patients in a clinical setting.", "isCorrect": false },
                { "id": "d", "text": "The study of biological agents in a laboratory setting.", "isCorrect": false }
            ],
            "explanation": "Epidemiology focuses on populations, distribution (person, place, time), determinants (causes), and control of health problems."
        },
        {
            "id": "comp-q02",
            "type": "matching",
            "topicId": "topic-01",
            "topicName": "Introduction to Epidemiology",
            "question": "Match the epidemiological term with its correct definition:",
            "points": 4,
            "pairs": [
                { "id": "p1", "left": "Endemic", "right": "Constant presence of a disease within a geographic area" },
                { "id": "p2", "left": "Epidemic", "right": "Occurrence of disease clearly in excess of normal expectancy" },
                { "id": "p3", "left": "Pandemic", "right": "Epidemic spreading across multiple continents or worldwide" },
                { "id": "p4", "left": "Sporadic", "right": "Disease occurring rarely and without regularity" }
            ],
            "explanation": "Endemic is constant/expected; Epidemic is an outbreak/excess; Pandemic is global; Sporadic is irregular."
        },
        {
            "id": "comp-q03",
            "type": "true-false",
            "topicId": "topic-01",
            "topicName": "Introduction to Epidemiology",
            "question": "A 'Carrier' is an individual who harbors an infectious agent and can transmit it, but shows no clinical signs of the disease.",
            "points": 1,
            "correctAnswer": true,
            "explanation": "Carriers (incubatory, convalescent, or healthy) shed the agent without apparent symptoms, making them important in disease transmission."
        },

        // TOPIC 2: DETERMINANTS & PREVENTION
        {
            "id": "comp-q04",
            "type": "multiple-choice",
            "topicId": "topic-02",
            "topicName": "Disease Determinants & Prevention",
            "question": "Which level of prevention involves early detection and prompt treatment to prevent complications (e.g., screening)?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Primordial Prevention", "isCorrect": false },
                { "id": "b", "text": "Primary Prevention", "isCorrect": false },
                { "id": "c", "text": "Secondary Prevention", "isCorrect": true },
                { "id": "d", "text": "Tertiary Prevention", "isCorrect": false }
            ],
            "explanation": "Secondary prevention focuses on early diagnosis and treatment (cure) to stop progression. Primary prevents occurrence; Tertiary reduces disability."
        },
        {
            "id": "comp-q05",
            "type": "fill-blank",
            "topicId": "topic-02",
            "topicName": "Disease Determinants & Prevention",
            "question": "The Epidemiological Triad consists of the Agent, the __1__, and the __2__.",
            "points": 2,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["host", "Host"], "caseSensitive": false },
                { "id": "2", "acceptedAnswers": ["environment", "Environment"], "caseSensitive": false }
            ],
            "explanation": "Disease results from the interaction of the Host, Agent, and Environment."
        },
        {
            "id": "comp-q06",
            "type": "multiple-select",
            "topicId": "topic-02",
            "topicName": "Disease Determinants & Prevention",
            "question": "Which of the following are intrinsic determinants (Host Factors) of disease? (Select all that apply)",
            "points": 2,
            "options": [
                { "id": "a", "text": "Genetics/Heredity", "isCorrect": true },
                { "id": "b", "text": "Climate/Weather", "isCorrect": false },
                { "id": "c", "text": "Age", "isCorrect": true },
                { "id": "d", "text": "Sex", "isCorrect": true },
                { "id": "e", "text": "Vectors", "isCorrect": false }
            ],
            "explanation": "Intrinsic factors are within the host (age, sex, genetics). Climate and vectors are extrinsic (environmental) factors."
        },

        // TOPIC 3: MEASUREMENT
        {
            "id": "comp-q07",
            "type": "multiple-choice",
            "topicId": "topic-03",
            "topicName": "Measurement of Disease",
            "question": "Which rate measures the number of NEW cases of a disease occurring during a specific period in a population at risk?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Prevalence", "isCorrect": false },
                { "id": "b", "text": "Incidence", "isCorrect": true },
                { "id": "c", "text": "Mortality Rate", "isCorrect": false },
                { "id": "d", "text": "Case Fatality Rate", "isCorrect": false }
            ],
            "explanation": "Incidence measures new cases (risk). Prevalence measures existing cases (burden)."
        },
        {
            "id": "comp-q08",
            "type": "multiple-choice",
            "topicId": "topic-03",
            "topicName": "Measurement of Disease",
            "question": "If a Relative Risk (RR) is greater than 1, what does this indicate?",
            "points": 1,
            "options": [
                { "id": "a", "text": "The exposure is protective against the disease.", "isCorrect": false },
                { "id": "b", "text": "There is no association between exposure and disease.", "isCorrect": false },
                { "id": "c", "text": "The risk in the exposed group is greater than the risk in the non-exposed group (positive association).", "isCorrect": true },
                { "id": "d", "text": "The incidence is decreasing.", "isCorrect": false }
            ],
            "explanation": "RR > 1 indicates a positive association (risk factor). RR < 1 indicates a protective factor. RR = 1 indicates no association."
        },
        {
            "id": "comp-q09",
            "type": "short-answer",
            "topicId": "topic-03",
            "topicName": "Measurement of Disease",
            "question": "Define 'Infant Mortality Rate' (IMR).",
            "points": 3,
            "keywords": ["death", "infant", "child", "one year", "1 year", "1000", "live births"],
            "minKeywords": 3,
            "modelAnswer": "Number of deaths of infants under one year of age per 1,000 live births in a given year.",
            "maxLength": 200
        },

        // TOPIC 4: DESCRIPTIVE EPIDEMIOLOGY
        {
            "id": "comp-q10",
            "type": "fill-blank",
            "topicId": "topic-04",
            "topicName": "Descriptive Epidemiology",
            "question": "Descriptive epidemiology analyzes disease distribution according to three major variables: __1__, __2__, and __3__.",
            "points": 3,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["person", "Person"], "caseSensitive": false },
                { "id": "2", "acceptedAnswers": ["place", "Place"], "caseSensitive": false },
                { "id": "3", "acceptedAnswers": ["time", "Time"], "caseSensitive": false }
            ],
            "explanation": "The classic descriptive variables are Person (who), Place (where), and Time (when)."
        },
        {
            "id": "comp-q11",
            "type": "multiple-choice",
            "topicId": "topic-04",
            "topicName": "Descriptive Epidemiology",
            "question": "Disease trends that occur over a very long period (e.g., years or decades) are known as:",
            "points": 1,
            "options": [
                { "id": "a", "text": "Cyclic trends", "isCorrect": false },
                { "id": "b", "text": "Seasonal trends", "isCorrect": false },
                { "id": "c", "text": "Secular trends", "isCorrect": true },
                { "id": "d", "text": "Point epidemics", "isCorrect": false }
            ],
            "explanation": "Secular trends refer to long-term changes in disease occurrence (e.g., the decline of TB over the 20th century)."
        },

        // TOPIC 5: STUDY DESIGNS
        {
            "id": "comp-q12",
            "type": "matching",
            "topicId": "topic-05",
            "topicName": "Epidemiological Study Designs",
            "question": "Match the study design with its description:",
            "points": 3,
            "pairs": [
                { "id": "p1", "left": "Cohort Study", "right": "Starts with exposure, follows forward to see if disease develops" },
                { "id": "p2", "left": "Case-Control Study", "right": "Starts with disease (cases), looks backward for exposure" },
                { "id": "p3", "left": "Cross-Sectional Study", "right": "Measures exposure and disease at a single point in time (snapshot)" }
            ],
            "explanation": "Cohort = Forward (Exposure->Disease). Case-Control = Backward (Disease->Exposure). Cross-Sectional = Simultaneous (Prevalence)."
        },
        {
            "id": "comp-q13",
            "type": "multiple-choice",
            "topicId": "topic-05",
            "topicName": "Epidemiological Study Designs",
            "question": "Which study design is considered the 'gold standard' for inferring causality?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Case Series", "isCorrect": false },
                { "id": "b", "text": "Retrospective Cohort", "isCorrect": false },
                { "id": "c", "text": "Randomized Clinical Trial (RCT)", "isCorrect": true },
                { "id": "d", "text": "Ecological Study", "isCorrect": false }
            ],
            "explanation": "RCTs involve randomization and manipulation of exposure, providing the strongest evidence for causality."
        },
        {
            "id": "comp-q14",
            "type": "true-false",
            "topicId": "topic-05",
            "topicName": "Epidemiological Study Designs",
            "question": "Case-Control studies are generally better suited for studying rare diseases than Cohort studies.",
            "points": 1,
            "correctAnswer": true,
            "explanation": "Because you select participants based on the outcome, you can efficiently study rare diseases without needing a massive sample size to wait for cases to occur."
        },

        // TOPIC 6: SAMPLING
        {
            "id": "comp-q15",
            "type": "multiple-choice",
            "topicId": "topic-06",
            "topicName": "Sampling Methods",
            "question": "Which sampling method ensures that every member of the population has an equal, known probability of being selected?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Convenience Sampling", "isCorrect": false },
                { "id": "b", "text": "Simple Random Sampling", "isCorrect": true },
                { "id": "c", "text": "Purposive Sampling", "isCorrect": false },
                { "id": "d", "text": "Quota Sampling", "isCorrect": false }
            ],
            "explanation": "Simple Random Sampling is a probability method where selection is purely by chance."
        },
        {
            "id": "comp-q16",
            "type": "multiple-choice",
            "topicId": "topic-06",
            "topicName": "Sampling Methods",
            "question": "Snowball sampling is most useful for:",
            "points": 1,
            "options": [
                { "id": "a", "text": "Large national surveys", "isCorrect": false },
                { "id": "b", "text": "Hard-to-reach or hidden populations (e.g., drug users)", "isCorrect": true },
                { "id": "c", "text": "Clinical trials", "isCorrect": false },
                { "id": "d", "text": "Selecting schools for a study", "isCorrect": false }
            ],
            "explanation": "Snowball sampling relies on subjects referring others, making it ideal for hidden or stigmatized populations."
        },

        // TOPIC 7: SCREENING
        {
            "id": "comp-q17",
            "type": "multiple-choice",
            "topicId": "topic-07",
            "topicName": "Disease Screening",
            "question": "The ability of a screening test to correctly identify those who HAVE the disease (True Positives) is called:",
            "points": 1,
            "options": [
                { "id": "a", "text": "Specificity", "isCorrect": false },
                { "id": "b", "text": "Sensitivity", "isCorrect": true },
                { "id": "c", "text": "Positive Predictive Value", "isCorrect": false },
                { "id": "d", "text": "Reliability", "isCorrect": false }
            ],
            "explanation": "Sensitivity = TP / (TP + FN). It measures the ability to pick up actual cases."
        },
        {
            "id": "comp-q18",
            "type": "short-answer",
            "topicId": "topic-07",
            "topicName": "Disease Screening",
            "question": "Explain 'Lead Time Bias' in screening.",
            "points": 3,
            "keywords": ["early", "detection", "diagnosis", "survival", "longer", "illusion", "prognosis"],
            "minKeywords": 2,
            "modelAnswer": "Survival appears longer because the disease was detected earlier in its course, not because death was actually delayed.",
            "maxLength": 300
        },
        {
            "id": "comp-q19",
            "type": "multiple-choice",
            "topicId": "topic-07",
            "topicName": "Disease Screening",
            "question": "Screening applied only to high-risk groups (e.g., TB in prisons) is known as:",
            "points": 1,
            "options": [
                { "id": "a", "text": "Mass Screening", "isCorrect": false },
                { "id": "b", "text": "Selective (Targeted) Screening", "isCorrect": true },
                { "id": "c", "text": "Multiphasic Screening", "isCorrect": false },
                { "id": "d", "text": "Case Finding", "isCorrect": false }
            ],
            "explanation": "Selective screening focuses on specific populations with higher prevalence or risk."
        },

        // TOPIC 8: SURVEILLANCE
        {
            "id": "comp-q20",
            "type": "matching",
            "topicId": "topic-08",
            "topicName": "Disease Surveillance",
            "question": "Match the type of surveillance with its description:",
            "points": 3,
            "pairs": [
                { "id": "p1", "left": "Passive Surveillance", "right": "Health authorities receive unsolicited reports; less costly but often incomplete" },
                { "id": "p2", "left": "Active Surveillance", "right": "Health staff actively search for cases; expensive but more accurate" },
                { "id": "p3", "left": "Sentinel Surveillance", "right": "Data collected from a select group of sites to estimate trends" }
            ],
            "explanation": "Passive relies on reporting; Active involves searching; Sentinel uses specific representative sites."
        },
        {
            "id": "comp-q21",
            "type": "multiple-select",
            "topicId": "topic-08",
            "topicName": "Disease Surveillance",
            "question": "Which of the following are core functions of a surveillance system? (Select all that apply)",
            "points": 2,
            "options": [
                { "id": "a", "text": "Case Detection", "isCorrect": true },
                { "id": "b", "text": "Data Analysis", "isCorrect": true },
                { "id": "c", "text": "Feedback/Dissemination", "isCorrect": true },
                { "id": "d", "text": "Providing Treatment", "isCorrect": false }
            ],
            "explanation": "Surveillance involves detection, analysis, and feedback. Treatment is a clinical function, though surveillance triggers response."
        },
        {
            "id": "comp-q22",
            "type": "true-false",
            "topicId": "topic-08",
            "topicName": "Disease Surveillance",
            "question": "Syndromic surveillance uses non-specific data (like pharmacy sales or school absenteeism) to detect potential outbreaks before confirmed diagnoses are available.",
            "points": 1,
            "correctAnswer": true,
            "explanation": "Syndromic surveillance analyzes trends in symptoms or proxy data for early warning."
        }
    ]
});
