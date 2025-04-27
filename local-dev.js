
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m'
};

console.log(`${colors.bright}${colors.blue}=== AVO Portfolio Local Setup ===${colors.reset}\n`);

const replitFiles = ['.replit', 'replit.nix'];
let renamedFiles = 0;

replitFiles.forEach(file => {
  try {
    if (fs.existsSync(file)) {
      const newName = `${file}.bak`;
      fs.renameSync(file, newName);
      console.log(`${colors.green}✓ Renamed ${file} to ${newName}${colors.reset}`);
      renamedFiles++;
    }
  } catch (err) {
    console.error(`${colors.red}Error handling ${file}: ${err.message}${colors.reset}`);
  }
});

if (renamedFiles === 0) {
  console.log(`${colors.yellow}No Replit configuration files found to rename.${colors.reset}`);
}

try {
  const packageJsonPath = path.join(__dirname, 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  
  let modified = false;
  
  if (packageJson.scripts && packageJson.scripts.dev && packageJson.scripts.dev.startsWith('NODE_ENV=development')) {
    packageJson.scripts.dev = process.platform === 'win32' 
      ? 'set NODE_ENV=development && tsx server/index.ts'
      : 'NODE_ENV=development tsx server/index.ts';
    modified = true;
  }
  
  if (modified) {
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    console.log(`${colors.green}✓ Updated package.json scripts for compatibility${colors.reset}`);
  }
} catch (err) {
  console.error(`${colors.red}Error updating package.json: ${err.message}${colors.reset}`);
}

console.log(`\n${colors.bright}${colors.green}Setup completed!${colors.reset}`);
console.log(`\n${colors.bright}Next steps:${colors.reset}`);
console.log(`1. Run ${colors.yellow}npm install${colors.reset}`);
console.log(`2. Run ${colors.yellow}npm run dev${colors.reset}`);
console.log(`3. Open ${colors.blue}http://localhost:5000${colors.reset} in your browser\n`);

console.log(`${colors.bright}${colors.magenta}Happy coding!${colors.reset}\n`);