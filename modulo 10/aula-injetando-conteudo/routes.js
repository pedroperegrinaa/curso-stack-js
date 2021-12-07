const express = require('express')
const routes = express.Router();
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')

function meuMid(req, res, next) {

    req.session = { nome: 'Luiz', sobrenome: 'Miranda' }

    console.log();
    console.log('passei no seu middleware');
    console.log();
    next();

}

// HOME
routes.get('/', homeController.paginaInicial)
routes.post('/', homeController.paginaInicialResultado)

// TESTE
routes.get('/teste', homeController.teste)

// CONTATO
routes.get('/contato', contatoController.paginaInicial)

module.exports = routes;