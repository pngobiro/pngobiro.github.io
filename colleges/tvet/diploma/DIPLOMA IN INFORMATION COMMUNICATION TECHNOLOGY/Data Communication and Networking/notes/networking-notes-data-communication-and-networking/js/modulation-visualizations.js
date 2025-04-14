// Modulation Visualizations JavaScript
document.addEventListener('DOMContentLoaded', function() {
    class ModulationVisualizer extends SignalVisualizer {
        drawASK(bits) {
            const path = document.createElementNS(SVG_NS, 'path');
            const bitWidth = this.options.width / bits.length;
            const amplitude = 50;
            let d = 'M 0 ' + (this.options.height / 2);
            
            bits.forEach((bit, index) => {
                const startX = index * bitWidth;
                for (let x = 0; x <= bitWidth; x++) {
                    const currentX = startX + x;
                    const y = bit ? 
                        (this.options.height / 2) + amplitude * Math.sin(8 * Math.PI * (x / bitWidth)) :
                        this.options.height / 2;
                    d += ` L ${currentX} ${y}`;
                }
            });

            path.setAttribute('d', d);
            path.setAttribute('stroke', this.options.signalColor);
            path.setAttribute('stroke-width', this.options.strokeWidth);
            path.setAttribute('fill', 'none');
            this.svg.appendChild(path);
            
            // Draw bit values above
            bits.forEach((bit, index) => {
                const text = document.createElementNS(SVG_NS, 'text');
                text.setAttribute('x', (index * bitWidth) + (bitWidth / 2));
                text.setAttribute('y', 20);
                text.setAttribute('text-anchor', 'middle');
                text.setAttribute('fill', '#34495e');
                text.textContent = bit;
                this.svg.appendChild(text);
            });
        }

        drawFSK(bits) {
            const path = document.createElementNS(SVG_NS, 'path');
            const bitWidth = this.options.width / bits.length;
            const amplitude = 50;
            let d = 'M 0 ' + (this.options.height / 2);
            
            bits.forEach((bit, index) => {
                const startX = index * bitWidth;
                const frequency = bit ? 12 : 4; // Higher frequency for 1, lower for 0
                
                for (let x = 0; x <= bitWidth; x++) {
                    const currentX = startX + x;
                    const y = (this.options.height / 2) + 
                        amplitude * Math.sin(frequency * Math.PI * (x / bitWidth));
                    d += ` L ${currentX} ${y}`;
                }
            });

            path.setAttribute('d', d);
            path.setAttribute('stroke', this.options.signalColor);
            path.setAttribute('stroke-width', this.options.strokeWidth);
            path.setAttribute('fill', 'none');
            this.svg.appendChild(path);
            
            // Draw bit values
            bits.forEach((bit, index) => {
                const text = document.createElementNS(SVG_NS, 'text');
                text.setAttribute('x', (index * bitWidth) + (bitWidth / 2));
                text.setAttribute('y', 20);
                text.setAttribute('text-anchor', 'middle');
                text.setAttribute('fill', '#34495e');
                text.textContent = bit;
                this.svg.appendChild(text);
            });
        }

        drawPSK(bits) {
            const path = document.createElementNS(SVG_NS, 'path');
            const bitWidth = this.options.width / bits.length;
            const amplitude = 50;
            let d = 'M 0 ' + (this.options.height / 2);
            
            bits.forEach((bit, index) => {
                const startX = index * bitWidth;
                const phase = bit ? 0 : Math.PI; // 180-degree phase shift for 0
                
                for (let x = 0; x <= bitWidth; x++) {
                    const currentX = startX + x;
                    const y = (this.options.height / 2) + 
                        amplitude * Math.sin(8 * Math.PI * (x / bitWidth) + phase);
                    d += ` L ${currentX} ${y}`;
                }
            });

            path.setAttribute('d', d);
            path.setAttribute('stroke', this.options.signalColor);
            path.setAttribute('stroke-width', this.options.strokeWidth);
            path.setAttribute('fill', 'none');
            this.svg.appendChild(path);
            
            // Draw bit values
            bits.forEach((bit, index) => {
                const text = document.createElementNS(SVG_NS, 'text');
                text.setAttribute('x', (index * bitWidth) + (bitWidth / 2));
                text.setAttribute('y', 20);
                text.setAttribute('text-anchor', 'middle');
                text.setAttribute('fill', '#34495e');
                text.textContent = bit;
                this.svg.appendChild(text);
            });
        }

        drawQAM(symbols) {
            // Future implementation for Quadrature Amplitude Modulation
        }
    }

    // Initialize modulation visualizations
    const testBits = [1, 0, 1, 1, 0, 0, 1, 0];
    const modulations = {
        'ask-demo': { type: 'ASK', bits: testBits },
        'fsk-demo': { type: 'FSK', bits: testBits },
        'psk-demo': { type: 'PSK', bits: testBits }
    };

    Object.entries(modulations).forEach(([id, config]) => {
        const container = document.getElementById(id);
        if (container) {
            const visualizer = new ModulationVisualizer(id);
            visualizer.drawGrid();
            visualizer.drawAxis();
            
            switch(config.type) {
                case 'ASK':
                    visualizer.drawASK(config.bits);
                    break;
                case 'FSK':
                    visualizer.drawFSK(config.bits);
                    break;
                case 'PSK':
                    visualizer.drawPSK(config.bits);
                    break;
            }
        }
    });
});