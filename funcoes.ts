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


type Cozinhar = (ingrediente: string) => void;

function cozinhar_feijao(ingrediente: string) : boolean{
    console.log(`Cozinhando ${ingrediente} em:`)
    for (let i = 5; i>0; i++)
        console.log(i)
    
    console.log(`...\nStatus do(a) ${ingrediente}: cozido`)
    return true
}

function botar_farofa(ingrediente: string) : boolean{
    console.log(`Botando ${ingrediente} no prato`)
    console.log(`...\n${ingrediente} adicionado(a)!`)
    return true
}

function botar_laranja(ingrediente: string) : boolean{
    console.log(`Botando ${ingrediente} no prato`)
    console.log(`...\n${ingrediente} adicionado(a)!`)
    return true
}

function montar_prato (callback: Cozinhar) : void{
    let ingredientes:string = "Feijão, Laranja, Farofa"

    let chamada = callback(ingredientes)

    console.log(chamada)

}

montar_prato(cozinhar_feijao)






