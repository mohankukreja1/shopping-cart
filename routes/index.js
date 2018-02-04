var express = require('express');
var router = express.Router();

const products=require('../db/model').products
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req);
  products.findAll({}).then((result)=>{
    console.log(result)
  }).catch((err)=>{
    console.log(err);
  })
  res.render('index', { title: 'Express', });
});

module.exports = router;
