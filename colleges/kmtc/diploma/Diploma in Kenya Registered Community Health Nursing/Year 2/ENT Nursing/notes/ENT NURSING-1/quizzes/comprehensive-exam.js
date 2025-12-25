registerQuiz("comprehensive-exam", {
    "schemaVersion": "1.0",
    "quizId": "comprehensive-exam",
    "metadata": {
        "title": "Comprehensive Final Exam",
        "description": "Comprehensive assessment covering anatomy, physiology, assessment, and management of ENT conditions.",
        "examType": "comprehensive",
        "topicsCovered": [
            "topic-01", "topic-02", "topic-03", "topic-04", 
            "topic-05", "topic-06", "topic-07", "topic-08"
        ],
        "difficulty": "advanced",
        "estimatedTime": 60,
        "passingScore": 75,
        "createdAt": "2025-12-25T12:00:00Z",
        "tags": ["final", "comprehensive", "all-topics", "nursing"]
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
        // TOPIC 01: Anatomy & Physiology
        {
            "id": "t1-q1",
            "type": "multiple-choice",
            "topicId": "topic-01",
            "topicName": "Anatomy of the Ear",
            "question": "Which structure completely separates the external acoustic meatus from the middle ear?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Oval Window", "isCorrect": false },
                { "id": "b", "text": "Tympanic Membrane", "isCorrect": true },
                { "id": "c", "text": "Eustachian Tube", "isCorrect": false },
                { "id": "d", "text": "Round Window", "isCorrect": false }
            ],
            "explanation": "The tympanic membrane (eardrum) is the structure that completely separates the external ear canal from the middle ear cavity."
        },
        {
            "id": "t1-q2",
            "type": "fill-blank",
            "topicId": "topic-01",
            "topicName": "Anatomy of the Ear",
            "question": "The inner ear consists of two labyrinths. The bony labyrinth is filled with __b1__, while the membranous labyrinth is filled with __b2__.",
            "points": 2,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["perilymph"], "caseSensitive": false },
                { "id": "b2", "acceptedAnswers": ["endolymph"], "caseSensitive": false }
            ],
            "explanation": "Perilymph fills the space between the bony and membranous labyrinths, while endolymph fills the membranous labyrinth itself."
        },
        {
            "id": "t1-q3",
            "type": "matching",
            "topicId": "topic-01",
            "topicName": "Anatomy of the Ear",
            "question": "Match the ossicle to its description:",
            "points": 3,
            "pairs": [
                { "id": "p1", "left": "Malleus", "right": "Hammer shaped; handle touches tympanic membrane" },
                { "id": "p2", "left": "Incus", "right": "Anvil shaped; middle bone" },
                { "id": "p3", "left": "Stapes", "right": "Stirrup shaped; footplate fits in oval window" }
            ],
            "explanation": "The ossicular chain consists of the Malleus (lateral), Incus (middle), and Stapes (medial)."
        },

        // TOPIC 02: Assessment
        {
            "id": "t2-q1",
            "type": "multiple-choice",
            "topicId": "topic-02",
            "topicName": "Auditory Assessment",
            "question": "During a Weber test, a patient reports hearing the sound better in their right ear. The patient is known to have conductive hearing loss. Which ear is the affected ear?",
            "points": 1,
            "options": [
                { "id": "a", "text": "The Right Ear", "isCorrect": true },
                { "id": "b", "text": "The Left Ear", "isCorrect": false },
                { "id": "c", "text": "Neither, the result is inconclusive", "isCorrect": false },
                { "id": "d", "text": "Both ears equally", "isCorrect": false }
            ],
            "explanation": "In conductive hearing loss, the sound lateralizes to (is heard better in) the affected ear during the Weber test."
        },
        {
            "id": "t2-q2",
            "type": "multiple-choice",
            "topicId": "topic-02",
            "topicName": "Auditory Assessment",
            "question": "Which of the following is a contraindication for performing a Caloric Test?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Sensorineural hearing loss", "isCorrect": false },
                { "id": "b", "text": "Perforated tympanic membrane", "isCorrect": true },
                { "id": "c", "text": "History of vertigo", "isCorrect": false },
                { "id": "d", "text": "Tinnitus", "isCorrect": false }
            ],
            "explanation": "A caloric test involves instilling water into the ear canal. If the eardrum is perforated, this can introduce infection to the middle ear."
        },
        {
            "id": "t2-q3",
            "type": "true-false",
            "topicId": "topic-02",
            "topicName": "Auditory Assessment",
            "question": "When straightening the ear canal of an adult for otoscopy, the pinna should be pulled down and back.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "For adults, the pinna should be pulled UP, back, and out. Down and back is the technique for children."
        },

        // TOPIC 03: Hearing Loss
        {
            "id": "t3-q1",
            "type": "multiple-select",
            "topicId": "topic-03",
            "topicName": "Hearing Loss",
            "question": "Which of the following are clinical manifestations of hearing loss? (Select all that apply)",
            "points": 2,
            "options": [
                { "id": "a", "text": "Answering questions appropriately", "isCorrect": false },
                { "id": "b", "text": "Tinnitus", "isCorrect": true },
                { "id": "c", "text": "Inability to hear in groups", "isCorrect": true },
                { "id": "d", "text": "Decreased volume of speech", "isCorrect": false },
                { "id": "e", "text": "Social withdrawal", "isCorrect": true }
            ],
            "partialCredit": true,
            "explanation": "Manifestations include tinnitus, inability to hear in groups, answering inappropriately, increased volume of TV/Radio, and social withdrawal. Speech usually becomes louder or flat, not decreased."
        },
        {
            "id": "t3-q2",
            "type": "matching",
            "topicId": "topic-03",
            "topicName": "Hearing Loss",
            "question": "Match the type of hearing loss with its cause:",
            "points": 2,
            "pairs": [
                { "id": "p1", "left": "Conductive Loss", "right": "Impacted Cerumen" },
                { "id": "p2", "left": "Sensorineural Loss", "right": "Ototoxic Drugs" },
                { "id": "p3", "left": "Central Loss", "right": "Cerebrovascular Accident (CVA)" },
                { "id": "p4", "left": "Presbycusis", "right": "Aging" }
            ],
            "explanation": "Conductive involves obstruction/middle ear; Sensorineural involves nerve/inner ear; Central involves the brain."
        },

        // TOPIC 04: External & Middle Ear
        {
            "id": "t4-q1",
            "type": "multiple-choice",
            "topicId": "topic-04",
            "topicName": "External & Middle Ear",
            "question": "A child presents with a vegetable foreign body (a bean) in the ear canal. What is the PRIORITY action to avoid?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Using suction", "isCorrect": false },
                { "id": "b", "text": "Irrigating with water", "isCorrect": true },
                { "id": "c", "text": "Visualizing with an otoscope", "isCorrect": false },
                { "id": "d", "text": "Referral to a specialist", "isCorrect": false }
            ],
            "explanation": "Vegetable foreign bodies swell when wet, causing pain and making removal difficult. Do NOT irrigate."
        },
        {
            "id": "t4-q2",
            "type": "multiple-choice",
            "topicId": "topic-04",
            "topicName": "External & Middle Ear",
            "question": "Which finding is characteristic of Otosclerosis?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Erythematous bulging tympanic membrane", "isCorrect": false },
                { "id": "b", "text": "Abnormal spongy bone formation around the stapes", "isCorrect": true },
                { "id": "c", "text": "Fluid in the middle ear without infection", "isCorrect": false },
                { "id": "d", "text": "Pain upon traction of the pinna", "isCorrect": false }
            ],
            "explanation": "Otosclerosis involves the fixation of the stapes due to abnormal spongy bone growth."
        },
        {
            "id": "t4-q3",
            "type": "multiple-select",
            "topicId": "topic-04",
            "topicName": "External & Middle Ear",
            "question": "Following a mastoidectomy, the nurse monitors for facial nerve injury. Which signs would indicate this complication? (Select all that apply)",
            "points": 2,
            "options": [
                { "id": "a", "text": "Drooping of the mouth on operated side", "isCorrect": true },
                { "id": "b", "text": "Slurred speech", "isCorrect": true },
                { "id": "c", "text": "Inability to swallow", "isCorrect": true },
                { "id": "d", "text": "Increased hearing acuity", "isCorrect": false },
                { "id": "e", "text": "Decreased sensation on the face", "isCorrect": true }
            ],
            "partialCredit": true,
            "explanation": "Facial nerve injury (CN VII) causes facial weakness/drooping, slurring, dysphagia, and decreased sensation."
        },

        // TOPIC 05: Inner Ear
        {
            "id": "t5-q1",
            "type": "multiple-select",
            "topicId": "topic-05",
            "topicName": "Inner Ear Conditions",
            "question": "Select the classic triad of symptoms associated with Meniere's Disease:",
            "points": 2,
            "options": [
                { "id": "a", "text": "Episodic Vertigo", "isCorrect": true },
                { "id": "b", "text": "Tinnitus", "isCorrect": true },
                { "id": "c", "text": "Fluctuating Sensorineural Hearing Loss", "isCorrect": true },
                { "id": "d", "text": "Severe Otalgia", "isCorrect": false },
                { "id": "e", "text": "Purulent Drainage", "isCorrect": false }
            ],
            "partialCredit": true,
            "explanation": "Meniere's disease is characterized by vertigo, tinnitus, and sensorineural hearing loss. Pain and drainage are not typical."
        },
        {
            "id": "t5-q2",
            "type": "multiple-choice",
            "topicId": "topic-05",
            "topicName": "Inner Ear Conditions",
            "question": "Which class of antibiotics is most commonly associated with ototoxicity?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Penicillins", "isCorrect": false },
                { "id": "b", "text": "Aminoglycosides", "isCorrect": true },
                { "id": "c", "text": "Cephalosporins", "isCorrect": false },
                { "id": "d", "text": "Sulfonamides", "isCorrect": false }
            ],
            "explanation": "Aminoglycosides (e.g., Gentamicin) are notoriously ototoxic and can destroy the hair cells of the Organ of Corti."
        },
        {
            "id": "t5-q3",
            "type": "multiple-choice",
            "topicId": "topic-05",
            "topicName": "Inner Ear Conditions",
            "question": "Acoustic Neuroma is a benign tumor affecting which cranial nerve?",
            "points": 1,
            "options": [
                { "id": "a", "text": "CN V (Trigeminal)", "isCorrect": false },
                { "id": "b", "text": "CN VII (Facial)", "isCorrect": false },
                { "id": "c", "text": "CN VIII (Vestibulocochlear)", "isCorrect": true },
                { "id": "d", "text": "CN X (Vagus)", "isCorrect": false }
            ],
            "explanation": "Acoustic Neuroma (Vestibular Schwannoma) affects the 8th Cranial Nerve."
        },

        // TOPIC 06: Nose & Sinuses
        {
            "id": "t6-q1",
            "type": "ordering",
            "topicId": "topic-06",
            "topicName": "Nose & Sinuses",
            "question": "Arrange the steps for managing an active anterior nosebleed (epistaxis) in order:",
            "points": 2,
            "items": [
                { "id": "i1", "text": "Sit the patient upright", "correctPosition": 1 },
                { "id": "i2", "text": "Tilt head forward", "correctPosition": 2 },
                { "id": "i3", "text": "Pinch the soft part of the nose", "correctPosition": 3 },
                { "id": "i4", "text": "Hold pressure for 5-10 minutes", "correctPosition": 4 },
                { "id": "i5", "text": "Apply cold compress to forehead", "correctPosition": 5 }
            ],
            "explanation": "Sitting upright reduces pressure; tilting forward prevents aspiration; pinching applies direct pressure to the bleeding site (Little's area)."
        },
        {
            "id": "t6-q2",
            "type": "fill-blank",
            "topicId": "topic-06",
            "topicName": "Nose & Sinuses",
            "question": "Following a nasal fracture, clear fluid draining from the nose may indicate a fracture of the __b1__ plate and leakage of __b2__ fluid.",
            "points": 2,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["cribriform"], "caseSensitive": false },
                { "id": "b2", "acceptedAnswers": ["cerebrospinal", "CSF"], "caseSensitive": false }
            ],
            "explanation": "Clear drainage after trauma suggests a cribriform plate fracture and CSF leak. This can be confirmed with a glucose test."
        },
        {
            "id": "t6-q3",
            "type": "multiple-choice",
            "topicId": "topic-06",
            "topicName": "Nose & Sinuses",
            "question": "Chronic sinusitis is defined as symptoms persisting for more than:",
            "points": 1,
            "options": [
                { "id": "a", "text": "2 weeks", "isCorrect": false },
                { "id": "b", "text": "4 weeks", "isCorrect": false },
                { "id": "c", "text": "6 weeks", "isCorrect": false },
                { "id": "d", "text": "3 months", "isCorrect": true }
            ],
            "explanation": "Chronic sinusitis involves symptoms lasting more than 3 months."
        },

        // TOPIC 07: Throat & Larynx
        {
            "id": "t7-q1",
            "type": "multiple-choice",
            "topicId": "topic-07",
            "topicName": "Throat & Larynx",
            "question": "A patient is post-tonsillectomy. Which sign is the most indicative of postoperative hemorrhage?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Complaints of sore throat", "isCorrect": false },
                { "id": "b", "text": "Frequent swallowing", "isCorrect": true },
                { "id": "c", "text": "Refusal to drink fluids", "isCorrect": false },
                { "id": "d", "text": "Low grade fever", "isCorrect": false }
            ],
            "explanation": "Frequent swallowing is a cardinal sign of bleeding, as the patient is swallowing blood trickling down the throat."
        },
        {
            "id": "t7-q2",
            "type": "multiple-select",
            "topicId": "topic-07",
            "topicName": "Throat & Larynx",
            "question": "Which of the following are clinical manifestations of a Peritonsillar Abscess (Quinsy)? (Select all that apply)",
            "points": 2,
            "options": [
                { "id": "a", "text": "Trismus (lockjaw)", "isCorrect": true },
                { "id": "b", "text": "Drooling", "isCorrect": true },
                { "id": "c", "text": "Clear voice", "isCorrect": false },
                { "id": "d", "text": "Uvula deviation", "isCorrect": true },
                { "id": "e", "text": "Odynophagia", "isCorrect": true }
            ],
            "partialCredit": true,
            "explanation": "Quinsy presents with trismus, drooling, 'hot potato' voice (not clear), uvula deviation away from abscess, and severe pain on swallowing."
        },

        // TOPIC 08: Laryngeal Cancer
        {
            "id": "t8-q1",
            "type": "multiple-choice",
            "topicId": "topic-08",
            "topicName": "Laryngeal Cancer",
            "question": "What is the most common early symptom of laryngeal cancer?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Dyspnea", "isCorrect": false },
                { "id": "b", "text": "Hoarseness lasting > 2 weeks", "isCorrect": true },
                { "id": "c", "text": "Weight loss", "isCorrect": false },
                { "id": "d", "text": "Foul breath", "isCorrect": false }
            ],
            "explanation": "Persistent hoarseness (lasting more than 2 weeks) is the hallmark early sign of glottic cancer."
        },
        {
            "id": "t8-q2",
            "type": "true-false",
            "topicId": "topic-08",
            "topicName": "Laryngeal Cancer",
            "question": "A patient who undergoes a total laryngectomy will maintain their natural voice but will breathe through a stoma.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "A total laryngectomy involves removal of the vocal cords. The patient loses their natural voice completely and breathes through a permanent stoma."
        },
        {
            "id": "t8-q3",
            "type": "multiple-choice",
            "topicId": "topic-08",
            "topicName": "Laryngeal Cancer",
            "question": "Following a laryngectomy, which complication poses the most immediate life-threatening risk involving the carotid artery?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Infection", "isCorrect": false },
                { "id": "b", "text": "Fistula formation", "isCorrect": false },
                { "id": "c", "text": "Wound breakdown/rupture", "isCorrect": true },
                { "id": "d", "text": "Stoma stenosis", "isCorrect": false }
            ],
            "explanation": "Wound breakdown can expose the carotid artery, leading to erosion and rupture (carotid blowout), which is an immediate medical emergency."
        }
    ]
});