// Math and Diagram Visualizations

// Signal Functions
function generateSineWave(canvas, frequency = 1, amplitude = 1, phase = 0) {
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const centerY = height / 2;
    
    ctx.clearRect(0, 0, width, height);
    ctx.beginPath();
    ctx.moveTo(0, centerY);
    
    for (let x = 0; x < width; x++) {
        const y = centerY - amplitude * Math.sin(2 * Math.PI * frequency * x / width + phase) * (height / 3);
        ctx.lineTo(x, y);
    }
    
    ctx.strokeStyle = '#2196F3';
    ctx.lineWidth = 2;
    ctx.stroke();
}

// Digital Signal Functions
function generateDigitalSignal(canvas, bits = [1, 0, 1, 1, 0]) {
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const bitWidth = width / bits.length;
    const highY = height * 0.2;
    const lowY = height * 0.8;
    
    ctx.clearRect(0, 0, width, height);
    ctx.beginPath();
    ctx.moveTo(0, bits[0] ? highY : lowY);
    
    bits.forEach((bit, index) => {
        const x = index * bitWidth;
        const y = bit ? highY : lowY;
        ctx.lineTo(x, y);
        ctx.lineTo(x + bitWidth, y);
    });
    
    ctx.strokeStyle = '#4CAF50';
    ctx.lineWidth = 2;
    ctx.stroke();
}

// Network Diagrams
function drawNetworkTopology(canvas, type = 'bus') {
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    ctx.clearRect(0, 0, width, height);
    
    switch(type) {
        case 'bus':
            drawBusTopology(ctx, width, height);
            break;
        case 'star':
            drawStarTopology(ctx, width, height);
            break;
        case 'ring':
            drawRingTopology(ctx, width, height);
            break;
        case 'mesh':
            drawMeshTopology(ctx, width, height);
            break;
    }
}

function drawBusTopology(ctx, width, height) {
    // Draw main bus line
    ctx.beginPath();
    ctx.moveTo(50, height/2);
    ctx.lineTo(width-50, height/2);
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // Draw nodes
    const nodes = 5;
    const spacing = (width-100)/(nodes-1);
    for(let i = 0; i < nodes; i++) {
        const x = 50 + i * spacing;
        drawNode(ctx, x, height/2 - 40);
        // Draw connection line
        ctx.beginPath();
        ctx.moveTo(x, height/2 - 20);
        ctx.lineTo(x, height/2);
        ctx.stroke();
    }
}

// Helper function to draw a node
function drawNode(ctx, x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.fillStyle = '#fff';
    ctx.fill();
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.stroke();
}

// Initialize diagrams
document.addEventListener('DOMContentLoaded', () => {
    // Find all canvas elements with specific classes and initialize appropriate diagrams
    document.querySelectorAll('.sine-wave').forEach(canvas => {
        generateSineWave(canvas);
    });
    
    document.querySelectorAll('.digital-signal').forEach(canvas => {
        generateDigitalSignal(canvas);
    });
    
    document.querySelectorAll('.network-topology').forEach(canvas => {
        const type = canvas.dataset.topology || 'bus';
        drawNetworkTopology(canvas, type);
    });
});

// Utility Functions
function degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
}

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    const angleInRadians = degreesToRadians(angleInDegrees);
    return {
        x: centerX + (radius * Math.cos(angleInRadians)),
        y: centerY + (radius * Math.sin(angleInRadians))
    };
}