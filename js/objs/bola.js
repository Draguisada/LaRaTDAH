

class Bola {
    constructor(cor) {
        this.obj = document.createElement('div');
        
        this.obj.cor = cor;
        this.obj.classList.add('bola');
        this.obj.style.backgroundColor = `${cores[cor]}`;
        this.obj.innerHTML = `<p>${cor}</p>`;

        return this.obj;
    }
}

// aaa