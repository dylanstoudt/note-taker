// Import filesharing, path, and uniqid for usage
const path = require('path')
const fs = require('fs')
const uniqid = require('uniqid')

// Grabs db.json upon redirect to notes directory.
app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'));
  });

app.post('/api/notes', (req, res) => {
    let db = fs.readFile('db/db.json')
})