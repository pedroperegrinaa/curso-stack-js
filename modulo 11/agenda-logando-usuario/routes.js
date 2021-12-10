const express = require('express');
const { route } = require('express/lib/application');
const routes = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');

// HOME
routes.get('/', homeController.index);

// LOGIN
routes.get('/login/index', loginController.index);
routes.post('/login/register', loginController.register);
routes.post('/login/login', loginController.login);
routes.get('/login/logout', loginController.logout);


module.exports = routes;