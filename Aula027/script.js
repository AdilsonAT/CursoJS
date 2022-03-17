// for clássico - geralmente em iteráveis (array ou strings)
// for in - retorna o indice ou chave (strings, array ou objetos)
// for of - retorna o valor (iteráveis, arrays ou strings)

for (let i=0; i<=5; i++){           // i+=10
    const par = i % 2 === 0 ? 'par' : 'impar'; // const par = i % 2 === 0;
    console.log(`Linha ${i}, ${par}`);
};
// ------------------------------
const frutas = ['Maça', 'Pêra', 'Uva'];
for (let i=0; i<frutas.length; i++){
    console.log(frutas[i]);
};
for (let i in frutas){
    console.log(frutas[i]);
}
// ------------------------------
const pessoa = {
    nome: 'Rose',
    sobrenome: 'Tyler',
    idade: '19'
}
const chave = 'nome';
console.log(pessoa[chave]);
for (let i in pessoa){
    console.log(i, pessoa[i]);
}
// ------------------------------
const nome = 'Rose Tyler Bad Wolf';
for (let valor of nome){
    console.log(valor)
}
const dw = ['Doctor', 'Rose', 'Tardis'];
for (let per of dw){
    console.log(per);
}
dw.forEach(function(el, i, array){
    console.log(el, i, array);
})