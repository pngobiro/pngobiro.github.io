registerQuiz("comprehensive-exam", {
  "schemaVersion": "1.0",
  "quizId": "comprehensive-exam",
  "metadata": {
    "title": "Comprehensive Unit Exam: GI Disorders",
    "description": "Final assessment covering all topics in Unit 4: Mouth, Oesophagus, Stomach, Intestines, Liver, Gallbladder, and Pancreas.",
    "examType": "comprehensive",
    "topicsCovered": ["topic-01", "topic-02", "topic-03"],
    "difficulty": "advanced",
    "estimatedTime": 45,
    "passingScore": 75,
    "createdAt": "2025-12-25T00:00:00Z",
    "tags": ["final", "comprehensive", "gastrointestinal", "nursing"]
  },
  "settings": {
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "showFeedback": "end",
    "allowRetry": true,
    "showCorrectAnswers": true,
    "timeLimit": 2700
  },
  "questions": [
    // TOPIC 1 QUESTIONS
    {
      "id": "comp-q1",
      "type": "multiple-choice",
      "question": "What is the primary cause of Vincent's Infection (Ulcerative Stomatitis)?",
      "points": 10,
      "topicId": "topic-01",
      "topicName": "Mouth & Oesophagus",
      "options": [
        { "id": "a", "text": "Herpes Virus", "isCorrect": false },
        { "id": "b", "text": "Fusiform bacillus and spirochaete", "isCorrect": true },
        { "id": "c", "text": "Candida albicans", "isCorrect": false },
        { "id": "d", "text": "Streptococcus", "isCorrect": false }
      ],
      "explanation": "Ulcerative stomatitis is caused by the combination of fusiform bacillus and spirochaete."
    },
    {
      "id": "comp-q2",
      "type": "true-false",
      "question": "A sliding hiatal hernia occurs when the upper stomach and gastroesophageal junction are displaced upward into the thorax.",
      "points": 5,
      "topicId": "topic-01",
      "topicName": "Mouth & Oesophagus",
      "correctAnswer": true,
      "explanation": "This describes the most common type of hiatal hernia."
    },
    {
      "id": "comp-q3",
      "type": "multiple-select",
      "question": "Nursing care for a patient with Stomatitis includes:",
      "points": 10,
      "topicId": "topic-01",
      "topicName": "Mouth & Oesophagus",
      "options": [
        { "id": "a", "text": "Frequent mouth cleansing", "isCorrect": true },
        { "id": "b", "text": "Using alkaline mouth washes", "isCorrect": true },
        { "id": "c", "text": "Serving hot, spicy foods", "isCorrect": false },
        { "id": "d", "text": "Encouraging soft, cool foods", "isCorrect": true }
      ],
      "explanation": "Care involves hygiene, non-irritating rinses, and bland/cool diet to prevent pain."
    },

    // TOPIC 2 QUESTIONS
    {
      "id": "comp-q4",
      "type": "matching",
      "question": "Match the term with the correct definition:",
      "points": 15,
      "topicId": "topic-02",
      "topicName": "Stomach & Intestines",
      "pairs": [
        { "id": "p1", "left": "Volvulus", "right": "Twisting of the intestines" },
        { "id": "p2", "left": "Intussusception", "right": "Telescoping of bowel on itself" },
        { "id": "p3", "left": "Paralytic Ileus", "right": "Absence of peristalsis" }
      ],
      "explanation": "These are mechanical and functional causes of intestinal obstruction."
    },
    {
      "id": "comp-q5",
      "type": "multiple-choice",
      "question": "Pain at McBurney's point is a classic sign of which condition?",
      "points": 10,
      "topicId": "topic-02",
      "topicName": "Stomach & Intestines",
      "options": [
        { "id": "a", "text": "Gastritis", "isCorrect": false },
        { "id": "b", "text": "Appendicitis", "isCorrect": true },
        { "id": "c", "text": "Diverticulitis", "isCorrect": false },
        { "id": "d", "text": "Cholecystitis", "isCorrect": false }
      ],
      "explanation": "McBurney's point (RLQ) is the anatomical location of the appendix."
    },
    {
      "id": "comp-q6",
      "type": "image-based",
      "question": "Which diagram represents a Billroth II (Gastrojejunostomy) procedure?",
      "points": 10,
      "topicId": "topic-02",
      "topicName": "Stomach & Intestines",
      "media": {
        "type": "image",
        "url": "../assets/images/image-20251225-1d1a9ef6.jpeg",
        "alt": "Diagrams of gastric surgeries",
        "caption": "Figure 4.6"
      },
      "options": [
        { "id": "a", "text": "Figure 4.6(a)", "isCorrect": false },
        { "id": "b", "text": "Figure 4.6(b)", "isCorrect": true }
      ],
      "explanation": "Figure 4.6(b) shows the stomach anastomosed to the jejunum (Billroth II), whereas (a) shows attachment to the duodenum (Billroth I)."
    },
    {
      "id": "comp-q7",
      "type": "multiple-choice",
      "question": "Which of the following is an autoimmune inflammatory bowel disease characterized by 'skip lesions' and a cobblestone appearance?",
      "points": 10,
      "topicId": "topic-02",
      "topicName": "Stomach & Intestines",
      "options": [
        { "id": "a", "text": "Ulcerative Colitis", "isCorrect": false },
        { "id": "b", "text": "Crohn's Disease", "isCorrect": true },
        { "id": "c", "text": "Diverticulosis", "isCorrect": false },
        { "id": "d", "text": "Peritonitis", "isCorrect": false }
      ],
      "explanation": "Crohn's disease affects any part of the GI tract with skip lesions and cobblestoning. UC is continuous."
    },

    // TOPIC 3 QUESTIONS
    {
      "id": "comp-q8",
      "type": "multiple-choice",
      "question": "Which Hepatitis virus depends on the presence of Hepatitis B to replicate?",
      "points": 10,
      "topicId": "topic-03",
      "topicName": "Accessory Organs",
      "options": [
        { "id": "a", "text": "Hepatitis A", "isCorrect": false },
        { "id": "b", "text": "Hepatitis C", "isCorrect": false },
        { "id": "c", "text": "Hepatitis D", "isCorrect": true },
        { "id": "d", "text": "Hepatitis E", "isCorrect": false }
      ],
      "explanation": "Hepatitis D is a defective virus that requires the HbsAg envelope from Hepatitis B to survive."
    },
    {
      "id": "comp-q9",
      "type": "fill-blank",
      "question": "The tube used to tamponade bleeding esophageal varices is called the ______ tube.",
      "points": 10,
      "topicId": "topic-03",
      "topicName": "Accessory Organs",
      "blanks": [
        { "id": "1", "acceptedAnswers": ["Sengstaken-Blakemore", "sengstaken blakemore", "Blakemore"], "caseSensitive": false }
      ],
      "explanation": "The Sengstaken-Blakemore tube applies pressure to the esophagus to stop bleeding varices."
    },
    {
      "id": "comp-q10",
      "type": "multiple-choice",
      "question": "What is the primary dietary management for Cholecystitis?",
      "points": 10,
      "topicId": "topic-03",
      "topicName": "Accessory Organs",
      "options": [
        { "id": "a", "text": "High Protein", "isCorrect": false },
        { "id": "b", "text": "Low Fat", "isCorrect": true },
        { "id": "c", "text": "Low Carbohydrate", "isCorrect": false },
        { "id": "d", "text": "High Sodium", "isCorrect": false }
      ],
      "explanation": "Fat stimulates the gallbladder to contract, causing pain. A low-fat diet reduces this stimulation."
    },
    {
      "id": "comp-q11",
      "type": "true-false",
      "question": "Serum amylase levels are typically elevated within 24 hours in acute pancreatitis.",
      "points": 5,
      "topicId": "topic-03",
      "topicName": "Accessory Organs",
      "correctAnswer": true,
      "explanation": "Elevated serum amylase and lipase are diagnostic markers for acute pancreatitis."
    },
    {
      "id": "comp-q12",
      "type": "multiple-select",
      "question": "Which complications are associated with Cirrhosis of the liver? (Select all that apply)",
      "points": 15,
      "topicId": "topic-03",
      "topicName": "Accessory Organs",
      "options": [
        { "id": "a", "text": "Ascites", "isCorrect": true },
        { "id": "b", "text": "Esophageal Varices", "isCorrect": true },
        { "id": "c", "text": "Hepatic Encephalopathy", "isCorrect": true },
        { "id": "d", "text": "Improved blood clotting", "isCorrect": false }
      ],
      "explanation": "Cirrhosis causes portal hypertension leading to ascites and varices, and liver failure leading to encephalopathy. Clotting is impaired, not improved."
    }
  ]
});
