let levelGlobal = 1;
const r = document.querySelector(':root');
const bolaSizePadrao = '55px';

function changeLevels(level) {
    mainGame.innerHTML = '';
    levelDisplay.innerText = level;

    r.style.setProperty('--bolaSize', bolaSizePadrao);
    
    switch (level) {
        case 1:
            obj = new Tubo(3);
            obj.gerarBolas([2, 3]);
            
            obj = new Tubo(3);
            obj.gerarBolas();
            
            break;
        case 2:
            obj = new Tubo(3, 999);
            obj.gerarBolas([6, 7, 8]);
            
            obj = new Tubo(1);
            obj.gerarBolas();
            obj = new Tubo(1);
            obj.gerarBolas();
            obj = new Tubo(1);
            obj.gerarBolas();
            break;
        case 3:       
            r.style.setProperty('--bolaSize', `min(${window.innerWidth/10}px, ${bolaSizePadrao})`);

            obj = new Tubo(6, 999);
            obj.gerarBolas([9, 11, 5, 5, 11, 9]);

            obj = new Tubo(5, 1, 4);
            obj.gerarBolas();

            obj = new Tubo(5, 1, 4);
            obj.gerarBolas();

            obj = new Tubo(5, 1, 4);
            obj.gerarBolas();

            obj = new Tubo(6, 999);
            obj.gerarBolas([9, 11, 5, 5, 11, 9]);

            break;
        case 4:
            r.style.setProperty('--bolaSize', `min(${window.innerWidth/10}px, ${bolaSizePadrao})`);

            obj = new Tubo(maxBolas=6, cor=1);
            obj.gerarBolas([11,6,7,8,11,6]);
            
            obj = new Tubo(maxBolas=6, cor=1);
            obj.gerarBolas([11,11,6,7,11,8]);

            obj = new Tubo(maxBolas=6, cor=1);
            obj.gerarBolas([6,11,8,8]);

            obj = new Tubo(maxBolas=6, cor=1);
            obj.gerarBolas([7,6,7]);

            obj = new Tubo(maxBolas=6, cor=1);
            obj.gerarBolas([8,6,7,8,7]);
            break;
        case 6:
            obj = new Tubo(maxBolas=4, cor=6, min=2);
            obj.gerarBolas([6, 6, 8, 8]);
            
            obj = new Tubo(3);
            obj.gerarBolas();

            obj = new Tubo(3, 8);
            obj.gerarBolas();

            break;
        case 5:
            r.style.setProperty('--bolaSize', `min(${window.innerWidth/13}px, ${bolaSizePadrao})`);

            obj = new Tubo(maxBolas=10, cor=1, min=2);
            obj.gerarBolas([5]);
            
            obj = new Tubo(maxBolas=10, cor=1, min=2);
            obj.gerarBolas([6,6,6,8,8,6,9,6,6]);

            obj = new Tubo(maxBolas=10, cor=1, min=2);
            obj.gerarBolas([7,7,7,7,7,7,7,7,7]);

            obj = new Tubo(maxBolas=10, cor=1, min=2);
            obj.gerarBolas([8,6,6,8,5,8,5,5,5]);
            
            obj = new Tubo(maxBolas=10, cor=1, min=2);
            obj.gerarBolas([9,6,6,5,8,8,5,5,5,5]);

            obj = new Tubo(maxBolas=10, cor=1, min=2);
            obj.gerarBolas([9,9,9,9,9,9,9,9]);

            obj = new Tubo(maxBolas=10, cor=1, min=2);
            obj.gerarBolas([8,8,8]);

            break;
        case 7:
            obj = new Tubo(maxBolas=4, cor = 1, min = 0);
            obj.gerarBolas([4, 2]);
            
            obj = new Tubo(maxBolas=2, cor=2, min=2);
            obj.gerarBolas();

            obj = new Tubo(maxBolas=1, cor=3, min=1);
            obj.gerarBolas();

            obj = new Tubo(maxBolas=3, cor=4, min=2);
            obj.gerarBolas([2, 4]);

            obj = new Tubo(maxBolas=4, cor=1, min=0);
            obj.gerarBolas([3]);
            break;
        case 8:
            break;
        case 9:
            obj = new Tubo(maxBolas=4, cor=1);
            obj.gerarBolas([4,4,3]);
            
            obj = new Tubo(4, 3, 2);
            obj.gerarBolas();
            
            obj = new Tubo(4, 2, 1);
            obj.gerarBolas();
            
            
            obj = new Tubo(4, 1);
            obj.gerarBolas([3, 4, 2]);
            break;
        case 10:
            obj = new Tubo(maxBolas=4, cor=3, min=2);
            obj.gerarBolas([3, 3, 2, 2]);
            
            obj = new Tubo(maxBolas=4, cor=3, min=2);
            obj.gerarBolas();

            obj = new Tubo(maxBolas=4, cor=3, min=2);
            obj.gerarBolas();
            break;
    }


    geralEvento()
}