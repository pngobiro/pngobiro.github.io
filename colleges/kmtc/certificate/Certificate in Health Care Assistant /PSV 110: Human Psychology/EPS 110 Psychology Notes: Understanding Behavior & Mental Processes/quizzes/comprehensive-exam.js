registerQuiz("comprehensive-exam", {
    "schemaVersion": "1.0",
    "quizId": "comprehensive-exam",
    "metadata": {
        "title": "Comprehensive Final Exam",
        "description": "A comprehensive assessment covering all 9 topics of EPS 110: Introduction to Psychology.",
        "examType": "comprehensive",
        "topicsCovered": [
            "topic-01", "topic-02", "topic-03", 
            "topic-04", "topic-05", "topic-06", 
            "topic-07", "topic-08", "topic-09"
        ],
        "difficulty": "advanced",
        "estimatedTime": 45,
        "passingScore": 70,
        "createdAt": "2026-01-10T12:00:00Z",
        "tags": ["final", "exam", "comprehensive", "psychology"]
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
        /* ================= TOPIC 1: FOUNDATIONS ================= */
        {
            "id": "t1-q1",
            "type": "multiple-choice",
            "topicId": "topic-01",
            "topicName": "Foundations of Psychology",
            "question": "Which school of thought utilized 'introspection' to analyze the structure of the conscious mind?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Functionalism", "isCorrect": false },
                { "id": "b", "text": "Structuralism", "isCorrect": true },
                { "id": "c", "text": "Behaviorism", "isCorrect": false },
                { "id": "d", "text": "Psychoanalysis", "isCorrect": false }
            ],
            "explanation": "Structuralism, founded by Wilhelm Wundt, sought to break experiences into basic elements using introspection."
        },
        {
            "id": "t1-q2",
            "type": "matching",
            "topicId": "topic-01",
            "topicName": "Foundations of Psychology",
            "question": "Match the psychologist to their perspective:",
            "points": 2,
            "pairs": [
                { "id": "p1", "left": "Sigmund Freud", "right": "Psychoanalytic" },
                { "id": "p2", "left": "B.F. Skinner", "right": "Behavioral" },
                { "id": "p3", "left": "Carl Rogers", "right": "Humanistic" },
                { "id": "p4", "left": "William James", "right": "Functionalism" }
            ]
        },
        {
            "id": "t1-q3",
            "type": "multiple-choice",
            "topicId": "topic-01",
            "topicName": "Foundations of Psychology",
            "question": "Which goal of psychology involves altering conditions that affect behavior?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Description", "isCorrect": false },
                { "id": "b", "text": "Explanation", "isCorrect": false },
                { "id": "c", "text": "Prediction", "isCorrect": false },
                { "id": "d", "text": "Control", "isCorrect": true }
            ],
            "explanation": "Control (or influence) involves applying psychological knowledge to alter outcomes, such as helping a student overcome anxiety."
        },

        /* ================= TOPIC 2: RESEARCH METHODS ================= */
        {
            "id": "t2-q1",
            "type": "true-false",
            "topicId": "topic-02",
            "topicName": "Research Methods",
            "question": "A strong positive correlation between two variables proves that one causes the other.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "Correlation does not imply causation. It only indicates a relationship between variables."
        },
        {
            "id": "t2-q2",
            "type": "multiple-choice",
            "topicId": "topic-02",
            "topicName": "Research Methods",
            "question": "In an experiment, which variable is manipulated by the researcher?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Dependent Variable", "isCorrect": false },
                { "id": "b", "text": "Independent Variable", "isCorrect": true },
                { "id": "c", "text": "Extraneous Variable", "isCorrect": false },
                { "id": "d", "text": "Control Variable", "isCorrect": false }
            ],
            "explanation": "The Independent Variable (IV) is manipulated to observe its effect on the Dependent Variable (DV)."
        },
        {
            "id": "t2-q3",
            "type": "ordering",
            "topicId": "topic-02",
            "topicName": "Research Methods",
            "question": "Arrange the steps of the scientific investigation in the correct order:",
            "points": 2,
            "items": [
                { "id": "i1", "text": "Conceptualizing a problem", "correctPosition": 1 },
                { "id": "i2", "text": "Formulating a hypothesis", "correctPosition": 2 },
                { "id": "i3", "text": "Collecting data", "correctPosition": 3 },
                { "id": "i4", "text": "Analyzing data", "correctPosition": 4 },
                { "id": "i5", "text": "Drawing conclusions", "correctPosition": 5 }
            ]
        },

        /* ================= TOPIC 3: BIOLOGICAL BASIS ================= */
        {
            "id": "t3-q1",
            "type": "multiple-choice",
            "topicId": "topic-03",
            "topicName": "Heredity & Environment",
            "question": "Which chromosomal abnormality is characterized by an extra chromosome on the 21st pair?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Turner's Syndrome", "isCorrect": false },
                { "id": "b", "text": "Klinefelter's Syndrome", "isCorrect": false },
                { "id": "c", "text": "Down Syndrome", "isCorrect": true },
                { "id": "d", "text": "Supermale Syndrome", "isCorrect": false }
            ],
            "explanation": "Down Syndrome (Trisomy 21) is caused by the presence of a third copy of chromosome 21."
        },
        {
            "id": "t3-q2",
            "type": "fill-blank",
            "topicId": "topic-03",
            "topicName": "Heredity & Environment",
            "question": "A person's genetic heritage is called their __1__, while the observable expression of those genes is called their __2__.",
            "points": 2,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["genotype"], "caseSensitive": false },
                { "id": "2", "acceptedAnswers": ["phenotype"], "caseSensitive": false }
            ],
            "explanation": "Genotype refers to the genetic makeup, while Phenotype refers to observable characteristics like height or eye color."
        },
        {
            "id": "t3-q3",
            "type": "multiple-choice",
            "topicId": "topic-03",
            "topicName": "Heredity & Environment",
            "question": "Identical twins are also known as:",
            "points": 1,
            "options": [
                { "id": "a", "text": "Dizygotic twins", "isCorrect": false },
                { "id": "b", "text": "Monozygotic twins", "isCorrect": true },
                { "id": "c", "text": "Fraternal twins", "isCorrect": false },
                { "id": "d", "text": "Siblings", "isCorrect": false }
            ],
            "explanation": "Identical twins develop from a single fertilized egg (Monozygotic), sharing 100% of their genes."
        },

        /* ================= TOPIC 4: PERCEPTION ================= */
        {
            "id": "t4-q1",
            "type": "multiple-choice",
            "topicId": "topic-04",
            "topicName": "Sensation & Perception",
            "question": "Which Gestalt principle explains why we perceive 'XXX XXX' as two groups rather than six separate letters?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Closure", "isCorrect": false },
                { "id": "b", "text": "Similarity", "isCorrect": false },
                { "id": "c", "text": "Proximity", "isCorrect": true },
                { "id": "d", "text": "Continuity", "isCorrect": false }
            ],
            "explanation": "The principle of Proximity states that things that are near one another seem to belong together."
        },
        {
            "id": "t4-q2",
            "type": "image-based",
            "topicId": "topic-04",
            "topicName": "Sensation & Perception",
            "question": "This image demonstrates which perceptual illusion?",
            "points": 1,
            "imageUrl": "assets/images/image-20260110-a88f0796.jpeg",
            "imageAlt": "Lines with arrowheads pointing in and out",
            "options": [
                { "id": "a", "text": "Ponzo Illusion", "isCorrect": false },
                { "id": "b", "text": "Muller-Lyer Illusion", "isCorrect": true },
                { "id": "c", "text": "Moon Illusion", "isCorrect": false },
                { "id": "d", "text": "Horizontal-Vertical Illusion", "isCorrect": false }
            ],
            "explanation": "The Muller-Lyer illusion causes lines of equal length to appear different based on the direction of the arrowheads."
        },
        {
            "id": "t4-q3",
            "type": "true-false",
            "topicId": "topic-04",
            "topicName": "Sensation & Perception",
            "question": "Sensory adaptation occurs when our sensitivity to an unchanging stimulus increases over time.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "Sensory adaptation involves *diminishing* sensitivity to unchanging stimuli (e.g., getting used to a bad smell)."
        },

        /* ================= TOPIC 5: LEARNING ================= */
        {
            "id": "t5-q1",
            "type": "multiple-choice",
            "topicId": "topic-05",
            "topicName": "Learning Theories",
            "question": "In Pavlov's experiment, what was the Conditioned Stimulus (CS)?",
            "points": 1,
            "options": [
                { "id": "a", "text": "The meat powder", "isCorrect": false },
                { "id": "b", "text": "Salivation", "isCorrect": false },
                { "id": "c", "text": "The bell/tone", "isCorrect": true },
                { "id": "d", "text": "The footsteps", "isCorrect": false }
            ],
            "explanation": "The bell started as a neutral stimulus and became the Conditioned Stimulus (CS) after being paired with food."
        },
        {
            "id": "t5-q2",
            "type": "matching",
            "topicId": "topic-05",
            "topicName": "Learning Theories",
            "question": "Match the type of reinforcement/punishment to its definition:",
            "points": 2,
            "pairs": [
                { "id": "p1", "left": "Positive Reinforcement", "right": "Adding a pleasant stimulus to increase behavior" },
                { "id": "p2", "left": "Negative Reinforcement", "right": "Removing an unpleasant stimulus to increase behavior" },
                { "id": "p3", "left": "Punishment", "right": "Adding an aversive stimulus to decrease behavior" }
            ]
        },
        {
            "id": "t5-q3",
            "type": "multiple-choice",
            "topicId": "topic-05",
            "topicName": "Learning Theories",
            "question": "Which schedule of reinforcement produces a response pattern highly resistant to extinction (e.g., gambling)?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Fixed Ratio", "isCorrect": false },
                { "id": "b", "text": "Fixed Interval", "isCorrect": false },
                { "id": "c", "text": "Variable Ratio", "isCorrect": true },
                { "id": "d", "text": "Continuous Reinforcement", "isCorrect": false }
            ],
            "explanation": "Variable Ratio (VR) schedules yield high response rates and are very resistant to extinction because the reward is unpredictable."
        },

        /* ================= TOPIC 6: INTELLIGENCE ================= */
        {
            "id": "t6-q1",
            "type": "fill-blank",
            "topicId": "topic-06",
            "topicName": "Intelligence",
            "question": "The formula for Intelligence Quotient (IQ) is: (__1__ / __2__) x 100.",
            "points": 2,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["MA", "Mental Age"], "caseSensitive": false },
                { "id": "2", "acceptedAnswers": ["CA", "Chronological Age"], "caseSensitive": false }
            ],
            "explanation": "IQ = (Mental Age / Chronological Age) x 100."
        },
        {
            "id": "t6-q2",
            "type": "multiple-choice",
            "topicId": "topic-06",
            "topicName": "Intelligence",
            "question": "Which type of intelligence refers to the ability to solve novel problems and is largely inherited?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Crystallized Intelligence", "isCorrect": false },
                { "id": "b", "text": "Fluid Intelligence", "isCorrect": true },
                { "id": "c", "text": "Practical Intelligence", "isCorrect": false },
                { "id": "d", "text": "Emotional Intelligence", "isCorrect": false }
            ],
            "explanation": "Fluid intelligence involves reasoning and solving new problems independent of prior knowledge."
        },
        {
            "id": "t6-q3",
            "type": "multiple-select",
            "topicId": "topic-06",
            "topicName": "Intelligence",
            "question": "Select all types of intelligence proposed by Howard Gardner (Select 3):",
            "points": 2,
            "options": [
                { "id": "a", "text": "Bodily-Kinesthetic", "isCorrect": true },
                { "id": "b", "text": "Abstract", "isCorrect": false },
                { "id": "c", "text": "Musical", "isCorrect": true },
                { "id": "d", "text": "Concrete", "isCorrect": false },
                { "id": "e", "text": "Intrapersonal", "isCorrect": true }
            ],
            "partialCredit": true
        },

        /* ================= TOPIC 7: MOTIVATION & EMOTION ================= */
        {
            "id": "t7-q1",
            "type": "ordering",
            "topicId": "topic-07",
            "topicName": "Motivation & Emotion",
            "question": "Order Maslow's Hierarchy of Needs from the bottom (most basic) to the top:",
            "points": 2,
            "items": [
                { "id": "i1", "text": "Physiological Needs", "correctPosition": 1 },
                { "id": "i2", "text": "Safety Needs", "correctPosition": 2 },
                { "id": "i3", "text": "Love and Belonging", "correctPosition": 3 },
                { "id": "i4", "text": "Esteem Needs", "correctPosition": 4 },
                { "id": "i5", "text": "Self-Actualization", "correctPosition": 5 }
            ]
        },
        {
            "id": "t7-q2",
            "type": "multiple-choice",
            "topicId": "topic-07",
            "topicName": "Motivation & Emotion",
            "question": "Which theory of emotion suggests that physiological arousal and emotional experience occur simultaneously?",
            "points": 1,
            "options": [
                { "id": "a", "text": "James-Lange Theory", "isCorrect": false },
                { "id": "b", "text": "Cannon-Bard Theory", "isCorrect": true },
                { "id": "c", "text": "Schachter-Singer Theory", "isCorrect": false },
                { "id": "d", "text": "Cognitive Appraisal Theory", "isCorrect": false }
            ],
            "explanation": "The Cannon-Bard theory states that the thalamus sends signals to the cortex (emotion) and autonomic nervous system (arousal) at the same time."
        },
        {
            "id": "t7-q3",
            "type": "multiple-choice",
            "topicId": "topic-07",
            "topicName": "Motivation & Emotion",
            "question": "A student reading a book simply because they find it fun is exhibiting:",
            "points": 1,
            "options": [
                { "id": "a", "text": "Extrinsic Motivation", "isCorrect": false },
                { "id": "b", "text": "Primary Drive", "isCorrect": false },
                { "id": "c", "text": "Intrinsic Motivation", "isCorrect": true },
                { "id": "d", "text": "Homeostasis", "isCorrect": false }
            ],
            "explanation": "Intrinsic motivation is the desire to perform an act because it is satisfying in and of itself."
        },

        /* ================= TOPIC 8: FRUSTRATION & CONFLICT ================= */
        {
            "id": "t8-q1",
            "type": "multiple-choice",
            "topicId": "topic-08",
            "topicName": "Frustration & Conflict",
            "question": "Which type of conflict is generally considered the least stressful?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Approach-Avoidance", "isCorrect": false },
                { "id": "b", "text": "Avoidance-Avoidance", "isCorrect": false },
                { "id": "c", "text": "Approach-Approach", "isCorrect": true },
                { "id": "d", "text": "Double Approach-Avoidance", "isCorrect": false }
            ],
            "explanation": "Approach-Approach conflicts involve choosing between two attractive goals, making them the easiest to resolve."
        },
        {
            "id": "t8-q2",
            "type": "matching",
            "topicId": "topic-08",
            "topicName": "Frustration & Conflict",
            "question": "Match the defense mechanism to its definition:",
            "points": 2,
            "pairs": [
                { "id": "p1", "left": "Rationalization", "right": "Giving logical excuses instead of real reasons" },
                { "id": "p2", "left": "Projection", "right": "Attributing own unacceptable traits to others" },
                { "id": "p3", "left": "Displacement", "right": "Shifting hostility to a safer target" },
                { "id": "p4", "left": "Regression", "right": "Returning to primitive/childish behaviors" }
            ]
        },
        {
            "id": "t8-q3",
            "type": "multiple-choice",
            "topicId": "topic-08",
            "topicName": "Frustration & Conflict",
            "question": "A person who is angry at their boss but goes home and yells at their spouse is displaying:",
            "points": 1,
            "options": [
                { "id": "a", "text": "Sublimation", "isCorrect": false },
                { "id": "b", "text": "Displacement", "isCorrect": true },
                { "id": "c", "text": "Reaction Formation", "isCorrect": false },
                { "id": "d", "text": "Denial", "isCorrect": false }
            ],
            "explanation": "Displacement involves directing an emotion (like anger) towards a substitute target."
        },

        /* ================= TOPIC 9: DISORDERS ================= */
        {
            "id": "t9-q1",
            "type": "true-false",
            "topicId": "topic-09",
            "topicName": "Psychological Disorders",
            "question": "Neurosis involves a loss of contact with reality.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "Neurosis involves distress and impairment but contact with reality is maintained. Psychosis involves losing contact with reality."
        },
        {
            "id": "t9-q2",
            "type": "multiple-choice",
            "topicId": "topic-09",
            "topicName": "Psychological Disorders",
            "question": "Which model suggests that a biological predisposition must combine with a stressful circumstance to cause a disorder?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Psychoanalytic Model", "isCorrect": false },
                { "id": "b", "text": "Behavioral Model", "isCorrect": false },
                { "id": "c", "text": "Diathesis-Stress Model", "isCorrect": true },
                { "id": "d", "text": "Sociocultural Model", "isCorrect": false }
            ],
            "explanation": "The Diathesis-Stress model posits that genetic vulnerability (diathesis) + environmental stress triggers the disorder."
        },
        {
            "id": "t9-q3",
            "type": "matching",
            "topicId": "topic-09",
            "topicName": "Psychological Disorders",
            "question": "Match the phobia to its fear:",
            "points": 2,
            "pairs": [
                { "id": "p1", "left": "Agoraphobia", "right": "Open/public places" },
                { "id": "p2", "left": "Claustrophobia", "right": "Closed spaces" },
                { "id": "p3", "left": "Acrophobia", "right": "Heights" },
                { "id": "p4", "left": "Xenophobia", "right": "Strangers" }
            ]
        },
        {
            "id": "t9-q4",
            "type": "multiple-choice",
            "topicId": "topic-09",
            "topicName": "Psychological Disorders",
            "question": "Hallucinations and delusions are key symptoms of:",
            "points": 1,
            "options": [
                { "id": "a", "text": "Anxiety Neurosis", "isCorrect": false },
                { "id": "b", "text": "Psychosis", "isCorrect": true },
                { "id": "c", "text": "Hysteria", "isCorrect": false },
                { "id": "d", "text": "Neurasthenia", "isCorrect": false }
            ],
            "explanation": "Psychosis is characterized by a loss of touch with reality, often manifesting as hallucinations (false sensory perceptions) and delusions (false beliefs)."
        }
    ]
});