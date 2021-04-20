const express = require('express')
const app = express()
const port = 3000

app.use(express.static('pages'));

app.get('/home', (req, res) => res.sendFile(__dirname + '/pages/home.html'))

app.get('/about', (req, res) => res.sendFile(__dirname + '/pages/about.html'))

app.get('/contact', (req, res) => res.sendFile(__dirname + '/pages/contact.html'))

app.listen(port, () => console.log(`Example app listening on port ${port}`))