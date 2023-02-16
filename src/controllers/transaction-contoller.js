const { Transaction,Package,Reservation,Course } = require('../models');
const createError = require('../utils/create-error')

exports.getAllCourses = async(req,res,next) => {
    try{
        const {id: userId} = req.user
        const transaction = await Transaction.findAll({
            where:{
                userId
            },
            include:[{
                model:Package
            },{
                model:Reservation,
                include:[{
                    model:Course
            }]
            }],
            
        })
        const filterReservation = transaction.filter(el=>
            el.Reservation
          )
        const eachReservation = filterReservation.map(el=>
            el.Reservation
          )
        const eachCourse = eachReservation.map(el=>
            el.Course
          )

     res.status(200).json(eachCourse)
    }catch(err){
        next(err)
    }
}    

exports.getAllCourse = async(req,res,next) => {
    try{
        const {id: userId} = req.user
        const transaction = await Reservation.findAll({
            where:{
                userId
            },
            include:[{
                model:Course
            }]
        })

        const eachReservation = transaction.map(el=>
            el.Course
          )

     res.status(200).json(transaction)
    }catch(err){
        next(err)
    }
}    

exports.getSumTopup = async(req,res,next) => {
    try{
        const {id: userId} = req.user
        const transaction = await Transaction.findAll({
            where:{
                userId
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
        const {id: userId} = req.user
        const transaction = await Transaction.findAll({
            where:{
                userId
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
        value.userId = req.user.id
        value.reservationId = value.reservationId
        console.log(value)

        const result = await Transaction.create(value)
        
     res.status(200).json(result)
    }catch(err){
        next(err)
    }
}    

exports.getBalance = async(req,res,next) => {
    try{
        const {id: userId} = req.user
        const transaction = await Transaction.findAll({
            where:{
                userId
            },
            include:[{
                model:Package
            },{
                model:Reservation,
                include:[{
                    model:Course
            }]
        }
    ]
})

        const eachPackage = transaction.filter(el=>
            el.Package
          )
          const topup = eachPackage.reduce((acc,el)=>{
            acc += el.Package.topup
            return acc
          },0)

        const filterReservation = transaction.filter(el=>
            el.Reservation
          )
        const eachReservation = filterReservation.map(el=>
            el.Reservation
          )
        const eachCourse = eachReservation.reduce((acc,el)=>{
            acc += el.Course.price
            return acc
        },0)
        //   const price = eachCourse.reduce((acc,el)=>{
        //     acc += el.Package.price
        //     return acc
        //   },0)

        //   res.status(200).json(eachReservation)
          res.status(200).json(topup-eachCourse)
    }catch(err){
        next(err)
    }
}    