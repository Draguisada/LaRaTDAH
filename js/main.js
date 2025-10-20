const mainGame = document.getElementById('jogo');
const segurandoObj = document.getElementById('segurando');
const levelDisplay = document.getElementById('levelDisplay');
const vitoriaObj = document.getElementById('vitoria');
const tituloSite = document.querySelector('title');
const divSegurarBola = document.querySelector('#segurando > .bola');
const tituloNivel = document.getElementById('joguinhoTDAH');

let gameState = {pos: [], corSegurar: 999, assist: 0};
let vitoriaBool = false;

const maxUndos = 10;

cores = {
    999: '#00000000',
    0: '#fff', // preto
    1: '#ffffff', // branco
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
    
    14: '#d42c00', // Laranja lésbico1 
    
    // Novas cores - Vermelhos e Rosas (15-24)
    15: '#ff0000', // Vermelho puro
    16: '#dc143c', // Crimson
    17: '#b22222', // Fire Brick
    18: '#ff69b4', // Hot Pink
    19: '#ff1493', // Deep Pink
    20: '#ffc0cb', // Pink
    21: '#ffb6c1', // Light Pink
    22: '#ff6347', // Tomato
    23: '#cd5c5c', // Indian Red
    24: '#f08080', // Light Coral
    
    // Novas cores - Azuis e Roxos (25-34)
    25: '#0000ff', // Azul puro
    26: '#4169e1', // Royal Blue
    27: '#1e90ff', // Dodger Blue
    28: '#00bfff', // Deep Sky Blue
    29: '#87ceeb', // Sky Blue
    30: '#9370db', // Medium Purple
    31: '#8a2be2', // Blue Violet
    32: '#9400d3', // Dark Violet
    33: '#9932cc', // Dark Orchid
    34: '#ba55d3', // Medium Orchid
    
    // Novas cores - Verdes e Amarelos (35-44)
    35: '#00ff00', // Verde puro
    36: '#32cd32', // Lime Green
    37: '#00fa9a', // Medium Spring Green
    38: '#00ff7f', // Spring Green
    39: '#7fffd4', // Aquamarine
    40: '#ffff00', // Amarelo puro
    41: '#ffd700', // Gold
    42: '#ffa500', // Orange
    43: '#ff8c00', // Dark Orange
    44: '#ff7f50', // Coral
    
    // Novas cores - Laranjas e Tons Especiais (45-54)
    45: '#C94A00FF', // Orange Red
    46: '#ffa500', // Orange
    47: '#ff8c00', // Dark Orange
    48: '#daa520', // Goldenrod
    49: '#b8860b', // Dark Goldenrod
    50: '#808080', // Cinza
    51: '#a9a9a9', // Dark Gray
    52: '#c0c0c0', // Silver
    53: '#2f4f4f', // Dark Slate Gray
    54: '#696969'  // Dim Gray
}

let digitos = '0';

let debugMode = false;

document.addEventListener('keypress', (e) => {
    let key = e.key
    if (key == 'd') changeLevels(++levelGlobal);
    if (key == 'a') changeLevels(--levelGlobal);
    if (key == '*') { debugMode = !(debugMode); console.log('debug: ' + debugMode)}
    if (debugMode) { // modo debug
        console.log(key)
        if (key == 'Enter') {
            changeLevels(parseInt(digitos));
            levelGlobal = parseInt(digitos);
            digitos = '0';
            return;
        }
        if (isNumeric(key)) {
            digitos = digitos + key
        }
        tituloSite.innerText = digitos;
    }else // modo jogo
    {
        if (!(isNumeric(key))) {
            if (key == 'Enter') {
                loadState();
            }
            if (vitoriaBool) {
                proximoNivelBotao.click();
            }
        }
        else
        {
        let num = parseInt(key);
        tubosGameplay[num-1].click();
    }
}});

document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem("salvarNivel") == null || localStorage.getItem("salvarNivel") == "NaN") {
        localStorage.setItem("salvarNivel", '1');
        changeLevels(1);
    } else {
        levelGlobal = parseInt(localStorage.getItem('salvarNivel'));
        changeLevels(levelGlobal);
    }
    tubosGameplay = document.getElementsByClassName('tubo');
})

document.body.addEventListener('click', (event) => {
    // console.log(event)
    if (event.detail === 2 && event.target == document.body) {
        // detectando a porra de um triple click
        loadState();
    }
})