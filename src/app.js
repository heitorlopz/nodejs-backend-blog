const express = require('express')
const cors = require('cors')
const port = process.env.PORT
const routers = require('./routers/routers')
require('./db/db')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routers)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})