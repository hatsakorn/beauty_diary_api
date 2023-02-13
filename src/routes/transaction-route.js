const express = require('express')
const router = express.Router()
const transactionController = require('../controllers/transaction-contoller')

router.get('/get',transactionController.getAllTransaction)


module.exports = router