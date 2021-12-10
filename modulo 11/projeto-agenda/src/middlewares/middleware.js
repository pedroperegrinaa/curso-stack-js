module.exports.middlewareGlobal = (req, res, next) => {

    if (req.body.cliente) {
        console.log();
        console.log('passei no middleware global');
        console.log();

        req.body.cliente = req.body.cliente.replace('Miranda', 'NAO USE MIRANDA')
        console.log(`Voce postou ${req.body.cliente}`)
    }

    res.locals.umaVariavelLocal = 'Este é o valor da variavel local'
    next(); // NAO ESQUECE DO NEXT
}

module.exports.checkCsrfError = (err, req, res, next) => {
    console.log('ESSE É O ERRO: ' + err)
    console.log('ESSE É O ERRO: ' + err.code)

    if (err && 'EBADCSRFTOKEN' === err.code) {
        return res.render('404');
    }

}

module.exports.csrfMiddleware = (req, res, next) => {
    console.log("aqui o token: " + req.csrfToken);
    res.locals.csrfToken = req.csrfToken();
    console.log('RES LOCALS CSRF TOKEN ' + res.locals.csrfToken)
    next();
}