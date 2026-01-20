registerQuiz("front-matter-quiz", {
    "schemaVersion": "1.0",
    "quizId": "front-matter-quiz",
    "metadata": {
        "title": "Front Matter & Glossary",
        "description": "Assessment on introductory concepts, abbreviations, and definitions used throughout the course.",
        "topicId": "front-matter",
        "difficulty": "beginner",
        "estimatedTime": 5,
        "passingScore": 80,
        "createdAt": "2026-01-20T22:00:00Z",
        "updatedAt": "2026-01-20T22:00:00Z",
        "tags": ["intro", "definitions", "abbreviations"]
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
            "id": "fm-q1",
            "type": "matching",
            "question": "Match the abbreviation to its correct definition.",
            "points": 1,
            "pairs": [
                { "id": "p1", "left": "CS", "right": "Coronary Sinus" },
                { "id": "p2", "left": "HRA", "right": "High Right Atrium" },
                { "id": "p3", "left": "RVA", "right": "Right Ventricular Apex" },
                { "id": "p4", "left": "CTI", "right": "Cavo-Tricuspid Isthmus" }
            ],
            "explanation": "Standard EP abbreviations: CS (Coronary Sinus), HRA (High Right Atrium), RVA (Right Ventricular Apex), CTI (Cavo-Tricuspid Isthmus)."
        },
        {
            "id": "fm-q2",
            "type": "multiple-choice",
            "question": "What is the definition of 'Antidromic' in the context of AVRT?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Conduction down the accessory pathway and up the AV node", "isCorrect": true },
                { "id": "opt2", "text": "Conduction down the AV node and up the accessory pathway", "isCorrect": false },
                { "id": "opt3", "text": "Conduction going in the same direction as the predominant wave", "isCorrect": false },
                { "id": "opt4", "text": "Conduction that blocks in both directions", "isCorrect": false }
            ],
            "explanation": "Antidromic means 'against the current'. In AVRT, it refers to the circuit going down the accessory pathway (wide QRS) and up the AV node, which is opposite to normal conduction."
        },
        {
            "id": "fm-q3",
            "type": "true-false",
            "question": "An 'Echo' beat is defined as an unexpected return of a wave of depolarization to the chamber where the wave originated.",
            "points": 1,
            "correctAnswer": true,
            "explanation": "True. An echo beat is essentially a single beat of reentrant tachycardia returning to its origin."
        },
        {
            "id": "fm-q4",
            "type": "fill-blank",
            "question": "The pacing interval at which 1:1 conduction is lost is known as the __b1__ cycle length.",
            "points": 1,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["Wenckebach"], "caseSensitive": false }
            ],
            "explanation": "The Wenckebach cycle length is the pacing interval where the AV node (or other tissue) can no longer conduct every beat 1:1."
        },
        {
            "id": "fm-q5",
            "type": "multiple-choice",
            "question": "What does the term 'Concealed' refer to regarding an accessory pathway?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "It conducts retrogradely only (no delta wave on ECG)", "isCorrect": true },
                { "id": "opt2", "text": "It is located in the septum", "isCorrect": false },
                { "id": "opt3", "text": "It conducts antegradely only", "isCorrect": false },
                { "id": "opt4", "text": "It has a very slow conduction velocity", "isCorrect": false }
            ],
            "explanation": "A concealed pathway conducts only from ventricle to atrium. Since it doesn't conduct antegradely, there is no pre-excitation (delta wave) on the surface ECG, effectively 'concealing' its presence during sinus rhythm."
        }
    ]
});