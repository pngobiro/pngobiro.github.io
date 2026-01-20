
registerQuiz("comprehensive-exam", {
    "schemaVersion": "1.0",
    "quizId": "comprehensive-exam",
    "metadata": {
        "title": "Comprehensive ECG Examination",
        "description": "Final assessment covering Topics 1-11 with live ECG monitor simulations.",
        "topicId": "comprehensive",
        "difficulty": "advanced",
        "estimatedTime": 30,
        "passingScore": 80,
        "createdAt": "2026-01-20T00:00:00Z"
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "end",
        "allowRetry": true
    },
    "questions": [
        // --- TEXT BASED QUESTIONS (Foundations) ---
        {
            "id": "exam-q1",
            "type": "multiple-select",
            "question": "Regarding the 'GRIP' protocol for patient preparation, which elements are correct? (Select all that apply)",
            "points": 1,
            "options": [
                { "id": "op1", "text": "Greet and Rapport", "isCorrect": true },
                { "id": "op2", "text": "Privacy", "isCorrect": true },
                { "id": "op3", "text": "Resuscitation", "isCorrect": false },
                { "id": "op4", "text": "Explain procedure and Permission", "isCorrect": true }
            ],
            "explanation": "GRIP: Greet, Rapport, Introduce, Identify, Privacy, Explain, Permission."
        },
        {
            "id": "exam-q2",
            "type": "multiple-choice",
            "question": "Where should the V1 electrode be placed?",
            "points": 1,
            "options": [
                { "id": "op1", "text": "4th intercostal space, right sternal edge", "isCorrect": true },
                { "id": "op2", "text": "4th intercostal space, left sternal edge", "isCorrect": false },
                { "id": "op3", "text": "5th intercostal space, mid-clavicular line", "isCorrect": false },
                { "id": "op4", "text": "5th intercostal space, anterior axillary line", "isCorrect": false }
            ],
            "explanation": "V1 is located at the 4th ICS, right sternal edge."
        },
        {
            "id": "exam-q3",
            "type": "ordering",
            "question": "Order the sequence of cardiac conduction.",
            "points": 2,
            "items": [
                { "id": "s1", "text": "SA Node", "correctPosition": 1 },
                { "id": "s2", "text": "AV Node", "correctPosition": 2 },
                { "id": "s3", "text": "Bundle of His", "correctPosition": 3 },
                { "id": "s4", "text": "Purkinje Fibres", "correctPosition": 4 }
            ],
            "explanation": "Impulse travels: SA Node -> Atria -> AV Node -> Bundle of His -> Branches -> Purkinje Fibres."
        },
        
        // --- VISUAL QUESTIONS (ECG TRACES) ---
        
        // VENTRICULAR TACHYCARDIA (Animated)
        {
            "id": "exam-q19-visual",
            "type": "multiple-choice",
            "question": "Identify the rhythm shown on the monitor below:",
            "points": 2,
            "media": {
                "type": "image",
                // Animated SVG Data URI for VT (Wide, rapid)
                "url": "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 150' style='background:black'%3E%3Cdefs%3E%3Cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%23333' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)' /%3E%3Cpath d='M0 75 L10 75 L20 120 L30 20 L40 120 L50 75 L60 75 L70 120 L80 20 L90 120 L100 75 L110 75 L120 120 L130 20 L140 120 L150 75 L160 75 L170 120 L180 20 L190 120 L200 75 L210 75 L220 120 L230 20 L240 120 L250 75 L260 75 L270 120 L280 20 L290 120 L300 75 L310 75 L320 120 L330 20 L340 120 L350 75 L360 75 L370 120 L380 20 L390 120 L400 75' stroke='%23ef4444' stroke-width='3' fill='none' stroke-linejoin='round'%3E%3CanimateTransform attributeName='transform' type='translate' from='0 0' to='-200 0' dur='1s' repeatCount='indefinite' /%3E%3C/path%3E%3C/svg%3E",
                "alt": "ECG showing rapid wide complex rhythm"
            },
            "options": [
                { "id": "op1", "text": "Ventricular Tachycardia", "isCorrect": true },
                { "id": "op2", "text": "Atrial Fibrillation", "isCorrect": false },
                { "id": "op3", "text": "Normal Sinus Rhythm", "isCorrect": false },
                { "id": "op4", "text": "First Degree Heart Block", "isCorrect": false }
            ],
            "explanation": "The trace shows wide, regular QRS complexes at a rapid rate, characteristic of VT."
        },

        // VENTRICULAR FIBRILLATION (Animated)
        {
            "id": "exam-q20-visual",
            "type": "multiple-choice",
            "question": "The patient has lost consciousness. The monitor shows this rhythm. What is it?",
            "points": 2,
            "media": {
                "type": "image",
                // Animated SVG for VF (Chaotic squiggles)
                "url": "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 150' style='background:black'%3E%3Cdefs%3E%3Cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%23333' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)' /%3E%3Cpath d='M0 75 Q10 90 20 60 T40 80 T60 50 T80 90 T100 60 T120 100 T140 40 T160 80 T180 50 T200 90 T220 30 T240 110 T260 60 T280 80 T300 50 T320 90 T340 40 T360 80 T380 60 T400 90' stroke='%23ef4444' stroke-width='2' fill='none' stroke-linejoin='round'%3E%3CanimateTransform attributeName='transform' type='translate' from='0 0' to='-200 0' dur='1.5s' repeatCount='indefinite' /%3E%3C/path%3E%3C/svg%3E",
                "alt": "ECG showing chaotic wavy line"
            },
            "options": [
                { "id": "op1", "text": "Ventricular Fibrillation", "isCorrect": true },
                { "id": "op2", "text": "Atrial Flutter", "isCorrect": false },
                { "id": "op3", "text": "Artifact / Loose lead", "isCorrect": false },
                { "id": "op4", "text": "Sinus Bradycardia", "isCorrect": false }
            ],
            "explanation": "This is VF: a chaotic, disordered trace compatible with cardiac arrest."
        },

        // ATRIAL FLUTTER (Animated)
        {
            "id": "exam-q18-visual",
            "type": "multiple-choice",
            "question": "Identify the specific atrial arrhythmia shown below (note the baseline):",
            "points": 2,
            "media": {
                "type": "image",
                // Animated SVG for Flutter (Sawtooth)
                "url": "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 150' style='background:black'%3E%3Cpath d='M0 75 L10 65 L20 85 L30 75 L40 65 L50 85 L60 75 L70 65 L80 85 L90 20 L100 120 L110 75 L120 65 L130 85 L140 75 L150 65 L160 85 L170 75 L180 65 L190 85 L200 75 L210 20 L220 120 L230 75 L240 65 L250 85 L260 75 L270 65 L280 85' stroke='%230f0' stroke-width='2' fill='none'%3E%3CanimateTransform attributeName='transform' type='translate' from='0 0' to='-120 0' dur='2s' repeatCount='indefinite' /%3E%3C/path%3E%3C/svg%3E",
                "alt": "ECG showing sawtooth baseline"
            },
            "options": [
                { "id": "op1", "text": "Atrial Flutter", "isCorrect": true },
                { "id": "op2", "text": "Atrial Fibrillation", "isCorrect": false },
                { "id": "op3", "text": "Sinus Tachycardia", "isCorrect": false },
                { "id": "op4", "text": "Second Degree Heart Block", "isCorrect": false }
            ],
            "explanation": "The 'saw-tooth' baseline between QRS complexes is the hallmark of Atrial Flutter."
        },

        // ATRIAL FIBRILLATION (Animated)
        {
            "id": "exam-q17-visual",
            "type": "multiple-choice",
            "question": "Analyze the rhythm strip. Note the R-R intervals and baseline.",
            "points": 2,
            "media": {
                "type": "image",
                // Animated SVG for AFib (Irregular R-R, shaky baseline)
                "url": "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 150' style='background:black'%3E%3Cpath d='M0 75 l5 2 l5 -2 l5 3 l5 -3 l10 -50 l5 80 l5 -30 l10 0 l5 2 l10 -2 l15 2 l5 -2 l10 -50 l5 80 l5 -30 l20 2 l5 -2 l30 2 l10 -50 l5 80 l5 -30 l10 0 l5 3 l15 -3' stroke='%230f0' stroke-width='2' fill='none' stroke-linejoin='round'%3E%3CanimateTransform attributeName='transform' type='translate' from='0 0' to='-150 0' dur='3s' repeatCount='indefinite' /%3E%3C/path%3E%3C/svg%3E",
                "alt": "ECG showing irregular rhythm"
            },
            "options": [
                { "id": "op1", "text": "Atrial Fibrillation", "isCorrect": true },
                { "id": "op2", "text": "Sinus Arrhythmia", "isCorrect": false },
                { "id": "op3", "text": "Ventricular Tachycardia", "isCorrect": false },
                { "id": "op4", "text": "Normal Sinus Rhythm", "isCorrect": false }
            ],
            "explanation": "The rhythm is irregularly irregular and there are no discernable P waves, only a shaky baseline."
        },

        // ACUTE MI (Static but visual)
        {
            "id": "exam-q21-visual",
            "type": "multiple-choice",
            "question": "Observe the ST segments in this simplified trace. What is the diagnosis?",
            "points": 2,
            "media": {
                "type": "image",
                // Static SVG showing ST Elevation
                "url": "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 150' style='background:black'%3E%3Ctext x='10' y='20' fill='white' font-family='monospace'&gt;Lead II&lt;/text%3E%3Cpath d='M0 80 h20 l5 -5 l5 5 h10 l-5 10 l15 -60 l10 30 l20 -20 l20 5 l10 30 h50' stroke='%230f0' stroke-width='3' fill='none' stroke-linejoin='round' /%3E%3C/svg%3E",
                "alt": "ECG showing ST Elevation"
            },
            "options": [
                { "id": "op1", "text": "Acute Myocardial Infarction (STEMI)", "isCorrect": true },
                { "id": "op2", "text": "Normal Sinus Rhythm", "isCorrect": false },
                { "id": "op3", "text": "Ischaemia (ST Depression)", "isCorrect": false },
                { "id": "op4", "text": "Hyperkalemia", "isCorrect": false }
            ],
            "explanation": "The ST segment is significantly elevated above the isoelectric line, indicating an acute injury pattern (STEMI)."
        },

        // --- BACK TO TEXT QUESTIONS ---
        
        {
            "id": "exam-q5",
            "type": "multiple-choice",
            "question": "Which leads primarily view the inferior surface of the heart?",
            "points": 1,
            "options": [
                { "id": "op1", "text": "II, III, aVF", "isCorrect": true },
                { "id": "op2", "text": "I, aVL, V5, V6", "isCorrect": false },
                { "id": "op3", "text": "V1, V2", "isCorrect": false },
                { "id": "op4", "text": "V3, V4", "isCorrect": false }
            ],
            "explanation": "Inferior wall is viewed by II, III, and aVF."
        },
        {
            "id": "exam-q6",
            "type": "matching",
            "question": "Match the Axis Deviation to its mnemonic/association.",
            "points": 2,
            "pairs": [
                { "id": "p1", "left": "Right Axis Deviation", "right": "RALPH (RVH, Anterolateral MI)" },
                { "id": "p2", "left": "Left Axis Deviation", "right": "VILLA (VT, Inferior MI, LVH)" }
            ],
            "explanation": "RAD RALPH (Right/RVH) and LAD from VILLA (Left/LVH/Inferior MI)."
        },
        {
            "id": "exam-q7",
            "type": "fill-blank",
            "question": "Standard ECG paper speed is __b1__ mm/s.",
            "points": 1,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["25"], "caseSensitive": false }
            ],
            "explanation": "Standard speed is 25mm/s."
        },
        {
            "id": "exam-q8",
            "type": "multiple-choice",
            "question": "Calculate the heart rate if the RR interval is 4 large squares (regular rhythm).",
            "points": 1,
            "options": [
                { "id": "op1", "text": "75 bpm", "isCorrect": true },
                { "id": "op2", "text": "60 bpm", "isCorrect": false },
                { "id": "op3", "text": "100 bpm", "isCorrect": false },
                { "id": "op4", "text": "50 bpm", "isCorrect": false }
            ],
            "explanation": "300 divided by 4 = 75."
        },
        {
            "id": "exam-q9",
            "type": "multiple-choice",
            "question": "A PR interval that progressively widens until a QRS is dropped describes which block?",
            "points": 1,
            "options": [
                { "id": "op1", "text": "2nd Degree Type I (Wenckebach)", "isCorrect": true },
                { "id": "op2", "text": "2nd Degree Type II", "isCorrect": false },
                { "id": "op3", "text": "1st Degree Heart Block", "isCorrect": false },
                { "id": "op4", "text": "3rd Degree Heart Block", "isCorrect": false }
            ],
            "explanation": "Wenckebach (Mobitz I) is characterized by progressive PR lengthening."
        },
        {
            "id": "exam-q10",
            "type": "multiple-choice",
            "question": "P Mitrale (bifid P wave) is typically caused by:",
            "points": 1,
            "options": [
                { "id": "op1", "text": "Left Atrial Hypertrophy", "isCorrect": true },
                { "id": "op2", "text": "Right Atrial Hypertrophy", "isCorrect": false },
                { "id": "op3", "text": "Right Ventricular Hypertrophy", "isCorrect": false },
                { "id": "op4", "text": "Hyperkalemia", "isCorrect": false }
            ],
            "explanation": "P Mitrale indicates Left Atrial Hypertrophy (often due to mitral valve disease)."
        },
        {
            "id": "exam-q11",
            "type": "multiple-select",
            "question": "Which of the following indicate a Pathological Q wave? (Select all that apply)",
            "points": 2,
            "options": [
                { "id": "op1", "text": "Deeper than 2 small squares (0.2mV)", "isCorrect": true },
                { "id": "op2", "text": "Wider than 1 small square (0.04s)", "isCorrect": true },
                { "id": "op3", "text": "Any Q wave in Lead III", "isCorrect": false },
                { "id": "op4", "text": "Q wave in aVR", "isCorrect": false }
            ],
            "explanation": "Pathological Q waves are deep (>0.2mV) and wide (>0.04s)."
        },
        {
            "id": "exam-q12",
            "type": "multiple-choice",
            "question": "According to the 'WiLLaM' mnemonic, what pattern is seen in V1 for Left Bundle Branch Block (LBBB)?",
            "points": 1,
            "options": [
                { "id": "op1", "text": "W shape", "isCorrect": true },
                { "id": "op2", "text": "M shape", "isCorrect": false },
                { "id": "op3", "text": "RSR pattern", "isCorrect": false },
                { "id": "op4", "text": "Delta wave", "isCorrect": false }
            ],
            "explanation": "WiLLaM: V1 = W, V6 = M for LBBB."
        },
        {
            "id": "exam-q13",
            "type": "multiple-choice",
            "question": "What is the primary ECG sign of acute Hyperkalemia?",
            "points": 1,
            "options": [
                { "id": "op1", "text": "Tall, peaked T waves", "isCorrect": true },
                { "id": "op2", "text": "Flat T waves", "isCorrect": false },
                { "id": "op3", "text": "Prominent U waves", "isCorrect": false },
                { "id": "op4", "text": "ST depression", "isCorrect": false }
            ],
            "explanation": "Tall peaked T waves are the classic sign of Hyperkalemia."
        },
        {
            "id": "exam-q14",
            "type": "multiple-choice",
            "question": "Pericarditis is often characterized by which ST segment change?",
            "points": 1,
            "options": [
                { "id": "op1", "text": "Saddle-shaped ST elevation", "isCorrect": true },
                { "id": "op2", "text": "Planar ST depression", "isCorrect": false },
                { "id": "op3", "text": "Convex ST elevation", "isCorrect": false },
                { "id": "op4", "text": "ST elevation in inferior leads only", "isCorrect": false }
            ],
            "explanation": "Pericarditis typically shows widespread saddle-shaped ST elevation."
        },
        {
            "id": "exam-q16",
            "type": "true-false",
            "question": "Persistent ST elevation weeks after an MI may indicate the formation of a ventricular aneurysm.",
            "points": 1,
            "correctAnswer": true,
            "explanation": "True. Persistent ST elevation is a sign of aneurysm formation."
        },
        {
            "id": "exam-q23",
            "type": "multiple-choice",
            "question": "A patient with chest pain has a new LBBB. How should this be managed?",
            "points": 1,
            "options": [
                { "id": "op1", "text": "Treat as an Acute MI", "isCorrect": true },
                { "id": "op2", "text": "Discharge home", "isCorrect": false },
                { "id": "op3", "text": "Treat as stable angina", "isCorrect": false },
                { "id": "op4", "text": "Wait for Troponin results before any action", "isCorrect": false }
            ],
            "explanation": "New LBBB with chest pain is treated as a STEMI equivalent."
        },
        {
            "id": "exam-q24",
            "type": "multiple-choice",
            "question": "What is the definition of Sinus Bradycardia?",
            "points": 1,
            "options": [
                { "id": "op1", "text": "Sinus rhythm with rate < 60 bpm", "isCorrect": true },
                { "id": "op2", "text": "Sinus rhythm with rate < 50 bpm", "isCorrect": false },
                { "id": "op3", "text": "Any rhythm with rate < 60 bpm", "isCorrect": false },
                { "id": "op4", "text": "Sinus rhythm with pauses > 3 seconds", "isCorrect": false }
            ],
            "explanation": "Sinus rhythm (originating from SA node) slower than 60 bpm."
        },
        {
            "id": "exam-q25",
            "type": "multiple-choice",
            "question": "In the context of ECG interpretation, what does 'Sinus Rhythm' specifically imply?",
            "points": 1,
            "options": [
                { "id": "op1", "text": "Every QRS is preceded by a P wave originating from the SA node", "isCorrect": true },
                { "id": "op2", "text": "The heart rate is between 60 and 100 bpm", "isCorrect": false },
                { "id": "op3", "text": "The rhythm is perfectly regular", "isCorrect": false },
                { "id": "op4", "text": "There are no ectopic beats", "isCorrect": false }
            ],
            "explanation": "Sinus Rhythm means the impulse originates in the SA node, implying P waves precede QRS complexes."
        }
    ]
});