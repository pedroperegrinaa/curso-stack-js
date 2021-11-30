//Declaração de função (Function Hoisting)

function falaOi() {
    console.log('Oi')
}

falaOi()

//First-class objects (Objetos de primeira classe)

const souUmDado = function() {
    console.log('sou um dado')
}
souUmDado()

//Arrow Function
const funcaoArrow = () => { console.log("Arrow Function") }
funcaoArrow()

//Dentro de um objeto

const obj = {
    falar() {
        console.log("função no objeto")
    }
}

obj.falar()

//Argumentos que sustentam todos os argumentos enviados

function funcao() {
    let total = 0;
    for (const argumento in arguments) {
        total += argumento;
    }
    // console.log(arguments)
    console.log(total)
}
funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

function funcao2(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f)
}
funcao2(1, 2, 3)

function funcao3(a = 0, b = 2, c = 4) {
    console.log(a + b + c)
}

funcao3(2, 10);

function funcao4({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade)
}

let obj2 = { nome: 'luis', sobrenome: 'otavio', idade: 20 }
funcao4(obj2)

function conta(operador, acumulador, ...numeros) {
    console.log(operador, acumulador, ...numeros)

    for (const numero of numeros) {
        if (operador === '+') acumulador += numero;
    }
    console.log(acumulador)
}

conta('+', 0, 20, 30, 40, 50);

function criaMult(mult) {
    return function(n) {
        return n * mult;
    }
}

const d = criaMult(2)
const t = criaMult(3)
const q = criaMult(4)

console.log(d(2));
console.log(t(2));
console.log(q(2));

//IIFE

(function() { console.log('FOI') })()

// Factory function (Função fábrica)
// Constructor function (Função construtora)
function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,

        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala(assunto = 'falando sobre NADA') {
            return `${this.nome} está ${assunto}.`;
        },

        altura: a,
        peso: p,

        // Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
const p2 = criaPessoa('João', 'Otávio', 1.90, 57);
const p3 = criaPessoa('Junior', 'Otávio', 1.5, 110);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);


//Função geradora

// function* geradora() {
//     yield 'valor 1';
//     yield 'valor 2';
//     yield 'valor 3';

// }

// const g = geradora()

// console.log(g.next())
// console.log(g.next())
// console.log(g.next())

// function geradora2() {
//     let i = 0;
//     while (true) {
//         yield i;
//         i++;
//     }
// }

// const g2 = geradora2()

// console.log(g2.next().value)