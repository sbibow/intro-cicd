const express = require("express")
const app = express()

app.get("/", (req, res) => {
  const sum = parseInt(req.query.a) + parseInt(req.query.b)
  res.json({sum})
})

module.exports = app