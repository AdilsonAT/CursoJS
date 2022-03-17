const pessoa = {
    nome: 'Doctor',
    sobrenome: 'Who'
}
console.log(pessoa.nome, pessoa.sobrenome);
console.log(pessoa['nome'], pessoa['sobrenome']);
const chave = 'nome';
console.log(pessoa[chave]);

const pessoaN = new Object();
pessoaN.nome = 'Rose';
pessoaN.sobrenome = 'Tyler';
pessoaN.idade = 19;
console.log(pessoa, pessoaN);
pessoaN.falarNome = function(){
    return (`${this.nome} está falando seu nome`);
};
pessoaN.getDataNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear - this.idade;
};
console.log(pessoaN.falarNome());
console.log(pessoaN.getDataNascimento());
pessoaN.falarNome();
delete pessoaN.nome;
console.log(pessoaN);

for (let chave in pessoaN){
    console.log(pessoaN[chave]);
}