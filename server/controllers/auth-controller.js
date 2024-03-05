const jwt = require("jsonwebtoken");
const Users = require("../models/Users");
const cookieParser = require('cookie-parser')
const express = require("express");
const app = express()
app.use(cookieParser())
const verifyUser = async (req, res, next) => {
    const token = req.cookies.token
    console.log(token)
    if (!token) {
        return res.json({Error: "Вы не авторизованы  "})
    } else {
        await jwt.verify(token, "jwt-secret-key", (err, decoded) => {
            console.log(decoded)
            if (err) {
                return res.json({Error: "Ошибка токена"})
            } else {
                req.name = decoded.name
                next()
            }
        })
    }
}

const getUser = async (req, res) => {
    let curName = req.name
    const user = await Users.findOne({raw: true, where: {username: curName}})
    if (user) {
        console.log(user.role)
        if (user.role === 'admin') {
            return res.json({Role: 'Admin'})
        } else {
            return res.json({Role: 'User'})
        }
    }
}

const login = async (req, res) => {
    const user = await Users.findOne({where: {username: req.body.username}, raw: true})
    console.log(user)
    if(user) {
        try {
            const name = user.username
            const token = jwt.sign({name}, "jwt-secret-key", {expiresIn: '1d'})
            console.log(token)
            res.cookie('token', token)
            await Users.update({token: token}, {where: {username: req.body.username}})
            if (user.password === req.body.password ) {
                if(user.role === 'admin') {
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


}

module.exports = {
    verifyUser, getUser, login
}