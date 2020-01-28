/* eslint-disable linebreak-style */
const express = require('express');
const app = express();
app.get('/url', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://localhost:4201'); // Without this line we receive "blocked by CORS policy"
  res.json(['Tony', 'Lisa', 'Michael', 'Ginger', 'Food']);
});

app.listen(3003, () => {
  console.log('Server running on port 3003');
});
