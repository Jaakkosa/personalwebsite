const express = require('express')
const app = express()
app.use(express.static('build'))


app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})
/*
app.get('/api/notes', (req, res) => {
  res.json(notes)
}) */

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})