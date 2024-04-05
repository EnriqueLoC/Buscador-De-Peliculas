const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const v1 = require('../v1/routes/DisneyPlus.js');

app.use('/version1', v1); // aqui lo ejecuto pasandole la url de mi version de sitio (index v1 que esta en v1/routes) y la constante del archivo que hice arriba
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../app/views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../app/views')));
app.use(express.static(path.join(__dirname, '../app/views/CSS')));

module.exports = app;
