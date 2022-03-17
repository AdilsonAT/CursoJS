let contador = 0;
console.log(contador++);
console.log(++contador);

console.log(contador--);
console.log(--contador);

contador += 2;
console.log(contador);
contador *= 2;
console.log(contador);
contador **= 2;
console.log(contador);

// NaN - Not a Number
const num1 = 10;
const num2 = parseFloat('5.2'); // ou number
console.log(num1 + num2);
console.log(typeof num2);