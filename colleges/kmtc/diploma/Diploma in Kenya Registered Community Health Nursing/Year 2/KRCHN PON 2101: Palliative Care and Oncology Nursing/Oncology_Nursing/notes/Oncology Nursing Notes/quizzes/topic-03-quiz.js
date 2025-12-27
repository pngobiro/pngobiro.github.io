registerQuiz("topic-03-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-03-quiz",
  "metadata": {
    "title": "Diagnosis & Classification Quiz",
    "description": "Test your knowledge on diagnostic tests, tumor markers, TNM staging, and tumor classification.",
    "topicId": "topic-03",
    "difficulty": "intermediate",
    "estimatedTime": 12,
    "passingScore": 70,
    "createdAt": "2025-12-27T00:00:00Z",
    "tags": ["diagnosis", "staging", "classification"]
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
      "question": "Which tumor marker is considered 'tissue-specific' for identifying prostate cancer?",
      "points": 10,
      "options": [
        { "id": "a", "text": "CEA (Carcinoembryonic Antigen)", "isCorrect": false },
        { "id": "b", "text": "AFP (Alpha-fetoprotein)", "isCorrect": false },
        { "id": "c", "text": "PSA (Prostatic Specific Antigen)", "isCorrect": true },
        { "id": "d", "text": "HCG (Human Chorionic Gonadotropin)", "isCorrect": false }
      ],
      "explanation": "PSA is specific to prostatic tissue. CEA and AFP are oncofetal antigens."
    },
    {
      "id": "q2",
      "type": "matching",
      "question": "Match the Pap Smear class to its interpretation:",
      "points": 20,
      "pairs": [
        { "id": "p1", "left": "Class I", "right": "Normal" },
        { "id": "p2", "left": "Class III", "right": "Mild to Moderate Dysplasia" },
        { "id": "p3", "left": "Class IV", "right": "Probably Malignant" },
        { "id": "p4", "left": "Class V", "right": "Malignant" }
      ],
      "explanation": "Class I is normal. Class III suggests dysplasia. Class IV is probably malignant. Class V is malignant."
    },
    {
      "id": "q3",
      "type": "fill-blank",
      "question": "A malignant tumor arising from glandular tissue is called a(n) __b1__.",
      "points": 10,
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["adenocarcinoma"], "caseSensitive": false }
      ],
      "explanation": "Adeno- refers to gland; carcinoma refers to epithelial origin malignancy."
    },
    {
      "id": "q4",
      "type": "multiple-choice",
      "question": "In the TNM Staging System, what does 'M0' indicate?",
      "points": 10,
      "options": [
        { "id": "a", "text": "Tumor in situ", "isCorrect": false },
        { "id": "b", "text": "No evidence of distant metastasis", "isCorrect": true },
        { "id": "c", "text": "Regional lymph node involvement", "isCorrect": false },
        { "id": "d", "text": "Distant metastasis present", "isCorrect": false }
      ],
      "explanation": "M stands for Metastasis. 0 indicates 'no evidence of'. So M0 is no distant metastasis."
    },
    {
      "id": "q5",
      "type": "multiple-select",
      "question": "Which of the following are examples of **Oncofetal Antigens**? (Select all that apply)",
      "points": 15,
      "options": [
        { "id": "a", "text": "Carcinoembryonic Antigen (CEA)", "isCorrect": true },
        { "id": "b", "text": "Alpha-fetoprotein (AFP)", "isCorrect": true },
        { "id": "c", "text": "Calcitonin", "isCorrect": false },
        { "id": "d", "text": "Lactic Dehydrogenase", "isCorrect": false }
      ],
      "explanation": "CEA and AFP are oncofetal antigens. Calcitonin is a hormone. Lactic Dehydrogenase is a host-response marker."
    },
    {
      "id": "q6",
      "type": "true-false",
      "question": "A sarcoma is a malignant tumor arising from epithelial tissue.",
      "points": 5,
      "correctAnswer": false,
      "explanation": "False. Sarcomas arise from **supportive** tissues (bone, muscle, connective tissue). Carcinomas arise from epithelial tissue."
    },
    {
      "id": "q7",
      "type": "image-based",
      "question": "The procedure shown in the diagram, used to obtain a tissue sample, is known as a:",
      "points": 10,
      "imageUrl": "../assets/images/image-20251227-30c7840e.jpeg",
      "imageAlt": "Needle biopsy procedure diagram",
      "options": [
        { "id": "a", "text": "Excisional Biopsy", "isCorrect": false },
        { "id": "b", "text": "Needle Biopsy / Aspiration", "isCorrect": true },
        { "id": "c", "text": "Incisional Biopsy", "isCorrect": false },
        { "id": "d", "text": "Endoscopy", "isCorrect": false }
      ],
      "explanation": "The image depicts a needle aspiration biopsy."
    },
    {
      "id": "q8",
      "type": "short-answer",
      "question": "Differentiate between an Incisional Biopsy and an Excisional Biopsy.",
      "points": 20,
      "keywords": ["incisional", "sample", "portion", "excisional", "entire", "remove", "whole"],
      "minKeywords": 2,
      "modelAnswer": "An excisional biopsy involves removing the entire tumor. An incisional biopsy involves removing only a sample or portion of the tumor for analysis.",
      "maxLength": 400
    }
  ]
});