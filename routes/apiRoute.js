// Import filesharing, path, and uniqid for usage
const path = require('path')
const fs = require('fs')
const uniqid = require('uniqid')

// Grabs db.json upon redirect to notes directory.
app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'));
  });

app.post('/api/notes', (req, res) => {
    // Sets database data as a variable
    let db = fs.readFile('db/db.json')
    // Parses db data
    db = json.parse(db)
    res.json(db);

    // Creates a blank variable for new userNote
    let userNote = {
        title: req.body.title,
        text: req.body.text,
        id: uniqid()
    };
    // Pushes new userNote into db and reparse
    db.push(userNote)
    fs.writeFile('db/db.json'), JSON.stringify(db);
    res.json(db)
});

module.exports = app