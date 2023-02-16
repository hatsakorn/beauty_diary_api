const {Course,Reservation,Time} = require('../models')
const {validateCourse} = require('../validators/course-validator')
const {validateReserve} = require('../validators/reserve-validator')
const {validateTime} = require('../validators/time-validator')
const {Op} = require('sequelize')

const createError = require('../utils/create-error')

exports.selectedCourses = async(req,res,next) => {
    try{
        //SELECT title from courses
        const courses = await Course.findAll()
     res.status(200).json(courses)
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
        if(req.user.role === "admin"){
        const result = await Course.create(value)
        res.status(200).json(result)
    }
    }catch(err){
        next(err)
    }
}

exports.createSchedule = async (req,res,next) => {
    try{
        const value = validateReserve(req.body)
        // console.log(req.body)
        value.userId = req.user.id
        // const {title,status,date,time} 
        const findTitle = await Course.findOne({where:{title:value.title}})
        // // console.log("----------------------------------------------")
            // console.log(findTitle)
        // if(findTitle){
        value.courseId = findTitle.dataValues.id
        console.log(value)
        const result = await Reservation.create(value)
        res.status(200).json(result)
        // }
    }catch(err){
        next(err)
    }
}

exports.getSchedule = async (req,res,next) => {
    try{
        const schedule = await Reservation.findAll()
        res.status(200).json(schedule)
    }catch(err){
        next(err)
    }
}
exports.getScheduleCourse = async (req,res,next) => {
    try{
        const schedule = await Reservation.findAll({
            where:{status:"pending"},
            include:[{
                model:Course,
            }]
        })
        res.status(200).json(schedule)
    }catch(err){
        next(err)
    }
}
exports.getCompletedCourse = async (req,res,next) => {
    try{
        const schedule = await Reservation.findAll({
            where:{status:"complete"},
            include:[{
                model:Course,
            }]
        })
        res.status(200).json(schedule)
    }catch(err){
        next(err)
    }
}

exports.CountTimeFromReserve = async (req,res,next) => {
    try{
        const {timeReq,dateReq} = req.query
        const countTime = await Reservation.findAll({
            where:{time:timeReq, date:dateReq}
            
        })
        res.status(200).json(countTime.length)
    }catch(err){
        next(err)
    }
}

exports.setTime = async (req,res,next)=> {
    try{
        const value = validateTime(req.body)
        const sameTime = await Time.findOne({
            where:{timeslot:value.timeslot}
        }) 
        if(sameTime){
        createError('This timeslot has already been created')
        }else{
        const result = await Time.create(value)
        res.status(200).json(result)
        }
    }catch(err){
        next(err)
    }
}

exports.getTime = async (req,res,next) => {
    try{
        const timeslot = await Time.findAll({
            order:["timeslot"]
        })
        res.status(200).json(timeslot)
    }catch(err){
        next(err)
    }
}

exports.updateStatus = async (req,res,next) => {
    try{
        const value = req.body
        // console.log(value)
        const result = await Reservation.update(value,{where:{id:value.id}})
        res.status(200).json(result)
    }catch(err){
        next(err)
    }}
