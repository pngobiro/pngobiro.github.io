registerQuiz("comprehensive-exam", {
    "schemaVersion": "1.0",
    "quizId": "comprehensive-exam",
    "metadata": {
        "title": "Comprehensive Final Exam",
        "description": "A comprehensive assessment covering all 15 topics of the Neurological Nursing course, from anatomy and physiology to complex disorders and pediatric care.",
        "examType": "comprehensive",
        "topicsCovered": [
            "topic-01", "topic-02", "topic-03", "topic-04", "topic-05", 
            "topic-06", "topic-07", "topic-08", "topic-09", "topic-10", 
            "topic-11", "topic-12", "topic-13", "topic-14", "topic-15"
        ],
        "difficulty": "advanced",
        "estimatedTime": 60,
        "passingScore": 70,
        "createdAt": "2025-12-25T12:00:00Z",
        "tags": ["final", "exam", "certification", "neurology"]
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
        /* TOPIC 01: Anatomy & Physiology */
        {
            "id": "comp-q01",
            "type": "multiple-choice",
            "question": "Which lobe of the cerebrum is primarily responsible for concentration, abstract thought, memory, and motor function?",
            "points": 1,
            "topicId": "topic-01",
            "topicName": "Anatomy & Physiology",
            "options": [
                { "id": "a", "text": "Parietal Lobe", "isCorrect": false },
                { "id": "b", "text": "Occipital Lobe", "isCorrect": false },
                { "id": "c", "text": "Frontal Lobe", "isCorrect": true },
                { "id": "d", "text": "Temporal Lobe", "isCorrect": false }
            ],
            "explanation": "The Frontal lobe is the largest lobe and is responsible for concentration, abstract thought, information storage or memory, and motor function."
        },
        {
            "id": "comp-q02",
            "type": "multiple-choice",
            "question": "Which neurotransmitter is the major transmitter of the parasympathetic nervous system?",
            "points": 1,
            "topicId": "topic-01",
            "topicName": "Anatomy & Physiology",
            "options": [
                { "id": "a", "text": "Dopamine", "isCorrect": false },
                { "id": "b", "text": "Acetylcholine", "isCorrect": true },
                { "id": "c", "text": "Serotonin", "isCorrect": false },
                { "id": "d", "text": "Norepinephrine", "isCorrect": false }
            ],
            "explanation": "Acetylcholine is the major transmitter of the parasympathetic nervous system."
        },

        /* TOPIC 02: Neurological Assessment */
        {
            "id": "comp-q03",
            "type": "multiple-choice",
            "question": "A patient opens their eyes to voice, uses inappropriate words, and localizes pain. What is their Glasgow Coma Scale (GCS) score?",
            "points": 1,
            "topicId": "topic-02",
            "topicName": "Neurological Assessment",
            "options": [
                { "id": "a", "text": "9", "isCorrect": false },
                { "id": "b", "text": "10", "isCorrect": false },
                { "id": "c", "text": "11", "isCorrect": true },
                { "id": "d", "text": "12", "isCorrect": false }
            ],
            "explanation": "Eye opening to voice = 3; Verbal response (inappropriate words) = 3; Motor response (localizes pain) = 5. Total = 11."
        },
        {
            "id": "comp-q04",
            "type": "true-false",
            "question": "A positive Romberg test indicates a loss of balance when the patient stands with feet together and eyes closed.",
            "points": 1,
            "topicId": "topic-02",
            "topicName": "Neurological Assessment",
            "correctAnswer": true,
            "explanation": "The Romberg test screens for balance. Slight swaying is normal, but a loss of balance is abnormal and considered a positive Romberg test."
        },

        /* TOPIC 03: Diagnostic Tests */
        {
            "id": "comp-q05",
            "type": "multiple-choice",
            "question": "Which of the following is a contraindication for performing a lumbar puncture?",
            "points": 1,
            "topicId": "topic-03",
            "topicName": "Diagnostic Tests",
            "options": [
                { "id": "a", "text": "Suspected meningitis", "isCorrect": false },
                { "id": "b", "text": "Increased Intracranial Pressure (ICP)", "isCorrect": true },
                { "id": "c", "text": "Multiple Sclerosis", "isCorrect": false },
                { "id": "d", "text": "Guillain-Barré Syndrome", "isCorrect": false }
            ],
            "explanation": "LP is contraindicated in patients with increased intracranial pressure because the sudden removal of CSF may cause the brain to herniate downward through the foramen magnum."
        },

        /* TOPIC 04: Altered Level of Consciousness */
        {
            "id": "comp-q06",
            "type": "multiple-choice",
            "question": "What is the first priority of treatment for a patient with altered level of consciousness?",
            "points": 1,
            "topicId": "topic-04",
            "topicName": "Altered Consciousness",
            "options": [
                { "id": "a", "text": "Establish IV access", "isCorrect": false },
                { "id": "b", "text": "Obtain and maintain a patent airway", "isCorrect": true },
                { "id": "c", "text": "Administer naloxone", "isCorrect": false },
                { "id": "d", "text": "Insert a urinary catheter", "isCorrect": false }
            ],
            "explanation": "The first priority is to obtain and maintain a patent airway. The patient may require intubation or mechanical ventilation."
        },

        /* TOPIC 05: Increased ICP */
        {
            "id": "comp-q07",
            "type": "multiple-select",
            "question": "Which of the following are components of Cushing's Triad (a late sign of increased ICP)? (Select all that apply)",
            "points": 1,
            "topicId": "topic-05",
            "topicName": "Increased ICP",
            "options": [
                { "id": "a", "text": "Increased systolic blood pressure (widening pulse pressure)", "isCorrect": true },
                { "id": "b", "text": "Tachycardia", "isCorrect": false },
                { "id": "c", "text": "Bradycardia", "isCorrect": true },
                { "id": "d", "text": "Irregular or decreased respirations", "isCorrect": true },
                { "id": "e", "text": "Hypotension", "isCorrect": false }
            ],
            "explanation": "Cushing's Triad consists of hypertension (specifically widening pulse pressure), bradycardia, and respiratory irregularities."
        },
        {
            "id": "comp-q08",
            "type": "multiple-choice",
            "question": "Which medication is commonly used as an osmotic diuretic to dehydrate brain tissue and reduce cerebral edema?",
            "points": 1,
            "topicId": "topic-05",
            "topicName": "Increased ICP",
            "options": [
                { "id": "a", "text": "Furosemide", "isCorrect": false },
                { "id": "b", "text": "Mannitol", "isCorrect": true },
                { "id": "c", "text": "Dexamethasone", "isCorrect": false },
                { "id": "d", "text": "Phenytoin", "isCorrect": false }
            ],
            "explanation": "Mannitol is an osmotic diuretic used to dehydrate brain tissue and reduce cerebral edema."
        },

        /* TOPIC 06: Intracranial Surgery */
        {
            "id": "comp-q09",
            "type": "multiple-choice",
            "question": "Which surgical approach involves entering through the mouth and nasal sinuses to gain access to the pituitary gland?",
            "points": 1,
            "topicId": "topic-06",
            "topicName": "Intracranial Surgery",
            "options": [
                { "id": "a", "text": "Supratentorial", "isCorrect": false },
                { "id": "b", "text": "Infratentorial", "isCorrect": false },
                { "id": "c", "text": "Transsphenoidal", "isCorrect": true },
                { "id": "d", "text": "Burr Hole", "isCorrect": false }
            ],
            "explanation": "The transsphenoidal approach is used to gain access to the pituitary gland through the mouth and nasal sinuses."
        },

        /* TOPIC 07: Cerebrovascular Disorders */
        {
            "id": "comp-q10",
            "type": "multiple-choice",
            "question": "Which type of stroke accounts for approximately 85% of all cerebrovascular disorders?",
            "points": 1,
            "topicId": "topic-07",
            "topicName": "Cerebrovascular Disorders",
            "options": [
                { "id": "a", "text": "Hemorrhagic stroke", "isCorrect": false },
                { "id": "b", "text": "Ischemic stroke", "isCorrect": true },
                { "id": "c", "text": "Subarachnoid hemorrhage", "isCorrect": false },
                { "id": "d", "text": "Intracerebral hemorrhage", "isCorrect": false }
            ],
            "explanation": "Ischemic stroke accounts for 85% of all CVA cases, while hemorrhagic stroke accounts for 15%."
        },
        {
            "id": "comp-q11",
            "type": "true-false",
            "question": "A patient with a hemorrhagic stroke should be administered t-PA (tissue plasminogen activator) immediately.",
            "points": 1,
            "topicId": "topic-07",
            "topicName": "Cerebrovascular Disorders",
            "correctAnswer": false,
            "explanation": "t-PA is a thrombolytic agent used to break down clots in ischemic strokes. It is contraindicated in hemorrhagic strokes as it would increase bleeding."
        },

        /* TOPIC 08: Neurotrauma */
        {
            "id": "comp-q12",
            "type": "multiple-choice",
            "question": "Which type of hematoma is a collection of blood between the dura mater and the brain?",
            "points": 1,
            "topicId": "topic-08",
            "topicName": "Neurotrauma",
            "options": [
                { "id": "a", "text": "Epidural hematoma", "isCorrect": false },
                { "id": "b", "text": "Subdural hematoma", "isCorrect": true },
                { "id": "c", "text": "Intracerebral hematoma", "isCorrect": false },
                { "id": "d", "text": "Subarachnoid hematoma", "isCorrect": false }
            ],
            "explanation": "A subdural hematoma is a collection of blood below the dura (between the dura and the brain). Epidural is above the dura."
        },
        {
            "id": "comp-q13",
            "type": "multiple-choice",
            "question": "At the scene of a head injury, how should the patient be transported?",
            "points": 1,
            "topicId": "topic-08",
            "topicName": "Neurotrauma",
            "options": [
                { "id": "a", "text": "In a sitting position", "isCorrect": false },
                { "id": "b", "text": "In a prone position", "isCorrect": false },
                { "id": "c", "text": "On a board with head and neck in neutral alignment", "isCorrect": true },
                { "id": "d", "text": "With the head elevated 45 degrees", "isCorrect": false }
            ],
            "explanation": "Any individual with a head injury is presumed to have a cervical spine injury until proven otherwise and must be transported on a board with head/neck in neutral alignment."
        },

        /* TOPIC 09: Infections */
        {
            "id": "comp-q14",
            "type": "multiple-select",
            "question": "Which of the following are classic signs of meningitis? (Select all that apply)",
            "points": 1,
            "topicId": "topic-09",
            "topicName": "CNS Infections",
            "options": [
                { "id": "a", "text": "Nuchal rigidity (stiff neck)", "isCorrect": true },
                { "id": "b", "text": "Positive Kernig's sign", "isCorrect": true },
                { "id": "c", "text": "Positive Brudzinski's sign", "isCorrect": true },
                { "id": "d", "text": "Photophobia", "isCorrect": true },
                { "id": "e", "text": "Hypothermia", "isCorrect": false }
            ],
            "explanation": "Classic signs of meningitis include headache, fever, nuchal rigidity, positive Kernig's and Brudzinski's signs, and photophobia."
        },

        /* TOPIC 10: Autoimmune Disorders */
        {
            "id": "comp-q15",
            "type": "multiple-choice",
            "question": "Which autoimmune disorder involves the destruction of myelin in the Central Nervous System (CNS)?",
            "points": 1,
            "topicId": "topic-10",
            "topicName": "Autoimmune Disorders",
            "options": [
                { "id": "a", "text": "Guillain-Barré Syndrome", "isCorrect": false },
                { "id": "b", "text": "Myasthenia Gravis", "isCorrect": false },
                { "id": "c", "text": "Multiple Sclerosis", "isCorrect": true },
                { "id": "d", "text": "Parkinson's Disease", "isCorrect": false }
            ],
            "explanation": "Multiple Sclerosis is a progressive demyelinating disease of the CNS. Guillain-Barré affects the peripheral nerves."
        },
        {
            "id": "comp-q16",
            "type": "multiple-choice",
            "question": "What is the initial diagnostic test often used for Myasthenia Gravis?",
            "points": 1,
            "topicId": "topic-10",
            "topicName": "Autoimmune Disorders",
            "options": [
                { "id": "a", "text": "Tensilon (Edrophonium) test", "isCorrect": true },
                { "id": "b", "text": "Lumbar puncture", "isCorrect": false },
                { "id": "c", "text": "EEG", "isCorrect": false },
                { "id": "d", "text": "Angiography", "isCorrect": false }
            ],
            "explanation": "The Tensilon test involves injecting Edrophonium chloride; if facial muscle weakness resolves for ~5 minutes, it suggests Myasthenia Gravis."
        },

        /* TOPIC 11: Cranial Nerve Disorders */
        {
            "id": "comp-q17",
            "type": "fill-blank",
            "question": "Trigeminal neuralgia affects the __1__ cranial nerve, while Bell's palsy affects the __2__ cranial nerve. (Use Roman numerals)",
            "points": 2,
            "topicId": "topic-11",
            "topicName": "Cranial Nerve Disorders",
            "blanks": [
                { "id": "1", "acceptedAnswers": ["V", "v", "5", "fifth"], "caseSensitive": false },
                { "id": "2", "acceptedAnswers": ["VII", "vii", "7", "seventh"], "caseSensitive": false }
            ],
            "explanation": "Trigeminal neuralgia affects CN V (5th). Bell's palsy affects CN VII (7th)."
        },

        /* TOPIC 12: Oncologic Disorders */
        {
            "id": "comp-q18",
            "type": "multiple-choice",
            "question": "Which type of brain tumor originates from the coverings of the brain?",
            "points": 1,
            "topicId": "topic-12",
            "topicName": "Oncologic Disorders",
            "options": [
                { "id": "a", "text": "Glioma", "isCorrect": false },
                { "id": "b", "text": "Angioma", "isCorrect": false },
                { "id": "c", "text": "Meningioma", "isCorrect": true },
                { "id": "d", "text": "Neuroma", "isCorrect": false }
            ],
            "explanation": "Meningiomas arise from the meninges (coverings of the brain)."
        },

        /* TOPIC 13: Degenerative Disorders */
        {
            "id": "comp-q19",
            "type": "multiple-select",
            "question": "What are the three cardinal signs of Parkinson's Disease? (Select 3)",
            "points": 1,
            "topicId": "topic-13",
            "topicName": "Degenerative Disorders",
            "options": [
                { "id": "a", "text": "Tremor", "isCorrect": true },
                { "id": "b", "text": "Rigidity", "isCorrect": true },
                { "id": "c", "text": "Aphasia", "isCorrect": false },
                { "id": "d", "text": "Bradykinesia", "isCorrect": true },
                { "id": "e", "text": "Diplopia", "isCorrect": false }
            ],
            "explanation": "The three cardinal signs of Parkinson's disease are tremor, rigidity, and bradykinesia."
        },

        /* TOPIC 14: Seizure Disorders */
        {
            "id": "comp-q20",
            "type": "ordering",
            "question": "Arrange the stages of a generalized tonic-clonic seizure in order:",
            "points": 1,
            "topicId": "topic-14",
            "topicName": "Seizure Disorders",
            "items": [
                { "id": "1", "text": "Prodrome", "correctPosition": 1 },
                { "id": "2", "text": "Aura", "correctPosition": 2 },
                { "id": "3", "text": "Tonic stage", "correctPosition": 3 },
                { "id": "4", "text": "Clonic stage", "correctPosition": 4 },
                { "id": "5", "text": "Post-ictal stage", "correctPosition": 5 }
            ],
            "explanation": "The sequence is Prodrome -> Aura -> Tonic -> Clonic -> Post-ictal."
        },
        {
            "id": "comp-q21",
            "type": "multiple-choice",
            "question": "Which medication is typically given IV first to stop seizures in Status Epilepticus?",
            "points": 1,
            "topicId": "topic-14",
            "topicName": "Seizure Disorders",
            "options": [
                { "id": "a", "text": "Phenytoin", "isCorrect": false },
                { "id": "b", "text": "Diazepam (Valium) or Lorazepam", "isCorrect": true },
                { "id": "c", "text": "Phenobarbital", "isCorrect": false },
                { "id": "d", "text": "Carbamazepine", "isCorrect": false }
            ],
            "explanation": "IV Diazepam or Lorazepam is given slowly to halt seizures immediately. Phenytoin is usually given later for maintenance."
        },

        /* TOPIC 15: Pediatric Neurology */
        {
            "id": "comp-q22",
            "type": "multiple-choice",
            "question": "In an infant with hydrocephalus, what sign might you observe instead of the typical signs of increased ICP seen in adults?",
            "points": 1,
            "topicId": "topic-15",
            "topicName": "Pediatric Neurology",
            "options": [
                { "id": "a", "text": "Papilledema", "isCorrect": false },
                { "id": "b", "text": "Bulging anterior fontanelle", "isCorrect": true },
                { "id": "c", "text": "Headache complaints", "isCorrect": false },
                { "id": "d", "text": "Hemiparesis", "isCorrect": false }
            ],
            "explanation": "In young babies/infants, the anterior fontanelle may bulge outwards due to increased pressure, as the sutures have not yet fused."
        },
        {
            "id": "comp-q23",
            "type": "multiple-choice",
            "question": "What is the primary management for hydrocephalus?",
            "points": 1,
            "topicId": "topic-15",
            "topicName": "Pediatric Neurology",
            "options": [
                { "id": "a", "text": "Long-term antibiotics", "isCorrect": false },
                { "id": "b", "text": "Insertion of a shunt (Ventriculostomy)", "isCorrect": true },
                { "id": "c", "text": "Radiation therapy", "isCorrect": false },
                { "id": "d", "text": "Bed rest only", "isCorrect": false }
            ],
            "explanation": "Surgical intervention involving a ventriculostomy (shunt) to drain CSF from the ventricle to another area (e.g., abdomen) is the primary management."
        },

        /* General / Mixed Concepts */
        {
            "id": "comp-q24",
            "type": "multiple-choice",
            "question": "Which of the following is an autoimmune disorder characterized by 'ascending weakness'?",
            "points": 1,
            "topicId": "topic-10",
            "topicName": "Autoimmune Disorders",
            "options": [
                { "id": "a", "text": "Myasthenia Gravis", "isCorrect": false },
                { "id": "b", "text": "Multiple Sclerosis", "isCorrect": false },
                { "id": "c", "text": "Guillain-Barré Syndrome", "isCorrect": true },
                { "id": "d", "text": "Parkinson's Disease", "isCorrect": false }
            ],
            "explanation": "Guillain-Barré Syndrome typically presents with symmetric weakness that begins in the legs and progresses upward (ascending weakness)."
        },
        {
            "id": "comp-q25",
            "type": "multiple-choice",
            "question": "A patient with a spinal cord injury at T6 or higher is at risk for which life-threatening complication characterized by severe hypertension and bradycardia?",
            "points": 1,
            "topicId": "topic-08",
            "topicName": "Neurotrauma",
            "options": [
                { "id": "a", "text": "Spinal Shock", "isCorrect": false },
                { "id": "b", "text": "Autonomic Dysreflexia", "isCorrect": true },
                { "id": "c", "text": "Neurogenic Shock", "isCorrect": false },
                { "id": "d", "text": "Status Epilepticus", "isCorrect": false }
            ],
            "explanation": "Autonomic Dysreflexia is a complication in SCI (T6 or higher) causing severe HTN, bradycardia, and headache, usually triggered by a noxious stimulus like a full bladder."
        }
    ]
});