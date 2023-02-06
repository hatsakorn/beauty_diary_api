const {Course} = require('../models')

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