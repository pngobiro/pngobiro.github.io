registerQuiz("comprehensive-exam", {
    "schemaVersion": "1.0",
    "quizId": "comprehensive-exam",
    "metadata": {
        "title": "Comprehensive Final Exam: Health Promotion & Community Health",
        "description": "A comprehensive assessment covering all 9 topics of the course, from community health fundamentals to first aid.",
        "examType": "comprehensive",
        "topicsCovered": [
            "topic-01-community-health-intro",
            "topic-02-primary-health-care",
            "topic-03-health-information",
            "topic-04-emerging-issues",
            "topic-05-community-nutrition",
            "topic-06-hiv-aids-foundations",
            "topic-07-hiv-aids-management",
            "topic-08-communicable-diseases",
            "topic-09-first-aid"
        ],
        "difficulty": "advanced",
        "estimatedTime": 60,
        "passingScore": 70,
        "createdAt": "2026-01-12T00:00:00Z",
        "tags": ["final", "comprehensive", "community-health", "exam"]
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
        // Topic 1: Community Health Fundamentals
        {
            "id": "comp-t1-q1",
            "type": "multiple-choice",
            "topicId": "topic-01-community-health-intro",
            "topicName": "Community Health Fundamentals",
            "question": "Which category of community health refers to interventions focusing on the environment, such as draining puddles and clearing bushes?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Primary healthcare", "isCorrect": false },
                { "id": "b", "text": "Secondary healthcare", "isCorrect": true },
                { "id": "c", "text": "Tertiary healthcare", "isCorrect": false },
                { "id": "d", "text": "Quaternary healthcare", "isCorrect": false }
            ],
            "explanation": "Secondary healthcare refers to activities focusing on the environment, whereas Primary focuses on the individual/family and Tertiary focuses on hospital settings."
        },
        {
            "id": "comp-t1-q2",
            "type": "matching",
            "topicId": "topic-01-community-health-intro",
            "topicName": "Community Health Fundamentals",
            "question": "Match the historical era to its defining characteristic:",
            "points": 2,
            "pairs": [
                { "id": "p1", "left": "Bacteriological Era (1875-1900)", "right": "Identification of specific microbes causing diseases" },
                { "id": "p2", "left": "Health Resources Development Era (1900-1960)", "right": "Growth of health care facilities and providers" },
                { "id": "p3", "left": "Social Engineering Era (1960-1975)", "right": "Introduction of Medicare and Medicaid" },
                { "id": "p4", "left": "Health Promotion Era (1974-1999)", "right": "Focus on lifestyle changes and disease prevention" }
            ]
        },
        {
            "id": "comp-t1-q3",
            "type": "multiple-select",
            "topicId": "topic-01-community-health-intro",
            "topicName": "Community Health Fundamentals",
            "question": "Which of the following are considered tools of community health practice? (Select all that apply)",
            "points": 1,
            "options": [
                { "id": "a", "text": "Epidemiology", "isCorrect": true },
                { "id": "b", "text": "Community Organizing", "isCorrect": true },
                { "id": "c", "text": "Health Education", "isCorrect": true },
                { "id": "d", "text": "Clinical Surgery", "isCorrect": false }
            ],
            "explanation": "The three basic tools of community health practice are epidemiology, community organizing, and health education."
        },
        {
            "id": "comp-t1-q4",
            "type": "fill-blank",
            "topicId": "topic-01-community-health-intro",
            "topicName": "Community Health Fundamentals",
            "question": "The WIC program is a special supplemental food program for __1__, __2__, and __3__.",
            "points": 2,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["women", "Women"], "caseSensitive": false },
                { "id": "2", "acceptedAnswers": ["infants", "Infants"], "caseSensitive": false },
                { "id": "3", "acceptedAnswers": ["children", "Children"], "caseSensitive": false }
            ],
            "explanation": "WIC stands for Women, Infants, and Children."
        },

        // Topic 2: Primary Health Care
        {
            "id": "comp-t2-q1",
            "type": "short-answer",
            "topicId": "topic-02-primary-health-care",
            "topicName": "Primary Health Care",
            "question": "What does the 'E' stand for in the ELEMENTS acronym for Primary Health Care components regarding drugs?",
            "points": 1,
            "keywords": ["essential", "drug", "drugs"],
            "minKeywords": 1,
            "modelAnswer": "Essential drugs arrangement",
            "explanation": "In the ELEMENTS mnemonic, 'E' stands for Essential drugs arrangement."
        },
        {
            "id": "comp-t2-q2",
            "type": "multiple-choice",
            "topicId": "topic-02-primary-health-care",
            "topicName": "Primary Health Care",
            "question": "Which principle of Primary Health Care emphasizes that services must be provided equally to all individuals regardless of gender, age, caste, or social class?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Community Participation", "isCorrect": false },
                { "id": "b", "text": "Equitable Distribution", "isCorrect": true },
                { "id": "c", "text": "Multi-sectional Approach", "isCorrect": false },
                { "id": "d", "text": "Appropriate Technology", "isCorrect": false }
            ],
            "explanation": "Equitable distribution ensures that primary care services are provided equally to all individuals."
        },
        {
            "id": "comp-t2-q3",
            "type": "true-false",
            "topicId": "topic-02-primary-health-care",
            "topicName": "Primary Health Care",
            "question": "Primary Health Care focuses solely on the health sector interventions without involving other sectors.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "PHC relies on a multi-sectional approach, recognizing that health cannot be improved by intervention within just the formal health sector."
        },
        {
            "id": "comp-t2-q4",
            "type": "ordering",
            "topicId": "topic-02-primary-health-care",
            "topicName": "Primary Health Care",
            "question": "Arrange the following letters to form the mnemonic for the essential elements of Primary Health Care:",
            "points": 2,
            "items": [
                { "id": "1", "text": "E - Education", "correctPosition": 1 },
                { "id": "2", "text": "L - Locally endemic diseases", "correctPosition": 2 },
                { "id": "3", "text": "E - Expanded immunization", "correctPosition": 3 },
                { "id": "4", "text": "M - Maternal/Child health", "correctPosition": 4 },
                { "id": "5", "text": "E - Essential drugs", "correctPosition": 5 },
                { "id": "6", "text": "N - Nutritional food", "correctPosition": 6 },
                { "id": "7", "text": "T - Treatment", "correctPosition": 7 },
                { "id": "8", "text": "S - Safe water", "correctPosition": 8 }
            ]
        },

        // Topic 3: Health Information Systems
        {
            "id": "comp-t3-q1",
            "type": "multiple-choice",
            "topicId": "topic-03-health-information",
            "topicName": "Health Information Systems",
            "question": "What is the main disadvantage of a Census as a data source?",
            "points": 1,
            "options": [
                { "id": "a", "text": "It covers a small sample of the population", "isCorrect": false },
                { "id": "b", "text": "Results are not available quickly", "isCorrect": true },
                { "id": "c", "text": "It does not collect social data", "isCorrect": false },
                { "id": "d", "text": "It is conducted too frequently", "isCorrect": false }
            ],
            "explanation": "The main problem of census as a data source is that it takes several years to analyze results, so data is not available quickly."
        },
        {
            "id": "comp-t3-q2",
            "type": "multiple-select",
            "topicId": "topic-03-health-information",
            "topicName": "Health Information Systems",
            "question": "Which of the following are considered 'Vital Events' for registration? (Select all that apply)",
            "points": 1,
            "options": [
                { "id": "a", "text": "Live births", "isCorrect": true },
                { "id": "b", "text": "Hospital admissions", "isCorrect": false },
                { "id": "c", "text": "Deaths", "isCorrect": true },
                { "id": "d", "text": "Marriages", "isCorrect": true },
                { "id": "e", "text": "School enrollment", "isCorrect": false }
            ],
            "explanation": "Vital events include live births, deaths, fetal deaths, marriages, divorces, adoptions, etc."
        },
        {
            "id": "comp-t3-q3",
            "type": "fill-blank",
            "topicId": "topic-03-health-information",
            "topicName": "Health Information Systems",
            "question": "A __1__ disease is any disease that is required by law to be reported to government authorities.",
            "points": 1,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["notifiable", "Notifiable"], "caseSensitive": false }
            ],
            "explanation": "A notifiable disease is one that must be reported to authorities to allow for monitoring and early warning."
        },
        {
            "id": "comp-t3-q4",
            "type": "multiple-choice",
            "topicId": "topic-03-health-information",
            "topicName": "Health Information Systems",
            "question": "Which type of registry is primarily concerned with calculating incidence rates in a defined geographic region?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Hospital-based registry", "isCorrect": false },
                { "id": "b", "text": "Population-based registry", "isCorrect": true },
                { "id": "c", "text": "Clinical trial registry", "isCorrect": false },
                { "id": "d", "text": "Mortality registry", "isCorrect": false }
            ],
            "explanation": "The major concern of Population Based Registries is to calculate incidence rates for a defined population."
        },

        // Topic 4: Emerging Health Challenges
        {
            "id": "comp-t4-q1",
            "type": "multiple-choice",
            "topicId": "topic-04-emerging-issues",
            "topicName": "Emerging Health Challenges",
            "question": "Which Millennium Development Goal (MDG) is considered a fundamental basis for achieving all other health and sustainability goals?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Universal primary education", "isCorrect": false },
                { "id": "b", "text": "Environmental sustainability", "isCorrect": true },
                { "id": "c", "text": "Gender equality", "isCorrect": false },
                { "id": "d", "text": "Global partnership", "isCorrect": false }
            ],
            "explanation": "Without environmental sustainability (maintenance of Earth's ecological systems), the foundations for health and survival are lost."
        },
        {
            "id": "comp-t4-q2",
            "type": "true-false",
            "topicId": "topic-04-emerging-issues",
            "topicName": "Emerging Health Challenges",
            "question": "Life expectancy has continuously increased in all regions of the world since the 1980s.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "Life expectancy has unexpectedly declined in several regions, notably Russia and sub-Saharan Africa, due to factors like HIV/AIDS and social disintegration."
        },
        {
            "id": "comp-t4-q3",
            "type": "multiple-select",
            "topicId": "topic-04-emerging-issues",
            "topicName": "Emerging Health Challenges",
            "question": "Which factors have contributed to the emergence and re-emergence of infectious diseases? (Select all that apply)",
            "points": 1,
            "options": [
                { "id": "a", "text": "Urban crowding", "isCorrect": true },
                { "id": "b", "text": "Increased international travel", "isCorrect": true },
                { "id": "c", "text": "Industrialized livestock farming", "isCorrect": true },
                { "id": "d", "text": "Decreased antimicrobial resistance", "isCorrect": false }
            ],
            "explanation": "Urban crowding, travel, and farming practices facilitate disease spread. Antimicrobial resistance has INCREASED, not decreased, contributing to the problem."
        },

        // Topic 5: Community Nutrition
        {
            "id": "comp-t5-q1",
            "type": "short-answer",
            "topicId": "topic-05-community-nutrition",
            "topicName": "Community Nutrition",
            "question": "What is the primary goal of community nutrition?",
            "points": 1,
            "keywords": ["healthy", "eating", "habits", "wellness", "prevent", "disease"],
            "minKeywords": 2,
            "modelAnswer": "To help individuals and groups develop healthy eating habits to promote wellness and prevent disease.",
            "explanation": "Community nutrition focuses on developing healthy eating habits for wellness and disease prevention."
        },
        {
            "id": "comp-t5-q2",
            "type": "multiple-choice",
            "topicId": "topic-05-community-nutrition",
            "topicName": "Community Nutrition",
            "question": "Which public awareness promotion urges the public to eat at least five fruits and vegetables every day?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Healthy People 2020", "isCorrect": false },
                { "id": "b", "text": "5-A-Day", "isCorrect": true },
                { "id": "c", "text": "Food Pyramid", "isCorrect": false },
                { "id": "d", "text": "Daily Dozen", "isCorrect": false }
            ],
            "explanation": "The '5-A-Day' campaign urges the public to eat at least five servings of fruits and vegetables daily."
        },
        {
            "id": "comp-t5-q3",
            "type": "fill-blank",
            "topicId": "topic-05-community-nutrition",
            "topicName": "Community Nutrition",
            "question": "__1__ is an issue for many age groups caused by lack of physical education and availability of fast food.",
            "points": 1,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["obesity", "Obesity"], "caseSensitive": false }
            ],
            "explanation": "Obesity is a major community nutrition issue linked to lifestyle and food availability."
        },

        // Topic 6: HIV/AIDS Foundations
        {
            "id": "comp-t6-q1",
            "type": "multiple-choice",
            "topicId": "topic-06-hiv-aids-foundations",
            "topicName": "HIV/AIDS Foundations",
            "question": "Which theory suggests HIV originated from a viral material arriving in the tail of a comet?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Monkey meat theory", "isCorrect": false },
                { "id": "b", "text": "Comet and curse theory", "isCorrect": true },
                { "id": "c", "text": "Accidental emergence theory", "isCorrect": false },
                { "id": "d", "text": "Conspiracy theory", "isCorrect": false }
            ],
            "explanation": "The 'Comet and curse' theory suggests viral material deposited by a comet caused the infection."
        },
        {
            "id": "comp-t6-q2",
            "type": "matching",
            "topicId": "topic-06-hiv-aids-foundations",
            "topicName": "HIV/AIDS Foundations",
            "question": "Match the type of immunity with its description:",
            "points": 2,
            "pairs": [
                { "id": "p1", "left": "Innate Immunity", "right": "Natural ability to defend against microorganisms, present from birth" },
                { "id": "p2", "left": "Adaptive Immunity", "right": "Specific defense called into service when first line is breached" },
                { "id": "p3", "left": "Humoral Immunity", "right": "Primarily a response to bacteria in body fluids" },
                { "id": "p4", "left": "Cellular Immunity", "right": "Responds mainly to viruses and parasites inside cells" }
            ]
        },
        {
            "id": "comp-t6-q3",
            "type": "ordering",
            "topicId": "topic-06-hiv-aids-foundations",
            "topicName": "HIV/AIDS Foundations",
            "question": "Order the steps of HIV viral replication:",
            "points": 2,
            "items": [
                { "id": "1", "text": "Attachment (Fusion)", "correctPosition": 1 },
                { "id": "2", "text": "Transcription (Reverse Transcriptase)", "correctPosition": 2 },
                { "id": "3", "text": "Integration (Integrase)", "correctPosition": 3 },
                { "id": "4", "text": "Cleavage", "correctPosition": 4 },
                { "id": "5", "text": "Packaging", "correctPosition": 5 },
                { "id": "6", "text": "Budding", "correctPosition": 6 }
            ]
        },
        {
            "id": "comp-t6-q4",
            "type": "multiple-select",
            "topicId": "topic-06-hiv-aids-foundations",
            "topicName": "HIV/AIDS Foundations",
            "question": "Which of the following are valid modes of HIV transmission? (Select all that apply)",
            "points": 1,
            "options": [
                { "id": "a", "text": "Sexual intercourse", "isCorrect": true },
                { "id": "b", "text": "Mosquito bites", "isCorrect": false },
                { "id": "c", "text": "Mother to child transmission", "isCorrect": true },
                { "id": "d", "text": "Sharing utensils", "isCorrect": false },
                { "id": "e", "text": "Blood transfusion", "isCorrect": true }
            ],
            "explanation": "HIV is transmitted via sexual contact, blood, and mother-to-child. It is NOT transmitted by insects or casual contact."
        },

        // Topic 7: HIV/AIDS Management
        {
            "id": "comp-t7-q1",
            "type": "multiple-choice",
            "topicId": "topic-07-hiv-aids-management",
            "topicName": "HIV/AIDS Management",
            "question": "Which opportunistic infection causes inflammation and a thick, white coating on the mucous membranes of the mouth?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Tuberculosis", "isCorrect": false },
                { "id": "b", "text": "Candidiasis (Thrush)", "isCorrect": true },
                { "id": "c", "text": "Kaposi's sarcoma", "isCorrect": false },
                { "id": "d", "text": "Toxoplasmosis", "isCorrect": false }
            ],
            "explanation": "Candidiasis (thrush) causes white coatings on mucous membranes."
        },
        {
            "id": "comp-t7-q2",
            "type": "fill-blank",
            "topicId": "topic-07-hiv-aids-management",
            "topicName": "HIV/AIDS Management",
            "question": "The window period during which a patient is highly infectious but HIV antibodies may not yet be detectable is called __1__.",
            "points": 1,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["primary infection", "sero conversion", "seroconversion"], "caseSensitive": false }
            ],
            "explanation": "Primary infection / seroconversion is the period before antibodies are detectable but viral load is high."
        },
        {
            "id": "comp-t7-q3",
            "type": "multiple-choice",
            "topicId": "topic-07-hiv-aids-management",
            "topicName": "HIV/AIDS Management",
            "question": "What is VCT in the context of HIV prevention?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Viral Count Test", "isCorrect": false },
                { "id": "b", "text": "Voluntary Counseling and Testing", "isCorrect": true },
                { "id": "c", "text": "Very Critical Treatment", "isCorrect": false },
                { "id": "d", "text": "Vector Control Technique", "isCorrect": false }
            ],
            "explanation": "VCT stands for Voluntary Counseling and Testing."
        },
        {
            "id": "comp-t7-q4",
            "type": "matching",
            "topicId": "topic-07-hiv-aids-management",
            "topicName": "HIV/AIDS Management",
            "question": "Match the HIV clinical stage with its characteristic:",
            "points": 2,
            "pairs": [
                { "id": "p1", "left": "Asymptomatic Phase", "right": "No signs, but virus replicating; patient remains well" },
                { "id": "p2", "left": "Symptomatic Stage", "right": "CD4 count 200-500; oral thrush may appear" },
                { "id": "p3", "left": "Advanced Disease", "right": "CD4 count below 200; severe opportunistic infections" },
                { "id": "p4", "left": "Primary Infection", "right": "Mild flu-like symptoms 2-6 weeks after exposure" }
            ]
        },

        // Topic 8: Communicable Diseases
        {
            "id": "comp-t8-q1",
            "type": "matching",
            "topicId": "topic-08-communicable-diseases",
            "topicName": "Communicable Diseases",
            "question": "Match the element of the epidemiological triad with its description:",
            "points": 1,
            "pairs": [
                { "id": "p1", "left": "Agent", "right": "The disease-causing organism" },
                { "id": "p2", "left": "Host", "right": "The person or animal infected" },
                { "id": "p3", "left": "Environment", "right": "The surroundings allowing transmission" }
            ]
        },
        {
            "id": "comp-t8-q2",
            "type": "multiple-choice",
            "topicId": "topic-08-communicable-diseases",
            "topicName": "Communicable Diseases",
            "question": "Which term describes a disease that occurs occasionally without a regular pattern?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Endemic", "isCorrect": false },
                { "id": "b", "text": "Epidemic", "isCorrect": false },
                { "id": "c", "text": "Pandemic", "isCorrect": false },
                { "id": "d", "text": "Sporadic", "isCorrect": true }
            ],
            "explanation": "Sporadic diseases occur here and there (scattered) without a regular pattern."
        },
        {
            "id": "comp-t8-q3",
            "type": "fill-blank",
            "topicId": "topic-08-communicable-diseases",
            "topicName": "Communicable Diseases",
            "question": "The time between infection and the appearance of signs and symptoms is called the __1__ period.",
            "points": 1,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["incubation"], "caseSensitive": false }
            ],
            "explanation": "Incubation period is the interval between exposure and symptom onset."
        },
        {
            "id": "comp-t8-q4",
            "type": "multiple-choice",
            "topicId": "topic-08-communicable-diseases",
            "topicName": "Communicable Diseases",
            "question": "Which of the following is an example of a vector-borne disease?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Cholera", "isCorrect": false },
                { "id": "b", "text": "Malaria", "isCorrect": true },
                { "id": "c", "text": "Measles", "isCorrect": false },
                { "id": "d", "text": "Gonorrhea", "isCorrect": false }
            ],
            "explanation": "Malaria is transmitted by the Anopheles mosquito vector."
        },
        {
            "id": "comp-t8-q5",
            "type": "multiple-select",
            "topicId": "topic-08-communicable-diseases",
            "topicName": "Communicable Diseases",
            "question": "Select the methods used to interrupt the transmission route of a disease. (Select all that apply)",
            "points": 1,
            "options": [
                { "id": "a", "text": "Vector control", "isCorrect": true },
                { "id": "b", "text": "Personal hygiene", "isCorrect": true },
                { "id": "c", "text": "Treatment of cases", "isCorrect": false },
                { "id": "d", "text": "Environmental sanitation", "isCorrect": true }
            ],
            "explanation": "Treatment attacks the SOURCE. Vector control, hygiene, and sanitation interrupt the TRANSMISSION route."
        },
        {
            "id": "comp-t8-q6",
            "type": "multiple-choice",
            "topicId": "topic-08-communicable-diseases",
            "topicName": "Communicable Diseases",
            "question": "In the clinical picture of Malaria, which stage is characterized by profuse sweating and temperature going down?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Cold stage", "isCorrect": false },
                { "id": "b", "text": "Hot stage", "isCorrect": false },
                { "id": "c", "text": "Sweating stage", "isCorrect": true },
                { "id": "d", "text": "Incubation stage", "isCorrect": false }
            ],
            "explanation": "The sweating stage follows the hot stage and is marked by profuse sweating and temperature reduction."
        },

        // Topic 9: First Aid
        {
            "id": "comp-t9-q1",
            "type": "multiple-select",
            "topicId": "topic-09-first-aid",
            "topicName": "First Aid & Emergency Care",
            "question": "What are the key aims of first aid? (Select all that apply)",
            "points": 1,
            "options": [
                { "id": "a", "text": "Preserve life", "isCorrect": true },
                { "id": "b", "text": "Perform major surgery", "isCorrect": false },
                { "id": "c", "text": "Prevent further harm", "isCorrect": true },
                { "id": "d", "text": "Promote recovery", "isCorrect": true }
            ],
            "explanation": "The 3 Ps of First Aid: Preserve life, Prevent further harm, Promote recovery."
        },
        {
            "id": "comp-t9-q2",
            "type": "multiple-choice",
            "topicId": "topic-09-first-aid",
            "topicName": "First Aid & Emergency Care",
            "question": "What is the very first thing a first aider should do upon arriving at an emergency scene?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Start CPR immediately", "isCorrect": false },
                { "id": "b", "text": "Assess the situation and ensure safety", "isCorrect": true },
                { "id": "c", "text": "Call the casualty's relatives", "isCorrect": false },
                { "id": "d", "text": "Give medication", "isCorrect": false }
            ],
            "explanation": "Safety first: Assess the situation and make the area safe to protect yourself and the casualty from further danger."
        },
        {
            "id": "comp-t9-q3",
            "type": "fill-blank",
            "topicId": "topic-09-first-aid",
            "topicName": "First Aid & Emergency Care",
            "question": "The ABC of critical lifesaving stands for Airway, __1__, and Circulation.",
            "points": 1,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["breathing", "Breathing"], "caseSensitive": false }
            ],
            "explanation": "ABC: Airway, Breathing, Circulation."
        },
        {
            "id": "comp-t9-q4",
            "type": "true-false",
            "topicId": "topic-09-first-aid",
            "topicName": "First Aid & Emergency Care",
            "question": "You should generally move a casualty immediately, even before assessing their injuries.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "You should treat a casualty in the position you find them unless they are in immediate danger. Moving them can cause further injury."
        },
        {
            "id": "comp-t9-q5",
            "type": "ordering",
            "topicId": "topic-09-first-aid",
            "topicName": "First Aid & Emergency Care",
            "question": "Order the steps for proper hand washing:",
            "points": 2,
            "items": [
                { "id": "1", "text": "Wet hands and apply soap", "correctPosition": 1 },
                { "id": "2", "text": "Rub palms together", "correctPosition": 2 },
                { "id": "3", "text": "Rub palm to back of hand", "correctPosition": 3 },
                { "id": "4", "text": "Interlock fingers", "correctPosition": 4 },
                { "id": "5", "text": "Rub thumbs", "correctPosition": 5 },
                { "id": "6", "text": "Rub fingertips", "correctPosition": 6 },
                { "id": "7", "text": "Rinse and dry", "correctPosition": 7 }
            ]
        }
    ]
});