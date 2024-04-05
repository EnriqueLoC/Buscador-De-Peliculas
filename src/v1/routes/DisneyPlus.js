const express = require('express'); //llamo a express porque lo voy a usar
const router = express.Router(); //llamo al router que es metodo de express
const controllers = require('../../controllers/controllers.js'); // llamo a el controlador

router
  .get('/', controllers.getAllmovies)
  .get('/cast', controllers.getCast)
  .get('/:title', controllers.getbytitle)
  .get('/directors/:director', controllers.getbydirector)
  .get('/genres/:genre', controllers.getbygenre);

module.exports = router;
