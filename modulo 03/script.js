const paragrafos = document.querySelector('.paragrafos')
const ps = document.querySelectorAll('p')

const estilosBody = getComputedStyle(document.body);

let pegaCor;

console.log(estilosBody)

// console.log(ps)
// console.log(paragrafos)

for (let c in estilosBody) {
    if (c == 'backgroundColor') {
        console.log(c, estilosBody[c])
        pegaCor = estilosBody[c];

    }
}

// pegaCor = estilosBody.backgroundColor
console.log(pegaCor)

for (let p of ps) {
    p.style.backgroundColor = pegaCor
    p.style.color = '#FFFFFF'
}