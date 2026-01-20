registerQuiz("comprehensive-exam", {
    "schemaVersion": "1.0",
    "quizId": "comprehensive-exam",
    "metadata": {
        "title": "Comprehensive Final Exam",
        "description": "Cumulative assessment covering Cardiac Electrophysiology Units 1-5: Basics, Common Tachycardias, Advanced Concepts, Tracings, and Cardiac Axis.",
        "topicId": "comprehensive",
        "difficulty": "advanced",
        "estimatedTime": 60,
        "passingScore": 80,
        "createdAt": "2026-01-20T22:00:00Z",
        "updatedAt": "2026-01-20T22:00:00Z",
        "tags": ["final", "exam", "comprehensive", "certification"]
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
        /* --- UNIT 1: THE BASICS --- */
        {
            "id": "u1-q1",
            "type": "matching",
            "question": "Match the standard catheter locations to their corresponding color codes used in this course's tracings.",
            "points": 2,
            "pairs": [
                { "id": "p1", "left": "High Right Atrium (HRA)", "right": "Red" },
                { "id": "p2", "left": "His Bundle (HIS)", "right": "Yellow" },
                { "id": "p3", "left": "Coronary Sinus (CS)", "right": "Green" },
                { "id": "p4", "left": "Right Ventricular Apex (RVA)", "right": "Magenta" }
            ],
            "explanation": "Standard color coding helps identify tracings quickly: HRA is Red, HIS is Yellow, CS is Green, and RVA is Magenta."
        },
        {
            "id": "u1-q2",
            "type": "ordering",
            "question": "Arrange the signal sequence seen on the HIS catheter during normal sinus rhythm from earliest to latest.",
            "points": 2,
            "items": [
                { "id": "i1", "text": "Atrial (A) deflection", "correctPosition": 1 },
                { "id": "i2", "text": "His (H) deflection", "correctPosition": 2 },
                { "id": "i3", "text": "Ventricular (V) deflection", "correctPosition": 3 }
            ],
            "explanation": "The HIS catheter sits at the AV junction. It records the local Atrial activation first, then the conduction through the His bundle (H), and finally the activation of the Ventricles (V)."
        },
        {
            "id": "u1-q3",
            "type": "fill-blank",
            "question": "The time it takes for an electrical signal to travel from the His bundle to the ventricles is known as the __b1__ interval. A normal range for this interval is approximately __b2__ to __b3__ milliseconds.",
            "points": 3,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["HV", "H-V", "His-Ventricular"], "caseSensitive": false },
                { "id": "b2", "acceptedAnswers": ["35"], "caseSensitive": false },
                { "id": "b3", "acceptedAnswers": ["45"], "caseSensitive": false }
            ],
            "explanation": "The H-V interval represents conduction through the His-Purkinje system. It is normally 35-45 msec. A prolonged H-V interval indicates disease in the His-Purkinje system."
        },
        {
            "id": "u1-q4",
            "type": "multiple-choice",
            "question": "During an atrial extra-stimulus study, you observe the A-H interval getting progressively longer as the coupling interval shortens. What property does this demonstrate?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Decremental conduction", "isCorrect": true },
                { "id": "opt2", "text": "All-or-none conduction", "isCorrect": false },
                { "id": "opt3", "text": "Gap phenomenon", "isCorrect": false },
                { "id": "opt4", "text": "Spontaneous normalization", "isCorrect": false }
            ],
            "explanation": "Decremental conduction is the AV node's unique property of prolonging its conduction time (lengthening the A-H) in response to shorter input intervals."
        },
        {
            "id": "u1-q5",
            "type": "multiple-choice",
            "question": "What defines the Effective Refractory Period (ERP) of the AV node?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "The longest A1-A2 interval that fails to conduct to the His bundle", "isCorrect": true },
                { "id": "opt2", "text": "The shortest A1-A2 interval that conducts to the ventricle", "isCorrect": false },
                { "id": "opt3", "text": "The interval where the A-H jump occurs", "isCorrect": false },
                { "id": "opt4", "text": "The cycle length where 2:1 block occurs", "isCorrect": false }
            ],
            "explanation": "The ERP is defined as the longest coupling interval (A1-A2) that fails to propagate through the tissue (in this case, failing to conduct to the His)."
        },
        {
            "id": "u1-q6",
            "type": "multiple-select",
            "question": "Which of the following are true regarding the Coronary Sinus (CS) catheter placement? (Select all that apply)",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "It sits in the vein between the Left Atrium and Left Ventricle.", "isCorrect": true },
                { "id": "opt2", "text": "CS 9-10 is typically distal (lateral left atrium).", "isCorrect": false },
                { "id": "opt3", "text": "A 'neutral' position places CS 9-10 at the ostium (near the spine in LAO).", "isCorrect": true },
                { "id": "opt4", "text": "It records signals primarily from the Right Atrium.", "isCorrect": false }
            ],
            "explanation": "The CS catheter sits in the AV groove on the left side. By convention, poles 1-2 are distal (lateral) and 9-10 are proximal (ostium/septal). It records LA and LV signals."
        },

        /* --- UNIT 2: COMMON TACHYCARDIAS --- */
        {
            "id": "u2-q1",
            "type": "multiple-choice",
            "question": "Which criterion is clinically defined as a 'jump' indicative of dual AV nodal physiology?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "≥ 50 msec increase in A-H with a 10 msec decrease in A1-A2", "isCorrect": true },
                { "id": "opt2", "text": "≥ 20 msec increase in A-H with a 10 msec decrease in A1-A2", "isCorrect": false },
                { "id": "opt3", "text": "Any observable increase in A-H interval", "isCorrect": false },
                { "id": "opt4", "text": "Sudden block in the AV node", "isCorrect": false }
            ],
            "explanation": "A 'jump' is an abrupt A-H prolongation of ≥ 50 msec in response to a 10 msec shortening of the coupling interval, indicating a shift from fast to slow pathway conduction."
        },
        {
            "id": "u2-q2",
            "type": "fill-blank",
            "question": "In typical 'Slow-Fast' AVNRT, the circuit travels __b1__ the slow pathway and __b2__ the fast pathway.",
            "points": 2,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["down", "antegrade", "antegradely"], "caseSensitive": false },
                { "id": "b2", "acceptedAnswers": ["up", "retrograde", "retrogradely"], "caseSensitive": false }
            ],
            "explanation": "Typical AVNRT conducts antegradely (down) via the Slow pathway and retrogradely (up) via the Fast pathway."
        },
        {
            "id": "u2-q3",
            "type": "multiple-choice",
            "question": "A delta wave on a surface ECG indicates which of the following?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Antegrade conduction over an accessory pathway (Pre-excitation)", "isCorrect": true },
                { "id": "opt2", "text": "Retrograde-only conduction over an accessory pathway (Concealed)", "isCorrect": false },
                { "id": "opt3", "text": "Typical AV Nodal Reentrant Tachycardia", "isCorrect": false },
                { "id": "opt4", "text": "Left Bundle Branch Block", "isCorrect": false }
            ],
            "explanation": "A delta wave is the slurred upstroke of the QRS caused by ventricular pre-excitation via an antegrade-conducting accessory pathway (WPW)."
        },
        {
            "id": "u2-q4",
            "type": "multiple-choice",
            "question": "Orthodromic AVRT involves a circuit that travels:",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Down the AV node and Up the Accessory Pathway (Narrow QRS)", "isCorrect": true },
                { "id": "opt2", "text": "Down the Accessory Pathway and Up the AV node (Wide QRS)", "isCorrect": false },
                { "id": "opt3", "text": "Down the Slow Pathway and Up the Fast Pathway", "isCorrect": false },
                { "id": "opt4", "text": "Down one Accessory Pathway and Up another", "isCorrect": false }
            ],
            "explanation": "Orthodromic (conducting in the normal direction) AVRT goes down the normal AV node (generating a narrow QRS) and returns up the accessory pathway."
        },
        {
            "id": "u2-q5",
            "type": "image-based",
            "question": "This diagram represents the typical catheter placement for Atrial Flutter ablation. Identify the Cavo-Tricuspid Isthmus (CTI).",
            "points": 1,
            "imageUrl": "assets/images/image-20260120-3b2397be.jpeg",
            "imageAlt": "Catheter placement for atrial flutter",
            "hotspots": [
                { "id": "h1", "x": 42, "y": 65, "radius": 10, "label": "CTI Region", "isCorrect": true },
                { "id": "h2", "x": 60, "y": 30, "radius": 10, "label": "CS", "isCorrect": false },
                { "id": "h3", "x": 20, "y": 30, "label": "HRA", "isCorrect": false }
            ],
            "explanation": "The CTI is the narrow band of tissue between the Inferior Vena Cava and the Tricuspid Valve annulus, which is the target for typical flutter ablation."
        },
        {
            "id": "u2-q6",
            "type": "multiple-choice",
            "question": "During Pulmonary Vein Isolation, 'Exit Block' is defined as:",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Pacing within the PV captures locally but does not conduct to the atrium", "isCorrect": true },
                { "id": "opt2", "text": "Pacing the atrium does not conduct into the PV", "isCorrect": false },
                { "id": "opt3", "text": "Absence of pulmonary vein potentials during sinus rhythm", "isCorrect": false },
                { "id": "opt4", "text": "Termination of Atrial Fibrillation", "isCorrect": false }
            ],
            "explanation": "Exit block means electrical activity originating inside the vein (like a pacing stimulus or ectopy) cannot get out to the atrium. Entrance block is when atrial activity cannot get in."
        },
        {
            "id": "u2-q7",
            "type": "true-false",
            "question": "Voltage mapping during a VT study uses colors to represent activation timing: red is early and magenta is late.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "False. VOLTAGE mapping uses color to represent signal amplitude (scar vs healthy). Red is dense scar (<0.5mV), Magenta is healthy (>1.5mV). ACTIVATION mapping uses color for timing."
        },

        /* --- UNIT 3: ADVANCED CONCEPTS --- */
        {
            "id": "u3-q1",
            "type": "multiple-choice",
            "question": "If a His-refractory PVC is delivered during SVT and it advances the next atrial beat, what is the diagnosis?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Atrioventricular Reentrant Tachycardia (AVRT) utilizing an Accessory Pathway", "isCorrect": true },
                { "id": "opt2", "text": "AV Nodal Reentrant Tachycardia (AVNRT)", "isCorrect": false },
                { "id": "opt3", "text": "Atrial Tachycardia", "isCorrect": false },
                { "id": "opt4", "text": "Sinus Tachycardia", "isCorrect": false }
            ],
            "explanation": "If the His is refractory, the PVC cannot travel up the AV node. If it reaches the atrium, it MUST have used an accessory pathway. Advancing the A proves an AP is present."
        },
        {
            "id": "u3-q2",
            "type": "multiple-choice",
            "question": "In Entrainment Pacing, if the Post-Pacing Interval (PPI) minus the Tachycardia Cycle Length (TCL) is < 115 msec, what is the likely diagnosis?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "AVRT (Orthodromic)", "isCorrect": true },
                { "id": "opt2", "text": "AVNRT", "isCorrect": false },
                { "id": "opt3", "text": "Focal Atrial Tachycardia", "isCorrect": false },
                { "id": "opt4", "text": "The catheter is far from the circuit", "isCorrect": false }
            ],
            "explanation": "A short PPI-TCL (<115ms) indicates the pacing site (RVA) is part of or close to the circuit. In AVRT, the ventricle is part of the circuit. In AVNRT, the circuit is confined to the node (far from RVA), resulting in a longer PPI-TCL (>115ms)."
        },
        {
            "id": "u3-q3",
            "type": "multiple-choice",
            "question": "During Para-Hisian pacing, you lose His capture (QRS widens) and the V-A time increases by 70 msec. What does this response indicate?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Retrograde conduction via the AV Node (Nodal response)", "isCorrect": true },
                { "id": "opt2", "text": "Retrograde conduction via a Septal Accessory Pathway", "isCorrect": false },
                { "id": "opt3", "text": "Retrograde conduction via a Lateral Accessory Pathway", "isCorrect": false },
                { "id": "opt4", "text": "Presence of a bystander pathway", "isCorrect": false }
            ],
            "explanation": "In a Nodal response, losing His capture forces the signal to travel through ventricular muscle to the septum before entering the node, increasing V-A time significantly (>50ms). If a septal AP were present, the V-A time would remain virtually unchanged."
        },
        {
            "id": "u3-q4",
            "type": "fill-blank",
            "question": "The phenomenon where conduction unexpectedly resumes at a shorter coupling interval after a previous block is called the __b1__ phenomenon.",
            "points": 1,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["gap"], "caseSensitive": false }
            ],
            "explanation": "Gap phenomenon occurs when distal tissues recover excitability because proximal delays (like latency or slow conduction) allow more time for the distal tissue to repolarize."
        },
        {
            "id": "u3-q5",
            "type": "multiple-choice",
            "question": "When mapping a left-sided accessory pathway using a unipolar electrogram, what morphology suggests the catheter is at the source?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "QS pattern (pure negative deflection)", "isCorrect": true },
                { "id": "opt2", "text": "R wave (pure positive deflection)", "isCorrect": false },
                { "id": "opt3", "text": "RS pattern", "isCorrect": false },
                { "id": "opt4", "text": "Wide complex signal", "isCorrect": false }
            ],
            "explanation": "A QS pattern (pure negative) on a unipolar lead indicates all electrical activity is moving AWAY from the catheter tip, suggesting the catheter is sitting exactly at the source of depolarization."
        },

        /* --- UNIT 4: ADVANCED TRACINGS --- */
        {
            "id": "u4-q1",
            "type": "multiple-choice",
            "question": "You observe a '2 for 1' phenomenon where one atrial extra-stimulus results in two ventricular complexes. What is the mechanism?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Simultaneous fast and slow pathway conduction followed by an echo", "isCorrect": true },
                { "id": "opt2", "text": "Double firing of the His bundle", "isCorrect": false },
                { "id": "opt3", "text": "Rapid firing of an automatic focus", "isCorrect": false },
                { "id": "opt4", "text": "Artifact", "isCorrect": false }
            ],
            "explanation": "This occurs when an impulse travels down the fast pathway (1st QRS) and the slow pathway (2nd QRS) or initiates an immediate AV nodal echo beat."
        },
        {
            "id": "u4-q2",
            "type": "multiple-choice",
            "question": "What is a 'dangling potential' in the context of an accessory pathway?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "A potential (like retrograde His) seen after the QRS when AV or VA conduction is blocked", "isCorrect": true },
                { "id": "opt2", "text": "An artifact on the ablation catheter", "isCorrect": false },
                { "id": "opt3", "text": "A fragmented potential in a scar", "isCorrect": false },
                { "id": "opt4", "text": "A late potential in the coronary sinus", "isCorrect": false }
            ],
            "explanation": "A dangling potential is typically a retrograde His deflection that becomes visible because it is delayed (dangling) and not obscured by atrial activity, often seen when a ventricular extra-stimulus blocks retrograde to the atrium."
        },

        /* --- UNIT 5: CARDIAC AXIS --- */
        {
            "id": "u5-q1",
            "type": "matching",
            "question": "Match the ECG findings to the correct Axis Deviation.",
            "points": 3,
            "pairs": [
                { "id": "p1", "left": "Lead I (+), Lead II (+)", "right": "Normal Axis" },
                { "id": "p2", "left": "Lead I (+), Lead II (-)", "right": "Left Axis Deviation" },
                { "id": "p3", "left": "Lead I (-), Lead II (+)", "right": "Right Axis Deviation" },
                { "id": "p4", "left": "Lead I (-), Lead II (-)", "right": "North-West Axis" }
            ],
            "explanation": "Normal: I+, II+. LAD: I+, II-. RAD: I-, II+. NW: I-, II-."
        },
        {
            "id": "u5-q2",
            "type": "multiple-select",
            "question": "Which of the following conditions can cause Left Axis Deviation? (Select all that apply)",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Left Ventricular Hypertrophy", "isCorrect": true },
                { "id": "opt2", "text": "Left Anterior Hemiblock", "isCorrect": true },
                { "id": "opt3", "text": "Right Ventricular Hypertrophy", "isCorrect": false },
                { "id": "opt4", "text": "Left Posterior Hemiblock", "isCorrect": false }
            ],
            "explanation": "LAD is caused by forces pulling left (LVH) or loss of anterior forces (Left Anterior Hemiblock)."
        },
        {
            "id": "u5-q3",
            "type": "multiple-choice",
            "question": "A 'North-West' axis (Negative I, Negative II) with a wide QRS is strongly suggestive of:",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Ventricular Tachycardia (originating from LV apex)", "isCorrect": true },
                { "id": "opt2", "text": "SVT with aberrancy", "isCorrect": false },
                { "id": "opt3", "text": "Atrial Fibrillation", "isCorrect": false },
                { "id": "opt4", "text": "Normal variant", "isCorrect": false }
            ],
            "explanation": "A NW axis implies activation spreading from the apex towards the base (superior) and rightward, which is characteristic of VT originating in the LV apex."
        },
        {
            "id": "u5-q4",
            "type": "multiple-choice",
            "question": "In the 'Tug-of-War' analogy for cardiac axis, what effect does infarction have?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "It decreases the pull in the direction of the infarction (weaker opponent)", "isCorrect": true },
                { "id": "opt2", "text": "It increases the pull in the direction of the infarction (stronger teammate)", "isCorrect": false },
                { "id": "opt3", "text": "It has no effect on axis", "isCorrect": false },
                { "id": "opt4", "text": "It always causes a normal axis", "isCorrect": false }
            ],
            "explanation": "Infarction represents dead tissue or loss of forces. In the tug-of-war, this is a 'weaker opponent', allowing the opposing forces to win and pull the axis away from the infarct."
        }
    ]
});