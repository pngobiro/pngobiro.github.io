registerQuiz("comprehensive-exam", {
    "schemaVersion": "1.0",
    "quizId": "comprehensive-exam",
    "metadata": {
        "title": "Comprehensive Disaster Management Certification Exam",
        "description": "A comprehensive assessment covering all aspects of disaster management, from fundamental concepts and the management cycle to response operations and public awareness strategies.",
        "examType": "comprehensive",
        "topicsCovered": [
            "Topic 01: Introduction",
            "Topic 02: Vulnerability & Risk",
            "Topic 03: Management Cycle",
            "Topic 04: Mitigation & Preparedness",
            "Topic 05: Response & Recovery",
            "Topic 06: Education & Awareness"
        ],
        "difficulty": "advanced",
        "estimatedTime": 90,
        "passingScore": 75,
        "createdAt": "2025-12-25T12:00:00Z",
        "tags": ["final", "certification", "comprehensive", "all-topics"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "end",
        "allowRetry": true,
        "showCorrectAnswers": true,
        "timeLimit": 5400
    },
    "questions": [
        /* TOPIC 1: INTRODUCTION */
        {
            "id": "t1-q1",
            "type": "multiple-choice",
            "topicId": "topic-01",
            "topicName": "Fundamentals",
            "question": "Which formula correctly represents the relationship between Risk, Hazard, and Vulnerability?",
            "points": 5,
            "options": [
                { "id": "a", "text": "Risk = Hazard + Vulnerability", "isCorrect": false },
                { "id": "b", "text": "Risk = Hazard × Vulnerability", "isCorrect": true },
                { "id": "c", "text": "Risk = Hazard ÷ Vulnerability", "isCorrect": false },
                { "id": "d", "text": "Risk = Vulnerability - Hazard", "isCorrect": false }
            ],
            "explanation": "Risk is conceptually defined as the product of Hazard and Vulnerability (R = H × V). The presence of a hazard alone does not constitute risk unless there is vulnerability."
        },
        {
            "id": "t1-q2",
            "type": "true-false",
            "topicId": "topic-01",
            "topicName": "Fundamentals",
            "question": "An 'Emergency' differs from a 'Disaster' because in an emergency, the community is still capable of coping using its own resources.",
            "points": 5,
            "correctAnswer": true,
            "explanation": "This is the key distinction: An emergency requires immediate attention but is within coping capacity. A disaster exceeds the affected community's capability to respond, requiring external assistance."
        },
        {
            "id": "t1-q3",
            "type": "matching",
            "topicId": "topic-01",
            "topicName": "Fundamentals",
            "question": "Match the event type with its classification:",
            "points": 10,
            "pairs": [
                { "id": "p1", "left": "Earthquake", "right": "Sudden Onset Natural Disaster" },
                { "id": "p2", "left": "Drought", "right": "Slow Onset Natural Disaster" },
                { "id": "p3", "left": "Industrial Explosion", "right": "Technological Disaster" },
                { "id": "p4", "left": "Civil War", "right": "Complex Emergency" }
            ]
        },
        {
            "id": "t1-q4",
            "type": "fill-blank",
            "topicId": "topic-01",
            "topicName": "Fundamentals",
            "question": "A __b1__ is a rare or extreme event in the natural or human-made environment that adversely affects human life, property, or activity.",
            "points": 5,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["hazard"], "caseSensitive": false }
            ],
            "explanation": "A 'hazard' is the potential or threat of an event. It becomes a disaster only when it interacts with vulnerable conditions."
        },

        /* TOPIC 2: VULNERABILITY & RISK */
        {
            "id": "t2-q1",
            "type": "multiple-select",
            "topicId": "topic-02",
            "topicName": "Vulnerability Analysis",
            "question": "Which of the following are considered root causes or factors contributing to vulnerability? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Poverty", "isCorrect": true },
                { "id": "b", "text": "Rapid Urbanization", "isCorrect": true },
                { "id": "c", "text": "Environmental Degradation", "isCorrect": true },
                { "id": "d", "text": "High Disaster Preparedness", "isCorrect": false }
            ],
            "partialCredit": true,
            "explanation": "Poverty, rapid urbanization, and environmental degradation increase susceptibility. High preparedness actually reduces vulnerability (increases resilience)."
        },
        {
            "id": "t2-q2",
            "type": "multiple-choice",
            "topicId": "topic-02",
            "topicName": "Vulnerability Analysis",
            "question": "The disruption of social structures, family relationships, and community cohesion falls under which category of vulnerability?",
            "points": 5,
            "options": [
                { "id": "a", "text": "Tangible / Material", "isCorrect": false },
                { "id": "b", "text": "Intangible / Abstract", "isCorrect": true },
                { "id": "c", "text": "Physiological", "isCorrect": false },
                { "id": "d", "text": "Economic", "isCorrect": false }
            ],
            "explanation": "Intangible vulnerabilities are difficult to see or quantify but are critical. They include social structures, cultural practices, and motivation."
        },
        {
            "id": "t2-q3",
            "type": "ordering",
            "topicId": "topic-02",
            "topicName": "Vulnerability Analysis",
            "question": "Arrange the steps of the Vulnerability Assessment Process in the correct logical order:",
            "points": 10,
            "items": [
                { "id": "i1", "text": "Project Definition", "correctPosition": 1 },
                { "id": "i2", "text": "Formation of Planning Group", "correctPosition": 2 },
                { "id": "i3", "text": "Hazard Identification", "correctPosition": 3 },
                { "id": "i4", "text": "Hazard Description", "correctPosition": 4 },
                { "id": "i5", "text": "Description of Effects/Vulnerability", "correctPosition": 5 },
                { "id": "i6", "text": "Recommendations for Action", "correctPosition": 6 }
            ]
        },

        /* TOPIC 3: MANAGEMENT CYCLE */
        {
            "id": "t3-q1",
            "type": "multiple-choice",
            "topicId": "topic-03",
            "topicName": "Management Cycle",
            "question": "Which phase of the disaster management cycle involves measures taken immediately before and during a disaster to minimize its impact, such as evacuation and search and rescue?",
            "points": 5,
            "options": [
                { "id": "a", "text": "Mitigation", "isCorrect": false },
                { "id": "b", "text": "Preparedness", "isCorrect": false },
                { "id": "c", "text": "Response", "isCorrect": true },
                { "id": "d", "text": "Recovery", "isCorrect": false }
            ],
            "explanation": "Response refers to the initial actions taken as the event takes place, involving efforts to minimize hazards (e.g., evacuation, SAR)."
        },
        {
            "id": "t3-q2",
            "type": "matching",
            "topicId": "topic-03",
            "topicName": "Management Cycle",
            "question": "Match the cycle phase with its correct definition/activity:",
            "points": 10,
            "pairs": [
                { "id": "p1", "left": "Mitigation", "right": "Permanent reduction of risk (e.g., building codes)" },
                { "id": "p2", "left": "Preparedness", "right": "Planning how to respond (e.g., training, warning systems)" },
                { "id": "p3", "left": "Response", "right": "Immediate actions during event (e.g., relief, rescue)" },
                { "id": "p4", "left": "Recovery", "right": "Returning community to normal (e.g., reconstruction)" }
            ]
        },
        {
            "id": "t3-q3",
            "type": "true-false",
            "topicId": "topic-03",
            "topicName": "Management Cycle",
            "question": "The disaster management cycle is strictly linear; one phase must be fully completed before the next one begins.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "Disaster management is cyclical and phases often overlap. For example, recovery activities can provide opportunities for mitigation, and response often blends into short-term recovery."
        },

        /* TOPIC 4: MITIGATION & PREPAREDNESS */
        {
            "id": "t4-q1",
            "type": "multiple-choice",
            "topicId": "topic-04",
            "topicName": "Mitigation & Preparedness",
            "question": "Building a sea-wall to protect against storm surges is an example of which type of mitigation?",
            "points": 5,
            "options": [
                { "id": "a", "text": "Structural Mitigation", "isCorrect": true },
                { "id": "b", "text": "Non-structural Mitigation", "isCorrect": false },
                { "id": "c", "text": "Administrative Control", "isCorrect": false },
                { "id": "d", "text": "Economic Diversification", "isCorrect": false }
            ],
            "explanation": "Structural mitigation involves physical construction projects. Non-structural mitigation involves policies, practices, and education."
        },
        {
            "id": "t4-q2",
            "type": "multiple-select",
            "topicId": "topic-04",
            "topicName": "Mitigation & Preparedness",
            "question": "Which of the following are essential components of an Emergency Operation Plan (EOP)? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Statement of Purpose", "isCorrect": true },
                { "id": "b", "text": "Specific names of all potential victims", "isCorrect": false },
                { "id": "c", "text": "Organization and assignment of responsibilities", "isCorrect": true },
                { "id": "d", "text": "Administration and logistics", "isCorrect": true }
            ],
            "partialCredit": true,
            "explanation": "An EOP includes purpose, responsibilities, logistics, and concept of operations. It does not list specific potential victims, as that is impossible to predict."
        },
        {
            "id": "t4-q3",
            "type": "ordering",
            "topicId": "topic-04",
            "topicName": "Mitigation & Preparedness",
            "question": "Place the levels of the 'Hierarchy of Control' for technological hazards in order from most effective to least effective:",
            "points": 10,
            "items": [
                { "id": "i1", "text": "Elimination (remove hazard completely)", "correctPosition": 1 },
                { "id": "i2", "text": "Replacement (substitute with safer material)", "correctPosition": 2 },
                { "id": "i3", "text": "Engineering Control (barriers/ventilation)", "correctPosition": 3 },
                { "id": "i4", "text": "Administrative Control (procedures/training)", "correctPosition": 4 },
                { "id": "i5", "text": "Personal Protective Equipment (PPE)", "correctPosition": 5 }
            ]
        },

        /* TOPIC 5: RESPONSE & RECOVERY */
        {
            "id": "t5-q1",
            "type": "multiple-choice",
            "topicId": "topic-05",
            "topicName": "Response & Recovery",
            "question": "What is the primary purpose of 'Triage' in a mass casualty incident?",
            "points": 5,
            "options": [
                { "id": "a", "text": "To treat every patient immediately regardless of injury", "isCorrect": false },
                { "id": "b", "text": "To sort and prioritize patients based on severity and survival potential", "isCorrect": true },
                { "id": "c", "text": "To transport patients to the nearest hospital alphabetically", "isCorrect": false },
                { "id": "d", "text": "To document the personal history of victims", "isCorrect": false }
            ],
            "explanation": "Triage sorts patients to do the greatest good for the greatest number when resources are limited."
        },
        {
            "id": "t5-q2",
            "type": "matching",
            "topicId": "topic-05",
            "topicName": "Response & Recovery",
            "question": "Match the mode of transmission to the communicable disease common in disasters:",
            "points": 10,
            "pairs": [
                { "id": "p1", "left": "Vector Transmitted", "right": "Malaria / Dengue" },
                { "id": "p2", "left": "Fecal-Oral / Waterborne", "right": "Cholera / Typhoid" },
                { "id": "p3", "left": "Airborne", "right": "Tuberculosis / Measles" },
                { "id": "p4", "left": "Contact Transmitted", "right": "Acute Respiratory Infections (ARI)" }
            ]
        },
        {
            "id": "t5-q3",
            "type": "multiple-select",
            "topicId": "topic-05",
            "topicName": "Response & Recovery",
            "question": "Which of the following are considered 'Short-term Recovery' activities? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Restoring interrupted utility services", "isCorrect": true },
                { "id": "b", "text": "Clearing roads of debris", "isCorrect": true },
                { "id": "c", "text": "Complete redevelopment of the economic base", "isCorrect": false },
                { "id": "d", "text": "Providing temporary food and shelter", "isCorrect": true }
            ],
            "partialCredit": true,
            "explanation": "Short-term recovery overlaps with response and restores vital functions. Complete redevelopment is a long-term recovery activity."
        },
        {
            "id": "t5-q4",
            "type": "fill-blank",
            "topicId": "topic-05",
            "topicName": "Response & Recovery",
            "question": "The permanent construction or replacement of severely damaged physical structures and full restoration of services is known as __b1__.",
            "points": 5,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["reconstruction"], "caseSensitive": false }
            ],
            "explanation": "Reconstruction goes beyond rehabilitation to permanently replace structures, ideally integrating 'build back better' principles."
        },

        /* TOPIC 6: EDUCATION & AWARENESS */
        {
            "id": "t6-q1",
            "type": "multiple-choice",
            "topicId": "topic-06",
            "topicName": "Education & Awareness",
            "question": "Why is the Community-Based Approach considered most effective for public awareness?",
            "points": 5,
            "options": [
                { "id": "a", "text": "It is cheaper than government programs", "isCorrect": false },
                { "id": "b", "text": "Locals have the best knowledge of their environment, culture, and needs", "isCorrect": true },
                { "id": "c", "text": "It requires no resources", "isCorrect": false },
                { "id": "d", "text": "It eliminates the need for government involvement", "isCorrect": false }
            ],
            "explanation": "Community members are the immediate victims and possess indigenous knowledge, cultural understanding, and ownership, making initiatives more sustainable."
        },
        {
            "id": "t6-q2",
            "type": "multiple-select",
            "topicId": "topic-06",
            "topicName": "Education & Awareness",
            "question": "What are the potential negative effects of media coverage during a disaster? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Creating unnecessary panic through exaggeration", "isCorrect": true },
                { "id": "b", "text": "Biased coverage for sensationalism", "isCorrect": true },
                { "id": "c", "text": "Alerting the international community for donations", "isCorrect": false },
                { "id": "d", "text": "Convergence of media personnel causing congestion", "isCorrect": true }
            ],
            "partialCredit": true,
            "explanation": "While media aids in fundraising (positive), it can also cause panic, bias, and logistical congestion (negative)."
        },
        {
            "id": "t6-q3",
            "type": "true-false",
            "topicId": "topic-06",
            "topicName": "Education & Awareness",
            "question": "Indigenous knowledge systems, such as traditional weather forecasting or herbal medicine, should be ignored in favor of modern technology during awareness campaigns.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "Indigenous knowledge is a vital resource. Integrating it makes the community more receptive and utilizes proven local coping strategies."
        },
        {
            "id": "t6-q4",
            "type": "matching",
            "topicId": "topic-06",
            "topicName": "Education & Awareness",
            "question": "Match the stakeholder to their primary role in community-based disaster management:",
            "points": 10,
            "pairs": [
                { "id": "p1", "left": "Community Workers", "right": "Reliable arms of local govt for implementation" },
                { "id": "p2", "left": "Government", "right": "Prime responsibility for policy and legislation" },
                { "id": "p3", "left": "Trainers", "right": "Facilitate awareness training and skills transfer" },
                { "id": "p4", "left": "NGOs", "right": "Provide networks, professionals, and activism" }
            ]
        }
    ]
});