var result;
function calculateMov() {
    var possibilities = ["Cara", "Coroa"];
    var randomBin = Math.random();
    var computerChoice;
    randomBin > 0.5 ? computerChoice = possibilities[0] : computerChoice = possibilities[1];
    return computerChoice;
}
function play(guess) {
    var cc = calculateMov();
    console.log(cc);
    if (guess == cc)
        return 1;
    return 0;
}
var jogo = play(window.prompt("Cara ou Coroa?\nAdvinhe o resultado", "Cara ou Coroa"));
jogo == 1 ? window.alert("Você ganhou parabéns!") : window.alert("O computador ganhou!");
