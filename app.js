const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config()

const dbconnect = require('./mongo/connection.js')
const routes = require('./router.js')
const app = express()

const port = process.env.PORT

app.use(morgan('combined'))
app.use(express.json())
app.use(cors())
app.use(routes)
dbconnect()

app.listen(process.env.PORT, () => console.log(`Server running at port ${port}`))