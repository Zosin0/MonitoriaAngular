
const jogadas = ["Tesoura", "Pedra", "Papel", "Tesoura", "Pedra"]

let vitoria:number = 0
let derrota:number = 0
let empate:number = 0

const resultado_jogo = document.getElementById("resultado") as HTMLElement;
const statusElement = document.getElementById("status") as HTMLElement;

const botao_pedra = document.getElementById("pedra") as HTMLElement;
const botao_tesoura = document.getElementById("tesoura") as HTMLElement;
const botao_papel = document.getElementById("papel") as HTMLElement;


botao_pedra.addEventListener("click", () => {
    jogar(1)
    
})
botao_papel.addEventListener("click", () => {
    jogar(2)
})

botao_tesoura.addEventListener("click", () => {
    jogar(3)
})

function jogar(escolha){
    
    const compMove = Math.floor((Math.random()*3) + 1);


    if (jogadas[escolha+1] == jogadas[compMove]) derrota++

    else if(jogadas[escolha-1] == jogadas[compMove]) vitoria++
    
    else empate++

    const resultado = `Seu movimento = ${jogadas[escolha]} // Movimento do Computador = ${jogadas[compMove]}`;
    resultado_jogo.textContent = resultado

    const status = `Vitorias = ${vitoria} Derrotas = ${derrota} Empates = ${empate}`
    statusElement.textContent = status
    
}