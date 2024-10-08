var form = document.getElementById("form1");
form.addEventListener('submit', function () {
    var data = new FormData(form);
    for (var _i = 0, _a = data.entries(); _i < _a.length; _i++) {
        var _b = _a[_i], c = _b[0], v = _b[1];
        alert("".concat(c, " ").concat(v));
    }
});
// const nome: string | null = window.prompt("Qual o seu nome? ");
// const idade: string | null = window.prompt("Qual a sua idade? ");
// const element1: HTMLElement = document.getElementById('paragrafo') as HTMLElement || null
// const element2: HTMLElement = document.getElementById('paragrafo2') as HTMLElement || null
// element1.textContent = "Nome: " + nome;
// element2.textContent = "Idade: " + idade;
