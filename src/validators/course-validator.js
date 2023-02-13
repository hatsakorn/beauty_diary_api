const Joi = require('joi')
const validate = require('./validate')

const courseSchema = Joi.object({
    title:Joi.string().trim().required().messages({
        'any.required':'title is required',
        'string.empty':'title is required',
        'string.base':'title must be string'
    }),
    price:Joi.string().trim().required().messages({
        'any.required':'price is required',
        'string.empty':'price is required1',
        'string.base':'price must be string'
    }),
    timeUse:Joi.string().trim().required().messages({
        'any.required':'timeUse is required',
        'string.empty':'timeUse is required1',
        'string.base':'timeUse must be string'
    }),
    discount:Joi.number().precision(2).required().messages({
        'any.required':'discount is required',
        'number.base':'discount must be number',
        'number.precision':'discount insert in 2 digit'
    }),
    description:Joi.string().trim().required().messages({
        'any.required':'description is required',
        'string.empty':'description is required',
        'string.base':'description must be string'
    }),
    courseImage: Joi.string()
})


exports.validateCourse = validate(courseSchema)