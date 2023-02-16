const {Package,Transaction} = require('../models')
const {validatePackage} = require('../validators/package-validator')
const createError = require('../utils/create-error');


exports.getPackage = async (req,res,next) => {
    try{
        const value = await Package.findAll()
        res.status(200).json(value)
    }catch(err){
        next(err)
    }
}

exports.createPackage = async (req,res,next) => {
    try{
        const value = validatePackage(req.body)
        const isSamePackage = await Package.findOne({where:{title :value.title}})
        if(isSamePackage){
            createError('Package has already created')
        }
        const result = await Package.create(value)
        res.status(200).json(result)
    }catch(err){
        next(err)
    }
}

exports.editPackage = async (req,res,next) => {
    try{
        const value = req.body
        const result = await Package.update(value,{where:{id:value.id}})
        res.status(200).json(result)
    }catch(err){
        next(err)
    }
}

exports.deletePackage = async (req,res,next) => {
    try{
        // console.log(req.params)
        const value = req.params
        // console.log(value)
        await Package.destroy({where:{
             id:+value.id
        }})

        res.status(204).json()
    }catch(err){
        next(err)
    }
}
exports.buyPackage = async (req,res,next) => {
    try{
        const value = req.body
        const result = await Transaction.create(value)
        res.status(200).json(result)
    }catch(err){
        next(err)
    }
}

