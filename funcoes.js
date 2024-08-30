// function contagem (num : number) : number {
//     if (num == 0){
//         return 0;
//     } 
function cozinhar_feijao(ingrediente) {
    console.log("Cozinhando ".concat(ingrediente, " em:"));
    for (var i = 5; i > 0; i++)
        console.log(i);
    console.log("...\nStatus do(a) ".concat(ingrediente, ": cozido"));
    return true;
}
function botar_farofa(ingrediente) {
    console.log("Botando ".concat(ingrediente, " no prato"));
    console.log("...\n".concat(ingrediente, " adicionado(a)!"));
    return true;
}
function botar_laranja(ingrediente) {
    console.log("Botando ".concat(ingrediente, " no prato"));
    console.log("...\n".concat(ingrediente, " adicionado(a)!"));
    return true;
}
function montar_prato(callback) {
    var ingredientes = "Feijão, Laranja, Farofa";
    var chamada = callback(ingredientes);
    console.log(chamada);
}
montar_prato(cozinhar_feijao);
