// Exercício Contagem
// function contagem (num : number) : number {
//     if (num == 0){
//         return 0;
//     } 
function cozinhar_feijao(ingrediente, callback) {
    console.log("Cozinhando ".concat(ingrediente, " em:"));
    for (var i = 5; i > 0; i--) {
        console.log(i);
    }
    console.log("...\nStatus do(a) ".concat(ingrediente, ": cozido"));
    callback();
}
function botar_arroz(ingrediente, callback) {
    console.log("Botando ".concat(ingrediente, " no prato"));
    console.log("...\n".concat(ingrediente, " adicionado(a)!"));
    callback();
}
function botar_laranja(ingrediente, callback) {
    console.log("Botando ".concat(ingrediente, " no prato"));
    console.log("...\n".concat(ingrediente, " adicionado(a)!"));
    callback();
}
function montar_prato() {
    cozinhar_feijao("Feijão", function () {
        botar_arroz("Arroz", function () {
            botar_laranja("Laranja", function () {
                console.log("A feijoada com: Feijão, Arroz, Laranja está pronta!");
            });
        });
    });
}
montar_prato();
