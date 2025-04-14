// Signal Visualizations JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const SVG_NS = "http://www.w3.org/2000/svg";
    
    class SignalVisualizer {
        constructor(containerId, options = {}) {
            this.container = document.getElementById(containerId);
            this.options = {
                width: options.width || 400,
                height: options.height || 200,
                gridSize: options.gridSize || 20,
                strokeWidth: options.strokeWidth || 2,
                signalColor: options.signalColor || '#2ecc71',
                gridColor: options.gridColor || '#ecf0f1',
                axisColor: options.axisColor || '#34495e',
                ...options
            };
            this.svg = this.createSVG();
            this.container.appendChild(this.svg);
        }

        createSVG() {
            const svg = document.createElementNS(SVG_NS, 'svg');
            svg.setAttribute('width', this.options.width);
            svg.setAttribute('height', this.options.height);
            svg.setAttribute('viewBox', `0 0 ${this.options.width} ${this.options.height}`);
            return svg;
        }

        drawGrid() {
            const gridGroup = document.createElementNS(SVG_NS, 'g');
            gridGroup.setAttribute('class', 'grid');

            // Vertical lines
            for (let x = 0; x <= this.options.width; x += this.options.gridSize) {
                const line = document.createElementNS(SVG_NS, 'line');
                line.setAttribute('x1', x);
                line.setAttribute('y1', 0);
                line.setAttribute('x2', x);
                line.setAttribute('y2', this.options.height);
                line.setAttribute('stroke', this.options.gridColor);
                line.setAttribute('stroke-width', '1');
                gridGroup.appendChild(line);
            }

            // Horizontal lines
            for (let y = 0; y <= this.options.height; y += this.options.gridSize) {
                const line = document.createElementNS(SVG_NS, 'line');
                line.setAttribute('x1', 0);
                line.setAttribute('y1', y);
                line.setAttribute('x2', this.options.width);
                line.setAttribute('y2', y);
                line.setAttribute('stroke', this.options.gridColor);
                line.setAttribute('stroke-width', '1');
                gridGroup.appendChild(line);
            }

            this.svg.appendChild(gridGroup);
        }

        drawAxis() {
            const axisGroup = document.createElementNS(SVG_NS, 'g');
            axisGroup.setAttribute('class', 'axis');

            // X-axis
            const xAxis = document.createElementNS(SVG_NS, 'line');
            xAxis.setAttribute('x1', 0);
            xAxis.setAttribute('y1', this.options.height / 2);
            xAxis.setAttribute('x2', this.options.width);
            xAxis.setAttribute('y2', this.options.height / 2);
            xAxis.setAttribute('stroke', this.options.axisColor);
            xAxis.setAttribute('stroke-width', '2');

            // Y-axis
            const yAxis = document.createElementNS(SVG_NS, 'line');
            yAxis.setAttribute('x1', 0);
            yAxis.setAttribute('y1', 0);
            yAxis.setAttribute('x2', 0);
            yAxis.setAttribute('y2', this.options.height);
            yAxis.setAttribute('stroke', this.options.axisColor);
            yAxis.setAttribute('stroke-width', '2');

            axisGroup.appendChild(xAxis);
            axisGroup.appendChild(yAxis);
            this.svg.appendChild(axisGroup);
        }

        drawSineWave(frequency = 1, amplitude = 50, phase = 0, style = {}) {
            const path = document.createElementNS(SVG_NS, 'path');
            let d = 'M 0 ' + (this.options.height / 2);
            
            for (let x = 0; x <= this.options.width; x++) {
                const y = (this.options.height / 2) + 
                    amplitude * Math.sin(2 * Math.PI * frequency * (x / this.options.width) + phase);
                d += ` L ${x} ${y}`;
            }

            path.setAttribute('d', d);
            path.setAttribute('stroke', style.color || this.options.signalColor);
            path.setAttribute('stroke-width', this.options.strokeWidth);
            path.setAttribute('fill', 'none');
            this.svg.appendChild(path);
        }

        drawDigitalSignal(bits) {
            const path = document.createElementNS(SVG_NS, 'path');
            const bitWidth = this.options.width / bits.length;
            const highLevel = this.options.height * 0.25;
            const lowLevel = this.options.height * 0.75;
            
            let d = `M 0 ${bits[0] ? highLevel : lowLevel}`;
            
            bits.forEach((bit, index) => {
                const x = index * bitWidth;
                const y = bit ? highLevel : lowLevel;
                d += ` L ${x} ${y}`;
                d += ` L ${x + bitWidth} ${y}`;
            });

            path.setAttribute('d', d);
            path.setAttribute('stroke', this.options.signalColor);
            path.setAttribute('stroke-width', this.options.strokeWidth);
            path.setAttribute('fill', 'none');
            this.svg.appendChild(path);
        }

        clear() {
            while (this.svg.firstChild) {
                this.svg.removeChild(this.svg.firstChild);
            }
        }
    }

    // Initialize visualizations if containers exist
    const containers = {
        'analog-signal': { type: 'sine', options: { frequency: 1, amplitude: 50 } },
        'digital-signal': { type: 'digital', options: { bits: [1,0,1,1,0,0,1,0] } },
        'periodic-signal': { type: 'sine', options: { frequency: 2, amplitude: 40 } },
        'nonperiodic-signal': { type: 'custom' }
    };

    Object.entries(containers).forEach(([id, config]) => {
        const container = document.getElementById(id);
        if (container) {
            const visualizer = new SignalVisualizer(id);
            visualizer.drawGrid();
            visualizer.drawAxis();
            
            switch(config.type) {
                case 'sine':
                    visualizer.drawSineWave(
                        config.options.frequency,
                        config.options.amplitude
                    );
                    break;
                case 'digital':
                    visualizer.drawDigitalSignal(config.options.bits);
                    break;
            }
        }
    });

    // Additional waveform functions
    class SignalImpairments extends SignalVisualizer {
        drawAttenuatedSignal(attenuation = 0.5) {
            // Draw original signal
            this.drawSineWave(1, 50, 0, { color: '#2ecc71' });
            
            // Draw attenuated signal
            this.drawSineWave(1, 50 * attenuation, 0, { color: '#e74c3c' });
        }

        drawDistortedSignal() {
            const path = document.createElementNS(SVG_NS, 'path');
            let d = 'M 0 ' + (this.options.height / 2);
            
            // Add non-linear distortion to sine wave
            for (let x = 0; x <= this.options.width; x++) {
                const normalY = Math.sin(2 * Math.PI * (x / this.options.width));
                const distortedY = normalY + 0.2 * Math.sin(6 * Math.PI * (x / this.options.width));
                const y = (this.options.height / 2) + (50 * distortedY);
                d += ` L ${x} ${y}`;
            }

            path.setAttribute('d', d);
            path.setAttribute('stroke', '#e74c3c');
            path.setAttribute('stroke-width', this.options.strokeWidth);
            path.setAttribute('fill', 'none');
            this.svg.appendChild(path);
        }

        drawNoisySignal(noiseAmplitude = 10) {
            const path = document.createElementNS(SVG_NS, 'path');
            let d = 'M 0 ' + (this.options.height / 2);
            
            // Add random noise to sine wave
            for (let x = 0; x <= this.options.width; x++) {
                const noise = (Math.random() - 0.5) * 2 * noiseAmplitude;
                const y = (this.options.height / 2) +
                    50 * Math.sin(2 * Math.PI * (x / this.options.width)) + noise;
                d += ` L ${x} ${y}`;
            }

            path.setAttribute('d', d);
            path.setAttribute('stroke', '#e74c3c');
            path.setAttribute('stroke-width', this.options.strokeWidth);
            path.setAttribute('fill', 'none');
            this.svg.appendChild(path);
        }
    }

    class PeriodicSignals extends SignalVisualizer {
        drawCompositeWave() {
            // Draw fundamental frequency
            this.drawSineWave(1, 30, 0, { color: '#2ecc71' });
            
            // Draw third harmonic with smaller amplitude
            this.drawSineWave(3, 15, 0, { color: '#e74c3c' });
            
            // Draw fifth harmonic with even smaller amplitude
            this.drawSineWave(5, 10, 0, { color: '#3498db' });
        }

        drawSquareWave() {
            const path = document.createElementNS(SVG_NS, 'path');
            const height = this.options.height;
            const width = this.options.width;
            const amplitude = 50;
            const period = width / 4;
            
            let d = `M 0 ${height/2 - amplitude}`;
            
            for (let x = 0; x < width; x += period) {
                d += ` L ${x} ${height/2 - amplitude}`;
                d += ` L ${x} ${height/2 + amplitude}`;
                d += ` L ${x + period} ${height/2 + amplitude}`;
                d += ` L ${x + period} ${height/2 - amplitude}`;
            }

            path.setAttribute('d', d);
            path.setAttribute('stroke', this.options.signalColor);
            path.setAttribute('stroke-width', this.options.strokeWidth);
            path.setAttribute('fill', 'none');
            this.svg.appendChild(path);
        }

        drawTriangleWave() {
            const path = document.createElementNS(SVG_NS, 'path');
            const height = this.options.height;
            const width = this.options.width;
            const amplitude = 50;
            const period = width / 4;
            
            let d = `M 0 ${height/2}`;
            
            for (let x = 0; x < width; x += period) {
                d += ` L ${x + period/2} ${height/2 - amplitude}`;
                d += ` L ${x + period} ${height/2 + amplitude}`;
                d += ` L ${x + period*1.5} ${height/2 - amplitude}`;
            }

            path.setAttribute('d', d);
            path.setAttribute('stroke', this.options.signalColor);
            path.setAttribute('stroke-width', this.options.strokeWidth);
            path.setAttribute('fill', 'none');
            this.svg.appendChild(path);
        }
    }

    // Initialize periodic signal visualizations if containers exist
    ['composite-wave', 'square-wave', 'triangle-wave'].forEach(id => {
        const container = document.getElementById(id);
        if (container) {
            const visualizer = new PeriodicSignals(id);
            visualizer.drawGrid();
            visualizer.drawAxis();
            
            switch(id) {
                case 'composite-wave':
                    visualizer.drawCompositeWave();
                    break;
                case 'square-wave':
                    visualizer.drawSquareWave();
                    break;
                case 'triangle-wave':
                    visualizer.drawTriangleWave();
                    break;
            }
        }
    });

    // Initialize impairment visualizations if containers exist
    ['attenuation-demo', 'distortion-demo', 'noise-demo'].forEach(id => {
        const container = document.getElementById(id);
        if (container) {
            const visualizer = new SignalImpairments(id);
            visualizer.drawGrid();
            visualizer.drawAxis();
            
            switch(id) {
                case 'attenuation-demo':
                    visualizer.drawAttenuatedSignal();
                    break;
                case 'distortion-demo':
                    visualizer.drawDistortedSignal();
                    break;
                case 'noise-demo':
                    visualizer.drawNoisySignal();
                    break;
            }
        }
    });
});