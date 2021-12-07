/*
// const mod1 = require('./mod1')
// const falaNome = require('./mod1').falaNome;
const { nome, sobrenome, falaNome } = require('./mod1')

console.log(nome + ' ' + sobrenome)
console.log(falaNome('pedro', 'peregrina'))
*/
const path = require('path')
const axios = require('axios')
const { Pessoa } = require('./mod1')

const p1 = new Pessoa('luis')


// console.log(path)
// console.log(p1)

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
    .then(json => console.log(json))
    .catch(e => console.log(e))