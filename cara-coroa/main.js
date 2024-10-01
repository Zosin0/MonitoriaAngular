// Declarações
var jogadas = ["Tesoura", "Pedra", "Papel", "Tesoura", "Pedra"];
var vitoria = 0;
var derrota = 0;
var empate = 0;
var resulJogo = document.getElementById("resultado");
var statusElement = document.getElementById("status");
var pedraButton = document.getElementById("pedra");
var papelButton = document.getElementById("papel");
var tesouraButton = document.getElementById("tesoura");
var maoJogador = document.getElementById("mao-jogador");
var maoComputador = document.getElementById("mao-computador");
var telaJogador = document.getElementById("tela-jogador");
var telaComputador = document.getElementById("tela-computador");
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
function shake(escolha) {
    maoJogador.classList.add("shake");
    maoComputador.classList.add("shake");
    setTimeout(function () {
        jogar(escolha);
        maoJogador.classList.remove("shake");
        maoComputador.classList.remove("shake");
    }, 1000);
}
function jogar(escolha) {
    var compMove = Math.floor(Math.random() * 3 + 1); // 1, 2, 3
    telaComputador.classList.remove("tela-computador-vitoria");
    telaJogador.classList.remove("tela-jogador-vitoria");
    maoJogador.classList.remove("mao-pedra-jogador");
    maoJogador.classList.remove("mao-papel-jogador");
    maoJogador.classList.remove("mao-tesoura-jogador");
    maoComputador.classList.remove("mao-pedra-computador");
    maoComputador.classList.remove("mao-papel-computador");
    maoComputador.classList.remove("mao-tesoura-computador");
    maoJogador.classList.add("mao-".concat(jogadas[escolha].toLowerCase(), "-jogador"));
    maoComputador.classList.add("mao-".concat(jogadas[compMove].toLowerCase(), "-computador"));
    if (jogadas[escolha + 1] === jogadas[compMove]) {
        derrota++;
        telaComputador.classList.add("tela-computador-vitoria");
    }
    else if (jogadas[escolha - 1] === jogadas[compMove]) {
        vitoria++;
        telaJogador.classList.add("tela-jogador-vitoria");
    }
    else {
        empate++;
    }
    var resultado = "".concat(jogadas[escolha], " X ").concat(jogadas[compMove]);
    resulJogo.textContent = resultado;
    var status = "Vit\u00F3rias = ".concat(vitoria, " Derrotas = ").concat(derrota, " Empates = ").concat(empate);
    statusElement.textContent = status;
}
