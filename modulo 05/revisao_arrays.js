//Slice, split, join

const nome1 = ['Eduardo', 'Maria', 'Joana', 'Claudin', 'Samara']
const novo1Teste = nome1.slice(1, -2)

console.log(novo1Teste)

const nome2 = 'Luis Otavio Miranda';
const nome2Teste = nome2.split(' ')
console.log(nome2Teste)

const nome3 = ['Luis', 'Otavio', 'Miranda'];
const nome3Teste = nome3.join(' ')
console.log(nome3Teste)

// Splice

const nome4 = ['Eduardo', 'Maria', 'Joana', 'Claudin', 'Samara']

const nome4teste = nome4.splice(3, 1, 'luis')

console.log('teste 4:', nome4, nome4teste)

const nome5 = ['Eduardo', 'Maria', 'Joana', 'Claudin', 'Samara']

// pop() nome4.splice(-1, 1)
// shift()  nome4.splice(0, 1)
// push() nome4.splice(nome4.lenght, 0, 'Adiociona', 'Aqui')