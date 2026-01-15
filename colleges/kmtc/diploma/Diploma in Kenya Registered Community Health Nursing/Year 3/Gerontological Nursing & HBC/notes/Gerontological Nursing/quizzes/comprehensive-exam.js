registerQuiz("comprehensive-exam", {
    "schemaVersion": "1.0",
    "quizId": "comprehensive-exam",
    "metadata": {
        "title": "Gerontological Nursing Final Exam",
        "description": "Comprehensive assessment covering all modules of Gerontological Nursing & Home Based Care.",
        "examType": "comprehensive",
        "topicsCovered": [
            "topic-01-introduction",
            "topic-02-aging-process",
            "topic-03-physical-changes",
            "topic-04-health-assessment",
            "topic-05-pharmacology",
            "topic-06-nursing-care",
            "topic-07-psychosocial",
            "topic-08-palliative-care"
        ],
        "difficulty": "advanced",
        "estimatedTime": 60,
        "passingScore": 75,
        "createdAt": "2025-12-27T10:00:00Z",
        "tags": ["final", "exam", "nursing", "gerontology"]
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
        // TOPIC 01: Introduction
        {
            "id": "comp-q01",
            "type": "multiple-choice",
            "question": "Which term describes the systematic stereotyping and discrimination against people because they are old?",
            "points": 2,
            "topicId": "topic-01-introduction",
            "topicName": "Introduction & Fundamentals",
            "options": [
                { "id": "a", "text": "Gerontophobia", "isCorrect": false },
                { "id": "b", "text": "Ageism", "isCorrect": true },
                { "id": "c", "text": "Senility", "isCorrect": false },
                { "id": "d", "text": "Geriatrics", "isCorrect": false }
            ],
            "explanation": "Ageism is defined as the process of systematic stereotyping and discrimination against old people because they are old."
        },
        {
            "id": "comp-q02",
            "type": "true-false",
            "question": "'Lifespan' refers to the statistically determined number of years a person is expected to live based on current age.",
            "points": 2,
            "topicId": "topic-01-introduction",
            "topicName": "Introduction & Fundamentals",
            "correctAnswer": false,
            "explanation": "False. 'Life expectancy' is the statistical expectation. 'Lifespan' refers to the longest period of life of an organism known from study (maximum potential)."
        },

        // TOPIC 02: Aging Process
        {
            "id": "comp-q03",
            "type": "multiple-choice",
            "question": "Which biological theory suggests that aging is caused by the accumulation of unstable molecules that damage cells and genetic material?",
            "points": 2,
            "topicId": "topic-02-aging-process",
            "topicName": "Aging Process & Theories",
            "options": [
                { "id": "a", "text": "Cross-linkage Theory", "isCorrect": false },
                { "id": "b", "text": "Free Radical Theory", "isCorrect": true },
                { "id": "c", "text": "Immunity Theory", "isCorrect": false },
                { "id": "d", "text": "Wear and Tear Theory", "isCorrect": false }
            ],
            "explanation": "The Free Radical Theory (Harman, 1956) proposes that aging is caused by increased levels of highly unstable molecules called free radicals which disrupt/damage cells."
        },
        {
            "id": "comp-q04",
            "type": "multiple-choice",
            "question": "According to the Activity Theory of psychosocial aging, what is necessary for successful aging?",
            "points": 2,
            "topicId": "topic-02-aging-process",
            "topicName": "Aging Process & Theories",
            "options": [
                { "id": "a", "text": "Mutual withdrawal from society", "isCorrect": false },
                { "id": "b", "text": "Active participation in physical and mental activities", "isCorrect": true },
                { "id": "c", "text": "Forming a sub-culture with other elderly people", "isCorrect": false },
                { "id": "d", "text": "Accepting the inevitability of death", "isCorrect": false }
            ],
            "explanation": "Activity Theory proposes that active participation in both physical and mental activity helps in maintaining functioning and leads to improved life satisfaction."
        },

        // TOPIC 03: Physiological Changes
        {
            "id": "comp-q05",
            "type": "fill-blank",
            "question": "The progressive decrease in auditory threshold associated with aging, particularly for high frequencies, is called __b1__.",
            "points": 3,
            "topicId": "topic-03-physical-changes",
            "topicName": "Physiological Changes",
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["presbycusis"], "caseSensitive": false }
            ],
            "explanation": "Presbycusis is the age-related hearing loss that typically starts at age 40 and progresses, affecting high-frequency sounds first."
        },
        {
            "id": "comp-q06",
            "type": "multiple-select",
            "question": "Which of the following are normal respiratory system changes in the elderly? (Select all that apply)",
            "points": 3,
            "topicId": "topic-03-physical-changes",
            "topicName": "Physiological Changes",
            "options": [
                { "id": "a", "text": "Increased residual lung volume", "isCorrect": true },
                { "id": "b", "text": "Decreased cough reflex", "isCorrect": true },
                { "id": "c", "text": "Increased vital capacity", "isCorrect": false },
                { "id": "d", "text": "Increased anterior-posterior chest diameter", "isCorrect": true }
            ],
            "partialCredit": true,
            "explanation": "Aging causes increased residual volume, decreased cough reflex, and increased AP diameter. Vital capacity actually decreases, not increases."
        },
        {
            "id": "comp-q07",
            "type": "multiple-choice",
            "question": "Why might a nurse miss the apex beat at the normal anatomical position in an elderly patient?",
            "points": 2,
            "topicId": "topic-03-physical-changes",
            "topicName": "Physiological Changes",
            "options": [
                { "id": "a", "text": "The heart shrinks significantly in size", "isCorrect": false },
                { "id": "b", "text": "Kyphoscoliosis (bent back) displaces the apex", "isCorrect": true },
                { "id": "c", "text": "The heart rate is too slow to detect", "isCorrect": false },
                { "id": "d", "text": "Increased fat tissue blocks the sound", "isCorrect": false }
            ],
            "explanation": "There is a misplacement of the apex of the heart caused by the back of the old person being bent (kyphoscoliosis)."
        },

        // TOPIC 04: Health Assessment
        {
            "id": "comp-q08",
            "type": "multiple-choice",
            "question": "A pigmented skin lesion that is enlarging, elevated, and bleeds easily when touched is characteristic of which condition?",
            "points": 2,
            "topicId": "topic-04-health-assessment",
            "topicName": "Health Assessment & Conditions",
            "options": [
                { "id": "a", "text": "Decubitus ulcer", "isCorrect": false },
                { "id": "b", "text": "Liver spots", "isCorrect": false },
                { "id": "c", "text": "Basal cell carcinoma", "isCorrect": true },
                { "id": "d", "text": "Dermatitis", "isCorrect": false }
            ],
            "explanation": "Basal cell carcinoma is common in older persons exposed to sun and presents as an enlarging, elevated pigmented area that bleeds easily."
        },
        {
            "id": "comp-q09",
            "type": "multiple-select",
            "question": "When assessing Activities of Daily Living (ADLs) in the elderly, which of the following are included? (Select all that apply)",
            "points": 3,
            "topicId": "topic-04-health-assessment",
            "topicName": "Health Assessment & Conditions",
            "options": [
                { "id": "a", "text": "Toileting", "isCorrect": true },
                { "id": "b", "text": "Managing finances", "isCorrect": false },
                { "id": "c", "text": "Eating", "isCorrect": true },
                { "id": "d", "text": "Transferring/Ambulating", "isCorrect": true }
            ],
            "partialCredit": true,
            "explanation": "Toileting, Eating, and Transferring are basic ADLs. Managing finances is considered an Instrumental Activity of Daily Living (IADL)."
        },

        // TOPIC 05: Pharmacology
        {
            "id": "comp-q10",
            "type": "multiple-choice",
            "question": "How does the age-related decrease in total body water affect pharmacokinetics?",
            "points": 2,
            "topicId": "topic-05-pharmacology",
            "topicName": "Pharmacology",
            "options": [
                { "id": "a", "text": "Fat-soluble drugs are eliminated faster", "isCorrect": false },
                { "id": "b", "text": "Water-soluble drugs remain in the bloodstream in higher concentrations", "isCorrect": true },
                { "id": "c", "text": "Absorption of oral medications is blocked", "isCorrect": false },
                { "id": "d", "text": "Protein binding sites are increased", "isCorrect": false }
            ],
            "explanation": "With less body water, water-soluble drugs (like Gentamycin) have a smaller volume of distribution, leading to higher serum concentrations and toxicity risk."
        },
        {
            "id": "comp-q11",
            "type": "multiple-choice",
            "question": "Which physiological change contributes most to the increased risk of drug toxicity due to reduced metabolism in the elderly?",
            "points": 2,
            "topicId": "topic-05-pharmacology",
            "topicName": "Pharmacology",
            "options": [
                { "id": "a", "text": "Increased gastric pH", "isCorrect": false },
                { "id": "b", "text": "Reduced hepatic blood flow and enzyme production", "isCorrect": true },
                { "id": "c", "text": "Increased total body fat", "isCorrect": false },
                { "id": "d", "text": "Decreased peristalsis", "isCorrect": false }
            ],
            "explanation": "The liver's effectiveness declines due to decreased enzyme production and reduced blood flow, slowing drug metabolism."
        },

        // TOPIC 06: Nursing Care
        {
            "id": "comp-q12",
            "type": "fill-blank",
            "question": "To maintain nutritional status, an elderly person requires at least __b1__ gm of protein per kg of body weight.",
            "points": 3,
            "topicId": "topic-06-nursing-care",
            "topicName": "Nursing Care",
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["1", "one", "1.0"], "caseSensitive": false }
            ],
            "explanation": "Nutritional needs state that an elderly person needs at least 1 gm of protein per kg body weight, increased if the person is sick."
        },
        {
            "id": "comp-q13",
            "type": "multiple-choice",
            "question": "What is the recommended approach for bladder retraining in an elderly patient with incontinence?",
            "points": 2,
            "topicId": "topic-06-nursing-care",
            "topicName": "Nursing Care",
            "options": [
                { "id": "a", "text": "Immediate catheterization", "isCorrect": false },
                { "id": "b", "text": "Scheduled trips to the bathroom at short intervals, gradually lengthened", "isCorrect": true },
                { "id": "c", "text": "Withholding fluids after 12:00 PM", "isCorrect": false },
                { "id": "d", "text": "Using adult diapers exclusively", "isCorrect": false }
            ],
            "explanation": "Retraining should start with short intervals for bathroom trips which are gradually lengthened. Catheters should be avoided due to infection risk."
        },

        // TOPIC 07: Psychosocial Challenges
        {
            "id": "comp-q14",
            "type": "ordering",
            "question": "Arrange the phases of retirement in the correct chronological order:",
            "points": 5,
            "topicId": "topic-07-psychosocial",
            "topicName": "Psychosocial Challenges",
            "items": [
                { "id": "i1", "text": "Remote Phase", "correctPosition": 1 },
                { "id": "i2", "text": "Near Phase", "correctPosition": 2 },
                { "id": "i3", "text": "Honeymoon Phase", "correctPosition": 3 },
                { "id": "i4", "text": "Disenchantment Phase", "correctPosition": 4 },
                { "id": "i5", "text": "Re-orientation Phase", "correctPosition": 5 },
                { "id": "i6", "text": "Stability Phase", "correctPosition": 6 }
            ],
            "explanation": "Retirement progresses from Remote -> Near -> Honeymoon -> Disenchantment -> Re-orientation -> Stability -> Termination."
        },
        {
            "id": "comp-q15",
            "type": "matching",
            "question": "Match the type of elder abuse with its description:",
            "points": 4,
            "topicId": "topic-07-psychosocial",
            "topicName": "Psychosocial Challenges",
            "pairs": [
                { "id": "p1", "left": "Physical Abuse", "right": "Hitting, shoving, denying food" },
                { "id": "p2", "left": "Psychological Abuse", "right": "Threats, name calling, isolation" },
                { "id": "p3", "left": "Exploitation", "right": "Forcing changes to a will or deed" },
                { "id": "p4", "left": "Violation of Rights", "right": "Denying privacy or visitors" }
            ],
            "explanation": "Physical involves bodily harm; Psychological involves mental distress; Exploitation involves misuse of assets; Violation of rights involves denying personal freedoms."
        },

        // TOPIC 08: Palliative Care
        {
            "id": "comp-q16",
            "type": "ordering",
            "question": "Order the stages of grief according to the Kubler-Ross model:",
            "points": 5,
            "topicId": "topic-08-palliative-care",
            "topicName": "Grief & Palliative Care",
            "items": [
                { "id": "i1", "text": "Denial", "correctPosition": 1 },
                { "id": "i2", "text": "Anger", "correctPosition": 2 },
                { "id": "i3", "text": "Bargaining", "correctPosition": 3 },
                { "id": "i4", "text": "Depression", "correctPosition": 4 },
                { "id": "i5", "text": "Acceptance", "correctPosition": 5 }
            ],
            "explanation": "The DABDA model: Denial -> Anger -> Bargaining -> Depression -> Acceptance."
        },
        {
            "id": "comp-q17",
            "type": "multiple-choice",
            "question": "Which of the following is a core principle of Hospice Care?",
            "points": 2,
            "topicId": "topic-08-palliative-care",
            "topicName": "Grief & Palliative Care",
            "options": [
                { "id": "a", "text": "Using technology to prolong life at all costs", "isCorrect": false },
                { "id": "b", "text": "Focusing solely on the patient, excluding family", "isCorrect": false },
                { "id": "c", "text": "Pain and symptom management is a priority", "isCorrect": true },
                { "id": "d", "text": "Hospitalization is required for all patients", "isCorrect": false }
            ],
            "explanation": "Hospice care prioritizes pain/symptom management and views the patient and family as a single unit of care. It does not seek to artificially prolong life."
        },
        {
            "id": "comp-q18",
            "type": "multiple-choice",
            "question": "What is 'Anticipatory Grief'?",
            "points": 2,
            "topicId": "topic-08-palliative-care",
            "topicName": "Grief & Palliative Care",
            "options": [
                { "id": "a", "text": "Grief that occurs only on holidays", "isCorrect": false },
                { "id": "b", "text": "Grief that begins before the actual loss occurs", "isCorrect": true },
                { "id": "c", "text": "Absence of grief when it would be expected", "isCorrect": false },
                { "id": "d", "text": "Chronic, disabling grief lasting years", "isCorrect": false }
            ],
            "explanation": "Anticipatory grief is the initiation and actual process of grieving that takes place when anticipating a significant loss before it actually happens."
        },

        // MIXED REINFORCEMENT
        {
            "id": "comp-q19",
            "type": "true-false",
            "question": "In the elderly, the systolic blood pressure often increases while the diastolic may slightly increase, leading to a wider pulse pressure.",
            "points": 2,
            "topicId": "topic-03-physical-changes",
            "topicName": "Physiological Changes",
            "correctAnswer": true,
            "explanation": "Arteries become rigid increasing resistance, leading to significant increase in systolic pressure and pulse pressure."
        },
        {
            "id": "comp-q20",
            "type": "multiple-choice",
            "question": "Which network style is primarily made up of friends rather than relatives?",
            "points": 2,
            "topicId": "topic-07-psychosocial",
            "topicName": "Psychosocial Challenges",
            "options": [
                { "id": "a", "text": "Kinship style", "isCorrect": false },
                { "id": "b", "text": "Associate style", "isCorrect": false },
                { "id": "c", "text": "Friendship style", "isCorrect": true },
                { "id": "d", "text": "Restricted style", "isCorrect": false }
            ],
            "explanation": "Friendship style networks are made of friends other than relatives. Kinship is relatives; Associate is work/groups."
        },
        {
            "id": "comp-q21",
            "type": "multiple-choice",
            "question": "Regarding hygiene in the elderly, why is it often recommended to bathe less often?",
            "points": 2,
            "topicId": "topic-06-nursing-care",
            "topicName": "Nursing Care",
            "options": [
                { "id": "a", "text": "They lose the ability to feel dirty", "isCorrect": false },
                { "id": "b", "text": "Sweat and oil glands are less active, leading to dry skin", "isCorrect": true },
                { "id": "c", "text": "It conserves body heat", "isCorrect": false },
                { "id": "d", "text": "Water is harmful to aging skin", "isCorrect": false }
            ],
            "explanation": "The older person's sweat and oil glands are less active, so frequent bathing can dry out the skin excessively."
        },
        {
            "id": "comp-q22",
            "type": "short-answer",
            "question": "Explain the difference between Fluid Intelligence and Crystallized Intelligence.",
            "points": 5,
            "topicId": "topic-07-psychosocial",
            "topicName": "Psychosocial Challenges",
            "keywords": ["fluid", "crystallized", "experience", "past", "new", "unfamiliar", "biological", "wisdom"],
            "minKeywords": 2,
            "modelAnswer": "Fluid intelligence is the ability to deal with new/unfamiliar stimuli (biologically mediated, declines with age). Crystallized intelligence is based on past experience and wisdom (remains stable or declines slightly).",
            "explanation": "Fluid = new situations/biological. Crystallized = experience/wisdom."
        },
        {
            "id": "comp-q23",
            "type": "multiple-choice",
            "question": "Which condition is characterized by severe muscle wasting and weight loss associated with terminal illness?",
            "points": 2,
            "topicId": "topic-08-palliative-care",
            "topicName": "Grief & Palliative Care",
            "options": [
                { "id": "a", "text": "Anorexia", "isCorrect": false },
                { "id": "b", "text": "Cachexia", "isCorrect": true },
                { "id": "c", "text": "Bulimia", "isCorrect": false },
                { "id": "d", "text": "Dysphagia", "isCorrect": false }
            ],
            "explanation": "Cachexia is defined as severe muscle wasting and weight loss associated with illness."
        },
        {
            "id": "comp-q24",
            "type": "fill-blank",
            "question": "The theory that suggests the body is like a machine that eventually fails due to usage and stress is called the __b1__ theory.",
            "points": 3,
            "topicId": "topic-02-aging-process",
            "topicName": "Aging Process & Theories",
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["wear and tear", "wear & tear"], "caseSensitive": false }
            ],
            "explanation": "The Wear and Tear theory states that organs have limited energy and wear out on a scheduled basis, aggravated by stress."
        },
        {
            "id": "comp-q25",
            "type": "multiple-choice",
            "question": "Which of the following represents a normal change in the male reproductive system with aging?",
            "points": 2,
            "topicId": "topic-03-physical-changes",
            "topicName": "Physiological Changes",
            "options": [
                { "id": "a", "text": "Increased testosterone production", "isCorrect": false },
                { "id": "b", "text": "Hypertrophy of the testes", "isCorrect": false },
                { "id": "c", "text": "Decreased viscosity of seminal fluid", "isCorrect": true },
                { "id": "d", "text": "Increased sperm count", "isCorrect": false }
            ],
            "explanation": "In males, testosterone decreases, testes decrease in size, sperm count decreases, and the viscosity of seminal fluid diminishes."
        }
    ]
});