registerQuiz("comprehensive-exam", {
    "schemaVersion": "1.0",
    "quizId": "comprehensive-exam",
    "metadata": {
        "title": "Comprehensive Final Exam: Nursing Leadership and Management",
        "description": "A comprehensive assessment covering management theories, leadership styles, principles, functions, resource management, change theories, and quality assurance in nursing.",
        "topicId": "comprehensive",
        "difficulty": "advanced",
        "estimatedTime": 90,
        "passingScore": 70,
        "createdAt": "2026-01-19T20:00:00Z",
        "updatedAt": "2026-01-19T20:00:00Z",
        "tags": ["management", "leadership", "nursing", "comprehensive", "final"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "end",
        "allowRetry": false,
        "showCorrectAnswers": true,
        "timeLimit": 5400
    },
    "questions": [
        {
            "id": "comp-q1",
            "type": "multiple-choice",
            "question": "Which management theory posits that 'the best management is a true science' and focuses on time and motion studies to improve efficiency?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Bureaucratic Management (Max Weber)", "isCorrect": false },
                { "id": "opt2", "text": "Scientific Management (Frederick Taylor)", "isCorrect": true },
                { "id": "opt3", "text": "Administrative Management (Henri Fayol)", "isCorrect": false },
                { "id": "opt4", "text": "Human Relations Theory (Elton Mayo)", "isCorrect": false }
            ],
            "explanation": "Frederick W. Taylor is the father of Scientific Management. He focused on observing worker performance through time and motion studies to determine the 'one best way' to perform tasks."
        },
        {
            "id": "comp-q2",
            "type": "matching",
            "question": "Match the management theorist with their primary contribution or concept.",
            "points": 4,
            "pairs": [
                { "id": "pair1", "left": "Henri Fayol", "right": "14 Principles of Management" },
                { "id": "pair2", "left": "Elton Mayo", "right": "Hawthorne Effect / Social Factors" },
                { "id": "pair3", "left": "Douglas McGregor", "right": "Theory X and Theory Y" },
                { "id": "pair4", "left": "Max Weber", "right": "Bureaucracy" }
            ],
            "explanation": "Fayol defined administrative principles; Mayo discovered the social aspect of work (Hawthorne); McGregor defined assumptions about worker motivation (X/Y); Weber defined the bureaucratic structure."
        },
        {
            "id": "comp-q3",
            "type": "ordering",
            "question": "Arrange Abraham Maslow's Hierarchy of Needs from the lowest level (basic) to the highest level.",
            "points": 1,
            "items": [
                { "id": "item1", "text": "Physiological Needs", "correctPosition": 1 },
                { "id": "item2", "text": "Safety Needs", "correctPosition": 2 },
                { "id": "item3", "text": "Love and Belonging", "correctPosition": 3 },
                { "id": "item4", "text": "Self-Esteem", "correctPosition": 4 },
                { "id": "item5", "text": "Self-Actualization", "correctPosition": 5 }
            ],
            "explanation": "Maslow visualized needs in a hierarchy starting with basic physiological survival needs, moving up to safety, social belonging, esteem, and finally self-actualization."
        },
        {
            "id": "comp-q4",
            "type": "multiple-choice",
            "question": "According to Herzberg's Two-Factor Theory, which of the following is considered a 'Hygiene Factor' rather than a 'Motivator'?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Achievement", "isCorrect": false },
                { "id": "opt2", "text": "Recognition", "isCorrect": false },
                { "id": "opt3", "text": "Salary and Working Conditions", "isCorrect": true },
                { "id": "opt4", "text": "Responsibility", "isCorrect": false }
            ],
            "explanation": "Herzberg classified salary, working conditions, and company policy as Hygiene factors. Their presence prevents dissatisfaction but does not necessarily motivate. Motivators include achievement, recognition, and the work itself."
        },
        {
            "id": "comp-q5",
            "type": "true-false",
            "question": "In the 'Systems Approach' to management, an Open System is one that does not interact with its environment.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "This is False. An Open System interacts with its environment, receiving inputs (energy, resources) and discharging outputs. A Closed System does not interact with its environment."
        },
        {
            "id": "comp-q6",
            "type": "multiple-choice",
            "question": "Which leadership style is characterized by the leader assuming full responsibility, giving direct orders, and allowing little room for employee initiative?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Democratic", "isCorrect": false },
                { "id": "opt2", "text": "Laissez-faire", "isCorrect": false },
                { "id": "opt3", "text": "Authoritarian (Autocratic)", "isCorrect": true },
                { "id": "opt4", "text": "Situational", "isCorrect": false }
            ],
            "explanation": "Authoritarian (Autocratic) leadership involves the leader making all decisions, giving strict orders, and maintaining high control over the group."
        },
        {
            "id": "comp-q7",
            "type": "multiple-select",
            "question": "Select all the statements that describe a 'Democratic' (Participative) leadership style.",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "It focuses on human aspects and building effective work groups.", "isCorrect": true },
                { "id": "opt2", "text": "The leader abdicates all responsibility to the group.", "isCorrect": false },
                { "id": "opt3", "text": "It encourages group participation in decision making.", "isCorrect": true },
                { "id": "opt4", "text": "It is generally associated with high morale and job satisfaction.", "isCorrect": true }
            ],
            "explanation": "Democratic leadership is people-oriented, collaborative, and encourages participation. Abdicating responsibility is a characteristic of Laissez-faire leadership."
        },
        {
            "id": "comp-q8",
            "type": "fill-blank",
            "question": "The management principle of __id1__ states that an employee should receive orders from only one superior to avoid confusion.",
            "points": 1,
            "blanks": [
                {
                    "id": "id1",
                    "acceptedAnswers": ["Unity of Command", "unity of command"],
                    "caseSensitive": false
                }
            ],
            "explanation": "Unity of Command implies 'one person - one boss'. It limits confusion and ensures clear lines of authority."
        },
        {
            "id": "comp-q9",
            "type": "true-false",
            "question": "When a nurse manager delegates a task, they transfer both the responsibility and the accountability to the subordinate.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "This is False. In delegation, responsibility and authority are transferred, but accountability is SHARED. The delegator remains accountable for the outcome."
        },
        {
            "id": "comp-q10",
            "type": "ordering",
            "question": "Place the steps of the Planning Process in the correct logical order.",
            "points": 1,
            "items": [
                { "id": "step1", "text": "Assessment (Diagnosing the problem)", "correctPosition": 1 },
                { "id": "step2", "text": "Setting Goals and Objectives", "correctPosition": 2 },
                { "id": "step3", "text": "Implementation (Developing/Executing actions)", "correctPosition": 3 },
                { "id": "step4", "text": "Evaluation", "correctPosition": 4 }
            ],
            "explanation": "The planning process mirrors the nursing process: Assessment -> Goal Setting -> Implementation -> Evaluation."
        },
        {
            "id": "comp-q11",
            "type": "multiple-choice",
            "question": "Which principle of management refers to the extent to which decision-making power is concentrated at the top level of the organization?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Decentralization", "isCorrect": false },
                { "id": "opt2", "text": "Centralization", "isCorrect": true },
                { "id": "opt3", "text": "Span of Control", "isCorrect": false },
                { "id": "opt4", "text": "Unity of Direction", "isCorrect": false }
            ],
            "explanation": "Centralization is the systematic retention of power and responsibility at higher levels of the organization."
        },
        {
            "id": "comp-q12",
            "type": "matching",
            "question": "Match the type of budget with its correct description.",
            "points": 3,
            "pairs": [
                { "id": "pair1", "left": "Operating Budget", "right": "Day-to-day revenues and expenses (salaries, supplies)" },
                { "id": "pair2", "left": "Capital Budget", "right": "Major equipment and physical renovations" },
                { "id": "pair3", "left": "Cash Budget", "right": "Pattern of cash receipts and disbursements" }
            ],
            "explanation": "Operating budgets cover annual recurrent costs like salaries. Capital budgets cover expensive, long-term items like CT Scans or renovations."
        },
        {
            "id": "comp-q13",
            "type": "multiple-choice",
            "question": "In conflict resolution, which mode is considered a 'win-win' situation where parties analyze the situation and plan together?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Competing", "isCorrect": false },
                { "id": "opt2", "text": "Avoiding", "isCorrect": false },
                { "id": "opt3", "text": "Collaborating", "isCorrect": true },
                { "id": "opt4", "text": "Accommodating", "isCorrect": false }
            ],
            "explanation": "Collaborating involves analyzing the situation and solving the conflict without avoidance or mere compromise, resulting in a win-win outcome."
        },
        {
            "id": "comp-q14",
            "type": "ordering",
            "question": "According to Kurt Lewin, what is the correct sequence of the change process?",
            "points": 1,
            "items": [
                { "id": "p1", "text": "Unfreezing", "correctPosition": 1 },
                { "id": "p2", "text": "Changing", "correctPosition": 2 },
                { "id": "p3", "text": "Refreezing", "correctPosition": 3 }
            ],
            "explanation": "Lewin's model involves Unfreezing (getting ready), Changing (implementation), and Refreezing (stabilizing the new norm)."
        },
        {
            "id": "comp-q15",
            "type": "multiple-choice",
            "question": "Which Nursing Care Delivery System is 'task-oriented', where specific tasks (e.g., medications, dressings) are assigned to different nurses?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Primary Nursing", "isCorrect": false },
                { "id": "opt2", "text": "Team Nursing", "isCorrect": false },
                { "id": "opt3", "text": "Functional Nursing", "isCorrect": true },
                { "id": "opt4", "text": "Case Method", "isCorrect": false }
            ],
            "explanation": "Functional Nursing emphasizes division of labor by task. It is economical but can lead to fragmentation of care."
        },
        {
            "id": "comp-q16",
            "type": "multiple-choice",
            "question": "What type of audit evaluates patient care while the patient is still hospitalized?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Retrospective Audit", "isCorrect": false },
                { "id": "opt2", "text": "Concurrent Audit", "isCorrect": true },
                { "id": "opt3", "text": "Terminal Audit", "isCorrect": false },
                { "id": "opt4", "text": "Closed Chart Audit", "isCorrect": false }
            ],
            "explanation": "Concurrent auditing (Open Chart Audit) evaluates care that is still in progress, allowing for immediate feedback and improvement."
        },
        {
            "id": "comp-q17",
            "type": "fill-blank",
            "question": "A __id1__ statement communicates the reason for an organization's existence, identifying its customers and types of services offered.",
            "points": 1,
            "blanks": [
                {
                    "id": "id1",
                    "acceptedAnswers": ["Mission", "mission"],
                    "caseSensitive": false
                }
            ],
            "explanation": "The Mission statement defines the 'why' of the organization. The Vision statement defines the desired future state."
        },
        {
            "id": "comp-q18",
            "type": "multiple-select",
            "question": "Select the correct characteristics of 'Theory Y' regarding employee motivation.",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Employees naturally dislike work.", "isCorrect": false },
                { "id": "opt2", "text": "Work is as natural as play or rest.", "isCorrect": true },
                { "id": "opt3", "text": "People seek responsibility under proper conditions.", "isCorrect": true },
                { "id": "opt4", "text": "Employees must be coerced and controlled to produce.", "isCorrect": false }
            ],
            "explanation": "Theory Y assumes employees view work as natural and will seek responsibility. Theory X assumes employees dislike work and must be coerced."
        },
        {
            "id": "comp-q19",
            "type": "multiple-choice",
            "question": "Which document specifies the human qualities, qualifications, and skills necessary to perform a job?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Job Description", "isCorrect": false },
                { "id": "opt2", "text": "Job Specification", "isCorrect": true },
                { "id": "opt3", "text": "Job Evaluation", "isCorrect": false },
                { "id": "opt4", "text": "Organizational Chart", "isCorrect": false }
            ],
            "explanation": "A Job Specification details the human qualities/requirements. A Job Description details the duties and responsibilities."
        },
        {
            "id": "comp-q20",
            "type": "matching",
            "question": "Match the Quality Assurance criteria type with its definition.",
            "points": 3,
            "pairs": [
                { "id": "pair1", "left": "Structure Criteria", "right": "Resources, physical facilities, and policies" },
                { "id": "pair2", "left": "Process Criteria", "right": "Activities and behaviors of the nurse (what is done)" },
                { "id": "pair3", "left": "Outcome Criteria", "right": "Change in patient health status or behavior" }
            ],
            "explanation": "Structure = environment/inputs; Process = actions/care given; Outcome = results on the patient."
        },
        {
            "id": "comp-q21",
            "type": "multiple-choice",
            "question": "In the context of delegation, if a nurse manager transfers the authority to perform a task, what happens to the responsibility?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "It is retained solely by the manager.", "isCorrect": false },
                { "id": "opt2", "text": "It is transferred to the delegate.", "isCorrect": true },
                { "id": "opt3", "text": "It disappears.", "isCorrect": false },
                { "id": "opt4", "text": "It is transferred to the patient.", "isCorrect": false }
            ],
            "explanation": "The definition of delegation involves transferring responsibility and authority. However, accountability remains with the delegator (shared)."
        },
        {
            "id": "comp-q22",
            "type": "true-false",
            "question": "A 'Zero-base' budget approach assumes that the budget for the next year is automatically increased based on the previous year's expenditures.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "This is False. Zero-base budgeting requires every activity to be justified from scratch (zero) each year, regardless of previous allocations."
        },
        {
            "id": "comp-q23",
            "type": "multiple-choice",
            "question": "What is the primary characteristic of a 'Charismatic Leader'?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Influence arises from official position only.", "isCorrect": false },
                { "id": "opt2", "text": "Influence comes from strength of personality and ability to inspire.", "isCorrect": true },
                { "id": "opt3", "text": "Position is assured by birth.", "isCorrect": false },
                { "id": "opt4", "text": "Influence relies on coercion and punishment.", "isCorrect": false }
            ],
            "explanation": "Charismatic leaders gain influence through exceptional personal qualities and the ability to transform followers into willing participants."
        },
        {
            "id": "comp-q24",
            "type": "short-answer",
            "question": "What common acronym is used in strategic planning to analyze Strengths, Weaknesses, Opportunities, and Threats?",
            "points": 1,
            "keywords": ["SWOT", "S.W.O.T"],
            "modelAnswer": "SWOT",
            "explanation": "SWOT stands for Strengths, Weaknesses, Opportunities, and Threats. It is a standard tool for strategic analysis."
        },
        {
            "id": "comp-q25",
            "type": "multiple-choice",
            "question": "Which of the following is an example of 'downward communication'?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "A staff nurse reporting a patient incident to the manager.", "isCorrect": false },
                { "id": "opt2", "text": "Two unit managers discussing staffing issues.", "isCorrect": false },
                { "id": "opt3", "text": "A memo from the Director of Nursing to all staff regarding a new policy.", "isCorrect": true },
                { "id": "opt4", "text": "Grapevine rumors about salary increases.", "isCorrect": false }
            ],
            "explanation": "Downward communication flows from top management to subordinates (e.g., directives, policies, memos)."
        },
        {
            "id": "comp-q26",
            "type": "true-false",
            "question": "Informal communication (the grapevine) should be completely eliminated by the manager as it serves no purpose.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "This is False. While rumors can be harmful, informal communication is inevitable. Managers should use positive informal communication to their benefit and counter misinformation with clear formal communication."
        },
        {
            "id": "comp-q27",
            "type": "ordering",
            "question": "Arrange the steps of the Disciplinary Process from first to last.",
            "points": 1,
            "items": [
                { "id": "d1", "text": "Preliminary investigation", "correctPosition": 1 },
                { "id": "d2", "text": "Informal/Cordial discussion", "correctPosition": 2 },
                { "id": "d3", "text": "Formal written warning", "correctPosition": 3 },
                { "id": "d4", "text": "Suspension", "correctPosition": 4 },
                { "id": "d5", "text": "Discharge/Dismissal", "correctPosition": 5 }
            ],
            "explanation": "Discipline progresses from investigation -> informal talk -> verbal warning -> written warning -> suspension -> discharge."
        },
        {
            "id": "comp-q28",
            "type": "multiple-choice",
            "question": "Which nursing care delivery system assigns one nurse to assume 24-hour responsibility for a patient's care throughout their hospital stay?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Team Nursing", "isCorrect": false },
                { "id": "opt2", "text": "Primary Nursing", "isCorrect": true },
                { "id": "opt3", "text": "Functional Nursing", "isCorrect": false },
                { "id": "opt4", "text": "Case Method", "isCorrect": false }
            ],
            "explanation": "Primary Nursing involves a primary nurse accepting 24-hour responsibility for planning and evaluating care, using associate nurses when off duty."
        },
        {
            "id": "comp-q29",
            "type": "multiple-choice",
            "question": "What is the primary focus of 'Time Management'?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Working faster to get more done.", "isCorrect": false },
                { "id": "opt2", "text": "Managing how time is used to achieve goals.", "isCorrect": true },
                { "id": "opt3", "text": "Eliminating all breaks.", "isCorrect": false },
                { "id": "opt4", "text": "Doing everything yourself to save time.", "isCorrect": false }
            ],
            "explanation": "Time management is not about creating more time or just working faster, but managing how time is utilized effectively to meet objectives."
        },
        {
            "id": "comp-q30",
            "type": "multiple-choice",
            "question": "In the context of resource management, what does 'Inventory Control' refer to?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Counting staff members.", "isCorrect": false },
                { "id": "opt2", "text": "Stocking adequate materials so they are available when needed.", "isCorrect": true },
                { "id": "opt3", "text": "Restricting use of supplies to save money.", "isCorrect": false },
                { "id": "opt4", "text": "The annual budget planning process.", "isCorrect": false }
            ],
            "explanation": "Inventory control involves managing stock levels to ensure availability without excessive waste or shortage."
        }
    ]
});