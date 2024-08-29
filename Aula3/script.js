var _a, _b, _c;
function divisibilityCheck() {
    var outputElement = document.getElementById('output');
    var result = '';
    for (var i = 1; i <= 200; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result += "N\u00FAmero ".concat(i, ": divis\u00EDvel por 3 e 5\n");
        }
        else if (i % 3 === 0) {
            result += "N\u00FAmero ".concat(i, ": divis\u00EDvel por 3\n");
        }
        else if (i % 5 === 0) {
            result += "N\u00FAmero ".concat(i, ": divis\u00EDvel por 5\n");
        }
        else {
            result += "N\u00FAmero ".concat(i, ": ").concat(i, "\n");
        }
    }
    outputElement.textContent = result;
}
function isPrime(num) {
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}
function findPrimes() {
    var outputElement = document.getElementById('output');
    var result = 'Números primos: ';
    for (var i = 1; i <= 50; i++) {
        if (isPrime(i)) {
            result += "".concat(i, " ");
        }
    }
    outputElement.textContent = result;
}
function sumOddNumbers() {
    var outputElement = document.getElementById('output');
    var number = 7;
    var sum = 0;
    for (var i = 1; i <= number; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }
    outputElement.textContent = "A soma dos n\u00FAmeros \u00EDmpares at\u00E9 ".concat(number, " \u00E9: ").concat(sum);
}
(_a = document.getElementById('showDivisibility')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', divisibilityCheck);
(_b = document.getElementById('showPrimes')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', findPrimes);
(_c = document.getElementById('showOddSum')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', sumOddNumbers);
