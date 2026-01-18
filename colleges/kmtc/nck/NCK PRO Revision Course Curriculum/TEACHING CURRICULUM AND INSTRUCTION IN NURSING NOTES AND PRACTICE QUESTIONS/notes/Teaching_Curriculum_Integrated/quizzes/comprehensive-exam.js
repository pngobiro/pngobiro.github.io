
registerQuiz("comprehensive-exam", {
    "schemaVersion": "1.0",
    "quizId": "comprehensive-exam",
    "metadata": {
        "title": "Comprehensive Final Exam",
        "description": "A comprehensive assessment covering all six units of the Teaching Methodology in Nursing course, including principles of education, teaching processes, methodologies, curriculum development, instructional media, and evaluation.",
        "topicId": "comprehensive",
        "difficulty": "advanced",
        "estimatedTime": 120,
        "passingScore": 70,
        "createdAt": "2026-01-18T20:00:00Z",
        "updatedAt": "2026-01-18T22:00:00Z",
        "tags": ["final", "exam", "nursing-education", "comprehensive"]
    },
    "settings": {
        "shuffleQuestions": true,
        "shuffleOptions": true,
        "showFeedback": "end",
        "allowRetry": false,
        "showCorrectAnswers": false,
        "timeLimit": 7200
    },
    "questions": [
        // --- SECTION 1: Historical Background & Principles (Topic 01) ---
        {
            "id": "comp-q1",
            "type": "multiple-choice",
            "question": "According to Bloom's taxonomy, which of the following represents the highest level of cognitive learning?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Knowledge", "isCorrect": false },
                { "id": "opt2", "text": "Application", "isCorrect": false },
                { "id": "opt3", "text": "Evaluation", "isCorrect": true },
                { "id": "opt4", "text": "Comprehension", "isCorrect": false }
            ],
            "explanation": "Evaluation is considered the highest level in the original Bloom's taxonomy, involving the ability to make judgments and decisions based on criteria."
        },
        {
            "id": "comp-q2",
            "type": "matching",
            "question": "Match the learning domain with its primary focus:",
            "points": 3,
            "pairs": [
                { "id": "pair1", "left": "Cognitive Domain", "right": "Knowledge and intellectual skills" },
                { "id": "pair2", "left": "Psychomotor Domain", "right": "Manual or physical skills" },
                { "id": "pair3", "left": "Affective Domain", "right": "Attitudes, feelings, and values" }
            ],
            "explanation": "Cognitive relates to mental skills (knowledge), psychomotor to manual skills (doing), and affective to growth in feelings or emotional areas (attitude)."
        },
        {
            "id": "comp-q3",
            "type": "multiple-select",
            "question": "Select the statements that correctly describe 'Andragogy' (Adult Learning).",
            "points": 2,
            "options": [
                { "id": "opt1", "text": "Learners are self-directed", "isCorrect": true },
                { "id": "opt2", "text": "The teacher directs the learning process completely", "isCorrect": false },
                { "id": "opt3", "text": "Learners bring a wealth of experience to the process", "isCorrect": true },
                { "id": "opt4", "text": "Learning is subject-centered rather than problem-centered", "isCorrect": false },
                { "id": "opt5", "text": "Learning is immediate and applicable to existing problems", "isCorrect": true }
            ],
            "explanation": "Andragogy emphasizes self-direction, using prior experience, and problem-centered learning applicable to real life."
        },
        {
            "id": "comp-q4",
            "type": "fill-blank",
            "question": "The three main schools of thought in learning theory are __b1__ theories, __b2__ theories, and Humanistic/Social Psychology.",
            "points": 2,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["cognitive"], "caseSensitive": false },
                { "id": "b2", "acceptedAnswers": ["behaviorist", "behaviourist"], "caseSensitive": false }
            ]
        },
        {
            "id": "comp-q26",
            "type": "multiple-choice",
            "question": "Which psychologist emphasized 'Discovery Learning', where the teacher provides problems for learners to solve on their own?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "B.F. Skinner", "isCorrect": false },
                { "id": "opt2", "text": "J. Bruner", "isCorrect": true },
                { "id": "opt3", "text": "Carl Rogers", "isCorrect": false },
                { "id": "opt4", "text": "Abraham Maslow", "isCorrect": false }
            ],
            "explanation": "Jerome Bruner recommended discovery learning, where learners solve problems independently using provided resources."
        },
        {
            "id": "comp-q27",
            "type": "true-false",
            "question": "According to Carl Rogers, significant learning is acquired through doing.",
            "points": 1,
            "correctAnswer": true,
            "explanation": "Rogers' learner-centred view emphasizes that significant learning is acquired through doing and is self-initiated."
        },
        {
            "id": "comp-q28",
            "type": "multiple-choice",
            "question": "Which commission was set up shortly after Kenya's independence (1964) to investigate ways of improving education?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "The Mackay Report", "isCorrect": false },
                { "id": "opt2", "text": "The Ominde Report", "isCorrect": true },
                { "id": "opt3", "text": "The Koech Report", "isCorrect": false },
                { "id": "opt4", "text": "The Angwenyi Report", "isCorrect": false }
            ],
            "explanation": "The Ominde Report (1964) was set up at independence to provide direction on improving education to fight ignorance, disease, and poverty."
        },
        
        // --- SECTION 2: Teaching & Learning Processes (Topic 02) ---
        {
            "id": "comp-q5",
            "type": "multiple-choice",
            "question": "Which of the following is NOT a component of a standard lesson plan?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Specific Objectives", "isCorrect": false },
                { "id": "opt2", "text": "Teaching Aids", "isCorrect": false },
                { "id": "opt3", "text": "Student Biography", "isCorrect": true },
                { "id": "opt4", "text": "Evaluation/Assessment", "isCorrect": false }
            ],
            "explanation": "A lesson plan includes objectives, content, methods, aids, and evaluation, but not student biographies."
        },
        {
            "id": "comp-q6",
            "type": "ordering",
            "question": "Arrange the steps of the 'Three Step PBL Tutorial Process' in the correct order:",
            "points": 3,
            "items": [
                { "id": "item1", "text": "Tutorial 1: Analyse problem and set learning objectives", "correctPosition": 1 },
                { "id": "item2", "text": "Self Directed Learning (SDL): Students study on their own", "correctPosition": 2 },
                { "id": "item3", "text": "Tutorial 2: Presentation of information and synthesis", "correctPosition": 3 }
            ],
            "explanation": "The process moves from initial problem analysis (Tut 1) to independent study (SDL) to synthesis and reporting (Tut 2)."
        },
        {
            "id": "comp-q7",
            "type": "short-answer",
            "question": "List the acronym 'FAGIPW' which describes the Super Skills of innovative education.",
            "points": 3,
            "keywords": ["Facilitate", "Advice", "Guide", "Inform", "Participate", "Withdraw"],
            "minKeywords": 4,
            "modelAnswer": "Facilitate, Advice, Guide, Inform, Participate, Withdraw",
            "explanation": "FAGIPW stands for Facilitate, Advice, Guide, Inform, Participate, and Withdraw."
        },
        {
            "id": "comp-q8",
            "type": "multiple-choice",
            "question": "In micro-teaching, 'Set Induction' refers to:",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Summarizing the lesson at the end", "isCorrect": false },
                { "id": "opt2", "text": "Introducing a topic to capture attention", "isCorrect": true },
                { "id": "opt3", "text": "Varying voice and gestures", "isCorrect": false },
                { "id": "opt4", "text": "Asking questions to students", "isCorrect": false }
            ],
            "explanation": "Set induction is the skill of appropriately introducing a topic or starting a lesson to capture the learner's attention."
        },
        {
            "id": "comp-q29",
            "type": "multiple-select",
            "question": "Which of the following are examples of Innovative Teaching Methods?",
            "points": 2,
            "options": [
                { "id": "opt1", "text": "Problem Based Learning (PBL)", "isCorrect": true },
                { "id": "opt2", "text": "Standard Lectures", "isCorrect": false },
                { "id": "opt3", "text": "Self Directed Learning (SDL)", "isCorrect": true },
                { "id": "opt4", "text": "Community Based Education and Service (COBES)", "isCorrect": true }
            ],
            "explanation": "PBL, SDL, and COBES are innovative methods where the burden of learning shifts to the learner. Lectures are traditional methods."
        },
        {
            "id": "comp-q30",
            "type": "fill-blank",
            "question": "The micro-teaching skill of __b1__ involves the technique of rewarding students (e.g., praise, nods) to promote good behavior.",
            "points": 1,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["reinforcement", "re-enforcement"], "caseSensitive": false }
            ]
        },
        {
            "id": "comp-q31",
            "type": "multiple-choice",
            "question": "In the 7-Step PBL process, what happens immediately after 'Analysing the problem'?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Formulate learning objectives", "isCorrect": false },
                { "id": "opt2", "text": "Collect additional information", "isCorrect": false },
                { "id": "opt3", "text": "Draw a systematic inventory of explanations", "isCorrect": true },
                { "id": "opt4", "text": "Define the problem", "isCorrect": false }
            ],
            "explanation": "Step 3 is Analyse the Problem. Step 4 is Drawing a systematic inventory of the explanations inferred."
        },

        // --- SECTION 3: Teaching Methodologies (Topic 03) ---
        {
            "id": "comp-q9",
            "type": "multiple-choice",
            "question": "Which teaching method is best suited for teaching psychomotor skills?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Lecture", "isCorrect": false },
                { "id": "opt2", "text": "Demonstration", "isCorrect": true },
                { "id": "opt3", "text": "Group Discussion", "isCorrect": false },
                { "id": "opt4", "text": "Seminar", "isCorrect": false }
            ],
            "explanation": "Demonstration allows students to observe the performance of a skill, making it the most effective method for psychomotor learning."
        },
        {
            "id": "comp-q10",
            "type": "true-false",
            "question": "Small group discussions are most effective when the group size exceeds 20 students.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "Small group discussions are most effective with smaller numbers (e.g., 6-12). As size increases, efficiency decreases."
        },
        {
            "id": "comp-q11",
            "type": "matching",
            "question": "Match the teaching method with its primary disadvantage:",
            "points": 3,
            "pairs": [
                { "id": "pair1", "left": "Lecture", "right": "Passive student involvement" },
                { "id": "pair2", "left": "Field Visit", "right": "Uneconomical use of time/resources" },
                { "id": "pair3", "left": "Project", "right": "May be too much workload for students" }
            ]
        },
        {
            "id": "comp-q12",
            "type": "multiple-choice",
            "question": "What is the primary advantage of 'Simulation' as a teaching method?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "It is the cheapest method available", "isCorrect": false },
                { "id": "opt2", "text": "It allows learners to make mistakes safely without harming patients", "isCorrect": true },
                { "id": "opt3", "text": "It requires no preparation time", "isCorrect": false },
                { "id": "opt4", "text": "It replaces the need for clinical practice entirely", "isCorrect": false }
            ],
            "explanation": "Simulation provides a safe environment where learners can confront problems and make mistakes without real-world consequences."
        },
        {
            "id": "comp-q32",
            "type": "multiple-choice",
            "question": "Which method involves learners performing tasks in their future working area?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Role Play", "isCorrect": false },
                { "id": "opt2", "text": "Practicals", "isCorrect": true },
                { "id": "opt3", "text": "Lecture", "isCorrect": false },
                { "id": "opt4", "text": "Seminar", "isCorrect": false }
            ],
            "explanation": "Practicals involve students performing tasks, often in the environment where they will eventually work."
        },
        {
            "id": "comp-q33",
            "type": "multiple-choice",
            "question": "A discussion session between a teacher and a small number of students (usually not more than eight) is called a:",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Seminar", "isCorrect": false },
                { "id": "opt2", "text": "Tutorial", "isCorrect": true },
                { "id": "opt3", "text": "Symposium", "isCorrect": false },
                { "id": "opt4", "text": "Lecture", "isCorrect": false }
            ],
            "explanation": "A tutorial is a discussion between a teacher and a small number of students (ideally 1:1 to 1:8)."
        },
        {
            "id": "comp-q34",
            "type": "multiple-select",
            "question": "Which of the following are effective ways to teach attitudes? (Select all that apply)",
            "points": 2,
            "options": [
                { "id": "opt1", "text": "Role Plays", "isCorrect": true },
                { "id": "opt2", "text": "Providing models/examples", "isCorrect": true },
                { "id": "opt3", "text": "Providing experience", "isCorrect": true },
                { "id": "opt4", "text": "Rote memorization", "isCorrect": false }
            ],
            "explanation": "Attitudes are best taught through role plays, modeling, experiences, and discussion, not rote memorization."
        },
        {
            "id": "comp-q35",
            "type": "true-false",
            "question": "Clinical teaching involves nurturing students to get involved with the patient while learning to empathize.",
            "points": 1,
            "correctAnswer": true,
            "explanation": "Clinical teaching requires involvement and empathy, allowing the student to care without being overwhelmed."
        },

        // --- SECTION 4: Curriculum Design (Topic 04) ---
        {
            "id": "comp-q13",
            "type": "fill-blank",
            "question": "A __b1__ is a description of all that takes place in an educational institution from the first to the last day of training.",
            "points": 1,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["curriculum"], "caseSensitive": false }
            ]
        },
        {
            "id": "comp-q14",
            "type": "multiple-choice",
            "question": "Which curriculum approach focuses on identifying professional roles and functions to determine instruction?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Subject-centred Approach", "isCorrect": false },
                { "id": "opt2", "text": "Integrated Approach", "isCorrect": false },
                { "id": "opt3", "text": "Competency-based Approach", "isCorrect": true },
                { "id": "opt4", "text": "Teacher-centred Approach", "isCorrect": false }
            ],
            "explanation": "The Competency-based (or Task-based) approach organizes curriculum around the functions and tasks a health worker must perform."
        },
        {
            "id": "comp-q15",
            "type": "ordering",
            "question": "Order the first 5 steps of Competency-Based Curriculum Development:",
            "points": 3,
            "items": [
                { "id": "step1", "text": "Identification of health problems/needs", "correctPosition": 1 },
                { "id": "step2", "text": "Identification of professional roles and functions", "correctPosition": 2 },
                { "id": "step3", "text": "Performing task analysis", "correctPosition": 3 },
                { "id": "step4", "text": "Development of educational goals and objectives", "correctPosition": 4 },
                { "id": "step5", "text": "Identification and selection of subject matter", "correctPosition": 5 }
            ]
        },
        {
            "id": "comp-q16",
            "type": "multiple-select",
            "question": "Which of the following are factors influencing curriculum development?",
            "points": 2,
            "options": [
                { "id": "fact1", "text": "Social factors (e.g., HIV/AIDS)", "isCorrect": true },
                { "id": "fact2", "text": "Economic factors (e.g., cost of implementation)", "isCorrect": true },
                { "id": "fact3", "text": "Political factors (e.g., quota systems)", "isCorrect": true },
                { "id": "fact4", "text": "The personal preference of the student", "isCorrect": false }
            ],
            "explanation": "Curriculum development is influenced by Academic, Social, Economic, and Political factors."
        },
        {
            "id": "comp-q36",
            "type": "multiple-select",
            "question": "Which of the following are considered 'Internal Participants' in curriculum development?",
            "points": 2,
            "options": [
                { "id": "opt1", "text": "Teachers", "isCorrect": true },
                { "id": "opt2", "text": "Students", "isCorrect": true },
                { "id": "opt3", "text": "Administrators", "isCorrect": true },
                { "id": "opt4", "text": "The Community", "isCorrect": false },
                { "id": "opt5", "text": "NGOs", "isCorrect": false }
            ],
            "explanation": "Internal participants are directly involved (teachers, students, administrators). Community and NGOs are external participants."
        },
        {
            "id": "comp-q37",
            "type": "fill-blank",
            "question": "__b1__ is the process of breaking down a task into sub-tasks which are necessary to achieve that task.",
            "points": 1,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["task analysis"], "caseSensitive": false }
            ]
        },
        {
            "id": "comp-q38",
            "type": "true-false",
            "question": "The Subject-centred approach to curriculum development prioritizes the application of knowledge over the acquisition of disciplined knowledge.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "The Subject-centred approach emphasizes the acquisition of disciplined knowledge rather than its application. Competency-based approaches emphasize application."
        },
        {
            "id": "comp-q39",
            "type": "short-answer",
            "question": "Educational objectives should be 'SMART'. What does the 'M' stand for?",
            "points": 1,
            "keywords": ["measurable"],
            "minKeywords": 1,
            "modelAnswer": "Measurable",
            "explanation": "SMART stands for Specific, Measurable, Achievable, Realistic, and Time-bound."
        },

        // --- SECTION 5: Instructional Media (Topic 05) ---
        {
            "id": "comp-q17",
            "type": "multiple-choice",
            "question": "Which of the following is considered a 'Non-Projected' teaching aid?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Overhead Projector (OHP)", "isCorrect": false },
                { "id": "opt2", "text": "Slides", "isCorrect": false },
                { "id": "opt3", "text": "Flannel Board", "isCorrect": true },
                { "id": "opt4", "text": "LCD Projector", "isCorrect": false }
            ],
            "explanation": "Flannel boards, chalkboards, charts, and real objects are non-projected aids."
        },
        {
            "id": "comp-q18",
            "type": "multiple-choice",
            "question": "When preparing a transparency for an Overhead Projector, you should:",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Write up to the very edge of the acetate", "isCorrect": false },
                { "id": "opt2", "text": "Use very small lettering to fit more information", "isCorrect": false },
                { "id": "opt3", "text": "Put as much information as possible on one sheet", "isCorrect": false },
                { "id": "opt4", "text": "Leave a margin and convey one theme per transparency", "isCorrect": true }
            ],
            "explanation": "Transparencies should be clear, simple (one theme), and have margins to ensure visibility."
        },
        {
            "id": "comp-q19",
            "type": "true-false",
            "question": "The 'Real Thing' (Real Object) is generally considered the best teaching aid.",
            "points": 1,
            "correctAnswer": true,
            "explanation": "Using the real object (e.g., a real baby for bathing demonstration) is superior to models because it provides the most accurate experience."
        },
        {
            "id": "comp-q20",
            "type": "multiple-choice",
            "question": "Which teaching aid is particularly recommended for teaching villagers or in rural education?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "LCD Projector", "isCorrect": false },
                { "id": "opt2", "text": "Flannel Board", "isCorrect": true },
                { "id": "opt3", "text": "Handouts", "isCorrect": false },
                { "id": "opt4", "text": "PowerPoint", "isCorrect": false }
            ],
            "explanation": "The Flannel Board is the device of choice for teaching villagers as it tells a visual story and is low-cost."
        },
        {
            "id": "comp-q40",
            "type": "multiple-select",
            "question": "Which of the following are guidelines for using a Flipchart effectively?",
            "points": 2,
            "options": [
                { "id": "opt1", "text": "Read the chart word-for-word to the audience", "isCorrect": false },
                { "id": "opt2", "text": "Use thick felt pens", "isCorrect": true },
                { "id": "opt3", "text": "Write notes on the back to guide your discussion", "isCorrect": true },
                { "id": "opt4", "text": "Use all capital letters for the text", "isCorrect": false }
            ],
            "explanation": "You should use thick pens and write notes on the back. Do not read the chart to the audience, and use lower case letters (they are easier to read)."
        },
        {
            "id": "comp-q41",
            "type": "multiple-choice",
            "question": "What is the primary disadvantage of using a Field Visit as a teaching method?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "It provides actual experience", "isCorrect": false },
                { "id": "opt2", "text": "It is not an economical use of manpower and resources", "isCorrect": true },
                { "id": "opt3", "text": "It inhibits student creativity", "isCorrect": false },
                { "id": "opt4", "text": "It prevents interpersonal relationships", "isCorrect": false }
            ],
            "explanation": "Field visits are effective but uneconomical in terms of time, administration, and resources."
        },
        {
            "id": "comp-q42",
            "type": "true-false",
            "question": "When using a chalkboard, you should deliver the lecture to the board while writing.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "You should deliver the lecture to the audience, not the board. Write first, then turn to address the class."
        },
        {
            "id": "comp-q43",
            "type": "matching",
            "question": "Match the teaching aid to its storage method:",
            "points": 2,
            "pairs": [
                { "id": "p1", "left": "Maps and Charts", "right": "Rolled up, title visible" },
                { "id": "p2", "left": "Slides", "right": "Hanging files" },
                { "id": "p3", "left": "Models/Specimens", "right": "Permanent exhibit/Library" }
            ]
        },

        // --- SECTION 6: Evaluation (Topic 06) ---
        {
            "id": "comp-q21",
            "type": "matching",
            "question": "Match the type of evaluation to its description:",
            "points": 2,
            "pairs": [
                { "id": "ev1", "left": "Formative Evaluation", "right": "Continuous, diagnostic, during learning" },
                { "id": "ev2", "left": "Summative Evaluation", "right": "Terminal, for grading/certification" }
            ]
        },
        {
            "id": "comp-q22",
            "type": "multiple-choice",
            "question": "Which assessment tool is best suited for testing clinical skills and competence in a structured manner?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Multiple Choice Questions (MCQ)", "isCorrect": false },
                { "id": "opt2", "text": "Essay", "isCorrect": false },
                { "id": "opt3", "text": "OSCE (Objective Structured Clinical Examination)", "isCorrect": true },
                { "id": "opt4", "text": "Oral Examination", "isCorrect": false }
            ],
            "explanation": "OSCE is designed to test clinical skill performance and competence through a circuit of stations."
        },
        {
            "id": "comp-q23",
            "type": "multiple-choice",
            "question": "What does 'Validity' mean in the context of an assessment tool?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "It measures consistently every time", "isCorrect": false },
                { "id": "opt2", "text": "It measures what it is supposed to measure", "isCorrect": true },
                { "id": "opt3", "text": "It is free of individual bias", "isCorrect": false },
                { "id": "opt4", "text": "It reveals a range of scores", "isCorrect": false }
            ],
            "explanation": "Validity refers to whether a test accurately measures what it claims to measure. Reliability refers to consistency."
        },
        {
            "id": "comp-q24",
            "type": "short-answer",
            "question": "List two methods used for scoring essays.",
            "points": 2,
            "keywords": ["analytical", "impression"],
            "minKeywords": 2,
            "modelAnswer": "Analytical scoring and Impression scoring",
            "explanation": "Essays can be marked using Analytical Scoring (checking for specific points) or Impression Scoring (reading for overall adequacy)."
        },
        {
            "id": "comp-q25",
            "type": "multiple-choice",
            "question": "In a Multiple Choice Question (MCQ), the incorrect answers are called:",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Stems", "isCorrect": false },
                { "id": "opt2", "text": "Keys", "isCorrect": false },
                { "id": "opt3", "text": "Distracters", "isCorrect": true },
                { "id": "opt4", "text": "Responses", "isCorrect": false }
            ],
            "explanation": "An MCQ consists of a stem (question), the key (correct answer), and distracters (incorrect answers)."
        },
        {
            "id": "comp-q44",
            "type": "multiple-select",
            "question": "What are the purposes of evaluating a learner? (Select all that apply)",
            "points": 2,
            "options": [
                { "id": "opt1", "text": "To motivate the learner", "isCorrect": true },
                { "id": "opt2", "text": "To license the practice of a profession", "isCorrect": true },
                { "id": "opt3", "text": "To protect society from incompetent graduates", "isCorrect": true },
                { "id": "opt4", "text": "To discourage students from asking questions", "isCorrect": false }
            ],
            "explanation": "Evaluation motivates, licenses, protects society, judges achievement, and determines teaching effectiveness."
        },
        {
            "id": "comp-q45",
            "type": "ordering",
            "question": "Order the levels of the Affective Domain (Bloom's Taxonomy) from lowest to highest:",
            "points": 3,
            "items": [
                { "id": "l1", "text": "Receiving", "correctPosition": 1 },
                { "id": "l2", "text": "Responding", "correctPosition": 2 },
                { "id": "l3", "text": "Valuing", "correctPosition": 3 },
                { "id": "l4", "text": "Organization", "correctPosition": 4 },
                { "id": "l5", "text": "Characterization", "correctPosition": 5 }
            ],
            "explanation": "The order is Receiving, Responding, Valuing, Organization, and Characterization."
        },
        {
            "id": "comp-q46",
            "type": "true-false",
            "question": "Failure in practical tests is equivalent to failure in the whole examination.",
            "points": 1,
            "correctAnswer": true,
            "explanation": "Practical skills are critical in health professions. Excellence in theory cannot compensate for failure in practical skills."
        },
        {
            "id": "comp-q47",
            "type": "multiple-choice",
            "question": "Which tool uses a scale of opposite characteristics (e.g., Polite vs. Rude) to assess attitudes?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Checklist", "isCorrect": false },
                { "id": "opt2", "text": "Semantic Differential Scale", "isCorrect": true },
                { "id": "opt3", "text": "MCQ", "isCorrect": false },
                { "id": "opt4", "text": "Essay", "isCorrect": false }
            ],
            "explanation": "A Semantic Differential scale measures attitudes using opposite adjectives at ends of a scale."
        },
        {
            "id": "comp-q48",
            "type": "fill-blank",
            "question": "An __b1__ test is a characteristic of a good evaluation tool that means it is free of individual bias, especially in marking.",
            "points": 1,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["objective"], "caseSensitive": false }
            ]
        },
        {
            "id": "comp-q49",
            "type": "multiple-choice",
            "question": "Which of the following is an advantage of Analytical Scoring for essays?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "It relies purely on the teacher's general feeling", "isCorrect": false },
                { "id": "opt2", "text": "It awards marks for specific crucial points listed in advance", "isCorrect": true },
                { "id": "opt3", "text": "It is faster than impression scoring", "isCorrect": false },
                { "id": "opt4", "text": "It does not require a marking scheme", "isCorrect": false }
            ],
            "explanation": "Analytical scoring looks for specific points in the answer, making it more objective."
        },
        {
            "id": "comp-q50",
            "type": "matching",
            "question": "Match the assessment type with its key characteristic:",
            "points": 2,
            "pairs": [
                { "id": "p1", "left": "Placement Testing", "right": "Gauge entry skills before instruction" },
                { "id": "p2", "left": "OSPE", "right": "Assessment of practical skills" },
                { "id": "p3", "left": "Viva Voce", "right": "Oral questioning" }
            ]
        }
    ]
});