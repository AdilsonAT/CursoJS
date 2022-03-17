let umaString = "Um \"texto\" e uma \\barra";

console.log(umaString);
console.log(umaString[0]);
console.log(umaString.charAt(0));
console.log(umaString.concat(' ', 'em', ' ', 'texto'));
console.log(umaString.indexOf('texto', 3));
console.log(umaString.lastIndexOf('o'));
console.log(umaString.match(/[a-z]/g));
console.log(umaString.match(/[a-z]/));
console.log(umaString.replace('uma', 'outra'));
console.log(umaString.length);
console.log(umaString.slice(4, 9));
console.log(umaString.split(' '));
console.log(umaString.toUpperCase());