registerQuiz("comprehensive-exam", {
    "schemaVersion": "1.0",
    "quizId": "comprehensive-exam",
    "metadata": {
        "title": "Comprehensive Final Exam",
        "description": "A comprehensive assessment covering all 12 modules of the Mental Health Nursing course, including legal frameworks, psychopathology, pharmacology, and nursing care.",
        "topicId": "comprehensive",
        "difficulty": "advanced",
        "estimatedTime": 90,
        "passingScore": 70,
        "createdAt": "2026-01-21T12:00:00Z",
        "updatedAt": "2026-01-21T12:00:00Z",
        "tags": ["final", "exam", "comprehensive", "nursing", "psychiatry"]
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
        /* TOPIC 1: INTRO & LEGAL */
        {
            "id": "comp-t1-q1",
            "type": "multiple-choice",
            "question": "Who is credited with coining the term 'Psychiatry' in 1808?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Sigmund Freud", "isCorrect": false },
                { "id": "opt2", "text": "Johann Christian Reil", "isCorrect": true },
                { "id": "opt3", "text": "Philippe Pinel", "isCorrect": false },
                { "id": "opt4", "text": "William Tuke", "isCorrect": false }
            ],
            "explanation": "Psychiatry was first coined by Johann Christian Reil in 1808. It comes from the Greek word 'psyche' meaning soul and 'iatriyos' meaning to heal."
        },
        {
            "id": "comp-t1-q2",
            "type": "matching",
            "question": "Match the Kenya Mental Health Act Admission Form number to its correct purpose:",
            "points": 4,
            "pairs": [
                { "id": "pair1", "left": "M.O.H. 614", "right": "Involuntary admission application by relative" },
                { "id": "pair2", "left": "M.O.H. 613", "right": "Voluntary admission application" },
                { "id": "pair3", "left": "M.O.H. 638", "right": "Emergency admission by police officer" },
                { "id": "pair4", "left": "M.O.H. 615", "right": "Medical recommendation for involuntary treatment" }
            ],
            "explanation": "MOH 613 is for voluntary admission. MOH 614 is applied by a relative for involuntary admission. MOH 615 is the medical recommendation. MOH 638 is used by police for emergency admission."
        },
        {
            "id": "comp-t1-q3",
            "type": "multiple-choice",
            "question": "According to the Mental Health Act Cap 248, a person received into a mental hospital as a voluntary patient must have attained the apparent age of:",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "18 years", "isCorrect": false },
                { "id": "opt2", "text": "21 years", "isCorrect": false },
                { "id": "opt3", "text": "16 years", "isCorrect": true },
                { "id": "opt4", "text": "12 years", "isCorrect": false }
            ],
            "explanation": "Part V of the Mental Health Act states that any person who has attained the apparent age of sixteen years may voluntarily submit themselves to treatment."
        },

        /* TOPIC 2: THEORIES & ASSESSMENT */
        {
            "id": "comp-t2-q1",
            "type": "multiple-choice",
            "question": "Which component of the personality structure operates on the 'pleasure principle' and demands immediate gratification?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Ego", "isCorrect": false },
                { "id": "opt2", "text": "Superego", "isCorrect": false },
                { "id": "opt3", "text": "Id", "isCorrect": true },
                { "id": "opt4", "text": "Conscious", "isCorrect": false }
            ],
            "explanation": "The Id is the most primitive structure, driven by impulses, and demands immediate gratification of needs."
        },
        {
            "id": "comp-t2-q2",
            "type": "matching",
            "question": "Match the Mental Status Examination term to its description:",
            "points": 3,
            "pairs": [
                { "id": "pair1", "left": "Hallucination", "right": "False sensory perception without external stimuli" },
                { "id": "pair2", "left": "Delusion", "right": "Fixed false belief not removed by logic" },
                { "id": "pair3", "left": "Illusion", "right": "Misinterpretation of actual external stimuli" }
            ],
            "explanation": "Hallucinations are false sensory perceptions without stimuli. Delusions are fixed false beliefs. Illusions are misinterpretations of real external stimuli."
        },
        {
            "id": "comp-t2-q3",
            "type": "fill-blank",
            "question": "In the mnemonic 'ACTMAD' used for the Mental Status Examination, the 'C' stands for __b1__.",
            "points": 1,
            "blanks": [
                {
                    "id": "b1",
                    "acceptedAnswers": ["Cognition", "cognition"],
                    "caseSensitive": false
                }
            ],
            "explanation": "In the ACTMAD mnemonic, C stands for Cognition (thought process, content, memory, judgment, etc.)."
        },

        /* TOPIC 3: THERAPEUTIC COMMUNICATION */
        {
            "id": "comp-t3-q1",
            "type": "multiple-choice",
            "question": "Which of the following is a NON-therapeutic communication technique?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Reflecting", "isCorrect": false },
                { "id": "opt2", "text": "Reassuring", "isCorrect": true },
                { "id": "opt3", "text": "Exploring", "isCorrect": false },
                { "id": "opt4", "text": "Restating", "isCorrect": false }
            ],
            "explanation": "Reassuring ('Everything will be alright') is non-therapeutic because it devalues the client's feelings and blocks communication. Reflecting, Exploring, and Restating are therapeutic."
        },
        {
            "id": "comp-t3-q2",
            "type": "true-false",
            "question": "Transference occurs when the nurse displaces feelings from their past onto the client.",
            "correctAnswer": false,
            "points": 1,
            "explanation": "This is False. Transference is when the CLIENT displaces feelings onto the nurse. When the NURSE displaces feelings onto the client, it is called Countertransference."
        },
        {
            "id": "comp-t3-q3",
            "type": "multiple-choice",
            "question": "If a client says 'I am dead,' and the nurse responds 'Are you suggesting that you feel lifeless?', which technique is being used?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Translating into feelings", "isCorrect": true },
                { "id": "opt2", "text": "Voicing doubt", "isCorrect": false },
                { "id": "opt3", "text": "Belittling feelings", "isCorrect": false },
                { "id": "opt4", "text": "Disapproving", "isCorrect": false }
            ],
            "explanation": "This is 'Translating into feelings', where the nurse seeks to verbalize the client's feelings that are expressed only indirectly."
        },

        /* TOPIC 4: PRINCIPLES & TREATMENT */
        {
            "id": "comp-t4-q1",
            "type": "multiple-choice",
            "question": "Which drug is used as an antidote/deterrent for alcohol, causing adverse reactions when alcohol is ingested?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Diazepam", "isCorrect": false },
                { "id": "opt2", "text": "Disulfiram", "isCorrect": true },
                { "id": "opt3", "text": "Haloperidol", "isCorrect": false },
                { "id": "opt4", "text": "Chlorpromazine", "isCorrect": false }
            ],
            "explanation": "Disulfiram (Antabuse) inhibits aldehyde dehydrogenase, causing a build-up of acetaldehyde and severe physical reactions if alcohol is consumed."
        },
        {
            "id": "comp-t4-q2",
            "type": "multiple-select",
            "question": "Which of the following are extrapyramidal side effects (EPS) of antipsychotic medication? (Select all that apply)",
            "points": 2,
            "options": [
                { "id": "opt1", "text": "Oculogyric crisis", "isCorrect": true },
                { "id": "opt2", "text": "Akathisia", "isCorrect": true },
                { "id": "opt3", "text": "Hypertension crisis", "isCorrect": false },
                { "id": "opt4", "text": "Pseudoparkinsonism", "isCorrect": true },
                { "id": "opt5", "text": "Polyuria", "isCorrect": false }
            ],
            "explanation": "Oculogyric crisis, Akathisia, and Pseudoparkinsonism are EPS. Hypertension crisis is associated with MAOIs (tyramine reaction), and Polyuria is common with Lithium."
        },
        {
            "id": "comp-t4-q3",
            "type": "multiple-choice",
            "question": "What is the only absolute contraindication for Electroconvulsive Therapy (ECT)?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Pregnancy", "isCorrect": false },
                { "id": "opt2", "text": "Myocardial Infarction", "isCorrect": false },
                { "id": "opt3", "text": "Raised Intracranial Pressure (ICP)", "isCorrect": true },
                { "id": "opt4", "text": "Severe Osteoporosis", "isCorrect": false }
            ],
            "explanation": "Raised Intracranial Pressure (ICP) is the only absolute contraindication because ECT increases cerebral blood flow and ICP, which could lead to brain stem herniation."
        },

        /* TOPIC 5: SCHIZOPHRENIA */
        {
            "id": "comp-t5-q1",
            "type": "matching",
            "question": "Match the type of Schizophrenia with its characteristic symptom:",
            "points": 3,
            "pairs": [
                { "id": "pair1", "left": "Paranoid", "right": "Delusions of persecution or grandeur" },
                { "id": "pair2", "left": "Catatonic", "right": "Waxy flexibility or stupor" },
                { "id": "pair3", "left": "Hebephrenic", "right": "Inappropriate affect and regression" }
            ],
            "explanation": "Paranoid is characterized by delusions. Catatonic involves motor immobility or excessive activity (waxy flexibility). Hebephrenic (Disorganized) involves foolishness and regression."
        },
        {
            "id": "comp-t5-q2",
            "type": "multiple-choice",
            "question": "Which of the following is considered a 'Positive Symptom' of Schizophrenia?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Avolition", "isCorrect": false },
                { "id": "opt2", "text": "Delusions", "isCorrect": true },
                { "id": "opt3", "text": "Flat affect", "isCorrect": false },
                { "id": "opt4", "text": "Anhedonia", "isCorrect": false }
            ],
            "explanation": "Positive symptoms are excesses/distortions like Delusions and Hallucinations. Avolition, Flat affect, and Anhedonia are Negative symptoms."
        },
        {
            "id": "comp-t5-q3",
            "type": "multiple-choice",
            "question": "According to Eugen Bleuler, which of the following is NOT one of the fundamental symptoms (4 As) of Schizophrenia?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Ambivalence", "isCorrect": false },
                { "id": "opt2", "text": "Autism", "isCorrect": false },
                { "id": "opt3", "text": "Anxiety", "isCorrect": true },
                { "id": "opt4", "text": "Affect disturbances", "isCorrect": false }
            ],
            "explanation": "Bleuler's 4 As are: Ambivalence, Autism, Affect disturbances, and Association disturbances. Anxiety is not one of the fundamental 4 As."
        },

        /* TOPIC 6: MOOD DISORDERS */
        {
            "id": "comp-t6-q1",
            "type": "multiple-choice",
            "question": "Bipolar I Disorder is characterized by episodes of:",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Hypomania and severe depression", "isCorrect": false },
                { "id": "opt2", "text": "Severe mania and severe depression", "isCorrect": true },
                { "id": "opt3", "text": "Dysthymia and hypomania", "isCorrect": false },
                { "id": "opt4", "text": "Severe depression only", "isCorrect": false }
            ],
            "explanation": "Bipolar I involves severe mania and severe depression. Bipolar II involves hypomania and severe depression."
        },
        {
            "id": "comp-t6-q2",
            "type": "multiple-choice",
            "question": "In the SAD PERSONS scale for suicide risk assessment, what does the 'E' stand for?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Education", "isCorrect": false },
                { "id": "opt2", "text": "Energy loss", "isCorrect": false },
                { "id": "opt3", "text": "Ethanol use", "isCorrect": true },
                { "id": "opt4", "text": "Economic status", "isCorrect": false }
            ],
            "explanation": "In SAD PERSONS, E stands for Ethanol use (alcohol dependence or abuse)."
        },
        {
            "id": "comp-t6-q3",
            "type": "multiple-select",
            "question": "Which of the following are symptoms of a Manic Episode? (Select all that apply)",
            "points": 2,
            "options": [
                { "id": "opt1", "text": "Decreased need for sleep", "isCorrect": true },
                { "id": "opt2", "text": "Flight of ideas", "isCorrect": true },
                { "id": "opt3", "text": "Psychomotor retardation", "isCorrect": false },
                { "id": "opt4", "text": "Grandiosity", "isCorrect": true }
            ],
            "explanation": "Mania is characterized by decreased sleep, flight of ideas, grandiosity, and psychomotor agitation (not retardation)."
        },

        /* TOPIC 7: NEUROSES & ANXIETY */
        {
            "id": "comp-t7-q1",
            "type": "multiple-choice",
            "question": "Agoraphobia is best defined as:",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Fear of spiders", "isCorrect": false },
                { "id": "opt2", "text": "Fear of open spaces or situations where escape is difficult", "isCorrect": true },
                { "id": "opt3", "text": "Fear of heights", "isCorrect": false },
                { "id": "opt4", "text": "Fear of social scrutiny", "isCorrect": false }
            ],
            "explanation": "Agoraphobia is anxiety about being in places or situations from which escape might be difficult or embarrassing."
        },
        {
            "id": "comp-t7-q2",
            "type": "multiple-choice",
            "question": "A patient presents with sudden blindness but medical tests show no organic cause. The patient seems unconcerned about the symptom ('la belle indifference'). This suggests:",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Hypochondriasis", "isCorrect": false },
                { "id": "opt2", "text": "Conversion Disorder", "isCorrect": true },
                { "id": "opt3", "text": "Body Dysmorphic Disorder", "isCorrect": false },
                { "id": "opt4", "text": "Somatization Disorder", "isCorrect": false }
            ],
            "explanation": "Conversion disorder involves deficits in voluntary motor or sensory functions (like blindness) without organic cause, often accompanied by a lack of concern (la belle indifference)."
        },
        {
            "id": "comp-t7-q3",
            "type": "multiple-choice",
            "question": "In Obsessive-Compulsive Disorder (OCD), 'Compulsions' refer to:",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Recurrent intrusive thoughts", "isCorrect": false },
                { "id": "opt2", "text": "Repetitive behaviors performed to reduce anxiety", "isCorrect": true },
                { "id": "opt3", "text": "Fear of specific objects", "isCorrect": false },
                { "id": "opt4", "text": "Panic attacks", "isCorrect": false }
            ],
            "explanation": "Obsessions are thoughts; Compulsions are repetitive behaviors or mental acts performed to reduce distress caused by the obsessions."
        },

        /* TOPIC 8: PERSONALITY & SEXUAL */
        {
            "id": "comp-t8-q1",
            "type": "matching",
            "question": "Match the Personality Disorder to its Cluster:",
            "points": 3,
            "pairs": [
                { "id": "pair1", "left": "Paranoid PD", "right": "Cluster A (Odd/Eccentric)" },
                { "id": "pair2", "left": "Borderline PD", "right": "Cluster B (Dramatic/Erratic)" },
                { "id": "pair3", "left": "Dependent PD", "right": "Cluster C (Anxious/Fearful)" }
            ],
            "explanation": "Cluster A: Paranoid, Schizoid, Schizotypal. Cluster B: Antisocial, Borderline, Histrionic, Narcissistic. Cluster C: Avoidant, Dependent, Obsessive-Compulsive."
        },
        {
            "id": "comp-t8-q2",
            "type": "multiple-choice",
            "question": "A 25-year-old male has a history of fighting, stealing, and lying since age 15. He shows no remorse for his actions. This behavior is characteristic of:",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Narcissistic PD", "isCorrect": false },
                { "id": "opt2", "text": "Antisocial PD", "isCorrect": true },
                { "id": "opt3", "text": "Borderline PD", "isCorrect": false },
                { "id": "opt4", "text": "Schizoid PD", "isCorrect": false }
            ],
            "explanation": "Antisocial Personality Disorder is characterized by a pervasive pattern of disregard for and violation of the rights of others, lack of remorse, and deceitfulness."
        },
        {
            "id": "comp-t8-q3",
            "type": "multiple-choice",
            "question": "The sexual deviation involving obtaining sexual gratification from rubbing against a non-consenting person in a crowded place is:",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Voyeurism", "isCorrect": false },
                { "id": "opt2", "text": "Frotteurism", "isCorrect": true },
                { "id": "opt3", "text": "Exhibitionism", "isCorrect": false },
                { "id": "opt4", "text": "Fetishism", "isCorrect": false }
            ],
            "explanation": "Frotteurism involves recurrent intense sexual urges derived from touching or rubbing against a non-consenting person."
        },

        /* TOPIC 9: SUBSTANCE USE */
        {
            "id": "comp-t9-q1",
            "type": "multiple-choice",
            "question": "Which severe form of alcohol withdrawal is characterized by confusion, hallucinations, and autonomic hyperactivity (e.g., tachycardia)?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Alcohol intoxication", "isCorrect": false },
                { "id": "opt2", "text": "Wernicke's encephalopathy", "isCorrect": false },
                { "id": "opt3", "text": "Delirium Tremens", "isCorrect": true },
                { "id": "opt4", "text": "Korsakoff's psychosis", "isCorrect": false }
            ],
            "explanation": "Delirium Tremens (DTs) is a severe form of alcohol withdrawal involving changes in mental status (confusion, agitation) and autonomic hyperactivity."
        },
        {
            "id": "comp-t9-q2",
            "type": "fill-blank",
            "question": "The acronym for the assessment scale used to monitor alcohol withdrawal symptoms is __b1__.",
            "points": 1,
            "blanks": [
                {
                    "id": "b1",
                    "acceptedAnswers": ["CIWA", "CIWA-Ar"],
                    "caseSensitive": false
                }
            ],
            "explanation": "CIWA (Clinical Institute Withdrawal Assessment) is the standard scale."
        },

        /* TOPIC 10: CHILD PSYCHIATRY */
        {
            "id": "comp-t10-q1",
            "type": "multiple-choice",
            "question": "Which of the following triad of symptoms characterizes ADHD?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Inattention, Hyperactivity, Impulsivity", "isCorrect": true },
                { "id": "opt2", "text": "Hallucinations, Delusions, Speech poverty", "isCorrect": false },
                { "id": "opt3", "text": "Social withdrawal, Communication deficit, Repetitive behaviors", "isCorrect": false },
                { "id": "opt4", "text": "Depression, Anxiety, Phobia", "isCorrect": false }
            ],
            "explanation": "ADHD is characterized by the triad of Inattention, Hyperactivity, and Impulsivity."
        },
        {
            "id": "comp-t10-q2",
            "type": "multiple-choice",
            "question": "Anorexia Nervosa is primarily characterized by:",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Binge eating followed by purging", "isCorrect": false },
                { "id": "opt2", "text": "Intense fear of gaining weight and refusal to maintain normal body weight", "isCorrect": true },
                { "id": "opt3", "text": "Eating non-nutritive substances", "isCorrect": false },
                { "id": "opt4", "text": "Overeating due to stress", "isCorrect": false }
            ],
            "explanation": "Anorexia Nervosa involves refusal to maintain body weight at or above a minimally normal weight, intense fear of gaining weight, and body image disturbance."
        },

        /* TOPIC 11: ORGANIC DISORDERS */
        {
            "id": "comp-t11-q1",
            "type": "multiple-choice",
            "question": "Which feature best distinguishes Delirium from Dementia?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Memory loss", "isCorrect": false },
                { "id": "opt2", "text": "Acute onset and fluctuating course", "isCorrect": true },
                { "id": "opt3", "text": "Progressive cognitive decline", "isCorrect": false },
                { "id": "opt4", "text": "Permanent impairment", "isCorrect": false }
            ],
            "explanation": "Delirium has an acute onset and fluctuating course (often reversible), whereas Dementia is typically chronic, insidious, and progressive."
        },
        {
            "id": "comp-t11-q2",
            "type": "multiple-choice",
            "question": "In the acronym 'I WATCH DEATH' for causes of delirium, what does the 'I' stand for?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Injury", "isCorrect": false },
                { "id": "opt2", "text": "Infections", "isCorrect": true },
                { "id": "opt3", "text": "Inflammation", "isCorrect": false },
                { "id": "opt4", "text": "Insomnia", "isCorrect": false }
            ],
            "explanation": "I stands for Infections (like malaria, typhoid, meningitis, HIV)."
        },

        /* TOPIC 12: CRISIS & REHAB */
        {
            "id": "comp-t12-q1",
            "type": "multiple-choice",
            "question": "A crisis that arises from an unexpected, external event over which the individual has little control (e.g., natural disaster, rape) is classified as:",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Maturational crisis", "isCorrect": false },
                { "id": "opt2", "text": "Dispositional crisis", "isCorrect": false },
                { "id": "opt3", "text": "Adventitious/Traumatic crisis", "isCorrect": true },
                { "id": "opt4", "text": "Anticipated life transition", "isCorrect": false }
            ],
            "explanation": "Adventitious crises (or crises resulting from traumatic stress) are rare, unexpected events like natural disasters or crimes of violence."
        },
        {
            "id": "comp-t12-q2",
            "type": "ordering",
            "question": "Order the phases of crisis development:",
            "points": 4,
            "items": [
                { "id": "step1", "text": "Exposure to precipitating stressor, anxiety increases", "correctPosition": 1 },
                { "id": "step2", "text": "Previous problem-solving techniques fail, anxiety increases further", "correctPosition": 2 },
                { "id": "step3", "text": "All possible resources called upon to resolve problem", "correctPosition": 3 },
                { "id": "step4", "text": "If unsolved, anxiety overwhelms leadings to disorganization (breaking point)", "correctPosition": 4 }
            ],
            "explanation": "Crisis develops from exposure -> failure of coping -> mobilization of new resources -> disorganization if unresolved."
        }
    ]
});