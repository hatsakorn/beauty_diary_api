const Joi = require('joi')
const validate = require('./validate')

const reserveSchema = Joi.object({
    status:Joi.string().trim().required().messages({
        'any.required':'status is required',
        'string.empty':'status is required',
        'string.base':'status must be string'
    }),
    date:Joi.date().required().messages({
        'any.required':'date is required',
        'date.base':'date must be date'
    }),
    time:Joi.string().trim().required().messages({
        'any.required':'time is required',
        'string.empty':'time is required',
        'string.base':'time must be string'
    }),
    title:Joi.string().trim().required().messages({
        'any.required':'title is required',
        'string.empty':'title is required',
        'string.base':'title must be string'
    }),


})

exports.validateReserve = validate(reserveSchema)