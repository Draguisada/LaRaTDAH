

class Tubo {
    constructor(maxBolas, cor = 1) {
        this.obj = document.createElement('div');
        
        this.obj.maxBolas = maxBolas;
        this.obj.classList.add('tubo');

        this.obj.corRequerida = cor;
        this.obj.style.borderColor = cores[cor];
        this.obj.style.backgroundColor = cores[cor] + '20';

        this.obj.style.height = `calc(${maxBolas} * var(--bolaSize))`;

        mainGame.appendChild(this.obj);
    }

    // recebe uma lista de numeros
    gerarBolas(listaDeCores=[]) {
        listaDeCores.forEach(element => {
            let bola = new Bola(element);
            this.obj.appendChild(bola);
        });
        
    }
}



//   <div class='tubo' max={maxBalls} style={{height: 65*maxBalls}} onClick={Pegar}>
//             {listColor.map((cor, index) => (<Bolas color={cor} key={index}/>))}
//   </div>