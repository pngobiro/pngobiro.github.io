registerQuiz("lesson-06-quiz", {
    "schemaVersion": "1.0",
    "quizId": "lesson-06-quiz",
    "metadata": {
        "title": "Sampling Methods",
        "description": "Test your knowledge on probability and non-probability sampling techniques.",
        "topicId": "lesson-06",
        "difficulty": "intermediate",
        "estimatedTime": 10,
        "passingScore": 70,
        "createdAt": "2025-12-26T10:00:00Z",
        "tags": ["sampling", "methodology"]
    },
    "questions": [
        {
            "id": "q1",
            "type": "multiple-choice",
            "question": "Which sampling method gives every member of the population an equal chance of being selected?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Convenience Sampling", "isCorrect": false },
                { "id": "b", "text": "Simple Random Sampling", "isCorrect": true },
                { "id": "c", "text": "Quota Sampling", "isCorrect": false },
                { "id": "d", "text": "Snowball Sampling", "isCorrect": false }
            ],
            "explanation": "Simple Random Sampling is a probability method where selection is purely by chance."
        },
        {
            "id": "q2",
            "type": "matching",
            "question": "Match the sampling method with its description:",
            "points": 4,
            "pairs": [
                { "id": "p1", "left": "Stratified Random", "right": "Population divided into subgroups, random sample from each" },
                { "id": "p2", "left": "Systematic", "right": "Select every nth unit from a list" },
                { "id": "p3", "left": "Cluster", "right": "Randomly select groups (e.g., schools), then test all within group" },
                { "id": "p4", "left": "Snowball", "right": "Participants refer other participants" }
            ],
            "explanation": "Stratified ensures subgroups are represented; Systematic uses intervals; Cluster picks whole groups; Snowball uses referrals."
        },
        {
            "id": "q3",
            "type": "multiple-choice",
            "question": "Snowball sampling is particularly useful for:",
            "points": 1,
            "options": [
                { "id": "a", "text": "Large national surveys", "isCorrect": false },
                { "id": "b", "text": "Populations that are hard to reach or hidden", "isCorrect": true },
                { "id": "c", "text": "Clinical trials", "isCorrect": false },
                { "id": "d", "text": "Laboratory studies", "isCorrect": false }
            ],
            "explanation": "Snowball sampling is used for hidden populations (e.g., drug users) where a sampling frame doesn't exist."
        },
        {
            "id": "q4",
            "type": "true-false",
            "question": "Convenience sampling is a type of probability sampling.",
            "points": 1,
            "correctAnswer": false,
            "explanation": "False. Convenience sampling is a Non-Probability method because selection is not random."
        },
        {
            "id": "q5",
            "type": "fill-blank",
            "question": "A __1__ frame is the list of all sampling units in a population from which a sample is drawn.",
            "points": 1,
            "blanks": [
                { "id": "1", "acceptedAnswers": ["sampling", "Sampling"], "caseSensitive": false }
            ],
            "explanation": "The sampling frame is the source list for the sample."
        },
        {
            "id": "q6",
            "type": "multiple-choice",
            "question": "Which method is best when you need to ensure specific subgroups (e.g., different age groups) are adequately represented?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Simple Random Sampling", "isCorrect": false },
                { "id": "b", "text": "Stratified Random Sampling", "isCorrect": true },
                { "id": "c", "text": "Cluster Sampling", "isCorrect": false },
                { "id": "d", "text": "Systematic Sampling", "isCorrect": false }
            ],
            "explanation": "Stratified sampling explicitly divides the population into strata to ensure representation."
        },
        {
            "id": "q7",
            "type": "short-answer",
            "question": "What is the main disadvantage of Cluster Sampling compared to Simple Random Sampling?",
            "points": 2,
            "keywords": ["precision", "variance", "error", "less precise"],
            "minKeywords": 1,
            "modelAnswer": "It has a loss of precision (wider variance/higher sampling error) compared to simple random sampling.",
            "maxLength": 100
        },
        {
            "id": "q8",
            "type": "multiple-choice",
            "question": "In systematic sampling, if you need a sample of 20 from a population of 1200, what is the sampling interval?",
            "points": 1,
            "options": [
                { "id": "a", "text": "10", "isCorrect": false },
                { "id": "b", "text": "20", "isCorrect": false },
                { "id": "c", "text": "60", "isCorrect": true },
                { "id": "d", "text": "100", "isCorrect": false }
            ],
            "explanation": "Interval = Population / Sample Size = 1200 / 20 = 60."
        },
        {
            "id": "q9",
            "type": "true-false",
            "question": "Purposive sampling involves selecting participants based on the researcher's judgment about who will be most useful.",
            "points": 1,
            "correctAnswer": true,
            "explanation": "Purposive (judgmental) sampling targets specific characteristics relevant to the study."
        },
        {
            "id": "q10",
            "type": "multiple-choice",
            "question": "Which of the following is NOT a probability sampling method?",
            "points": 1,
            "options": [
                { "id": "a", "text": "Systematic (with random start)", "isCorrect": false },
                { "id": "b", "text": "Cluster", "isCorrect": false },
                { "id": "c", "text": "Quota", "isCorrect": true },
                { "id": "d", "text": "Multistage", "isCorrect": false }
            ],
            "explanation": "Quota sampling is non-probability; it selects subjects to fit a quota without random selection."
        }
    ]
});