// Declarações

const jogadas = ["Tesoura", "Pedra", "Papel", "Tesoura", "Pedra"];

let vitoria: number = 0;
let derrota: number = 0;
let empate: number = 0;

const resulJogo = document.getElementById("resultado") as HTMLElement;
const statusElement = document.getElementById("status") as HTMLElement;

const pedraButton = document.getElementById("pedra") as HTMLElement;
const papelButton = document.getElementById("papel") as HTMLElement;
const tesouraButton = document.getElementById("tesoura") as HTMLElement;
const maoJogador = document.getElementById("mao-jogador") as HTMLElement;
const maoComputador = document.getElementById("mao-computador") as HTMLElement;
const telaJogador = document.getElementById("tela-jogador") as HTMLElement;
const telaComputador = document.getElementById("tela-computador") as HTMLElement;

// Algoritmo

pedraButton.addEventListener("click", function () {
  shake(1);
});
papelButton.addEventListener("click", function () {
  shake(2);
});
tesouraButton.addEventListener("click", function () {
  shake(3);
});

function shake(escolha: number) {
  maoJogador.classList.add("shake");
  maoComputador.classList.add("shake");
  setTimeout(() => {
    jogar(escolha);
    maoJogador.classList.remove("shake");
    maoComputador.classList.remove("shake");
  }, 1000);
}

function jogar(escolha: number) {
  const compMove = Math.floor(Math.random() * 3 + 1); // 1, 2, 3

  telaComputador.classList.remove("tela-computador-vitoria");
  telaJogador.classList.remove("tela-jogador-vitoria");

  maoJogador.classList.remove("mao-pedra-jogador");
  maoJogador.classList.remove("mao-papel-jogador");
  maoJogador.classList.remove("mao-tesoura-jogador");

  maoComputador.classList.remove("mao-pedra-computador");
  maoComputador.classList.remove("mao-papel-computador");
  maoComputador.classList.remove("mao-tesoura-computador");

  maoJogador.classList.add(`mao-${jogadas[escolha].toLowerCase()}-jogador`);
  maoComputador.classList.add(
    `mao-${jogadas[compMove].toLowerCase()}-computador`
  );

  if (jogadas[escolha + 1] === jogadas[compMove]) {
    derrota++;
    telaComputador.classList.add("tela-computador-vitoria");
  } else if (jogadas[escolha - 1] === jogadas[compMove]) {
    vitoria++;
    telaJogador.classList.add("tela-jogador-vitoria");
  } else {
    empate++;
  }

  const resultado = `${jogadas[escolha]} X ${jogadas[compMove]}`;
  resulJogo.textContent = resultado;

  const status = `Vitórias = ${vitoria} Derrotas = ${derrota} Empates = ${empate}`;
  statusElement.textContent = status;
}
