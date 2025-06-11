let levelGlobal = 1;

function changeLevels(level) {
    mainGame.innerHTML = '';
    levelDisplay.innerText = level;
    
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
            obj = new Tubo(4, 999);
            obj.gerarBolas([3, 3, 2, 2]);
            
            obj = new Tubo(3);
            obj.gerarBolas();

            obj = new Tubo(3);
            obj.gerarBolas();

            
            break;
        case 4:
            obj = new Tubo(4);
            obj.gerarBolas([3, 3, 7, 2]);
            
            obj = new Tubo(3);
            obj.gerarBolas();

            obj = new Tubo(3);
            obj.gerarBolas();
            break;
        case 5:
            obj = new Tubo(maxBolas=4, cor=3, min=2);
            obj.gerarBolas([3, 3, 2, 2]);
            
            obj = new Tubo(3);
            obj.gerarBolas();

            obj = new Tubo(3, 2);
            obj.gerarBolas();

            break;
        case 6:
            obj = new Tubo(maxBolas=4, cor=3, min=2);
            obj.gerarBolas([3, 3, 2, 2]);
            
            obj = new Tubo(maxBolas=4, cor=3, min=2);
            obj.gerarBolas();

            obj = new Tubo(maxBolas=4, cor=3, min=2);
            obj.gerarBolas();
            break;
        case 7:
            obj = new Tubo(maxBolas=4, cor = 3);
            obj.gerarBolas([4, 2]);
            
            obj = new Tubo(maxBolas=2, cor=2, min=2);
            obj.gerarBolas();

            obj = new Tubo(maxBolas=1, cor=3, min=2);
            obj.gerarBolas();

            obj = new Tubo(maxBolas=4, cor=3, min=2);
            obj.gerarBolas();

            obj = new Tubo(maxBolas=4, cor=3, min=2);
            obj.gerarBolas();
            break;
        case 8:
            break;
        case 9:
            obj = new Tubo(4);
            obj.gerarBolas([4,4,3]);
            
            obj = new Tubo(4, 3);
            obj.gerarBolas();
            
            obj = new Tubo(4, 2);
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