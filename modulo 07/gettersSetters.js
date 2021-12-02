const _velocidade = Symbol('velocidade')




class Carro {
    constructor(nome, velocidade) {
        this.nome = nome;
        this[_velocidade] = 0;
    }


    set velocidade(valor) {
        console.log('SETTER')
        if (typeof valor !== 'number') return;
        if (valor >= 100 || valor <= 0) return;
        console.log(this[_velocidade]);
        return this[_velocidade] = valor;

    }

    get velocidade() {
        console.log('GETTER')
        return this[_velocidade];

    }

    // acelerar() {
    //     if (this[_velocidade] >= 100) return;

    //     this[_velocidade]++;
    // }

    // frear() {
    //     if (this[_velocidade] <= 0) return;

    //     this[_velocidade]--;
    // }

}

const c1 = new Carro('Fusca');

c1.velocidade = 3;

console.log(c1.velocidade);
console.log(c1);

// for (let i = 0; i < 110; i++) {
//     // c1.acelerar()
//     console.log(c1)

// }

/* --------------------------------------------- */

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    set nomeCompleto(valor) {
        console.log('SETTER');
        valor = valor.split(' ');
        console.log(valor);
        this.nome = valor.shift();
        console.log(this.nome);
        this.sobrenome = valor.join(' ');
        console.log(this.sobrenome)
    }

    get nomeCompleto() {
        console.log('GETTER');
        return this.nome + ' ' + this.sobrenome;
    }

}

const p1 = new Pessoa('ricardo', 'roberto')
p1.nomeCompleto = 'Hello World aaaa'
console.log(p1.nomeCompleto)