
function criaPessoa(nome, sobrenome){
    return{
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    };
}
const p1 = criaPessoa('Doctor', 'Who');
console.log(p1.nomeCompleto);

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}
const p2 = new Pessoa('Doctor Who', 'nine');
const p3 = new Pessoa('Rose', 'Tyler');
console.log(p2);