// Signal Controls JavaScript
document.addEventListener('DOMContentLoaded', function() {
    class SignalController {
        constructor(containerId, visualizer) {
            this.container = document.getElementById(containerId);
            this.visualizer = visualizer;
            this.controls = {};
            this.createControlPanel();
        }

        createControlPanel() {
            const controlPanel = document.createElement('div');
            controlPanel.className = 'signal-controls';
            
            // Amplitude Control
            this.createSliderControl(
                controlPanel,
                'amplitude',
                'Amplitude',
                {min: 10, max: 80, value: 50, step: 5}
            );

            // Frequency Control
            this.createSliderControl(
                controlPanel,
                'frequency',
                'Frequency',
                {min: 0.5, max: 3, value: 1, step: 0.5}
            );

            // Phase Control
            this.createSliderControl(
                controlPanel,
                'phase',
                'Phase',
                {min: 0, max: 2 * Math.PI, value: 0, step: Math.PI / 4}
            );

            this.container.appendChild(controlPanel);
        }

        createSliderControl(panel, id, label, options) {
            const controlGroup = document.createElement('div');
            controlGroup.className = 'control-group';

            const labelElement = document.createElement('label');
            labelElement.htmlFor = id;
            labelElement.textContent = label;

            const slider = document.createElement('input');
            slider.type = 'range';
            slider.id = id;
            slider.min = options.min;
            slider.max = options.max;
            slider.value = options.value;
            slider.step = options.step;

            const value = document.createElement('span');
            value.className = 'control-value';
            value.textContent = options.value;

            this.controls[id] = {
                slider: slider,
                value: value
            };

            slider.addEventListener('input', () => {
                value.textContent = slider.value;
                this.updateSignal();
            });

            controlGroup.appendChild(labelElement);
            controlGroup.appendChild(slider);
            controlGroup.appendChild(value);
            panel.appendChild(controlGroup);
        }

        updateSignal() {
            this.visualizer.clear();
            this.visualizer.drawGrid();
            this.visualizer.drawAxis();
            this.visualizer.drawSineWave(
                parseFloat(this.controls.frequency.slider.value),
                parseFloat(this.controls.amplitude.slider.value),
                parseFloat(this.controls.phase.slider.value)
            );
        }
    }

    // Initialize controllers for signal visualizations
    const containers = document.querySelectorAll('.interactive-signal');
    containers.forEach(container => {
        const visualizer = new SignalVisualizer(container.id);
        visualizer.drawGrid();
        visualizer.drawAxis();
        visualizer.drawSineWave();
        
        new SignalController(container.id + '-controls', visualizer);
    });
});