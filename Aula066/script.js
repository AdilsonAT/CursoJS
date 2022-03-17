const velocidade = Symbol('velocidade');
class Carro {
    constructor(nome){
        this.nome = nome;
        this[velocidade] = 0;
    }
    set velocidade(valor){
        console.log('SETTER');
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[velocidade] = valor;
    }
    get velocidade(){
        console.log('GETTER');
        return this[velocidade];
    }
    acelerar(){
        if(this[velocidade]>=100) return;
        this[velocidade]++;
    }
    freiar(){
        if(this[velocidade]<=0) return;
        this[velocidade]--;
    }
}
const c1 = new Carro('Niva');
c1.velocidade = 1000;
console.log(c1);
for(let i=0; i<=200; i++){
    c1.acelerar();
}
console.log(c1);
console.log(c1.velocidade);