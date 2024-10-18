var tarefas = [];
var idTarefa = 0;
var inputTarefa = document.getElementById("nova-tarefa");
var listaTarefas = document.getElementById("lista-tarefas");
var botaoAdicionarTarefa = document.getElementById("botao-adicionar-tarefa");
botaoAdicionarTarefa.addEventListener("click", function () {
    var textoTarefa = inputTarefa.value.trim();
    if (textoTarefa) {
        adicionarTarefa(textoTarefa);
        inputTarefa.value = "";
    }
});
function adicionarTarefa(texto) {
    var novaTarefa = {
        id: idTarefa++,
        texto: texto,
        completa: false
    };
    tarefas.push(novaTarefa);
    renderizarTarefas();
}
function removerTarefa(id) {
    tarefas = tarefas.filter(function (tarefa) { return tarefa.id !== id; });
    renderizarTarefas();
}
function alternarTarefaCompleta(id) {
    var tarefa = tarefas.find(function (tarefa) { return tarefa.id === id; });
    if (tarefa) {
        tarefa.completa = !tarefa.completa;
        renderizarTarefas();
    }
}
function renderizarTarefas() {
    listaTarefas.innerHTML = "";
    tarefas.forEach(function (tarefa) {
        var itemTarefa = document.createElement("li");
        itemTarefa.textContent = tarefa.texto;
        itemTarefa.classList.toggle("completa", tarefa.completa);
        var botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        botaoRemover.addEventListener("click", function () { return removerTarefa(tarefa.id); });
        itemTarefa.addEventListener("click", function () { return alternarTarefaCompleta(tarefa.id); });
        itemTarefa.appendChild(botaoRemover);
        listaTarefas.appendChild(itemTarefa);
    });
}
