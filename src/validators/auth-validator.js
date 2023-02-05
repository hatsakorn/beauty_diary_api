const Joi = require('joi')
const validate = require('./validate')

const registerSchema = Joi.object({
    firstName:Joi.string().trim().required().messages({
        'any.required':'First name is required',
        'string.empty':'First name is required',
        'string.base':'First name must be string'
    }),
    lastName: Joi.string().trim().required().messages({
        'any.required':'Last name is required',
        'string.empty':'Last name is required'
    }),
    password: Joi.string().alphanum().min(6).required().trim().messages({
        'string.empty':'Password is required',
        'string.alphanum':'Password must be number or alphabet',
        'string.min':'Password must have at least 6 characters'
    }),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required().trim().messages({
        'any.only':'Password and confirmpassword did not match',
        'string.empty':'Confirm password is required'
    }).strip(),
    email: Joi.string().required().trim().email({tlds:false}),
    mobile: Joi.string().pattern(/^[0-9]{10}$/),
    dob: Joi.date(),
    balance: Joi.number(),
    role: Joi.string()
})


exports.validateRegister = validate(registerSchema)


const loginSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()
})

exports.validateLogin = validate(loginSchema)
