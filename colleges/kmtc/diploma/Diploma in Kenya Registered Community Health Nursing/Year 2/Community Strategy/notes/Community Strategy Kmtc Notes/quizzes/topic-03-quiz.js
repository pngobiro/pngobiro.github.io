registerQuiz("topic-03-quiz", {
    "schemaVersion": "1.0",
    "quizId": "topic-03-quiz",
    "metadata": {
        "title": "Liver, Gallbladder & Pancreas Disorders Quiz",
        "description": "Test your understanding of hepatitis, cirrhosis, cholecystitis, and pancreatitis.",
        "topicId": "topic-03",
        "difficulty": "advanced",
        "estimatedTime": 15,
        "passingScore": 70,
        "createdAt": "2025-12-25T00:00:00Z",
        "tags": ["hepatitis", "liver", "pancreas", "gallbladder"]
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
            "question": "Match the Hepatitis type with its transmission mode:",
            "points": 20,
            "pairs": [
                { "id": "p1", "left": "Hepatitis A", "right": "Fecal-oral route (contaminated food/water)" },
                { "id": "p2", "left": "Hepatitis B", "right": "Serum/Blood/Body fluids" },
                { "id": "p3", "left": "Hepatitis C", "right": "Parenteral/Blood (IV drug use)" },
                { "id": "p4", "left": "Hepatitis E", "right": "Water borne (Fecal-oral)" }
            ],
            "explanation": "Hep A and E are fecal-oral (vowels = bowels). Hep B, C, D are blood/body fluid transmitted."
        },
        {
            "id": "q2",
            "type": "image-based",
            "question": "The device shown in the image is used to control bleeding esophageal varices. What is it called?",
            "points": 10,
            "media": {
                "type": "image",
                "url": "../assets/images/image-20251225-0075e59b.jpeg",
                "alt": "Tube with balloons used for esophageal varices",
                "caption": "Figure 4.15"
            },
            "options": [
                { "id": "a", "text": "Miller-Abbott Tube", "isCorrect": false },
                { "id": "b", "text": "Sengstaken-Blakemore Tube", "isCorrect": true },
                { "id": "c", "text": "Cantor Tube", "isCorrect": false },
                { "id": "d", "text": "T-Tube", "isCorrect": false }
            ],
            "explanation": "The Sengstaken-Blakemore tube has esophageal and gastric balloons that apply pressure to varices to stop bleeding."
        },
        {
            "id": "q3",
            "type": "multiple-select",
            "question": "What diet modifications are indicated for a patient with Cirrhosis?",
            "points": 15,
            "options": [
                { "id": "a", "text": "High Calorie, High Carbohydrate", "isCorrect": true },
                { "id": "b", "text": "Low Protein (if hepatic coma is present)", "isCorrect": true },
                { "id": "c", "text": "Restricted Salt (if edema/ascites is present)", "isCorrect": true },
                { "id": "d", "text": "High Fat", "isCorrect": false }
            ],
            "explanation": "Diet should be high calorie/CHO. Protein is limited if coma is pending (ammonia). Salt is restricted for fluid retention. Fat should be moderate."
        },
        {
            "id": "q4",
            "type": "multiple-choice",
            "question": "Turner's sign (bluish flank) and Cullen's sign (bluish umbilicus) are indicative of which condition?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Acute Appendicitis", "isCorrect": false },
                { "id": "b", "text": "Severe Hemorrhagic Pancreatitis", "isCorrect": true },
                { "id": "c", "text": "Cholecystitis", "isCorrect": false },
                { "id": "d", "text": "Peritonitis", "isCorrect": false }
            ],
            "explanation": "These signs indicate retroperitoneal bleeding associated with severe hemorrhagic pancreatitis."
        },
        {
            "id": "q5",
            "type": "fill-blank",
            "question": "The presence of fatty, foul-smelling, bulky stools caused by malabsorption is called ______.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["Steatorrhea", "steatorrhea", "steatorrhoea"], "caseSensitive": false }
            ],
            "explanation": "Steatorrhea is the passage of fat in feces due to malabsorption (lack of bile or pancreatic enzymes)."
        },
        {
            "id": "q6",
            "type": "multiple-choice",
            "question": "Which medication is contraindicated for pain relief in pancreatitis because it may cause spasm of the sphincter of Oddi?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Meperidine", "isCorrect": false },
                { "id": "b", "text": "Morphine", "isCorrect": true },
                { "id": "c", "text": "Acetaminophen", "isCorrect": false },
                { "id": "d", "text": "Aspirin", "isCorrect": false }
            ],
            "explanation": "Morphine can cause spasms of the sphincter of Oddi; Meperidine is typically preferred."
        },
        {
            "id": "q7",
            "type": "multiple-select",
            "question": "Select the correct nursing interventions for a patient with a T-Tube after cholecystectomy:",
            "points": 15,
            "options": [
                { "id": "a", "text": "Avoid kinking the tube", "isCorrect": true },
                { "id": "b", "text": "Secure the drainage bag below waist level", "isCorrect": true },
                { "id": "c", "text": "Clamp the tube continuously", "isCorrect": false },
                { "id": "d", "text": "Apply protective ointment to skin to prevent excoriation", "isCorrect": true }
            ],
            "explanation": "The T-tube drains bile. It must be kept patent (no kinks), below the wound for gravity drainage, and skin must be protected from bile leakage."
        },
        {
            "id": "q8",
            "type": "multiple-choice",
            "question": "Which surgical procedure involves the removal of the head of the pancreas, duodenum, distal stomach, and common bile duct?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Cholecystectomy", "isCorrect": false },
                { "id": "b", "text": "Whipple's Operation", "isCorrect": true },
                { "id": "c", "text": "Billroth II", "isCorrect": false },
                { "id": "d", "text": "Splenectomy", "isCorrect": false }
            ],
            "explanation": "The Whipple's operation (pancreaticoduodenectomy) is the standard surgery for pancreatic cancer or severe pancreatitis confined to the head of the pancreas."
        },
        {
            "id": "q9",
            "type": "true-false",
            "question": "In Hepatitis B, active immunization is achieved through the administration of Immune Globulin.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "Immune Globulin provides PASSIVE immunity. ACTIVE immunity is achieved through the Hepatitis B Vaccine."
        },
        {
            "id": "q10",
            "type": "multiple-choice",
            "question": "What is the primary symptom of Cholecystitis?",
            "points": 10,
            "options": [
                { "id": "a", "text": "Left lower quadrant pain", "isCorrect": false },
                { "id": "b", "text": "Pain in the right upper quadrant radiating to the back", "isCorrect": true },
                { "id": "c", "text": "Bloody diarrhea", "isCorrect": false },
                { "id": "d", "text": "Dysphagia", "isCorrect": false }
            ],
            "explanation": "Inflammation of the gallbladder causes pain in the RUQ, often radiating to the right scapula/back, especially after fatty meals."
        }
    ]
});
