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