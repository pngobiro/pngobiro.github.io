(function() {
    document.addEventListener('DOMContentLoaded', () => {
        const tabButtons = document.querySelectorAll('.tab-btn');
        
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                // 1. Get container context (handle multiple independent tab groups on one page)
                const container = button.closest('.tabs-container');
                if (!container) return;

                // 2. Deactivate all buttons in this container
                container.querySelectorAll('.tab-btn').forEach(btn => {
                    btn.classList.remove('active');
                    btn.setAttribute('aria-selected', 'false');
                });

                // 3. Hide all content in this container
                container.querySelectorAll('.tab-content').forEach(content => {
                    content.classList.remove('active');
                });

                // 4. Activate clicked button
                button.classList.add('active');
                button.setAttribute('aria-selected', 'true');

                // 5. Show target content
                const targetId = button.getAttribute('data-tab');
                const targetContent = container.querySelector(`#${targetId}`);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });
    });
})();