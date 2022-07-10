var express = require('express');
var router = express.Router();


router.get('/',function(req,res,next){
    res.render('admin/login',{
        layout:'admin/layout',//admin/layout.hbs
        persona:req.session.nombre
    }); //view/admin/login.hbs
})

module.exports = router;