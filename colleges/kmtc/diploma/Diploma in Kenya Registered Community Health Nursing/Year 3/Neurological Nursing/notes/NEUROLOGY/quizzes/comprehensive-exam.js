
registerQuiz("comprehensive-exam", {
    "schemaVersion": "1.0",
    "quizId": "comprehensive-exam",
    "metadata": {
        "title": "Comprehensive Final Exam: Neurological Nursing",
        "description": "A comprehensive assessment covering anatomy, diagnostics, acute and chronic conditions, trauma, infections, and specialized neurological care.",
        "examType": "comprehensive",
        "topicsCovered": [
            "topic-01", "topic-02", "topic-03", "topic-04", 
            "topic-05", "topic-06", "topic-07", "topic-08", 
            "topic-09", "topic-10", "topic-11", "topic-12"
        ],
        "difficulty": "advanced",
        "estimatedTime": 90,
        "passingScore": 75,
        "createdAt": "2025-12-28T12:00:00Z",
        "tags": ["final", "certification", "neurology", "nursing"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "end",
        "allowRetry": false,
        "showCorrectAnswers": true,
        "timeLimit": 5400
    },
    "questions": [
        // TOPIC 01: ANATOMY & PHYSIOLOGY
        {
            "id": "comp-t01-q01",
            "type": "multiple-choice",
            "topicId": "topic-01",
            "topicName": "Anatomy & Physiology",
            "question": "Which neurotransmitter is primarily responsible for the 'fight or flight' response in the Sympathetic Nervous System?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Acetylcholine", "isCorrect": false },
                { "id": "b", "text": "Dopamine", "isCorrect": false },
                { "id": "c", "text": "Norepinephrine", "isCorrect": true },
                { "id": "d", "text": "Serotonin", "isCorrect": false }
            ],
            "explanation": "Norepinephrine is the major neurotransmitter of the sympathetic nervous system, while Acetylcholine is the major transmitter of the parasympathetic system."
        },
        {
            "id": "comp-t01-q02",
            "type": "matching",
            "topicId": "topic-01",
            "topicName": "Anatomy & Physiology",
            "question": "Match the cerebral lobe with its primary function:",
            "points": 4,
            "pairs": [
                { "id": "p1", "left": "Frontal Lobe", "right": "Concentration, motor function, Broca's area" },
                { "id": "p2", "left": "Parietal Lobe", "right": "Sensory analysis and spatial awareness" },
                { "id": "p3", "left": "Temporal Lobe", "right": "Auditory reception and interpretation" },
                { "id": "p4", "left": "Occipital Lobe", "right": "Visual interpretation" }
            ]
        },
        {
            "id": "comp-t01-q03",
            "type": "ordering",
            "topicId": "topic-01",
            "topicName": "Anatomy & Physiology",
            "question": "Arrange the flow of Cerebrospinal Fluid (CSF) in the correct order of circulation:",
            "points": 4,
            "items": [
                { "id": "i1", "text": "Lateral Ventricles", "correctPosition": 1 },
                { "id": "i2", "text": "Foramen of Monro (Interventricular foramen)", "correctPosition": 2 },
                { "id": "i3", "text": "Third Ventricle", "correctPosition": 3 },
                { "id": "i4", "text": "Aqueduct of Sylvius", "correctPosition": 4 },
                { "id": "i5", "text": "Fourth Ventricle", "correctPosition": 5 },
                { "id": "i6", "text": "Subarachnoid Space", "correctPosition": 6 }
            ]
        },

        // TOPIC 02: ASSESSMENT
        {
            "id": "comp-t02-q01",
            "type": "fill-blank",
            "topicId": "topic-02",
            "topicName": "Assessment & Diagnostics",
            "question": "The __1__ sign is a screening test for balance where the patient stands with feet together and eyes closed. A positive result indicates a loss of balance.",
            "points": 2,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["Romberg", "romberg", "Romberg's"], "caseSensitive": false }
            ],
            "explanation": "The Romberg test assesses cerebellar function and balance. Slight swaying is normal, but loss of balance is a positive result."
        },
        {
            "id": "comp-t02-q02",
            "type": "multiple-choice",
            "topicId": "topic-02",
            "topicName": "Assessment & Diagnostics",
            "question": "A patient opens their eyes to pain, withdraws from painful stimuli, and speaks inappropriate words. What is their Glasgow Coma Scale (GCS) score?",
            "points": 3,
            "options": [
                { "id": "a", "text": "8 (E2, V3, M3)", "isCorrect": false },
                { "id": "b", "text": "9 (E2, V3, M4)", "isCorrect": true },
                { "id": "c", "text": "10 (E3, V3, M4)", "isCorrect": false },
                { "id": "d", "text": "7 (E2, V2, M3)", "isCorrect": false }
            ],
            "explanation": "Eye opening to pain = 2; Inappropriate words = 3; Withdraws from pain = 4. Total = 9."
        },
        {
            "id": "comp-t02-q03",
            "type": "true-false",
            "topicId": "topic-02",
            "topicName": "Assessment & Diagnostics",
            "question": "A lumbar puncture is contraindicated in patients with increased intracranial pressure (ICP) because it may cause brain herniation.",
            "points": 1,
            "correctAnswer": true,
            "explanation": "Removal of CSF when ICP is elevated can create a pressure gradient that causes the brain to herniate downward through the foramen magnum."
        },

        // TOPIC 03: ACUTE CONDITIONS
        {
            "id": "comp-t03-q01",
            "type": "multiple-select",
            "topicId": "topic-03",
            "topicName": "Acute Neurological Conditions",
            "question": "Which of the following signs comprise Cushing's Triad, a late indication of increased ICP? (Select all that apply)",
            "points": 3,
            "options": [
                { "id": "a", "text": "Increased systolic blood pressure (widening pulse pressure)", "isCorrect": true },
                { "id": "b", "text": "Tachycardia (Increased pulse)", "isCorrect": false },
                { "id": "c", "text": "Bradycardia (Decreased pulse)", "isCorrect": true },
                { "id": "d", "text": "Irregular respirations", "isCorrect": true },
                { "id": "e", "text": "Hypotension", "isCorrect": false }
            ],
            "partialCredit": true,
            "explanation": "Cushing's Triad consists of hypertension (increased systolic BP), bradycardia (slow pulse), and irregular respirations."
        },
        {
            "id": "comp-t03-q02",
            "type": "multiple-choice",
            "topicId": "topic-03",
            "topicName": "Acute Neurological Conditions",
            "question": "Which osmotic diuretic is commonly administered to dehydrate brain tissue and reduce cerebral edema?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Furosemide", "isCorrect": false },
                { "id": "b", "text": "Mannitol", "isCorrect": true },
                { "id": "c", "text": "Hydrochlorothiazide", "isCorrect": false },
                { "id": "d", "text": "Spironolactone", "isCorrect": false }
            ],
            "explanation": "Mannitol is an osmotic diuretic used specifically to draw fluid out of the brain tissue into the vascular space to reduce ICP."
        },

        // TOPIC 04: CEREBROVASCULAR
        {
            "id": "comp-t04-q01",
            "type": "multiple-choice",
            "topicId": "topic-04",
            "topicName": "Cerebrovascular Disorders",
            "question": "Which of the following is an absolute contraindication or caution for t-PA (tissue plasminogen activator) therapy in ischemic stroke?",
            "points": 2,
            "options": [
                { "id": "a", "text": "Symptom onset 2 hours ago", "isCorrect": false },
                { "id": "b", "text": "Age 45 years", "isCorrect": false },
                { "id": "c", "text": "Hemorrhagic stroke confirmed by CT", "isCorrect": true },
                { "id": "d", "text": "History of diabetes", "isCorrect": false }
            ],
            "explanation": "t-PA is a thrombolytic (clot-buster). Giving it to a patient with a hemorrhagic stroke (bleeding) would be fatal. It must be ruled out by CT first."
        },
        {
            "id": "comp-t04-q02",
            "type": "multiple-select",
            "topicId": "topic-04",
            "topicName": "Cerebrovascular Disorders",
            "question": "Which nursing interventions are appropriate for a patient on 'Aneurysm Precautions'? (Select all that apply)",
            "points": 3,
            "options": [
                { "id": "a", "text": "Absolute bed rest in a quiet environment", "isCorrect": true },
                { "id": "b", "text": "Elevate head of bed 15 to 30 degrees", "isCorrect": true },
                { "id": "c", "text": "Encourage vigorous coughing and deep breathing", "isCorrect": false },
                { "id": "d", "text": "Nurse performs all personal care (bathing/feeding)", "isCorrect": true },
                { "id": "e", "text": "Bright lighting to prevent falls", "isCorrect": false }
            ],
            "explanation": "Aneurysm precautions aim to prevent increases in ICP and BP. This involves low stimulation (dim lights, quiet), preventing exertion (nurse provides care), and bed rest."
        },

        // TOPIC 05: TRAUMA
        {
            "id": "comp-t05-q01",
            "type": "matching",
            "topicId": "topic-05",
            "topicName": "Neurologic Trauma",
            "question": "Match the type of hematoma with its location:",
            "points": 3,
            "pairs": [
                { "id": "p1", "left": "Epidural Hematoma", "right": "Blood collection above the dura mater" },
                { "id": "p2", "left": "Subdural Hematoma", "right": "Blood collection below the dura mater" },
                { "id": "p3", "left": "Intracerebral Hematoma", "right": "Blood collection within the brain tissue" }
            ]
        },
        {
            "id": "comp-t05-q02",
            "type": "fill-blank",
            "topicId": "topic-05",
            "topicName": "Neurologic Trauma",
            "question": "A life-threatening complication of spinal cord injury (above T6) triggered by noxious stimuli (like a full bladder) characterized by severe hypertension is called __1__.",
            "points": 3,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["autonomic dysreflexia", "hyperreflexia"], "caseSensitive": false }
            ],
            "explanation": "Autonomic dysreflexia is an acute emergency caused by an exaggerated autonomic response to stimuli, resulting in severe hypertension and bradycardia."
        },

        // TOPIC 06: INFECTIONS
        {
            "id": "comp-t06-q01",
            "type": "multiple-choice",
            "topicId": "topic-06",
            "topicName": "Neurologic Infections",
            "question": "Which assessment finding is indicative of a positive Kernig's sign?",
            "points": 2,
            "options": [
                { "id": "a", "text": "Neck flexion causes flexion of the knees and hips", "isCorrect": false },
                { "id": "b", "text": "Pain and inability to fully extend the leg when the thigh is flexed", "isCorrect": true },
                { "id": "c", "text": "Fanning of toes when the sole of the foot is stroked", "isCorrect": false },
                { "id": "d", "text": "Swaying when standing with feet together and eyes closed", "isCorrect": false }
            ],
            "explanation": "Kernig's sign is positive when the leg cannot be completely extended due to pain when the thigh is flexed on the abdomen. Neck flexion causing knee flexion is Brudzinski's sign."
        },
        {
            "id": "comp-t06-q02",
            "type": "multiple-choice",
            "topicId": "topic-06",
            "topicName": "Neurologic Infections",
            "question": "What is the most common cause of acute encephalitis?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Neisseria meningitidis", "isCorrect": false },
                { "id": "b", "text": "Herpes Simplex Virus (HSV)", "isCorrect": true },
                { "id": "c", "text": "Staphylococcus aureus", "isCorrect": false },
                { "id": "d", "text": "Fungal spores", "isCorrect": false }
            ],
            "explanation": "Herpes Simplex Virus (HSV) is the most common cause of acute encephalitis."
        },

        // TOPIC 07: SPINAL DISORDERS
        {
            "id": "comp-t07-q01",
            "type": "multiple-select",
            "topicId": "topic-07",
            "topicName": "Spinal Disorders",
            "question": "Which of the following are 'Red Flags' for back pain that require urgent referral? (Select all that apply)",
            "points": 3,
            "options": [
                { "id": "a", "text": "Saddle anesthesia", "isCorrect": true },
                { "id": "b", "text": "Recent onset urinary retention or incontinence", "isCorrect": true },
                { "id": "c", "text": "Pain relieved by lying down", "isCorrect": false },
                { "id": "d", "text": "Severe progressive bilateral leg weakness", "isCorrect": true },
                { "id": "e", "text": "Pain localized to the lower back after lifting", "isCorrect": false }
            ],
            "explanation": "Saddle anesthesia, bladder/bowel dysfunction, and progressive bilateral weakness are signs of Cauda Equina Syndrome, a medical emergency."
        },
        {
            "id": "comp-t07-q02",
            "type": "multiple-choice",
            "topicId": "topic-07",
            "topicName": "Spinal Disorders",
            "question": "Discitis is most commonly caused by which pathogen?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Escherichia coli", "isCorrect": false },
                { "id": "b", "text": "Staphylococcus aureus", "isCorrect": true },
                { "id": "c", "text": "Streptococcus pneumoniae", "isCorrect": false },
                { "id": "d", "text": "Pseudomonas aeruginosa", "isCorrect": false }
            ],
            "explanation": "Staphylococcus aureus is the most common pathogen causing discitis (infection of the intervertebral disc space)."
        },

        // TOPIC 08: CHRONIC DISORDERS
        {
            "id": "comp-t08-q01",
            "type": "matching",
            "topicId": "topic-08",
            "topicName": "Chronic Disorders",
            "question": "Match the chronic disorder with its underlying pathophysiology:",
            "points": 4,
            "pairs": [
                { "id": "p1", "left": "Multiple Sclerosis", "right": "Demyelination of CNS nerve fibers" },
                { "id": "p2", "left": "Parkinson's Disease", "right": "Decreased dopamine in basal ganglia" },
                { "id": "p3", "left": "Myasthenia Gravis", "right": "Antibodies against acetylcholine receptors" },
                { "id": "p4", "left": "Alzheimer's Disease", "right": "Beta-amyloid plaques and tau tangles" }
            ]
        },
        {
            "id": "comp-t08-q02",
            "type": "multiple-choice",
            "topicId": "topic-08",
            "topicName": "Chronic Disorders",
            "question": "Which medication is considered the mainstay of treatment for Parkinson's Disease?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Interferon beta-1a", "isCorrect": false },
                { "id": "b", "text": "Riluzole", "isCorrect": false },
                { "id": "c", "text": "Levodopa/Carbidopa", "isCorrect": true },
                { "id": "d", "text": "Pyridostigmine", "isCorrect": false }
            ],
            "explanation": "Levodopa is converted to dopamine in the brain and is the most effective agent for controlling Parkinson's symptoms."
        },

        // TOPIC 09: CRANIAL/NEUROMUSCULAR
        {
            "id": "comp-t09-q01",
            "type": "multiple-choice",
            "topicId": "topic-09",
            "topicName": "Cranial & Neuromuscular",
            "question": "A patient with Trigeminal Neuralgia asks how to prevent future pain attacks. What advice is appropriate?",
            "points": 2,
            "options": [
                { "id": "a", "text": "Massage the face vigorously to desensitize it", "isCorrect": false },
                { "id": "b", "text": "Consume foods and fluids at room temperature", "isCorrect": true },
                { "id": "c", "text": "Use ice packs on the affected side", "isCorrect": false },
                { "id": "d", "text": "Practice facial muscle strengthening exercises", "isCorrect": false }
            ],
            "explanation": "Triggers include extreme temperatures (hot or cold) and touch. Food/fluids at room temperature minimize stimulation of the nerve endings."
        },
        {
            "id": "comp-t09-q02",
            "type": "true-false",
            "topicId": "topic-09",
            "topicName": "Cranial & Neuromuscular",
            "question": "Bell's Palsy is a permanent condition caused by a stroke.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "Bell's Palsy is inflammation of the 7th cranial nerve, not a stroke, and spontaneous recovery usually occurs within 3 to 5 weeks."
        },

        // TOPIC 10: PEDIATRIC
        {
            "id": "comp-t10-q01",
            "type": "multiple-choice",
            "topicId": "topic-10",
            "topicName": "Pediatric Neurology",
            "question": "Which sign is characteristic of Duchenne Muscular Dystrophy where a child uses their hands to 'walk up' their own body from a squatting position?",
            "points": 2,
            "options": [
                { "id": "a", "text": "Kernig's Sign", "isCorrect": false },
                { "id": "b", "text": "Gower's Sign", "isCorrect": true },
                { "id": "c", "text": "Babinski's Sign", "isCorrect": false },
                { "id": "d", "text": "Brudzinski's Sign", "isCorrect": false }
            ],
            "explanation": "Gower's sign indicates pelvic muscle weakness characteristic of Duchenne Muscular Dystrophy."
        },
        {
            "id": "comp-t10-q02",
            "type": "fill-blank",
            "topicId": "topic-10",
            "topicName": "Pediatric Neurology",
            "question": "In infants with hydrocephalus, palpation of the __1__ may reveal bulging or tension.",
            "points": 2,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["fontanelle", "anterior fontanelle", "fontanelles"], "caseSensitive": false }
            ],
            "explanation": "Bulging fontanelles are a key sign of increased intracranial pressure/hydrocephalus in infants whose sutures have not yet fused."
        },

        // TOPIC 11: ONCOLOGY
        {
            "id": "comp-t11-q01",
            "type": "multiple-choice",
            "topicId": "topic-11",
            "topicName": "Brain Tumors",
            "question": "Which type of primary brain tumor arises from the coverings of the brain?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Glioma", "isCorrect": false },
                { "id": "b", "text": "Meningioma", "isCorrect": true },
                { "id": "c", "text": "Neuroma", "isCorrect": false },
                { "id": "d", "text": "Angioma", "isCorrect": false }
            ],
            "explanation": "Meningiomas arise from the meninges (coverings) of the brain. Gliomas arise from brain tissue itself."
        },
        {
            "id": "comp-t11-q02",
            "type": "multiple-choice",
            "topicId": "topic-11",
            "topicName": "Brain Tumors",
            "question": "Following a craniotomy, the nurse observes clear fluid draining from the patient's nose. This finding most likely indicates:",
            "points": 2,
            "options": [
                { "id": "a", "text": "Normal sinus drainage", "isCorrect": false },
                { "id": "b", "text": "CSF leakage", "isCorrect": true },
                { "id": "c", "text": "Severe hemorrhage", "isCorrect": false },
                { "id": "d", "text": "Development of a cold", "isCorrect": false }
            ],
            "explanation": "Clear drainage from the nose (rhinorrhea) or ear (otorrhea) after cranial surgery suggests a CSF leak, which poses a high risk for meningitis."
        },

        // TOPIC 12: SEIZURES
        {
            "id": "comp-t12-q01",
            "type": "ordering",
            "topicId": "topic-12",
            "topicName": "Seizure Disorders",
            "question": "Place the stages of a generalized (Grand Mal) seizure in the correct chronological order:",
            "points": 4,
            "items": [
                { "id": "i1", "text": "Prodrome Stage (irritability/hyperactivity)", "correctPosition": 1 },
                { "id": "i2", "text": "Aura (Warning sensation)", "correctPosition": 2 },
                { "id": "i3", "text": "Tonic Stage (Muscle rigidity)", "correctPosition": 3 },
                { "id": "i4", "text": "Clonic Stage (Violent muscle spasms)", "correctPosition": 4 },
                { "id": "i5", "text": "Ictal Phase (Coma)", "correctPosition": 5 },
                { "id": "i6", "text": "Post-ictal Stage (Recovery/Confusion)", "correctPosition": 6 }
            ]
        },
        {
            "id": "comp-t12-q02",
            "type": "multiple-choice",
            "topicId": "topic-12",
            "topicName": "Seizure Disorders",
            "question": "Which medication is the first-line emergency treatment to stop seizures in Status Epilepticus?",
            "points": 2,
            "options": [
                { "id": "a", "text": "Oral Phenytoin", "isCorrect": false },
                { "id": "b", "text": "IV Diazepam (Valium) or Lorazepam", "isCorrect": true },
                { "id": "c", "text": "Oral Carbamazepine", "isCorrect": false },
                { "id": "d", "text": "IV Mannitol", "isCorrect": false }
            ],
            "explanation": "Benzodiazepines like Diazepam or Lorazepam are given IV to halt seizures immediately. Phenytoin is given later for maintenance."
        }
    ]
});