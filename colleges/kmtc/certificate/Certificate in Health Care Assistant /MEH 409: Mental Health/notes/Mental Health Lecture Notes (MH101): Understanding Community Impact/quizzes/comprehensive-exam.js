registerQuiz("comprehensive-exam", {
    "schemaVersion": "1.0",
    "quizId": "comprehensive-exam",
    "metadata": {
        "title": "Comprehensive Final Exam",
        "description": "Final assessment covering all modules of the Mental Health Lecture Notes (MH101).",
        "examType": "comprehensive",
        "topicsCovered": [
            "topic-01",
            "topic-02",
            "topic-03",
            "topic-04",
            "topic-05"
        ],
        "difficulty": "advanced",
        "estimatedTime": 45,
        "passingScore": 75,
        "createdAt": "2026-01-09T12:00:00Z",
        "tags": ["final", "comprehensive", "mh101", "community-health"]
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
        // TOPIC 1: Foundations
        {
            "id": "t1-q1",
            "type": "multiple-choice",
            "topicId": "topic-01",
            "topicName": "Foundations of Mental Health",
            "question": "Which of the following best defines 'Mental Health' according to the lecture notes?",
            "points": 4,
            "options": [
                { "id": "a", "text": "The absence of mental disorders or disabilities.", "isCorrect": false },
                { "id": "b", "text": "A state of complete emotional, psychological, and social well-being.", "isCorrect": true },
                { "id": "c", "text": " The ability to suppress emotions and work without interruption.", "isCorrect": false },
                { "id": "d", "text": "A condition treated exclusively in psychiatric hospitals.", "isCorrect": false }
            ],
            "explanation": "Mental health is defined as a state of complete emotional, psychological, and social well-being, influencing how people think, feel, and behave."
        },
        {
            "id": "t1-q2",
            "type": "multiple-select",
            "topicId": "topic-01",
            "topicName": "Foundations of Mental Health",
            "question": "Select all factors considered 'Social Determinants of Mental Health':",
            "points": 4,
            "options": [
                { "id": "a", "text": "Poverty and economic status", "isCorrect": true },
                { "id": "b", "text": "Housing and environment", "isCorrect": true },
                { "id": "c", "text": "Genetic predisposition", "isCorrect": false },
                { "id": "d", "text": "Education access", "isCorrect": true }
            ],
            "explanation": "Social determinants include economic factors (poverty), environment (housing), and education. Genetic predisposition is a biological factor, not a social determinant."
        },
        {
            "id": "t1-q3",
            "type": "matching",
            "topicId": "topic-01",
            "topicName": "Foundations of Mental Health",
            "question": "Match the core principle of community mental health to its description:",
            "points": 4,
            "pairs": [
                { "id": "p1", "left": "Equity", "right": "Ensure services are accessible to all regardless of status" },
                { "id": "p2", "left": "Integration", "right": "Combine mental health services with general health care" },
                { "id": "p3", "left": "Empowerment", "right": "Enable individuals/communities to control their mental health" },
                { "id": "p4", "left": "Continuity", "right": "Provide long-term support and follow-up" }
            ]
        },
        {
            "id": "t1-q4",
            "type": "fill-blank",
            "topicId": "topic-01",
            "topicName": "Foundations of Mental Health",
            "question": "One of the key goals of community mental health is to reduce __b1__ and discrimination related to mental health issues.",
            "points": 4,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["stigma", "Stigma"], "caseSensitive": false }
            ],
            "explanation": "Reducing stigma is a primary goal to encourage help-seeking behaviors and social integration."
        },
        {
            "id": "t1-q5",
            "type": "true-false",
            "topicId": "topic-01",
            "topicName": "Foundations of Mental Health",
            "question": "Community-based mental health care focuses solely on clinical treatment and excludes social support.",
            "points": 4,
            "correctAnswer": false,
            "explanation": "Community-based care is holistic; it combines clinical treatment with social support, education, and rehabilitation."
        },

        // TOPIC 2: Strategies
        {
            "id": "t2-q1",
            "type": "multiple-choice",
            "topicId": "topic-02",
            "topicName": "Strategies & Resources",
            "question": "What is a primary benefit of integrating mental health into primary health care?",
            "points": 4,
            "options": [
                { "id": "a", "text": "It eliminates the need for psychiatrists.", "isCorrect": false },
                { "id": "b", "text": "It reduces the separation between physical and mental health care.", "isCorrect": true },
                { "id": "c", "text": "It increases the cost of medical services.", "isCorrect": false },
                { "id": "d", "text": "It restricts services to urban hospitals only.", "isCorrect": false }
            ],
            "explanation": "Integration reduces the separation between physical and mental health, promotes holistic treatment, and increases access in rural areas."
        },
        {
            "id": "t2-q2",
            "type": "multiple-select",
            "topicId": "topic-02",
            "topicName": "Strategies & Resources",
            "question": "Which of the following are functions of Peer Support Groups? (Select all that apply)",
            "points": 4,
            "options": [
                { "id": "a", "text": "Prescribing medication", "isCorrect": false },
                { "id": "b", "text": "Sharing lived experiences", "isCorrect": true },
                { "id": "c", "text": "Reducing feelings of isolation", "isCorrect": true },
                { "id": "d", "text": "Providing emergency medical surgery", "isCorrect": false }
            ],
            "explanation": "Peer support groups focus on sharing experiences, offering emotional support, and reducing isolation. They do not perform medical procedures or prescribe medication."
        },
        {
            "id": "t2-q3",
            "type": "matching",
            "topicId": "topic-02",
            "topicName": "Strategies & Resources",
            "question": "Match the resource to its primary definition:",
            "points": 4,
            "pairs": [
                { "id": "p1", "left": "Mental Health Clinic", "right": "Facility for diagnosis, therapy, and psychiatric care" },
                { "id": "p2", "left": "Crisis Program", "right": "Immediate intervention for acute distress" },
                { "id": "p3", "left": "EAP", "right": "Employer-sponsored confidential counseling" },
                { "id": "p4", "left": "Telehealth", "right": "Remote care via phone or video" }
            ]
        },
        {
            "id": "t2-q4",
            "type": "true-false",
            "topicId": "topic-02",
            "topicName": "Strategies & Resources",
            "question": "Policy advocacy involves pushing for legislation that ensures funding and protects the rights of individuals with mental health conditions.",
            "points": 4,
            "correctAnswer": true,
            "explanation": "Policy advocacy targets systemic changes, funding, and legal protections to improve community mental health."
        },
        {
            "id": "t2-q5",
            "type": "fill-blank",
            "topicId": "topic-02",
            "topicName": "Strategies & Resources",
            "question": "Access to a healthy __b1__ promotes well-being by reducing stressors like noise, pollution, and overcrowding.",
            "points": 4,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["environment", "Environment"], "caseSensitive": false }
            ],
            "explanation": "A healthy environment (green spaces, clean air, safety) is a key strategy for promoting mental well-being."
        },

        // TOPIC 3: Impact
        {
            "id": "t3-q1",
            "type": "multiple-choice",
            "topicId": "topic-03",
            "topicName": "Impact of Disorders",
            "question": "Which of the following is considered an 'Economic Cost' of mental health disorders on the community?",
            "points": 4,
            "options": [
                { "id": "a", "text": "Social isolation of families", "isCorrect": false },
                { "id": "b", "text": "Loss of workforce productivity (absenteeism)", "isCorrect": true },
                { "id": "c", "text": "Increased sibling rivalry", "isCorrect": false },
                { "id": "d", "text": "Sleep disturbances", "isCorrect": false }
            ],
            "explanation": "Loss of productivity and increased demand on healthcare systems are direct economic costs to the community."
        },
        {
            "id": "t3-q2",
            "type": "multiple-select",
            "topicId": "topic-03",
            "topicName": "Impact of Disorders",
            "question": "How can mental health disorders impact families? (Select all that apply)",
            "points": 4,
            "options": [
                { "id": "a", "text": "Financial strain due to treatment costs", "isCorrect": true },
                { "id": "b", "text": "Emotional burden (stress, guilt)", "isCorrect": true },
                { "id": "c", "text": "Disruption of family roles/dynamics", "isCorrect": true },
                { "id": "d", "text": "Guaranteed improvement in communication", "isCorrect": false }
            ],
            "explanation": "Families often face financial strain, emotional burden, and role disruption. Communication is often strained, not improved."
        },
        {
            "id": "t3-q3",
            "type": "true-false",
            "topicId": "topic-03",
            "topicName": "Impact of Disorders",
            "question": "Generational effects suggest that parental mental health disorders have no impact on children's development.",
            "points": 4,
            "correctAnswer": false,
            "explanation": "Generational effects are significant; parental disorders can negatively impact children's development and academic performance."
        },
        {
            "id": "t3-q4",
            "type": "fill-blank",
            "topicId": "topic-03",
            "topicName": "Impact of Disorders",
            "question": "Communities often isolate individuals with mental health issues due to __b1__, which reduces their social integration.",
            "points": 4,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["stigma", "discrimination", "Stigma"], "caseSensitive": false }
            ],
            "explanation": "Stigma leads to social exclusion and is a major barrier to recovery and community participation."
        },
        {
            "id": "t3-q5",
            "type": "multiple-choice",
            "topicId": "topic-03",
            "topicName": "Impact of Disorders",
            "question": "Physical health effects of mental illness often include:",
            "points": 4,
            "options": [
                { "id": "a", "text": "Enhanced immune system", "isCorrect": false },
                { "id": "b", "text": "Decreased risk of chronic disease", "isCorrect": false },
                { "id": "c", "text": "Increased risk of heart disease and diabetes", "isCorrect": true },
                { "id": "d", "text": "Improved sleep patterns", "isCorrect": false }
            ],
            "explanation": "Mental illness increases the risk of co-morbidities like heart disease, diabetes, and hypertension."
        },

        // TOPIC 4: Crisis Intervention
        {
            "id": "t4-q1",
            "type": "ordering",
            "topicId": "topic-04",
            "topicName": "Crisis Intervention",
            "question": "Arrange the steps for responding to suicidal ideation in logical order:",
            "points": 4,
            "items": [
                { "id": "1", "text": "Take the threat seriously", "correctPosition": 1 },
                { "id": "2", "text": "Ask direct questions (e.g., Do you have a plan?)", "correctPosition": 2 },
                { "id": "3", "text": "Ensure safety (remove harmful objects)", "correctPosition": 3 },
                { "id": "4", "text": "Seek professional help / Contact emergency services", "correctPosition": 4 }
            ],
            "explanation": "First acknowledge the threat, then assess immediate risk, ensure physical safety, and finally connect to professional care."
        },
        {
            "id": "t4-q2",
            "type": "multiple-select",
            "topicId": "topic-04",
            "topicName": "Crisis Intervention",
            "question": "Which of the following are key principles of 'Active Listening'?",
            "points": 4,
            "options": [
                { "id": "a", "text": "Interrupting to give advice immediately", "isCorrect": false },
                { "id": "b", "text": "Maintaining neutral body language", "isCorrect": true },
                { "id": "c", "text": "Reflecting feelings back to the speaker", "isCorrect": true },
                { "id": "d", "text": "Using open-ended questions", "isCorrect": true }
            ],
            "explanation": "Active listening involves reflecting feelings, open-ended questions, and neutral body language. Interrupting inhibits communication."
        },
        {
            "id": "t4-q3",
            "type": "multiple-choice",
            "topicId": "topic-04",
            "topicName": "Crisis Intervention",
            "question": "In a substance abuse crisis, what is the immediate response for a suspected overdose?",
            "points": 4,
            "options": [
                { "id": "a", "text": "Offer the person water", "isCorrect": false },
                { "id": "b", "text": "Call emergency services immediately", "isCorrect": true },
                { "id": "c", "text": "Wait to see if they wake up", "isCorrect": false },
                { "id": "d", "text": "Confront them about their addiction", "isCorrect": false }
            ],
            "explanation": "Overdose is life-threatening. Calling emergency services is the priority action."
        },
        {
            "id": "t4-q4",
            "type": "fill-blank",
            "topicId": "topic-04",
            "topicName": "Crisis Intervention",
            "question": "__b1__ refers to strategies aimed at reducing the intensity of a crisis, calming the individual, and preventing harm.",
            "points": 4,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["De-escalation", "de-escalation", "Deescalation"], "caseSensitive": false }
            ],
            "explanation": "De-escalation techniques (calm tone, validating feelings) are used to lower the emotional temperature of a crisis."
        },
        {
            "id": "t4-q5",
            "type": "true-false",
            "topicId": "topic-04",
            "topicName": "Crisis Intervention",
            "question": "When navigating mental health systems, 'Primary Care' providers often serve as the first point of contact for referrals.",
            "points": 4,
            "correctAnswer": true,
            "explanation": "Primary care doctors often perform initial screenings and provide referrals to specialized mental health providers."
        },

        // TOPIC 5: Cultural Competence
        {
            "id": "t5-q1",
            "type": "multiple-choice",
            "topicId": "topic-05",
            "topicName": "Cultural Competence",
            "question": "What is 'Cultural Humility' in the context of mental health care?",
            "points": 4,
            "options": [
                { "id": "a", "text": "Knowing everything about every culture", "isCorrect": false },
                { "id": "b", "text": "Approaching individuals with openness and a willingness to learn", "isCorrect": true },
                { "id": "c", "text": "Forcing Western medical practices on all patients", "isCorrect": false },
                { "id": "d", "text": "Ignoring cultural differences to treat everyone the same", "isCorrect": false }
            ],
            "explanation": "Cultural humility admits that one cannot know everything about another culture and emphasizes ongoing learning and respect."
        },
        {
            "id": "t5-q2",
            "type": "multiple-select",
            "topicId": "topic-05",
            "topicName": "Cultural Competence",
            "question": "What are key functions of Community Health Workers (CHWs)?",
            "points": 4,
            "options": [
                { "id": "a", "text": "Building trust within the community", "isCorrect": true },
                { "id": "b", "text": "Providing referrals to services", "isCorrect": true },
                { "id": "c", "text": "Performing complex surgeries", "isCorrect": false },
                { "id": "d", "text": "Educating about mental health to reduce stigma", "isCorrect": true }
            ],
            "explanation": "CHWs educate, support, refer, advocate, and build trust. They do not perform medical procedures like surgery."
        },
        {
            "id": "t5-q3",
            "type": "true-false",
            "topicId": "topic-05",
            "topicName": "Cultural Competence",
            "question": "In collectivist cultures, mental health concerns are often viewed solely as an individual's personal problem.",
            "points": 4,
            "correctAnswer": false,
            "explanation": "In collectivist cultures, mental health is often seen as affecting the family or community, making family involvement in treatment crucial."
        },
        {
            "id": "t5-q4",
            "type": "fill-blank",
            "topicId": "topic-05",
            "topicName": "Cultural Competence",
            "question": "Using __b1__ or bilingual staff is a key strategy for overcoming language barriers in culturally competent care.",
            "points": 4,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["interpreters", "translators", "Interpreters"], "caseSensitive": false }
            ],
            "explanation": "Language access via interpreters is fundamental to accurate diagnosis and effective treatment in diverse populations."
        },
        {
            "id": "t5-q5",
            "type": "multiple-choice",
            "topicId": "topic-05",
            "topicName": "Cultural Competence",
            "question": "Which of the following helps reduce mental health stigma in diverse communities?",
            "points": 4,
            "options": [
                { "id": "a", "text": "Avoiding the topic of mental health", "isCorrect": false },
                { "id": "b", "text": "Engaging community leaders and religious figures", "isCorrect": true },
                { "id": "c", "text": "Using complex medical jargon", "isCorrect": false },
                { "id": "d", "text": "Isolating individuals with symptoms", "isCorrect": false }
            ],
            "explanation": "Involving trusted community leaders helps normalize mental health conversations and challenges misconceptions in a culturally sensitive way."
        }
    ]
});