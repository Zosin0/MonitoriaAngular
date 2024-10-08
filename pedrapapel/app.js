var jogadas = ["Tesoura", "Pedra", "Papel", "Tesoura", "Pedra"];
var vitoria = 0;
var derrota = 0;
var empate = 0;
var resultado_jogo = document.getElementById("resultado");
var statusElement = document.getElementById("status");
var botao_pedra = document.getElementById("pedra");
var botao_tesoura = document.getElementById("tesoura");
var botao_papel = document.getElementById("papel");
botao_pedra.addEventListener("click", function () {
    jogar(1);
});
botao_papel.addEventListener("click", function () {
    jogar(2);
});
botao_tesoura.addEventListener("click", function () {
    jogar(3);
});
function jogar(escolha) {
    var compMove = Math.floor((Math.random() * 3) + 1);
    if (jogadas[escolha + 1] == jogadas[compMove])
        derrota++;
    else if (jogadas[escolha - 1] == jogadas[compMove])
        vitoria++;
    else
        empate++;
    var resultado = "Seu movimento = ".concat(jogadas[escolha], " // Movimento do Computador = ").concat(jogadas[compMove]);
    resultado_jogo.textContent = resultado;
    var status = "Vitorias = ".concat(vitoria, " Derrotas = ").concat(derrota, " Empates = ").concat(empate);
    statusElement.textContent = status;
}
