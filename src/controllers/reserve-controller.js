const {Course,Reservation,Time} = require('../models')
const {validateCourse} = require('../validators/course-validator')
const {validateReserve} = require('../validators/reserve-validator')
const {validateTime} = require('../validators/time-validator')
const createError = require('../utils/create-error')

exports.selectedCourses = async(req,res,next) => {
    try{
        //SELECT title from courses
        const courses = await Course.findAll({
            attributes: ['title']
        })
     res.status(200).json({courses})
    }catch(err){
        next(err)
    }
}    

exports.createCourses = async (req,res,next) => {
    try{
        // console.log(req.body)
        const value = validateCourse(req.body)
        const isSameCourse = await Course.findOne({where:{title :value.title}})
        if(isSameCourse){
            createError('Course has already created')
        }
        const result = await Course.create(value)
        res.status(200).json(result)
    }catch(err){
        next(err)
    }
}

exports.createSchedule = async (req,res,next) => {
    try{
        // console.log('body',req.body)
        const value = validateReserve(req.body)
        // console.log('value',value)
        const result = await Reservation.create(value)
        // console.log('result',result)
        res.status(200).json(result)
    }catch(err){
        next(err)
    }
}

exports.createTime = async (req,res,next)=> {
    try{
        const value = validateTime(req.body)
        const result = await Time.create(value)
        res.status(200).json(result)
    }catch(err){
        next(err)
    }
}