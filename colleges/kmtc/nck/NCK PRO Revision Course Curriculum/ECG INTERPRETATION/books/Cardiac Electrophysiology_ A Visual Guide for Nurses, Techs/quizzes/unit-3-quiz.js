registerQuiz("unit-3-quiz", {
    "schemaVersion": "1.0",
    "quizId": "unit-3-quiz",
    "metadata": {
        "title": "Unit 3: Advanced Concepts",
        "description": "Assessment on tachycardia mechanisms, gap phenomenon, latency, entrainment, and para-Hisian pacing.",
        "topicId": "unit-3",
        "difficulty": "advanced",
        "estimatedTime": 15,
        "passingScore": 80,
        "createdAt": "2026-01-20T22:00:00Z",
        "updatedAt": "2026-01-20T22:00:00Z",
        "tags": ["advanced", "mechanisms", "entrainment", "parahisian"]
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
            "id": "u3-q1",
            "type": "matching",
            "question": "Match the tachycardia mechanism to its description.",
            "points": 1,
            "pairs": [
                { "id": "p1", "left": "Macro-reentry", "right": "Loop around a large obstacle" },
                { "id": "p2", "left": "Automaticity", "right": "Spontaneous Phase 4 depolarization" },
                { "id": "p3", "left": "Triggered Activity", "right": "After-depolarizations (EAD/DAD)" },
                { "id": "p4", "left": "Micro-reentry", "right": "Small circuit (e.g., around a scar)" }
            ],
            "explanation": "Reentry involves a circuit (macro or micro). Focal tachycardias are usually automatic (spontaneous firing) or triggered (oscillations)."
        },
        {
            "id": "u3-q2",
            "type": "multiple-choice",
            "question": "What is the 'Gap Phenomenon'?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Unexpected resumption of conduction at a shorter coupling interval after a previous block", "isCorrect": true },
                { "id": "opt2", "text": "A gap in the ablation line", "isCorrect": false },
                { "id": "opt3", "text": "The time between S1 and S2", "isCorrect": false },
                { "id": "opt4", "text": "Loss of capture due to latency", "isCorrect": false }
            ],
            "explanation": "Gap phenomenon occurs when proximal delay (like latency) allows distal tissue more time to recover, permitting conduction where it previously blocked."
        },
        {
            "id": "u3-q3",
            "type": "fill-blank",
            "question": "During Entrainment Pacing, the interval measured from the last pacing stimulus to the first return electrogram is called the __b1__.",
            "points": 1,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["PPI", "Post Pacing Interval", "Post-Pacing Interval"], "caseSensitive": false }
            ],
            "explanation": "The Post-Pacing Interval (PPI) estimates conduction time from the pacing site to the circuit and back. PPI ≈ TCL indicates the pacing site is in the circuit."
        },
        {
            "id": "u3-q4",
            "type": "multiple-choice",
            "question": "In Para-Hisian pacing, what constitutes a 'Nodal' response?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "V-A time increases significantly (>50ms) when His capture is lost", "isCorrect": true },
                { "id": "opt2", "text": "V-A time remains constant when His capture is lost", "isCorrect": false },
                { "id": "opt3", "text": "Retrograde block occurs", "isCorrect": false },
                { "id": "opt4", "text": "Atrial activation sequence changes", "isCorrect": false }
            ],
            "explanation": "Losing His capture forces the signal to travel through muscle to get to the AV node, adding delay. If an AP were present, the signal would go directly to the atrium via the AP, so V-A time wouldn't change (Extranodal response)."
        },
        {
            "id": "u3-q5",
            "type": "multiple-choice",
            "question": "If a His-refractory PVC advances the next atrial beat during SVT, what does this prove?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Presence of an Accessory Pathway", "isCorrect": true },
                { "id": "opt2", "text": "Presence of Dual AV Nodal Pathways", "isCorrect": false },
                { "id": "opt3", "text": "The tachycardia is AVNRT", "isCorrect": false },
                { "id": "opt4", "text": "The tachycardia is Atrial Tachycardia", "isCorrect": false }
            ],
            "explanation": "If the AV node (His) is refractory, the only way a ventricular signal can reach the atrium early is via a bypass tract (accessory pathway)."
        },
        {
            "id": "u3-q6",
            "type": "multiple-choice",
            "question": "What is the significance of a PPI-TCL difference of < 115 ms?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Consistent with AVRT (pacing site is close to circuit)", "isCorrect": true },
                { "id": "opt2", "text": "Consistent with AVNRT (pacing site is far from circuit)", "isCorrect": false },
                { "id": "opt3", "text": "Indicates bystander pathway", "isCorrect": false },
                { "id": "opt4", "text": "Indicates focal mechanism", "isCorrect": false }
            ],
            "explanation": "In AVRT, the ventricle is part of the circuit, so pacing from the RVA gives a short PPI-TCL. In AVNRT, the circuit is in the node, far from the RVA, so PPI-TCL is long (>115ms)."
        },
        {
            "id": "u3-q7",
            "type": "true-false",
            "question": "A unipolar electrogram showing a 'QS' pattern indicates the catheter is at the site of earliest activation (source).",
            "points": 1,
            "correctAnswer": true,
            "explanation": "True. A QS pattern means all electrical activity is moving AWAY from the electrode, which happens at the source of depolarization."
        },
        {
            "id": "u3-q8",
            "type": "multiple-choice",
            "question": "What causes 'Latency' during pacing?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Pacing near the absolute refractory period of the tissue", "isCorrect": true },
                { "id": "opt2", "text": "Pacing at high output", "isCorrect": false },
                { "id": "opt3", "text": "Excellent catheter contact", "isCorrect": false },
                { "id": "opt4", "text": "Sympathetic stimulation", "isCorrect": false }
            ],
            "explanation": "Latency is the delay between stimulus and capture. It increases when tissue is relatively refractory (not fully recovered), slowing local conduction."
        },
        {
            "id": "u3-q9",
            "type": "multiple-choice",
            "question": "If a PVC during SVT terminates the tachycardia without conducting to the atrium, what is the diagnosis?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "AVRT", "isCorrect": true },
                { "id": "opt2", "text": "AVNRT", "isCorrect": false },
                { "id": "opt3", "text": "Atrial Tachycardia", "isCorrect": false },
                { "id": "opt4", "text": "Sinus Tachycardia", "isCorrect": false }
            ],
            "explanation": "This excludes AT (ventricle not required) and AVNRT (circuit in node, shielded by refractory His). Termination implies the ventricle is a critical part of the circuit (AVRT)."
        },
        {
            "id": "u3-q10",
            "type": "image-based",
            "question": "In this Para-Hisian Pacing example, note the V-A time difference between the narrow and wide beats. What is the diagnosis?",
            "points": 1,
            "imageUrl": "../assets/images/image-20260120-21283c83.jpeg",
            "imageAlt": "Para-Hisian Pacing Tracing",
            "hotspots": [
                { "id": "h1", "x": 50, "y": 50, "radius": 100, "label": "Septal AP", "isCorrect": true }
            ],
            "options": [
                { "id": "opt1", "text": "Septal Accessory Pathway (V-A time same)", "isCorrect": true },
                { "id": "opt2", "text": "Nodal Conduction (V-A time increases)", "isCorrect": false }
            ],
            "explanation": "The V-A time is virtually identical despite loss of His capture (narrow vs wide). This 'Extranodal' response indicates a Septal AP."
        }
    ]
});