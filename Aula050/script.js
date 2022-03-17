//Filter
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => valor * 2);
console.log(numerosEmDobro);

const pessoas = [
    {nome:'Luiz', idade:52},
    {nome:'Maria', idade:23},
    {nome:'Eduardo', idade:55},
    {nome:'Rosana', idade:19},
    {nome:'Wallace', idade:47},
]
const nomes = pessoas.map(function(obj){return obj.nome;});
console.log(nomes);
const idades = pessoas.map(function(obj){
    delete obj.nome;
    return obj;
})
const idades2 = pessoas.map(obj => ({idade: obj.idade}))
console.log(idades2);
const comIds = pessoas.map(function(obj, indice){
    const newObj = {...obj};
    newObj.id = indice + 1;
    return obj;
});
console.log(comIds)