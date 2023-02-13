module.exports = (sequelize,DataTypes) => {
    const Transaction = sequelize.define('Transaction',{
        paymentDetail:{
            type:DataTypes.STRING,
            validate:{
                notEmpty: false
            }
        },
        verifyImage:{
            type:DataTypes.STRING,
            validate:{
                notEmpty: false
            }
        }
    },{
        underscored:true,
        timestamps: false
    })
    Transaction.associate = db => {
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
                },
                onDelete: 'RESTRICT'
        })
            Transaction.belongsTo(db.Reservation,{
                foreignKey:{
                    name: "reservationId",
                },
                onDelete: 'RESTRICT'
        })
    }
    return Transaction
}