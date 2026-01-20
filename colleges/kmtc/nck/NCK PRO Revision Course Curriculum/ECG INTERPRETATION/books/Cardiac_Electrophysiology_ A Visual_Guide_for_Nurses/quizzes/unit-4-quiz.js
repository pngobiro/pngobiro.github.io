registerQuiz("unit-4-quiz", {
    "schemaVersion": "1.0",
    "quizId": "unit-4-quiz",
    "metadata": {
        "title": "Unit 4: Advanced Tracings",
        "description": "Assessment on interpreting complex tracings, diagnostic dilemmas, and unusual arrhythmia presentations.",
        "topicId": "unit-4",
        "difficulty": "advanced",
        "estimatedTime": 15,
        "passingScore": 80,
        "createdAt": "2026-01-20T22:00:00Z",
        "updatedAt": "2026-01-20T22:00:00Z",
        "tags": ["tracings", "interpretation", "dilemmas"]
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
            "id": "u4-q1",
            "type": "multiple-choice",
            "question": "What is the '2 for 1' phenomenon?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "One atrial beat causes two ventricular beats (Fast & Slow pathway conduction)", "isCorrect": true },
                { "id": "opt2", "text": "One ventricular beat causes two atrial beats", "isCorrect": false },
                { "id": "opt3", "text": "Double sensing of the pacemaker", "isCorrect": false },
                { "id": "opt4", "text": "Paired ventricular ectopy", "isCorrect": false }
            ],
            "explanation": "A single atrial impulse conducts down the Fast pathway (1st QRS) and then the Slow pathway (2nd QRS), or triggers an immediate nodal echo."
        },
        {
            "id": "u4-q2",
            "type": "multiple-choice",
            "question": "In the 'Diagnostic Dilemma' tracing, how was Junctional Rhythm distinguished from Slow AVNRT?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "An extra stimulus (S3) advanced the next QRS", "isCorrect": true },
                { "id": "opt2", "text": "Adenosine terminated the rhythm", "isCorrect": false },
                { "id": "opt3", "text": "The H-V interval was short", "isCorrect": false },
                { "id": "opt4", "text": "The rhythm was irregular", "isCorrect": false }
            ],
            "explanation": "If it were AVNRT, the AV node would be refractory and S3 would block. Since S3 conducted and advanced the QRS, the node must have been recovered, implying the previous beat (S2) blocked and the rhythm was junctional escape."
        },
        {
            "id": "u4-q3",
            "type": "multiple-choice",
            "question": "What is a 'Dangling Potential'?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "A retrograde His potential seen after the QRS when VA conduction blocks", "isCorrect": true },
                { "id": "opt2", "text": "A fractured EGM in a scar", "isCorrect": false },
                { "id": "opt3", "text": "A late potential in the CS", "isCorrect": false },
                { "id": "opt4", "text": "Noise on the ablation channel", "isCorrect": false }
            ],
            "explanation": "It hangs off the QRS. Usually obscured by the atrial signal, it becomes visible when retrograde conduction blocks, revealing that the His was activated but didn't get to the atrium."
        },
        {
            "id": "u4-q4",
            "type": "multiple-choice",
            "question": "If the A-H interval varies despite a constant pacing cycle length (e.g. in irregular tachycardia), what might this suggest?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Dual AV Nodal Pathways participating in conduction", "isCorrect": true },
                { "id": "opt2", "text": "Autonomic fluctuation", "isCorrect": false },
                { "id": "opt3", "text": "Catheter movement", "isCorrect": false },
                { "id": "opt4", "text": "Ischemia", "isCorrect": false }
            ],
            "explanation": "Switching between fast and slow pathways antegrade can cause A-H variation and cycle length irregularity in AVRT."
        },
        {
            "id": "u4-q5",
            "type": "multiple-choice",
            "question": "A wide complex tachycardia where a PAC advances the next QRS is most likely:",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Pre-excited Antidromic AVRT", "isCorrect": true },
                { "id": "opt2", "text": "Ventricular Tachycardia", "isCorrect": false },
                { "id": "opt3", "text": "SVT with LBBB", "isCorrect": false },
                { "id": "opt4", "text": "SVT with RBBB", "isCorrect": false }
            ],
            "explanation": "In VT, atrial input rarely affects the ventricle. In SVT with aberrancy, the QRS is fixed. In Pre-excited tachycardia, the AP is part of the circuit, so advancing the A advances the V (the delta wave)."
        },
        {
            "id": "u4-q6",
            "type": "true-false",
            "question": "An irregular rhythm with narrow QRS and no preceding P-waves is likely Junctional.",
            "points": 1,
            "correctAnswer": true,
            "explanation": "True. Junctional escape rhythm is often irregular and has retrograde or simultaneous P-waves, or AV dissociation."
        },
        {
            "id": "u4-q7",
            "type": "multiple-choice",
            "question": "Why might the H-V interval prolong after a 'long-short' sequence?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Phase 3 block/decrement in the His-Purkinje system", "isCorrect": true },
                { "id": "opt2", "text": "Phase 4 block", "isCorrect": false },
                { "id": "opt3", "text": "AV nodal recovery", "isCorrect": false },
                { "id": "opt4", "text": "Accessory pathway conduction", "isCorrect": false }
            ],
            "explanation": "A long cycle prolongs refractoriness. A subsequent short cycle hits the His-Purkinje system while it's partially refractory, causing slowed conduction (longer HV)."
        },
        {
            "id": "u4-q8",
            "type": "image-based",
            "question": "In this tracing showing 'After PV Ablation', what indicates the vein is isolated?",
            "points": 1,
            "imageUrl": "../assets/images/image-20260120-a9edd80d.jpeg",
            "imageAlt": "PV Isolation Tracing",
            "hotspots": [
                { "id": "h1", "x": 50, "y": 50, "radius": 100, "label": "Isolated PV", "isCorrect": true }
            ],
            "options": [
                { "id": "opt1", "text": "Entrance Block (Sinus beat doesn't conduct in) & Exit Block (Pacing in PV doesn't get out)", "isCorrect": true },
                { "id": "opt2", "text": "Termination of AF", "isCorrect": false },
                { "id": "opt3", "text": "Low voltage", "isCorrect": false }
            ],
            "explanation": "Pacing the PV captures locally (Lasso) but not the surface ECG (Exit Block). The sinus beat shows no Lasso signal (Entrance Block). Bidirectional block confirmed."
        },
        {
            "id": "u4-q9",
            "type": "fill-blank",
            "question": "A premature beat that occurs after a long pause is often an __b1__ beat.",
            "points": 1,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["escape"], "caseSensitive": false }
            ],
            "explanation": "Escape beats occur when the dominant pacemaker fails or slows, allowing a lower pacemaker to fire."
        },
        {
            "id": "u4-q10",
            "type": "multiple-choice",
            "question": "Distinguishing 'A' from 'V' on an electrogram can be helped by:",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Comparing to a reference channel (HRA for A, RVA for V)", "isCorrect": true },
                { "id": "opt2", "text": "Looking at the amplitude only", "isCorrect": false },
                { "id": "opt3", "text": "Assuming A is always sharp", "isCorrect": false },
                { "id": "opt4", "text": "Ignoring the surface ECG", "isCorrect": false }
            ],
            "explanation": "Comparing timing with known atrial (HRA) and ventricular (RVA/Surface) signals is the most reliable way to identify components of a complex EGM."
        }
    ]
});