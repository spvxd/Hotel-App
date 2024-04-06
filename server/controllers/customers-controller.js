const Messages = require('../models/Messages')

const sendMessages = async (req, res) => {
    try {
        const messages = req.body.messages
        const raw = await Messages.create(messages)
        return res.sendStatus(200)
    } catch (error) {
        console.log(error)
        return res.sendStatus(500)
    }
}

const getMessages = async (req, res) => {
    try {
        const messages = await Messages.findAll({raw: true})
        return res.status(200).json({Messages: messages})
    }
    catch (err) {
        console.log(err)
        res.status(500).json({Error: err})
    }
}

module.exports = {
    sendMessages,
    getMessages
}