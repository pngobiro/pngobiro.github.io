registerQuiz("topic-02-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-02-quiz",
    "metadata": {
        "title": "Stomach & Intestinal Disorders Quiz",
        "description": "Assessment on gastritis, ulcers, IBD (Crohn's/Colitis), appendicitis, and bowel obstruction.",
        "topicId": "topic-02",
        "difficulty": "intermediate",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2025-12-25T00:00:00Z",
        "tags": ["gastritis", "ulcers", "crohns", "colitis", "appendicitis"]
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
            "type": "matching",
            "question": "Differentiate between Gastric and Duodenal Ulcers:",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Gastric Ulcer Pain", "right": "1-1.5 hrs after eating" },
                { "id": "p2", "left": "Duodenal Ulcer Pain", "right": "2-4 hrs after eating; relieved by eating" },
                { "id": "p3", "left": "Gastric Ulcer Vomiting", "right": "Common" },
                { "id": "p4", "left": "Duodenal Ulcer Nourishment", "right": "Usually well-nourished" }
            ],
            "explanation": "Gastric ulcer pain occurs shortly after meals and isn't relieved by food. Duodenal pain occurs later (or at night) and is often relieved by eating, leading to weight gain/good nourishment."
        },
        {
            "id": "q2",
            "type": "multiple-choice",
            "question": "What is 'Dumping Syndrome'?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Regurgitation of food into the esophagus", "isCorrect": false },
                { "id": "b", "text": "Rapid passage of hypertonic food from stomach to jejunum", "isCorrect": true },
                { "id": "c", "text": "Blockage of the large intestine", "isCorrect": false },
                { "id": "d", "text": "Excessive secretion of gastric acid", "isCorrect": false }
            ],
            "explanation": "Dumping syndrome occurs after gastric resection when food passes too quickly into the jejunum, drawing fluid from the blood and causing faintness/diaphoresis."
        },
        {
            "id": "q3",
            "type": "image-based",
            "question": "Identify the surgical procedure shown in diagram (a):",
            "points": 10,
            "media": {
                "type": "image",
                "url": "../assets/images/image-20251225-593e61bd.jpeg",
                "alt": "Diagram of stomach surgery attaching stomach to duodenum",
                "caption": "Figure 4.6(a)"
            },
            "options": [
                { "id": "a", "text": "Billroth I (Gastroduodenostomy)", "isCorrect": true },
                { "id": "b", "text": "Billroth II (Gastrojejunostomy)", "isCorrect": false },
                { "id": "c", "text": "Vagotomy", "isCorrect": false },
                { "id": "d", "text": "Total Gastrectomy", "isCorrect": false }
            ],
            "explanation": "Billroth I (Gastroduodenostomy) involves removal of the lower stomach and attachment of the remainder to the duodenum."
        },
        {
            "id": "q4",
            "type": "multiple-select",
            "question": "Which of the following are characteristic of Crohn's Disease? (Select all that apply)",
            "points": 15,
            "options": [
                { "id": "a", "text": "Continuous, diffuse involvement", "isCorrect": false },
                { "id": "b", "text": "Cobblestone mucosal appearance", "isCorrect": true },
                { "id": "c", "text": "Affects mainly terminal ileum", "isCorrect": true },
                { "id": "d", "text": "Bloody stools are very common", "isCorrect": false },
                { "id": "e", "text": "Segmental involvement (skip lesions)", "isCorrect": true }
            ],
            "explanation": "Crohn's features 'cobblestone' appearance, segmental involvement, and affects the ileum. Ulcerative colitis is continuous and bloody stools are more common."
        },
        {
            "id": "q5",
            "type": "multiple-choice",
            "question": "Where is pain localized in acute appendicitis?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Left Upper Quadrant", "isCorrect": false },
                { "id": "b", "text": "Epigastric region only", "isCorrect": false },
                { "id": "c", "text": "McBurney's Point (Right Lower Quadrant)", "isCorrect": true },
                { "id": "d", "text": "Hypogastric region", "isCorrect": false }
            ],
            "explanation": "Pain in appendicitis often starts in the epigastrium but localizes to McBurney's point (midway between the anterior superior iliac crest and umbilicus)."
        },
        {
            "id": "q6",
            "type": "fill-blank",
            "question": "A condition in which one part of the intestine becomes pushed or invaginated into another part beyond is called ______.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["Intussusception", "intussusception"], "caseSensitive": false }
            ],
            "explanation": "Intussusception is the telescoping of the bowel on itself, causing obstruction."
        },
        {
            "id": "q7",
            "type": "true-false",
            "question": "In a patient with a strangulated hernia, vomiting and abdominal distension are common signs.",
            "points": 5,
            "correctAnswer": true,
            "explanation": "Strangulation cuts off blood supply and causes obstruction, leading to vomiting, distension, and severe pain."
        },
        {
            "id": "q8",
            "type": "multiple-choice",
            "question": "Which diet is recommended during the acute phase of Diverticulitis?",
            "points": 10,
            "options": [
                { "id": "a", "text": "High fiber diet", "isCorrect": false },
                { "id": "b", "text": "NPO (Nothing by mouth) or clear liquids", "isCorrect": true },
                { "id": "c", "text": "High fat diet", "isCorrect": false },
                { "id": "d", "text": "Raw fruits and vegetables", "isCorrect": false }
            ],
            "explanation": "During the acute phase, the colon needs rest (NPO or low residue). High fiber is recommended only *after* recovery to prevent recurrence."
        },
        {
            "id": "q9",
            "type": "multiple-choice",
            "question": "What is a board-like abdomen a sign of?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Gastritis", "isCorrect": false },
                { "id": "b", "text": "Peritonitis", "isCorrect": true },
                { "id": "c", "text": "Haemorrhoids", "isCorrect": false },
                { "id": "d", "text": "Hiatus Hernia", "isCorrect": false }
            ],
            "explanation": "A rigid, board-like abdomen is a classic sign of peritonitis (inflammation of the peritoneum)."
        },
        {
            "id": "q10",
            "type": "multiple-select",
            "question": "Select the correct care instructions for a Miller-Abbott tube:",
            "points": 15,
            "options": [
                { "id": "a", "text": "Tape it tightly to the nose", "isCorrect": false },
                { "id": "b", "text": "Do not tape to nose; allow it to move with peristalsis", "isCorrect": true },
                { "id": "c", "text": "Position patient on right side to facilitate passage", "isCorrect": true },
                { "id": "d", "text": "Irrigate as ordered to maintain patency", "isCorrect": true }
            ],
            "explanation": "Intestinal tubes like the Miller-Abbott must advance with peristalsis, so they should not be taped to the nose initially. Right side positioning helps passage through the pylorus."
        },
        {
            "id": "q11",
            "type": "matching",
            "question": "Match the rectal disorder to its description:",
            "points": 15,
            "pairs": [
                { "id": "p1", "left": "Haemorrhoids", "right": "Varicosities of lower rectum/anus" },
                { "id": "p2", "left": "Rectal Fissure", "right": "Ulceration/crack in anal lining" },
                { "id": "p3", "left": "Rectal Fistula", "right": "Abnormal sinus tract connecting cavities" }
            ],
            "explanation": "Haemorrhoids are veins, Fissures are cracks/ulcers, and Fistulas are abnormal tunnels/tracts."
        },
        {
            "id": "q12",
            "type": "multiple-choice",
            "question": "What is the recommended position for a patient with a food blockage in an ileostomy?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Supine", "isCorrect": false },
                { "id": "b", "text": "Knee-chest position", "isCorrect": true },
                { "id": "c", "text": "Standing", "isCorrect": false },
                { "id": "d", "text": "High Fowler's", "isCorrect": false }
            ],
            "explanation": "The knee-chest position combined with gentle massage below the stoma helps relieve food blockage in an ileostomy."
        }
    ]
});
