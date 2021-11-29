// try {
//     console.log(naoexisto)
// } catch (err) {
//     console.log("erro: ", err)
// }

// console.log(naoexisto)

function soma(a, b) {

    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('tem q ser numero corno')
    }

    return a + b;
}

// try {
//     console.log(soma(14, 5))
//     console.log(soma('14', '5'))
// } catch (err) {
//     console.log('alguma coisa amigavel')
// } finally {
//     console.log('cabo')
// }

function retornaHora(data) {
    if (!(data instanceof Date)) {
        console.log("nao é")
    } else {
        console.log(data)
    }
}


retornaHora(new Date())


try {

} catch (err) {

}