const express = require('express')
const app = express()
const { urlencoded, json } = require('body-parser')
const PORT = process.env.PORT || 5000
const { submitNewsLetter } = require('./service')

app.use(urlencoded({ extended: false }))
app.use(json())

app
    .post('/', submitNewsLetter)
    .listen(PORT, () => console.log(`Listening to ${PORT}`))