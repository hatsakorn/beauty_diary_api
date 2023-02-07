const Joi = require('joi')
const validate = require('./validate')

const timeSchema = Joi.object({
    timeslot:Joi.string().trim().required().messages({
        'any.required':'timeslot is required',
        'string.empty':'timeslot is required',
        'string.base':'timeslot must be string'
    }),
    checkLimit:Joi.string().trim().required().messages({
        'any.required':'checkLimit is required',
        'string.empty':'checkLimit is required',
        'string.base':'checkLimit must be string'
    }),


})

exports.validateTime = validate(timeSchema)