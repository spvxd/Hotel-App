const express = require('express')
const {Router} = require('express')
const app = express()
const cors = require('cors')
const router = Router()
const authController = require('../controllers/auth-controller')
const cookieParser = require('cookie-parser')
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET"],
    credentials: true
}))
app.use(cookieParser())
const test = (req, res) => {
    return res.json({Status: 'Success'})
}
router.get('/', authController.verifyUser, authController.getUser)
router.post('/login', authController.login)
router.get('/test',test )
router.get('/logout',authController.logout)


module.exports = router
