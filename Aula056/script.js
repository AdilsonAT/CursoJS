function Produto(nome, preco, estoque) {
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a classe
        value: estoque, // valor
        writable: false, // pode alterar
        configurable: false // configuravel
    })
    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a classe
            value: nome, // valor
            writable: true, // pode alterar
            configurable: true // configuravel
        },
        preco: {
            enumerable: true, // mostra a classe
            value: preco, // valor
            writable: true, // pode alterar
            configurable: true // configuravel
        },
    });
}
const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 50000;
delete p1.estoque;
console.log(p1);
console.log(Object.keys(p1));
for(let chave in p1){
    console.log(chave);
}