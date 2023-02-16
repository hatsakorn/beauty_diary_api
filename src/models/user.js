module.exports = (sequelize,DataTypes) => {
    const role = ["customer","admin"]
    const User = sequelize.define('User',{
        firstName:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty: true
            }
        },
        lastName:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty: true
            }
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                isEmail: true
            }
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        mobile:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                is:/^[0-9]{10}$/
            }
        },
        dob:{
            type:DataTypes.DATE,
            allowNull:true,
            validate:{
                notEmpty: false
            }
        },
        role:{
            type:DataTypes.ENUM(...role),
            allowNull:true,
            validate:{
                notEmpty: false
            }
        },
        balance:{
            type:DataTypes.INTEGER,
            allowNull:true,
            validate:{
                notEmpty: false
            }
        }
    },{
        underscored:true,
        timestamps: false
    })
    User.associate = db => {
        User.hasMany(db.Transaction,{
            foreignKey:{
                name:"userId",
            },
            onDelete: 'RESTRICT'
        })
        User.hasMany(db.Reservation,{
            foreignKey:{
                name:"userId",
            },
            onDelete: 'RESTRICT'
        })
    }
    

    return User
}