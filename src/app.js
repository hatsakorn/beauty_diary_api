require('dotenv').config()
const express = require('express')
const app = express()
const authRoute = require('./routes/auth-router')
const {sequelize} = require('./models')
const cors = require('cors')
const notFouldMiddleware = require('./middlewares/not-found')
const errorMiddleware = require('./middlewares/error')



app.use(cors())
app.use(express.json())

app.use('/auth',authRoute)

app.use(notFouldMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 8000
app.listen(port,()=>console.log({msg:`server is running on port: ${port}`}))