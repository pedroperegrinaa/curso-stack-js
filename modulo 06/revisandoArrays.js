const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otavio'
}

const chave = 'nome'

console.log(pessoa.nome);
console.log(pessoa['sobrenome']);
console.log(pessoa[chave]);

const pessoa1 = new Object();

pessoa1.nome = 'Luiz'
pessoa1.sobrenome = 'Otavio'
pessoa1.idade = 30
pessoa1.falarNome = function() {
    return console.log('falar nome')
}
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}


console.log(pessoa1.nome)

// delete pessoa1.nome;
console.log(pessoa1)
console.log(pessoa1.falarNome())
console.log(pessoa1.getDataNascimento())

console.log('---------------------------------------')

for (let key in pessoa1) {
    console.log(pessoa1[key])
}

// ---------- Factory Function ---------------- //

function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const p1 = criaPessoa('Luis', 'Otavio')

console.log(p1.nomeCompleto)

// ----------- Constructor Function ---------------//

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    // Object.freeze(this) // isso TRAVA o objeto. Não vai dar pra sequer deletar 
}

const p2 = new Pessoa('Luis', 'Miranda');