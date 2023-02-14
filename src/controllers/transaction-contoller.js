const { Transaction,Package,Reservation,Course } = require('../models');
const createError = require('../utils/create-error')

exports.getAllTransaction = async(req,res,next) => {
    try{
        const transaction = await Transaction.findAll({
            where:{
                userId:req.params.userId
            },
            include:[{
                model:Package
            },{
                model:Reservation,
                include:[{
                    model:Course
                }
                ]
            }]
        })
     res.status(200).json(transaction)
    }catch(err){
        next(err)
    }
}    

exports.getSumTopup = async(req,res,next) => {
    try{
        const transaction = await Transaction.findAll({
            where:{
                userId:req.params.userId
            },
            include:[{
                model:Package
            },{
                model:Reservation
            }]
        })

        const separatePackage = transaction.filter(el=>
            el.Package
          )
          const topup = separatePackage.reduce((acc,el)=>{
            acc += el.Package.topup
            return acc
          },0)
     res.status(200).json(topup)
    }catch(err){
        next(err)
    }
}    

exports.getTitlePrice = async(req,res,next) => {
    try{
        const transaction = await Transaction.findAll({
            where:{
                userId:req.params.userId
            },
            include:[{
                model:Package
            },{
                model:Reservation
            }]
        })

        const separatePackage = transaction.filter(el=>
            el.Package
          )
            
     res.status(200).json(separatePackage)
    }catch(err){
        next(err)
    }
}    

exports.createTransactionCourse = async(req,res,next) => {
    try{

        const value = req.body
        const result = await Transaction.create(value)
        
     res.status(200).json(result)
    }catch(err){
        next(err)
    }
}    

