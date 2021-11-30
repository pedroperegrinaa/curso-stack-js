//Usado pra reduzir o array em um elemento só
//Pode ser usado como map ou Filter, mas não é indicado

const numeros = [5, 50, 80, 1, 2, 3, 5, 7, 11, 15, 22, 27]

const total = numeros.reduce(function(acumulador, valor, indice, array) {

    if (valor % 2 == 0) acumulador.push(valor);
    // acumulador += valor
    console.log(acumulador, valor)
    return acumulador

}, []);
console.log(total)

const pessoas = [
    { nome: 'Luis', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 100 },
    { nome: 'Wallace', idade: 47 },
]

console.log('--------------------')

const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
})

console.log(maisVelha)