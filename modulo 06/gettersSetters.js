// travar apenas algumas coisas do objeto. Não tudo

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;


    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
            enumerable: true, // mostra a chave
            configurable: false, // pode configurar a chave (usando outro defineProperty, por exemplo)
            get: function() {
                return estoque;
            },
            set: function(valor) {
                if (typeof valor !== 'number') {
                    console.log('bad value')
                    return;
                }
                estoquePrivado = valor;
            }
        },

    )
}

function criaProduto(nome) {
    return {
        get nome() {
            return nome
        },
        set nome(valor) {
            nome = (`${valor} OIA`);
        }
    }
}

const p2 = criaProduto('Camiseta');
p2.nome = 'aaaaaaaaaaaaaa'
console.log(p2.nome);






const p1 = new Produto('Camiseta', 20, 3);
// console.log(p1)
p1.estoque = 100
console.log(p1.estoque)