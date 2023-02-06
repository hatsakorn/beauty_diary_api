require('dotenv').config()
const express = require('express')
const authRoute = require('./routes/auth-router')
const reserveRoute = require('./routes/reserve-route')
// const {sequelize} = require('./models')
const cors = require('cors')
const helmet = require('helmet')
const notFouldMiddleware = require('./middlewares/not-found')
const errorMiddleware = require('./middlewares/error')

const app = express()

app.use(helmet())
app.use(cors())
app.use(express.json())

app.use('/auth',authRoute)
app.use('/reserve',reserveRoute)

app.use(notFouldMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 8000
app.listen(port,()=>console.log({msg:`server is running on port: ${port}`}))