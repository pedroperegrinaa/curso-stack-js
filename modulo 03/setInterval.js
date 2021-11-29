const timer = setInterval(() => {
    let data = new Date();
    return console.log(data.toLocaleTimeString("pt-BR", {}))
}, 1000);

// console.log(typeof timer)

setTimeout(() => {
    clearInterval(timer)
}, 10000);