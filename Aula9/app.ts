const form = document.getElementById("form1") as HTMLFormElement;

form.addEventListener('submit', ()=> {
    const data = new FormData(form)
    
    for (let [c, v] of data.entries()){
        alert(`${c} ${v}`)

    }
})


// const nome: string | null = window.prompt("Qual o seu nome? ");
// const idade: string | null = window.prompt("Qual a sua idade? ");

// const element1: HTMLElement = document.getElementById('paragrafo') as HTMLElement || null
// const element2: HTMLElement = document.getElementById('paragrafo2') as HTMLElement || null

// element1.textContent = "Nome: " + nome;
// element2.textContent = "Idade: " + idade;