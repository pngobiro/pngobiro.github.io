registerQuiz("comprehensive-exam", {
    "schemaVersion": "1.0",
    "quizId": "comprehensive-exam",
    "metadata": {
        "title": "Comprehensive Final Exam",
        "description": "Final assessment covering Medical Sociology, Institutions, Culture, Psychology, Social Interaction, and Social Change.",
        "examType": "comprehensive",
        "topicsCovered": [
            "topic-01-medical-sociology",
            "topic-02-community-health",
            "topic-03-culture-socialization",
            "topic-04-psychology-development",
            "topic-05-social-interaction",
            "topic-06-social-change"
        ],
        "difficulty": "advanced",
        "estimatedTime": 90,
        "passingScore": 70,
        "createdAt": "2026-01-13T12:00:00Z",
        "tags": ["final", "exam", "sociology", "psychology", "health"]
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
        /* TOPIC 01: MEDICAL SOCIOLOGY */
        {
            "id": "t01-q1",
            "type": "multiple-choice",
            "question": "Which term describes the view that one's own culture is superior to others?",
            "points": 5,
            "topicId": "topic-01-medical-sociology",
            "topicName": "Medical Sociology",
            "options": [
                { "id": "a", "text": "Cultural Relativism", "isCorrect": false },
                { "id": "b", "text": "Ethnocentrism", "isCorrect": true },
                { "id": "c", "text": "Acculturation", "isCorrect": false },
                { "id": "d", "text": "Socialization", "isCorrect": false }
            ],
            "explanation": "Ethnocentrism is the tendency to view one's own culture as the center of everything and to judge others by one's own standards."
        },
        {
            "id": "t01-q2",
            "type": "multiple-select",
            "question": "Which of the following are determinants of culture? (Select all that apply)",
            "points": 5,
            "topicId": "topic-01-medical-sociology",
            "topicName": "Medical Sociology",
            "options": [
                { "id": "a", "text": "Socialization", "isCorrect": true },
                { "id": "b", "text": "Environment", "isCorrect": true },
                { "id": "c", "text": "Genetics", "isCorrect": false },
                { "id": "d", "text": "Interaction", "isCorrect": true }
            ],
            "explanation": "The determinants of culture are often remembered by the acronym SEMI: Socialization, Environment, Modification, and Interaction."
        },
        {
            "id": "t01-q3",
            "type": "true-false",
            "question": "The 'Etic' approach to disease causation is based on cultural ideas that are largely personalistic.",
            "points": 5,
            "topicId": "topic-01-medical-sociology",
            "topicName": "Medical Sociology",
            "correctAnswer": false,
            "explanation": "False. The 'Etic' approach is the biomedical/naturalistic model. The 'Emic' approach is the anthropological/personalistic model."
        },

        /* TOPIC 02: INSTITUTIONS */
        {
            "id": "t02-q1",
            "type": "matching",
            "question": "Match the social institution with its primary need:",
            "points": 10,
            "topicId": "topic-02-community-health",
            "topicName": "Institutions & Roles",
            "pairs": [
                { "id": "p1", "left": "Family", "right": "Reproduction and socialization" },
                { "id": "p2", "left": "Economy", "right": "Production of goods and services" },
                { "id": "p3", "left": "Government", "right": "Social order and law" },
                { "id": "p4", "left": "Religion", "right": "Shared values and spiritual meaning" }
            ],
            "explanation": "Each social institution evolved to meet specific basic needs of society, such as regulating reproduction (family) or maintaining order (government)."
        },
        {
            "id": "t02-q2",
            "type": "multiple-choice",
            "question": "Which leadership style involves the leader attempting to control all power and decision-making?",
            "points": 5,
            "topicId": "topic-02-community-health",
            "topicName": "Institutions & Roles",
            "options": [
                { "id": "a", "text": "Democratic", "isCorrect": false },
                { "id": "b", "text": "Laissez-faire", "isCorrect": false },
                { "id": "c", "text": "Autocratic", "isCorrect": true },
                { "id": "d", "text": "Participative", "isCorrect": false }
            ],
            "explanation": "Autocratic (Authoritarian) leaders control all power and enforce laws without consulting subordinates."
        },
        {
            "id": "t02-q3",
            "type": "short-answer",
            "question": "Explain the difference between an 'Association' and an 'Institution'.",
            "points": 10,
            "topicId": "topic-02-community-health",
            "topicName": "Institutions & Roles",
            "keywords": ["association", "group", "formal", "institution", "procedure", "rules", "structure"],
            "minKeywords": 2,
            "modelAnswer": "An association is a specific organized group of people (like a specific hospital or club), while an institution is a system of procedures, rules, and established practices (like 'Medicine' or 'Education' as a whole).",
            "explanation": "Associations are the concrete groups; Institutions are the abstract systems and rules that govern behavior."
        },

        /* TOPIC 03: CULTURE & SOCIALIZATION */
        {
            "id": "t03-q1",
            "type": "fill-blank",
            "question": "Norms that are strictly enforced because they are thought to be essential to core values are called __b1__, while casual norms that are not strictly enforced are called __b2__.",
            "points": 10,
            "topicId": "topic-03-culture-socialization",
            "topicName": "Culture & Socialization",
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["mores"], "caseSensitive": false },
                { "id": "b2", "acceptedAnswers": ["folkways"], "caseSensitive": false }
            ],
            "explanation": "Mores have great moral significance (e.g., prohibitions against theft), while folkways are casual customs (e.g., table manners)."
        },
        {
            "id": "t03-q2",
            "type": "multiple-choice",
            "question": "Which of the following is considered the primary agent of socialization during infancy?",
            "points": 5,
            "topicId": "topic-03-culture-socialization",
            "topicName": "Culture & Socialization",
            "options": [
                { "id": "a", "text": "School", "isCorrect": false },
                { "id": "b", "text": "Peer Group", "isCorrect": false },
                { "id": "c", "text": "The Family", "isCorrect": true },
                { "id": "d", "text": "Mass Media", "isCorrect": false }
            ],
            "explanation": "The family is the first and most fundamental agent of socialization, especially in the early years of life."
        },
        {
            "id": "t03-q3",
            "type": "true-false",
            "question": "Cultural Lag occurs when material culture changes faster than non-material culture.",
            "points": 5,
            "topicId": "topic-03-culture-socialization",
            "topicName": "Culture & Socialization",
            "correctAnswer": true,
            "explanation": "True. Technology (material) often advances faster than the laws, ethics, and beliefs (non-material) needed to regulate it."
        },

        /* TOPIC 04: PSYCHOLOGY */
        {
            "id": "t04-q1",
            "type": "matching",
            "question": "Match the part of Freud's personality structure to its function:",
            "points": 10,
            "topicId": "topic-04-psychology-development",
            "topicName": "Psychology & Development",
            "pairs": [
                { "id": "p1", "left": "Id", "right": "Pleasure principle, unconscious instincts" },
                { "id": "p2", "left": "Ego", "right": "Reality principle, balances needs" },
                { "id": "p3", "left": "Superego", "right": "Moral principle, conscience" }
            ],
            "explanation": "The Id is instinctual, the Superego is the moral conscience, and the Ego balances the two against reality."
        },
        {
            "id": "t04-q2",
            "type": "ordering",
            "question": "Arrange Piaget's stages of cognitive development in the correct order from birth to adulthood:",
            "points": 10,
            "topicId": "topic-04-psychology-development",
            "topicName": "Psychology & Development",
            "items": [
                { "id": "i1", "text": "Sensorimotor Stage", "correctPosition": 1 },
                { "id": "i2", "text": "Pre-operational Stage", "correctPosition": 2 },
                { "id": "i3", "text": "Concrete Operational Stage", "correctPosition": 3 },
                { "id": "i4", "text": "Formal Operational Stage", "correctPosition": 4 }
            ],
            "explanation": "Piaget's stages proceed from Sensorimotor (0-2) -> Pre-operational (2-7) -> Concrete Operational (7-11) -> Formal Operational (12+)."
        },
        {
            "id": "t04-q3",
            "type": "multiple-choice",
            "question": "According to Erik Erikson, what is the primary conflict during the first stage of life (infancy)?",
            "points": 5,
            "topicId": "topic-04-psychology-development",
            "topicName": "Psychology & Development",
            "options": [
                { "id": "a", "text": "Initiative vs. Guilt", "isCorrect": false },
                { "id": "b", "text": "Trust vs. Mistrust", "isCorrect": true },
                { "id": "c", "text": "Autonomy vs. Shame", "isCorrect": false },
                { "id": "d", "text": "Identity vs. Role Confusion", "isCorrect": false }
            ],
            "explanation": "Infants learn to trust or mistrust their caregivers based on how well their basic needs are met."
        },

        /* TOPIC 05: SOCIAL INTERACTION */
        {
            "id": "t05-q1",
            "type": "ordering",
            "question": "Order the stages of Bruce Tuckman's group development model:",
            "points": 10,
            "topicId": "topic-05-social-interaction",
            "topicName": "Social Interaction",
            "items": [
                { "id": "i1", "text": "Forming", "correctPosition": 1 },
                { "id": "i2", "text": "Storming", "correctPosition": 2 },
                { "id": "i3", "text": "Norming", "correctPosition": 3 },
                { "id": "i4", "text": "Performing", "correctPosition": 4 },
                { "id": "i5", "text": "Adjourning", "correctPosition": 5 }
            ],
            "explanation": "Groups typically progress from Forming -> Storming -> Norming -> Performing -> Adjourning."
        },
        {
            "id": "t05-q2",
            "type": "multiple-choice",
            "question": "Which phenomenon occurs when highly cohesive groups make poor decisions due to a lack of alternative viewpoints?",
            "points": 5,
            "topicId": "topic-05-social-interaction",
            "topicName": "Social Interaction",
            "options": [
                { "id": "a", "text": "Social Loafing", "isCorrect": false },
                { "id": "b", "text": "Groupthink", "isCorrect": true },
                { "id": "c", "text": "Social Facilitation", "isCorrect": false },
                { "id": "d", "text": "Role Conflict", "isCorrect": false }
            ],
            "explanation": "Groupthink is the tendency for cohesive groups to prioritize consensus over critical evaluation of alternatives."
        },
        {
            "id": "t05-q3",
            "type": "multiple-select",
            "question": "Which of the following are characteristics of Primary Groups? (Select all that apply)",
            "points": 5,
            "topicId": "topic-05-social-interaction",
            "topicName": "Social Interaction",
            "options": [
                { "id": "a", "text": "Face-to-face interaction", "isCorrect": true },
                { "id": "b", "text": "Small size", "isCorrect": true },
                { "id": "c", "text": "Impersonal relationships", "isCorrect": false },
                { "id": "d", "text": "Emotional involvement", "isCorrect": true }
            ],
            "explanation": "Primary groups (like family) are small, intimate, and emotional. Secondary groups are larger and impersonal."
        },

        /* TOPIC 06: SOCIAL CHANGE */
        {
            "id": "t06-q1",
            "type": "multiple-choice",
            "question": "Which theory suggests that social change is inevitable due to competition between groups for resources?",
            "points": 5,
            "topicId": "topic-06-social-change",
            "topicName": "Social Change",
            "options": [
                { "id": "a", "text": "Cyclic Theory", "isCorrect": false },
                { "id": "b", "text": "Structural Functionalism", "isCorrect": false },
                { "id": "c", "text": "Conflict Theory", "isCorrect": true },
                { "id": "d", "text": "Modernization Theory", "isCorrect": false }
            ],
            "explanation": "Conflict theory views society as a competition for limited resources, where conflict drives change."
        },
        {
            "id": "t06-q2",
            "type": "multiple-select",
            "question": "Identify the barriers to social change from the list below: (Select all that apply)",
            "points": 5,
            "topicId": "topic-06-social-change",
            "topicName": "Social Change",
            "options": [
                { "id": "a", "text": "Cultural barriers (tradition)", "isCorrect": true },
                { "id": "b", "text": "Vested interests", "isCorrect": true },
                { "id": "c", "text": "Technological innovation", "isCorrect": false },
                { "id": "d", "text": "Economic costs", "isCorrect": true }
            ],
            "explanation": "Barriers include tradition (cultural), economic costs, and vested interests. Innovation is usually a *cause* of change."
        },
        {
            "id": "t06-q3",
            "type": "fill-blank",
            "question": "The theory that states societies move from simple to complex forms in a forward direction is called __b1__ theory.",
            "points": 5,
            "topicId": "topic-06-social-change",
            "topicName": "Social Change",
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["linear", "evolutionary"], "caseSensitive": false }
            ],
            "explanation": "Linear or evolutionary theory suggests change happens in a specific direction, usually from primitive to modern."
        }
    ]
});