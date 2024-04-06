const express = require('express')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const {json} = require("express");
const authRouter = require('./routes/auth')
const messagesRouter = require('./routes/messages')
const sequelize = require("./database");
const Users = require("./models/Users");
const app = express()
const PORT = 3001

app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET", "DELETE"],
    credentials: true

}))
app.use(json())
app.use(cookieParser())

app.use('/auth', authRouter)
app.use('/messages', messagesRouter)


app.listen(PORT, '', () => {
    console.log(`App listening on: http://localhost:${PORT} `)
})