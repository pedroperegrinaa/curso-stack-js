// Produto = aumento, desconto
// Camiseta = cor, caneca = material

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;

}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100))
}
Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
}

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco)
    this.cor = cor
}

Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta;

const camiseta = new Camiseta('regata', 70, 'preta')
camiseta.desconto(20)

console.log(camiseta)


// const camiseta = Object.create(Produto.prototype, {
//     cor: {
//         value: 'vermelha'
//     }
// })

// console.log(camiseta.cor)

// const caneca = Object.create(Produto.prototype, {
//     material: {
//         value: 'ceramica'
//     }
// })

// console.log(caneca.material)