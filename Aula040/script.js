// IIFE - immediately invocked function expression
// não alcança o escopo global
(function(x1, x2){
    const nome = 'Rose Tyler';
    console.log(nome);
})(1, 2);
const nome = 'Doctor Who';
console.log(nome);
