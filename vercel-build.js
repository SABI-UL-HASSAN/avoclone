
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');


console.log('Building the frontend...');
execSync('npm run build', { stdio: 'inherit' });


const distDir = path.join(__dirname, 'dist');

if (!fs.existsSync(distDir)) {
  console.error('Build failed: dist directory does not exist');
  process.exit(1);
}

const redirectsPath = path.join(distDir, '_redirects');
fs.writeFileSync(redirectsPath, '/* /index.html 200');

console.log('Build completed successfully!');