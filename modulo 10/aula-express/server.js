const express = require('express');
const app = express();

app.get('/', function(req, res) {
    // console.log(req);
    // console.log(res);
    res.send('<form action="/" method="POST"> Nome: <input type="text" name="nome"> <button>Enviar</button> </form>')
})

app.post('/', function(req, res) {

    res.send('recebido')

})


app.get('/outra', function(req, res) {
    res.send('Outra rota')
})

app.listen(3000, function() {
    console.log('Servidor online')
})