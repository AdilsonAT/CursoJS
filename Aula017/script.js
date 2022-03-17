const array = [1, 2, 3];
array.push(4);
// não pode array = 'Outra';

// Objetos
const pessoa = {
    nome: 'Doctor',
    sobrenome: 'Who primeiro',
    idade: 40,

    fala() { console.log(`${this.nome} ${this.sobrenome}. Minha idade atual é ${this.idade}`)},
    incrementaIdade() { this.idade++;}
}

console.log(pessoa.nome);
pessoa.fala();

function criaPessoa (nome, sobrenome, idade) {
    return {nome: nome, sobrenome:sobrenome, idade:idade}
}

const pessoa1 = criaPessoa('Doctor', 'Who', 'Primeiro');
console.log(pessoa1);