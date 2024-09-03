

let result:string;

function calculateMov(): string{
    const possibilities = ["Cara", "Coroa"];
    const randomBin = Math.random()

    let computerChoice:string;
    randomBin > 0.5 ? computerChoice = possibilities[0] : computerChoice = possibilities[1];
    
    return computerChoice
}

function play(guess:string): number{
    let cc:string = calculateMov()
    console.log(cc);
    
    if (guess == cc) return 1;
    
    return 0;
}

let jogo:number = play(
    window.prompt(
        "Cara ou Coroa?\nAdvinhe o resultado" ,
        "Cara ou Coroa"
    ) as string
);


jogo == 1 ? window.alert("Você ganhou parabéns!") : window.alert("O computador ganhou!");





