
const sobrePopup = document.getElementById('sobre');
const contatoPopup = document.getElementById('contato');


const showSobreBtn = document.getElementById('show-sobre');
const showContatoBtn = document.getElementById('show-contato');


const closeSobreBtn = document.getElementById('close-sobre');
const closeContatoBtn = document.getElementById('close-contato');


showSobreBtn.addEventListener('click', function() {
    sobrePopup.classList.add('active');
});


showContatoBtn.addEventListener('click', function() {
    contatoPopup.classList.add('active');
});


closeSobreBtn.addEventListener('click', function() {
    sobrePopup.classList.remove('active');
});


closeContatoBtn.addEventListener('click', function() {
    contatoPopup.classList.remove('active');
});


window.addEventListener('click', function(event) {
    if (event.target === sobrePopup) {
        sobrePopup.classList.remove('active');
    }
    if (event.target === contatoPopup) {
        contatoPopup.classList.remove('active');
    }
});
