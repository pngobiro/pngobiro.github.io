registerQuiz("comprehensive-exam", {
    "schemaVersion": "1.0",
    "quizId": "comprehensive-exam",
    "metadata": {
        "title": "Civil Litigation Comprehensive Exam",
        "description": "A final assessment covering all aspects of civil procedure in Kenya, from pre-trial considerations to execution of decrees.",
        "examType": "comprehensive",
        "topicsCovered": [
            "topic-01", "topic-02", "topic-03", "topic-04", "topic-05",
            "topic-06", "topic-07", "topic-08", "topic-09", "topic-10",
            "topic-11", "topic-12", "topic-13", "topic-14", "topic-15",
            "topic-16", "topic-17", "topic-18", "topic-19", "topic-20"
        ],
        "difficulty": "advanced",
        "estimatedTime": 60,
        "passingScore": 70,
        "createdAt": "2026-01-04T10:00:00Z",
        "tags": ["final", "comprehensive", "civil-procedure", "kenya-law"]
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
        // Topic 01: Pre-Trial
        {
            "id": "comp-q01",
            "type": "multiple-choice",
            "question": "Which of the following is NOT an essential element to establish a cause of action in negligence?",
            "points": 2,
            "topicId": "topic-01",
            "topicName": "Pre-Trial Considerations",
            "options": [
                { "id": "a", "text": "Duty of care", "isCorrect": false },
                { "id": "b", "text": "Breach of duty", "isCorrect": false },
                { "id": "c", "text": "Malice aforethought", "isCorrect": true },
                { "id": "d", "text": "Damages", "isCorrect": false }
            ],
            "explanation": "Malice is an element of crimes like murder, not the tort of negligence. Negligence requires duty, breach, causation, and damages."
        },
        {
            "id": "comp-q02",
            "type": "matching",
            "question": "Match the type of action with its limitation period under the Limitation of Actions Act:",
            "points": 4,
            "topicId": "topic-01",
            "topicName": "Pre-Trial Considerations",
            "pairs": [
                { "id": "p1", "left": "Tort (General)", "right": "3 Years" },
                { "id": "p2", "left": "Contract", "right": "6 Years" },
                { "id": "p3", "left": "Recovery of Land", "right": "12 Years" },
                { "id": "p4", "left": "Libel/Slander", "right": "12 Months" }
            ]
        },

        // Topic 02: Demand Letter
        {
            "id": "comp-q03",
            "type": "true-false",
            "question": "It is professional misconduct for an advocate to demand their own costs in a standard demand letter to a debtor.",
            "points": 2,
            "topicId": "topic-02",
            "topicName": "The Demand Letter",
            "correctAnswer": true,
            "explanation": "Advocates cannot demand collection costs from a debtor in the initial demand letter unless there is a specific agreement or statute allowing it."
        },
        {
            "id": "comp-q04",
            "type": "multiple-choice",
            "question": "What is the primary effect of marking a letter 'Without Prejudice'?",
            "points": 2,
            "topicId": "topic-02",
            "topicName": "The Demand Letter",
            "options": [
                { "id": "a", "text": "It guarantees a settlement will be reached.", "isCorrect": false },
                { "id": "b", "text": "It prevents the letter from being used as evidence of admissions in court.", "isCorrect": true },
                { "id": "c", "text": "It allows the advocate to use threatening language.", "isCorrect": false },
                { "id": "d", "text": "It extends the limitation period.", "isCorrect": false }
            ],
            "explanation": "'Without Prejudice' protects genuine settlement negotiations from being disclosed to the court as admissions of liability."
        },

        // Topic 03: Jurisdiction
        {
            "id": "comp-q05",
            "type": "multiple-choice",
            "question": "Which High Court division handles matters regarding the administration of a deceased person's estate?",
            "points": 2,
            "topicId": "topic-03",
            "topicName": "Jurisdiction & Venue",
            "options": [
                { "id": "a", "text": "Civil Division", "isCorrect": false },
                { "id": "b", "text": "Commercial & Tax Division", "isCorrect": false },
                { "id": "c", "text": "Family Division", "isCorrect": true },
                { "id": "d", "text": "Constitutional Division", "isCorrect": false }
            ],
            "explanation": "Probate and administration causes are filed in the Family Division."
        },
        {
            "id": "comp-q06",
            "type": "true-false",
            "question": "A suit involving immovable property must strictly be instituted in the court within whose local limits the property is situated.",
            "points": 2,
            "topicId": "topic-03",
            "topicName": "Jurisdiction & Venue",
            "correctAnswer": true,
            "explanation": "Section 12 of the Civil Procedure Act dictates that suits regarding immovable property follow the location of the property."
        },

        // Topic 04: Parties
        {
            "id": "comp-q07",
            "type": "fill-blank",
            "question": "A minor sues through a __1__ and defends through a __2__.",
            "points": 4,
            "topicId": "topic-04",
            "topicName": "Parties to a Suit",
            "blanks": [
                { "id": "1", "acceptedAnswers": ["next friend", "Next Friend"], "caseSensitive": false },
                { "id": "2", "acceptedAnswers": ["guardian ad litem", "Guardian ad litem"], "caseSensitive": false }
            ],
            "explanation": "A minor plaintiff requires a Next Friend; a minor defendant requires a Guardian ad litem."
        },
        {
            "id": "comp-q08",
            "type": "multiple-choice",
            "question": "Which party must be joined in any suit involving the interpretation of the Constitution?",
            "points": 2,
            "topicId": "topic-04",
            "topicName": "Parties to a Suit",
            "options": [
                { "id": "a", "text": "The Chief Justice", "isCorrect": false },
                { "id": "b", "text": "The Attorney General", "isCorrect": true },
                { "id": "c", "text": "The Law Society of Kenya", "isCorrect": false },
                { "id": "d", "text": "The Director of Public Prosecutions", "isCorrect": false }
            ],
            "explanation": "The Attorney General is the principal legal adviser to the Government and a necessary party in constitutional interpretation matters."
        },

        // Topic 05: The Plaint
        {
            "id": "comp-q09",
            "type": "multiple-select",
            "question": "Which of the following MUST be specifically pleaded in a plaint? (Select all that apply)",
            "points": 3,
            "topicId": "topic-05",
            "topicName": "Originating Actions",
            "options": [
                { "id": "a", "text": "Fraud", "isCorrect": true },
                { "id": "b", "text": "Evidence", "isCorrect": false },
                { "id": "c", "text": "Limitation of actions", "isCorrect": true },
                { "id": "d", "text": "General damages amount", "isCorrect": false }
            ],
            "explanation": "Order 2 Rule 4 requires specific pleading of fraud, limitation, illegality, etc. Evidence should NOT be pleaded."
        },
        {
            "id": "comp-q10",
            "type": "multiple-choice",
            "question": "What is the primary document used to institute a suit where the facts are generally not in dispute?",
            "points": 2,
            "topicId": "topic-05",
            "topicName": "Originating Actions",
            "options": [
                { "id": "a", "text": "Plaint", "isCorrect": false },
                { "id": "b", "text": "Notice of Motion", "isCorrect": false },
                { "id": "c", "text": "Originating Summons", "isCorrect": true },
                { "id": "d", "text": "Chamber Summons", "isCorrect": false }
            ],
            "explanation": "Originating Summons (O.S.) is used for simpler/speedier processes where facts are agreed, such as interpretation of wills or mortgages."
        },

        // Topic 06: Summons
        {
            "id": "comp-q11",
            "type": "multiple-choice",
            "question": "What is the initial validity period of a summons from the date of issue?",
            "points": 2,
            "topicId": "topic-06",
            "topicName": "Issue & Service of Summons",
            "options": [
                { "id": "a", "text": "30 days", "isCorrect": false },
                { "id": "b", "text": "6 months", "isCorrect": false },
                { "id": "c", "text": "12 months", "isCorrect": true },
                { "id": "d", "text": "24 months", "isCorrect": false }
            ],
            "explanation": "Summons are valid for 12 months. If not served, they must be renewed before expiry."
        },
        {
            "id": "comp-q12",
            "type": "true-false",
            "question": "Service of summons upon the Government must be done personally on the Attorney General.",
            "points": 2,
            "topicId": "topic-06",
            "topicName": "Issue & Service of Summons",
            "correctAnswer": false,
            "explanation": "Service on the Government is done by leaving it at the AG's office or sending it via registered post. Personal service is not required."
        },

        // Topic 07: Defence
        {
            "id": "comp-q13",
            "type": "multiple-choice",
            "question": "If a defendant is served with summons, within how many days must they file a defence after entering appearance?",
            "points": 2,
            "topicId": "topic-07",
            "topicName": "Defence & Counterclaim",
            "options": [
                { "id": "a", "text": "7 days", "isCorrect": false },
                { "id": "b", "text": "10 days", "isCorrect": false },
                { "id": "c", "text": "14 days", "isCorrect": true },
                { "id": "d", "text": "21 days", "isCorrect": false }
            ],
            "explanation": "Order 7 Rule 1 requires the defence to be filed within 14 days of entering appearance."
        },
        {
            "id": "comp-q14",
            "type": "fill-blank",
            "question": "A __1__ acts as a shield (defence only), whereas a __2__ acts as a sword (cross-action).",
            "points": 4,
            "topicId": "topic-07",
            "topicName": "Defence & Counterclaim",
            "blanks": [
                { "id": "1", "acceptedAnswers": ["set-off", "set off", "setoff"], "caseSensitive": false },
                { "id": "2", "acceptedAnswers": ["counterclaim", "counter-claim", "counter claim"], "caseSensitive": false }
            ],
            "explanation": "Set-off is a defence to reduce the claim. Counterclaim is an independent action."
        },

        // Topic 08: Default Judgment
        {
            "id": "comp-q15",
            "type": "multiple-choice",
            "question": "What type of judgment is entered when a defendant fails to appear in a claim for unliquidated damages?",
            "points": 2,
            "topicId": "topic-08",
            "topicName": "Default Judgments",
            "options": [
                { "id": "a", "text": "Final Judgment", "isCorrect": false },
                { "id": "b", "text": "Summary Judgment", "isCorrect": false },
                { "id": "c", "text": "Interlocutory Judgment", "isCorrect": true },
                { "id": "d", "text": "Consent Judgment", "isCorrect": false }
            ],
            "explanation": "Interlocutory judgment is entered for unliquidated claims, pending formal proof (assessment of damages)."
        },
        {
            "id": "comp-q16",
            "type": "multiple-choice",
            "question": "An 'irregular' judgment is one obtained:",
            "points": 2,
            "topicId": "topic-08",
            "topicName": "Default Judgments",
            "options": [
                { "id": "a", "text": "Where the defendant has no defence on merit", "isCorrect": false },
                { "id": "b", "text": "In breach of the rules (e.g., faulty service)", "isCorrect": true },
                { "id": "c", "text": "Through a summary procedure", "isCorrect": false },
                { "id": "d", "text": "By consent of parties", "isCorrect": false }
            ],
            "explanation": "Irregular judgments are obtained contrary to rules (e.g., entered too early or without service) and are set aside *ex debito justitiae*."
        },

        // Topic 09: Third Party & Interpleader
        {
            "id": "comp-q17",
            "type": "multiple-choice",
            "question": "A defendant may issue a Third Party Notice when seeking:",
            "points": 2,
            "topicId": "topic-09",
            "topicName": "Third Party & Interpleader",
            "options": [
                { "id": "a", "text": "To counterclaim against the plaintiff", "isCorrect": false },
                { "id": "b", "text": "Contribution or indemnity from a non-party", "isCorrect": true },
                { "id": "c", "text": "To strike out the suit", "isCorrect": false },
                { "id": "d", "text": "To obtain security for costs", "isCorrect": false }
            ],
            "explanation": "Order 1 Rule 15 allows third party proceedings for contribution or indemnity."
        },
        {
            "id": "comp-q18",
            "type": "true-false",
            "question": "In interpleader proceedings, the applicant must have a personal interest in the subject matter in dispute.",
            "points": 2,
            "topicId": "topic-09",
            "topicName": "Third Party & Interpleader",
            "correctAnswer": false,
            "explanation": "The applicant in interpleader must be neutral and claim NO interest in the subject matter other than costs/charges."
        },

        // Topic 10: Striking Out
        {
            "id": "comp-q19",
            "type": "multiple-select",
            "question": "On what grounds can a pleading be struck out under Order 2 Rule 15? (Select all that apply)",
            "points": 3,
            "topicId": "topic-10",
            "topicName": "Striking Out Pleadings",
            "options": [
                { "id": "a", "text": "It discloses no reasonable cause of action", "isCorrect": true },
                { "id": "b", "text": "It is scandalous, frivolous or vexatious", "isCorrect": true },
                { "id": "c", "text": "The advocate failed to sign it", "isCorrect": false },
                { "id": "d", "text": "It is an abuse of the process of the court", "isCorrect": true }
            ],
            "explanation": "Grounds for striking out are: no reasonable cause of action, scandalous/frivolous/vexatious, prejudice/delay, or abuse of process. Failure to sign is usually cured by amendment."
        },

        // Topic 11: Summary Procedure
        {
            "id": "comp-q20",
            "type": "multiple-choice",
            "question": "Order 36 (Summary Procedure) applies primarily to claims for:",
            "points": 2,
            "topicId": "topic-11",
            "topicName": "Summary Procedure",
            "options": [
                { "id": "a", "text": "Defamation", "isCorrect": false },
                { "id": "b", "text": "Fraud", "isCorrect": false },
                { "id": "c", "text": "Liquidated debts", "isCorrect": true },
                { "id": "d", "text": "General damages", "isCorrect": false }
            ],
            "explanation": "Summary procedure is for liquidated claims where there is no bona fide defence."
        },
        {
            "id": "comp-q21",
            "type": "true-false",
            "question": "Under the 'Cheque Rule', a defendant can set off a claim for defective goods against a claim on a dishonoured cheque.",
            "points": 2,
            "topicId": "topic-11",
            "topicName": "Summary Procedure",
            "correctAnswer": false,
            "explanation": "Cheques are treated as cash. A defendant must pay on the cheque first and counterclaim for damages later; set-off is generally not allowed."
        },

        // Topic 12: Case Management
        {
            "id": "comp-q22",
            "type": "ordering",
            "question": "Arrange the Order 11 Case Management conferences in chronological order:",
            "points": 3,
            "topicId": "topic-12",
            "topicName": "Case Management",
            "items": [
                { "id": "i1", "text": "Close of Pleadings", "correctPosition": 1 },
                { "id": "i2", "text": "Case Conference", "correctPosition": 2 },
                { "id": "i3", "text": "Settlement Conference", "correctPosition": 3 },
                { "id": "i4", "text": "Trial Conference", "correctPosition": 4 }
            ]
        },
        {
            "id": "comp-q23",
            "type": "multiple-choice",
            "question": "Which of the following is NOT subject to discovery due to privilege?",
            "points": 2,
            "topicId": "topic-12",
            "topicName": "Case Management",
            "options": [
                { "id": "a", "text": "Bank statements", "isCorrect": false },
                { "id": "b", "text": "Medical reports relied upon", "isCorrect": false },
                { "id": "c", "text": "Communications between advocate and client", "isCorrect": true },
                { "id": "d", "text": "Employment contracts", "isCorrect": false }
            ],
            "explanation": "Advocate-client communications are privileged under Section 134 of the Evidence Act, unless made in furtherance of an illegal purpose."
        },

        // Topic 13: Interim Orders
        {
            "id": "comp-q24",
            "type": "multiple-choice",
            "question": "Security for costs may be ordered against a plaintiff who:",
            "points": 2,
            "topicId": "topic-13",
            "topicName": "Interim Orders",
            "options": [
                { "id": "a", "text": "Has a strong case", "isCorrect": false },
                { "id": "b", "text": "Is resident in Kenya with assets", "isCorrect": false },
                { "id": "c", "text": "Resides abroad and has no local assets", "isCorrect": true },
                { "id": "d", "text": "Is suing the government", "isCorrect": false }
            ],
            "explanation": "Security for costs protects a defendant when the plaintiff is a foreign resident with no local assets to satisfy a costs order."
        },
        {
            "id": "comp-q25",
            "type": "fill-blank",
            "question": "An order for a __1__ is used to examine witnesses who are unable to attend court due to illness or distance.",
            "points": 3,
            "topicId": "topic-13",
            "topicName": "Interim Orders",
            "blanks": [
                { "id": "1", "acceptedAnswers": ["commission"], "caseSensitive": false }
            ],
            "explanation": "A commission allows evidence to be taken outside the courtroom."
        },

        // Topic 14: Injunctions
        {
            "id": "comp-q26",
            "type": "multiple-choice",
            "question": "Which case established the three-part test for interlocutory injunctions in East Africa?",
            "points": 2,
            "topicId": "topic-14",
            "topicName": "Injunctions",
            "options": [
                { "id": "a", "text": "Donoghue v Stevenson", "isCorrect": false },
                { "id": "b", "text": "Giella v Cassman Brown", "isCorrect": true },
                { "id": "c", "text": "Salomon v Salomon", "isCorrect": false },
                { "id": "d", "text": "Rylands v Fletcher", "isCorrect": false }
            ],
            "explanation": "Giella v Cassman Brown sets out: 1) Prima facie case, 2) Irreparable injury, 3) Balance of convenience."
        },
        {
            "id": "comp-q27",
            "type": "matching",
            "question": "Match the specialized injunction to its purpose:",
            "points": 3,
            "topicId": "topic-14",
            "topicName": "Injunctions",
            "pairs": [
                { "id": "p1", "left": "Mareva Injunction", "right": "Freezing assets to prevent dissipation" },
                { "id": "p2", "left": "Anton Piller Order", "right": "Search and seizure of evidence" },
                { "id": "p3", "left": "Mandatory Injunction", "right": "Compelling a positive act" }
            ]
        },
        {
            "id": "comp-q28",
            "type": "multiple-choice",
            "question": "An ex parte injunction may generally be granted for a maximum of how many days initially?",
            "points": 2,
            "topicId": "topic-14",
            "topicName": "Injunctions",
            "options": [
                { "id": "a", "text": "7 days", "isCorrect": false },
                { "id": "b", "text": "14 days", "isCorrect": true },
                { "id": "c", "text": "30 days", "isCorrect": false },
                { "id": "d", "text": "60 days", "isCorrect": false }
            ],
            "explanation": "Order 40 Rule 4 limits ex parte injunctions to 14 days."
        },

        // Topic 15: Hearing
        {
            "id": "comp-q29",
            "type": "multiple-choice",
            "question": "What is the consequence under Order 12 if neither party attends the hearing?",
            "points": 2,
            "topicId": "topic-15",
            "topicName": "Hearing & Non-Attendance",
            "options": [
                { "id": "a", "text": "Judgment for defendant", "isCorrect": false },
                { "id": "b", "text": "Adjournment", "isCorrect": false },
                { "id": "c", "text": "Dismissal of the suit", "isCorrect": true },
                { "id": "d", "text": "Case struck out", "isCorrect": false }
            ],
            "explanation": "If neither party appears when the suit is called, the court may dismiss it (Order 12 Rule 1)."
        },
        {
            "id": "comp-q30",
            "type": "true-false",
            "question": "If a suit is dismissed because only the defendant appeared (Order 12 Rule 3), the plaintiff can automatically file a fresh suit.",
            "points": 2,
            "topicId": "topic-15",
            "topicName": "Hearing & Non-Attendance",
            "correctAnswer": false,
            "explanation": "Under Order 12 Rule 6, a fresh suit is barred in this scenario. The plaintiff must apply to set aside the dismissal."
        },

        // Topic 16: Trial Process
        {
            "id": "comp-q31",
            "type": "ordering",
            "question": "Order the stages of examining a witness:",
            "points": 3,
            "topicId": "topic-16",
            "topicName": "The Trial Process",
            "items": [
                { "id": "i1", "text": "Examination-in-chief", "correctPosition": 1 },
                { "id": "i2", "text": "Cross-examination", "correctPosition": 2 },
                { "id": "i3", "text": "Re-examination", "correctPosition": 3 }
            ]
        },
        {
            "id": "comp-q32",
            "type": "multiple-choice",
            "question": "Who generally has the right to begin at trial?",
            "points": 2,
            "topicId": "topic-16",
            "topicName": "The Trial Process",
            "options": [
                { "id": "a", "text": "The Defendant", "isCorrect": false },
                { "id": "b", "text": "The Plaintiff", "isCorrect": true },
                { "id": "c", "text": "The Court decides", "isCorrect": false },
                { "id": "d", "text": "The Senior Counsel", "isCorrect": false }
            ],
            "explanation": "The plaintiff has the right to begin unless the defendant admits facts but argues on law."
        },

        // Topic 17: Judgment & Decree
        {
            "id": "comp-q33",
            "type": "multiple-choice",
            "question": "Judgment must be pronounced within how many days from the conclusion of the trial?",
            "points": 2,
            "topicId": "topic-17",
            "topicName": "Judgment & Decree",
            "options": [
                { "id": "a", "text": "30 days", "isCorrect": false },
                { "id": "b", "text": "45 days", "isCorrect": false },
                { "id": "c", "text": "60 days", "isCorrect": true },
                { "id": "d", "text": "90 days", "isCorrect": false }
            ],
            "explanation": "Order 21 Rule 1 mandates judgment within 60 days."
        },
        {
            "id": "comp-q34",
            "type": "fill-blank",
            "question": "A __1__ is the formal expression of adjudication which conclusively determines the rights of the parties.",
            "points": 3,
            "topicId": "topic-17",
            "topicName": "Judgment & Decree",
            "blanks": [
                { "id": "1", "acceptedAnswers": ["decree"], "caseSensitive": false }
            ],
            "explanation": "The decree is the technical document extracted from the judgment used for execution."
        },

        // Topic 18: Post-Judgment Remedies
        {
            "id": "comp-q35",
            "type": "multiple-choice",
            "question": "Which of the following is NOT a requirement for granting a stay of execution pending appeal?",
            "points": 2,
            "topicId": "topic-18",
            "topicName": "Remedies After Judgment",
            "options": [
                { "id": "a", "text": "Substantial loss will result", "isCorrect": false },
                { "id": "b", "text": "Application made without delay", "isCorrect": false },
                { "id": "c", "text": "Security for performance is furnished", "isCorrect": false },
                { "id": "d", "text": "Consent of the decree holder", "isCorrect": true }
            ],
            "explanation": "Consent is not required. The court exercises discretion based on loss, delay, and security."
        },
        {
            "id": "comp-q36",
            "type": "true-false",
            "question": "In objector proceedings, the primary question for the court is who has the legal title to the property.",
            "points": 2,
            "topicId": "topic-18",
            "topicName": "Remedies After Judgment",
            "correctAnswer": false,
            "explanation": "The primary question in objector proceedings is POSSESSION, not title (though title may explain possession)."
        },

        // Topic 19: Execution
        {
            "id": "comp-q37",
            "type": "multiple-choice",
            "question": "When attaching immovable property, when can the sale take place after the notification?",
            "points": 2,
            "topicId": "topic-19",
            "topicName": "Execution of Decrees",
            "options": [
                { "id": "a", "text": "Immediately", "isCorrect": false },
                { "id": "b", "text": "After 7 days", "isCorrect": false },
                { "id": "c", "text": "After 15 days", "isCorrect": false },
                { "id": "d", "text": "After 30 days", "isCorrect": true }
            ],
            "explanation": "For immovable property, notice of sale must be at least 30 days."
        },
        {
            "id": "comp-q38",
            "type": "multiple-choice",
            "question": "What is the maximum portion of a salary that can be attached in execution?",
            "points": 2,
            "topicId": "topic-19",
            "topicName": "Execution of Decrees",
            "options": [
                { "id": "a", "text": "One quarter", "isCorrect": false },
                { "id": "b", "text": "One third", "isCorrect": true },
                { "id": "c", "text": "One half", "isCorrect": false },
                { "id": "d", "text": "Two thirds", "isCorrect": false }
            ],
            "explanation": "Section 44 limits attachment to one-third of the salary."
        },

        // Topic 20: Garnishee & Government
        {
            "id": "comp-q39",
            "type": "fill-blank",
            "question": "The first stage of garnishee proceedings results in an Order __1__, and the final stage results in an Order __2__.",
            "points": 4,
            "topicId": "topic-20",
            "topicName": "Garnishee & Government",
            "blanks": [
                { "id": "1", "acceptedAnswers": ["nisi"], "caseSensitive": false },
                { "id": "2", "acceptedAnswers": ["absolute"], "caseSensitive": false }
            ],
            "explanation": "Order Nisi (temporary) -> Order Absolute (final)."
        },
        {
            "id": "comp-q40",
            "type": "multiple-choice",
            "question": "Which execution method is PROHIBITED against the Government?",
            "points": 2,
            "topicId": "topic-20",
            "topicName": "Garnishee & Government",
            "options": [
                { "id": "a", "text": "Certificate of Order", "isCorrect": false },
                { "id": "b", "text": "Mandamus", "isCorrect": false },
                { "id": "c", "text": "Attachment of Property", "isCorrect": true },
                { "id": "d", "text": "Declaratory Order", "isCorrect": false }
            ],
            "explanation": "The Government Proceedings Act prohibits attachment of government property. Enforcement is via Certificate of Order."
        },

        // Extra Questions to reach 50
        {
            "id": "comp-q41",
            "type": "multiple-choice",
            "question": "Which of these is NOT a ground for objecting to interrogatories?",
            "points": 2,
            "topicId": "topic-12",
            "topicName": "Case Management",
            "options": [
                { "id": "a", "text": "They are scandalous", "isCorrect": false },
                { "id": "b", "text": "They relate to matters in issue", "isCorrect": true },
                { "id": "c", "text": "They are a fishing expedition", "isCorrect": false },
                { "id": "d", "text": "They seek privileged information", "isCorrect": false }
            ],
            "explanation": "Interrogatories MUST relate to matters in issue. That is the reason to ALLOW them, not object."
        },
        {
            "id": "comp-q42",
            "type": "true-false",
            "question": "A preliminary decree determines the final rights of parties without need for further inquiry.",
            "points": 2,
            "topicId": "topic-17",
            "topicName": "Judgment & Decree",
            "correctAnswer": false,
            "explanation": "A preliminary decree declares rights but leaves matters (like accounts or partition) to be worked out before a final decree."
        },
        {
            "id": "comp-q43",
            "type": "multiple-choice",
            "question": "Under what condition can a defendant be arrested before judgment?",
            "points": 2,
            "topicId": "topic-13",
            "topicName": "Interim Orders",
            "options": [
                { "id": "a", "text": "Failure to file defence", "isCorrect": false },
                { "id": "b", "text": "Inability to pay debt", "isCorrect": false },
                { "id": "c", "text": "Intent to abscond and delay plaintiff", "isCorrect": true },
                { "id": "d", "text": "Refusal to attend mediation", "isCorrect": false }
            ],
            "explanation": "Arrest before judgment is an extreme measure for when a defendant plans to abscond to defeat justice."
        },
        {
            "id": "comp-q44",
            "type": "multiple-choice",
            "question": "Which document verifies the contents of a plaint?",
            "points": 2,
            "topicId": "topic-05",
            "topicName": "Originating Actions",
            "options": [
                { "id": "a", "text": "Witness Statement", "isCorrect": false },
                { "id": "b", "text": "List of Documents", "isCorrect": false },
                { "id": "c", "text": "Verifying Affidavit", "isCorrect": true },
                { "id": "d", "text": "Notice of Motion", "isCorrect": false }
            ],
            "explanation": "Order 4 Rule 1 requires a verifying affidavit to accompany the plaint."
        },
        {
            "id": "comp-q45",
            "type": "multiple-choice",
            "question": "The 'Lowest Court Rule' refers to:",
            "points": 2,
            "topicId": "topic-03",
            "topicName": "Jurisdiction & Venue",
            "options": [
                { "id": "a", "text": "Filing in the court with lowest fees", "isCorrect": false },
                { "id": "b", "text": "Instituting suit in the court of lowest grade competent to try it", "isCorrect": true },
                { "id": "c", "text": "Always starting in the Magistrate's Court", "isCorrect": false },
                { "id": "d", "text": "Filing where the defendant resides", "isCorrect": false }
            ],
            "explanation": "Section 11 of the Civil Procedure Act establishes this rule to organize jurisdiction."
        },
        {
            "id": "comp-q46",
            "type": "fill-blank",
            "question": "The time limit for filing a suit in tort against the Government is __1__ months.",
            "points": 3,
            "topicId": "topic-01",
            "topicName": "Pre-Trial Considerations",
            "blanks": [
                { "id": "1", "acceptedAnswers": ["12", "twelve"], "caseSensitive": false }
            ],
            "explanation": "Public Authorities Limitation Act sets this at 12 months (though note constitutional challenges to this)."
        },
        {
            "id": "comp-q47",
            "type": "true-false",
            "question": "A default judgment entered against the Government without leave of the court is a nullity.",
            "points": 2,
            "topicId": "topic-08",
            "topicName": "Default Judgments",
            "correctAnswer": true,
            "explanation": "Order 10 Rule 8 strictly requires leave of court before entering default judgment against the Government."
        },
        {
            "id": "comp-q48",
            "type": "multiple-choice",
            "question": "Which of these acts as an automatic stay of execution?",
            "points": 2,
            "topicId": "topic-18",
            "topicName": "Remedies After Judgment",
            "options": [
                { "id": "a", "text": "Filing a Notice of Appeal", "isCorrect": false },
                { "id": "b", "text": "Order for winding up a company", "isCorrect": true },
                { "id": "c", "text": "Death of the judgment debtor", "isCorrect": false },
                { "id": "d", "text": "Application for review", "isCorrect": false }
            ],
            "explanation": "Winding up orders automatically stay proceedings against the company."
        },
        {
            "id": "comp-q49",
            "type": "multiple-choice",
            "question": "What happens if a plaintiff fails to provide security for costs when ordered?",
            "points": 2,
            "topicId": "topic-13",
            "topicName": "Interim Orders",
            "options": [
                { "id": "a", "text": "The suit is stayed indefinitely", "isCorrect": false },
                { "id": "b", "text": "The suit is dismissed", "isCorrect": true },
                { "id": "c", "text": "The defendant pays the costs", "isCorrect": false },
                { "id": "d", "text": "Judgment is entered for the plaintiff", "isCorrect": false }
            ],
            "explanation": "Failure to furnish security leads to dismissal of the suit."
        },
        {
            "id": "comp-q50",
            "type": "matching",
            "question": "Match the term to its definition:",
            "points": 4,
            "topicId": "topic-17",
            "topicName": "Judgment & Decree",
            "pairs": [
                { "id": "p1", "left": "Judgment", "right": "Final decision on facts/law" },
                { "id": "p2", "left": "Decree", "right": "Formal expression capable of execution" },
                { "id": "p3", "left": "Order", "right": "Formal expression not being a decree" },
                { "id": "p4", "left": "Ruling", "right": "Decision on interlocutory application" }
            ]
        }
    ]
});