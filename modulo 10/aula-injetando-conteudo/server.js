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

const session = require('express-session');

const MongoStore = require('connect-mongo');

const flash = require('connect-flash');

const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware')

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
    secret: '123',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
})

app.use(sessionOptions);
app.use(flash());

app.use(middlewareGlobal);

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(routes);

app.on('pronto', () => {
    app.listen(3000, function() {
        console.log('Servidor online')
    })
})