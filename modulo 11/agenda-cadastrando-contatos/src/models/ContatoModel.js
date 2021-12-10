const mongoose = require('mongoose');
const validator = require('validator');

const ContatoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    sobrenome: { type: String, required: false, default: '' },
    email: { type: String, required: false, default: '' },
    telefone: { type: String, required: false, default: '' },
    criadoEm: { type: Date, default: Date.now }
})

const ContatoModel = mongoose.model('Contato', ContatoSchema)

// module.exports = HomeModel

/*
function Contato(body) {
    this.body = body;
    this.errors = [];
    this.contato = null;
}

Contato.prototype.register = async function() {
    console.log('entrou no register');
    console.log("register: ");
    console.log(this.body);
    this.valida();

    if (this.errors.length > 0) return;

    this.contato = await ContatoModel.create(this.body);
}

Contato.prototype.valida = async() => {
    console.log('VALIDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
    console.log('CLEAN UPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP')
    console.log(this.body);
    for (const key in this.body) {
        if (typeof this.body[key] !== 'string') {
            this.body[key] = '';
        }
    }

    console.log(this.body);

    this.body = {
        nome: this.body.nome,
        sobrenome: this.body.sobrenome,
        email: this.body.email,
        telefone: this.body.telefone
    }
    console.log('ta no valida')
        // O email precisa ser valido
        // A senha precisa ter entre 3 e 50 caracteres
    if (this.body.email && !validator.isEmail(this.body.email)) this.errors.push('Email invalido');
    if (!this.body.nome) this.errors.push('Nome é um campo obrigatorio.');
    if (!this.body.email && !this.body.telefone) {
        this.errors.push('Pelo meno um contato precisa ser enviado: e-mail ou telefone');
    }
}

Contato.prototype.cleanUp = () => {
    console.log('CLEAN UPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP')
    for (const key in this.body) {
        if (typeof this.body[key] !== 'string') {
            this.body[key] = '';
        }
    }

    this.body = {
        nome: this.body.nome,
        sobrenome: this.body.sobrenome,
        email: this.body.email,
        telefone: this.body.telefone
    }

    // return this.body;
}
*/

class Contato {

    constructor(body) {
        this.body = body;
        this.errors = [];
        this.contato = null;
    }

    async register() {
        console.log('entrou no register');
        console.log("register: ");
        console.log(this.body);
        this.valida();

        if (this.errors.length > 0) return;
        this.contato = await ContatoModel.create(this.body);
    }

    valida() {
        if (this.body.email && !validator.isEmail(this.body.email)) this.errors.push('Email invalido');
        if (!this.body.nome) this.errors.push('Nome é um campo obrigatorio.');
        if (!this.body.email && !this.body.telefone) {
            this.errors.push('Pelo meno um contato precisa ser enviado: e-mail ou telefone');
        }
    }

    cleanUp() {
        for (const key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }
        this.body = {
            nome: this.body.nome,
            sobrenome: this.body.sobrenome,
            email: this.body.email,
            telefone: this.body.telefone
        }
    }

    async buscaPorId(id) {
        if (typeof id !== 'string') return;
        const user = await ContatoModel.findById(id)

        return user;
    }


}


module.exports = Contato;