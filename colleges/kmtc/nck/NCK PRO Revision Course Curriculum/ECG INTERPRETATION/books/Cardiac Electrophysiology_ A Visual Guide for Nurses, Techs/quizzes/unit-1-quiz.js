registerQuiz("unit-1-quiz", {
    "schemaVersion": "1.0",
    "quizId": "unit-1-quiz",
    "metadata": {
        "title": "Unit 1: The Basics",
        "description": "Assessment on catheter placement, signal processing, basic intervals, and the standard SVT diagnostic study.",
        "topicId": "unit-1",
        "difficulty": "intermediate",
        "estimatedTime": 10,
        "passingScore": 80,
        "createdAt": "2026-01-20T22:00:00Z",
        "updatedAt": "2026-01-20T22:00:00Z",
        "tags": ["basics", "catheters", "intervals", "pacing"]
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
            "id": "u1-q1",
            "type": "image-based",
            "question": "Identify the Coronary Sinus (CS) catheter in this fluoroscopic image.",
            "points": 1,
            "imageUrl": "../assets/images/image-20260120-3e713112.jpeg",
            "imageAlt": "Fluoroscopy of catheter placement",
            "hotspots": [
                { "id": "h1", "x": 60, "y": 40, "radius": 10, "label": "CS Catheter", "isCorrect": true },
                { "id": "h2", "x": 35, "y": 40, "radius": 10, "label": "HRA Catheter", "isCorrect": false },
                { "id": "h3", "x": 45, "y": 60, "radius": 10, "label": "RVA Catheter", "isCorrect": false },
                { "id": "h4", "x": 50, "y": 45, "radius": 8, "label": "HIS Catheter", "isCorrect": false }
            ],
            "explanation": "The CS catheter (green arrow in text) curves around the AV groove, appearing to wrap around the heart in the LAO projection."
        },
        {
            "id": "u1-q2",
            "type": "ordering",
            "question": "Place the standard signal sequence during Sinus Rhythm in the correct order of appearance.",
            "points": 2,
            "items": [
                { "id": "i1", "text": "High Right Atrium (HRA A)", "correctPosition": 1 },
                { "id": "i2", "text": "HIS Atrial (HIS A)", "correctPosition": 2 },
                { "id": "i3", "text": "Coronary Sinus Atrial (CS A)", "correctPosition": 3 },
                { "id": "i4", "text": "His Bundle (H)", "correctPosition": 4 },
                { "id": "i5", "text": "Right Ventricular Apex (RVA V)", "correctPosition": 5 },
                { "id": "i6", "text": "HIS/CS Ventricular (HIS V / CS V)", "correctPosition": 6 }
            ],
            "explanation": "Activation travels from SA node (HRA) -> AV Node (HIS A) -> LA (CS A) -> His Bundle (H) -> RV Apex (RVA V) -> LV Base (HIS/CS V)."
        },
        {
            "id": "u1-q3",
            "type": "fill-blank",
            "question": "The __b1__ interval represents transnodal conduction time and is normally between __b2__ and __b3__ milliseconds.",
            "points": 3,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["A-H", "AH"], "caseSensitive": false },
                { "id": "b2", "acceptedAnswers": ["70", "80"], "caseSensitive": false },
                { "id": "b3", "acceptedAnswers": ["120", "125"], "caseSensitive": false }
            ],
            "explanation": "The A-H interval (Atrial to His) represents conduction time through the AV node. Normal range is typically 70-120 ms (text says approx 70-80 ms but ranges vary slightly)."
        },
        {
            "id": "u1-q4",
            "type": "multiple-choice",
            "question": "What is the primary purpose of the 'High Pass' filter settings (e.g., 30 Hz) on intracardiac channels?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "To remove low-frequency signals like baseline wander", "isCorrect": true },
                { "id": "opt2", "text": "To remove high-frequency noise", "isCorrect": false },
                { "id": "opt3", "text": "To amplify the signal", "isCorrect": false },
                { "id": "opt4", "text": "To remove 60 Hz electrical interference", "isCorrect": false }
            ],
            "explanation": "A High Pass filter allows frequencies HIGHER than the setting to pass, effectively filtering out LOW frequency components like respiration and baseline wander."
        },
        {
            "id": "u1-q5",
            "type": "multiple-choice",
            "question": "During incremental ventricular pacing, you observe the V-A time staying constant despite faster pacing rates. What does this suggest?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Conduction via an Accessory Pathway", "isCorrect": true },
                { "id": "opt2", "text": "Conduction via the AV Node", "isCorrect": false },
                { "id": "opt3", "text": "Normal physiology", "isCorrect": false },
                { "id": "opt4", "text": "Gap phenomenon", "isCorrect": false }
            ],
            "explanation": "The AV node has decremental properties (V-A time lengthens as rate increases). Accessory pathways typically do NOT decrement; conduction time remains fixed until block occurs."
        },
        {
            "id": "u1-q6",
            "type": "multiple-choice",
            "question": "When performing atrial extra-stimulus testing, you observe a sudden increase in the A-H interval (>50 ms). What is this called?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "A 'Jump'", "isCorrect": true },
                { "id": "opt2", "text": "A 'Gap'", "isCorrect": false },
                { "id": "opt3", "text": "A 'Block'", "isCorrect": false },
                { "id": "opt4", "text": "A 'Split'", "isCorrect": false }
            ],
            "explanation": "A 'jump' is the hallmark of dual AV nodal physiology, representing a shift from fast pathway conduction to slow pathway conduction."
        },
        {
            "id": "u1-q7",
            "type": "matching",
            "question": "Match the pacing maneuver to the refractory period it is primarily used to determine.",
            "points": 2,
            "pairs": [
                { "id": "p1", "left": "Atrial Extra-stimulus (A1-A2) -> Block to V", "right": "AV Node Effective Refractory Period (ERP)" },
                { "id": "p2", "left": "Ventricular Extra-stimulus (V1-V2) -> No V Capture", "right": "Ventricular Myocardial ERP" },
                { "id": "p3", "left": "Incremental Atrial Pacing -> Wenckebach", "right": "AV Node Functional Refractory Period" },
                { "id": "p4", "left": "Ventricular Extra-stimulus (V1-V2) -> Block to A", "right": "Retrograde VA Conduction System ERP" }
            ],
            "explanation": "Extra-stimulus testing determines Effective Refractory Periods (ERP). Incremental pacing determines functional limits like Wenckebach cycle length."
        },
        {
            "id": "u1-q8",
            "type": "multiple-choice",
            "question": "Why is Incremental Atrial Pacing typically performed last in the diagnostic sequence?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "It has the highest risk of inducing Atrial Fibrillation", "isCorrect": true },
                { "id": "opt2", "text": "It is the least important maneuver", "isCorrect": false },
                { "id": "opt3", "text": "It requires the most sedation", "isCorrect": false },
                { "id": "opt4", "text": "It washes out the effects of Isoproterenol", "isCorrect": false }
            ],
            "explanation": "Rapid atrial pacing often induces Atrial Fibrillation, which would require cardioversion to continue the study, potentially altering electrophysiologic properties."
        },
        {
            "id": "u1-q9",
            "type": "true-false",
            "question": "A 'Chevron' pattern on the Coronary Sinus catheter (CS 1-2 and CS 9-10 activating simultaneously) indicates the catheter is too deep.",
            "points": 1,
            "correctAnswer": true,
            "explanation": "True. A chevron pattern often results from the catheter being advanced too far, detecting Bachmann's bundle activation early on both proximal and distal poles."
        },
        {
            "id": "u1-q10",
            "type": "multiple-choice",
            "question": "In 'Eccentric' atrial activation during ventricular pacing, where is the earliest atrial signal typically found?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Away from the AV node (e.g., distal CS)", "isCorrect": true },
                { "id": "opt2", "text": "At the AV node (HIS catheter)", "isCorrect": false },
                { "id": "opt3", "text": "At the High Right Atrium", "isCorrect": false },
                { "id": "opt4", "text": "Simultaneous on all channels", "isCorrect": false }
            ],
            "explanation": "Concentric activation is earliest at the AV node (HIS). Eccentric means 'off-center', implying the earliest signal is elsewhere, suggesting an accessory pathway."
        }
    ]
});