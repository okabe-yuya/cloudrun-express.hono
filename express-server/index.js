const express = require('express');
const app = express();

app.get('/', function (_req, res) {
  res.send('Hello World from express! 🚂...\n');
});

app.listen(process.env.port || 8080);
