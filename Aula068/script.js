class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }
    aumentarVolume(){   // método de instância
        this.volume += 2;
    }
    diminuirVolume(){   // método de instância
        this.volume -= 2;
    }
    static trocaPilha(){
        console.log('Trocar pilha.');
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
console.log(controle1);
ControleRemoto.trocaPilha();