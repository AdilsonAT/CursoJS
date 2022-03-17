
// let tem escopo de bloco {}
// var só tem escopo de função

const verdadeira = true;
let nome = 'Doctor'; // criando
var nome2 = 'Rose'; // criando
console.log(nome, nome2);
if (verdadeira) {
    let nome = 'Doctor Who'; // criando
    var nome2 = 'Rose Tyler'; // redeclarando
    console.log(nome, nome2);
    if (verdadeira) {
        let nome = 'Doctor Who nine'; // criando
        var nome2 = 'Rose Tyler Bad Wolf'; // redeclarando
        console.log(nome, nome2);
    }
    console.log(nome, nome2);
}
console.log(nome, nome2);



const data = new Date();
let diaSemana = data.getDay();
let diaSemanaTexto;
switch(diaSemana){
    case 0: diaSemanaTexto = 'Domingo'; break;
    case 1: diaSemanaTexto = 'Segunda'; break;
    case 2: diaSemanaTexto = 'Terça'; break;
    case 3: diaSemanaTexto = 'Quarta'; break;
    case 4: diaSemanaTexto = 'Quinta'; break;
    case 5: diaSemanaTexto = 'Sexta'; break;
    case 6: diaSemanaTexto = 'Sabado'; break;
    default: diaSemanaTexto = '';
}