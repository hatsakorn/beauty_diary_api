const { Transaction,Package,Reservation } = require('../models');
const createError = require('../utils/create-error')

exports.getAllTransaction = async(req,res,next) => {
    try{
        const transaction = await Transaction.findAll({
            include:[{
                model:Package
            },{
                model:Reservation
            }]
        })
     res.status(200).json(transaction)
    }catch(err){
        next(err)
    }
}    