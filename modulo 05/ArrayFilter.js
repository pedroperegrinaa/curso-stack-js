//Filter, Map, Reduce

// FILTER -> sempre retorna um array ocm a mesma quantidade 
// de elementos ou menos

const numeros = [5, 50, 80, 1, 2, 3, 5, 7, 11, 15, 22, 27]

function callbackFilter(valor, indice, array) {
    return valor > 10;
}
const numerosFilter = numeros.filter(valor => valor > 10)
console.log('Filter: ', numerosFilter)

const pessoas = [
    { nome: 'Luis', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
]

const qtdLetrasFilter = pessoas.filter(valor => valor.nome.length >= 5)
console.log('Filter letras: ',
    qtdLetrasFilter)