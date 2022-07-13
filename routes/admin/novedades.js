var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');

router.get('/',async function(req,res,next){
    var novedades = await novedadesModel.getNovedades();
    res.render('admin/novedades',{
        layout:'admin/layout',//admin/layout.hbs
        persona:req.session.nombre,
        novedades
    }); //view/admin/login.hbs
})

router.get('/agregar',(req,res,next)=>{
    res.render('admin/agregar',{
        layout:'admin/layout'
    
    }) 
})

router.post('/agregar', async(req,res,next)=>{
    // console.log(req.body);
    try{
        if(req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != ""){
            await novedadesModel.insertNovedades(req.body);
            res.redirect('/admin/novedades');
        }else{
            res.render('admin/agregar',{
                layout:'admin/layout',
                error:true,
                message:'Todos los campos son requeridos'
            })
        }
    }catch(error){
        console.log(error);
        res.render('admin/agregar',{
            layout:'admin/layout',
            error:true,
            message:'No se carga la novedad'
        })
    }
})

router.get('/eliminar/:id', async(req,res,next)=>{
    var id = req.params.id;
    await novedadesModel.deleteNovedadById(id);
    res.redirect('/admin/novedades');
})

module.exports = router;