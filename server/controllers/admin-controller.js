const Messages = require('../models/Messages')

const deleteMessage = async (req, res) => {
    try {
        console.log(req.params.id)
        await Messages.destroy({where: {id: req.params.id}})
        return res.sendStatus(200)
    } catch (err) {
        console.log(err)
        return res.sendStatus(500)
    }

}

module.exports = {
    deleteMessage
}