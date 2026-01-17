registerQuiz("topic-03-quiz", {
  "schemaVersion": "1.0",
  "quizId": "topic-03-quiz",
  "metadata": {
    "title": "Section 3: Treatment Modalities",
    "description": "Test your knowledge on drugs, ECT, and psychological therapies used in mental health.",
    "topicId": "topic-03",
    "difficulty": "intermediate",
    "estimatedTime": 15,
    "passingScore": 70,
    "createdAt": "2026-01-17T00:00:00Z",
    "tags": ["pharmacology", "ect", "psychotherapy", "treatment"]
  },
  "questions": [
    {
      "id": "q1",
      "type": "matching",
      "question": "Match the drug category with its primary usage or example.",
      "points": 4,
      "pairs": [
        {
          "id": "p1",
          "left": "Antipsychotic",
          "right": "Haloperidol (Haldol)"
        },
        {
          "id": "p2",
          "left": "Antidepressant",
          "right": "Amitriptyline (Elavil)"
        },
        {
          "id": "p3",
          "left": "Anxiolytic",
          "right": "Diazepam (Valium)"
        },
        {
          "id": "p4",
          "left": "Antiparkinsonian",
          "right": "Benztropine (Cogentin)"
        }
      ]
    },
    {
      "id": "q2",
      "type": "multiple-select",
      "question": "Which of the following are Extra Pyramidal Symptoms (EPS) associated with antipsychotic medication?",
      "points": 3,
      "options": [
        {
          "id": "opt1",
          "text": "Oculogyric crisis",
          "isCorrect": true
        },
        {
          "id": "opt2",
          "text": "Hypertension crisis",
          "isCorrect": false
        },
        {
          "id": "opt3",
          "text": "Torticollis",
          "isCorrect": true
        },
        {
          "id": "opt4",
          "text": "Akathisia",
          "isCorrect": true
        }
      ],
      "explanation": "Oculogyric crisis, Torticollis, and Akathisia are EPS. Hypertension crisis is a side effect associated with MAOIs (antidepressants) and tyramine."
    },
    {
      "id": "q3",
      "type": "fill-blank",
      "question": "Hypertension crisis in patients taking MAOIs occurs after eating food containing __tyramine__. The main form of treatment when this occurs is to discontinue the drug and give __regitine__ to lower blood pressure.",
      "points": 2,
      "blanks": [
        {
          "id": "tyramine",
          "acceptedAnswers": ["tyramine"],
          "caseSensitive": false
        },
        {
          "id": "regitine",
          "acceptedAnswers": ["regitine"],
          "caseSensitive": false
        }
      ],
      "explanation": "MAOIs interact with tyramine-rich foods (cheese, wine) causing hypertensive crisis, treated with regitine."
    },
    {
      "id": "q4",
      "type": "short-answer",
      "question": "What drug is given as premedication before Electroconvulsive Therapy (ECT) to dry body secretions?",
      "points": 2,
      "keywords": ["atropine"],
      "minKeywords": 1,
      "modelAnswer": "Atropine",
      "explanation": "Atropine 0.6mg is given to dry body secretions before ECT."
    },
    {
      "id": "q5",
      "type": "multiple-choice",
      "question": "Which form of psychotherapy revolves around a state of artificially induced suggestibility known as hypnosis?",
      "points": 1,
      "options": [
        {
          "id": "opt1",
          "text": "Supportive Psychotherapy",
          "isCorrect": false
        },
        {
          "id": "opt2",
          "text": "Suggestive Psychotherapy",
          "isCorrect": false
        },
        {
          "id": "opt3",
          "text": "Persuasive Psychotherapy",
          "isCorrect": true
        },
        {
          "id": "opt4",
          "text": "Group Psychotherapy",
          "isCorrect": false
        }
      ],
      "explanation": "Persuasive psychotherapy is the oldest form and involves hypnosis/suggestibility."
    }
  ]
});