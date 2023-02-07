const express = require('express')
const router = express.Router()
const packageController = require('../controllers/package-controller')

router.post('/create',packageController.createPackage)


module.exports = router