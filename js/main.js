const mainGame = document.getElementById('jogo');
let corSegurar = 999;
const segurandoObj = document.getElementById('segurando');
const levelDisplay = document.getElementById('levelDisplay');

const vitoriaObj = document.getElementById('vitoria');

const tituloSite = document.querySelector('title');

const divSegurarBola = document.getElementById('segurando').childNodes[3];

cores = {
    999: '#00000000',
    0: '#000', // preto
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

function handleClick(event) {

    let tubo = event.target;
    
    if (tubo.classList.contains('bola')) {
        tubo = tubo.parentNode;
    }

    // Pegar o primeiro item, verificar se já tem no inv algum
    let select = tubo.childNodes[0];

    if (corSegurar != 999) {

        if (tubo.childNodes.length < tubo.maxBolas) {

        const bolaObj = new Bola(corSegurar);

        tubo.insertBefore(bolaObj, tubo.childNodes[0]);

        corSegurar = 999;
        
        segurandoObj.style.opacity = 0;
        renderizarPreview();
        checkWin();
        }
        return;
    }
    
    corSegurar = select.cor;
    segurandoObj.style.opacity = 100;

    // segurandoObj.style.left = `calc(${tubo.offsetLeft} + var(--tamanhoBordaTubo))`;
    // segurandoObj.style.top = tubo.offsetTop + 'px';
    
    tubo.removeChild(select);
    renderizarPreview();
}

function renderizarPreview() {
    divSegurarBola.style.backgroundColor = cores[corSegurar]

}

function geralEvento() {
    let tubos = document.getElementsByClassName('tubo');

    for (let i = 0; i < tubos.length; i++) {
        tubos[i].addEventListener('click', handleClick)
    }
}


function checkWin() {
    let tubos = document.getElementsByClassName('tubo');
    for (let i = 0; i < tubos.length; i++) {
        let tuboAtual = tubos[i];
        let corPrincipal = tuboAtual.corRequerida;
        let bolas = tuboAtual.childNodes;

        console.log('primeiro teste')
        if (corPrincipal == 999 && bolas.length != 0) {
            return false;
        }
        console.log('passou primeiro teste')
        
        console.log('terceiro teste')
        
        if (tuboAtual.min > bolas.length) {
            return false;
        }

        console.log('passou terceiro teste')

        console.log('quarto teste')
        
        if (tuboAtual.maiorQue > bolas.length) {
            return false;
        }

        console.log('passou quarto teste')
        
        console.log('segundo teste')

        if (corPrincipal == 1 || corPrincipal == 999) {
            if (bolas.length >= 1){
                corPrincipal = bolas[0].cor;
            }

        } else {
            console.log('segundo teste else entrou')
            if (tuboAtual.childElementCount == 0 ) {
                console.log('falso!');
                return false;
            }
        }
        console.log('passou segundo teste')
        
        for (let i = 0; i < bolas.length; i++) {

            if (corPrincipal == 1) {
                corPrincipal = bolas[i].cor;
            } else {
                if (tuboAtual.childElementCount == 0) {
                    console.log('falso');
                    return false;
                }
            }

            if (bolas[i].cor != corPrincipal) {
                check = false;
                console.log('falso!');
                return false;
            }
        }
    }
    console.log('verdade!')
    vitoria();
    
    return true;
}

function isNumeric(str) {
  if (typeof str != "string") return false // we only process strings!  
  return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
         !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

function vitoria() {
    vitoriaObj.style.display = 'flex';
}

let assist = 0;
function toggleAssist() {
    if (assist) {
        assist = 0;
        r.style.setProperty('--assistCor', 'none')
    } else {
        assist = 1;
        r.style.setProperty('--assistCor', 'block')
    }
}


function toggleAcabou(especifico) {
    if (!(especifico)) {

        r.style.setProperty('--acabou', 'none')
    } else {

        r.style.setProperty('--acabou', 'flex')
    }
}






let digitos = '';
document.addEventListener('keypress', (e) => {
    let key = e.key
    console.log(key)
    if (key == 'Enter') {
        changeLevels(parseInt(digitos));
        levelGlobal = parseInt(digitos);
        digitos = '';
    }
    if (isNumeric(key)) {
        digitos = digitos + key
    }
    tituloSite.innerText = digitos;
})

document.addEventListener('DOMContentLoaded', function() {
    levelGlobal = parseInt(localStorage.getItem('salvarNivel'));
    changeLevels(levelGlobal)
})