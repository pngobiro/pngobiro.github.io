registerQuiz("comprehensive-exam", {
  "schemaVersion": "1.0",
  "quizId": "comprehensive-exam",
  "metadata": {
    "title": "Comprehensive Final Exam",
    "description": "Comprehensive assessment covering Anatomy, Oral Disorders, Gastritis, Peptic Ulcers, Obstruction, Appendicitis, Peritonitis, Colorectal Disorders, and Hepatic Cirrhosis.",
    "examType": "comprehensive",
    "topicsCovered": [
      "topic-01-anatomy",
      "topic-02-oral-disorders",
      "topic-03-gastritis",
      "topic-04-peptic-ulcer",
      "topic-05-obstruction-appendicitis",
      "topic-06-peritonitis",
      "topic-07-colorectal",
      "topic-08-hepatic"
    ],
    "difficulty": "advanced",
    "estimatedTime": 60,
    "passingScore": 75,
    "createdAt": "2025-12-25T00:00:00Z",
    "tags": ["final", "comprehensive", "all-topics", "git", "nursing"]
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
    // TOPIC 1: ANATOMY
    {
      "id": "anat-q1",
      "type": "multiple-choice",
      "question": "What is the approximate length of the gastrointestinal tract (GIT)?",
      "points": 1,
      "topicId": "topic-01-anatomy",
      "topicName": "Anatomy of the GIT",
      "options": [
        { "id": "a", "text": "10 – 12 feet (3m – 3.6m)", "isCorrect": false },
        { "id": "b", "text": "23 – 26 feet (7m – 7.9m)", "isCorrect": true },
        { "id": "c", "text": "15 – 18 feet (4.5m – 5.5m)", "isCorrect": false },
        { "id": "d", "text": "30 – 35 feet (9m – 10.5m)", "isCorrect": false }
      ],
      "explanation": "The GIT is approximately 23 – 26 feet long (7m – 7.9m), extending from the mouth to the anus."
    },
    {
      "id": "anat-q2",
      "type": "multiple-select",
      "question": "Which of the following are functions of saliva? (Select all that apply)",
      "points": 1,
      "topicId": "topic-01-anatomy",
      "topicName": "Anatomy of the GIT",
      "options": [
        { "id": "a", "text": "Lubricating mucous membranes", "isCorrect": true },
        { "id": "b", "text": "Digesting proteins via pepsin", "isCorrect": false },
        { "id": "c", "text": "Cleaning effect by washing away debris", "isCorrect": true },
        { "id": "d", "text": "Antibacterial effect", "isCorrect": true },
        { "id": "e", "text": "Absorption of Vitamin B12", "isCorrect": false }
      ],
      "explanation": "Saliva lubricates, cleans, has antibacterial effects, and contains amylase for carbohydrate digestion. Pepsin is gastric, and B12 absorption requires intrinsic factor in the stomach/ileum."
    },
    {
      "id": "anat-q3",
      "type": "matching",
      "question": "Match the part of the GIT with its primary function or feature:",
      "points": 1,
      "topicId": "topic-01-anatomy",
      "topicName": "Anatomy of the GIT",
      "pairs": [
        { "id": "p1", "left": "Stomach", "right": "Secretes Intrinsic Factor & HCl" },
        { "id": "p2", "left": "Small Intestine", "right": "Major site of nutrient absorption" },
        { "id": "p3", "left": "Ileocecal Valve", "right": "Prevents reflux of bacteria into small intestine" },
        { "id": "p4", "left": "Oesophagus", "right": "Transports bolus via peristalsis" }
      ]
    },

    // TOPIC 2: ORAL DISORDERS
    {
      "id": "oral-q1",
      "type": "multiple-choice",
      "question": "Which microorganism is primarily responsible for Oral Thrush?",
      "points": 1,
      "topicId": "topic-02-oral-disorders",
      "topicName": "Oral & Dental Disorders",
      "options": [
        { "id": "a", "text": "Streptococcus mutans", "isCorrect": false },
        { "id": "b", "text": "Candida albicans", "isCorrect": true },
        { "id": "c", "text": "Helicobacter pylori", "isCorrect": false },
        { "id": "d", "text": "Herpes simplex", "isCorrect": false }
      ],
      "explanation": "Oral thrush is a fungal infection caused by the accumulation of Candida albicans."
    },
    {
      "id": "oral-q2",
      "type": "true-false",
      "question": "Gingivitis is a destructive periodontal disease that inevitably leads to bone loss.",
      "points": 1,
      "topicId": "topic-02-oral-disorders",
      "topicName": "Oral & Dental Disorders",
      "correctAnswer": false,
      "explanation": "Gingivitis is inflammation of the gums and is non-destructive. However, if untreated, it can progress to Periodontitis, which involves bone loss."
    },
    {
      "id": "oral-q3",
      "type": "matching",
      "question": "Match the stomatitis type to its description:",
      "points": 1,
      "topicId": "topic-02-oral-disorders",
      "topicName": "Oral & Dental Disorders",
      "pairs": [
        { "id": "p1", "left": "Canker Sore", "right": "Single pale ulcer with red outer ring" },
        { "id": "p2", "left": "Cold Sore", "right": "Fluid-filled blisters, often associated with flu symptoms" },
        { "id": "p3", "left": "Gingivitis", "right": "Red, puffy gums that bleed easily" },
        { "id": "p4", "left": "Periapical Abscess", "right": "Collection of pus at the root of a tooth" }
      ]
    },

    // TOPIC 3: GASTRITIS
    {
      "id": "gas-q1",
      "type": "multiple-select",
      "question": "Which of the following are common causes of Chronic Gastritis? (Select all that apply)",
      "points": 1,
      "topicId": "topic-03-gastritis",
      "topicName": "Gastritis",
      "options": [
        { "id": "a", "text": "Helicobacter pylori infection", "isCorrect": true },
        { "id": "b", "text": "Pernicious anaemia (Autoimmune)", "isCorrect": true },
        { "id": "c", "text": "Ingestion of strong alkali (Corrosive)", "isCorrect": false },
        { "id": "d", "text": "Chronic reflux of pancreatic secretions", "isCorrect": true }
      ],
      "explanation": "Ingestion of strong corrosive agents typically causes acute gastritis. H. pylori, autoimmunity, and chronic reflux are causes of chronic gastritis."
    },
    {
      "id": "gas-q2",
      "type": "multiple-choice",
      "question": "In the surgical management of gastric disorders, what is a Billroth I procedure?",
      "points": 1,
      "topicId": "topic-03-gastritis",
      "topicName": "Gastritis",
      "options": [
        { "id": "a", "text": "Anastomosis of stomach remnant to the jejunum", "isCorrect": false },
        { "id": "b", "text": "Anastomosis of stomach remnant to the duodenum", "isCorrect": true },
        { "id": "c", "text": "Total removal of the stomach", "isCorrect": false },
        { "id": "d", "text": "Cutting the vagus nerve only", "isCorrect": false }
      ],
      "explanation": "Billroth I (Gastroduodenostomy) involves connecting the gastric remnant to the duodenum. Billroth II connects to the jejunum."
    },
    {
      "id": "gas-q3",
      "type": "fill-blank",
      "question": "Chronic gastritis may lead to the malabsorption of Vitamin __1__, resulting in pernicious anaemia.",
      "points": 1,
      "topicId": "topic-03-gastritis",
      "topicName": "Gastritis",
      "blanks": [
        { "id": "1", "acceptedAnswers": ["B12", "B-12", "b12"], "caseSensitive": false }
      ],
      "explanation": "Loss of parietal cells in chronic gastritis reduces Intrinsic Factor, which is necessary for Vitamin B12 absorption."
    },

    // TOPIC 4: PEPTIC ULCER
    {
      "id": "pud-q1",
      "type": "true-false",
      "question": "Pain from a duodenal ulcer is usually relieved by eating.",
      "points": 1,
      "topicId": "topic-04-peptic-ulcer",
      "topicName": "Peptic Ulcer Disease",
      "correctAnswer": true,
      "explanation": "Duodenal ulcer pain is typically relieved by food because food neutralizes the acid. The pain often returns 2-3 hours later when the stomach empties."
    },
    {
      "id": "pud-q2",
      "type": "multiple-choice",
      "question": "What is the classic presentation of Zollinger-Ellison Syndrome (ZES)?",
      "points": 1,
      "topicId": "topic-04-peptic-ulcer",
      "topicName": "Peptic Ulcer Disease",
      "options": [
        { "id": "a", "text": "Hyposecretion of acid and gastric atrophy", "isCorrect": false },
        { "id": "b", "text": "Severe peptic ulcers, extreme hyperacidity, and gastrin-secreting tumors", "isCorrect": true },
        { "id": "c", "text": "Acute mucosal ulceration following burns", "isCorrect": false },
        { "id": "d", "text": "Autoimmune destruction of parietal cells", "isCorrect": false }
      ],
      "explanation": "ZES involves gastrinomas (usually in pancreas) secreting excess gastrin, causing extreme hyperacidity and intractable ulcers."
    },
    {
      "id": "pud-q3",
      "type": "multiple-choice",
      "question": "Which triple therapy regimen is commonly used to treat H. pylori?",
      "points": 1,
      "topicId": "topic-04-peptic-ulcer",
      "topicName": "Peptic Ulcer Disease",
      "options": [
        { "id": "a", "text": "PPI + Metronidazole + Tetracycline", "isCorrect": false },
        { "id": "b", "text": "PPI + Clarithromycin + Amoxicillin (or Metronidazole)", "isCorrect": true },
        { "id": "c", "text": "H2 Blocker + Antacid + Sucralfate", "isCorrect": false },
        { "id": "d", "text": "Bismuth + Tetracycline + Metronidazole", "isCorrect": false }
      ],
      "explanation": "Standard triple therapy consists of a PPI and two antibiotics, typically Clarithromycin and Amoxicillin (or Metronidazole)."
    },

    // TOPIC 5: OBSTRUCTION & APPENDICITIS
    {
      "id": "obs-q1",
      "type": "matching",
      "question": "Classify the following causes of intestinal obstruction:",
      "points": 1,
      "topicId": "topic-05-obstruction-appendicitis",
      "topicName": "Obstruction & Appendicitis",
      "pairs": [
        { "id": "p1", "left": "Adhesions", "right": "Mechanical Obstruction" },
        { "id": "p2", "left": "Hernia", "right": "Mechanical Obstruction" },
        { "id": "p3", "left": "Amyloidosis/Muscular Dystrophy", "right": "Functional Obstruction" },
        { "id": "p4", "left": "Intussusception", "right": "Mechanical Obstruction" }
      ]
    },
    {
      "id": "obs-q2",
      "type": "multiple-choice",
      "question": "Where is McBurney's point located?",
      "points": 1,
      "topicId": "topic-05-obstruction-appendicitis",
      "topicName": "Obstruction & Appendicitis",
      "options": [
        { "id": "a", "text": "Left Lower Quadrant", "isCorrect": false },
        { "id": "b", "text": "Right Upper Quadrant", "isCorrect": false },
        { "id": "c", "text": "Right Lower Quadrant", "isCorrect": true },
        { "id": "d", "text": "Epigastric Region", "isCorrect": false }
      ],
      "explanation": "McBurney's point is in the Right Lower Quadrant (RLQ) and is the classic site of tenderness in appendicitis."
    },
    {
      "id": "obs-q3",
      "type": "multiple-select",
      "question": "Which of the following are signs of a perforated appendix? (Select all that apply)",
      "points": 1,
      "topicId": "topic-05-obstruction-appendicitis",
      "topicName": "Obstruction & Appendicitis",
      "options": [
        { "id": "a", "text": "Toxic appearance", "isCorrect": true },
        { "id": "b", "text": "Fever ≥ 37.7°C (100°F)", "isCorrect": true },
        { "id": "c", "text": "Sudden relief of pain followed by increased pain", "isCorrect": true },
        { "id": "d", "text": "Hyperactive bowel sounds", "isCorrect": false }
      ],
      "explanation": "Perforation typically presents with fever, toxicity, and peritonitis. Bowel sounds are usually diminished or absent (paralytic ileus) rather than hyperactive."
    },
    {
      "id": "obs-q4",
      "type": "true-false",
      "question": "Laxatives or enemas should be administered to relieve constipation in a patient with suspected appendicitis.",
      "points": 1,
      "topicId": "topic-05-obstruction-appendicitis",
      "topicName": "Obstruction & Appendicitis",
      "correctAnswer": false,
      "explanation": "Laxatives and enemas are CONTRAINDICATED as they may cause perforation of the inflamed appendix."
    },

    // TOPIC 6: PERITONITIS
    {
      "id": "peri-q1",
      "type": "multiple-choice",
      "question": "Which of the following is a classic sign of peritonitis?",
      "points": 1,
      "topicId": "topic-06-peritonitis",
      "topicName": "Peritonitis",
      "options": [
        { "id": "a", "text": "Soft, non-tender abdomen", "isCorrect": false },
        { "id": "b", "text": "Rigid, board-like abdomen", "isCorrect": true },
        { "id": "c", "text": "Bradycardia", "isCorrect": false },
        { "id": "d", "text": "Polyuria", "isCorrect": false }
      ],
      "explanation": "A rigid, board-like abdomen is a hallmark sign of peritonitis due to muscle spasm guarding the inflamed peritoneum."
    },
    {
      "id": "peri-q2",
      "type": "multiple-choice",
      "question": "What is the major cause of death from peritonitis?",
      "points": 1,
      "topicId": "topic-06-peritonitis",
      "topicName": "Peritonitis",
      "options": [
        { "id": "a", "text": "Dehydration", "isCorrect": false },
        { "id": "b", "text": "Sepsis", "isCorrect": true },
        { "id": "c", "text": "Pain", "isCorrect": false },
        { "id": "d", "text": "Adhesions", "isCorrect": false }
      ],
      "explanation": "Sepsis (septicemia) is the major cause of death, often leading to septic shock."
    },
    {
      "id": "peri-q3",
      "type": "multiple-choice",
      "question": "Which position is recommended for a patient with peritonitis to decrease tension on abdominal organs?",
      "points": 1,
      "topicId": "topic-06-peritonitis",
      "topicName": "Peritonitis",
      "options": [
        { "id": "a", "text": "Supine with legs extended", "isCorrect": false },
        { "id": "b", "text": "Side-lying with knees flexed", "isCorrect": true },
        { "id": "c", "text": "Prone", "isCorrect": false },
        { "id": "d", "text": "Trendelenburg", "isCorrect": false }
      ],
      "explanation": "Placing the patient on the side with knees flexed helps relax the abdominal muscles and reduce tension/pain."
    },

    // TOPIC 7: COLORECTAL
    {
      "id": "col-q1",
      "type": "multiple-choice",
      "question": "Which symptom is most commonly associated with rectal cancer lesions?",
      "points": 1,
      "topicId": "topic-07-colorectal",
      "topicName": "Colorectal Disorders",
      "options": [
        { "id": "a", "text": "Melena (black tarry stools)", "isCorrect": false },
        { "id": "b", "text": "Tenesmus (ineffective painful straining)", "isCorrect": true },
        { "id": "c", "text": "Dull abdominal pain", "isCorrect": false },
        { "id": "d", "text": "Nausea and vomiting", "isCorrect": false }
      ],
      "explanation": "Tenesmus, rectal pain, and a feeling of incomplete evacuation are classic symptoms of rectal lesions."
    },
    {
      "id": "col-q2",
      "type": "matching",
      "question": "Match the type of haemorrhoid with its characteristics:",
      "points": 1,
      "topicId": "topic-07-colorectal",
      "topicName": "Colorectal Disorders",
      "pairs": [
        { "id": "p1", "left": "Internal Haemorrhoid", "right": "Usually painless until they bleed or prolapse" },
        { "id": "p2", "left": "External Haemorrhoid", "right": "Associated with severe pain, inflammation, and thrombosis" }
      ]
    },
    {
      "id": "col-q3",
      "type": "multiple-select",
      "question": "Which of the following are risk factors for Colorectal Cancer? (Select all that apply)",
      "points": 1,
      "topicId": "topic-07-colorectal",
      "topicName": "Colorectal Disorders",
      "options": [
        { "id": "a", "text": "High alcohol consumption", "isCorrect": true },
        { "id": "b", "text": "History of Inflammatory Bowel Disease (IBD)", "isCorrect": true },
        { "id": "c", "text": "High-fiber diet", "isCorrect": false },
        { "id": "d", "text": "Family history of polyps", "isCorrect": true }
      ],
      "explanation": "Alcohol, IBD, family history, and low-fiber/high-fat diets are risk factors. A high-fiber diet is protective."
    },

    // TOPIC 8: HEPATIC
    {
      "id": "hep-q1",
      "type": "matching",
      "question": "Match the type of Cirrhosis with its primary cause:",
      "points": 1,
      "topicId": "topic-08-hepatic",
      "topicName": "Hepatic Cirrhosis",
      "pairs": [
        { "id": "p1", "left": "Alcoholic Cirrhosis", "right": "Chronic alcohol abuse" },
        { "id": "p2", "left": "Post-necrotic Cirrhosis", "right": "Late result of acute viral hepatitis" },
        { "id": "p3", "left": "Biliary Cirrhosis", "right": "Chronic biliary obstruction/infection" }
      ]
    },
    {
      "id": "hep-q2",
      "type": "multiple-choice",
      "question": "What is the primary cause of Portal Hypertension?",
      "points": 1,
      "topicId": "topic-08-hepatic",
      "topicName": "Hepatic Cirrhosis",
      "options": [
        { "id": "a", "text": "Kidney failure", "isCorrect": false },
        { "id": "b", "text": "Blockage of blood flow through the liver (e.g., Cirrhosis)", "isCorrect": true },
        { "id": "c", "text": "Low blood pressure", "isCorrect": false },
        { "id": "d", "text": "Gallstones", "isCorrect": false }
      ],
      "explanation": "Scar tissue in cirrhosis blocks blood flow through the liver, increasing pressure in the portal vein."
    },
    {
      "id": "hep-q3",
      "type": "multiple-select",
      "question": "Which of the following are signs of Decompensated Cirrhosis? (Select all that apply)",
      "points": 1,
      "topicId": "topic-08-hepatic",
      "topicName": "Hepatic Cirrhosis",
      "options": [
        { "id": "a", "text": "Ascites", "isCorrect": true },
        { "id": "b", "text": "Jaundice", "isCorrect": true },
        { "id": "c", "text": "Vague morning indigestion", "isCorrect": false },
        { "id": "d", "text": "Muscle wasting", "isCorrect": true }
      ],
      "explanation": "Ascites, jaundice, and muscle wasting are signs of decompensation (liver failure). Vague indigestion is more common in compensated cirrhosis."
    },
    {
      "id": "hep-q4",
      "type": "true-false",
      "question": "Protein intake should be restricted in all patients with cirrhosis.",
      "points": 1,
      "topicId": "topic-08-hepatic",
      "topicName": "Hepatic Cirrhosis",
      "correctAnswer": false,
      "explanation": "Protein restriction is typically required ONLY if the patient exhibits signs of encephalopathy (confusion) to reduce ammonia production."
    },
    {
      "id": "hep-q5",
      "type": "multiple-choice",
      "question": "Which procedure involves placing a stent in the liver to connect the portal vein to the hepatic vein, reducing portal hypertension?",
      "points": 1,
      "topicId": "topic-08-hepatic",
      "topicName": "Hepatic Cirrhosis",
      "options": [
        { "id": "a", "text": "Sclerotherapy", "isCorrect": false },
        { "id": "b", "text": "TIPS (Transjugular Intrahepatic Portosystemic Shunt)", "isCorrect": true },
        { "id": "c", "text": "Paracentesis", "isCorrect": false },
        { "id": "d", "text": "Banding", "isCorrect": false }
      ],
      "explanation": "TIPS is a radiological procedure that creates a shunt within the liver to bypass the blockage and lower portal pressure."
    }
  ]
});