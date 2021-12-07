const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }))

app.get('/', function(req, res) {
    // console.log(req);
    // console.log(res);
    res.send('<form action="/" method="POST"> Nome: <input type="text" name="nome"> <button>Enviar</button> </form>')
})

app.get('/testes/:idUsuarios', (req, res) => {
    console.log(req.params)
    console.log(req.query)
    res.send(req.params)
})

app.post('/', function(req, res) {

    console.log(req.body)
    res.send('recebido: ' + req.body.nome)
})


app.listen(3000, function() {
    console.log('Servidor online')
})