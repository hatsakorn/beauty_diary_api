const express = require('express')
const router = express.Router()
const reserveController = require('../controllers/reserve-controller');
const authenticate = require('../middlewares/authenticate');

router.get('/courses',reserveController.selectedCourses)
router.post('/course',reserveController.createCourses)
router.post('/schedule',authenticate,reserveController.createSchedule)
router.get('/schedule',reserveController.getSchedule)
router.get('/reserveCourse',reserveController.getScheduleCourse)
router.get('/completedCourse',reserveController.getCompletedCourse)
router.get('/reservetime',reserveController.CountTimeFromReserve)
router.post('/time',reserveController.setTime)
router.get('/time',reserveController.getTime)
router.patch('/update',authenticate,reserveController.updateStatus)

module.exports = router
