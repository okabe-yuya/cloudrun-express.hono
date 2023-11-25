const express = require('express');
const app = express();

app.get('/', function (_req, res) {
  res.send('Hello World from bun@express! 🚂...\n');
});

app.listen(process.env.port || 8080);
