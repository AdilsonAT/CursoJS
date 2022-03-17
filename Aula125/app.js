/*
const multiplicacao = require('./mod');
console.log(multiplicacao(2,4));
*/

const cao = require('./mod'); //    ./ mesma pasta, ../ volta uma pasta, ../../ volta duas pastas
const caozinho = new cao('k9');
caozinho.latir();

const path = require('path');
console.log(path);
console.log(path.resolve(__dirname, '..', '..', 'arquivos', 'imagens'));
console.log(__filename, '      ', __dirname);