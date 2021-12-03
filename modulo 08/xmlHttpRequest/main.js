const request = obj => {
    console.log(obj)

    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();

        xhr.open(obj.method, obj.url, true);
        console.log(xhr)
        xhr.send();

        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText);
            }
        });
    })
};

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

    const objConfig = {
        method: 'GET',
        url: href,
    }

    try {
        const response = await request(objConfig);
        carregaResultado(response);
    } catch (err) {
        deuRuim()
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