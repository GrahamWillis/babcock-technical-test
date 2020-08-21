const express = require('express')
const path = require('path')
const app = express()
const port = '80'

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, 'dist/start.html')))
app.get('/bundle.js', (req, res) => res.sendFile(path.resolve(__dirname, 'dist/bundle.js')))

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`)
})
