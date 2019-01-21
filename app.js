const express = require('express');

const app = express();

const { MONGO_URI } = process.env;

app.get('/', (req, res) => {
  const sum = parseInt(req.query.a, 10) + parseInt(req.query.b, 10);
  res.json({
    sum,
    MONGO_URI
  });
});

module.exports = app;
