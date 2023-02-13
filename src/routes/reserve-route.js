const express = require('express')
const router = express.Router()
const reserveController = require('../controllers/reserve-controller')

router.get('/courses',reserveController.selectedCourses)
router.post('/course',reserveController.createCourses)
router.post('/schedule',reserveController.createSchedule)
router.get('/schedule',reserveController.getSchedule)
router.get('/reservetime',reserveController.CountTimeFromReserve)
router.post('/time',reserveController.setTime)
router.get('/time',reserveController.getTime)

module.exports = router
