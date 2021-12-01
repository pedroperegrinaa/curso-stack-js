const falar = {
    falar() {
        console.log(`${this.nome} falando`)
    }
}

const comer = {
    comer() {
        console.log(`${this.nome} comendo`)
    }
}

const beber = {
    beber() {
        console.log(`${this.nome} bebendo`)
    }
}


function criaPessoa(nome, sobrenome) {

    const pessoaPrototype = {...falar, ...comer, ...beber }

    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    });
}

const p1 = criaPessoa('Luis', 'Otavio')
console.log(p1.falar())