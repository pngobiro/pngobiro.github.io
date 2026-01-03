registerQuiz("comprehensive-exam", {
    "schemaVersion": "1.0",
    "quizId": "comprehensive-exam",
    "metadata": {
        "title": "ATP 100 Civil Litigation - Comprehensive Final Exam",
        "description": "A comprehensive assessment covering all aspects of Civil Procedure and Litigation practice in Kenya, from introductory concepts to execution and appeals.",
        "examType": "comprehensive",
        "topicsCovered": [
            "topic-01", "topic-02", "topic-03", "topic-04", "topic-05", 
            "topic-06", "topic-07", "topic-08", "topic-09", "topic-10"
        ],
        "difficulty": "advanced",
        "estimatedTime": 60,
        "passingScore": 70,
        "createdAt": "2026-01-03T12:00:00Z",
        "tags": ["final", "exam", "civil-procedure", "kenya"]
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
        {
            "id": "q1-sources",
            "topicId": "topic-01",
            "topicName": "Intro to Civil Procedure",
            "type": "multiple-select",
            "question": "Which of the following are recognized sources of Civil Procedure in Kenya? (Select all that apply)",
            "points": 5,
            "options": [
                { "id": "a", "text": "The Constitution of Kenya", "isCorrect": true },
                { "id": "b", "text": "The Civil Procedure Act (Cap 21)", "isCorrect": true },
                { "id": "c", "text": "The Penal Code", "isCorrect": false },
                { "id": "d", "text": "Judicial Precedents (Case Law)", "isCorrect": true }
            ],
            "explanation": "The sources of Civil Procedure include the Constitution, Statutes (specifically the Civil Procedure Act), Rules of Court (Civil Procedure Rules), and Case Law. The Penal Code relates to Criminal Law."
        },
        {
            "id": "q2-limitation",
            "topicId": "topic-02",
            "topicName": "Taking Instructions",
            "type": "fill-blank",
            "question": "Under the Limitation of Actions Act (Cap 22), an action founded on tort must be brought within __1__ years, while an action founded on contract must be brought within __2__ years.",
            "points": 10,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["3", "three"], "caseSensitive": false },
                { "id": "2", "acceptedAnswers": ["6", "six"], "caseSensitive": false }
            ],
            "explanation": "Actions founded on tort have a limitation period of 3 years, while actions founded on contract have a limitation period of 6 years."
        },
        {
            "id": "q3-jurisdiction",
            "topicId": "topic-03",
            "topicName": "Court Jurisdiction",
            "type": "multiple-choice",
            "question": "Which court has unlimited original jurisdiction in civil and criminal matters in Kenya?",
            "points": 5,
            "options": [
                { "id": "a", "text": "The Supreme Court", "isCorrect": false },
                { "id": "b", "text": "The Court of Appeal", "isCorrect": false },
                { "id": "c", "text": "The High Court", "isCorrect": true },
                { "id": "d", "text": "The Chief Magistrate's Court", "isCorrect": false }
            ],
            "explanation": "Article 165 of the Constitution grants the High Court unlimited original jurisdiction in criminal and civil matters."
        },
        {
            "id": "q4-oxygen",
            "topicId": "topic-04",
            "topicName": "Overriding Objective",
            "type": "true-false",
            "question": "The Overriding Objective ('Oxygen Principle') requires the court to administer justice without undue regard to procedural technicalities.",
            "points": 5,
            "correctAnswer": true,
            "explanation": "This is a core principle enshrined in Article 159(2)(d) of the Constitution and Sections 1A and 1B of the Civil Procedure Act."
        },
        {
            "id": "q5-summons",
            "topicId": "topic-05",
            "topicName": "Commencement & Service",
            "type": "multiple-choice",
            "question": "What is the initial validity period of a summons to enter appearance before it must be renewed?",
            "points": 5,
            "options": [
                { "id": "a", "text": "30 days", "isCorrect": false },
                { "id": "b", "text": "6 months", "isCorrect": false },
                { "id": "c", "text": "12 months", "isCorrect": true },
                { "id": "d", "text": "24 months", "isCorrect": false }
            ],
            "explanation": "Under Order 5 Rule 2, summons shall be valid initially for 12 months from the date of issue."
        },
        {
            "id": "q6-injunctions",
            "topicId": "topic-06",
            "topicName": "Interlocutory Applications",
            "type": "multiple-select",
            "question": "According to Giella v Cassman Brown, what conditions must an applicant satisfy to be granted an interlocutory injunction? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "A prima facie case with a probability of success", "isCorrect": true },
                { "id": "b", "text": "Proof beyond reasonable doubt", "isCorrect": false },
                { "id": "c", "text": "Irreparable injury that cannot be compensated by damages", "isCorrect": true },
                { "id": "d", "text": "Balance of convenience favors the applicant", "isCorrect": true }
            ],
            "explanation": "The three pillars of Giella v Cassman Brown are: (1) Prima facie case, (2) Irreparable injury, and (3) Balance of convenience if the court is in doubt."
        },
        {
            "id": "q7-govt-execution",
            "topicId": "topic-07",
            "topicName": "Trial & Execution",
            "type": "multiple-choice",
            "question": "Which of the following is the correct method for enforcing a money decree against the Government?",
            "points": 5,
            "options": [
                { "id": "a", "text": "Attachment and sale of government vehicles", "isCorrect": false },
                { "id": "b", "text": "Arrest of the Permanent Secretary", "isCorrect": false },
                { "id": "c", "text": "Applying for a Certificate of Order against the Government", "isCorrect": true },
                { "id": "d", "text": "Garnishee proceedings against the Central Bank", "isCorrect": false }
            ],
            "explanation": "Under the Government Proceedings Act (Section 21), execution orders like attachment or arrest cannot issue against the Government. The remedy is to apply for a Certificate of Order (Satisfaction Order)."
        },
        {
            "id": "q8-appeal-stay",
            "topicId": "topic-08",
            "topicName": "Appeals & Reviews",
            "type": "true-false",
            "question": "Filing a Notice of Appeal automatically operates as a stay of execution of the decree appealed from.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "Order 42 Rule 6(1) explicitly states that no appeal or notice of appeal shall operate as a stay of execution. A specific order for stay must be applied for and granted."
        },
        {
            "id": "q9-jr-remedies",
            "topicId": "topic-09",
            "topicName": "Judicial Review",
            "type": "matching",
            "question": "Match the Prerogative Order to its function:",
            "points": 10,
            "pairs": [
                { "id": "p1", "left": "Certiorari", "right": "Quashing a decision of an inferior body" },
                { "id": "p2", "left": "Mandamus", "right": "Compelling performance of a public duty" },
                { "id": "p3", "left": "Prohibition", "right": "Stopping proceedings in excess of jurisdiction" }
            ],
            "explanation": "Certiorari removes and quashes decisions; Mandamus compels mandatory duties; Prohibition restrains future or ongoing excess of jurisdiction."
        },
        {
            "id": "q10-election-timeline",
            "topicId": "topic-10",
            "topicName": "Constitutional & Election Petitions",
            "type": "multiple-choice",
            "question": "An election petition challenging the election of a Member of Parliament must be filed within how many days after the publication of results?",
            "points": 5,
            "options": [
                { "id": "a", "text": "14 days", "isCorrect": false },
                { "id": "b", "text": "21 days", "isCorrect": false },
                { "id": "c", "text": "28 days", "isCorrect": true },
                { "id": "d", "text": "60 days", "isCorrect": false }
            ],
            "explanation": "Under the Elections Act, a petition must be filed within 28 days after the date of publication of the results in the Gazette."
        },
        {
            "id": "q11-pre-trial",
            "topicId": "topic-06",
            "topicName": "Interlocutory Applications",
            "type": "fill-blank",
            "question": "An __1__ Order allows an applicant to enter a respondent's premises to search for and seize evidence that might otherwise be destroyed.",
            "points": 5,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["Anton Piller", "Anton Pillar"], "caseSensitive": false }
            ],
            "explanation": "An Anton Piller order (now often called a search order) is a form of civil search warrant used to preserve evidence."
        },
        {
            "id": "q12-pleadings",
            "topicId": "topic-05",
            "topicName": "Pleadings",
            "type": "true-false",
            "question": "An affidavit is technically considered a pleading under the Civil Procedure Act definition.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "An affidavit is evidence on oath, not a pleading. Pleadings are statements of facts (Plaint, Defence, etc.) as defined in Section 2 of the Act."
        },
        {
            "id": "q13-review-grounds",
            "topicId": "topic-08",
            "topicName": "Appeals & Reviews",
            "type": "multiple-select",
            "question": "Which of the following are valid grounds for applying for a Review of judgment under Order 45? (Select all that apply)",
            "points": 10,
            "options": [
                { "id": "a", "text": "Discovery of new and important evidence", "isCorrect": true },
                { "id": "b", "text": "Mistake or error apparent on the face of the record", "isCorrect": true },
                { "id": "c", "text": "The judge made a wrong conclusion of law requiring re-argument", "isCorrect": false },
                { "id": "d", "text": "Any other sufficient reason", "isCorrect": true }
            ],
            "explanation": "Review is not an appeal. It is limited to new evidence, apparent errors, or analogous sufficient reasons. It is not for re-arguing the case on merits."
        },
        {
            "id": "q14-trial-order",
            "topicId": "topic-07",
            "topicName": "Trial & Judgment",
            "type": "ordering",
            "question": "Arrange the standard order of examination for a witness during trial:",
            "points": 10,
            "items": [
                { "id": "i1", "text": "Examination-in-Chief", "correctPosition": 1 },
                { "id": "i2", "text": "Cross-Examination", "correctPosition": 2 },
                { "id": "i3", "text": "Re-Examination", "correctPosition": 3 }
            ],
            "explanation": "The party calling the witness examines in chief, the opposing party cross-examines, and the calling party may re-examine to clarify points raised in cross-examination."
        },
        {
            "id": "q15-demand-letter",
            "topicId": "topic-02",
            "topicName": "Taking Instructions",
            "type": "multiple-choice",
            "question": "In which of the following scenarios is a Demand Letter generally NOT advisable?",
            "points": 5,
            "options": [
                { "id": "a", "text": "A standard debt collection case", "isCorrect": false },
                { "id": "b", "text": "When seeking an Anton Piller order or Mareva injunction", "isCorrect": true },
                { "id": "c", "text": "A suit for breach of contract", "isCorrect": false },
                { "id": "d", "text": "A negligence claim against the government", "isCorrect": false }
            ],
            "explanation": "A demand letter would defeat the element of surprise required for Anton Piller (search) or Mareva (freezing assets) orders, as the defendant might destroy evidence or hide assets."
        },
        {
            "id": "q16-res-judicata",
            "topicId": "topic-03",
            "topicName": "Court Jurisdiction",
            "type": "multiple-choice",
            "question": "The doctrine that bars a court from trying a suit where the matter has been directly and substantially in issue in a former suit between the same parties and has been heard and finally decided is known as:",
            "points": 5,
            "options": [
                { "id": "a", "text": "Sub-judice", "isCorrect": false },
                { "id": "b", "text": "Locus standi", "isCorrect": false },
                { "id": "c", "text": "Res judicata", "isCorrect": true },
                { "id": "d", "text": "Stare decisis", "isCorrect": false }
            ],
            "explanation": "Res judicata (Section 7 CPA) ensures finality in litigation by preventing re-litigation of decided matters. Sub-judice applies to pending matters."
        },
        {
            "id": "q17-amendment",
            "topicId": "topic-05",
            "topicName": "Commencement & Pleadings",
            "type": "fill-blank",
            "question": "A party may amend their pleadings once without leave of the court before the pleadings are __1__.",
            "points": 5,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["closed"], "caseSensitive": false }
            ],
            "explanation": "Order 8 allows amendment without leave once before pleadings are closed. After closure, leave of court is required."
        },
        {
            "id": "q18-subordinate-courts",
            "topicId": "topic-03",
            "topicName": "Court Structure",
            "type": "multiple-select",
            "question": "Which of the following are classified as Subordinate Courts under Article 169 of the Constitution? (Select all that apply)",
            "points": 5,
            "options": [
                { "id": "a", "text": "Magistrates Courts", "isCorrect": true },
                { "id": "b", "text": "High Court", "isCorrect": false },
                { "id": "c", "text": "Kadhis' Courts", "isCorrect": true },
                { "id": "d", "text": "Court Martial", "isCorrect": true }
            ],
            "explanation": "The High Court is a Superior Court. Magistrates, Kadhis', and Courts Martial are Subordinate Courts."
        },
        {
            "id": "q19-garnishee",
            "topicId": "topic-07",
            "topicName": "Trial & Execution",
            "type": "multiple-choice",
            "question": "In garnishee proceedings, the 'Order Nisi' serves what primary purpose?",
            "points": 5,
            "options": [
                { "id": "a", "text": "It compels immediate payment to the decree holder", "isCorrect": false },
                { "id": "b", "text": "It temporarily freezes the money in the hands of the garnishee", "isCorrect": true },
                { "id": "c", "text": "It declares the judgment debtor bankrupt", "isCorrect": false },
                { "id": "d", "text": "It orders the arrest of the garnishee", "isCorrect": false }
            ],
            "explanation": "The Order Nisi is a provisional order that attaches (freezes) the debt and calls upon the garnishee to show cause why they should not pay the decree holder."
        },
        {
            "id": "q20-leave-jr",
            "topicId": "topic-09",
            "topicName": "Judicial Review",
            "type": "true-false",
            "question": "An application for leave to apply for Judicial Review is made by Notice of Motion in open court.",
            "points": 5,
            "correctAnswer": false,
            "explanation": "The application for leave (Stage 1) is made Ex Parte by Chamber Summons. The substantive application (Stage 2) is made by Notice of Motion."
        }
    ]
});