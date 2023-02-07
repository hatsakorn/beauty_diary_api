module.exports = (sequelize,DataTypes) => {
    const Reservation = sequelize.define('Reservation',{
        status:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty: true
            }
        },
        date:{
            type:DataTypes.DATE,
            allowNull:false,
            validate:{
                notEmpty: true
            }
        },
        time:{
            type:DataTypes.TIME,
            allowNull:false,
            validate:{
                notEmpty: true
            }
        }
    },{
        underscored:true,
        timestamps: false
    }
    )
    Reservation.associate = db => {
        Reservation.belongsTo(db.Transaction,{
            foreignKey:{
                name: "transactionId",
                allowNull: false
            },
            onDelete: 'RESTRICT'
        })
        Reservation.belongsTo(db.Employee,{
            foreignKey:{
                name: "employeeId",
                allowNull: false
            },
            onDelete: 'RESTRICT'
        })
    }
    return Reservation
}