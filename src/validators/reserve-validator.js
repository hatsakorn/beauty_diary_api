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
    transactionId: Joi.number().required(),
    employeeId: Joi.number()


})

exports.validateReserve = validate(reserveSchema)