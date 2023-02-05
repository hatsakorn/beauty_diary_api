module.exports = (sequelize,DataTypes) => {
    const employee = sequelize.define('Employee',{
        name:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty: true
            }
        },
        mobile:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                is:/^[0-9]{10}$/
            }
        }
    },{
        underscored:true
    }
    )
    employee.associate = db => {
        employee.hasMany(db.Reservation,{
            foreignKey:{
                name:"employeeId",
                allowNull:false
            },
            onDelete: 'RESTRICT'
        })
    }
    return employee
}