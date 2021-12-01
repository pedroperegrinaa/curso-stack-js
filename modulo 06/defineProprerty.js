// travar apenas algumas coisas do objeto. Não tudo

function Produto(nome, preco, estoque) {


    Object.defineProperty(this, 'estoque', {
            enumerable: true, // mostra a chave
            value: estoque, // valor
            writable: false, // pode alterar valor
            configurable: false // pode configurar a chave (usando outro defineProperty, por exemplo)
        },

        Object.defineProperties(this, {
            nome: {
                enumerable: true, // mostra a chave
                value: nome, // valor
                writable: false, // pode alterar valor
                configurable: false // pode configurar a chave (usando outro defineProperty, por exemplo)
            }
        }),
        Object.defineProperties(this, {
            preco: {
                enumerable: true, // mostra a chave
                value: preco, // valor
                writable: false, // pode alterar valor
                configurable: false // pode configurar a chave (usando outro defineProperty, por exemplo)
            }
        }),

    )
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1)