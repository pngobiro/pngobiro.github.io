document.addEventListener('DOMContentLoaded', () => {
    // Initialize all answers as hidden
    const answers = document.querySelectorAll('.answer');
    answers.forEach(answer => {
        answer.style.display = 'none';
    });

    // Add toggle buttons to each question
    document.querySelectorAll('.question').forEach(question => {
        if (!question.querySelector('.answer')) return;

        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'answer-toggle';
        toggleBtn.textContent = 'Show Answer';
        
        // Insert button after question content
        const questionContent = question.querySelector('.question-content');
        questionContent.after(toggleBtn);

        // Toggle answer visibility
        toggleBtn.addEventListener('click', () => {
            const answer = question.querySelector('.answer');
            const isHidden = answer.style.display === 'none';
            
            answer.style.display = isHidden ? 'block' : 'none';
            toggleBtn.textContent = isHidden ? 'Hide Answer' : 'Show Answer';
            
            if (isHidden) {
                answer.style.opacity = '0';
                answer.style.transform = 'translateY(-10px)';
                
                // Trigger reflow
                answer.offsetHeight;
                
                // Add transition
                answer.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                answer.style.opacity = '1';
                answer.style.transform = 'translateY(0)';
            }
        });
    });

    // Add "Show All" and "Hide All" buttons if there are answers
    const questionsWithAnswers = document.querySelectorAll('.question .answer');
    if (questionsWithAnswers.length > 0) {
        const controls = document.createElement('div');
        controls.className = 'answer-controls';
        controls.style.marginBottom = '2rem';
        
        const showAllBtn = document.createElement('button');
        showAllBtn.className = 'answer-toggle';
        showAllBtn.textContent = 'Show All Answers';
        showAllBtn.style.marginRight = '1rem';
        
        const hideAllBtn = document.createElement('button');
        hideAllBtn.className = 'answer-toggle';
        hideAllBtn.textContent = 'Hide All Answers';
        
        controls.appendChild(showAllBtn);
        controls.appendChild(hideAllBtn);
        
        // Insert controls before the first question
        const firstQuestion = document.querySelector('.question');
        firstQuestion.parentNode.insertBefore(controls, firstQuestion);
        
        // Show all answers
        showAllBtn.addEventListener('click', () => {
            document.querySelectorAll('.answer').forEach(answer => {
                answer.style.display = 'block';
                answer.style.opacity = '1';
                answer.style.transform = 'translateY(0)';
            });
            document.querySelectorAll('.answer-toggle:not(:first-child)').forEach(btn => {
                btn.textContent = 'Hide Answer';
            });
        });
        
        // Hide all answers
        hideAllBtn.addEventListener('click', () => {
            document.querySelectorAll('.answer').forEach(answer => {
                answer.style.display = 'none';
            });
            document.querySelectorAll('.answer-toggle:not(:first-child)').forEach(btn => {
                btn.textContent = 'Show Answer';
            });
        });
    }
});
