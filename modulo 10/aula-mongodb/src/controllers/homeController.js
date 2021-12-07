// const HomeModel = require('../models/HomeModel')

// HomeModel.create({
//         titulo: 'Um titulo de testes',
//         descricao: 'Uma descrição de testes'
//     })
//     .then(dados => console.log(dados))
//     .catch(err => console.log(err))


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