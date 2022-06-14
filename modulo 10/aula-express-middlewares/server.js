const express = require('express');
const app = express();
const routes = require('./routes')
const path = require('path')
const { middlewareGlobal } = require('./src/middlewares/middleware')

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')))
app.use(middlewareGlobal)

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(routes);

app.listen(3000, function() {
    console.log('Servidor online')
})