// Exercício Contagem
// function contagem (num : number) : number {
//     if (num == 0){
//         return 0;
//     } 

//     console.log(num);    
//     return contagem(num-1);
// }
// const num = 5;
// let result =  contagem(num);
// console.log(result)

// Exercício Feijoada
/*
Cozinhar Feijão: Primeiro, cozinhamos o feijão. 
Quando a função cozinhar_feijao termina, ela chama um callback.

Adicionar Arroz: Depois de cozinhar o feijão, 
o arroz é adicionado ao prato.

Adicionar Laranja: A laranja é adicionada.

Montar Prato: A função montar_prato realiza a sequência dos passos, 
organizando os ingredientes em ordem
*/

type Cozinhar = (ingrediente: string, callback: () => void) => void;

function cozinhar_feijao(ingrediente: string, callback: () => void) : void {
    console.log(`Cozinhando ${ingrediente} em:`);
    for (let i = 5; i > 0; i--) {
        console.log(i);
    }
    console.log(`...\nStatus do(a) ${ingrediente}: cozido`);
    callback();
}

function botar_arroz(ingrediente: string, callback: () => void) : void {
    console.log(`Botando ${ingrediente} no prato`);
    console.log(`...\n${ingrediente} adicionado(a)!`);
    callback();
}

function botar_laranja(ingrediente: string, callback: () => void) : void {
    console.log(`Botando ${ingrediente} no prato`);
    console.log(`...\n${ingrediente} adicionado(a)!`);
    callback();
}

function montar_prato() : void {
    cozinhar_feijao("Feijão", () => {
        botar_arroz("Arroz", () => {
            botar_laranja("Laranja", () => {
                console.log("A feijoada com: Feijão, Arroz, Laranja está pronta!");
            });
        });
    });
}

montar_prato();
