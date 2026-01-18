registerQuiz("topic-06-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-06-quiz",
    "metadata": {
        "title": "Evaluation & Assessment Quiz",
        "description": "Test your knowledge on assessment concepts, types of evaluation, and tools for assessing knowledge, skills, and attitudes.",
        "topicId": "topic-06",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2026-01-18T20:00:00Z",
        "updatedAt": "2026-01-18T20:00:00Z",
        "tags": ["evaluation", "assessment", "exams", "OSCE"]
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
            "id": "t6-q1",
            "type": "multiple-choice",
            "question": "What is 'Formative Evaluation'?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Evaluation done at the end of the course for grading", "isCorrect": false },
                { "id": "opt2", "text": "Progressive evaluation providing continuous feedback", "isCorrect": true },
                { "id": "opt3", "text": "Evaluation for licensing purposes", "isCorrect": false },
                { "id": "opt4", "text": "Evaluation of the teacher only", "isCorrect": false }
            ],
            "explanation": "Formative evaluation is continuous and diagnostic, helping identify strengths and weaknesses during the learning process."
        },
        {
            "id": "t6-q2",
            "type": "matching",
            "question": "Match the scoring method to its description:",
            "points": 2,
            "pairs": [
                { "id": "p1", "left": "Analytical Scoring", "right": "Marks awarded for specific crucial points" },
                { "id": "p2", "left": "Impression Scoring", "right": "Grade based on overall adequacy/feeling" }
            ],
            "explanation": "Analytical scoring checks for specific points (objective), while impression scoring judges the whole answer (subjective)."
        },
        {
            "id": "t6-q3",
            "type": "fill-blank",
            "question": "In a Multiple Choice Question, the question part is called the __b1__, and the incorrect answers are called __b2__.",
            "points": 2,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["stem"], "caseSensitive": false },
                { "id": "b2", "acceptedAnswers": ["distracters", "distractors"], "caseSensitive": false }
            ]
        },
        {
            "id": "t6-q4",
            "type": "multiple-select",
            "question": "Which of the following are advantages of the OSCE (Objective Structured Clinical Examination)?",
            "points": 2,
            "options": [
                { "id": "opt1", "text": "Allows adequate sampling of skills", "isCorrect": true },
                { "id": "opt2", "text": "It is very quick to organize", "isCorrect": false },
                { "id": "opt3", "text": "It is analytic and objective", "isCorrect": true },
                { "id": "opt4", "text": "Separates assessment of process and product", "isCorrect": true }
            ],
            "explanation": "OSCE is objective and samples skills well, but it is time-consuming to organize (disadvantage)."
        },
        {
            "id": "t6-q5",
            "type": "multiple-choice",
            "question": "What is the main purpose of 'Summative Evaluation'?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "To diagnose learning problems early", "isCorrect": false },
                { "id": "opt2", "text": "To award grades, certificates, or licenses at the end", "isCorrect": true },
                { "id": "opt3", "text": "To motivate students daily", "isCorrect": false },
                { "id": "opt4", "text": "To practice skills", "isCorrect": false }
            ],
            "explanation": "Summative evaluation is terminal; it judges achievement for grading or certification."
        },
        {
            "id": "t6-q6",
            "type": "true-false",
            "question": "Excellence in theory can compensate for failure in practical tests.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "Practical skills are crucial. Failure in practicals is considered failure in the whole examination."
        },
        {
            "id": "t6-q7",
            "type": "multiple-choice",
            "question": "Which characteristic of a good evaluation tool means 'it measures what it is supposed to measure'?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Reliability", "isCorrect": false },
                { "id": "opt2", "text": "Validity", "isCorrect": true },
                { "id": "opt3", "text": "Objectivity", "isCorrect": false },
                { "id": "opt4", "text": "Discriminatory", "isCorrect": false }
            ],
            "explanation": "Validity refers to the accuracy of the measure (measuring what it intends to)."
        },
        {
            "id": "t6-q8",
            "type": "multiple-choice",
            "question": "Which type of question is best for assessing Attitudes?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Essay", "isCorrect": false },
                { "id": "opt2", "text": "Semantic Differential Scale", "isCorrect": true },
                { "id": "opt3", "text": "True/False", "isCorrect": false },
                { "id": "opt4", "text": "Fill in the blank", "isCorrect": false }
            ],
            "explanation": "Attitudes are difficult to measure with direct questions; semantic differential scales (rating opposite adjectives) are commonly used."
        },
        {
            "id": "t6-q9",
            "type": "short-answer",
            "question": "List one method for minimizing bias when marking essays.",
            "points": 1,
            "keywords": ["conceal", "name", "independent", "question by question", "anonymous"],
            "minKeywords": 1,
            "modelAnswer": "Conceal student names OR Mark question by question",
            "explanation": "Concealing names or marking one question across all scripts helps reduce halo effect and bias."
        },
        {
            "id": "t6-q10",
            "type": "ordering",
            "question": "Order the steps for developing an assessment tool:",
            "points": 3,
            "items": [
                { "id": "s1", "text": "List objectives", "correctPosition": 1 },
                { "id": "s2", "text": "Identify expected outcomes", "correctPosition": 2 },
                { "id": "s3", "text": "Specify tools (MCQ, Essay, etc)", "correctPosition": 3 },
                { "id": "s4", "text": "Allocate marks / marking scheme", "correctPosition": 4 },
                { "id": "s5", "text": "Construct questions", "correctPosition": 5 }
            ],
            "explanation": "Start with objectives -> outcomes -> tools -> marks -> questions."
        }
    ]
});