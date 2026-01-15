registerQuiz("comprehensive-exam", {
    "schemaVersion": "1.0",
    "quizId": "comprehensive-exam",
    "metadata": {
        "title": "Comprehensive Final Exam",
        "description": "Comprehensive assessment covering Mental Health concepts, Legal issues, Psychopathology, Disorders, and Nursing Interventions.",
        "examType": "comprehensive",
        "topicsCovered": [
            "topic-01", "topic-02", "topic-03", "topic-04", 
            "topic-05", "topic-06", "topic-07", "topic-08"
        ],
        "difficulty": "advanced",
        "estimatedTime": 60,
        "passingScore": 75,
        "createdAt": "2025-12-28T12:00:00Z",
        "tags": ["final", "comprehensive", "nursing", "psychiatry"]
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
        // TOPIC 01: Concepts & Assessment
        {
            "id": "comp-q01",
            "type": "multiple-choice",
            "question": "According to the World Health Organization (WHO), mental health is defined not merely as the absence of disease, but as:",
            "points": 1,
            "topicId": "topic-01",
            "topicName": "Concepts & Assessment",
            "options": [
                { "id": "a", "text": "A state of complete physical and social isolation.", "isCorrect": false },
                { "id": "b", "text": "A state of complete physical, mental and social well-being.", "isCorrect": true },
                { "id": "c", "text": " The ability to suppress all negative emotions.", "isCorrect": false },
                { "id": "d", "text": "The capacity to function without any medication.", "isCorrect": false }
            ],
            "explanation": "WHO (1948) defines health as 'A state of complete physical, mental and social well-being and not merely the absence of disease or infirmity.'"
        },
        {
            "id": "comp-q02",
            "type": "fill-blank",
            "question": "In the mnemonic **ACTMAD** used for the Mental Status Examination summary, the letter 'C' stands for __b1__.",
            "points": 1,
            "topicId": "topic-01",
            "topicName": "Concepts & Assessment",
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["cognition", "Cognition"], "caseSensitive": false }
            ],
            "explanation": "ACTMAD stands for Appearance, Cognition, Thought process, Mood, Activities, and Danger signs."
        },
        {
            "id": "comp-q03",
            "type": "multiple-choice",
            "question": "Which level of insight is characterized by an awareness of being sick but blaming it on external factors?",
            "points": 1,
            "topicId": "topic-01",
            "topicName": "Concepts & Assessment",
            "options": [
                { "id": "a", "text": "Level I (Complete denial)", "isCorrect": false },
                { "id": "b", "text": "Level III", "isCorrect": true },
                { "id": "c", "text": "Level V (Intellectual insight)", "isCorrect": false },
                { "id": "d", "text": "Level VI (True emotional insight)", "isCorrect": false }
            ],
            "explanation": "Level III insight involves awareness of being sick but blaming it on others, external factors, or organic factors."
        },

        // TOPIC 02: Legal & Ethical Issues
        {
            "id": "comp-q04",
            "type": "matching",
            "question": "Match the ethical principle with its correct definition:",
            "points": 4,
            "topicId": "topic-02",
            "topicName": "Legal & Ethical Issues",
            "pairs": [
                { "id": "p1", "left": "Beneficence", "right": "The duty to promote the good of others" },
                { "id": "p2", "left": "Non-maleficence", "right": "The duty to do no harm" },
                { "id": "p3", "left": "Veracity", "right": "The duty to be truthful" },
                { "id": "p4", "left": "Autonomy", "right": "Respect for individual rights to determine destiny" }
            ],
            "explanation": "Beneficence = doing good; Non-maleficence = doing no harm; Veracity = truth-telling; Autonomy = self-determination."
        },
        {
            "id": "comp-q05",
            "type": "multiple-choice",
            "question": "Under the Mental Health Act, an involuntary patient is admitted for an initial period of not more than:",
            "points": 1,
            "topicId": "topic-02",
            "topicName": "Legal & Ethical Issues",
            "options": [
                { "id": "a", "text": "72 hours", "isCorrect": false },
                { "id": "b", "text": "28 days", "isCorrect": false },
                { "id": "c", "text": "6 months", "isCorrect": true },
                { "id": "d", "text": "12 months", "isCorrect": false }
            ],
            "explanation": "Involuntary patients are admitted for a period of not more than 6 months, which can be prolonged by another 6 months (total 12 months)."
        },
        {
            "id": "comp-q06",
            "type": "true-false",
            "question": "According to the Mental Health Act, a police officer can arrest a person found to be dangerous to themselves and take them to a mental hospital within 24 hours.",
            "points": 1,
            "topicId": "topic-02",
            "topicName": "Legal & Ethical Issues",
            "correctAnswer": true,
            "explanation": "A police officer, chief, or assistant chief can arrest such a person and take them to a mental hospital within 24 hours (Form MOH 638)."
        },

        // TOPIC 03: General Symptomatology
        {
            "id": "comp-q07",
            "type": "multiple-choice",
            "question": "A patient perceiving a stick on the ground as a snake is experiencing a(n):",
            "points": 1,
            "topicId": "topic-03",
            "topicName": "General Symptomatology",
            "options": [
                { "id": "a", "text": "Hallucination", "isCorrect": false },
                { "id": "b", "text": "Illusion", "isCorrect": true },
                { "id": "c", "text": "Delusion", "isCorrect": false },
                { "id": "d", "text": "Depersonalization", "isCorrect": false }
            ],
            "explanation": "An illusion is a misperception of an actual external stimulus. A hallucination is a perception without external stimulus."
        },
        {
            "id": "comp-q08",
            "type": "fill-blank",
            "question": "The invention of new words or phrases that have meaning only to the patient is known as __b1__.",
            "points": 1,
            "topicId": "topic-03",
            "topicName": "General Symptomatology",
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["neologism", "neologisms"], "caseSensitive": false }
            ],
            "explanation": "Neologism is the creation of new words or giving new meaning to standard words."
        },
        {
            "id": "comp-q09",
            "type": "multiple-select",
            "question": "Which of the following are examples of disorders of thought content (Delusions)? (Select all that apply)",
            "points": 2,
            "topicId": "topic-03",
            "topicName": "General Symptomatology",
            "options": [
                { "id": "a", "text": "Persecutory", "isCorrect": true },
                { "id": "b", "text": "Flight of ideas", "isCorrect": false },
                { "id": "c", "text": "Grandiose", "isCorrect": true },
                { "id": "d", "text": "Circumstantiality", "isCorrect": false },
                { "id": "e", "text": "Nihilistic", "isCorrect": true }
            ],
            "explanation": "Persecutory, Grandiose, and Nihilistic are types of delusions (content). Flight of ideas and Circumstantiality are disorders of thought process (form)."
        },
        {
            "id": "comp-q10",
            "type": "multiple-choice",
            "question": "Waxy flexibility is a motor disturbance most commonly associated with which condition?",
            "points": 1,
            "topicId": "topic-03",
            "topicName": "General Symptomatology",
            "options": [
                { "id": "a", "text": "Mania", "isCorrect": false },
                { "id": "b", "text": "Catatonic Schizophrenia", "isCorrect": true },
                { "id": "c", "text": "Obsessive Compulsive Disorder", "isCorrect": false },
                { "id": "d", "text": "Anxiety Neurosis", "isCorrect": false }
            ],
            "explanation": "Waxy flexibility (maintaining odd postures placed by others) is a hallmark of Catatonic Schizophrenia."
        },

        // TOPIC 04: Mood & Psychotic Disorders
        {
            "id": "comp-q11",
            "type": "multiple-choice",
            "question": "Which biochemical factor is primarily associated with Schizophrenia?",
            "points": 1,
            "topicId": "topic-04",
            "topicName": "Mood & Psychotic Disorders",
            "options": [
                { "id": "a", "text": "Low levels of Serotonin", "isCorrect": false },
                { "id": "b", "text": "Dopamine hyperactivity", "isCorrect": true },
                { "id": "c", "text": "Increased GABA", "isCorrect": false },
                { "id": "d", "text": "Decreased Norepinephrine", "isCorrect": false }
            ],
            "explanation": "Schizophrenia is associated with dopamine hyperactivity in the mesolimbic cortex and basal ganglia."
        },
        {
            "id": "comp-q12",
            "type": "matching",
            "question": "Match the Schizophrenia symptom type with the specific symptom:",
            "points": 4,
            "topicId": "topic-04",
            "topicName": "Mood & Psychotic Disorders",
            "pairs": [
                { "id": "p1", "left": "Positive Symptom", "right": "Hallucinations" },
                { "id": "p2", "left": "Negative Symptom", "right": "Anhedonia" },
                { "id": "p3", "left": "Positive Symptom", "right": "Delusions" },
                { "id": "p4", "left": "Negative Symptom", "right": "Avolition" }
            ],
            "explanation": "Positive symptoms add to behavior (hallucinations, delusions); Negative symptoms subtract from behavior (anhedonia, avolition, alogia)."
        },
        {
            "id": "comp-q13",
            "type": "multiple-choice",
            "question": "Which medication is considered a mood stabilizer used in the treatment of Bipolar Disorder (Mania)?",
            "points": 1,
            "topicId": "topic-04",
            "topicName": "Mood & Psychotic Disorders",
            "options": [
                { "id": "a", "text": "Fluoxetine", "isCorrect": false },
                { "id": "b", "text": "Haloperidol", "isCorrect": false },
                { "id": "c", "text": "Lithium Carbonate", "isCorrect": true },
                { "id": "d", "text": "Amitriptyline", "isCorrect": false }
            ],
            "explanation": "Lithium is a classic mood stabilizer. Fluoxetine and Amitriptyline are antidepressants; Haloperidol is an antipsychotic."
        },
        {
            "id": "comp-q14",
            "type": "true-false",
            "question": "In Major Depressive Disorder, symptoms must be present for at least 2 weeks to confirm the diagnosis.",
            "points": 1,
            "topicId": "topic-04",
            "topicName": "Mood & Psychotic Disorders",
            "correctAnswer": true,
            "explanation": "Diagnostic criteria for MDD require the presence of symptoms for at least a 2-week period."
        },

        // TOPIC 05: Organic & Anxiety Disorders
        {
            "id": "comp-q15",
            "type": "multiple-choice",
            "question": "Which feature primarily distinguishes Delirium from Dementia?",
            "points": 1,
            "topicId": "topic-05",
            "topicName": "Organic & Anxiety Disorders",
            "options": [
                { "id": "a", "text": "Memory loss", "isCorrect": false },
                { "id": "b", "text": "Acute onset and clouding of consciousness", "isCorrect": true },
                { "id": "c", "text": "Onset in old age", "isCorrect": false },
                { "id": "d", "text": "Impairment of judgment", "isCorrect": false }
            ],
            "explanation": "Delirium has an acute onset and is characterized by clouding of consciousness (reduced awareness). Dementia is chronic and progressive."
        },
        {
            "id": "comp-q16",
            "type": "multiple-select",
            "question": "Which of the following are reversible causes of Dementia? (Select all that apply)",
            "points": 2,
            "topicId": "topic-05",
            "topicName": "Organic & Anxiety Disorders",
            "options": [
                { "id": "a", "text": "Alzheimer's Disease", "isCorrect": false },
                { "id": "b", "text": "Subdural Hematoma", "isCorrect": true },
                { "id": "c", "text": "Vitamin B12 Deficiency", "isCorrect": true },
                { "id": "d", "text": "Hypothyroidism", "isCorrect": true },
                { "id": "e", "text": "Huntington's Chorea", "isCorrect": false }
            ],
            "explanation": "Alzheimer's and Huntington's are irreversible/degenerative. Hematomas, vitamin deficiencies, and metabolic disorders (thyroid) are potentially reversible."
        },
        {
            "id": "comp-q17",
            "type": "fill-blank",
            "question": "The fear of being in closed or narrow spaces is known as __b1__.",
            "points": 1,
            "topicId": "topic-05",
            "topicName": "Organic & Anxiety Disorders",
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["claustrophobia", "Claustrophobia"], "caseSensitive": false }
            ],
            "explanation": "Claustrophobia is the specific phobia of closed spaces."
        },
        {
            "id": "comp-q18",
            "type": "multiple-choice",
            "question": "Which medication is typically used for the symptomatic treatment of Panic Disorder?",
            "points": 1,
            "topicId": "topic-05",
            "topicName": "Organic & Anxiety Disorders",
            "options": [
                { "id": "a", "text": "Haloperidol", "isCorrect": false },
                { "id": "b", "text": "Alprazolam", "isCorrect": true },
                { "id": "c", "text": "Disulfiram", "isCorrect": false },
                { "id": "d", "text": "Benztropine", "isCorrect": false }
            ],
            "explanation": "Alprazolam (a benzodiazepine) is often used for panic disorder. Haloperidol is an antipsychotic; Disulfiram is for alcohol aversion."
        },

        // TOPIC 06: Personality & Sexual Disorders
        {
            "id": "comp-q19",
            "type": "matching",
            "question": "Match the Personality Disorder Cluster with the correct description:",
            "points": 3,
            "topicId": "topic-06",
            "topicName": "Personality & Sexual Disorders",
            "pairs": [
                { "id": "p1", "left": "Cluster A", "right": "Odd or Eccentric" },
                { "id": "p2", "left": "Cluster B", "right": "Dramatic, Emotional, or Erratic" },
                { "id": "p3", "left": "Cluster C", "right": "Anxious or Fearful" }
            ],
            "explanation": "Cluster A: Paranoid, Schizoid, Schizotypal. Cluster B: Antisocial, Borderline, Histrionic, Narcissistic. Cluster C: Avoidant, Dependent, Obsessive-Compulsive."
        },
        {
            "id": "comp-q20",
            "type": "multiple-choice",
            "question": "A pervasive pattern of instability in interpersonal relationships, self-image, and affects, along with marked impulsivity, characterizes which personality disorder?",
            "points": 1,
            "topicId": "topic-06",
            "topicName": "Personality & Sexual Disorders",
            "options": [
                { "id": "a", "text": "Antisocial", "isCorrect": false },
                { "id": "b", "text": "Borderline", "isCorrect": true },
                { "id": "c", "text": "Histrionic", "isCorrect": false },
                { "id": "d", "text": "Narcissistic", "isCorrect": false }
            ],
            "explanation": "Borderline Personality Disorder is defined by instability in mood, relationships, and self-image, often with impulsivity."
        },
        {
            "id": "comp-q21",
            "type": "multiple-choice",
            "question": "Which paraphilia involves sexual arousal from observing unsuspecting people who are naked, disrobing, or engaging in sexual activity?",
            "points": 1,
            "topicId": "topic-06",
            "topicName": "Personality & Sexual Disorders",
            "options": [
                { "id": "a", "text": "Frotteurism", "isCorrect": false },
                { "id": "b", "text": "Exhibitionism", "isCorrect": false },
                { "id": "c", "text": "Voyeurism", "isCorrect": true },
                { "id": "d", "text": "Fetishism", "isCorrect": false }
            ],
            "explanation": "Voyeurism is the 'Peeping Tom' disorder involving observing unsuspecting individuals."
        },
        {
            "id": "comp-q22",
            "type": "fill-blank",
            "question": "The sexual dysfunction characterized by involuntary spasm of the musculature of the outer third of the vagina is called __b1__.",
            "points": 1,
            "topicId": "topic-06",
            "topicName": "Personality & Sexual Disorders",
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["vaginismus", "Vaginismus"], "caseSensitive": false }
            ],
            "explanation": "Vaginismus involves involuntary spasms that interfere with sexual intercourse."
        },

        // TOPIC 07: Childhood & Substance Disorders
        {
            "id": "comp-q23",
            "type": "multiple-choice",
            "question": "Which of the following is a core feature of Autism Spectrum Disorder?",
            "points": 1,
            "topicId": "topic-07",
            "topicName": "Childhood & Substance Disorders",
            "options": [
                { "id": "a", "text": "Hallucinations and delusions", "isCorrect": false },
                { "id": "b", "text": "Persistent deficits in social communication and interaction", "isCorrect": true },
                { "id": "c", "text": "Excessive fear of separation", "isCorrect": false },
                { "id": "d", "text": "Violent behavior toward animals", "isCorrect": false }
            ],
            "explanation": "Autism is characterized by deficits in social communication/interaction and restricted, repetitive patterns of behavior."
        },
        {
            "id": "comp-q24",
            "type": "multiple-choice",
            "question": "Methylphenidate (Ritalin) is a CNS stimulant commonly used to treat:",
            "points": 1,
            "topicId": "topic-07",
            "topicName": "Childhood & Substance Disorders",
            "options": [
                { "id": "a", "text": "Autism", "isCorrect": false },
                { "id": "b", "text": "ADHD", "isCorrect": true },
                { "id": "c", "text": "Tourette's Syndrome", "isCorrect": false },
                { "id": "d", "text": "Separation Anxiety", "isCorrect": false }
            ],
            "explanation": "Methylphenidate is a stimulant used to increase attention span and control hyperactivity in ADHD."
        },
        {
            "id": "comp-q25",
            "type": "fill-blank",
            "question": "Severe alcohol withdrawal occurring 3-4 days after cessation, characterized by confusion, hallucinations, and autonomic hyperactivity, is known as __b1__.",
            "points": 1,
            "topicId": "topic-07",
            "topicName": "Childhood & Substance Disorders",
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["delirium tremens", "DTs", "Delirium Tremens"], "caseSensitive": false }
            ],
            "explanation": "Delirium Tremens (DTs) is a medical emergency associated with severe alcohol withdrawal."
        },
        {
            "id": "comp-q26",
            "type": "multiple-select",
            "question": "Which of the following are signs of Opioid Intoxication? (Select all that apply)",
            "points": 2,
            "topicId": "topic-07",
            "topicName": "Childhood & Substance Disorders",
            "options": [
                { "id": "a", "text": "Pupillary constriction (pinpoint pupils)", "isCorrect": true },
                { "id": "b", "text": "Drowsiness / Coma", "isCorrect": true },
                { "id": "c", "text": "Slurred speech", "isCorrect": true },
                { "id": "d", "text": "Pupillary dilation", "isCorrect": false },
                { "id": "e", "text": "Insomnia", "isCorrect": false }
            ],
            "explanation": "Opioid intoxication presents with constriction of pupils, drowsiness, and slurred speech. Dilation and insomnia are signs of withdrawal (or stimulant intoxication)."
        },
        {
            "id": "comp-q27",
            "type": "multiple-choice",
            "question": "In the CAGE questionnaire for alcohol screening, the 'E' stands for:",
            "points": 1,
            "topicId": "topic-07",
            "topicName": "Childhood & Substance Disorders",
            "options": [
                { "id": "a", "text": "Energy", "isCorrect": false },
                { "id": "b", "text": "Every day", "isCorrect": false },
                { "id": "c", "text": "Eye-opener", "isCorrect": true },
                { "id": "d", "text": "Emergency", "isCorrect": false }
            ],
            "explanation": "CAGE: Cut down, Annoyed, Guilty, Eye-opener (drinking first thing in the morning)."
        },

        // TOPIC 08: Emergencies & Therapies
        {
            "id": "comp-q28",
            "type": "ordering",
            "question": "Arrange the steps of the 'Rapid Tranquilization' progressive strategy in order:",
            "points": 3,
            "topicId": "topic-08",
            "topicName": "Emergencies & Therapies",
            "items": [
                { "id": "i1", "text": "De-escalation (talking down)", "correctPosition": 1 },
                { "id": "i2", "text": "Environmental manipulation", "correctPosition": 2 },
                { "id": "i3", "text": "Rapid tranquilization (chemical)", "correctPosition": 3 },
                { "id": "i4", "text": "Restraints and seclusion", "correctPosition": 4 }
            ],
            "explanation": "Management starts with the least restrictive measure (verbal) and moves to physical restraint only as a last resort."
        },
        {
            "id": "comp-q29",
            "type": "multiple-choice",
            "question": "Which food must be avoided by a patient taking MAOIs (Monoamine Oxidase Inhibitors)?",
            "points": 1,
            "topicId": "topic-08",
            "topicName": "Emergencies & Therapies",
            "options": [
                { "id": "a", "text": "Green leafy vegetables", "isCorrect": false },
                { "id": "b", "text": "Aged cheese and wine", "isCorrect": true },
                { "id": "c", "text": "Milk", "isCorrect": false },
                { "id": "d", "text": "Fresh fish", "isCorrect": false }
            ],
            "explanation": "MAOIs interact with Tyramine-rich foods (aged cheese, wine, avocado, smoked meat) causing hypertensive crisis."
        },
        {
            "id": "comp-q30",
            "type": "multiple-choice",
            "question": "What is the therapeutic serum level range for Lithium Carbonate?",
            "points": 1,
            "topicId": "topic-08",
            "topicName": "Emergencies & Therapies",
            "options": [
                { "id": "a", "text": "0.1 – 0.5 mmol/L", "isCorrect": false },
                { "id": "b", "text": "0.6 – 1.2 mmol/L", "isCorrect": true },
                { "id": "c", "text": "1.5 – 2.0 mmol/L", "isCorrect": false },
                { "id": "d", "text": "2.0 – 3.0 mmol/L", "isCorrect": false }
            ],
            "explanation": "The therapeutic maintenance range for Lithium is typically 0.6 – 1.2 mmol/L. Levels above 1.5 mmol/L are considered toxic."
        },
        {
            "id": "comp-q31",
            "type": "multiple-select",
            "question": "Which of the following are risk factors for suicide in the SAD PERSONS scale? (Select all that apply)",
            "points": 2,
            "topicId": "topic-08",
            "topicName": "Emergencies & Therapies",
            "options": [
                { "id": "a", "text": "Sex (Male)", "isCorrect": true },
                { "id": "b", "text": "Depression", "isCorrect": true },
                { "id": "c", "text": "Ethanol abuse", "isCorrect": true },
                { "id": "d", "text": "Organized plan", "isCorrect": true },
                { "id": "e", "text": "Married with children", "isCorrect": false }
            ],
            "explanation": "SAD PERSONS: Sex, Age, Depression, Previous attempt, Ethanol, Rational thinking loss, Social support lack, Organized plan, No spouse, Sickness. Being married/having children is generally protective."
        },
        {
            "id": "comp-q32",
            "type": "true-false",
            "question": "Electroconvulsive Therapy (ECT) is absolutely contraindicated in patients with increased intracranial pressure.",
            "points": 1,
            "topicId": "topic-08",
            "topicName": "Emergencies & Therapies",
            "correctAnswer": false,
            "explanation": "While increased ICP is a *relative* contraindication (and high risk), modern guidelines state there are no *absolute* contraindications if the risk/benefit ratio justifies it, though traditionally ICP was considered absolute in older texts. The notes list it under 'Relative contraindications' or 'High risk'."
        },

        // MIXED/INTEGRATION QUESTIONS
        {
            "id": "comp-q33",
            "type": "multiple-choice",
            "question": "A patient presents with 'cocaine bugs' (sensation of insects crawling on skin). This is an example of which type of hallucination?",
            "points": 1,
            "topicId": "topic-03",
            "topicName": "General Symptomatology",
            "options": [
                { "id": "a", "text": "Visual", "isCorrect": false },
                { "id": "b", "text": "Tactile (Haptic)", "isCorrect": true },
                { "id": "c", "text": "Olfactory", "isCorrect": false },
                { "id": "d", "text": "Gustatory", "isCorrect": false }
            ],
            "explanation": "Formication ('cocaine bugs') is a specific type of tactile hallucination associated with cocaine toxicity."
        },
        {
            "id": "comp-q34",
            "type": "multiple-choice",
            "question": "Which personality disorder is most likely to benefit from group therapy (self-help) due to their manipulative behavior in individual therapy?",
            "points": 1,
            "topicId": "topic-06",
            "topicName": "Personality & Sexual Disorders",
            "options": [
                { "id": "a", "text": "Schizoid", "isCorrect": false },
                { "id": "b", "text": "Antisocial", "isCorrect": true },
                { "id": "c", "text": "Paranoid", "isCorrect": false },
                { "id": "d", "text": "Obsessive-Compulsive", "isCorrect": false }
            ],
            "explanation": "Group therapy is often more effective for Antisocial Personality Disorder because peers are less likely to be manipulated than individual therapists."
        },
        {
            "id": "comp-q35",
            "type": "multiple-choice",
            "question": "The 'give to get' principle is a core concept in the treatment of:",
            "points": 1,
            "topicId": "topic-06",
            "topicName": "Personality & Sexual Disorders",
            "options": [
                { "id": "a", "text": "Schizophrenia", "isCorrect": false },
                { "id": "b", "text": "Sexual Dysfunction (Masters and Johnson)", "isCorrect": true },
                { "id": "c", "text": "Bipolar Disorder", "isCorrect": false },
                { "id": "d", "text": "Alcohol Withdrawal", "isCorrect": false }
            ],
            "explanation": "Masters and Johnson's approach to sexual dysfunction emphasizes the 'give to get' principle—giving pleasure to receive it."
        },
        {
            "id": "comp-q36",
            "type": "fill-blank",
            "question": "A patient believes that the TV news anchor is sending them special, personal messages. This is a delusion of __b1__.",
            "points": 1,
            "topicId": "topic-04",
            "topicName": "Mood & Psychotic Disorders",
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["reference", "ideas of reference"], "caseSensitive": false }
            ],
            "explanation": "Delusion of reference involves the belief that unrelated events or remarks have specific meaning for the patient."
        },
        {
            "id": "comp-q37",
            "type": "multiple-choice",
            "question": "Which of the following is considered a 'Negative Symptom' of Schizophrenia?",
            "points": 1,
            "topicId": "topic-04",
            "topicName": "Mood & Psychotic Disorders",
            "options": [
                { "id": "a", "text": "Hallucinations", "isCorrect": false },
                { "id": "b", "text": "Delusions", "isCorrect": false },
                { "id": "c", "text": "Avolition", "isCorrect": true },
                { "id": "d", "text": "Excitement", "isCorrect": false }
            ],
            "explanation": "Avolition (lack of drive/ambition) is a negative symptom. Hallucinations, delusions, and excitement are positive symptoms."
        },
        {
            "id": "comp-q38",
            "type": "multiple-choice",
            "question": "Tertiary prevention in community mental health focuses on:",
            "points": 1,
            "topicId": "topic-08",
            "topicName": "Emergencies & Therapies",
            "options": [
                { "id": "a", "text": "Reducing the incidence of new cases", "isCorrect": false },
                { "id": "b", "text": "Reducing the prevalence and duration of illness (early diagnosis)", "isCorrect": false },
                { "id": "c", "text": "Reducing residual defects and rehabilitation", "isCorrect": true },
                { "id": "d", "text": "Genetic counseling", "isCorrect": false }
            ],
            "explanation": "Tertiary prevention aims to reduce residual defects (disability) and promote rehabilitation."
        },
        {
            "id": "comp-q39",
            "type": "matching",
            "question": "Match the drug to its class:",
            "points": 4,
            "topicId": "topic-08",
            "topicName": "Emergencies & Therapies",
            "pairs": [
                { "id": "p1", "left": "Chlorpromazine", "right": "Typical Antipsychotic" },
                { "id": "p2", "left": "Fluoxetine", "right": "SSRI Antidepressant" },
                { "id": "p3", "left": "Diazepam", "right": "Benzodiazepine (Anxiolytic)" },
                { "id": "p4", "left": "Amitriptyline", "right": "Tricyclic Antidepressant" }
            ],
            "explanation": "Chlorpromazine (Largactil) = Antipsychotic; Fluoxetine (Prozac) = SSRI; Diazepam (Valium) = Anxiolytic; Amitriptyline = TCA."
        },
        {
            "id": "comp-q40",
            "type": "multiple-choice",
            "question": "Which side effect is characterized by motor restlessness and an inability to sit still, often caused by antipsychotics?",
            "points": 1,
            "topicId": "topic-08",
            "topicName": "Emergencies & Therapies",
            "options": [
                { "id": "a", "text": "Dystonia", "isCorrect": false },
                { "id": "b", "text": "Akathisia", "isCorrect": true },
                { "id": "c", "text": "Tardive Dyskinesia", "isCorrect": false },
                { "id": "d", "text": "Parkinsonism", "isCorrect": false }
            ],
            "explanation": "Akathisia is defined as continuous motor restlessness."
        }
    ]
});