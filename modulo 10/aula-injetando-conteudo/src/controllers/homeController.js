// const HomeModel = require('../models/HomeModel')

// HomeModel.create({
//         titulo: 'Um titulo de testes',
//         descricao: 'Uma descrição de testes'
//     })
//     .then(dados => console.log(dados))
//     .catch(err => console.log(err))


exports.paginaInicial = (req, res) => {

    // req.session.usuario = { "nome": 'luis', "logado": true };
    // console.log(req.session.usuario)

    // req.flash('info', 'Ola Mundo')
    // req.flash('error', 'Deu erro')
    // req.flash('success', 'Tudo certo')

    // console.log(req.flash('info'), req.flash('success'), req.flash('error'));

    res.render('index', { titulo: 'Este sera o <span style="color: red;"> titulo </span> da pagina', numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] });
    console.log('olha a rota');
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