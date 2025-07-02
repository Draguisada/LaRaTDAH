function handleClick(event) {

    let tubo = event.target;
    
    if (tubo.classList.contains('bola')) {
        tubo = tubo.parentNode;
    }

    // Pegar o primeiro item, verificar se já tem no inv algum
    let select = tubo.childNodes[0];

    if (gameState.corSegurar != 999) {

        if (tubo.childNodes.length < tubo.maxBolas) {

        
        const bolaObj = new Bola(gameState.corSegurar);
        
        tubo.insertBefore(bolaObj, tubo.childNodes[0]);
        
        gameState.corSegurar = 999;
        
        segurandoObj.style.opacity = 0;
        renderizarPreview();
        checkWin();
        
        }
        saveState();
        return;
    }
    
    gameState.corSegurar = parseInt(select.innerText);
    segurandoObj.style.opacity = 100;

    // segurandoObj.style.left = `calc(${tubo.offsetLeft} + var(--tamanhoBordaTubo))`;
    // segurandoObj.style.top = tubo.offsetTop + 'px';
    
    tubo.removeChild(select);
    atualizarTubos();
    renderizarPreview();
}

function renderizarPreview() {
    divSegurarBola.style.backgroundColor = cores[gameState.corSegurar];

}

function atualizarTubos() {
    let tubos = document.getElementsByClassName('tubo');
    for (let i = 0; i < tubos.length; i++) {
        tubos[i].statusAtualizar();
    }
}

function geralEvento() {
    let tubos = document.getElementsByClassName('tubo');

    for (let i = 0; i < tubos.length; i++) {
        tubos[i].addEventListener('click', handleClick)
        tubos[i].statusAtualizar();
    }
}

function nomeNivel(nome) {
    tituloNivel.innerHTML = nome;
}


function checkWin() {

    debugRegras = 0;

    let tubos = document.getElementsByClassName('tubo');
    for (let i = 0; i < tubos.length; i++) {
        let tuboAtual = tubos[i];
        
        let corPrincipal = tuboAtual.corRequerida;
        let bolas = tuboAtual.childNodes;
        if (debugRegras) console.log('==========')

        if (debugRegras) console.log('primeiro teste | tubos sem cor não pode ter bolas')
        if (corPrincipal == 999 && bolas.length != 0) {
            return false;
        } 
        else if (corPrincipal == 999 && bolas.length == 0) {
            if (debugRegras) console.log('primeiro teste | continuou!')
            continue;
        }

        if (debugRegras) console.log('passou primeiro teste')
        
        if (debugRegras) console.log('segundo teste || se o minimo de bolas na variavel do tubo é condizente')
        
        if (tuboAtual.min > bolas.length) {
            return false;
        }

        if (debugRegras) console.log('passou segundo teste')
        
        if (debugRegras) console.log('terceiro teste || regra do cor do tubo')

        if (corPrincipal == 0 || corPrincipal == 999) {
            if (bolas.length >= 1){
                corPrincipal = bolas[0].cor;
            }

        } else {
                
            if (debugRegras) console.log('terceiro teste else || ')
            if (tuboAtual.childElementCount == 0 ) {
                if (debugRegras) console.log('falso!');
                return false;
            }
        }
        if (debugRegras) console.log('passou terceiro teste')
        
        for (let i = 0; i < bolas.length; i++) {
        
            if (bolas[i].cor != corPrincipal) {
                return false;
            }
        }
    }
    if (debugRegras) console.log('verdade!')
    vitoria(true);
    
    return true;
}

function isNumeric(str) {
  if (typeof str != "string") return false // we only process strings!  
  return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
         !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

function vitoria(bool) {
    if (bool) {
        vitoriaObj.style.display = 'flex';
        vitoriaBool = true;
    } else {
        vitoriaObj.style.display = 'none';
        vitoriaBool = false;
    }
}


function toggleAssist() {
    if (gameState.assist) {
        gameState.assist = 0;
        r.style.setProperty('--assistCor', 'transparent')
        r.style.setProperty('--assistBackground', 'transparent')
    } else {
        gameState.assist = 1;
        r.style.setProperty('--assistCor', 'var(--backgroundColor)')
        r.style.setProperty('--assistBackground', '1px 0 #fff, -1px 0 #fff, 0 1px #fff, 0 -1px #fff, 1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff')
    }
}


function toggleAcabou(especifico) {
    if (!(especifico)) {

        r.style.setProperty('--acabou', 'none')
    } else {

        r.style.setProperty('--acabou', 'flex')
    }
}

function saveState() {
    let gameAtual = [];
    // tubos ordenados com as cores das bolas
    let tubos = document.getElementsByClassName('tubo');
    let bolaAtual;

    for (let i = 0; i < tubos.length; i++) {
        let listaBolas = [];
        let tuboAtual = tubos[i];
        for (let j = 0; j < tuboAtual.childElementCount; j++) {
            bolaAtual = tuboAtual.childNodes[j];
            listaBolas.push(bolaAtual.cor)
        }

        gameAtual.push(listaBolas);        
    }

    let listaMovs = gameState.pos;
    

    if (listaMovs.length <= 10) {
        listaMovs.push(gameAtual);
    } else {
        listaMovs.shift();
        listaMovs.push(gameAtual);
    }
}

function loadState() {
    let goTo = Math.max(gameState.pos.length - 2, 0);
    let changeTo = gameState.pos[goTo];
    gameState.corSegurar = 999;

    let tubos = document.getElementsByClassName('tubo');
    for (i = 0; i < tubos.length; i++) {
        tubos[i].setar(changeTo[i]);
    }
    
    gameState.pos.pop();
    atualizarTubos();
    geralEvento();
    renderizarPreview();
}

function resetState() {
    gameState.pos = [];
}