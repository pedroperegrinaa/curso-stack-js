/*
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

*/

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


    // fetch(href)
    //     .then(res => {

    //         if (res.status !== 200) throw new Error('ERRO 404 KK');
    //         return res.text();

    //     }).then(
    //         html => {
    //             console.log(html);
    //             carregaResultado(html);
    //         }
    //     )
    //     .catch(e => console.warn(e));

}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response;
}

function deuRuim() {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = 'pagina nao encontrada'
}