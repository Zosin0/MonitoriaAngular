interface Livro {
    armazenar(livro: string): void;
    consultar(livro: string): void;
    deletar(livro: string): void;
}

class Biblioteca implements Livro {
    private livros: string[] = [];

    constructor() {}

    armazenar(livro: string): void {
        this.livros.push(livro);
        console.log("O livro foi armazenado na biblioteca!");
    }

    consultar(livro: string): void {
        const encontrado = this.livros.includes(livro);
        if (encontrado) {
            console.log(`O livro "${livro}" está disponível na biblioteca.`);
        } else {
            console.log(`O livro "${livro}" não foi encontrado na biblioteca.`);
        }
    }

    deletar(livro: string): void {
        const indice = this.livros.indexOf(livro);
        if (indice !== -1) {
            this.livros.splice(indice, 1);
            console.log(`O livro "${livro}" foi deletado da biblioteca!`);
        } else {
            console.log(`O livro "${livro}" não foi encontrado para ser deletado.`);
        }
    }

    protected listarLivros(): string[] {
        return this.livros;
    }
}

class BibliotecaInfantil extends Biblioteca {
    constructor() {
        super(); 
    }

    consultar(livro: string): void {
        const livros = this.listarLivros(); 
        const encontrado = livros.includes(livro);
        if (encontrado) {
            console.log(`O livro infantil "${livro}" está disponível na biblioteca.`);
        } else {
            console.log(`O livro infantil "${livro}" não foi encontrado na biblioteca.`);
        }
    }
}

const bibliotecaInfantil = new BibliotecaInfantil();
bibliotecaInfantil.armazenar("O Pequeno Príncipe");
bibliotecaInfantil.consultar("O Pequeno Príncipe");
bibliotecaInfantil.deletar("O Pequeno Príncipe");
bibliotecaInfantil.consultar("O Pequeno Príncipe");
