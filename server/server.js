const express = require('express')
const app = express()
const PORT = 3001

app.get('/', (req, res)  => {
    res.send('Main page')
})

app.get('/login', (req, res) => {
    res.send('Login page')
})

app.listen(PORT, () => {
    console.log(`App listening on: http://localhost:${PORT} `)
})