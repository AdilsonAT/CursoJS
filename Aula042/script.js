// Função construtora -> objetos
//                          new
//                          primeira letra em maiusculo
// Funcão fabrica -> objetos
function Pessoa(nome, sobrenome){
    // Atributos / métodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = function(){
        console.log(this.nome + ': sou um método');
    }
    // Atributo privado
    const id = 123456;
}
const p1 = new Pessoa('Rose', 'Tyler');
const p2 = new Pessoa('Doctor Who', 'nine');
console.log(p1.metodo());
console.log(p1.id);
