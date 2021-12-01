const produto = { nome: 'Produto', preco: 1.8 }
var caneca = {...produto };
var caneca = { nome: produto.nome, preco: produto.preco };
var caneca = Object.assign({}, produto, { material: 'porcelana' });


caneca.nome = 'Caneca'

console.log(Object.getOwnPropertyDescriptor(caneca, 'nome'))
console.log(Object.keys(caneca))
console.log(Object.values(caneca))
console.log(Object.entries(caneca))

for (const [chave, valor] of Object.entries(caneca)) {
    console.log(chave, valor)
}


caneca.preco = 2.9
console.log(produto)
console.log(caneca)