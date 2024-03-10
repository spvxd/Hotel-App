const sendMessages = (req, res) => {
    try {
        const messages = req.body.messages
        console.log(messages);
    } catch (error) {
        
    }
}

module.exports = {
    sendMessages
}