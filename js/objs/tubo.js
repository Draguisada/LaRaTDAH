

class Tubo {
<<<<<<< Updated upstream
    constructor(maxBolas, cor = 1, min = 0, maiorQue = 0) {
=======
    constructor(maxBolas, cor = 0, min = 0, maiorQue = 0) {
        
>>>>>>> Stashed changes
        this.obj = document.createElement('div');
        
        this.obj.maxBolas = maxBolas;
        this.obj.classList.add('tubo');

        this.obj.min = Math.min(min, maxBolas);

        this.obj.corRequerida = cor;
        this.obj.maiorQue = maiorQue;

        this.obj.style.borderColor = cores[cor];
        this.obj.style.backgroundColor = cores[cor] + '30';

        this.obj.style.height = `calc(${maxBolas} * var(--bolaSize))`;

        mainGame.appendChild(this.obj);
<<<<<<< Updated upstream
=======

        this.obj.setar = (listaDeCores=[]) => {
            this.obj.innerHTML = '';
            listaDeCores.forEach(element => {
                let bola = new Bola(element);
                this.obj.appendChild(bola);
            })};

        this.obj.statusAtualizar = () => {
            console.log()
            if (this.obj.childElementCount > this.obj.maxBolas) {
                this.obj.style.borderStyle = 'dotted';
            } else {
                this.obj.style.borderStyle = 'solid';
            }
        }
>>>>>>> Stashed changes
    }
    

    // recebe uma lista de numeros
    gerarBolas(listaDeCores=[]) {
        listaDeCores.forEach(element => {
            let bola = new Bola(element);
            this.obj.appendChild(bola);
        });
<<<<<<< Updated upstream
        
    }
=======
    }   
>>>>>>> Stashed changes
}



//   <div class='tubo' max={maxBalls} style={{height: 65*maxBalls}} onClick={Pegar}>
//             {listColor.map((cor, index) => (<Bolas color={cor} key={index}/>))}
//   </div>