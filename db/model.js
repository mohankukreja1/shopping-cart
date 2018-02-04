const sequelize=require('sequelize');
const datatypes=sequelize.DataTypes;
const db=new sequelize('dbone','userone','passone',{
    host: 'localhost',
    dialect:'mysql'
})

const products=db.define('products',{
    id:{
        type:datatypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },

    imagePath:{
        type:datatypes.STRING
    },
    title:{
        type:datatypes.STRING
    },
    description:{
        type:datatypes.STRING
    },
    price:{
        type:datatypes.INTEGER
    }

})

db.sync({force:true});


module.exports={
    products
}