var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Biblioteca = /** @class */ (function () {
    function Biblioteca() {
        this.livros = [];
    }
    Biblioteca.prototype.armazenar = function (livro) {
        this.livros.push(livro);
        console.log("O livro foi armazenado na biblioteca!");
    };
    Biblioteca.prototype.consultar = function (livro) {
        var encontrado = this.livros.includes(livro);
        if (encontrado) {
            console.log("O livro \"".concat(livro, "\" est\u00E1 dispon\u00EDvel na biblioteca."));
        }
        else {
            console.log("O livro \"".concat(livro, "\" n\u00E3o foi encontrado na biblioteca."));
        }
    };
    Biblioteca.prototype.deletar = function (livro) {
        var indice = this.livros.indexOf(livro);
        if (indice !== -1) {
            this.livros.splice(indice, 1);
            console.log("O livro \"".concat(livro, "\" foi deletado da biblioteca!"));
        }
        else {
            console.log("O livro \"".concat(livro, "\" n\u00E3o foi encontrado para ser deletado."));
        }
    };
    Biblioteca.prototype.listarLivros = function () {
        return this.livros;
    };
    return Biblioteca;
}());
var BibliotecaInfantil = /** @class */ (function (_super) {
    __extends(BibliotecaInfantil, _super);
    function BibliotecaInfantil() {
        return _super.call(this) || this;
    }
    BibliotecaInfantil.prototype.consultar = function (livro) {
        var livros = this.listarLivros();
        var encontrado = livros.includes(livro);
        if (encontrado) {
            console.log("O livro infantil \"".concat(livro, "\" est\u00E1 dispon\u00EDvel na biblioteca."));
        }
        else {
            console.log("O livro infantil \"".concat(livro, "\" n\u00E3o foi encontrado na biblioteca."));
        }
    };
    return BibliotecaInfantil;
}(Biblioteca));
var bibliotecaInfantil = new BibliotecaInfantil();
bibliotecaInfantil.armazenar("O Pequeno Príncipe");
bibliotecaInfantil.consultar("O Pequeno Príncipe");
bibliotecaInfantil.deletar("O Pequeno Príncipe");
bibliotecaInfantil.consultar("O Pequeno Príncipe");
