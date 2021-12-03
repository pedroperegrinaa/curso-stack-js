function rand(min = 0, max = 1) {

    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + min);
}

function comPromises(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('BAD VALUE');
                return;
            }

            console.log(msg)
            resolve(msg + ' resolve aq');
        }, tempo);
    });
}

/*

comPromises('Fase 1', rand())
    .then(res => {
        console.log(res + ' res');
        return comPromises('Fase 2', rand())
    })
    .then(res => {
        console.log(res + ' res');
        return comPromises('Fase 3', rand())
    })
    .catch(err => console.log(err))

*/


// PENDENTE - RESLVIDA - REJEITADA

async function executa() {

    try {

        const fase1 = await comPromises('Fase 1', rand())
        console.log(fase1)
        const fase2 = await comPromises('Fase 2', rand())
        console.log(fase2)
        const fase3 = await comPromises('Fase 3', rand())
        console.log(fase3)

    } catch (err) {
        console.log(err)
    }

    // console.log('terminamos na ' + fase3)
}

executa()