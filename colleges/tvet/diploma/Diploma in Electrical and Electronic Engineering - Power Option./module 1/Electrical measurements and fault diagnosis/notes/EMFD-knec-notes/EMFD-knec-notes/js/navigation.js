document.addEventListener('DOMContentLoaded', function() {
    // Get topic relationships if available
    const relationshipsElement = document.getElementById('topic-relationships');
    if (relationshipsElement) {
        const relationships = JSON.parse(relationshipsElement.textContent);
        setupRelatedContent(relationships);
    }

    // Update progress indicators
    updateProgressIndicators();
    
    // Setup interactive elements
    setupInteractiveElements();
    
    // Initialize MathJax
    setupMathJaxConfig();
});

function setupInteractiveElements() {
    // Add click handlers for solution toggles
    document.querySelectorAll('.solution-toggle').forEach(toggle => {
        toggle.addEventListener('click', function() {
            const solution = this.nextElementSibling;
            const isHidden = solution.classList.contains('hidden');
            
            // Update toggle text
            this.textContent = isHidden ? 'Hide Solution' : 'Show Solution';
            
            // Toggle solution visibility
            solution.classList.toggle('hidden');
        });
    });
}

function setupMathJaxConfig() {
    // Ensure MathJax properly renders new content
    if (typeof MathJax !== 'undefined') {
        MathJax.Hub.Queue(['Typeset', MathJax.Hub]);
    }
}

// Add interactive voltage calculator
function setupVoltageCalculator() {
    const calculator = document.createElement('div');
    calculator.className = 'voltage-calculator';
    calculator.innerHTML = `
        <h4>Interactive Voltage Calculator</h4>
        <div class="calculator-inputs">
            <div class="input-group">
                <label for="divisions">Number of Divisions:</label>
                <input type="number" id="divisions" step="0.1" value="4">
            </div>
            <div class="input-group">
                <label for="voltsPerDiv">Volts/Division:</label>
                <input type="number" id="voltsPerDiv" step="0.1" value="1">
            </div>
        </div>
        <div class="calculator-results">
            <div id="peakVoltage">Peak Voltage: 4.0 V</div>
            <div id="rmsVoltage">RMS Voltage: 2.83 V</div>
        </div>
    `;

    // Insert calculator after the voltage measurements section
    const voltageSection = document.querySelector('.example-item:first-child');
    if (voltageSection) {
        voltageSection.appendChild(calculator);
        setupCalculatorEvents();
    }
}

function setupCalculatorEvents() {
    const divisionsInput = document.getElementById('divisions');
    const voltsPerDivInput = document.getElementById('voltsPerDiv');
    const peakVoltageDisplay = document.getElementById('peakVoltage');
    const rmsVoltageDisplay = document.getElementById('rmsVoltage');

    function updateCalculations() {
        const divisions = parseFloat(divisionsInput.value) || 0;
        const voltsPerDiv = parseFloat(voltsPerDivInput.value) || 0;
        const peakVoltage = divisions * voltsPerDiv;
        const rmsVoltage = peakVoltage * 0.707;

        peakVoltageDisplay.textContent = `Peak Voltage: ${peakVoltage.toFixed(2)} V`;
        rmsVoltageDisplay.textContent = `RMS Voltage: ${rmsVoltage.toFixed(2)} V`;
    }

    divisionsInput.addEventListener('input', updateCalculations);
    voltsPerDivInput.addEventListener('input', updateCalculations);
}

// Initialize practical measurement features
document.addEventListener('DOMContentLoaded', function() {
    setupVoltageCalculator();
    setupMathJaxConfig();
});

function setupRelatedContent(relationships) {
    // Get current page path
    const path = window.location.pathname;
    const currentTopic = path.split('/').pop().replace('.html', '');
    
    if (relationships[currentTopic]) {
        const topicData = relationships[currentTopic];
        
        // Add prerequisites
        if (topicData.prerequisites && topicData.prerequisites.length > 0) {
            const relatedList = document.querySelector('.related-links');
            if (relatedList) {
                topicData.prerequisites.forEach(prereq => {
                    if (relationships[prereq]) {
                        const li = document.createElement('li');
                        li.innerHTML = `
                            <span class="relation-type">Prerequisite:</span>
                            <a href="${prereq}.html">${relationships[prereq].title}</a>
                        `;
                        relatedList.appendChild(li);
                    }
                });
            }
        }

        // Add next topic if available
        if (topicData.followedBy && topicData.followedBy.length > 0) {
            const nextTopic = topicData.followedBy[0];
            if (relationships[nextTopic]) {
                const nextButton = document.querySelector('.nav-button[href="next-topic.html"]');
                if (nextButton) {
                    nextButton.href = `${nextTopic}.html`;
                    nextButton.querySelector('.nav-text').textContent = relationships[nextTopic].title;
                }
            }
        }

        // Add complexity level indicator
        if (topicData.complexity) {
            const header = document.querySelector('.section-header');
            if (header) {
                const complexity = document.createElement('div');
                complexity.className = 'topic-metadata';
                complexity.innerHTML = `
                    <dl>
                        <dt>Complexity:</dt>
                        <dd>${topicData.complexity}</dd>
                    </dl>
                `;
                header.appendChild(complexity);
            }
        }
    }
}

function updateProgressIndicators() {
    // Update progress bars
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const progressText = bar.closest('.document-progress').querySelector('.progress-text');
        if (progressText) {
            const [current, total] = progressText.textContent.match(/Part (\d+) of (\d+)/).slice(1);
            const percentage = (current / total) * 100;
            bar.querySelector('.progress-fill').style.width = `${percentage}%`;
        }
    });

    // Update learning path
    const pathSteps = document.querySelectorAll('.path-steps li');
    let foundCurrent = false;
    pathSteps.forEach(step => {
        if (step.classList.contains('current')) {
            foundCurrent = true;
        } else if (!foundCurrent) {
            step.classList.add('completed');
        } else {
            step.classList.add('upcoming');
        }
    });
}