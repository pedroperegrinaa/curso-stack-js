function rand(min, max) {

    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + min);
}

function comGambiarra(msg, tempo, cb) {

    setTimeout(() => {
        console.log(msg)
        if (cb) cb();
    }, tempo);

}

/*
comGambiarra('Frase 1', rand(1, 3), function() {
    comGambiarra('Frase 2', rand(1, 3), function() {
        comGambiarra('Frase 3', rand(1, 3))
    })
})

/* ************************************************* */

function comPromises(msg, tempo) {
    return new Promise((resolve, reject) => {

        if (typeof msg !== 'string') reject('BAD VALUE');

        setTimeout(() => {
            console.log(msg)
            resolve(msg);
        }, tempo);
    });
}

/*

comPromises('Conexão com BD', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return comPromises('Buscando dados BASE', rand(1, 3))
    })
    .then(console.log('tratando dados da base'))
    .then(console.log('ultimo a ser exibido'))

*/

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