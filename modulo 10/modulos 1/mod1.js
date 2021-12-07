/*
const nome = 'Luiz'
const sobrenome = 'Otavio'

const falaNome = function(nome, sobrenome) {
    return nome + ' ' + sobrenome
}

module.exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.qualquerCoisa = "O que eu quiser exportar" // O this. aponta para module.exports aqui no node.js

// console.log(module.exports)


class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}
exports.Pessoa = Pessoa;
*/

module.exports = function(x, y) {

    return x * y

}