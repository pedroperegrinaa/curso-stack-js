exports.paginaInicial = (req, res) => {
    res.render('index')
}

exports.paginaInicialResultado = (req, res) => {
    console.log(req.body)
    res.send('recebido: ' + req.body.nome)
}

exports.teste = (req, res) => {
    console.log(res)
    res.send(req.params)
}