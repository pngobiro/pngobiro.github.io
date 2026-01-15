registerQuiz("comprehensive-exam", {
    "schemaVersion": "1.0",
    "quizId": "comprehensive-exam",
    "metadata": {
        "title": "Comprehensive Final Exam",
        "description": "A cumulative assessment covering Anatomy, Assessment, Diagnostics, and Therapeutics of the Integumentary System.",
        "examType": "comprehensive",
        "topicsCovered": [
            "topic-01-anatomy",
            "topic-02-assessment",
            "topic-03-diagnostics",
            "topic-04-therapeutics"
        ],
        "difficulty": "advanced",
        "estimatedTime": 45,
        "passingScore": 75,
        "createdAt": "2025-12-25T14:00:00Z",
        "tags": ["final", "comprehensive", "dermatology", "nursing"]
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
        /* ========================================================================
           TOPIC 01: ANATOMY & PHYSIOLOGY
           ======================================================================== */
        {
            "id": "t1-q1",
            "topicId": "topic-01-anatomy",
            "topicName": "Anatomy & Physiology",
            "type": "ordering",
            "question": "Arrange the layers of the epidermis in ascending order (from innermost to outermost):",
            "points": 10,
            "items": [
                { "id": "i1", "text": "Stratum germinativum (Basal cell layer)", "correctPosition": 1 },
                { "id": "i2", "text": "Stratum spinosum (Prickle cell layer)", "correctPosition": 2 },
                { "id": "i3", "text": "Stratum granulosum (Granular cell layer)", "correctPosition": 3 },
                { "id": "i4", "text": "Stratum lucidum (Glassy layer)", "correctPosition": 4 },
                { "id": "i5", "text": "Stratum corneum (Horny cell layer)", "correctPosition": 5 }
            ],
            "explanation": "The layers ascend from the basal layer (germinativum) where division occurs, up through spinosum, granulosum, lucidum (on palms/soles), to the outermost corneum."
        },
        {
            "id": "t1-q2",
            "topicId": "topic-01-anatomy",
            "topicName": "Anatomy & Physiology",
            "type": "multiple-choice",
            "question": "Which cell type found in the epidermis is primarily responsible for the uptake, processing, and presentation of antigens to lymphocytes?",
            "points": 5,
            "options": [
                { "id": "a", "text": "Keratinocytes", "isCorrect": false },
                { "id": "b", "text": "Melanocytes", "isCorrect": false },
                { "id": "c", "text": "Langerhans cells", "isCorrect": true },
                { "id": "d", "text": "Merkel cells", "isCorrect": false }
            ],
            "explanation": "Langerhans cells are immunocompetent dendritic cells that act as the first line of immunologic defense in the skin."
        },
        {
            "id": "t1-q3",
            "topicId": "topic-01-anatomy",
            "topicName": "Anatomy & Physiology",
            "type": "matching",
            "question": "Match the skin appendage with its primary characteristic or function:",
            "points": 10,
            "pairs": [
                { "id": "p1", "left": "Sebaceous Glands", "right": "Produces lipid-rich sebum for waterproofing" },
                { "id": "p2", "left": "Eccrine Glands", "right": "Regulates body temperature via evaporation" },
                { "id": "p3", "left": "Apocrine Glands", "right": "Produces milky secretion stimulated by stress" },
                { "id": "p4", "left": "Ceruminous Glands", "right": "Found in the external auditory canal" }
            ],
            "explanation": "Sebaceous glands produce sebum; Eccrine glands are for thermoregulation; Apocrine glands respond to stress; Ceruminous glands are modified apocrine glands in the ear."
        },
        {
            "id": "t1-q4",
            "topicId": "topic-01-anatomy",
            "topicName": "Anatomy & Physiology",
            "type": "multiple-select",
            "question": "Which of the following are functions of the stratum corneum (horny cell layer)? (Select all that apply)",
            "points": 5,
            "options": [
                { "id": "a", "text": "Functions as the body's major physical barrier", "isCorrect": true },
                { "id": "b", "text": "Synthesizes Vitamin D3", "isCorrect": false },
                { "id": "c", "text": "Resists damaging chemicals and electrical currents", "isCorrect": true },
                { "id": "d", "text": "Acts as a reservoir for topical medications", "isCorrect": true },
                { "id": "e", "text": "Produces melanin pigment", "isCorrect": false }
            ],
            "explanation": "The stratum corneum is a physical barrier, resists external damage, and holds topical medications. Vitamin D synthesis occurs in the epidermis but involves UV light conversion, and melanin is produced by melanocytes in the basal layer."
        },

        /* ========================================================================
           TOPIC 02: SKIN ASSESSMENT
           ======================================================================== */
        {
            "id": "t2-q1",
            "topicId": "topic-02-assessment",
            "topicName": "Skin Assessment",
            "type": "image-based",
            "question": "Identify the type of primary lesion shown in the image below:",
            "points": 10,
            "media": {
                "type": "image",
                "url": "assets/images/image-20251225-5a598dad.jpeg",
                "alt": "Solar lentigines showing flat brown spots",
                "caption": "Figure 2-1"
            },
            "options": [
                { "id": "a", "text": "Papule", "isCorrect": false },
                { "id": "b", "text": "Macule", "isCorrect": true },
                { "id": "c", "text": "Vesicle", "isCorrect": false },
                { "id": "d", "text": "Plaque", "isCorrect": false }
            ],
            "explanation": "A macule is a circumscribed, flat discoloration that cannot be palpated, such as the solar lentigines shown."
        },
        {
            "id": "t2-q2",
            "topicId": "topic-02-assessment",
            "topicName": "Skin Assessment",
            "type": "matching",
            "question": "Match the secondary lesion term with its correct definition:",
            "points": 10,
            "pairs": [
                { "id": "p1", "left": "Lichenification", "right": "Thickening of skin with exaggerated markings" },
                { "id": "p2", "left": "Excoriation", "right": "Linear erosion caused by scratching" },
                { "id": "p3", "left": "Fissure", "right": "Linear crack in epidermis" },
                { "id": "p4", "left": "Keloid", "right": "Hypertrophic scar extending beyond wound" }
            ],
            "explanation": "Lichenification results from rubbing; excoriation from scratching; fissures are cracks; keloids are overgrowths of scar tissue."
        },
        {
            "id": "t2-q3",
            "topicId": "topic-02-assessment",
            "topicName": "Skin Assessment",
            "type": "fill-blank",
            "question": "A __1__ is a solid, elevated, palpable lesion that is larger than 1 cm and may extend deeper into the dermis than a papule.",
            "points": 5,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["nodule", "tumor"], "caseSensitive": false }
            ],
            "explanation": "A nodule is a solid, elevated palpable mass usually larger than 1 cm."
        },
        {
            "id": "t2-q4",
            "topicId": "topic-02-assessment",
            "topicName": "Skin Assessment",
            "type": "multiple-choice",
            "question": "When assessing a patient's history, which question helps evaluate the 'Evolution' of a skin condition?",
            "points": 5,
            "options": [
                { "id": "a", "text": "Does it itch?", "isCorrect": false },
                { "id": "b", "text": "Has it gotten better or worse?", "isCorrect": true },
                { "id": "c", "text": "What have you used to treat it?", "isCorrect": false },
                { "id": "d", "text": "Do any family members have this?", "isCorrect": false }
            ],
            "explanation": "Asking if the condition has improved or worsened addresses the evolution/course of the disease."
        },

        /* ========================================================================
           TOPIC 03: DIAGNOSTIC PROCEDURES
           ======================================================================== */
        {
            "id": "t3-q1",
            "topicId": "topic-03-diagnostics",
            "topicName": "Diagnostic Procedures",
            "type": "true-false",
            "question": "When performing a punch biopsy, the operator should stretch the skin perpendicular to the relaxed skin tension lines to minimize redundancy at closure.",
            "points": 5,
            "correctAnswer": true,
            "explanation": "Applying traction perpendicular to skin tension lines helps create an oval defect that closes neatly."
        },
        {
            "id": "t3-q2",
            "topicId": "topic-03-diagnostics",
            "topicName": "Diagnostic Procedures",
            "type": "multiple-choice",
            "question": "Which diagnostic test uses a 10% to 20% solution to digest keratin and visualize fungal hyphae?",
            "points": 5,
            "options": [
                { "id": "a", "text": "Tzanck Smear", "isCorrect": false },
                { "id": "b", "text": "Gram Stain", "isCorrect": false },
                { "id": "c", "text": "KOH Preparation", "isCorrect": true },
                { "id": "d", "text": "Dark-field Examination", "isCorrect": false }
            ],
            "explanation": "KOH (Potassium Hydroxide) preparation dissolves keratin to reveal fungal structures."
        },
        {
            "id": "t3-q3",
            "topicId": "topic-03-diagnostics",
            "topicName": "Diagnostic Procedures",
            "type": "ordering",
            "question": "Order the steps for applying T.R.U.E. TEST patch panels:",
            "points": 10,
            "items": [
                { "id": "i1", "text": "Remove test strip from foil sleeve and plastic cover", "correctPosition": 1 },
                { "id": "i2", "text": "Position test panel #1 on upper left back", "correctPosition": 2 },
                { "id": "i3", "text": "Smooth panel from center outward", "correctPosition": 3 },
                { "id": "i4", "text": "Mark the two notches on the panel with a medical pen", "correctPosition": 4 },
                { "id": "i5", "text": "Repeat for panels #2 and #3", "correctPosition": 5 }
            ],
            "explanation": "Panels must be prepared, positioned correctly, smoothed to ensure contact, and marked for future reading."
        },
        {
            "id": "t3-q4",
            "topicId": "topic-03-diagnostics",
            "topicName": "Diagnostic Procedures",
            "type": "multiple-choice",
            "question": "In patch testing, a 'Strong Positive' reaction (++) is characterized by:",
            "points": 5,
            "options": [
                { "id": "a", "text": "Macular erythema only", "isCorrect": false },
                { "id": "b", "text": "Erythema, edema, and vesicles covering <50% of test site", "isCorrect": true },
                { "id": "c", "text": "Coalescing vesicles covering >50% of test site", "isCorrect": false },
                { "id": "d", "text": "Glazed, scalded appearance", "isCorrect": false }
            ],
            "explanation": "A 2+ (Strong Positive) reaction involves erythema, edema, papules, and vesicles covering 50% or less of the site."
        },

        /* ========================================================================
           TOPIC 04: THERAPEUTIC MODALITIES
           ======================================================================== */
        {
            "id": "t4-q1",
            "topicId": "topic-04-therapeutics",
            "topicName": "Therapeutic Modalities",
            "type": "ordering",
            "question": "Rank the following topical steroid groups from highest potency (Group I) to lowest potency (Group VII):",
            "points": 10,
            "items": [
                { "id": "i1", "text": "Clobetasol propionate 0.05% (Group I)", "correctPosition": 1 },
                { "id": "i2", "text": "Fluocinonide 0.05% (Group II)", "correctPosition": 2 },
                { "id": "i3", "text": "Triamcinolone acetonide 0.1% (Group IV)", "correctPosition": 3 },
                { "id": "i4", "text": "Hydrocortisone 2.5% (Group VII)", "correctPosition": 4 }
            ],
            "explanation": "Clobetasol is ultra-potent (I), Fluocinonide is high potent (II), Triamcinolone is mid-strength (IV), and Hydrocortisone is low potency (VII)."
        },
        {
            "id": "t4-q2",
            "topicId": "topic-04-therapeutics",
            "topicName": "Therapeutic Modalities",
            "type": "multiple-select",
            "question": "Which of the following are true regarding the use of Ointments as a vehicle? (Select all that apply)",
            "points": 5,
            "options": [
                { "id": "a", "text": "They consist primarily of greases/petroleum", "isCorrect": true },
                { "id": "b", "text": "They allow greater penetration of medication than creams", "isCorrect": true },
                { "id": "c", "text": "They are preferred for hairy areas", "isCorrect": false },
                { "id": "d", "text": "They should not be used in intertriginous areas", "isCorrect": true },
                { "id": "e", "text": "They contain high water content", "isCorrect": false }
            ],
            "explanation": "Ointments are grease-based, occlusive (good penetration but bad for skin folds), and not good for hairy areas. Solutions/lotions are better for hair."
        },
        {
            "id": "t4-q3",
            "topicId": "topic-04-therapeutics",
            "topicName": "Therapeutic Modalities",
            "type": "image-based",
            "question": "The dressing shown in the image is applied with graduated pressure to treat venous ulcers. What is it called?",
            "points": 10,
            "media": {
                "type": "image",
                "url": "assets/images/image-20251225-bb236206.jpeg",
                "alt": "Finished compression boot on lower leg",
                "caption": "Figure 4-15"
            },
            "options": [
                { "id": "a", "text": "Wet-to-dry dressing", "isCorrect": false },
                { "id": "b", "text": "Unna's Boot", "isCorrect": true },
                { "id": "c", "text": "Occlusive plastic wrap", "isCorrect": false },
                { "id": "d", "text": "Kerlix wrap", "isCorrect": false }
            ],
            "explanation": "An Unna's boot is a semirigid paste boot used for compression therapy in venous stasis ulcers."
        },
        {
            "id": "t4-q4",
            "topicId": "topic-04-therapeutics",
            "topicName": "Therapeutic Modalities",
            "type": "fill-blank",
            "question": "The iPLEDGE program is a mandatory risk management program for patients taking the systemic retinoid __1__ due to its severe teratogenicity.",
            "points": 5,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["isotretinoin", "accutane"], "caseSensitive": false }
            ],
            "explanation": "Isotretinoin (Accutane) causes severe birth defects, requiring the strict iPLEDGE safety program."
        },
        {
            "id": "t4-q5",
            "topicId": "topic-04-therapeutics",
            "topicName": "Therapeutic Modalities",
            "type": "multiple-choice",
            "question": "Photopheresis (Extracorporeal Photochemotherapy) is primarily indicated for the palliative treatment of which condition?",
            "points": 5,
            "options": [
                { "id": "a", "text": "Psoriasis", "isCorrect": false },
                { "id": "b", "text": "Cutaneous T-cell Lymphoma (CTCL)", "isCorrect": true },
                { "id": "c", "text": "Melanoma", "isCorrect": false },
                { "id": "d", "text": "Bullous Pemphigoid", "isCorrect": false }
            ],
            "explanation": "Photopheresis treats the skin manifestations of Cutaneous T-cell Lymphoma (CTCL) by treating white blood cells with methoxsalen and UVA light."
        }
    ]
});