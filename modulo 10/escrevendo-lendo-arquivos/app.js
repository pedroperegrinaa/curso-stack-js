const path = require('path')
const caminho = path.resolve(__dirname, 'teste.json')

const escrever = require('./modules/escrever')
const ler = require('./modules/ler')

const pessoas = [
    { nome: 'aa' },
    { nome: 'Fulano' },

]

const dados = JSON.stringify(pessoas, '', 2);

escrever(caminho, dados);

async function lendo(caminho) {
    const res = await ler(caminho);
    renderizaDados(res);
}

function renderizaDados(dados) {
    dados = JSON.parse(dados)

    for (const pessoa of dados) {
        console.log(pessoa)
    }

}

lendo(caminho)