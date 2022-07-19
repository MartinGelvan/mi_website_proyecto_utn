var express = require('express');
var router = express.Router();
var novedadesModel = require('../models/novedadesModel');

/* GET home page. */
router.get('/', async function (req, res, next) {
  //var novedades = await novedadesModel.getNovedades();
  var novedades;
  if (req.query.q === undefined) {
    novedades = await novedadesModel.getNovedades();
  } else {
    novedades = await novedadesModel.buscarNovedades(req.query.q);
  }
  res.render('news', {
    isNews: true,
    novedades,
    q:req.query.q,
    is_search:req.query.q !== undefined
  });
});

module.exports = router;
