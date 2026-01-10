registerQuiz("comprehensive-exam", {
  "schemaVersion": "1.0",
  "quizId": "comprehensive-exam",
  "metadata": {
    "title": "Unit One Comprehensive Exam",
    "description": "Comprehensive assessment covering Professionalism, Trends, Legal Aspects, and the Nursing Process.",
    "examType": "comprehensive",
    "topicsCovered": ["topic-01", "topic-02"],
    "difficulty": "intermediate",
    "estimatedTime": 30,
    "passingScore": 75,
    "createdAt": "2026-01-10T20:00:00Z",
    "tags": ["final", "comprehensive", "nursing-process", "ethics", "legal"]
  },
  "settings": {
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "showFeedback": "end",
    "allowRetry": false,
    "showCorrectAnswers": true,
    "timeLimit": 1800
  },
  "questions": [
    {
      "id": "comp-q1",
      "type": "matching",
      "question": "Match the legal offence with its correct definition based on Kenyan Nursing Law:",
      "points": 20,
      "topicId": "topic-01",
      "topicName": "Professionalism & Trends",
      "pairs": [
        { "id": "p1", "left": "Negligence", "right": "Failure to provide expected care in the field trained in" },
        { "id": "p2", "left": "Misconduct", "right": "Stealing drugs, fighting, or drunkenness on duty" },
        { "id": "p3", "left": "Malpractice", "right": "Providing substandard care or performing procedures out of scope" },
        { "id": "p4", "left": "Impropriety", "right": "Discrediting the profession through behavior on or off duty" }
      ],
      "explanation": "These offences are distinct: Negligence relates to failure of duty; Misconduct relates to behavior like theft or drunkenness; Malpractice involves substandard clinical performance; Impropriety involves bringing shame to the profession."
    },
    {
      "id": "comp-q2",
      "type": "ordering",
      "question": "Arrange the steps of the Nursing Process in the correct chronological order:",
      "points": 15,
      "topicId": "topic-02",
      "topicName": "The Nursing Process",
      "items": [
        { "id": "i1", "text": "Assessment", "correctPosition": 1 },
        { "id": "i2", "text": "Nursing Diagnosis", "correctPosition": 2 },
        { "id": "i3", "text": "Planning", "correctPosition": 3 },
        { "id": "i4", "text": "Implementation", "correctPosition": 4 },
        { "id": "i5", "text": "Evaluation", "correctPosition": 5 }
      ],
      "explanation": "The standard cycle is Assessment -> Diagnosis -> Planning -> Implementation -> Evaluation."
    },
    {
      "id": "comp-q3",
      "type": "multiple-select",
      "question": "According to the ICN Code of Ethics, what are the four fundamental responsibilities of a nurse? (Select all that apply)",
      "points": 10,
      "topicId": "topic-01",
      "topicName": "Professionalism & Trends",
      "options": [
        { "id": "a", "text": "To promote health", "isCorrect": true },
        { "id": "b", "text": "To prevent illness", "isCorrect": true },
        { "id": "c", "text": "To restore health", "isCorrect": true },
        { "id": "d", "text": "To alleviate suffering", "isCorrect": true },
        { "id": "e", "text": "To maximize hospital profits", "isCorrect": false },
        { "id": "f", "text": "To diagnose medical conditions", "isCorrect": false }
      ],
      "partialCredit": true,
      "explanation": "The ICN Code states the fundamental responsibility is fourfold: to promote health, prevent illness, restore health, and alleviate suffering."
    },
    {
      "id": "comp-q4",
      "type": "multiple-choice",
      "question": "Which nursing care system is depicted in the diagram where one nurse assumes individual responsibility for a particular patient over the entire period of care?",
      "points": 10,
      "topicId": "topic-01",
      "topicName": "Professionalism & Trends",
      "media": {
        "type": "image",
        "url": "assets/images/image-20260110-27f18fd2.jpeg",
        "alt": "Diagram showing one nurse connecting directly to a patient",
        "caption": "Figure: Nursing Care System"
      },
      "options": [
        { "id": "a", "text": "Task Allocation", "isCorrect": false },
        { "id": "b", "text": "Team Nursing", "isCorrect": false },
        { "id": "c", "text": "Primary Nursing", "isCorrect": true },
        { "id": "d", "text": "Functional Nursing", "isCorrect": false }
      ],
      "explanation": "Primary Nursing is a patient-centred system where one nurse (the primary nurse) assumes individual responsibility for a particular patient."
    },
    {
      "id": "comp-q5",
      "type": "fill-blank",
      "question": "The __b1__ of Kenya is a corporate body established by Cap 257 to regulate nursing education and practice, whereas the __b2__ is a professional welfare association.",
      "points": 15,
      "topicId": "topic-01",
      "topicName": "Professionalism & Trends",
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["Nursing Council", "NCK", "Nursing Council of Kenya"], "caseSensitive": false },
        { "id": "b2", "acceptedAnswers": ["NNAK", "National Nurses Association of Kenya", "National Nurses Association"], "caseSensitive": false }
      ],
      "explanation": "The Nursing Council (NCK) is the regulatory body established by Act of Parliament (Cap 257). The NNAK is the professional association registered as a welfare society."
    },
    {
      "id": "comp-q6",
      "type": "multiple-choice",
      "question": "In the context of the Nursing Process, what defines 'Assessment'?",
      "points": 5,
      "topicId": "topic-02",
      "topicName": "The Nursing Process",
      "options": [
        { "id": "a", "text": "Carrying out the proposed plan of care", "isCorrect": false },
        { "id": "b", "text": "Systematic collection of data to determine health status", "isCorrect": true },
        { "id": "c", "text": "Setting priorities and identifying interventions", "isCorrect": false },
        { "id": "d", "text": "Determining the extent to which goals have been achieved", "isCorrect": false }
      ],
      "explanation": "Assessment starts with the first encounter and involves systematic data collection (history taking, physical exam) to identify health problems."
    },
    {
      "id": "comp-q7",
      "type": "matching",
      "question": "Match the Nursing Model with its theorist:",
      "points": 15,
      "topicId": "topic-01",
      "topicName": "Professionalism & Trends",
      "pairs": [
        { "id": "p1", "left": "Dorothea Orem", "right": "Self-care Model" },
        { "id": "p2", "left": "Callista Roy", "right": "Adaptation Model" },
        { "id": "p3", "left": "Martha Rogers", "right": "Interaction with Environment" }
      ],
      "explanation": "Orem focused on self-care deficits; Roy focused on adaptation; Rogers focused on the unitary human being interacting with the environment."
    },
    {
      "id": "comp-q8",
      "type": "image-based",
      "question": "Identify the level of needs that receives the HIGHEST priority in nursing planning according to Maslow's hierarchy:",
      "points": 10,
      "topicId": "topic-02",
      "topicName": "The Nursing Process",
      "imageUrl": "assets/images/image-20260110-4f1ff7a1.jpeg",
      "imageAlt": "Pyramid showing Maslow's Hierarchy of Needs",
      "hotspots": [
        { "id": "h1", "x": 50, "y": 85, "radius": 15, "label": "Physiological Needs (Bottom)", "isCorrect": true },
        { "id": "h2", "x": 50, "y": 65, "radius": 10, "label": "Safety Needs", "isCorrect": false },
        { "id": "h3", "x": 50, "y": 45, "radius": 10, "label": "Love/Belonging", "isCorrect": false },
        { "id": "h4", "x": 50, "y": 25, "radius": 10, "label": "Esteem", "isCorrect": false },
        { "id": "h5", "x": 50, "y": 10, "radius": 8, "label": "Self-Actualization", "isCorrect": false }
      ],
      "explanation": "Physiological needs (at the base of the pyramid) such as breathing, food, and water must be met before higher needs can be addressed."
    },
    {
      "id": "comp-q9",
      "type": "true-false",
      "question": "Florence Nightingale believed that nursing was merely the administration of medicine and application of poultices.",
      "points": 5,
      "topicId": "topic-01",
      "topicName": "Professionalism & Trends",
      "correctAnswer": false,
      "explanation": "Florence Nightingale explicitly wrote in 1859 that nursing was MORE than the administration of medicine and application of poultices, recognizing the need for intellectual and practical skills."
    },
    {
      "id": "comp-q10",
      "type": "multiple-choice",
      "question": "Which Act describes the health delivery services in Kenya and is often referred to as the 'mother Act'?",
      "points": 5,
      "topicId": "topic-01",
      "topicName": "Professionalism & Trends",
      "options": [
        { "id": "a", "text": "The Nurses Act (Cap 257)", "isCorrect": false },
        { "id": "b", "text": "The Pharmacy and Poisons Act (Cap 244)", "isCorrect": false },
        { "id": "c", "text": "The Public Health Act (Cap 242)", "isCorrect": true },
        { "id": "d", "text": "The Mental Health Act (Cap 248)", "isCorrect": false }
      ],
      "explanation": "The Public Health Act (Cap 242) is commonly referred to as the mother Act among Acts of Health Professionals."
    },
    {
      "id": "comp-q11",
      "type": "multiple-select",
      "question": "Which of the following are fundamental techniques used during a physical examination? (Select all that apply)",
      "points": 10,
      "topicId": "topic-02",
      "topicName": "The Nursing Process",
      "options": [
        { "id": "a", "text": "Inspection", "isCorrect": true },
        { "id": "b", "text": "Palpation", "isCorrect": true },
        { "id": "c", "text": "Percussion", "isCorrect": true },
        { "id": "d", "text": "Auscultation", "isCorrect": true },
        { "id": "e", "text": "Prescription", "isCorrect": false }
      ],
      "partialCredit": true,
      "explanation": "The four fundamental techniques are Inspection (looking), Palpation (feeling), Percussion (tapping), and Auscultation (listening)."
    },
    {
      "id": "comp-q12",
      "type": "short-answer",
      "question": "Explain the difference between a Nursing Diagnosis and a Medical Diagnosis.",
      "points": 15,
      "topicId": "topic-02",
      "topicName": "The Nursing Process",
      "keywords": ["problem", "response", "actual", "potential", "nursing action", "resolve", "disease", "pathology"],
      "minKeywords": 2,
      "modelAnswer": "A nursing diagnosis identifies the patient's actual or potential health problems/responses that can be resolved by nursing actions. A medical diagnosis identifies a specific disease or pathology.",
      "maxLength": 300
    },
    {
      "id": "comp-q13",
      "type": "multiple-choice",
      "question": "Who comprises the membership of the Nursing Council of Kenya's 'Full Council'?",
      "points": 10,
      "topicId": "topic-01",
      "topicName": "Professionalism & Trends",
      "options": [
        { "id": "a", "text": "All registered nurses in Kenya", "isCorrect": false },
        { "id": "b", "text": "The Minister of Health and the President", "isCorrect": false },
        { "id": "c", "text": "22 members including ex-officials, elected representatives, and nominees", "isCorrect": true },
        { "id": "d", "text": "The NNAK Executive Committee", "isCorrect": false }
      ],
      "explanation": "The Full Council consists of 22 members: ex-officials (DMS, CNO), education reps, religious org reps, NNAK/KEPNA reps, nominees, and 11 elected nurses."
    },
    {
      "id": "comp-q14",
      "type": "ordering",
      "question": "Order the historical progression of nursing care organization systems from oldest to newest:",
      "points": 10,
      "topicId": "topic-01",
      "topicName": "Professionalism & Trends",
      "items": [
        { "id": "i1", "text": "Care by family members at home", "correctPosition": 1 },
        { "id": "i2", "text": "Task Allocation / Job Assignment", "correctPosition": 2 },
        { "id": "i3", "text": "Team Nursing", "correctPosition": 3 },
        { "id": "i4", "text": "Primary Nursing", "correctPosition": 4 }
      ],
      "explanation": "Nursing evolved from family care, to task allocation (industrial model), to team nursing, and finally to primary nursing (patient-centred)."
    },
    {
      "id": "comp-q15",
      "type": "true-false",
      "question": "A professional nurse must perform procedures they are not competent in if ordered by a doctor.",
      "points": 5,
      "topicId": "topic-01",
      "topicName": "Professionalism & Trends",
      "correctAnswer": false,
      "explanation": "The ICN Code and NCK regulations state a nurse uses judgement in relation to individual competence. A nurse has an obligation to refuse to participate in unethical procedures or those they are not competent to perform."
    },
    {
      "id": "comp-q16",
      "type": "multiple-choice",
      "question": "Which component of the Nursing Care Plan provides the specific guidelines that dictate the focus of evaluation?",
      "points": 10,
      "topicId": "topic-02",
      "topicName": "The Nursing Process",
      "options": [
        { "id": "a", "text": "Nursing Diagnosis", "isCorrect": false },
        { "id": "b", "text": "Rationale", "isCorrect": false },
        { "id": "c", "text": "Expected Outcomes", "isCorrect": true },
        { "id": "d", "text": "Nursing Actions", "isCorrect": false }
      ],
      "explanation": "Expected outcomes define the expected behavior of the patient and serve as the basis for evaluation."
    },
    {
      "id": "comp-q17",
      "type": "fill-blank",
      "question": "An interview involves a dialogue between the nurse and patient. A key skill is __b1__, which involves being attentive to both verbal and non-verbal behavior.",
      "points": 10,
      "topicId": "topic-02",
      "topicName": "The Nursing Process",
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["listening", "active listening"], "caseSensitive": false }
      ],
      "explanation": "Listening is a core skill in interviewing, requiring attention to both what is said and how it is said (gestures, posture)."
    },
    {
      "id": "comp-q18",
      "type": "multiple-choice",
      "question": "Which Standing Committee of the NCK deals with syllabus design and examination administration?",
      "points": 5,
      "topicId": "topic-01",
      "topicName": "Professionalism & Trends",
      "options": [
        { "id": "a", "text": "Registration and Licensing Committee", "isCorrect": false },
        { "id": "b", "text": "Education Standing Committee", "isCorrect": true },
        { "id": "c", "text": "Standards and Ethics Committee", "isCorrect": false },
        { "id": "d", "text": "Disciplinary Committee", "isCorrect": false }
      ],
      "explanation": "The Education Standing Committee designs programmes, syllabi, and deals with all examination matters."
    },
    {
      "id": "comp-q19",
      "type": "multiple-select",
      "question": "Select all statements that describe the 'Provider' role in clinical nursing practice:",
      "points": 10,
      "topicId": "topic-01",
      "topicName": "Professionalism & Trends",
      "options": [
        { "id": "a", "text": "Meeting nursing needs using the nursing process", "isCorrect": true },
        { "id": "b", "text": "Generating new knowledge through systematic study", "isCorrect": false },
        { "id": "c", "text": "Collaborating with multidisciplinary teams", "isCorrect": true },
        { "id": "d", "text": "Playing a leadership role (deciding, influencing)", "isCorrect": true }
      ],
      "partialCredit": true,
      "explanation": "The Provider role involves meeting health needs, collaboration, and leadership. Generating knowledge is part of the Researcher role."
    },
    {
      "id": "comp-q20",
      "type": "matching",
      "question": "Match the goal type with its definition:",
      "points": 10,
      "topicId": "topic-02",
      "topicName": "The Nursing Process",
      "pairs": [
        { "id": "p1", "left": "Immediate Goals", "right": "Address existing problems" },
        { "id": "p2", "left": "Intermediate Goals", "right": "Address potential problems likely to occur soon" },
        { "id": "p3", "left": "Long Term Goals", "right": "Require longer periods (prevention/rehab)" }
      ],
      "explanation": "Goals are categorized by time frame: Immediate (now), Intermediate (soon/potential), and Long Term (future/rehab)."
    }
  ]
});