function divisibilityCheck(): void {
    const outputElement = document.getElementById('output') as HTMLParagraphElement;
    let result = '';

    for (let i = 1; i <= 200; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result += `Número ${i}: divisível por 3 e 5\n`;
        } else if (i % 3 === 0) {
            result += `Número ${i}: divisível por 3\n`;
        } else if (i % 5 === 0) {
            result += `Número ${i}: divisível por 5\n`;
        } else {
            result += `Número ${i}: ${i}\n`;
        }
    }
    outputElement.textContent = result;
}

function isPrime(num: number): boolean {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

function findPrimes(): void {
    const outputElement = document.getElementById('output') as HTMLParagraphElement;
    let result = 'Números primos: ';
    for (let i = 1; i <= 50; i++) {
        if (isPrime(i)) {
            result += `${i} `;
        }
    }
    outputElement.textContent = result;
}

function sumOddNumbers(): void {
    const outputElement = document.getElementById('output') as HTMLParagraphElement;
    const number = 7; 
    let sum = 0;

    for (let i = 1; i <= number; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }
    outputElement.textContent = `A soma dos números ímpares até ${number} é: ${sum}`;
}

document.getElementById('showDivisibility')?.addEventListener('click', divisibilityCheck);
document.getElementById('showPrimes')?.addEventListener('click', findPrimes);
document.getElementById('showOddSum')?.addEventListener('click', sumOddNumbers);
