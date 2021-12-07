const express = require('express')
const routes = express.Router();
const homeController = require('./controllers/homeController')
const contatoController = require('./controllers/contatoController')

routes.get('/', homeController.paginaInicial)
routes.post('/', homeController.paginaInicialResultado)
routes.get('/teste', homeController.teste)
routes.get('/contato', contatoController.paginaInicial)


module.exports = routes;