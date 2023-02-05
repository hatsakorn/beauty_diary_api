module.exports = (sequelize,DataTypes) => {
    const status = ['package','course']
    const Transaction = sequelize.define('Transaction',{
        paymentDetail:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty: true
            }
        },
        porcStatus:{
            type:DataTypes.ENUM(...status),
            allowNull:false,
            validate:{
                notEmpty: true
            }
        },
        verifyImage:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty: true
            }
        }
    },{
        underscored:true
    })
    Transaction.associate = db => {
        Transaction.hasMany(db.Reservation,{
            foreignKey:{
                name:"transactionId",
                allowNull:false
            },
            onDelete: 'RESTRICT'
        })
        Transaction.belongsTo(db.User,{
            foreignKey:{
                name: "userId",
                allowNull: false
            },
            onDelete: 'RESTRICT'
        })
            Transaction.belongsTo(db.Package,{
                foreignKey:{
                    name: "packageId",
                    allowNull: false
                },
                onDelete: 'RESTRICT'
        })
            Transaction.belongsTo(db.Course,{
                foreignKey:{
                    name: "courseId",
                    allowNull: false
                },
                onDelete: 'RESTRICT'
        })
    }
    return Transaction
}