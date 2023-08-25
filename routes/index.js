// Import path
const path = require('path');


// Export app for routes
module.exports = (app) => {

// Uses directory to serve html file based off of URL
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);
};