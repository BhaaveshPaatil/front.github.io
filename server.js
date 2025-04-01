const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve songs from JSON
app.get('/songs', (req, res) => {
  fs.readFile(path.join(__dirname, 'songs.json'), 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to load songs' });
    }
    res.json(JSON.parse(data));
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
