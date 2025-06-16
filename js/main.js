const mainGame = document.getElementById('jogo');
const segurandoObj = document.getElementById('segurando');
const levelDisplay = document.getElementById('levelDisplay');
const vitoriaObj = document.getElementById('vitoria');
const tituloSite = document.querySelector('title');
const divSegurarBola = document.querySelector('#segurando > .bola');
const tituloNivel = document.getElementById('joguinhoTDAH');

let gameState = {pos: [], corSegurar: 999, assist: 0};

cores = {
    999: '#00000000',
    0: '#fff', // preto
    1: '#fff', // branco
    2: '#f24123', // Vermelho
    3: '#20c833', // Verde
    4: '#1260f1', // Azul

    5: '#f6aab7', // Rosa claro trans
    6: '#ff1c8d', // Rosa pan
    7: '#ffd700', // amarelo pan
    8: '#1ab3ff', // Azul clarinho
    9: '#9b59d0', // Roxo não binário
    10: '#d86c20', // Laranja lésbico1 
    11: '#d161a2', // Rosa lésbico1 

    12: '#ff3464', // Rosa felps

    13: '#acbb3e', // Verde lara 
    
    14: '#d42c00' // Laranja lésbico1 
}

let digitos = '';
document.addEventListener('keypress', (e) => {
    let key = e.key
    console.log(key)
    if (key == 'Enter') {
        changeLevels(parseInt(digitos));
        levelGlobal = parseInt(digitos);
        digitos = '';
        return;
    }
    if (isNumeric(key)) {
        digitos = digitos + key
    }
    tituloSite.innerText = digitos;
})

document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem("salvarNivel") == null || localStorage.getItem("salvarNivel") == "NaN") {
        localStorage.setItem("salvarNivel", '1');
        changeLevels(1);
    } else {
        levelGlobal = parseInt(localStorage.getItem('salvarNivel'));
        changeLevels(levelGlobal);
    }
    
})

document.body.addEventListener('click', (event) => {
    if (event.detail === 2 && event.target == mainGame) {
        // detectando a porra de um triple click
        loadState();
    }
})