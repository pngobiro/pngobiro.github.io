registerQuiz("unit-2-quiz", {
    "schemaVersion": "1.0",
    "quizId": "unit-2-quiz",
    "metadata": {
        "title": "Unit 2: Common Tachycardias",
        "description": "Assessment on mechanisms, diagnosis, and ablation of AVNRT, AVRT, Flutter, AF, and VT.",
        "topicId": "unit-2",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 80,
        "createdAt": "2026-01-20T22:00:00Z",
        "updatedAt": "2026-01-20T22:00:00Z",
        "tags": ["avnrt", "avrt", "flutter", "af", "vt"]
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
            "id": "u2-q1",
            "type": "multiple-choice",
            "question": "What is the typical circuit for 'Slow-Fast' AVNRT?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Antegrade Slow Pathway, Retrograde Fast Pathway", "isCorrect": true },
                { "id": "opt2", "text": "Antegrade Fast Pathway, Retrograde Slow Pathway", "isCorrect": false },
                { "id": "opt3", "text": "Antegrade Slow Pathway, Retrograde Slow Pathway", "isCorrect": false },
                { "id": "opt4", "text": "Antegrade Fast Pathway, Retrograde Fast Pathway", "isCorrect": false }
            ],
            "explanation": "Typical AVNRT is 'Slow-Fast': signals go DOWN the Slow pathway (causing a long AH) and UP the Fast pathway (causing a short VA/echo)."
        },
        {
            "id": "u2-q2",
            "type": "fill-blank",
            "question": "An accessory pathway that conducts only retrogradely (from V to A) and does not show a delta wave is called a __b1__ pathway.",
            "points": 1,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["concealed"], "caseSensitive": false }
            ],
            "explanation": "Since it doesn't pre-excite the ventricle, its presence is 'concealed' on the surface ECG during sinus rhythm."
        },
        {
            "id": "u2-q3",
            "type": "image-based",
            "question": "In this diagram of Typical Atrial Flutter ablation, identify the target area known as the Cavo-Tricuspid Isthmus (CTI).",
            "points": 1,
            "imageUrl": "../assets/images/image-20260120-3b2397be.jpeg",
            "imageAlt": "Atrial Flutter Ablation Diagram",
            "hotspots": [
                { "id": "h1", "x": 42, "y": 65, "radius": 12, "label": "CTI", "isCorrect": true },
                { "id": "h2", "x": 20, "y": 30, "radius": 12, "label": "HRA", "isCorrect": false },
                { "id": "h3", "x": 60, "y": 30, "radius": 12, "label": "CS", "isCorrect": false }
            ],
            "explanation": "The CTI is the isthmus of tissue between the IVC and the Tricuspid annulus, which is the critical slow zone for typical flutter."
        },
        {
            "id": "u2-q4",
            "type": "multiple-choice",
            "question": "Which finding indicates bidirectional block across the Cavo-Tricuspid Isthmus (CTI)?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Pacing medial to the line produces late lateral activation, AND pacing lateral produces late medial activation", "isCorrect": true },
                { "id": "opt2", "text": "Pacing medial to the line produces early lateral activation", "isCorrect": false },
                { "id": "opt3", "text": "Termination of atrial flutter", "isCorrect": false },
                { "id": "opt4", "text": "Reduced electrogram amplitude on the line", "isCorrect": false }
            ],
            "explanation": "Bidirectional block means the signal cannot cross the line; it must go all the way around the tricuspid annulus, resulting in late activation on the other side regardless of pacing direction."
        },
        {
            "id": "u2-q5",
            "type": "ordering",
            "question": "Order the steps in the initiation of AVNRT.",
            "points": 1,
            "items": [
                { "id": "i1", "text": "Premature Atrial Contraction (PAC) occurs", "correctPosition": 1 },
                { "id": "i2", "text": "Block in the Fast Pathway (due to refractory period)", "correctPosition": 2 },
                { "id": "i3", "text": "Conduction proceeds down the Slow Pathway (long AH)", "correctPosition": 3 },
                { "id": "i4", "text": "Retrograde conduction up the recovered Fast Pathway", "correctPosition": 4 },
                { "id": "i5", "text": "Reentrant circuit established (Tachycardia)", "correctPosition": 5 }
            ],
            "explanation": "A PAC finds the Fast pathway refractory, travels down the Slow (jump), allowing the Fast to recover and conduct retrogradely, initiating the loop."
        },
        {
            "id": "u2-q6",
            "type": "multiple-select",
            "question": "Which of the following are signs of 'Entrance Block' during Pulmonary Vein Isolation? (Select all that apply)",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Disappearance of PV potentials on the Lasso catheter during atrial pacing", "isCorrect": true },
                { "id": "opt2", "text": "Dissociated potentials (PV firing independently of atrium)", "isCorrect": true },
                { "id": "opt3", "text": "Failure to capture the atrium when pacing the PV", "isCorrect": false },
                { "id": "opt4", "text": "Termination of AF", "isCorrect": false }
            ],
            "explanation": "Entrance block means signals can't get IN. Pacing the atrium and seeing no PV potentials, or seeing the PV doing its own thing (dissociated), confirms this. Failure to capture atrium from PV proves EXIT block."
        },
        {
            "id": "u2-q7",
            "type": "matching",
            "question": "Match the VT mapping strategy to its best use case.",
            "points": 1,
            "pairs": [
                { "id": "p1", "left": "Activation Mapping", "right": "Focal VT / Hemodynamically Stable" },
                { "id": "p2", "left": "Pace Mapping", "right": "Focal VT / Non-inducible or Unstable" },
                { "id": "p3", "left": "Entrainment Mapping", "right": "Reentrant VT / Hemodynamically Stable" },
                { "id": "p4", "left": "Substrate Modification", "right": "Unstable VT / Multiple Morphologies" }
            ],
            "explanation": "Activation/Entrainment require stable VT. Pace mapping mimics morphology. Substrate modification targets scar/channels without needing sustained VT."
        },
        {
            "id": "u2-q8",
            "type": "multiple-choice",
            "question": "What is the primary target for ablation in Focal Atrial Tachycardia?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "The site of earliest atrial activation", "isCorrect": true },
                { "id": "opt2", "text": "The Cavo-Tricuspid Isthmus", "isCorrect": false },
                { "id": "opt3", "text": "The AV Node Slow Pathway", "isCorrect": false },
                { "id": "opt4", "text": "The Pulmonary Veins", "isCorrect": false }
            ],
            "explanation": "Focal AT originates from a point source. Mapping seeks the spot where the atrial signal is earliest relative to the P-wave or reference."
        },
        {
            "id": "u2-q9",
            "type": "true-false",
            "question": "In 'Antidromic' AVRT, the QRS complex is narrow.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "False. Antidromic AVRT conducts down the accessory pathway (pre-excitation) and up the node. Because ventricular activation is fully via the AP, the QRS is wide (maximally pre-excited)."
        },
        {
            "id": "u2-q10",
            "type": "multiple-choice",
            "question": "What does a 'Split A' signify during CTI ablation?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Separation of wavefronts on either side of the ablation line", "isCorrect": true },
                { "id": "opt2", "text": "Dissociated Pulmonary Vein potentials", "isCorrect": false },
                { "id": "opt3", "text": "Double firing of the atrium", "isCorrect": false },
                { "id": "opt4", "text": "Successful termination of flutter", "isCorrect": false }
            ],
            "explanation": "As the isthmus is blocked, the electrode records activation from one side (early) and then waits for the signal to go all the way around to the other side (late), splitting the potential."
        },
        {
            "id": "u2-q11",
            "type": "multiple-choice",
            "question": "Which feature distinguishes Focal VT from Reentrant VT?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Focal VT radiates from a point source; Reentrant VT uses a circuit around scar", "isCorrect": true },
                { "id": "opt2", "text": "Focal VT is always faster", "isCorrect": false },
                { "id": "opt3", "text": "Reentrant VT always has a narrow QRS", "isCorrect": false },
                { "id": "opt4", "text": "Focal VT cannot be ablated", "isCorrect": false }
            ],
            "explanation": "Focal VT spreads out from a single spot (like a pebble in a pond). Reentrant VT spins around an obstacle (like scar), often having an identifiable isthmus."
        },
        {
            "id": "u2-q12",
            "type": "fill-blank",
            "question": "Voltage mapping identifies scar tissue by low amplitude electrograms. Typically, voltage < __b1__ mV is considered dense scar.",
            "points": 1,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["0.5"], "caseSensitive": false }
            ],
            "explanation": "By convention in voltage mapping, < 0.5 mV defines dense scar, while > 1.5 mV is healthy tissue."
        },
        {
            "id": "u2-q13",
            "type": "multiple-choice",
            "question": "If you observe 'Independent Pulmonary Vein Activity' (PV firing rapidly but sinus rhythm on ECG), what have you achieved?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Exit Block", "isCorrect": true },
                { "id": "opt2", "text": "Entrance Block", "isCorrect": false },
                { "id": "opt3", "text": "Bidirectional Block", "isCorrect": false },
                { "id": "opt4", "text": "Failure of ablation", "isCorrect": false }
            ],
            "explanation": "The PV is firing (entrance block irrelevant here) but those signals aren't getting out to drive the atrium (Exit Block). This proves isolation."
        },
        {
            "id": "u2-q14",
            "type": "multiple-choice",
            "question": "Where does the 'Slow Pathway' typically insert?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Inferiorly, near the Coronary Sinus os", "isCorrect": true },
                { "id": "opt2", "text": "Superiorly, near the His bundle", "isCorrect": false },
                { "id": "opt3", "text": "Lateral Right Atrium", "isCorrect": false },
                { "id": "opt4", "text": "Left Atrial Septum", "isCorrect": false }
            ],
            "explanation": "The slow pathway is an inferior extension of the AV node, anatomically located between the CS os and the tricuspid annulus (Triangle of Koch)."
        },
        {
            "id": "u2-q15",
            "type": "true-false",
            "question": "A His-refractory PVC that terminates SVT without conducting to the atrium proves the mechanism is AVRT.",
            "points": 1,
            "correctAnswer": true,
            "explanation": "True. If the PVC can't go up the AV node (His refractory) and doesn't go up an AP (no atrial capture) but STOPS the tachycardia, it must have invaded the ventricular limb of an AVRT circuit."
        }
    ]
});