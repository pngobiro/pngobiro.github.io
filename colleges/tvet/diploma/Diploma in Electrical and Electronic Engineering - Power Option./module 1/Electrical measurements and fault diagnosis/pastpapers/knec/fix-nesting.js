const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const targetDirectory = path.join(__dirname, '/'); // Assumes script is in project root

fs.readdir(targetDirectory, (err, files) => {
    if (err) {
        console.error("Error reading directory:", err);
        return;
    }

    const htmlFiles = files.filter(file => file.endsWith('.html'));

    htmlFiles.forEach(file => {
        const filePath = path.join(targetDirectory, file);
        console.log(`Processing file: ${file}`);

        try {
            const html = fs.readFileSync(filePath, 'utf8');
            const $ = cheerio.load(html);
            let changesMade = false;

            // Iterate over each question
            $('.question').each((i, questionElem) => {
                const $question = $(questionElem);
                const questionId = $question.attr('id') || `(Question ${i + 1})`;

                const $answerDetail = $question.find('.answer-section .answer-content .answer-detail');

                if ($answerDetail.length > 0) {
                    const $answerParts = $answerDetail.find('> .answer-part'); // Find direct children with class 'answer-part'

                    if ($answerParts.length > 0) {
                        console.log(`  Found nested .answer-part divs in ${questionId}. Restructuring...`);
                        changesMade = true;

                        // Create a temporary container for the content inside .answer-part divs
                        const contentToMove = [];

                        // Collect content from inside each .answer-part
                        $answerParts.each((j, partElem) => {
                            contentToMove.push($(partElem).html()); // Get inner HTML
                        });

                        // Remove the original .answer-part divs from the DOM
                        $answerParts.remove();

                        // Append the collected content directly into the .answer-detail div
                        // Add a simple separator or structure if needed, e.g., <p>---Part X---</p>
                        // For now, just dumping the HTML content
                        contentToMove.forEach(content => {
                             // Append content directly, cheerio handles HTML parsing
                             $answerDetail.append(content);
                        });

                         console.log(`  Restructured .answer-part content for ${questionId}.`);

                    } else {
                        // console.log(`  No nested .answer-part divs found in ${questionId}.`);
                    }
                } else {
                    // console.log(`  No .answer-detail div found in ${questionId}.`);
                }
            });

            if (changesMade) {
                // Write the modified HTML back to the file
                fs.writeFileSync(filePath, $.html(), 'utf8');
                console.log(`Finished processing ${file}: Changes saved.`);
            } else {
                console.log(`Finished processing ${file}: No changes needed.`);
            }

        } catch (error) {
            console.error(`Error processing file ${file}:`, error);
        }
    });
});