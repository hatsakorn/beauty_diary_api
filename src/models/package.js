module.exports = (sequelize,DataTypes) => {
    const Package = sequelize.define('Package',{
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
        topup:{
            type:DataTypes.INTEGER,
            allowNull:false,
            validate:{
                notEmpty: true
            }
        },
        packageImage:{
            type:DataTypes.STRING,
            allowNull:true,
            validate:{
                notEmpty: false
            }
        },
        adsImage:{
            type:DataTypes.STRING,
            allowNull:true,
            validate:{
                notEmpty: false
            }
        }
    },{
        underscored:true,
        timestamps: false

    })
    Package.associate = db => {
        Package.hasMany(db.Transaction,{
            foreignKey:{
                name:"packageId",
            },
            onDelete: 'RESTRICT'
        })
    }
    return Package
}