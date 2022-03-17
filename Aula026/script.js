const pessoa = {
    nome: 'Rose',
    sobrenome: 'Tyler',
    idade: 19,
    endereco: {
        rua: 'Chesterfield',
        numero: 6
    }
}
// Atribuição via desetruturação
const {nome = 'Não existe', idade} = pessoa;
const {nome: tn, sobrenome} = pessoa;
const {endereco:{rua}, endereco} = pessoa
const {nomeSep, ...resto} = pessoa;
console.log(nome, tn, sobrenome, idade, rua, endereco, resto);