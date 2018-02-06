var express = require('express');
var router = express.Router();
//var csrf = require('csurf');
//var csrfProtection = csrf()

//router.use(csrfProtection)

router.get('/',(req,res,next)=>{
        res.render('signup', {})
    }

)

module.exports = router;
