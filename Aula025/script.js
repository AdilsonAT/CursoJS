let a = 'A';
let b = 'B';
let c = 'C';

const numeros = [1, 2, 3];
[a, b, c] = numeros;

console.log(a, b, c);

const numeros2 = [1, 2, 3, 4, 5 , 6, 7, 8, 9];
const [pri, seg, ...resto] = numeros2;
console.log(pri, seg, resto);

const [um, , tres, , cinco, , sete] = numeros2;
console.log(um, tres, cinco, sete);

const numeros3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(numeros3[1][2]);
const[,[,,seis]] = numeros3;
console.log(seis);