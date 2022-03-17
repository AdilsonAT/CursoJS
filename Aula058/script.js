// Copiar objetos
const produto = {nome: 'Caneca', preco: 1.8};
const outraCoisa = produto;
outraCoisa.nome = 'colher';
console.log(produto, outraCoisa);

const produto2 = {nome: 'Caneca', preco: 1.8};
const outraCoisa2 = {...produto, material: 'Prata'};
outraCoisa2.nome = 'colher';
console.log(produto2, outraCoisa2);

const produto3 = {nome: 'Caneca', preco: 1.8};
const outraCoisa3 = Object.assign({}, produto, {material: 'Prata'});
outraCoisa2.nome = 'colher';
console.log(produto3, outraCoisa3);

//
console.log(Object.keys(produto));

//
Object.freeze(produto3);
produto3.nome = 'Outro produto';
console.log(produto3);

//
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable:false
});
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));


console.log(Object.values(produto));
for(let [chave, valor] of Object.entries(produto)){
    console.log(chave, valor);
}