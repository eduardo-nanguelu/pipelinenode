// Paquetes Requeridos
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config()
//configurando las rutas
const routes = require('./api/routes/users') // incluye la ruta authors.js file
// Motor de plantilla
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(routes)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json()) // we need to tell server to use json as well
app.use(express.static(path.join(__dirname+ "/front")));

module.exports = app;