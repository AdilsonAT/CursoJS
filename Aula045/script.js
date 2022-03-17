// const nomes = ['Doctor', 'Rose', 'Bad Wolf'];
const nomes = new Array('Doctor', 'Rose', 'Bad Wolf', 'Ace', 'Amy', 'Romana');
nomes[3] = 'Sara Jane';
console.log(nomes);
delete nomes[3];
console.log(nomes);
const novo = nomes;
novo.pop();
console.log(nomes);
const novao = [...nomes];
const removido = novao.pop();
console.log(nomes, novao);
console.log(nomes.length, removido);
novao.shift();
console.log(novao);
novao.push('Dona');
console.log(novao);
novao.unshift('doctor');
console.log(novao);
const fatia = nomes.slice(1, 3)
console.log(fatia);
const fatia2 = nomes.slice(1, -2)
console.log(fatia2);
const nomeR = 'Rose Tyler Bad Wolf';
const nomeA = nomeR.split(' ');
console.log(nomeA);
const nomeJ = nomeA.join(' ');
console.log(nomeJ);