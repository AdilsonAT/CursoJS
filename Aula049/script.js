//Filter
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
/*
function callbackFilter(valor, indice, array){
    if(valor>10){return true;}
    else{return false;}   
}
*/
function callbackFilter(valor){return valor>10}
const numerosFiltrados = numeros.filter(callbackFilter);
console.log(numerosFiltrados);
const numerosFiltrados2 = numeros.filter(function(valor){return valor>10;});
console.log(numerosFiltrados2);
const numerosFiltrados3 = numeros.filter((valor)=>{return valor>10;});
console.log(numerosFiltrados3);
const numerosFiltrados4 = numeros.filter(valor=>valor>10);
console.log(numerosFiltrados4);
const numerosFiltrados5 = numeros.filter((valor,indice,array)=>{
    console.log(valor, indice, array);
    return valor>10;
});
console.log(numerosFiltrados5);

const pessoas = [
    {nome:'Luiz', idade:52},
    {nome:'Maria', idade:23},
    {nome:'Eduardo', idade:55},
    {nome:'Rosana', idade:19},
    {nome:'Wallace', idade:47},
]
const pessoasComNomeGrade = pessoas.filter(function(obj){
    return obj.nome.length>=5;
});
console.log(pessoasComNomeGrade);
const pessoasComMaisDeCinquentAnos = pessoas.filter(obj => obj.idade>=50);
console.log(pessoasComMaisDeCinquentAnos);
const nomeTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(nomeTerminaComA);