const {Sequelize} = require('sequelize')
const sqlite = require('sqlite3')
const fs = require('fs')
const path = require('path')

const db_path = path.resolve("./db.sqlite");
const sequelize = new Sequelize('db', 'root', 'root', {
    dialect: 'sqlite',
    host: db_path,
    define: {
        timestamps: false
    },
    logging: false,
})



module.exports = sequelize