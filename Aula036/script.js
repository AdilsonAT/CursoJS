//
// return
function soma(a,b){
    return a+b;
};
console.log(soma(5,2));
//
function criaPessoa(nome, sobrenome){
    return{nome, sobrenome};    // return{nome: nome, sobrenome: sobrenome}
}
//
function falaFrase(comeco){
    function falaResto(resto){
        return comeco+' '+resto;
    }
    return falaResto
}
const olaMundo = falaFrase('Olá');
console.log(olaMundo, typeof olaMundo)
console.log(olaMundo('mundo!'));
//
function criaMultiplicador(multiplicador){
    return function (n){
        return n*multiplicador
    }
}
const triplica = criaMultiplicador(3);
console.log(triplica(2));