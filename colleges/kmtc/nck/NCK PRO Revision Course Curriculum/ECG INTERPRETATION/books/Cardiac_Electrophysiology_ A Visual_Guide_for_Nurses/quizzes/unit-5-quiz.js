registerQuiz("unit-5-quiz", {
    "schemaVersion": "1.0",
    "quizId": "unit-5-quiz",
    "metadata": {
        "title": "Unit 5: Cardiac Electrical Axis",
        "description": "Assessment on determining cardiac axis, vectors, and diagnosing hemiblocks.",
        "topicId": "unit-5",
        "difficulty": "intermediate",
        "estimatedTime": 10,
        "passingScore": 80,
        "createdAt": "2026-01-20T22:00:00Z",
        "updatedAt": "2026-01-20T22:00:00Z",
        "tags": ["axis", "ecg", "vectors", "blocks"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "immediate",
        "allowRetry": true,
        "showCorrectAnswers": true,
        "timeLimit": 0
    },
    "questions": [
        {
            "id": "u5-q1",
            "type": "multiple-choice",
            "question": "Which two leads are sufficient to determine the general quadrant of the cardiac axis?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Lead I and Lead II", "isCorrect": true },
                { "id": "opt2", "text": "Lead I and aVF", "isCorrect": false },
                { "id": "opt3", "text": "Lead II and III", "isCorrect": false },
                { "id": "opt4", "text": "V1 and V6", "isCorrect": false }
            ],
            "explanation": "While I and aVF are commonly taught, this course emphasizes Lead I and Lead II. If both are positive, axis is normal (-30 to +90). If I is + and II is -, it's LAD."
        },
        {
            "id": "u5-q2",
            "type": "matching",
            "question": "Match the Lead I/Lead II polarity to the Axis Deviation.",
            "points": 1,
            "pairs": [
                { "id": "p1", "left": "Lead I (+), Lead II (+)", "right": "Normal Axis" },
                { "id": "p2", "left": "Lead I (+), Lead II (-)", "right": "Left Axis Deviation" },
                { "id": "p3", "left": "Lead I (-), Lead II (+)", "right": "Right Axis Deviation" },
                { "id": "p4", "left": "Lead I (-), Lead II (-)", "right": "North-West Axis" }
            ],
            "explanation": "Positive/Positive = Normal. Positive/Negative = Left. Negative/Positive = Right. Negative/Negative = Extreme (NW)."
        },
        {
            "id": "u5-q3",
            "type": "multiple-choice",
            "question": "Left Anterior Hemiblock (LAH) typically causes which axis deviation?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Left Axis Deviation", "isCorrect": true },
                { "id": "opt2", "text": "Right Axis Deviation", "isCorrect": false },
                { "id": "opt3", "text": "Normal Axis", "isCorrect": false },
                { "id": "opt4", "text": "North-West Axis", "isCorrect": false }
            ],
            "explanation": "Block of the anterior fascicle leaves posterior forces unopposed, pulling the axis Left and Superiorly."
        },
        {
            "id": "u5-q4",
            "type": "multiple-choice",
            "question": "A 'North-West' axis is highly suggestive of:",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Ventricular Tachycardia", "isCorrect": true },
                { "id": "opt2", "text": "Atrial Fibrillation", "isCorrect": false },
                { "id": "opt3", "text": "Normal variant", "isCorrect": false },
                { "id": "opt4", "text": "Right Bundle Branch Block", "isCorrect": false }
            ],
            "explanation": "NW axis (extreme axis) implies activation from the apex towards the base, characteristic of VT originating in the ventricle."
        },
        {
            "id": "u5-q5",
            "type": "multiple-choice",
            "question": "In the 'Tug-of-War' analogy, what effect does hypertrophy have?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "It acts as a 'Stronger Teammate', pulling the axis towards itself", "isCorrect": true },
                { "id": "opt2", "text": "It acts as a 'Weaker Opponent'", "isCorrect": false },
                { "id": "opt3", "text": "It pushes the axis away", "isCorrect": false },
                { "id": "opt4", "text": "It has no effect", "isCorrect": false }
            ],
            "explanation": "More muscle (hypertrophy) generates more electrical force, pulling the vector towards the hypertrophied side."
        },
        {
            "id": "u5-q6",
            "type": "multiple-choice",
            "question": "If Lead I is positive and Lead II is equiphasic (biphasic), what is the axis?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "-30 degrees (Borderline Normal/LAD)", "isCorrect": true },
                { "id": "opt2", "text": "0 degrees", "isCorrect": false },
                { "id": "opt3", "text": "+60 degrees", "isCorrect": false },
                { "id": "opt4", "text": "+90 degrees", "isCorrect": false }
            ],
            "explanation": "Lead II is perpendicular to -30 degrees (aVL). If Lead II is biphasic, the axis is perpendicular to it (-30)."
        },
        {
            "id": "u5-q7",
            "type": "multiple-select",
            "question": "Which of the following can cause Right Axis Deviation? (Select all that apply)",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Right Ventricular Hypertrophy", "isCorrect": true },
                { "id": "opt2", "text": "Left Posterior Hemiblock", "isCorrect": true },
                { "id": "opt3", "text": "Lateral Wall MI (loss of leftward forces)", "isCorrect": true },
                { "id": "opt4", "text": "Left Anterior Hemiblock", "isCorrect": false }
            ],
            "explanation": "RVH (pulls right), LPH (loss of posterior/left forces), and Lateral MI (loss of left forces) all shift axis rightward."
        },
        {
            "id": "u5-q8",
            "type": "image-based",
            "question": "Identify the type of block in this tracing (Lead I -, Lead II +, V1 +).",
            "points": 1,
            "imageUrl": "../assets/images/image-20260120-3435e5a4.jpeg",
            "imageAlt": "Bifascicular block tracing",
            "options": [
                { "id": "opt1", "text": "Left Posterior Hemiblock + RBBB", "isCorrect": true },
                { "id": "opt2", "text": "Left Anterior Hemiblock + RBBB", "isCorrect": false },
                { "id": "opt3", "text": "LBBB", "isCorrect": false }
            ],
            "explanation": "RAD (I-, II+) suggests LPH. V1 positive suggests RBBB. Together, this is a bifascicular block involving the Right Bundle and Left Posterior Fascicle."
        },
        {
            "id": "u5-q9",
            "type": "multiple-choice",
            "question": "Why does a Left Anterior Hemiblock cause Left Axis Deviation?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Anterior forces are lost/delayed, so Posterior/Left forces win the tug-of-war", "isCorrect": true },
                { "id": "opt2", "text": "The left ventricle hypertrophies", "isCorrect": false },
                { "id": "opt3", "text": "The right ventricle pushes it", "isCorrect": false },
                { "id": "opt4", "text": "The posterior fascicle is blocked", "isCorrect": false }
            ],
            "explanation": "Block of the anterior fascicle delays activation of the anterior LV. The initial vector goes posterior/inferior, then the late unopposed vector swings left and superior (LAD)."
        },
        {
            "id": "u5-q10",
            "type": "fill-blank",
            "question": "Normal axis is defined as being between __b1__ and __b2__ degrees.",
            "points": 1,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["-30"], "caseSensitive": false },
                { "id": "b2", "acceptedAnswers": ["+90", "90"], "caseSensitive": false }
            ],
            "explanation": "The normal range is typically cited as -30 to +90 degrees."
        }
    ]
});