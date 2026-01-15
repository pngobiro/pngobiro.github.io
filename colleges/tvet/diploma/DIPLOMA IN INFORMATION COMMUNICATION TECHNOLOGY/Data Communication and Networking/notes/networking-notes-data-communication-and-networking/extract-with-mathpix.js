const https = require('https');
const fs = require('fs');
const path = require('path');

// Mathpix API Configuration
const MATHPIX_APP_ID = 'YOUR_APP_ID';
const MATHPIX_APP_KEY = 'YOUR_APP_KEY';

const options = {
    hostname: 'api.mathpix.com',
    port: 443,
    path: '/v3/pdf',
    method: 'POST',
    headers: {
        'app_id': MATHPIX_APP_ID,
        'app_key': MATHPIX_APP_KEY,
        'Content-Type': 'application/json',
    }
};

// PDF file to process
const pdfFile = 'networking-notes-data-communication-and-networking.pdf';
const pdfData = fs.readFileSync(pdfFile);
const pdfBase64 = pdfData.toString('base64');

const requestData = {
    pdf_base64: pdfBase64,
    options_json: JSON.stringify({
        math_inline_delimiters: ["$", "$"],
        math_display_delimiters: ["$$", "$$"],
        rm_spaces: true,
        include_latex: true,
        include_figures: true,
        include_tables: true
    })
};

// Make request to Mathpix API
const req = https.request(options, (res) => {
    let data = '';
    
    res.on('data', (chunk) => {
        data += chunk;
    });
    
    res.on('end', () => {
        const response = JSON.parse(data);
        
        // Create output directory if it doesn't exist
        const outputDir = path.join('mathpix-output');
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir);
        }
        
        // Save the full response
        fs.writeFileSync(
            path.join(outputDir, 'full-response.json'),
            JSON.stringify(response, null, 2)
        );
        
        // Process equations
        if (response.equations) {
            const equationsDir = path.join(outputDir, 'equations');
            if (!fs.existsSync(equationsDir)) {
                fs.mkdirSync(equationsDir);
            }
            
            response.equations.forEach((eq, index) => {
                fs.writeFileSync(
                    path.join(equationsDir, `equation-${index}.tex`),
                    eq.latex
                );
            });
        }
        
        // Process figures
        if (response.figures) {
            const figuresDir = path.join(outputDir, 'figures');
            if (!fs.existsSync(figuresDir)) {
                fs.mkdirSync(figuresDir);
            }
            
            response.figures.forEach((fig, index) => {
                if (fig.image_base64) {
                    const imageData = Buffer.from(fig.image_base64, 'base64');
                    fs.writeFileSync(
                        path.join(figuresDir, `figure-${index}.png`),
                        imageData
                    );
                }
                // Save figure metadata
                fs.writeFileSync(
                    path.join(figuresDir, `figure-${index}-metadata.json`),
                    JSON.stringify(fig, null, 2)
                );
            });
        }
        
        // Process tables
        if (response.tables) {
            const tablesDir = path.join(outputDir, 'tables');
            if (!fs.existsSync(tablesDir)) {
                fs.mkdirSync(tablesDir);
            }
            
            response.tables.forEach((table, index) => {
                fs.writeFileSync(
                    path.join(tablesDir, `table-${index}.json`),
                    JSON.stringify(table, null, 2)
                );
            });
        }
        
        console.log('Processing complete. Check the mathpix-output directory.');
    });
});

req.on('error', (error) => {
    console.error('Error:', error);
});

// Send the request
req.write(JSON.stringify(requestData));
req.end();