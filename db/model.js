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

db.sync({force:true}).then(()=>{
    products.create({
        imagePath:"https://i.ytimg.com/vi/jl2xNWeujZs/maxresdefault.jpg",
        title:"GTA 5",
        description:"awesome game",
        price:10
    }).then().catch((err)=>{
        console.log(err)
    });
    products.create({
        imagePath:"https://i.ytimg.com/vi/jl2xNWeujZs/maxresdefault.jpg",
        title:"GTA 5",
        description:"awesome game",
        price:10
    }).then().catch((err)=>{
        console.log(err)
    });
    products.create({
        imagePath:"https://i.ytimg.com/vi/jl2xNWeujZs/maxresdefault.jpg",
        title:"GTA 5",
        description:"awesome game",
        price:10
    }).then().catch((err)=>{
        console.log(err)
    });
    products.create({
        imagePath:"https://i.ytimg.com/vi/jl2xNWeujZs/maxresdefault.jpg",
        title:"GTA 5",
        description:"awesome game",
        price:10
    }).then().catch((err)=>{
        console.log(err)
    });
});


module.exports={
    products
}