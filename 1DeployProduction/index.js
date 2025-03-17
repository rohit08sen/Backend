require('dotenv').config()

const express = require('express')

const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('rohit08sen')
})

app.get('/login', (req, res) => {
  res.send('<h1>HEllo Rohit</h1>')
})

app.get('/h304', (req, res) => {
  res.send('<h2>Welcome to my room</h2>')
})
const port = 3000;
app.listen(process.env.PORT, () => {
  console.log(`server running on http://localhost:${port}`)
} )