/**
 * Quiz Data File for Topic 05: Managing Nursing Care Services
 * This format works when opening HTML files directly in browser (file:// protocol)
 * 
 * Usage in HTML:
 *   <div class="quiz-container" 
 *        data-quiz-id="topic-05-quiz"
 *        data-quiz-js="../quizzes/topic-05-quiz.js">
 */

registerQuiz("topic-05-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-05-quiz",
  "metadata": {
    "title": "Managing Nursing Care Services Quiz",
    "description": "Test your understanding of health care organisations, nursing care delivery systems, and legal/ethical issues in nursing practice.",
    "topicId": "topic-05",
    "difficulty": "intermediate",
    "estimatedTime": 15,
    "passingScore": 70,
    "createdAt": "2026-01-17T00:00:00Z"
  },
  "settings": {
    "shuffleQuestions": false,
    "shuffleOptions": true,
    "showFeedback": "immediate",
    "allowRetry": true,
    "showCorrectAnswers": true
  },
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "question": "Which of the following is NOT a type of health care organisation?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Hospitals", "isCorrect": false },
        { "id": "b", "text": "Ambulatory Based Organisations", "isCorrect": false },
        { "id": "c", "text": "Health Managed Organisation (HMO)", "isCorrect": false },
        { "id": "d", "text": "Pharmaceutical Manufacturing Company", "isCorrect": true }
      ],
      "explanation": "Pharmaceutical Manufacturing Company is not a health care organisation that provides direct patient care. The four main types of health care organisations are hospitals, ambulatory based organisations, HMOs, and home health care organisations.",
      "hint": "Think about which option does not provide direct health care services to patients."
    },
    {
      "id": "q2",
      "type": "multiple-choice",
      "question": "What is the main difference between non-profit and commercial private health care organisations?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Non-profit organisations are government-owned while commercial ones are privately owned", "isCorrect": false },
        { "id": "b", "text": "Non-profit organisations plough back profits to operations or community, while commercial ones distribute profits to investors", "isCorrect": true },
        { "id": "c", "text": "Non-profit organisations only provide emergency care", "isCorrect": false },
        { "id": "d", "text": "Commercial organisations provide better quality care than non-profit ones", "isCorrect": false }
      ],
      "explanation": "The key difference is how profits are handled: non-profit organisations reinvest profits back into operations or the community, while commercial organisations distribute profits to investors or shareholders.",
      "hint": "Consider how profits are used in each type of organisation."
    },
    {
      "id": "q3",
      "type": "multiple-choice",
      "question": "Which nursing care delivery method was the first to be identified and was popular in the 1920s?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Functional Nursing", "isCorrect": false },
        { "id": "b", "text": "Team Nursing", "isCorrect": false },
        { "id": "c", "text": "Case Assignment Method", "isCorrect": true },
        { "id": "d", "text": "Primary Nursing", "isCorrect": false }
      ],
      "explanation": "The Case Assignment Method was the first method identified in nursing care delivery and was popular in the 1920s. Each patient is assigned to a nurse for total patient care while the nurse is on duty.",
      "hint": "This method involves one nurse providing total care to a patient during their shift."
    },
    {
      "id": "q4",
      "type": "multiple-choice",
      "question": "Functional Nursing is best described as:",
      "points": 10,
      "options": [
        { "id": "a", "text": "Task-oriented with division of labour according to specific tasks", "isCorrect": true },
        { "id": "b", "text": "Patient-centered with one nurse responsible for a patient's entire stay", "isCorrect": false },
        { "id": "c", "text": "Team-based approach with a team leader coordinating care", "isCorrect": false },
        { "id": "d", "text": "Each nurse assigned to a small group of patients for 24 hours", "isCorrect": false }
      ],
      "explanation": "Functional Nursing is task-oriented and emphasises the division of labour according to specific tasks. Each nurse has a clearly defined set of tasks determined by complexity, skills, knowledge and experience.",
      "hint": "This method emphasises tasks over individual patient care."
    },
    {
      "id": "q5",
      "type": "true-false",
      "question": "Primary Nursing was developed in the early 1970s and assigns a professional nurse to a patient for their total hospital stay.",
      "points": 10,
      "correctAnswer": true,
      "explanation": "True. Primary Nursing was developed in the early 1970s. A professional nurse (usually a registered nurse) is assigned to a patient for their total hospital stay or to a small group of patients (not more than four or five)."
    },
    {
      "id": "q6",
      "type": "multiple-choice",
      "question": "Which nursing care delivery method emphasises achieving goals through group action or team spirit?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Case Assignment Method", "isCorrect": false },
        { "id": "b", "text": "Functional Nursing", "isCorrect": false },
        { "id": "c", "text": "Team Nursing", "isCorrect": true },
        { "id": "d", "text": "Primary Nursing", "isCorrect": false }
      ],
      "explanation": "Team Nursing was introduced in the late 1950s and its philosophy supports achieving goals through group action or team spirit. A group of nurses with different skill levels work together to accomplish patient-centered goals.",
      "hint": "This method involves a team working together to care for a group of patients."
    },
    {
      "id": "q7",
      "type": "multiple-choice",
      "question": "What is a major disadvantage of Functional Nursing?",
      "points": 10,
      "options": [
        { "id": "a", "text": "It is too expensive", "isCorrect": false },
        { "id": "b", "text": "Fragmentation of care rather than total care", "isCorrect": true },
        { "id": "c", "text": "It requires too many registered nurses", "isCorrect": false },
        { "id": "d", "text": "Patients have too many nurses caring for them", "isCorrect": false }
      ],
      "explanation": "A major disadvantage of Functional Nursing is fragmentation of care rather than total care. The patient's needs may be overlooked because they don't fit into specific task categories, and continuity of care is difficult since no single staff member has a complete picture of the client's needs.",
      "hint": "Consider how this method affects the continuity and completeness of patient care."
    },
    {
      "id": "q8",
      "type": "multiple-select",
      "question": "Which of the following are responsibilities of the nurse manager in managing nursing services? (Select all that apply)",
      "points": 15,
      "options": [
        { "id": "a", "text": "Ensuring 24/7 nursing service operation", "isCorrect": true },
        { "id": "b", "text": "Providing high quality nursing care considering physical, social, psychological and spiritual needs", "isCorrect": true },
        { "id": "c", "text": "Policy development", "isCorrect": true },
        { "id": "d", "text": "Performing all medical procedures for patients", "isCorrect": false }
      ],
      "partialCredit": true,
      "explanation": "The responsibilities of the nurse manager include: ensuring 24/7 nursing service operation, providing high quality nursing care considering all patient needs, resolving health care delivery problems, policy development, planning/organising/directing/controlling resources, utilising appropriate patient assignment methods, and conducting research for innovation.",
      "hint": "Focus on management and coordination responsibilities rather than direct patient care tasks."
    },
    {
      "id": "q9",
      "type": "true-false",
      "question": "The scope of nursing practice is defined and guided only by the nursing practice act.",
      "points": 10,
      "correctAnswer": false,
      "explanation": "False. The scope of nursing practice is defined and guided by both the nursing practice act AND common law. The nursing practice act provides legal regulation for licensure, while common law is derived from legal doctrine and consists of principles based on justice, reason and common sense."
    },
    {
      "id": "q10",
      "type": "multiple-choice",
      "question": "Litigation in nursing practice refers to:",
      "points": 10,
      "options": [
        { "id": "a", "text": "The process of obtaining nursing licensure", "isCorrect": false },
        { "id": "b", "text": "Being taken to court by a patient who makes a claim for damages or compensation", "isCorrect": true },
        { "id": "c", "text": "The process of developing nursing policies", "isCorrect": false },
        { "id": "d", "text": "The educational requirements for nursing", "isCorrect": false }
      ],
      "explanation": "Litigation refers to being taken to a court of law by a patient who makes a claim for damages or compensation. Nursing practice should not leave room for negligence or malpractice because this can lead to litigation.",
      "hint": "This term relates to legal action taken by patients against healthcare providers."
    },
    {
      "id": "q11",
      "type": "multiple-select",
      "question": "Which of the following are roles of the nurse manager regarding legal and ethical issues? (Select all that apply)",
      "points": 15,
      "options": [
        { "id": "a", "text": "Serving as a role model by providing care that meets accepted standards", "isCorrect": true },
        { "id": "b", "text": "Ensuring conduct is as per the nursing code of ethics", "isCorrect": true },
        { "id": "c", "text": "Delegating to subordinates wisely", "isCorrect": true },
        { "id": "d", "text": "Providing educational opportunities for staff on legal issues", "isCorrect": true }
      ],
      "partialCredit": true,
      "explanation": "The nurse manager's roles regarding legal and ethical issues include: serving as a role model, ensuring conduct follows the nursing code of ethics, ensuring staff stay within their scope of practice, delegating wisely, providing education on legal issues, being aware of values and beliefs about human rights, and advocating for clients, subordinates and the profession.",
      "hint": "All options listed are important responsibilities of the nurse manager."
    },
    {
      "id": "q12",
      "type": "multiple-choice",
      "question": "In Primary Nursing, the primary nurse assumes responsibility for:",
      "points": 10,
      "options": [
        { "id": "a", "text": "Only during their assigned shift", "isCorrect": false },
        { "id": "b", "text": "Twenty four hours a day for the duration of the patient's stay", "isCorrect": true },
        { "id": "c", "text": "Only for administrative tasks", "isCorrect": false },
        { "id": "d", "text": "Only for patients in the ICU", "isCorrect": false }
      ],
      "explanation": "In Primary Nursing, the primary nurse assumes responsibility for twenty four hours a day for the duration of the patient's stay in hospital. They may delegate to a secondary or associate nurse to execute the plan during their absence.",
      "hint": "This method provides continuity of care throughout the patient's entire hospital stay."
    },
    {
      "id": "q13",
      "type": "true-false",
      "question": "Home Health Care Organisation provides services at the patient's home for patients requiring palliative care, chronically ill patients, the disabled or the elderly.",
      "points": 10,
      "correctAnswer": true,
      "explanation": "True. Home Health Care Organisation offers services at home where professional nurses provide care. They assess the patients' ability to take care of themselves and identify resources needed to overcome problems and meet patients' needs, including palliative care, chronic illness, disability, or elderly care."
    }
  ]
});