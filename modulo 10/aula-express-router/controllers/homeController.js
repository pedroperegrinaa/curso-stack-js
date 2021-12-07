exports.paginaInicial = (req, res) => {
    res.send('<form action="/" method="POST"> Nome: <input type="text" name="nome"> <button>Enviar</button> </form>')
}

exports.paginaInicialResultado = (req, res) => {
    console.log(req.body)
    res.send('recebido: ' + req.body.nome)
}

exports.teste = (req, res) => {
    console.log(res)
    res.send(req.params)
}