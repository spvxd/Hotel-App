const {Router} = require('express')
const express = require('express')
const router = Router()
const app = express()
const customer_controller = require('../controllers/customers-controller')
const admin_controller = require('../controllers/admin-controller')
router.post('/send', customer_controller.sendMessages)
router.get('/get', customer_controller.getMessages)
router.delete('/delete/:id', admin_controller.deleteMessage)


module.exports = router