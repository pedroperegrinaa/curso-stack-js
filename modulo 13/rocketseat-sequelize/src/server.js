const express = require('express');
const routes = require('./routes')

const app = express();
app.use(express.json());
app.use(routes);

app.listen(3003, function() {
    console.log('server on');
});