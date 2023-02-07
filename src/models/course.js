module.exports = (sequelize,DataTypes) => {
    const Course = sequelize.define('Course',{
        title:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty: true
            }
        },
        price:{
            type:DataTypes.INTEGER,
            allowNull:false,
            validate:{
                notEmpty: true
            }
        },
        discount:{
            type:DataTypes.DECIMAL(10,2),
            allowNull:false,
            validate:{
                notEmpty: true
            }
        },
        description:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty: true
            }
        },
        courseImage:{
            type:DataTypes.STRING,
            allowNull:true,
            validate:{
                notEmpty: false
            }
        }
    },{
        underscored:true,
    })
    Course.associate = db => {
        Course.hasMany(db.Transaction,{
            foreignKey:{
                name:"courseId",
                allowNull:false
            },
            onDelete: 'RESTRICT'
        })
    }
    return Course
}