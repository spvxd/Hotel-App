const Messages = require('../models/Messages')

const sendMessages = async (req, res) => {
    try {
        const messages = req.body.messages
        console.log(messages);
        const raw = await Messages.create(messages)
        return res.sendStatus(200)
    } catch (error) {
        console.log(error)
        return res.sendStatus(500)
    }
}

module.exports = {
    sendMessages
}