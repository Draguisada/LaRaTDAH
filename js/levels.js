let levelGlobal = 1;
const r = document.querySelector(':root');
const bolaSizePadrao = '55px';

function changeLevels(level) {
    mainGame.innerHTML = '';
    levelDisplay.innerText = level;

    r.style.setProperty('--bolaSize', bolaSizePadrao);

    vitoriaObj.style.display = 'none';
    corSegurar = 999;
    renderizarPreview();
    toggleAcabou(false);

    localStorage.setItem('salvarNivel', levelGlobal);
    
    switch (level) {
        case 1:
            nomeNivel('Joguinho TDAH pra LaRa :D');
            obj = new Tubo(3);
            obj.gerarBolas([2, 3]);
            
            obj = new Tubo(3);
            obj.gerarBolas();
            
            break;
        case 2:
            nomeNivel('Mais parecido com aqueles anuncios');
            r.style.setProperty('--bolaSize', `min(${window.innerWidth/8}px, ${bolaSizePadrao})`);
            obj = new Tubo(maxBolas=4, cor=0, min=0);
            obj.gerarBolas([2,3,4,2]);
            
            obj = new Tubo(maxBolas=4, cor=0, min=0);
            obj.gerarBolas([3,3,4,2]);

            obj = new Tubo(maxBolas=4, cor=0, min=0);
            obj.gerarBolas([4,2,3,4]);

            obj = new Tubo(maxBolas=4, cor=0, min=0);
            obj.gerarBolas();

            obj = new Tubo(maxBolas=4, cor=0, min=0);
            obj.gerarBolas();
            break;
        case 3:
            nomeNivel('Tubos invisíveis!');
            r.style.setProperty('--bolaSize', `min(${window.innerWidth/10}px, ${bolaSizePadrao})`);

            obj = new Tubo(6, 999);
            obj.gerarBolas([6, 7, 8, 8, 7, 6]);

            obj = new Tubo(5, 1, 4);
            obj.gerarBolas();

            obj = new Tubo(5, 1, 4);
            obj.gerarBolas();

            obj = new Tubo(5, 1, 4);
            obj.gerarBolas();

            obj = new Tubo(6, 999);
            obj.gerarBolas([6, 7, 8, 8, 7, 6]);

            break;
        case 4:
            nomeNivel('Começa a doer');
            r.style.setProperty('--bolaSize', `min(${window.innerWidth/10}px, ${bolaSizePadrao})`);

            obj = new Tubo(maxBolas=6, cor=0);
            obj.gerarBolas([11,6,7,8,11,6]);
            
            obj = new Tubo(maxBolas=6, cor=0);
            obj.gerarBolas([11,11,6,7,11,8]);

            obj = new Tubo(maxBolas=6, cor=0);
            obj.gerarBolas([6,11,8,8]);

            obj = new Tubo(maxBolas=6, cor=0);
            obj.gerarBolas([7,6,7]);

            obj = new Tubo(maxBolas=6, cor=0);
            obj.gerarBolas([8,6,7,8,7]);
            break;
        case 6:
            nomeNivel('Tubos coloridos!');
            obj = new Tubo(maxBolas=4, cor=6, min=2);
            obj.gerarBolas([6, 6, 8, 8]);
            
            obj = new Tubo(3);
            obj.gerarBolas();

            obj = new Tubo(3, 8);
            obj.gerarBolas();

            break;
        case 5:
            nomeNivel('Meu deus quanto');
            r.style.setProperty('--bolaSize', `min(${window.innerWidth/13}px, ${bolaSizePadrao})`);

            obj = new Tubo(maxBolas=10, cor=0, min=0);
            obj.gerarBolas([5]);
            
            obj = new Tubo(maxBolas=10, cor=0, min=0);
            obj.gerarBolas([6,6,6,8,8,6,9,6,6]);

            obj = new Tubo(maxBolas=10, cor=0, min=0);
            obj.gerarBolas([7,7,7,7,7,7,7,7,7]);

            obj = new Tubo(maxBolas=10, cor=0, min=0);
            obj.gerarBolas([8,6,6,8,5,8,5,5,5]);
            
            obj = new Tubo(maxBolas=10, cor=0, min=0);
            obj.gerarBolas([9,6,6,5,8,8,5,5,5,7]);

            obj = new Tubo(maxBolas=10, cor=0, min=0);
            obj.gerarBolas([9,9,9,9,9,9,9,9]);

            obj = new Tubo(maxBolas=10, cor=0, min=0);
            obj.gerarBolas([8,8,8]);

            break;
        case 7:
            nomeNivel('... e tamanhos diferentes?');
            obj = new Tubo(maxBolas=4, cor =0, min = 0);
            obj.gerarBolas([4, 2]);
            
            obj = new Tubo(maxBolas=2, cor=2, min=2);
            obj.gerarBolas();

            obj = new Tubo(maxBolas=1, cor=3, min=1);
            obj.gerarBolas();

            obj = new Tubo(maxBolas=3, cor=4, min=2);
            obj.gerarBolas([2, 4]);

            obj = new Tubo(maxBolas=4, cor=0, min=0);
            obj.gerarBolas([3]);
            break;
        case 9:
            nomeNivel('de 0 a 100 né');
            r.style.setProperty('--bolaSize', `min(${window.innerWidth/13}px, ${bolaSizePadrao})`);

            obj = new Tubo(maxBolas=10, cor=0, min=0);
            obj.gerarBolas([5]);
            
            obj = new Tubo(maxBolas=10, cor=6, min=10);
            obj.gerarBolas([6,6,6,8,8,6,9,6,6]);

            obj = new Tubo(maxBolas=10, cor=0, min=0);
            obj.gerarBolas([7,7,7,7,7,7,7,7,7]);

            obj = new Tubo(maxBolas=10, cor=0, min=0);
            obj.gerarBolas([8,6,6,8,5,8,5,5,5]);
            
            obj = new Tubo(maxBolas=10, cor=0, min=0);
            obj.gerarBolas([9,6,6,5,8,8,5,5,5,7]);

            obj = new Tubo(maxBolas=10, cor=0, min=0);
            obj.gerarBolas([9,9,9,9,9,9,9,9]);

            obj = new Tubo(maxBolas=10, cor=8, min=10);
            obj.gerarBolas([8,8,8]);
            break;
        case 8:
            nomeNivel('.. e um tico de lógica');
            obj = new Tubo(maxBolas=4, cor=0);
            obj.gerarBolas([4,4,3]);
            
            obj = new Tubo(4, 3, 2);
            obj.gerarBolas();
            
            obj = new Tubo(4, 2, 1);
            obj.gerarBolas();
            
            
            obj = new Tubo(4, 1);
            obj.gerarBolas([3, 4, 2]);
            break;
        case 10:
            nomeNivel('muito azulzinho');
            r.style.setProperty('--bolaSize', `min(${window.innerWidth/13}px, ${bolaSizePadrao})`);
            obj = new Tubo(maxBolas=8, cor=0, min=0);
            obj.gerarBolas([8,8,8,8,7]);
            
            obj = new Tubo(maxBolas=5, cor=0, min=0);
            obj.gerarBolas([6,6, 7]);

            obj = new Tubo(maxBolas=8, cor=0, min=0);
            obj.gerarBolas([8, 8, 6, 6, 8, 8, 6, 7]);

            obj = new Tubo(maxBolas=8, cor=0, min=0);
            obj.gerarBolas([6, 6, 8, 6, 8, 7]);

            obj = new Tubo(maxBolas=6, cor=0, min=0);
            obj.gerarBolas([8, 8, 6, 7]);

            obj = new Tubo(maxBolas=8, cor=0, min=0);
            obj.gerarBolas([10, 10, 10, 10, 10]);

            break;
        case 11:
            nomeNivel('ficando com pouco espaço...');
            r.style.setProperty('--bolaSize', `min(${window.innerWidth/10}px, ${bolaSizePadrao})`);
            obj = new Tubo(maxBolas=7, cor=7, min=5);
            obj.gerarBolas([8,12,12,10,8,8]);
            
            obj = new Tubo(maxBolas=5, cor=0, min=0);
            obj.gerarBolas([12,10,8,8,7]);

            obj = new Tubo(maxBolas=7, cor=0, min=0);
            obj.gerarBolas([7,8,12,10,12,8]);

            obj = new Tubo(maxBolas=7, cor=0, min=0);
            obj.gerarBolas([10,12,10]);

            obj = new Tubo(maxBolas=5, cor=10, min=0);
            obj.gerarBolas([7,7,7,7]);

        break;

        case 12:
            nomeNivel('Meu deus quanto tubo colorido');
            r.style.setProperty('--bolaSize', `min(${window.innerWidth/10}px, ${bolaSizePadrao})`);
            obj = new Tubo(maxBolas=8, cor=8, min=7);
            obj.gerarBolas([12,12,8,12,10,10,8]);
            
            obj = new Tubo(maxBolas=8, cor=12, min=5);
            obj.gerarBolas([10,4,10,4,8,4,12]);

            obj = new Tubo(maxBolas=7, cor=10, min=6);
            obj.gerarBolas([4,10,4,10,8,12]);

            obj = new Tubo(maxBolas=2, cor=0, min=0);
            obj.gerarBolas([4]);

            obj = new Tubo(maxBolas=6, cor=4, min=6);
            obj.gerarBolas([8,8,8]);

        break;

        case 13:
            nomeNivel('Quanto pouco espaço..');
            r.style.setProperty('--bolaSize', `min(${window.innerWidth/10}px, ${bolaSizePadrao})`);
            obj = new Tubo(maxBolas=1, cor=0, min=0);
            obj.gerarBolas();
            
            obj = new Tubo(maxBolas=2, cor=0, min=0);
            obj.gerarBolas([ 7, 8]);
            
            obj = new Tubo(maxBolas=2, cor=8, min=0);
            obj.gerarBolas([1, 1]);

            obj = new Tubo(maxBolas=3, cor=0, min=0);
            obj.gerarBolas([9, 1]);

            obj = new Tubo(maxBolas=3, cor=0, min=0);
            obj.gerarBolas([7, 9, 8]);

            obj = new Tubo(maxBolas=4, cor=0, min=0);
            obj.gerarBolas([6, 6, 1, 1]);

            obj = new Tubo(maxBolas=2, cor=0, min=0);
            obj.gerarBolas([1]);

        break;
        case 14:
            nomeNivel('Ai ta doendo, ta prensado');
            obj = new Tubo(maxBolas=1, cor=0, min=0);
            obj.gerarBolas([1,  2]);
            obj = new Tubo(maxBolas=1, cor=0, min=0);
            obj.gerarBolas([1,  2]);
            
            obj = new Tubo(maxBolas=1, cor=0, min=0);
            obj.gerarBolas([]);

            obj = new Tubo(maxBolas=2, cor=2, min=2);
            obj.gerarBolas([]);
            break;
        case 15:
            nomeNivel('cuidado com o espaço...');
            obj = new Tubo(maxBolas=3, cor=0, min=1);
            obj.gerarBolas([1,  2, 1, 1]);
            obj = new Tubo(maxBolas=1, cor=0, min=1);
            obj.gerarBolas([1,  2, ]);
            
            obj = new Tubo(maxBolas=1, cor=0, min=1);
            obj.gerarBolas([]);

            obj = new Tubo(maxBolas=2, cor=2, min=2);
            obj.gerarBolas([]);

            break;
        case 16:

            break;
        case 17:
            nomeNivel('Como é possível isso');
            r.style.setProperty('--bolaSize', `min(${window.innerWidth/10}px, ${bolaSizePadrao})`);

            obj = new Tubo(maxBolas=5, cor=5, min=4);
            obj.gerarBolas([1, 2, 3, 2]);
            
            obj = new Tubo(maxBolas=4, cor=0, min=0);
            obj.gerarBolas([ 3, 1, ]);

            obj = new Tubo(maxBolas=5, cor=2, min=5);
            obj.gerarBolas([4, 2, 4, 3, 2]);

            obj = new Tubo(maxBolas=4, cor=2, min=4);
            obj.gerarBolas([3, 5, 4, 2]);

            obj = new Tubo(maxBolas=2, cor=0, min=0);
            obj.gerarBolas([5, 4, 5]);

            obj = new Tubo(maxBolas=4, cor=3, min=3);
            obj.gerarBolas([ 3, 2, 1, 5]);

            obj = new Tubo(maxBolas=5, cor=3, min=4);
            obj.gerarBolas([3, 3,  1, 2]);

            obj = new Tubo(maxBolas=3, cor=0, min=0);
            obj.gerarBolas([3, 2, 2]);

            new Tubo(maxBolas=1, cor=0)
            break;

        case 18:
            toggleAcabou(true);

        break;
    }


    geralEvento()
}

// aaa