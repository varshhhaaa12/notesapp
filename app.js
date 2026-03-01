
const express = require('express');
const app = express();

app.use(express.json());

let notes = [];

app.get('/', (req, res) => {
  res.send("Notes App Running 🚀");
});

// Get all notes
app.get('/notes', (req, res) => {
  res.json(notes);
});

// Add note
app.post('/notes', (req, res) => {
  notes.push(req.body.note);
  res.send("Note added");
});

// Delete note
app.delete('/notes/:id', (req, res) => {
  notes.splice(req.params.id, 1);
  res.send("Note deleted");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
