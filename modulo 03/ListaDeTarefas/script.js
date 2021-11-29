const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaBotaoApagar(li) {
    // li.innerText = ' dw '
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'Apagar'
    li.appendChild(botaoApagar)

    botaoApagar.setAttribute('class', 'apagar')
    botaoApagar.setAttribute('title', 'Apagar esta tarefa')
    li.appendChild(botaoApagar)


}


function criaLi() {
    const li = document.createElement('li')
    return li
}

function criaTarefa(textoInput) {
    console.log(textoInput)
    const li = criaLi();
    li.innerText = textoInput
    tarefas.appendChild(li)

    inputTarefa.value = '';
    inputTarefa.focus();
    criaBotaoApagar(li)
    salvarTarefas()

}

btnTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) return;

    criaTarefa(inputTarefa.value);
})

inputTarefa.addEventListener('keypress', function(e) {
    if (e.keyCode == 13) {
        console.log("ENTER")

        criaTarefa(inputTarefa.value);
    }

    // console.log(e.keyCode)
})

document.addEventListener('click', function(e) {
    const el = e.target;

    if (el.classList.contains('apagar')) {
        el.parentElement.remove();

        console.log(el)

        salvarTarefas()

    }

    // console.log(el)
})

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li')
    const listaDeTarefas = [];

    for (tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim()
        listaDeTarefas.push(tarefaTexto)
    }

    let tarefaJSON = JSON.stringify(listaDeTarefas)
    console.log(tarefaJSON)
    localStorage.setItem('tarefas', tarefaJSON)
    console.log(localStorage.getItem('tarefas', 2))


    console.log(listaDeTarefas)
}