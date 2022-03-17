/*
const mod1 = require('./mod1');
console.log(mod1);
console.log(mod1.falaNome());
*/

/*
const {nome, sobrenome, falaNome} = require('./mod1');
console.log(falaNome());
*/

const {Pessoa} = require('./mod1');
const p1 = new Pessoa("Rose Tyler");
console.log(p1, p1.nome);