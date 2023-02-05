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
        }
    },{
        underscored:true
    })
    Package.associate = db => {
        Package.hasMany(db.Transaction,{
            foreignKey:{
                name:"packageId",
                allowNull:false
            },
            onDelete: 'RESTRICT'
        })
    }
    return Package
}