class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }


    // Metodo de instancia
    aumentarVolume() {
        if (this.volume >= 30) return;
        this.volume += 2;
    }
    diminuirrVolume() {
        if (this.volume <= 0) return;
        this.volume -= 2;
    }


    // Metodo estatico
    static trocaPilha() {
        console.log('pilha trocada')
    }

    static soma(x, y) {
        return console.log(x + y);
    }

}

const controle1 = new ControleRemoto('LG')

// for (let i = 0; i < 50; i++) {

//     controle1.diminuirrVolume();
//     console.log(controle1)

// }


ControleRemoto.trocaPilha();
ControleRemoto.soma(2, 4);