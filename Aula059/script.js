// construtora - molde (classe)
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome+' '+this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function(){  // por performance preferir definir prototype
    return this.nome+' '+this.sobrenome
}

// instancia
const pessoa1 = new Pessoa('Doctor Who', 'Nine'); // <- Pessoa = Função construtora
const pessoa2 = new Pessoa('Rose', 'Tyler');
const data = new Date(); // <- Date = Função construtora

console.dir(pessoa1);
console.dir(pessoa2);
console.dir(data);

console.log(Pessoa.prototype);
console.log(Date.prototype);