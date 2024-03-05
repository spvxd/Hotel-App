const express = require('express')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const {json} = require("express");
const authRouter = require('./routes/auth')
const sequelize = require("./database");
const Users = require("./models/Users");
const app = express()
const PORT = 3001

app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET"],
    credentials: true

}))
app.use(json())
app.use(cookieParser())

app.use('/auth', authRouter)



app.listen(PORT, '', () => {
    console.log(`App listening on: http://localhost:${PORT} `)
})