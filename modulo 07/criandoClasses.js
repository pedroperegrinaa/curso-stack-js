class Pessoa {

    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando`);
    }

}

const p1 = new Pessoa('Luiz', 'Otavio');
console.log(p1.falar());