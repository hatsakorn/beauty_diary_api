const {Package} = require('../models')
const {validatePackage} = require('../validators/package-validator')

exports.createPackage = async (req,res,next) => {
    try{
        const value = validatePackage(req.body)

        const result = await Package.create(value)
        res.status(200).json(result)
    }catch(err){
        next(err)
    }
}