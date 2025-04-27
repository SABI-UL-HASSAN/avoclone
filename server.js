
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

const distPath = path.join(__dirname, 'dist');
const distExists = fs.existsSync(distPath);

if (distExists) {
  console.log('Serving static build from /dist directory');
  
  app.use(express.static(distPath));
  
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
} else {
  console.log('No /dist directory found. Please run "npm run build" first.');
  app.get('*', (req, res) => {
    res.send('Please build the application first with "npm run build"');
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`View your application at http://localhost:${PORT}`);
});