const express = require('express')
const router = express.Router()
const transactionController = require('../controllers/transaction-contoller');
const authenticate = require('../middlewares/authenticate');

router.get('/gets', authenticate,transactionController.getAllCourses)
router.get('/get', authenticate,transactionController.getAllCourse)
router.get('/topup',authenticate,transactionController.getSumTopup)
router.get('/package',authenticate,transactionController.getTitlePrice)

router.post('/reserve',authenticate,transactionController.createTransactionCourse)
router.get('/balance',authenticate,transactionController.getBalance)


module.exports = router