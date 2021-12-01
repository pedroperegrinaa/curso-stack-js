const objA = {
    chave: 'A'
        //_proto_: Object.prototype
};
const objB = {
    // chave: 'B'
    //_proto_: ObjA
};

Object.setPrototypeOf(objB, objA);

console.log(objB.chave)

console.log(Object.getPrototypeOf(objB))

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100))
}

caneca = new Produto('caneca', 50);

console.log(caneca)
caneca.desconto(100)
console.log(caneca)

const arroz = {
    nome: 'arroz',
    preco: 15
}

Object.setPrototypeOf(arroz, Produto.prototype)

console.log(arroz);
arroz.desconto(50);
console.log(arroz);

const feijao = Object.create(Produto.prototype)
feijao.preco = 7;
feijao.desconto(20);
console.log(feijao);

const acucar = Object.create(Produto.prototype, {
    tamanho: {
        writable: true,
        enumerable: true,
        value: 2
    }
})
acucar.preco = 4;
acucar.desconto(20);
console.log(acucar)