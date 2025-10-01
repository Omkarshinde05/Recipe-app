import express from 'express';
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// This line is the key fix. It tells Express to serve static files from the 'dist' directory.
// The 'dist' folder is typically where your build process (like Vite or Webpack) places the final,
// optimized files for your application.
app.use(express.static(path.join(__dirname, 'dist')));

// For single-page applications (SPAs) like React, you need to serve the main HTML file
// for any request that doesn't match a static file. This allows client-side routing to work.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});