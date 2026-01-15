registerQuiz("comprehensive-exam", {
    "schemaVersion": "1.0",
    "quizId": "comprehensive-exam",
    "metadata": {
        "title": "Clinical Dermatology Comprehensive Exam",
        "description": "Final assessment covering Infections, Bites & Infestations, Pediatric Dermatology, and Benign Neoplasms.",
        "examType": "comprehensive",
        "topicsCovered": [
            "chapter-11-infections",
            "chapter-12-bites",
            "chapter-13-pediatric",
            "chapter-14-neoplasms"
        ],
        "difficulty": "advanced",
        "estimatedTime": 60,
        "passingScore": 75,
        "createdAt": "2025-12-25T17:00:00Z",
        "tags": ["final", "comprehensive", "dermatology", "clinical"]
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
        // --- Chapter 11: Infections ---
        {
            "id": "ch11-q1",
            "type": "multiple-choice",
            "question": "The infectious organism that causes impetigo is:",
            "points": 1,
            "topicId": "chapter-11-infections",
            "topicName": "Infections",
            "options": [
                { "id": "a", "text": "Staphylococcus aureus", "isCorrect": false },
                { "id": "b", "text": "Streptococcus", "isCorrect": false },
                { "id": "c", "text": "Enterobacter", "isCorrect": false },
                { "id": "d", "text": "Both Staphylococcus aureus and Streptococcus", "isCorrect": true },
                { "id": "e", "text": "None of the above", "isCorrect": false }
            ],
            "explanation": "Impetigo is a common, contagious, superficial skin infection caused by streptococci, staphylococci, or both."
        },
        {
            "id": "ch11-q2",
            "type": "multiple-choice",
            "question": "Impetigo can spread via:",
            "points": 1,
            "topicId": "chapter-11-infections",
            "topicName": "Infections",
            "options": [
                { "id": "a", "text": "Fingers", "isCorrect": false },
                { "id": "b", "text": "Towels", "isCorrect": false },
                { "id": "c", "text": "Clothing", "isCorrect": false },
                { "id": "d", "text": "All of the above", "isCorrect": true }
            ],
            "explanation": "Impetigo is highly contagious and can spread via direct contact (fingers) or fomites (towels, clothing)."
        },
        {
            "id": "ch11-q3",
            "type": "multiple-choice",
            "question": "Diagnostic tests for a patient with a suspected cellulitis include a complete blood count demonstrating increased:",
            "points": 1,
            "topicId": "chapter-11-infections",
            "topicName": "Infections",
            "options": [
                { "id": "a", "text": "Neutrophils", "isCorrect": true },
                { "id": "b", "text": "Monocytes", "isCorrect": false },
                { "id": "c", "text": "Lymphocytes", "isCorrect": false },
                { "id": "d", "text": "Eosinophils", "isCorrect": false }
            ],
            "explanation": "Cellulitis typically presents with mild leukocytosis with an increase in neutrophils."
        },
        {
            "id": "ch11-q4",
            "type": "multiple-choice",
            "question": "A superficial bacterial infection of the skin in an intertriginous area describes:",
            "points": 1,
            "topicId": "chapter-11-infections",
            "topicName": "Infections",
            "options": [
                { "id": "a", "text": "Ecthyma", "isCorrect": false },
                { "id": "b", "text": "Erythrasma", "isCorrect": true },
                { "id": "c", "text": "Erysipelas", "isCorrect": false }
            ],
            "explanation": "Erythrasma is a superficial bacterial infection (Corynebacterium minutissimum) found in intertriginous areas like the groin."
        },
        {
            "id": "ch11-q5",
            "type": "multiple-choice",
            "question": "Drug-induced folliculitis most commonly occurs with:",
            "points": 1,
            "topicId": "chapter-11-infections",
            "topicName": "Infections",
            "options": [
                { "id": "a", "text": "Long-term use of oral cephalosporins", "isCorrect": false },
                { "id": "b", "text": "Use of phenytoin", "isCorrect": false },
                { "id": "c", "text": "Topical use of mupirocin", "isCorrect": false },
                { "id": "d", "text": "Topical use of corticosteroids", "isCorrect": true }
            ],
            "explanation": "Drug-induced folliculitis most commonly occurs with the use of corticosteroids."
        },
        {
            "id": "ch11-q6",
            "type": "multiple-choice",
            "question": "Which one of the following is the causative organism of meningococcemia?",
            "points": 1,
            "topicId": "chapter-11-infections",
            "topicName": "Infections",
            "options": [
                { "id": "a", "text": "Neisseria", "isCorrect": true },
                { "id": "b", "text": "Rickettsia", "isCorrect": false },
                { "id": "c", "text": "Spirochete", "isCorrect": false },
                { "id": "d", "text": "Streptococcus", "isCorrect": false },
                { "id": "e", "text": "None of the above", "isCorrect": false }
            ],
            "explanation": "The causative organism of meningococcemia is Neisseria meningitides."
        },
        {
            "id": "ch11-q7",
            "type": "multiple-choice",
            "question": "In staphylococcal scalded skin syndrome, Nikolsky sign will be:",
            "points": 1,
            "topicId": "chapter-11-infections",
            "topicName": "Infections",
            "options": [
                { "id": "a", "text": "Absent", "isCorrect": false },
                { "id": "b", "text": "Present", "isCorrect": true }
            ],
            "explanation": "In SSSS, the skin wrinkles and bullae occur followed by peeling layers; Nikolsky sign will be present."
        },
        {
            "id": "ch11-q8",
            "type": "multiple-choice",
            "question": "The most critical diagnostic sign for necrotizing fasciitis is:",
            "points": 1,
            "topicId": "chapter-11-infections",
            "topicName": "Infections",
            "options": [
                { "id": "a", "text": "Fever", "isCorrect": false },
                { "id": "b", "text": "Bradycardia", "isCorrect": false },
                { "id": "c", "text": "Presence of hemorrhagic bullae", "isCorrect": false },
                { "id": "d", "text": "Severe pain out of proportion to initial skin findings", "isCorrect": true }
            ],
            "explanation": "Severe pain out of proportion to the initial clinical signs is a critical diagnostic sign of necrotizing fasciitis."
        },
        {
            "id": "ch11-q9",
            "type": "true-false",
            "question": "Warts extend into the dermis.",
            "points": 1,
            "topicId": "chapter-11-infections",
            "topicName": "Infections",
            "correctAnswer": false,
            "explanation": "Warts (HPV) infect the keratinocytes of the epidermis and do not extend into the dermis."
        },
        {
            "id": "ch11-q10",
            "type": "multiple-choice",
            "question": "HPV subtypes associated with neoplasms include:",
            "points": 1,
            "topicId": "chapter-11-infections",
            "topicName": "Infections",
            "options": [
                { "id": "a", "text": "3 and 10", "isCorrect": false },
                { "id": "b", "text": "6 and 11", "isCorrect": false },
                { "id": "c", "text": "16 and 18", "isCorrect": true },
                { "id": "d", "text": "28 and 49", "isCorrect": false }
            ],
            "explanation": "HPV types 16 and 18 are associated with neoplasms and dysplasia."
        },
        {
            "id": "ch11-q11",
            "type": "multiple-choice",
            "question": "Appropriate treatment of varicella-zoster virus includes acyclovir:",
            "points": 1,
            "topicId": "chapter-11-infections",
            "topicName": "Infections",
            "options": [
                { "id": "a", "text": "200 mg tid for 5 days", "isCorrect": false },
                { "id": "b", "text": "400 mg tid for 5 days", "isCorrect": false },
                { "id": "c", "text": "800 mg five times daily for 3 days", "isCorrect": false },
                { "id": "d", "text": "800 mg five times daily for 7 days", "isCorrect": true }
            ],
            "explanation": "Treatment for VZV includes Acyclovir 800 mg five times daily for 7 days."
        },
        {
            "id": "ch11-q12",
            "type": "multiple-choice",
            "question": "Tinea manuum describes a tinea infection of the:",
            "points": 1,
            "topicId": "chapter-11-infections",
            "topicName": "Infections",
            "options": [
                { "id": "a", "text": "Groin", "isCorrect": false },
                { "id": "b", "text": "Feet", "isCorrect": false },
                { "id": "c", "text": "Hands", "isCorrect": true },
                { "id": "d", "text": "Nails", "isCorrect": false }
            ],
            "explanation": "Tinea manuum refers to fungal infection of the hands."
        },
        {
            "id": "ch11-q13",
            "type": "multiple-choice",
            "question": "The most common organism causing tinea capitis in North America is:",
            "points": 1,
            "topicId": "chapter-11-infections",
            "topicName": "Infections",
            "options": [
                { "id": "a", "text": "Trichophyton tonsurans", "isCorrect": true },
                { "id": "b", "text": "Trichophyton schoenleinii", "isCorrect": false },
                { "id": "c", "text": "Microsporum canis", "isCorrect": false }
            ],
            "explanation": "The most common organism causing tinea capitis in North America is Trichophyton tonsurans."
        },
        {
            "id": "ch11-q14",
            "type": "multiple-choice",
            "question": "Prodromal symptoms of HSV infection include all of the following except:",
            "points": 1,
            "topicId": "chapter-11-infections",
            "topicName": "Infections",
            "options": [
                { "id": "a", "text": "Flu-like symptoms", "isCorrect": false },
                { "id": "b", "text": "Nausea", "isCorrect": true },
                { "id": "c", "text": "Paresthesias", "isCorrect": false },
                { "id": "d", "text": "Burning sensation", "isCorrect": false }
            ],
            "explanation": "Prodromal symptoms include tenderness, pain, mild paresthesias, burning, and flu-like symptoms. Nausea is not typically listed as a prodrome."
        },
        {
            "id": "ch11-q15",
            "type": "multiple-choice",
            "question": "Factors that may reactivate herpes zoster include:",
            "points": 1,
            "topicId": "chapter-11-infections",
            "topicName": "Infections",
            "options": [
                { "id": "a", "text": "Immunosuppressive drugs", "isCorrect": false },
                { "id": "b", "text": "Fatigue", "isCorrect": false },
                { "id": "c", "text": "Stress", "isCorrect": false },
                { "id": "d", "text": "Smoking", "isCorrect": false },
                { "id": "e", "text": "a, b, and c", "isCorrect": true },
                { "id": "f", "text": "a, c, and d", "isCorrect": false }
            ],
            "explanation": "Factors include age, immunosuppressive medications, cancer, fatigue, emotional upset (stress), and radiation."
        },
        {
            "id": "ch11-q16",
            "type": "multiple-choice",
            "question": "All of the following are characteristics of dermatophyte infections except:",
            "points": 1,
            "topicId": "chapter-11-infections",
            "topicName": "Infections",
            "options": [
                { "id": "a", "text": "Invades the skin and survives on dead keratin", "isCorrect": false },
                { "id": "b", "text": "Undergoes deep invasion", "isCorrect": true },
                { "id": "c", "text": "Cannot survive on mucosal surfaces", "isCorrect": false }
            ],
            "explanation": "Dermatophytes typically infect the superficial keratin layers. Deep invasion is rare (though can occur in immunocompromised), making it the exception to general characteristics."
        },
        {
            "id": "ch11-q17",
            "type": "multiple-choice",
            "question": "Factors contributing to fungal proliferation include all of the following except:",
            "points": 1,
            "topicId": "chapter-11-infections",
            "topicName": "Infections",
            "options": [
                { "id": "a", "text": "Heat and humidity", "isCorrect": false },
                { "id": "b", "text": "Pregnancy", "isCorrect": false },
                { "id": "c", "text": "Corticosteroid therapy", "isCorrect": false },
                { "id": "d", "text": "Age", "isCorrect": true },
                { "id": "e", "text": "Malnutrition", "isCorrect": false }
            ],
            "explanation": "Age is not listed as a specific factor contributing to fungal proliferation in Tinea Versicolor, whereas the others are."
        },
        {
            "id": "ch11-q18",
            "type": "multiple-choice",
            "question": "Factors contributing to the formation of a furuncle include all of the following except:",
            "points": 1,
            "topicId": "chapter-11-infections",
            "topicName": "Infections",
            "options": [
                { "id": "a", "text": "Friction", "isCorrect": false },
                { "id": "b", "text": "Hyperhidrosis", "isCorrect": false },
                { "id": "c", "text": "Nutritional status", "isCorrect": true },
                { "id": "d", "text": "Scratching", "isCorrect": false },
                { "id": "e", "text": "Pressure from restrictive clothing", "isCorrect": false }
            ],
            "explanation": "Secondary factors inducing infection include scratching, friction, infestation, pressure, chemical irritation, hyperhidrosis, and occlusion. Nutritional status is not explicitly listed."
        },

        // --- Chapter 12: Bites & Infestations ---
        {
            "id": "ch12-q1",
            "type": "multiple-choice",
            "question": "Appropriate advice for a 4-year-old stung by a bee to relieve pain and itching includes:",
            "points": 1,
            "topicId": "chapter-12-bites",
            "topicName": "Bites & Infestations",
            "options": [
                { "id": "a", "text": "DEET to prevent further stings", "isCorrect": false },
                { "id": "b", "text": "Cold compresses on the sting area", "isCorrect": true },
                { "id": "c", "text": "Bacitracin ointment", "isCorrect": false },
                { "id": "d", "text": "Mud compresses", "isCorrect": false }
            ],
            "explanation": "Cold compresses can help alleviate discomfort from insect stings."
        },
        {
            "id": "ch12-q2",
            "type": "multiple-choice",
            "question": "The vesicles caused by the imported fire ant contain:",
            "points": 1,
            "topicId": "chapter-12-bites",
            "topicName": "Bites & Infestations",
            "options": [
                { "id": "a", "text": "Coagulotoxin", "isCorrect": false },
                { "id": "b", "text": "Neurotoxin", "isCorrect": false },
                { "id": "c", "text": "Purulent material from an infection", "isCorrect": false },
                { "id": "d", "text": "Sterile material with many neutrophils", "isCorrect": true }
            ],
            "explanation": "IFA stings create erythematous sterile pustules with high levels of neutrophils."
        },
        {
            "id": "ch12-q3",
            "type": "multiple-choice",
            "question": "A 5-cm 'bull's eye' lesion with central clearing on the calf is indicative of:",
            "points": 1,
            "topicId": "chapter-12-bites",
            "topicName": "Bites & Infestations",
            "options": [
                { "id": "a", "text": "Lyme disease", "isCorrect": true },
                { "id": "b", "text": "Rocky Mountain spotted fever", "isCorrect": false },
                { "id": "c", "text": "Infected chigger bite", "isCorrect": false },
                { "id": "d", "text": "St. Louis encephalitis mosquito bite", "isCorrect": false }
            ],
            "explanation": "Erythema migrans (bull's eye rash) is the classical presentation of Lyme disease."
        },
        {
            "id": "ch12-q4",
            "type": "multiple-choice",
            "question": "When suspecting Lyme disease (bull's eye rash), a critical history question is:",
            "points": 1,
            "topicId": "chapter-12-bites",
            "topicName": "Bites & Infestations",
            "options": [
                { "id": "a", "text": "Family history of similar lesions", "isCorrect": false },
                { "id": "b", "text": "Presence of pain", "isCorrect": false },
                { "id": "c", "text": "Exposure to a possible tick bite", "isCorrect": true },
                { "id": "d", "text": "Recent nausea", "isCorrect": false }
            ],
            "explanation": "Lyme disease is transmitted by the bite of a deer tick, so exposure history is critical."
        },
        {
            "id": "ch12-q5",
            "type": "multiple-choice",
            "question": "Treatment for early Lyme disease (erythema migrans) should include:",
            "points": 1,
            "topicId": "chapter-12-bites",
            "topicName": "Bites & Infestations",
            "options": [
                { "id": "a", "text": "Local antibiotics and steroids", "isCorrect": false },
                { "id": "b", "text": "Oral doxycycline for 21 days", "isCorrect": true },
                { "id": "c", "text": "Intravenous chloramphenicol", "isCorrect": false },
                { "id": "d", "text": "Symptomatic treatment only", "isCorrect": false }
            ],
            "explanation": "Administration of doxycycline or amoxicillin is effective for curing early Lyme disease."
        },
        {
            "id": "ch12-q6",
            "type": "multiple-choice",
            "question": "A grayish-blue halo surrounding a central puncture with pain starting the day prior suggests:",
            "points": 1,
            "topicId": "chapter-12-bites",
            "topicName": "Bites & Infestations",
            "options": [
                { "id": "a", "text": "Scorpion sting", "isCorrect": false },
                { "id": "b", "text": "Black widow spider bite", "isCorrect": false },
                { "id": "c", "text": "Brown recluse spider bite", "isCorrect": true },
                { "id": "d", "text": "Hymenoptera sting", "isCorrect": false }
            ],
            "explanation": "A gray-blue halo surrounding the puncture site is characteristic of a Brown Recluse spider bite."
        },
        {
            "id": "ch12-q7",
            "type": "multiple-choice",
            "question": "Agonizing muscle spasms after a bite are characteristic of:",
            "points": 1,
            "topicId": "chapter-12-bites",
            "topicName": "Bites & Infestations",
            "options": [
                { "id": "a", "text": "Scorpion sting", "isCorrect": false },
                { "id": "b", "text": "Black widow spider bite", "isCorrect": true },
                { "id": "c", "text": "Brown recluse spider bite", "isCorrect": false },
                { "id": "d", "text": "Yellow jacket sting", "isCorrect": false }
            ],
            "explanation": "Black widow venom contains a neurotoxin that causes severe muscle spasms."
        },
        {
            "id": "ch12-q8",
            "type": "multiple-choice",
            "question": "Appropriate treatment for muscle spasms from a Black Widow bite includes:",
            "points": 1,
            "topicId": "chapter-12-bites",
            "topicName": "Bites & Infestations",
            "options": [
                { "id": "a", "text": "High-volume saline", "isCorrect": false },
                { "id": "b", "text": "Intravenous benzodiazepines", "isCorrect": true },
                { "id": "c", "text": "Narcotics", "isCorrect": false },
                { "id": "d", "text": "Nitrates", "isCorrect": false }
            ],
            "explanation": "Intravenous benzodiazepines are used to reduce muscle spasms from Black Widow bites."
        },
        {
            "id": "ch12-q9",
            "type": "multiple-choice",
            "question": "The effective method to remove an attached tick is:",
            "points": 1,
            "topicId": "chapter-12-bites",
            "topicName": "Bites & Infestations",
            "options": [
                { "id": "a", "text": "Burn it with a hot match", "isCorrect": false },
                { "id": "b", "text": "Apply petroleum jelly", "isCorrect": false },
                { "id": "c", "text": "Grasp with tweezers close to skin and pull upward", "isCorrect": true },
                { "id": "d", "text": "All of the above", "isCorrect": false }
            ],
            "explanation": "Use tweezers to grasp the tick as close to the skin as possible and pull steadily away. Other methods can cause harm."
        },
        {
            "id": "ch12-q10",
            "type": "multiple-choice",
            "question": "The initial rash associated with Rocky Mountain spotted fever is typically located on the:",
            "points": 1,
            "topicId": "chapter-12-bites",
            "topicName": "Bites & Infestations",
            "options": [
                { "id": "a", "text": "Palms and soles", "isCorrect": true },
                { "id": "b", "text": "Trunk", "isCorrect": false },
                { "id": "c", "text": "Neck", "isCorrect": false },
                { "id": "d", "text": "Face", "isCorrect": false }
            ],
            "explanation": "A morbilliform rash starts on palms and soles and progresses to petechial rash on extremities and trunk."
        },
        {
            "id": "ch12-q11",
            "type": "multiple-choice",
            "question": "The most reliable predictor of a severe allergic reaction to a future Hymenoptera sting is:",
            "points": 1,
            "topicId": "chapter-12-bites",
            "topicName": "Bites & Infestations",
            "options": [
                { "id": "a", "text": "Elevated IgG level", "isCorrect": false },
                { "id": "b", "text": "Elevated IgM level", "isCorrect": false },
                { "id": "c", "text": "Low serum tryptase level", "isCorrect": false },
                { "id": "d", "text": "History of reaction to a previous sting", "isCorrect": true }
            ],
            "explanation": "The single best predictor of the outcome of a future sting is the history of reaction to a prior sting."
        },
        {
            "id": "ch12-q12",
            "type": "multiple-choice",
            "question": "Loxoscelism describes the systemic effects caused by:",
            "points": 1,
            "topicId": "chapter-12-bites",
            "topicName": "Bites & Infestations",
            "options": [
                { "id": "a", "text": "Brown recluse spider bite", "isCorrect": true },
                { "id": "b", "text": "Rocky Mountain spotted fever", "isCorrect": false },
                { "id": "c", "text": "Hymenoptera sting", "isCorrect": false },
                { "id": "d", "text": "Fire ant stings", "isCorrect": false }
            ],
            "explanation": "Systemic reactions from a Brown Recluse spider bite are called loxoscelism."
        },
        {
            "id": "ch12-q13",
            "type": "multiple-choice",
            "question": "Who is most at risk for developing crusted (Norwegian) scabies?",
            "points": 1,
            "topicId": "chapter-12-bites",
            "topicName": "Bites & Infestations",
            "options": [
                { "id": "a", "text": "A 4-year-old sharing a bed with an infected sibling", "isCorrect": false },
                { "id": "b", "text": "A 54-year-old with diabetes", "isCorrect": false },
                { "id": "c", "text": "An 84-year-old transplant patient taking cyclosporine", "isCorrect": true },
                { "id": "d", "text": "A 65-year-old with thyroid disorder", "isCorrect": false }
            ],
            "explanation": "Crusted scabies occurs in immunocompromised hosts where the mite multiplies unchecked."
        },
        {
            "id": "ch12-q14",
            "type": "multiple-choice",
            "question": "If itching persists 4 days after permethrin treatment for scabies, the most likely cause is:",
            "points": 1,
            "topicId": "chapter-12-bites",
            "topicName": "Bites & Infestations",
            "options": [
                { "id": "a", "text": "Itching persists up to 1 month due to allergic reaction", "isCorrect": true },
                { "id": "b", "text": "Reinfection", "isCorrect": false },
                { "id": "c", "text": "Medication failure", "isCorrect": false },
                { "id": "d", "text": "Improper cleaning", "isCorrect": false }
            ],
            "explanation": "Itching caused by the mite will persist for weeks even after eradication due to the allergic response."
        },
        {
            "id": "ch12-q15",
            "type": "multiple-choice",
            "question": "Patient education for scabies includes all EXCEPT:",
            "points": 1,
            "topicId": "chapter-12-bites",
            "topicName": "Bites & Infestations",
            "options": [
                { "id": "a", "text": "Treat household contacts simultaneously", "isCorrect": false },
                { "id": "b", "text": "Wash bedding in hot water", "isCorrect": false },
                { "id": "c", "text": "Apply medication only to the affected rash area", "isCorrect": true },
                { "id": "d", "text": "Keep fingernails short", "isCorrect": false }
            ],
            "explanation": "Topical medication should be applied from the neck down (and to head/neck in infants), not just the rash."
        },
        {
            "id": "ch12-q16",
            "type": "multiple-choice",
            "question": "Appropriate treatment for lice on eyelashes is:",
            "points": 1,
            "topicId": "chapter-12-bites",
            "topicName": "Bites & Infestations",
            "options": [
                { "id": "a", "text": "Permethrin 5% lotion", "isCorrect": false },
                { "id": "b", "text": "Petrolatum applied three times daily", "isCorrect": true },
                { "id": "c", "text": "Oral ivermectin", "isCorrect": false },
                { "id": "d", "text": "Pyrethrin lotion", "isCorrect": false }
            ],
            "explanation": "Petrolatum may be applied to eyelashes to aid in removing lice and nits; chemical pediculicides should be avoided near eyes."
        },
        {
            "id": "ch12-q17",
            "type": "multiple-choice",
            "question": "Which lice medication has been documented to cause seizure disorders in children?",
            "points": 1,
            "topicId": "chapter-12-bites",
            "topicName": "Bites & Infestations",
            "options": [
                { "id": "a", "text": "Pyrethrin", "isCorrect": false },
                { "id": "b", "text": "Permethrin", "isCorrect": false },
                { "id": "c", "text": "Lindane (Gamma benzene hexachloride)", "isCorrect": true },
                { "id": "d", "text": "Ivermectin", "isCorrect": false }
            ],
            "explanation": "Lindane (Gamma benzene hexachloride) has been associated with seizures and death in infants."
        },
        {
            "id": "ch12-q18",
            "type": "multiple-choice",
            "question": "Why is repeated application of topical antilouse agents often necessary?",
            "points": 1,
            "topicId": "chapter-12-bites",
            "topicName": "Bites & Infestations",
            "options": [
                { "id": "a", "text": "Some medications are not ovidical (do not kill eggs)", "isCorrect": false },
                { "id": "b", "text": "Patients may not remove all nits", "isCorrect": false },
                { "id": "c", "text": "High resistance", "isCorrect": false },
                { "id": "d", "text": "All of the above", "isCorrect": true }
            ],
            "explanation": "Resistance, lack of ovidical properties, and reinfestation/poor nit removal are all reasons for repeat treatment."
        },

        // --- Chapter 13: Pediatric Dermatology ---
        {
            "id": "ch13-q1",
            "type": "multiple-choice",
            "question": "Which finding alongside acne neonatorum warrants referral to an endocrinologist?",
            "points": 1,
            "topicId": "chapter-13-pediatric",
            "topicName": "Pediatric Dermatology",
            "options": [
                { "id": "a", "text": "Extensive comedones", "isCorrect": false },
                { "id": "b", "text": "Early onset of pubic and/or axillary hair", "isCorrect": true },
                { "id": "c", "text": "Poor response to therapy", "isCorrect": false },
                { "id": "d", "text": "Family history of acne", "isCorrect": false }
            ],
            "explanation": "Virilizing features like early pubic/axillary hair or body odor suggest an underlying endocrine issue."
        },
        {
            "id": "ch13-q2",
            "type": "multiple-choice",
            "question": "Cutis marmorata improves with:",
            "points": 1,
            "topicId": "chapter-13-pediatric",
            "topicName": "Pediatric Dermatology",
            "options": [
                { "id": "a", "text": "Rest", "isCorrect": false },
                { "id": "b", "text": "Elevation", "isCorrect": false },
                { "id": "c", "text": "Moving to a warmer environment", "isCorrect": true },
                { "id": "d", "text": "Removing clothing", "isCorrect": false }
            ],
            "explanation": "Cutis marmorata is a physiologic reaction to cold; rewarming reverses the mottling."
        },
        {
            "id": "ch13-q3",
            "type": "multiple-choice",
            "question": "Which physical finding is associated with harlequin color change?",
            "points": 1,
            "topicId": "chapter-13-pediatric",
            "topicName": "Pediatric Dermatology",
            "options": [
                { "id": "a", "text": "Bulging veins", "isCorrect": false },
                { "id": "b", "text": "Two different colored eyes", "isCorrect": false },
                { "id": "c", "text": "Skin is darker on the dependent side", "isCorrect": true },
                { "id": "d", "text": "White patch on scalp", "isCorrect": false }
            ],
            "explanation": "Harlequin color change involves an erythematous flush on the dependent side and blanching on the upper side."
        },
        {
            "id": "ch13-q4",
            "type": "multiple-choice",
            "question": "Miliaria crystallina is characterized by:",
            "points": 1,
            "topicId": "chapter-13-pediatric",
            "topicName": "Pediatric Dermatology",
            "options": [
                { "id": "a", "text": "Tiny, clear, vesicular papules that desquamate", "isCorrect": true },
                { "id": "b", "text": "Deep, firm papules", "isCorrect": false },
                { "id": "c", "text": "White plaques", "isCorrect": false },
                { "id": "d", "text": "Red, prickly papules", "isCorrect": false }
            ],
            "explanation": "Miliaria crystallina presents as clear, superficial vesicles 1-2mm in diameter."
        },
        {
            "id": "ch13-q5",
            "type": "multiple-choice",
            "question": "Which intervention aids in the resolution of infantile oral candidiasis?",
            "points": 1,
            "topicId": "chapter-13-pediatric",
            "topicName": "Pediatric Dermatology",
            "options": [
                { "id": "a", "text": "Changing diapers frequently", "isCorrect": false },
                { "id": "b", "text": "Using BPA-free bottles", "isCorrect": false },
                { "id": "c", "text": "Washing hands", "isCorrect": false },
                { "id": "d", "text": "Boiling bottle nipples and pacifiers", "isCorrect": true }
            ],
            "explanation": "Boiling nipples and pacifiers helps eliminate the yeast and prevent reinfection."
        },
        {
            "id": "ch13-q6",
            "type": "multiple-choice",
            "question": "Which form of ichthyosis is found only in males?",
            "points": 1,
            "topicId": "chapter-13-pediatric",
            "topicName": "Pediatric Dermatology",
            "options": [
                { "id": "a", "text": "X-linked", "isCorrect": true },
                { "id": "b", "text": "Lamellar", "isCorrect": false },
                { "id": "c", "text": "Vulgaris", "isCorrect": false },
                { "id": "d", "text": "Bullous", "isCorrect": false }
            ],
            "explanation": "X-linked ichthyosis is inherited as an X-linked recessive trait, primarily affecting males."
        },
        {
            "id": "ch13-q7",
            "type": "multiple-choice",
            "question": "Which topical therapy helps remove excess scale in ichthyosis?",
            "points": 1,
            "topicId": "chapter-13-pediatric",
            "topicName": "Pediatric Dermatology",
            "options": [
                { "id": "a", "text": "Clindamycin", "isCorrect": false },
                { "id": "b", "text": "Dial soap", "isCorrect": false },
                { "id": "c", "text": "Hydrocortisone", "isCorrect": false },
                { "id": "d", "text": "Topical retinoids and keratolytics", "isCorrect": true }
            ],
            "explanation": "Keratolytics (like alpha hydroxy acids) and topical retinoids help remove scaling."
        },
        {
            "id": "ch13-q8",
            "type": "multiple-choice",
            "question": "What must be monitored when using propranolol for hemangiomas?",
            "points": 1,
            "topicId": "chapter-13-pediatric",
            "topicName": "Pediatric Dermatology",
            "options": [
                { "id": "a", "text": "Heart rate and blood pressure", "isCorrect": true },
                { "id": "b", "text": "Height", "isCorrect": false },
                { "id": "c", "text": "CBC", "isCorrect": false },
                { "id": "d", "text": "Liver function", "isCorrect": false }
            ],
            "explanation": "Propranolol can cause hypotension and bradycardia; monitoring HR and BP is essential."
        },
        {
            "id": "ch13-q9",
            "type": "multiple-choice",
            "question": "A patient with 5 or more hemangiomas should undergo:",
            "points": 1,
            "topicId": "chapter-13-pediatric",
            "topicName": "Pediatric Dermatology",
            "options": [
                { "id": "a", "text": "Eye exam", "isCorrect": false },
                { "id": "b", "text": "Abdominal ultrasonography", "isCorrect": true },
                { "id": "c", "text": "MRI", "isCorrect": false },
                { "id": "d", "text": "EEG", "isCorrect": false }
            ],
            "explanation": "Multiple cutaneous hemangiomas increase the risk of liver hemangiomas; abdominal ultrasound is recommended."
        },
        {
            "id": "ch13-q10",
            "type": "multiple-choice",
            "question": "A topical therapy option for superficial, uncomplicated hemangioma is:",
            "points": 1,
            "topicId": "chapter-13-pediatric",
            "topicName": "Pediatric Dermatology",
            "options": [
                { "id": "a", "text": "Ammonium lactate", "isCorrect": false },
                { "id": "b", "text": "Salicylic acid", "isCorrect": false },
                { "id": "c", "text": "Timolol gel", "isCorrect": true },
                { "id": "d", "text": "Lidocaine", "isCorrect": false }
            ],
            "explanation": "Timolol gel-forming solution is a topical beta-blocker used for superficial hemangiomas."
        },

        // --- Chapter 14: Benign Neoplasms ---
        {
            "id": "ch14-q1",
            "type": "multiple-choice",
            "question": "Acrochordons (skin tags) are characterized by being:",
            "points": 1,
            "topicId": "chapter-14-neoplasms",
            "topicName": "Benign Neoplasms",
            "options": [
                { "id": "a", "text": "Soft and pedunculated", "isCorrect": false },
                { "id": "b", "text": "Flesh colored, tan, or brown", "isCorrect": false },
                { "id": "c", "text": "Precancerous", "isCorrect": false },
                { "id": "d", "text": "Both A and B", "isCorrect": true },
                { "id": "e", "text": "All of the above", "isCorrect": false }
            ],
            "explanation": "Acrochordons are benign, soft, pedunculated growths. They are NOT precancerous."
        },
        {
            "id": "ch14-q2",
            "type": "multiple-choice",
            "question": "Calluses are caused by all of the following EXCEPT:",
            "points": 1,
            "topicId": "chapter-14-neoplasms",
            "topicName": "Benign Neoplasms",
            "options": [
                { "id": "a", "text": "Spontaneous development", "isCorrect": true },
                { "id": "b", "text": "External pressure", "isCorrect": false },
                { "id": "c", "text": "Repeated friction", "isCorrect": false }
            ],
            "explanation": "Calluses are a response to repeated friction or pressure, not spontaneous development."
        },
        {
            "id": "ch14-q3",
            "type": "multiple-choice",
            "question": "Appropriate treatment for corns includes:",
            "points": 1,
            "topicId": "chapter-14-neoplasms",
            "topicName": "Benign Neoplasms",
            "options": [
                { "id": "a", "text": "Surgical excision of hard plug", "isCorrect": false },
                { "id": "b", "text": "Corticosteroid injection", "isCorrect": false },
                { "id": "c", "text": "Topical keratolytics", "isCorrect": false },
                { "id": "d", "text": "Epsom salt soaks", "isCorrect": false },
                { "id": "e", "text": "All of the above", "isCorrect": true }
            ],
            "explanation": "All listed methods are valid treatments for corns."
        },
        {
            "id": "ch14-q4",
            "type": "multiple-choice",
            "question": "Common therapeutic modalities for cysts include:",
            "points": 1,
            "topicId": "chapter-14-neoplasms",
            "topicName": "Benign Neoplasms",
            "options": [
                { "id": "a", "text": "Complete excision and wall removal", "isCorrect": false },
                { "id": "b", "text": "Incision and drainage", "isCorrect": false },
                { "id": "c", "text": "Intralesional corticosteroid injections", "isCorrect": false },
                { "id": "d", "text": "All of the above", "isCorrect": true }
            ],
            "explanation": "Cysts can be treated by excision, I&D (if infected), or steroid injections."
        },
        {
            "id": "ch14-q5",
            "type": "multiple-choice",
            "question": "Dermatofibroma is considered to be:",
            "points": 1,
            "topicId": "chapter-14-neoplasms",
            "topicName": "Benign Neoplasms",
            "options": [
                { "id": "a", "text": "An early histiocytic reaction to trauma or insect bite", "isCorrect": true },
                { "id": "b", "text": "A precancerous lesion", "isCorrect": false },
                { "id": "c", "text": "A benign lesion of stratum corneum", "isCorrect": false }
            ],
            "explanation": "Dermatofibromas are benign fibrous nodules, often a reaction to trauma or bites."
        },
        {
            "id": "ch14-q6",
            "type": "true-false",
            "question": "Hypertrophic scars can involute spontaneously.",
            "points": 1,
            "topicId": "chapter-14-neoplasms",
            "topicName": "Benign Neoplasms",
            "correctAnswer": true,
            "explanation": "Unlike keloids, hypertrophic scars may regress or flatten spontaneously over time."
        },
        {
            "id": "ch14-q7",
            "type": "multiple-choice",
            "question": "Keloid development can:",
            "points": 1,
            "topicId": "chapter-14-neoplasms",
            "topicName": "Benign Neoplasms",
            "options": [
                { "id": "a", "text": "Continue in the same area for decades", "isCorrect": false },
                { "id": "b", "text": "Never appear on the face", "isCorrect": false },
                { "id": "c", "text": "Be found only in upper chest", "isCorrect": false },
                { "id": "d", "text": "All of the above", "isCorrect": false },
                { "id": "e", "text": "Continue in the same area for decades (Correct answer per key is 'a' - text says 'd' but options b and c are false)", "isCorrect": true }
                // NOTE: The original text question asked "Keloid development can: a... b... c... d. All of the above". 
                // The answer key says "7.a". 
                // Option A is "Continue in the same area of injury for decades". 
                // Option B is "Never appear on the face" (False, they can). 
                // Option C is "Be found in only the upper third of the chest" (False, earlobes/back too).
                // So A is the correct choice.
            ],
            "explanation": "Keloids can continue to grow for decades. They can appear on the face and other areas."
        },
        {
            "id": "ch14-q8",
            "type": "true-false",
            "question": "Lipomas are the most common of the benign soft tissue neoplasms.",
            "points": 1,
            "topicId": "chapter-14-neoplasms",
            "topicName": "Benign Neoplasms",
            "correctAnswer": true,
            "explanation": "Lipomas are indeed the most common benign soft tissue neoplasms."
        },
        {
            "id": "ch14-q9",
            "type": "multiple-choice",
            "question": "Characteristics of sebaceous hyperplasia include:",
            "points": 1,
            "topicId": "chapter-14-neoplasms",
            "topicName": "Benign Neoplasms",
            "options": [
                { "id": "a", "text": "Small, solitary lesion, umbilicated", "isCorrect": false },
                { "id": "b", "text": "Multiple soft yellowish papules with central dell", "isCorrect": false },
                { "id": "c", "text": "Surface telangiectasis", "isCorrect": false },
                { "id": "d", "text": "All of the above", "isCorrect": true }
            ],
            "explanation": "Sebaceous hyperplasia presents as soft, yellow, umbilicated papules often with telangiectasia."
        },
        {
            "id": "ch14-q10",
            "type": "true-false",
            "question": "Seborrheic keratosis is an autosomal dominant trait found in 88% of people older than 65.",
            "points": 1,
            "topicId": "chapter-14-neoplasms",
            "topicName": "Benign Neoplasms",
            "correctAnswer": true,
            "explanation": "SKs are extremely common, hereditary benign growths in older adults."
        }
    ]
});