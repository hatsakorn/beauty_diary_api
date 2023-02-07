const Joi = require('joi')
const validate = require('./validate')

const packageSchema = Joi.object({
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
    topup:Joi.string().trim().required().messages({
        'any.required':'topup is required',
        'string.empty':'topup is required1',
        'string.base':'topup must be string'
    }),
    // description:Joi.string().trim().required().messages({
    //     'any.required':'description is required',
    //     'string.empty':'description is required',
    //     'string.base':'description must be string'
    // }),
    packageImage: Joi.string(),
    adsImage: Joi.string()

})


exports.validatePackage = validate(packageSchema)