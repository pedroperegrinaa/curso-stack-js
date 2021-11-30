// MAP

const numeros = [5, 50, 80, 1, 2, 3, 5, 7, 11, 15, 22, 27]

const numerosEmDobro = numeros.map(function(valor) {
        return valor * 2
    })
    // console.log(numerosEmDobro)

const pessoas = [
    { nome: 'Luis', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
]

let pessoasNomeString = pessoas.map(valor => valor.nome)
console.log(pessoasNomeString)

let idades = pessoas.map(obj => ({ idade: obj.idade }))
console.log(idades)

let ids = pessoas.map((obj, indice) => {

    const newObj = {...obj }
    newObj.id = indice + 1
    return newObj;

})
console.log(ids)

console.log(pessoas)