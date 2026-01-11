registerQuiz("comprehensive-exam", {
  "schemaVersion": "1.0",
  "quizId": "comprehensive-exam",
  "metadata": {
    "title": "Comprehensive Final Exam: Unit 6",
    "description": "A comprehensive assessment covering Communication, Psychology, and Counselling principles in nursing practice.",
    "examType": "comprehensive",
    "topicsCovered": [
      "topic-01",
      "topic-02",
      "topic-03",
      "topic-04",
      "topic-05",
      "topic-06",
      "topic-07",
      "topic-08"
    ],
    "difficulty": "advanced",
    "estimatedTime": 60,
    "passingScore": 70,
    "createdAt": "2026-01-11T10:00:00Z",
    "tags": ["final", "comprehensive", "nursing", "communication", "counselling"]
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
    /* TOPIC 1: Defining Communication */
    {
      "id": "comp-q1",
      "type": "multiple-choice",
      "question": "In the communication process acronym MSCREFS, what does the 'E' stand for?",
      "points": 2,
      "topicId": "topic-01",
      "topicName": "Defining Communication",
      "options": [
        { "id": "a", "text": "Environment", "isCorrect": false },
        { "id": "b", "text": "Effects", "isCorrect": true },
        { "id": "c", "text": "Emotion", "isCorrect": false },
        { "id": "d", "text": "Encoding", "isCorrect": false }
      ],
      "explanation": "MSCREFS stands for Message, Source, Channel, Receiver, Effects, Feedback, and Social settings."
    },
    {
      "id": "comp-q2",
      "type": "multiple-choice",
      "question": "Which type of communication flows from subordinates to superiors (e.g., from lower level staff to top management)?",
      "points": 2,
      "topicId": "topic-01",
      "topicName": "Defining Communication",
      "options": [
        { "id": "a", "text": "Downward Communication", "isCorrect": false },
        { "id": "b", "text": "Horizontal Communication", "isCorrect": false },
        { "id": "c", "text": "Upward Communication", "isCorrect": true },
        { "id": "d", "text": "Unconscious Communication", "isCorrect": false }
      ],
      "explanation": "Upward communication flows from staff at lower and middle levels to top management, providing feedback and grievances."
    },
    {
      "id": "comp-q3",
      "type": "true-false",
      "question": "Informal communication, also known as the 'grapevine', should be completely ignored by management as it only contains rumors.",
      "points": 2,
      "topicId": "topic-01",
      "topicName": "Defining Communication",
      "correctAnswer": false,
      "explanation": "The grapevine should not be ignored because it gives a warning of impending issues of concern to employees. Management should provide current information to minimize rumors."
    },
    {
      "id": "comp-q4",
      "type": "fill-blank",
      "question": "Communication that occurs within an individual (talking to oneself) is called __b1__ communication.",
      "points": 2,
      "topicId": "topic-01",
      "topicName": "Defining Communication",
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["intrapersonal"], "caseSensitive": false }
      ],
      "explanation": "Intrapersonal communication occurs when you communicate to yourself without verbalising."
    },
    {
      "id": "comp-q5",
      "type": "multiple-choice",
      "question": "According to studies on interpersonal communication, which component contributes the most (55%) to the overall message?",
      "points": 2,
      "topicId": "topic-01",
      "topicName": "Defining Communication",
      "options": [
        { "id": "a", "text": "Spoken words", "isCorrect": false },
        { "id": "b", "text": "Body posture", "isCorrect": false },
        { "id": "c", "text": "Gestures", "isCorrect": false },
        { "id": "d", "text": "Voice tone and inflection", "isCorrect": true }
      ],
      "explanation": "Voice tone and inflection contribute 55%, body posture/gestures 38%, and spoken words only 7%."
    },

    /* TOPIC 2: Barriers to Communication */
    {
      "id": "comp-q6",
      "type": "multiple-select",
      "question": "Which of the following are examples of physical barriers to communication? (Select all that apply)",
      "points": 3,
      "topicId": "topic-02",
      "topicName": "Barriers to Communication",
      "options": [
        { "id": "a", "text": "Loud noise in the environment", "isCorrect": true },
        { "id": "b", "text": "Use of complicated medical jargon", "isCorrect": false },
        { "id": "c", "text": "Very cold or hot weather", "isCorrect": true },
        { "id": "d", "text": "Religious differences", "isCorrect": false }
      ],
      "explanation": "Noise and extreme weather are physical barriers. Jargon is a semantic barrier, and religious differences are socio-cultural barriers."
    },
    {
      "id": "comp-q7",
      "type": "multiple-choice",
      "question": "If a nurse is overwhelmed by too many tasks and phone calls simultaneously, resulting in missed information, this barrier is known as:",
      "points": 2,
      "topicId": "topic-02",
      "topicName": "Barriers to Communication",
      "options": [
        { "id": "a", "text": "Semantic barrier", "isCorrect": false },
        { "id": "b", "text": "System overload", "isCorrect": true },
        { "id": "c", "text": "Cultural barrier", "isCorrect": false },
        { "id": "d", "text": "Unconscious bias", "isCorrect": false }
      ],
      "explanation": "System overload occurs where an individual sends or receives too much information at the same time."
    },
    {
      "id": "comp-q8",
      "type": "multiple-choice",
      "question": "Using complex medical terminology with a patient who has little formal education creates what type of barrier?",
      "points": 2,
      "topicId": "topic-02",
      "topicName": "Barriers to Communication",
      "options": [
        { "id": "a", "text": "Physical", "isCorrect": false },
        { "id": "b", "text": "Language/Semantic", "isCorrect": true },
        { "id": "c", "text": "System overload", "isCorrect": false },
        { "id": "d", "text": "Physiological", "isCorrect": false }
      ],
      "explanation": "The use of jargon creates a language or semantic barrier preventing the receiver from understanding the message."
    },
    {
      "id": "comp-q9",
      "type": "multiple-choice",
      "question": "Which of the following describes a barrier resulting from the 'Social Setting'?",
      "points": 2,
      "topicId": "topic-02",
      "topicName": "Barriers to Communication",
      "options": [
        { "id": "a", "text": "The sender stammers and speaks inaudibly", "isCorrect": false },
        { "id": "b", "text": "Irrelevant posters in the venue distracting the audience", "isCorrect": true },
        { "id": "c", "text": "The receiver is emotionally disturbed", "isCorrect": false },
        { "id": "d", "text": "The message is too long", "isCorrect": false }
      ],
      "explanation": "The social setting includes the environment. Irrelevant posters act as detractors/noise in the setting."
    },
    {
      "id": "comp-q10",
      "type": "true-false",
      "question": "Using more than one channel (e.g., verbal explanation + a poster) usually increases the likelihood of effective communication.",
      "points": 2,
      "topicId": "topic-02",
      "topicName": "Barriers to Communication",
      "correctAnswer": true,
      "explanation": "Effective communication is often facilitated by using two or more channels to ensure the message is successfully delivered."
    },

    /* TOPIC 3: Organisational Communication */
    {
      "id": "comp-q11",
      "type": "multiple-choice",
      "question": "When writing an official letter to a specific person (e.g., 'Dear Mr. Johnson'), the complementary close should be:",
      "points": 2,
      "topicId": "topic-03",
      "topicName": "Organisational Communication",
      "options": [
        { "id": "a", "text": "Yours faithfully", "isCorrect": false },
        { "id": "b", "text": "Yours sincerely", "isCorrect": true },
        { "id": "c", "text": "Best regards", "isCorrect": false },
        { "id": "d", "text": "Yours truly", "isCorrect": false }
      ],
      "explanation": "Letters beginning with a specific name ('Dear Mr/Mrs/Ms') should end with 'Yours sincerely'. 'Dear Sir/Madam' ends with 'Yours faithfully'."
    },
    {
      "id": "comp-q12",
      "type": "ordering",
      "question": "Arrange the following items in the correct order for a standard meeting agenda:",
      "points": 4,
      "topicId": "topic-03",
      "topicName": "Organisational Communication",
      "items": [
        { "id": "1", "text": "Welcoming participants", "correctPosition": 1 },
        { "id": "2", "text": "Confirmation of minutes of previous meeting", "correctPosition": 2 },
        { "id": "3", "text": "Matters arising", "correctPosition": 3 },
        { "id": "4", "text": "New matters to be discussed", "correctPosition": 4 },
        { "id": "5", "text": "Any Other Business (A.O.B)", "correctPosition": 5 },
        { "id": "6", "text": "Closure and date of next meeting", "correctPosition": 6 }
      ]
    },
    {
      "id": "comp-q13",
      "type": "multiple-choice",
      "question": "When should a Negative Incidence Report be written?",
      "points": 2,
      "topicId": "topic-03",
      "topicName": "Organisational Communication",
      "options": [
        { "id": "a", "text": "At the end of the month during the monthly report", "isCorrect": false },
        { "id": "b", "text": "Immediately after the incident occurs", "isCorrect": true },
        { "id": "c", "text": "Only if the patient threatens legal action", "isCorrect": false },
        { "id": "d", "text": "After consulting with the hospital lawyer", "isCorrect": false }
      ],
      "explanation": "You should write a Negative Incidence Report immediately after the incident before you forget the events that took place."
    },
    {
      "id": "comp-q14",
      "type": "multiple-choice",
      "question": "Which of the following is a function of the Secretary during a meeting?",
      "points": 2,
      "topicId": "topic-03",
      "topicName": "Organisational Communication",
      "options": [
        { "id": "a", "text": "Calling the meeting to order", "isCorrect": false },
        { "id": "b", "text": "Summarizing different opinions", "isCorrect": false },
        { "id": "c", "text": "Circulating the minutes in advance", "isCorrect": true },
        { "id": "d", "text": "Deciding when a point is debated exhaustively", "isCorrect": false }
      ],
      "explanation": "Circulating minutes and taking notes are the secretary's duties. The others are functions of the Chairman."
    },
    {
      "id": "comp-q15",
      "type": "multiple-choice",
      "question": "What is the primary purpose of an appraisal report?",
      "points": 2,
      "topicId": "topic-03",
      "topicName": "Organisational Communication",
      "options": [
        { "id": "a", "text": "To discipline staff for misconduct", "isCorrect": false },
        { "id": "b", "text": "To summarize an employee's performance and abilities for a period", "isCorrect": true },
        { "id": "c", "text": "To list the number of patients seen", "isCorrect": false },
        { "id": "d", "text": "To report accidents in the ward", "isCorrect": false }
      ],
      "explanation": "Appraisal reports are written annually to summarize an employee's performance, strengths, and weaknesses based on their job description."
    },

    /* TOPIC 4: Psychology */
    {
      "id": "comp-q16",
      "type": "matching",
      "question": "Match Freud's personality components to their descriptions:",
      "points": 4,
      "topicId": "topic-04",
      "topicName": "Psychology",
      "pairs": [
        { "id": "p1", "left": "Id", "right": "Pleasure principle, unconscious, instinctual drives" },
        { "id": "p2", "left": "Ego", "right": "Reality principle, mediator, reasoning" },
        { "id": "p3", "left": "Super Ego", "right": "Morality, conscience, perfection" }
      ]
    },
    {
      "id": "comp-q17",
      "type": "multiple-choice",
      "question": "The defense mechanism where one ascribes one's own unacknowledged desires to others is called:",
      "points": 2,
      "topicId": "topic-04",
      "topicName": "Psychology",
      "options": [
        { "id": "a", "text": "Repression", "isCorrect": false },
        { "id": "b", "text": "Projection", "isCorrect": true },
        { "id": "c", "text": "Sublimation", "isCorrect": false },
        { "id": "d", "text": "Reaction Formation", "isCorrect": false }
      ],
      "explanation": "Projection is the process of ascribing to others one's own unacknowledged desires."
    },
    {
      "id": "comp-q18",
      "type": "multiple-choice",
      "question": "According to Freud's psychosexual stages, the 'Anal' stage focuses on:",
      "points": 2,
      "topicId": "topic-04",
      "topicName": "Psychology",
      "options": [
        { "id": "a", "text": "Mouth and gums", "isCorrect": false },
        { "id": "b", "text": "Genital stimulation", "isCorrect": false },
        { "id": "c", "text": "Control and self-control (toilet training)", "isCorrect": true },
        { "id": "d", "text": "Non-sensual activity", "isCorrect": false }
      ],
      "explanation": "The Anal stage (ages 1-3) focuses on pleasures associated with control and self-control, primarily toilet training."
    },
    {
      "id": "comp-q19",
      "type": "multiple-choice",
      "question": "Which of the following is an example of 'Emotion-focused coping' for stress?",
      "points": 2,
      "topicId": "topic-04",
      "topicName": "Psychology",
      "options": [
        { "id": "a", "text": "Creating a study plan for an exam", "isCorrect": false },
        { "id": "b", "text": "Taking action to modify the situation", "isCorrect": false },
        { "id": "c", "text": "Denial or wishful thinking", "isCorrect": true },
        { "id": "d", "text": "Organizing a support group", "isCorrect": false }
      ],
      "explanation": "Emotion-focused coping involves trying to moderate or eliminate unpleasant emotions (e.g., denial, relaxation) rather than changing the situation itself."
    },
    {
      "id": "comp-q20",
      "type": "fill-blank",
      "question": "The exclusion of impulses from conscious awareness is known as __b1__.",
      "points": 2,
      "topicId": "topic-04",
      "topicName": "Psychology",
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["repression"], "caseSensitive": false }
      ],
      "explanation": "Repression is the exclusion of impulses from conscious awareness."
    },

    /* TOPIC 5: Principles of Counselling */
    {
      "id": "comp-q21",
      "type": "multiple-choice",
      "question": "Which quality allows a counsellor to put themselves in the patient's position while retaining objectivity?",
      "points": 2,
      "topicId": "topic-05",
      "topicName": "Principles of Counselling",
      "options": [
        { "id": "a", "text": "Sympathy", "isCorrect": false },
        { "id": "b", "text": "Empathy", "isCorrect": true },
        { "id": "c", "text": "Honesty", "isCorrect": false },
        { "id": "d", "text": "Patience", "isCorrect": false }
      ],
      "explanation": "Empathy is the ability to imagine oneself in the position of another person and share their feelings, while maintaining separateness/objectivity."
    },
    {
      "id": "comp-q22",
      "type": "ordering",
      "question": "Order the steps of the GATHER counselling acronym:",
      "points": 4,
      "topicId": "topic-05",
      "topicName": "Principles of Counselling",
      "items": [
        { "id": "1", "text": "Greet", "correctPosition": 1 },
        { "id": "2", "text": "Ask", "correctPosition": 2 },
        { "id": "3", "text": "Tell", "correctPosition": 3 },
        { "id": "4", "text": "Help", "correctPosition": 4 },
        { "id": "5", "text": "Explain", "correctPosition": 5 },
        { "id": "6", "text": "Return", "correctPosition": 6 }
      ]
    },
    {
      "id": "comp-q23",
      "type": "multiple-choice",
      "question": "In the SOLER acronym for attending skills, what does 'O' stand for?",
      "points": 2,
      "topicId": "topic-05",
      "topicName": "Principles of Counselling",
      "options": [
        { "id": "a", "text": "Observe non-verbals", "isCorrect": false },
        { "id": "b", "text": "Open posture", "isCorrect": true },
        { "id": "c", "text": "Only listen", "isCorrect": false },
        { "id": "d", "text": "Offer advice", "isCorrect": false }
      ],
      "explanation": "O stands for Open posture (uncrossed legs/arms) which signifies availability."
    },
    {
      "id": "comp-q24",
      "type": "multiple-choice",
      "question": "Which counseling skill involves repeating what the patient said using different words to confirm understanding?",
      "points": 2,
      "topicId": "topic-05",
      "topicName": "Principles of Counselling",
      "options": [
        { "id": "a", "text": "Paraphrasing", "isCorrect": true },
        { "id": "b", "text": "Questioning", "isCorrect": false },
        { "id": "c", "text": "Summarising", "isCorrect": false },
        { "id": "d", "text": "Confronting", "isCorrect": false }
      ],
      "explanation": "Paraphrasing confirms and clarifies statements by repeating them in different words."
    },
    {
      "id": "comp-q25",
      "type": "multiple-choice",
      "question": "During which stage of counselling does the patient ask 'How do I get what I need?'",
      "points": 2,
      "topicId": "topic-05",
      "topicName": "Principles of Counselling",
      "options": [
        { "id": "a", "text": "Exploration Stage", "isCorrect": false },
        { "id": "b", "text": "Understanding Stage", "isCorrect": false },
        { "id": "c", "text": "Action Stage", "isCorrect": true },
        { "id": "d", "text": "Termination Stage", "isCorrect": false }
      ],
      "explanation": "The Action Stage focuses on developing strategies and plans to achieve goals."
    },

    /* TOPIC 6: Barriers to Effective Counselling */
    {
      "id": "comp-q26",
      "type": "multiple-choice",
      "question": "What is 'Parroting' in the context of counselling barriers?",
      "points": 2,
      "topicId": "topic-06",
      "topicName": "Barriers to Counselling",
      "options": [
        { "id": "a", "text": "The patient refusing to talk", "isCorrect": false },
        { "id": "b", "text": "Repeating the same phrases even when questions change", "isCorrect": true },
        { "id": "c", "text": "The counsellor giving advice", "isCorrect": false },
        { "id": "d", "text": "The patient mimicking the counsellor", "isCorrect": false }
      ],
      "explanation": "Parroting occurs when the patient continues to repeat the same phrases even if asked in a different way, blocking progress."
    },
    {
      "id": "comp-q27",
      "type": "true-false",
      "question": "It is acceptable for a counsellor to disclose patient information to close relatives if the counsellor thinks it is best for the family.",
      "points": 2,
      "topicId": "topic-06",
      "topicName": "Barriers to Counselling",
      "correctAnswer": false,
      "explanation": "Privacy and Confidentiality are absolute rights. Information must not be disclosed without the patient's consent, not even to close relatives."
    },
    {
      "id": "comp-q28",
      "type": "multiple-choice",
      "question": "Which of the following is considered unethical for a counsellor?",
      "points": 2,
      "topicId": "topic-06",
      "topicName": "Barriers to Counselling",
      "options": [
        { "id": "a", "text": "Referring a patient to a specialist", "isCorrect": false },
        { "id": "b", "text": "Setting boundaries for the relationship", "isCorrect": false },
        { "id": "c", "text": "Engaging in a sexual relationship with the patient", "isCorrect": true },
        { "id": "d", "text": "Charging a fee for missed appointments", "isCorrect": false }
      ],
      "explanation": "Counsellors should not exploit patients financially, sexually, or emotionally. Sexual activity with a patient is unethical."
    },
    {
      "id": "comp-q29",
      "type": "multiple-choice",
      "question": "What should a counsellor do if their ability is impaired by personal emotional difficulties?",
      "points": 2,
      "topicId": "topic-06",
      "topicName": "Barriers to Counselling",
      "options": [
        { "id": "a", "text": "Continue counselling but take more breaks", "isCorrect": false },
        { "id": "b", "text": "Work within known limits or stop offering services", "isCorrect": true },
        { "id": "c", "text": "Tell the patient about their own problems", "isCorrect": false },
        { "id": "d", "text": "Increase the fees", "isCorrect": false }
      ],
      "explanation": "Counsellors should not offer services if their ability or objectivity is impaired; they should refer the patient."
    },
    {
      "id": "comp-q30",
      "type": "multiple-choice",
      "question": "Which patient right ensures they are not forced into a decision?",
      "points": 2,
      "topicId": "topic-06",
      "topicName": "Barriers to Counselling",
      "options": [
        { "id": "a", "text": "Right of Referral", "isCorrect": false },
        { "id": "b", "text": "Consent", "isCorrect": true },
        { "id": "c", "text": "Privacy", "isCorrect": false },
        { "id": "d", "text": "Freedom from prejudice", "isCorrect": false }
      ],
      "explanation": "Consent means the patient must agree to decisions; no decisions should be imposed on them."
    },

    /* TOPIC 7: Theoretical Approaches */
    {
      "id": "comp-q31",
      "type": "matching",
      "question": "Match the counselling approach to its key concept:",
      "points": 4,
      "topicId": "topic-07",
      "topicName": "Theoretical Approaches",
      "pairs": [
        { "id": "p1", "left": "Psychoanalytic", "right": "Unconscious mind, repressed past experiences" },
        { "id": "p2", "left": "Person-centred", "right": "Self-actualisation, unconditional positive regard" },
        { "id": "p3", "left": "Behavioural", "right": "Learning/unlearning, here and now" },
        { "id": "p4", "left": "Eclectic", "right": "BASIC ID modalities" }
      ]
    },
    {
      "id": "comp-q32",
      "type": "multiple-choice",
      "question": "In the Person-centred approach, a state where self-conceptions differ from reality is called:",
      "points": 2,
      "topicId": "topic-07",
      "topicName": "Theoretical Approaches",
      "options": [
        { "id": "a", "text": "Congruence", "isCorrect": false },
        { "id": "b", "text": "Self-actualisation", "isCorrect": false },
        { "id": "c", "text": "Incongruence", "isCorrect": true },
        { "id": "d", "text": "Conditioning", "isCorrect": false }
      ],
      "explanation": "Incongruence exists when self-conceptions differ from the reality of experiences."
    },
    {
      "id": "comp-q33",
      "type": "multiple-choice",
      "question": "The 'Eclectic Approach' to counselling is also known as:",
      "points": 2,
      "topicId": "topic-07",
      "topicName": "Theoretical Approaches",
      "options": [
        { "id": "a", "text": "The Multimodal Approach", "isCorrect": true },
        { "id": "b", "text": "The Freudian Approach", "isCorrect": false },
        { "id": "c", "text": "The Humanistic Approach", "isCorrect": false },
        { "id": "d", "text": "The Conditioning Approach", "isCorrect": false }
      ],
      "explanation": "Developed by Arnold Lazarus, the Eclectic approach is also called the Multimodal approach."
    },
    {
      "id": "comp-q34",
      "type": "multiple-choice",
      "question": "Which theory assumes humans are born as a 'blank slate'?",
      "points": 2,
      "topicId": "topic-07",
      "topicName": "Theoretical Approaches",
      "options": [
        { "id": "a", "text": "Psychoanalytic", "isCorrect": false },
        { "id": "b", "text": "Behavioural", "isCorrect": true },
        { "id": "c", "text": "Person-centred", "isCorrect": false },
        { "id": "d", "text": "Eclectic", "isCorrect": false }
      ],
      "explanation": "Behavioural theory views humans as blank slates where everything is learned and thus can be unlearned."
    },
    {
      "id": "comp-q35",
      "type": "fill-blank",
      "question": "In the BASIC ID acronym, the 'D' stands for __b1__.",
      "points": 2,
      "topicId": "topic-07",
      "topicName": "Theoretical Approaches",
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["drugs", "drug"], "caseSensitive": false }
      ],
      "explanation": "D stands for Drugs/Biology (physical health, habits, substance use)."
    },

    /* TOPIC 8: Special Groups */
    {
      "id": "comp-q36",
      "type": "multiple-choice",
      "question": "Which of the following is a key reason for Pre-HIV test counselling?",
      "points": 2,
      "topicId": "topic-08",
      "topicName": "Special Groups",
      "options": [
        { "id": "a", "text": "To dispense ARVs immediately", "isCorrect": false },
        { "id": "b", "text": "To assess the patient's ability to cope with a positive result", "isCorrect": true },
        { "id": "c", "text": "To inform the family immediately", "isCorrect": false },
        { "id": "d", "text": "To force the patient to take the test", "isCorrect": false }
      ],
      "explanation": "Pre-test counselling assesses coping ability and ensures the patient makes an informed decision."
    },
    {
      "id": "comp-q37",
      "type": "multiple-choice",
      "question": "When counselling a terminally ill patient who is trying to change the counsellor's mind or set unrealistic goals, which stage of termination are they likely in?",
      "points": 2,
      "topicId": "topic-08",
      "topicName": "Special Groups",
      "options": [
        { "id": "a", "text": "Denial", "isCorrect": false },
        { "id": "b", "text": "Anger", "isCorrect": false },
        { "id": "c", "text": "Bargaining", "isCorrect": true },
        { "id": "d", "text": "Depression", "isCorrect": false }
      ],
      "explanation": "Bargaining involves trying to change the outcome or prolong sessions by setting unrealistic goals."
    },
    {
      "id": "comp-q38",
      "type": "true-false",
      "question": "During the medical examination of a rape victim, checking the state of the hymen is not necessary.",
      "points": 2,
      "topicId": "topic-08",
      "topicName": "Special Groups",
      "correctAnswer": false,
      "explanation": "The hymen is checked to find out if it is broken/unbroken, as fresh tears are evidence of trauma."
    },
    {
      "id": "comp-q39",
      "type": "multiple-choice",
      "question": "Which of the following drugs is used for treating oral thrush in HIV patients?",
      "points": 2,
      "topicId": "topic-08",
      "topicName": "Special Groups",
      "options": [
        { "id": "a", "text": "Acyclovir", "isCorrect": false },
        { "id": "b", "text": "Nystatin", "isCorrect": true },
        { "id": "c", "text": "Imodium", "isCorrect": false },
        { "id": "d", "text": "Zidovudine", "isCorrect": false }
      ],
      "explanation": "Nystatin and Nizoral are antifungals used for oral thrush. Acyclovir is for herpes, Imodium for diarrhea."
    },
    {
      "id": "comp-q40",
      "type": "multiple-choice",
      "question": "When counselling a person with a disability, which principle helps them deal with dependency issues?",
      "points": 2,
      "topicId": "topic-08",
      "topicName": "Special Groups",
      "options": [
        { "id": "a", "text": "Considering the social impact", "isCorrect": false },
        { "id": "b", "text": "Considering the practical and emotional impact", "isCorrect": true },
        { "id": "c", "text": "Treating them as a human being", "isCorrect": false },
        { "id": "d", "text": "Ignoring the disability", "isCorrect": false }
      ],
      "explanation": "Considering the practical/emotional impact addresses the reduced capacity to work and feelings of dependency."
    }
  ]
});