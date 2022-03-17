//            -5        -4      -3          -2     -1  
//             0         1       2           3      4 
const nomes = ['Doctor', 'Rose', 'Bad Wolf', 'Ace', 'Romana'];
// nome.splice(indice inicial, qtd. delete, ins elem1, ins elem2, ins elem3)
const removidos = nomes.splice(4, 1);
// const removidos = nomes.splice(-2, Number.MAX_VALUE);
console.log(nomes, removidos, Number.MAX_VALUE);
const nomeA = nomes.splice(3, 0, 'Sara Jane');
console.log(nomes, nomeA);
nomes.splice(-1, 0, removidos);
console.log(nomes);

