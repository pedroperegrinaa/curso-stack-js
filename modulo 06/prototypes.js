function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.estouAqui = 'aaa'
Pessoa.prototype.nomeCompleto = () =>
    this.nome + ' ' + this.sobrenome;

const pessoa1 = new Pessoa('Pedro', 'Peregrina');


console.log(pessoa1.pessoa1)
console.log(pessoa1.nomeCompleto())

let JSON = {
    nome: 'Jubiscleberson',
    sobrenome: 'Silva',
    idade: 34,
}

console.log(JSON)