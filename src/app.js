require('dotenv').config()
const express = require('express')
const authRoute = require('./routes/auth-router')
const reserveRoute = require('./routes/reserve-route')
const packageRoute = require('./routes/package-route')
const transactionRoute = require('./routes/transaction-route')
// const {sequelize,Employee,Reservation,Transaction,User} = require('./models')
const cors = require('cors')
const helmet = require('helmet')
const notFouldMiddleware = require('./middlewares/not-found')
const errorMiddleware = require('./middlewares/error')
const authenticatedMiddleware = require('./middlewares/authenticate');



const app = express()

app.use(helmet())
app.use(cors())
app.use(express.json())
// User.sync({alter:true})
app.use('/auth',authRoute)
app.use('/reserve',authenticatedMiddleware,reserveRoute)
app.use('/package',authenticatedMiddleware,packageRoute)
app.use('/transaction',authenticatedMiddleware,transactionRoute)

app.use(notFouldMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 8000
app.listen(port,()=>console.log({msg:`server is running on port: ${port}`}))