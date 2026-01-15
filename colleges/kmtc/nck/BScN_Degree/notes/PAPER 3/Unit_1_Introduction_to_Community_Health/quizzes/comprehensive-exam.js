
registerQuiz("comprehensive-exam", {
    "schemaVersion": "1.0",
    "quizId": "comprehensive-exam",
    "metadata": {
        "title": "Comprehensive Exam: Unit 1",
        "description": "Assessment covering Introduction, Principles, Statistics, Organisation, and IEC.",
        "examType": "comprehensive",
        "topicsCovered": [
            "topic-01-concept",
            "topic-02-principles",
            "topic-03-statistics-epidemiology",
            "topic-04-organisation",
            "topic-05-iec"
        ],
        "difficulty": "intermediate",
        "estimatedTime": 60,
        "passingScore": 70,
        "createdAt": "2025-01-13T12:00:00Z",
        "tags": ["final", "comprehensive", "community-health"]
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
        // --- SECTION 1: CONCEPTS ---
        {
            "id": "comp-q1",
            "type": "multiple-choice",
            "topicId": "topic-01-concept",
            "topicName": "Concept & Family",
            "question": "Which type of family is formed when a husband and wife bring unrelated children from previous marriages into a new marriage?",
            "points": 5,
            "options": [
                { "id": "a", "text": "Nuclear Family", "isCorrect": false },
                { "id": "b", "text": "Extended Family", "isCorrect": false },
                { "id": "c", "text": "Blended Family", "isCorrect": true },
                { "id": "d", "text": "Single Parent Family", "isCorrect": false }
            ],
            "explanation": "A blended family is formed when husband and wife bring into the new marriage unrelated children from their previous marriages. Cohabitation and homosexual marriages are also referred to as blended families."
        },
        {
            "id": "comp-q2",
            "type": "ordering",
            "topicId": "topic-01-concept",
            "topicName": "Concept & Family",
            "question": "Arrange the phases of the Home Visiting process in the correct order as described in the text:",
            "points": 10,
            "items": [
                { "id": "i1", "text": "Entry or Initiation Phase", "correctPosition": 1 },
                { "id": "i2", "text": "Pre-visit Activities", "correctPosition": 2 },
                { "id": "i3", "text": "Activities During Home Visiting", "correctPosition": 3 },
                { "id": "i4", "text": "Termination Phase of Visit", "correctPosition": 4 },
                { "id": "i5", "text": "Post-visit Activities", "correctPosition": 5 }
            ],
            "explanation": "The process is: 1. Entry/Initiation (sharing information), 2. Pre-visit (gathering info/supplies), 3. Activities During Visit (working phase), 4. Termination, 5. Post-visit (recording/reporting)."
        },
        {
            "id": "comp-q3",
            "type": "multiple-select",
            "topicId": "topic-01-concept",
            "topicName": "Concept & Family",
            "question": "Which of the following are listed as external factors affecting family health? (Select all that apply)",
            "points": 5,
            "options": [
                { "id": "a", "text": "Family size", "isCorrect": false },
                { "id": "b", "text": "Climate", "isCorrect": true },
                { "id": "c", "text": "Biological characteristics", "isCorrect": false },
                { "id": "d", "text": "Water supply", "isCorrect": true },
                { "id": "e", "text": "Housing and residence", "isCorrect": true }
            ],
            "explanation": "External factors include family locality, terrain, climate, water supply, air, biological environment, and housing. Family size and biological characteristics are internal factors."
        },

        // --- SECTION 2: PRINCIPLES ---
        {
            "id": "comp-q4",
            "type": "matching",
            "topicId": "topic-02-principles",
            "topicName": "Principles & Roles",
            "question": "Match the Community Health Nurse role to its function:",
            "points": 10,
            "pairs": [
                { "id": "p1", "left": "Advocator", "right": "Advise health care providers/planners on community needs" },
                { "id": "p2", "left": "Manager", "right": "Organising programs and being a team leader" },
                { "id": "p3", "left": "Evaluator", "right": "Assessing the performance and outcome of activities" },
                { "id": "p4", "left": "Researcher", "right": "Carrying out surveys to identify problems" }
            ],
            "explanation": "Advocators advise on needs; Managers organise and lead; Evaluators assess performance; Researchers carry out surveys."
        },
        {
            "id": "comp-q5",
            "type": "multiple-select",
            "topicId": "topic-02-principles",
            "topicName": "Principles & Roles",
            "question": "Which of the following are principles from the Alma Ata Declaration (1978)? (Select all that apply)",
            "points": 5,
            "options": [
                { "id": "a", "text": "Integration of curative and preventive services", "isCorrect": true },
                { "id": "b", "text": "Health care strictly for those who can pay", "isCorrect": false },
                { "id": "c", "text": "Inter-sectoral approach", "isCorrect": true },
                { "id": "d", "text": "Utilisation of all levels of community manpower", "isCorrect": true }
            ],
            "explanation": "The Alma Ata Declaration emphasizes availability to all (not just those who can pay), integration of services, inter-sectoral approaches, and utilizing community manpower."
        },

        // --- SECTION 3: STATISTICS & EPI ---
        {
            "id": "comp-q6",
            "type": "fill-blank",
            "topicId": "topic-03-statistics-epidemiology",
            "topicName": "Statistics & Epidemiology",
            "question": "The three components of the Epidemiological Triad are the Agent, the __b1__, and the __b2__.",
            "points": 10,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["host", "Host", "susceptible host"], "caseSensitive": false },
                { "id": "b2", "acceptedAnswers": ["environment", "Environment"], "caseSensitive": false }
            ],
            "explanation": "The Epidemiological Triad consists of the Agent (causative factor), the Host (human/animal affected), and the Environment (external conditions)."
        },
        {
            "id": "comp-q7",
            "type": "multiple-choice",
            "topicId": "topic-03-statistics-epidemiology",
            "topicName": "Statistics & Epidemiology",
            "question": "Calculate the Growth Rate given the following: Crude Birth Rate = 45 per 1000 (4.5%); Crude Death Rate = 15 per 1000 (1.5%).",
            "points": 5,
            "options": [
                { "id": "a", "text": "6.0%", "isCorrect": false },
                { "id": "b", "text": "3.0%", "isCorrect": true },
                { "id": "c", "text": "30%", "isCorrect": false },
                { "id": "d", "text": "0.3%", "isCorrect": false }
            ],
            "explanation": "Growth Rate = Crude Birth Rate (%) - Crude Death Rate (%). 4.5% - 1.5% = 3.0%."
        },
        {
            "id": "comp-q8",
            "type": "matching",
            "topicId": "topic-03-statistics-epidemiology",
            "topicName": "Statistics & Epidemiology",
            "question": "Match the level of prevention to its definition:",
            "points": 10,
            "pairs": [
                { "id": "p1", "left": "Primary Prevention", "right": "Carried out before disease/dysfunction occurs (e.g., immunisation)" },
                { "id": "p2", "left": "Secondary Prevention", "right": "Early diagnosis and treatment before symptoms appear (e.g., screening)" },
                { "id": "p3", "left": "Tertiary Prevention", "right": "Diagnosing/treating sick people to reduce suffering/disability" }
            ],
            "explanation": "Primary prevents occurrence; Secondary detects early (sub-clinical); Tertiary treats established disease to prevent disability."
        },
        {
            "id": "comp-q9",
            "type": "multiple-choice",
            "topicId": "topic-03-statistics-epidemiology",
            "topicName": "Statistics & Epidemiology",
            "question": "What does 'Incidence' measure?",
            "points": 5,
            "options": [
                { "id": "a", "text": "All existing cases at a particular time", "isCorrect": false },
                { "id": "b", "text": "New cases during a period of time among those at risk", "isCorrect": true },
                { "id": "c", "text": "The number of deaths from a specific disease", "isCorrect": false },
                { "id": "d", "text": "The total population density", "isCorrect": false }
            ],
            "explanation": "Incidence measures NEW cases. Prevalence measures ALL existing (old and new) cases."
        },

        // --- SECTION 4: ORGANISATION ---
        {
            "id": "comp-q10",
            "type": "ordering",
            "topicId": "topic-04-organisation",
            "topicName": "Health Organisation",
            "question": "Order the administrative levels of the Ministry of Health from highest (top) to lowest (bottom):",
            "points": 5,
            "items": [
                { "id": "i1", "text": "National (Central) Level", "correctPosition": 1 },
                { "id": "i2", "text": "Provincial Level", "correctPosition": 2 },
                { "id": "i3", "text": "District Level", "correctPosition": 3 },
                { "id": "i4", "text": "Community (Peripheral) Level", "correctPosition": 4 }
            ],
            "explanation": "The hierarchy is National -> Provincial -> District -> Community."
        },
        {
            "id": "comp-q11",
            "type": "multiple-select",
            "topicId": "topic-04-organisation",
            "topicName": "Health Organisation",
            "question": "Which of the following are core members of the District Health Management Team (DHMT)? (Select all that apply)",
            "points": 5,
            "options": [
                { "id": "a", "text": "District Medical Officer of Health (Chairman)", "isCorrect": true },
                { "id": "b", "text": "District Public Health Nurse", "isCorrect": true },
                { "id": "c", "text": "Provincial Medical Officer", "isCorrect": false },
                { "id": "d", "text": "District Hospital Matron", "isCorrect": true },
                { "id": "e", "text": "Director of Medical Services", "isCorrect": false }
            ],
            "explanation": "The DMOH, DPHN, and District Hospital Matron are core DHMT members. The PMO is at the provincial level, and the DMS is at the national level."
        },
        {
            "id": "comp-q12",
            "type": "fill-blank",
            "topicId": "topic-04-organisation",
            "topicName": "Health Organisation",
            "question": "The National Priority Health Packages classified the 'Malaria prevention and treatment package' as a __b1__ Priority Health Package.",
            "points": 5,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["High", "high"], "caseSensitive": false }
            ],
            "explanation": "Malaria prevention, Reproductive health, HIV/AIDS/TB, and EPI are classified as High Priority Health Packages."
        },

        // --- SECTION 5: IEC ---
        {
            "id": "comp-q13",
            "type": "multiple-choice",
            "topicId": "topic-05-iec",
            "topicName": "IEC",
            "question": "What does the abbreviation IEC stand for in the context of community health?",
            "points": 5,
            "options": [
                { "id": "a", "text": "International Education Center", "isCorrect": false },
                { "id": "b", "text": "Information, Education and Communication", "isCorrect": true },
                { "id": "c", "text": "Internal Environmental Control", "isCorrect": false },
                { "id": "d", "text": "Integrated Emergency Care", "isCorrect": false }
            ],
            "explanation": "IEC stands for Information, Education and Communication."
        },
        {
            "id": "comp-q14",
            "type": "multiple-select",
            "topicId": "topic-05-iec",
            "topicName": "IEC",
            "question": "According to the text, adults learn faster and better when: (Select all that apply)",
            "points": 5,
            "options": [
                { "id": "a", "text": "They make the decision to learn on their own", "isCorrect": true },
                { "id": "b", "text": "The information is of immediate use to them", "isCorrect": true },
                { "id": "c", "text": "They are passive listeners", "isCorrect": false },
                { "id": "d", "text": "They receive immediate feedback", "isCorrect": true }
            ],
            "explanation": "Factors influencing adult learning include self-decision, immediate utility, active involvement, and immediate feedback. Passive listening hinders adult learning."
        },
        {
            "id": "comp-q15",
            "type": "true-false",
            "topicId": "topic-05-iec",
            "topicName": "IEC",
            "question": "When mobilising IEC materials, you should assume the learner has no prior knowledge.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "You should NOT assume the learner's level of knowledge. However, the text states you should 'always bear in mind that the people you are teaching have some knowledge'. Start with what they know."
        }
    ]
});