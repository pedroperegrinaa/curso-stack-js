exports.paginaInicial = (req, res) => {
    res.render('index')
    console.log('olha a rota')
        // console.log(req.session)
}

exports.paginaInicialResultado = (req, res) => {
    // console.log(req.body)
    res.send('recebido: ' + req.body.cliente)
}

exports.teste = (req, res) => {
    console.log(res)
    res.send(req.params)
}