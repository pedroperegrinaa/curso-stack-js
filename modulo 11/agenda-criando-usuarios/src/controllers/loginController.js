const Login = require('../models/LoginModel')

exports.index = (req, res) => {
    res.render('login')
}

exports.register = async(req, res) => {

    try {
        const login = new Login(req.body);
        await login.register();

        if (login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(function() {
                return res.redirect('/login/index');
            });
            return;
        }

        req.flash('success', 'Seu usuario foi criado com sucesso.');
        req.session.save(function() {
            return res.redirect('/login/index');
        });
        return;
    } catch (err) {
        res.render('404')
    }


    res.send(login.user);
}