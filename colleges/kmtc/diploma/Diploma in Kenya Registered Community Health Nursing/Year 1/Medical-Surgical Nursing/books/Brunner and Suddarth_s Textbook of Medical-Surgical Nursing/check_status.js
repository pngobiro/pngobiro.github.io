// Script to check Mathpix OCR processing status for job ID: 2025_09_10_e215e42b160dded36264g
// Note: This assumes the Mathpix server maintains job state; adjust polling logic if needed

const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);

const JOB_ID = '2025_09_10_e215e42b160dded36264g';
const MAX_ATTEMPTS = 60; // Poll for up to 10 minutes (1 poll per 10 seconds)
const POLL_INTERVAL = 10000; // 10 seconds between polls

async function checkStatus() {
  let attempt = 1;
  
  console.log(`Starting status check for job ID: ${JOB_ID}`);
  console.log(`Max attempts: ${MAX_ATTEMPTS}, Interval: ${POLL_INTERVAL/1000}s`);
  
  while (attempt <= MAX_ATTEMPTS) {
    try {
      // Note: Since the main script doesn't support status, this simulates by attempting to resume or log
      // In a real implementation, you might need to query a server endpoint or database for job status
      // For now, we'll execute a dummy command and parse output if available
      const { stdout, stderr } = await execPromise(`node /home/ngobiro/.local/share/Roo-Code/MCP/mathpix-ocr-server/build/index.js --check ${JOB_ID} || echo "No status command, simulating poll"`);
      
      console.log(`\n--- Poll ${attempt}/${MAX_ATTEMPTS} ---`);
      console.log('Output:', stdout || stderr || 'No output - job may still be processing');
      
      // Parse for completion indicators (adjust based on actual output format)
      if (stdout.includes('completed') || stdout.includes('success') || stderr.includes('ready')) {
        console.log('Job completed successfully!');
        return;
      } else if (stdout.includes('failed') || stdout.includes('error') || stdout.includes('timeout')) {
        console.log('Job failed or timed out.');
        return;
      }
      
      attempt++;
      await new Promise(resolve => setTimeout(resolve, POLL_INTERVAL));
      
    } catch (error) {
      console.error(`Error on attempt ${attempt}:`, error.message);
      attempt++;
      await new Promise(resolve => setTimeout(resolve, POLL_INTERVAL));
    }
  }
  
  console.log('\nMax attempts reached. Job may still be processing or failed.');
}

checkStatus().catch(console.error);