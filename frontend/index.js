const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Greetings from node.js v2')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})