interface Tarefa {
    id: number;
    texto: string;
    completa: boolean;
}

let tarefas: Tarefa[] = [];
let idTarefa = 0;

const inputTarefa = document.getElementById("nova-tarefa") as HTMLInputElement;
const listaTarefas = document.getElementById("lista-tarefas") as HTMLUListElement;
const botaoAdicionarTarefa = document.getElementById("botao-adicionar-tarefa") as HTMLButtonElement;

botaoAdicionarTarefa.addEventListener("click", () => {
    const textoTarefa = inputTarefa.value.trim();
    if (textoTarefa) {
        adicionarTarefa(textoTarefa);
        inputTarefa.value = "";
    }
});

function adicionarTarefa(texto: string) {
    const novaTarefa: Tarefa = {
        id: idTarefa++,
        texto,
        completa: false
    };
    tarefas.push(novaTarefa);
    renderizarTarefas();
}

function removerTarefa(id: number) {
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    renderizarTarefas();
}

function alternarTarefaCompleta(id: number) {
    const tarefa = tarefas.find(tarefa => tarefa.id === id);
    if (tarefa) {
        tarefa.completa = !tarefa.completa;
        renderizarTarefas();
    }
}

function renderizarTarefas() {
    listaTarefas.innerHTML = "";
    tarefas.forEach(tarefa => {
        const itemTarefa = document.createElement("li");
        itemTarefa.textContent = tarefa.texto;
        itemTarefa.classList.toggle("completa", tarefa.completa);

        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        botaoRemover.addEventListener("click", () => removerTarefa(tarefa.id));

        itemTarefa.addEventListener("click", () => alternarTarefaCompleta(tarefa.id));

        itemTarefa.appendChild(botaoRemover);
        listaTarefas.appendChild(itemTarefa);
    });
}
