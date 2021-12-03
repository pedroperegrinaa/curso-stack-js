// fetch('pessoas.json')
//     .then(res => res.json())
//     .then(json => carregaElementosPagina(json))


axios('pessoas.json')
    .then(res => carregaElementosPagina(res.data))


function carregaElementosPagina(json) {

    const table = document.createElement('table');

    for (const pessoa of json) {
        const tr = document.createElement('tr')

        let td = document.createElement('td')
        td.innerHTML = pessoa.nome;
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = pessoa.idade;
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = pessoa.salario;
        tr.appendChild(td)

        // console.log(pessoa.nome)


        table.appendChild(tr)
    }

    const res = document.querySelector('.resultado')
    console.log(res)
    res.appendChild(table)

}


/*
document.addEventListener('click', e => {

    console.log(e)
    const el = e.target;
    console.log(el);
    const tag = el.tagName.toLowerCase();
    console.log(tag);

    if (tag == 'a') {
        e.preventDefault();
        carregarPagina(el);
    }
})

async function carregarPagina(el) {
    const href = el.getAttribute('href')
    console.log(href)

    try {
        const res = await fetch(href);
        if (res.status !== 200) throw new Error('ERRO 404 KK');
        const html = await res.text();
        carregaResultado(html)
    } catch (err) {
        console.warn(err);
        deuRuim();
    }
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response;
}

function deuRuim() {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = 'pagina nao encontrada'
}

*/