const {Course} = require('../models')
const {validateCourse} = require('../validators/course-validator')
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