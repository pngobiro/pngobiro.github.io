document.addEventListener('DOMContentLoaded', function() {
    const revealButtons = document.querySelectorAll('.reveal-answer-btn');

    revealButtons.forEach(button => {
        button.addEventListener('click', function() {
            const answerExplanation = this.nextElementSibling;
            if (answerExplanation && answerExplanation.classList.contains('answer-explanation')) {
                if (answerExplanation.style.display === 'block') {
                    answerExplanation.style.display = 'none';
                    this.textContent = 'Reveal Answer';
                } else {
                    answerExplanation.style.display = 'block';
                    this.textContent = 'Hide Answer';
                }
            }
        });
    });
});