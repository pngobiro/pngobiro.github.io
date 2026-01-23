registerQuiz("comprehensive-exam", {
    "schemaVersion": "1.0",
    "quizId": "comprehensive-exam",
    "metadata": {
        "title": "Comprehensive Final Exam",
        "description": "A comprehensive assessment covering Foundations, Neurobiology, Therapeutic Relationships, Disease Processes, and Special Populations in Psychiatric-Mental Health Nursing.",
        "topicId": "comprehensive",
        "difficulty": "advanced",
        "estimatedTime": 120,
        "passingScore": 75,
        "createdAt": "2026-01-22T10:00:00Z",
        "updatedAt": "2026-01-22T10:00:00Z",
        "tags": ["final", "comprehensive", "nclex-prep"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "end",
        "allowRetry": true,
        "showCorrectAnswers": true,
        "timeLimit": 7200
    },
    "questions": [
        {
            "id": "q1-foundations",
            "type": "multiple-choice",
            "question": "Which historical figure is credited with formulating the concept of 'asylum' as a safe refuge and initiating the moral treatment of the mentally ill?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Sigmund Freud", "isCorrect": false },
                { "id": "opt2", "text": "Dorothea Dix", "isCorrect": false },
                { "id": "opt3", "text": "Philippe Pinel", "isCorrect": true },
                { "id": "opt4", "text": "Hildegard Peplau", "isCorrect": false }
            ],
            "explanation": "Philippe Pinel in France (and William Tuke in England) formulated the concept of asylum as a safe refuge offering protection at institutions where people had previously been whipped, beaten, and starved."
        },
        {
            "id": "q2-neuro",
            "type": "multiple-select",
            "question": "Which of the following are considered Extrapyramidal Side Effects (EPS) associated with antipsychotic medication? (Select all that apply)",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Acute Dystonia", "isCorrect": true },
                { "id": "opt2", "text": "Agranulocytosis", "isCorrect": false },
                { "id": "opt3", "text": "Pseudoparkinsonism", "isCorrect": true },
                { "id": "opt4", "text": "Akathisia", "isCorrect": true },
                { "id": "opt5", "text": "Orthostatic Hypotension", "isCorrect": false }
            ],
            "explanation": "EPSs include acute dystonia (muscular rigidity/cramping), pseudoparkinsonism (stiff posture, masklike face, shuffling gait), and akathisia (intense need to move/restlessness). Agranulocytosis is a blood disorder, and orthostatic hypotension is an anticholinergic/cardiovascular side effect."
        },
        {
            "id": "q3-theories",
            "type": "matching",
            "question": "Match the theorist with their primary contribution to psychiatric care.",
            "points": 1,
            "pairs": [
                { "id": "p1", "left": "Hildegard Peplau", "right": "Therapeutic Nurse-Client Relationship" },
                { "id": "p2", "left": "Sigmund Freud", "right": "Psychoanalytic Theory (Id, Ego, Superego)" },
                { "id": "p3", "left": "Erik Erikson", "right": "Psychosocial Stages of Development" },
                { "id": "p4", "left": "B.F. Skinner", "right": "Operant Conditioning" }
            ],
            "explanation": "Peplau defined the phases of the nurse-client relationship. Freud developed psychoanalysis. Erikson expanded development across the lifespan. Skinner focused on behavioral reinforcement."
        },
        {
            "id": "q4-relationship",
            "type": "multiple-choice",
            "question": "A client unconsciously projects feelings from a past relationship onto the nurse (e.g., viewing the nurse as a strict parent). What is this process called?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Countertransference", "isCorrect": false },
                { "id": "opt2", "text": "Transference", "isCorrect": true },
                { "id": "opt3", "text": "Resistance", "isCorrect": false },
                { "id": "opt4", "text": "Denial", "isCorrect": false }
            ],
            "explanation": "Transference occurs when the client displaces onto the therapist/nurse attitudes and feelings that the client originally experienced in other relationships. Countertransference is when the nurse displaces feelings onto the client."
        },
        {
            "id": "q5-communication",
            "type": "multiple-choice",
            "question": "A client states, 'I feel like I'm dead inside.' The nurse responds, 'Are you suggesting that you feel lifeless?' Which therapeutic communication technique is the nurse using?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Reflecting", "isCorrect": false },
                { "id": "opt2", "text": "Translating into feelings", "isCorrect": true },
                { "id": "opt3", "text": "Voicing doubt", "isCorrect": false },
                { "id": "opt4", "text": "Restating", "isCorrect": false }
            ],
            "explanation": "Translating into feelings involves seeking to verbalize client's feelings that he or she expresses only indirectly."
        },
        {
            "id": "q6-legal",
            "type": "true-false",
            "question": "Under the Tarasoff decision, a mental health clinician has a duty to warn identifiable third parties of threats made by clients, even if discussed during confidential therapy sessions.",
            "points": 1,
            "correctAnswer": true,
            "explanation": "The Tarasoff vs. Regents of the University of California decision concluded that protective privilege ends where public peril begins, creating a 'duty to warn'."
        },
        {
            "id": "q7-anxiety",
            "type": "ordering",
            "question": "Order the levels of anxiety from least severe to most severe.",
            "points": 1,
            "items": [
                { "id": "i1", "text": "Mild", "correctPosition": 1 },
                { "id": "i2", "text": "Moderate", "correctPosition": 2 },
                { "id": "i3", "text": "Severe", "correctPosition": 3 },
                { "id": "i4", "text": "Panic", "correctPosition": 4 }
            ],
            "explanation": "Anxiety progresses from Mild (sharpened senses) to Moderate (selectively attentive) to Severe (perceptual field reduced to one detail) to Panic (loss of rational thought/distorted perceptions)."
        },
        {
            "id": "q8-schizo-symptoms",
            "type": "multiple-select",
            "question": "Which of the following are considered 'Positive' or 'Hard' symptoms of Schizophrenia? (Select all that apply)",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Delusions", "isCorrect": true },
                { "id": "opt2", "text": "Flat Affect", "isCorrect": false },
                { "id": "opt3", "text": "Hallucinations", "isCorrect": true },
                { "id": "opt4", "text": "Alogia (Poverty of speech)", "isCorrect": false },
                { "id": "opt5", "text": "Disorganized speech/thinking", "isCorrect": true }
            ],
            "explanation": "Positive symptoms are 'added' behaviors like delusions, hallucinations, and disorganized speech. Negative symptoms are deficits, such as flat affect, alogia, and anhedonia."
        },
        {
            "id": "q9-medication-clozapine",
            "type": "multiple-choice",
            "question": "A client is prescribed Clozapine (Clozaril). Which life-threatening side effect requires the client to have weekly white blood cell (WBC) counts for the first 6 months?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Neuroleptic Malignant Syndrome", "isCorrect": false },
                { "id": "opt2", "text": "Agranulocytosis", "isCorrect": true },
                { "id": "opt3", "text": "Tardive Dyskinesia", "isCorrect": false },
                { "id": "opt4", "text": "Serotonin Syndrome", "isCorrect": false }
            ],
            "explanation": "Clozapine has the potentially fatal side effect of agranulocytosis (failure of bone marrow to produce adequate white blood cells). Weekly monitoring is required initially."
        },
        {
            "id": "q10-mood-lithium",
            "type": "multiple-choice",
            "question": "Which serum lithium level is considered to be within the therapeutic range for maintenance?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "0.1 to 0.4 mEq/L", "isCorrect": false },
                { "id": "opt2", "text": "0.5 to 1.0 mEq/L", "isCorrect": true },
                { "id": "opt3", "text": "1.5 to 2.0 mEq/L", "isCorrect": false },
                { "id": "opt4", "text": "2.0 to 3.0 mEq/L", "isCorrect": false }
            ],
            "explanation": "Maintenance levels for lithium are generally 0.5 to 1.0 mEq/L. Levels above 1.5 mEq/L are usually considered toxic."
        },
        {
            "id": "q11-maoi-diet",
            "type": "multiple-choice",
            "question": "A client taking an MAOI antidepressant must avoid foods containing Tyramine to prevent which life-threatening condition?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Hypoglycemic shock", "isCorrect": false },
                { "id": "opt2", "text": "Hypertensive crisis", "isCorrect": true },
                { "id": "opt3", "text": "Respiratory depression", "isCorrect": false },
                { "id": "opt4", "text": "Renal failure", "isCorrect": false }
            ],
            "explanation": "Ingesting tyramine (found in aged cheeses, cured meats, beer) while taking MAOIs can cause a hypertensive crisis."
        },
        {
            "id": "q12-personality-bpd",
            "type": "multiple-choice",
            "question": "Which defense mechanism is most commonly associated with Borderline Personality Disorder, characterizing people or things as 'all good' or 'all bad'?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Projection", "isCorrect": false },
                { "id": "opt2", "text": "Splitting", "isCorrect": true },
                { "id": "opt3", "text": "Rationalization", "isCorrect": false },
                { "id": "opt4", "text": "Intellectualization", "isCorrect": false }
            ],
            "explanation": "Splitting is the thinking style where things are viewed in extremes—totally good or totally bad. It is a hallmark of BPD."
        },
        {
            "id": "q13-personality-antisocial",
            "type": "multiple-select",
            "question": "Which of the following are characteristics of Antisocial Personality Disorder? (Select all that apply)",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Lack of remorse", "isCorrect": true },
                { "id": "opt2", "text": "Disregard for the rights of others", "isCorrect": true },
                { "id": "opt3", "text": "Extreme fear of abandonment", "isCorrect": false },
                { "id": "opt4", "text": "Deceit and manipulation", "isCorrect": true },
                { "id": "opt5", "text": "Social inhibition and shyness", "isCorrect": false }
            ],
            "explanation": "Antisocial personality disorder involves disregard for rights, lack of remorse, and deceit. Fear of abandonment is BPD; social inhibition is Avoidant Personality Disorder."
        },
        {
            "id": "q14-addiction-withdrawal",
            "type": "multiple-choice",
            "question": "When assessing a client for alcohol withdrawal, which assessment tool is most appropriate to determine the severity of symptoms and need for medication?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "AIMS (Abnormal Involuntary Movement Scale)", "isCorrect": false },
                { "id": "opt2", "text": "CIWA-AR (Clinical Institute Withdrawal Assessment)", "isCorrect": true },
                { "id": "opt3", "text": "CAGE Questionnaire", "isCorrect": false },
                { "id": "opt4", "text": "Beck Depression Inventory", "isCorrect": false }
            ],
            "explanation": "CIWA-AR is the standard tool for assessing the severity of alcohol withdrawal. CAGE is a screening tool for the presence of a problem, not acute withdrawal severity."
        },
        {
            "id": "q15-addiction-meds",
            "type": "matching",
            "question": "Match the medication used in substance abuse treatment with its purpose.",
            "points": 1,
            "pairs": [
                { "id": "p1", "left": "Disulfiram (Antabuse)", "right": "Deters alcohol use by causing severe reaction if ingested" },
                { "id": "p2", "left": "Methadone", "right": "Maintains abstinence from heroin/opiates without the 'high'" },
                { "id": "p3", "left": "Lorazepam (Ativan)", "right": "Treats symptoms of alcohol withdrawal" },
                { "id": "p4", "left": "Naltrexone (ReVia)", "right": "Blocks effects of opiates and reduces alcohol cravings" }
            ],
            "explanation": "Disulfiram creates a negative physical reaction to alcohol. Methadone is a substitution therapy. Benzodiazepines like Lorazepam treat withdrawal symptoms. Naltrexone reduces cravings."
        },
        {
            "id": "q16-eating-disorders",
            "type": "multiple-choice",
            "question": "A client with Anorexia Nervosa is most likely to exhibit which physical symptom?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Erosion of dental enamel", "isCorrect": false },
                { "id": "opt2", "text": "Lanugo (fine baby-like hair)", "isCorrect": true },
                { "id": "opt3", "text": "Esophageal tears", "isCorrect": false },
                { "id": "opt4", "text": "Weight near normal range", "isCorrect": false }
            ],
            "explanation": "Lanugo is a physiological response to starvation/anorexia to conserve heat. Dental erosion and esophageal tears are associated with Bulimia/purging. Normal weight is associated with Bulimia."
        },
        {
            "id": "q17-eating-contrast",
            "type": "true-false",
            "question": "Clients with Bulimia Nervosa are typically within a normal weight range, whereas clients with Anorexia Nervosa are significantly underweight.",
            "points": 1,
            "correctAnswer": true,
            "explanation": "This is a key distinguishing feature. Anorexia involves refusal to maintain body weight; Bulimia involves binging/purging but weight often remains normal."
        },
        {
            "id": "q18-somatic",
            "type": "multiple-choice",
            "question": "A client suddenly develops blindness with no physiological cause after witnessing a violent fight. The client appears unconcerned about the blindness. This lack of concern is known as:",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Primary Gain", "isCorrect": false },
                { "id": "opt2", "text": "La belle indifférence", "isCorrect": true },
                { "id": "opt3", "text": "Malingering", "isCorrect": false },
                { "id": "opt4", "text": "Factitious Disorder", "isCorrect": false }
            ],
            "explanation": "La belle indifférence is the seeming lack of concern or distress about a functional loss (like blindness or paralysis) characteristic of Conversion Disorder."
        },
        {
            "id": "q19-somatic-gains",
            "type": "multiple-choice",
            "question": "A client's physical symptoms allow them to avoid an unpleasant task (like going to a stressful job). This benefit is referred to as:",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Primary Gain", "isCorrect": true },
                { "id": "opt2", "text": "Secondary Gain", "isCorrect": false },
                { "id": "opt3", "text": "Malingering", "isCorrect": false },
                { "id": "opt4", "text": "Internalization", "isCorrect": false }
            ],
            "explanation": "Primary gain is the relief of anxiety or avoidance of conflict achieved by the symptom itself. Secondary gain refers to external benefits like attention or sympathy."
        },
        {
            "id": "q20-neurodev-adhd",
            "type": "multiple-choice",
            "question": "Which class of medication is the first-line treatment for Attention-Deficit/Hyperactivity Disorder (ADHD)?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "SSRIs", "isCorrect": false },
                { "id": "opt2", "text": "Antipsychotics", "isCorrect": false },
                { "id": "opt3", "text": "CNS Stimulants", "isCorrect": true },
                { "id": "opt4", "text": "Benzodiazepines", "isCorrect": false }
            ],
            "explanation": "CNS Stimulants (like methylphenidate/Ritalin and amphetamines/Adderall) are the most effective and common treatment for ADHD."
        },
        {
            "id": "q21-neurodev-autism",
            "type": "multiple-select",
            "question": "Which of the following are common characteristics of Autism Spectrum Disorder (ASD)? (Select all that apply)",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Deficits in social communication/interaction", "isCorrect": true },
                { "id": "opt2", "text": "Restricted, repetitive patterns of behavior", "isCorrect": true },
                { "id": "opt3", "text": "Onset in early adulthood", "isCorrect": false },
                { "id": "opt4", "text": "Stereotyped motor movements (e.g., hand flapping)", "isCorrect": true },
                { "id": "opt5", "text": "Hallucinations and delusions", "isCorrect": false }
            ],
            "explanation": "ASD is characterized by social deficits, repetitive behaviors, and stereotyped movements. Onset is early childhood. Psychosis is not a core feature."
        },
        {
            "id": "q22-disruptive",
            "type": "multiple-choice",
            "question": "Which disorder involves a persistent pattern of violating the rights of others, deceitfulness, destruction of property, and serious rule violations?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Oppositional Defiant Disorder (ODD)", "isCorrect": false },
                { "id": "opt2", "text": "Conduct Disorder", "isCorrect": true },
                { "id": "opt3", "text": "Intermittent Explosive Disorder", "isCorrect": false },
                { "id": "opt4", "text": "ADHD", "isCorrect": false }
            ],
            "explanation": "Conduct Disorder is characterized by aggression, destruction of property, deceit, and violation of rules/rights. ODD involves defiance but not the severe violation of rights seen in Conduct Disorder."
        },
        {
            "id": "q23-cognitive-delirium",
            "type": "true-false",
            "question": "Delirium is a chronic, progressive condition that is irreversible.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "False. Delirium is an ACUTE, fluctuating disturbance that is usually reversible when the underlying cause (infection, toxicity, etc.) is treated. Dementia is chronic and progressive."
        },
        {
            "id": "q24-cognitive-dementia",
            "type": "matching",
            "question": "Match the cognitive deficit term with its definition.",
            "points": 1,
            "pairs": [
                { "id": "p1", "left": "Aphasia", "right": "Deterioration of language function" },
                { "id": "p2", "left": "Apraxia", "right": "Impaired ability to execute motor functions despite intact motor abilities" },
                { "id": "p3", "left": "Agnosia", "right": "Inability to recognize or name objects despite intact sensory abilities" },
                { "id": "p4", "left": "Confabulation", "right": "Making up answers to fill in memory gaps" }
            ],
            "explanation": "Aphasia = language; Apraxia = motor movement; Agnosia = recognition; Confabulation = filling memory gaps."
        },
        {
            "id": "q25-grief",
            "type": "ordering",
            "question": "Place Kubler-Ross's stages of grieving in the correct order.",
            "points": 1,
            "items": [
                { "id": "i1", "text": "Denial", "correctPosition": 1 },
                { "id": "i2", "text": "Anger", "correctPosition": 2 },
                { "id": "i3", "text": "Bargaining", "correctPosition": 3 },
                { "id": "i4", "text": "Depression", "correctPosition": 4 },
                { "id": "i5", "text": "Acceptance", "correctPosition": 5 }
            ],
            "explanation": "The classic stages are Denial, Anger, Bargaining, Depression, and Acceptance (DABDA)."
        },
        {
            "id": "q26-trauma",
            "type": "multiple-select",
            "question": "Which of the following are major elements of Posttraumatic Stress Disorder (PTSD)? (Select all that apply)",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Reexperiencing the trauma (dreams, flashbacks)", "isCorrect": true },
                { "id": "opt2", "text": "Avoidance of stimuli associated with the trauma", "isCorrect": true },
                { "id": "opt3", "text": "Hyperarousal (insomnia, hypervigilance)", "isCorrect": true },
                { "id": "opt4", "text": "Manic episodes", "isCorrect": false },
                { "id": "opt5", "text": "Compulsive hand washing", "isCorrect": false }
            ],
            "explanation": "PTSD is defined by reexperiencing, avoidance, negative cognition/mood, and arousal/reactivity."
        },
        {
            "id": "q27-anger",
            "type": "multiple-choice",
            "question": "During which phase of the aggression cycle is the client most likely to be physically aggressive and require seclusion or restraint?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Triggering phase", "isCorrect": false },
                { "id": "opt2", "text": "Escalation phase", "isCorrect": false },
                { "id": "opt3", "text": "Crisis phase", "isCorrect": true },
                { "id": "opt4", "text": "Recovery phase", "isCorrect": false }
            ],
            "explanation": "The Crisis phase is when the client loses control and physical aggression occurs. Interventions in earlier phases aim to prevent reaching this point."
        },
        {
            "id": "q28-abuse",
            "type": "multiple-choice",
            "question": "Which phase of the cycle of violence is characterized by the abuser expressing regret, apologizing, and promising it will never happen again?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Tension-building phase", "isCorrect": false },
                { "id": "opt2", "text": "Violent/Battering phase", "isCorrect": false },
                { "id": "opt3", "text": "Honeymoon phase", "isCorrect": true },
                { "id": "opt4", "text": "Recovery phase", "isCorrect": false }
            ],
            "explanation": "The Honeymoon phase follows the violence, where the abuser is contrite and loving, reinforcing the victim's hope for change."
        },
        {
            "id": "q29-ocd",
            "type": "multiple-choice",
            "question": "The behavioral therapy technique for OCD that involves delaying or avoiding performance of rituals is called:",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Systematic Desensitization", "isCorrect": false },
                { "id": "opt2", "text": "Response Prevention", "isCorrect": true },
                { "id": "opt3", "text": "Flooding", "isCorrect": false },
                { "id": "opt4", "text": "Thought Stopping", "isCorrect": false }
            ],
            "explanation": "Response Prevention focuses on preventing the compulsion (ritual) to break the link between the obsession and the temporary relief the ritual provides."
        },
        {
            "id": "q30-ethics",
            "type": "multiple-choice",
            "question": "Which ethical principle refers to the client's right to self-determination and independence?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Beneficence", "isCorrect": false },
                { "id": "opt2", "text": "Nonmaleficence", "isCorrect": false },
                { "id": "opt3", "text": "Autonomy", "isCorrect": true },
                { "id": "opt4", "text": "Justice", "isCorrect": false }
            ],
            "explanation": "Autonomy is the right to make one's own decisions. Beneficence is doing good; Nonmaleficence is doing no harm; Justice is fairness."
        }
    ]
});