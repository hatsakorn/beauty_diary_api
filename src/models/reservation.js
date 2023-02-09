module.exports = (sequelize,DataTypes) => {
    const reStatus = ['available','pending','complete']
    const Reservation = sequelize.define('Reservation',{
        status:{
            type:DataTypes.ENUM(...reStatus),
            allowNull:false,
            validate:{
                notEmpty: true
            }
        },
        date:{
            type:DataTypes.DATEONLY,
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
        Reservation.hasOne(db.Transaction,{
            foreignKey:{
                name: "reservationId",
                allowNull: false
            },
            onDelete: 'RESTRICT'
        })
        Reservation.belongsTo(db.Employee,{
            foreignKey:{
                name: "employeeId",
            },
            onDelete: 'RESTRICT'
        })
        Reservation.belongsTo(db.Course,{
            foreignKey:{
                name: "courseId",
                allowNull: false
            },
            onDelete: 'RESTRICT'
        })
    }
    return Reservation
}