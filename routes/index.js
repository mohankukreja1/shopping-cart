var express = require('express');
var router = express.Router();

const products=require('../db/model').products
/* GET home page. */
router.get('/', function(req, res, next) {

  products.findAll({}).then((result)=>{
    var temp=[];
    var step=3;
    for(var i=0;i<result.length;i+= step){
      temp.push(result.slice(i,i+3));
    }



      res.render('layout', { title: 'Express', temp: temp });
  }).catch((err)=>{
    console.log(err);
  })

});

module.exports = router;
