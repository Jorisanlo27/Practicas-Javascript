const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send(`<h1 style="color: green; font-size: 50px; font-family: arial;">Estas en el inicio</h1>`))

app.get('/productos', (req, res) => res.send(`<h1 style="color: red; font-size: 50px; font-family: arial;">Estas en productos</h1>`))

app.get('/contacto', (req, res) => res.send(`<h1 style="color: blue; font-size: 50px; font-family: arial;">Estas en contactos</h1>`))

app.listen(port, () => console.log(`Example app listening on port ${port}`))