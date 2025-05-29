import { exec } from 'node:child_process';

exec('tsc --noEmit', (error, stdout, stderr) => {
  if (error) {
    console.error(`❌ Error: ${error.message}`);
    process.exit(1);
  }
  if (stderr) {
    console.error(`⚠️ stderr: ${stderr}`);
  }
  console.log(`✅ stdout:\n${stdout}`);
});
