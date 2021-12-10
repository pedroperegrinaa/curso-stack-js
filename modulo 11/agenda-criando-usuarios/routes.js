const express = require('express');
const { route } = require('express/lib/application');
const routes = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');

// HOME
routes.get('/', homeController.index);

// Rotas de login

routes.get('/login/index', loginController.index);
routes.post('/login/register', loginController.register);

module.exports = routes;