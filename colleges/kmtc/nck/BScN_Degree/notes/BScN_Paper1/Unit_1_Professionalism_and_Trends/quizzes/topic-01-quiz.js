registerQuiz("topic-01-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-01-quiz",
  "metadata": {
    "title": "Professionalism & Trends Knowledge Check",
    "description": "Assess your understanding of nursing ethics, professional organizations, and legal frameworks in Kenya.",
    "topicId": "topic-01",
    "difficulty": "beginner",
    "estimatedTime": 15,
    "passingScore": 70,
    "createdAt": "2026-01-10T00:00:00Z",
    "tags": ["ethics", "legal", "professionalism"]
  },
  "settings": {
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "showFeedback": "immediate",
    "allowRetry": true,
    "showCorrectAnswers": true
  },
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "question": "What is the primary distinction between the Nursing Council of Kenya (NCK) and the National Nurses Association of Kenya (NNAK)?",
      "points": 10,
      "options": [
        { "id": "a", "text": "NCK is a welfare society; NNAK is a regulatory body.", "isCorrect": false },
        { "id": "b", "text": "NCK is a statutory/regulatory body; NNAK is a professional welfare association.", "isCorrect": true },
        { "id": "c", "text": "Both have the same mandates.", "isCorrect": false },
        { "id": "d", "text": "NNAK registers nurses; NCK advocates for salaries.", "isCorrect": false }
      ],
      "explanation": "NCK is established by Act of Parliament (Cap 257) to regulate education and practice. NNAK is registered under the Societies Act for professional welfare."
    },
    {
      "id": "q2",
      "type": "multiple-select",
      "question": "According to the ICN Code of Ethics, which of the following are the four fundamental responsibilities of a nurse? (Select 4)",
      "points": 20,
      "options": [
        { "id": "a", "text": "To promote health", "isCorrect": true },
        { "id": "b", "text": "To prevent illness", "isCorrect": true },
        { "id": "c", "text": "To restore health", "isCorrect": true },
        { "id": "d", "text": "To alleviate suffering", "isCorrect": true },
        { "id": "e", "text": "To cure disease", "isCorrect": false },
        { "id": "f", "text": "To manage hospital finances", "isCorrect": false }
      ],
      "explanation": "The ICN Code explicitly states the fourfold responsibility: promote health, prevent illness, restore health, and alleviate suffering."
    },
    {
      "id": "q3",
      "type": "matching",
      "question": "Match the NCK Standing Committee with its primary function:",
      "points": 20,
      "pairs": [
        { "id": "p1", "left": "Education Committee", "right": "Designs syllabus and administers examinations" },
        { "id": "p2", "left": "Registration Committee", "right": "Licenses nurses for practice (meets monthly)" },
        { "id": "p3", "left": "Investigations Committee", "right": "Looks into professional misconduct allegations" },
        { "id": "p4", "left": "Finance Committee", "right": "Deals with income and expenditure" }
      ],
      "explanation": "Education handles training/exams; Registration handles licensing; Investigations looks into malpractice; Finance handles money."
    },
    {
      "id": "q4",
      "type": "fill-blank",
      "question": "A professional nurse who provides substandard care or performs procedures outside their scope of practice may be charged with __b1__.",
      "points": 10,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["malpractice"], "caseSensitive": false }
      ],
      "explanation": "Malpractice involves professional negligence or incompetence, such as performing tasks one is not trained for."
    },
    {
      "id": "q5",
      "type": "true-false",
      "question": "The 'Patient Allocation' system of nursing care involves breaking patient care into specific tasks (e.g., one nurse does meds, another does dressings).",
      "points": 5,
      "correctAnswer": false,
      "explanation": "False. That description fits 'Task Allocation' or 'Functional Nursing'. Patient Allocation involves one nurse caring for a small group of patients completely during a shift."
    },
    {
      "id": "q6",
      "type": "image-based",
      "question": "Identify the nursing care system shown in the diagram where a team leader coordinates care for a group of patients:",
      "points": 10,
      "imageUrl": "../assets/images/image-20260110-bc4b1fd4.jpeg",
      "imageAlt": "Diagram showing a team leader directing other nursing staff",
      "options": [
        { "id": "a", "text": "Primary Nursing", "isCorrect": false },
        { "id": "b", "text": "Team Nursing", "isCorrect": true },
        { "id": "c", "text": "Patient Allocation", "isCorrect": false },
        { "id": "d", "text": "Task Assignment", "isCorrect": false }
      ],
      "explanation": "The diagram illustrates Team Nursing, where a leader coordinates a group of staff to care for a group of patients."
    },
    {
      "id": "q7",
      "type": "short-answer",
      "question": "Define 'Impropriety' in the context of nursing legal aspects.",
      "points": 15,
      "keywords": ["shame", "discredit", "conduct", "behavior", "unprofessional", "bar", "fight", "drunk"],
      "minKeywords": 2,
      "modelAnswer": "Impropriety refers to conducting oneself unprofessionally (on or off duty) in a way that brings discredit or shame to the nursing profession, such as fighting in public or drunkenness.",
      "maxLength": 200
    },
    {
      "id": "q8",
      "type": "ordering",
      "question": "Place the levels of nursing training in Kenya in order from basic to highest academic level mentioned:",
      "points": 10,
      "items": [
        { "id": "i1", "text": "Certificate (Enrolled Nurse)", "correctPosition": 1 },
        { "id": "i2", "text": "Diploma (KRCHN/KRN)", "correctPosition": 2 },
        { "id": "i3", "text": "Bachelors Degree (BScN)", "correctPosition": 3 },
        { "id": "i4", "text": "Masters Degree", "correctPosition": 4 }
      ],
      "explanation": "The progression is Certificate -> Diploma -> Bachelors -> Masters."
    }
  ]
});