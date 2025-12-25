registerQuiz("comprehensive-exam", {
  "schemaVersion": "1.0",
  "quizId": "comprehensive-exam",
  "metadata": {
    "title": "Comprehensive Final Exam",
    "description": "Assessment covering Physiology, Hepatitis, Cirrhosis, Liver Cancer, and Biliary Disorders.",
    "examType": "comprehensive",
    "topicsCovered": [
      "topic-01-physiology",
      "topic-02-hepatitis",
      "topic-03-cirrhosis",
      "topic-04-cancer-transplant",
      "topic-05-biliary"
    ],
    "difficulty": "advanced",
    "estimatedTime": 45,
    "passingScore": 75,
    "createdAt": "2025-12-25T10:00:00Z",
    "tags": ["final", "comprehensive", "nursing", "hepatic", "biliary"]
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
    // TOPIC 1: PHYSIOLOGY & ASSESSMENT
    {
      "id": "comp-q1",
      "type": "multiple-choice",
      "question": "Which type of jaundice results from an increased breakdown of red blood cells, causing an increase in unconjugated bilirubin?",
      "points": 10,
      "topicId": "topic-01-physiology",
      "topicName": "Physiology & Assessment",
      "options": [
        { "id": "a", "text": "Obstructive jaundice", "isCorrect": false },
        { "id": "b", "text": "Hepatocellular jaundice", "isCorrect": false },
        { "id": "c", "text": "Hemolytic jaundice", "isCorrect": true },
        { "id": "d", "text": "Physiologic jaundice", "isCorrect": false }
      ],
      "explanation": "Hemolytic jaundice occurs with an increase in the breakdown of red blood cells (hemolysis), which causes an increase in the amount of unconjugated bilirubin in the blood."
    },
    {
      "id": "comp-q2",
      "type": "multiple-choice",
      "question": "Clients with liver disease frequently develop jaundice. What is the physiologic cause of this finding?",
      "points": 10,
      "topicId": "topic-01-physiology",
      "topicName": "Physiology & Assessment",
      "options": [
        { "id": "a", "text": "Increased levels of ammonia", "isCorrect": false },
        { "id": "b", "text": "Increased alanine aminotransferase (ALT) level", "isCorrect": false },
        { "id": "c", "text": "Bilirubin levels above 2 mg/dL", "isCorrect": true },
        { "id": "d", "text": "Decreased red blood cell breakdown", "isCorrect": false }
      ],
      "explanation": "Jaundice is a yellowish discoloration of the skin caused by increased levels of bilirubin. Serum bilirubin levels must generally exceed 2 mg/dL for jaundice to become visible."
    },
    {
      "id": "comp-q3",
      "type": "matching",
      "question": "Match the laboratory test with its significance in liver assessment:",
      "points": 15,
      "topicId": "topic-01-physiology",
      "topicName": "Physiology & Assessment",
      "pairs": [
        { "id": "p1", "left": "Serum Ammonia", "right": "Elevated when liver cannot convert it to urea" },
        { "id": "p2", "left": "Serum Albumin", "right": "Decreased levels lead to edema/ascites" },
        { "id": "p3", "left": "Prothrombin Time", "right": "Prolonged when clotting factors are not synthesized" },
        { "id": "p4", "left": "ALT/AST", "right": "Elevated with liver cell damage" }
      ],
      "explanation": "Ammonia builds up when the liver fails to convert it to urea. Albumin maintains oncotic pressure. The liver synthesizes clotting factors (affecting PT). Enzymes (ALT/AST) release when cells are damaged."
    },

    // TOPIC 2: HEPATITIS
    {
      "id": "comp-q4",
      "type": "multiple-choice",
      "question": "The nurse is caring for a client with chronic hepatitis B (HBV). What should be included in the discharge teaching plan?",
      "points": 10,
      "topicId": "topic-02-hepatitis",
      "topicName": "Hepatitis",
      "options": [
        { "id": "a", "text": "Avoid sexual activity until antibodies are present", "isCorrect": true },
        { "id": "b", "text": "Report any clay-colored stools immediately", "isCorrect": false },
        { "id": "c", "text": "Eat a high-fat diet", "isCorrect": false },
        { "id": "d", "text": "Perform daily urine bilirubin checks", "isCorrect": false }
      ],
      "explanation": "Clients with hepatitis B should avoid intimate and sexual contact until antibodies to the HBsAg are present and the client is no longer contagious."
    },
    {
      "id": "comp-q5",
      "type": "multiple-choice",
      "question": "Which of the following analgesic medications would be appropriate for a client with Hepatitis B complaining of a headache?",
      "points": 10,
      "topicId": "topic-02-hepatitis",
      "topicName": "Hepatitis",
      "options": [
        { "id": "a", "text": "Acetaminophen (Tylenol)", "isCorrect": false },
        { "id": "b", "text": "Ibuprofen (Motrin)", "isCorrect": true },
        { "id": "c", "text": "Aspirin", "isCorrect": false },
        { "id": "d", "text": "Percocet", "isCorrect": false }
      ],
      "explanation": "Acetaminophen is hepatotoxic and should be avoided or used with extreme caution in liver disease. Ibuprofen is generally safer for the liver, though bleeding risk should be assessed."
    },
    {
      "id": "comp-q6",
      "type": "fill-blank",
      "question": "Hepatitis A is primarily transmitted via the _______-oral route.",
      "points": 10,
      "topicId": "topic-02-hepatitis",
      "topicName": "Hepatitis",
      "blanks": [
        { "id": "b1", "acceptedAnswers": ["fecal", "faecal"], "caseSensitive": false }
      ],
      "explanation": "Hepatitis A (HAV) is primarily transmitted via the fecal-oral route, often through contaminated food, water, or poor hygiene."
    },

    // TOPIC 3: CIRRHOSIS
    {
      "id": "comp-q7",
      "type": "multiple-choice",
      "question": "What is the primary purpose of administering lactulose to a client with advanced liver disease and encephalopathy?",
      "points": 10,
      "topicId": "topic-03-cirrhosis",
      "topicName": "Hepatic Cirrhosis",
      "options": [
        { "id": "a", "text": "To ensure regular bowel movements", "isCorrect": false },
        { "id": "b", "text": "To prevent bowel obstruction", "isCorrect": false },
        { "id": "c", "text": "To decrease ammonia levels in the blood", "isCorrect": true },
        { "id": "d", "text": "To promote clotting", "isCorrect": false }
      ],
      "explanation": "Lactulose is used to reduce the amount of ammonia in the blood by drawing ammonia from the blood into the colon where it is excreted."
    },
    {
      "id": "comp-q8",
      "type": "multiple-choice",
      "question": "A client with cirrhosis receives neomycin sulfate. The nurse understands this medication is given to:",
      "points": 10,
      "topicId": "topic-03-cirrhosis",
      "topicName": "Hepatic Cirrhosis",
      "options": [
        { "id": "a", "text": "Decrease gastric acidity", "isCorrect": false },
        { "id": "b", "text": "Acidify feces and trap ammonia", "isCorrect": false },
        { "id": "c", "text": "Decrease bacterial flora in the intestine", "isCorrect": true },
        { "id": "d", "text": "Reduce portal hypertension", "isCorrect": false }
      ],
      "explanation": "Neomycin is a nonabsorbable antibiotic that decreases the normal flora in the intestines, thereby reducing bacterial action on protein which produces ammonia."
    },
    {
      "id": "comp-q9",
      "type": "multiple-choice",
      "question": "The nurse observes a client with liver disease unable to hold their hands out steady, exhibiting a 'flapping' tremor. This finding is documented as:",
      "points": 10,
      "topicId": "topic-03-cirrhosis",
      "topicName": "Hepatic Cirrhosis",
      "options": [
        { "id": "a", "text": "Apraxia", "isCorrect": false },
        { "id": "b", "text": "Asterixis", "isCorrect": true },
        { "id": "c", "text": "Fetor hepaticus", "isCorrect": false },
        { "id": "d", "text": "Ascites", "isCorrect": false }
      ],
      "explanation": "Asterixis, or 'liver flap', is a flapping tremor of the hands often seen in hepatic encephalopathy."
    },
    {
      "id": "comp-q10",
      "type": "multiple-choice",
      "question": "After administering diuretics to a client with ascites, which nursing action best ensures safe care?",
      "points": 10,
      "topicId": "topic-03-cirrhosis",
      "topicName": "Hepatic Cirrhosis",
      "options": [
        { "id": "a", "text": "Monitoring serum potassium for hyperkalemia", "isCorrect": false },
        { "id": "b", "text": "Weighing the client weekly", "isCorrect": false },
        { "id": "c", "text": "Monitoring fluid status for hypovolemia", "isCorrect": true },
        { "id": "d", "text": "Restricting protein intake", "isCorrect": false }
      ],
      "explanation": "Diuretics can cause rapid fluid shifts. Monitoring for hypovolemia (and electrolyte imbalances like hypokalemia, not hyperkalemia unless spironolactone is used alone) is critical."
    },

    // TOPIC 4: CANCER & TRANSPLANT
    {
      "id": "comp-q11",
      "type": "true-false",
      "question": "Primary liver cancer is more common than metastatic liver cancer.",
      "points": 5,
      "topicId": "topic-04-cancer-transplant",
      "topicName": "Liver Cancer & Transplant",
      "correctAnswer": false,
      "explanation": "Primary cancer of the liver is rare. Metastatic cancer is much more common because of the liver's high blood flow and capillary network."
    },
    {
      "id": "comp-q12",
      "type": "multiple-choice",
      "question": "What is a critical nursing assessment for a client in the first 2 months following a liver transplant?",
      "points": 10,
      "topicId": "topic-04-cancer-transplant",
      "topicName": "Liver Cancer & Transplant",
      "options": [
        { "id": "a", "text": "Monitoring for severe rejection, which is very common", "isCorrect": false },
        { "id": "b", "text": "Monitoring for infection, as fever may be the only sign", "isCorrect": true },
        { "id": "c", "text": "Checking for hypoglycemia", "isCorrect": false },
        { "id": "d", "text": "Assessing for rapid weight loss", "isCorrect": false }
      ],
      "explanation": "It is critical to monitor for infection in the first 2 months post-transplant due to immunosuppression; fever may be the only clinical sign."
    },

    // TOPIC 5: BILIARY DISORDERS
    {
      "id": "comp-q13",
      "type": "multiple-choice",
      "question": "A client returns to the room after a liver biopsy. How should the nurse position the client?",
      "points": 10,
      "topicId": "topic-05-biliary",
      "topicName": "Biliary Tract Disorders",
      "options": [
        { "id": "a", "text": "On the left side to promote drainage", "isCorrect": false },
        { "id": "b", "text": "Supine with legs elevated", "isCorrect": false },
        { "id": "c", "text": "On the right side with a pillow under the costal margin", "isCorrect": true },
        { "id": "d", "text": "High Fowler's position", "isCorrect": false }
      ],
      "explanation": "The client should be positioned on the right side for 2 hours post-procedure to apply pressure to the liver site and decrease the risk for hemorrhage."
    },
    {
      "id": "comp-q14",
      "type": "multiple-choice",
      "question": "A client who underwent a cholecystectomy 3 days ago has a T-tube that has stopped draining. What is the best nursing action?",
      "points": 10,
      "topicId": "topic-05-biliary",
      "topicName": "Biliary Tract Disorders",
      "options": [
        { "id": "a", "text": "Flush the tube with 5 mL of normal saline", "isCorrect": false },
        { "id": "b", "text": "Assess for tube placement and kinks", "isCorrect": true },
        { "id": "c", "text": "Clamp the tube immediately", "isCorrect": false },
        { "id": "d", "text": "Raise the drainage bag above the waist", "isCorrect": false }
      ],
      "explanation": "The nurse should observe for kinks or assess placement. One should NOT irrigate or clamp the tube without a specific order."
    },
    {
      "id": "comp-q15",
      "type": "multiple-choice",
      "question": "Why is Vitamin K often prescribed before surgery for biliary obstruction?",
      "points": 10,
      "topicId": "topic-05-biliary",
      "topicName": "Biliary Tract Disorders",
      "options": [
        { "id": "a", "text": "To increase digestion of fats", "isCorrect": false },
        { "id": "b", "text": "To aid in emptying the gallbladder", "isCorrect": false },
        { "id": "c", "text": "To facilitate coagulation activities of the blood", "isCorrect": true },
        { "id": "d", "text": "To reduce risk of infection", "isCorrect": false }
      ],
      "explanation": "Vitamin K is necessary for the synthesis of prothrombin. In biliary obstruction, Vitamin K absorption is impaired, leading to bleeding risks."
    },
    {
      "id": "comp-q16",
      "type": "multiple-choice",
      "question": "Following a laparoscopic cholecystectomy, a client complains of shoulder pain. The nurse recognizes this is likely caused by:",
      "points": 10,
      "topicId": "topic-05-biliary",
      "topicName": "Biliary Tract Disorders",
      "options": [
        { "id": "a", "text": "Surgical injury to the shoulder", "isCorrect": false },
        { "id": "b", "text": "Referred pain from CO2 gas irritating the diaphragm", "isCorrect": true },
        { "id": "c", "text": "Poor positioning during surgery", "isCorrect": false },
        { "id": "d", "text": "Cardiac complications", "isCorrect": false }
      ],
      "explanation": "A common post-op problem is referred pain to the shoulder due to CO2 used during surgery that was not released, irritating the phrenic nerve and diaphragm."
    }
  ]
});