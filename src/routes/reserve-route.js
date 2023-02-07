const express = require('express')
const router = express.Router()
const reserveController = require('../controllers/reserve-controller')

router.get('/courses',reserveController.selectedCourses)
router.post('/course',reserveController.createCourses)

module.exports = router
