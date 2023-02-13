const express = require('express')
const router = express.Router()
const packageController = require('../controllers/package-controller')

router.get('/get',packageController.getPackage)
router.post('/create',packageController.createPackage)
router.patch('/edit',packageController.editPackage)
router.delete('/delete/:id',packageController.deletePackage)

router.post('/buy',packageController.buyPackage)


module.exports = router