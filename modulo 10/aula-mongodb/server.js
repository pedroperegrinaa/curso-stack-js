require('dotenv').config()

const express = require('express');
const app = express();
const routes = require('./routes');
const mongoose = require('mongoose');
// const db = require('./db');

mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true })
    .then(() => {
        console.log('contectou no Mongo')
        app.emit('pronto')
    })
    .catch(err => console.log(err))

const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware')

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')))
app.use(middlewareGlobal)

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(routes);

app.on('pronto', () => {
    app.listen(3000, function() {
        console.log('Servidor online')
    })
})