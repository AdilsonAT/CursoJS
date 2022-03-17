/*
// new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    // __proto__ -> Object.prototype
};
const objB = {
    chaveB: 'B'
}
const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objA)

console.log(objB, objB.chaveA);
*/

function Produto(nome, preco){
    this.name = nome;
    this.preco = preco;
}
Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100) );
};
Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100) );
};

const p1 = new Produto('Camiseta', 50);
console.log(p1);
p1.desconto(10);
console.log(p1);

const p2 = {
    nome: 'Caneca',
    preco: 15
};
Object.setPrototypeOf(p2, Produto.prototype);
p2.aumento(10);

const p3 = Object.create(Produto.prototype, {
    tamanho: {
        writable: true,
        enumerable: true,
        value: 100
    },
    preco: {
        writable: true,
        enumerable: true,
        value: 12345
    },
});
