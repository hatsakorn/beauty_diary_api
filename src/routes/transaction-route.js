const express = require('express')
const router = express.Router()
const transactionController = require('../controllers/transaction-contoller')

router.get('/get/:userId',transactionController.getAllTransaction)
router.get('/topup/:userId',transactionController.getSumTopup)
router.get('/package/:userId',transactionController.getTitlePrice)

router.post('/reserve',transactionController.createTransactionCourse)


module.exports = router