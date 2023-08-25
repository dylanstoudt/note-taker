// Import filesharing, path, and uniqid for usage
const path = require('path')
const fs = require('fs')
const uniqid = require('uniqid')

module.exports = (app) => {
// Grabs db.json upon redirect to notes directory.
app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'));
  });

app.post('/api/notes', (req, res) => {
    // Sets database data as a variable
    let db = fs.readFileSync('db/db.json')
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

app.delete('/api/notes/:id', (req, res) => {
    let db = JSON.parse(fs.readFileSync('db/db.json'))
    // Params set to delete out item based on ID, set as new item "deleteNotes"
    let deleteNotes = db.filter(item => item.id !== req.params.id);
    // Pass new "deleteNotes into writefile to rewrite db"
    fs.writeFileSync('db/db.json', JSON.stringify(deleteNotes));
    res.json(deleteNotes);
})
}