import sequelize from "../database";
const {DataTypes} = require('sequelize')



const User = sequelize.define('users',{
    firstName:{
        type:DataTypes.STRING
    },
    lastName:{
        type:DataTypes.STRING,
    },
    email:{
        type:DataTypes.STRING
    }

})

module.exports = User