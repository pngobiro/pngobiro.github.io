// Network Diagrams JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // SVG namespace
    const SVG_NS = "http://www.w3.org/2000/svg";

    // Colors
    const COLORS = {
        lan: '#3498db',
        man: '#e67e22',
        wan: '#2ecc71',
        node: '#34495e',
        connection: '#95a5a6',
        text: '#2c3e50'
    };

    // Create LAN Diagram
    function createLANDiagram(containerId) {
        const container = document.getElementById(containerId);
        const svg = document.createElementNS(SVG_NS, 'svg');
        svg.setAttribute('viewBox', '0 0 400 300');
        svg.setAttribute('class', 'network-diagram');

        // Building outline
        const building = document.createElementNS(SVG_NS, 'rect');
        building.setAttribute('x', '50');
        building.setAttribute('y', '50');
        building.setAttribute('width', '300');
        building.setAttribute('height', '200');
        building.setAttribute('rx', '10');
        building.setAttribute('fill', 'none');
        building.setAttribute('stroke', COLORS.lan);
        building.setAttribute('stroke-width', '2');

        // Add computers/nodes
        const nodes = [
            {x: 100, y: 100},
            {x: 250, y: 100},
            {x: 100, y: 200},
            {x: 250, y: 200}
        ];

        nodes.forEach(node => {
            const computer = document.createElementNS(SVG_NS, 'rect');
            computer.setAttribute('x', node.x.toString());
            computer.setAttribute('y', node.y.toString());
            computer.setAttribute('width', '40');
            computer.setAttribute('height', '30');
            computer.setAttribute('fill', COLORS.node);
            svg.appendChild(computer);
        });

        // Add connections
        nodes.forEach((node, i) => {
            nodes.forEach((otherNode, j) => {
                if (i < j) {
                    const line = document.createElementNS(SVG_NS, 'line');
                    line.setAttribute('x1', (node.x + 20).toString());
                    line.setAttribute('y1', (node.y + 15).toString());
                    line.setAttribute('x2', (otherNode.x + 20).toString());
                    line.setAttribute('y2', (otherNode.y + 15).toString());
                    line.setAttribute('stroke', COLORS.connection);
                    line.setAttribute('stroke-width', '2');
                    svg.appendChild(line);
                }
            });
        });

        svg.appendChild(building);
        container.appendChild(svg);
    }

    // Create MAN Diagram
    function createMANDiagram(containerId) {
        const container = document.getElementById(containerId);
        const svg = document.createElementNS(SVG_NS, 'svg');
        svg.setAttribute('viewBox', '0 0 400 300');
        svg.setAttribute('class', 'network-diagram');

        // City buildings
        const buildings = [
            {x: 50, y: 50, w: 80, h: 120},
            {x: 160, y: 100, w: 80, h: 150},
            {x: 270, y: 70, w: 80, h: 180}
        ];

        buildings.forEach(building => {
            const rect = document.createElementNS(SVG_NS, 'rect');
            rect.setAttribute('x', building.x.toString());
            rect.setAttribute('y', building.y.toString());
            rect.setAttribute('width', building.w.toString());
            rect.setAttribute('height', building.h.toString());
            rect.setAttribute('fill', 'none');
            rect.setAttribute('stroke', COLORS.man);
            rect.setAttribute('stroke-width', '2');
            svg.appendChild(rect);
        });

        // Add connections between buildings
        const centralPoint = {x: 200, y: 250};
        buildings.forEach(building => {
            const line = document.createElementNS(SVG_NS, 'line');
            line.setAttribute('x1', (building.x + building.w/2).toString());
            line.setAttribute('y1', (building.y + building.h).toString());
            line.setAttribute('x2', centralPoint.x.toString());
            line.setAttribute('y2', centralPoint.y.toString());
            line.setAttribute('stroke', COLORS.man);
            line.setAttribute('stroke-width', '2');
            svg.appendChild(line);
        });

        container.appendChild(svg);
    }

    // Create WAN Diagram
    function createWANDiagram(containerId) {
        const container = document.getElementById(containerId);
        const svg = document.createElementNS(SVG_NS, 'svg');
        svg.setAttribute('viewBox', '0 0 400 300');
        svg.setAttribute('class', 'network-diagram');

        // Create cloud shape for internet
        const cloud = document.createElementNS(SVG_NS, 'path');
        cloud.setAttribute('d', 'M150,100 C130,100 120,90 120,75 C120,60 130,50 150,50 C160,35 180,35 190,50 C210,50 220,60 220,75 C220,90 210,100 190,100 Z');
        cloud.setAttribute('fill', 'none');
        cloud.setAttribute('stroke', COLORS.wan);
        cloud.setAttribute('stroke-width', '2');
        svg.appendChild(cloud);

        // Add LANs connected to the WAN
        const lans = [
            {x: 50, y: 200, label: 'LAN 1'},
            {x: 170, y: 200, label: 'LAN 2'},
            {x: 290, y: 200, label: 'LAN 3'}
        ];

        lans.forEach(lan => {
            // LAN rectangle
            const rect = document.createElementNS(SVG_NS, 'rect');
            rect.setAttribute('x', lan.x.toString());
            rect.setAttribute('y', lan.y.toString());
            rect.setAttribute('width', '60');
            rect.setAttribute('height', '40');
            rect.setAttribute('fill', 'none');
            rect.setAttribute('stroke', COLORS.wan);
            rect.setAttribute('stroke-width', '2');
            svg.appendChild(rect);

            // Connection to cloud
            const line = document.createElementNS(SVG_NS, 'line');
            line.setAttribute('x1', (lan.x + 30).toString());
            line.setAttribute('y1', lan.y.toString());
            line.setAttribute('x2', '170');
            line.setAttribute('y2', '100');
            line.setAttribute('stroke', COLORS.wan);
            line.setAttribute('stroke-width', '2');
            svg.appendChild(line);
        });

        container.appendChild(svg);
    }

    // Initialize diagrams if containers exist
    ['lan-diagram', 'man-diagram', 'wan-diagram'].forEach(id => {
        const container = document.getElementById(id);
        if (container) {
            switch(id) {
                case 'lan-diagram':
                    createLANDiagram(id);
                    break;
                case 'man-diagram':
                    createMANDiagram(id);
                    break;
                case 'wan-diagram':
                    createWANDiagram(id);
                    break;
            }
        }
    });
});