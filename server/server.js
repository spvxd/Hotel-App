const express = require('express')
const cors = require('cors')
const {json} = require("express");
const sequelize = require("./database");
const Users = require("./models/Users");
const app = express()
const PORT = 3001

app.use(cors())
app.use(json())
app.get('/', (req, res) => {
    res.send('Main page')
})

app.post('/login', async (req, res) => {
    const user = await Users.findOne({where: {username: req.body.username}, raw: true})
    if(user) {
        try {
            if (user.password === req.body.password ) {
                if(user.role === 'Admin') {
                    return res.json({ Role: "Admin"})
                }
                else{
                    return res.json({ Role: "Client"})
                }
            }
            else {
                return res.json({Error: "Неверный пароль"})
            }
        }
        catch (e) {
            console.log(e)
        }
    }
    else {
        return res.json({Error: 'Такого пользователя нет'})
    }



})


app.listen(PORT, '', () => {
    console.log(`App listening on: http://localhost:${PORT} `)
})