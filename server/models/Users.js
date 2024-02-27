const  {Model, DataTypes} = require ('sequelize')

const sequelize = require ('../database')

class Users extends Model {

}

Users.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    token: {
        type: DataTypes.STRING,
        allowNull: true
    },
    role: {
        type: DataTypes.STRING,
        allowNull: true
    },
    room: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },

}, {
    sequelize,
    modelName: 'users'
});


(async () => {
    await Users.sync({alter: true})
})()

module.exports = Users;