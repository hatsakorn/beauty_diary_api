module.exports = (sequelize,DataTypes) => {
    const Time = sequelize.define('Time',{
        timeslot:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty: true
            }
        },
        checkLimit:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty: true
            }
        }
        },{
        underscored:true,
        })
    return Time
}