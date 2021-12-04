const nome = 'Luiz';
const sobrenome = 'Miranda';
const idade = 30;

export default function soma(x, y) {
    return x + y;
}

export { nome, sobrenome, idade, soma }

export const nome3 = 'Felipe'

export class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}