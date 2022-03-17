//
// Para function
function funcao(){
    console.log(arguments);
    let total = 0;
    for(let argumento of arguments){
        total += argumento;
    }
    console.log(total);
}
funcao(1, 2, 3, 4 ,5 , 6);
//
function funcao2(){
    console.log(arguments);
}
funcao2('argumentos', 1, 2, 3, 4 ,5 , 6);
//
function funcao3(a, b, c){
    console.log(a, b, c, arguments);
    let total = 0;
    for(let argumento of arguments){
        total += argumento;
    }
    console.log(total);
}
funcao3(1, 2, 3, 4 ,5 , 6);
//
function funcao4(a, b, c, d, e, f){
    console.log(a, b, c, d, e, f);
}
funcao4(1, 2, 3);
//
function funcao5(a, b=0, c=0, d=0){
    // b = b || 0
    console.log(a+b+c+d);
}
funcao5(2, 10);
funcao5(2, undefined, 20)
//
function funcao6({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade, arguments);
}
let rt ={nome:'Rose',sobrenome:'Tyler',idade:'19'};
funcao6({nome:'Rose',sobrenome:'Tyler',idade:'19'});
funcao6(rt);
//
function funcao7([valor1, valor2, valor3]){
    console.log(valor1, valor2, valor3, arguments);
}
funcao7(['Rose', 'Tyler', '19']);
//
function conta(operador, acumulador, ...numeros ){
    for(let numero of numeros){
        if (operador==='+') acumulador += numero;
        if (operador==='-') acumulador -= numero;
        if (operador==='*') acumulador *= numero;
        if (operador==='/') acumulador /= numero;
    }
    console.log(acumulador);
}
conta('+', 0, 20, 30, 40, 50)
//
const conta2 = function(operador, acumulador, ...numeros ){
    for(let numero of numeros){
        if (operador==='+') acumulador += numero;
        if (operador==='-') acumulador -= numero;
        if (operador==='*') acumulador *= numero;
        if (operador==='/') acumulador /= numero;
    }
    console.log(acumulador);
}
conta2('+', 0, 20, 30, 40, 50)
//
const conta3 = (operador, acumulador, ...numeros ) => {
    for(let numero of numeros){
        if (operador==='+') acumulador += numero;
        if (operador==='-') acumulador -= numero;
        if (operador==='*') acumulador *= numero;
        if (operador==='/') acumulador /= numero;
    }
    console.log(acumulador);
    console.log(arguments);
}
conta3('+', 0, 20, 30, 40, 50)