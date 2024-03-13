const {Router} = require('express')
const express = require('express')
const router = Router()
const app = express()
const customer_controller = require('../controllers/customers-controller')

router.post('/send', customer_controller.sendMessages)
router.get('/get', customer_controller.getMessages)


module.exports = router