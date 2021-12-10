const Contato = require('../models/ContatoModel')

exports.index = (req, res) => {
    res.render('contato', {
        contato: {}
    })
}

exports.register = async(req, res) => {

    try {
        const contato = new Contato(req.body);
        console.log(contato.body)
        await contato.register();

        if (contato.errors.length > 0) {
            req.flash('errors', contato.errors);
            req.session.save(() => res.redirect('back'));
            return;
        }


        req.flash('success', 'Olha q legal, seu contato foi registrato com sucesso');
        req.session.save(() => res.redirect(`/contato/index/${contato.contato._id}`));
        return;
        // res.send('oioi')
    } catch (err) {
        console.log(err);
        res.render('404');
    }

}

exports.editIndex = async(req, res) => {
    const ctt = new Contato();
    console.log(req.params.id);

    if (!req.params.id) return res.render('404');
    console.log('passou do req param');
    const contato = await ctt.buscaPorId(req.params.id);
    console.log(contato.id)

    if (!contato) return res.render('404');
    console.log('passou do contato');

    res.render('contato', {
        contato
    })

    // res.send(contato);

}