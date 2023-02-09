module.exports = (sequelize,DataTypes) => {
    const Transaction = sequelize.define('Transaction',{
        paymentDetail:{
            type:DataTypes.STRING,
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
                    allowNull: true
                },
                onDelete: 'RESTRICT'
        })
            Transaction.belongsTo(db.Reservation,{
                foreignKey:{
                    name: "reservationId",
                    allowNull: true
                },
                onDelete: 'RESTRICT'
        })
    }
    return Transaction
}