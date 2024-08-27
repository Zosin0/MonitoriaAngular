// let idade: number = 18
// if (idade >= 18) {
//     alert("Eu sou maior de idade man")
// } else{
//     alert("Eu sou menor de idade man")    
// }

// Operador Ternário
// let io: number = 25;
// let temperatura:string;
// temperatura = (io >= 30) ? 'Quente!' : 'Frio'
// alert(temperatura)

//let inputElement:string = '1';  
// Seleciona os elementos do DOM
// const inputElement = document.getElementById('userInput') as HTMLInputElement;
//const buttonElement = document.getElementById('showInput') as HTMLButtonElement;
// const outputElement = document.getElementById('output') as HTMLParagraphElement;

const outputElement = document.getElementById('output') as HTMLParagraphElement;
const buttonElement = document.getElementById('showInput') as HTMLButtonElement;

function clicou() : void {
    let idx: number = 1
    let soma: number = 0    

    while (soma < 100){
        soma+=idx;
        alert(`A soma atual é: ${soma}\nUltimo número somado: ${idx}`)
        //outputElement.textContent = `A soma atual é: ${soma}\nUltimo número somado ${idx}`;

        idx += 1;
    }
}
buttonElement.addEventListener('click', clicou);


//     const dia: string = inputElement.value;
//     console.log(typeof(dia));
//     console.log(dia);
    
//     switch (dia) {
//         case '1':
//             outputElement.textContent = 'Segunda-Feira';
//             break;
//         case '2':
//             outputElement.textContent = 'Terça-Feira';
//             break;
//         case '3':
//             outputElement.textContent = 'Quarta-Feira';
//             break;
//         case '4':
//             outputElement.textContent = 'Quinta-Feira';
//             break;
//         case '5':
//             outputElement.textContent = 'Sexta-Feira';
//             break;
//         case '6':
//             outputElement.textContent = 'Sábado';
//             break;
//         case '7':
//             outputElement.textContent = 'Domingo';
//             break;
//         default:
//             outputElement.textContent = 'Número inválido';
//     }
// }

// // Adiciona um evento de clique ao botão
// buttonElement.addEventListener('click', clicou);