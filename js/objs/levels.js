let levelGlobal = 1;

function changeLevels(level) {
    mainGame.innerHTML = '';
    
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
            obj = new Tubo(3, 999);
            obj.gerarBolas([6, 7, 8]);
            
            obj = new Tubo(1);
            obj.gerarBolas();
            obj = new Tubo(1);
            obj.gerarBolas();
            obj = new Tubo(1);
            obj.gerarBolas();
            
            break;
        case 4:

            break;
        case 5:

            break;
        case 6:

            break;
        case 7:
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
            break;
    }


    geralEvento()
}