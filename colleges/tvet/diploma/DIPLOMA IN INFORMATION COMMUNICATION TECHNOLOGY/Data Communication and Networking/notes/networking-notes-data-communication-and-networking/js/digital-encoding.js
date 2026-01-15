// Digital Encoding Visualizations JavaScript
document.addEventListener('DOMContentLoaded', function() {
    class DigitalEncoder extends SignalVisualizer {
        drawBitStream(bits, style = {}) {
            const path = document.createElementNS(SVG_NS, 'path');
            const bitWidth = this.options.width / bits.length;
            const lowLevel = this.options.height * 0.7;
            const highLevel = this.options.height * 0.3;
            
            let d = `M 0 ${bits[0] ? highLevel : lowLevel}`;
            
            bits.forEach((bit, index) => {
                const x = index * bitWidth;
                const y = bit ? highLevel : lowLevel;
                d += ` L ${x} ${y}`;
                d += ` L ${x + bitWidth} ${y}`;
            });

            path.setAttribute('d', d);
            path.setAttribute('stroke', style.color || this.options.signalColor);
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

        drawNRZ(bits) {
            this.drawBitStream(bits, { color: '#2ecc71' });
        }

        drawRZ(bits) {
            const path = document.createElementNS(SVG_NS, 'path');
            const bitWidth = this.options.width / bits.length;
            const lowLevel = this.options.height * 0.7;
            const highLevel = this.options.height * 0.3;
            const midLevel = this.options.height * 0.5;
            
            let d = `M 0 ${midLevel}`;
            
            bits.forEach((bit, index) => {
                const x = index * bitWidth;
                const halfX = x + (bitWidth / 2);
                
                if (bit) {
                    d += ` L ${x} ${highLevel}`;
                    d += ` L ${halfX} ${highLevel}`;
                    d += ` L ${halfX} ${midLevel}`;
                    d += ` L ${x + bitWidth} ${midLevel}`;
                } else {
                    d += ` L ${x} ${lowLevel}`;
                    d += ` L ${halfX} ${lowLevel}`;
                    d += ` L ${halfX} ${midLevel}`;
                    d += ` L ${x + bitWidth} ${midLevel}`;
                }
            });

            path.setAttribute('d', d);
            path.setAttribute('stroke', '#e74c3c');
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

        drawManchester(bits) {
            const path = document.createElementNS(SVG_NS, 'path');
            const bitWidth = this.options.width / bits.length;
            const lowLevel = this.options.height * 0.7;
            const highLevel = this.options.height * 0.3;
            
            let d = `M 0 ${bits[0] ? lowLevel : highLevel}`;
            
            bits.forEach((bit, index) => {
                const x = index * bitWidth;
                const halfX = x + (bitWidth / 2);
                
                if (bit) {
                    d += ` L ${x} ${highLevel}`;
                    d += ` L ${halfX} ${highLevel}`;
                    d += ` L ${halfX} ${lowLevel}`;
                    d += ` L ${x + bitWidth} ${lowLevel}`;
                } else {
                    d += ` L ${x} ${lowLevel}`;
                    d += ` L ${halfX} ${lowLevel}`;
                    d += ` L ${halfX} ${highLevel}`;
                    d += ` L ${x + bitWidth} ${highLevel}`;
                }
            });

            path.setAttribute('d', d);
            path.setAttribute('stroke', '#3498db');
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
    }

    // Initialize encoding visualizations
    const testBits = [1, 0, 1, 1, 0, 0, 1, 0];
    const encodings = {
        'nrz-demo': { type: 'NRZ', bits: testBits },
        'rz-demo': { type: 'RZ', bits: testBits },
        'manchester-demo': { type: 'Manchester', bits: testBits }
    };

    Object.entries(encodings).forEach(([id, config]) => {
        const container = document.getElementById(id);
        if (container) {
            const encoder = new DigitalEncoder(id);
            encoder.drawGrid();
            encoder.drawAxis();
            
            switch(config.type) {
                case 'NRZ':
                    encoder.drawNRZ(config.bits);
                    break;
                case 'RZ':
                    encoder.drawRZ(config.bits);
                    break;
                case 'Manchester':
                    encoder.drawManchester(config.bits);
                    break;
            }
        }
    });
});