const express = require('express')
const cors = require('cors')
const {json} = require("express");
const sequelize = require("./database");
const app = express()
const PORT = 3001

app.use(cors())
app.use(json())
app.get('/', (req, res) => {
    res.send('Main page')
})

app.post('/login', (req, res) => {
    return res.json({userLogin: req.body.username, userPassword: req.body.password})
})


app.listen(PORT, '', () => {
    console.log(`App listening on: http://localhost:${PORT} `)
})