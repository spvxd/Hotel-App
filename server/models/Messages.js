const  {Model, DataTypes} = require ('sequelize')

const sequelize = require ('../database')

class Messages extends Model {

}

Messages.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    question: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    room: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    time: {
        type: DataTypes.TIME,
        allowNull: true
    },
    

}, {
    sequelize,
    modelName: 'messages'
});


(async () => {
    await Messages.sync({alter: true})
})()

module.exports = Messages;