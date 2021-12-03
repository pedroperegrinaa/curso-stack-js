function rand(min, max) {

    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + min);
}

function comPromises(msg, tempo) {
    return new Promise((resolve, reject) => {

        if (typeof msg !== 'string') {
            reject('BAD VALUE');
            return;
        }

        setTimeout(() => {
            console.log(msg)
            resolve(msg + ' resolve aq');
        }, tempo);
    });
}

/*

comPromises('uai', rand(1, 2))
    .then(res => {
        console.log('entrou na segunda promise')
        return comPromises('segunda promise', rand(1, 2))
    })
    .then(res => {

        console.log('entrou na terceira promise')
        return comPromises('terceira promise', rand(1, 2))

    })
    .then(res => {

        console.log('entrou na quarta promise')
        return comPromises(111111111111, rand(1, 2))

    })
    .catch(erro => console.log(erro))

    */

// Promise. all | Promise. race | Promise.resolve | Promise.reject

const promises = [

    // 'Primeiro valor',
    comPromises('Promise 1', 2000),
    comPromises('Promise 2', 500),
    comPromises('Promise 3', 1000),
    // comPromises(11111111111, 1000),
    // 'outro valor'

]

/*

Promise.all(promises).then(
    function(valor) {
        console.log(valor)
    }
).catch(err => console.log(err))


Promise.race(promises)
    .then(
        function(valor) {
            console.log("RACE " + valor)
        }
    ).catch(err => console.log(err))

*/

function baixaPagina() {
    emCache = false;
    console.log(emCache)

    if (emCache) {
        return Promise.resolve('Pagina em cache');
        // return Promise.reject('Pagina NAO ESTA cache');
    } else {
        return comPromises('Baixei a pagina', 500)
    }

}

baixaPagina()
    .then(res => console.log(res))