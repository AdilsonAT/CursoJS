function saudacao(nome){
    return `Bom dia ${nome}!`;
}

function soma(x=0, y=0) {
    const resultado = x + y;
    return resultado;
}

const variavel = saudacao('Adilson');
console.log(variavel);

const resultado = soma(2, 2);
console.log(resultado);

const anonima = function (n) {
    return n ** 0.5;
};

console.log(anonima(5));