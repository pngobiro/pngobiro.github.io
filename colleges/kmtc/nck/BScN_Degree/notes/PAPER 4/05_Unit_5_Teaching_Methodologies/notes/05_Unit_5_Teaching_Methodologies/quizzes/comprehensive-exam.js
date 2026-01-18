registerQuiz("comprehensive-exam", {
    "schemaVersion": "1.0",
    "quizId": "comprehensive-exam",
    "metadata": {
        "title": "Comprehensive Final Exam",
        "description": "A comprehensive assessment covering all six sections of Unit 5: Teaching and Learning Methodologies. This exam tests your knowledge on educational history, learning principles, teaching processes, methodologies, curriculum development, instructional media, and student evaluation.",
        "topicId": "comprehensive",
        "difficulty": "advanced",
        "estimatedTime": 60,
        "passingScore": 70,
        "createdAt": "2026-01-17T00:00:00Z",
        "updatedAt": "2026-01-17T00:00:00Z",
        "tags": ["exam", "final", "comprehensive", "pedagogy", "nursing-education"]
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
        /* --- TOPIC 1: Historical Background & Principles --- */
        {
            "id": "comp-q1",
            "type": "multiple-choice",
            "question": "Which commission was set up shortly after independence in Kenya (1964) to investigate ways of improving education to fight ignorance, disease, and poverty?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "The Ominde Commission", "isCorrect": true },
                { "id": "opt2", "text": "The Mackay Commission", "isCorrect": false },
                { "id": "opt3", "text": "The Koech Commission", "isCorrect": false },
                { "id": "opt4", "text": "The Gachathi Commission", "isCorrect": false }
            ],
            "explanation": "The Ominde Report (1964) was set up at independence to investigate ways of improving education to fight ignorance, disease, and poverty."
        },
        {
            "id": "comp-q2",
            "type": "fill-blank",
            "question": "The art of helping adults to learn is called __b1__, while the art of helping children to learn is referred to as __b2__.",
            "points": 2,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["andragogy"], "caseSensitive": false },
                { "id": "b2", "acceptedAnswers": ["pedagogy"], "caseSensitive": false }
            ],
            "explanation": "Andragogy is the art/science of helping adults learn, whereas pedagogy refers to helping children learn."
        },
        {
            "id": "comp-q3",
            "type": "matching",
            "question": "Match the learning theorist with their primary contribution or theory.",
            "points": 4,
            "pairs": [
                { "id": "p1", "left": "B.F. Skinner", "right": "Operant Conditioning & Reinforcement" },
                { "id": "p2", "left": "Carl Rogers", "right": "Learner-Centred / Humanistic Approach" },
                { "id": "p3", "left": "B.S. Bloom", "right": "Domains of Learning (Cognitive, Affective, Psychomotor)" },
                { "id": "p4", "left": "D.P. Ausubel", "right": "Learning from Known to Unknown" }
            ],
            "explanation": "Skinner focused on behaviourism and reinforcement; Rogers on human potential and student-centred learning; Bloom on classifying learning objectives; and Ausubel on linking new knowledge to existing cognitive structures."
        },
        {
            "id": "comp-q4",
            "type": "multiple-select",
            "question": "Which of the following are principles and conditions for effective adult learning? (Select all that apply)",
            "points": 2,
            "options": [
                { "id": "opt1", "text": "Active learning", "isCorrect": true },
                { "id": "opt2", "text": "Learning at an individual pace", "isCorrect": true },
                { "id": "opt3", "text": "Learning purely for qualification purposes", "isCorrect": false },
                { "id": "opt4", "text": "Immediate application of knowledge", "isCorrect": true },
                { "id": "opt5", "text": "Passive reception of information", "isCorrect": false }
            ],
            "explanation": "Adult learning principles include active participation, individual pacing, and learning for understanding/application rather than just rote memorization."
        },
        {
            "id": "comp-q5",
            "type": "multiple-choice",
            "question": "According to Jerome Bruner, which learning approach involves the teacher providing problems and resources for learners to solve on their own?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Discovery learning", "isCorrect": true },
                { "id": "opt2", "text": "Programmed learning", "isCorrect": false },
                { "id": "opt3", "text": "Rote learning", "isCorrect": false },
                { "id": "opt4", "text": "Didactic teaching", "isCorrect": false }
            ],
            "explanation": "Bruner recommended discovery learning, where learners use provided resources to solve problems independently."
        },
        {
            "id": "comp-q6",
            "type": "true-false",
            "question": "In the cognitive theory of learning, 'learning' is viewed primarily as a change in observable behaviour caused by external stimuli.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "This describes Behaviourist theory. Cognitive theories focus on how knowledge is acquired, stored, correlated, and retrieved as a mental process."
        },
        {
            "id": "comp-q7",
            "type": "multiple-choice",
            "question": "Which domain of learning is concerned with attitudes, values, and feelings?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Affective domain", "isCorrect": true },
                { "id": "opt2", "text": "Cognitive domain", "isCorrect": false },
                { "id": "opt3", "text": "Psychomotor domain", "isCorrect": false },
                { "id": "opt4", "text": "Behavioural domain", "isCorrect": false }
            ],
            "explanation": "The Affective domain deals with attitudes and feelings. Cognitive deals with knowledge, and Psychomotor with manual/physical skills."
        },

        /* --- TOPIC 2: Teaching & Learning Processes --- */
        {
            "id": "comp-q8",
            "type": "multiple-choice",
            "question": "What is a 'Lesson Plan'?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "A written description to guide the systematic presentation of subject matter", "isCorrect": true },
                { "id": "opt2", "text": "A list of students attending the class", "isCorrect": false },
                { "id": "opt3", "text": "A summary of the entire curriculum", "isCorrect": false },
                { "id": "opt4", "text": "A report on student performance", "isCorrect": false }
            ],
            "explanation": "A lesson plan is a written description used to guide the teacher to systematically present subject matter in a logical way."
        },
        {
            "id": "comp-q9",
            "type": "multiple-select",
            "question": "Which of the following are recognized 'Micro Teaching Skills'? (Select all that apply)",
            "points": 2,
            "options": [
                { "id": "opt1", "text": "Set Induction", "isCorrect": true },
                { "id": "opt2", "text": "Stimulus Variation", "isCorrect": true },
                { "id": "opt3", "text": "Mass Lecturing", "isCorrect": false },
                { "id": "opt4", "text": "Reinforcement", "isCorrect": true },
                { "id": "opt5", "text": "Closure", "isCorrect": true }
            ],
            "explanation": "The six micro teaching skills are: Set induction, Stimulus variation, Reinforcement, Questioning, Use of examples/explanations, and Closure."
        },
        {
            "id": "comp-q10",
            "type": "ordering",
            "question": "Arrange the steps of the 'Three Step PBL Tutorial (ABC) Process' in the correct order.",
            "points": 3,
            "items": [
                { "id": "item1", "text": "Tutorial 1: Define terms, analyse problem, set objectives", "correctPosition": 1 },
                { "id": "item2", "text": "Self Directed Learning (SDL): Students study on their own", "correctPosition": 2 },
                { "id": "item3", "text": "Tutorial 2: Presentation of information, solution, synthesis", "correctPosition": 3 }
            ],
            "explanation": "The process begins with the first tutorial to analyze the problem, followed by independent study (SDL), and concludes with a second tutorial to synthesize findings."
        },
        {
            "id": "comp-q11",
            "type": "fill-blank",
            "question": "The innovative teaching skill acronym 'FAGIPW' stands for Facilitating, Assessing, Group dynamic maintenance, __b1__, Planning, and __b2__.",
            "points": 2,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["informing"], "caseSensitive": false },
                { "id": "b2", "acceptedAnswers": ["working as a role model", "working as role model", "role model"], "caseSensitive": false }
            ],
            "explanation": "FAGIPW stands for: Facilitating, Assessing, Group dynamic maintenance, Informing, Planning, and Working as a role model."
        },
        {
            "id": "comp-q12",
            "type": "multiple-choice",
            "question": "In Problem Based Learning (PBL), what is the primary role of the teacher?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Facilitator / Guide", "isCorrect": true },
                { "id": "opt2", "text": "Sole source of information", "isCorrect": false },
                { "id": "opt3", "text": "Disciplinarian", "isCorrect": false },
                { "id": "opt4", "text": "Passive observer", "isCorrect": false }
            ],
            "explanation": "In innovative processes like PBL, the teacher is transformed into a facilitator who guides the learning process rather than delivering all content."
        },
        {
            "id": "comp-q13",
            "type": "true-false",
            "question": "Micro teaching is best conducted with a large audience of over 100 students to maximize feedback.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "Micro teaching is done with a small group of students (peers) in a simulated situation, not a large audience."
        },
        {
            "id": "comp-q14",
            "type": "multiple-choice",
            "question": "What is 'Stimulus Variation' in the context of teaching skills?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "The skill of varying focus, movements, speech, and content delivery to retain attention", "isCorrect": true },
                { "id": "opt2", "text": "The use of electrical stimuli in physiology labs", "isCorrect": false },
                { "id": "opt3", "text": "Changing the classroom venue frequently", "isCorrect": false },
                { "id": "opt4", "text": "Using different textbooks for every lesson", "isCorrect": false }
            ],
            "explanation": "Stimulus variation involves the teacher changing their behaviour (movement, voice, gestures) to keep students attentive."
        },

        /* --- TOPIC 3: Teaching Methodologies --- */
        {
            "id": "comp-q15",
            "type": "multiple-choice",
            "question": "Which teaching method is described as 'economical in time' and 'appropriate for large groups' but may lead to 'poor student involvement'?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Lecture Method", "isCorrect": true },
                { "id": "opt2", "text": "Small Group Discussion", "isCorrect": false },
                { "id": "opt3", "text": "Project Method", "isCorrect": false },
                { "id": "opt4", "text": "Simulation", "isCorrect": false }
            ],
            "explanation": "The Lecture method is efficient for large groups but often results in passive learning and poor involvement."
        },
        {
            "id": "comp-q16",
            "type": "multiple-choice",
            "question": "Which of the following is a disadvantage of the 'Field Visit' method?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "It is not an economical way of using manpower and resources", "isCorrect": true },
                { "id": "opt2", "text": "It does not provide actual experience", "isCorrect": false },
                { "id": "opt3", "text": "It prevents interpersonal relationships", "isCorrect": false },
                { "id": "opt4", "text": "Information comes from a single source", "isCorrect": false }
            ],
            "explanation": "Field visits are resource-intensive, requiring transport, time, and administrative arrangements, making them uneconomical compared to classroom methods."
        },
        {
            "id": "comp-q17",
            "type": "matching",
            "question": "Match the teaching method with its key characteristic.",
            "points": 4,
            "pairs": [
                { "id": "p1", "left": "Demonstration", "right": "Visual observation of a skill, teacher performs while students watch" },
                { "id": "p2", "left": "Tutorial", "right": "Discussion session between teacher and small number of students (max 8)" },
                { "id": "p3", "left": "Project", "right": "Independent piece of work resulting in a written report" },
                { "id": "p4", "left": "Small Group Discussion", "right": "Encourages analysis/synthesis, shared resources within the group" }
            ],
            "explanation": "Demonstrations show 'how to'; Tutorials are intimate discussions; Projects are independent assignments; Group discussions foster peer interaction and higher-order thinking."
        },
        {
            "id": "comp-q18",
            "type": "multiple-choice",
            "question": "What is the primary purpose of 'Simulation' in health education?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "To develop skills in dealing with 'real life' situations in a classroom setting", "isCorrect": true },
                { "id": "opt2", "text": "To replace all clinical practice with patients", "isCorrect": false },
                { "id": "opt3", "text": "To save money on equipment", "isCorrect": false },
                { "id": "opt4", "text": "To entertain students during breaks", "isCorrect": false }
            ],
            "explanation": "Simulation (e.g., using models, phantoms) allows students to practice skills safely without risk to real patients."
        },
        {
            "id": "comp-q19",
            "type": "fill-blank",
            "question": "The acronym __b1__ stands for Student-centred, Problem-based, Integrated, Community-oriented, Electives and Systematic.",
            "points": 1,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["spices", "SPICES"], "caseSensitive": false }
            ],
            "explanation": "SPICES is the model used to describe innovative curriculum characteristics."
        },
        {
            "id": "comp-q20",
            "type": "multiple-select",
            "question": "Which of the following are methods used for teaching SKILLS? (Select all that apply)",
            "points": 2,
            "options": [
                { "id": "opt1", "text": "Demonstration", "isCorrect": true },
                { "id": "opt2", "text": "Describing the skill", "isCorrect": true },
                { "id": "opt3", "text": "Performing with explanation", "isCorrect": true },
                { "id": "opt4", "text": "Silent reading", "isCorrect": false }
            ],
            "explanation": "Teaching skills involves description, explanation, demonstration, and performance with explanation. Silent reading is for knowledge acquisition."
        },
        {
            "id": "comp-q21",
            "type": "multiple-choice",
            "question": "What is 'Clinical Teaching'?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Teaching in a practical setting similar to the future working environment", "isCorrect": true },
                { "id": "opt2", "text": "Teaching anatomy in a classroom", "isCorrect": false },
                { "id": "opt3", "text": "Teaching using only textbooks", "isCorrect": false },
                { "id": "opt4", "text": "Teaching via correspondence", "isCorrect": false }
            ],
            "explanation": "Clinical teaching occurs in the actual care setting (wards, clinics) where students learn to apply theory to patient care."
        },
        {
            "id": "comp-q22",
            "type": "true-false",
            "question": "Attitudes can be taught by providing information, models, experiences, and role-plays.",
            "points": 1,
            "correctAnswer": true,
            "explanation": "Although abstract, attitudes are shaped by information (facts), modelling (teacher's behavior), experience (exposure), and role-plays (empathy)."
        },

        /* --- TOPIC 4: Curriculum Development --- */
        {
            "id": "comp-q23",
            "type": "multiple-choice",
            "question": "Which of the following best defines a 'Curriculum'?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "A description of all activities and events in a training programme from start to finish", "isCorrect": true },
                { "id": "opt2", "text": "A list of textbooks required", "isCorrect": false },
                { "id": "opt3", "text": "A timetable for the semester", "isCorrect": false },
                { "id": "opt4", "text": "A set of examination questions", "isCorrect": false }
            ],
            "explanation": "A curriculum is the comprehensive programme of study, often likened to a 'racecourse', entailing all activities from day one to completion."
        },
        {
            "id": "comp-q24",
            "type": "multiple-select",
            "question": "Which of the following are components of a curriculum? (Select all that apply)",
            "points": 2,
            "options": [
                { "id": "opt1", "text": "Statement of Justification", "isCorrect": true },
                { "id": "opt2", "text": "Educational Goals and Objectives", "isCorrect": true },
                { "id": "opt3", "text": "Content", "isCorrect": true },
                { "id": "opt4", "text": "Assessment methods", "isCorrect": true },
                { "id": "opt5", "text": "List of all students", "isCorrect": false }
            ],
            "explanation": "A curriculum includes justification, objectives, content, learning experiences, resources, assessment, etc. Student lists are administrative records, not curriculum components."
        },
        {
            "id": "comp-q25",
            "type": "multiple-choice",
            "question": "Which factor influencing curriculum development refers to the relevance of teaching to the needs of the local people and culture?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Social Factors", "isCorrect": true },
                { "id": "opt2", "text": "Academic Factors", "isCorrect": false },
                { "id": "opt3", "text": "Economic Factors", "isCorrect": false },
                { "id": "opt4", "text": "Political Factors", "isCorrect": false }
            ],
            "explanation": "Social factors ensure content reflects contemporary society, culture, and specific needs (e.g., HIV/AIDS education)."
        },
        {
            "id": "comp-q26",
            "type": "ordering",
            "question": "Order the first 5 steps of the 'Ten Steps to Competency-Based Curriculum Development'.",
            "points": 3,
            "items": [
                { "id": "s1", "text": "Identification of health problems or needs", "correctPosition": 1 },
                { "id": "s2", "text": "Identification of professional roles and functions", "correctPosition": 2 },
                { "id": "s3", "text": "Performing task analysis", "correctPosition": 3 },
                { "id": "s4", "text": "Development of educational goals and objectives", "correctPosition": 4 },
                { "id": "s5", "text": "Identification and selection of subject matter/content", "correctPosition": 5 }
            ],
            "explanation": "The process starts with needs assessment, then defines roles, analyzes tasks, sets objectives, and finally selects content."
        },
        {
            "id": "comp-q27",
            "type": "multiple-choice",
            "question": "Which approach to curriculum development aims at identifying professional competencies and the teaching required to achieve them?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Competency-based Approach", "isCorrect": true },
                { "id": "opt2", "text": "Subject-centred Approach", "isCorrect": false },
                { "id": "opt3", "text": "Integrated Approach", "isCorrect": false },
                { "id": "opt4", "text": "Teacher-centred Approach", "isCorrect": false }
            ],
            "explanation": "The Competency-based approach focuses on the specific skills and behaviors (competencies) a professional needs to perform their job."
        },
        {
            "id": "comp-q28",
            "type": "multiple-select",
            "question": "Who are considered 'Internal Participants' in curriculum development? (Select all that apply)",
            "points": 2,
            "options": [
                { "id": "opt1", "text": "Teachers", "isCorrect": true },
                { "id": "opt2", "text": "Students", "isCorrect": true },
                { "id": "opt3", "text": "Administrators of training institutions", "isCorrect": true },
                { "id": "opt4", "text": "The general community", "isCorrect": false },
                { "id": "opt5", "text": "Non-governmental organizations (NGOs)", "isCorrect": false }
            ],
            "explanation": "Internal participants are those directly involved in the institution: teachers, students, and administrators. Community and NGOs are external participants."
        },
        {
            "id": "comp-q29",
            "type": "fill-blank",
            "question": "The process of determining what knowledge, attitude, and skills graduates need to acquire to perform specific job activities is known as __b1__.",
            "points": 1,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["task analysis"], "caseSensitive": false }
            ],
            "explanation": "Task analysis is the breakdown of professional roles into specific activities to determine required learning content."
        },

        /* --- TOPIC 5: Instructional Media --- */
        {
            "id": "comp-q30",
            "type": "multiple-select",
            "question": "Which of the following are examples of 'Non-Projected Aids'? (Select all that apply)",
            "points": 2,
            "options": [
                { "id": "opt1", "text": "Chalkboard", "isCorrect": true },
                { "id": "opt2", "text": "Flipchart", "isCorrect": true },
                { "id": "opt3", "text": "Real Objects (Realia)", "isCorrect": true },
                { "id": "opt4", "text": "Overhead Projector (OHP)", "isCorrect": false },
                { "id": "opt5", "text": "Slides", "isCorrect": false }
            ],
            "explanation": "Chalkboards, flipcharts, posters, and real objects are non-projected. OHP, slides, and videos are projected aids."
        },
        {
            "id": "comp-q31",
            "type": "multiple-choice",
            "question": "What is the 'best' teaching aid?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "The Real Thing / Object", "isCorrect": true },
                { "id": "opt2", "text": "A colored photograph", "isCorrect": false },
                { "id": "opt3", "text": "A diagram on the chalkboard", "isCorrect": false },
                { "id": "opt4", "text": "A detailed handout", "isCorrect": false }
            ],
            "explanation": "The 'real thing' (e.g., a real baby for washing demonstration) is superior because it provides the most accurate and interactive experience."
        },
        {
            "id": "comp-q32",
            "type": "true-false",
            "question": "When using an Overhead Projector (OHP), you should write your lecture notes on the frame of the OHP.",
            "points": 1,
            "correctAnswer": true,
            "explanation": "This is a recommended tip: 'Jot down your lecture notes on the frame of the (OHP)' to help guide your presentation."
        },
        {
            "id": "comp-q33",
            "type": "fill-blank",
            "question": "The __b1__ board works on the principle that materials with rough surfaces tend to adhere to each other.",
            "points": 1,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["flannel"], "caseSensitive": false }
            ],
            "explanation": "A flannel board uses felt or flannel cloth where pictures backed with rough material (like sandpaper) stick to the board."
        },
        {
            "id": "comp-q34",
            "type": "multiple-choice",
            "question": "Which chalkboard technique involves holding a perforated paper against the board and flickering a chalk duster over it to create an outline?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Bounce Pattern", "isCorrect": true },
                { "id": "opt2", "text": "Templates", "isCorrect": false },
                { "id": "opt3", "text": "Semi-permanent line", "isCorrect": false },
                { "id": "opt4", "text": "Freehand drawing", "isCorrect": false }
            ],
            "explanation": "The Bounce Pattern technique uses perforated outlines and chalk dust to create a guide for drawing complex diagrams."
        },
        {
            "id": "comp-q35",
            "type": "multiple-choice",
            "question": "What is the recommended size for lettering on an OHP transparency?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "About 4mm (1/8 inch)", "isCorrect": false },
                { "id": "opt2", "text": "At least 1cm", "isCorrect": false },
                { "id": "opt3", "text": "It should not be too small, about 4mm is suggested minimum", "isCorrect": true },
                { "id": "opt4", "text": "Any size is fine if the projector is focused", "isCorrect": false }
            ],
            "explanation": "Lettering should not be too small; about 4mm is the recommended minimum size for visibility."
        },
        {
            "id": "comp-q36",
            "type": "multiple-select",
            "question": "Which of the following are guidelines for preparing good handouts? (Select all that apply)",
            "points": 2,
            "options": [
                { "id": "opt1", "text": "Leave space for learners to make notes", "isCorrect": true },
                { "id": "opt2", "text": "Use major and minor headings", "isCorrect": true },
                { "id": "opt3", "text": "Reproduce the textbook exactly", "isCorrect": false },
                { "id": "opt4", "text": "Include questions or exercises to stimulate thinking", "isCorrect": true }
            ],
            "explanation": "Handouts should be structured, spaced for notes, and stimulating—not just photocopies of textbooks."
        },

        /* --- TOPIC 6: Student Evaluation --- */
        {
            "id": "comp-q37",
            "type": "multiple-choice",
            "question": "Which type of evaluation is conducted progressively during the learning process to diagnose problems and provide feedback?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Formative Evaluation", "isCorrect": true },
                { "id": "opt2", "text": "Summative Evaluation", "isCorrect": false },
                { "id": "opt3", "text": "Terminal Evaluation", "isCorrect": false },
                { "id": "opt4", "text": "Placement Evaluation", "isCorrect": false }
            ],
            "explanation": "Formative evaluation is continuous and diagnostic. Summative/Terminal evaluation happens at the end."
        },
        {
            "id": "comp-q38",
            "type": "multiple-choice",
            "question": "What is the difference between 'Assessment' and 'Evaluation'?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Assessment determines the degree of learning; Evaluation places a value on performance to make a decision.", "isCorrect": true },
                { "id": "opt2", "text": "Assessment is for teachers; Evaluation is for students.", "isCorrect": false },
                { "id": "opt3", "text": "They mean exactly the same thing.", "isCorrect": false },
                { "id": "opt4", "text": "Evaluation is only for failures.", "isCorrect": false }
            ],
            "explanation": "Assessment measures achievement (finding extent). Evaluation involves judging that measurement to make decisions (placing value)."
        },
        {
            "id": "comp-q39",
            "type": "fill-blank",
            "question": "The acronym __b1__ stands for Objective Structured Practical Examination.",
            "points": 1,
            "blanks": [
                { "id": "b1", "acceptedAnswers": ["ospe", "OSPE"], "caseSensitive": false }
            ],
            "explanation": "OSPE stands for Objective Structured Practical Examination, used to assess practical skills."
        },
        {
            "id": "comp-q40",
            "type": "multiple-choice",
            "question": "In essay marking, which scoring method involves analysing the correct response for crucial points in advance and awarding marks for them?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Analytical Scoring", "isCorrect": true },
                { "id": "opt2", "text": "Impression Scoring", "isCorrect": false },
                { "id": "opt3", "text": "Global Scoring", "isCorrect": false },
                { "id": "opt4", "text": "Random Scoring", "isCorrect": false }
            ],
            "explanation": "Analytical scoring uses a predetermined marking scheme or checklist of key points. Impression scoring relies on the marker's general view of the answer's quality."
        },
        {
            "id": "comp-q41",
            "type": "multiple-choice",
            "question": "Which of the following is a rule for constructing good Multiple Choice Questions (MCQs)?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Do not make correct answers obviously longer than distracters", "isCorrect": true },
                { "id": "opt2", "text": "Use ridiculous distracters to make it easy", "isCorrect": false },
                { "id": "opt3", "text": "Ensure the question stem is as vague as possible", "isCorrect": false },
                { "id": "opt4", "text": "Always make option 'C' the correct answer", "isCorrect": false }
            ],
            "explanation": "Good MCQs should have plausible distracters and the correct answer should not be identifiable by length or pattern."
        },
        {
            "id": "comp-q42",
            "type": "multiple-select",
            "question": "Which of the following are components of an Objective Structured Clinical Examination (OSCE)? (Select all that apply)",
            "points": 2,
            "options": [
                { "id": "opt1", "text": "Brief examination of a patient", "isCorrect": true },
                { "id": "opt2", "text": "Oral questions (viva voce)", "isCorrect": true },
                { "id": "opt3", "text": "Case records/reports", "isCorrect": true },
                { "id": "opt4", "text": "A 3-hour written essay", "isCorrect": false }
            ],
            "explanation": "OSCE involves stations with patients, oral questions, case records, and models. It does not typically include long written essays."
        },
        {
            "id": "comp-q43",
            "type": "true-false",
            "question": "Attitudes are best assessed through a single pencil-and-paper test at the end of the course.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "Attitudes should be assessed continuously over a long period, often indirectly while performing skills, or using tools like semantic differential scales."
        },
        {
            "id": "comp-q44",
            "type": "ordering",
            "question": "Order the steps for developing an assessment tool.",
            "points": 3,
            "items": [
                { "id": "s1", "text": "List objectives to evaluate", "correctPosition": 1 },
                { "id": "s2", "text": "Identify expected learner outcomes", "correctPosition": 2 },
                { "id": "s3", "text": "Specify tools of assessment", "correctPosition": 3 },
                { "id": "s4", "text": "Allocate marks and develop marking scheme", "correctPosition": 4 },
                { "id": "s5", "text": "Construct questions", "correctPosition": 5 }
            ],
            "explanation": "Assessment development starts with objectives, outcomes, tool selection, marking scheme, and finally question construction."
        },
        {
            "id": "comp-q45",
            "type": "multiple-choice",
            "question": "What is 'Impression Scoring'?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Reading a script to get a general feel for adequacy and transferring that into a grade", "isCorrect": true },
                { "id": "opt2", "text": "Scoring based on the student's handwriting", "isCorrect": false },
                { "id": "opt3", "text": "Checking for specific key points defined in a list", "isCorrect": false },
                { "id": "opt4", "text": "Asking other students to grade the paper", "isCorrect": false }
            ],
            "explanation": "Impression scoring involves reading the whole answer to form an opinion (impression) of its quality relative to expected standards."
        },

        /* --- Mixed/General Application --- */
        {
            "id": "comp-q46",
            "type": "multiple-choice",
            "question": "When teaching a mother how to wash a baby, which aid would be most effective according to the principles of instructional media?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "A real baby (The Real Thing)", "isCorrect": true },
                { "id": "opt2", "text": "A plastic doll", "isCorrect": false },
                { "id": "opt3", "text": "A video of a baby being washed", "isCorrect": false },
                { "id": "opt4", "text": "A diagram on a flipchart", "isCorrect": false }
            ],
            "explanation": "The 'Real Thing' is the best aid. A live baby provides the reality of movement and reaction that a doll or video cannot replicate."
        },
        {
            "id": "comp-q47",
            "type": "matching",
            "question": "Match the assessment purpose with the correct term.",
            "points": 3,
            "pairs": [
                { "id": "p1", "left": "Placement Testing", "right": "Gauging entry skills before instruction begins" },
                { "id": "p2", "left": "Diagnostic Testing", "right": "Identifying severe learning problems" },
                { "id": "p3", "left": "Summative Evaluation", "right": "Certifying competence at end of course" }
            ],
            "explanation": "Placement tests check entry behavior; Diagnostic tests find problems; Summative evaluation certifies achievement."
        },
        {
            "id": "comp-q48",
            "type": "true-false",
            "question": "In a competency-based curriculum, the focus is primarily on the amount of time a student spends in class.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "Competency-based curricula focus on the acquisition of specific skills and abilities (competencies), not just time served."
        },
        {
            "id": "comp-q49",
            "type": "multiple-choice",
            "question": "Which committee report from 1981 influenced the restructuring of secondary schools in Kenya?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "Mackay Report", "isCorrect": true },
                { "id": "opt2", "text": "Ominde Report", "isCorrect": false },
                { "id": "opt3", "text": "Gachathi Report", "isCorrect": false },
                { "id": "opt4", "text": "Appleton Report", "isCorrect": false }
            ],
            "explanation": "The Mackay Report (1981) is associated with the restructuring of the education system (e.g., 8-4-4) and the second university."
        },
        {
            "id": "comp-q50",
            "type": "multiple-choice",
            "question": "In the context of curriculum development, what does 'task analysis' help to determine?",
            "points": 1,
            "options": [
                { "id": "opt1", "text": "The knowledge, attitudes, and skills required to perform professional roles", "isCorrect": true },
                { "id": "opt2", "text": "The cost of the training programme", "isCorrect": false },
                { "id": "opt3", "text": "The number of students to admit", "isCorrect": false },
                { "id": "opt4", "text": "The names of the teachers required", "isCorrect": false }
            ],
            "explanation": "Task analysis breaks down professional functions to identify exactly what a learner needs to know and do to perform them."
        }
    ]
});