// Imports express
const express = require('express');

// Creates an instance of express
const app = express()

// Set Port
const PORT = 3001

// Use app to create a public folder /public/, this will be the default landing page
app.use(express.static('public'));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// Listener for port 3001, displays a console log to show activation
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);